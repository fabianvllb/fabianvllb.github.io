(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function zr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ro="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ao=zr(ro);function Ti(e){return!!e||e===""}function Ur(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?oo(r):Ur(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(re(e))return e;if(J(e))return e}}const io=/;(?![^(]*\))/g,so=/:(.+)/;function oo(e){const t={};return e.split(io).forEach(n=>{if(n){const r=n.split(so);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Br(e){let t="";if(re(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Br(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ia=e=>re(e)?e:e==null?"":R(e)||J(e)&&(e.toString===Ri||!L(e.toString))?JSON.stringify(e,Ni,2):String(e),Ni=(e,t)=>t&&t.__v_isRef?Ni(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!R(t)&&!Li(t)?String(t):t,K={},wt=[],Ae=()=>{},lo=()=>!1,fo=/^on[^a-z]/,zn=e=>fo.test(e),Hr=e=>e.startsWith("onUpdate:"),fe=Object.assign,Wr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},co=Object.prototype.hasOwnProperty,z=(e,t)=>co.call(e,t),R=Array.isArray,_t=e=>Un(e)==="[object Map]",Mi=e=>Un(e)==="[object Set]",L=e=>typeof e=="function",re=e=>typeof e=="string",Yr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Fi=e=>J(e)&&L(e.then)&&L(e.catch),Ri=Object.prototype.toString,Un=e=>Ri.call(e),uo=e=>Un(e).slice(8,-1),Li=e=>Un(e)==="[object Object]",Kr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,_n=zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},mo=/-(\w)/g,Re=Bn(e=>e.replace(mo,(t,n)=>n?n.toUpperCase():"")),po=/\B([A-Z])/g,St=Bn(e=>e.replace(po,"-$1").toLowerCase()),Hn=Bn(e=>e.charAt(0).toUpperCase()+e.slice(1)),rr=Bn(e=>e?`on${Hn(e)}`:""),Ht=(e,t)=>!Object.is(e,t),ar=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},In=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ho=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Sa;const go=()=>Sa||(Sa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ie;class vo{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!t&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function bo(e,t=Ie){t&&t.active&&t.effects.push(e)}const Vr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},ji=e=>(e.w&Ge)>0,Di=e=>(e.n&Ge)>0,yo=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ge},xo=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];ji(a)&&!Di(a)?a.delete(e):t[n++]=a,a.w&=~Ge,a.n&=~Ge}t.length=n}},mr=new WeakMap;let jt=0,Ge=1;const pr=30;let xe;const ct=Symbol(""),hr=Symbol("");class qr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bo(this,r)}run(){if(!this.active)return this.fn();let t=xe,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,qe=!0,Ge=1<<++jt,jt<=pr?yo(this):Ta(this),this.fn()}finally{jt<=pr&&xo(this),Ge=1<<--jt,xe=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(Ta(this),this.onStop&&this.onStop(),this.active=!1)}}function Ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const $i=[];function Tt(){$i.push(qe),qe=!1}function Nt(){const e=$i.pop();qe=e===void 0?!0:e}function pe(e,t,n){if(qe&&xe){let r=mr.get(e);r||mr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Vr()),zi(a)}}function zi(e,t){let n=!1;jt<=pr?Di(e)||(e.n|=Ge,n=!ji(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function $e(e,t,n,r,a,i){const s=mr.get(e);if(!s)return;let o=[];if(t==="clear")o=[...s.values()];else if(n==="length"&&R(e))s.forEach((l,u)=>{(u==="length"||u>=r)&&o.push(l)});else switch(n!==void 0&&o.push(s.get(n)),t){case"add":R(e)?Kr(n)&&o.push(s.get("length")):(o.push(s.get(ct)),_t(e)&&o.push(s.get(hr)));break;case"delete":R(e)||(o.push(s.get(ct)),_t(e)&&o.push(s.get(hr)));break;case"set":_t(e)&&o.push(s.get(ct));break}if(o.length===1)o[0]&&gr(o[0]);else{const l=[];for(const u of o)u&&l.push(...u);gr(Vr(l))}}function gr(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Na(r);for(const r of n)r.computed||Na(r)}function Na(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const wo=zr("__proto__,__v_isRef,__isVue"),Ui=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yr)),_o=Xr(),ko=Xr(!1,!0),Ao=Xr(!0),Ma=Oo();function Oo(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,s=this.length;i<s;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Tt();const r=U(this)[t].apply(this,n);return Nt(),r}}),e}function Xr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Uo:Ki:t?Yi:Wi).get(r))return r;const s=R(r);if(!e&&s&&z(Ma,a))return Reflect.get(Ma,a,i);const o=Reflect.get(r,a,i);return(Yr(a)?Ui.has(a):wo(a))||(e||pe(r,"get",a),t)?o:se(o)?s&&Kr(a)?o:o.value:J(o)?e?Vi(o):Qr(o):o}}const Co=Bi(),Eo=Bi(!0);function Bi(e=!1){return function(n,r,a,i){let s=n[r];if(Ct(s)&&se(s)&&!se(a))return!1;if(!e&&(!Sn(a)&&!Ct(a)&&(s=U(s),a=U(a)),!R(n)&&se(s)&&!se(a)))return s.value=a,!0;const o=R(n)&&Kr(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(o?Ht(a,s)&&$e(n,"set",r,a):$e(n,"add",r,a)),l}}function Po(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&$e(e,"delete",t,void 0),r}function Io(e,t){const n=Reflect.has(e,t);return(!Yr(t)||!Ui.has(t))&&pe(e,"has",t),n}function So(e){return pe(e,"iterate",R(e)?"length":ct),Reflect.ownKeys(e)}const Hi={get:_o,set:Co,deleteProperty:Po,has:Io,ownKeys:So},To={get:Ao,set(e,t){return!0},deleteProperty(e,t){return!0}},No=fe({},Hi,{get:ko,set:Eo}),Jr=e=>e,Wn=e=>Reflect.getPrototypeOf(e);function ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&pe(a,"get",t),pe(a,"get",i));const{has:s}=Wn(a),o=r?Jr:n?ea:Wt;if(s.call(a,t))return o(e.get(t));if(s.call(a,i))return o(e.get(i));e!==a&&e.get(t)}function fn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function cn(e,t=!1){return e=e.__v_raw,!t&&pe(U(e),"iterate",ct),Reflect.get(e,"size",e)}function Fa(e){e=U(e);const t=U(this);return Wn(t).has.call(t,e)||(t.add(e),$e(t,"add",e,e)),this}function Ra(e,t){t=U(t);const n=U(this),{has:r,get:a}=Wn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const s=a.call(n,e);return n.set(e,t),i?Ht(t,s)&&$e(n,"set",e,t):$e(n,"add",e,t),this}function La(e){const t=U(this),{has:n,get:r}=Wn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&$e(t,"delete",e,void 0),i}function ja(){const e=U(this),t=e.size!==0,n=e.clear();return t&&$e(e,"clear",void 0,void 0),n}function un(e,t){return function(r,a){const i=this,s=i.__v_raw,o=U(s),l=t?Jr:e?ea:Wt;return!e&&pe(o,"iterate",ct),s.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function dn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),s=_t(i),o=e==="entries"||e===Symbol.iterator&&s,l=e==="keys"&&s,u=a[e](...r),d=n?Jr:t?ea:Wt;return!t&&pe(i,"iterate",l?hr:ct),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:o?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Mo(){const e={get(i){return ln(this,i)},get size(){return cn(this)},has:fn,add:Fa,set:Ra,delete:La,clear:ja,forEach:un(!1,!1)},t={get(i){return ln(this,i,!1,!0)},get size(){return cn(this)},has:fn,add:Fa,set:Ra,delete:La,clear:ja,forEach:un(!1,!0)},n={get(i){return ln(this,i,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:un(!0,!1)},r={get(i){return ln(this,i,!0,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=dn(i,!1,!1),n[i]=dn(i,!0,!1),t[i]=dn(i,!1,!0),r[i]=dn(i,!0,!0)}),[e,n,t,r]}const[Fo,Ro,Lo,jo]=Mo();function Gr(e,t){const n=t?e?jo:Lo:e?Ro:Fo;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const Do={get:Gr(!1,!1)},$o={get:Gr(!1,!0)},zo={get:Gr(!0,!1)},Wi=new WeakMap,Yi=new WeakMap,Ki=new WeakMap,Uo=new WeakMap;function Bo(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ho(e){return e.__v_skip||!Object.isExtensible(e)?0:Bo(uo(e))}function Qr(e){return Ct(e)?e:Zr(e,!1,Hi,Do,Wi)}function Wo(e){return Zr(e,!1,No,$o,Yi)}function Vi(e){return Zr(e,!0,To,zo,Ki)}function Zr(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const s=Ho(e);if(s===0)return e;const o=new Proxy(e,s===2?r:n);return a.set(e,o),o}function kt(e){return Ct(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ct(e){return!!(e&&e.__v_isReadonly)}function Sn(e){return!!(e&&e.__v_isShallow)}function qi(e){return kt(e)||Ct(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Xi(e){return In(e,"__v_skip",!0),e}const Wt=e=>J(e)?Qr(e):e,ea=e=>J(e)?Vi(e):e;function Ji(e){qe&&xe&&(e=U(e),zi(e.dep||(e.dep=Vr())))}function Gi(e,t){e=U(e),e.dep&&gr(e.dep)}function se(e){return!!(e&&e.__v_isRef===!0)}function vr(e){return Yo(e,!1)}function Yo(e,t){return se(e)?e:new Ko(e,t)}class Ko{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:U(t),this._value=n?t:Wt(t)}get value(){return Ji(this),this._value}set value(t){const n=this.__v_isShallow||Sn(t)||Ct(t);t=n?t:U(t),Ht(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Wt(t),Gi(this))}}function Vo(e){return se(e)?e.value:e}const qo={get:(e,t,n)=>Vo(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Qi(e){return kt(e)?e:new Proxy(e,qo)}var Zi;class Xo{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Zi]=!1,this._dirty=!0,this.effect=new qr(t,()=>{this._dirty||(this._dirty=!0,Gi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Ji(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Zi="__v_isReadonly";function Jo(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new Xo(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Yn(i,t,n)}return a}function Oe(e,t,n,r){if(L(e)){const i=Xe(e,t,n,r);return i&&Fi(i)&&i.catch(s=>{Yn(s,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function Yn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const s=t.proxy,o=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,s,o)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,s,o]);return}}Go(e,n,a,r)}function Go(e,t,n,r=!0){console.error(e)}let Yt=!1,br=!1;const ie=[];let Ne=0;const At=[];let De=null,st=0;const es=Promise.resolve();let ta=null;function Qo(e){const t=ta||es;return e?t.then(this?e.bind(this):e):t}function Zo(e){let t=Ne+1,n=ie.length;for(;t<n;){const r=t+n>>>1;Kt(ie[r])<e?t=r+1:n=r}return t}function na(e){(!ie.length||!ie.includes(e,Yt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?ie.push(e):ie.splice(Zo(e.id),0,e),ts())}function ts(){!Yt&&!br&&(br=!0,ta=es.then(rs))}function el(e){const t=ie.indexOf(e);t>Ne&&ie.splice(t,1)}function tl(e){R(e)?At.push(...e):(!De||!De.includes(e,e.allowRecurse?st+1:st))&&At.push(e),ts()}function Da(e,t=Yt?Ne+1:0){for(;t<ie.length;t++){const n=ie[t];n&&n.pre&&(ie.splice(t,1),t--,n())}}function ns(e){if(At.length){const t=[...new Set(At)];if(At.length=0,De){De.push(...t);return}for(De=t,De.sort((n,r)=>Kt(n)-Kt(r)),st=0;st<De.length;st++)De[st]();De=null,st=0}}const Kt=e=>e.id==null?1/0:e.id,nl=(e,t)=>{const n=Kt(e)-Kt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function rs(e){br=!1,Yt=!0,ie.sort(nl);const t=Ae;try{for(Ne=0;Ne<ie.length;Ne++){const n=ie[Ne];n&&n.active!==!1&&Xe(n,null,14)}}finally{Ne=0,ie.length=0,ns(),Yt=!1,ta=null,(ie.length||At.length)&&rs()}}function rl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),s=i&&t.slice(7);if(s&&s in r){const d=`${s==="modelValue"?"model":s}Modifiers`,{number:m,trim:v}=r[d]||K;v&&(a=n.map(k=>k.trim())),m&&(a=n.map(ho))}let o,l=r[o=rr(t)]||r[o=rr(Re(t))];!l&&i&&(l=r[o=rr(St(t))]),l&&Oe(l,e,6,a);const u=r[o+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Oe(u,e,6,a)}}function as(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let s={},o=!1;if(!L(e)){const l=u=>{const d=as(u,t,!0);d&&(o=!0,fe(s,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!o?(J(e)&&r.set(e,null),null):(R(i)?i.forEach(l=>s[l]=null):fe(s,i),J(e)&&r.set(e,s),s)}function Kn(e,t){return!e||!zn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,St(t))||z(e,t))}let Me=null,is=null;function Tn(e){const t=Me;return Me=e,is=e&&e.type.__scopeId||null,t}function al(e,t=Me,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&qa(-1);const i=Tn(t);let s;try{s=e(...a)}finally{Tn(i),r._d&&qa(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function ir(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[s],slots:o,attrs:l,emit:u,render:d,renderCache:m,data:v,setupState:k,ctx:F,inheritAttrs:T}=e;let j,y;const C=Tn(e);try{if(n.shapeFlag&4){const D=a||r;j=Te(d.call(D,D,m,i,k,v,F)),y=l}else{const D=t;j=Te(D.length>1?D(i,{attrs:l,slots:o,emit:u}):D(i,null)),y=t.props?l:il(l)}}catch(D){$t.length=0,Yn(D,e,1),j=ee(mt)}let M=j;if(y&&T!==!1){const D=Object.keys(y),{shapeFlag:H}=M;D.length&&H&7&&(s&&D.some(Hr)&&(y=sl(y,s)),M=Et(M,y))}return n.dirs&&(M=Et(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),j=M,Tn(C),j}const il=e=>{let t;for(const n in e)(n==="class"||n==="style"||zn(n))&&((t||(t={}))[n]=e[n]);return t},sl=(e,t)=>{const n={};for(const r in e)(!Hr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ol(e,t,n){const{props:r,children:a,component:i}=e,{props:s,children:o,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$a(r,s,u):!!s;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(s[v]!==r[v]&&!Kn(u,v))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:r===s?!1:r?s?$a(r,s,u):!0:!!s;return!1}function $a(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Kn(n,i))return!0}return!1}function ll({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const fl=e=>e.__isSuspense;function cl(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):tl(e)}function ul(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function sr(e,t,n=!1){const r=ne||Me;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const za={};function kn(e,t,n){return ss(e,t,n)}function ss(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:s}=K){const o=ne;let l,u=!1,d=!1;if(se(e)?(l=()=>e.value,u=Sn(e)):kt(e)?(l=()=>e,r=!0):R(e)?(d=!0,u=e.some(y=>kt(y)||Sn(y)),l=()=>e.map(y=>{if(se(y))return y.value;if(kt(y))return bt(y);if(L(y))return Xe(y,o,2)})):L(e)?t?l=()=>Xe(e,o,2):l=()=>{if(!(o&&o.isUnmounted))return m&&m(),Oe(e,o,3,[v])}:l=Ae,t&&r){const y=l;l=()=>bt(y())}let m,v=y=>{m=j.onStop=()=>{Xe(y,o,4)}};if(qt)return v=Ae,t?n&&Oe(t,o,3,[l(),d?[]:void 0,v]):l(),Ae;let k=d?[]:za;const F=()=>{if(!!j.active)if(t){const y=j.run();(r||u||(d?y.some((C,M)=>Ht(C,k[M])):Ht(y,k)))&&(m&&m(),Oe(t,o,3,[y,k===za?void 0:k,v]),k=y)}else j.run()};F.allowRecurse=!!t;let T;a==="sync"?T=F:a==="post"?T=()=>de(F,o&&o.suspense):(F.pre=!0,o&&(F.id=o.uid),T=()=>na(F));const j=new qr(l,T);return t?n?F():k=j.run():a==="post"?de(j.run.bind(j),o&&o.suspense):j.run(),()=>{j.stop(),o&&o.scope&&Wr(o.scope.effects,j)}}function dl(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?os(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const s=ne;Pt(this);const o=ss(a,i.bind(r),n);return s?Pt(s):dt(),o}function os(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function bt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))bt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)bt(e[n],t);else if(Mi(e)||_t(e))e.forEach(n=>{bt(n,t)});else if(Li(e))for(const n in e)bt(e[n],t);return e}function ra(e){return L(e)?{setup:e,name:e.name}:e}const An=e=>!!e.type.__asyncLoader,ls=e=>e.type.__isKeepAlive;function ml(e,t){fs(e,"a",t)}function pl(e,t){fs(e,"da",t)}function fs(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Vn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ls(a.parent.vnode)&&hl(r,t,n,a),a=a.parent}}function hl(e,t,n,r){const a=Vn(t,e,r,!0);cs(()=>{Wr(r[t],a)},n)}function Vn(e,t,n=ne,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Tt(),Pt(n);const o=Oe(t,n,e,s);return dt(),Nt(),o});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=ne)=>(!qt||e==="sp")&&Vn(e,(...r)=>t(...r),n),gl=He("bm"),vl=He("m"),bl=He("bu"),yl=He("u"),xl=He("bum"),cs=He("um"),wl=He("sp"),_l=He("rtg"),kl=He("rtc");function Al(e,t=ne){Vn("ec",e,t)}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let s=0;s<a.length;s++){const o=a[s];i&&(o.oldValue=i[s].value);let l=o.dir[r];l&&(Tt(),Oe(l,n,8,[e.el,o,e,t]),Nt())}}const us="components";function Ol(e,t){return El(us,e,!0,t)||e}const Cl=Symbol();function El(e,t,n=!0,r=!1){const a=Me||ne;if(a){const i=a.type;if(e===us){const o=rf(i,!1);if(o&&(o===t||o===Re(t)||o===Hn(Re(t))))return i}const s=Ua(a[e]||i[e],t)||Ua(a.appContext[e],t);return!s&&r?i:s}}function Ua(e,t){return e&&(e[t]||e[Re(t)]||e[Hn(Re(t))])}const yr=e=>e?_s(e)?la(e)||e.proxy:yr(e.parent):null,Nn=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yr(e.parent),$root:e=>yr(e.root),$emit:e=>e.emit,$options:e=>aa(e),$forceUpdate:e=>e.f||(e.f=()=>na(e.update)),$nextTick:e=>e.n||(e.n=Qo.bind(e.proxy)),$watch:e=>dl.bind(e)}),Pl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:s,type:o,appContext:l}=e;let u;if(t[0]!=="$"){const k=s[t];if(k!==void 0)switch(k){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&z(r,t))return s[t]=1,r[t];if(a!==K&&z(a,t))return s[t]=2,a[t];if((u=e.propsOptions[0])&&z(u,t))return s[t]=3,i[t];if(n!==K&&z(n,t))return s[t]=4,n[t];xr&&(s[t]=0)}}const d=Nn[t];let m,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=o.__cssModules)&&(m=m[t]))return m;if(n!==K&&z(n,t))return s[t]=4,n[t];if(v=l.config.globalProperties,z(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&z(a,t)?(a[t]=n,!0):r!==K&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},s){let o;return!!n[s]||e!==K&&z(e,s)||t!==K&&z(t,s)||(o=i[0])&&z(o,s)||z(r,s)||z(Nn,s)||z(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let xr=!0;function Il(e){const t=aa(e),n=e.proxy,r=e.ctx;xr=!1,t.beforeCreate&&Ba(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:s,watch:o,provide:l,inject:u,created:d,beforeMount:m,mounted:v,beforeUpdate:k,updated:F,activated:T,deactivated:j,beforeDestroy:y,beforeUnmount:C,destroyed:M,unmounted:D,render:H,renderTracked:ce,renderTriggered:ae,errorCaptured:be,serverPrefetch:ge,expose:Le,inheritAttrs:Ft,components:rn,directives:an,filters:er}=t;if(u&&Sl(u,r,null,e.appContext.config.unwrapInjectedRef),s)for(const G in s){const W=s[G];L(W)&&(r[G]=W.bind(n))}if(a){const G=a.call(n,n);J(G)&&(e.data=Qr(G))}if(xr=!0,i)for(const G in i){const W=i[G],tt=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):Ae,sn=!L(W)&&L(W.set)?W.set.bind(n):Ae,nt=ve({get:tt,set:sn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ce=>nt.value=Ce})}if(o)for(const G in o)ds(o[G],r,n,G);if(l){const G=L(l)?l.call(n):l;Reflect.ownKeys(G).forEach(W=>{ul(W,G[W])})}d&&Ba(d,e,"c");function oe(G,W){R(W)?W.forEach(tt=>G(tt.bind(n))):W&&G(W.bind(n))}if(oe(gl,m),oe(vl,v),oe(bl,k),oe(yl,F),oe(ml,T),oe(pl,j),oe(Al,be),oe(kl,ce),oe(_l,ae),oe(xl,C),oe(cs,D),oe(wl,ge),R(Le))if(Le.length){const G=e.exposed||(e.exposed={});Le.forEach(W=>{Object.defineProperty(G,W,{get:()=>n[W],set:tt=>n[W]=tt})})}else e.exposed||(e.exposed={});H&&e.render===Ae&&(e.render=H),Ft!=null&&(e.inheritAttrs=Ft),rn&&(e.components=rn),an&&(e.directives=an)}function Sl(e,t,n=Ae,r=!1){R(e)&&(e=wr(e));for(const a in e){const i=e[a];let s;J(i)?"default"in i?s=sr(i.from||a,i.default,!0):s=sr(i.from||a):s=sr(i),se(s)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[a]=s}}function Ba(e,t,n){Oe(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ds(e,t,n,r){const a=r.includes(".")?os(n,r):()=>n[r];if(re(e)){const i=t[e];L(i)&&kn(a,i)}else if(L(e))kn(a,e.bind(n));else if(J(e))if(R(e))e.forEach(i=>ds(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&kn(a,i,e)}}function aa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(t);let l;return o?l=o:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>Mn(l,u,s,!0)),Mn(l,t,s)),J(t)&&i.set(t,l),l}function Mn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Mn(e,i,n,!0),a&&a.forEach(s=>Mn(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const o=Tl[s]||n&&n[s];e[s]=o?o(e[s],t[s]):t[s]}return e}const Tl={data:Ha,props:it,emits:it,methods:it,computed:it,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:it,directives:it,watch:Ml,provide:Ha,inject:Nl};function Ha(e,t){return t?e?function(){return fe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Nl(e,t){return it(wr(e),wr(t))}function wr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function it(e,t){return e?fe(fe(Object.create(null),e),t):t}function Ml(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function Fl(e,t,n,r=!1){const a={},i={};In(i,qn,1),e.propsDefaults=Object.create(null),ms(e,t,a,i);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=r?a:Wo(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Rl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:s}}=e,o=U(a),[l]=e.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Kn(e.emitsOptions,v))continue;const k=t[v];if(l)if(z(i,v))k!==i[v]&&(i[v]=k,u=!0);else{const F=Re(v);a[F]=_r(l,o,F,k,e,!1)}else k!==i[v]&&(i[v]=k,u=!0)}}}else{ms(e,t,a,i)&&(u=!0);let d;for(const m in o)(!t||!z(t,m)&&((d=St(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=_r(l,o,m,void 0,e,!0)):delete a[m]);if(i!==o)for(const m in i)(!t||!z(t,m)&&!0)&&(delete i[m],u=!0)}u&&$e(e,"set","$attrs")}function ms(e,t,n,r){const[a,i]=e.propsOptions;let s=!1,o;if(t)for(let l in t){if(_n(l))continue;const u=t[l];let d;a&&z(a,d=Re(l))?!i||!i.includes(d)?n[d]=u:(o||(o={}))[d]=u:Kn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,s=!0)}if(i){const l=U(n),u=o||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=_r(a,l,m,u[m],e,!z(u,m))}}return s}function _r(e,t,n,r,a,i){const s=e[n];if(s!=null){const o=z(s,"default");if(o&&r===void 0){const l=s.default;if(s.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(Pt(a),r=u[n]=l.call(null,t),dt())}else r=l}s[0]&&(i&&!o?r=!1:s[1]&&(r===""||r===St(n))&&(r=!0))}return r}function ps(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,s={},o=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,k]=ps(m,t,!0);fe(s,v),k&&o.push(...k)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return J(e)&&r.set(e,wt),wt;if(R(i))for(let d=0;d<i.length;d++){const m=Re(i[d]);Wa(m)&&(s[m]=K)}else if(i)for(const d in i){const m=Re(d);if(Wa(m)){const v=i[d],k=s[m]=R(v)||L(v)?{type:v}:v;if(k){const F=Va(Boolean,k.type),T=Va(String,k.type);k[0]=F>-1,k[1]=T<0||F<T,(F>-1||z(k,"default"))&&o.push(m)}}}const u=[s,o];return J(e)&&r.set(e,u),u}function Wa(e){return e[0]!=="$"}function Ya(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ka(e,t){return Ya(e)===Ya(t)}function Va(e,t){return R(t)?t.findIndex(n=>Ka(n,e)):L(t)&&Ka(t,e)?0:-1}const hs=e=>e[0]==="_"||e==="$stable",ia=e=>R(e)?e.map(Te):[Te(e)],Ll=(e,t,n)=>{if(t._n)return t;const r=al((...a)=>ia(t(...a)),n);return r._c=!1,r},gs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(hs(a))continue;const i=e[a];if(L(i))t[a]=Ll(a,i,r);else if(i!=null){const s=ia(i);t[a]=()=>s}}},vs=(e,t)=>{const n=ia(t);e.slots.default=()=>n},jl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),In(t,"_",n)):gs(t,e.slots={})}else e.slots={},t&&vs(e,t);In(e.slots,qn,1)},Dl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,s=K;if(r.shapeFlag&32){const o=t._;o?n&&o===1?i=!1:(fe(a,t),!n&&o===1&&delete a._):(i=!t.$stable,gs(t,a)),s=t}else t&&(vs(e,t),s={default:1});if(i)for(const o in a)!hs(o)&&!(o in s)&&delete a[o]};function bs(){return{app:null,config:{isNativeTag:lo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $l=0;function zl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!J(a)&&(a=null);const i=bs(),s=new Set;let o=!1;const l=i.app={_uid:$l++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:sf,get config(){return i.config},set config(u){},use(u,...d){return s.has(u)||(u&&L(u.install)?(s.add(u),u.install(l,...d)):L(u)&&(s.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!o){const v=ee(r,a);return v.appContext=i,d&&t?t(v,u):e(v,u,m),o=!0,l._container=u,u.__vue_app__=l,la(v.component)||v.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function kr(e,t,n,r,a=!1){if(R(e)){e.forEach((v,k)=>kr(v,t&&(R(t)?t[k]:t),n,r,a));return}if(An(r)&&!a)return;const i=r.shapeFlag&4?la(r.component)||r.component.proxy:r.el,s=a?null:i,{i:o,r:l}=e,u=t&&t.r,d=o.refs===K?o.refs={}:o.refs,m=o.setupState;if(u!=null&&u!==l&&(re(u)?(d[u]=null,z(m,u)&&(m[u]=null)):se(u)&&(u.value=null)),L(l))Xe(l,o,12,[s,d]);else{const v=re(l),k=se(l);if(v||k){const F=()=>{if(e.f){const T=v?z(m,l)?m[l]:d[l]:l.value;a?R(T)&&Wr(T,i):R(T)?T.includes(i)||T.push(i):v?(d[l]=[i],z(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=s,z(m,l)&&(m[l]=s)):k&&(l.value=s,e.k&&(d[e.k]=s))};s?(F.id=-1,de(F,n)):F()}}}const de=cl;function Ul(e){return Bl(e)}function Bl(e,t){const n=go();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:s,createText:o,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:v,setScopeId:k=Ae,insertStaticContent:F}=e,T=(f,c,p,g=null,h=null,w=null,A=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Lt(f,c)&&(g=on(f),Ce(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:b,ref:I,shapeFlag:E}=c;switch(b){case sa:j(f,c,p,g);break;case mt:y(f,c,p,g);break;case On:f==null&&C(c,p,g,A);break;case Se:rn(f,c,p,g,h,w,A,x,_);break;default:E&1?H(f,c,p,g,h,w,A,x,_):E&6?an(f,c,p,g,h,w,A,x,_):(E&64||E&128)&&b.process(f,c,p,g,h,w,A,x,_,gt)}I!=null&&h&&kr(I,f&&f.ref,w,c||f,!c)},j=(f,c,p,g)=>{if(f==null)r(c.el=o(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},y=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},C=(f,c,p,g)=>{[f.el,f.anchor]=F(f.children,c,p,g,f.el,f.anchor)},M=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=v(f),r(f,p,g),f=h;r(c,p,g)},D=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=v(f),a(f),f=p;a(c)},H=(f,c,p,g,h,w,A,x,_)=>{A=A||c.type==="svg",f==null?ce(c,p,g,h,w,A,x,_):ge(f,c,h,w,A,x,_)},ce=(f,c,p,g,h,w,A,x)=>{let _,b;const{type:I,props:E,shapeFlag:S,transition:N,dirs:$}=f;if(_=f.el=s(f.type,w,E&&E.is,E),S&8?d(_,f.children):S&16&&be(f.children,_,null,g,h,w&&I!=="foreignObject",A,x),$&&rt(f,null,g,"created"),E){for(const B in E)B!=="value"&&!_n(B)&&i(_,B,null,E[B],w,f.children,g,h,je);"value"in E&&i(_,"value",null,E.value),(b=E.onVnodeBeforeMount)&&Pe(b,g,f)}ae(_,f,f.scopeId,A,g),$&&rt(f,null,g,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&N&&!N.persisted;Y&&N.beforeEnter(_),r(_,c,p),((b=E&&E.onVnodeMounted)||Y||$)&&de(()=>{b&&Pe(b,g,f),Y&&N.enter(_),$&&rt(f,null,g,"mounted")},h)},ae=(f,c,p,g,h)=>{if(p&&k(f,p),g)for(let w=0;w<g.length;w++)k(f,g[w]);if(h){let w=h.subTree;if(c===w){const A=h.vnode;ae(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},be=(f,c,p,g,h,w,A,x,_=0)=>{for(let b=_;b<f.length;b++){const I=f[b]=x?Ve(f[b]):Te(f[b]);T(null,I,c,p,g,h,w,A,x)}},ge=(f,c,p,g,h,w,A)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:I}=c;_|=f.patchFlag&16;const E=f.props||K,S=c.props||K;let N;p&&at(p,!1),(N=S.onVnodeBeforeUpdate)&&Pe(N,p,c,f),I&&rt(c,f,p,"beforeUpdate"),p&&at(p,!0);const $=h&&c.type!=="foreignObject";if(b?Le(f.dynamicChildren,b,x,p,g,$,w):A||W(f,c,x,null,p,g,$,w,!1),_>0){if(_&16)Ft(x,c,E,S,p,g,h);else if(_&2&&E.class!==S.class&&i(x,"class",null,S.class,h),_&4&&i(x,"style",E.style,S.style,h),_&8){const Y=c.dynamicProps;for(let B=0;B<Y.length;B++){const Z=Y[B],ye=E[Z],vt=S[Z];(vt!==ye||Z==="value")&&i(x,Z,ye,vt,h,f.children,p,g,je)}}_&1&&f.children!==c.children&&d(x,c.children)}else!A&&b==null&&Ft(x,c,E,S,p,g,h);((N=S.onVnodeUpdated)||I)&&de(()=>{N&&Pe(N,p,c,f),I&&rt(c,f,p,"updated")},g)},Le=(f,c,p,g,h,w,A)=>{for(let x=0;x<c.length;x++){const _=f[x],b=c[x],I=_.el&&(_.type===Se||!Lt(_,b)||_.shapeFlag&70)?m(_.el):p;T(_,b,I,null,g,h,w,A,!0)}},Ft=(f,c,p,g,h,w,A)=>{if(p!==g){if(p!==K)for(const x in p)!_n(x)&&!(x in g)&&i(f,x,p[x],null,A,c.children,h,w,je);for(const x in g){if(_n(x))continue;const _=g[x],b=p[x];_!==b&&x!=="value"&&i(f,x,b,_,A,c.children,h,w,je)}"value"in g&&i(f,"value",p.value,g.value)}},rn=(f,c,p,g,h,w,A,x,_)=>{const b=c.el=f?f.el:o(""),I=c.anchor=f?f.anchor:o("");let{patchFlag:E,dynamicChildren:S,slotScopeIds:N}=c;N&&(x=x?x.concat(N):N),f==null?(r(b,p,g),r(I,p,g),be(c.children,p,I,h,w,A,x,_)):E>0&&E&64&&S&&f.dynamicChildren?(Le(f.dynamicChildren,S,p,h,w,A,x),(c.key!=null||h&&c===h.subTree)&&ys(f,c,!0)):W(f,c,p,I,h,w,A,x,_)},an=(f,c,p,g,h,w,A,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,A,_):er(c,p,g,h,w,A,_):ka(f,c,_)},er=(f,c,p,g,h,w,A)=>{const x=f.component=Ql(f,g,h);if(ls(f)&&(x.ctx.renderer=gt),Zl(x),x.asyncDep){if(h&&h.registerDep(x,oe),!f.el){const _=x.subTree=ee(mt);y(null,_,c,p)}return}oe(x,f,c,p,h,w,A)},ka=(f,c,p)=>{const g=c.component=f.component;if(ol(f,c,p))if(g.asyncDep&&!g.asyncResolved){G(g,c,p);return}else g.next=c,el(g.update),g.update();else c.el=f.el,g.vnode=c},oe=(f,c,p,g,h,w,A)=>{const x=()=>{if(f.isMounted){let{next:I,bu:E,u:S,parent:N,vnode:$}=f,Y=I,B;at(f,!1),I?(I.el=$.el,G(f,I,A)):I=$,E&&ar(E),(B=I.props&&I.props.onVnodeBeforeUpdate)&&Pe(B,N,I,$),at(f,!0);const Z=ir(f),ye=f.subTree;f.subTree=Z,T(ye,Z,m(ye.el),on(ye),f,h,w),I.el=Z.el,Y===null&&ll(f,Z.el),S&&de(S,h),(B=I.props&&I.props.onVnodeUpdated)&&de(()=>Pe(B,N,I,$),h)}else{let I;const{el:E,props:S}=c,{bm:N,m:$,parent:Y}=f,B=An(c);if(at(f,!1),N&&ar(N),!B&&(I=S&&S.onVnodeBeforeMount)&&Pe(I,Y,c),at(f,!0),E&&nr){const Z=()=>{f.subTree=ir(f),nr(E,f.subTree,f,h,null)};B?c.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=ir(f);T(null,Z,p,g,f,h,w),c.el=Z.el}if($&&de($,h),!B&&(I=S&&S.onVnodeMounted)){const Z=c;de(()=>Pe(I,Y,Z),h)}(c.shapeFlag&256||Y&&An(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new qr(x,()=>na(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,at(f,!0),b()},G=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Rl(f,c.props,g,p),Dl(f,c.children,p),Tt(),Da(),Nt()},W=(f,c,p,g,h,w,A,x,_=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,E=c.children,{patchFlag:S,shapeFlag:N}=c;if(S>0){if(S&128){sn(b,E,p,g,h,w,A,x,_);return}else if(S&256){tt(b,E,p,g,h,w,A,x,_);return}}N&8?(I&16&&je(b,h,w),E!==b&&d(p,E)):I&16?N&16?sn(b,E,p,g,h,w,A,x,_):je(b,h,w,!0):(I&8&&d(p,""),N&16&&be(E,p,g,h,w,A,x,_))},tt=(f,c,p,g,h,w,A,x,_)=>{f=f||wt,c=c||wt;const b=f.length,I=c.length,E=Math.min(b,I);let S;for(S=0;S<E;S++){const N=c[S]=_?Ve(c[S]):Te(c[S]);T(f[S],N,p,null,h,w,A,x,_)}b>I?je(f,h,w,!0,!1,E):be(c,p,g,h,w,A,x,_,E)},sn=(f,c,p,g,h,w,A,x,_)=>{let b=0;const I=c.length;let E=f.length-1,S=I-1;for(;b<=E&&b<=S;){const N=f[b],$=c[b]=_?Ve(c[b]):Te(c[b]);if(Lt(N,$))T(N,$,p,null,h,w,A,x,_);else break;b++}for(;b<=E&&b<=S;){const N=f[E],$=c[S]=_?Ve(c[S]):Te(c[S]);if(Lt(N,$))T(N,$,p,null,h,w,A,x,_);else break;E--,S--}if(b>E){if(b<=S){const N=S+1,$=N<I?c[N].el:g;for(;b<=S;)T(null,c[b]=_?Ve(c[b]):Te(c[b]),p,$,h,w,A,x,_),b++}}else if(b>S)for(;b<=E;)Ce(f[b],h,w,!0),b++;else{const N=b,$=b,Y=new Map;for(b=$;b<=S;b++){const me=c[b]=_?Ve(c[b]):Te(c[b]);me.key!=null&&Y.set(me.key,b)}let B,Z=0;const ye=S-$+1;let vt=!1,Ca=0;const Rt=new Array(ye);for(b=0;b<ye;b++)Rt[b]=0;for(b=N;b<=E;b++){const me=f[b];if(Z>=ye){Ce(me,h,w,!0);continue}let Ee;if(me.key!=null)Ee=Y.get(me.key);else for(B=$;B<=S;B++)if(Rt[B-$]===0&&Lt(me,c[B])){Ee=B;break}Ee===void 0?Ce(me,h,w,!0):(Rt[Ee-$]=b+1,Ee>=Ca?Ca=Ee:vt=!0,T(me,c[Ee],p,null,h,w,A,x,_),Z++)}const Ea=vt?Hl(Rt):wt;for(B=Ea.length-1,b=ye-1;b>=0;b--){const me=$+b,Ee=c[me],Pa=me+1<I?c[me+1].el:g;Rt[b]===0?T(null,Ee,p,Pa,h,w,A,x,_):vt&&(B<0||b!==Ea[B]?nt(Ee,p,Pa,2):B--)}}},nt=(f,c,p,g,h=null)=>{const{el:w,type:A,transition:x,children:_,shapeFlag:b}=f;if(b&6){nt(f.component.subTree,c,p,g);return}if(b&128){f.suspense.move(c,p,g);return}if(b&64){A.move(f,c,p,gt);return}if(A===Se){r(w,c,p);for(let E=0;E<_.length;E++)nt(_[E],c,p,g);r(f.anchor,c,p);return}if(A===On){M(f,c,p);return}if(g!==2&&b&1&&x)if(g===0)x.beforeEnter(w),r(w,c,p),de(()=>x.enter(w),h);else{const{leave:E,delayLeave:S,afterLeave:N}=x,$=()=>r(w,c,p),Y=()=>{E(w,()=>{$(),N&&N()})};S?S(w,$,Y):Y()}else r(w,c,p)},Ce=(f,c,p,g=!1,h=!1)=>{const{type:w,props:A,ref:x,children:_,dynamicChildren:b,shapeFlag:I,patchFlag:E,dirs:S}=f;if(x!=null&&kr(x,null,p,f,!0),I&256){c.ctx.deactivate(f);return}const N=I&1&&S,$=!An(f);let Y;if($&&(Y=A&&A.onVnodeBeforeUnmount)&&Pe(Y,c,f),I&6)no(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}N&&rt(f,null,c,"beforeUnmount"),I&64?f.type.remove(f,c,p,h,gt,g):b&&(w!==Se||E>0&&E&64)?je(b,c,p,!1,!0):(w===Se&&E&384||!h&&I&16)&&je(_,c,p),g&&Aa(f)}($&&(Y=A&&A.onVnodeUnmounted)||N)&&de(()=>{Y&&Pe(Y,c,f),N&&rt(f,null,c,"unmounted")},p)},Aa=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===Se){to(p,g);return}if(c===On){D(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:x}=h,_=()=>A(p,w);x?x(f.el,w,_):_()}else w()},to=(f,c)=>{let p;for(;f!==c;)p=v(f),a(f),f=p;a(c)},no=(f,c,p)=>{const{bum:g,scope:h,update:w,subTree:A,um:x}=f;g&&ar(g),h.stop(),w&&(w.active=!1,Ce(A,f,c,p)),x&&de(x,c),de(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},je=(f,c,p,g=!1,h=!1,w=0)=>{for(let A=w;A<f.length;A++)Ce(f[A],c,p,g,h)},on=f=>f.shapeFlag&6?on(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Oa=(f,c,p)=>{f==null?c._vnode&&Ce(c._vnode,null,null,!0):T(c._vnode||null,f,c,null,null,null,p),Da(),ns(),c._vnode=f},gt={p:T,um:Ce,m:nt,r:Aa,mt:er,mc:be,pc:W,pbc:Le,n:on,o:e};let tr,nr;return t&&([tr,nr]=t(gt)),{render:Oa,hydrate:tr,createApp:zl(Oa,tr)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ys(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const s=r[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=Ve(a[i]),o.el=s.el),n||ys(s,o))}}function Hl(e){const t=e.slice(),n=[0];let r,a,i,s,o;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,s=n.length-1;i<s;)o=i+s>>1,e[n[o]]<u?i=o+1:s=o;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,s=n[i-1];i-- >0;)n[i]=s,s=t[s];return n}const Wl=e=>e.__isTeleport,Se=Symbol(void 0),sa=Symbol(void 0),mt=Symbol(void 0),On=Symbol(void 0),$t=[];let _e=null;function Je(e=!1){$t.push(_e=e?null:[])}function Yl(){$t.pop(),_e=$t[$t.length-1]||null}let Vt=1;function qa(e){Vt+=e}function xs(e){return e.dynamicChildren=Vt>0?_e||wt:null,Yl(),Vt>0&&_e&&_e.push(e),e}function ut(e,t,n,r,a,i){return xs(X(e,t,n,r,a,i,!0))}function Kl(e,t,n,r,a){return xs(ee(e,t,n,r,a,!0))}function Ar(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const qn="__vInternal",ws=({key:e})=>e!=null?e:null,Cn=({ref:e,ref_key:t,ref_for:n})=>e!=null?re(e)||se(e)||L(e)?{i:Me,r:e,k:t,f:!!n}:e:null;function X(e,t=null,n=null,r=0,a=null,i=e===Se?0:1,s=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ws(t),ref:t&&Cn(t),scopeId:is,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return o?(oa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),Vt>0&&!s&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const ee=Vl;function Vl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Cl)&&(e=mt),Ar(e)){const o=Et(e,t,!0);return n&&oa(o,n),Vt>0&&!i&&_e&&(o.shapeFlag&6?_e[_e.indexOf(e)]=o:_e.push(o)),o.patchFlag|=-2,o}if(af(e)&&(e=e.__vccOpts),t){t=ql(t);let{class:o,style:l}=t;o&&!re(o)&&(t.class=Br(o)),J(l)&&(qi(l)&&!R(l)&&(l=fe({},l)),t.style=Ur(l))}const s=re(e)?1:fl(e)?128:Wl(e)?64:J(e)?4:L(e)?2:0;return X(e,t,n,r,a,s,i,!0)}function ql(e){return e?qi(e)||qn in e?fe({},e):e:null}function Et(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:s}=e,o=t?Xl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&ws(o),ref:t&&t.ref?n&&a?R(a)?a.concat(Cn(t)):[a,Cn(t)]:Cn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Se?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),el:e.el,anchor:e.anchor}}function Or(e=" ",t=0){return ee(sa,null,e,t)}function Xn(e,t){const n=ee(On,null,e);return n.staticCount=t,n}function Fn(e="",t=!1){return t?(Je(),Kl(mt,null,e)):ee(mt,null,e)}function Te(e){return e==null||typeof e=="boolean"?ee(mt):R(e)?ee(Se,null,e.slice()):typeof e=="object"?Ve(e):ee(sa,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function oa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),oa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(qn in t)?t._ctx=Me:a===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Me},n=32):(t=String(t),r&64?(n=16,t=[Or(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Br([t.class,r.class]));else if(a==="style")t.style=Ur([t.style,r.style]);else if(zn(a)){const i=t[a],s=r[a];s&&i!==s&&!(R(i)&&i.includes(s))&&(t[a]=i?[].concat(i,s):s)}else a!==""&&(t[a]=r[a])}return t}function Pe(e,t,n,r=null){Oe(e,t,7,[n,r])}const Jl=bs();let Gl=0;function Ql(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Jl,i={uid:Gl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new vo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ps(r,a),emitsOptions:as(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=rl.bind(null,i),e.ce&&e.ce(i),i}let ne=null;const Pt=e=>{ne=e,e.scope.on()},dt=()=>{ne&&ne.scope.off(),ne=null};function _s(e){return e.vnode.shapeFlag&4}let qt=!1;function Zl(e,t=!1){qt=t;const{props:n,children:r}=e.vnode,a=_s(e);Fl(e,n,a,t),jl(e,r);const i=a?ef(e,t):void 0;return qt=!1,i}function ef(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Xi(new Proxy(e.ctx,Pl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?nf(e):null;Pt(e),Tt();const i=Xe(r,e,0,[e.props,a]);if(Nt(),dt(),Fi(i)){if(i.then(dt,dt),t)return i.then(s=>{Xa(e,s,t)}).catch(s=>{Yn(s,e,0)});e.asyncDep=i}else Xa(e,i,t)}else ks(e,t)}function Xa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=Qi(t)),ks(e,n)}let Ja;function ks(e,t,n){const r=e.type;if(!e.render){if(!t&&Ja&&!r.render){const a=r.template||aa(e).template;if(a){const{isCustomElement:i,compilerOptions:s}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,u=fe(fe({isCustomElement:i,delimiters:o},s),l);r.render=Ja(a,u)}}e.render=r.render||Ae}Pt(e),Tt(),Il(e),Nt(),dt()}function tf(e){return new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}})}function nf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=tf(e))},slots:e.slots,emit:e.emit,expose:t}}function la(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Qi(Xi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Nn)return Nn[n](e)}}))}function rf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function af(e){return L(e)&&"__vccOpts"in e}const ve=(e,t)=>Jo(e,t,qt);function As(e,t,n){const r=arguments.length;return r===2?J(t)&&!R(t)?Ar(t)?ee(e,null,[t]):ee(e,t):ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ar(n)&&(n=[n]),ee(e,t,n))}const sf="3.2.41",of="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,Ga=ot&&ot.createElement("template"),lf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ot.createElementNS(of,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const s=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ga.innerHTML=r?`<svg>${e}</svg>`:e;const o=Ga.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ff(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function cf(e,t,n){const r=e.style,a=re(n);if(n&&!a){for(const i in n)Cr(r,i,n[i]);if(t&&!re(t))for(const i in t)n[i]==null&&Cr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Qa=/\s*!important$/;function Cr(e,t,n){if(R(n))n.forEach(r=>Cr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=uf(e,t);Qa.test(n)?e.setProperty(St(r),n.replace(Qa,""),"important"):e[r]=n}}const Za=["Webkit","Moz","ms"],or={};function uf(e,t){const n=or[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return or[t]=r;r=Hn(r);for(let a=0;a<Za.length;a++){const i=Za[a]+r;if(i in e)return or[t]=i}return t}const ei="http://www.w3.org/1999/xlink";function df(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ei,t.slice(6,t.length)):e.setAttributeNS(ei,t,n);else{const i=ao(t);n==null||i&&!Ti(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function mf(e,t,n,r,a,i,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ti(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function pf(e,t,n,r){e.addEventListener(t,n,r)}function hf(e,t,n,r){e.removeEventListener(t,n,r)}function gf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),s=i[t];if(r&&s)s.value=r;else{const[o,l]=vf(t);if(r){const u=i[t]=xf(r,a);pf(e,o,u,l)}else s&&(hf(e,o,s,l),i[t]=void 0)}}const ti=/(?:Once|Passive|Capture)$/;function vf(e){let t;if(ti.test(e)){t={};let r;for(;r=e.match(ti);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),t]}let lr=0;const bf=Promise.resolve(),yf=()=>lr||(bf.then(()=>lr=0),lr=Date.now());function xf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(wf(r,n.value),t,5,[r])};return n.value=e,n.attached=yf(),n}function wf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ni=/^on[a-z]/,_f=(e,t,n,r,a=!1,i,s,o,l)=>{t==="class"?ff(e,r,a):t==="style"?cf(e,n,r):zn(t)?Hr(t)||gf(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):kf(e,t,r,a))?mf(e,t,r,i,s,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),df(e,t,r,a))};function kf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ni.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ni.test(t)&&re(n)?!1:t in e}const Af=fe({patchProp:_f},lf);let ri;function Of(){return ri||(ri=Ul(Af))}const Cf=(...e)=>{const t=Of().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Ef(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function Ef(e){return re(e)?document.querySelector(e):e}const Pf="/personal-page/images/upm_leyenda.png",If="/personal-page/images/logo-usal-white.png",Sf={class:"flex flex-row justify-center"},Tf={class:"flex w-4/5 justify-between"},Nf={class:"flex flex-row space-x-10 py-5"},Mf={class:"space-x-2 hover:text-[#95B2B0]"},Ff=X("a",{href:"https://github.com/Fabianvc88",target:"_blank"},"GitHub",-1),Rf={class:"space-x-2 hover:text-[#95B2B0]"},Lf=X("a",{href:"https://www.linkedin.com/in/fabian-villalobos/",target:"_blank"},"LinkedIn",-1),jf={class:"space-x-2 hover:text-[#95B2B0]"},Df=X("a",{href:"https://kitecoms.com/",target:"_blank"},"KiteComs",-1),$f={class:"flex items-center"},zf={key:1},Uf={__name:"Navbar",setup(e){const t=vr(!1);return(n,r)=>{const a=Ol("font-awesome-icon");return Je(),ut("nav",Sf,[X("div",Tf,[X("div",Nf,[X("div",Mf,[ee(a,{icon:"fa-brands fa-github"}),Ff]),X("div",Rf,[ee(a,{icon:"fa-brands fa-linkedin"}),Lf]),X("div",jf,[ee(a,{icon:"fa-regular fa-paper-plane"}),Df])]),X("div",$f,[t.value?Fn("",!0):(Je(),ut("button",{key:0,onClick:r[0]||(r[0]=i=>t.value=!t.value),class:"rounded-md h-10 px-3 py-2 bg-gradient-to-r from-sky-500 to-blue-500 hover:opacity-90"},"Contact Me")),t.value?(Je(),ut("p",zf,"fwolfcs@gmail.com or through LinkedIn")):Fn("",!0)])])])}}},Bf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Hf={},Wf={class:"h-[12rem] w-[12rem] max-w-[12rem] border"};function Yf(e,t){return Je(),ut("div",Wf,"This is an image")}const Kf=Bf(Hf,[["render",Yf]]),Vf={class:"mx-36 my-2 space-y-5"},qf=X("h1",{class:"text-2xl font-bold"}," Hello there! Welcome to my personal page. ",-1),Xf=Xn('<div class="space-y-8"><p class="text-justify">I&#39;m Fabian and I&#39;m a passionate software engineer with experience in web development and automation quality assurance. Currently finishing my Master\u2019s Degree in Computer Science at the Polytechnic University of Madrid, I have specialized on web development on my own, starting by mastering React and then frameworks like Vue.js and Next.js. For back end development I usually go with Node but I also work with Go and Java. Even though I mainly focus on webdev, I am also very interested in game development and DevOps. I learned many more languages, tools, design patterns, etc, which you can find in my LinkedIn profile or at the skills section below. \u{1F60A} </p><p>Currently \u{1F4CD} Madrid - Spain</p><hr class="border-[#474747]"></div><div class="space-y-5"><p class="text-xl underline">Education</p><div class="flex flex-row items-center"><img class="w-36 mr-2" src="'+Pf+'" alt=""><div><p>Master&#39;s Degree in Computer Science</p><p class="text-[#9cc2ff]">Polytechnic University of Madrid (Spain)</p></div></div><div class="flex flex-row items-center"><img class="w-32 mr-6" src="'+If+'" alt=""><div><p>Bachelor&#39;s Degree in Computer Science</p><p class="text-[#ffa0a0]">University of Salamanca (Spain)</p></div></div><hr class="border-[#474747]"></div>',2),Jf={class:"space-y-5"},Gf=X("p",{class:"text-xl underline"},"Taken CS, Engineering and Project Management Coursework",-1),Qf={class:"text-lg"},Zf={key:0,class:"pl-10 list-disc"},ec=Xn("<li>Programming I, II &amp; III:</li><li>Advanced Programming</li><li>Data Structures and Algorithms I &amp; II</li><li>Computer Structures I &amp; II</li><li>Computer Arquitecture</li><li>Operating Systems I &amp; II</li><li>Computer Networks I &amp; II</li><li>Systems Administration</li><li>Computer Systems Security</li><li>Information Theory and Coding/Encryption Theory</li><li>Database Design</li><li>Database Systems</li><li>Graphical Interfaces Design</li><li>Human-Computer Interaction</li><li>Software Engineering I &amp; II</li><li>Software Project Management</li><li>Intelligent Systems</li><li>Distributed Systems</li><li>Digital Animation</li><li>Modeling and Simulation of Systems</li><li>...</li>",21),tc=[ec],nc={class:"text-lg"},rc={key:0,class:"pl-10 list-disc"},ac=Xn("<li>Data Processes</li><li>Advanced Intelligent Systems</li><li>Intelligent Data Analysis</li><li>Interactive Systems</li><li>Embedded and Ubicious Systems</li><li>Advanced Concepts of Software Engineering</li><li>Emerging Technologies for Business Oportunities</li><li>Strategic Planning</li><li>Project Management</li><li>Quality Assurance and Information Security </li><li>Computer Graphics</li><li>Design and Security of Computer Networks</li><li>Advanced Operating Systems</li><li>Scientific Computing</li>",14),ic=[ac],sc=X("hr",{class:"border-[#474747]"},null,-1),oc=Xn('<div class="space-y-5"><p class="text-xl underline">Projects</p><div><p>Videogames:</p><ul class="pl-10 list-disc"><li>Pirate Bomb: Development of a 2D pirate-themed game using Unity and C#. \u{1F525}</li><li>Pokemon Catch: Development of a two player 2D arcade game for two different platforms. Made using C# + WPF for Windows and Objective-C + Cocoa for macOS.</li><li>Meteorite Run: 3D game made with Unreal Engine 4.</li></ul></div><div><p>Web Apps:</p><ul class="pl-10 list-disc"><li>2Code: Web app for solving programming exercises with multiple programming languages support that compiles and tests the solutions at a remote server. Made using JavaScript, React, Node and PostgresQL. \u{1F525}</li><li>Virtual Ledgers: Website that implements multiple shortest path algorithms to find and render the shortest routes between two points in a city. Made using Javascript, React, Leaftet, Node and PostgresQL (+PostGIS). \u{1F525}</li><li>Personal Webpage: This website is made using Javascript, Tailwindcss and Vue.</li></ul></div><div> Other apps: <ul class="pl-10 list-disc"><li>City Tour Planner: Java agents-based simulator program for creating and managing tourism routes.</li><li>Spotify clone: Console-based music library manager made with Java.</li></ul></div><hr class="border-[#474747]"></div><div class="space-y-5"><p class="text-xl underline">Skills</p><div class="grid grid-cols-2"><div class="space-y-5"><div class="w-[80%]"><p>Programming languages I know: (Starting from those that I like the most!)</p><ul class="pl-10 list-disc columns-3"><li>Javascript \u{1F525}</li><li>Java \u{1F525}</li><li>C</li><li>C#</li><li>C++</li><li>Objective-C</li><li>R</li><li>Python</li><li>SQL</li><li>Perl</li><li>PHP</li><li>Ada</li><li>Common Lisp</li><li>Prolog</li></ul></div><div class="w-[54%]"><p>Software, IDEs, etc:</p><ul class="pl-10 list-disc columns-2"><li>Visual Studio Code</li><li>Unity</li><li>Unreal Engine</li><li>MS Project</li><li>Git</li><li>Jira</li><li>Taiga</li><li>Jenkins</li></ul></div></div><div><div class="space-y-5"><div class="w-[50%]"><p>Languages:</p><ul class="pl-10 list-disc"><li>Spanish - Native</li><li>French - Fluent</li><li>English - Fluent</li></ul></div></div></div></div><hr class="border-[#474747]"></div>',2),lc={__name:"App",setup(e){const t=vr(!1),n=vr(!1);return(r,a)=>(Je(),ut(Se,null,[ee(Uf),X("main",null,[X("div",Vf,[qf,ee(Kf,{class:"float-left mr-10 ml-5 hidden"}),Xf,X("div",Jf,[Gf,X("div",null,[X("p",Qf,[Or("Bacherlor's Degree Courses: "),X("button",{onClick:a[0]||(a[0]=i=>t.value=!t.value),class:"underline text-sm text-blue-300"},"["+Ia(t.value?"hide":"show")+"]",1)]),t.value?(Je(),ut("ul",Zf,tc)):Fn("",!0)]),X("div",null,[X("p",nc,[Or("Master's Degree Courses: "),X("button",{onClick:a[1]||(a[1]=i=>n.value=!n.value),class:"underline text-sm text-blue-300"},"["+Ia(n.value?"hide":"show")+"]",1)]),n.value?(Je(),ut("ul",rc,ic)):Fn("",!0)]),sc]),oc])])],64))}};function ai(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ai(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ai(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Rn(e){return Rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rn(e)}function fc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ii(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function cc(e,t,n){return t&&ii(e.prototype,t),n&&ii(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fa(e,t){return dc(e)||pc(e,t)||Os(e,t)||gc()}function en(e){return uc(e)||mc(e)||Os(e)||hc()}function uc(e){if(Array.isArray(e))return Er(e)}function dc(e){if(Array.isArray(e))return e}function mc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,s,o;try{for(n=n.call(e);!(a=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,o=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw o}}return r}}function Os(e,t){if(!!e){if(typeof e=="string")return Er(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Er(e,t)}}function Er(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function hc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var si=function(){},ca={},Cs={},Es=null,Ps={mark:si,measure:si};try{typeof window<"u"&&(ca=window),typeof document<"u"&&(Cs=document),typeof MutationObserver<"u"&&(Es=MutationObserver),typeof performance<"u"&&(Ps=performance)}catch{}var vc=ca.navigator||{},oi=vc.userAgent,li=oi===void 0?"":oi,Qe=ca,q=Cs,fi=Es,mn=Ps;Qe.document;var We=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Is=~li.indexOf("MSIE")||~li.indexOf("Trident/"),pn,hn,gn,vn,bn,ze="___FONT_AWESOME___",Pr=16,Ss="fa",Ts="svg-inline--fa",pt="data-fa-i2svg",Ir="data-fa-pseudo-element",bc="data-fa-pseudo-element-pending",ua="data-prefix",da="data-icon",ci="fontawesome-i2svg",yc="async",xc=["HTML","HEAD","STYLE","SCRIPT"],Ns=function(){try{return!0}catch{return!1}}(),V="classic",Q="sharp",ma=[V,Q];function tn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var Xt=tn((pn={},te(pn,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(pn,Q,{fa:"solid",fass:"solid","fa-solid":"solid"}),pn)),Jt=tn((hn={},te(hn,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(hn,Q,{solid:"fass"}),hn)),Gt=tn((gn={},te(gn,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(gn,Q,{fass:"fa-solid"}),gn)),wc=tn((vn={},te(vn,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(vn,Q,{"fa-solid":"fass"}),vn)),_c=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Ms="fa-layers-text",kc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ac=tn((bn={},te(bn,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(bn,Q,{900:"fass"}),bn)),Fs=[1,2,3,4,5,6,7,8,9,10],Oc=Fs.concat([11,12,13,14,15,16,17,18,19,20]),Cc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qt=new Set;Object.keys(Jt[V]).map(Qt.add.bind(Qt));Object.keys(Jt[Q]).map(Qt.add.bind(Qt));var Ec=[].concat(ma,en(Qt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY]).concat(Fs.map(function(e){return"".concat(e,"x")})).concat(Oc.map(function(e){return"w-".concat(e)})),zt=Qe.FontAwesomeConfig||{};function Pc(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ic(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var Sc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Sc.forEach(function(e){var t=fa(e,2),n=t[0],r=t[1],a=Ic(Pc(n));a!=null&&(zt[r]=a)})}var Rs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ss,replacementClass:Ts,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};zt.familyPrefix&&(zt.cssPrefix=zt.familyPrefix);var It=O(O({},Rs),zt);It.autoReplaceSvg||(It.observeMutations=!1);var P={};Object.keys(Rs).forEach(function(e){Object.defineProperty(P,e,{enumerable:!0,set:function(n){It[e]=n,Ut.forEach(function(r){return r(P)})},get:function(){return It[e]}})});Object.defineProperty(P,"familyPrefix",{enumerable:!0,set:function(t){It.cssPrefix=t,Ut.forEach(function(n){return n(P)})},get:function(){return It.cssPrefix}});Qe.FontAwesomeConfig=P;var Ut=[];function Tc(e){return Ut.push(e),function(){Ut.splice(Ut.indexOf(e),1)}}var Ke=Pr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nc(e){if(!(!e||!We)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var Mc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zt(){for(var e=12,t="";e-- >0;)t+=Mc[Math.random()*62|0];return t}function Mt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function pa(e){return e.classList?Mt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Ls(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Ls(e[n]),'" ')},"").trim()}function Jn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ha(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function Rc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Lc(e){var t=e.transform,n=e.width,r=n===void 0?Pr:n,a=e.height,i=a===void 0?Pr:a,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Is?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var jc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function js(){var e=Ss,t=Ts,n=P.cssPrefix,r=P.replacementClass,a=jc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}var ui=!1;function fr(){P.autoAddCss&&!ui&&(Nc(js()),ui=!0)}var Dc={mixout:function(){return{dom:{css:js,insertCss:fr}}},hooks:function(){return{beforeDOMElementCreation:function(){fr()},beforeI2svg:function(){fr()}}}},Ue=Qe||{};Ue[ze]||(Ue[ze]={});Ue[ze].styles||(Ue[ze].styles={});Ue[ze].hooks||(Ue[ze].hooks={});Ue[ze].shims||(Ue[ze].shims=[]);var ke=Ue[ze],Ds=[],$c=function e(){q.removeEventListener("DOMContentLoaded",e),Ln=1,Ds.map(function(t){return t()})},Ln=!1;We&&(Ln=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Ln||q.addEventListener("DOMContentLoaded",$c));function zc(e){!We||(Ln?setTimeout(e,0):Ds.push(e))}function nn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Ls(e):"<".concat(t," ").concat(Fc(r),">").concat(i.map(nn).join(""),"</").concat(t,">")}function di(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Uc=function(t,n){return function(r,a,i,s){return t.call(n,r,a,i,s)}},cr=function(t,n,r,a){var i=Object.keys(t),s=i.length,o=a!==void 0?Uc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<s;l++)u=i[l],d=o(d,t[u],u,t);return d};function Bc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Sr(e){var t=Bc(e);return t.length===1?t[0].toString(16):null}function Hc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function mi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Tr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=mi(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,mi(t)):ke.styles[e]=O(O({},ke.styles[e]||{}),i),e==="fas"&&Tr("fa",t)}var yn,xn,wn,yt=ke.styles,Wc=ke.shims,Yc=(yn={},te(yn,V,Object.values(Gt[V])),te(yn,Q,Object.values(Gt[Q])),yn),ga=null,$s={},zs={},Us={},Bs={},Hs={},Kc=(xn={},te(xn,V,Object.keys(Xt[V])),te(xn,Q,Object.keys(Xt[Q])),xn);function Vc(e){return~Ec.indexOf(e)}function qc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Vc(a)?a:null}var Ws=function(){var t=function(i){return cr(yt,function(s,o,l){return s[l]=cr(o,i,{}),s},{})};$s=t(function(a,i,s){if(i[3]&&(a[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){a[l.toString(16)]=s})}return a}),zs=t(function(a,i,s){if(a[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){a[l]=s})}return a}),Hs=t(function(a,i,s){var o=i[2];return a[s]=s,o.forEach(function(l){a[l]=s}),a});var n="far"in yt||P.autoFetchSvg,r=cr(Wc,function(a,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(a.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});Us=r.names,Bs=r.unicodes,ga=Gn(P.styleDefault,{family:P.familyDefault})};Tc(function(e){ga=Gn(e.styleDefault,{family:P.familyDefault})});Ws();function va(e,t){return($s[e]||{})[t]}function Xc(e,t){return(zs[e]||{})[t]}function ft(e,t){return(Hs[e]||{})[t]}function Ys(e){return Us[e]||{prefix:null,iconName:null}}function Jc(e){var t=Bs[e],n=va("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return ga}var ba=function(){return{prefix:null,iconName:null,rest:[]}};function Gn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=Xt[r][e],i=Jt[r][e]||Jt[r][a],s=e in ke.styles?e:null;return i||s||null}var pi=(wn={},te(wn,V,Object.keys(Gt[V])),te(wn,Q,Object.keys(Gt[Q])),wn);function Qn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,V,"".concat(P.cssPrefix,"-").concat(V)),te(t,Q,"".concat(P.cssPrefix,"-").concat(Q)),t),s=null,o=V;(e.includes(i[V])||e.some(function(u){return pi[V].includes(u)}))&&(o=V),(e.includes(i[Q])||e.some(function(u){return pi[Q].includes(u)}))&&(o=Q);var l=e.reduce(function(u,d){var m=qc(P.cssPrefix,d);if(yt[d]?(d=Yc[o].includes(d)?wc[o][d]:d,s=d,u.prefix=d):Kc[o].indexOf(d)>-1?(s=d,u.prefix=Gn(d,{family:o})):m?u.iconName=m:d!==P.replacementClass&&d!==i[V]&&d!==i[Q]&&u.rest.push(d),!a&&u.prefix&&u.iconName){var v=s==="fa"?Ys(u.iconName):{},k=ft(u.prefix,u.iconName);v.prefix&&(s=null),u.iconName=v.iconName||k||u.iconName,u.prefix=v.prefix||u.prefix,u.prefix==="far"&&!yt.far&&yt.fas&&!P.autoFetchSvg&&(u.prefix="fas")}return u},ba());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===Q&&(yt.fass||P.autoFetchSvg)&&(l.prefix="fass",l.iconName=ft(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Ze()||"fas"),l}var Gc=function(){function e(){fc(this,e),this.definitions={}}return cc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var s=a.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=O(O({},n.definitions[o]||{}),s[o]),Tr(o,s[o]);var l=Gt[V][o];l&&Tr(l,s[o]),Ws()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var s=a[i],o=s.prefix,l=s.iconName,u=s.icon,d=u[2];n[o]||(n[o]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[o][m]=u)}),n[o][l]=u}),n}}]),e}(),hi=[],xt={},Ot={},Qc=Object.keys(Ot);function Zc(e,t){var n=t.mixoutsTo;return hi=e,xt={},Object.keys(Ot).forEach(function(r){Qc.indexOf(r)===-1&&delete Ot[r]}),hi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(s){typeof a[s]=="function"&&(n[s]=a[s]),Rn(a[s])==="object"&&Object.keys(a[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=a[s][o]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(s){xt[s]||(xt[s]=[]),xt[s].push(i[s])})}r.provides&&r.provides(Ot)}),n}function Nr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function ht(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ot[e]?Ot[e].apply(null,t):void 0}function Mr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(!!t)return t=ft(n,t)||t,di(Ks.definitions,n,t)||di(ke.styles,n,t)}var Ks=new Gc,eu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,ht("noAuto")},tu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(ht("beforeI2svg",t),Be("pseudoElements2svg",t),Be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,zc(function(){ru({autoReplaceSvgRoot:n}),ht("watch",t)})}},nu={icon:function(t){if(t===null)return null;if(Rn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ft(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Gn(t[0]);return{prefix:r,iconName:ft(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(P.cssPrefix,"-"))>-1||t.match(_c))){var a=Qn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:ft(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:ft(i,t)||t}}}},he={noAuto:eu,config:P,dom:tu,parse:nu,library:Ks,findIconDefinition:Mr,toHtml:nn},ru=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(ke.styles).length>0||P.autoFetchSvg)&&We&&P.autoReplaceSvg&&he.dom.i2svg({node:r})};function Zn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return nn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!We){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function au(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,s=e.transform;if(ha(s)&&n.found&&!r.found){var o=n.width,l=n.height,u={x:o/l/2,y:.5};a.style=Jn(O(O({},i),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function iu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(P.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:s}),children:r}]}]}function ya(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,k=v===void 0?!1:v,F=r.found?r:n,T=F.width,j=F.height,y=a==="fak",C=[P.replacementClass,i?"".concat(P.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),M={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(j)})},D=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/j*16*.0625,"em")}:{};k&&(M.attributes[pt]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||Zt())},children:[l]}),delete M.attributes.title);var H=O(O({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:s,symbol:o,styles:O(O({},D),m.styles)}),ce=r.found&&n.found?Be("generateAbstractMask",H)||{children:[],attributes:{}}:Be("generateAbstractIcon",H)||{children:[],attributes:{}},ae=ce.children,be=ce.attributes;return H.children=ae,H.attributes=be,o?iu(H):au(H)}function gi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,u=O(O(O({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(u[pt]="");var d=O({},s.styles);ha(a)&&(d.transform=Lc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Jn(d);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function su(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Jn(r.styles);i.length>0&&(a.style=i);var s=[];return s.push({tag:"span",attributes:a,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var ur=ke.styles;function Fr(e){var t=e[0],n=e[1],r=e.slice(4),a=fa(r,1),i=a[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(P.cssPrefix,"-").concat(lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(lt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.cssPrefix,"-").concat(lt.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var ou={found:!1,width:512,height:512};function lu(e,t){!Ns&&!P.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Rr(e,t){var n=t;return t==="fa"&&P.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=Ys(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ur[t]&&ur[t][e]){var s=ur[t][e];return r(Fr(s))}lu(e,t),r(O(O({},ou),{},{icon:P.showMissingIcons&&e?Be("missingIconAbstract")||{}:{}}))})}var vi=function(){},Lr=P.measurePerformance&&mn&&mn.mark&&mn.measure?mn:{mark:vi,measure:vi},Dt='FA "6.2.0"',fu=function(t){return Lr.mark("".concat(Dt," ").concat(t," begins")),function(){return Vs(t)}},Vs=function(t){Lr.mark("".concat(Dt," ").concat(t," ends")),Lr.measure("".concat(Dt," ").concat(t),"".concat(Dt," ").concat(t," begins"),"".concat(Dt," ").concat(t," ends"))},xa={begin:fu,end:Vs},En=function(){};function bi(e){var t=e.getAttribute?e.getAttribute(pt):null;return typeof t=="string"}function cu(e){var t=e.getAttribute?e.getAttribute(ua):null,n=e.getAttribute?e.getAttribute(da):null;return t&&n}function uu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(P.replacementClass)}function du(){if(P.autoReplaceSvg===!0)return Pn.replace;var e=Pn[P.autoReplaceSvg];return e||Pn.replace}function mu(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function pu(e){return q.createElement(e)}function qs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?mu:pu:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){a.appendChild(qs(s,{ceFn:r}))}),a}function hu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Pn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(qs(a),n)}),n.getAttribute(pt)===null&&P.keepOriginalSource){var r=q.createComment(hu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~pa(n).indexOf(P.replacementClass))return Pn.replace(t);var a=new RegExp("".concat(P.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(o,l){return l===P.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=r.map(function(o){return nn(o)}).join(`
`);n.setAttribute(pt,""),n.innerHTML=s}};function yi(e){e()}function Xs(e,t){var n=typeof t=="function"?t:En;if(e.length===0)n();else{var r=yi;P.mutateApproach===yc&&(r=Qe.requestAnimationFrame||yi),r(function(){var a=du(),i=xa.begin("mutate");e.map(a),i(),n()})}}var wa=!1;function Js(){wa=!0}function jr(){wa=!1}var jn=null;function xi(e){if(!!fi&&!!P.observeMutations){var t=e.treeCallback,n=t===void 0?En:t,r=e.nodeCallback,a=r===void 0?En:r,i=e.pseudoElementsCallback,s=i===void 0?En:i,o=e.observeMutationsRoot,l=o===void 0?q:o;jn=new fi(function(u){if(!wa){var d=Ze();Mt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!bi(m.addedNodes[0])&&(P.searchPseudoElements&&s(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&s(m.target.parentNode),m.type==="attributes"&&bi(m.target)&&~Cc.indexOf(m.attributeName))if(m.attributeName==="class"&&cu(m.target)){var v=Qn(pa(m.target)),k=v.prefix,F=v.iconName;m.target.setAttribute(ua,k||d),F&&m.target.setAttribute(da,F)}else uu(m.target)&&a(m.target)})}}),We&&jn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function gu(){!jn||jn.disconnect()}function vu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function bu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Qn(pa(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Xc(a.prefix,e.innerText)||va(a.prefix,Sr(e.innerText))),!a.iconName&&P.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function yu(e){var t=Mt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return P.autoA11y&&(n?t["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Zt()):(t["aria-hidden"]="true",t.focusable="false")),t}function xu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function wi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=bu(e),r=n.iconName,a=n.prefix,i=n.rest,s=yu(e),o=Nr("parseNodeAttributes",{},e),l=t.styleParser?vu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var wu=ke.styles;function Gs(e){var t=P.autoReplaceSvg==="nest"?wi(e,{styleParser:!1}):wi(e);return~t.extra.classes.indexOf(Ms)?Be("generateLayersText",e,t):Be("generateSvgReplacementMutation",e,t)}var et=new Set;ma.map(function(e){et.add("fa-".concat(e))});Object.keys(Xt[V]).map(et.add.bind(et));Object.keys(Xt[Q]).map(et.add.bind(et));et=en(et);function _i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(ci,"-").concat(m))},a=function(m){return n.remove("".concat(ci,"-").concat(m))},i=P.autoFetchSvg?et:ma.map(function(d){return"fa-".concat(d)}).concat(Object.keys(wu));i.includes("fa")||i.push("fa");var s=[".".concat(Ms,":not([").concat(pt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(pt,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=Mt(e.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();var l=xa.begin("onTree"),u=o.reduce(function(d,m){try{var v=Gs(m);v&&d.push(v)}catch(k){Ns||k.name==="MissingIcon"&&console.error(k)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(v){Xs(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function _u(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Gs(e).then(function(n){n&&Xs([n],t)})}function ku(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Mr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Mr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var Au=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,u=n.maskId,d=u===void 0?null:u,m=n.title,v=m===void 0?null:m,k=n.titleId,F=k===void 0?null:k,T=n.classes,j=T===void 0?[]:T,y=n.attributes,C=y===void 0?{}:y,M=n.styles,D=M===void 0?{}:M;if(!!t){var H=t.prefix,ce=t.iconName,ae=t.icon;return Zn(O({type:"icon"},t),function(){return ht("beforeDOMElementCreation",{iconDefinition:t,params:n}),P.autoA11y&&(v?C["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(F||Zt()):(C["aria-hidden"]="true",C.focusable="false")),ya({icons:{main:Fr(ae),mask:l?Fr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ce,transform:O(O({},Fe),a),symbol:s,title:v,maskId:d,titleId:F,extra:{attributes:C,styles:D,classes:j}})})}},Ou={mixout:function(){return{icon:ku(Au)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_i,n.nodeCallback=_u,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,s=i===void 0?function(){}:i;return _i(a,s)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,s=r.titleId,o=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(k,F){Promise.all([Rr(a,o),d.iconName?Rr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(T){var j=fa(T,2),y=j[0],C=j[1];k([n,ya({icons:{main:y,mask:C},prefix:o,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:s,extra:v,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.transform,o=n.styles,l=Jn(o);l.length>0&&(a.style=l);var u;return ha(s)&&(u=Be("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Cu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Zn({type:"layer"},function(){ht("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(P.cssPrefix,"-layers")].concat(en(i)).join(" ")},children:s}]})}}}},Eu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,s=r.classes,o=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Zn({type:"counter",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),su({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(P.cssPrefix,"-layers-counter")].concat(en(o))}})})}}}},Pu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,s=r.title,o=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,k=v===void 0?{}:v;return Zn({type:"text",content:n},function(){return ht("beforeDOMElementCreation",{content:n,params:r}),gi({content:n,transform:O(O({},Fe),i),title:o,extra:{attributes:m,styles:k,classes:["".concat(P.cssPrefix,"-layers-text")].concat(en(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,s=r.extra,o=null,l=null;if(Is){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();o=d.width/u,l=d.height/u}return P.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,gi({content:n.innerHTML,width:o,height:l,transform:i,title:a,extra:s,watchable:!0})])}}},Iu=new RegExp('"',"ug"),ki=[1105920,1112319];function Su(e){var t=e.replace(Iu,""),n=Hc(t,0),r=n>=ki[0]&&n<=ki[1],a=t.length===2?t[0]===t[1]:!1;return{value:Sr(a?t[0]:t),isSecondary:r||a}}function Ai(e,t){var n="".concat(bc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Mt(e.children),s=i.filter(function(ae){return ae.getAttribute(Ir)===t})[0],o=Qe.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(kc),u=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&d!=="none"&&d!==""){var m=o.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Q:V,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Jt[v][l[2].toLowerCase()]:Ac[v][u],F=Su(m),T=F.value,j=F.isSecondary,y=l[0].startsWith("FontAwesome"),C=va(k,T),M=C;if(y){var D=Jc(T);D.iconName&&D.prefix&&(C=D.iconName,k=D.prefix)}if(C&&!j&&(!s||s.getAttribute(ua)!==k||s.getAttribute(da)!==M)){e.setAttribute(n,M),s&&e.removeChild(s);var H=xu(),ce=H.extra;ce.attributes[Ir]=t,Rr(C,k).then(function(ae){var be=ya(O(O({},H),{},{icons:{main:ae,mask:ba()},prefix:k,iconName:M,extra:ce,watchable:!0})),ge=q.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=be.map(function(Le){return nn(Le)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Tu(e){return Promise.all([Ai(e,"::before"),Ai(e,"::after")])}function Nu(e){return e.parentNode!==document.head&&!~xc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ir)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Oi(e){if(!!We)return new Promise(function(t,n){var r=Mt(e.querySelectorAll("*")).filter(Nu).map(Tu),a=xa.begin("searchPseudoElements");Js(),Promise.all(r).then(function(){a(),jr(),t()}).catch(function(){a(),jr(),n()})})}var Mu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Oi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;P.searchPseudoElements&&Oi(a)}}},Ci=!1,Fu={mixout:function(){return{dom:{unwatch:function(){Js(),Ci=!0}}}},hooks:function(){return{bootstrap:function(){xi(Nr("mutationObserverCallbacks",{}))},noAuto:function(){gu()},watch:function(n){var r=n.observeMutationsRoot;Ci?jr():xi(Nr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ei=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return r.flipX=!0,r;if(s&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(s){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Ru={mixout:function(){return{parse:{transform:function(n){return Ei(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ei(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(s/2*-1," -256)")},k={outer:o,inner:m,path:v};return{tag:"g",attributes:O({},k.outer),children:[{tag:"g",attributes:O({},k.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),k.path)}]}]}}}},dr={x:0,y:0,width:"100%",height:"100%"};function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Lu(e){return e.tag==="g"?e.children:[e]}var ju={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Qn(a.split(" ").map(function(s){return s.trim()})):ba();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,u=i.width,d=i.icon,m=s.width,v=s.icon,k=Rc({transform:l,containerWidth:m,iconWidth:u}),F={tag:"rect",attributes:O(O({},dr),{},{fill:"white"})},T=d.children?{children:d.children.map(Pi)}:{},j={tag:"g",attributes:O({},k.inner),children:[Pi(O({tag:d.tag,attributes:O(O({},d.attributes),k.path)},T))]},y={tag:"g",attributes:O({},k.outer),children:[j]},C="mask-".concat(o||Zt()),M="clip-".concat(o||Zt()),D={tag:"mask",attributes:O(O({},dr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:Lu(v)},D]};return r.push(H,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(C,")")},dr)}),{children:r,attributes:a}}}},Du={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=O(O({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$u={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},zu=[Dc,Ou,Cu,Eu,Pu,Mu,Fu,Ru,ju,Du,$u];Zc(zu,{mixoutsTo:he});he.noAuto;var Qs=he.config,Uu=he.library;he.dom;var Dn=he.parse;he.findIconDefinition;he.toHtml;var Bu=he.icon;he.layer;var Hu=he.text;he.counter;function Ii(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ii(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ii(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $n(e){return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Yu(e,t){if(e==null)return{};var n=Wu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Dr(e){return Ku(e)||Vu(e)||qu(e)||Xu()}function Ku(e){if(Array.isArray(e))return $r(e)}function Vu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qu(e,t){if(!!e){if(typeof e=="string")return $r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $r(e,t)}}function $r(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Zs={exports:{}};(function(e){(function(t){var n=function(y,C,M){if(!u(C)||m(C)||v(C)||k(C)||l(C))return C;var D,H=0,ce=0;if(d(C))for(D=[],ce=C.length;H<ce;H++)D.push(n(y,C[H],M));else{D={};for(var ae in C)Object.prototype.hasOwnProperty.call(C,ae)&&(D[y(ae,M)]=n(y,C[ae],M))}return D},r=function(y,C){C=C||{};var M=C.separator||"_",D=C.split||/(?=[A-Z])/;return y.split(D).join(M)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(C,M){return M?M.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var C=a(y);return C.substr(0,1).toUpperCase()+C.substr(1)},s=function(y,C){return r(y,C).toLowerCase()},o=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return o.call(y)=="[object Array]"},m=function(y){return o.call(y)=="[object Date]"},v=function(y){return o.call(y)=="[object RegExp]"},k=function(y){return o.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},T=function(y,C){var M=C&&"process"in C?C.process:C;return typeof M!="function"?y:function(D,H){return M(D,y,H)}},j={camelize:a,decamelize:s,pascalize:i,depascalize:s,camelizeKeys:function(y,C){return n(T(a,C),y)},decamelizeKeys:function(y,C){return n(T(s,C),y,C)},pascalizeKeys:function(y,C){return n(T(i,C),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=j:t.humps=j})(Ju)})(Zs);var Gu=Zs.exports,Qu=["class","style"];function Zu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Gu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ed(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function _a(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return _a(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=ed(d);break;case"style":l.style=Zu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,s=i===void 0?{}:i,o=Yu(n,Qu);return As(e.tag,we(we(we({},t),{},{class:a.class,style:we(we({},a.style),s)},a.attrs),o),r)}var eo=!1;try{eo=!0}catch{}function td(){if(!eo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Bt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function nd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Si(e){if(e&&$n(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Dn.icon)return Dn.icon(e);if(e===null)return null;if($n(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var rd=ra({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Si(t.icon)}),i=ve(function(){return Bt("classes",nd(t))}),s=ve(function(){return Bt("transform",typeof t.transform=="string"?Dn.transform(t.transform):t.transform)}),o=ve(function(){return Bt("mask",Si(t.mask))}),l=ve(function(){return Bu(a.value,we(we(we(we({},i.value),s.value),o.value),{},{symbol:t.symbol,title:t.title}))});kn(l,function(d){if(!d)return td("Could not find one or more icon(s)",a.value,o.value)},{immediate:!0});var u=ve(function(){return l.value?_a(l.value.abstract[0],{},r):null});return function(){return u.value}}});ra({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Qs.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(Dr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return As("div",{class:i.value},r.default?r.default():[])}}});ra({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Qs.familyPrefix,i=ve(function(){return Bt("classes",[].concat(Dr(t.counter?["".concat(a,"-layers-counter")]:[]),Dr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),s=ve(function(){return Bt("transform",typeof t.transform=="string"?Dn.transform(t.transform):t.transform)}),o=ve(function(){var u=Hu(t.value.toString(),we(we({},s.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return _a(o.value,{},r)});return function(){return l.value}}});var ad={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L277.3 424.9l-40.1 74.5c-5.2 9.7-16.3 14.6-27 11.9S192 499 192 488V392c0-5.3 1.8-10.5 5.1-14.7L362.4 164.7c2.5-7.1-6.5-14.3-13-8.4L170.4 318.2l-32 28.9 0 0c-9.2 8.3-22.3 10.6-33.8 5.8l-85-35.4C8.4 312.8 .8 302.2 .1 290s5.5-23.7 16.1-29.8l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},id={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},sd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};Uu.add(sd,id,ad);Cf(lc).component("font-awesome-icon",rd).mount("#app");
