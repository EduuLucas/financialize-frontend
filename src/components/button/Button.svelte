<script>
  export let type;
</script>

<button class="button" {type}>
  <slot></slot>
</button>

<style>
  .button {
    color: white;
    text-decoration: none;
    padding: 10px 0px 10px 0px;
    width: 100%;
    background-color: #fe5733;
    border-radius: 10px;
    cursor: pointer;
    border: 0px;
  }
  .button:hover {
    transform: scale(1.05);
  }
</style>
