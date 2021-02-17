<script>
  import { onMount } from 'svelte';

  let about
  let domain
  let state

	onMount(async () => {
    // fetch
    let appId
    domain = window.location.host
    state = 'production'

    // pick an app to show for local development
    if (domain.includes('localhost:3000')) {
      domain = 'istrav.dimension.click'
    }
    // set appId from domain 
    if (domain.includes('dimension.click')) {
      // for subdomains such as http://istrav.dimension.click
      let endpoint = domain.split('.')[0]
      let esEndpoint = await scripts.tenant.apps.getEndpoint(endpoint)
      if (esEndpoint.payload.success === true) {
        appId = esEndpoint.payload.data.id
        about = JSON.parse(esEndpoint.payload.data.raw).about
      } else {
        alert(esEndpoint.payload.reason)
      }
    } else {
      // for custom domains such as https://istrav.com
      let esOne = await scripts.tenant.apps.getOne(domain, state)
      if (esOne.payload.success === true) {
        appId = esOne.payload.data.id
        about = JSON.parse(esOne.payload.data.raw).about
      } else {
        alert(esOne.payload.reason)
      }
    }
  })
</script>

{#if about}
  <div class="row">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <h3 class="title">ABOUT</h3>
      <p>{about}</p>
    </div>
  </div>
{/if}


<style>
  .title {
    font-size: 2rem;
    font-weight: 900;
  }
</style>