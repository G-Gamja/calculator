<script lang="ts">
	export let title: string;
	export let color: string;
	export let numbers: number[];
	export let max: number;
	let sorted: any[] = [];
	let legendVal: any[] = [];

	//값만 새로 복사해서 정렬된 값 얻기
	for (let index = 0; index < numbers.length; index++) {
		sorted[index] = numbers[index];
	}
	//맥스값에서 레전드 값 리스트 뽑아내기
	for (let index = 0; index <= max; index++) {
		let i = index;
		i--;
		legendVal[i] = index;
	}
	legendVal.reverse();
	sorted = sorted.reverse();
</script>

<div class="container" data-color={color}>
	<div class="title">
		<p>{title}</p>
	</div>
	<div class="item">
		<slot>
			<!-- <span></span> -->
		</slot>
	</div>
	<div class="legend">
		{#each legendVal as numberval}
		<div>{numberval}</div>
		{/each}
	</div>
	<div class="below">
		{#each sorted as numbervalue}
			<p>
				{numbervalue}
			</p>
		{/each}
	</div>
</div>

<style lang="scss">
	// p {
	// 	margin-bottom: 19px;
	// }
	.container {
		//css 변수화
		$aa : 48px;

		width: 800px;
		height: 600px;
		display: grid;
		grid-template-columns: 100px 1fr 1fr 1fr;
		grid-template-rows: 100px 200px 200px 100px;
		&[data-color='blue'] {
			background-color: lightgray;
		}

		// place-items: center center;
		grid-template-areas:
			'header header header header'
			'legend    item    item   item'
			'legend     item      item   item'
			' below  below below below';
		border: 3px solid black;
	}
	.legend {
		display: flex;
		flex-direction: column;
		grid-area: legend;
		background-color: aqua;
		border-color: black;
		border-right: 3px solid black;

		justify-content: space-around;

		// justify-items: flex-end;
		align-items: center;
	}
	.below {
	
		grid-area: below;
		display: flex;
		flex-direction: row;
		border-top: 3px solid black;
	}
	.title {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: large;
		// margin: 100px;
		grid-area: header;
		border-bottom: 3px solid black;
	}
	.item {
		display: flex;
		flex-direction: row;
		grid-area: item;
		justify-content: center;
		align-items: flex-end;
		// margin: ;
	}
</style>
