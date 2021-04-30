<script>
  import { onMount } from 'svelte'

	import Navigation from '../../components/Header/Navigation.svelte'
  import Footer from '../../components/Footer/Main.svelte'
  import Brands from '../../components/Footer/Brands.svelte'
  import View from '../../components/Product/View.svelte'

  import { stores } from "@sapper/app"
  const { page } = stores()

  // When this is true, show the component
  let load = false

  $: { reMount($page.params.id) }
  function reMount() {
    load = false
    setTimeout(() => load = true, 0)
  }
  
  let app
  let appId
  let domainId = window.location.host
  let state = 'production'
  let uploads
  let token = null

	onMount(async () => {
    // user
		token = localStorage.getItem('token')

    domainId = window.location.host

    // pick an app to show for local development
    if (domainId.includes('localhost:7000')) {
      domainId = 'istrav.com'
    }
    // set appId from domain 
    if (domainId.includes('dimension.click')) {
      // for subdomains such as http://istrav.dimension.click
      let endpoint = domainId.split('.')[0]
      let esEndpoint = await scripts.tenant.apps.getEndpoint(null, endpoint)
      if (esEndpoint.payload.success === true) {
        app = esEndpoint.payload.data
        appId = esEndpoint.payload.data.id
        uploads = esEndpoint.payload.data.uploads
        domainId = esEndpoint.payload.data.domain // do this so images load
      } else {
        alert(esEndpoint.payload.reason)
      }
    } else {
      // for custom domains such as https://istrav.com
      domainId = domainId.split('.').slice(-2).join('.')
      let esOne = await scripts.tenant.apps.getOne(null, domainId, state)
      if (esOne.payload.success === true) {
        app = esOne.payload.data
        appId = esOne.payload.data.id
        uploads = esOne.payload.data.uploads
      } else {
        alert(esOne.payload.reason)
      }
    }
  })
</script>

{#if appId}
	<Navigation {app} appId={appId} domainId={domainId} state={state} uploads={uploads} />
  {#if load === true}
    <View {app} productId={$page.params.id} appId={appId} domainId={domainId} state={state} uploads={uploads} />
  {/if}
  <Footer app={app}>
    <a href="/" class="breadcrumb hide-on-med-and-down">Home</a>
    <a href="/" class="breadcrumb">Products</a>
    <a href={`/products/${$page.params.id}`} class="breadcrumb">{$page.params.id.toUpperCase()}</a>
  </Footer>
{/if}

<style>

</style>