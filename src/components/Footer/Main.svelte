<script>
  import { onMount } from 'svelte';

  import SocialLinks from './SocialLinks.svelte'
  import NavigationLinks from './NavigationLinks.svelte'

  export let appId
  export let rawApp

  let items = []

	onMount(async () => {
    // get the products
    let esMenus = await scripts.app.menus.getOne(appId, 'footer')
    if (esMenus.payload.success === true) {
      items = JSON.parse(esMenus.payload.data.raw)
    } else {
      alert(esMenus.payload.reason)
    }
    console.log('footer', items)
    console.log('rawApp', rawApp)
  })
</script>

<br />
<br />
<nav class="teal lighten-2" style="position: absolute;">
  <div class="row">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <slot></slot>
      {#if rawApp}
        <SocialLinks raw={rawApp} />
      {/if}
    </div>
  </div>
</nav>
{#if items}
  <NavigationLinks items={items} />
{/if}