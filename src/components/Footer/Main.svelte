<script>
  import { onMount } from 'svelte';

  import SocialLinks from './SocialLinks.svelte'
  import NavigationLinks from './NavigationLinks.svelte'

  let items = []
  let uploads
  let domain
  let state
  let domainId
  let raw

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
      let esEndpoint = await scripts.tenant.apps.getEndpoint(null, endpoint)
      if (esEndpoint.payload.success === true) {
        domainId = esEndpoint.payload.data.domain
        appId = esEndpoint.payload.data.id
        uploads = esEndpoint.payload.data.uploads
        raw = JSON.parse(esEndpoint.payload.data.raw)
      } else {
        alert(esEndpoint.payload.reason)
      }
    } else {
      // for custom domains such as https://istrav.com
      let esOne = await scripts.tenant.apps.getOne(domain, state)
      if (esOne.payload.success === true) {
        domainId = esOne.payload.data.domain
        appId = esOne.payload.data.id
        uploads = esOne.payload.data.uploads
        raw = JSON.parse(esOne.payload.data.raw)
      } else {
        alert(esOne.payload.reason)
      }
    }
    // get the products
    let esMenus = await scripts.app.menus.getOne(appId, 'footer')
    if (esMenus.payload.success === true) {
      items = JSON.parse(esMenus.payload.data.raw)
    } else {
      alert(esMenus.payload.reason)
    }
    console.log('footer', items)
    console.log('raw', raw)
  })
</script>

<br />
<br />
<nav class="teal lighten-2" style="position: absolute;">
  <div class="row">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <slot></slot>
      {#if raw}
        <SocialLinks raw={raw} />
      {/if}
    </div>
  </div>
</nav>
{#if items}
  <NavigationLinks items={items} />
{/if}