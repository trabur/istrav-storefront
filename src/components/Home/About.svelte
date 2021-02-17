<script>
  import { onMount } from 'svelte';
  
  let about = ''
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
        console.log('about:', value)
        about = value.about
      })
  })
</script>

{#if about}
  <div class="row">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <h3 class="title">ABOUT</h3>
      <p>{about}</p>
    </div>
  </div>
{/if}


<style>
  .title {
    font-size: 2rem;
    font-weight: 900;
  }
</style>