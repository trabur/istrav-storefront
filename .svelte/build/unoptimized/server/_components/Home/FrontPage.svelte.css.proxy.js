// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".parallax-container.svelte-1h3wqu9{height:600px}.announce.svelte-1h3wqu9{margin-top:-400px;height:200px;text-align:center;margin-bottom:200px}.first.svelte-1h3wqu9,.second.svelte-1h3wqu9{background-color:#fff;display:inline-block;transform:skew(45deg);padding:0.2em 4em;margin:0.4em;text-transform:uppercase}.text.svelte-1h3wqu9{transform:skew(-45deg);margin:0;font-size:4rem;font-weight:900}.small.svelte-1h3wqu9{font-size:2rem;font-weight:900}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}