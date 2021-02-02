
<script>
  import { onMount } from 'svelte';

  // objects
  export let categoryId
  let products = []
  let media

	onMount(() => {
    media = window.location.host

    // navigation request
    fetch(`./media/${media}/categories/${categoryId}.json`, {
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
        products = value
      })
  })
</script>

hello list products {JSON.stringify(products, null, 2)}