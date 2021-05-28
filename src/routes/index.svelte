<script>
  import { onMount } from 'svelte'

	import { appData } from '../stores.js';
  import { istrav, scripts } from '../../farmerless/api'
  
  import BigFrontHeader from '../../farmerless/components/blocks/storefront/BigFrontHeader.svelte'
	import FrontPageBanner from '../../farmerless/components/blocks/storefront/Home/FrontPage.svelte'
  import Featured from '../../farmerless/components/blocks/storefront/Home/Featured.svelte'
  import ShopByCategory from '../../farmerless/components/blocks/storefront/Home/ShopByCategory.svelte'
  import About from '../../farmerless/components/blocks/storefront/Home/About.svelte'
	import Navigation from '../../farmerless/components/blocks/Navigation.svelte'
  import BigBackFooter from '../../farmerless/components/blocks/storefront/BigBackFooter/BigBackFooter.svelte'

  let app
  appData.subscribe(value => {
    app = value
    console.log('', app)
  })
</script>

{#if app.id}
  <BigFrontHeader {app} />
  <FrontPageBanner {app} />
  <br class="hide-on-med-and-down" />
  <br class="hide-on-med-and-down" />
  <br />
  <Featured {app} />
  <ShopByCategory {app} />
  <About app={app} />
  <br class="hide-on-med-and-down" />
  <br class="hide-on-med-and-down" />
  <br />
  <Navigation {app} page={{}} selected='shop' menuId='main' />
  <BigBackFooter app={app} menuId='footer'>
    <a href="/" class="breadcrumb">Home</a>
    <a href="/" class="breadcrumb">Welcome</a>
  </BigBackFooter>
{/if}

<style>
	:root {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>