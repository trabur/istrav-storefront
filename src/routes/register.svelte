<script context="module">
  export async function load({ session }) {
    const { API_URI, IO_URI, HEADLESS_URI } = session;

    return { 
      apiUri: API_URI,
      ioUri: IO_URI,
      headlessUri: HEADLESS_URI,
    };
  }
</script>

<script>
  import { onMount } from 'svelte'
	import { appData } from '../stores.js';

  import { istrav, scripts } from '../../farmerless/api'
  
  import BigFrontHeader from '../../farmerless/components/blocks/storefront/BigFrontHeader.svelte'
  import BigBackFooter from '../../farmerless/components/blocks/storefront/BigBackFooter/BigBackFooter.svelte'
	import Register from '../components/Auth/Register.svelte'
  import Footer from '../components/Footer/Main.svelte'

  export let apiUri
  let app
  let appId
  let domainId = window.location.host
  let state = 'production'
  let uploads
  let token = null

	onMount(async () => {
    // configure backend
    istrav.tenant.apps.init({ host: apiUri })
    
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

{#if app.id}
  <BigFrontHeader {app} />
  <!-- <Register /> -->
  <BigBackFooter app={app} menuId='footer'>
    <a href="/" class="breadcrumb">Home</a>
    <a href="/register" class="breadcrumb">Register</a>
  </BigBackFooter>
{/if}