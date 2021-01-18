<script>
  import { onMount } from 'svelte';

  onMount(() => {
    let folders = window.location.pathname.split('/')
    let app = folders[1]
    let slug = folders[2]
    let id = folders[3]
    console.log('app', app)
    console.log('slug', slug)
    console.log('id', id)
  })
</script>

hello