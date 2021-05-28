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

  import BigFrontHeader from '../../farmerless/components/blocks/storefront/BigFrontHeader.svelte'
	import Register from '../../farmerless/components/blocks/authentication/Register.svelte'
	import Navigation from '../../farmerless/components/blocks/Navigation.svelte'
  import BigBackFooter from '../../farmerless/components/blocks/storefront/BigBackFooter/BigBackFooter.svelte'

  let app
  appData.subscribe(value => {
    app = value
    console.log(app)
  })
</script>

{#if app.id}
  <BigFrontHeader {app} />
  <Register {app} />
  <Navigation {app} page={{}} selected='shop' menuId='main' />
  <BigBackFooter app={app} menuId='footer'>
    <a href="/" class="breadcrumb">Home</a>
    <a href="/register" class="breadcrumb">Register</a>
  </BigBackFooter>
{/if}