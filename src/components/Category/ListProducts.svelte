
<script>
  import { onMount } from 'svelte';

  // objects
  export let categoryId
  let items = []
  let media

	onMount(() => {
    media = window.location.host

    // navigation request
    fetch(`./media/${media}/products.json`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(r => r.json())
      .then(value => {
        console.log('products:', value)
        items = value.filter((value) => {
          return value.categoryId === categoryId
        })
      })
  })
</script>

hello list products {JSON.stringify(items, null, 2)}