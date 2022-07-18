<script lang="ts">
export let text : string;
// 애로우펑션
export let onClick : (value: string)=> void;
export let color: 'orange'| 'grey'| 'dark-grey';
export let size: 'small'| 'big';
</script>
<div class="button" data-size={size}
data-color={color} on:click={()=> onClick(text)}>{text}</div>
<style lang="scss">
 .button{
    &[data-size='small']{
        width: 80px;
        height: 80px;
    }
    &[data-size='big']{
        width: 320px;
        height: 80px;
    }
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 24px;


    &[data-color='orange']{
        background-color: orange;
    }
    &[data-color='grey']{
        background-color: gray;
    }
    &[data-color='dark-grey']{
        background-color: darkgray;
    }
 }
</style>