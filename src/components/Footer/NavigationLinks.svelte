<script>
  import { onMount } from 'svelte';

  // navigation query
  import { GET_MAIN_FOOTER } from "./queries"
	let name = import.meta.env.SNOWPACK_PUBLIC_NAME
  let apiUri = import.meta.env.SNOWPACK_PUBLIC_API_URI
  
  // objects
  let items = []

	onMount(() => {
    // navigation request
    fetch(apiUri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: GET_MAIN_FOOTER,
        variables: {
          "slug": "footer"
        },
      })
    })
      .then(r => r.json())
      .then(value => {
        console.log('navigation footer:', value)
        items = value.data.menu.items
      })
  })
</script>

<div class="footer">
  <div class="row" style="margin: 0;">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <div class="row" style="padding: 4em 0; margin: 0 -0.75em;">
        {#each items as item (item.id)}
          <div class="col s12 m3">
            <ul>
              <li style="width: 100%;">
                {#if item.category !== null}
                  <h5><a class="title" href={`/category/${item.category.slug}/${atob(item.id).split(':')[1]}`}>{item.name}</a></h5>
                {:else if item.collection !== null}
                  <h5><a class="title" href={`/collection/${item.collection.slug}/${atob(item.collection.id).split(':')[1]}`}>{item.name}</a></h5>
                {:else if item.page !== null}
                  <h5><a class="title" href={`/page/${item.page.slug}`}>{item.name}</a></h5>
                {:else if item.url !== null}
                  <h5><a class="title" href={item.url}>{item.name}</a></h5>
                {/if}
              </li>
              {#each item.children as item (item.id)}
                {#if item.category !== null}
                  <li style="width: 100%;"><a class="title" href={`/category/${item.category.slug}/${atob(item.id).split(':')[1]}`}>{item.name}</a></li>
                {:else if item.collection !== null}
                  <li style="width: 100%;"><a class="title" href={`/collection/${item.collection.slug}/${atob(item.collection.id).split(':')[1]}`}>{item.name}</a></li>
                {:else if item.page !== null}
                  <li style="width: 100%;"><a class="title" href={`/page/${item.page.slug}`}>{item.name}</a></li>
                {:else if item.url !== null}
                  <li style="width: 100%;"><a class="title" href={item.url}>{item.name}</a></li>
                {/if}
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