<script lang="ts">
	import { getMethod, fetchDataList } from '@src/store';
	import { onMount } from 'svelte';
	let dayString: number;
	//타입 스크립트 콘케네이션 테스트
	// function sihun(date: 10|30){
	// 	// return 'hi'+ {date};
	// 	console.log('h ffdi'+date);
	// }

	// sihun(10);

	//init메서드
	onMount(() => {
		getMethod(7);
	});
	function a() {}
</script>

<div class="header">
	<select bind:value={dayString} on:change="{() => getMethod(dayString)}">
		<option value=7>7</option>
		<option value=30>30</option>
	</select>
</div>
<div class="container">
	<!-- 드롭다운 데이터 바인딩 테스트용 출력 -->
	<p>{dayString}</p>
		<!-- 수동조작 테스트용  버튼-->
	<!-- <button onclick={getMethod(7)}> for test </button> -->
	{#each $fetchDataList as data}
		<p>
			denom: {data.denom} timestamp: {data.timestamp} marketCap: {data.marketCap} dayVolume: {data.dayVolume}
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
		height: 600px;
		width: 800px;
	}
</style>
