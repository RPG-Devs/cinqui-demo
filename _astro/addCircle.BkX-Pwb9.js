import{S as D,i as U,s as V,e as j,a as g,b as I,c as P,d as b,f as k,g as q,h as d,j as A,k as _,l as F,m as v,n as y,o as C,p as N,q as T,r as X,t as Y,u as z}from"./index.hSps1fwu.js";/* empty css                                   */function E(c,e,l){const o=c.slice();return o[13]=e[l],o}function S(c){let e,l,o,f,i,u,s;function r(...n){return c[6](c[13],...n)}function t(){return c[7](c[13])}return{c(){e=I("circle"),this.h()},l(n){e=q(n,"circle",{cx:!0,cy:!0,r:!0,fill:!0,class:!0}),k(e).forEach(d),this.h()},h(){_(e,"cx",l=c[13].cx),_(e,"cy",o=c[13].cy),_(e,"r",f=c[13].r),_(e,"fill",i=c[13]===c[1]?"#FF0000":"#FF4800"),_(e,"class","svelte-bpbele")},m(n,a){F(n,e,a),u||(s=[y(e,"click",r),y(e,"contextmenu",T(z(t)))],u=!0)},p(n,a){c=n,a&1&&l!==(l=c[13].cx)&&_(e,"cx",l),a&1&&o!==(o=c[13].cy)&&_(e,"cy",o),a&1&&f!==(f=c[13].r)&&_(e,"r",f),a&3&&i!==(i=c[13]===c[1]?"#FF0000":"#FF4800")&&_(e,"fill",i)},d(n){n&&d(e),u=!1,X(s)}}}function w(c){let e,l,o="Ajustar diámetro",f,i,u,s,r;return{c(){e=g("div"),l=g("p"),l.textContent=o,f=P(),i=g("input"),this.h()},l(t){e=b(t,"DIV",{class:!0});var n=k(e);l=b(n,"P",{"data-svelte-h":!0}),Y(l)!=="svelte-1ufasb3"&&(l.textContent=o),f=A(n),i=b(n,"INPUT",{type:!0,class:!0}),n.forEach(d),this.h()},h(){_(i,"type","range"),i.value=u=c[1].r,_(i,"class","svelte-bpbele"),_(e,"class","adjuster svelte-bpbele")},m(t,n){F(t,e,n),v(e,l),v(e,f),v(e,i),s||(r=y(i,"input",c[4]),s=!0)},p(t,n){n&2&&u!==(u=t[1].r)&&(i.value=u)},d(t){t&&d(e),s=!1,r()}}}function B(c){let e,l,o,f,i,u=j(c[0]),s=[];for(let t=0;t<u.length;t+=1)s[t]=S(E(c,u,t));let r=c[2]&&w(c);return{c(){e=g("div"),l=I("svg");for(let t=0;t<s.length;t+=1)s[t].c();o=P(),r&&r.c(),this.h()},l(t){e=b(t,"DIV",{class:!0});var n=k(e);l=q(n,"svg",{class:!0});var a=k(l);for(let p=0;p<s.length;p+=1)s[p].l(a);a.forEach(d),o=A(n),r&&r.l(n),n.forEach(d),this.h()},h(){_(l,"class","h-full w-full bg-transparent svelte-bpbele"),_(e,"class","absolute bg-transparent h-full w-full")},m(t,n){F(t,e,n),v(e,l);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(l,null);v(e,o),r&&r.m(e,null),f||(i=y(l,"click",c[3]),f=!0)},p(t,[n]){if(n&39){u=j(t[0]);let a;for(a=0;a<u.length;a+=1){const p=E(t,u,a);s[a]?s[a].p(p,n):(s[a]=S(p),s[a].c(),s[a].m(l,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=u.length}t[2]?r?r.p(t,n):(r=w(t),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:C,o:C,d(t){t&&d(e),N(s,t),r&&r.d(),f=!1,i()}}}function G(c){return c.map(({cx:e,cy:l,r:o})=>({cx:e,cy:l,r:o}))}function H(c,e,l){let o=0,f=[[]],i=[],u,s=!1,r=!1;function t(h){if(s){l(2,s=!1),r&&p();return}const m={cx:h.clientX,cy:h.clientY,r:50};l(0,i=i.concat(m)),l(1,u=m),p()}function n(h){l(1,u.r=+h.target.value,u),l(0,i),r=!0}function a(h,m){s||(m.stopPropagation(),l(1,u=h))}function p(){const h=f.slice(0,++o);h.push(G(i)),f=h}return[i,u,s,t,n,a,(h,m)=>a(h,m),h=>{l(2,s=!s),s&&l(1,u=h)}]}class O extends D{constructor(e){super(),U(this,e,H,B,V,{})}}export{O as default};