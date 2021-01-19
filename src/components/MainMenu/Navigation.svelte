<script>
  import { onMount } from 'svelte';
  
  // navigation center text
  let extendNav = false
  let categoryId = ''
  let items = []
  let subItems = []
  let token = null
  
  // navigation query
  import { GET_MAIN_MENU } from "./queries"
	let name = import.meta.env.SNOWPACK_PUBLIC_NAME
	let apiUri = import.meta.env.SNOWPACK_PUBLIC_API_URI
  
  function setCategoryId (id) {
    extendNav = true
    categoryId = id
    subItems = items.filter((value, index) => {
      return value.id === categoryId
    })[0].children
    // console.log('subItems', subItems)
  }

  // sidebars
  let instance;
  let instancePerson;
  let instanceCart;
  let instanceSearch;

	onMount(() => {
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
    
    // navigation request
    fetch(apiUri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: GET_MAIN_MENU,
        variables: {
          "slug": "navbar"
        },
      })
    })
      .then(r => r.json())
      .then(value => {
        console.log('navigation main:', value)
        items = value.data.menu.items
      })
  })
</script>

<nav class={extendNav ? `nav-extended` : ''} on:mouseleave={() => extendNav = false}>
  <div class="nav-wrapper">
    <ul class="left">
      <li><a href="#" on:click={() => instance.open()} data-target="slide-out"><i class="material-icons">menu</i></a></li>
    </ul>
    <a href="/" class="brand-logo left hide-on-large-only" style="margin-left: 1.75em;">{name}</a>
    <a href="/" class="brand-logo center hide-on-med-and-down">{name}</a>
    <ul class="right">
      {#if token}
        <li><a href="/account" data-target="slide-out"><i class="material-icons">person</i></a></li>
      {:else}
        <li><a href="#" on:click={() => instancePerson.open()} data-target="slide-out"><i class="material-icons">person</i></a></li>
      {/if}
      <li><a href="#" on:click={() => instanceCart.open()} data-target="slide-out"><i class="material-icons">shopping_cart</i></a></li>
      <li><a href="#" on:click={() => instanceSearch.open()} data-target="slide-out"><i class="material-icons">search</i></a></li>
    </ul>
    <ul id="nav-mobile" class="left hide-on-med-and-down">
      {#each items as item (item.id)}
        <li><a href={`/category/${item.category.slug}/${atob(item.id).split(':')[1]}`} on:mouseover={setCategoryId(item.id)}>{item.name}</a></li>
      {/each}
    </ul>
  </div>
  {#if extendNav}
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        {#each subItems as item (item.id)}
          <li class="tab"><a href={`/category/${item.category.slug}/${atob(item.id).split(':')[1]}`}>{item.name}</a></li>
        {/each}
      </ul>
    </div>
  {/if}
</nav>


<ul id="main" class="sidenav">
  <li>
    <h5 style="text-align: center;">{name}</h5>
  </li>
  <!-- <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
  <li><a href="#!">Second Link</a></li>
  <li><div class="divider"></div></li>
  <li><a class="subheader">Subheader</a></li> -->
  {#each items as item (item.id)}
    <li class="waves-effect" style="width: 100%;"><a href={`/category/${item.category.slug}/${atob(item.id).split(':')[1]}`} on:click={() => instance.close()}>{item.name}</a></li>
    {#each item.children as item (item.id)}
      <li class="waves-effect" style="width: 100%; padding-left: 1em;"><a href={`/category/${item.category.slug}/${atob(item.id).split(':')[1]}`} on:click={() => instance.close()}>{item.name}</a></li>
    {/each}
  {/each}
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
