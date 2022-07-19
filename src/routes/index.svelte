<script lang="ts">
	import { OvalButton } from '@src/components/ovalButton';
	import { IconButton } from '@src/components/iconButton';
	import { SquareButton } from '@src/components/squareButton';
	import { ScaffoldBox } from '@src/components/scaffoldBox';
	import { SearchenginBrand, ArrowDownSolid, CirclePlusSolid } from 'svelte-awesome-icons';
    let src = './images/forest.JPG';
	let userName: string='userName';
	let date: string='2022년 7월 11일 월요일';

</script>
<div class="main_container">
<div class="drawer">
	<div class="userProfile">
		<div class="profileImage">img</div>
		<div class="profileButton">
			Sihun
			<span class="material-symbols-outlined" />
		</div>
		<IconButton color="white" onClick={() => {}}>
			<span slot="rightsubtext" style="color: white;font-size:20px; margin-left:10px;">
				홈
			</span>
		</IconButton>
	</div>
	<OvalButton buttontext="search" color="green" onClick={() => {}}>
		<span slot="leftsubicon">
			<SearchenginBrand style="padding-left: 20px;padding-right: 20px;" />
		</span>
	</OvalButton>
	<OvalButton buttontext="새로만들기" color="dark-grey" onClick={() => {}}>
		<span slot="leftsubicon">
			<CirclePlusSolid style=" color: white; padding-left: 20px;padding-right: 20px;" />
		</span>

		<span slot="rightsubicon">
			<ArrowDownSolid style=" color: white" />
		</span>
	</OvalButton>
	
	<IconButton color="white" onClick={() => {}}>
		<span slot="mainicon" style="color: white;font-size:20px; margin-left:30px;">
			<ArrowDownSolid />
		</span>
		<span slot="rightsubtext" style="color: white;font-size:20px; margin-left:10px;">
			홈
		</span>
	</IconButton>
</div>
<div class="home_backgroundIMG">
	<div class="home_headLine">
	  <div>
		<p>안녕하세요 {userName} 님</p>
	  </div>
	  <div class="row">
		{date}
		<SquareButton  onClick={() => {alert('hi')}}>
			<span slot="icon" style="color: white;font-size:20px; margin-left:10px;">
				<SearchenginBrand style="padding-right: 10px;" />
			</span>
			<span slot="text" style="color: white;font-size:20px; margin-left:10px;">
				홈
			</span>
		</SquareButton>
	  </div>
	</div>
  </div>
</div>
<div class="rec_container">
	<div class="row">
		<IconButton color="white" onClick={() => {}}>
			<span slot="leftsubtext" style="color: white;font-size:20px; margin-left:10px;">
				노트
			</span>
			<span slot="mainicon">
				<SearchenginBrand style="padding-left: 5px;color:white;" />
			</span>
		</IconButton>
		<div class="row">

			<IconButton color="white" onClick={() => {}}>

				<span slot="mainicon">
					<SearchenginBrand style="padding-left: 5px;color:white;" />
				</span>
			</IconButton>
			<span class="tooltip-text">새노트</span>

		  <button class="no_back_button">
			<span class="material-symbols-outlined"> more_horiz </span>
		  </button>
		</div>
	</div>
</div>
<!-- <ScaffoldBox widthVal=400 heightVal=400 >
	

</ScaffoldBox> -->
<style lang="scss">
	.main_container{
    display: flex;
    flex-direction: row;
}
	.drawer {
		background-color: #404040;
		width: 200px;
		height: 100%;
		padding: 20px;
		width: 200px;
		height: 800px;
		font-size: 20px;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		color: white;
		border: red;
		justify-content: left;
		align-content: stretch;
		height: 600;
		border: solid;
		border-color: aliceblue;
	}
	:global(body) {
		background: #2e3440;
	}
	.userProfile {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.profileButton:hover {
		color: palegoldenrod;
	}
	.home_backgroundIMG{
    height: 250px;
	width: 100%;
	background-color: green;
    background-image: url(/Users/ahnsihhun/Documents/development_web/calculator/src/images/forest.JPG);
	
}
.home_headLine{
    margin-left: 30px;
    margin-right: 60px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;

}
.row{
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;
    justify-content: space-between;
  align-items: center;
}
.rec_container {
		padding: 10px;
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
