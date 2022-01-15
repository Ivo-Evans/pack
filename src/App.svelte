<script>
	import pack from "./pack";
  import { NUMBER_OF_PARTICIPANTS } from "./settings";
  import Stream from "./Stream.svelte"

const participants = new Array(NUMBER_OF_PARTICIPANTS).fill(null).map((_, index) => String.fromCharCode(index + 65))
  let screenX = 605
  let screenY = 556
  let usersToDisplay = [];

  $: {
    const { streamDimensions, numberOfParticipants} = pack({x: screenX, y: screenY}, participants.length)
    usersToDisplay = new Array(numberOfParticipants).fill(null).map((_, index) => ({...streamDimensions, name: participants[index]}))
  }

</script>

<main>
  <div bind:clientWidth={screenX} bind:clientHeight={screenY}>
      {#each usersToDisplay as {x, y, name} (name)}
        <Stream {x} {y} {name} />
      {/each}
  </div>
</main>

<style>
  main {
    background-color: tomato;
    padding: 50px;
    min-height: 100vh;
    max-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  div {
    flex-grow: 1;
    background-color: white;
    max-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
