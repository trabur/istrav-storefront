// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".title.svelte-127i5hm{font-size:2rem;font-weight:900}.subtitle.svelte-127i5hm{font-size:1.5em;font-weight:900;margin:0.5em 0;text-transform:uppercase;color:#111}.image.svelte-127i5hm{width:100%;height:400px;background-position:center center;background-repeat:no-repeat;background-size:cover}.masonry.svelte-127i5hm{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-gap:2em}.item.svelte-127i5hm{padding:0;margin:0}@media only screen and (max-width: 1023px) and (min-width: 768px){.masonry.svelte-127i5hm{grid-template-columns:1fr 1fr}}@media only screen and (max-width: 767px) and (min-width: 0px){.masonry.svelte-127i5hm{grid-template-columns:1fr}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}