<script>
  import { onMount } from 'svelte'

  import BigFrontHeader from '../../../farmerless/components/blocks/storefront/BigFrontHeader.svelte'
  import Footer from '../../components/Footer/Main.svelte'
  import Brands from '../../components/Footer/Brands.svelte'
  import ListProducts from '../../components/Collection/ListProducts.svelte'
  import Banner from '../../components/Collection/Banner.svelte'

  import { getStores, navigating, page, session } from '$app/stores';

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
  <div style="min-height: 100vh;">
    {#if load === true}
      <Banner collectionId={$page.params.id} appId={appId} domainId={domainId} state={state} uploads={uploads} />
      <br class="hide-on-med-and-down" />
      <br class="hide-on-med-and-down" />
      <br>
      <ListProducts collectionId={$page.params.id} appId={appId} domainId={domainId} state={state} uploads={uploads} />
      <br class="hide-on-med-and-down" />
      <br class="hide-on-med-and-down" />
      <br>
    {/if}
  </div>
  <Footer app={app}>
    <a href="/" class="breadcrumb hide-on-med-and-down">Home</a>
    <a href="/" class="breadcrumb">Categories</a>
    <a href={`/categories/${$page.params.id}`} class="breadcrumb">{$page.params.id.toUpperCase()}</a>
  </Footer>
{/if}