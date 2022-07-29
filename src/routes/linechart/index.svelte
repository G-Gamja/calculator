<script lang="ts">
	import { SvgRect } from '@src/components/svgComponents';
	import { BarItem } from '@src/components/baritem';

	// const numbers: number[] = [4, 3, 3, 4, 5, 6, 6, 6, 6, 6, 6,7];
	//const numbers: number[] = [4, 3, 1, 2, 7];
	let numbers: any[] = [];
	let ulala = [
		{ name: 'mon', val: 4, color: 'purple' },
		{ name: 'tue', val: 3, color: 'pink' },
		{ name: 'wed', val: 1, color: 'blue' },
		{ name: 'thr', val: 2, color: 'yellow' },
		{ name: 'fri', val: 7, color: 'brown' }
		,
		{ name: 'sat', val: 5, color: 'skyblue' }
	];
	for (let index = 0; index < ulala.length; index++) {
		numbers[index] = ulala[index].val;
		
	}
	// let obj1 = { id: 1, name: 'Mark', age: 30, country: "USA" };
	//get max, min value
	let maxVal = Math.max(...numbers);
	let minVal = Math.min(...numbers);

	let titlet: string = 'barchart example';
	let barColor: string = 'pink';
</script>
<SvgRect></SvgRect>
<style lang="scss">
</style>
