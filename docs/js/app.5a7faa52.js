(function(e){function t(t){for(var r,u,c=t[0],i=t[1],l=t[2],s=0,p=[];s<c.length;s++)u=c[s],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function u(e){return c.p+"js/"+({about:"about",more:"more"}[e]||e)+"."+{about:"5d80fb7b",more:"b071a62f"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-gh-pages/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},5068:function(e,t,n){},5080:function(e,t,n){"use strict";var r=n("5068"),o=n.n(r);o.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u=n("d4ec"),c=n("262e"),i=n("2caf"),l=n("9ab4"),s=n("60a3"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("hr"),n("h1",[e._v("Vue Dummy APP")]),n("h1",[e._v(e._s(e.msg))]),n("h1",[e._v(e._s(e.firstName))]),n("h1",[e._v(e._s(e.lastName))]),n("h1",[e._v(e._s(e.fullName))]),n("hr"),n("h4",[e._v(e._s(e.count))]),n("button",{on:{click:function(t){return e.incrementCounter()}}},[e._v("Increment")]),n("button",{on:{click:function(t){return e.decrementCounter()}}},[e._v("Decrement")]),n("h4",[e._v("analytics V0.3 (moved router)")]),n("h4",[e._v("analytics V0.4 (auto track)")]),n("h4",[e._v("analytics V0.5 (added more)")]),n("h4",[e._v("analytics V0.6 (added page titles)")])])},p=[],m=n("bee2"),v=function(e){Object(c["a"])(n,e);var t=Object(i["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.firstName="Grant",e.lastName="TF",e.count=0,e}return Object(m["a"])(n,[{key:"incrementCounter",value:function(){this.$ga.event({eventCategory:"click",eventAction:"increment",eventLabel:"add one",eventValue:1}),this.count++}},{key:"decrementCounter",value:function(){this.$ga.event({eventCategory:"click",eventAction:"decrement",eventLabel:"subtract one",eventValue:1}),this.count--}},{key:"fullName",get:function(){return this.firstName+" "+this.lastName}}]),n}(s["c"]);Object(l["a"])([Object(s["b"])()],v.prototype,"msg",void 0),v=Object(l["a"])([s["a"]],v);var d=v,b=d,h=(n("5080"),n("2877")),g=Object(h["a"])(b,f,p,!1,null,"fa73cd6a",null),y=g.exports,_=function(e){Object(c["a"])(n,e);var t=Object(i["a"])(n);function n(){return Object(u["a"])(this,n),t.apply(this,arguments)}return n}(s["c"]);_=Object(l["a"])([Object(s["a"])({components:{HelloWorld:y}})],_);var j=_,O=j,w=(n("5c0b"),Object(h["a"])(O,o,a,!1,null,null,null)),k=w.exports,P=(n("d3b7"),n("8c4f")),A=n("0284"),x=n.n(A),C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("br"),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" "),r("router-link",{attrs:{to:"/more"}},[e._v("More")]),r("HelloWorld",{attrs:{msg:"Vue (Vue.js) Dummy App on GH-PAGES  App"}})],1)},V=[],N={name:"Home",components:{HelloWorld:y}},E=N,H=Object(h["a"])(E,C,V,!1,null,null,null),M=H.exports;r["a"].use(P["a"]);var S=[{path:"/",name:"Home",component:M,meta:{auth:!1,title:"DemoHome"}},{path:"/about",name:"About",meta:{auth:!1,title:"About"},component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/more",name:"More",meta:{auth:!1,title:"More"},component:function(){return n.e("more").then(n.bind(null,"5dde"))}}],T=new P["a"]({mode:"history",base:"/vue-gh-pages/",routes:S});r["a"].use(x.a,{id:"UA-171520444-1",router:T});var $=T,D=n("2f62");r["a"].use(D["a"]);var L=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:$,store:L,render:function(e){return e(k)}}).$mount("#app")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.5a7faa52.js.map