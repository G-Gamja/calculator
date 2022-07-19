<script lang="ts">
	export let widthVal: string;
    export let heightVal: string;

	// 애로우펑션
	// export let onClick: () => void;
	// export let color: 'green' | 'dark-grey';
	// export let classs: object;
</script>

<div class="rec_container" data-size-width={widthVal} data-size-height={heightVal}/>

<style lang="scss">
	.rec_container {
		position: absolute;
		top: 100px;
		left: 300px;
		z-index: 3;
		width: 700px;
		height: 400px;
		background-color: #333;
		border-radius: 10px;
	}
</style>
