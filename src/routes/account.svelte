<script>
  import { onMount } from 'svelte'

	import { appData } from '../stores.js';
  // import { istrav, scripts } from '../../farmerless/api'
  
  import BigFrontHeader from '../../farmerless/components/blocks/storefront/BigFrontHeader.svelte'
  import Account from '../../farmerless/components/blocks/authentication/Account.svelte'
	import Navigation from '../../farmerless/components/blocks/Navigation.svelte'
  import BigBackFooter from '../../farmerless/components/blocks/storefront/BigBackFooter/BigBackFooter.svelte'

  let app
  appData.subscribe(value => {
    app = value
  })
</script>

<svelte:head>
  {#if app.id}
	  <title>My Account - Storefront - {app.labelName}</title>
  {/if}
</svelte:head>

{#if app.id}
  <BigFrontHeader {app} />
  <Account />
  <Navigation {app} page={{}} selected='shop' menuId='main' />
  <BigBackFooter app={app} menuId='footer'>
    <a href="/" class="breadcrumb">Home</a>
    <a href="/account" class="breadcrumb">My Account</a>
  </BigBackFooter>
{/if}