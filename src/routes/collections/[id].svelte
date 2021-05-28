<script>
  import { onMount } from 'svelte'

	import { appData } from '../../stores.js';

  import BigFrontHeader from '../../../farmerless/components/blocks/storefront/BigFrontHeader.svelte'
  import CollectionBanner from '../../../farmerless/components/blocks/storefront/Collection/CollectionBanner.svelte'
  import CollectionProducts from '../../../farmerless/components/blocks/storefront/Collection/CollectionProducts.svelte'
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
  <div style="min-height: 100vh;">
    {#if load === true}
      <CollectionBanner {app} collectionId={$page.params.id} />
      <br class="hide-on-med-and-down" />
      <br class="hide-on-med-and-down" />
      <br>
      <CollectionProducts {app} collectionId={$page.params.id} />
      <br class="hide-on-med-and-down" />
      <br class="hide-on-med-and-down" />
      <br>
    {/if}
  </div>
  <Navigation {app} page={{}} selected='shop' menuId='main' />
  <BigBackFooter app={app} menuId='footer'>
    <a href="/" class="breadcrumb hide-on-med-and-down">Home</a>
    <a href="/" class="breadcrumb">Categories</a>
    <a href={`/categories/${$page.params.id}`} class="breadcrumb">{$page.params.id.toUpperCase()}</a>
  </BigBackFooter>
{/if}