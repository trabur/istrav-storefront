import './Register.svelte.css.proxy.js';
/* src/components/Auth/Register.svelte generated by Svelte v3.32.1 */
import { add_attribute, create_ssr_component } from "../../_snowpack/pkg/svelte/internal.js";

import { onMount, onDestroy } from "../../_snowpack/pkg/svelte.js";

const css = {
	code: ".title.svelte-1ha4hs7{margin:0;text-align:center;font-size:2rem;font-weight:900}",
	map: "{\"version\":3,\"file\":\"Register.svelte\",\"sources\":[\"Register.svelte\"],\"sourcesContent\":[\"<script>\\n  import { onMount, onDestroy } from 'svelte';\\n  // import { login, register } from './methods'\\n\\n\\tlet email = '';\\n  let password = '';\\n  let passwordRepeat = '';\\n\\n\\tfunction auth() {\\n    if (email === '') return alert('Email must be defined.')\\n    if (password === '') return alert('Password must be defined.')\\n    if (passwordRepeat === '') return alert('Password repeat must be defined.')\\n    if (password !== passwordRepeat) return alert('Password should be the same as password confirm.')\\n  \\n    register(email, password)\\n  }\\n</script>\\n\\n<div class=\\\"row\\\">\\n  <div class=\\\"col s12 m4\\\"></div>\\n  <div class=\\\"col s12 m4\\\">\\n    <h3 class=\\\"title\\\">REGISTER</h3>\\n    <div class=\\\"card\\\" style=\\\"padding: 1em; background: #eee;\\\">\\n      <div class=\\\"row\\\">\\n        <div class=\\\"input-field col s12\\\">\\n          <input id=\\\"email\\\" type=\\\"text\\\" class=\\\"validate\\\" bind:value={email}>\\n          <label for=\\\"email\\\">Email</label>\\n        </div>\\n        <div class=\\\"input-field col s12\\\">\\n          <input id=\\\"password\\\" type=\\\"password\\\" class=\\\"validate\\\" bind:value={password}>\\n          <label for=\\\"password\\\">Password</label>\\n        </div>\\n        <div class=\\\"input-field col s12\\\">\\n          <input id=\\\"passwordRepeat\\\" type=\\\"password\\\" class=\\\"validate\\\" bind:value={passwordRepeat}>\\n          <label for=\\\"passwordRepeat\\\">Password Confirm</label>\\n        </div>\\n        <br />\\n        <button style=\\\"margin-left: 1em;\\\" type='submit' class=\\\"waves-effect btn\\\" on:click={() => auth()}>Submit</button>\\n      </div>\\n    </div>\\n    <div style=\\\"text-align: right;\\\">\\n      <a href=\\\"/login\\\" class=\\\"waves-effect red lighten-2 btn\\\">LOGIN</a>\\n    </div>\\n  </div>\\n  <div class=\\\"col s12 m4\\\"></div>\\n</div>\\n\\n<style>\\n.title {\\n  margin: 0; \\n  text-align: center;\\n  font-size: 2rem;\\n  font-weight: 900;\\n}\\n</style>\"],\"names\":[],\"mappings\":\"AAgDA,MAAM,eAAC,CAAC,AACN,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AAClB,CAAC\"}"
};

const Register = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	let email = "";
	let password = "";
	let passwordRepeat = "";

	function auth() {
		if (email === "") return alert("Email must be defined.");
		if (password === "") return alert("Password must be defined.");
		if (passwordRepeat === "") return alert("Password repeat must be defined.");
		if (password !== passwordRepeat) return alert("Password should be the same as password confirm.");
		register(email, password);
	}

	$$result.css.add(css);

	return `<div class="${"row"}"><div class="${"col s12 m4"}"></div>
  <div class="${"col s12 m4"}"><h3 class="${"title svelte-1ha4hs7"}">REGISTER</h3>
    <div class="${"card"}" style="${"padding: 1em; background: #eee;"}"><div class="${"row"}"><div class="${"input-field col s12"}"><input id="${"email"}" type="${"text"}" class="${"validate"}"${add_attribute("value", email, 1)}>
          <label for="${"email"}">Email</label></div>
        <div class="${"input-field col s12"}"><input id="${"password"}" type="${"password"}" class="${"validate"}"${add_attribute("value", password, 1)}>
          <label for="${"password"}">Password</label></div>
        <div class="${"input-field col s12"}"><input id="${"passwordRepeat"}" type="${"password"}" class="${"validate"}"${add_attribute("value", passwordRepeat, 1)}>
          <label for="${"passwordRepeat"}">Password Confirm</label></div>
        <br>
        <button style="${"margin-left: 1em;"}" type="${"submit"}" class="${"waves-effect btn"}">Submit</button></div></div>
    <div style="${"text-align: right;"}"><a href="${"/login"}" class="${"waves-effect red lighten-2 btn"}">LOGIN</a></div></div>
  <div class="${"col s12 m4"}"></div>
</div>`;
});

export default Register;
//# sourceMappingURL=Register.svelte.js.map
