<script lang="ts">
     import {
        SearchenginBrand
  } from "svelte-awesome-icons";

    // 애로우펑션
    export let onClick : ()=> void;
    export let color:'white'|'green'| 'dark-grey';
    </script>

    <div class="iconButton" data-color={color} on:click={()=> onClick()}>
        <button  aria-label="search" aria-haspopup="true" aria-controls="ActionMenu" id="qa-CREATE_NOTE"  type="button">
            <slot name="leftsubtext">
                <span></span>
            </slot>
            <slot name="mainicon" style="color: {color}">
                <span></span>
            </slot>
            <slot name="rightsubtext">
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
     .iconButton{
    /* margin: 20px;
    box-sizing: content-box; */

    // border-radius: 40px;
    
    justify-content: start;
    // align-items: center;
    // width: 200px;
    // height: 40px;
    display: flex;
    // flex-direction: row;
    // margin-top: 20px;
    // &[data-color='white']{
    //     color: white;
    // }
    // &[data-color='green']{
    //     color: green;
    // }
    // &[data-color='dark-grey']{
    //     color: darkgray;
    // }
    color: antiquewhite;
    border: 0px solid;
    color: white;   
    
}
    .iconButton:hover{
        background-color: aqua;
    }
    </style>