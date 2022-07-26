<script lang="ts">
	import { BarChart } from '@src/components/barchart';
	import { BarItem } from '@src/components/baritem';

	// const numbers: number[] = [4, 3, 3, 4, 5, 6, 6, 6, 6, 6, 6,7];
	const numbers: number[] = [4, 3, 1, 2,7];
	const colorList: string[] = ['red','yellow','pink','blue','black'];
	 let ulala= [{name: 'mon', val: 4} , {name: 'tue', val: 3} ,{name: 'wed', val: 1} ,{name: 'thr', val: 2},{name: 'fri', val: 7}];
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
		<BarItem numberval={item.val} nameVal={item.name} color={barColor} max={maxVal} min={minVal} />
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
