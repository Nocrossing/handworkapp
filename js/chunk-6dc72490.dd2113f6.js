(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dc72490"],{"057f":function(t,n,r){var e=r("fc6a"),o=r("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(n){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?a(t):o(e(t))}},"1dde":function(t,n,r){var e=r("d039"),o=r("b622"),i=r("2d00"),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[],r=n.constructor={};return r[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},2909:function(t,n,r){"use strict";function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function o(t){if(Array.isArray(t))return e(t)}r.d(n,"a",(function(){return u}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0");function c(t,n){if(t){if("string"===typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return o(t)||i(t)||c(t)||a()}},4359:function(t,n,r){},4808:function(t,n,r){"use strict";r("4359")},"4df4":function(t,n,r){"use strict";var e=r("0366"),o=r("7b0b"),i=r("9bdd"),c=r("e95a"),a=r("50c4"),u=r("8418"),f=r("35a1");t.exports=function(t){var n,r,s,l,d,b,p=o(t),v="function"==typeof this?this:Array,y=arguments.length,m=y>1?arguments[1]:void 0,g=void 0!==m,h=f(p),w=0;if(g&&(m=e(m,y>2?arguments[2]:void 0,2)),void 0==h||v==Array&&c(h))for(n=a(p.length),r=new v(n);n>w;w++)b=g?m(p[w],w):p[w],u(r,w,b);else for(l=h.call(p),d=l.next,r=new v;!(s=d.call(l)).done;w++)b=g?i(l,m,[s.value,w],!0):s.value,u(r,w,b);return r.length=w,r}},"6d71":function(t,n,r){"use strict";var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"goods"},t._l(t.goods,(function(t){return r("goods-list-item",{attrs:{"goods-item":t}})})),1)},o=[],i=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"goods-item",on:{click:t.itemClick}},[r("div",{staticClass:"pad"},[r("img",{attrs:{src:t.goodsItem.image},on:{load:t.imageLoad}}),r("p",{staticClass:"hw_dabt"},[t._v(t._s(t.goodsItem.title))]),r("p",{staticClass:"hw_xiaobt"},[t._v(t._s(t.goodsItem.text))]),r("div",{staticClass:"hw_jiage"},[r("div",{staticClass:"hw__jg fl"},[t._v(" ￥ "),r("span",[t._v(t._s(t.goodsItem.place))])]),r("div",{staticClass:"hw_dizhi fr"},[t._v(t._s(t.goodsItem.mark))])])])])},c=[],a={name:"GoodsListItem",props:{goodsItem:{type:Object,default:function(){return{}}}},methods:{imageLoad:function(){this.$bus.$emit("itemImageLoad")},itemClick:function(){this.$router.push("/details/"+this.goodsItem.id)}}},u=a,f=(r("e56e"),r("2877")),s=Object(f["a"])(u,i,c,!1,null,"daab27ba",null),l=s.exports,d={name:"GoodsList",components:{GoodsListItem:l},props:{goods:{type:Array,default:function(){return[]}}}},b=d,p=(r("4808"),Object(f["a"])(b,e,o,!1,null,"0ff707e3",null));n["a"]=p.exports},"735b":function(t,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return i}));var e=r("1bab");function o(){return Object(e["a"])({url:"/home.json"})}function i(t){return Object(e["a"])({url:"/goods.json",params:{type:t}})}},"746f":function(t,n,r){var e=r("428f"),o=r("5135"),i=r("e538"),c=r("9bf2").f;t.exports=function(t){var n=e.Symbol||(e.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},8418:function(t,n,r){"use strict";var e=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},"9bdd":function(t,n,r){var e=r("825a"),o=r("2a62");t.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(c){throw o(t),c}}},a4d3:function(t,n,r){"use strict";var e=r("23e7"),o=r("da84"),i=r("d066"),c=r("c430"),a=r("83ab"),u=r("4930"),f=r("fdbf"),s=r("d039"),l=r("5135"),d=r("e8b5"),b=r("861d"),p=r("825a"),v=r("7b0b"),y=r("fc6a"),m=r("c04e"),g=r("5c6c"),h=r("7c73"),w=r("df75"),S=r("241c"),O=r("057f"),j=r("7418"),_=r("06cf"),A=r("9bf2"),I=r("d1e7"),x=r("9112"),C=r("6eeb"),k=r("5692"),P=r("f772"),$=r("d012"),E=r("90e3"),L=r("b622"),N=r("e538"),J=r("746f"),F=r("d44e"),G=r("69f3"),T=r("b727").forEach,M=P("hidden"),z="Symbol",B="prototype",D=L("toPrimitive"),Q=G.set,U=G.getterFor(z),W=Object[B],q=o.Symbol,H=i("JSON","stringify"),K=_.f,R=A.f,V=O.f,X=I.f,Y=k("symbols"),Z=k("op-symbols"),tt=k("string-to-symbol-registry"),nt=k("symbol-to-string-registry"),rt=k("wks"),et=o.QObject,ot=!et||!et[B]||!et[B].findChild,it=a&&s((function(){return 7!=h(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=K(W,n);e&&delete W[n],R(t,n,r),e&&t!==W&&R(W,n,e)}:R,ct=function(t,n){var r=Y[t]=h(q[B]);return Q(r,{type:z,tag:t,description:n}),a||(r.description=n),r},at=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ut=function(t,n,r){t===W&&ut(Z,n,r),p(t);var e=m(n,!0);return p(r),l(Y,e)?(r.enumerable?(l(t,M)&&t[M][e]&&(t[M][e]=!1),r=h(r,{enumerable:g(0,!1)})):(l(t,M)||R(t,M,g(1,{})),t[M][e]=!0),it(t,e,r)):R(t,e,r)},ft=function(t,n){p(t);var r=y(n),e=w(r).concat(pt(r));return T(e,(function(n){a&&!lt.call(r,n)||ut(t,n,r[n])})),t},st=function(t,n){return void 0===n?h(t):ft(h(t),n)},lt=function(t){var n=m(t,!0),r=X.call(this,n);return!(this===W&&l(Y,n)&&!l(Z,n))&&(!(r||!l(this,n)||!l(Y,n)||l(this,M)&&this[M][n])||r)},dt=function(t,n){var r=y(t),e=m(n,!0);if(r!==W||!l(Y,e)||l(Z,e)){var o=K(r,e);return!o||!l(Y,e)||l(r,M)&&r[M][e]||(o.enumerable=!0),o}},bt=function(t){var n=V(y(t)),r=[];return T(n,(function(t){l(Y,t)||l($,t)||r.push(t)})),r},pt=function(t){var n=t===W,r=V(n?Z:y(t)),e=[];return T(r,(function(t){!l(Y,t)||n&&!l(W,t)||e.push(Y[t])})),e};if(u||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=E(t),r=function(t){this===W&&r.call(Z,t),l(this,M)&&l(this[M],n)&&(this[M][n]=!1),it(this,n,g(1,t))};return a&&ot&&it(W,n,{configurable:!0,set:r}),ct(n,t)},C(q[B],"toString",(function(){return U(this).tag})),C(q,"withoutSetter",(function(t){return ct(E(t),t)})),I.f=lt,A.f=ut,_.f=dt,S.f=O.f=bt,j.f=pt,N.f=function(t){return ct(L(t),t)},a&&(R(q[B],"description",{configurable:!0,get:function(){return U(this).description}}),c||C(W,"propertyIsEnumerable",lt,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:q}),T(w(rt),(function(t){J(t)})),e({target:z,stat:!0,forced:!u},{for:function(t){var n=String(t);if(l(tt,n))return tt[n];var r=q(n);return tt[n]=r,nt[r]=n,r},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),e({target:"Object",stat:!0,forced:!u,sham:!a},{create:st,defineProperty:ut,defineProperties:ft,getOwnPropertyDescriptor:dt}),e({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),e({target:"Object",stat:!0,forced:s((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(v(t))}}),H){var vt=!u||s((function(){var t=q();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));e({target:"JSON",stat:!0,forced:vt},{stringify:function(t,n,r){var e,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(e=n,(b(n)||void 0!==t)&&!at(t))return d(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!at(n))return n}),o[1]=n,H.apply(null,o)}})}q[B][D]||x(q[B],D,q[B].valueOf),F(q,z),$[M]=!0},a630:function(t,n,r){var e=r("23e7"),o=r("4df4"),i=r("1c7e"),c=!i((function(t){Array.from(t)}));e({target:"Array",stat:!0,forced:c},{from:o})},b0c0:function(t,n,r){var e=r("83ab"),o=r("9bf2").f,i=Function.prototype,c=i.toString,a=/^\s*function ([^ (]*)/,u="name";e&&!(u in i)&&o(i,u,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},bdc2:function(t,n,r){},d28b:function(t,n,r){var e=r("746f");e("iterator")},e01a:function(t,n,r){"use strict";var e=r("23e7"),o=r("83ab"),i=r("da84"),c=r("5135"),a=r("861d"),u=r("9bf2").f,f=r("e893"),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof d?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(d,s);var b=d.prototype=s.prototype;b.constructor=d;var p=b.toString,v="Symbol(test)"==String(s("test")),y=/^Symbol\((.*)\)[^)]+$/;u(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,n=p.call(t);if(c(l,t))return"";var r=v?n.slice(7,-1):n.replace(y,"$1");return""===r?void 0:r}}),e({global:!0,forced:!0},{Symbol:d})}},e538:function(t,n,r){var e=r("b622");n.f=e},e56e:function(t,n,r){"use strict";r("bdc2")},fb6a:function(t,n,r){"use strict";var e=r("23e7"),o=r("861d"),i=r("e8b5"),c=r("23cb"),a=r("50c4"),u=r("fc6a"),f=r("8418"),s=r("b622"),l=r("1dde"),d=l("slice"),b=s("species"),p=[].slice,v=Math.max;e({target:"Array",proto:!0,forced:!d},{slice:function(t,n){var r,e,s,l=u(this),d=a(l.length),y=c(t,d),m=c(void 0===n?d:n,d);if(i(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(l,y,m);for(e=new(void 0===r?Array:r)(v(m-y,0)),s=0;y<m;y++,s++)y in l&&f(e,s,l[y]);return e.length=s,e}})}}]);
//# sourceMappingURL=chunk-6dc72490.dd2113f6.js.map