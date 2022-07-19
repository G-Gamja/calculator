<script lang="ts">
export let onClick : ()=> void;
</script>
<button on:click={()=> onClick()}>
    <slot name="icon">
        <span></span>
    </slot><slot name="text">
        <span></span>
    </slot>
</button>

<style lang="scss">

    button{
        
    width: 120px;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    background-color: #404040;
    display: flex;
    flex-direction: row;
    
  justify-content: center;
  align-items: center;
  border: 0px solid;

 }
</style>