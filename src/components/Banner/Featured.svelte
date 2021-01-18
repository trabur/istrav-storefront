<script>
  import { onMount } from 'svelte';
  import { GET_FEATURED_PRODUCTS } from "./queries"
  
  let apiUri = import.meta.env.SNOWPACK_PUBLIC_API_URI
  let items = []
  let masonry

	onMount(() => {
    // masonry
    var elem = document.querySelector('#masonry')
    masonry = new Masonry(elem, {
      // options
      itemSelector: '.grid-item',
      columnWidth: 200
    })

    // data request
    fetch(apiUri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: GET_FEATURED_PRODUCTS,
        variables: {
          "channel": "default-channel"
        },
      })
    })
      .then(r => r.json())
      .then(value => {
        console.log('featured products:', value)
        items = value.data.collection.products.edges
      })
  })
</script>
<br />
<br />
<div class="row">
  <div class="col s0 m1"></div>
  <div class="col s12 m10">
    <h3 class="title">FEATURED</h3>
    <div id="masonry" class="grid">
      {#each items as item (item.node.id)}
        <div class="grid-item">
          <header>
            <img class="grid-image" src={item.node.thumbnail2x.url} alt="" />
            <h5 style="margin: 0;">{item.node.name}</h5>
          </header>
          <section>
            <p style="margin: 0; color: #aaa;">{item.node.category.name}</p>
          </section>
        </div>
      {/each}
    </div>
  </div>
</div>


<style>
.title {
  font-size: 2rem;
  font-weight: 900;
}

.grid {
  height: min-content !important;
  width: 100%;
  margin: -0.5em;
}
.grid-item { 
  width: 200px;
  float: left;
  margin: 0.5em;
}
.grid-item--width2 { width: 400px; }
.grid-image {
  width: 100%;
  height: auto;
}
</style>