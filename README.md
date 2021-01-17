svelte-storefront
========

### init project
starting from an empty folder with just a readme...
```bash
# confirm website runs on port 3000 and then push to github...
$ npm init svelte@next
$ npm install
$ npm run dev
```

the CSS library this storefront uses:
- https://materializecss.com/getting-started.html

adding backend graphql saleor api:
```bash
$ export SNOWPACK_PUBLIC_NAME=PRINTEDBASICS
# -- then --
$ export SNOWPACK_PUBLIC_API_URI=https://api.printedbasics.com/graphql/
# -- or --
$ export SNOWPACK_PUBLIC_API_URI=https://api.oldneckties.com/graphql/
```

