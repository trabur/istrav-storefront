<script>
  import { onMount } from 'svelte'

	import Navigation from '../components/Header/Navigation.svelte'
	import FrontPageBanner from '../components/Home/FrontPage.svelte'
  import Footer from '../components/Footer/Main.svelte'
  import Brands from '../components/Footer/Brands.svelte'
  import Featured from '../components/Home/Featured.svelte'
  import ShopByCategory from '../components/Home/ShopByCategory.svelte'
  import About from '../components/Home/About.svelte'

  let app
  let appId
  let domainId
  let state = 'production'
  let uploads
  let token = null

	onMount(async () => {
    // user
		token = localStorage.getItem('token')

    domainId = window.location.host

    // pick an app to show for local development
    if (domainId.includes('localhost:7000')) {
      domainId = 'oldneckties.com'
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
  <FrontPageBanner app={app} appId={appId} domainId={domainId} state={state} uploads={uploads} />
  <br class="hide-on-med-and-down" />
  <br class="hide-on-med-and-down" />
  <br />
  <Featured appId={appId} domainId={domainId} state={state} uploads={uploads} />
  <ShopByCategory appId={appId} domainId={domainId} state={state} uploads={uploads} />
  <About app={app} />
  <br class="hide-on-med-and-down" />
  <br class="hide-on-med-and-down" />
  <br />
  <Footer app={app}>
    <a href="/" class="breadcrumb">Home</a>
    <a href="/" class="breadcrumb">Welcome</a>
  </Footer>
{/if}

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>