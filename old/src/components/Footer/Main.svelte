<script>
  import SocialLinks from './SocialLinks.svelte'
  import NavigationLinks from './NavigationLinks.svelte'
</script>

<br />
<br />
<nav class="teal lighten-2" style="position: absolute;">
  <div class="row">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <slot></slot>
      <SocialLinks />
    </div>
  </div>
</nav>
<NavigationLinks />