<script>
  export let linkTo;
</script>

<a class="box" href={linkTo}>
  <slot></slot>
</a>

<style>
  a {
    color: #3e3e3e;
    text-decoration: none;
  }
  .box {
    padding: 10px;
    width: 3vh;
    height: 3vh;
    border: 0px;
    background-color: #0b0b0b;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 15px;
  }
  .box:hover {
    transform: scale(1.2);
  }
</style>
