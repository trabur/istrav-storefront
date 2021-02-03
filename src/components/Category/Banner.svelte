
<script>
  import { onMount } from 'svelte';

  // objects
  export let categoryId
  let products = []
  let media
  let image

	onMount(() => {
    media = window.location.host

    // products
    fetch(`./media/${media}/data.json`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(r => r.json())
      .then(value => {
        let category = value.shopByCategory.filter((value) => {
          return value.slug === categoryId
        })[0]
        console.log('category:', category)
        image = category.image
      })
  })
</script>

<div class="banner">
  {#if image && media}
    <div class="image" style={`background-image: url(./media/${media}/${image});`}></div>
  {/if}
</div>


<style>
.image {
  width: 100%;
  height: 350px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0px 10px 10px -10px #000;
}

.banner {
  height: 350px;
  position: relative;
}
</style>