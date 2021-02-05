
<script>
  import { onMount } from 'svelte';
  export let products

  let media

	onMount(() => {
    media = window.location.host
  })
</script>

{#if products}
  <h3 class="title">SHOP BY RELATED</h3>
  <div class="masonry">
    {#each products as item (item.slug)}
      <div class="item">
        <a href={`/products/${item.slug}`}>
          <div class="image" style={`background-image: url(./media/${media}/products/${item.slug}/${item.image});`}>
          </div>
          <h5 style="color: #111; margin: 0.5em 0 0 0;">{item.name}</h5>
        </a>
      </div>
    {/each}
  </div>
{/if}

<style>
.title {
  font-size: 2rem;
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