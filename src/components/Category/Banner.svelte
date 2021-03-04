
<script>
  import { onMount } from 'svelte';

  // objects
  export let categoryId
  let uploads
  let domain
  let state
  let domainId
  let image

	onMount(async () => {
    // fetch
    let appId
    domain = window.location.host
    state = 'production'

    // pick an app to show for local development
    if (domain.includes('localhost:3000')) {
      domain = 'istrav.com'
    }
    // set appId from domain 
    if (domain.includes('dimension.click')) {
      // for subdomains such as http://istrav.dimension.click
      let endpoint = domain.split('.')[0]
      let esEndpoint = await scripts.tenant.apps.getEndpoint(null, endpoint)
      if (esEndpoint.payload.success === true) {
        appId = esEndpoint.payload.data.id
        domainId = esEndpoint.payload.data.domain
        uploads = esEndpoint.payload.data.uploads
      } else {
        alert(esEndpoint.payload.reason)
      }
    } else {
      // for custom domains such as https://istrav.com
      let esOne = await scripts.tenant.apps.getOne(null, domain, state)
      if (esOne.payload.success === true) {
        appId = esOne.payload.data.id
        domainId = esOne.payload.data.domain
        uploads = esOne.payload.data.uploads
      } else {
        alert(esOne.payload.reason)
      }
    }
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