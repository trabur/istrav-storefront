import{S as a,i as s,s as r,e as c,a as e,t,c as o,b as l,d as n,f,g as i,h as d,j as h,k as m,l as u,n as v,o as $,q as b,r as g,v as E,w as I,x as p,y}from"./start-0ccfa33c.js";import{N as A,M as w}from"./Main.svelte-b1c9ca11.js";function k(a){let s,r,$,b,g,E,I,p,y,A,w,k,x,D,V,j,L,O,H,M,T,q,B,z,R,U,G,S,N,P;return{c(){s=c("div"),r=c("div"),$=e(),b=c("div"),g=c("ul"),E=c("li"),I=c("a"),p=t("Account"),y=e(),A=c("li"),w=c("a"),k=t("Order history"),x=e(),D=c("li"),V=c("a"),j=t("Address book"),L=e(),O=c("div"),H=c("div"),M=c("p"),T=t("I am a very simple card. I am good at containing small bits of information.\n        I am convenient because I require little markup to use effectively."),q=e(),B=c("hr"),z=e(),R=c("a"),U=t("LOGOUT"),G=e(),S=c("div"),N=e(),P=c("div"),this.h()},l(a){s=o(a,"DIV",{class:!0});var c=l(s);r=o(c,"DIV",{class:!0}),l(r).forEach(n),$=f(c),b=o(c,"DIV",{class:!0});var e=l(b);g=o(e,"UL",{class:!0,id:!0});var t=l(g);E=o(t,"LI",{class:!0});var d=l(E);I=o(d,"A",{href:!0});var h=l(I);p=i(h,"Account"),h.forEach(n),d.forEach(n),y=f(t),A=o(t,"LI",{class:!0});var m=l(A);w=o(m,"A",{href:!0});var u=l(w);k=i(u,"Order history"),u.forEach(n),m.forEach(n),x=f(t),D=o(t,"LI",{class:!0});var v=l(D);V=o(v,"A",{href:!0});var C=l(V);j=i(C,"Address book"),C.forEach(n),v.forEach(n),t.forEach(n),L=f(e),O=o(e,"DIV",{class:!0,id:!0});var F=l(O);H=o(F,"DIV",{class:!0});var J=l(H);M=o(J,"P",{});var K=l(M);T=i(K,"I am a very simple card. I am good at containing small bits of information.\n        I am convenient because I require little markup to use effectively."),K.forEach(n),q=f(J),B=o(J,"HR",{}),z=f(J),R=o(J,"A",{href:!0,class:!0,style:!0});var Q=l(R);U=i(Q,"LOGOUT"),Q.forEach(n),J.forEach(n),F.forEach(n),G=f(e),S=o(e,"DIV",{class:!0,id:!0}),l(S).forEach(n),N=f(e),P=o(e,"DIV",{class:!0,id:!0}),l(P).forEach(n),e.forEach(n),c.forEach(n),this.h()},h(){d(r,"class","col s0 m1"),d(I,"href","#account"),d(E,"class","tab col s3"),d(w,"href","#orderHistory"),d(A,"class","tab col s3"),d(V,"href","#addressBook"),d(D,"class","tab col s3"),d(g,"class","tabs tabs-fixed-width"),d(g,"id","accountTabs"),d(R,"href","/logout"),d(R,"class","waves-effect waves-light red lighten-2 btn-large"),h(R,"margin-top","0.5em"),d(H,"class","card-content"),d(O,"class","card svelte-1majf1z"),d(O,"id","account"),d(S,"class","card svelte-1majf1z"),d(S,"id","orderHistory"),d(P,"class","card svelte-1majf1z"),d(P,"id","addressBook"),d(b,"class","col s12 m10"),d(s,"class","row")},m(a,c){m(a,s,c),u(s,r),u(s,$),u(s,b),u(b,g),u(g,E),u(E,I),u(I,p),u(g,y),u(g,A),u(A,w),u(w,k),u(g,x),u(g,D),u(D,V),u(V,j),u(b,L),u(b,O),u(O,H),u(H,M),u(M,T),u(H,q),u(H,B),u(H,z),u(H,R),u(R,U),u(b,G),u(b,S),u(b,N),u(b,P)},p:v,i:v,o:v,d(a){a&&n(s)}}}function x(a){return $((()=>{var a=document.querySelector("#accountTabs");M.Tabs.init(a,{})})),[]}class D extends a{constructor(a){super(),s(this,a,x,k,r,{})}}function V(a){let s,r,h,v,$;return{c(){s=c("a"),r=t("Home"),h=e(),v=c("a"),$=t("My Account"),this.h()},l(a){s=o(a,"A",{href:!0,class:!0});var c=l(s);r=i(c,"Home"),c.forEach(n),h=f(a),v=o(a,"A",{href:!0,class:!0});var e=l(v);$=i(e,"My Account"),e.forEach(n),this.h()},h(){d(s,"href","/"),d(s,"class","breadcrumb"),d(v,"href","/account"),d(v,"class","breadcrumb")},m(a,c){m(a,s,c),u(s,r),m(a,h,c),m(a,v,c),u(v,$)},d(a){a&&n(s),a&&n(h),a&&n(v)}}}function j(a){let s,r,t,l,i,d,h,u,v,$;return s=new A({}),h=new D({}),v=new w({props:{$$slots:{default:[V]},$$scope:{ctx:a}}}),{c(){b(s.$$.fragment),r=e(),t=c("br"),l=e(),i=c("br"),d=e(),b(h.$$.fragment),u=e(),b(v.$$.fragment)},l(a){g(s.$$.fragment,a),r=f(a),t=o(a,"BR",{}),l=f(a),i=o(a,"BR",{}),d=f(a),g(h.$$.fragment,a),u=f(a),g(v.$$.fragment,a)},m(a,c){E(s,a,c),m(a,r,c),m(a,t,c),m(a,l,c),m(a,i,c),m(a,d,c),E(h,a,c),m(a,u,c),E(v,a,c),$=!0},p(a,[s]){const r={};1&s&&(r.$$scope={dirty:s,ctx:a}),v.$set(r)},i(a){$||(I(s.$$.fragment,a),I(h.$$.fragment,a),I(v.$$.fragment,a),$=!0)},o(a){p(s.$$.fragment,a),p(h.$$.fragment,a),p(v.$$.fragment,a),$=!1},d(a){y(s,a),a&&n(r),a&&n(t),a&&n(l),a&&n(i),a&&n(d),y(h,a),a&&n(u),y(v,a)}}}export default class extends a{constructor(a){super(),s(this,a,null,j,r,{})}}
//# sourceMappingURL=account.svelte-a785759e.js.map