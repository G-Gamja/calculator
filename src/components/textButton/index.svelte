<script lang="ts">
	export let text: string;
	export let onClick: () => void;
    

</script>
<div class="cover">
<button class="nav_underbar_button" on:click={()=> onClick()}>
	{text}
	<div class="underBar" />
</button>
</div>
<style lang="scss">
    //텍스트위에서 호버해도 하단의 초록바가 보이도록 구현하는법
    .cover:hover{

    }
	.nav_underbar_button {
		background-color: transparent;
		color: white;
		border: 0;
		outline: 0;
	}
	.underBar {
		width: 40px;
		height: 5px;
		margin-top: 5px;
		border-radius: 10px;
		background-color: #00a82d;
	}
</style>
