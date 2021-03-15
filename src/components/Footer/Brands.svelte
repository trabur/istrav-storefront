<script>
  import { onMount } from 'svelte'

  // export let uploads
  // export let domainId
  // export let state
  export let esApp

  let brands = JSON.parse(esApp.brands) || []
  
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
          <a href={brand.url}>
            <span class="text">{brand.text}</span>
          </a>
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

  .text {
    font-size: 1.5em;
    color: #000;
    margin: 0 0.5em;
  }
</style>