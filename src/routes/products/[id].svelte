<script>
  import { onMount } from 'svelte'

	import { appData } from '../../stores.js';

  import BigFrontHeader from '../../../farmerless/components/blocks/storefront/BigFrontHeader.svelte'
  import View from '../../../farmerless/components/blocks/storefront/Product/ViewProduct.svelte'
	import Navigation from '../../../farmerless/components/blocks/Navigation.svelte'
  import BigBackFooter from '../../../farmerless/components/blocks/storefront/BigBackFooter/BigBackFooter.svelte'

  import { getStores, navigating, page, session } from '$app/stores';

  // When this is true, show the component
  let load = false

  $: { reMount($page.params.id) }
  function reMount(update) {
    load = false
    setTimeout(() => load = true, 0)
  }
  
  let app
  appData.subscribe(value => {
    app = value
    console.log(app)
  })
</script>

{#if app.id}
	<BigFrontHeader {app} />
  {#if load === true}
    <View {app} productId={$page.params.id} />
  {/if}
  <Navigation {app} page={{}} selected='shop' menuId='main' />
  <BigBackFooter app={app} menuId='footer'>
    <a href="/" class="breadcrumb hide-on-med-and-down">Home</a>
    <a href="/" class="breadcrumb">Products</a>
    <a href={`/products/${$page.params.id}`} class="breadcrumb">{$page.params.id.toUpperCase()}</a>
  </BigBackFooter>
{/if}

<style>

</style>