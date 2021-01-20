<script>
  import { onMount } from 'svelte';
  import Navigation from '$components/Header/Navigation.svelte'
  import Footer from '$components/Footer/Main.svelte'
  import Account from '$components/Auth/Account.svelte'
</script>

<Navigation />
<br />
<br />
<Account />

<Footer>
	<a href="/" class="breadcrumb">Home</a>
	<a href="/account" class="breadcrumb">My Account</a>
</Footer>
