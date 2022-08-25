import axios from 'axios';
import _ from 'lodash';
import { onMount } from 'svelte';
import { writable } from 'svelte/store';

// 백엔드 참고자료: https://gmlwjd9405.github.io/2018/12/25/difference-dao-dto-entity.html
//ff
export interface dataModel {
	denom: string;
	timestamp: number;
	price: number;
	marketCap: number;
	dayVolume: number;
}
export let fetchDataList = writable<dataModel[]>([]);
let sample = new Array;
let denomSet = new Set();
 export let denomList = new Array;
export let coinPriceList = writable<number[]>([]);

//날짜 바꾸기용 콜백함수
function datechange(date: number){
	return 'https://dashboard-mintscan.s3.ap-northeast-2.amazonaws.com/research/market/'+ date +'.csv' ;
}
export async function getMethod(dateVal: 7|30) {
	//http call
	const data = (
		await axios.get(
			datechange(dateVal)
		)
	).data;
	// console.log(data);
	const fetchData = _(data.split('\n'))
		.drop(1)
		.map((element) => {
			let afterSplit = element.split(',');

			//set to list 
			//https://cocoze.tistory.com/86
			denomSet.add(afterSplit[0]);
			denomList = [...denomSet];
		
			return {
				denom: afterSplit[0],
				timestamp: Number(afterSplit[1]),
				price:  Number(afterSplit[2]),
				marketCap:  Number(afterSplit[3]),
				dayVolume: Number(afterSplit[4])
			} as dataModel;
		}).value();
		fetchDataList.set(fetchData);
		sample = fetchData

		//set에서 list로 바꾸면서 생기는 문제같은데 왜 생기는지 잘 모르겠음
		//=> 애초에 데이터 값에 큰따옴표가 포함된거였다
		// for (let index = 0; index < denomList.length; index++) {
		// 	 denomList[index] = denomList[index].slice(1,-1);
		// }
		console.log(fetchDataList);

	//then으로...
	// axios
	// 	.get(urlString)
	// 	.then((Response) => {
	// 		console.log(Response.data);
	// 	})
	// 	.catch((Error) => {
	// 		console.log(Error);
	// 	});
}
function isDog(element: string)  {
	if(element === 'dog')  {
	  return true;
	}
  }
  
//filter 함수
//https://cocobi.tistory.com/123?category=909654
export function selectCoin(coin: string) {
	console.log(coin);

	//어레이 아닌거에 필터쓰면 다음과 같은 에러가 발생한다.
	//https://stackoverflow.com/questions/69016254/typeerror-cannot-read-properties-of-undefined-reading-filter-at-jasmine
	const coinPriceListf = sample.filter(coina => coina.denom == coin)
    .map(coina => coina.price)
	
	coinPriceList.set(coinPriceListf);
	console.log(coinPriceList);

}
