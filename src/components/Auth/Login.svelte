<script>
  import { onMount, onDestroy } from 'svelte';
  import { GET_LOGIN } from './queries'

  let apiUri = import.meta.env.SNOWPACK_PUBLIC_API_URI
	let email = '';
  let password = '';

	function auth() {
    if (email === '') return alert('Email must be defined.')
    if (password === '') return alert('Password must be defined.')
	
    // data request
    fetch(apiUri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: GET_LOGIN,
        variables: {
          email: email,
          password: password
        },
      })
    })
      .then(r => r.json())
      .then(value => {
        console.log('login', value)
        let errors = value.data.tokenCreate.accountErrors
        if (errors.length) return alert(errors[0].message)

        localStorage.setItem('token', value.data.tokenCreate.token)
        window.location.href = `/account`
      })
  }
</script>

<div class="row">
  <div class="col s12 m4"></div>
  <div class="col s12 m4">
    <h3 class="title">LOGIN</h3>
    <div class="card" style="padding: 1em; background: #eee;">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="text" class="validate" bind:value={email}>
          <label for="email">Email</label>
        </div>
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" bind:value={password}>
          <label for="password">Password</label>
        </div>
        <br />
        <button style="margin-left: 1em;" type='submit' class="waves-effect btn" on:click={() => auth()}>Submit</button>
      </div>
    </div>
    <div style="text-align: right;">
      <a href="/register" class="waves-effect red lighten-2 btn">REGISTER</a>
    </div>
  </div>
  <div class="col s12 m4"></div>
</div>

<style>
.title {
  margin: 0; 
  text-align: center;
  font-size: 2rem;
  font-weight: 900;
}
</style>