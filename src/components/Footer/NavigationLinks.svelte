<script>
  export let items
  export let raw
</script>

<div class="footer">
  <br class="hide-on-small-and-down" />
  <br class="hide-on-small-and-down" />
  <br class="hide-on-small-and-down" />
  <div class="row" style="margin: 0;">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <div class="row" style="margin: 0; padding-top: 4.5em; padding-bottom: 1em;" >
        <div class="branding col s12 m6 l3">
          <div class="name">{raw.name}</div>
          <hr>
          <div class="description">Head Office:</div>
          <div class="address">1100 Congress Ave,</div>
          <div class="address">Austin, TX 78701</div>
        </div>
        {#each items as item (item.url)}
          <div class="col s12 m6 l3">
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
  <br class="hide-on-small-and-down" />
  <br class="hide-on-small-and-down" />
  <br class="hide-on-small-and-down" />
</div>

<style>
  .footer {
    background: #eee;
    color: #111;
  }

  .title {
    color: #111;
  }

  .branding {
    padding: 0.5em 0.5em 1em 0.5em;
    background: #ccc;
    border-radius: 1em;
  }
  .name {
    color: #111;
    font-size: 2em;
    font-weight: 800;
    text-align: center;
  }
  .description {
    font-weight: bold;
  }
</style>