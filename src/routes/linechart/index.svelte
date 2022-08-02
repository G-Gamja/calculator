<script lang="ts">
	import { SvgRect } from '@src/components/svgComponents';
	import { SvgLine } from '@src/components/svgComponents';

	// const numbers: number[] = [4, 3, 3, 4, 5, 6, 6, 6, 6, 6, 6,7];
	let numberList: number[] = [4, 3, 1,2,7];
	numberList.sort();
	numberList.reverse();
	//let numbers: any[] = [];
	let ulala = [
		{ name: '2008', val: 4, color: 'purple' },
		{ name: '2009', val: 3, color: 'grey' },
		{ name: '2010', val: 1, color: 'blue' },
		{ name: '2011', val: 2, color: 'yellow' },
		{ name: '2012%$', val: 7, color: 'brown' },
		// { name: 'sat', val: 5, color: 'skyblue' }
	];


	//get max, min value
	//질문: ulala에서 val값만 리스트로 뽑아서 쓰고 싶은데 반복문을 통해서 따로 뽑아내는 방법 이외로 무슨 방법이 있을까요?
	//ulala에서 키가 val 인 모든 밸류의 리스트를 추출할 수 있는 함수
	let maxVal = Math.max(...numberList);
	let minVal = Math.min(...numberList);

	let titlet: string = 'barchart example made by Eugene';
	let leftLegend: string = '가격';
	let rightLegend: string = '년도';

</script>

<SvgRect title={titlet} {leftLegend} {rightLegend}>
	
		<SvgLine numbers={ulala} max={maxVal} min={minVal}/>

</SvgRect>

<style lang="scss">
</style>
