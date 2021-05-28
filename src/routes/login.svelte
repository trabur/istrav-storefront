<script>
  import { onMount } from 'svelte'

	import { appData } from '../stores.js';
  import { istrav, scripts } from '../../farmerless/api'
  
  import BigFrontHeader from '../../farmerless/components/blocks/storefront/BigFrontHeader.svelte'
	import Login from '../../farmerless/components/blocks/authentication/Login.svelte'
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
  <Login {app} />
  <Navigation {app} page={{}} selected='shop' menuId='main' />
  <BigBackFooter app={app} menuId='footer'>
    <a href="/" class="breadcrumb">Home</a>
    <a href="/login" class="breadcrumb">Login</a>
  </BigBackFooter>
{/if}