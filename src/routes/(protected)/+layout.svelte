<script>
  import Sidebar from "../../components/sidebar/Sidebar.svelte";
</script>

<div class="div-root">
  <Sidebar />
  <slot></slot>
</div>

<style>
  .div-root {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    border-width: 10px 10px 10px 0px;
    border-color: #0b0b0b;
    border-style: solid;
  }
</style>
