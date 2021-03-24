<script>
  import { onMount } from 'svelte'

	import Navigation from '../components/Header/Navigation.svelte'
	import Register from '../components/Auth/Register.svelte'
  import Footer from '../components/Footer/Main.svelte'
  import Brands from '../components/Footer/Brands.svelte'

  let esApp
  let appId
  let domainId = window.location.host.split('.').slice(-2).join('.')
  let state = 'production'
  let uploads
  let token = null
  let rawApp = {
    name: '',
    short: ''
  }

	onMount(async () => {
    // user
		token = localStorage.getItem('token')

    domainId = window.location.host.split('.').slice(-2).join('.')

    // pick an app to show for local development
    if (domainId.includes('localhost:3000')) {
      domainId = 'istrav.com'
    }
    // set appId from domain 
    if (domainId.includes('dimension.click')) {
      // for subdomains such as http://istrav.dimension.click
      let endpoint = domainId.split('.')[0]
      let esEndpoint = await scripts.tenant.apps.getEndpoint(null, endpoint)
      if (esEndpoint.payload.success === true) {
        esApp = esEndpoint.payload.data
        appId = esEndpoint.payload.data.id
        uploads = esEndpoint.payload.data.uploads
        rawApp = JSON.parse(esEndpoint.payload.data.raw)
        domainId = esEndpoint.payload.data.domain // do this so images load
      } else {
        alert(esEndpoint.payload.reason)
      }
    } else {
      // for custom domains such as https://istrav.com
      let esOne = await scripts.tenant.apps.getOne(null, domainId, state)
      if (esOne.payload.success === true) {
        esApp = esOne.payload.data
        appId = esOne.payload.data.id
        uploads = esOne.payload.data.uploads
        rawApp = JSON.parse(esOne.payload.data.raw)
      } else {
        alert(esOne.payload.reason)
      }
    }
  })
</script>

{#if appId}
	<Navigation appId={appId} domainId={domainId} state={state} uploads={uploads} rawApp={rawApp} />
  <Register />
  <Brands domainId={domainId} state={state} uploads={uploads} esApp={esApp} />
  <Footer appId={appId} rawApp={rawApp} esApp={esApp}>
    <a href="/" class="breadcrumb">Home</a>
    <a href="/register" class="breadcrumb">Register</a>
  </Footer>
{/if}