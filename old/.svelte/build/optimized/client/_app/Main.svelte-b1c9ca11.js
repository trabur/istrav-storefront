import{S as a,i as r,s as e,e as t,t as l,c as s,b as c,g as n,d as o,h,k as i,l as f,z as d,m as u,u as v,a as m,A as g,f as E,j as p,n as I,B as L,o as y,C as $,p as w,D as A,q as b,r as k,v as V,E as x,w as D,x as U,y as j}from"./start-0ccfa33c.js";function S(a,r,e){const t=a.slice();return t[17]=r[e],t}function _(a,r,e){const t=a.slice();return t[17]=r[e],t}function q(a,r,e){const t=a.slice();return t[17]=r[e],t}function H(a,r,e){const t=a.slice();return t[17]=r[e],t}function N(a){let r,e,d,u;return{c(){r=t("li"),e=t("a"),d=t("i"),u=l("person"),this.h()},l(a){r=s(a,"LI",{});var t=c(r);e=s(t,"A",{href:!0,"data-target":!0});var l=c(e);d=s(l,"I",{class:!0});var h=c(d);u=n(h,"person"),h.forEach(o),l.forEach(o),t.forEach(o),this.h()},h(){h(d,"class","material-icons"),h(e,"href","/login"),h(e,"data-target","slide-out")},m(a,t){i(a,r,t),f(r,e),f(e,d),f(d,u)},d(a){a&&o(r)}}}function T(a){let r,e,d,u;return{c(){r=t("li"),e=t("a"),d=t("i"),u=l("person"),this.h()},l(a){r=s(a,"LI",{});var t=c(r);e=s(t,"A",{href:!0,"data-target":!0});var l=c(e);d=s(l,"I",{class:!0});var h=c(d);u=n(h,"person"),h.forEach(o),l.forEach(o),t.forEach(o),this.h()},h(){h(d,"class","material-icons"),h(e,"href","/account"),h(e,"data-target","slide-out")},m(a,t){i(a,r,t),f(r,e),f(e,d),f(d,u)},d(a){a&&o(r)}}}function B(a,r){let e,v,m,g,E,p,I=r[17].name+"";return{key:a,first:null,c(){e=t("li"),v=t("a"),m=l(I),this.h()},l(a){e=s(a,"LI",{});var r=c(e);v=s(r,"A",{href:!0});var t=c(v);m=n(t,I),t.forEach(o),r.forEach(o),this.h()},h(){h(v,"href",g=r[17].url),this.first=e},m(a,t){i(a,e,t),f(e,v),f(v,m),E||(p=d(v,"mouseover",(function(){$(r[8](r[17].slug))&&r[8](r[17].slug).apply(this,arguments)})),E=!0)},p(a,e){r=a,2&e&&I!==(I=r[17].name+"")&&u(m,I),2&e&&g!==(g=r[17].url)&&h(v,"href",g)},d(a){a&&o(e),E=!1,p()}}}function C(a){let r,e,l=[],n=new Map,d=a[2];const u=a=>a[17].url;for(let r=0;r<d.length;r+=1){let e=q(a,d,r),t=u(e);n.set(t,l[r]=G(t,e))}return{c(){r=t("div"),e=t("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){r=s(a,"DIV",{class:!0});var t=c(r);e=s(t,"UL",{class:!0});var n=c(e);for(let a=0;a<l.length;a+=1)l[a].l(n);n.forEach(o),t.forEach(o),this.h()},h(){h(e,"class","tabs tabs-transparent"),h(r,"class","nav-content")},m(a,t){i(a,r,t),f(r,e);for(let a=0;a<l.length;a+=1)l[a].m(e,null)},p(a,r){4&r&&(d=a[2],l=v(l,r,u,1,a,d,n,e,w,G,null,q))},d(a){a&&o(r);for(let a=0;a<l.length;a+=1)l[a].d()}}}function G(a,r){let e,d,v,m,g=r[17].name+"";return{key:a,first:null,c(){e=t("li"),d=t("a"),v=l(g),this.h()},l(a){e=s(a,"LI",{class:!0});var r=c(e);d=s(r,"A",{href:!0});var t=c(d);v=n(t,g),t.forEach(o),r.forEach(o),this.h()},h(){h(d,"href",m=r[17].url),h(e,"class","tab"),this.first=e},m(a,r){i(a,e,r),f(e,d),f(d,v)},p(a,e){r=a,4&e&&g!==(g=r[17].name+"")&&u(v,g),4&e&&m!==(m=r[17].url)&&h(d,"href",m)},d(a){a&&o(e)}}}function R(a,r){let e,v,m,g,E,I,L=r[17].name+"";return{key:a,first:null,c(){e=t("li"),v=t("a"),m=l(L),this.h()},l(a){e=s(a,"LI",{class:!0,style:!0});var r=c(e);v=s(r,"A",{href:!0});var t=c(v);m=n(t,L),t.forEach(o),r.forEach(o),this.h()},h(){h(v,"href",g=r[17].url),h(e,"class","waves-effect"),p(e,"width","100%"),p(e,"padding-left","1em"),this.first=e},m(a,t){i(a,e,t),f(e,v),f(v,m),E||(I=d(v,"click",r[14]),E=!0)},p(a,e){r=a,2&e&&L!==(L=r[17].name+"")&&u(m,L),2&e&&g!==(g=r[17].url)&&h(v,"href",g)},d(a){a&&o(e),E=!1,I()}}}function z(a,r){let e,I,L,y,$,A,b,k,V=r[17].name+"",x=[],D=new Map,M=r[17].children;const U=a=>a[17].url;for(let a=0;a<M.length;a+=1){let e=_(r,M,a),t=U(e);D.set(t,x[a]=R(t,e))}return{key:a,first:null,c(){e=t("li"),I=t("a"),L=l(V),$=m();for(let a=0;a<x.length;a+=1)x[a].c();A=g(),this.h()},l(a){e=s(a,"LI",{class:!0,style:!0});var r=c(e);I=s(r,"A",{href:!0});var t=c(I);L=n(t,V),t.forEach(o),r.forEach(o),$=E(a);for(let r=0;r<x.length;r+=1)x[r].l(a);A=g(),this.h()},h(){h(I,"href",y=r[17].url),h(e,"class","waves-effect"),p(e,"width","100%"),this.first=e},m(a,t){i(a,e,t),f(e,I),f(I,L),i(a,$,t);for(let r=0;r<x.length;r+=1)x[r].m(a,t);i(a,A,t),b||(k=d(I,"click",r[13]),b=!0)},p(a,e){r=a,2&e&&V!==(V=r[17].name+"")&&u(L,V),2&e&&y!==(y=r[17].url)&&h(I,"href",y),34&e&&(M=r[17].children,x=v(x,e,U,1,r,M,D,A.parentNode,w,R,A,_))},d(a){a&&o(e),a&&o($);for(let r=0;r<x.length;r+=1)x[r].d(a);a&&o(A),b=!1,k()}}}function F(a){let r,e,g,y,$,A,b,k,V,x,D,M,U,j,_,q,G,R,F,J,K,O,P,Q,W,X,Y,Z,aa,ra,ea,ta,la,sa,ca,na,oa,ha,ia,fa,da,ua,va,ma,ga,Ea,pa,Ia,La,ya,$a,wa,Aa=[],ba=new Map,ka=[],Va=new Map;function xa(a,r){return a[3]?T:N}let Da=xa(a),Ma=Da(a),Ua=a[1];const ja=a=>a[17].url;for(let r=0;r<Ua.length;r+=1){let e=H(a,Ua,r),t=ja(e);ba.set(t,Aa[r]=B(t,e))}let Sa=a[0]&&C(a),_a=a[1];const qa=a=>a[17].url;for(let r=0;r<_a.length;r+=1){let e=S(a,_a,r),t=qa(e);Va.set(t,ka[r]=z(t,e))}return{c(){r=t("nav"),e=t("div"),g=t("ul"),y=t("li"),$=t("a"),A=t("i"),b=l("menu"),k=m(),V=t("a"),x=l(a[4]),D=m(),M=t("a"),U=l(a[4]),j=m(),_=t("ul"),Ma.c(),q=m(),G=t("li"),R=t("a"),F=t("i"),J=l("shopping_cart"),K=m(),O=t("li"),P=t("a"),Q=t("i"),W=l("search"),X=m(),Y=t("ul");for(let a=0;a<Aa.length;a+=1)Aa[a].c();Z=m(),Sa&&Sa.c(),ra=m(),ea=t("ul"),ta=t("li"),la=t("h5"),sa=l(a[4]),ca=m();for(let a=0;a<ka.length;a+=1)ka[a].c();na=m(),oa=t("ul"),ha=t("li"),ia=t("h5"),fa=l("person"),da=m(),ua=t("ul"),va=t("li"),ma=t("h5"),ga=l("cart"),Ea=m(),pa=t("ul"),Ia=t("li"),La=t("h5"),ya=l("search"),this.h()},l(t){r=s(t,"NAV",{class:!0});var l=c(r);e=s(l,"DIV",{class:!0});var h=c(e);g=s(h,"UL",{class:!0});var i=c(g);y=s(i,"LI",{});var f=c(y);$=s(f,"A",{href:!0,"data-target":!0});var d=c($);A=s(d,"I",{class:!0});var u=c(A);b=n(u,"menu"),u.forEach(o),d.forEach(o),f.forEach(o),i.forEach(o),k=E(h),V=s(h,"A",{href:!0,class:!0,style:!0});var v=c(V);x=n(v,a[4]),v.forEach(o),D=E(h),M=s(h,"A",{href:!0,class:!0});var m=c(M);U=n(m,a[4]),m.forEach(o),j=E(h),_=s(h,"UL",{class:!0});var p=c(_);Ma.l(p),q=E(p),G=s(p,"LI",{});var I=c(G);R=s(I,"A",{href:!0,"data-target":!0});var L=c(R);F=s(L,"I",{class:!0});var w=c(F);J=n(w,"shopping_cart"),w.forEach(o),L.forEach(o),I.forEach(o),K=E(p),O=s(p,"LI",{});var S=c(O);P=s(S,"A",{href:!0,"data-target":!0});var H=c(P);Q=s(H,"I",{class:!0});var N=c(Q);W=n(N,"search"),N.forEach(o),H.forEach(o),S.forEach(o),p.forEach(o),X=E(h),Y=s(h,"UL",{id:!0,class:!0});var T=c(Y);for(let a=0;a<Aa.length;a+=1)Aa[a].l(T);T.forEach(o),h.forEach(o),Z=E(l),Sa&&Sa.l(l),l.forEach(o),ra=E(t),ea=s(t,"UL",{id:!0,class:!0});var B=c(ea);ta=s(B,"LI",{});var C=c(ta);la=s(C,"H5",{style:!0});var z=c(la);sa=n(z,a[4]),z.forEach(o),C.forEach(o),ca=E(B);for(let a=0;a<ka.length;a+=1)ka[a].l(B);B.forEach(o),na=E(t),oa=s(t,"UL",{id:!0,class:!0});var aa=c(oa);ha=s(aa,"LI",{});var $a=c(ha);ia=s($a,"H5",{style:!0});var wa=c(ia);fa=n(wa,"person"),wa.forEach(o),$a.forEach(o),aa.forEach(o),da=E(t),ua=s(t,"UL",{id:!0,class:!0});var ba=c(ua);va=s(ba,"LI",{});var Va=c(va);ma=s(Va,"H5",{style:!0});var xa=c(ma);ga=n(xa,"cart"),xa.forEach(o),Va.forEach(o),ba.forEach(o),Ea=E(t),pa=s(t,"UL",{id:!0,class:!0});var Da=c(pa);Ia=s(Da,"LI",{});var Ua=c(Ia);La=s(Ua,"H5",{style:!0});var ja=c(La);ya=n(ja,"search"),ja.forEach(o),Ua.forEach(o),Da.forEach(o),this.h()},h(){h(A,"class","material-icons"),h($,"href","#"),h($,"data-target","slide-out"),h(g,"class","left"),h(V,"href","/"),h(V,"class","brand-logo left hide-on-large-only"),p(V,"margin-left","1.75em"),h(M,"href","/"),h(M,"class","brand-logo center hide-on-med-and-down"),h(F,"class","material-icons"),h(R,"href","#"),h(R,"data-target","slide-out"),h(Q,"class","material-icons"),h(P,"href","#"),h(P,"data-target","slide-out"),h(_,"class","right"),h(Y,"id","nav-mobile"),h(Y,"class","left hide-on-med-and-down"),h(e,"class","nav-wrapper"),h(r,"class",aa=a[0]?"nav-extended":""),p(la,"text-align","center"),h(ea,"id","main"),h(ea,"class","sidenav"),p(ia,"text-align","center"),h(oa,"id","person"),h(oa,"class","sidenav"),p(ma,"text-align","center"),h(ua,"id","cart"),h(ua,"class","sidenav"),p(La,"text-align","center"),h(pa,"id","search"),h(pa,"class","sidenav")},m(t,l){i(t,r,l),f(r,e),f(e,g),f(g,y),f(y,$),f($,A),f(A,b),f(e,k),f(e,V),f(V,x),f(e,D),f(e,M),f(M,U),f(e,j),f(e,_),Ma.m(_,null),f(_,q),f(_,G),f(G,R),f(R,F),f(F,J),f(_,K),f(_,O),f(O,P),f(P,Q),f(Q,W),f(e,X),f(e,Y);for(let a=0;a<Aa.length;a+=1)Aa[a].m(Y,null);f(r,Z),Sa&&Sa.m(r,null),i(t,ra,l),i(t,ea,l),f(ea,ta),f(ta,la),f(la,sa),f(ea,ca);for(let a=0;a<ka.length;a+=1)ka[a].m(ea,null);i(t,na,l),i(t,oa,l),f(oa,ha),f(ha,ia),f(ia,fa),i(t,da,l),i(t,ua,l),f(ua,va),f(va,ma),f(ma,ga),i(t,Ea,l),i(t,pa,l),f(pa,Ia),f(Ia,La),f(La,ya),$a||(wa=[d($,"click",a[9]),d(R,"click",a[10]),d(P,"click",a[11]),d(r,"mouseleave",a[12])],$a=!0)},p(a,[e]){16&e&&u(x,a[4]),16&e&&u(U,a[4]),Da!==(Da=xa(a))&&(Ma.d(1),Ma=Da(a),Ma&&(Ma.c(),Ma.m(_,q))),258&e&&(Ua=a[1],Aa=v(Aa,e,ja,1,a,Ua,ba,Y,w,B,null,H)),a[0]?Sa?Sa.p(a,e):(Sa=C(a),Sa.c(),Sa.m(r,null)):Sa&&(Sa.d(1),Sa=null),1&e&&aa!==(aa=a[0]?"nav-extended":"")&&h(r,"class",aa),16&e&&u(sa,a[4]),34&e&&(_a=a[1],ka=v(ka,e,qa,1,a,_a,Va,ea,w,z,null,S))},i:I,o:I,d(a){a&&o(r),Ma.d();for(let a=0;a<Aa.length;a+=1)Aa[a].d();Sa&&Sa.d(),a&&o(ra),a&&o(ea);for(let a=0;a<ka.length;a+=1)ka[a].d();a&&o(na),a&&o(oa),a&&o(da),a&&o(ua),a&&o(Ea),a&&o(pa),$a=!1,L(wa)}}}function J(a,r,e){let t,l,s,c=!1,n="",o=[],h=[],i=null,f="";y((()=>{e(3,i=localStorage.getItem("token"));var a=document.querySelector("#main");e(5,t=M.Sidenav.init(a,{edge:"left"}));var r=document.querySelector("#person");M.Sidenav.init(r,{edge:"right"});var c=document.querySelector("#cart");e(6,l=M.Sidenav.init(c,{edge:"right"}));var n=document.querySelector("#search");e(7,s=M.Sidenav.init(n,{edge:"right"}));let h=window.location.host;fetch(`./media/${h}/data.json`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((a=>a.json())).then((a=>{console.log("navigation main:",a),e(1,o=a.menu),e(4,f=a.name)}))}));return[c,o,h,i,f,t,l,s,function(a){e(0,c=!0),n=a,e(2,h=o.filter(((a,r)=>a.id===n))[0].children)},()=>t.open(),()=>l.open(),()=>s.open(),()=>e(0,c=!1),()=>t.close(),()=>t.close()]}class K extends a{constructor(a){super(),r(this,a,J,F,e,{})}}function O(a){let r,e,d,u,v,g,L,y,$,w,A,b,k,V,x,D,M,U,j,S,_,q,H,N,T,B,C,G,R,z,F,J,K,O,P,Q,W,X,Y,Z,aa;return{c(){r=t("ul"),e=t("li"),d=t("a"),u=t("i"),v=l("camera_alt"),g=m(),L=t("li"),y=t("a"),$=t("i"),w=l("facebook"),A=m(),b=t("li"),k=t("a"),V=t("i"),x=l("videocam"),D=m(),M=t("li"),U=t("a"),j=t("i"),S=l("forum"),_=m(),q=t("ul"),H=t("li"),N=t("a"),T=t("i"),B=l("camera_alt"),C=m(),G=t("li"),R=t("a"),z=t("i"),F=l("facebook"),J=m(),K=t("li"),O=t("a"),P=t("i"),Q=l("videocam"),W=m(),X=t("li"),Y=t("a"),Z=t("i"),aa=l("forum"),this.h()},l(a){r=s(a,"UL",{class:!0,style:!0});var t=c(r);e=s(t,"LI",{});var l=c(e);d=s(l,"A",{href:!0,"data-target":!0});var h=c(d);u=s(h,"I",{class:!0});var i=c(u);v=n(i,"camera_alt"),i.forEach(o),h.forEach(o),l.forEach(o),g=E(t),L=s(t,"LI",{});var f=c(L);y=s(f,"A",{href:!0,"data-target":!0});var m=c(y);$=s(m,"I",{class:!0});var p=c($);w=n(p,"facebook"),p.forEach(o),m.forEach(o),f.forEach(o),A=E(t),b=s(t,"LI",{});var I=c(b);k=s(I,"A",{href:!0,"data-target":!0});var ra=c(k);V=s(ra,"I",{class:!0});var ea=c(V);x=n(ea,"videocam"),ea.forEach(o),ra.forEach(o),I.forEach(o),D=E(t),M=s(t,"LI",{});var ta=c(M);U=s(ta,"A",{href:!0,"data-target":!0});var la=c(U);j=s(la,"I",{class:!0});var sa=c(j);S=n(sa,"forum"),sa.forEach(o),la.forEach(o),ta.forEach(o),t.forEach(o),_=E(a),q=s(a,"UL",{class:!0,style:!0});var ca=c(q);H=s(ca,"LI",{});var na=c(H);N=s(na,"A",{href:!0,"data-target":!0});var oa=c(N);T=s(oa,"I",{class:!0});var ha=c(T);B=n(ha,"camera_alt"),ha.forEach(o),oa.forEach(o),na.forEach(o),C=E(ca),G=s(ca,"LI",{});var ia=c(G);R=s(ia,"A",{href:!0,"data-target":!0});var fa=c(R);z=s(fa,"I",{class:!0});var da=c(z);F=n(da,"facebook"),da.forEach(o),fa.forEach(o),ia.forEach(o),J=E(ca),K=s(ca,"LI",{});var ua=c(K);O=s(ua,"A",{href:!0,"data-target":!0});var va=c(O);P=s(va,"I",{class:!0});var ma=c(P);Q=n(ma,"videocam"),ma.forEach(o),va.forEach(o),ua.forEach(o),W=E(ca),X=s(ca,"LI",{});var ga=c(X);Y=s(ga,"A",{href:!0,"data-target":!0});var Ea=c(Y);Z=s(Ea,"I",{class:!0});var pa=c(Z);aa=n(pa,"forum"),pa.forEach(o),Ea.forEach(o),ga.forEach(o),ca.forEach(o),this.h()},h(){h(u,"class","material-icons"),h(d,"href","#"),h(d,"data-target","slide-out"),h($,"class","material-icons"),h(y,"href","#"),h(y,"data-target","slide-out"),h(V,"class","material-icons"),h(k,"href","#"),h(k,"data-target","slide-out"),h(j,"class","material-icons"),h(U,"href","#"),h(U,"data-target","slide-out"),h(r,"class","right hide-on-med-and-down"),p(r,"margin-top","0.3em"),h(T,"class","material-icons"),h(N,"href","#"),h(N,"data-target","slide-out"),h(z,"class","material-icons"),h(R,"href","#"),h(R,"data-target","slide-out"),h(P,"class","material-icons"),h(O,"href","#"),h(O,"data-target","slide-out"),h(Z,"class","material-icons"),h(Y,"href","#"),h(Y,"data-target","slide-out"),h(q,"class","right hide-on-large-only")},m(a,t){i(a,r,t),f(r,e),f(e,d),f(d,u),f(u,v),f(r,g),f(r,L),f(L,y),f(y,$),f($,w),f(r,A),f(r,b),f(b,k),f(k,V),f(V,x),f(r,D),f(r,M),f(M,U),f(U,j),f(j,S),i(a,_,t),i(a,q,t),f(q,H),f(H,N),f(N,T),f(T,B),f(q,C),f(q,G),f(G,R),f(R,z),f(z,F),f(q,J),f(q,K),f(K,O),f(O,P),f(P,Q),f(q,W),f(q,X),f(X,Y),f(Y,Z),f(Z,aa)},p:I,i:I,o:I,d(a){a&&o(r),a&&o(_),a&&o(q)}}}class P extends a{constructor(a){super(),r(this,a,null,O,e,{})}}function Q(a,r,e){const t=a.slice();return t[2]=r[e],t}function W(a,r,e){const t=a.slice();return t[2]=r[e],t}function X(a,r){let e,d,v,m,g=r[2].name+"";return{key:a,first:null,c(){e=t("li"),d=t("a"),v=l(g),this.h()},l(a){e=s(a,"LI",{style:!0});var r=c(e);d=s(r,"A",{class:!0,href:!0});var t=c(d);v=n(t,g),t.forEach(o),r.forEach(o),this.h()},h(){h(d,"class","title svelte-1ms66vb"),h(d,"href",m=r[2].url),p(e,"width","100%"),this.first=e},m(a,r){i(a,e,r),f(e,d),f(d,v)},p(a,e){r=a,1&e&&g!==(g=r[2].name+"")&&u(v,g),1&e&&m!==(m=r[2].url)&&h(d,"href",m)},d(a){a&&o(e)}}}function Y(a,r){let e,d,g,I,L,y,$,A,b,k=r[2].name+"",V=[],x=new Map,D=r[2].children;const M=a=>a[2].url;for(let a=0;a<D.length;a+=1){let e=W(r,D,a),t=M(e);x.set(t,V[a]=X(t,e))}return{key:a,first:null,c(){e=t("div"),d=t("ul"),g=t("li"),I=t("h5"),L=t("a"),y=l(k),A=m();for(let a=0;a<V.length;a+=1)V[a].c();b=m(),this.h()},l(a){e=s(a,"DIV",{class:!0});var r=c(e);d=s(r,"UL",{});var t=c(d);g=s(t,"LI",{style:!0});var l=c(g);I=s(l,"H5",{});var h=c(I);L=s(h,"A",{class:!0,href:!0});var i=c(L);y=n(i,k),i.forEach(o),h.forEach(o),l.forEach(o),A=E(t);for(let a=0;a<V.length;a+=1)V[a].l(t);t.forEach(o),b=E(r),r.forEach(o),this.h()},h(){h(L,"class","title svelte-1ms66vb"),h(L,"href",$=r[2].url),p(g,"width","100%"),h(e,"class","col s12 m3"),this.first=e},m(a,r){i(a,e,r),f(e,d),f(d,g),f(g,I),f(I,L),f(L,y),f(d,A);for(let a=0;a<V.length;a+=1)V[a].m(d,null);f(e,b)},p(a,e){r=a,1&e&&k!==(k=r[2].name+"")&&u(y,k),1&e&&$!==($=r[2].url)&&h(L,"href",$),1&e&&(D=r[2].children,V=v(V,e,M,1,r,D,x,d,w,X,null,W))},d(a){a&&o(e);for(let a=0;a<V.length;a+=1)V[a].d()}}}function Z(a){let r,e,l,n,d,u,g=[],L=new Map,y=a[0];const $=a=>a[2].url;for(let r=0;r<y.length;r+=1){let e=Q(a,y,r),t=$(e);L.set(t,g[r]=Y(t,e))}return{c(){r=t("div"),e=t("div"),l=t("div"),n=m(),d=t("div"),u=t("div");for(let a=0;a<g.length;a+=1)g[a].c();this.h()},l(a){r=s(a,"DIV",{class:!0});var t=c(r);e=s(t,"DIV",{class:!0,style:!0});var h=c(e);l=s(h,"DIV",{class:!0}),c(l).forEach(o),n=E(h),d=s(h,"DIV",{class:!0});var i=c(d);u=s(i,"DIV",{class:!0,style:!0});var f=c(u);for(let a=0;a<g.length;a+=1)g[a].l(f);f.forEach(o),i.forEach(o),h.forEach(o),t.forEach(o),this.h()},h(){h(l,"class","col s0 m1"),h(u,"class","row"),p(u,"padding","4em 0"),p(u,"margin","0 -0.75em"),h(d,"class","col s12 m10"),h(e,"class","row"),p(e,"margin","0"),h(r,"class","footer svelte-1ms66vb")},m(a,t){i(a,r,t),f(r,e),f(e,l),f(e,n),f(e,d),f(d,u);for(let a=0;a<g.length;a+=1)g[a].m(u,null)},p(a,[r]){1&r&&(y=a[0],g=v(g,r,$,1,a,y,L,u,w,Y,null,Q))},i:I,o:I,d(a){a&&o(r);for(let a=0;a<g.length;a+=1)g[a].d()}}}function aa(a,r,e){let t,l=[];return y((()=>{t=window.location.host,fetch(`./media/${t}/data.json`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((a=>a.json())).then((a=>{console.log("navigation footer:",a),e(0,l=a.footer)}))})),[l]}class ra extends a{constructor(a){super(),r(this,a,aa,Z,e,{})}}function ea(a){let r,e,l,n,d,u,v,g,I,L,y,$,w,M;const S=a[1].default,_=A(S,a,a[0],null);return y=new P({}),w=new ra({}),{c(){r=t("br"),e=m(),l=t("br"),n=m(),d=t("nav"),u=t("div"),v=t("div"),g=m(),I=t("div"),_&&_.c(),L=m(),b(y.$$.fragment),$=m(),b(w.$$.fragment),this.h()},l(a){r=s(a,"BR",{}),e=E(a),l=s(a,"BR",{}),n=E(a),d=s(a,"NAV",{class:!0,style:!0});var t=c(d);u=s(t,"DIV",{class:!0});var h=c(u);v=s(h,"DIV",{class:!0}),c(v).forEach(o),g=E(h),I=s(h,"DIV",{class:!0});var i=c(I);_&&_.l(i),L=E(i),k(y.$$.fragment,i),i.forEach(o),h.forEach(o),t.forEach(o),$=E(a),k(w.$$.fragment,a),this.h()},h(){h(v,"class","col s0 m1"),h(I,"class","col s12 m10"),h(u,"class","row"),h(d,"class","teal lighten-2"),p(d,"position","absolute")},m(a,t){i(a,r,t),i(a,e,t),i(a,l,t),i(a,n,t),i(a,d,t),f(d,u),f(u,v),f(u,g),f(u,I),_&&_.m(I,null),f(I,L),V(y,I,null),i(a,$,t),V(w,a,t),M=!0},p(a,[r]){_&&_.p&&1&r&&x(_,S,a,a[0],r,null,null)},i(a){M||(D(_,a),D(y.$$.fragment,a),D(w.$$.fragment,a),M=!0)},o(a){U(_,a),U(y.$$.fragment,a),U(w.$$.fragment,a),M=!1},d(a){a&&o(r),a&&o(e),a&&o(l),a&&o(n),a&&o(d),_&&_.d(a),j(y),a&&o($),j(w,a)}}}function ta(a,r,e){let{$$slots:t={},$$scope:l}=r;return a.$$set=a=>{"$$scope"in a&&e(0,l=a.$$scope)},[l,t]}class la extends a{constructor(a){super(),r(this,a,ta,ea,e,{})}}export{la as M,K as N};
//# sourceMappingURL=Main.svelte-b1c9ca11.js.map