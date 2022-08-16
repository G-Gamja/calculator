<script lang="ts">
	import { getMethod, fetchDataList, denomList, selectCoin, coinPriceList } from '@src/store';
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	let dayString: number;
	let coinName: string;

	let eleRoot: HTMLDivElement;
	let eleHeight: number;
	let eleWidth: number;

	//d3라이브러리 참고자료
	//https://codelib.tistory.com/9

	//https://svelte.dev/repl/8262eb73a08f48adba8e0b706c1a939f?version=3.22.1

	//타입 스크립트 콘케네이션 테스트
	// function sihun(date: 10|30){
	// 	// return 'hi'+ {date};
	// 	console.log('h ffdi'+date);
	// }

	// sihun(10);

	//init메서드
	onMount(() => {
		getMethod(7);
		selectCoin('"acudos"');
		//테스트용 출력문
		//  console.log(fetchDataList);

		//? 왜 콘송을 안 찍으면 값을 못가져오지???
		console.log(denomList);
		console.log(eleWidth, eleHeight, eleRoot);
	});

	//이 안에 값이 변동되었을 경우 안에 있는 함수를 다시 실행하라..observer같은거임
	$: {
		console.log($fetchDataList);
	}
</script>

<div bind:this={eleRoot} bind:clientWidth={eleWidth} bind:clientHeight={eleHeight} />
<div class="scaffold">
	<div class="inner" />
</div>
<div class="header">
	<select bind:value={dayString} on:change={() => getMethod(dayString)}>
		<option value="7">7</option>
		<option value="30">30</option>
	</select>

	<select bind:value={coinName} on:change={() => selectCoin(coinName)}>
		{#each denomList as datad}
			<option value={datad}>{datad}</option>
		{/each}
	</select>
</div>
<div class="container">
	<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
		<path> </path>
	</svg>
	<!-- 드롭다운 데이터 바인딩 테스트용 출력 -->
	<p>{dayString}</p>
	<p>{coinName}</p>
	<p>{$coinPriceList}</p>
	<!-- 수동조작 테스트용  버튼-->
	<!-- <button onclick={getMethod(7)}> for test </button> -->
	{#each $fetchDataList as data}
		<p>
			denom: {data.denom} timestamp: {data.timestamp} price:{data.price} marketCap: {data.marketCap}
			dayVolume: {data.dayVolume}
		</p>
	{/each}
</div>

<style lang="scss">
	.header {
		position: fixed;

		top: 0;
		left: 0;
		border: solid 1px red;
		height: 60px;
		width: 300px;
		color: aqua;
		background-color: aquamarine;
	}
	.container {
		overflow: scroll;
		border: solid 1px red;
		margin-top: 60px;
		height: 100%;
		width: 100%;
	}
</style>
