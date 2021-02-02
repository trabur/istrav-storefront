<script>
  import { onMount } from 'svelte';
  import { GET_CATEGORIES } from "./queries.ts"
  
  let items = []
  let media 

	onMount(() => {
    media = window.location.host

    // data request
    fetch(`./media/${media}/data.json`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(r => r.json())
      .then(value => {
        console.log('value.categories:', value)
        items = value.shopByCategory
      })
  })
</script>
<div class="row">
  <div class="col s0 m1"></div>
  <div class="col s12 m10">
    <h3 class="title">SHOP BY CATEGORY</h3>
    <div class="masonry">
      {#each items as item (item.slug)}
        <div class="item">
          <a href={`/categories/${item.slug}`}>
            <div class="image" style={`background-image: url(./media/${media}/${item.image});`}></div>
            <h5 class="subtitle">{item.name}</h5>
          </a>
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
  margin: 0.5em 0;
  text-transform: uppercase;
  color: #111;
}

.image {
  width: 100%;
  height: 400px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.masonry {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
}

.item {
  padding: 0;
  margin: 0;
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    grid-template-columns: 1fr 1fr;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 0px) {
  .masonry {
    grid-template-columns: 1fr;
  }
}
</style>