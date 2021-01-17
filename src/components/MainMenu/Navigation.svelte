<script>
  import { onMount } from 'svelte';
  
  // navigation center text
  let extendNav = false
  let categoryId = ''
  let items = []
  let subItems = []
  
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

  let instance;
  // sidebar opts
  let options = {
    edge: 'left'
  }

	onMount(() => {
    // main sidebar
    var elem = document.querySelector('#main');
    instance = M.Sidenav.init(elem, options);
    
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
        // console.log('data returned:', value)
        items = value.data.menu.items
      })
  })
</script>

<nav class={extendNav ? `nav-extended` : ''} on:mouseleave={() => extendNav = false}>
  <div class="nav-wrapper">
    <ul class="left">
      <li><a href="#" on:click={() => instance.open()} data-target="slide-out"><i class="material-icons">menu</i></a></li>
    </ul>
    <a href="#" class="brand-logo center" on:mouseenter={() => extendNav = true}>{name}</a>
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

<!-- <ul>
  {#if $mainMenu.loading}
    <li>Loading...</li>
  {:else if $mainMenu.error}
    <li>ERROR: {$mainMenu.error.message}</li>
  {:else}
    {#each $mainMenu.data.menu.items as item (item.id)}
      <li>{item.name} by {item.category.name}</li>
    {/each}
  {/if}
</ul> -->