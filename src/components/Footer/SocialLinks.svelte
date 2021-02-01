<ul class="right hide-on-med-and-down" style="margin-top: 0.3em;">
  {#if instagram}
    <li><a href={instagram} target="_blank" data-target="slide-out"><i class="material-icons">camera_alt</i></a></li>
  {/if}
  {#if facebook}
    <li><a href={facebook} target="_blank" data-target="slide-out"><i class="material-icons">facebook</i></a></li>
  {/if}
  {#if youtube}
    <li><a href={youtube} target="_blank" data-target="slide-out"><i class="material-icons">videocam</i></a></li>
  {/if}
  {#if twitter}
    <li><a href={twitter} target="_blank" data-target="slide-out"><i class="material-icons">forum</i></a></li>
  {/if}
</ul>

<script>
  import { onMount } from 'svelte';

  let instagram = ''
  let facebook = ''
  let youtube = ''
  let twitter = ''

	onMount(() => {
    let media = window.location.host

    // navigation request
    fetch(`./media/${media}/data.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
      .then(r => r.json())
      .then(value => {
        console.log('footer:', value)
        let sl = value.socialLinks
        instagram = sl.instagram
        facebook = sl.facebook
        youtube = sl.youtube
        twitter = sl.twitter
      })
  })
</script>