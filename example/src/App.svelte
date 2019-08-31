<script>
  let count = 1;
  const counter = {
    i: () => (count = count + 1),
    d: () => (count = count - 1)
  };
</script>

<style>
  :root {
    font-family: sans-serif;
  }
  div {
    text-align: center;
  }
  h2 {
    color: blue;
  }
  h3 {
    color: darkgoldenrod;
    font-size: 1.5rem;
  }
  button {
    background: transparent;
    cursor: pointer;
    border-radius: 4px;
    border: 0.25rem dashed salmon;
    font-size: 2rem;
    margin: 0 1rem;
  }
</style>

<div>
  <h1>Sample SVB App</h1>
  <h2>Behold, the almighty counter app!</h2>
  <h3>The count is currently {count}!</h3>
  <span>
    <button on:click={counter.i}>Increment</button>
  </span>
  <span>
    <button on:click={counter.d}>Decrement</button>
  </span>
</div>
