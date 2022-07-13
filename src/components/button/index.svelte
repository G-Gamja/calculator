<script lang="ts">
export let text : string;
// 애로우펑션
export let onClick : (value: string)=> void;
export let color: 'orange'| 'grey'| 'dark-grey';
</script>
<div class="button" data-color={color} on:click={()=> onClick(text)}>{text}</div>
<style lang="scss">
 .button{
    width: 80px;
    height: 80px;
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