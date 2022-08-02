<script lang="ts">
	import { Ns8Brand } from 'svelte-awesome-icons';

	// export let title: string;
	// export let color: string;

	export let max: number;
	export let min: number;

	export let numbers: any[] = [];

	let nSize = 0;
	let a = 0;

	let range: number[] = [];
	let x_pos: any[] = [];
	let y_pos: any[] = [];
	let y_pos2: any[] = [];
	let y_pos2_rev: any[] = [];
	let y_pos_rev: any[] = [];

	nSize = numbers.length;
	for (let index = 0; index < max; index++) {
		range[index] = min + index;
		
	}
	range.reverse();
	for (let index = 0; index < numbers.length; index++) {
		let a = index + 1;
		x_pos[index] = (610 * a) / (nSize + 1) + 90;
	}
	//origin
	for (let index = 0; index < numbers.length; index++) {
		let a = index + 1;
		y_pos[index] = (400 * a) / (nSize + 1) + 30;
	}

	for (let index = 0; index < range.length; index++) {
		let a = index + 1;
		y_pos2[index] = (400 * a) / (range.length + 1) ;
	}


	console.log(y_pos2);
	console.log(range);
	console.log(x_pos);
	console.log(y_pos);
	y_pos_rev = [...y_pos];
	y_pos2_rev = [...y_pos2];
	y_pos_rev.reverse();
	y_pos2_rev.reverse();
	console.log(y_pos_rev);
	console.log(numbers.length);

</script>

<svg class="graph">
	<g class="labels x-labels">
		{#each x_pos as item, idx}
			<text x={item} y="400" fill={numbers[idx].color}>{numbers[idx].name} </text>
		{/each}

	</g>
	<g class="labels y-labels">
		<!-- {#each y_pos as item, idx}
			<text x="80" y={item} fill={numbers[idx].color}>{range[idx]} </text>
		{/each} -->

		{#each range as item, idx}
		<text x="80" y={y_pos2[idx]} fill="black">{item} </text>
	{/each}

	</g>
	<g class="data" data-setname="Our first data set">
		{#each x_pos as item, idx}
			<circle cx={item} cy={y_pos2_rev[numbers[idx].val-1]} data-value="7.2" r="4" fill={numbers[idx].color} />
		{/each}

	</g>
	<g class="linedata">
		{#each x_pos as item, idx}
			{#if idx < x_pos.length-1}
				<line x1={x_pos[idx]} x2={x_pos[idx + 1]} y1={y_pos2_rev[numbers[idx].val-1]} y2={y_pos2_rev[numbers[idx+1].val-1]} />
			{/if}
		{/each}
	</g>
</svg>

<style lang="scss">
	.graph {
		margin-top: 100px;
		height: 500px;
		width: 800px;
	}
	.linedata {
		color: aqua;
	}
	.data {
		// fill: var(--color);
		stroke-width: 1;
	}
	.graph .labels.x-labels {
		text-anchor: middle;
	}
	.graph .labels.y-labels {
		text-anchor: end;
	}
	.labels {
		font-size: 13px;
	}
	.linedata {
		stroke: blue;
	}
</style>
