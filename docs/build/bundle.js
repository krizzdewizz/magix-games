var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e,n){t.classList[n?"add":"remove"](e)}let g;function $(t){g=t}const v=[],y=[],k=[],w=[],x=Promise.resolve();let b=!1;function _(t){k.push(t)}const C=new Set;let E=0;function A(){const t=g;do{for(;E<v.length;){const t=v[E];E++,$(t),M(t.$$)}for($(null),v.length=0,E=0;y.length;)y.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];C.has(e)||(C.add(e),e())}k.length=0}while(v.length);for(;w.length;)w.pop()();b=!1,C.clear(),$(t)}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const q=new Set;function z(t,e){t&&t.i&&(q.delete(t),t.i(e))}function N(t,n,c,s){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(n,c),s||_((()=>{const n=i.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(_)}function j(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function L(t,e){-1===t.$$.dirty[0]&&(v.push(t),b||(b=!0,x.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,o,c,s,l,a,u,f=[-1]){const d=g;$(e);const m=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};u&&u(m.root);let h=!1;if(m.ctx=c?c(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),h&&L(e,t)),n})):[],m.update(),h=!0,r(m.before_update),m.fragment=!!s&&s(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();o.intro&&z(e.$$.fragment),N(e,o.target,o.anchor,o.customElement),A()}$(d)}class T{$destroy(){j(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(t,e){if(!Array.isArray(t))throw new Error("shuffle expect an array as parameter.");e=e||{};var n,r,o=t,c=t.length,s=e.rng||Math.random;for(!0===e.copy&&(o=t.slice());c;)n=Math.floor(s()*c),r=o[c-=1],o[c]=o[n],o[n]=r;return o}G.pick=function(t,e){if(!Array.isArray(t))throw new Error("shuffle.pick() expect an array as parameter.");var n=(e=e||{}).rng||Math.random,r=e.picks||1;if("number"==typeof r&&1!==r){for(var o,c=t.length,s=t.slice(),l=[];r&&c;)o=Math.floor(n()*c),l.push(s[o]),s.splice(o,1),c-=1,r-=1;return l}return t[Math.floor(n()*t.length)]};var P=G;const R=new Array(27).fill(0).map(((t,e)=>e));function S(t){const e=[[],[],[]];return t.forEach(((t,n)=>e[n%3].push(t))),e}function B(){const t=[...R];return P(t),{stacks:S(t),round:0}}function F(t,e,n){const r=t.slice();return r[5]=e[n],r[7]=n,r}function Y(t,e,n){const r=t.slice();return r[8]=e[n],r}function D(t){let e,n,r,o,c,m,p,g,$,v=t[0].round+1+"",y=t[0].stacks,k=[];for(let e=0;e<y.length;e+=1)k[e]=J(F(t,y,e));return{c(){e=u("div"),e.textContent="Pick a card once and tell the magician 3 times which column contains the\n        card.",n=d(),r=u("div"),o=f("Round "),c=f(v),m=d(),p=u("div"),p.textContent="Click on the column which contains your picked card",g=d(),$=u("div");for(let t=0;t<k.length;t+=1)k[t].c();h(e,"class","title svelte-90mtrw"),h(r,"class","title round svelte-90mtrw"),h(p,"class","title small svelte-90mtrw"),h($,"class","cards svelte-90mtrw")},m(t,i){l(t,e,i),l(t,n,i),l(t,r,i),s(r,o),s(r,c),l(t,m,i),l(t,p,i),l(t,g,i),l(t,$,i);for(let t=0;t<k.length;t+=1)k[t].m($,null)},p(t,e){if(1&e&&v!==(v=t[0].round+1+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(c,v),7&e){let n;for(y=t[0].stacks,n=0;n<y.length;n+=1){const r=F(t,y,n);k[n]?k[n].p(r,e):(k[n]=J(r),k[n].c(),k[n].m($,null))}for(;n<k.length;n+=1)k[n].d(1);k.length=y.length}},d(t){t&&i(e),t&&i(n),t&&i(r),t&&i(m),t&&i(p),t&&i(g),t&&i($),a(k,t)}}}function H(t){let e,n,r,o,c,a,f,p,g;return{c(){e=u("div"),n=u("div"),n.textContent="You picked",r=d(),o=u("div"),a=d(),f=u("button"),f.textContent="Replay",h(n,"class","title round svelte-90mtrw"),h(o,"class",c="card card"+t[0].pickedCard+" svelte-90mtrw"),h(f,"class","replay svelte-90mtrw"),h(f,"type","button"),h(e,"class","done svelte-90mtrw")},m(c,i){l(c,e,i),s(e,n),s(e,r),s(e,o),s(e,a),s(e,f),p||(g=m(f,"click",t[3]),p=!0)},p(t,e){1&e&&c!==(c="card card"+t[0].pickedCard+" svelte-90mtrw")&&h(o,"class",c)},d(t){t&&i(e),p=!1,g()}}}function I(t){let e,n;return{c(){e=u("div"),h(e,"class",n="card card"+t[8]+" svelte-90mtrw")},m(t,n){l(t,e,n)},p(t,r){1&r&&n!==(n="card card"+t[8]+" svelte-90mtrw")&&h(e,"class",n)},d(t){t&&i(e)}}}function J(t){let e,n,r,o,c=t[5],f=[];for(let e=0;e<c.length;e+=1)f[e]=I(Y(t,c,e));function g(){return t[4](t[7])}return{c(){e=u("div");for(let t=0;t<f.length;t+=1)f[t].c();n=d(),h(e,"class","stack svelte-90mtrw"),p(e,"selected",t[7]===t[1])},m(t,c){l(t,e,c);for(let t=0;t<f.length;t+=1)f[t].m(e,null);s(e,n),r||(o=m(e,"click",g),r=!0)},p(r,o){if(t=r,1&o){let r;for(c=t[5],r=0;r<c.length;r+=1){const s=Y(t,c,r);f[r]?f[r].p(s,o):(f[r]=I(s),f[r].c(),f[r].m(e,n))}for(;r<f.length;r+=1)f[r].d(1);f.length=c.length}2&o&&p(e,"selected",t[7]===t[1])},d(t){t&&i(e),a(f,t),r=!1,o()}}}function K(e){let n;function r(t,e){return void 0!==t[0].pickedCard?H:D}let o=r(e),c=o(e);return{c(){c.c(),n=f("")},m(t,e){c.m(t,e),l(t,n,e)},p(t,[e]){o===(o=r(t))&&c?c.p(t,e):(c.d(1),c=o(t),c&&(c.c(),c.m(n.parentNode,n)))},i:t,o:t,d(t){c.d(t),t&&i(n)}}}function Q(t,e,n){let r=B(),o=-1;function c(t){n(1,o=t),setTimeout((()=>{n(1,o=-1),n(0,r=function({stacks:t,round:e},n){const r=[0,1,2].filter((t=>t!==n)),o=S([...t[r[0]],...t[n],...t[r[1]]]),c=e+1;return{stacks:o,round:c,pickedCard:3===c?o[1][4]:void 0}}(r,t))}),300)}return[r,o,c,function(){n(0,r=B())},t=>c(t)]}class U extends T{constructor(t){super(),O(this,t,Q,K,c,{})}}function V(e){let n,r,o,c,a,f,m,p,g;return f=new U({}),{c(){var t;n=u("div"),r=u("h2"),r.textContent="Magix Games",o=d(),c=u("div"),a=d(),(t=f.$$.fragment)&&t.c(),m=d(),p=u("a"),p.textContent="Fork me on Github",h(c,"class","magician svelte-1q82m0l"),h(p,"class","info svelte-1q82m0l"),h(p,"href","https://github.com/krizzdewizz/magix-games"),h(n,"class","main svelte-1q82m0l")},m(t,e){l(t,n,e),s(n,r),s(n,o),s(n,c),s(n,a),N(f,n,null),s(n,m),s(n,p),g=!0},p:t,i(t){g||(z(f.$$.fragment,t),g=!0)},o(t){!function(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),(void 0).c.push((()=>{q.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}(f.$$.fragment,t),g=!1},d(t){t&&i(n),j(f)}}}return new class extends T{constructor(t){super(),O(this,t,null,V,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
