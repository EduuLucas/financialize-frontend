<script>
  export let type;
</script>

<button class="button text-white py-2 w-full bg-orange-600 rounded-lg cursoir-pointer hover:bg-orange-700" {type}>
  <slot></slot>
</button>