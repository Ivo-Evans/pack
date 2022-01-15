<script>
  export let x = 0
  export let y = 0
  export let name = ""
</script>

<div style="width:{x + "px"}; max-width:{x + "px"}; min-width:{x + "px"}; height: {y + "px"}; max-height:{y + "px"}; min-height:{y + "px"};" class="stream">{
  name
}</div>

<style>
  .stream {
    background-color: lightslategray;
    border: 1px solid black;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
</style>