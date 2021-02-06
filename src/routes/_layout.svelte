
<slot></slot>

<div id="code"></div>

<script>
  import { onMount, onDestroy } from 'svelte';
  import axios from 'axios'

  onMount(() => {
    // fetch library
    window.axios = axios

    // dashboard.istrav.com scripts
    var code = document.createElement('script');
    code.onload = function (event) {
      // dashboard scripts will attach to window
      console.log(window.scripts)
    };
    code.src = 'https://dashboard.istrav.com/scripts/index.js';
    code.setAttribute('type', 'module')
    document.getElementById('code').appendChild(code); 
  })
</script>