
<script>
  import { onMount } from 'svelte';

  // objects
  export let categoryId
  let products = []
  let media

	onMount(() => {
    media = window.location.host

    // products
    fetch(`./media/${media}/categories/${categoryId}.json`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(r => r.json())
      .then(value => {
        console.log('products:', value)
        products = value
      })
  })
</script>

<div class="row">
  <div class="col s0 m1"></div>
  <div class="col s12 m10">
    <h3 class="title">{categoryId}</h3>
    <div class="masonry">
      {#each products as item (item.slug)}
        <div class="item">
          <a href={`/products/${item.slug}`}>
            <div class="image" style={`background-image: url(/media/${media}/products/${item.slug}/${item.image});`}>
            </div>
            <h5 style="color: #111; margin: 0.5em 0 0 0;">{item.name}</h5>
          </a>
        </div>
      {/each}
    </div>
    {#if products.length === 0}
      <p>no products...</p>
    {/if}
  </div>
</div>
<!-- hello list products {JSON.stringify(products, null, 2)} -->

<style>
.title {
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
}

.image {
  width: 100%;
  height: 200px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.masonry {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
}

.item {
  padding: 0;
  margin: 0;
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 0px) {
  .masonry {
    grid-template-columns: 1fr 1fr;
  }
}
</style>