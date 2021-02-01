// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".title.svelte-1eij53d{font-size:2rem;font-weight:900}.image.svelte-1eij53d{width:100%;height:200px;background-position:center center;background-repeat:no-repeat;background-size:cover}.masonry.svelte-1eij53d{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:2em}.item.svelte-1eij53d{padding:0;margin:0}@media only screen and (max-width: 1023px) and (min-width: 768px){.masonry.svelte-1eij53d{grid-template-columns:1fr 1fr 1fr}}@media only screen and (max-width: 767px) and (min-width: 0px){.masonry.svelte-1eij53d{grid-template-columns:1fr 1fr}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}