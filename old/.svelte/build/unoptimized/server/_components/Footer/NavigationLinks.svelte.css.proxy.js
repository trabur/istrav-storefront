// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".footer.svelte-1ms66vb{background:#eee;color:#111;min-height:200px;margin-top:50px}.title.svelte-1ms66vb{color:#111}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}