<script lang="ts">
	import { BarChart } from '@src/components/barchart';
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

<BarChart title={titlet} color={barColor} max={maxVal} {numbers}>
	<!-- <span slot="chartitem"> -->

	<!-- {#each numbers as numberval}
	<BarItem numberval={numberval} color={barColor} max={maxVal} min={minVal} />
	{/each} -->

	{#each ulala as item}
		<BarItem
			numberval={item.val}
			nameVal={item.name}
			color={item.color}
			max={maxVal}
			min={minVal}
		/>
	{/each}

	<!-- </span> -->
</BarChart>

<!-- {#each ulala as ulala.keys}
	
			<BarItem
				{numberval}
				color = {barColor}
				
			/>
		{/each} -->
<style lang="scss">
</style>
