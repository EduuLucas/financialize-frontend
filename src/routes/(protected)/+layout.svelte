<script lang="ts">
  import Sidebar from "../../components/sidebar/Sidebar.svelte";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="div-root">
  <Sidebar />
  {@render children?.()}
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
