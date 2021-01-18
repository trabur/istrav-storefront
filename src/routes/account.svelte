<script>
  import { onMount } from 'svelte';
  import Navigation from '$components/MainMenu/Navigation.svelte'
  import NavigationLinks from '$components/Footer/NavigationLinks.svelte'
  import SocialLinks from '$components/Footer/SocialLinks.svelte'


  onMount(() => {
    var elemAccountTabs = document.querySelector('#accountTabs')
    var instanceAccountTabs = M.Tabs.init(elemAccountTabs, {})
  })
</script>

<Navigation />
<br />
<br />
<div class="row">
  <div class="col s0 m1"></div>
  <div class="col s12 m10">
    <ul class="tabs tabs-fixed-width" id="accountTabs">
      <li class="tab col s3"><a href="#account">Account</a></li>
      <li class="tab col s3"><a href="#orderHistory">Order history</a></li>
      <li class="tab col s3"><a href="#addressBook">Address book</a></li>
    </ul>
    <div class="card" id="account">
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <!-- <div class="card-action">
        <a href="#">This is a link</a>
      </div> -->
    </div>
    <div class="card" id="orderHistory">
    </div>
    <div class="card" id="orderHistory">
    </div>
  </div>
</div>
<br />
<br />
<nav class="teal lighten-2" style="position: absolute;">
  <div class="row">
    <div class="col s0 m1"></div>
    <div class="col s12 m10">
      <a href="/" class="breadcrumb">Home</a>
      <a href="/account" class="breadcrumb">My Account</a>
      <SocialLinks />
    </div>
  </div>
</nav>
<NavigationLinks />


<style>
.undernav {
  background: #111;
  color: #eee;
}
</style>