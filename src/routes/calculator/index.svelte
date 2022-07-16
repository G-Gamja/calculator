<script lang="ts">
	import { Button } from '@src/components/button';
	import { each, text } from 'svelte/internal';
	let v: string = 'sihㅌㅊㅋㅌun';
	const s: number = 10;
	const textNumbers: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const initialize: string[] = ["A/C"]
	const ma: string[] = ["A/C"]

// 이벤트 감지
let m = { x: 0, y: 0 };

function handleMousemove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
//이벤트 감지

	let name = "world";
  function assign() {
    name = "test";
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
	<input type="checkbox" bind:checked="{yes}">
	Yes! Send me regular email spam
  </label>
  
  {#if yes}
	<p>Thank you. We will bombard your inbox and sell your personal details.</p>
  {:else}
	<p>You must opt in to continue. If you're not paying, you're the product.</p>
  {/if}
  
  <button disabled="{!yes}">
	Subscribe
  </button>
<div on:click|once={handleMousemove}>
	The mouse position is {m.x} x {m.y}
  </div>
  <!-- 인라인으로 핸들러 구현 -->
  <!-- <div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
	The mouse position is {m.x} x {m.y}
  </div> -->
<button on:click={assign}>assign</button>
<button on:click="{handleClick}">
	Clicked {count} {count === 1 ? 'time' : 'times'}
  </button>
<div class="result">{v}</div>
<div>
	{#each initialize as text}
		<Button
			{text}
			size="big"
			color="orange"
			onClick={(value) => {
				v = '';
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
					v = value;
				}}
			/>
		{/each}
	</div>
	
</div>

<style lang="scss">
	.frame {
		// height: 500px;
		width: 320px;
		display: flex;
		flex-direction: center;
		align-content: center;
		flex-wrap: wrap;
	}
	.back_container {
		background-color: aqua;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: center;
		align-content: center;
	}
</style>