<script>
  import { onMount } from 'svelte';
  import Cart from './Cart.svelte'
  
  // navigation center text
  let extendNav = false
  let items = []
  let subItems = []
  let token

  export let appId
  export let domainId
  export let state
  export let uploads
  export let rawApp
  
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

    // get the menus
    let esNavigation = await scripts.app.menus.getOne(appId, 'navigation')
    if (esNavigation.payload.success === true) {
      items = JSON.parse(esNavigation.payload.data.raw)
    } else {
      alert(esNavigation.payload.reason)
    }
    // console.log('menus', items)
  })

  let cart = true
  function reMountCart() {
    cart = false; 
    setTimeout(() => cart = true, 0);
  } 
</script>

<div class="top-bar">
  <div class="auth">
    {#if token}
      <a href="/account" data-target="slide-out">My Account</a>
    {:else}
      <a href="/login" data-target="slide-out">Login</a> / <a href="/register" data-target="slide-out">Register</a>
    {/if}
  </div>
  <div class="welcome">{rawApp.welcome || `WELCOME TO THE NEW LOOK OF ${rawApp.name}.`}</div>
</div>
<div class="title-bar">
  <div class="numbers-inline hide-on-large-only">
    Local: {rawApp.contactLocal || '210-590-2662'} • Toll Free: {rawApp.contactTollFree || '888-844-4227'}
  </div>
  <div class="query-inline hide-on-large-only">
    <div class="row" style="margin: 0; width: 100%;">
      <form class="col s12">
        <div class="input-field col s12">
          <input id="search" type="text" class="validate">
          <label for="search" style="width: initial;">Search</label>
        </div>
      </form>
    </div>
  </div>
  <div class="name-and-search hide-on-med-and-down">
    <div class="name">
      <a href="/" class="title-menu" on:click={(e) => instance.open() & e.preventDefault()} data-target="slide-out"><i class="material-icons">menu</i></a>
      <a href="/" class="title-logo center">{rawApp.name}</a>
    </div>
    <div class="search">
      <div class="numbers">
        <div class="local">Local: {rawApp.contactLocal || '210-590-2662'}</div>
        <div class="toll-free">Toll Free: {rawApp.contactTollFree || '888-844-4227'}</div>
      </div>
      <div class="query">
        <div class="row" style="margin: 0; width: 100%;">
          <form class="col s12">
            <div class="input-field col s12">
              <input id="search" type="text" class="validate">
              <label for="search" style="width: initial;">Search</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<nav class={extendNav ? `nav-extended` : ''} on:mouseleave={() => extendNav = false}>
  <div class="nav-wrapper">
    <a href="/" class="left hide-on-large-only" style="padding: 0 1em;" on:click={(e) => instance.open() & e.preventDefault()} data-target="slide-out"><i class="material-icons">menu</i></a>
    <a href="/" class="brand-logo left hide-on-large-only" style="margin-left: 1.75em;">{rawApp.short}</a>
    <!-- <a href="/" class="brand-logo center hide-on-med-and-down">{rawApp.name}</a> -->
    <ul class="right">
      <li><a href="/" on:click={(e) => instanceCart.open() & reMountCart() & e.preventDefault()} data-target="slide-out"><i class="material-icons">shopping_cart</i></a></li>
      <!-- <li><a href="/" on:click={(e) => instanceSearch.open() & e.preventDefault()} data-target="slide-out"><i class="material-icons">search</i></a></li> -->
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

<div id="person" class="sidenav">
  <h5 style="text-align: center;">person</h5>
</div>

<div id="cart" class="sidenav">
  {#if appId && cart}
    <Cart appId={appId} domainId={domainId} state={state} uploads={uploads} />
  {/if}
</div>

<div id="search" class="sidenav">
  <h5 style="text-align: center;">search</h5>
</div>

<style>
  .sidenav {
    width: 400px;
  }

  .welcome {
    color: #111;
    padding: 0.5em;
  }
  .title-bar {
    background: #eee;
  }
  .title-menu {
    color: #111;
  }
  .title-menu i {
    font-size: 2.5em;
  }
  .title-logo {
    color: #333;
    font-size: 3.5em;
    font-weight: 800;
  }
  .auth {
    float: right;
    text-align: right;
    padding: 0.5em;
  }
  .auth a {
    color: #111;
  }
  .auth a:hover {
    text-decoration: underline;
  }
  .top-bar {
    background: #ccc;
  }

  .name-and-search {
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    min-height: 84px;
  }

  .name-and-search .search .numbers,
  .name-and-search .search .query {
    width: 100%;
  }

  .name-and-search .search .numbers {
    text-align: center;
    min-width: 200px;
  }
  
  .query-inline {
    width: 100%;
  }
  .numbers-inline {
    width: 100%;
    text-align: center;
    margin: 0 0 -1em 0;
    padding: 0.5em;
  }

  .name-and-search .search {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }

  .query-inline input,
  .name-and-search .search .query input {
    background: #fff;
    margin: 0;
  }
</style>