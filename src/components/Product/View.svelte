
<script>
  import { onMount } from 'svelte';

  // objects
  export let productId
  let product = {}
  let media

	onMount(() => {
    media = window.location.host

    // navigation request
    fetch(`./media/${media}/products/${productId}/data.json`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(r => r.json())
      .then(value => {
        console.log('product:', value)
        product = value
      })
  })
</script>

hello product view {JSON.stringify(product, null, 2)}