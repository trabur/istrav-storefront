<script>
  import { onMount } from 'svelte';

  // navigation query
  import { GET_MAIN_FOOTER } from "./queries.ts"
  
  // objects
  let items = []
  let media

	onMount(() => {
    media = window.location.host

    // navigation request
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
        console.log('navigation footer:', value)
        items = value.footer
      })
  })
</script>

<div class="footer">
  <div class="row" style="margin: 0;">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <div class="row" style="padding: 4em 0; margin: 0 -0.75em;">
        {#each items as item (item.url)}
          <div class="col s12 m3">
            <ul>
              <li style="width: 100%;">
                <h5><a class="title" href={item.url}>{item.name}</a></h5>
              </li>
              {#each item.children as item (item.url)}
                <li style="width: 100%;"><a class="title" href={item.url}>{item.name}</a></li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
.footer {
  background: #eee;
  color: #111;
  min-height: 200px;
  margin-top: 50px;
}

.title {
  color: #111;
}

.list {
  color: #888;
}
</style>