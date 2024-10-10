<script>
  export let name;
  export let type;
  export let required;
  export let placeholder;
</script>

<input class="input" {name} {required} {placeholder} {type} />

<style>
  .input {
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 10px;
    border: 0.5px;
    border-style: solid;
    border-color: #8d8c8c;
    width: 100%;
    box-sizing: border-box;
  }
</style>
