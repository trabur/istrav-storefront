<script>
  import { onMount } from 'svelte';
  import { GET_FEATURED_PRODUCTS } from "./queries"
  
  let apiUri = import.meta.env.SNOWPACK_PUBLIC_API_URI
  let items = []
  let masonry

	onMount(() => {
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
<div class="row">
  <div class="col s0 m1"></div>
  <div class="col s12 m10">
    <h3 class="title">FEATURED</h3>
    <div class="masonry">
      {#each items as item (item.node.id)}
        <div class="item">
          <a href={`/product/${item.node.slug}/${atob(item.node.id).split(':')[1]}`}>
            <div class="image" style={`background-image: url(${item.node.thumbnail2x.url});`}>
            </div>
            <h5 style="margin-top: 0.5em;">{item.node.name}</h5>
          </a>
          <p style="margin: 0; color: #aaa;">{item.node.category.name}</p>
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

.subtitle {
  font-size: 1.5em;
  font-weight: 900;
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