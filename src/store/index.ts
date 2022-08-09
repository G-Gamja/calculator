import axios from 'axios';
import _ from 'lodash';
import { onMount } from 'svelte';
import { writable } from 'svelte/store';

// 백엔드 참고자료: https://gmlwjd9405.github.io/2018/12/25/difference-dao-dto-entity.html

export interface dataModel {
	denom: string;
	timestamp: number;
	price: number;
	marketCap: number;
	dayVolume: number;
}
export let fetchDataList = writable<dataModel[]>([]);

//날짜 바꾸기용 콜백함수
function datechange(date: number){
	return 'https://dashboard-mintscan.s3.ap-northeast-2.amazonaws.com/research/market/'+ date +'.csv' ;
}
export async function getMethod(dateVal: 7|30) {
	const data = (
		await axios.get(
			datechange(dateVal)
		)
	).data;
	console.log(data);
	const fetchData = _(data.split('\n'))
		.drop(1)
		.map((element) => {
			let afterSplit = element.split(',');
			return {
				denom: afterSplit[0],
				timestamp: Number(afterSplit[1]),
				price:  Number(afterSplit[2]),
				marketCap:  Number(afterSplit[3]),
				dayVolume: Number(afterSplit[4])
			} as dataModel;
		}).value();
		fetchDataList.set(fetchData);
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
export function hi() {
	console.log('hello');
}
