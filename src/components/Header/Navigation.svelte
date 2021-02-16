<script>
  import { onMount } from 'svelte';
  
  // navigation center text
  let extendNav = false
  let items = []
  let subItems = []
  let token = null
  let rawApp = {
    name: '',
    short: ''
  }
  
  function setId (id) {
    subItems = items.filter((value, index) => {
      return value.url === id
    })[0].children

    console.log('subItems', subItems)
    if (subItems !== undefined) {
      console.log('extendNav', true)
      extendNav = true
    }
  }

  // sidebars
  let instance;
  let instancePerson;
  let instanceCart;
  let instanceSearch;

	onMount(async () => {
    // user
		token = localStorage.getItem('token')
    // main sidebar
    var elem = document.querySelector('#main')
    instance = M.Sidenav.init(elem, { edge: 'left' })
    // right sidebars
    var elemPerson = document.querySelector('#person')
    instancePerson = M.Sidenav.init(elemPerson, { edge: 'right' })
    var elemCart = document.querySelector('#cart')
    instanceCart = M.Sidenav.init(elemCart, { edge: 'right' })
    var elemSearch = document.querySelector('#search')
    instanceSearch = M.Sidenav.init(elemSearch, { edge: 'right' })
    

    // fetch
    let appId
    let domain = window.location.host
    let state = 'production'

    // pick an app to show for local development
    if (domain.includes('localhost:3000')) {
      domain = 'istrav.dimension.click'
    }
    // set appId from domain 
    if (domain.includes('dimension.click')) {
      // for subdomains such as http://istrav.dimension.click
      let endpoint = domain.split('.')[0]
      let esEndpoint = await scripts.tenant.apps.getEndpoint(endpoint)
      console.log('esEndpoint', esEndpoint)
      if (esEndpoint.payload.success === true) {
        appId = esEndpoint.payload.data.id
        rawApp = JSON.parse(esEndpoint.payload.data.raw)
      } else {
        alert(esEndpoint.payload.reason)
      }
    } else {
      // for custom domains such as https://istrav.com
      let esOne = await scripts.tenant.apps.getOne(domain, state)
      console.log('esOne', esOne)
      if (esOne.payload.success === true) {
        appId = esOne.payload.data.id
        rawApp = JSON.parse(esOne.payload.data.raw)
      } else {
        alert(esOne.payload.reason)
      }
    }
    // get the menus
    let esNavigation = await scripts.app.menus.getOne(appId, 'navigation')
    if (esNavigation.payload.success === true) {
      items = JSON.parse(esNavigation.payload.data.raw)
    } else {
      alert(esNavigation.payload.reason)
    }
    console.log('items', items)
  })
</script>

<nav class={extendNav ? `nav-extended` : ''} on:mouseleave={() => extendNav = false}>
  <div class="nav-wrapper">
    <ul class="left">
      <li><a href="/" on:click={(e) => instance.open() & e.preventDefault()} data-target="slide-out"><i class="material-icons">menu</i></a></li>
    </ul>
    <a href="/" class="brand-logo left hide-on-large-only" style="margin-left: 1.75em;">{rawApp.short}</a>
    <a href="/" class="brand-logo center hide-on-med-and-down">{rawApp.name}</a>
    <ul class="right">
      {#if token}
        <li><a href="/account" data-target="slide-out"><i class="material-icons">person</i></a></li>
      {:else}
        <li><a href="/login" data-target="slide-out"><i class="material-icons">person</i></a></li>
      {/if}
      <li><a href="/" on:click={(e) => instanceCart.open() & e.preventDefault()} data-target="slide-out"><i class="material-icons">shopping_cart</i></a></li>
      <li><a href="/" on:click={(e) => instanceSearch.open() & e.preventDefault()} data-target="slide-out"><i class="material-icons">search</i></a></li>
    </ul>
    <ul id="nav-mobile" class="left hide-on-med-and-down">
      {#each items as item (item.url)}
        <li><a href={item.url} on:mouseover={item.children.length ? setId(item.url) : () => extendNav = false}>{item.name}</a></li>
      {/each}
    </ul>
  </div>
  {#if extendNav}
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        {#each subItems as item (item.url)}
          <li class="tab"><a href={item.url}>{item.name}</a></li>
        {/each}
      </ul>
    </div>
  {/if}
</nav>


<ul id="main" class="sidenav">
  <li>
    <h5 style="text-align: center;">{rawApp.name}</h5>
  </li>
  <!-- <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
  <li><a href="#!">Second Link</a></li>
  <li><div class="divider"></div></li>
  <li><a class="subheader">Subheader</a></li> -->
  {#if items}
    {#each items as item (item.url)}
      <li class="waves-effect" style="width: 100%;"><a href={item.url} on:click={() => instance.close()}>{item.name}</a></li>
      {#if item.children}
        {#each item.children as item (item.url)}
          <li class="waves-effect" style="width: 100%; padding-left: 1em;"><a href={item.url} on:click={() => instance.close()}>{item.name}</a></li>
        {/each}
      {/if}
    {/each}
  {/if}
</ul>

<ul id="person" class="sidenav">
  <li>
    <h5 style="text-align: center;">person</h5>
  </li>
  
</ul>

<ul id="cart" class="sidenav">
  <li>
    <h5 style="text-align: center;">cart</h5>
  </li>
</ul>

<ul id="search" class="sidenav">
  <li>
    <h5 style="text-align: center;">search</h5>
  </li>
</ul>
