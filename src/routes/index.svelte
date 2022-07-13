<script lang="ts">
    import {Button} from '@src/components/button'
import { each, text } from 'svelte/internal';
let v: string = "sihun";
const s: number = 10;
const textNumbers: string[] = 
['1','2','3','4','5','6','7','8','9','0'];
</script>

<div>
    {#each textNumbers as text}
        <Button {text}  color="orange" onClick={(value)=> alert(value)}/>
    {/each}
</div>
<div>
    hi
</div>
<style lang="scss">
    .frame{
        width: 500px;
        display: flex;
        flex-wrap: wrap;
    }
</style>
