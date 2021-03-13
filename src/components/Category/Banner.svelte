
<script>
  import { onMount } from 'svelte';

  export let categoryId
  export let appId
  export let domainId
  export let state
  export let uploads
  
  // objects
  let image

	onMount(async () => {
    // get the products
    let esProducts = await scripts.store.categories.getOne(appId, categoryId)
    if (esProducts.payload.success === true) {
      image = esProducts.payload.data.image
    } else {
      alert(esProducts.payload.reason)
    }
    // console.log('category products', items)
  })
</script>

<div class="banner">
  {#if image}
    <div class="image" style={`background-image: url(https://rawcdn.githack.com/${uploads}/${domainId}/${state}/categories/${categoryId}/${image});`}></div>
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