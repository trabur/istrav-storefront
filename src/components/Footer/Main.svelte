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
  <div class="row" style="margin: 0;">
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
  <NavigationLinks items={items} raw={rawApp} />
{/if}

<div class="row top-bar">
  <div class="col s0 m1"></div>
  <div class="copyright col s12 m5">
    Copyright @{new Date().getFullYear()} <a href="/">{rawApp.name || `ISTRAV`}</a>. All Rights Reserved. Powered by <a href="https://istrav.com" target="_blank">ISTRAV</a>.
  </div>
  <div class="we-accept col s12 m5">
    We Accept: 
  </div>
  <div class="col s0 m1"></div>
</div>

<style>
  .top-bar {
    color: #444;
    padding: 0.5em;
    background: #ccc;
    margin: 0;
  }

  .copyright,
  .we-accept {
    padding: 0;
  }

  .copyright a {
    color: #444;
    font-weight: 700;
  }

  .we-accept {
    text-align: right;
  }
</style>