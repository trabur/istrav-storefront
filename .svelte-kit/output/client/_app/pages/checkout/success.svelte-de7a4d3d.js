import{S as a,i as s,s as e,e as o,t,k as r,c,a as l,g as n,d as i,n as d,b as u,f as h,H as y,h as p,F as f,z as g}from"../../chunks/vendor-ebfb1990.js";import{a as k,s as m}from"../../chunks/api-3c9fd495.js";function v(a){let s,e,g,k,m,v,w;return{c(){s=o("div"),e=o("h3"),g=t("Checkout success!"),k=r(),m=o("h4"),v=t("Let's take a look at your order history now... "),w=t(a[0]),this.h()},l(o){s=c(o,"DIV",{class:!0});var t=l(s);e=c(t,"H3",{});var r=l(e);g=n(r,"Checkout success!"),r.forEach(i),k=d(t),m=c(t,"H4",{});var u=l(m);v=n(u,"Let's take a look at your order history now... "),w=n(u,a[0]),u.forEach(i),t.forEach(i),this.h()},h(){u(s,"class","middle svelte-s8voy5")},m(a,o){h(a,s,o),y(s,e),y(e,g),y(s,k),y(s,m),y(m,v),y(m,w)},p(a,[s]){1&s&&p(w,a[0])},i:f,o:f,d(a){a&&i(s)}}}function w(a,s,e){let o,t=3;k.subscribe((a=>{o=a,console.log(o)}));let r,c=null;return g((async()=>{if(c=localStorage.getItem("token"),!o.id)return;let a=await m.account.carts.getAll(o.id,c);if(console.log("esCarts",a),!0===a.payload.success){let s=a.payload.data[0].id,e=await m.account.carts.getOne(o.id,c,s);console.log("esCart",e),!0===e.payload.success?r=e.payload.data:alert(e.payload.reason)}else alert(a.payload.reason);let s=await m.account.carts.getRemove(o.id,c,r.id);console.log("esEmpty",s),!0===s.payload.success?(setTimeout((()=>{window.location.href="/account#orderHistory"}),3e3),setInterval((()=>{e(0,t-=1)}),1e3)):alert(s.payload.reason)})),[t]}export default class extends a{constructor(a){super(),s(this,a,w,v,e,{})}}
