<script>
  import { onMount } from 'svelte'

	import Navigation from '../../components/Header/Navigation.svelte'
  import Footer from '../../components/Footer/Main.svelte'
  import ListProducts from '../../components/Category/ListProducts.svelte'
  import Banner from '../../components/Category/Banner.svelte'

  import { stores } from "@sapper/app";
  const { page } = stores();

  // When this is true, show the component
  let load = false

  $: { reMount($page.params.id) }
  function reMount() {
    load = false
    setTimeout(() => load = true, 0)
  }

  let appId
  let domainId = window.location.host
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

    domainId = window.location.host

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
  <div style="min-height: 100vh;">
    <Banner categoryId={$page.params.id} appId={appId} domainId={domainId} state={state} uploads={uploads} />
    <br />
    <br />
    <br />
    {#if load === true}
      <ListProducts categoryId={$page.params.id} appId={appId} domainId={domainId} state={state} uploads={uploads} />
    {/if}
  </div>
  <Footer appId={appId} rawApp={rawApp}>
    <a href="/" class="breadcrumb hide-on-med-and-down">Home</a>
    <a href="/" class="breadcrumb">Categories</a>
    <a href={`/categories/${$page.params.id}`} class="breadcrumb">{$page.params.id.toUpperCase()}</a>
  </Footer>
{/if}