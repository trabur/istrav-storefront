<script>
  import { onMount } from 'svelte'

	import { appData } from '../stores.js';
  import { istrav, scripts } from '../../farmerless/api'
  
  import BigFrontHeader from '../../farmerless/components/blocks/storefront/BigFrontHeader.svelte'
	import MyCart from '../../farmerless/components/blocks/storefront/Cart/MyCart.svelte'
	import Navigation from '../../farmerless/components/blocks/Navigation.svelte'
  import BigBackFooter from '../../farmerless/components/blocks/storefront/BigBackFooter/BigBackFooter.svelte'

  let app
  appData.subscribe(value => {
    app = value
  })

  onMount(() => {
		let token = localStorage.getItem('token')
    if (!token) {
      window.location.href = '/'
    }
  })
</script>

<svelte:head>
  {#if app.id}
	  <title>My Cart - Storefront - {app.labelName}</title>
  {/if}
</svelte:head>

{#if app.id}
  <BigFrontHeader {app} />
  <MyCart {app} />
  <Navigation {app} page={{}} selected='shop' menuId='main' />
  <BigBackFooter app={app} menuId='footer'>
    <a href="/" class="breadcrumb">Home</a>
    <a href="/cart" class="breadcrumb">Cart</a>
  </BigBackFooter>
{/if}