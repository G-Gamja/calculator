<script lang="ts">
	import { Button } from '@src/components/button';
	import { each, text } from 'svelte/internal';
	//할당 자체가 새로 이뤄져야 화면이 갱신
	let resultVal: string = '0';
	const s: number = 10;
	const textNumbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
	const initialize: string[] = ['A/C'];
	const operator: string[] = ['+', '-', '*', '/', '='];
	function calculate(n1: string, operator: string, n2: string) {
		let result = 0;
		if (operator === '+') {
			result = Number(n1) + Number(n2); // '+'버튼을 눌렀을 때
		} else if (operator === '-') {
			result = Number(n1) - Number(n2); // '-'버튼을 눌렀을 때
		} else if (operator === '*') {
			result = Number(n1) * Number(n2); // '*'버튼을 눌렀을 때
		}
		if (operator === '/') {
			result = Number(n1) / Number(n2); // '/'버튼을 눌렀을 때
		}
		return String(result);
	}

	let operatorOn: boolean = false;
	let n1: string = '';
	let n2: string = '';
	let nowInput: string = '';
	let inputOperator: string;

	// 이벤트 감지
	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
	//이벤트 감지

	let name = 'world';
	function assign() {
		name = 'test';
	}

	//   $문법 쓰는법
	// 특정 변수가 변경됐을때 특정 함수를 실행하고 싶으시면
	// $:data, func(); 쓰시면 됩니다.
	let count = 0;

	$: if (count >= 10) {
		alert(`count is dangerously high!`);
		count = 9;
	}

	function handleClick() {
		count += 1;
	}

	//체크박스&데이터바인딩
	let yes = true;
</script>

<label>
	<input type="checkbox" bind:checked={yes} />
	Yes! Send me regular email spam
</label>

{#if yes}
	<p>Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
	<p>You must opt in to continue. If you're not paying, you're the product.</p>
{/if}

<button disabled={!yes}> Subscribe </button>
<div on:click|once={handleMousemove}>
	The mouse position is {m.x} x {m.y}
</div>
<!-- 인라인으로 핸들러 구현 -->
<!-- <div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
	The mouse position is {m.x} x {m.y}
  </div> -->
<button on:click={assign}>assign</button>
<button on:click={handleClick}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>
<div class="resultContainer">
	<div class="result">
		<p>
			{nowInput}
		</p>
		<!-- <div class="resultValue">{resultVal} </div> -->

		<!-- {operatorOn} {n1} {n2} {inputOperator} -->
	</div>
</div>

<div class="back_container">
	{#each initialize as text}
		<Button
			{text}
			size="big"
			color="orange"
			onClick={() => {
				resultVal = '0';
				n1 = '';
				n2 = '';
				inputOperator = '';
				operatorOn = false;
				nowInput = '';
			}}
		/>
	{/each}
</div>
<div class="back_container">
	<div class="frame">
		{#each textNumbers as text}
			<Button
				{text}
				size="small"
				color="grey"
				onClick={(value) => {
					console.log(operatorOn);
					if (operatorOn == false) {
						n1 = n1.concat(value);
						nowInput = n1;
					} else {
						n2 = n2.concat(value);
						nowInput = n2;
					}
				}}
			/>
		{/each}
	</div>
	<div class="frame2">
		{#each operator as text}
			<Button
				{text}
				size="small"
				color="orange"
				onClick={(value) => {
					if (value == '=') {
						if (resultVal != '0') {
							resultVal = calculate(resultVal, inputOperator, n2);
							nowInput = resultVal;
						} else {
							resultVal = calculate(n1, inputOperator, n2);
							nowInput = resultVal;
						}

						n2 = '';
					} else {
						inputOperator = value;
						operatorOn = true;
						nowInput = value;
					}
				}}
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	.frame {
		// height: 500px;
		width: 240px;
		display: flex;
		flex-direction: center;
		align-content: center;
		flex-wrap: wrap;
	}
	.frame2 {
		// height: 500px;
		width: 240px;
		display: flex;
		flex-direction: column;
		align-content: center;
		flex-wrap: nowrap;
	}
	.back_container {
		width: 100%;
		height: 100%;
		display: flex;
		//	justify-content: center;
		align-content: center;
	}
	.result {
		width: 320px;
		height: 80px;
		background-color: aqua;
		display: flex;
		flex-direction: center;
		justify-content: center;
		align-items: center;
		font-size: 45px;
	}
	.resultContainer {
		display: flex;
		flex-direction: center;
		//justify-content: center;
	}
</style>
