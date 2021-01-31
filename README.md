istrav-storefront
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

# -- announce --
$ export SNOWPACK_PUBLIC_ANNOUNCE="{
  \"line1\": \"Final reduction\",
  \"line2\": \"Up to 70% off sale\",
  \"buttonName\": \"SHOP SALE\",
  \"buttonUrl\": \"/category/accessories/7/\"
}"

$ export AWS_ACCESS_KEY_ID=
$ export AWS_SECRET_ACCESS_KEY=
$ export AWS_MEDIA_BUCKET_NAME=
$ export AWS_MEDIA_CUSTOM_DOMAIN=https://istrav-saleor.s3.us-east-2.amazonaws.com

```

