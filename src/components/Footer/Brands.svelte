<script>
  import { onMount } from 'svelte'

  export let uploads
  export let domainId
  export let state
  export let esApp

  let brands = JSON.parse(esApp.brands)
  
	onMount(async () => {
    console.log('brands', brands)
  })
</script>

{#if brands.length}
  <div class="brands card red lighten-2">
    <br />
    <div class="row" style="margin: 0;">
      <div class="col s0 m1"></div>
      <div class="list col s12 m10">
        {#each brands as brand}
          {#if !brand.image}
            <a href={brand.url}>
              <div class="text">{brand.text}</div>
            </a>
          {:else}
            <a href={brand.url}>
              <img class="image" src={`https://rawcdn.githack.com/${uploads}/${domainId}/${state}/brands/${brand.image}`} alt={brand.text} />
            </a>
          {/if}
        {/each}
      </div>
      <div class="col s0 m1"></div>
    </div>
    <br />
  </div>
{/if}

<style>
  .brands {
    margin: 0;
  }

  .brands .list {
    text-align: center;
  }

  .image {
    height: 40px;
    filter: grayscale(1);
    margin: 0.5em;
  }

  .text {
    font-size: 1.5em;
    color: #000;
  }
</style>