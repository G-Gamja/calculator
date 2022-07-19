<script lang="ts">
     import {
        SearchenginBrand
  } from "svelte-awesome-icons";
    export let buttontext : string;
    // 애로우펑션
    export let onClick : ()=> void;
    export let color:'green'| 'dark-grey';
    // export let classs: object;
    </script>

    <div class="ovalButton" 
  
    data-text = {buttontext} data-color={color} on:click={()=> onClick()}>
        <button aria-label="search" aria-haspopup="true" aria-controls="ActionMenu" id="qa-CREATE_NOTE"  type="button">
            
            <slot name="leftsubicon">
            </slot>
            <div style="color: white; font-size:large ">{buttontext}</div>
            <slot name="rightsubicon">
                <span></span>
            </slot>
        </button>       
    </div>


    <style lang="scss">
    button{
        background-color: transparent;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        
    }
     .ovalButton{
    /* margin: 20px;
    box-sizing: content-box; */

    border-radius: 40px;
    justify-content: start;
    align-items: center;
    width: 200px;
    height: 40px;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    &[data-color='green']{
        background-color: green;
    }
    &[data-color='dark-grey']{
        background-color: darkgray;
    }
    border: 0px solid;
    color: white;   
    
}
    </style>