<script>
  export let raw
</script>

{#if raw.socialLinks}
  <ul class="right hide-on-med-and-down" style="margin-top: 0.3em;">
    {#if raw.socialLinks.instagram}
      <li><a href={raw.socialLinks.instagram} target="_blank" data-target="slide-out"><i class="material-icons">camera_alt</i></a></li>
    {/if}
    {#if raw.socialLinks.facebook}
      <li><a href={raw.socialLinks.facebook} target="_blank" data-target="slide-out"><i class="material-icons">facebook</i></a></li>
    {/if}
    {#if raw.socialLinks.youtube}
      <li><a href={raw.socialLinks.youtube} target="_blank" data-target="slide-out"><i class="material-icons">videocam</i></a></li>
    {/if}
    {#if raw.socialLinks.twitter}
      <li><a href={raw.socialLinks.twitter} target="_blank" data-target="slide-out"><i class="material-icons">forum</i></a></li>
    {/if}
  </ul>
{/if}