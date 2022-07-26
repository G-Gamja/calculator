<script lang="ts">
	export let color: string;
	//    export let value: number;
	export let numberval: number;
	export let nameVal: string;
	export let max: number;
	export let min: number;

	let per = (numberval / max) * 360;
	let widsize: number;
	if (max < 8) {
		widsize = 70;
	} else {
		widsize = 40;
	}
	//let perpx = String(per).concat('px')
</script>

<div>
	<div class="barChart" style=" --widSize:{widsize}; --theme-color: {color}; --size: {per}">
		<div class="valueText">
			{numberval}
		</div>
	</div>
	<div class="name">
		{nameVal}
	</div>
</div>

<style lang="scss">
	.barChart {
		width: calc(var(--widSize) * 1px);
		// height: var(per, 300px );
		height: calc(var(--size) * 1px);
		background-color: var(--theme-color);
		//  background-color: aqua;
		border-top-left-radius: 100px;
		border-top-right-radius: 100px;
		margin-right: 10px;
		margin-left: 10px;
		margin-top: 100px;
		border-top: 3px;
		transition: all 1s;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		//align-self: center;
	}
	.barChart:hover {
		width: 80px;
		// height: var(per, 300px );
		height: calc(var(--size) * 1px);
		background-color: black;
		//  background-color: aqua;
		border-top-left-radius: 100px;
		border-top-right-radius: 100px;
		margin-right: 10px;
		margin-top: 50px;
		border-top: 3px;
		.valueText {
			color: white;
		}
	}
	.valueText {
		font-size: 30px;
		color: transparent;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
	}
   .name{
      display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
   }
</style>
