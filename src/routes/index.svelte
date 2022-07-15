<script lang="ts">
	import { Button } from '@src/components/button';
	import { each, text } from 'svelte/internal';
	let v: string = 'sihun';
	const s: number = 10;
	const textNumbers: string[] = ['1', '2', '3', '-', '4', '5', '6', '7', '8', '9', '0', '+'];
</script>
<div>이거는 에버노트페이지입니다</div>
<div class="result">{v}</div>
<div class="back_container">
	<div class="frame">
		{#each textNumbers as text}
			<Button
			size="small"
				{text}
				color="orange"
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
	}
</style>
