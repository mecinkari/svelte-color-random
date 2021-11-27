var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let $;function h(t){$=t}const p=[],m=[],g=[],b=[],y=Promise.resolve();let v=!1;function _(t){g.push(t)}let x=!1;const k=new Set;function w(){if(!x){x=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];h(n),E(n.$$)}for(h(null),p.length=0;m.length;)m.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];k.has(n)||(k.add(n),n())}g.length=0}while(p.length);for(;b.length;)b.pop()();v=!1,x=!1,k.clear()}}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const C=new Set;function z(t,n){t&&t.i&&(C.delete(t),t.i(n))}function A(t,e,c,s){const{fragment:u,on_mount:l,on_destroy:i,after_update:a}=t.$$;u&&u.m(e,c),s||_((()=>{const e=l.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(_)}function j(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function M(t,n){-1===t.$$.dirty[0]&&(p.push(t),v||(v=!0,y.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(n,r,c,s,u,i,a,f=[-1]){const d=$;h(n);const p=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(p.root);let m=!1;if(p.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&M(n,t)),e})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&z(n.$$.fragment),A(n,r.target,r.anchor,r.customElement),w()}h(d)}class N{$destroy(){j(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function O(n){let e;return{c(){e=i("nav"),e.innerHTML='<span class="svelte-198i0lw">Color Random</span>',d(e,"class","svelte-198i0lw")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class T extends N{constructor(t){super(),L(this,t,null,O,c,{})}}function B(t){let n,e,o,r,c,$,h,p,m,g,b,y,v,_;return e=new T({}),{c(){var s;n=i("main"),(s=e.$$.fragment)&&s.c(),o=f(),r=i("section"),c=i("div"),$=i("p"),h=a("background-color: "),p=a(t[0]),m=f(),g=i("button"),g.textContent="Click me",d($,"class","svelte-e0zd5h"),d(c,"class","svelte-e0zd5h"),d(g,"class","svelte-e0zd5h"),d(r,"style",b=`background: ${t[0]}`),d(r,"class","svelte-e0zd5h"),d(n,"class","svelte-e0zd5h")},m(l,i){var a,f,d,b;u(l,n,i),A(e,n,null),s(n,o),s(n,r),s(r,c),s(c,$),s($,h),s($,p),s(r,m),s(r,g),y=!0,v||(a=g,f="click",d=t[1],a.addEventListener(f,d,b),_=()=>a.removeEventListener(f,d,b),v=!0)},p(t,[n]){(!y||1&n)&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(p,t[0]),(!y||1&n&&b!==(b=`background: ${t[0]}`))&&d(r,"style",b)},i(t){y||(z(e.$$.fragment,t),y=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(C.has(t))return;C.add(t),(void 0).c.push((()=>{C.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}(e.$$.fragment,t),y=!1},d(t){t&&l(n),j(e),v=!1,_()}}}function S(){let t=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];return t[Math.floor(Math.random()*t.length)]}function q(t,n,e){let o,r=["1","e","9","0","f","f"];return t.$$.update=()=>{4&t.$$.dirty&&e(0,o="#"+r.join(""))},[o,function(){for(let t=0;t<r.length;t++)e(2,r[t]=S(),r)},r]}return new class extends N{constructor(t){super(),L(this,t,q,B,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
