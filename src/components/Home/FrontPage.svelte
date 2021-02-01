<script>
  import { onMount } from 'svelte';

  let media
  let image = ''
	let announce = {
    line1: 'Final reduction',
    line2: 'Up to 70% off sale',
    buttonName: 'SHOP SALE',
    buttonUrl: '/category/accessories/7/'
  }

	onMount(() => {
    media = window.location.host

    // data request
    fetch(`./media/${media}/data.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(r => r.json())
      .then(value => {
        console.log('announce:', value.announce)
        announce = value.announce
        image = value.image
      })
  })
</script>

<div class="parallax-container">
  <div class="parallax">
    <img style={`opacity: 1; height: 600px;`} src={`./media/${media}/${image}`}  alt="background" />
  </div>
</div>

<div class="announce">
  <span class="first hide-on-med-and-down"><h1 class="text">{announce.line1}</h1></span><br />
  <span class="second hide-on-med-and-down"><h1 class="text">{announce.line2}</h1></span><br />
  <span class="first hide-on-large-only"><h1 class="text small">{announce.line1}</h1></span><br />
  <span class="second hide-on-large-only"><h1 class="text small">{announce.line2}</h1></span><br />
  <a href={`${announce.buttonUrl}`} class="waves-effect waves-light btn-large" style="margin-top: 0.5em;">{announce.buttonName}</a>
</div>


<style>
.parallax-container {
  height: 600px;
}

.announce {
  overflow: hidden;
  margin-top: -425px;
  height: 300px;
  text-align: center;
  margin-bottom: 125px;
}

.first,
.second {
  background-color: #fff;
  display: inline-block;
  transform: skew(45deg);
  padding: 0.2em 4em;
  margin: 0.4em;
  text-transform: uppercase;
}

.text {
  transform: skew(-45deg);
  margin: 0;
  font-size: 4rem;
  font-weight: 900;
}

.small {
  font-size: 2rem;
  font-weight: 900;
}
</style>