(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function yo(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Vf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zf=yo(Vf);function Cc(e){return!!e||e===""}function Xe(e){if(re(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=Ie(s)?Kf(s):Xe(s);if(r)for(const i in r)t[i]=r[i]}return t}else{if(Ie(e))return e;if(Be(e))return e}}const Wf=/;(?![^(]*\))/g,Uf=/:(.+)/;function Kf(e){const t={};return e.split(Wf).forEach(n=>{if(n){const s=n.split(Uf);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Re(e){let t="";if(Ie(e))t=e;else if(re(e))for(let n=0;n<e.length;n++){const s=Re(e[n]);s&&(t+=s+" ")}else if(Be(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Y(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ie(t)&&(e.class=Re(t)),n&&(e.style=Xe(n)),e}const On=e=>Ie(e)?e:e==null?"":re(e)||Be(e)&&(e.toString===Rc||!ce(e.toString))?JSON.stringify(e,Tc,2):String(e),Tc=(e,t)=>t&&t.__v_isRef?Tc(e,t.value):Un(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Ac(t)?{[`Set(${t.size})`]:[...t.values()]}:Be(t)&&!re(t)&&!Ic(t)?String(t):t,Pe={},Wn=[],$t=()=>{},qf=()=>!1,Yf=/^on[^a-z]/,Rr=e=>Yf.test(e),wo=e=>e.startsWith("onUpdate:"),Qe=Object.assign,xo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Zf=Object.prototype.hasOwnProperty,ge=(e,t)=>Zf.call(e,t),re=Array.isArray,Un=e=>Ir(e)==="[object Map]",Ac=e=>Ir(e)==="[object Set]",ce=e=>typeof e=="function",Ie=e=>typeof e=="string",$o=e=>typeof e=="symbol",Be=e=>e!==null&&typeof e=="object",Lc=e=>Be(e)&&ce(e.then)&&ce(e.catch),Rc=Object.prototype.toString,Ir=e=>Rc.call(e),Gf=e=>Ir(e).slice(8,-1),Ic=e=>Ir(e)==="[object Object]",Eo=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cr=yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Xf=/-(\w)/g,It=Fr(e=>e.replace(Xf,(t,n)=>n?n.toUpperCase():"")),Qf=/\B([A-Z])/g,Mn=Fr(e=>e.replace(Qf,"-$1").toLowerCase()),Nr=Fr(e=>e.charAt(0).toUpperCase()+e.slice(1)),ei=Fr(e=>e?`on${Nr(e)}`:""),Ls=(e,t)=>!Object.is(e,t),Kn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},yr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Oi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let wl;const Jf=()=>wl||(wl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ot;class Fc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ot&&(this.parent=ot,this.index=(ot.scopes||(ot.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ot;try{return ot=this,t()}finally{ot=n}}}on(){ot=this}off(){ot=this.parent}stop(t){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function ep(e){return new Fc(e)}function tp(e,t=ot){t&&t.active&&t.effects.push(e)}function So(){return ot}function Oo(e){ot&&ot.cleanups.push(e)}const ko=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Nc=e=>(e.w&ln)>0,Dc=e=>(e.n&ln)>0,np=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ln},sp=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const r=t[s];Nc(r)&&!Dc(r)?r.delete(e):t[n++]=r,r.w&=~ln,r.n&=~ln}t.length=n}},ki=new WeakMap;let bs=0,ln=1;const ji=30;let wt;const wn=Symbol(""),Pi=Symbol("");class jo{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,tp(this,s)}run(){if(!this.active)return this.fn();let t=wt,n=tn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=wt,wt=this,tn=!0,ln=1<<++bs,bs<=ji?np(this):xl(this),this.fn()}finally{bs<=ji&&sp(this),ln=1<<--bs,wt=this.parent,tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wt===this?this.deferStop=!0:this.active&&(xl(this),this.onStop&&this.onStop(),this.active=!1)}}function xl(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let tn=!0;const Hc=[];function ns(){Hc.push(tn),tn=!1}function ss(){const e=Hc.pop();tn=e===void 0?!0:e}function pt(e,t,n){if(tn&&wt){let s=ki.get(e);s||ki.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=ko()),Bc(r)}}function Bc(e,t){let n=!1;bs<=ji?Dc(e)||(e.n|=ln,n=!Nc(e)):n=!e.has(wt),n&&(e.add(wt),wt.deps.push(e))}function zt(e,t,n,s,r,i){const o=ki.get(e);if(!o)return;let l=[];if(t==="clear")l=[...o.values()];else if(n==="length"&&re(e))o.forEach((a,u)=>{(u==="length"||u>=s)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),t){case"add":re(e)?Eo(n)&&l.push(o.get("length")):(l.push(o.get(wn)),Un(e)&&l.push(o.get(Pi)));break;case"delete":re(e)||(l.push(o.get(wn)),Un(e)&&l.push(o.get(Pi)));break;case"set":Un(e)&&l.push(o.get(wn));break}if(l.length===1)l[0]&&Mi(l[0]);else{const a=[];for(const u of l)u&&a.push(...u);Mi(ko(a))}}function Mi(e,t){const n=re(e)?e:[...e];for(const s of n)s.computed&&$l(s);for(const s of n)s.computed||$l(s)}function $l(e,t){(e!==wt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const rp=yo("__proto__,__v_isRef,__isVue"),Vc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($o)),ip=Po(),op=Po(!1,!0),lp=Po(!0),El=ap();function ap(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=ye(this);for(let i=0,o=this.length;i<o;i++)pt(s,"get",i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(ye)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ns();const s=ye(this)[t].apply(this,n);return ss(),s}}),e}function Po(e=!1,t=!1){return function(s,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&i===(e?t?Ep:qc:t?Kc:Uc).get(s))return s;const o=re(s);if(!e&&o&&ge(El,r))return Reflect.get(El,r,i);const l=Reflect.get(s,r,i);return($o(r)?Vc.has(r):rp(r))||(e||pt(s,"get",r),t)?l:xe(l)?o&&Eo(r)?l:l.value:Be(l)?e?Vn(l):Le(l):l}}const cp=zc(),up=zc(!0);function zc(e=!1){return function(n,s,r,i){let o=n[s];if(Rs(o)&&xe(o)&&!xe(r))return!1;if(!e&&!Rs(r)&&(Ci(r)||(r=ye(r),o=ye(o)),!re(n)&&xe(o)&&!xe(r)))return o.value=r,!0;const l=re(n)&&Eo(s)?Number(s)<n.length:ge(n,s),a=Reflect.set(n,s,r,i);return n===ye(i)&&(l?Ls(r,o)&&zt(n,"set",s,r):zt(n,"add",s,r)),a}}function dp(e,t){const n=ge(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&zt(e,"delete",t,void 0),s}function fp(e,t){const n=Reflect.has(e,t);return(!$o(t)||!Vc.has(t))&&pt(e,"has",t),n}function pp(e){return pt(e,"iterate",re(e)?"length":wn),Reflect.ownKeys(e)}const Wc={get:ip,set:cp,deleteProperty:dp,has:fp,ownKeys:pp},mp={get:lp,set(e,t){return!0},deleteProperty(e,t){return!0}},hp=Qe({},Wc,{get:op,set:up}),Mo=e=>e,Dr=e=>Reflect.getPrototypeOf(e);function Js(e,t,n=!1,s=!1){e=e.__v_raw;const r=ye(e),i=ye(t);n||(t!==i&&pt(r,"get",t),pt(r,"get",i));const{has:o}=Dr(r),l=s?Mo:n?Ao:Is;if(o.call(r,t))return l(e.get(t));if(o.call(r,i))return l(e.get(i));e!==r&&e.get(t)}function er(e,t=!1){const n=this.__v_raw,s=ye(n),r=ye(e);return t||(e!==r&&pt(s,"has",e),pt(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function tr(e,t=!1){return e=e.__v_raw,!t&&pt(ye(e),"iterate",wn),Reflect.get(e,"size",e)}function Sl(e){e=ye(e);const t=ye(this);return Dr(t).has.call(t,e)||(t.add(e),zt(t,"add",e,e)),this}function Ol(e,t){t=ye(t);const n=ye(this),{has:s,get:r}=Dr(n);let i=s.call(n,e);i||(e=ye(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?Ls(t,o)&&zt(n,"set",e,t):zt(n,"add",e,t),this}function kl(e){const t=ye(this),{has:n,get:s}=Dr(t);let r=n.call(t,e);r||(e=ye(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&zt(t,"delete",e,void 0),i}function jl(){const e=ye(this),t=e.size!==0,n=e.clear();return t&&zt(e,"clear",void 0,void 0),n}function nr(e,t){return function(s,r){const i=this,o=i.__v_raw,l=ye(o),a=t?Mo:e?Ao:Is;return!e&&pt(l,"iterate",wn),o.forEach((u,d)=>s.call(r,a(u),a(d),i))}}function sr(e,t,n){return function(...s){const r=this.__v_raw,i=ye(r),o=Un(i),l=e==="entries"||e===Symbol.iterator&&o,a=e==="keys"&&o,u=r[e](...s),d=n?Mo:t?Ao:Is;return!t&&pt(i,"iterate",a?Pi:wn),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:l?[d(p[0]),d(p[1])]:d(p),done:f}},[Symbol.iterator](){return this}}}}function Yt(e){return function(...t){return e==="delete"?!1:this}}function gp(){const e={get(i){return Js(this,i)},get size(){return tr(this)},has:er,add:Sl,set:Ol,delete:kl,clear:jl,forEach:nr(!1,!1)},t={get(i){return Js(this,i,!1,!0)},get size(){return tr(this)},has:er,add:Sl,set:Ol,delete:kl,clear:jl,forEach:nr(!1,!0)},n={get(i){return Js(this,i,!0)},get size(){return tr(this,!0)},has(i){return er.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:nr(!0,!1)},s={get(i){return Js(this,i,!0,!0)},get size(){return tr(this,!0)},has(i){return er.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:nr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=sr(i,!1,!1),n[i]=sr(i,!0,!1),t[i]=sr(i,!1,!0),s[i]=sr(i,!0,!0)}),[e,n,t,s]}const[_p,vp,bp,yp]=gp();function Co(e,t){const n=t?e?yp:bp:e?vp:_p;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(ge(n,r)&&r in s?n:s,r,i)}const wp={get:Co(!1,!1)},xp={get:Co(!1,!0)},$p={get:Co(!0,!1)},Uc=new WeakMap,Kc=new WeakMap,qc=new WeakMap,Ep=new WeakMap;function Sp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Op(e){return e.__v_skip||!Object.isExtensible(e)?0:Sp(Gf(e))}function Le(e){return Rs(e)?e:To(e,!1,Wc,wp,Uc)}function kp(e){return To(e,!1,hp,xp,Kc)}function Vn(e){return To(e,!0,mp,$p,qc)}function To(e,t,n,s,r){if(!Be(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=Op(e);if(o===0)return e;const l=new Proxy(e,o===2?s:n);return r.set(e,l),l}function qn(e){return Rs(e)?qn(e.__v_raw):!!(e&&e.__v_isReactive)}function Rs(e){return!!(e&&e.__v_isReadonly)}function Ci(e){return!!(e&&e.__v_isShallow)}function Yc(e){return qn(e)||Rs(e)}function ye(e){const t=e&&e.__v_raw;return t?ye(t):e}function Hr(e){return yr(e,"__v_skip",!0),e}const Is=e=>Be(e)?Le(e):e,Ao=e=>Be(e)?Vn(e):e;function Lo(e){tn&&wt&&(e=ye(e),Bc(e.dep||(e.dep=ko())))}function Ro(e,t){e=ye(e),e.dep&&Mi(e.dep)}function xe(e){return!!(e&&e.__v_isRef===!0)}function W(e){return Zc(e,!1)}function kt(e){return Zc(e,!0)}function Zc(e,t){return xe(e)?e:new jp(e,t)}class jp{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ye(t),this._value=n?t:Is(t)}get value(){return Lo(this),this._value}set value(t){t=this.__v_isShallow?t:ye(t),Ls(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Is(t),Ro(this))}}function w(e){return xe(e)?e.value:e}const Pp={get:(e,t,n)=>w(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return xe(r)&&!xe(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Gc(e){return qn(e)?e:new Proxy(e,Pp)}class Mp{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:s}=t(()=>Lo(this),()=>Ro(this));this._get=n,this._set=s}get value(){return this._get()}set value(t){this._set(t)}}function Cp(e){return new Mp(e)}function Tp(e){const t=re(e)?new Array(e.length):{};for(const n in e)t[n]=Lp(e,n);return t}class Ap{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Lp(e,t,n){const s=e[t];return xe(s)?s:new Ap(e,t,n)}class Rp{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new jo(t,()=>{this._dirty||(this._dirty=!0,Ro(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=ye(this);return Lo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ip(e,t,n=!1){let s,r;const i=ce(e);return i?(s=e,r=$t):(s=e.get,r=e.set),new Rp(s,r,i||!r,n)}function nn(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){Br(i,t,n)}return r}function Et(e,t,n,s){if(ce(e)){const i=nn(e,t,n,s);return i&&Lc(i)&&i.catch(o=>{Br(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(Et(e[i],t,n,s));return r}function Br(e,t,n,s=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,l=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,l)===!1)return}i=i.parent}const a=t.appContext.config.errorHandler;if(a){nn(a,null,10,[e,o,l]);return}}Fp(e,n,r,s)}function Fp(e,t,n,s=!0){console.error(e)}let wr=!1,Ti=!1;const ut=[];let Bt=0;const xs=[];let ys=null,Fn=0;const $s=[];let Gt=null,Nn=0;const Xc=Promise.resolve();let Io=null,Ai=null;function We(e){const t=Io||Xc;return e?t.then(this?e.bind(this):e):t}function Np(e){let t=Bt+1,n=ut.length;for(;t<n;){const s=t+n>>>1;Fs(ut[s])<e?t=s+1:n=s}return t}function Qc(e){(!ut.length||!ut.includes(e,wr&&e.allowRecurse?Bt+1:Bt))&&e!==Ai&&(e.id==null?ut.push(e):ut.splice(Np(e.id),0,e),Jc())}function Jc(){!wr&&!Ti&&(Ti=!0,Io=Xc.then(nu))}function Dp(e){const t=ut.indexOf(e);t>Bt&&ut.splice(t,1)}function eu(e,t,n,s){re(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?s+1:s))&&n.push(e),Jc()}function Hp(e){eu(e,ys,xs,Fn)}function Bp(e){eu(e,Gt,$s,Nn)}function Vr(e,t=null){if(xs.length){for(Ai=t,ys=[...new Set(xs)],xs.length=0,Fn=0;Fn<ys.length;Fn++)ys[Fn]();ys=null,Fn=0,Ai=null,Vr(e,t)}}function tu(e){if(Vr(),$s.length){const t=[...new Set($s)];if($s.length=0,Gt){Gt.push(...t);return}for(Gt=t,Gt.sort((n,s)=>Fs(n)-Fs(s)),Nn=0;Nn<Gt.length;Nn++)Gt[Nn]();Gt=null,Nn=0}}const Fs=e=>e.id==null?1/0:e.id;function nu(e){Ti=!1,wr=!0,Vr(e),ut.sort((n,s)=>Fs(n)-Fs(s));const t=$t;try{for(Bt=0;Bt<ut.length;Bt++){const n=ut[Bt];n&&n.active!==!1&&nn(n,null,14)}}finally{Bt=0,ut.length=0,tu(),wr=!1,Io=null,(ut.length||xs.length||$s.length)&&nu(e)}}function Vp(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Pe;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:f}=s[d]||Pe;f&&(r=n.map(m=>m.trim())),p&&(r=n.map(Oi))}let l,a=s[l=ei(t)]||s[l=ei(It(t))];!a&&i&&(a=s[l=ei(Mn(t))]),a&&Et(a,e,6,r);const u=s[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Et(u,e,6,r)}}function su(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!ce(e)){const a=u=>{const d=su(u,t,!0);d&&(l=!0,Qe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!i&&!l?(s.set(e,null),null):(re(i)?i.forEach(a=>o[a]=null):Qe(o,i),s.set(e,o),o)}function zr(e,t){return!e||!Rr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ge(e,t[0].toLowerCase()+t.slice(1))||ge(e,Mn(t))||ge(e,t))}let Ke=null,Wr=null;function xr(e){const t=Ke;return Ke=e,Wr=e&&e.type.__scopeId||null,t}function rs(e){Wr=e}function is(){Wr=null}function V(e,t=Ke,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Dl(-1);const i=xr(t),o=e(...r);return xr(i),s._d&&Dl(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function ti(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:l,attrs:a,emit:u,render:d,renderCache:p,data:f,setupState:m,ctx:h,inheritAttrs:b}=e;let v,S;const $=xr(e);try{if(n.shapeFlag&4){const O=r||s;v=Tt(d.call(O,O,p,i,m,f,h)),S=a}else{const O=t;v=Tt(O.length>1?O(i,{attrs:a,slots:l,emit:u}):O(i,null)),S=t.props?a:zp(a)}}catch(O){Ss.length=0,Br(O,e,1),v=Q(cn)}let E=v;if(S&&b!==!1){const O=Object.keys(S),{shapeFlag:D}=E;O.length&&D&7&&(o&&O.some(wo)&&(S=Wp(S,o)),E=kn(E,S))}return n.dirs&&(E=kn(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),v=E,xr($),v}const zp=e=>{let t;for(const n in e)(n==="class"||n==="style"||Rr(n))&&((t||(t={}))[n]=e[n]);return t},Wp=(e,t)=>{const n={};for(const s in e)(!wo(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Up(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:a}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Pl(s,o,u):!!o;if(a&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const f=d[p];if(o[f]!==s[f]&&!zr(u,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Pl(s,o,u):!0:!!o;return!1}function Pl(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!zr(n,i))return!0}return!1}function Kp({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ru=e=>e.__isSuspense;function qp(e,t){t&&t.pendingBranch?re(e)?t.effects.push(...e):t.effects.push(e):Bp(e)}function at(e,t){if(Ve){let n=Ve.provides;const s=Ve.parent&&Ve.parent.provides;s===n&&(n=Ve.provides=Object.create(s)),n[e]=t}}function C(e,t,n=!1){const s=Ve||Ke;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ce(t)?t.call(s.proxy):t}}function Ur(e,t){return Fo(e,null,t)}const Ml={};function ue(e,t,n){return Fo(e,t,n)}function Fo(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Pe){const l=Ve;let a,u=!1,d=!1;if(xe(e)?(a=()=>e.value,u=Ci(e)):qn(e)?(a=()=>e,s=!0):re(e)?(d=!0,u=e.some(S=>qn(S)||Ci(S)),a=()=>e.map(S=>{if(xe(S))return S.value;if(qn(S))return _n(S);if(ce(S))return nn(S,l,2)})):ce(e)?t?a=()=>nn(e,l,2):a=()=>{if(!(l&&l.isUnmounted))return p&&p(),Et(e,l,3,[f])}:a=$t,t&&s){const S=a;a=()=>_n(S())}let p,f=S=>{p=v.onStop=()=>{nn(S,l,4)}};if(Ds)return f=$t,t?n&&Et(t,l,3,[a(),d?[]:void 0,f]):a(),$t;let m=d?[]:Ml;const h=()=>{if(!!v.active)if(t){const S=v.run();(s||u||(d?S.some(($,E)=>Ls($,m[E])):Ls(S,m)))&&(p&&p(),Et(t,l,3,[S,m===Ml?void 0:m,f]),m=S)}else v.run()};h.allowRecurse=!!t;let b;r==="sync"?b=h:r==="post"?b=()=>ze(h,l&&l.suspense):b=()=>Hp(h);const v=new jo(a,b);return t?n?h():m=v.run():r==="post"?ze(v.run.bind(v),l&&l.suspense):v.run(),()=>{v.stop(),l&&l.scope&&xo(l.scope.effects,v)}}function Yp(e,t,n){const s=this.proxy,r=Ie(e)?e.includes(".")?iu(s,e):()=>s[e]:e.bind(s,s);let i;ce(t)?i=t:(i=t.handler,n=t);const o=Ve;Qn(this);const l=Fo(r,i.bind(s),n);return o?Qn(o):xn(),l}function iu(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function _n(e,t){if(!Be(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),xe(e))_n(e.value,t);else if(re(e))for(let n=0;n<e.length;n++)_n(e[n],t);else if(Ac(e)||Un(e))e.forEach(n=>{_n(n,t)});else if(Ic(e))for(const n in e)_n(e[n],t);return e}function ou(e,t){e.shapeFlag&6&&e.component?ou(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Me(e){return ce(e)?{setup:e,name:e.name}:e}const Yn=e=>!!e.type.__asyncLoader,lu=e=>e.type.__isKeepAlive,Zp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=os(),s=n.ctx;if(!s.renderer)return()=>{const $=t.default&&t.default();return $&&$.length===1?$[0]:$};const r=new Map,i=new Set;let o=null;const l=n.suspense,{renderer:{p:a,m:u,um:d,o:{createElement:p}}}=s,f=p("div");s.activate=($,E,O,D,I)=>{const B=$.component;u($,E,O,0,l),a(B.vnode,$,E,O,B,l,D,$.slotScopeIds,I),ze(()=>{B.isDeactivated=!1,B.a&&Kn(B.a);const ne=$.props&&$.props.onVnodeMounted;ne&&ht(ne,B.parent,$)},l)},s.deactivate=$=>{const E=$.component;u($,f,null,1,l),ze(()=>{E.da&&Kn(E.da);const O=$.props&&$.props.onVnodeUnmounted;O&&ht(O,E.parent,$),E.isDeactivated=!0},l)};function m($){ni($),d($,n,l,!0)}function h($){r.forEach((E,O)=>{const D=Bi(E.type);D&&(!$||!$(D))&&b(O)})}function b($){const E=r.get($);!o||E.type!==o.type?m(E):o&&ni(o),r.delete($),i.delete($)}ue(()=>[e.include,e.exclude],([$,E])=>{$&&h(O=>ws($,O)),E&&h(O=>!ws(E,O))},{flush:"post",deep:!0});let v=null;const S=()=>{v!=null&&r.set(v,si(n.subTree))};return qs(S),du(S),qr(()=>{r.forEach($=>{const{subTree:E,suspense:O}=n,D=si(E);if($.type===D.type){ni(D);const I=D.component.da;I&&ze(I,O);return}m($)})}),()=>{if(v=null,!t.default)return null;const $=t.default(),E=$[0];if($.length>1)return o=null,$;if(!Xn(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let O=si(E);const D=O.type,I=Bi(Yn(O)?O.type.__asyncResolved||{}:D),{include:B,exclude:ne,max:le}=e;if(B&&(!I||!ws(B,I))||ne&&I&&ws(ne,I))return o=O,E;const me=O.key==null?D:O.key,_e=r.get(me);return O.el&&(O=kn(O),E.shapeFlag&128&&(E.ssContent=O)),v=me,_e?(O.el=_e.el,O.component=_e.component,O.transition&&ou(O,O.transition),O.shapeFlag|=512,i.delete(me),i.add(me)):(i.add(me),le&&i.size>parseInt(le,10)&&b(i.values().next().value)),O.shapeFlag|=256,o=O,ru(E.type)?E:O}}},au=Zp;function ws(e,t){return re(e)?e.some(n=>ws(n,t)):Ie(e)?e.split(",").includes(t):e.test?e.test(t):!1}function Gp(e,t){cu(e,"a",t)}function Xp(e,t){cu(e,"da",t)}function cu(e,t,n=Ve){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Kr(t,s,n),n){let r=n.parent;for(;r&&r.parent;)lu(r.parent.vnode)&&Qp(s,t,n,r),r=r.parent}}function Qp(e,t,n,s){const r=Kr(t,e,s,!0);No(()=>{xo(s[t],r)},n)}function ni(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function si(e){return e.shapeFlag&128?e.ssContent:e}function Kr(e,t,n=Ve,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;ns(),Qn(n);const l=Et(t,n,e,o);return xn(),ss(),l});return s?r.unshift(i):r.push(i),i}}const Ut=e=>(t,n=Ve)=>(!Ds||e==="sp")&&Kr(e,t,n),uu=Ut("bm"),qs=Ut("m"),Jp=Ut("bu"),du=Ut("u"),qr=Ut("bum"),No=Ut("um"),em=Ut("sp"),tm=Ut("rtg"),nm=Ut("rtc");function sm(e,t=Ve){Kr("ec",e,t)}function Do(e,t){const n=Ke;if(n===null)return e;const s=Zr(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,l,a,u=Pe]=t[i];ce(o)&&(o={mounted:o,updated:o}),o.deep&&_n(l),r.push({dir:o,instance:s,value:l,oldValue:void 0,arg:a,modifiers:u})}return e}function dn(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let a=l.dir[s];a&&(ns(),Et(a,n,8,[e.el,l,e,t]),ss())}}const fu="components";function Li(e,t){return im(fu,e,!0,t)||e}const rm=Symbol();function im(e,t,n=!0,s=!1){const r=Ke||Ve;if(r){const i=r.type;if(e===fu){const l=Bi(i,!1);if(l&&(l===t||l===It(t)||l===Nr(It(t))))return i}const o=Cl(r[e]||i[e],t)||Cl(r.appContext[e],t);return!o&&s?i:o}}function Cl(e,t){return e&&(e[t]||e[It(t)]||e[Nr(It(t))])}function Ys(e,t,n,s){let r;const i=n&&n[s];if(re(e)||Ie(e)){r=new Array(e.length);for(let o=0,l=e.length;o<l;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(Be(e))if(e[Symbol.iterator])r=Array.from(e,(o,l)=>t(o,l,void 0,i&&i[l]));else{const o=Object.keys(e);r=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const u=o[l];r[l]=t(e[u],u,l,i&&i[l])}}else r=[];return n&&(n[s]=r),r}function an(e,t,n={},s,r){if(Ke.isCE||Ke.parent&&Yn(Ke.parent)&&Ke.parent.isCE)return Q("slot",t==="default"?null:{name:t},s&&s());let i=e[t];i&&i._c&&(i._d=!1),y();const o=i&&pu(i(n)),l=A($e,{key:n.key||`_${t}`},o||(s?s():[]),o&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function pu(e){return e.some(t=>Xn(t)?!(t.type===cn||t.type===$e&&!pu(t.children)):!0)?e:null}const Ri=e=>e?Eu(e)?Zr(e)||e.proxy:Ri(e.parent):null,$r=Qe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ri(e.parent),$root:e=>Ri(e.root),$emit:e=>e.emit,$options:e=>hu(e),$forceUpdate:e=>e.f||(e.f=()=>Qc(e.update)),$nextTick:e=>e.n||(e.n=We.bind(e.proxy)),$watch:e=>Yp.bind(e)}),om={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:a}=e;let u;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(s!==Pe&&ge(s,t))return o[t]=1,s[t];if(r!==Pe&&ge(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&ge(u,t))return o[t]=3,i[t];if(n!==Pe&&ge(n,t))return o[t]=4,n[t];Ii&&(o[t]=0)}}const d=$r[t];let p,f;if(d)return t==="$attrs"&&pt(e,"get",t),d(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==Pe&&ge(n,t))return o[t]=4,n[t];if(f=a.config.globalProperties,ge(f,t))return f[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return r!==Pe&&ge(r,t)?(r[t]=n,!0):s!==Pe&&ge(s,t)?(s[t]=n,!0):ge(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||e!==Pe&&ge(e,o)||t!==Pe&&ge(t,o)||(l=i[0])&&ge(l,o)||ge(s,o)||ge($r,o)||ge(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ge(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ii=!0;function lm(e){const t=hu(e),n=e.proxy,s=e.ctx;Ii=!1,t.beforeCreate&&Tl(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:a,inject:u,created:d,beforeMount:p,mounted:f,beforeUpdate:m,updated:h,activated:b,deactivated:v,beforeDestroy:S,beforeUnmount:$,destroyed:E,unmounted:O,render:D,renderTracked:I,renderTriggered:B,errorCaptured:ne,serverPrefetch:le,expose:me,inheritAttrs:_e,components:Ae,directives:Fe,filters:Ue}=t;if(u&&am(u,s,null,e.appContext.config.unwrapInjectedRef),o)for(const ie in o){const te=o[ie];ce(te)&&(s[ie]=te.bind(n))}if(r){const ie=r.call(n,n);Be(ie)&&(e.data=Le(ie))}if(Ii=!0,i)for(const ie in i){const te=i[ie],he=ce(te)?te.bind(n,n):ce(te.get)?te.get.bind(n,n):$t,Mt=!ce(te)&&ce(te.set)?te.set.bind(n):$t,qe=k({get:he,set:Mt});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>qe.value,set:mt=>qe.value=mt})}if(l)for(const ie in l)mu(l[ie],s,n,ie);if(a){const ie=ce(a)?a.call(n):a;Reflect.ownKeys(ie).forEach(te=>{at(te,ie[te])})}d&&Tl(d,e,"c");function se(ie,te){re(te)?te.forEach(he=>ie(he.bind(n))):te&&ie(te.bind(n))}if(se(uu,p),se(qs,f),se(Jp,m),se(du,h),se(Gp,b),se(Xp,v),se(sm,ne),se(nm,I),se(tm,B),se(qr,$),se(No,O),se(em,le),re(me))if(me.length){const ie=e.exposed||(e.exposed={});me.forEach(te=>{Object.defineProperty(ie,te,{get:()=>n[te],set:he=>n[te]=he})})}else e.exposed||(e.exposed={});D&&e.render===$t&&(e.render=D),_e!=null&&(e.inheritAttrs=_e),Ae&&(e.components=Ae),Fe&&(e.directives=Fe)}function am(e,t,n=$t,s=!1){re(e)&&(e=Fi(e));for(const r in e){const i=e[r];let o;Be(i)?"default"in i?o=C(i.from||r,i.default,!0):o=C(i.from||r):o=C(i),xe(o)&&s?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):t[r]=o}}function Tl(e,t,n){Et(re(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function mu(e,t,n,s){const r=s.includes(".")?iu(n,s):()=>n[s];if(Ie(e)){const i=t[e];ce(i)&&ue(r,i)}else if(ce(e))ue(r,e.bind(n));else if(Be(e))if(re(e))e.forEach(i=>mu(i,t,n,s));else{const i=ce(e.handler)?e.handler.bind(n):t[e.handler];ce(i)&&ue(r,i,e)}}function hu(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let a;return l?a=l:!r.length&&!n&&!s?a=t:(a={},r.length&&r.forEach(u=>Er(a,u,o,!0)),Er(a,t,o)),i.set(t,a),a}function Er(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&Er(e,i,n,!0),r&&r.forEach(o=>Er(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=cm[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const cm={data:Al,props:hn,emits:hn,methods:hn,computed:hn,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:hn,directives:hn,watch:dm,provide:Al,inject:um};function Al(e,t){return t?e?function(){return Qe(ce(e)?e.call(this,this):e,ce(t)?t.call(this,this):t)}:t:e}function um(e,t){return hn(Fi(e),Fi(t))}function Fi(e){if(re(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ye(e,t){return e?[...new Set([].concat(e,t))]:t}function hn(e,t){return e?Qe(Qe(Object.create(null),e),t):t}function dm(e,t){if(!e)return t;if(!t)return e;const n=Qe(Object.create(null),e);for(const s in t)n[s]=Ye(e[s],t[s]);return n}function fm(e,t,n,s=!1){const r={},i={};yr(i,Yr,1),e.propsDefaults=Object.create(null),gu(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:kp(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function pm(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=ye(r),[a]=e.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let f=d[p];if(zr(e.emitsOptions,f))continue;const m=t[f];if(a)if(ge(i,f))m!==i[f]&&(i[f]=m,u=!0);else{const h=It(f);r[h]=Ni(a,l,h,m,e,!1)}else m!==i[f]&&(i[f]=m,u=!0)}}}else{gu(e,t,r,i)&&(u=!0);let d;for(const p in l)(!t||!ge(t,p)&&((d=Mn(p))===p||!ge(t,d)))&&(a?n&&(n[p]!==void 0||n[d]!==void 0)&&(r[p]=Ni(a,l,p,void 0,e,!0)):delete r[p]);if(i!==l)for(const p in i)(!t||!ge(t,p)&&!0)&&(delete i[p],u=!0)}u&&zt(e,"set","$attrs")}function gu(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let a in t){if(cr(a))continue;const u=t[a];let d;r&&ge(r,d=It(a))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:zr(e.emitsOptions,a)||(!(a in s)||u!==s[a])&&(s[a]=u,o=!0)}if(i){const a=ye(n),u=l||Pe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Ni(r,a,p,u[p],e,!ge(u,p))}}return o}function Ni(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=ge(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&ce(a)){const{propsDefaults:u}=r;n in u?s=u[n]:(Qn(r),s=u[n]=a.call(null,t),xn())}else s=a}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Mn(n))&&(s=!0))}return s}function _u(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let a=!1;if(!ce(e)){const d=p=>{a=!0;const[f,m]=_u(p,t,!0);Qe(o,f),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!a)return s.set(e,Wn),Wn;if(re(i))for(let d=0;d<i.length;d++){const p=It(i[d]);Ll(p)&&(o[p]=Pe)}else if(i)for(const d in i){const p=It(d);if(Ll(p)){const f=i[d],m=o[p]=re(f)||ce(f)?{type:f}:f;if(m){const h=Fl(Boolean,m.type),b=Fl(String,m.type);m[0]=h>-1,m[1]=b<0||h<b,(h>-1||ge(m,"default"))&&l.push(p)}}}const u=[o,l];return s.set(e,u),u}function Ll(e){return e[0]!=="$"}function Rl(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Il(e,t){return Rl(e)===Rl(t)}function Fl(e,t){return re(t)?t.findIndex(n=>Il(n,e)):ce(t)&&Il(t,e)?0:-1}const vu=e=>e[0]==="_"||e==="$stable",Ho=e=>re(e)?e.map(Tt):[Tt(e)],mm=(e,t,n)=>{if(t._n)return t;const s=V((...r)=>Ho(t(...r)),n);return s._c=!1,s},bu=(e,t,n)=>{const s=e._ctx;for(const r in e){if(vu(r))continue;const i=e[r];if(ce(i))t[r]=mm(r,i,s);else if(i!=null){const o=Ho(i);t[r]=()=>o}}},yu=(e,t)=>{const n=Ho(t);e.slots.default=()=>n},hm=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ye(t),yr(t,"_",n)):bu(t,e.slots={})}else e.slots={},t&&yu(e,t);yr(e.slots,Yr,1)},gm=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=Pe;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:(Qe(r,t),!n&&l===1&&delete r._):(i=!t.$stable,bu(t,r)),o=t}else t&&(yu(e,t),o={default:1});if(i)for(const l in r)!vu(l)&&!(l in o)&&delete r[l]};function wu(){return{app:null,config:{isNativeTag:qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _m=0;function vm(e,t){return function(s,r=null){ce(s)||(s=Object.assign({},s)),r!=null&&!Be(r)&&(r=null);const i=wu(),o=new Set;let l=!1;const a=i.app={_uid:_m++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Im,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&ce(u.install)?(o.add(u),u.install(a,...d)):ce(u)&&(o.add(u),u(a,...d))),a},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),a},component(u,d){return d?(i.components[u]=d,a):i.components[u]},directive(u,d){return d?(i.directives[u]=d,a):i.directives[u]},mount(u,d,p){if(!l){const f=Q(s,r);return f.appContext=i,d&&t?t(f,u):e(f,u,p),l=!0,a._container=u,u.__vue_app__=a,Zr(f.component)||f.component.proxy}},unmount(){l&&(e(null,a._container),delete a._container.__vue_app__)},provide(u,d){return i.provides[u]=d,a}};return a}}function Di(e,t,n,s,r=!1){if(re(e)){e.forEach((f,m)=>Di(f,t&&(re(t)?t[m]:t),n,s,r));return}if(Yn(s)&&!r)return;const i=s.shapeFlag&4?Zr(s.component)||s.component.proxy:s.el,o=r?null:i,{i:l,r:a}=e,u=t&&t.r,d=l.refs===Pe?l.refs={}:l.refs,p=l.setupState;if(u!=null&&u!==a&&(Ie(u)?(d[u]=null,ge(p,u)&&(p[u]=null)):xe(u)&&(u.value=null)),ce(a))nn(a,l,12,[o,d]);else{const f=Ie(a),m=xe(a);if(f||m){const h=()=>{if(e.f){const b=f?d[a]:a.value;r?re(b)&&xo(b,i):re(b)?b.includes(i)||b.push(i):f?(d[a]=[i],ge(p,a)&&(p[a]=d[a])):(a.value=[i],e.k&&(d[e.k]=a.value))}else f?(d[a]=o,ge(p,a)&&(p[a]=o)):m&&(a.value=o,e.k&&(d[e.k]=o))};o?(h.id=-1,ze(h,n)):h()}}}const ze=qp;function bm(e){return ym(e)}function ym(e,t){const n=Jf();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:a,setText:u,setElementText:d,parentNode:p,nextSibling:f,setScopeId:m=$t,cloneNode:h,insertStaticContent:b}=e,v=(g,_,x,M=null,P=null,N=null,z=!1,F=null,H=!!_.dynamicChildren)=>{if(g===_)return;g&&!ds(g,_)&&(M=Z(g),et(g,P,N,!0),g=null),_.patchFlag===-2&&(H=!1,_.dynamicChildren=null);const{type:T,ref:J,shapeFlag:G}=_;switch(T){case Vo:S(g,_,x,M);break;case cn:$(g,_,x,M);break;case ri:g==null&&E(_,x,M,z);break;case $e:Fe(g,_,x,M,P,N,z,F,H);break;default:G&1?I(g,_,x,M,P,N,z,F,H):G&6?Ue(g,_,x,M,P,N,z,F,H):(G&64||G&128)&&T.process(g,_,x,M,P,N,z,F,H,Ce)}J!=null&&P&&Di(J,g&&g.ref,N,_||g,!_)},S=(g,_,x,M)=>{if(g==null)s(_.el=l(_.children),x,M);else{const P=_.el=g.el;_.children!==g.children&&u(P,_.children)}},$=(g,_,x,M)=>{g==null?s(_.el=a(_.children||""),x,M):_.el=g.el},E=(g,_,x,M)=>{[g.el,g.anchor]=b(g.children,_,x,M,g.el,g.anchor)},O=({el:g,anchor:_},x,M)=>{let P;for(;g&&g!==_;)P=f(g),s(g,x,M),g=P;s(_,x,M)},D=({el:g,anchor:_})=>{let x;for(;g&&g!==_;)x=f(g),r(g),g=x;r(_)},I=(g,_,x,M,P,N,z,F,H)=>{z=z||_.type==="svg",g==null?B(_,x,M,P,N,z,F,H):me(g,_,P,N,z,F,H)},B=(g,_,x,M,P,N,z,F)=>{let H,T;const{type:J,props:G,shapeFlag:ee,transition:oe,patchFlag:ve,dirs:Oe}=g;if(g.el&&h!==void 0&&ve===-1)H=g.el=h(g.el);else{if(H=g.el=o(g.type,N,G&&G.is,G),ee&8?d(H,g.children):ee&16&&le(g.children,H,null,M,P,N&&J!=="foreignObject",z,F),Oe&&dn(g,null,M,"created"),G){for(const Te in G)Te!=="value"&&!cr(Te)&&i(H,Te,null,G[Te],N,g.children,M,P,L);"value"in G&&i(H,"value",null,G.value),(T=G.onVnodeBeforeMount)&&ht(T,M,g)}ne(H,g,g.scopeId,z,M)}Oe&&dn(g,null,M,"beforeMount");const ke=(!P||P&&!P.pendingBranch)&&oe&&!oe.persisted;ke&&oe.beforeEnter(H),s(H,_,x),((T=G&&G.onVnodeMounted)||ke||Oe)&&ze(()=>{T&&ht(T,M,g),ke&&oe.enter(H),Oe&&dn(g,null,M,"mounted")},P)},ne=(g,_,x,M,P)=>{if(x&&m(g,x),M)for(let N=0;N<M.length;N++)m(g,M[N]);if(P){let N=P.subTree;if(_===N){const z=P.vnode;ne(g,z,z.scopeId,z.slotScopeIds,P.parent)}}},le=(g,_,x,M,P,N,z,F,H=0)=>{for(let T=H;T<g.length;T++){const J=g[T]=F?Xt(g[T]):Tt(g[T]);v(null,J,_,x,M,P,N,z,F)}},me=(g,_,x,M,P,N,z)=>{const F=_.el=g.el;let{patchFlag:H,dynamicChildren:T,dirs:J}=_;H|=g.patchFlag&16;const G=g.props||Pe,ee=_.props||Pe;let oe;x&&fn(x,!1),(oe=ee.onVnodeBeforeUpdate)&&ht(oe,x,_,g),J&&dn(_,g,x,"beforeUpdate"),x&&fn(x,!0);const ve=P&&_.type!=="foreignObject";if(T?_e(g.dynamicChildren,T,F,x,M,ve,N):z||he(g,_,F,null,x,M,ve,N,!1),H>0){if(H&16)Ae(F,_,G,ee,x,M,P);else if(H&2&&G.class!==ee.class&&i(F,"class",null,ee.class,P),H&4&&i(F,"style",G.style,ee.style,P),H&8){const Oe=_.dynamicProps;for(let ke=0;ke<Oe.length;ke++){const Te=Oe[ke],vt=G[Te],An=ee[Te];(An!==vt||Te==="value")&&i(F,Te,vt,An,P,g.children,x,M,L)}}H&1&&g.children!==_.children&&d(F,_.children)}else!z&&T==null&&Ae(F,_,G,ee,x,M,P);((oe=ee.onVnodeUpdated)||J)&&ze(()=>{oe&&ht(oe,x,_,g),J&&dn(_,g,x,"updated")},M)},_e=(g,_,x,M,P,N,z)=>{for(let F=0;F<_.length;F++){const H=g[F],T=_[F],J=H.el&&(H.type===$e||!ds(H,T)||H.shapeFlag&70)?p(H.el):x;v(H,T,J,null,M,P,N,z,!0)}},Ae=(g,_,x,M,P,N,z)=>{if(x!==M){for(const F in M){if(cr(F))continue;const H=M[F],T=x[F];H!==T&&F!=="value"&&i(g,F,T,H,z,_.children,P,N,L)}if(x!==Pe)for(const F in x)!cr(F)&&!(F in M)&&i(g,F,x[F],null,z,_.children,P,N,L);"value"in M&&i(g,"value",x.value,M.value)}},Fe=(g,_,x,M,P,N,z,F,H)=>{const T=_.el=g?g.el:l(""),J=_.anchor=g?g.anchor:l("");let{patchFlag:G,dynamicChildren:ee,slotScopeIds:oe}=_;oe&&(F=F?F.concat(oe):oe),g==null?(s(T,x,M),s(J,x,M),le(_.children,x,J,P,N,z,F,H)):G>0&&G&64&&ee&&g.dynamicChildren?(_e(g.dynamicChildren,ee,x,P,N,z,F),(_.key!=null||P&&_===P.subTree)&&Bo(g,_,!0)):he(g,_,x,J,P,N,z,F,H)},Ue=(g,_,x,M,P,N,z,F,H)=>{_.slotScopeIds=F,g==null?_.shapeFlag&512?P.ctx.activate(_,x,M,z,H):Se(_,x,M,P,N,z,H):se(g,_,H)},Se=(g,_,x,M,P,N,z)=>{const F=g.component=Mm(g,M,P);if(lu(g)&&(F.ctx.renderer=Ce),Cm(F),F.asyncDep){if(P&&P.registerDep(F,ie),!g.el){const H=F.subTree=Q(cn);$(null,H,_,x)}return}ie(F,g,_,x,P,N,z)},se=(g,_,x)=>{const M=_.component=g.component;if(Up(g,_,x))if(M.asyncDep&&!M.asyncResolved){te(M,_,x);return}else M.next=_,Dp(M.update),M.update();else _.el=g.el,M.vnode=_},ie=(g,_,x,M,P,N,z)=>{const F=()=>{if(g.isMounted){let{next:J,bu:G,u:ee,parent:oe,vnode:ve}=g,Oe=J,ke;fn(g,!1),J?(J.el=ve.el,te(g,J,z)):J=ve,G&&Kn(G),(ke=J.props&&J.props.onVnodeBeforeUpdate)&&ht(ke,oe,J,ve),fn(g,!0);const Te=ti(g),vt=g.subTree;g.subTree=Te,v(vt,Te,p(vt.el),Z(vt),g,P,N),J.el=Te.el,Oe===null&&Kp(g,Te.el),ee&&ze(ee,P),(ke=J.props&&J.props.onVnodeUpdated)&&ze(()=>ht(ke,oe,J,ve),P)}else{let J;const{el:G,props:ee}=_,{bm:oe,m:ve,parent:Oe}=g,ke=Yn(_);if(fn(g,!1),oe&&Kn(oe),!ke&&(J=ee&&ee.onVnodeBeforeMount)&&ht(J,Oe,_),fn(g,!0),G&&de){const Te=()=>{g.subTree=ti(g),de(G,g.subTree,g,P,null)};ke?_.type.__asyncLoader().then(()=>!g.isUnmounted&&Te()):Te()}else{const Te=g.subTree=ti(g);v(null,Te,x,M,g,P,N),_.el=Te.el}if(ve&&ze(ve,P),!ke&&(J=ee&&ee.onVnodeMounted)){const Te=_;ze(()=>ht(J,Oe,Te),P)}(_.shapeFlag&256||Oe&&Yn(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&g.a&&ze(g.a,P),g.isMounted=!0,_=x=M=null}},H=g.effect=new jo(F,()=>Qc(T),g.scope),T=g.update=()=>H.run();T.id=g.uid,fn(g,!0),T()},te=(g,_,x)=>{_.component=g;const M=g.vnode.props;g.vnode=_,g.next=null,pm(g,_.props,M,x),gm(g,_.children,x),ns(),Vr(void 0,g.update),ss()},he=(g,_,x,M,P,N,z,F,H=!1)=>{const T=g&&g.children,J=g?g.shapeFlag:0,G=_.children,{patchFlag:ee,shapeFlag:oe}=_;if(ee>0){if(ee&128){qe(T,G,x,M,P,N,z,F,H);return}else if(ee&256){Mt(T,G,x,M,P,N,z,F,H);return}}oe&8?(J&16&&L(T,P,N),G!==T&&d(x,G)):J&16?oe&16?qe(T,G,x,M,P,N,z,F,H):L(T,P,N,!0):(J&8&&d(x,""),oe&16&&le(G,x,M,P,N,z,F,H))},Mt=(g,_,x,M,P,N,z,F,H)=>{g=g||Wn,_=_||Wn;const T=g.length,J=_.length,G=Math.min(T,J);let ee;for(ee=0;ee<G;ee++){const oe=_[ee]=H?Xt(_[ee]):Tt(_[ee]);v(g[ee],oe,x,null,P,N,z,F,H)}T>J?L(g,P,N,!0,!1,G):le(_,x,M,P,N,z,F,H,G)},qe=(g,_,x,M,P,N,z,F,H)=>{let T=0;const J=_.length;let G=g.length-1,ee=J-1;for(;T<=G&&T<=ee;){const oe=g[T],ve=_[T]=H?Xt(_[T]):Tt(_[T]);if(ds(oe,ve))v(oe,ve,x,null,P,N,z,F,H);else break;T++}for(;T<=G&&T<=ee;){const oe=g[G],ve=_[ee]=H?Xt(_[ee]):Tt(_[ee]);if(ds(oe,ve))v(oe,ve,x,null,P,N,z,F,H);else break;G--,ee--}if(T>G){if(T<=ee){const oe=ee+1,ve=oe<J?_[oe].el:M;for(;T<=ee;)v(null,_[T]=H?Xt(_[T]):Tt(_[T]),x,ve,P,N,z,F,H),T++}}else if(T>ee)for(;T<=G;)et(g[T],P,N,!0),T++;else{const oe=T,ve=T,Oe=new Map;for(T=ve;T<=ee;T++){const st=_[T]=H?Xt(_[T]):Tt(_[T]);st.key!=null&&Oe.set(st.key,T)}let ke,Te=0;const vt=ee-ve+1;let An=!1,vl=0;const us=new Array(vt);for(T=0;T<vt;T++)us[T]=0;for(T=oe;T<=G;T++){const st=g[T];if(Te>=vt){et(st,P,N,!0);continue}let Ct;if(st.key!=null)Ct=Oe.get(st.key);else for(ke=ve;ke<=ee;ke++)if(us[ke-ve]===0&&ds(st,_[ke])){Ct=ke;break}Ct===void 0?et(st,P,N,!0):(us[Ct-ve]=T+1,Ct>=vl?vl=Ct:An=!0,v(st,_[Ct],x,null,P,N,z,F,H),Te++)}const bl=An?wm(us):Wn;for(ke=bl.length-1,T=vt-1;T>=0;T--){const st=ve+T,Ct=_[st],yl=st+1<J?_[st+1].el:M;us[T]===0?v(null,Ct,x,yl,P,N,z,F,H):An&&(ke<0||T!==bl[ke]?mt(Ct,x,yl,2):ke--)}}},mt=(g,_,x,M,P=null)=>{const{el:N,type:z,transition:F,children:H,shapeFlag:T}=g;if(T&6){mt(g.component.subTree,_,x,M);return}if(T&128){g.suspense.move(_,x,M);return}if(T&64){z.move(g,_,x,Ce);return}if(z===$e){s(N,_,x);for(let G=0;G<H.length;G++)mt(H[G],_,x,M);s(g.anchor,_,x);return}if(z===ri){O(g,_,x);return}if(M!==2&&T&1&&F)if(M===0)F.beforeEnter(N),s(N,_,x),ze(()=>F.enter(N),P);else{const{leave:G,delayLeave:ee,afterLeave:oe}=F,ve=()=>s(N,_,x),Oe=()=>{G(N,()=>{ve(),oe&&oe()})};ee?ee(N,ve,Oe):Oe()}else s(N,_,x)},et=(g,_,x,M=!1,P=!1)=>{const{type:N,props:z,ref:F,children:H,dynamicChildren:T,shapeFlag:J,patchFlag:G,dirs:ee}=g;if(F!=null&&Di(F,null,x,g,!0),J&256){_.ctx.deactivate(g);return}const oe=J&1&&ee,ve=!Yn(g);let Oe;if(ve&&(Oe=z&&z.onVnodeBeforeUnmount)&&ht(Oe,_,g),J&6)K(g.component,x,M);else{if(J&128){g.suspense.unmount(x,M);return}oe&&dn(g,null,_,"beforeUnmount"),J&64?g.type.remove(g,_,x,P,Ce,M):T&&(N!==$e||G>0&&G&64)?L(T,_,x,!1,!0):(N===$e&&G&384||!P&&J&16)&&L(H,_,x),M&&qt(g)}(ve&&(Oe=z&&z.onVnodeUnmounted)||oe)&&ze(()=>{Oe&&ht(Oe,_,g),oe&&dn(g,null,_,"unmounted")},x)},qt=g=>{const{type:_,el:x,anchor:M,transition:P}=g;if(_===$e){j(x,M);return}if(_===ri){D(g);return}const N=()=>{r(x),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:z,delayLeave:F}=P,H=()=>z(x,N);F?F(g.el,N,H):H()}else N()},j=(g,_)=>{let x;for(;g!==_;)x=f(g),r(g),g=x;r(_)},K=(g,_,x)=>{const{bum:M,scope:P,update:N,subTree:z,um:F}=g;M&&Kn(M),P.stop(),N&&(N.active=!1,et(z,g,_,x)),F&&ze(F,_),ze(()=>{g.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},L=(g,_,x,M=!1,P=!1,N=0)=>{for(let z=N;z<g.length;z++)et(g[z],_,x,M,P)},Z=g=>g.shapeFlag&6?Z(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),be=(g,_,x)=>{g==null?_._vnode&&et(_._vnode,null,null,!0):v(_._vnode||null,g,_,null,null,null,x),tu(),_._vnode=g},Ce={p:v,um:et,m:mt,r:qt,mt:Se,mc:le,pc:he,pbc:_e,n:Z,o:e};let fe,de;return t&&([fe,de]=t(Ce)),{render:be,hydrate:fe,createApp:vm(be,fe)}}function fn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Bo(e,t,n=!1){const s=e.children,r=t.children;if(re(s)&&re(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Xt(r[i]),l.el=o.el),n||Bo(o,l))}}function wm(e){const t=e.slice(),n=[0];let s,r,i,o,l;const a=e.length;for(s=0;s<a;s++){const u=e[s];if(u!==0){if(r=n[n.length-1],e[r]<u){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<u?i=l+1:o=l;u<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const xm=e=>e.__isTeleport,Es=e=>e&&(e.disabled||e.disabled===""),Nl=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Hi=(e,t)=>{const n=e&&e.to;return Ie(n)?t?t(n):null:n},$m={__isTeleport:!0,process(e,t,n,s,r,i,o,l,a,u){const{mc:d,pc:p,pbc:f,o:{insert:m,querySelector:h,createText:b,createComment:v}}=u,S=Es(t.props);let{shapeFlag:$,children:E,dynamicChildren:O}=t;if(e==null){const D=t.el=b(""),I=t.anchor=b("");m(D,n,s),m(I,n,s);const B=t.target=Hi(t.props,h),ne=t.targetAnchor=b("");B&&(m(ne,B),o=o||Nl(B));const le=(me,_e)=>{$&16&&d(E,me,_e,r,i,o,l,a)};S?le(n,I):B&&le(B,ne)}else{t.el=e.el;const D=t.anchor=e.anchor,I=t.target=e.target,B=t.targetAnchor=e.targetAnchor,ne=Es(e.props),le=ne?n:I,me=ne?D:B;if(o=o||Nl(I),O?(f(e.dynamicChildren,O,le,r,i,o,l),Bo(e,t,!0)):a||p(e,t,le,me,r,i,o,l,!1),S)ne||rr(t,n,D,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const _e=t.target=Hi(t.props,h);_e&&rr(t,_e,null,u,0)}else ne&&rr(t,I,B,u,1)}},remove(e,t,n,s,{um:r,o:{remove:i}},o){const{shapeFlag:l,children:a,anchor:u,targetAnchor:d,target:p,props:f}=e;if(p&&i(d),(o||!Es(f))&&(i(u),l&16))for(let m=0;m<a.length;m++){const h=a[m];r(h,t,n,!0,!!h.dynamicChildren)}},move:rr,hydrate:Em};function rr(e,t,n,{o:{insert:s},m:r},i=2){i===0&&s(e.targetAnchor,t,n);const{el:o,anchor:l,shapeFlag:a,children:u,props:d}=e,p=i===2;if(p&&s(o,t,n),(!p||Es(d))&&a&16)for(let f=0;f<u.length;f++)r(u[f],t,n,2);p&&s(l,t,n)}function Em(e,t,n,s,r,i,{o:{nextSibling:o,parentNode:l,querySelector:a}},u){const d=t.target=Hi(t.props,a);if(d){const p=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Es(t.props))t.anchor=u(o(e),t,l(e),n,s,r,i),t.targetAnchor=p;else{t.anchor=o(e);let f=p;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,d._lpa=t.targetAnchor&&o(t.targetAnchor);break}u(p,t,d,n,s,r,i)}}return t.anchor&&o(t.anchor)}const Sm=$m,$e=Symbol(void 0),Vo=Symbol(void 0),cn=Symbol(void 0),ri=Symbol(void 0),Ss=[];let xt=null;function y(e=!1){Ss.push(xt=e?null:[])}function Om(){Ss.pop(),xt=Ss[Ss.length-1]||null}let Ns=1;function Dl(e){Ns+=e}function xu(e){return e.dynamicChildren=Ns>0?xt||Wn:null,Om(),Ns>0&&xt&&xt.push(e),e}function U(e,t,n,s,r,i){return xu(c(e,t,n,s,r,i,!0))}function A(e,t,n,s,r){return xu(Q(e,t,n,s,r,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function ds(e,t){return e.type===t.type&&e.key===t.key}const Yr="__vInternal",$u=({key:e})=>e!=null?e:null,ur=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ie(e)||xe(e)||ce(e)?{i:Ke,r:e,k:t,f:!!n}:e:null;function c(e,t=null,n=null,s=0,r=null,i=e===$e?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&$u(t),ref:t&&ur(t),scopeId:Wr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return l?(zo(a,n),i&128&&e.normalize(a)):n&&(a.shapeFlag|=Ie(n)?8:16),Ns>0&&!o&&xt&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&xt.push(a),a}const Q=km;function km(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===rm)&&(e=cn),Xn(e)){const l=kn(e,t,!0);return n&&zo(l,n),Ns>0&&!i&&xt&&(l.shapeFlag&6?xt[xt.indexOf(e)]=l:xt.push(l)),l.patchFlag|=-2,l}if(Rm(e)&&(e=e.__vccOpts),t){t=q(t);let{class:l,style:a}=t;l&&!Ie(l)&&(t.class=Re(l)),Be(a)&&(Yc(a)&&!re(a)&&(a=Qe({},a)),t.style=Xe(a))}const o=Ie(e)?1:ru(e)?128:xm(e)?64:Be(e)?4:ce(e)?2:0;return c(e,t,n,s,r,o,i,!0)}function q(e){return e?Yc(e)||Yr in e?Qe({},e):e:null}function kn(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,l=t?Sr(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&$u(l),ref:t&&t.ref?n&&r?re(r)?r.concat(ur(t)):[r,ur(t)]:ur(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&kn(e.ssContent),ssFallback:e.ssFallback&&kn(e.ssFallback),el:e.el,anchor:e.anchor}}function Ft(e=" ",t=0){return Q(Vo,null,e,t)}function pe(e="",t=!1){return t?(y(),A(cn,null,e)):Q(cn,null,e)}function Tt(e){return e==null||typeof e=="boolean"?Q(cn):re(e)?Q($e,null,e.slice()):typeof e=="object"?Xt(e):Q(Vo,null,String(e))}function Xt(e){return e.el===null||e.memo?e:kn(e)}function zo(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(re(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),zo(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Yr in t)?t._ctx=Ke:r===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ce(t)?(t={default:t,_ctx:Ke},n=32):(t=String(t),s&64?(n=16,t=[Ft(t)]):n=8);e.children=t,e.shapeFlag|=n}function Sr(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Re([t.class,s.class]));else if(r==="style")t.style=Xe([t.style,s.style]);else if(Rr(r)){const i=t[r],o=s[r];o&&i!==o&&!(re(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function ht(e,t,n,s=null){Et(e,t,7,[n,s])}const jm=wu();let Pm=0;function Mm(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||jm,i={uid:Pm++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Fc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_u(s,r),emitsOptions:su(s,r),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Vp.bind(null,i),e.ce&&e.ce(i),i}let Ve=null;const os=()=>Ve||Ke,Qn=e=>{Ve=e,e.scope.on()},xn=()=>{Ve&&Ve.scope.off(),Ve=null};function Eu(e){return e.vnode.shapeFlag&4}let Ds=!1;function Cm(e,t=!1){Ds=t;const{props:n,children:s}=e.vnode,r=Eu(e);fm(e,n,r,t),hm(e,s);const i=r?Tm(e,t):void 0;return Ds=!1,i}function Tm(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Hr(new Proxy(e.ctx,om));const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?Lm(e):null;Qn(e),ns();const i=nn(s,e,0,[e.props,r]);if(ss(),xn(),Lc(i)){if(i.then(xn,xn),t)return i.then(o=>{Hl(e,o,t)}).catch(o=>{Br(o,e,0)});e.asyncDep=i}else Hl(e,i,t)}else Su(e,t)}function Hl(e,t,n){ce(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Be(t)&&(e.setupState=Gc(t)),Su(e,n)}let Bl;function Su(e,t,n){const s=e.type;if(!e.render){if(!t&&Bl&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:l,compilerOptions:a}=s,u=Qe(Qe({isCustomElement:i,delimiters:l},o),a);s.render=Bl(r,u)}}e.render=s.render||$t}Qn(e),ns(),lm(e),ss(),xn()}function Am(e){return new Proxy(e.attrs,{get(t,n){return pt(e,"get","$attrs"),t[n]}})}function Lm(e){const t=s=>{e.exposed=s||{}};let n;return{get attrs(){return n||(n=Am(e))},slots:e.slots,emit:e.emit,expose:t}}function Zr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Gc(Hr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $r)return $r[n](e)}}))}function Bi(e,t=!0){return ce(e)?e.displayName||e.name:e.name||t&&e.__name}function Rm(e){return ce(e)&&"__vccOpts"in e}const k=(e,t)=>Ip(e,t,Ds);function St(e,t,n){const s=arguments.length;return s===2?Be(t)&&!re(t)?Xn(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Xn(n)&&(n=[n]),Q(e,t,n))}const Im="3.2.37",Fm="http://www.w3.org/2000/svg",gn=typeof document<"u"?document:null,Vl=gn&&gn.createElement("template"),Nm={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?gn.createElementNS(Fm,e):gn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>gn.createTextNode(e),createComment:e=>gn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>gn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Vl.innerHTML=s?`<svg>${e}</svg>`:e;const l=Vl.content;if(s){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Dm(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Hm(e,t,n){const s=e.style,r=Ie(n);if(n&&!r){for(const i in n)Vi(s,i,n[i]);if(t&&!Ie(t))for(const i in t)n[i]==null&&Vi(s,i,"")}else{const i=s.display;r?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=i)}}const zl=/\s*!important$/;function Vi(e,t,n){if(re(n))n.forEach(s=>Vi(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Bm(e,t);zl.test(n)?e.setProperty(Mn(s),n.replace(zl,""),"important"):e[s]=n}}const Wl=["Webkit","Moz","ms"],ii={};function Bm(e,t){const n=ii[t];if(n)return n;let s=It(t);if(s!=="filter"&&s in e)return ii[t]=s;s=Nr(s);for(let r=0;r<Wl.length;r++){const i=Wl[r]+s;if(i in e)return ii[t]=i}return t}const Ul="http://www.w3.org/1999/xlink";function Vm(e,t,n,s,r){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ul,t.slice(6,t.length)):e.setAttributeNS(Ul,t,n);else{const i=zf(t);n==null||i&&!Cc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function zm(e,t,n,s,r,i,o){if(t==="innerHTML"||t==="textContent"){s&&o(s,r,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const a=n==null?"":n;(e.value!==a||e.tagName==="OPTION")&&(e.value=a),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Cc(n):n==null&&a==="string"?(n="",l=!0):a==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[Ou,Wm]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let zi=0;const Um=Promise.resolve(),Km=()=>{zi=0},qm=()=>zi||(Um.then(Km),zi=Ou());function Dn(e,t,n,s){e.addEventListener(t,n,s)}function Ym(e,t,n,s){e.removeEventListener(t,n,s)}function Zm(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[l,a]=Gm(t);if(s){const u=i[t]=Xm(s,r);Dn(e,l,u,a)}else o&&(Ym(e,l,o,a),i[t]=void 0)}}const Kl=/(?:Once|Passive|Capture)$/;function Gm(e){let t;if(Kl.test(e)){t={};let n;for(;n=e.match(Kl);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Mn(e.slice(2)),t]}function Xm(e,t){const n=s=>{const r=s.timeStamp||Ou();(Wm||r>=n.attached-1)&&Et(Qm(s,n.value),t,5,[s])};return n.value=e,n.attached=qm(),n}function Qm(e,t){if(re(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const ql=/^on[a-z]/,Jm=(e,t,n,s,r=!1,i,o,l,a)=>{t==="class"?Dm(e,s,r):t==="style"?Hm(e,n,s):Rr(t)?wo(t)||Zm(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):eh(e,t,s,r))?zm(e,t,s,i,o,l,a):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Vm(e,t,s,r))};function eh(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&ql.test(t)&&ce(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ql.test(t)&&Ie(n)?!1:t in e}const Yl=e=>{const t=e.props["onUpdate:modelValue"]||!1;return re(t)?n=>Kn(t,n):t};function th(e){e.target.composing=!0}function Zl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const nh={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=Yl(r);const i=s||r.props&&r.props.type==="number";Dn(e,t?"change":"input",o=>{if(o.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=Oi(l)),e._assign(l)}),n&&Dn(e,"change",()=>{e.value=e.value.trim()}),t||(Dn(e,"compositionstart",th),Dn(e,"compositionend",Zl),Dn(e,"change",Zl))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},i){if(e._assign=Yl(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&Oi(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},sh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Gl=(e,t)=>n=>{if(!("key"in n))return;const s=Mn(n.key);if(t.some(r=>r===s||sh[r]===s))return e(n)},ku={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):fs(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),fs(e,!0),s.enter(e)):s.leave(e,()=>{fs(e,!1)}):fs(e,t))},beforeUnmount(e,{value:t}){fs(e,t)}};function fs(e,t){e.style.display=t?e._vod:"none"}const rh=Qe({patchProp:Jm},Nm);let Xl;function ih(){return Xl||(Xl=bm(rh))}const oh=(...e)=>{const t=ih().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=lh(s);if(!r)return;const i=t._component;!ce(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function lh(e){return Ie(e)?document.querySelector(e):e}var ah=Object.defineProperty,Ql=Object.getOwnPropertySymbols,ch=Object.prototype.hasOwnProperty,uh=Object.prototype.propertyIsEnumerable,Jl=(e,t,n)=>t in e?ah(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dh=(e,t)=>{for(var n in t||(t={}))ch.call(t,n)&&Jl(e,n,t[n]);if(Ql)for(var n of Ql(t))uh.call(t,n)&&Jl(e,n,t[n]);return e},ju="usehead",ea="head:count",oi="data-head-attrs",Pu="data-meta-body",fh=(e,t,n)=>{const s=n.createElement(e);for(const r of Object.keys(t))if(r==="body"&&t.body===!0)s.setAttribute(Pu,"true");else{let i=t[r];if(r==="key"||i===!1)continue;r==="children"?s.textContent=i:s.setAttribute(r,i)}return s};function ta(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const s=t.cloneNode(!0);return s.setAttribute("nonce",""),s.nonce=n,n===e.nonce&&e.isEqualNode(s)}}return e.isEqualNode(t)}var ph=e=>{const t=["key","id","name","property"];for(const n of t){const s=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(s!==void 0)return{name:n,value:s}}},mh=()=>{const e=C(ju);if(!e)throw new Error("You may forget to apply app.use(head)");return e},hh=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],gh=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(w(t)),_h=e=>{const t=[],n=Object.keys(e);for(const s of n)if(e[s]!=null)switch(s){case"title":t.push({tag:s,props:{children:e[s]}});break;case"titleTemplate":break;case"base":t.push({tag:s,props:dh({key:"default"},e[s])});break;default:if(hh.includes(s)){const r=e[s];Array.isArray(r)?r.forEach(i=>{t.push({tag:s,props:i})}):r&&t.push({tag:s,props:r})}break}return t},na=(e,t)=>{const n=e.getAttribute(oi);if(n)for(const r of n.split(","))r in t||e.removeAttribute(r);const s=[];for(const r in t){const i=t[r];i!=null&&(i===!1?e.removeAttribute(r):e.setAttribute(r,i),s.push(r))}s.length?e.setAttribute(oi,s.join(",")):e.removeAttribute(oi)},vh=(e=window.document,t,n)=>{var s,r;const i=e.head,o=e.body;let l=i.querySelector(`meta[name="${ea}"]`),a=o.querySelectorAll(`[${Pu}]`);const u=l?Number(l.getAttribute("content")):0,d=[],p=[];if(a)for(let m=0;m<a.length;m++)a[m]&&((s=a[m].tagName)==null?void 0:s.toLowerCase())===t&&p.push(a[m]);if(l)for(let m=0,h=l.previousElementSibling;m<u;m++,h=(h==null?void 0:h.previousElementSibling)||null)((r=h==null?void 0:h.tagName)==null?void 0:r.toLowerCase())===t&&d.push(h);else l=e.createElement("meta"),l.setAttribute("name",ea),l.setAttribute("content","0"),i.append(l);let f=n.map(m=>{var h;return{element:fh(m.tag,m.props,e),body:(h=m.props.body)!=null?h:!1}});f=f.filter(m=>{for(let h=0;h<d.length;h++){const b=d[h];if(ta(b,m.element))return d.splice(h,1),!1}for(let h=0;h<p.length;h++){const b=p[h];if(ta(b,m.element))return p.splice(h,1),!1}return!0}),p.forEach(m=>{var h;return(h=m.parentNode)==null?void 0:h.removeChild(m)}),d.forEach(m=>{var h;return(h=m.parentNode)==null?void 0:h.removeChild(m)}),f.forEach(m=>{m.body===!0?o.insertAdjacentElement("beforeend",m.element):i.insertBefore(m.element,l)}),l.setAttribute("content",""+(u-d.length+f.filter(m=>!m.body).length))},bh=e=>{let t=[],n=new Set;e&&t.push(kt(e));const s={install(r){r.config.globalProperties.$head=s,r.provide(ju,s)},get headTags(){const r=[],i=t.map(o=>w(o).titleTemplate).reverse().find(o=>o!=null);return t.forEach(o=>{_h(w(o)).forEach(a=>{if(a.tag==="meta"||a.tag==="base"||a.tag==="script"){const u=ph(a.props);if(u){let d=-1;for(let p=0;p<r.length;p++){const f=r[p],m=f.props[u.name],h=a.props[u.name];if(f.tag===a.tag&&m===h){d=p;break}}d!==-1&&r.splice(d,1)}}i&&a.tag==="title"&&(a.props.children=gh(i,a.props.children)),r.push(a)})}),r},addHeadObjs(r){t.push(r)},removeHeadObjs(r){t=t.filter(i=>i!==r)},updateDOM(r=window.document){let i,o={},l={};const a={};for(const d of s.headTags){if(d.tag==="title"){i=d.props.children;continue}if(d.tag==="htmlAttrs"){Object.assign(o,d.props);continue}if(d.tag==="bodyAttrs"){Object.assign(l,d.props);continue}a[d.tag]=a[d.tag]||[],a[d.tag].push(d)}i!==void 0&&(r.title=i),na(r.documentElement,o),na(r.body,l);const u=new Set([...Object.keys(a),...n]);for(const d of u)vh(r,d,a[d]||[]);n.clear(),Object.keys(a).forEach(d=>n.add(d))}};return s},yh=typeof window<"u",wh=e=>{const t=mh(),n=W(e);t.addHeadObjs(n),yh&&(Ur(()=>{t.updateDOM()}),qr(()=>{t.removeHeadObjs(n),t.updateDOM()}))};const dr=Symbol("v-click-clicks"),Hn=Symbol("v-click-clicks-elements"),Wi=Symbol("v-click-clicks-order-map"),fr=Symbol("v-click-clicks-disabled"),Mu=Symbol("slidev-slide-scale"),R=Symbol("slidev-slidev-context"),xh=Symbol("slidev-route"),$h=Symbol("slidev-slide-context"),Ln="slidev-vclick-target",li="slidev-vclick-hidden",Eh="slidev-vclick-fade",ai="slidev-vclick-hidden-explicitly",ps="slidev-vclick-current",ir="slidev-vclick-prior";function sa(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Sh(e){return e!=null}function Oh(e,t){return Object.fromEntries(Object.entries(e).map(([n,s])=>t(n,s)).filter(Sh))}const vn={theme:"seriph",title:"\u65B0\u6E2F\u751F\u7269\u56FE\u9274",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",background:"./\u690D\u7269/\u7EA2\u67AB1.jpg",class:"text-center"},we=vn;var Pc;const sn=(Pc=we.aspectRatio)!=null?Pc:16/9;var Mc;const $n=(Mc=we.canvasWidth)!=null?Mc:980,Cu=Math.round($n/sn),Tu=k(()=>Oh(we.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function _t(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Cn=Le({page:0,clicks:0});let kh=[],jh=[];_t(Cn,"$syncUp",!0);_t(Cn,"$syncDown",!0);_t(Cn,"$paused",!1);_t(Cn,"$onSet",e=>kh.push(e));_t(Cn,"$onPatch",e=>jh.push(e));_t(Cn,"$patch",async()=>!1);function Au(e,t,n=!1){const s=[];let r=!1,i=!1,o,l;const a=Le(t);function u(m){s.push(m)}function d(m,h){clearTimeout(o),r=!0,a[m]=h,o=setTimeout(()=>r=!1,0)}function p(m){r||(clearTimeout(l),i=!0,Object.entries(m).forEach(([h,b])=>{a[h]=b}),l=setTimeout(()=>i=!1,0))}function f(m){let h;n?n&&window.addEventListener("storage",v=>{v&&v.key===m&&v.newValue&&p(JSON.parse(v.newValue))}):(h=new BroadcastChannel(m),h.addEventListener("message",v=>p(v.data)));function b(){!n&&h&&!i?h.postMessage(ye(a)):n&&!i&&window.localStorage.setItem(m,JSON.stringify(a)),r||s.forEach(v=>v(a))}if(ue(a,b,{deep:!0}),n){const v=window.localStorage.getItem(m);v&&p(JSON.parse(v))}}return{init:f,onPatch:u,patch:d,state:a}}const{init:Ph,onPatch:Mh,patch:ra,state:ci}=Au(Cn,{page:1,clicks:0}),Tn=Le({});let Ch=[],Th=[];_t(Tn,"$syncUp",!0);_t(Tn,"$syncDown",!0);_t(Tn,"$paused",!1);_t(Tn,"$onSet",e=>Ch.push(e));_t(Tn,"$onPatch",e=>Th.push(e));_t(Tn,"$patch",async()=>!1);const{init:Ah,onPatch:Lh,patch:Lu,state:Or}=Au(Tn,{},!1),Rh="modulepreload",Ih=function(e){return"/slides/iharbour-creatures/"+e},ia={},ls=function(t,n,s){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=Ih(r),r in ia)return;ia[r]=!0;const i=r.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Rh,i||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),i)return new Promise((a,u)=>{l.addEventListener("load",a),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};function nt(e,t,n){return Array.isArray(e)?(e.length=Math.max(e.length,t),e.splice(t,1,n),n):(e[t]=n,n)}function Fh(e,t){if(Array.isArray(e)){e.splice(t,1);return}delete e[t]}var oa;const Wt=typeof window<"u",Nh=e=>typeof e<"u",Dh=e=>typeof e=="function",Ru=e=>typeof e=="string",Ui=()=>+Date.now(),pr=()=>{};Wt&&((oa=window==null?void 0:window.navigator)==null?void 0:oa.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ct(e){return typeof e=="function"?e():w(e)}function Hh(e,t){function n(...s){e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})}return n}const Iu=e=>e();function Bh(e=Iu){const t=W(!0);function n(){t.value=!1}function s(){t.value=!0}return{isActive:t,pause:n,resume:s,eventFilter:(...i)=>{t.value&&e(...i)}}}function Vh(e){return e}function zh(e,t){var n;if(typeof e=="number")return e+t;const s=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(s.length),i=parseFloat(s)+t;return Number.isNaN(i)?e:i+r}function jn(e){return So()?(Oo(e),!0):!1}function Wh(e){if(!xe(e))return Le(e);const t=new Proxy({},{get(n,s,r){return w(Reflect.get(e.value,s,r))},set(n,s,r){return xe(e.value[s])&&!xe(r)?e.value[s].value=r:e.value[s]=r,!0},deleteProperty(n,s){return Reflect.deleteProperty(e.value,s)},has(n,s){return Reflect.has(e.value,s)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Le(t)}function Uh(e){return typeof e=="function"?k(e):W(e)}var Kh=Object.defineProperty,qh=Object.defineProperties,Yh=Object.getOwnPropertyDescriptors,la=Object.getOwnPropertySymbols,Zh=Object.prototype.hasOwnProperty,Gh=Object.prototype.propertyIsEnumerable,aa=(e,t,n)=>t in e?Kh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xh=(e,t)=>{for(var n in t||(t={}))Zh.call(t,n)&&aa(e,n,t[n]);if(la)for(var n of la(t))Gh.call(t,n)&&aa(e,n,t[n]);return e},Qh=(e,t)=>qh(e,Yh(t));function Jh(e){if(!xe(e))return Tp(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=Cp(()=>({get(){return e.value[n]},set(s){if(Array.isArray(e.value)){const r=[...e.value];r[n]=s,e.value=r}else{const r=Qh(Xh({},e.value),{[n]:s});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function eg(e,t=!0){os()?uu(e):t?e():We(e)}function Fu(e,t=!0){os()?qs(e):t?e():We(e)}function tg(e,t=1e3,n={}){const{immediate:s=!0,immediateCallback:r=!1}=n;let i=null;const o=W(!1);function l(){i&&(clearInterval(i),i=null)}function a(){o.value=!1,l()}function u(){w(t)<=0||(o.value=!0,r&&e(),l(),i=setInterval(e,ct(t)))}if(s&&Wt&&u(),xe(t)){const d=ue(t,()=>{o.value&&Wt&&u()});jn(d)}return jn(a),{isActive:o,pause:a,resume:u}}function Nu(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,r=xe(e),i=W(e);function o(l){if(arguments.length)return i.value=l,i.value;{const a=ct(n);return i.value=i.value===a?ct(s):a,i.value}}return r?o:[i,o]}var ca=Object.getOwnPropertySymbols,ng=Object.prototype.hasOwnProperty,sg=Object.prototype.propertyIsEnumerable,rg=(e,t)=>{var n={};for(var s in e)ng.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&ca)for(var s of ca(e))t.indexOf(s)<0&&sg.call(e,s)&&(n[s]=e[s]);return n};function ig(e,t,n={}){const s=n,{eventFilter:r=Iu}=s,i=rg(s,["eventFilter"]);return ue(e,Hh(r,t),i)}var og=Object.defineProperty,lg=Object.defineProperties,ag=Object.getOwnPropertyDescriptors,kr=Object.getOwnPropertySymbols,Du=Object.prototype.hasOwnProperty,Hu=Object.prototype.propertyIsEnumerable,ua=(e,t,n)=>t in e?og(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,cg=(e,t)=>{for(var n in t||(t={}))Du.call(t,n)&&ua(e,n,t[n]);if(kr)for(var n of kr(t))Hu.call(t,n)&&ua(e,n,t[n]);return e},ug=(e,t)=>lg(e,ag(t)),dg=(e,t)=>{var n={};for(var s in e)Du.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&kr)for(var s of kr(e))t.indexOf(s)<0&&Hu.call(e,s)&&(n[s]=e[s]);return n};function fg(e,t,n={}){const s=n,{eventFilter:r}=s,i=dg(s,["eventFilter"]),{eventFilter:o,pause:l,resume:a,isActive:u}=Bh(r);return{stop:ig(e,t,ug(cg({},i),{eventFilter:o})),pause:l,resume:a,isActive:u}}function Jt(e){var t;const n=ct(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Je=Wt?window:void 0,pg=Wt?window.document:void 0;function Ee(...e){let t,n,s,r;if(Ru(e[0])?([n,s,r]=e,t=Je):[t,n,s,r]=e,!t)return pr;let i=pr;const o=ue(()=>Jt(t),a=>{i(),a&&(a.addEventListener(n,s,r),i=()=>{a.removeEventListener(n,s,r),i=pr})},{immediate:!0,flush:"post"}),l=()=>{o(),i()};return jn(l),l}function mg(e,t,n={}){const{window:s=Je,ignore:r,capture:i=!0,detectIframe:o=!1}=n;if(!s)return;const l=W(!0);let a;const u=f=>{s.clearTimeout(a);const m=Jt(e),h=f.composedPath();!m||m===f.target||h.includes(m)||!l.value||r&&r.length>0&&r.some(b=>{const v=Jt(b);return v&&(f.target===v||h.includes(v))})||t(f)},d=[Ee(s,"click",u,{passive:!0,capture:i}),Ee(s,"pointerdown",f=>{const m=Jt(e);l.value=!!m&&!f.composedPath().includes(m)},{passive:!0}),Ee(s,"pointerup",f=>{if(f.button===0){const m=f.composedPath();f.composedPath=()=>m,a=s.setTimeout(()=>u(f),50)}},{passive:!0}),o&&Ee(s,"blur",f=>{var m;const h=Jt(e);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(h!=null&&h.contains(document.activeElement))&&t(f)})].filter(Boolean);return()=>d.forEach(f=>f())}const hg=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function gg(e,t,n={}){const{target:s=Je,eventName:r="keydown",passive:i=!1}=n,o=hg(e);return Ee(s,r,a=>{o(a)&&t(a)},i)}function _g(e={}){const{window:t=Je}=e,n=W(0);return t&&(Ee(t,"blur",()=>n.value+=1,!0),Ee(t,"focus",()=>n.value+=1,!0)),k(()=>(n.value,t==null?void 0:t.document.activeElement))}function Wo(e,t=!1){const n=W(),s=()=>n.value=Boolean(e());return s(),Fu(s,t),n}function mr(e,t={}){const{window:n=Je}=t,s=Wo(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=W(!1),o=()=>{!s.value||(r||(r=n.matchMedia(e)),i.value=r.matches)};return eg(()=>{o(),r&&("addEventListener"in r?r.addEventListener("change",o):r.addListener(o),jn(()=>{"removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o)}))}),i}const vg={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var bg=Object.defineProperty,da=Object.getOwnPropertySymbols,yg=Object.prototype.hasOwnProperty,wg=Object.prototype.propertyIsEnumerable,fa=(e,t,n)=>t in e?bg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xg=(e,t)=>{for(var n in t||(t={}))yg.call(t,n)&&fa(e,n,t[n]);if(da)for(var n of da(t))wg.call(t,n)&&fa(e,n,t[n]);return e};function $g(e,t={}){function n(l,a){let u=e[l];return a!=null&&(u=zh(u,a)),typeof u=="number"&&(u=`${u}px`),u}const{window:s=Je}=t;function r(l){return s?s.matchMedia(l).matches:!1}const i=l=>mr(`(min-width: ${n(l)})`,t),o=Object.keys(e).reduce((l,a)=>(Object.defineProperty(l,a,{get:()=>i(a),enumerable:!0,configurable:!0}),l),{});return xg({greater:i,smaller(l){return mr(`(max-width: ${n(l,-.1)})`,t)},between(l,a){return mr(`(min-width: ${n(l)}) and (max-width: ${n(a,-.1)})`,t)},isGreater(l){return r(`(min-width: ${n(l)})`)},isSmaller(l){return r(`(max-width: ${n(l,-.1)})`)},isInBetween(l,a){return r(`(min-width: ${n(l)}) and (max-width: ${n(a,-.1)})`)}},o)}const Ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qi="__vueuse_ssr_handlers__";Ki[qi]=Ki[qi]||{};const Eg=Ki[qi];function Sg(e,t){return Eg[e]||t}function Og(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var kg=Object.defineProperty,pa=Object.getOwnPropertySymbols,jg=Object.prototype.hasOwnProperty,Pg=Object.prototype.propertyIsEnumerable,ma=(e,t,n)=>t in e?kg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ha=(e,t)=>{for(var n in t||(t={}))jg.call(t,n)&&ma(e,n,t[n]);if(pa)for(var n of pa(t))Pg.call(t,n)&&ma(e,n,t[n]);return e};const Mg={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Pt(e,t,n,s={}){var r;const{flush:i="pre",deep:o=!0,listenToStorageChanges:l=!0,writeDefaults:a=!0,mergeDefaults:u=!1,shallow:d,window:p=Je,eventFilter:f,onError:m=B=>{console.error(B)}}=s,h=(d?kt:W)(t);if(!n)try{n=Sg("getDefaultStorage",()=>{var B;return(B=Je)==null?void 0:B.localStorage})()}catch(B){m(B)}if(!n)return h;const b=ct(t),v=Og(b),S=(r=s.serializer)!=null?r:Mg[v],{pause:$,resume:E}=fg(h,()=>O(h.value),{flush:i,deep:o,eventFilter:f});return p&&l&&Ee(p,"storage",I),I(),h;function O(B){try{B==null?n.removeItem(e):n.setItem(e,S.write(B))}catch(ne){m(ne)}}function D(B){if(!(B&&B.key!==e)){$();try{const ne=B?B.newValue:n.getItem(e);if(ne==null)return a&&b!==null&&n.setItem(e,S.write(b)),b;if(!B&&u){const le=S.read(ne);return Dh(u)?u(le,b):v==="object"&&!Array.isArray(le)?ha(ha({},b),le):le}else return typeof ne!="string"?ne:S.read(ne)}catch(ne){m(ne)}finally{E()}}}function I(B){B&&B.key!==e||(h.value=D(B))}}function Cg(e){return mr("(prefers-color-scheme: dark)",e)}var Tg=Object.defineProperty,Ag=Object.defineProperties,Lg=Object.getOwnPropertyDescriptors,ga=Object.getOwnPropertySymbols,Rg=Object.prototype.hasOwnProperty,Ig=Object.prototype.propertyIsEnumerable,_a=(e,t,n)=>t in e?Tg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fg=(e,t)=>{for(var n in t||(t={}))Rg.call(t,n)&&_a(e,n,t[n]);if(ga)for(var n of ga(t))Ig.call(t,n)&&_a(e,n,t[n]);return e},Ng=(e,t)=>Ag(e,Lg(t));function A6(e,t={}){var n,s;const r=(n=t.draggingElement)!=null?n:Je,i=W((s=ct(t.initialValue))!=null?s:{x:0,y:0}),o=W(),l=f=>t.pointerTypes?t.pointerTypes.includes(f.pointerType):!0,a=f=>{ct(t.preventDefault)&&f.preventDefault(),ct(t.stopPropagation)&&f.stopPropagation()},u=f=>{var m;if(!l(f)||ct(t.exact)&&f.target!==ct(e))return;const h=ct(e).getBoundingClientRect(),b={x:f.pageX-h.left,y:f.pageY-h.top};((m=t.onStart)==null?void 0:m.call(t,b,f))!==!1&&(o.value=b,a(f))},d=f=>{var m;!l(f)||!o.value||(i.value={x:f.pageX-o.value.x,y:f.pageY-o.value.y},(m=t.onMove)==null||m.call(t,i.value,f),a(f))},p=f=>{var m;!l(f)||!o.value||(o.value=void 0,(m=t.onEnd)==null||m.call(t,i.value,f),a(f))};return Wt&&(Ee(e,"pointerdown",u,!0),Ee(r,"pointermove",d,!0),Ee(r,"pointerup",p,!0)),Ng(Fg({},Jh(i)),{position:i,isDragging:k(()=>!!o.value),style:k(()=>`left:${i.value.x}px;top:${i.value.y}px;`)})}var va=Object.getOwnPropertySymbols,Dg=Object.prototype.hasOwnProperty,Hg=Object.prototype.propertyIsEnumerable,Bg=(e,t)=>{var n={};for(var s in e)Dg.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&va)for(var s of va(e))t.indexOf(s)<0&&Hg.call(e,s)&&(n[s]=e[s]);return n};function Vg(e,t,n={}){const s=n,{window:r=Je}=s,i=Bg(s,["window"]);let o;const l=Wo(()=>r&&"ResizeObserver"in r),a=()=>{o&&(o.disconnect(),o=void 0)},u=ue(()=>Jt(e),p=>{a(),l.value&&r&&p&&(o=new ResizeObserver(t),o.observe(p,i))},{immediate:!0,flush:"post"}),d=()=>{a(),u()};return jn(d),{isSupported:l,stop:d}}function zg(e,t={}){const{immediate:n=!0,window:s=Je}=t,r=W(!1);let i=null;function o(){!r.value||!s||(e(),i=s.requestAnimationFrame(o))}function l(){!r.value&&s&&(r.value=!0,o())}function a(){r.value=!1,i!=null&&s&&(s.cancelAnimationFrame(i),i=null)}return n&&l(),jn(a),{isActive:r,pause:a,resume:l}}function Wg(e,t={width:0,height:0},n={}){const s=W(t.width),r=W(t.height);return Vg(e,([i])=>{s.value=i.contentRect.width,r.value=i.contentRect.height},n),ue(()=>Jt(e),i=>{s.value=i?t.width:0,r.value=i?t.height:0}),{width:s,height:r}}const ba=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Ug(e,t={}){const{document:n=pg,autoExit:s=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),i=W(!1);let o=ba[0];const l=Wo(()=>{if(n){for(const b of ba)if(b[1]in n)return o=b,!0}else return!1;return!1}),[a,u,d,,p]=o;async function f(){!l.value||(n!=null&&n[d]&&await n[u](),i.value=!1)}async function m(){if(!l.value)return;await f();const b=Jt(r);b&&(await b[a](),i.value=!0)}async function h(){i.value?await f():await m()}return n&&Ee(n,p,()=>{i.value=!!(n!=null&&n[d])},!1),s&&jn(f),{isSupported:l,isFullscreen:i,enter:m,exit:f,toggle:h}}const Kg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function qg(e={}){const{reactive:t=!1,target:n=Je,aliasMap:s=Kg,passive:r=!0,onEventFired:i=pr}=e,o=Le(new Set),l={toJSON(){return{}},current:o},a=t?Le(l):l,u=new Set,d=new Set;function p(b,v){b in a&&(t?a[b]=v:a[b].value=v)}function f(){for(const b of d)p(b,!1)}function m(b,v){var S,$;const E=(S=b.key)==null?void 0:S.toLowerCase(),D=[($=b.code)==null?void 0:$.toLowerCase(),E].filter(Boolean);E&&(v?o.add(E):o.delete(E));for(const I of D)d.add(I),p(I,v);E==="meta"&&!v?(u.forEach(I=>{o.delete(I),p(I,!1)}),u.clear()):typeof b.getModifierState=="function"&&b.getModifierState("Meta")&&v&&[...o,...D].forEach(I=>u.add(I))}Ee(n,"keydown",b=>(m(b,!0),i(b)),{passive:r}),Ee(n,"keyup",b=>(m(b,!1),i(b)),{passive:r}),Ee("blur",f,{passive:!0}),Ee("focus",f,{passive:!0});const h=new Proxy(a,{get(b,v,S){if(typeof v!="string")return Reflect.get(b,v,S);if(v=v.toLowerCase(),v in s&&(v=s[v]),!(v in a))if(/[+_-]/.test(v)){const E=v.split(/[+_-]/g).map(O=>O.trim());a[v]=k(()=>E.every(O=>w(h[O])))}else a[v]=W(!1);const $=Reflect.get(b,v,S);return t?w($):$}});return h}function L6(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:s=!1,initialValue:r={x:0,y:0},window:i=Je,eventFilter:o}=e,l=W(r.x),a=W(r.y),u=W(null),d=b=>{t==="page"?(l.value=b.pageX,a.value=b.pageY):t==="client"&&(l.value=b.clientX,a.value=b.clientY),u.value="mouse"},p=()=>{l.value=r.x,a.value=r.y},f=b=>{if(b.touches.length>0){const v=b.touches[0];t==="page"?(l.value=v.pageX,a.value=v.pageY):t==="client"&&(l.value=v.clientX,a.value=v.clientY),u.value="touch"}},m=b=>o===void 0?d(b):o(()=>d(b),{}),h=b=>o===void 0?f(b):o(()=>f(b),{});return i&&(Ee(i,"mousemove",m,{passive:!0}),Ee(i,"dragover",m,{passive:!0}),n&&(Ee(i,"touchstart",h,{passive:!0}),Ee(i,"touchmove",h,{passive:!0}),s&&Ee(i,"touchend",p,{passive:!0}))),{x:l,y:a,sourceType:u}}var Vt;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Vt||(Vt={}));function Yg(e,t={}){const n=Uh(e),{threshold:s=50,onSwipe:r,onSwipeEnd:i,onSwipeStart:o}=t,l=Le({x:0,y:0}),a=(I,B)=>{l.x=I,l.y=B},u=Le({x:0,y:0}),d=(I,B)=>{u.x=I,u.y=B},p=k(()=>l.x-u.x),f=k(()=>l.y-u.y),{max:m,abs:h}=Math,b=k(()=>m(h(p.value),h(f.value))>=s),v=W(!1),S=W(!1),$=k(()=>b.value?h(p.value)>h(f.value)?p.value>0?Vt.LEFT:Vt.RIGHT:f.value>0?Vt.UP:Vt.DOWN:Vt.NONE),E=I=>t.pointerTypes?t.pointerTypes.includes(I.pointerType):!0,O=[Ee(e,"pointerdown",I=>{var B,ne;if(!E(I))return;S.value=!0,(ne=(B=n.value)==null?void 0:B.style)==null||ne.setProperty("touch-action","none");const le=I.target;le==null||le.setPointerCapture(I.pointerId);const{clientX:me,clientY:_e}=I;a(me,_e),d(me,_e),o==null||o(I)}),Ee(e,"pointermove",I=>{if(!E(I)||!S.value)return;const{clientX:B,clientY:ne}=I;d(B,ne),!v.value&&b.value&&(v.value=!0),v.value&&(r==null||r(I))}),Ee(e,"pointerup",I=>{var B,ne;!E(I)||(v.value&&(i==null||i(I,$.value)),S.value=!1,v.value=!1,(ne=(B=n.value)==null?void 0:B.style)==null||ne.setProperty("touch-action","initial"))})],D=()=>O.forEach(I=>I());return{isSwiping:Vn(v),direction:Vn($),posStart:Vn(l),posEnd:Vn(u),distanceX:p,distanceY:f,stop:D}}var Zg=Object.defineProperty,ya=Object.getOwnPropertySymbols,Gg=Object.prototype.hasOwnProperty,Xg=Object.prototype.propertyIsEnumerable,wa=(e,t,n)=>t in e?Zg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qg=(e,t)=>{for(var n in t||(t={}))Gg.call(t,n)&&wa(e,n,t[n]);if(ya)for(var n of ya(t))Xg.call(t,n)&&wa(e,n,t[n]);return e};function R6(e={}){const{controls:t=!1,offset:n=0,immediate:s=!0,interval:r="requestAnimationFrame"}=e,i=W(Ui()+n),o=()=>i.value=Ui()+n,l=r==="requestAnimationFrame"?zg(o,{immediate:s}):tg(o,r,{immediate:s});return t?Qg({timestamp:i},l):i}var Jg=Object.defineProperty,xa=Object.getOwnPropertySymbols,e0=Object.prototype.hasOwnProperty,t0=Object.prototype.propertyIsEnumerable,$a=(e,t,n)=>t in e?Jg(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,n0=(e,t)=>{for(var n in t||(t={}))e0.call(t,n)&&$a(e,n,t[n]);if(xa)for(var n of xa(t))t0.call(t,n)&&$a(e,n,t[n]);return e};const s0={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};n0({linear:Vh},s0);function Lt(e,t,n,s={}){var r,i,o;const{passive:l=!1,eventName:a,deep:u=!1,defaultValue:d}=s,p=os(),f=n||(p==null?void 0:p.emit)||((r=p==null?void 0:p.$emit)==null?void 0:r.bind(p))||((o=(i=p==null?void 0:p.proxy)==null?void 0:i.$emit)==null?void 0:o.bind(p==null?void 0:p.proxy));let m=a;t||(t="modelValue"),m=a||m||`update:${t.toString()}`;const h=()=>Nh(e[t])?e[t]:d;if(l){const b=W(h());return ue(()=>e[t],v=>b.value=v),ue(b,v=>{(v!==e[t]||u)&&f(m,v)},{deep:u}),b}else return k({get(){return h()},set(b){f(m,b)}})}function I6({window:e=Je}={}){if(!e)return W(!1);const t=W(e.document.hasFocus());return Ee(e,"blur",()=>{t.value=!1}),Ee(e,"focus",()=>{t.value=!0}),t}function r0(e={}){const{window:t=Je,initialWidth:n=1/0,initialHeight:s=1/0,listenOrientation:r=!0}=e,i=W(n),o=W(s),l=()=>{t&&(i.value=t.innerWidth,o.value=t.innerHeight)};return l(),Fu(l),Ee("resize",l,{passive:!0}),r&&Ee("orientationchange",l,{passive:!0}),{width:i,height:o}}/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Bn=typeof window<"u";function i0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const je=Object.assign;function ui(e,t){const n={};for(const s in t){const r=t[s];n[s]=jt(r)?r.map(e):e(r)}return n}const Os=()=>{},jt=Array.isArray,o0=/\/$/,l0=e=>e.replace(o0,"");function di(e,t,n="/"){let s,r={},i="",o="";const l=t.indexOf("#");let a=t.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=t.slice(0,a),i=t.slice(a+1,l>-1?l:t.length),r=e(i)),l>-1&&(s=s||t.slice(0,l),o=t.slice(l,t.length)),s=d0(s!=null?s:t,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function a0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ea(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function c0(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Jn(t.matched[s],n.matched[r])&&Bu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Jn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Bu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!u0(e[n],t[n]))return!1;return!0}function u0(e,t){return jt(e)?Sa(e,t):jt(t)?Sa(t,e):e===t}function Sa(e,t){return jt(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function d0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Hs;(function(e){e.pop="pop",e.push="push"})(Hs||(Hs={}));var ks;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ks||(ks={}));function f0(e){if(!e)if(Bn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),l0(e)}const p0=/^[^#]+#/;function m0(e,t){return e.replace(p0,"#")+t}function h0(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Gr=()=>({left:window.pageXOffset,top:window.pageYOffset});function g0(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=h0(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Oa(e,t){return(history.state?history.state.position-t:-1)+e}const Yi=new Map;function _0(e,t){Yi.set(e,t)}function v0(e){const t=Yi.get(e);return Yi.delete(e),t}let b0=()=>location.protocol+"//"+location.host;function Vu(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let l=r.includes(e.slice(i))?e.slice(i).length:1,a=r.slice(l);return a[0]!=="/"&&(a="/"+a),Ea(a,"")}return Ea(n,e)+s+r}function y0(e,t,n,s){let r=[],i=[],o=null;const l=({state:f})=>{const m=Vu(e,location),h=n.value,b=t.value;let v=0;if(f){if(n.value=m,t.value=f,o&&o===h){o=null;return}v=b?f.position-b.position:0}else s(m);r.forEach(S=>{S(n.value,h,{delta:v,type:Hs.pop,direction:v?v>0?ks.forward:ks.back:ks.unknown})})};function a(){o=n.value}function u(f){r.push(f);const m=()=>{const h=r.indexOf(f);h>-1&&r.splice(h,1)};return i.push(m),m}function d(){const{history:f}=window;!f.state||f.replaceState(je({},f.state,{scroll:Gr()}),"")}function p(){for(const f of i)f();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:a,listen:u,destroy:p}}function ka(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Gr():null}}function w0(e){const{history:t,location:n}=window,s={value:Vu(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(a,u,d){const p=e.indexOf("#"),f=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+a:b0()+e+a;try{t[d?"replaceState":"pushState"](u,"",f),r.value=u}catch(m){console.error(m),n[d?"replace":"assign"](f)}}function o(a,u){const d=je({},t.state,ka(r.value.back,a,r.value.forward,!0),u,{position:r.value.position});i(a,d,!0),s.value=a}function l(a,u){const d=je({},r.value,t.state,{forward:a,scroll:Gr()});i(d.current,d,!0);const p=je({},ka(s.value,a,null),{position:d.position+1},u);i(a,p,!1),s.value=a}return{location:s,state:r,push:l,replace:o}}function x0(e){e=f0(e);const t=w0(e),n=y0(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=je({location:"",base:e,go:s,createHref:m0.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function $0(e){return typeof e=="string"||e&&typeof e=="object"}function zu(e){return typeof e=="string"||typeof e=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wu=Symbol("");var ja;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ja||(ja={}));function es(e,t){return je(new Error,{type:e,[Wu]:!0},t)}function Nt(e,t){return e instanceof Error&&Wu in e&&(t==null||!!(e.type&t))}const Pa="[^/]+?",E0={sensitive:!1,strict:!1,start:!0,end:!0},S0=/[.+*?^${}()[\]/\\]/g;function O0(e,t){const n=je({},E0,t),s=[];let r=n.start?"^":"";const i=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const f=u[p];let m=40+(n.sensitive?.25:0);if(f.type===0)p||(r+="/"),r+=f.value.replace(S0,"\\$&"),m+=40;else if(f.type===1){const{value:h,repeatable:b,optional:v,regexp:S}=f;i.push({name:h,repeatable:b,optional:v});const $=S||Pa;if($!==Pa){m+=10;try{new RegExp(`(${$})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${h}" (${$}): `+O.message)}}let E=b?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(E=v&&u.length<2?`(?:/${E})`:"/"+E),v&&(E+="?"),r+=E,m+=20,v&&(m+=-8),b&&(m+=-20),$===".*"&&(m+=-50)}d.push(m)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let f=1;f<d.length;f++){const m=d[f]||"",h=i[f-1];p[h.name]=m&&h.repeatable?m.split("/"):m}return p}function a(u){let d="",p=!1;for(const f of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const m of f)if(m.type===0)d+=m.value;else if(m.type===1){const{value:h,repeatable:b,optional:v}=m,S=h in u?u[h]:"";if(jt(S)&&!b)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const $=jt(S)?S.join("/"):S;if(!$)if(v)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${h}"`);d+=$}}return d||"/"}return{re:o,score:s,keys:i,parse:l,stringify:a}}function k0(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function j0(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=k0(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ma(s))return 1;if(Ma(r))return-1}return r.length-s.length}function Ma(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const P0={type:0,value:""},M0=/[a-zA-Z0-9_]/;function C0(e){if(!e)return[[]];if(e==="/")return[[P0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,a,u="",d="";function p(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=a}for(;l<e.length;){if(a=e[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(u&&p(),o()):a===":"?(p(),n=1):f();break;case 4:f(),n=s;break;case 1:a==="("?n=2:M0.test(a)?f():(p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),o(),r}function T0(e,t,n){const s=O0(C0(e.path),n),r=je(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function A0(e,t){const n=[],s=new Map;t=Ta({strict:!1,end:!0,sensitive:!1},t);function r(d){return s.get(d)}function i(d,p,f){const m=!f,h=R0(d);h.aliasOf=f&&f.record;const b=Ta(t,d),v=[h];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const O of E)v.push(je({},h,{components:f?f.record.components:h.components,path:O,aliasOf:f?f.record:h}))}let S,$;for(const E of v){const{path:O}=E;if(p&&O[0]!=="/"){const D=p.record.path,I=D[D.length-1]==="/"?"":"/";E.path=p.record.path+(O&&I+O)}if(S=T0(E,p,b),f?f.alias.push(S):($=$||S,$!==S&&$.alias.push(S),m&&d.name&&!Ca(S)&&o(d.name)),h.children){const D=h.children;for(let I=0;I<D.length;I++)i(D[I],S,f&&f.children[I])}f=f||S,a(S)}return $?()=>{o($)}:Os}function o(d){if(zu(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return n}function a(d){let p=0;for(;p<n.length&&j0(d,n[p])>=0&&(d.record.path!==n[p].record.path||!Uu(d,n[p]));)p++;n.splice(p,0,d),d.record.name&&!Ca(d)&&s.set(d.record.name,d)}function u(d,p){let f,m={},h,b;if("name"in d&&d.name){if(f=s.get(d.name),!f)throw es(1,{location:d});b=f.record.name,m=je(L0(p.params,f.keys.filter($=>!$.optional).map($=>$.name)),d.params),h=f.stringify(m)}else if("path"in d)h=d.path,f=n.find($=>$.re.test(h)),f&&(m=f.parse(h),b=f.record.name);else{if(f=p.name?s.get(p.name):n.find($=>$.re.test(p.path)),!f)throw es(1,{location:d,currentLocation:p});b=f.record.name,m=je({},p.params,d.params),h=f.stringify(m)}const v=[];let S=f;for(;S;)v.unshift(S.record),S=S.parent;return{name:b,path:h,params:m,matched:v,meta:F0(v)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:l,getRecordMatcher:r}}function L0(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function R0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:I0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function I0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Ca(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function F0(e){return e.reduce((t,n)=>je(t,n.meta),{})}function Ta(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Uu(e,t){return t.children.some(n=>n===e||Uu(e,n))}const Ku=/#/g,N0=/&/g,D0=/\//g,H0=/=/g,B0=/\?/g,qu=/\+/g,V0=/%5B/g,z0=/%5D/g,Yu=/%5E/g,W0=/%60/g,Zu=/%7B/g,U0=/%7C/g,Gu=/%7D/g,K0=/%20/g;function Uo(e){return encodeURI(""+e).replace(U0,"|").replace(V0,"[").replace(z0,"]")}function q0(e){return Uo(e).replace(Zu,"{").replace(Gu,"}").replace(Yu,"^")}function Zi(e){return Uo(e).replace(qu,"%2B").replace(K0,"+").replace(Ku,"%23").replace(N0,"%26").replace(W0,"`").replace(Zu,"{").replace(Gu,"}").replace(Yu,"^")}function Y0(e){return Zi(e).replace(H0,"%3D")}function Z0(e){return Uo(e).replace(Ku,"%23").replace(B0,"%3F")}function G0(e){return e==null?"":Z0(e).replace(D0,"%2F")}function jr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function X0(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(qu," "),o=i.indexOf("="),l=jr(o<0?i:i.slice(0,o)),a=o<0?null:jr(i.slice(o+1));if(l in t){let u=t[l];jt(u)||(u=t[l]=[u]),u.push(a)}else t[l]=a}return t}function Aa(e){let t="";for(let n in e){const s=e[n];if(n=Y0(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(jt(s)?s.map(i=>i&&Zi(i)):[s&&Zi(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Q0(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=jt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const J0=Symbol(""),La=Symbol(""),Ko=Symbol(""),Xu=Symbol(""),Gi=Symbol("");function ms(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Qt(e,t,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const a=p=>{p===!1?l(es(4,{from:n,to:t})):p instanceof Error?l(p):$0(p)?l(es(2,{from:t,to:p})):(i&&s.enterCallbacks[r]===i&&typeof p=="function"&&i.push(p),o())},u=e.call(s&&s.instances[r],t,n,a);let d=Promise.resolve(u);e.length<3&&(d=d.then(a)),d.catch(p=>l(p))})}function fi(e,t,n,s){const r=[];for(const i of e)for(const o in i.components){let l=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(e1(l)){const u=(l.__vccOpts||l)[t];u&&r.push(Qt(u,n,s,i,o))}else{let a=l();r.push(()=>a.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const d=i0(u)?u.default:u;i.components[o]=d;const f=(d.__vccOpts||d)[t];return f&&Qt(f,n,s,i,o)()}))}}return r}function e1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ra(e){const t=C(Ko),n=C(Xu),s=k(()=>t.resolve(w(e.to))),r=k(()=>{const{matched:a}=s.value,{length:u}=a,d=a[u-1],p=n.matched;if(!d||!p.length)return-1;const f=p.findIndex(Jn.bind(null,d));if(f>-1)return f;const m=Ia(a[u-2]);return u>1&&Ia(d)===m&&p[p.length-1].path!==m?p.findIndex(Jn.bind(null,a[u-2])):f}),i=k(()=>r.value>-1&&r1(n.params,s.value.params)),o=k(()=>r.value>-1&&r.value===n.matched.length-1&&Bu(n.params,s.value.params));function l(a={}){return s1(a)?t[w(e.replace)?"replace":"push"](w(e.to)).catch(Os):Promise.resolve()}return{route:s,href:k(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}const t1=Me({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ra,setup(e,{slots:t}){const n=Le(Ra(e)),{options:s}=C(Ko),r=k(()=>({[Fa(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Fa(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:St("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),n1=t1;function s1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function r1(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!jt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Ia(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Fa=(e,t,n)=>e!=null?e:t!=null?t:n,i1=Me({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=C(Gi),r=k(()=>e.route||s.value),i=C(La,0),o=k(()=>{let u=w(i);const{matched:d}=r.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=k(()=>r.value.matched[o.value]);at(La,k(()=>o.value+1)),at(J0,l),at(Gi,r);const a=W();return ue(()=>[a.value,l.value,e.name],([u,d,p],[f,m,h])=>{d&&(d.instances[p]=u,m&&m!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!Jn(d,m)||!f)&&(d.enterCallbacks[p]||[]).forEach(b=>b(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,p=l.value,f=p&&p.components[d];if(!f)return Na(n.default,{Component:f,route:u});const m=p.props[d],h=m?m===!0?u.params:typeof m=="function"?m(u):m:null,v=St(f,je({},h,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(p.instances[d]=null)},ref:a}));return Na(n.default,{Component:v,route:u})||v}}});function Na(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const o1=i1;function l1(e){const t=A0(e.routes,e),n=e.parseQuery||X0,s=e.stringifyQuery||Aa,r=e.history,i=ms(),o=ms(),l=ms(),a=kt(Zt);let u=Zt;Bn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ui.bind(null,j=>""+j),p=ui.bind(null,G0),f=ui.bind(null,jr);function m(j,K){let L,Z;return zu(j)?(L=t.getRecordMatcher(j),Z=K):Z=j,t.addRoute(Z,L)}function h(j){const K=t.getRecordMatcher(j);K&&t.removeRoute(K)}function b(){return t.getRoutes().map(j=>j.record)}function v(j){return!!t.getRecordMatcher(j)}function S(j,K){if(K=je({},K||a.value),typeof j=="string"){const de=di(n,j,K.path),g=t.resolve({path:de.path},K),_=r.createHref(de.fullPath);return je(de,g,{params:f(g.params),hash:jr(de.hash),redirectedFrom:void 0,href:_})}let L;if("path"in j)L=je({},j,{path:di(n,j.path,K.path).path});else{const de=je({},j.params);for(const g in de)de[g]==null&&delete de[g];L=je({},j,{params:p(j.params)}),K.params=p(K.params)}const Z=t.resolve(L,K),be=j.hash||"";Z.params=d(f(Z.params));const Ce=a0(s,je({},j,{hash:q0(be),path:Z.path})),fe=r.createHref(Ce);return je({fullPath:Ce,hash:be,query:s===Aa?Q0(j.query):j.query||{}},Z,{redirectedFrom:void 0,href:fe})}function $(j){return typeof j=="string"?di(n,j,a.value.path):je({},j)}function E(j,K){if(u!==j)return es(8,{from:K,to:j})}function O(j){return B(j)}function D(j){return O(je($(j),{replace:!0}))}function I(j){const K=j.matched[j.matched.length-1];if(K&&K.redirect){const{redirect:L}=K;let Z=typeof L=="function"?L(j):L;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=$(Z):{path:Z},Z.params={}),je({query:j.query,hash:j.hash,params:"path"in Z?{}:j.params},Z)}}function B(j,K){const L=u=S(j),Z=a.value,be=j.state,Ce=j.force,fe=j.replace===!0,de=I(L);if(de)return B(je($(de),{state:be,force:Ce,replace:fe}),K||L);const g=L;g.redirectedFrom=K;let _;return!Ce&&c0(s,Z,L)&&(_=es(16,{to:g,from:Z}),Mt(Z,Z,!0,!1)),(_?Promise.resolve(_):le(g,Z)).catch(x=>Nt(x)?Nt(x,2)?x:he(x):ie(x,g,Z)).then(x=>{if(x){if(Nt(x,2))return B(je({replace:fe},$(x.to),{state:be,force:Ce}),K||g)}else x=_e(g,Z,!0,fe,be);return me(g,Z,x),x})}function ne(j,K){const L=E(j,K);return L?Promise.reject(L):Promise.resolve()}function le(j,K){let L;const[Z,be,Ce]=a1(j,K);L=fi(Z.reverse(),"beforeRouteLeave",j,K);for(const de of Z)de.leaveGuards.forEach(g=>{L.push(Qt(g,j,K))});const fe=ne.bind(null,j,K);return L.push(fe),Rn(L).then(()=>{L=[];for(const de of i.list())L.push(Qt(de,j,K));return L.push(fe),Rn(L)}).then(()=>{L=fi(be,"beforeRouteUpdate",j,K);for(const de of be)de.updateGuards.forEach(g=>{L.push(Qt(g,j,K))});return L.push(fe),Rn(L)}).then(()=>{L=[];for(const de of j.matched)if(de.beforeEnter&&!K.matched.includes(de))if(jt(de.beforeEnter))for(const g of de.beforeEnter)L.push(Qt(g,j,K));else L.push(Qt(de.beforeEnter,j,K));return L.push(fe),Rn(L)}).then(()=>(j.matched.forEach(de=>de.enterCallbacks={}),L=fi(Ce,"beforeRouteEnter",j,K),L.push(fe),Rn(L))).then(()=>{L=[];for(const de of o.list())L.push(Qt(de,j,K));return L.push(fe),Rn(L)}).catch(de=>Nt(de,8)?de:Promise.reject(de))}function me(j,K,L){for(const Z of l.list())Z(j,K,L)}function _e(j,K,L,Z,be){const Ce=E(j,K);if(Ce)return Ce;const fe=K===Zt,de=Bn?history.state:{};L&&(Z||fe?r.replace(j.fullPath,je({scroll:fe&&de&&de.scroll},be)):r.push(j.fullPath,be)),a.value=j,Mt(j,K,L,fe),he()}let Ae;function Fe(){Ae||(Ae=r.listen((j,K,L)=>{if(!qt.listening)return;const Z=S(j),be=I(Z);if(be){B(je(be,{replace:!0}),Z).catch(Os);return}u=Z;const Ce=a.value;Bn&&_0(Oa(Ce.fullPath,L.delta),Gr()),le(Z,Ce).catch(fe=>Nt(fe,12)?fe:Nt(fe,2)?(B(fe.to,Z).then(de=>{Nt(de,20)&&!L.delta&&L.type===Hs.pop&&r.go(-1,!1)}).catch(Os),Promise.reject()):(L.delta&&r.go(-L.delta,!1),ie(fe,Z,Ce))).then(fe=>{fe=fe||_e(Z,Ce,!1),fe&&(L.delta&&!Nt(fe,8)?r.go(-L.delta,!1):L.type===Hs.pop&&Nt(fe,20)&&r.go(-1,!1)),me(Z,Ce,fe)}).catch(Os)}))}let Ue=ms(),Se=ms(),se;function ie(j,K,L){he(j);const Z=Se.list();return Z.length?Z.forEach(be=>be(j,K,L)):console.error(j),Promise.reject(j)}function te(){return se&&a.value!==Zt?Promise.resolve():new Promise((j,K)=>{Ue.add([j,K])})}function he(j){return se||(se=!j,Fe(),Ue.list().forEach(([K,L])=>j?L(j):K()),Ue.reset()),j}function Mt(j,K,L,Z){const{scrollBehavior:be}=e;if(!Bn||!be)return Promise.resolve();const Ce=!L&&v0(Oa(j.fullPath,0))||(Z||!L)&&history.state&&history.state.scroll||null;return We().then(()=>be(j,K,Ce)).then(fe=>fe&&g0(fe)).catch(fe=>ie(fe,j,K))}const qe=j=>r.go(j);let mt;const et=new Set,qt={currentRoute:a,listening:!0,addRoute:m,removeRoute:h,hasRoute:v,getRoutes:b,resolve:S,options:e,push:O,replace:D,go:qe,back:()=>qe(-1),forward:()=>qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Se.add,isReady:te,install(j){const K=this;j.component("RouterLink",n1),j.component("RouterView",o1),j.config.globalProperties.$router=K,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>w(a)}),Bn&&!mt&&a.value===Zt&&(mt=!0,O(r.location).catch(be=>{}));const L={};for(const be in Zt)L[be]=k(()=>a.value[be]);j.provide(Ko,K),j.provide(Xu,Le(L)),j.provide(Gi,a);const Z=j.unmount;et.add(j),j.unmount=function(){et.delete(j),et.size<1&&(u=Zt,Ae&&Ae(),Ae=null,a.value=Zt,mt=!1,se=!1),Z()}}};return qt}function Rn(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function a1(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const l=t.matched[o];l&&(e.matched.find(u=>Jn(u,l))?s.push(l):n.push(l));const a=e.matched[o];a&&(t.matched.find(u=>Jn(u,a))||r.push(a))}return[n,s,r]}const pi=W(!1),js=W(!1),zn=W(!1),c1=W(!0),Xi=$g({xs:460,...vg}),En=r0(),Qu=qg(),u1=k(()=>En.height.value-En.width.value/sn>180),Ju=Ug(Wt?document.body:null),Zn=_g(),d1=k(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Zn.value)==null?void 0:e.tagName)||"")||((t=Zn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),f1=k(()=>{var e;return["BUTTON","A"].includes(((e=Zn.value)==null?void 0:e.tagName)||"")});Pt("slidev-camera","default");Pt("slidev-mic","default");const hr=Pt("slidev-scale",0),Ze=Pt("slidev-show-overview",!1),mi=Pt("slidev-presenter-cursor",!0),Da=Pt("slidev-show-editor",!1);Pt("slidev-editor-width",Wt?window.innerWidth*.4:100);const ed=Nu(Ze);function Ha(e,t,n,s=r=>r){return e*s(.5-t*(.5-n))}function p1(e){return[-e[0],-e[1]]}function yt(e,t){return[e[0]+t[0],e[1]+t[1]]}function gt(e,t){return[e[0]-t[0],e[1]-t[1]]}function bt(e,t){return[e[0]*t,e[1]*t]}function m1(e,t){return[e[0]/t,e[1]/t]}function hs(e){return[e[1],-e[0]]}function h1(e,t){return e[0]*t[0]+e[1]*t[1]}function g1(e,t){return e[0]===t[0]&&e[1]===t[1]}function _1(e){return Math.hypot(e[0],e[1])}function v1(e){return e[0]*e[0]+e[1]*e[1]}function Ba(e,t){return v1(gt(e,t))}function td(e){return m1(e,_1(e))}function b1(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function gs(e,t,n){let s=Math.sin(n),r=Math.cos(n),i=e[0]-t[0],o=e[1]-t[1],l=i*r-o*s,a=i*s+o*r;return[l+t[0],a+t[1]]}function Qi(e,t,n){return yt(e,bt(gt(t,e),n))}function Va(e,t,n){return yt(e,bt(t,n))}var{min:In,PI:y1}=Math,za=.275,_s=y1+1e-4;function w1(e,t={}){let{size:n=16,smoothing:s=.5,thinning:r=.5,simulatePressure:i=!0,easing:o=se=>se,start:l={},end:a={},last:u=!1}=t,{cap:d=!0,easing:p=se=>se*(2-se)}=l,{cap:f=!0,easing:m=se=>--se*se*se+1}=a;if(e.length===0||n<=0)return[];let h=e[e.length-1].runningLength,b=l.taper===!1?0:l.taper===!0?Math.max(n,h):l.taper,v=a.taper===!1?0:a.taper===!0?Math.max(n,h):a.taper,S=Math.pow(n*s,2),$=[],E=[],O=e.slice(0,10).reduce((se,ie)=>{let te=ie.pressure;if(i){let he=In(1,ie.distance/n),Mt=In(1,1-he);te=In(1,se+(Mt-se)*(he*za))}return(se+te)/2},e[0].pressure),D=Ha(n,r,e[e.length-1].pressure,o),I,B=e[0].vector,ne=e[0].point,le=ne,me=ne,_e=le;for(let se=0;se<e.length;se++){let{pressure:ie}=e[se],{point:te,vector:he,distance:Mt,runningLength:qe}=e[se];if(se<e.length-1&&h-qe<3)continue;if(r){if(i){let L=In(1,Mt/n),Z=In(1,1-L);ie=In(1,O+(Z-O)*(L*za))}D=Ha(n,r,ie,o)}else D=n/2;I===void 0&&(I=D);let mt=qe<b?p(qe/b):1,et=h-qe<v?m((h-qe)/v):1;if(D=Math.max(.01,D*Math.min(mt,et)),se===e.length-1){let L=bt(hs(he),D);$.push(gt(te,L)),E.push(yt(te,L));continue}let qt=e[se+1].vector,j=h1(he,qt);if(j<0){let L=bt(hs(B),D);for(let Z=1/13,be=0;be<=1;be+=Z)me=gs(gt(te,L),te,_s*be),$.push(me),_e=gs(yt(te,L),te,_s*-be),E.push(_e);ne=me,le=_e;continue}let K=bt(hs(Qi(qt,he,j)),D);me=gt(te,K),(se<=1||Ba(ne,me)>S)&&($.push(me),ne=me),_e=yt(te,K),(se<=1||Ba(le,_e)>S)&&(E.push(_e),le=_e),O=ie,B=he}let Ae=e[0].point.slice(0,2),Fe=e.length>1?e[e.length-1].point.slice(0,2):yt(e[0].point,[1,1]),Ue=[],Se=[];if(e.length===1){if(!(b||v)||u){let se=Va(Ae,td(hs(gt(Ae,Fe))),-(I||D)),ie=[];for(let te=1/13,he=te;he<=1;he+=te)ie.push(gs(se,Ae,_s*2*he));return ie}}else{if(!(b||v&&e.length===1))if(d)for(let ie=1/13,te=ie;te<=1;te+=ie){let he=gs(E[0],Ae,_s*te);Ue.push(he)}else{let ie=gt($[0],E[0]),te=bt(ie,.5),he=bt(ie,.51);Ue.push(gt(Ae,te),gt(Ae,he),yt(Ae,he),yt(Ae,te))}let se=hs(p1(e[e.length-1].vector));if(v||b&&e.length===1)Se.push(Fe);else if(f){let ie=Va(Fe,se,D);for(let te=1/29,he=te;he<1;he+=te)Se.push(gs(ie,Fe,_s*3*he))}else Se.push(yt(Fe,bt(se,D)),yt(Fe,bt(se,D*.99)),gt(Fe,bt(se,D*.99)),gt(Fe,bt(se,D)))}return $.concat(Se,E.reverse(),Ue)}function x1(e,t={}){var n;let{streamline:s=.5,size:r=16,last:i=!1}=t;if(e.length===0)return[];let o=.15+(1-s)*.85,l=Array.isArray(e[0])?e:e.map(({x:m,y:h,pressure:b=.5})=>[m,h,b]);if(l.length===2){let m=l[1];l=l.slice(0,-1);for(let h=1;h<5;h++)l.push(Qi(l[0],m,h/4))}l.length===1&&(l=[...l,[...yt(l[0],[1,1]),...l[0].slice(2)]]);let a=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,p=a[0],f=l.length-1;for(let m=1;m<l.length;m++){let h=i&&m===f?l[m].slice(0,2):Qi(p.point,l[m],o);if(g1(p.point,h))continue;let b=b1(h,p.point);if(d+=b,m<f&&!u){if(d<r)continue;u=!0}p={point:h,pressure:l[m][2]>=0?l[m][2]:.5,vector:td(gt(p.point,h)),distance:b,runningLength:d},a.push(p)}return a[0].vector=((n=a[1])==null?void 0:n.vector)||[0,0],a}function $1(e,t={}){return w1(x1(e,t),t)}var E1=$1,S1=Object.defineProperty,Wa=Object.getOwnPropertySymbols,O1=Object.prototype.hasOwnProperty,k1=Object.prototype.propertyIsEnumerable,Ua=(e,t,n)=>t in e?S1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ji=(e,t)=>{for(var n in t||(t={}))O1.call(t,n)&&Ua(e,n,t[n]);if(Wa)for(var n of Wa(t))k1.call(t,n)&&Ua(e,n,t[n]);return e},j1=()=>({events:{},emit(e,...t){(this.events[e]||[]).forEach(n=>n(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(n=>n!==t)}});function Pr(e,t){return e-t}function P1(e){return e<0?-1:1}function Mr(e){return[Math.abs(e),P1(e)]}function nd(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var M1=2,Ht=M1,as=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var t,n;const s=this.drauu.el,r=(t=this.drauu.options.coordinateScale)!=null?t:1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-i.left)*r,y:(e.pageY-i.top)*r,pressure:e.pressure}}else{const i=this.drauu.svgPoint;i.x=e.clientX,i.y=e.clientY;const o=i.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:o.x*r,y:o.y*r,pressure:e.pressure}}}createElement(e,t){var n;const s=document.createElementNS("http://www.w3.org/2000/svg",e),r=t?Ji(Ji({},this.brush),t):this.brush;return s.setAttribute("fill",(n=r.fill)!=null?n:"transparent"),s.setAttribute("stroke",r.color),s.setAttribute("stroke-width",r.size.toString()),s.setAttribute("stroke-linecap","round"),r.dasharray&&s.setAttribute("stroke-dasharray",r.dasharray),s}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Ht))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},C1=class extends as{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=E1(e,Ji({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!t.length)return"";const n=t.reduce((s,[r,i],o,l)=>{const[a,u]=l[(o+1)%l.length];return s.push(r,i,(r+a)/2,(i+u)/2),s},["M",...t[0],"Q"]);return n.push("Z"),n.map(s=>typeof s=="number"?s.toFixed(2):s).join(" ")}},T1=class extends as{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Mr(e.x-this.start.x),[s,r]=Mr(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,s);t=i,s=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",s);else{const[i,o]=[this.start.x,this.start.x+t*n].sort(Pr),[l,a]=[this.start.y,this.start.y+s*r].sort(Pr);this.attr("cx",(i+o)/2),this.attr("cy",(l+a)/2),this.attr("rx",(o-i)/2),this.attr("ry",(a-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function sd(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),s=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),s.setAttribute("id",e),s.setAttribute("viewBox","0 -5 10 10"),s.setAttribute("refX","5"),s.setAttribute("refY","0"),s.setAttribute("markerWidth","4"),s.setAttribute("markerHeight","4"),s.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),s.appendChild(r),n.appendChild(s),n}var A1=class extends as{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=nd(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(sd(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const s=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let i=s/r;i=Math.round(i),Math.abs(i)<=1?(t=this.start.x+r*i,n=this.start.y+r):(t=this.start.x+s,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},L1=class extends as{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Mr(e.x-this.start.x),[s,r]=Mr(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,s);t=i,s=i}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-s),this.attr("width",t*2),this.attr("height",s*2);else{const[i,o]=[this.start.x,this.start.x+t*n].sort(Pr),[l,a]=[this.start.y,this.start.y+s*r].sort(Pr);this.attr("x",i),this.attr("y",l),this.attr("width",o-i),this.attr("height",a-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function R1(e,t){const n=e.x-t.x,s=e.y-t.y;return n*n+s*s}function I1(e,t,n){let s=t.x,r=t.y,i=n.x-s,o=n.y-r;if(i!==0||o!==0){const l=((e.x-s)*i+(e.y-r)*o)/(i*i+o*o);l>1?(s=n.x,r=n.y):l>0&&(s+=i*l,r+=o*l)}return i=e.x-s,o=e.y-r,i*i+o*o}function F1(e,t){let n=e[0];const s=[n];let r;for(let i=1,o=e.length;i<o;i++)r=e[i],R1(r,n)>t&&(s.push(r),n=r);return n!==r&&r&&s.push(r),s}function eo(e,t,n,s,r){let i=s,o=0;for(let l=t+1;l<n;l++){const a=I1(e[l],e[t],e[n]);a>i&&(o=l,i=a)}i>s&&(o-t>1&&eo(e,t,o,s,r),r.push(e[o]),n-o>1&&eo(e,o,n,s,r))}function N1(e,t){const n=e.length-1,s=[e[0]];return eo(e,0,n,t,s),s.push(e[n]),s}function Ka(e,t,n=!1){if(e.length<=2)return e;const s=t!==void 0?t*t:1;return e=n?e:F1(e,s),e=N1(e,s),e}var D1=class extends as{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=nd();const t=sd(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Ka(this.points,1,!0),this.count=0),this.attr("d",Ya(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ya(Ka(this.points,1,!0))),!e.getTotalLength()))}};function H1(e,t){const n=t.x-e.x,s=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(s,2)),angle:Math.atan2(s,n)}}function qa(e,t,n,s){const r=t||e,i=n||e,o=.2,l=H1(r,i),a=l.angle+(s?Math.PI:0),u=l.length*o,d=e.x+Math.cos(a)*u,p=e.y+Math.sin(a)*u;return{x:d,y:p}}function B1(e,t,n){const s=qa(n[t-1],n[t-2],e),r=qa(e,n[t-1],n[t+1],!0);return`C ${s.x.toFixed(Ht)},${s.y.toFixed(Ht)} ${r.x.toFixed(Ht)},${r.y.toFixed(Ht)} ${e.x.toFixed(Ht)},${e.y.toFixed(Ht)}`}function Ya(e){return e.reduce((t,n,s,r)=>s===0?`M ${n.x.toFixed(Ht)},${n.y.toFixed(Ht)}`:`${t} ${B1(n,s,r)}`,"")}var V1=class extends as{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,s)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const i=n[r];if(i.getTotalLength){const o=i.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const a=i.getPointAtLength(o*l/this.pathSubFactor),u=i.getPointAtLength(o*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:a.x,x2:u.x,y1:a.y,y2:u.y,segment:l,element:s||i})}}else i.children&&t(i.children,i)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,s)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,s=e.x2,r=t.x1,i=t.x2,o=e.y1,l=e.y2,a=t.y1,u=t.y2,d=(n-s)*(a-u)-(o-l)*(r-i),p=(n*l-o*s)*(r-i)-(n-s)*(r*u-a*i),f=(n*l-o*s)*(a-u)-(o-l)*(r*u-a*i),m=(h,b,v)=>h>=b&&h<=v?!0:h>=v&&h<=b;if(d===0)return!1;{const h={x:p/d,y:f/d};return m(h.x,n,s)&&m(h.y,o,l)&&m(h.x,r,i)&&m(h.y,a,u)}}};function z1(e){return{draw:new D1(e),stylus:new C1(e),line:new A1(e),rectangle:new L1(e),ellipse:new T1(e),eraseLine:new V1(e)}}var W1=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=j1(),this._models=z1(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,s=this.eventStart.bind(this),r=this.eventMove.bind(this),i=this.eventEnd.bind(this),o=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",s,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",o,!1),window.addEventListener("keyup",o,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",s),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",o,!1),window.removeEventListener("keyup",o,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function U1(e){return new W1(e)}const to=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Rt=Pt("slidev-drawing-enabled",!1),F6=Pt("slidev-drawing-pinned",!1),K1=W(!1),q1=W(!1),Y1=W(!1),Bs=W(!1),bn=Wh(Pt("slidev-drawing-brush",{color:to[0],size:4,mode:"stylus"})),Za=W("stylus"),rd=k(()=>we.drawings.syncAll||At.value);let Vs=!1;const vs=k({get(){return Za.value},set(e){Za.value=e,e==="arrow"?(bn.mode="line",bn.arrowEnd=!0):(bn.mode=e,bn.arrowEnd=!1)}}),Z1=Le({brush:bn,acceptsInputTypes:k(()=>Rt.value?void 0:["pen"]),coordinateTransform:!1}),Ge=Hr(U1(Z1));function G1(){Ge.clear(),rd.value&&Lu(He.value,"")}function id(){var e;q1.value=Ge.canRedo(),K1.value=Ge.canUndo(),Y1.value=!!((e=Ge.el)!=null&&e.children.length)}function X1(e){Vs=!0;const t=Or[e||He.value];t!=null?Ge.load(t):Ge.clear(),Vs=!1}Ge.on("changed",()=>{if(id(),!Vs){const e=Ge.dump(),t=He.value;(Or[t]||"")!==e&&rd.value&&Lu(t,Ge.dump())}});Lh(e=>{Vs=!0,e[He.value]!=null&&Ge.load(e[He.value]||""),Vs=!1,id()});We(()=>{ue(He,()=>{!Ge.mounted||X1()},{immediate:!0})});Ge.on("start",()=>Bs.value=!0);Ge.on("end",()=>Bs.value=!1);window.addEventListener("keydown",e=>{if(!Rt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?Ge.redo():Ge.undo():e.code==="Escape"?Rt.value=!1:e.code==="KeyL"&&t?vs.value="line":e.code==="KeyA"&&t?vs.value="arrow":e.code==="KeyS"&&t?vs.value="stylus":e.code==="KeyR"&&t?vs.value="rectangle":e.code==="KeyE"&&t?vs.value="ellipse":e.code==="KeyC"&&t?G1():e.code.startsWith("Digit")&&t&&+e.code[5]<=to.length?bn.color=to[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ne(...e){return k(()=>e.every(t=>ct(t)))}function it(e){return k(()=>!ct(e))}const Ga=Cg(),hi=Pt("slidev-color-schema","auto"),no=k(()=>we.colorSchema!=="auto"),qo=k({get(){return no.value?we.colorSchema==="dark":hi.value==="auto"?Ga.value:hi.value==="dark"},set(e){no.value||(hi.value=e===Ga.value?"auto":e?"dark":"light")}}),od=Nu(qo);Wt&&ue(qo,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const gr=W(1),_r=k(()=>De.length-1),dt=W(0),Yo=W(0);function Q1(){dt.value>gr.value&&(dt.value-=1)}function J1(){dt.value<_r.value&&(dt.value+=1)}function e_(){if(dt.value>gr.value){let e=dt.value-Yo.value;e<gr.value&&(e=gr.value),dt.value=e}}function t_(){if(dt.value<_r.value){let e=dt.value+Yo.value;e>_r.value&&(e=_r.value),dt.value=e}}function n_(){const{escape:e,space:t,shift:n,left:s,right:r,up:i,down:o,enter:l,d:a,g:u,o:d}=Qu,p=[{name:"next_space",key:Ne(t,it(n)),fn:rn,autoRepeat:!0},{name:"prev_space",key:Ne(t,n),fn:on,autoRepeat:!0},{name:"next_right",key:Ne(r,it(n),it(Ze)),fn:rn,autoRepeat:!0},{name:"prev_left",key:Ne(s,it(n),it(Ze)),fn:on,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:rn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:on,autoRepeat:!0},{name:"next_down",key:Ne(o,it(Ze)),fn:zs,autoRepeat:!0},{name:"prev_up",key:Ne(i,it(Ze)),fn:()=>Ws(!1),autoRepeat:!0},{name:"next_shift",key:Ne(r,n),fn:zs,autoRepeat:!0},{name:"prev_shift",key:Ne(s,n),fn:()=>Ws(!1),autoRepeat:!0},{name:"toggle_dark",key:Ne(a,it(Rt)),fn:od},{name:"toggle_overview",key:Ne(d,it(Rt)),fn:ed},{name:"hide_overview",key:Ne(e,it(Rt)),fn:()=>Ze.value=!1},{name:"goto",key:Ne(u,it(Rt)),fn:()=>zn.value=!zn.value},{name:"next_overview",key:Ne(r,Ze),fn:J1},{name:"prev_overview",key:Ne(s,Ze),fn:Q1},{name:"up_overview",key:Ne(i,Ze),fn:e_},{name:"down_overview",key:Ne(o,Ze),fn:t_},{name:"goto_from_overview",key:Ne(l,Ze),fn:()=>{ts(dt.value),Ze.value=!1}}];return{customShortcuts:[],defaultShortcuts:p}}const ld=Ne(it(d1),it(f1),c1);function s_(e,t,n=!1){typeof e=="string"&&(e=Qu[e]);const s=Ne(e,ld);let r=0,i;const o=()=>{if(clearTimeout(i),!s.value){r=0;return}n&&(i=setTimeout(o,Math.max(1e3-r*250,150)),r++),t()};return ue(s,o,{flush:"sync"})}function r_(e,t){return gg(e,n=>{!ld.value||n.repeat||t()})}function i_(){const{customShortcuts:e,defaultShortcuts:t}=n_();new Map([...t,...e].map(s=>[s.key,s])).forEach(s=>{s.fn&&s_(s.key,s.fn,s.autoRepeat)}),r_("f",()=>Ju.toggle())}const o_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l_=c("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),a_=[l_];function c_(e,t){return y(),U("svg",o_,a_)}const u_={name:"carbon-close",render:c_};function Zo(e){var n,s;const t=(s=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.no;return t!=null?`slidev-page-${t}`:""}const ad=Me({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;C(R);const n=W(),s=Wg(n),r=k(()=>t.width?t.width:s.width.value),i=k(()=>t.width?t.width/sn:s.height.value);t.width&&Ur(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${i.value}px`)});const o=k(()=>r.value/i.value),l=k(()=>t.scale?t.scale:o.value<sn?r.value/$n:i.value*sn/$n),a=k(()=>({height:`${Cu}px`,width:`${$n}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),u=k(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return at(Mu,l),(d,p)=>(y(),U("div",{id:"slide-container",ref_key:"root",ref:n,class:Re(w(u))},[c("div",{id:"slide-content",style:Xe(w(a))},[an(d.$slots,"default")],4),an(d.$slots,"controls")],2))}});const Go=Me({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=Lt(e,"clicks",t),s=Lt(e,"clicksElements",t),r=Lt(e,"clicksDisabled",t),i=Lt(e,"clicksOrderMap",t);s.value.length=0,at(xh,e.route),at($h,e.context),at(dr,n),at(fr,r),at(Hn,s),at(Wi,i)},render(){var e,t;return this.$props.is?St(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),d_=["innerHTML"],f_=Me({__name:"DrawingPreview",props:{page:null},setup(e){return C(R),(t,n)=>w(Or)[e.page]?(y(),U("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:w(Or)[e.page]},null,8,d_)):pe("v-if",!0)}}),p_={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},m_=["onClick"],h_=Me({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;C(R);const s=Lt(n,"modelValue",t);function r(){s.value=!1}function i(m){ts(m),r()}function o(m){return m===dt.value}const l=Xi.smaller("xs"),a=Xi.smaller("sm"),u=4*16*2,d=2*16,p=k(()=>l.value?En.width.value-u:a.value?(En.width.value-u-d)/2:300),f=k(()=>Math.floor((En.width.value-u)/(p.value+d)));return Ur(()=>{dt.value=He.value,Yo.value=f.value}),(m,h)=>{const b=u_;return y(),U($e,null,[Do(c("div",p_,[c("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Xe(`grid-template-columns: repeat(auto-fit,minmax(${w(p)}px,1fr))`)},[(y(!0),U($e,null,Ys(w(De).slice(0,-1),(v,S)=>(y(),U("div",{key:v.path,class:"relative"},[c("div",{class:Re(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":o(S+1)}]),onClick:$=>i(+v.path)},[(y(),A(ad,{key:v.path,width:w(p),"clicks-disabled":!0,class:"pointer-events-none"},{default:V(()=>[Q(w(Go),{is:v==null?void 0:v.component,"clicks-disabled":!0,class:Re(w(Zo)(v)),route:v,context:"overview"},null,8,["is","class","route"]),Q(f_,{page:+v.path},null,8,["page"])]),_:2},1032,["width"]))],10,m_),c("div",{class:"absolute top-0 opacity-50",style:Xe(`left: ${w(p)+5}px`)},On(S+1),5)]))),128))],4)],512),[[ku,w(s)]]),w(s)?(y(),U("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[Q(b)])):pe("v-if",!0)],64)}}});const g_="/slides/iharbour-creatures/assets/logo.b72bde5d.png",__={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},v_=Me({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;C(R);const s=Lt(n,"modelValue",t);function r(){s.value=!1}return(i,o)=>(y(),A(au,null,[w(s)?(y(),U("div",__,[c("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=l=>r())}),c("div",{class:Re(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[an(i.$slots,"default")],2)])):pe("v-if",!0)],1024))}}),b_={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},y_=["innerHTML"],w_=c("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[c("div",{class:"flex gap-1 children:my-auto"},[c("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),c("img",{class:"w-5 h-5",src:g_,alt:"Slidev"}),c("div",{style:{color:"#2082A6"}},[c("b",null,"Sli"),Ft("dev ")])])],-1),x_=Me({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;C(R);const s=Lt(n,"modelValue",t),r=k(()=>typeof we.info=="string");return(i,o)=>(y(),A(v_,{modelValue:w(s),"onUpdate:modelValue":o[0]||(o[0]=l=>xe(s)?s.value=l:null),class:"px-6 py-4"},{default:V(()=>[c("div",b_,[w(r)?(y(),U("div",{key:0,class:"mb-4",innerHTML:w(we).info},null,8,y_)):pe("v-if",!0),w_])]),_:1},8,["modelValue"]))}});const $_=["disabled","onKeydown"],E_=Me({__name:"Goto",setup(e){C(R);const t=W(),n=W(""),s=k(()=>{if(n.value.startsWith("/"))return!!De.find(o=>o.path===n.value.substring(1));{const o=+n.value;return!isNaN(o)&&o>0&&o<=Yd.value}});function r(){s.value&&(n.value.startsWith("/")?ts(n.value.substring(1)):ts(+n.value)),i()}function i(){zn.value=!1}return ue(zn,async o=>{var l,a;o?(await We(),n.value="",(l=t.value)==null||l.focus()):(a=t.value)==null||a.blur()}),ue(n,o=>{o.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(o,l)=>(y(),U("div",{id:"slidev-goto-dialog",class:Re(["fixed right-5 bg-main transform transition-all",w(zn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Do(c("input",{ref_key:"input",ref:t,"onUpdate:modelValue":l[0]||(l[0]=a=>n.value=a),type:"text",disabled:!w(zn),class:Re(["outline-none bg-transparent",{"text-red-400":!w(s)&&n.value}]),placeholder:"Goto...",onKeydown:[Gl(r,["enter"]),Gl(i,["escape"])],onBlur:i},null,42,$_),[[nh,n.value]])],2))}}),S_=Me({__name:"Controls",setup(e){C(R);const t=kt(),n=kt();return(s,r)=>(y(),U($e,null,[Q(h_,{modelValue:w(Ze),"onUpdate:modelValue":r[0]||(r[0]=i=>xe(Ze)?Ze.value=i:null)},null,8,["modelValue"]),Q(E_),w(t)?(y(),A(w(t),{key:0})):pe("v-if",!0),w(n)?(y(),A(w(n),{key:1,modelValue:w(pi),"onUpdate:modelValue":r[1]||(r[1]=i=>xe(pi)?pi.value=i:null)},null,8,["modelValue"])):pe("v-if",!0),w(we).info?(y(),A(x_,{key:2,modelValue:w(js),"onUpdate:modelValue":r[2]||(r[2]=i=>xe(js)?js.value=i:null)},null,8,["modelValue"])):pe("v-if",!0)],64))}}),O_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k_=c("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),j_=[k_];function P_(e,t){return y(),U("svg",O_,j_)}const M_={name:"carbon-settings-adjust",render:P_},C_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T_=c("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),A_=c("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),L_=[T_,A_];function R_(e,t){return y(),U("svg",C_,L_)}const I_={name:"carbon-information",render:R_},F_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N_=c("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),D_=[N_];function H_(e,t){return y(),U("svg",F_,D_)}const B_={name:"carbon-download",render:H_},V_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z_=c("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),W_=c("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),U_=[z_,W_];function K_(e,t){return y(),U("svg",V_,U_)}const q_={name:"carbon-user-speaker",render:K_},Y_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Z_=c("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),G_=c("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),X_=[Z_,G_];function Q_(e,t){return y(),U("svg",Y_,X_)}const J_={name:"carbon-presentation-file",render:Q_},ev={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},tv=c("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),nv=[tv];function sv(e,t){return y(),U("svg",ev,nv)}const rv={name:"carbon-pen",render:sv},iv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},ov=c("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),lv=c("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),av=[ov,lv];function cv(e,t){return y(),U("svg",iv,av)}const uv={name:"ph-cursor-duotone",render:cv},dv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},fv=c("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),pv=[fv];function mv(e,t){return y(),U("svg",dv,pv)}const cd={name:"ph-cursor-fill",render:mv},hv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},gv=c("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),_v=[gv];function vv(e,t){return y(),U("svg",hv,_v)}const bv={name:"carbon-sun",render:vv},yv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},wv=c("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),xv=[wv];function $v(e,t){return y(),U("svg",yv,xv)}const Ev={name:"carbon-moon",render:$v},Sv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ov=c("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),kv=[Ov];function jv(e,t){return y(),U("svg",Sv,kv)}const Pv={name:"carbon-apps",render:jv},Mv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Cv=c("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Tv=[Cv];function Av(e,t){return y(),U("svg",Mv,Tv)}const ud={name:"carbon-arrow-right",render:Av},Lv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Rv=c("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Iv=[Rv];function Fv(e,t){return y(),U("svg",Lv,Iv)}const Nv={name:"carbon-arrow-left",render:Fv},Dv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hv=c("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Bv=[Hv];function Vv(e,t){return y(),U("svg",Dv,Bv)}const zv={name:"carbon-maximize",render:Vv},Wv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Uv=c("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Kv=[Uv];function qv(e,t){return y(),U("svg",Wv,Kv)}const Yv={name:"carbon-minimize",render:qv},Zv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Gv=c("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),Xv=[Gv];function Qv(e,t){return y(),U("svg",Zv,Xv)}const Jv={name:"carbon-checkmark",render:Qv},e2={class:"select-list"},t2={class:"title"},n2={class:"items"},s2=["onClick"],r2=Me({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;C(R);const s=Lt(n,"modelValue",t,{passive:!0});return(r,i)=>{const o=Jv;return y(),U("div",e2,[c("div",t2,On(e.title),1),c("div",n2,[(y(!0),U($e,null,Ys(e.items,l=>(y(),U("div",{key:l.value,class:Re(["item",{active:w(s)===l.value}]),onClick:()=>{var a;s.value=l.value,(a=l.onClick)==null||a.call(l)}},[Q(o,{class:Re(["text-green-500",{"opacity-0":w(s)!==l.value}])},null,8,["class"]),Ft(" "+On(l.display||l.value),1)],10,s2))),128))])])}}});const un=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},i2=un(r2,[["__scopeId","data-v-7dd0eaca"]]),o2={class:"text-sm"},l2=Me({__name:"Settings",setup(e){C(R);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,s)=>(y(),U("div",o2,[Q(i2,{modelValue:w(hr),"onUpdate:modelValue":s[0]||(s[0]=r=>xe(hr)?hr.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),a2={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},c2=Me({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;C(R);const s=Lt(n,"modelValue",t,{passive:!0}),r=W();return mg(r,()=>{s.value=!1}),(i,o)=>(y(),U("div",{ref_key:"el",ref:r,class:"flex relative"},[c("button",{class:Re({disabled:e.disabled}),onClick:o[0]||(o[0]=l=>s.value=!w(s))},[an(i.$slots,"button",{class:Re({disabled:e.disabled})})],2),(y(),A(au,null,[w(s)?(y(),U("div",a2,[an(i.$slots,"menu")])):pe("v-if",!0)],1024))],512))}}),u2={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},or={__name:"VerticalDivider",setup(e){return C(R),(t,n)=>(y(),U("div",u2))}},d2={render(){return[]}},f2={class:"icon-btn"},p2={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},m2={class:"my-auto"},h2={class:"opacity-50"},g2=Me({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;C(R);const n=Xi.smaller("md"),{isFullscreen:s,toggle:r}=Ju,i=k(()=>so.value?`?password=${so.value}`:""),o=k(()=>`/presenter/${He.value}${i.value}`),l=k(()=>`/${He.value}${i.value}`),a=W(),u=()=>{a.value&&Zn.value&&a.value.contains(Zn.value)&&Zn.value.blur()},d=k(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),p=kt(),f=kt();return ls(()=>import("./DrawingControls.ded99646.js"),["assets/DrawingControls.ded99646.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.c1501809.js"]).then(m=>f.value=m.default),(m,h)=>{const b=Yv,v=zv,S=Nv,$=ud,E=Pv,O=Ev,D=bv,I=cd,B=uv,ne=rv,le=J_,me=Li("RouterLink"),_e=q_,Ae=B_,Fe=I_,Ue=M_;return y(),U("nav",{ref_key:"root",ref:a,class:"flex flex-col"},[c("div",{class:Re(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",w(d)]),onMouseleave:u},[w(Dt)?pe("v-if",!0):(y(),U("button",{key:0,class:"icon-btn",onClick:h[0]||(h[0]=(...Se)=>w(r)&&w(r)(...Se))},[w(s)?(y(),A(b,{key:0})):(y(),A(v,{key:1}))])),c("button",{class:Re(["icon-btn",{disabled:!w(e3)}]),onClick:h[1]||(h[1]=(...Se)=>w(on)&&w(on)(...Se))},[Q(S)],2),c("button",{class:Re(["icon-btn",{disabled:!w(J5)}]),title:"Next",onClick:h[2]||(h[2]=(...Se)=>w(rn)&&w(rn)(...Se))},[Q($)],2),w(Dt)?pe("v-if",!0):(y(),U("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:h[3]||(h[3]=Se=>w(ed)())},[Q(E)])),w(no)?pe("v-if",!0):(y(),U("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:h[4]||(h[4]=Se=>w(od)())},[w(qo)?(y(),A(O,{key:0})):(y(),A(D,{key:1}))])),Q(or),w(Dt)?pe("v-if",!0):(y(),U($e,{key:3},[!w(At)&&!w(n)&&w(p)?(y(),U($e,{key:0},[Q(w(p)),Q(or)],64)):pe("v-if",!0),w(At)?(y(),U("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:h[5]||(h[5]=Se=>mi.value=!w(mi))},[w(mi)?(y(),A(I,{key:0})):(y(),A(B,{key:1,class:"opacity-50"}))])):pe("v-if",!0)],64)),!w(we).drawings.presenterOnly&&!w(Dt)?(y(),U($e,{key:4},[c("button",{class:"icon-btn relative",title:"Drawing",onClick:h[6]||(h[6]=Se=>Rt.value=!w(Rt))},[Q(ne),w(Rt)?(y(),U("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Xe({background:w(bn).color})},null,4)):pe("v-if",!0)]),Q(or)],64)):pe("v-if",!0),w(Dt)?pe("v-if",!0):(y(),U($e,{key:5},[w(At)?(y(),A(me,{key:0,to:w(l),class:"icon-btn",title:"Play Mode"},{default:V(()=>[Q(le)]),_:1},8,["to"])):pe("v-if",!0),w(G5)?(y(),A(me,{key:1,to:w(o),class:"icon-btn",title:"Presenter Mode"},{default:V(()=>[Q(_e)]),_:1},8,["to"])):pe("v-if",!0),pe("v-if",!0)],64)),(y(),U($e,{key:6},[w(we).download?(y(),U("button",{key:0,class:"icon-btn",onClick:h[8]||(h[8]=(...Se)=>w(ro)&&w(ro)(...Se))},[Q(Ae)])):pe("v-if",!0)],64)),!w(At)&&w(we).info&&!w(Dt)?(y(),U("button",{key:7,class:"icon-btn",onClick:h[9]||(h[9]=Se=>js.value=!w(js))},[Q(Fe)])):pe("v-if",!0),!w(At)&&!w(Dt)?(y(),A(c2,{key:8},{button:V(()=>[c("button",f2,[Q(Ue)])]),menu:V(()=>[Q(l2)]),_:1})):pe("v-if",!0),w(Dt)?pe("v-if",!0):(y(),A(or,{key:9})),c("div",p2,[c("div",m2,[Ft(On(w(He))+" ",1),c("span",h2,"/ "+On(w(Yd)),1)])]),Q(w(d2))],34)],512)}}}),dd={render(){return[]}},fd={render(){return[]}},_2={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},v2=Me({__name:"PresenterMouse",setup(e){return C(R),(t,n)=>{const s=cd;return w(ci).cursor?(y(),U("div",_2,[Q(s,{class:"absolute",style:Xe({left:`${w(ci).cursor.x}%`,top:`${w(ci).cursor.y}%`})},null,8,["style"])])):pe("v-if",!0)}}}),b2=Me({__name:"SlidesShow",props:{context:null},setup(e){C(R),ue(lt,()=>{var n,s;((n=lt.value)==null?void 0:n.meta)&&lt.value.meta.preload!==!1&&(lt.value.meta.__preloaded=!0),((s=gi.value)==null?void 0:s.meta)&&gi.value.meta.preload!==!1&&(gi.value.meta.__preloaded=!0)},{immediate:!0});const t=kt();return ls(()=>import("./DrawingLayer.a53d743e.js"),[]).then(n=>t.value=n.default),(n,s)=>(y(),U($e,null,[pe(" Global Bottom "),Q(w(fd)),pe(" Slides "),(y(!0),U($e,null,Ys(w(De),r=>{var i,o;return y(),U($e,{key:r.path},[((i=r.meta)==null?void 0:i.__preloaded)||r===w(lt)?Do((y(),A(w(Go),{key:0,is:r==null?void 0:r.component,clicks:r===w(lt)?w(Ot):0,"clicks-elements":((o=r.meta)==null?void 0:o.__clicksElements)||[],"clicks-disabled":!1,class:Re(w(Zo)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[ku,r===w(lt)]]):pe("v-if",!0)],64)}),128)),pe(" Global Top "),Q(w(dd)),w(t)?(y(),A(w(t),{key:0})):pe("v-if",!0),w(At)?pe("v-if",!0):(y(),A(v2,{key:1}))],64))}}),y2=Me({__name:"Play",setup(e){C(R),i_();const t=W();function n(i){var o;Da.value||((o=i.target)==null?void 0:o.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?rn():on())}s3(t);const s=k(()=>u1.value||Da.value);kt();const r=kt();return ls(()=>import("./DrawingControls.ded99646.js"),["assets/DrawingControls.ded99646.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.c1501809.js"]).then(i=>r.value=i.default),(i,o)=>(y(),U($e,null,[c("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:Xe(w(Tu))},[Q(ad,{class:"w-full h-full",style:Xe({background:"var(--slidev-slide-container-background, black)"}),width:w(nl)?w(En).width.value:void 0,scale:w(hr),onPointerdown:n},{default:V(()=>[Q(b2,{context:"slide"})]),controls:V(()=>[c("div",{class:Re(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[w(s)?"opacity-100 right-0":"opacity-0 p-2",w(Bs)?"pointer-events-none":""]])},[Q(g2,{class:"m-auto",persist:w(s)},null,8,["persist"])],2),!w(we).drawings.presenterOnly&&!w(Dt)&&w(r)?(y(),A(w(r),{key:0,class:"ml-0"})):pe("v-if",!0)]),_:1},8,["style","width","scale"]),pe("v-if",!0)],4),Q(S_)],64))}});function pd(e){const t=k(()=>e.value.path),n=k(()=>De.length-1),s=k(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=k(()=>Xr(s.value)),i=k(()=>De.find(f=>f.path===`${s.value}`)),o=k(()=>{var f,m,h;return(h=(m=(f=i.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:h.id}),l=k(()=>{var f,m;return(m=(f=i.value)==null?void 0:f.meta)==null?void 0:m.layout}),a=k(()=>De.find(f=>f.path===`${Math.min(De.length,s.value+1)}`)),u=k(()=>De.filter(f=>{var m,h;return(h=(m=f.meta)==null?void 0:m.slide)==null?void 0:h.title}).reduce((f,m)=>(sl(f,m),f),[])),d=k(()=>rl(u.value,i.value)),p=k(()=>il(d.value));return{route:e,path:t,total:n,currentPage:s,currentPath:r,currentRoute:i,currentSlideId:o,currentLayout:l,nextRoute:a,rawTree:u,treeWithActiveStatuses:d,tree:p}}function md(e,t,n){const s=W(0);We(()=>{ft.afterEach(async()=>{await We(),s.value+=1})});const r=k(()=>{var a,u;return s.value,((u=(a=t.value)==null?void 0:a.meta)==null?void 0:u.__clicksElements)||[]}),i=k(()=>{var a,u,d;return+((d=(u=(a=t.value)==null?void 0:a.meta)==null?void 0:u.clicks)!=null?d:r.value.length)}),o=k(()=>n.value<De.length-1||e.value<i.value),l=k(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:i,hasNext:o,hasPrev:l}}const w2=["id"],Xa=Me({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,s=Lt(n,"clicksElements",t),r=k(()=>({height:`${Cu}px`,width:`${$n}px`})),i=kt();ls(()=>import("./DrawingPreview.c628dc10.js"),[]).then(u=>i.value=u.default);const o=k(()=>n.clicks),l=md(o,n.nav.currentRoute,n.nav.currentPage),a=k(()=>`${n.route.path.toString().padStart(3,"0")}-${(o.value+1).toString().padStart(2,"0")}`);return at(R,Le({nav:{...n.nav,...l},configs:we,themeConfigs:k(()=>we.themeConfig)})),(u,d)=>{var p;return y(),U("div",{id:w(a),class:"slide-container",style:Xe(w(r))},[Q(w(fd)),Q(w(Go),{is:(p=e.route)==null?void 0:p.component,"clicks-elements":w(s),"onUpdate:clicks-elements":d[0]||(d[0]=f=>xe(s)?s.value=f:null),clicks:w(o),"clicks-disabled":!1,class:Re(w(Zo)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),w(i)?(y(),A(w(i),{key:0,page:+e.route.path},null,8,["page"])):pe("v-if",!0),Q(w(dd))],12,w2)}}}),x2=Me({__name:"PrintSlide",props:{route:null},setup(e){var i;const t=e;C(R);const n=Le(((i=t.route.meta)==null?void 0:i.__clicksElements)||[]),s=k(()=>t.route),r=pd(s);return(o,l)=>(y(),U($e,null,[Q(Xa,{"clicks-elements":n,"onUpdate:clicks-elements":l[0]||(l[0]=a=>xe(n)?n.value=a:null),clicks:0,nav:w(r),route:w(s)},null,8,["clicks-elements","nav","route"]),w(Ps)?pe("v-if",!0):(y(!0),U($e,{key:0},Ys(n.length,a=>(y(),A(Xa,{key:a,clicks:a,nav:w(r),route:w(s)},null,8,["clicks","nav","route"]))),128))],64))}}),$2={id:"print-content"},E2=Me({__name:"PrintContainer",props:{width:null},setup(e){const t=e;C(R);const n=k(()=>t.width),s=k(()=>t.width/sn),r=k(()=>n.value/s.value),i=k(()=>r.value<sn?n.value/$n:s.value*sn/$n),o=De.slice(0,-1),l=k(()=>({"select-none":!we.selectable,"slidev-code-line-numbers":we.lineNumbers}));return at(Mu,i),(a,u)=>(y(),U("div",{id:"print-container",class:Re(w(l))},[c("div",$2,[(y(!0),U($e,null,Ys(w(o),d=>(y(),A(x2,{key:d.path,route:d},null,8,["route"]))),128))]),an(a.$slots,"controls")],2))}});const S2=Me({__name:"Print",setup(e){C(R);const t=vn.canvasWidth,n=Math.round(t/vn.aspectRatio)+1;function s(r,{slots:i}){if(i.default)return St("style",i.default())}return Ur(()=>{nl?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,i)=>(y(),U($e,null,[Q(s,null,{default:V(()=>[Ft(" @page { size: "+On(w(t))+"px "+On(n)+"px; margin: 0px; } ",1)]),_:1}),c("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:Xe(w(Tu))},[Q(E2,{class:"w-full h-full",style:Xe({background:"var(--slidev-slide-container-background, black)"}),width:w(En).width.value},null,8,["style","width"])],4)],64))}});const O2={class:"slidev-layout end"},k2={__name:"end",setup(e){return C(R),(t,n)=>(y(),U("div",O2," END "))}},j2=un(k2,[["__scopeId","data-v-ab32435f"]]),P2={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},M2=c("path",{fill:"currentColor",d:"M12 19.2c-2.5 0-4.71-1.28-6-3.2c.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10Z"},null,-1),C2=[M2];function T2(e,t){return y(),U("svg",P2,C2)}const hd={name:"mdi-account-circle",render:T2},A2={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L2=c("path",{fill:"currentColor","fill-rule":"evenodd",d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2Z"},null,-1),R2=[L2];function I2(e,t){return y(),U("svg",A2,R2)}const gd={name:"carbon-logo-github",render:I2};function Qa(e){return e.startsWith("/")?"/slides/iharbour-creatures/"+e.slice(1):e}function F2(e,t=!1){const n=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),s={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${Qa(e)})`:`url("${Qa(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return s.background||delete s.background,s}const N2={class:"my-auto w-full"},_d=Me({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const t=e;C(R);const n=k(()=>F2(t.background,!0));return(s,r)=>(y(),U("div",{class:"slidev-layout cover text-center",style:Xe(w(n))},[c("div",N2,[an(s.$slots,"default")])],4))}}),D2=c("h1",null,"\u65B0\u6E2F\u751F\u7269\u56FE\u9274",-1),H2=c("p",null,"\u4EA4\u5927\u521B\u65B0\u6E2F\u751F\u7269\u63A0\u5F71\u2014\u2014\u6301\u7EED\u66F4\u65B0\u4E2D",-1),B2=c("p",null,[c("a",{href:"https://github.com/Renzehua1998/iharbour-creatures",target:"_blank",rel:"noopener"},"\u70B9\u6B64\u52A0\u5165\u9879\u76EE")],-1),V2={class:"pt-12"},z2=Ft(" little tiger \u5C0F\u534E\u534E 2022.10.01 "),W2={class:"abs-br m-6 flex gap-2"},U2={href:"https://github.com/Renzehua1998",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},K2={href:"https://renzehua.gitee.io/",target:"_blank",alt:"Page",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},q2={__name:"1",setup(e){const t={theme:"seriph",background:"./\u690D\u7269/\u7EA2\u67AB1.jpg",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss"},n=C(R);return(s,r)=>{const i=ud,o=gd,l=hd;return y(),A(_d,Y(q(t)),{default:V(()=>[D2,H2,B2,c("div",V2,[c("span",{onClick:r[0]||(r[0]=(...a)=>w(n).nav.next&&w(n).nav.next(...a)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[z2,Q(i,{class:"inline"})])]),c("div",W2,[c("a",U2,[Q(o)]),c("a",K2,[Q(l)])])]),_:1},16)}}},vd="/slides/iharbour-creatures/assets/\u87B3\u8782\u76EE1.d0a9b6c0.jpg",bd="/slides/iharbour-creatures/assets/\u7EA2\u5634\u84DD\u9E4A2.3d67eb29.jpg",Y2={class:"slidev-layout default"},X={__name:"default",setup(e){return C(R),(t,n)=>(y(),U("div",Y2,[an(t.$slots,"default")]))}};const Z2=e=>(rs("data-v-b442f1bb"),e=e(),is(),e),G2=Z2(()=>c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("h1",null,"\u76EE\u5F55"),c("br"),c("h2",null,"\u4E00\u3001\u690D\u7269"),c("br"),c("ol",null,[c("li",null,"\u53F6\u5B50"),c("li",null,"\u82B1\u6735"),c("li",null,"\u679C\u5B9E")]),c("br"),c("h2",null,"\u4E8C\u3001\u52A8\u7269"),c("br"),c("ol",null,[c("li",null,"\u5927\u578B\u52A8\u7269"),c("li",null,"\u5C0F\u578B\u52A8\u7269")])]),c("div",null,[c("img",{src:vd,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:bd,class:"w-70 mx-auto"})])],-1)),X2={__name:"2",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[G2]),_:1},16))}},Q2=un(X2,[["__scopeId","data-v-b442f1bb"]]),yd="/slides/iharbour-creatures/assets/\u7EA2\u67AB1.2e758200.jpg",wd="/slides/iharbour-creatures/assets/\u94F6\u674F1.294cf119.jpg",xd="/slides/iharbour-creatures/assets/\u9E21\u722A\u69ED1.dfc0fb7f.jpg",$d="/slides/iharbour-creatures/assets/\u9E21\u722A\u69ED2.a8e3bf42.jpg";const Xo=e=>(rs("data-v-664ae331"),e=e(),is(),e),J2=Xo(()=>c("h1",null,"\u690D\u7269\u2014\u2014\u53F6\u5B50",-1)),eb=Xo(()=>c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:yd,class:"w-90 mx-auto"})]),c("div",null,[c("img",{src:wd,class:"w-90 mx-auto"})])],-1)),tb=Xo(()=>c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:xd,class:"w-80 mx-auto"})]),c("div",null,[c("img",{src:$d,class:"w-80 mx-auto"})])],-1)),nb={__name:"3",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[J2,eb,tb]),_:1},16))}},sb=un(nb,[["__scopeId","data-v-664ae331"]]),rb=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("h1",null,"\u9E21\u722A\u69ED"),c("p",null,[c("em",null,"\u5B66\u6821\u4E1C\u897F\u7EA2\u67AB\u8DEF\u79CD\u4E86\u5F88\u591A\u7EA2\u67AB\u6811\uFF0C\u5230\u4E86\u79CB\u5929\u7279\u522B\u597D\u770B\u3002\u7EA2\u67AB\u662F\u9E21\u722A\u69ED\u7684\u4E00\u4E2A\u54C1\u79CD")]),c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022.7.6 3\u53F7\u697C\u897F\u4FA7\u548C7.14B\u5357\u533A\u83DC\u9E1F\u9A7F\u7AD9\u3002"),c("p",null,"\u9E21\u722A\u69ED\uFF08\u5B66\u540D\uFF1AAcer palmatum Thunb.\uFF09\u662F\u69ED\u6811\u79D1\uFF0C\u69ED\u5C5E\u843D\u53F6\u5C0F\u4E54\u6728\uFF1B\u6811\u51A0\u4F1E\u5F62\u3002\u6811\u76AE\u5E73\u6ED1\u3002\u6811\u76AE\u6DF1\u7070\u8272\u3002\u5C0F\u679D\u7D2B\u6216\u6DE1\u7D2B\u7EFF\u8272,\u8001\u679D\u6DE1\u7070\u7D2B\u8272\u3002\u53F6\u8FD1\u5706\u5F62\uFF0C\u57FA\u90E8\u5FC3\u5F62\u6216\u8FD1\u5FC3\u5F62\uFF0C\u638C\u72B6\uFF0C\u5E387\u6DF1\u88C2\uFF0C\u5BC6\u751F\u5C16\u952F\u9F7F\u3002\u540E\u53F6\u5F00\u82B1\uFF1B\u82B1\u7D2B\u8272\uFF0C\u6742\u6027\uFF0C\u96C4\u82B1\u4E0E\u4E24\u6027\u82B1\u540C\u682A\uFF1B\u4F1E\u623F\u82B1\u5E8F\u3002\u843C\u7247\u5375\u72B6\u62AB\u9488\u5F62\uFF1B\u82B1\u74E3\u692D\u5706\u5F62\u6216\u5012\u5375\u5F62\u3002\u5E7C\u679C\u7D2B\u7EA2\u8272\uFF0C\u719F\u540E\u8910\u9EC4\u8272\uFF0C\u679C\u6838\u7403\u5F62\uFF0C\u8109\u7EB9\u663E\u8457\uFF0C\u4E24\u7FC5\u6210\u949D\u89D2\u3002\u82B1\u679C\u671F5\uFF5E9\u6708\u3002"),c("p",null,"\u5206\u5E03\u4E8E\u4E2D\u56FD\u534E\u4E1C\u3001\u534E\u4E2D\u81F3\u897F\u5357\u7B49\u7701\u533A\u3002\u751F\u4E8E\u4F4E\u6D77\u62D4\u7684\u6797\u8FB9\u6216\u758F\u6797\u4E2D\u3002\u671D\u9C9C\u548C\u65E5\u672C\u4E5F\u6709\u5206\u5E03\u3002\u5404\u56FD\u65E9\u5DF2\u5F15\u79CD\u683D\u57F9\uFF0C\u5176\u4E2D\u6709\u7EA2\u69ED\u548C\u7FBD\u6BDB\u69ED\u5E38\u4F5C\u56ED\u6797\u6811\u79CD\u3002")]),c("div",null,[c("img",{src:xd,class:"w-80 mx-auto"}),c("img",{src:$d,class:"w-80 mx-auto"})])],-1),ib={__name:"4",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[rb]),_:1},16))}},ob=c("h1",null,"\u9E21\u722A\u69ED-\u7EA2\u67AB",-1),lb=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2021\u5E7410\u670821\u65E5\u6DB5\u82F1\u697C\u4E1C\u4FA7\u3002",-1),ab=c("img",{src:yd,class:"w-160 mx-auto"},null,-1),cb=c("p",null,"\u7EA2\u67AB\u{1F341}\uFF08\u5B66\u540D\uFF1AAcer palmatum 'Atropurpureum'\uFF09\u662F\u69ED\u6811\u79D1\u3001\u69ED\u5C5E\u3001\u9E21\u722A\u69ED\u7684\u4E00\u4E2A\u54C1\u79CD\u3002\u843D\u53F6\u5C0F\u4E54\u6728\u3002",-1),ub={__name:"5",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[ob,lb,ab,cb]),_:1},16))}},db=c("h1",null,"\u94F6\u674F",-1),fb=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2021\u5E7410\u670826\u65E5\u7BEE\u7403\u573A\u95E8\u53E3\u3002",-1),pb=c("img",{src:wd,class:"w-160 mx-auto"},null,-1),mb=c("p",null,[Ft("\u94F6\u674F\uFF08Ginkgo biloba L.\uFF09\u662F\u94F6\u674F\u79D1\u3001\u94F6\u674F\u5C5E\u690D\u7269\u3002"),c("em",null,"\u5230\u79CB\u5929\u94F6\u674F\u53F6\u53D8\u9EC4\u5F88\u6F02\u4EAE\uFF0C\u4F1A\u957F\u94F6\u674F\u679C\uFF0C\u636E\u8BF4\u6709\u6BD2\u4E0D\u5EFA\u8BAE\u5403\u3002")],-1),hb={__name:"6",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[db,fb,pb,mb]),_:1},16))}},gb="/slides/iharbour-creatures/assets/\u77F3\u849C1.05eec775.jpg",Ed="/slides/iharbour-creatures/assets/\u7D2B\u85873.a87a307d.jpg",Sd="/slides/iharbour-creatures/assets/\u77F3\u7AF91.a346479b.jpg",Od="/slides/iharbour-creatures/assets/\u897F\u5E9C\u6D77\u68E01.43c431b2.jpg",kd="/slides/iharbour-creatures/assets/\u91CD\u74E3\u68E3\u68E0\u82B11.7d50dbf5.jpg";const Qo=e=>(rs("data-v-bb75daec"),e=e(),is(),e),_b=Qo(()=>c("h1",null,"\u690D\u7269\u2014\u2014\u82B1\u6735",-1)),vb=Qo(()=>c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:gb,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:Ed,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:Sd,class:"w-70 mx-auto"})])],-1)),bb=Qo(()=>c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Od,class:"w-105 mx-auto"})]),c("div",null,[c("img",{src:kd,class:"w-105 mx-auto"})])],-1)),yb={__name:"7",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[_b,vb,bb]),_:1},16))}},wb=un(yb,[["__scopeId","data-v-bb75daec"]]),xb="/slides/iharbour-creatures/assets/\u7389\u51701.47ba113d.jpg",$b=c("h1",null,"\u7389\u5170",-1),Eb=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2021\u5E743\u670812\u65E5\u897F\u7389\u5170\u8DEF\u3002",-1),Sb=c("img",{src:xb,class:"w-160 mx-auto"},null,-1),Ob=c("p",null,"\u7389\u5170\uFF08\u5B66\u540D\uFF1AYulania denudata (Desrousseaux) D. L. Fu\uFF09\u662F\u6728\u5170\u79D1\u3001\u7389\u5170\u5C5E\u690D\u7269\u3002\u843D\u53F6\u4E54\u6728\u3002",-1),kb={__name:"8",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[$b,Eb,Sb,Ob]),_:1},16))}},jb="/slides/iharbour-creatures/assets/\u7EA2\u53F6\u78A7\u68431.2fac4e4f.jpg",Pb=c("h1",null,"\u7EA2\u53F6\u78A7\u6843",-1),Mb=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E743\u670818\u65E5\u56DB\u53F7\u697C\u9876\u3002",-1),Cb=c("img",{src:jb,class:"w-160 mx-auto"},null,-1),Tb=c("p",null,"\u7EA2\u53F6\u78A7\u6843\uFF08\u5B66\u540D\uFF1APrunus persica 'Atropurpurea'\uFF09\u662F\u8537\u8587\u79D1\u3001\u6843\u5C5E\u690D\u7269\u3002\u7EA2\u53F6\u78A7\u6843\u662F\u78A7\u6843\u7684\u4E00\u4E2A\u53D8\u5F02\u54C1\u79CD\u3002",-1),Ab={__name:"9",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Pb,Mb,Cb,Tb]),_:1},16))}},Lb="/slides/iharbour-creatures/assets/\u5C71\u68431.69e314d0.jpg",Rb=c("h1",null,"\u5C71\u6843",-1),Ib=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E743\u670820\u65E5\u56DB\u53F7\u697C\u9876\u3002",-1),Fb=c("img",{src:Lb,class:"w-160 mx-auto"},null,-1),Nb=c("p",null,"\u5C71\u6843\uFF08\u5B66\u540D\uFF1AAmygdalus davidiana (Carri\xE8re) de Vos ex Henry\uFF09\u662F\u8537\u8587\u79D1\uFF0C\u6843\u5C5E\u4E54\u6728\uFF0C\u9AD8\u53EF\u8FBE10\u7C73\u3002",-1),Db={__name:"10",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Rb,Ib,Fb,Nb]),_:1},16))}},Hb=c("h1",null,"\u897F\u5E9C\u6D77\u68E0",-1),Bb=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E743\u670820\u65E5\u56DB\u53F7\u697C\u9876\u3002",-1),Vb=c("img",{src:Od,class:"w-160 mx-auto"},null,-1),zb=c("p",null,"\u897F\u5E9C\u6D77\u68E0\uFF08\u5B66\u540D\uFF1AMalus micromalus\uFF09\uFF0C\u4E3A\u6728\u5170\u7EB2\u3001\u8537\u8587\u79D1\u3001\u82F9\u679C\u5C5E\u7684\u690D\u7269\uFF0C\u4E3A\u4E2D\u56FD\u7684\u7279\u6709\u690D\u7269\u3002",-1),Wb={__name:"11",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Hb,Bb,Vb,zb]),_:1},16))}},Ub=c("h1",null,"\u91CD\u74E3\u68E3\u68E0\u82B1",-1),Kb=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E744\u67083\u65E5\u56DB\u53F7\u697C\u9876\u3002",-1),qb=c("img",{src:kd,class:"w-160 mx-auto"},null,-1),Yb=c("p",null,"\u91CD\u74E3\u68E3\u68E0\u82B1\uFF08\u5B66\u540D\uFF1AKerria japonica (L.) DC. f. pleniflora (Witte) Rehd.\uFF09\u68E3\u68E0\u82B1\u7684\u53D8\u79CD\uFF0C\u843D\u53F6\u704C\u6728\uFF0C\u9AD81-1.5\u7C73\u3002",-1),Zb={__name:"12",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Ub,Kb,qb,Yb]),_:1},16))}},Gb="/slides/iharbour-creatures/assets/\u6797\u836B\u9F20\u5C3E\u83491.09072bde.jpg",Xb=c("h1",null,"\u6797\u836B\u9F20\u5C3E\u8349",-1),Qb=c("p",null,"XWD\u62CD\u6444\u4E8E2022\u5E745\u670821\u65E5\u56DB\u53F7\u697C\u9876\u3002",-1),Jb=c("img",{src:Gb,class:"w-140 mx-auto"},null,-1),ey=c("p",null,"\u6797\u836B\u9F20\u5C3E\u8349\uFF08\u5B66\u540D\uFF1ASalvia nemorosa\uFF09\uFF0C\u5507\u5F62\u79D1\u9F20\u5C3E\u8349\u5C5E\u591A\u5E74\u751F\u8349\u672C\u690D\u7269\uFF0C\u8010\u5BD2\u3002",-1),ty={__name:"13",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Xb,Qb,Jb,ey]),_:1},16))}},ny="/slides/iharbour-creatures/assets/\u5357\u5929\u7AF91.992a3397.jpg",sy="/slides/iharbour-creatures/assets/\u5357\u5929\u7AF92.75188e6f.jpg",ry=c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("h1",null,"\u5357\u5929\u7AF9"),c("p",null,"XWD\u62CD\u6444\u4E8E2022.5.21\u56DB\u53F7\u697C\u9876\u3002"),c("p",null,"\u5357\u5929\u7AF9\uFF0C\u522B\u540D\uFF1A\u5357\u5929\u7AFA\uFF0C\u7EA2\u6777\u5B50\uFF0C\u5929\u70DB\u5B50\uFF0C\u7EA2\u67B8\u5B50\uFF0C\u94BB\u77F3\u9EC4\uFF0C\u5929\u7AF9\uFF0C\u5170\u7AF9\uFF1B\u62C9\u4E01\u6587\u540D\uFF1ANandina domestica.\u5C5E\u6BDB\u831B\u76EE\u3001\u5C0F\u6A97\u79D1\u4E0B\u690D\u7269\uFF0C\u662F\u6211\u56FD\u5357\u65B9\u5E38\u89C1\u7684\u6728\u672C\u82B1\u5349\u79CD\u7C7B\u3002"),c("p",null,"\u5706\u9525\u82B1\u5E8F\u76F4\u7ACB\uFF0C\u957F20-35\u5398\u7C73\uFF1B\u82B1\u5C0F\uFF0C\u767D\u8272\uFF0C\u5177\u82B3\u9999\uFF0C\u76F4\u5F846-7\u6BEB\u7C73\uFF1B\u82B1\u74E3\u957F\u5706\u5F62\uFF0C\u957F\u7EA64.2\u6BEB\u7C73\uFF0C\u5BBD\u7EA62.5\u6BEB\u7C73\uFF0C\u5148\u7AEF\u5706\u949D\uFF1B\u96C4\u854A6\uFF0C\u957F\u7EA63.5\u6BEB\u7C73\uFF0C\u82B1\u4E1D\u77ED\uFF0C\u82B1\u836F\u7EB5\u88C2\uFF0C\u836F\u9694\u5EF6\u4F38\u3002\u679C\u67C4\u957F4-8\u6BEB\u7C73\uFF1B\u6D46\u679C\u7403\u5F62\uFF0C\u76F4\u5F845-8\u6BEB\u7C73\uFF0C\u719F\u65F6\u9C9C\u7EA2\u8272\uFF0C\u7A00\u6A59\u7EA2\u8272\u3002\u82B1\u671F3-6\u6708\uFF0C\u679C\u671F5-11\u6708\u3002")]),c("div",null,[c("img",{src:ny,class:"w-80 mx-auto"})]),c("div",null,[c("img",{src:sy,class:"w-80 mx-auto"})])],-1),iy={__name:"14",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[ry]),_:1},16))}},oy="/slides/iharbour-creatures/assets/\u5927\u82B1\u8431\u83491.83b57190.jpg",ly="/slides/iharbour-creatures/assets/\u5927\u82B1\u8431\u83492.c8546a01.jpg",ay=c("h1",null,"\u5927\u82B1\u8431\u8349",-1),cy=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670822\u65E5\u4E00\u53F7\u697C\u9876\u3002",-1),uy=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:oy,class:"w-125 mx-auto"})]),c("div",null,[c("img",{src:ly,class:"w-125 mx-auto"})])],-1),dy=c("p",null,"\u5927\u82B1\u8431\u8349\uFF08\u5B66\u540D\uFF1AHemerocallis hybrida Bergmans\uFF09\u662F\u767E\u5408\u79D1\uFF0C\u8431\u8349\u5C5E\u591A\u5E74\u751F\u5BBF\u6839\u8349\u672C\u690D\u7269\u3002",-1),fy={__name:"15",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[ay,cy,uy,dy]),_:1},16))}},py="/slides/iharbour-creatures/assets/\u6728\u69FF1.7f5550e6.jpg",my="/slides/iharbour-creatures/assets/\u6728\u69FF2.e7571403.jpg",hy=c("h1",null,"\u6728\u69FF",-1),gy=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u67083\u65E5B11\u697C\u4E0B\u3002-------------------- \u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876\u3002------------------",-1),_y=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:py,class:"w-125 mx-auto"}),c("p",null,"\u7C89\u7D2B\u91CD\u74E3\u6728\u69FF\uFF0C\u4E3A\u9526\u8475\u79D1\u6728\u69FF\u5C5E\u6728\u69FF\u4E0B\u7684\u4E00\u4E2A\u53D8\u578B\uFF0C\u4E3A\u591A\u5E74\u751F\u704C\u6728\uFF0C\u751F\u957F\u901F\u5EA6\u5FEB\uFF0C\u53EF1\u5E74\u79CD\u690D\u591A\u5E74\u91C7\u6536\u3002\u5206\u5E03\u4E8E\u5C71\u4E1C\u7B49\u5730\u3002")]),c("div",null,[c("img",{src:my,class:"w-125 mx-auto"}),c("p",null,"\u77ED\u82DE\u6728\u69FF\uFF0C\u53D8\u79CD\u53F6\u83F1\u5F62\uFF0C\u57FA\u90E8\u6954\u5F62\uFF0C\u5C0F\u82DE\u7247\u6781\u5C0F\uFF0C\u4E1D\u72B6\uFF0C\u957F3-5\u6BEB\u7C73\uFF0C\u5BBD0.5-1\u6BEB\u7C73\uFF1B\u82B1\u6DE1\u7D2B\u8272\uFF0C\u5355\u74E3\u3002\u4EA7\u4E2D\u56FD\u5E7F\u4E1C\u3001\u798F\u5EFA\u548C\u5C71\u4E1C\u7701\u3002")])],-1),vy={__name:"16",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[hy,gy,_y]),_:1},16))}},by="/slides/iharbour-creatures/assets/\u7D2B\u85872.1ef94ded.jpg",yy=c("h1",null,"\u7D2B\u8587",-1),wy=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E749\u670813\u65E5\u56DB\u53F7\u697C\u9876\u3002-------------------2022\u5E747\u67086\u65E519\u53F7\u697C\u8FB9\u5C0F\u6CB3\u65C1\u3002------------------------",-1),xy=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Ed,class:"w-125 mx-auto"})]),c("div",null,[c("img",{src:by,class:"w-125 mx-auto"})])],-1),$y=c("p",null,"\u7D2B\u8587\uFF08\u5B66\u540D\uFF1ALagerstroemia indica L.\uFF09\u662F\u5343\u5C48\u83DC\u79D1\u3001\u7D2B\u8587\u5C5E\u690D\u7269\u3002\u843D\u53F6\u704C\u6728\u6216\u5C0F\u4E54\u6728\u3002\u7D2B\u8587\u6811\u59FF\u4F18\u7F8E\uFF0C\u6811\u5E72\u5149\u6ED1\u6D01\u51C0\uFF0C\u82B1\u8272\u8273\u4E3D\uFF1B\u5F00\u82B1\u65F6\u6B63\u5F53\u590F\u79CB\u5C11\u82B1\u5B63\u8282\uFF0C\u82B1\u671F\u957F\uFF0C\u6545\u6709\u201C\u767E\u65E5\u7EA2\u201D\u4E4B\u79F0\uFF0C\u53C8\u6709\u201C\u76DB\u590F\u7EFF\u906E\u773C\uFF0C\u6B64\u82B1\u7EA2\u6EE1\u5802\u201D\u7684\u8D5E\u8BED\uFF0C\u662F\u89C2\u82B1\u3001\u89C2\u5E72\u3001\u89C2\u6839\u7684\u76C6\u666F\u826F\u6750\uFF1B\u6839\u3001\u76AE\u3001\u53F6\u3001\u82B1\u7686\u53EF\u5165\u836F\u3002",-1),Ey={__name:"17",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[yy,wy,xy,$y]),_:1},16))}},Sy="/slides/iharbour-creatures/assets/\u6253\u7897\u82B11.224fdd0f.jpg",Oy="/slides/iharbour-creatures/assets/\u9F99\u722A\u69D01.01b37d83.jpg",ky=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("h1",null,"\u6253\u7897\u82B1"),c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876\u3002"),c("img",{src:Sy,class:"w-120 mx-auto"}),c("p",null,"\u6253\u7897\u82B1\uFF08Calystegia hederacea Wall.ex.Roxb.\uFF09\uFF0C\u53C8\u540D\u201C\u5C0F\u65CB\u82B1\u201D\u201C\u71D5\u8986\u5B50\u201D\u7B49\uFF0C\u65CB\u82B1\u79D1\uFF0C\u6253\u7897\u82B1\u5C5E\u8349\u672C\u690D\u7269\u3002")]),c("div",null,[c("h1",null,"\u9F99\u722A\u69D0"),c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876"),c("img",{src:Oy,class:"w-120 mx-auto"}),c("p",null,"\u9F99\u722A\u69D0\u662F\u56FD\u69D0\u7684\u82BD\u53D8\u54C1\u79CD\uFF0C\u843D\u53F6\u4E54\u6728\u3001\u559C\u5149\u3001\u7A0D\u8010\u9634\u3001\u80FD\u9002\u5E94\u5E72\u51B7\u6C14\u5019\u3002\u6811\u51A0\u4F18\u7F8E\uFF0C\u82B1\u82B3\u9999\uFF0C\u662F\u884C\u9053\u6811\u548C\u4F18\u826F\u7684\u871C\u6E90\u690D\u7269\u3002")])],-1),jy={__name:"18",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[ky]),_:1},16))}},Py="/slides/iharbour-creatures/assets/\u77F3\u7AF92.47dea7ea.jpg",My=c("h1",null,"\u77F3\u7AF9",-1),Cy=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876",-1),Ty=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Sd,class:"w-125 mx-auto"})]),c("div",null,[c("img",{src:Py,class:"w-125 mx-auto"})])],-1),Ay=c("p",null,"\u77F3\u7AF9\uFF0C\u522B\u540D\u77BF\u9EA6\u8349\uFF0C\u62C9\u4E01\u6587\u540D\uFF1ADianthus chinensis L. \u4E3A\u53CC\u5B50\u53F6\u690D\u7269\u7EB2\u3001\u77F3\u7AF9\u79D1\u3001\u77F3\u7AF9\u5C5E\u591A\u5E74\u751F\u8349\u672C\uFF0C\u9AD830-50\u5398\u7C73\uFF0C\u5168\u682A\u65E0\u6BDB\uFF0C\u5E26\u7C89\u7EFF\u8272\u3002\u830E\u7531\u6839\u9888\u751F\u51FA\u3002\u53F6\u7247\u7EBF\u72B6\u62AB\u9488\u5F62\uFF0C\u9876\u7AEF\u6E10\u5C16\uFF0C\u57FA\u90E8\u7A0D\u72ED\uFF0C\u5168\u7F18\u6216\u6709\u7EC6\u5C0F\u9F7F\uFF0C\u4E2D\u8109\u8F83\u663E\u3002\u82B1\u5355\u751F\u679D\u7AEF\u6216\u6570\u82B1\u96C6\u6210\u805A\u4F1E\u82B1\u5E8F\uFF1B\u7D2B\u7EA2\u8272\u3001\u7C89\u7EA2\u8272\u3001\u9C9C\u7EA2\u8272\u6216\u767D\u8272\uFF0C\u82B1\u671F5-6\u6708\uFF0C\u679C\u671F7-9\u6708\u3002",-1),Ly={__name:"19",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[My,Cy,Ty,Ay]),_:1},16))}},Ry="/slides/iharbour-creatures/assets/\u677E\u679C\u83CA1.709eb96b.jpg",Iy="/slides/iharbour-creatures/assets/\u677E\u679C\u83CA2.8b4e4921.jpg",Fy=c("h1",null,"\u677E\u679C\u83CA",-1),Ny=c("p",null,"XWD\u62CD\u6444\u4E8E2022\u5E748\u670812\u65E5\u4E09\u53F7\u697C\u5929\u53F0\u3002",-1),Dy=c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("p",null,"\u677E\u679C\u83CA\uFF08\u5B66\u540D\uFF1AEchinacea purpurea (Linn.) Moench\uFF09\u662F\u83CA\u79D1\u677E\u679C\u83CA\u5C5E\u690D\u7269\uFF0C\u591A\u5E74\u751F\u8349\u672C\u690D\u7269\u3002\u9AD850-150\u5398\u7C73\uFF0C\u5168\u682A\u6709\u7C97\u6BDB\uFF0C\u830E\u76F4\u7ACB\uFF1B\u53F6\u7F18\u5177\u952F\u9F7F\u3002\u57FA\u751F\u53F6\u5375\u5F62\u6216\u4E09\u89D2\u5F62\uFF0C\u830E\u751F\u53F6\u536F\u72B6\u62AB\u9488\u5F62\uFF0C\u53F6\u67C4\u57FA\u90E8\u7565\u62B1\u830E\u3002\u5934\u72B6\u82B1\u5E8F\uFF0C\u5355\u751F\u6216\u591A\u6570\u805A\u751F\u4E8E\u6280\u9876\uFF0C\u82B1\u5927\uFF0C\u76F4\u5F84\u53EF\u8FBE10\u5398\u7C73\uFF1A\u82B1\u7684\u4E2D\u5FC3\u90E8\u4F4D\u51F8\u8D77\uFF0C\u5448\u7403\u5F62\uFF0C\u7403\u4E0A\u4E3A\u7BA1\u72B6\u82B1\uFF0C\u6A59\u9EC4\u8272\uFF1B\u79CD\u5B50\u6D45\u8910\u8272\uFF0C\u5916\u76AE\u786C\u3002\u82B1\u671F\u590F\u79CB\u3002")]),c("div",null,[c("img",{src:Ry,class:"w-80 mx-auto"})]),c("div",null,[c("img",{src:Iy,class:"w-80 mx-auto"})])],-1),Hy={__name:"20",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Fy,Ny,Dy]),_:1},16))}},By="/slides/iharbour-creatures/assets/\u84B2\u82C71.0b90777c.jpg",Vy=c("h1",null,"\u84B2\u82C7",-1),zy=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670829\u65E5B\u533A\u65C1\u3002",-1),Wy=c("img",{src:By,class:"w-110 mx-auto"},null,-1),Uy=c("p",null,"\u84B2\u82C7\uFF08\u5B66\u540D\uFF1ACortaderia selloana (Schult.) Aschers. et Graebn.\uFF09\u662F\u79BE\u672C\u79D1\u3001\u84B2\u82C7\u5C5E\u690D\u7269\u3002",-1),Ky=c("p",null,"\u82B1\u8BED\uFF1A\u5BF9\u7231\u60C5\u575A\u8D1E\u4E0D\u6E1D\u7684\u4FE1\u5FF5\u4E0E\u51B3\u5FC3\u3002",-1),qy={__name:"21",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Vy,zy,Wy,Uy,Ky]),_:1},16))}},Yy="/slides/iharbour-creatures/assets/\u77F3\u849C3.a345e1a9.jpg",Zy="/slides/iharbour-creatures/assets/\u77F3\u849C2.d64c0334.jpg",Gy=c("h1",null,"\u77F3\u849C",-1),Xy=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E749\u670813\u65E5\u4E09\u53F7\u697C\u897F\u4FA7\u8DEF\u8FB9\u3002",-1),Qy=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Yy,class:"w-125 mx-auto"})]),c("div",null,[c("img",{src:Zy,class:"w-125 mx-auto"})])],-1),Jy=c("p",null,[Ft("\u77F3\u849C\uFF08\u5B66\u540D\uFF1ALycoris radiata (L\u2019Her.) Herb.\uFF09 "),c("em",null,"\u6240\u8C13\u7684\u201C\u66FC\u73E0\u6C99\u534E\u201D\u3001\u201C\u66FC\u6B8A\u6C99\u534E\u201D\u3001\u201C\u5F7C\u5CB8\u82B1\u201D\u3001\u201C\u8389\u53EF\u4E3D\u4E1D\u201D\u90FD\u662F\u8FD9\u79CD\u82B1\u3002\u672C\u6765\u4EE5\u4E3A\u6E2F\u91CC\u6CA1\u6709\u7684\uFF0C\u524D\u51E0\u5929\u770B\u5230\u540C\u73ED\u540C\u5B66\u670B\u53CB\u5708\u53D1\u4E86\uFF0C\u8D76\u5FEB\u548C\u5979\u6253\u542C\u4F4D\u7F6E\u53BB\u62CD\u4E24\u5F20\u3002")],-1),ew={__name:"22",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Gy,Xy,Qy,Jy]),_:1},16))}},jd="/slides/iharbour-creatures/assets/\u4FA7\u67CF2.4f63f0ca.jpg",Pd="/slides/iharbour-creatures/assets/\u7389\u51702.eb599a48.jpg",Md="/slides/iharbour-creatures/assets/\u67FF\u5B501.0fe510d9.jpg",Cd="/slides/iharbour-creatures/assets/\u7EA2\u53F6\u78A7\u68433.434eaaa1.jpg",tw="/slides/iharbour-creatures/assets/\u77F3\u69B42.a0e3d5e2.jpg",Td="/slides/iharbour-creatures/assets/\u5C71\u69421.df09bddc.jpg";const Jo=e=>(rs("data-v-02914721"),e=e(),is(),e),nw=Jo(()=>c("h1",null,"\u690D\u7269\u2014\u2014\u679C\u5B9E",-1)),sw=Jo(()=>c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:jd,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:Pd,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:Md,class:"w-70 mx-auto"})])],-1)),rw=Jo(()=>c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Cd,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:tw,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:Td,class:"w-70 mx-auto"})])],-1)),iw={__name:"23",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[nw,sw,rw]),_:1},16))}},ow=un(iw,[["__scopeId","data-v-02914721"]]),lw=c("h1",null,"\u7389\u5170",-1),aw=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670829\u65E5\u897F\u7389\u5170\u8DEF\u3002",-1),cw=c("img",{src:Pd,class:"w-125 mx-auto"},null,-1),uw=c("p",null,[c("em",null,"\u5B66\u6821\u4E1C\u897F\u7389\u5170\u8DEF\u6709\u597D\u591A\u7389\u5170\u6811\uFF0C\u5728\u65E9\u6625\u5F00\u82B1\u7279\u522B\u6F02\u4EAE\u3002\u7389\u5170\u7684\u679C\u5B9E\u50CF\u7EA2\u8272\u7684\u9EBB\u82B1\uFF0C\u8C8C\u4F3C\u6709\u6BD2\u3002")],-1),dw={__name:"24",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[lw,aw,cw,uw]),_:1},16))}},fw="/slides/iharbour-creatures/assets/\u7EA2\u53F6\u78A7\u68434.f1ddb925.jpg",pw=c("h1",null,"\u7EA2\u53F6\u78A7\u6843",-1),mw=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876----------------------2022\u5E748\u670830\u65E5\u56DB\u53F7\u697C\u9876---------------------------",-1),hw=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Cd,class:"w-125 mx-auto"})]),c("div",null,[c("img",{src:fw,class:"w-125 mx-auto"})])],-1),gw=c("p",null,[c("em",null,"\u56DB\u53F7\u697C\u697C\u9876\u6709\u597D\u591A\u515A\u652F\u90E8\u6350\u8D60\u7684\u690D\u7269\uFF0C\u7EA2\u53F6\u78A7\u6843\u5F00\u82B1\u6BD4\u8F83\u65E9\uFF0C\u5728\u65E9\u6625\u5C31\u76DB\u5F00\u4E86\u3002\u78A7\u6843\u57288\u6708\u5E95\u5C31\u5927\u91CF\u6210\u719F\uFF0C\u6BD4\u666E\u901A\u7684\u6843\u5B50\u7A0D\u5FAE\u6DA9\u4E00\u70B9\uFF0C\u4E0D\u8FC7\u4E5F\u5F88\u751C\u5F88\u597D\u5403\u3002")],-1),_w={__name:"25",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[pw,mw,hw,gw]),_:1},16))}},vw="/slides/iharbour-creatures/assets/\u7EA2\u53F6\u78A7\u68436.6cdec69f.jpg",bw="/slides/iharbour-creatures/assets/\u5C71\u68432.ab220a04.jpg",yw=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("h1",null,"\u7EA2\u53F6\u78A7\u6843"),c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670830\u65E5\u56DB\u53F7\u697C\u5DE5\u4F4D\u3002"),c("img",{src:vw,class:"w-120 mx-auto"})]),c("div",null,[c("h1",null,"\u5C71\u6843"),c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E749\u67084\u65E5\u5BBF\u820D"),c("img",{src:bw,class:"w-120 mx-auto"})])],-1),ww=c("p",null,[c("em",null,"\u5C71\u6843\u{1F351}\u76AE\u6BD4\u78A7\u6843\u5149\u6ED1\u4E00\u4E9B\uFF0C\u679C\u5B50\u8981\u5C0F\u4E00\u4E9B\u3002\u603B\u7684\u6765\u8BF4\u78A7\u6843\u6BD4\u8F83\u751C\u4E5F\u66F4\u597D\u5403\u3002")],-1),xw={__name:"26",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[yw,ww]),_:1},16))}},$w="/slides/iharbour-creatures/assets/\u897F\u5E9C\u6D77\u68E02.a91b74ff.jpg",Ew=c("h1",null,"\u897F\u5E9C\u6D77\u68E0",-1),Sw=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876\u3002",-1),Ow=c("img",{src:$w,class:"w-125 mx-auto"},null,-1),kw=c("p",null,[c("em",null,"\u6D77\u68E0\u82B1\u7684\u679C\u5B9E\u53EB\u6D77\u68E0\u679C\uFF0C\u4E5F\u53EB\u6978\u5B50\u3002\u5206\u5E03\u4E8E\u6CB3\u5317\u3001\u5C71\u4E1C\u3001\u5C71\u897F\u3001\u6CB3\u5357\u3001\u9655\u897F\u3001\u7518\u8083\u3001\u8FBD\u5B81\u3001\u5185\u8499\u53E4\u7B49\u7701\u533A\u3002")],-1),jw={__name:"27",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Ew,Sw,Ow,kw]),_:1},16))}},Pw="/slides/iharbour-creatures/assets/\u77F3\u69B41.a0213a45.jpg",Mw="/slides/iharbour-creatures/assets/\u77F3\u69B43.5fdf56a6.jpg",Cw=c("h1",null,"\u77F3\u69B4",-1),Tw=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670822\u65E5\u4E00\u53F7\u697C\u9876----------------------2022\u5E748\u670829\u65E5B\u533A\u5916\u7EFF\u5316\u5E26---------------------------",-1),Aw=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Pw,class:"w-125 mx-auto"})]),c("div",null,[c("img",{src:Mw,class:"w-125 mx-auto"})])],-1),Lw=c("p",null,"\u77F3\u69B4\uFF08\u62C9\u4E01\u540D\uFF1APunica granatum L.\uFF09\u843D\u53F6\u4E54\u6728\u6216\u704C\u6728\uFF1B\u843D\u53F6\u704C\u6728\u6216\u4E54\u6728\uFF0C\u9AD82\u20147\u7C73\uFF0C\u7A00\u8FBE10\u7C73\u3002",-1),Rw=c("p",null,[c("em",null,"\u5B66\u6821\u7684\u77F3\u69B4\u867D\u7136\u662F\u89C2\u8D4F\u77F3\u69B4\uFF0C\u4F46\u662F\u4E5F\u53EF\u4EE5\u5403\uFF0C\u9178\u9178\u751C\u751C\u7684\uFF0C\u516B\u6708\u5E95\u719F\u7684\u8FD8\u4E0D\u591A\uFF0C\u4E5D\u6708\u4EFD\u5C31\u5927\u91CF\u6210\u719F\u4E86\u3002")],-1),Iw={__name:"28",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Cw,Tw,Aw,Lw,Rw]),_:1},16))}},Fw="/slides/iharbour-creatures/assets/\u6728\u74DC1.72e14755.jpg",Nw=c("h1",null,"\u6728\u74DC",-1),Dw=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670818\u65E5B\u5317\u533A\u95E8\u53E3\u3002",-1),Hw=c("img",{src:Fw,class:"w-125 mx-auto"},null,-1),Bw=c("p",null,"\u6728\u74DC\uFF08\u5B66\u540D\uFF1AChaenomeles sinensis (Thouin) Koehne\uFF09\u662F\u8537\u8587\u79D1\u3001\u6728\u74DC\u5C5E\u690D\u7269\u3002\u704C\u6728\u6216\u5C0F\u4E54\u6728\uFF0C\u9AD8\u8FBE5-10\u7C73\u3002",-1),Vw={__name:"29",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Nw,Dw,Hw,Bw]),_:1},16))}},zw=c("h1",null,"\u5C71\u6942",-1),Ww=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670829\u65E5A\u533A\u65C1\u3002",-1),Uw=c("img",{src:Td,class:"w-125 mx-auto"},null,-1),Kw=c("p",null,"\u5C71\u6942\uFF08Crataegus pinnatifida Bge.\uFF09\uFF0C\u8537\u8587\u79D1\u5C71\u6942\u5C5E\uFF0C\u6297\u8870\u8001\u4F5C\u7528\u4F4D\u5C45\u7FA4\u679C\u4E4B\u9996\u3002 \u843D\u53F6\u4E54\u6728\uFF0C\u9AD8\u53EF\u8FBE6\u7C73\u3002",-1),qw={__name:"30",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[zw,Ww,Uw,Kw]),_:1},16))}},Yw="/slides/iharbour-creatures/assets/\u4FA7\u67CF1.36024fe7.jpg",Zw=c("h1",null,"\u4FA7\u67CF",-1),Gw=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670829\u65E5A\u533A\u65C1\u3002",-1),Xw=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Yw,class:"w-125 mx-auto"})]),c("div",null,[c("img",{src:jd,class:"w-125 mx-auto"})])],-1),Qw=c("p",null,"\u4FA7\u67CF\uFF08\u5B66\u540D\uFF1APlatycladus orientalis \uFF08L.) Franco\uFF09\u662F\u67CF\u79D1\u4FA7\u67CF\u5C5E\u5E38\u7EFF\u4E54\u6728\u3002",-1),Jw=c("p",null,"\u4FA7\u67CF\u4E3A\u4E2D\u56FD\u7279\u4EA7\uFF0C\u9664\u9752\u6D77\u3001\u65B0\u7586\u5916\uFF0C\u5168\u56FD\u5747\u6709\u5206\u5E03\u3002\u5BFF\u547D\u5F88\u957F\uFF0C\u5E38\u6709\u767E\u5E74\u548C\u6570\u767E\u5E74\u4EE5\u4E0A\u7684\u53E4\u6811\u3002",-1),ex={__name:"31",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Zw,Gw,Xw,Qw,Jw]),_:1},16))}},tx=c("h1",null,"\u67FF\u5B50",-1),nx=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670831\u65E5\u9053\u79D1\u5230\u6559\u5B66\u533A\u9014\u4E2D\u3002",-1),sx=c("img",{src:Md,class:"w-125 mx-auto"},null,-1),rx=c("p",null,"\u67FF\uFF08\u5B66\u540D\uFF1ADiospyros kaki Thunb.\uFF09\u662F\u67FF\u79D1\u3001\u67FF\u5C5E\u843D\u53F6\u5927\u4E54\u6728\u3002\u82B1\u671F5-6\u6708\uFF0C\u679C\u671F9-10\u6708\u3002",-1),ix={__name:"32",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[tx,nx,sx,rx]),_:1},16))}},Ad="/slides/iharbour-creatures/assets/\u767D\u9E3D2.d1f00259.jpg",Ld="/slides/iharbour-creatures/assets/\u87FE\u870D1.28b1701f.jpg",Rd="/slides/iharbour-creatures/assets/\u732B6.da240840.jpg",Id="/slides/iharbour-creatures/assets/\u86C71.5ee78345.jpg",Fd="/slides/iharbour-creatures/assets/\u9EBB\u96C02.0ecd62ec.jpg",Nd="/slides/iharbour-creatures/assets/\u7EA2\u5634\u84DD\u9E4A1.2d36f452.jpg",ox="/slides/iharbour-creatures/assets/\u5927\u9EC42.884aec52.jpg",Dd="/slides/iharbour-creatures/assets/\u8759\u87601.8f38e477.jpg";const el=e=>(rs("data-v-630f8f0f"),e=e(),is(),e),lx=el(()=>c("h1",null,"\u52A8\u7269\u2014\u2014\u5927\u578B\u52A8\u7269",-1)),ax=el(()=>c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Ad,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:Ld,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:Rd,class:"w-70 mx-auto"})])],-1)),cx=el(()=>c("div",{class:"grid grid-cols-5 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Id,class:"w-50 mx-auto"})]),c("div",null,[c("img",{src:Fd,class:"w-50 mx-auto"})]),c("div",null,[c("img",{src:Nd,class:"w-33 mx-auto"})]),c("div",null,[c("img",{src:ox,class:"w-50 mx-auto"})]),c("div",null,[c("img",{src:Dd,class:"w-50 mx-auto"})])],-1)),ux={__name:"33",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[lx,ax,cx]),_:1},16))}},dx=un(ux,[["__scopeId","data-v-630f8f0f"]]),fx="/slides/iharbour-creatures/assets/\u732B4.4b5eb95b.jpg",px=c("h1",null,"\u732B",-1),mx=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670816\u65E5B\u5357\u533A\u7269\u4E1A\u95E8\u53E3----------------2022\u5E746\u670828\u65E5B\u5317\u533A----------------------------------",-1),hx=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:fx,class:"w-125 mx-auto"})]),c("div",null,[c("img",{src:Rd,class:"w-125 mx-auto"})])],-1),gx=c("p",null,"\u732B\uFF0C\u5C5E\u4E8E\u732B\u79D1\u52A8\u7269\uFF0C\u662F\u5168\u4E16\u754C\u5BB6\u5EAD\u4E2D\u8F83\u4E3A\u5E7F\u6CDB\u7684\u5BA0\u7269\u3002",-1),_x=c("p",null,[c("em",null,"\u6E2F\u91CC\u9762\u597D\u591A\u732B\u732B\u72D7\u72D7\uFF0C\u6211\u4F4F\u7684B\u5317\u533A\u6709\u4E00\u53EA\u4E09\u82B1\u4E00\u53EA\u6A58\u732B\u3002\u540E\u6765\u53C8\u6765\u4E86\u4E00\u53EA\u5976\u725B\u732B\uFF0C\u8FD9\u4E9B\u{1F431}\u751F\u4E86\u597D\u591A\u5C0F\u732B\u3002")],-1),vx={__name:"34",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[px,mx,hx,gx,_x]),_:1},16))}},bx="/slides/iharbour-creatures/assets/\u5927\u9EC41.e4c95213.jpg",yx="/slides/iharbour-creatures/assets/\u5C0F\u767D1.c6429cc6.jpg",wx=c("h1",null,"\u72D7",-1),xx=c("p",null,"XWD\u62CD\u6444\u4E8E2022\u5E745\u67086\u65E5\u64CD\u573A--------------------------\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670819\u65E5\u6DB5\u82F1\u697C\u5317\u64CD\u573A----------------",-1),$x=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:bx,class:"w-125 mx-auto"})]),c("div",null,[c("img",{src:yx,class:"w-125 mx-auto"})])],-1),Ex=c("p",null,"\u72D7\uFF0C\u810A\u7D22\u52A8\u7269\u95E8\u3001\u810A\u690E\u52A8\u7269\u4E9A\u95E8\u3001\u54FA\u4E73\u7EB2\u3001\u771F\u517D\u4E9A\u7EB2\u3001\u98DF\u8089\u76EE\u3001\u88C2\u811A\u4E9A\u76EE\u3001\u72AC\u79D1\u52A8\u7269\u3002",-1),Sx=c("p",null,[c("em",null,"\u5927\u9EC4\u{1F415}\u53EF\u4EE5\u6478\uFF0C\u8FD8\u4F1A\u8FFD\u732B\uFF0C\u8DD1\u6B65\u592A\u5FEB\u4ED6\u4F1A\u64B5\u4F60\u3002\u5C0F\u767D\u633A\u53EF\u7231\u7684\uFF0C\u542C\u8BF4\u4E5F\u5F88\u542C\u8BDD\uFF0C\u51FA\u73B0\u9891\u7387\u6BD4\u5927\u9EC4\u4F4E\u4E00\u4E9B\u3002")],-1),Ox={__name:"35",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[wx,xx,$x,Ex,Sx]),_:1},16))}},kx=c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("h1",null,"\u7EA2\u5634\u84DD\u9E4A"),c("p",null,"Why\u62CD\u6444\u4E8E2022\u5E744\u670828\u65E5\uFF0C\u5728\u6DB5\u82F1\u697C\u5730\u4E0B\u8D85\u5E02\u5BF9\u9762\u7684\u5C0F\u5C71\u5761\u3002"),c("p",null,"\u7EA2\u5634\u84DD\u9E4A\uFF08Urocissa erythrorhyncha\uFF09\u662F\u5927\u578B\u9E26\u7C7B\uFF0C\u4F53\u957F54-65\u5398\u7C73\u3002\u5634\u3001\u811A\u7EA2\u8272\uFF0C\u5934\u3001\u9888\u3001\u5589\u548C\u80F8\u9ED1\u8272\uFF0C\u5934\u9876\u81F3\u540E\u9888\u6709\u4E00\u5757\u767D\u8272\u81F3\u6DE1\u84DD\u767D\u8272\u6216\u7D2B\u7070\u8272\u5757\u6591\uFF0C\u5176\u4F59\u4E0A\u4F53\u7D2B\u84DD\u7070\u8272\u6216\u6DE1\u84DD\u7070\u8910\u8272\u3002\u5C3E\u957F\u5448\u51F8\u72B6\u5177\u9ED1\u8272\u4E9A\u7AEF\u6591\u548C\u767D\u8272\u7AEF\u6591\u3002\u4E0B\u4F53\u767D\u8272\u3002 \u9EC4\u5634\u84DD\u9E4A\u5916\u5F62\u548C\u7FBD\u8272\u548C\u8BE5\u79CD\u975E\u5E38\u76F8\u4F3C\uFF0C\u4F46\u9EC4\u5634\u84DD\u9E4A\u5634\u4E3A\u9EC4\u8272\uFF0C\u5934\u90E8\u4EC5\u6795\u6709\u767D\u8272\u5757\u6591\u3002"),c("p",null,"\u5E7F\u6CDB\u5206\u5E03\u4E8E\u6797\u7F18\u5730\u5E26\u3001\u704C\u4E1B\u751A\u81F3\u6751\u5E84\u3002\u6027\u55A7\u95F9\uFF0C\u7ED3\u5C0F\u7FA4\u6D3B\u52A8\u3002\u4EE5\u679C\u5B9E\u3001\u5C0F\u578B\u9E1F\u7C7B\u53CA\u5375\u3001\u6606\u866B\u4E3A\u98DF\uFF0C\u5E38\u5728\u5730\u9762\u53D6\u98DF\u3002\u559C\u9A6C\u62C9\u96C5\u5C71\u8109\u3001\u5370\u5EA6\u4E1C\u5317\u90E8\u3001\u4E2D\u56FD\u3001\u7F05\u7538\u53CA\u5370\u5EA6\u652F\u90A3\u5747\u6709\u5206\u5E03\u3002")]),c("div",null,[c("img",{src:Nd,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:bd,class:"w-70 mx-auto"})])],-1),jx={__name:"36",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[kx]),_:1},16))}},Px="/slides/iharbour-creatures/assets/\u767D\u9E3D1.4dd74f09.jpg",Mx=c("div",{style:{display:"flex"}},[c("div",{style:{width:"60%"}},[c("h1",null,"\u767D\u9E3D"),c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2021\u5E7411\u67084\u65E5\u725B\u987F\u96D5\u50CF\uFF0C2022\u5E746\u670821\u65E5\u6DB5\u82F1\u697C\u5357\u5E7F\u573A"),c("img",{src:Ad,class:"w-100 mx-auto"}),c("p",null,"\u{1F54A}\u9E3D\u5F62\u76EE\u9E20\u9E3D\u79D1\u9E3D\u5C5E\u4E0B\u7684\u52A8\u7269"),c("p",null,[c("em",null,"\u65C1\u8FB9\u6709\u552E\u8D27\u673A\u5356\u9E3D\u7CAE\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u7F51\u4E0A\u4E70\u4E00\u5927\u888B\u5B50\u6765\u5582\uFF0C\u5B8C\u5168\u4E0D\u6015\u4EBA\u3002\u5F00\u5B66\u548C\u6BD5\u4E1A\u5178\u793C\u7684\u65F6\u5019\u4F1A\u653E\u98DE\uFF0C\u5F88\u597D\u770B\u3002")])]),c("div",{style:{width:"40%"}},[c("img",{src:Px,class:"w-70 mx-auto"})])],-1),Cx={__name:"37",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Mx]),_:1},16))}},Tx="/slides/iharbour-creatures/assets/\u9EBB\u96C01.383616dd.jpg",Ax=c("div",{style:{display:"flex"}},[c("div",{style:{width:"60%"}},[c("h1",null,"\u9EBB\u96C0"),c("p",null,"\u5FB7\u534E2022.6.26 C\u98DF\u5802\u4E8C\u697C\uFF0C\u4F24\u4E0D\u8D772022.6.25 \u7F51\u7403\u573A\u5916"),c("img",{src:Tx,class:"w-100 mx-auto"}),c("p",null,"\u9EBB\u96C0\uFF08Passer\uFF09\uFF1A\u662F\u96C0\u79D1\u9EBB\u96C0\u5C5E27\u79CD\u5C0F\u578B\u9E1F\u7C7B\u7684\u7EDF\u79F0\u3002\u5B83\u4EEC\u7684\u5927\u5C0F\u3001\u4F53\u8272\u751A\u76F8\u8FD1\u3002\u4E00\u822C\u4E0A\u4F53\u5448\u68D5\u3001\u9ED1\u8272\u7684\u6591\u6742\u72B6\uFF0C\u56E0\u800C\u4FD7\u79F0\u9EBB\u96C0\u3002"),c("p",null,[c("em",null,"\u9EBB\u96C0\u968F\u5904\u53EF\u89C1\uFF0C\u4F46\u662F\u8FD9\u4E9B\u5BB6\u4F19\u592A\u7CBE\u4E86\uFF0C\u6BCF\u6B21\u8981\u62CD\u7167\u5B83\u4EEC\u5C31\u8DD1\u4E86\u3002")])]),c("div",{style:{width:"40%"}},[c("img",{src:Fd,class:"w-100 mx-auto"})])],-1),Lx={__name:"38",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Ax]),_:1},16))}},Rx=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("h1",null,"\u8759\u8760"),c("p",null,"\u4F24\u4E0D\u8D77\u62CD\u6444\u4E8E2022\u5E747\u670811\u65E5C\u533A\u5BBF\u820D\u5185"),c("p",null,"\u8759\u8760\u{1F987}\uFF08\u5B66\u540D\uFF1AChiroptera\uFF09\u662F\u810A\u7D22\u52A8\u7269\u95E8\u3001\u54FA\u4E73\u7EB2\u4E0B\u7684\u4E00\u7C7B\u52A8\u7269\uFF0C\u662F\u552F\u4E00\u80FD\u591F\u771F\u6B63\u98DE\u7FD4\u7684\u54FA\u4E73\u52A8\u7269\uFF1B\u9664\u4E00\u822C\u54FA\u4E73\u52A8\u7269\u7684\u7279\u70B9\u5916\uFF0C\u8FD8\u6709\u4E00\u7CFB\u5217\u9002\u5E94\u98DE\u884C\u7684\u5F62\u6001\u7279\u5F81 \u3002\u6700\u5C0F\u7684\u662F\u6DF7\u5408\u8760\uFF0C\u4F53\u91CD\u4EC5\u67091.9\u514B\uFF0C\u7FFC\u5C5516\u5398\u7C73\uFF1B\u4E00\u4E9B\u72D0\u8760\u7684\u4F53\u91CD\u53EF\u4EE5\u8D85\u8FC71.3\u5343\u514B\uFF0C\u7FFC\u5C55\u53EF\u8FBE1.7\u7C73\u3002\u8759\u8760\u5168\u8EAB\u9AA8\u8D28\u8F7B\uFF0C\u5934\u9AA8\u6108\u5408\u7A0B\u5EA6\u8F83\u9AD8\uFF0C\u80A9\u5E26\u53D1\u8FBE\uFF0C\u80F8\u9AA8\u5177\u9F99\u9AA8\u72B6\u7A81\u8D77\u3002\u540E\u80A2\u80EB\u9AA8\u3001\u8153\u9AA8\u9000\u5316\u3002\u8033\u58F3\u53D1\u8FBE\uFF0C\u5E38\u5177\u53D1\u8FBE\u7684\u8033\u5C4F\u6216\u5BF9\u8033\u5C4F\u3002\u7FFC\u819C\u3001\u8033\u3001\u5507\u7B49\u5904\u6709\u4E30\u5BCC\u7684\u611F\u89C9\u6BDB\u3002\u989C\u8272\u591A\u6837\uFF0C\u5927\u591A\u662F\u8910\u8272\u3001\u7070\u8272\u548C\u9ED1\u8272\u3002"),c("p",null,[c("em",null,"\u521B\u65B0\u6E2F\u7684\u8759\u8760\u5176\u5B9E\u5F88\u591A\uFF0C\u4E0B\u96E8\u524D\u7A7A\u6C14\u6E7F\u5EA6\u5927\u866B\u5B50\u4F4E\u98DE\u5B83\u4EEC\u5C31\u66F4\u591A\u4E86\u3002\u5E73\u65F6\u665A\u4E0A\u64CD\u573A\u5927\u706F\u65C1\u8FB9\u98DE\u821E\u7684\u90FD\u662F\u8759\u8760\uFF0C\u597D\u591A\u65F6\u5019\u5927\u5BB6\u90FD\u6CA1\u6709\u6CE8\u610F\u3002")])]),c("div",null,[c("img",{src:Dd,class:"w-90 mx-auto"})])],-1),Ix={__name:"39",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Rx]),_:1},16))}},Fx="/slides/iharbour-creatures/assets/\u87FE\u870D2.684cd92d.jpg",Nx=c("h1",null,"\u87FE\u870D",-1),Dx=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670824\u65E5\u64CD\u573A\u5357\u4FA7------------------------2022\u5E747\u670812\u65E5\u64CD\u573A\u5317\u4FA7-----------------------------",-1),Hx=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Ld,class:"w-125 mx-auto"})]),c("div",null,[c("img",{src:Fx,class:"w-100 mx-auto"})])],-1),Bx=c("p",null,"\u87FE\u870D\uFF0C\u4E5F\u53EB\u86E4\u87C6\u3002\u4E24\u6816\u52A8\u7269\uFF0C\u4F53\u8868\u6709\u8BB8\u591A\u7599\u7629\uFF0C\u5185\u6709\u6BD2\u817A\uFF0C\u4FD7\u79F0\u765E\u86E4\u87C6\u3001\u765E\u7334\u5B50\u3001\u765E\u523A\u3001\u765E\u7599\u5B9D\u3002",-1),Vx=c("p",null,[c("em",null,"\u603B\u5728\u64CD\u573A\u542C\u89C1\u86E4\u87C6\u53EB\uFF0C\u8FD9\u5929\u8DD1\u6B65\u65F6\u5019\u770B\u89C1\u6709\u4EBA\u56F4\u7740\u62CD\uFF0C\u603B\u7B97\u8BA9\u6211\u902E\u5230\u4E86\u3002")],-1),zx={__name:"40",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Nx,Dx,Hx,Bx,Vx]),_:1},16))}},Wx="/slides/iharbour-creatures/assets/\u86C72.dda62b15.jpg",Ux=c("h1",null,"\u86C7",-1),Kx=c("p",null,"iT\u3002iT\u62CD\u6444\u4E8E2022\u5E7407\u670818\u65E5\uFF0C\u56DB\u53F7\u697C1\u697C\u3002",-1),qx=c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("p",null,"\u77ED\u5C3E\u876E\u{1F40D}\uFF08\u5B66\u540D\uFF1AGloydius brevicaudus\uFF09\u53C8\u79F0\u8349\u4E0A\u98DE\u3001\u5730\u6241\u86C7\uFF0C\u5267\u6BD2\u3002\u4F53\u8F83\u77ED\u7C97\uFF0C\u5934\u7565\u5448\u4E09\u89D2\u5F62\uFF0C\u4E0E\u9888\u533A\u5206\u660E\u663E\uFF0C\u543B\u68F1\u660E\u663E\uFF0C\u5C3E\u77ED\uFF0C\u5177\u7BA1\u7259\uFF1B\u6709\u988A\u7A9D\u3002\u5934\u80CC\u6DF1\u68D5\u8272\uFF0C\u4F53\u8179\u9762\u7070\u767D\u8272\uFF0C\u5C3E\u5C16\u68D5\u9ED1\u8272\u3002\u4E2D\u56FD\u56FD\u5185\u5206\u5E03\u4E8E\u5317\u4EAC\u3001\u5929\u6D25\u3001\u6CB3\u5317\u3001\u8FBD\u5B81\u3001\u4E0A\u6D77\u3001\u6C5F\u82CF\u3001\u6D59\u6C5F\u3001\u5B89\u5FBD\u3001\u798F\u5EFA\u3001\u6C5F\u897F\u3001\u6E56\u5317\u3001\u6E56\u5357\u3001\u56DB\u5DDD\u3001\u8D35\u5DDE\u3001\u9655\u897F\u3001\u7518\u8083\u3001\u5E7F\u4E1C\uFF08\u5357\u6FB3\uFF09\u3002"),c("p",null,[c("em",null,[Ft("\u521B\u65B0\u6E2F\u8FD8\u6709\u8FD9\u79CD\u4E1C\u897F\u7740\u5B9E\u628A\u6211\u5413\u4E86\u4E00\u8DF3\uFF0C\u8001\u5144\u4E0A"),c("a",{href:"https://tieba.baidu.com/p/7930370200?pid=144788736187&cid=0#144788736187",target:"_blank",rel:"noopener"},"\u86C7\u5427"),Ft("\u8BF7\u6559\u4E86\u786E\u5B9E\u662F\u6BD2\u86C7\uFF0C\u5E73\u65F6\u8981\u6CE8\u610F\u4E00\u4E0B\u4E86\u3002")])])]),c("div",null,[c("img",{src:Id,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:Wx,class:"w-70 mx-auto"})])],-1),Yx={__name:"41",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Ux,Kx,qx]),_:1},16))}},Zx=c("br",null,null,-1),Gx=c("br",null,null,-1),Xx=c("div",{style:{color:"#FF0000","font-size":"90px"}}," Warning\uFF01\uFF01\uFF01 ",-1),Qx=c("p",null,[c("br"),c("br")],-1),Jx=c("div",{style:{"font-size":"50px",color:"#2B90B6"}}," \u4EE5\u4E0B\u5185\u5BB9\u53EF\u80FD\u4F1A\u9020\u6210\u4E0D\u9002\uFF0C\u8BF7\u8C28\u614E\u89C2\u770B ",-1),e$={__name:"42",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[Zx,Gx,Xx,Qx,Jx]),_:1},16))}},Hd="/slides/iharbour-creatures/assets/\u879F\u86FE\u79D11.460cd948.jpg",t$="/slides/iharbour-creatures/assets/\u62DF\u6B65\u7532\u79D11.e526cadb.jpg",Bd="/slides/iharbour-creatures/assets/\u5C0F\u5730\u8001\u864E1.7ebe24bf.jpg",Vd="/slides/iharbour-creatures/assets/\u7126\u6591\u8273\u9752\u5C3A\u86FE1.b3ce37e8.jpg",zd="/slides/iharbour-creatures/assets/\u4E1C\u4E9A\u98DE\u87571.01ffc7f5.jpg",Wd="/slides/iharbour-creatures/assets/\u8717\u725B1.853cc9ed.jpg",Ud="/slides/iharbour-creatures/assets/\u87CB\u87C01.c7a31dc8.jpg",Kd="/slides/iharbour-creatures/assets/\u4E3D\u91D1\u9F9F1.22fb045d.jpg";const tl=e=>(rs("data-v-2c138599"),e=e(),is(),e),n$=tl(()=>c("h1",null,"\u52A8\u7269\u2014\u2014\u5C0F\u578B\u52A8\u7269",-1)),s$=tl(()=>c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Hd,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:t$,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:Bd,class:"w-60 mx-auto"})])],-1)),r$=tl(()=>c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",{class:"grid grid-rows-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Vd,class:"h-30 mx-auto"})]),c("div",null,[c("img",{src:zd,class:"h-30 mx-auto"})])]),c("div",null,[c("img",{src:Wd,class:"w-100 mx-auto"})]),c("div",null,[c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Ud,class:"w-50 mx-auto"})]),c("div",null,[c("img",{src:Kd,class:"w-50 mx-auto"})])])])],-1)),i$={__name:"43",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[n$,s$,r$]),_:1},16))}},o$=un(i$,[["__scopeId","data-v-2c138599"]]),l$="/slides/iharbour-creatures/assets/\u7070\u87761.7ab6126e.jpg",a$=c("h1",null,"\u7070\u8776",-1),c$=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876\u3002",-1),u$=c("img",{src:l$,class:"w-125 mx-auto"},null,-1),d$=c("p",null,"\u7070\u8776 gossamer-winged butterfly \uFF0C\u9CDE\u7FC5\u76EE(Lepidoptera)\u7070\u8776\u79D1(Lycaenidae)\u7684\u6606\u866B\u3002",-1),f$={__name:"44",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[a$,c$,u$,d$]),_:1},16))}},p$=c("h1",null,"\u7126\u6591\u8273\u9752\u5C3A\u86FE",-1),m$=c("p",null,"Why\u62CD\u6444\u4E8E2021\u5E749\u67086\u65E5B\u533Ab03\u697C\u3002",-1),h$=c("img",{src:Vd,class:"w-160 mx-auto"},null,-1),g$=c("p",null,"\u7126\u6591\u8273\u9752\u5C3A\u86FE(Agathia curvifiniens Prout)\uFF0C\u5C3A\u86FE\u79D1\u8273\u9752\u5C3A\u86FE\u5C5E\u7684\u4E00\u4E2A\u7269\u79CD\u3002\u524D\u7FC5\u957F22mm\u3002\u5934\u9876\u53CA\u80F8\u90E8\u7C89\u9752\u8272\uFF0C\u8179\u90E8\u524D\u90E8\u7C89\u9752\uFF0C\u540E\u90E8\u7070\u7C89\u8272\uFF1B\u524D\u7FC5\u5916\u7EBF\u4E0B\u90E8\u4E00\u5927\u6591\uFF1B\u540E\u7FC5\u5916\u6709\u4E8C\u7A81\u8D77\uFF0C \u540E\u89D2\u4E0A\u4E00\u6D45\u6591\u6709\u788E\u7EB9\u3002\u7FC5\u53CD\u9762\u8272\u8F83\u6DE1\uFF0C\u6591\u7EB9\u8F83\u6DE1\u800C\u95F4\u65AD\u3002",-1),_$={__name:"45",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[p$,m$,h$,g$]),_:1},16))}},v$=c("h1",null,"\u879F\u86FE\u79D1",-1),b$=c("p",null,"Why\u62CD\u6444\u4E8E2021\u5E749\u67082\u65E5B\u533Ab03\u697C\u3002",-1),y$=c("img",{src:Hd,class:"w-160 mx-auto"},null,-1),w$=c("p",null,"\u879F\u86FE\u79D1(Pyralidae) \u4E3A\u9CDE\u7FC5\u76EE\uFF08Lepidoptera\uFF09\u4E2D\u7684\u4E00\u4E2A\u5927\u79D1\uFF0C\u5168\u4E16\u754C\u5DF2\u8BB0\u8F7D\u7EA61\u4E07\u79CD\uFF0C\u4E2D\u56FD\u5DF2\u77E5l000\u4F59\u79CD\uFF0C\u8BB8\u591A\u79CD\u7C7B\u4E3A\u519C\u4E1A\u4E0A\u7684\u91CD\u8981\u5BB3\u866B\u3002",-1),x$={__name:"46",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[v$,b$,y$,w$]),_:1},16))}},$$=c("h1",null,"\u5C0F\u5730\u8001\u864E",-1),E$=c("p",null,"Why\u62CD\u6444\u4E8E2021\u5E749\u670820\u65E5\uFF0C\u6CD3\u7406\u697C\u4E8C\u697C\u3002",-1),S$=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("br"),c("p",null,"\u5C0F\u5730\u8001\u864E(Agrotis ypsilon),\u53C8\u540D\u571F\u8695\uFF0C\u5207\u6839\u866B\u3002"),c("br"),c("p",null,"\u7ECF\u5386\u5375\uFF0C\u5E7C\u866B\uFF0C\u86F9\uFF0C\u6210\u866B\u3002\u5E74\u53D1\u751F\u4EE3\u6570\u968F\u5404\u5730\u6C14\u5019\u4E0D\u540C\u800C\u5F02\uFF0C\u6108\u5F80\u5357\u5E74\u53D1\u751F\u4EE3\u6570\u6108\u591A\uFF0C\u4EE5\u96E8\u91CF\u5145\u6C9B\u3001\u6C14\u5019\u6E7F\u6DA6\u7684\u957F\u6C5F\u4E2D\u4E0B\u6E38\u548C\u4E1C\u5357\u6CBF\u6D77\u53CA\u5317\u65B9\u7684\u4F4E\u6D3C\u5185\u6D9D\u6216\u704C\u533A\u53D1\u751F\u6BD4\u8F83\u4E25\u91CD\uFF1B\u5728\u957F\u6C5F\u4EE5\u5357\u4EE5\u86F9\u53CA\u5E7C\u866B\u8D8A\u51AC\uFF0C\u9002\u5B9C\u751F\u5B58\u6E29\u5EA6\u4E3A 15 \u2103\uFF5E25 \u2103 \u3002\u5BF9\u519C\u3001\u6797\u6728\u5E7C\u82D7\u5371\u5BB3\u5F88\u5927\uFF0C\u8F7B\u5219\u9020\u6210\u7F3A\u82D7\u65AD\u5784\uFF0C\u91CD\u5219\u6BC1\u79CD\u91CD\u64AD\u3002")]),c("div",null,[c("img",{src:Bd,class:"w-120 mx-auto"})])],-1),O$={__name:"47",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[$$,E$,S$]),_:1},16))}},k$="/slides/iharbour-creatures/assets/\u6591\u8863\u8721\u87491.9ac24a08.jpg",j$=c("h1",null,"\u6591\u8863\u8721\u8749",-1),P$=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670830\u65E5C\u9053\u79D1\u5E7F\u573A\u5916\u3002",-1),M$=c("img",{src:k$,class:"w-120 mx-auto"},null,-1),C$=c("p",null,"\u6591\u8863\u8721\u8749\uFF08Lycorma delicatula\uFF09\u662F\u540C\u7FC5\u76EE\u8721\u8749\u79D1\u7684\u6606\u866B\uFF0C\u6C11\u95F4\u4FD7\u79F0\u201C\u82B1\u59D1\u5A18\u201D\u3001\u201C\u693F\u8E66\u201D\u3001\u201C\u82B1\u8E66\u8E66\u201D\u3001\u201C\u7070\u82B1\u86FE\u201D\u7B49\u3002",-1),T$={__name:"48",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[j$,P$,M$,C$]),_:1},16))}},A$="/slides/iharbour-creatures/assets/\u871C\u87021.ba5d98c7.jpg",L$=c("h1",null,"\u871C\u8702",-1),R$=c("p",null,"\u4F24\u4E0D\u8D77\u62CD\u6444\u4E8E2022\u5E74 \u5177\u4F53\u65F6\u95F4\u672A\u77E5\uFF0C\u5730\u70B9\u672A\u77E5\uFF08\u5927\u6982\u5728\u64CD\u573A\u65C1\u8FB9\uFF09",-1),I$=c("img",{src:A$,class:"w-120 mx-auto"},null,-1),F$=c("p",null,"\u4E2D\u534E\u871C\u8702\u{1F41D}\u8EAF\u4F53\u8F83\u5C0F\uFF0C\u5934\u80F8\u90E8\u5448\u9ED1\u8272\uFF0C\u8702\u4F53\u957F11mm\u5DE6\u53F3\uFF0C\u5599\u957F5mm\u5DE6\u53F3\uFF0C\u8179\u8282\u80CC\u677F\u5448\u9ED1\u8272\u9EC4\u8272\u73AF\u3002",-1),N$={__name:"49",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[L$,R$,I$,F$]),_:1},16))}},D$="/slides/iharbour-creatures/assets/\u4E2D\u534E\u9732\u87BD1.7c2a2840.jpg",H$=c("h1",null,"\u4E2D\u534E\u9732\u87BD",-1),B$=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670815\u65E5\u56DB\u53F7\u5DE8\u6784\u697C\u5185\u3002",-1),V$=c("img",{src:D$,class:"w-125 mx-auto"},null,-1),z$=c("p",null,"\u4E2D\u534E\u9732\u87BD\uFF08 Phaneroptera sinensis Uvarov)\u5C5E\u6606\u866B\u7EB2\u76F4\u7FC5\u76EE\uFF0C\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u6606\u866B\u3002",-1),W$={__name:"50",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[H$,B$,V$,z$]),_:1},16))}},U$=c("h1",null,"\u4E1C\u4E9A\u98DE\u8757",-1),K$=c("p",null,"Why\u62CD\u6444\u4E8E2021\u5E748\u670830\u65E5\u56DB\u53F7\u5DE8\u67842\u697C\u3002",-1),q$=c("img",{src:zd,class:"w-180 mx-auto"},null,-1),Y$=c("p",null,"\u4E1C\u4E9A\u98DE\u8757\uFF08Locusta migratoria manilensis\uFF09\u662F\u98DE\u8757\u79D1\u3001\u98DE\u8757\u5C5E\u6606\u866B\u98DE\u8757\u4E0B\u7684\u4E00\u4E2A\u4E9A\u79CD\u3002\u4F53\u5927\u578B\uFF0C\u7EFF\u8272\u6216\u9EC4\u8910\u8272\uFF0C\u5300\u79F0\u3002\u4E1C\u4E9A\u98DE\u8757\u4E3B\u8981\u5206\u5E03\u5728\u4E2D\u56FD\u4E1C\u90E8\uFF0C\u9EC4\u6DEE\u6D77\u5E73\u539F\u662F\u4E3B\u8981\u53D1\u751F\u548C\u5371\u5BB3\u533A\u57DF\u3002",-1),Z$={__name:"51",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[U$,K$,q$,Y$]),_:1},16))}},G$="/slides/iharbour-creatures/assets/\u87CB\u87C02.3d9b4b0b.jpg",X$=c("h1",null,"\u87CB\u87C0",-1),Q$=c("p",null,"Why\u62CD\u6444\u4E8E2021\u5E748\u670821\u65E5B\u533Ab11\u697C\u3002",-1),J$=c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("p",null,"\u87CB\u87C0\uFF08Gryllulus\uFF09\u65E0\u810A\u690E\u52A8\u7269\uFF0C\u6606\u866B\u7EB2\uFF0C\u76F4\u7FC5\u76EE\uFF0C\u87CB\u87C0\u603B\u79D1\u3002\u4EA6\u79F0\u4FC3\u7EC7\uFF0C\u4FD7\u540D\u86D0\u86D0\u3001\u591C\u9E23\u866B\uFF08\u56E0\u4E3A\u5B83\u5728\u591C\u665A\u9E23\u53EB\uFF09\u3001\u5C06\u519B\u866B\u3002\u87CB\u87C0\u662F\u4E00\u79CD\u53E4\u8001\u7684\u6606\u866B\uFF0C\u81F3\u5C11\u5DF2\u67091.4\u4EBF\u5E74\u7684\u5386\u53F2\uFF0C\u8FD8\u662F\u5728\u53E4\u4EE3\u548C\u73B0\u4EE3\u73A9\u6597\u7684\u5BF9\u8C61\u3002"),c("p",null,"\u5168\u4E16\u754C\u5DF2\u77E5 22 \u4E9A\u79D155 \u65CF 595 \u5C5E\uFF08\u5305\u62EC 17 \u4E2A\u5316\u77F3\u5C5E\uFF09\uFF0C\u7EA6 4649 \u79CD\uFF08\u4E9A\u79CD\uFF09\uFF08\u5305\u62EC 50 \u4E2A\u5316\u77F3\u79CD\uFF09\u3002\u8BE5\u79D1\u6606\u866B\u4F53\u957F\u5927\u4E8E 3cm\uFF0C\u7F3A\u5C11\u9CDE\u7247\uFF1B\u89E6\u89D2\u4E1D\u72B6\uFF0C\u957F\u4E8E\u8EAB\u4F53\uFF1B\u8DD7\u8282 3 \u8282\uFF0C\u524D\u8DB3\u4E3A\u6B65\u884C\u8DB3\uFF0C\u80EB\u8282\u5E38\u5177\u9F13\u819C\u542C\u5668\uFF0C\u540E\u8DB3\u4E3A\u8DF3\u8DC3\u8DB3\uFF1B\u591A\u6570\u79CD\u7C7B\u96C4\u866B\u524D\u7FC5\u5177\u53D1\u58F0\u7ED3\u6784\uFF1B\u96CC\u6027\u4EA7\u5375\u74E3\u53D1\u8FBE\uFF0C\u5448\u5200\u72B6\u3001\u77DB\u72B6\u6216\u957F\u677F\u72B6\u3002")]),c("div",null,[c("img",{src:Ud,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:G$,class:"w-70 mx-auto"})])],-1),e5={__name:"52",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[X$,Q$,J$]),_:1},16))}},t5="/slides/iharbour-creatures/assets/\u87D1\u87821.0873ae4d.jpg",n5=c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("h1",null,"\u87D1\u8782"),c("p",null,"Why\u62CD\u6444\u4E8E2021\u5E749\u67081\u65E5b11\u697C\u3002"),c("p",null,"\u87D1\u8782\uFF0C \u5C5E\u4E8E\u8282\u80A2\u52A8\u7269\u95E8\u3001\u6606\u866B\u7EB2\u3001\u871A\u880A\u76EE\uFF08Blattaria\uFF09\uFF0C\u4FD7\u79F0\u87D1\u8782\uFF0C\u662F\u5E38\u89C1\u7684\u533B\u5B66\u6606\u866B\u3002\u87D1\u8782\u4F53\u6241\u5E73\uFF0C\u9ED1\u8910\u8272\uFF0C\u901A\u5E38\u4E2D\u7B49\u5927\u5C0F\u3002\u5934\u5C0F\uFF0C\u80FD\u6D3B\u52A8\u3002"),c("h1",null,"\u87B3\u8782"),c("p",null,"Why2021\u5E748\u670825\u65E5\uFF0C\u6DB5\u82F1\u697C\u897F\u3002"),c("p",null,"\u87B3\u8782\u76EE\uFF08Mantodea\uFF09\u7684\u6606\u866B\u7EDF\u79F0\u87B3\u8782\u3002\u87B3\u8782\u5C5E\u8089\u98DF\u6027\u6606\u866B\uFF0C\u6210\u866B\u4E0E\u5E7C\u866B\u5747\u4E3A\u6355\u98DF\u6027\uFF0C\u4EE5\u5176\u4ED6\u6606\u866B\u53CA\u5C0F\u52A8\u7269\u4E3A\u98DF\uFF0C\u662F\u8457\u540D\u7684\u519C\u6797\u4E1A\u76CA\u866B\u3002\u87B3\u8782\u4EA7\u7684\u5375\u6709\u5375\u9798\u5305\u56F4\uFF0C\u5375\u9798\u79F0\u87B5\u86F8\u3002\u4E16\u754C\u5DF2\u77E52200\u591A\u79CD\uFF0C\u4E2D\u56FD\u5DF2\u8BB0\u8F7D8\u79D119\u4E9A\u79D147\u5C5E112\u79CD\uFF0C\u5E7F\u6CDB\u5206\u5E03\u4E8E\u70ED\u5E26\u3001\u4E9A\u70ED\u5E26\u548C\u6E29\u5E26\u7684\u5927\u90E8\u5206\u5730\u533A\u3002")]),c("div",null,[c("img",{src:t5,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:vd,class:"w-70 mx-auto"})])],-1),s5={__name:"53",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[n5]),_:1},16))}},r5="/slides/iharbour-creatures/assets/\u74E2\u866B1.73cb2c20.jpg",i5=c("h1",null,"\u74E2\u866B",-1),o5=c("p",null,"\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670818\u65E5B11\u5BBF\u820D\u5185\u3002",-1),l5=c("img",{src:r5,class:"w-125 mx-auto"},null,-1),a5=c("p",null,"\u74E2\u866B\u{1F41E}\u4E3A\u9798\u7FC5\u76EE\u74E2\u866B\u79D1\uFF08\u5B66\u540D\uFF1ACoccinellidae\uFF09\u901A\u79F0\uFF0C\u662F\u4F53\u8272\u9C9C\u8273\u7684\u5C0F\u578B\u6606\u866B\uFF0C\u5E38\u5177\u7EA2\u3001\u9ED1\u6216\u9EC4\u8272\u6591\u70B9\u3002",-1),c5={__name:"54",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[i5,o5,l5,a5]),_:1},16))}},u5="/slides/iharbour-creatures/assets/\u883C\u878B1.acacbfd9.jpg",d5=c("h1",null,"\u883C\u878B",-1),f5=c("p",null,"Why\u62CD\u6444\u4E8E2021\u5E748\u670817\u65E5\uFF0CB\u533Ab11\u67D0\u5BBF\u820D\u5185\u3002",-1),p5=c("img",{src:u5,class:"w-120 mx-auto"},null,-1),m5=c("p",null,"\u883C\u878B[q\xFA s\u014Du](earwig Furficulidae)\u9769\u7FC5\u76EE\uFF0C\u883C\u878B\u79D1\u7EDF\u79F0\u3002\u4F53\u957F4~35mm\uFF0C\u4F53\u72ED\u957F\uFF0C\u7565\u6241\u5E73\uFF0C\u5934\u6241\u5BBD\uFF0C\u89E6\u89D2\u4E1D\u72B6\u3002",-1),h5={__name:"55",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[d5,f5,p5,m5]),_:1},16))}},g5="/slides/iharbour-creatures/assets/\u6697\u9ED1\u9CC3\u91D1\u9F9F1.368b89b7.jpg",_5=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("h1",null,"\u91D1\u9F9F\u5B50"),c("p",null,"\u5FB7\u534E2022.6.21C\u533A\u98DF\u5802\u95E8\u53E3\uFF0C2022.6.22\u56DB\u53F7\u5DE8\u6784\u697C\u5185"),c("img",{src:g5,class:"w-100 mx-auto"}),c("p",null,"\u91D1\u9F9F\u5B50\u662F\u9798\u7FC5\u76EE\u91D1\u9F9F\u603B\u79D1(Scarabaeoidea)\u7684\u901A\u79F0\u3002\u5176\u5E7C\u866B(\u86F4\u87AC)\u662F\u4E3B\u8981\u5730\u4E0B\u5BB3\u866B\u4E4B\u4E00\u3002"),c("p",null,"\u4E0A\u9762\u662F\u6697\u9ED1\u9CC3\u91D1\u9F9F\uFF0C\u53F3\u9762\u662F\u4E3D\u91D1\u9F9F\u3002")]),c("div",null,[c("img",{src:Kd,class:"w-80 mx-auto"})])],-1),v5={__name:"56",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[_5]),_:1},16))}},b5="/slides/iharbour-creatures/assets/\u8718\u86DB1.45a34aac.jpg",y5=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("h1",null,"\u8718\u86DB"),c("p",null,"\u4F24\u4E0D\u8D77\u62CD\u6444\u4E8E2022\u5E745\u67087\u65E5\u64CD\u573A"),c("p",null,"\u8718\u86DB\uFF0C\u8282\u80A2\u52A8\u7269\uFF0C\u4F53\u957F1\uFF5E90\u6BEB\u7C73\uFF0C\u8EAB\u4F53\u5206\u5934\u80F8\u90E8\uFF08\u524D\u4F53\uFF09\u548C\u8179\u90E8\uFF08\u540E\u4F53\uFF09\u4E24\u90E8\u5206\uFF0C\u5934\u80F8\u90E8\u8986\u4EE5\u80CC\u7532\u548C\u80F8\u677F\u3002\u5934\u80F8\u90E8\u6709\u9644\u80A2\u4E24\u5BF9\uFF0C\u7B2C\u4E00\u5BF9\u4E3A\u87AF\u80A2\uFF0C\u6709\u87AF\u7259\u3001\u87AF\u7259\u5C16\u7AEF\u6709\u6BD2\u817A\u5F00\u53E3\uFF1B\u76F4\u816D\u4E9A\u76EE\u7684\u87AF\u80A2\u524D\u540E\u6D3B\u52A8\uFF0C\u94B3\u816D\u4E9A\u76EE\u8005\u4FA7\u5411\u8FD0\u52A8\u53CA\u76F8\u5411\u8FD0\u52A8\uFF1B\u7B2C\u4E8C\u5BF9\u4E3A\u987B\u80A2\uFF0C\u5728\u96CC\u86DB\u548C\u672A\u6210\u719F\u7684\u96C4\u86DB\u5448\u6B65\u8DB3\u72B6\uFF0C\u7528\u4EE5\u5939\u6301\u98DF\u7269\u53CA\u4F5C\u611F\u89C9\u5668\u5B98\uFF1B\u4F46\u5728\u96C4\u6027\u6210\u86DB\u987B\u80A2\u672B\u8282\u81A8\u5927\uFF0C\u53D8\u4E3A\u4F20\u9001\u7CBE\u5B50\u7684\u4EA4\u63A5\u5668\u3002"),c("p",null,"\u7591\u4F3C\u4E2D\u534E\u72FC\u86DB\uFF0C\u5168\u8EAB\u5BC6\u751F\u9ED1\u8272\u3001\u767D\u8272\u53CA\u9EC4\u8272\u7EC6\u6BDB\uFF0C\u5934\u80F8\u90E8\u3001\u80CC\u9762\u68D5\u8910\u8272\uFF0C\u4E2D\u592E\u6709\u4E00\u9EC4\u68D5\u8272\u7EB5\u6591\u3002\u524D\u5BBD\u540E\u7A84\uFF0C\u4E2D\u7A9D\u660E\u663E\uFF0C\u4F53\u957F3\uFF5E4\u5398\u7C73\u3002\u4E3A\u7A74\u5C45\u8718\u86DB\uFF0C\u591A\u5728\u5E73\u539F\u5730\u533A\u7684\u68C9\u82B1\u3001\u5C0F\u9EA6\u3001\u5927\u8C46\u7B49\u4F5C\u7269\u7530\u95F4\u6316\u7A74\u7B51\u5DE2\u3002\u4EA7\u4E8E\u9655\u897F\u3001\u5C71\u4E1C\u3001\u6CB3\u5357\u7B49\u7701\u3002"),c("p",null,[c("em",null,"\u{1F577}\u5728\u521B\u65B0\u6E2F\u8FD8\u662F\u5F88\u591A\u7684\uFF0C\u4E0D\u8FC7\u4E0D\u62DB\u60F9\u4ED6\u4EEC\u4E00\u822C\u6CA1\u4EC0\u4E48\u4E8B\u3002")])]),c("div",null,[c("img",{src:b5,class:"w-90 mx-auto"})])],-1),w5={__name:"57",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[y5]),_:1},16))}},x5="/slides/iharbour-creatures/assets/\u5929\u725B1.68ecde99.jpg",$5=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("h1",null,"\u5929\u725B"),c("p",null,"\u4F24\u4E0D\u8D77\u62CD\u6444\u4E8E2022\u5E745\u670826\u65E5\uFF0C\u5730\u70B9\u672A\u77E5\uFF08\u5927\u6982C\u533A\u65C1\u8FB9\u5C0F\u6797\uFF09"),c("p",null,"\u5929\u725B\u662F\u591A\u98DF\u4E9A\u76EE\u5929\u725B\u79D1\u6606\u866B\u7684\u603B\u79F0\uFF0C\u5480\u56BC\u5F0F\u53E3\u5668\uFF0C\u6709\u5F88\u957F\u7684\u89E6\u89D2\uFF0C\u5E38\u5E38\u8D85\u8FC7\u8EAB\u4F53\u7684\u957F\u5EA6\uFF0C\u5168\u4E16\u754C\u7EA6\u6709\u8D85\u8FC720,000\u79CD\u3002\u6709\u4E00\u4E9B\u79CD\u7C7B\u5C5E\u4E8E\u5BB3\u866B\uFF0C\u5176\u5E7C\u866B\u751F\u6D3B\u4E8E\u6728\u6750\u4E2D\uFF0C\u53EF\u80FD\u5BF9\u6811\u6216\u5EFA\u7B51\u7269\u9020\u6210\u5371\u5BB3\u3002"),c("p",null,"\u5929\u725B\u662F\u690D\u98DF\u6027\u6606\u866B\uFF0C\u4F1A\u5371\u5BB3\u6728\u672C\u690D\u7269\uFF0C\u5927\u90E8\u5206\u677E\u3001\u67CF\u3001\u67F3\u3001\u6986\u3001\u6838\u6843\u3001\u67D1\u6A58\u3001\u82F9\u679C\u3001\u6843\u548C\u8336\u7B49\uFF0C\u4E00\u90E8\u5206\u68C9\u3001\u9EA6\u3001\u7389\u7C73\u3001\u9AD8\u7CB1\u3001\u7518\u8517\u548C\u9EBB\u7B49\uFF0C\u5C11\u6570\u6728\u6750\u3001\u5EFA\u7B51\u3001\u623F\u5C4B\u548C\u5BB6\u5177\u7B49\uFF0C\u662F\u6797\u4E1A\u751F\u4EA7\u3001\u4F5C\u7269\u683D\u57F9\u548C\u5EFA\u7B51\u6728\u6750\u4E0A\u7684\u4E3B\u8981\u5BB3\u866B\u3002")]),c("div",null,[c("img",{src:x5,class:"w-90 mx-auto"})])],-1),E5={__name:"58",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[$5]),_:1},16))}},S5="/slides/iharbour-creatures/assets/\u8717\u725B2.5347023d.jpg",O5=c("h1",null,"\u8717\u725B",-1),k5=c("p",null,"gtx\u62CD\u6444\u4E8E2022\u5E747\u670822\u65E5\u56DB\u53F7\u697C\u9876",-1),j5=c("div",{class:"grid grid-cols-2 gap-0 pt-0 -mb-0"},[c("div",null,[c("img",{src:Wd,class:"w-125 mx-auto"})]),c("div",null,[c("img",{src:S5,class:"w-100 mx-auto"})])],-1),P5=c("p",null,"\u8717\u725B\u662F\u6307\u8179\u8DB3\u7EB2\u7684\u9646\u751F\u6240\u6709\u79CD\u7C7B\u3002\u4E00\u822C\u897F\u65B9\u8BED\u8A00\u4E2D\u4E0D\u533A\u5206\u6C34\u751F\u7684\u87BA\u7C7B\u548C\u9646\u751F\u7684\u8717\u725B\uFF0C\u6C49\u8BED\u4E2D\u8717\u725B\u53EA\u6307\u9646\u751F\u79CD\u7C7B\uFF0C\u800C\u5E7F\u4E49\u7684\u8717\u725B\u8FD8\u5305\u62EC\u5DE8\u76FE\u86DE\u8753\u3002",-1),M5=c("p",null,"\u8717\u725B\u662F\u4E00\u79CD\u5305\u62EC\u8BB8\u591A\u4E0D\u540C\u79D1\u3001\u5C5E\u7684\u52A8\u7269\u3002\u53D6\u98DF\u690D\u7269\uFF0C\u4EA7\u5375\u4E8E\u571F\u4E2D\u6216\u8005\u6811\u4E0A\u3002\u5728\u70ED\u5E26\u5C9B\u5C7F\u6BD4\u8F83\u5E38\u89C1\uFF0C\u4F46\u6709\u7684\u4E5F\u751F\u5B58\u5728\u5BD2\u51B7\u5730\u533A\u3002\u6811\u6816\u79CD\u7C7B\u7684\u8272\u6CFD\u9C9C\u8273\uFF0C\u800C\u5730\u6816\u7684\u901A\u5E38\u51E0\u79CD\u63A5\u8FD1\u7684\u989C\u8272\uFF0C\u4E00\u822C\u6709\u6761\u7EB9\u3002",-1),C5={__name:"59",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[O5,k5,j5,P5,M5]),_:1},16))}},T5="/slides/iharbour-creatures/assets/\u77E5\u4E861.de840ceb.jpg",A5="/slides/iharbour-creatures/assets/\u77E5\u4E862.44361c88.jpg",L5=c("h1",null,"\u8749",-1),R5=c("p",null,"\u670B\u53CB\u5708\u5E08\u59D0\u53D1\u7684\uFF0C\u539F\u4F5C\u8005\u770B\u5230\u53EF\u4EE5\u8054\u7CFB\u6211\u54E6\u3002",-1),I5=c("div",{class:"grid grid-cols-3 gap-0 pt-0 -mb-0"},[c("div",null,[c("p",null,"\u8749\u6709\u4E24\u5BF9\u819C\u7FC5\uFF0C\u5F62\u72B6\u57FA\u672C\u76F8\u540C\uFF0C\u5934\u90E8\u5BBD\u800C\u77ED\uFF0C\u5177\u6709\u660E\u663E\u7A81\u51FA\u7684\u989D\u5507\u57FA\uFF1B\u89C6\u529B\u76F8\u5F53\u826F\u597D\uFF0C\u590D\u773C\u4E0D\u5927\uFF0C\u4F4D\u4E8E\u5934\u90E8\u4E24\u4FA7\u4E14\u5206\u5F97\u5F88\u5F00\uFF0C\u67093\u4E2A\u5355\u773C\u3002\u89E6\u89D2\u77ED\uFF0C\u5448\u521A\u6BDB\u72B6\u3002\u53E3\u5668\u7EC6\u957F\uFF0C\u53E3\u5668\u5185\u6709\u98DF\u7BA1\u4E0E\u553E\u6DB2\u7BA1\uFF0C\u5C5E\u4E8E\u523A\u5438\u5F0F\u3002\u80F8\u90E8\u5219\u5305\u62EC\u524D\u80F8\u3001\u4E2D\u80F8\u53CA\u540E\u80F8\uFF0C\u5176\u4E2D\u524D\u80F8\u548C\u4E2D\u80F8\u8F83\u957F\u30023\u4E2A\u80F8\u90E8\u90FD\u5177\u6709\u4E00\u5BF9\u8DB3\uFF0C\u817F\u8282\u7C97\u58EE\u53D1\u8FBE\uFF08\u82E5\u866B\u524D\u811A\u7528\u6765\u6316\u6398\uFF0C\u817F\u8282\u81A8\u5927\uFF0C\u5E26\u523A\uFF09\u3002\u8749\u7684\u8179\u90E8\u5448\u957F\u9525\u5F62\uFF0C\u603B\u5171\u670910\u4E2A\u8179\u8282\uFF0C\u7B2C9\u8179\u8282\u6210\u4E3A\u5C3E\u8282\u3002\u96C4\u8749\u7B2C1\u3001\u7B2C2\u8179\u8282\u5177\u53D1\u97F3\u5668\uFF0C\u7B2C10\u8179\u8282\u5F62\u6210\u809B\u95E8\uFF1B\u96CC\u8749\u7B2C10\u8179\u8282\u5F62\u6210\u4EA7\u5375\u7BA1\uFF0C\u4E14\u8F83\u4E3A\u81A8\u5927\u3002\u5E7C\u866B\u751F\u6D3B\u5728\u571F\u4E2D\uFF0C\u672B\u9F84\u5E7C\u866B\u591A\u4E3A\u68D5\u8272\uFF0C\u4E0E\u6210\u866B\u76F8\u4F3C\u3002")]),c("div",null,[c("img",{src:T5,class:"w-70 mx-auto"})]),c("div",null,[c("img",{src:A5,class:"w-70 mx-auto"})])],-1),F5={__name:"60",setup(e){const t={};return C(R),(n,s)=>(y(),A(X,Y(q(t)),{default:V(()=>[L5,R5,I5]),_:1},16))}},N5=c("h1",null,"\u8C22\u8C22\u5927\u5BB6\uFF01",-1),D5=c("p",null,"\u4E1A\u4F59\u6574\u7406\u96BE\u514D\u51FA\u9519\uFF0C\u656C\u8BF7\u5404\u4F4D\u5927\u4F6C\u6279\u8BC4\u6307\u6B63\uFF0C\u6709\u95EE\u9898\u6216\u6295\u7A3F\u4E5F\u53EF\u4EE5\u76F4\u63A5\u63D0PR",-1),H5=c("p",null,"\u2014\u2014little tiger \u5C0F\u534E\u534E 2022.10.01",-1),B5=c("p",null,[c("a",{href:"https://github.com/Renzehua1998/iharbour-creatures",target:"_blank",rel:"noopener"},"\u70B9\u6B64\u52A0\u5165\u9879\u76EE")],-1),V5={class:"abs-br m-6 flex gap-2"},z5={href:"https://github.com/Renzehua1998",target:"_blank",alt:"GitHub",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},W5={href:"https://renzehua.gitee.io/",target:"_blank",alt:"Page",class:"text-xl icon-btn opacity-50 !border-none !hover:text-white"},U5={__name:"61",setup(e){const t={layout:"cover",background:"/\u690D\u7269/\u5C71\u68431.jpg",class:"text-center"};return C(R),(n,s)=>{const r=gd,i=hd;return y(),A(_d,Y(q(t)),{default:V(()=>[N5,D5,H5,B5,c("div",V5,[c("a",z5,[Q(r)]),c("a",W5,[Q(i)])])]),_:1},16)}}},K5=[{path:"1",name:"page-1",component:q2,meta:{theme:"seriph",background:"./\u690D\u7269/\u7EA2\u67AB1.jpg",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",title:"\u65B0\u6E2F\u751F\u7269\u56FE\u9274",slide:{raw:`---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: ./\u690D\u7269/\u7EA2\u67AB1.jpg
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
css: unocss
---

# \u65B0\u6E2F\u751F\u7269\u56FE\u9274

\u4EA4\u5927\u521B\u65B0\u6E2F\u751F\u7269\u63A0\u5F71\u2014\u2014\u6301\u7EED\u66F4\u65B0\u4E2D

[\u70B9\u6B64\u52A0\u5165\u9879\u76EE](https://github.com/Renzehua1998/iharbour-creatures)

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    little tiger \u5C0F\u534E\u534E 2022.10.01 <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/Renzehua1998" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="https://renzehua.gitee.io/" target="_blank" alt="Page"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <mdi-account-circle />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->
`,title:"\u65B0\u6E2F\u751F\u7269\u56FE\u9274",level:1,content:`# \u65B0\u6E2F\u751F\u7269\u56FE\u9274

\u4EA4\u5927\u521B\u65B0\u6E2F\u751F\u7269\u63A0\u5F71\u2014\u2014\u6301\u7EED\u66F4\u65B0\u4E2D

[\u70B9\u6B64\u52A0\u5165\u9879\u76EE](https://github.com/Renzehua1998/iharbour-creatures)

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    little tiger \u5C0F\u534E\u534E 2022.10.01 <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/Renzehua1998" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="https://renzehua.gitee.io/" target="_blank" alt="Page"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <mdi-account-circle />
  </a>
</div>`,frontmatter:{theme:"seriph",background:"./\u690D\u7269/\u7EA2\u67AB1.jpg",class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},css:"unocss",title:"\u65B0\u6E2F\u751F\u7269\u56FE\u9274"},note:"The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)",index:0,start:0,end:52,notesHTML:`<p>The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. <a href="https://sli.dev/guide/syntax.html#notes" target="_blank" rel="noopener">Read more in the docs</a></p>
`,filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Q2,meta:{slide:{raw:`
<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

# \u76EE\u5F55

<br/>

## \u4E00\u3001\u690D\u7269

<br/>

1. \u53F6\u5B50
2. \u82B1\u6735
3. \u679C\u5B9E 

<br/>

## \u4E8C\u3001\u52A8\u7269

<br/>

1. \u5927\u578B\u52A8\u7269
2. \u5C0F\u578B\u52A8\u7269

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u87B3\u8782\u76EE1.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u7EA2\u5634\u84DD\u9E4A2.jpg" class="w-70 mx-auto"/>

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"\u76EE\u5F55",level:1,content:`<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

# \u76EE\u5F55

<br/>

## \u4E00\u3001\u690D\u7269

<br/>

1. \u53F6\u5B50
2. \u82B1\u6735
3. \u679C\u5B9E 

<br/>

## \u4E8C\u3001\u52A8\u7269

<br/>

1. \u5927\u578B\u52A8\u7269
2. \u5C0F\u578B\u52A8\u7269

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u87B3\u8782\u76EE1.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u7EA2\u5634\u84DD\u9E4A2.jpg" class="w-70 mx-auto"/>

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{},index:1,start:53,end:107,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:sb,meta:{slide:{raw:`
# \u690D\u7269\u2014\u2014\u53F6\u5B50

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u7EA2\u67AB1.jpg" class="w-90 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u94F6\u674F1.jpg" class="w-90 mx-auto"/>

</div>

</div>

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u9E21\u722A\u69ED1.jpg" class="w-80 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u9E21\u722A\u69ED2.jpg" class="w-80 mx-auto"/>

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"\u690D\u7269\u2014\u2014\u53F6\u5B50",level:1,content:`# \u690D\u7269\u2014\u2014\u53F6\u5B50

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u7EA2\u67AB1.jpg" class="w-90 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u94F6\u674F1.jpg" class="w-90 mx-auto"/>

</div>

</div>

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u9E21\u722A\u69ED1.jpg" class="w-80 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u9E21\u722A\u69ED2.jpg" class="w-80 mx-auto"/>

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{},index:2,start:108,end:155,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:ib,meta:{slide:{raw:`
<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u9E21\u722A\u69ED

*\u5B66\u6821\u4E1C\u897F\u7EA2\u67AB\u8DEF\u79CD\u4E86\u5F88\u591A\u7EA2\u67AB\u6811\uFF0C\u5230\u4E86\u79CB\u5929\u7279\u522B\u597D\u770B\u3002\u7EA2\u67AB\u662F\u9E21\u722A\u69ED\u7684\u4E00\u4E2A\u54C1\u79CD*

\u5FB7\u534E\u62CD\u6444\u4E8E2022.7.6 3\u53F7\u697C\u897F\u4FA7\u548C7.14B\u5357\u533A\u83DC\u9E1F\u9A7F\u7AD9\u3002

\u9E21\u722A\u69ED\uFF08\u5B66\u540D\uFF1AAcer palmatum Thunb.\uFF09\u662F\u69ED\u6811\u79D1\uFF0C\u69ED\u5C5E\u843D\u53F6\u5C0F\u4E54\u6728\uFF1B\u6811\u51A0\u4F1E\u5F62\u3002\u6811\u76AE\u5E73\u6ED1\u3002\u6811\u76AE\u6DF1\u7070\u8272\u3002\u5C0F\u679D\u7D2B\u6216\u6DE1\u7D2B\u7EFF\u8272,\u8001\u679D\u6DE1\u7070\u7D2B\u8272\u3002\u53F6\u8FD1\u5706\u5F62\uFF0C\u57FA\u90E8\u5FC3\u5F62\u6216\u8FD1\u5FC3\u5F62\uFF0C\u638C\u72B6\uFF0C\u5E387\u6DF1\u88C2\uFF0C\u5BC6\u751F\u5C16\u952F\u9F7F\u3002\u540E\u53F6\u5F00\u82B1\uFF1B\u82B1\u7D2B\u8272\uFF0C\u6742\u6027\uFF0C\u96C4\u82B1\u4E0E\u4E24\u6027\u82B1\u540C\u682A\uFF1B\u4F1E\u623F\u82B1\u5E8F\u3002\u843C\u7247\u5375\u72B6\u62AB\u9488\u5F62\uFF1B\u82B1\u74E3\u692D\u5706\u5F62\u6216\u5012\u5375\u5F62\u3002\u5E7C\u679C\u7D2B\u7EA2\u8272\uFF0C\u719F\u540E\u8910\u9EC4\u8272\uFF0C\u679C\u6838\u7403\u5F62\uFF0C\u8109\u7EB9\u663E\u8457\uFF0C\u4E24\u7FC5\u6210\u949D\u89D2\u3002\u82B1\u679C\u671F5\uFF5E9\u6708\u3002

\u5206\u5E03\u4E8E\u4E2D\u56FD\u534E\u4E1C\u3001\u534E\u4E2D\u81F3\u897F\u5357\u7B49\u7701\u533A\u3002\u751F\u4E8E\u4F4E\u6D77\u62D4\u7684\u6797\u8FB9\u6216\u758F\u6797\u4E2D\u3002\u671D\u9C9C\u548C\u65E5\u672C\u4E5F\u6709\u5206\u5E03\u3002\u5404\u56FD\u65E9\u5DF2\u5F15\u79CD\u683D\u57F9\uFF0C\u5176\u4E2D\u6709\u7EA2\u69ED\u548C\u7FBD\u6BDB\u69ED\u5E38\u4F5C\u56ED\u6797\u6811\u79CD\u3002

</div>

<div>

<img src="/\u690D\u7269/\u9E21\u722A\u69ED1.jpg" class="w-80 mx-auto"/>

<img src="/\u690D\u7269/\u9E21\u722A\u69ED2.jpg" class="w-80 mx-auto"/>

</div>

</div>
`,title:"\u9E21\u722A\u69ED",level:1,content:`<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u9E21\u722A\u69ED

*\u5B66\u6821\u4E1C\u897F\u7EA2\u67AB\u8DEF\u79CD\u4E86\u5F88\u591A\u7EA2\u67AB\u6811\uFF0C\u5230\u4E86\u79CB\u5929\u7279\u522B\u597D\u770B\u3002\u7EA2\u67AB\u662F\u9E21\u722A\u69ED\u7684\u4E00\u4E2A\u54C1\u79CD*

\u5FB7\u534E\u62CD\u6444\u4E8E2022.7.6 3\u53F7\u697C\u897F\u4FA7\u548C7.14B\u5357\u533A\u83DC\u9E1F\u9A7F\u7AD9\u3002

\u9E21\u722A\u69ED\uFF08\u5B66\u540D\uFF1AAcer palmatum Thunb.\uFF09\u662F\u69ED\u6811\u79D1\uFF0C\u69ED\u5C5E\u843D\u53F6\u5C0F\u4E54\u6728\uFF1B\u6811\u51A0\u4F1E\u5F62\u3002\u6811\u76AE\u5E73\u6ED1\u3002\u6811\u76AE\u6DF1\u7070\u8272\u3002\u5C0F\u679D\u7D2B\u6216\u6DE1\u7D2B\u7EFF\u8272,\u8001\u679D\u6DE1\u7070\u7D2B\u8272\u3002\u53F6\u8FD1\u5706\u5F62\uFF0C\u57FA\u90E8\u5FC3\u5F62\u6216\u8FD1\u5FC3\u5F62\uFF0C\u638C\u72B6\uFF0C\u5E387\u6DF1\u88C2\uFF0C\u5BC6\u751F\u5C16\u952F\u9F7F\u3002\u540E\u53F6\u5F00\u82B1\uFF1B\u82B1\u7D2B\u8272\uFF0C\u6742\u6027\uFF0C\u96C4\u82B1\u4E0E\u4E24\u6027\u82B1\u540C\u682A\uFF1B\u4F1E\u623F\u82B1\u5E8F\u3002\u843C\u7247\u5375\u72B6\u62AB\u9488\u5F62\uFF1B\u82B1\u74E3\u692D\u5706\u5F62\u6216\u5012\u5375\u5F62\u3002\u5E7C\u679C\u7D2B\u7EA2\u8272\uFF0C\u719F\u540E\u8910\u9EC4\u8272\uFF0C\u679C\u6838\u7403\u5F62\uFF0C\u8109\u7EB9\u663E\u8457\uFF0C\u4E24\u7FC5\u6210\u949D\u89D2\u3002\u82B1\u679C\u671F5\uFF5E9\u6708\u3002

\u5206\u5E03\u4E8E\u4E2D\u56FD\u534E\u4E1C\u3001\u534E\u4E2D\u81F3\u897F\u5357\u7B49\u7701\u533A\u3002\u751F\u4E8E\u4F4E\u6D77\u62D4\u7684\u6797\u8FB9\u6216\u758F\u6797\u4E2D\u3002\u671D\u9C9C\u548C\u65E5\u672C\u4E5F\u6709\u5206\u5E03\u3002\u5404\u56FD\u65E9\u5DF2\u5F15\u79CD\u683D\u57F9\uFF0C\u5176\u4E2D\u6709\u7EA2\u69ED\u548C\u7FBD\u6BDB\u69ED\u5E38\u4F5C\u56ED\u6797\u6811\u79CD\u3002

</div>

<div>

<img src="/\u690D\u7269/\u9E21\u722A\u69ED1.jpg" class="w-80 mx-auto"/>

<img src="/\u690D\u7269/\u9E21\u722A\u69ED2.jpg" class="w-80 mx-auto"/>

</div>

</div>`,frontmatter:{},index:3,start:156,end:183,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:ub,meta:{slide:{raw:`
# \u9E21\u722A\u69ED-\u7EA2\u67AB

\u5FB7\u534E\u62CD\u6444\u4E8E2021\u5E7410\u670821\u65E5\u6DB5\u82F1\u697C\u4E1C\u4FA7\u3002

<img src="/\u690D\u7269/\u7EA2\u67AB1.jpg" class="w-160 mx-auto"/>

\u7EA2\u67AB\u{1F341}\uFF08\u5B66\u540D\uFF1AAcer palmatum 'Atropurpureum'\uFF09\u662F\u69ED\u6811\u79D1\u3001\u69ED\u5C5E\u3001\u9E21\u722A\u69ED\u7684\u4E00\u4E2A\u54C1\u79CD\u3002\u843D\u53F6\u5C0F\u4E54\u6728\u3002
`,title:"\u9E21\u722A\u69ED-\u7EA2\u67AB",level:1,content:`# \u9E21\u722A\u69ED-\u7EA2\u67AB

\u5FB7\u534E\u62CD\u6444\u4E8E2021\u5E7410\u670821\u65E5\u6DB5\u82F1\u697C\u4E1C\u4FA7\u3002

<img src="/\u690D\u7269/\u7EA2\u67AB1.jpg" class="w-160 mx-auto"/>

\u7EA2\u67AB\u{1F341}\uFF08\u5B66\u540D\uFF1AAcer palmatum 'Atropurpureum'\uFF09\u662F\u69ED\u6811\u79D1\u3001\u69ED\u5C5E\u3001\u9E21\u722A\u69ED\u7684\u4E00\u4E2A\u54C1\u79CD\u3002\u843D\u53F6\u5C0F\u4E54\u6728\u3002`,frontmatter:{},index:4,start:184,end:193,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:hb,meta:{slide:{raw:`
# \u94F6\u674F

\u5FB7\u534E\u62CD\u6444\u4E8E2021\u5E7410\u670826\u65E5\u7BEE\u7403\u573A\u95E8\u53E3\u3002

<img src="/\u690D\u7269/\u94F6\u674F1.jpg" class="w-160 mx-auto"/>

\u94F6\u674F\uFF08Ginkgo biloba L.\uFF09\u662F\u94F6\u674F\u79D1\u3001\u94F6\u674F\u5C5E\u690D\u7269\u3002*\u5230\u79CB\u5929\u94F6\u674F\u53F6\u53D8\u9EC4\u5F88\u6F02\u4EAE\uFF0C\u4F1A\u957F\u94F6\u674F\u679C\uFF0C\u636E\u8BF4\u6709\u6BD2\u4E0D\u5EFA\u8BAE\u5403\u3002*
`,title:"\u94F6\u674F",level:1,content:`# \u94F6\u674F

\u5FB7\u534E\u62CD\u6444\u4E8E2021\u5E7410\u670826\u65E5\u7BEE\u7403\u573A\u95E8\u53E3\u3002

<img src="/\u690D\u7269/\u94F6\u674F1.jpg" class="w-160 mx-auto"/>

\u94F6\u674F\uFF08Ginkgo biloba L.\uFF09\u662F\u94F6\u674F\u79D1\u3001\u94F6\u674F\u5C5E\u690D\u7269\u3002*\u5230\u79CB\u5929\u94F6\u674F\u53F6\u53D8\u9EC4\u5F88\u6F02\u4EAE\uFF0C\u4F1A\u957F\u94F6\u674F\u679C\uFF0C\u636E\u8BF4\u6709\u6BD2\u4E0D\u5EFA\u8BAE\u5403\u3002*`,frontmatter:{},index:5,start:194,end:203,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:wb,meta:{slide:{raw:`
# \u690D\u7269\u2014\u2014\u82B1\u6735

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u77F3\u849C1.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u7D2B\u85873.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u77F3\u7AF91.jpg" class="w-70 mx-auto"/>

</div>

</div>

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u897F\u5E9C\u6D77\u68E01.jpg" class="w-105 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u91CD\u74E3\u68E3\u68E0\u82B11.jpg" class="w-105 mx-auto"/>

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"\u690D\u7269\u2014\u2014\u82B1\u6735",level:1,content:`# \u690D\u7269\u2014\u2014\u82B1\u6735

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u77F3\u849C1.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u7D2B\u85873.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u77F3\u7AF91.jpg" class="w-70 mx-auto"/>

</div>

</div>

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u897F\u5E9C\u6D77\u68E01.jpg" class="w-105 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u91CD\u74E3\u68E3\u68E0\u82B11.jpg" class="w-105 mx-auto"/>

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{},index:6,start:204,end:257,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:kb,meta:{slide:{raw:`
# \u7389\u5170

\u5FB7\u534E\u62CD\u6444\u4E8E2021\u5E743\u670812\u65E5\u897F\u7389\u5170\u8DEF\u3002

<img src="/\u690D\u7269/\u7389\u51701.jpg" class="w-160 mx-auto"/>

\u7389\u5170\uFF08\u5B66\u540D\uFF1AYulania denudata (Desrousseaux) D. L. Fu\uFF09\u662F\u6728\u5170\u79D1\u3001\u7389\u5170\u5C5E\u690D\u7269\u3002\u843D\u53F6\u4E54\u6728\u3002
`,title:"\u7389\u5170",level:1,content:`# \u7389\u5170

\u5FB7\u534E\u62CD\u6444\u4E8E2021\u5E743\u670812\u65E5\u897F\u7389\u5170\u8DEF\u3002

<img src="/\u690D\u7269/\u7389\u51701.jpg" class="w-160 mx-auto"/>

\u7389\u5170\uFF08\u5B66\u540D\uFF1AYulania denudata (Desrousseaux) D. L. Fu\uFF09\u662F\u6728\u5170\u79D1\u3001\u7389\u5170\u5C5E\u690D\u7269\u3002\u843D\u53F6\u4E54\u6728\u3002`,frontmatter:{},index:7,start:258,end:267,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Ab,meta:{slide:{raw:`
# \u7EA2\u53F6\u78A7\u6843

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E743\u670818\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u7EA2\u53F6\u78A7\u68431.jpg" class="w-160 mx-auto"/>

\u7EA2\u53F6\u78A7\u6843\uFF08\u5B66\u540D\uFF1APrunus persica 'Atropurpurea'\uFF09\u662F\u8537\u8587\u79D1\u3001\u6843\u5C5E\u690D\u7269\u3002\u7EA2\u53F6\u78A7\u6843\u662F\u78A7\u6843\u7684\u4E00\u4E2A\u53D8\u5F02\u54C1\u79CD\u3002
`,title:"\u7EA2\u53F6\u78A7\u6843",level:1,content:`# \u7EA2\u53F6\u78A7\u6843

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E743\u670818\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u7EA2\u53F6\u78A7\u68431.jpg" class="w-160 mx-auto"/>

\u7EA2\u53F6\u78A7\u6843\uFF08\u5B66\u540D\uFF1APrunus persica 'Atropurpurea'\uFF09\u662F\u8537\u8587\u79D1\u3001\u6843\u5C5E\u690D\u7269\u3002\u7EA2\u53F6\u78A7\u6843\u662F\u78A7\u6843\u7684\u4E00\u4E2A\u53D8\u5F02\u54C1\u79CD\u3002`,frontmatter:{},index:8,start:268,end:277,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Db,meta:{slide:{raw:`
# \u5C71\u6843

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E743\u670820\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u5C71\u68431.jpg" class="w-160 mx-auto"/>

\u5C71\u6843\uFF08\u5B66\u540D\uFF1AAmygdalus davidiana (Carri\xE8re) de Vos ex Henry\uFF09\u662F\u8537\u8587\u79D1\uFF0C\u6843\u5C5E\u4E54\u6728\uFF0C\u9AD8\u53EF\u8FBE10\u7C73\u3002
`,title:"\u5C71\u6843",level:1,content:`# \u5C71\u6843

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E743\u670820\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u5C71\u68431.jpg" class="w-160 mx-auto"/>

\u5C71\u6843\uFF08\u5B66\u540D\uFF1AAmygdalus davidiana (Carri\xE8re) de Vos ex Henry\uFF09\u662F\u8537\u8587\u79D1\uFF0C\u6843\u5C5E\u4E54\u6728\uFF0C\u9AD8\u53EF\u8FBE10\u7C73\u3002`,frontmatter:{},index:9,start:278,end:287,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Wb,meta:{slide:{raw:`
# \u897F\u5E9C\u6D77\u68E0

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E743\u670820\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u897F\u5E9C\u6D77\u68E01.jpg" class="w-160 mx-auto"/>

\u897F\u5E9C\u6D77\u68E0\uFF08\u5B66\u540D\uFF1AMalus micromalus\uFF09\uFF0C\u4E3A\u6728\u5170\u7EB2\u3001\u8537\u8587\u79D1\u3001\u82F9\u679C\u5C5E\u7684\u690D\u7269\uFF0C\u4E3A\u4E2D\u56FD\u7684\u7279\u6709\u690D\u7269\u3002
`,title:"\u897F\u5E9C\u6D77\u68E0",level:1,content:`# \u897F\u5E9C\u6D77\u68E0

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E743\u670820\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u897F\u5E9C\u6D77\u68E01.jpg" class="w-160 mx-auto"/>

\u897F\u5E9C\u6D77\u68E0\uFF08\u5B66\u540D\uFF1AMalus micromalus\uFF09\uFF0C\u4E3A\u6728\u5170\u7EB2\u3001\u8537\u8587\u79D1\u3001\u82F9\u679C\u5C5E\u7684\u690D\u7269\uFF0C\u4E3A\u4E2D\u56FD\u7684\u7279\u6709\u690D\u7269\u3002`,frontmatter:{},index:10,start:288,end:297,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Zb,meta:{slide:{raw:`
# \u91CD\u74E3\u68E3\u68E0\u82B1

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E744\u67083\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u91CD\u74E3\u68E3\u68E0\u82B11.jpg" class="w-160 mx-auto"/>

\u91CD\u74E3\u68E3\u68E0\u82B1\uFF08\u5B66\u540D\uFF1AKerria japonica (L.) DC. f. pleniflora (Witte) Rehd.\uFF09\u68E3\u68E0\u82B1\u7684\u53D8\u79CD\uFF0C\u843D\u53F6\u704C\u6728\uFF0C\u9AD81-1.5\u7C73\u3002
`,title:"\u91CD\u74E3\u68E3\u68E0\u82B1",level:1,content:`# \u91CD\u74E3\u68E3\u68E0\u82B1

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E744\u67083\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u91CD\u74E3\u68E3\u68E0\u82B11.jpg" class="w-160 mx-auto"/>

\u91CD\u74E3\u68E3\u68E0\u82B1\uFF08\u5B66\u540D\uFF1AKerria japonica (L.) DC. f. pleniflora (Witte) Rehd.\uFF09\u68E3\u68E0\u82B1\u7684\u53D8\u79CD\uFF0C\u843D\u53F6\u704C\u6728\uFF0C\u9AD81-1.5\u7C73\u3002`,frontmatter:{},index:11,start:298,end:307,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:ty,meta:{slide:{raw:`
# \u6797\u836B\u9F20\u5C3E\u8349

XWD\u62CD\u6444\u4E8E2022\u5E745\u670821\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u6797\u836B\u9F20\u5C3E\u83491.jpg" class="w-140 mx-auto"/>

\u6797\u836B\u9F20\u5C3E\u8349\uFF08\u5B66\u540D\uFF1ASalvia nemorosa\uFF09\uFF0C\u5507\u5F62\u79D1\u9F20\u5C3E\u8349\u5C5E\u591A\u5E74\u751F\u8349\u672C\u690D\u7269\uFF0C\u8010\u5BD2\u3002
`,title:"\u6797\u836B\u9F20\u5C3E\u8349",level:1,content:`# \u6797\u836B\u9F20\u5C3E\u8349

XWD\u62CD\u6444\u4E8E2022\u5E745\u670821\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u6797\u836B\u9F20\u5C3E\u83491.jpg" class="w-140 mx-auto"/>

\u6797\u836B\u9F20\u5C3E\u8349\uFF08\u5B66\u540D\uFF1ASalvia nemorosa\uFF09\uFF0C\u5507\u5F62\u79D1\u9F20\u5C3E\u8349\u5C5E\u591A\u5E74\u751F\u8349\u672C\u690D\u7269\uFF0C\u8010\u5BD2\u3002`,frontmatter:{},index:12,start:308,end:317,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:iy,meta:{slide:{raw:`
<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

# \u5357\u5929\u7AF9

XWD\u62CD\u6444\u4E8E2022.5.21\u56DB\u53F7\u697C\u9876\u3002

\u5357\u5929\u7AF9\uFF0C\u522B\u540D\uFF1A\u5357\u5929\u7AFA\uFF0C\u7EA2\u6777\u5B50\uFF0C\u5929\u70DB\u5B50\uFF0C\u7EA2\u67B8\u5B50\uFF0C\u94BB\u77F3\u9EC4\uFF0C\u5929\u7AF9\uFF0C\u5170\u7AF9\uFF1B\u62C9\u4E01\u6587\u540D\uFF1ANandina domestica.\u5C5E\u6BDB\u831B\u76EE\u3001\u5C0F\u6A97\u79D1\u4E0B\u690D\u7269\uFF0C\u662F\u6211\u56FD\u5357\u65B9\u5E38\u89C1\u7684\u6728\u672C\u82B1\u5349\u79CD\u7C7B\u3002

\u5706\u9525\u82B1\u5E8F\u76F4\u7ACB\uFF0C\u957F20-35\u5398\u7C73\uFF1B\u82B1\u5C0F\uFF0C\u767D\u8272\uFF0C\u5177\u82B3\u9999\uFF0C\u76F4\u5F846-7\u6BEB\u7C73\uFF1B\u82B1\u74E3\u957F\u5706\u5F62\uFF0C\u957F\u7EA64.2\u6BEB\u7C73\uFF0C\u5BBD\u7EA62.5\u6BEB\u7C73\uFF0C\u5148\u7AEF\u5706\u949D\uFF1B\u96C4\u854A6\uFF0C\u957F\u7EA63.5\u6BEB\u7C73\uFF0C\u82B1\u4E1D\u77ED\uFF0C\u82B1\u836F\u7EB5\u88C2\uFF0C\u836F\u9694\u5EF6\u4F38\u3002\u679C\u67C4\u957F4-8\u6BEB\u7C73\uFF1B\u6D46\u679C\u7403\u5F62\uFF0C\u76F4\u5F845-8\u6BEB\u7C73\uFF0C\u719F\u65F6\u9C9C\u7EA2\u8272\uFF0C\u7A00\u6A59\u7EA2\u8272\u3002\u82B1\u671F3-6\u6708\uFF0C\u679C\u671F5-11\u6708\u3002

</div>

<div>
<img src="/\u690D\u7269/\u5357\u5929\u7AF91.jpg" class="w-80 mx-auto"/>

</div>

<div>
<img src="/\u690D\u7269/\u5357\u5929\u7AF92.jpg" class="w-80 mx-auto"/>

</div>

</div>
`,title:"\u5357\u5929\u7AF9",level:1,content:`<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

# \u5357\u5929\u7AF9

XWD\u62CD\u6444\u4E8E2022.5.21\u56DB\u53F7\u697C\u9876\u3002

\u5357\u5929\u7AF9\uFF0C\u522B\u540D\uFF1A\u5357\u5929\u7AFA\uFF0C\u7EA2\u6777\u5B50\uFF0C\u5929\u70DB\u5B50\uFF0C\u7EA2\u67B8\u5B50\uFF0C\u94BB\u77F3\u9EC4\uFF0C\u5929\u7AF9\uFF0C\u5170\u7AF9\uFF1B\u62C9\u4E01\u6587\u540D\uFF1ANandina domestica.\u5C5E\u6BDB\u831B\u76EE\u3001\u5C0F\u6A97\u79D1\u4E0B\u690D\u7269\uFF0C\u662F\u6211\u56FD\u5357\u65B9\u5E38\u89C1\u7684\u6728\u672C\u82B1\u5349\u79CD\u7C7B\u3002

\u5706\u9525\u82B1\u5E8F\u76F4\u7ACB\uFF0C\u957F20-35\u5398\u7C73\uFF1B\u82B1\u5C0F\uFF0C\u767D\u8272\uFF0C\u5177\u82B3\u9999\uFF0C\u76F4\u5F846-7\u6BEB\u7C73\uFF1B\u82B1\u74E3\u957F\u5706\u5F62\uFF0C\u957F\u7EA64.2\u6BEB\u7C73\uFF0C\u5BBD\u7EA62.5\u6BEB\u7C73\uFF0C\u5148\u7AEF\u5706\u949D\uFF1B\u96C4\u854A6\uFF0C\u957F\u7EA63.5\u6BEB\u7C73\uFF0C\u82B1\u4E1D\u77ED\uFF0C\u82B1\u836F\u7EB5\u88C2\uFF0C\u836F\u9694\u5EF6\u4F38\u3002\u679C\u67C4\u957F4-8\u6BEB\u7C73\uFF1B\u6D46\u679C\u7403\u5F62\uFF0C\u76F4\u5F845-8\u6BEB\u7C73\uFF0C\u719F\u65F6\u9C9C\u7EA2\u8272\uFF0C\u7A00\u6A59\u7EA2\u8272\u3002\u82B1\u671F3-6\u6708\uFF0C\u679C\u671F5-11\u6708\u3002

</div>

<div>
<img src="/\u690D\u7269/\u5357\u5929\u7AF91.jpg" class="w-80 mx-auto"/>

</div>

<div>
<img src="/\u690D\u7269/\u5357\u5929\u7AF92.jpg" class="w-80 mx-auto"/>

</div>

</div>`,frontmatter:{},index:13,start:318,end:345,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:fy,meta:{slide:{raw:`
# \u5927\u82B1\u8431\u8349

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670822\u65E5\u4E00\u53F7\u697C\u9876\u3002

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u5927\u82B1\u8431\u83491.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u5927\u82B1\u8431\u83492.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u5927\u82B1\u8431\u8349\uFF08\u5B66\u540D\uFF1AHemerocallis hybrida Bergmans\uFF09\u662F\u767E\u5408\u79D1\uFF0C\u8431\u8349\u5C5E\u591A\u5E74\u751F\u5BBF\u6839\u8349\u672C\u690D\u7269\u3002
`,title:"\u5927\u82B1\u8431\u8349",level:1,content:`# \u5927\u82B1\u8431\u8349

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670822\u65E5\u4E00\u53F7\u697C\u9876\u3002

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u5927\u82B1\u8431\u83491.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u5927\u82B1\u8431\u83492.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u5927\u82B1\u8431\u8349\uFF08\u5B66\u540D\uFF1AHemerocallis hybrida Bergmans\uFF09\u662F\u767E\u5408\u79D1\uFF0C\u8431\u8349\u5C5E\u591A\u5E74\u751F\u5BBF\u6839\u8349\u672C\u690D\u7269\u3002`,frontmatter:{},index:14,start:346,end:369,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:vy,meta:{slide:{raw:`
# \u6728\u69FF

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u67083\u65E5B11\u697C\u4E0B\u3002-------------------- \u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876\u3002------------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u6728\u69FF1.jpg" class="w-125 mx-auto"/>

\u7C89\u7D2B\u91CD\u74E3\u6728\u69FF\uFF0C\u4E3A\u9526\u8475\u79D1\u6728\u69FF\u5C5E\u6728\u69FF\u4E0B\u7684\u4E00\u4E2A\u53D8\u578B\uFF0C\u4E3A\u591A\u5E74\u751F\u704C\u6728\uFF0C\u751F\u957F\u901F\u5EA6\u5FEB\uFF0C\u53EF1\u5E74\u79CD\u690D\u591A\u5E74\u91C7\u6536\u3002\u5206\u5E03\u4E8E\u5C71\u4E1C\u7B49\u5730\u3002

</div>

<div>

<img src="/\u690D\u7269/\u6728\u69FF2.jpg" class="w-125 mx-auto"/>

\u77ED\u82DE\u6728\u69FF\uFF0C\u53D8\u79CD\u53F6\u83F1\u5F62\uFF0C\u57FA\u90E8\u6954\u5F62\uFF0C\u5C0F\u82DE\u7247\u6781\u5C0F\uFF0C\u4E1D\u72B6\uFF0C\u957F3-5\u6BEB\u7C73\uFF0C\u5BBD0.5-1\u6BEB\u7C73\uFF1B\u82B1\u6DE1\u7D2B\u8272\uFF0C\u5355\u74E3\u3002\u4EA7\u4E2D\u56FD\u5E7F\u4E1C\u3001\u798F\u5EFA\u548C\u5C71\u4E1C\u7701\u3002

</div>

</div>
`,title:"\u6728\u69FF",level:1,content:`# \u6728\u69FF

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u67083\u65E5B11\u697C\u4E0B\u3002-------------------- \u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876\u3002------------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u6728\u69FF1.jpg" class="w-125 mx-auto"/>

\u7C89\u7D2B\u91CD\u74E3\u6728\u69FF\uFF0C\u4E3A\u9526\u8475\u79D1\u6728\u69FF\u5C5E\u6728\u69FF\u4E0B\u7684\u4E00\u4E2A\u53D8\u578B\uFF0C\u4E3A\u591A\u5E74\u751F\u704C\u6728\uFF0C\u751F\u957F\u901F\u5EA6\u5FEB\uFF0C\u53EF1\u5E74\u79CD\u690D\u591A\u5E74\u91C7\u6536\u3002\u5206\u5E03\u4E8E\u5C71\u4E1C\u7B49\u5730\u3002

</div>

<div>

<img src="/\u690D\u7269/\u6728\u69FF2.jpg" class="w-125 mx-auto"/>

\u77ED\u82DE\u6728\u69FF\uFF0C\u53D8\u79CD\u53F6\u83F1\u5F62\uFF0C\u57FA\u90E8\u6954\u5F62\uFF0C\u5C0F\u82DE\u7247\u6781\u5C0F\uFF0C\u4E1D\u72B6\uFF0C\u957F3-5\u6BEB\u7C73\uFF0C\u5BBD0.5-1\u6BEB\u7C73\uFF1B\u82B1\u6DE1\u7D2B\u8272\uFF0C\u5355\u74E3\u3002\u4EA7\u4E2D\u56FD\u5E7F\u4E1C\u3001\u798F\u5EFA\u548C\u5C71\u4E1C\u7701\u3002

</div>

</div>`,frontmatter:{},index:15,start:370,end:395,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Ey,meta:{slide:{raw:`
# \u7D2B\u8587

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E749\u670813\u65E5\u56DB\u53F7\u697C\u9876\u3002-------------------2022\u5E747\u67086\u65E519\u53F7\u697C\u8FB9\u5C0F\u6CB3\u65C1\u3002------------------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u7D2B\u85873.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u7D2B\u85872.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u7D2B\u8587\uFF08\u5B66\u540D\uFF1ALagerstroemia indica L.\uFF09\u662F\u5343\u5C48\u83DC\u79D1\u3001\u7D2B\u8587\u5C5E\u690D\u7269\u3002\u843D\u53F6\u704C\u6728\u6216\u5C0F\u4E54\u6728\u3002\u7D2B\u8587\u6811\u59FF\u4F18\u7F8E\uFF0C\u6811\u5E72\u5149\u6ED1\u6D01\u51C0\uFF0C\u82B1\u8272\u8273\u4E3D\uFF1B\u5F00\u82B1\u65F6\u6B63\u5F53\u590F\u79CB\u5C11\u82B1\u5B63\u8282\uFF0C\u82B1\u671F\u957F\uFF0C\u6545\u6709\u201C\u767E\u65E5\u7EA2\u201D\u4E4B\u79F0\uFF0C\u53C8\u6709\u201C\u76DB\u590F\u7EFF\u906E\u773C\uFF0C\u6B64\u82B1\u7EA2\u6EE1\u5802\u201D\u7684\u8D5E\u8BED\uFF0C\u662F\u89C2\u82B1\u3001\u89C2\u5E72\u3001\u89C2\u6839\u7684\u76C6\u666F\u826F\u6750\uFF1B\u6839\u3001\u76AE\u3001\u53F6\u3001\u82B1\u7686\u53EF\u5165\u836F\u3002
`,title:"\u7D2B\u8587",level:1,content:`# \u7D2B\u8587

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E749\u670813\u65E5\u56DB\u53F7\u697C\u9876\u3002-------------------2022\u5E747\u67086\u65E519\u53F7\u697C\u8FB9\u5C0F\u6CB3\u65C1\u3002------------------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u7D2B\u85873.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u7D2B\u85872.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u7D2B\u8587\uFF08\u5B66\u540D\uFF1ALagerstroemia indica L.\uFF09\u662F\u5343\u5C48\u83DC\u79D1\u3001\u7D2B\u8587\u5C5E\u690D\u7269\u3002\u843D\u53F6\u704C\u6728\u6216\u5C0F\u4E54\u6728\u3002\u7D2B\u8587\u6811\u59FF\u4F18\u7F8E\uFF0C\u6811\u5E72\u5149\u6ED1\u6D01\u51C0\uFF0C\u82B1\u8272\u8273\u4E3D\uFF1B\u5F00\u82B1\u65F6\u6B63\u5F53\u590F\u79CB\u5C11\u82B1\u5B63\u8282\uFF0C\u82B1\u671F\u957F\uFF0C\u6545\u6709\u201C\u767E\u65E5\u7EA2\u201D\u4E4B\u79F0\uFF0C\u53C8\u6709\u201C\u76DB\u590F\u7EFF\u906E\u773C\uFF0C\u6B64\u82B1\u7EA2\u6EE1\u5802\u201D\u7684\u8D5E\u8BED\uFF0C\u662F\u89C2\u82B1\u3001\u89C2\u5E72\u3001\u89C2\u6839\u7684\u76C6\u666F\u826F\u6750\uFF1B\u6839\u3001\u76AE\u3001\u53F6\u3001\u82B1\u7686\u53EF\u5165\u836F\u3002`,frontmatter:{},index:16,start:396,end:419,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:jy,meta:{slide:{raw:`
<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u6253\u7897\u82B1

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u6253\u7897\u82B11.jpg" class="w-120 mx-auto"/>

\u6253\u7897\u82B1\uFF08Calystegia hederacea Wall.ex.Roxb.\uFF09\uFF0C\u53C8\u540D\u201C\u5C0F\u65CB\u82B1\u201D\u201C\u71D5\u8986\u5B50\u201D\u7B49\uFF0C\u65CB\u82B1\u79D1\uFF0C\u6253\u7897\u82B1\u5C5E\u8349\u672C\u690D\u7269\u3002

</div>

<div>

# \u9F99\u722A\u69D0

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876

<img src="/\u690D\u7269/\u9F99\u722A\u69D01.jpg" class="w-120 mx-auto"/>

\u9F99\u722A\u69D0\u662F\u56FD\u69D0\u7684\u82BD\u53D8\u54C1\u79CD\uFF0C\u843D\u53F6\u4E54\u6728\u3001\u559C\u5149\u3001\u7A0D\u8010\u9634\u3001\u80FD\u9002\u5E94\u5E72\u51B7\u6C14\u5019\u3002\u6811\u51A0\u4F18\u7F8E\uFF0C\u82B1\u82B3\u9999\uFF0C\u662F\u884C\u9053\u6811\u548C\u4F18\u826F\u7684\u871C\u6E90\u690D\u7269\u3002

</div>

</div>
`,title:"\u6253\u7897\u82B1",level:1,content:`<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u6253\u7897\u82B1

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u6253\u7897\u82B11.jpg" class="w-120 mx-auto"/>

\u6253\u7897\u82B1\uFF08Calystegia hederacea Wall.ex.Roxb.\uFF09\uFF0C\u53C8\u540D\u201C\u5C0F\u65CB\u82B1\u201D\u201C\u71D5\u8986\u5B50\u201D\u7B49\uFF0C\u65CB\u82B1\u79D1\uFF0C\u6253\u7897\u82B1\u5C5E\u8349\u672C\u690D\u7269\u3002

</div>

<div>

# \u9F99\u722A\u69D0

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876

<img src="/\u690D\u7269/\u9F99\u722A\u69D01.jpg" class="w-120 mx-auto"/>

\u9F99\u722A\u69D0\u662F\u56FD\u69D0\u7684\u82BD\u53D8\u54C1\u79CD\uFF0C\u843D\u53F6\u4E54\u6728\u3001\u559C\u5149\u3001\u7A0D\u8010\u9634\u3001\u80FD\u9002\u5E94\u5E72\u51B7\u6C14\u5019\u3002\u6811\u51A0\u4F18\u7F8E\uFF0C\u82B1\u82B3\u9999\uFF0C\u662F\u884C\u9053\u6811\u548C\u4F18\u826F\u7684\u871C\u6E90\u690D\u7269\u3002

</div>

</div>`,frontmatter:{},index:17,start:420,end:449,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Ly,meta:{slide:{raw:`
# \u77F3\u7AF9

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u77F3\u7AF91.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u77F3\u7AF92.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u77F3\u7AF9\uFF0C\u522B\u540D\u77BF\u9EA6\u8349\uFF0C\u62C9\u4E01\u6587\u540D\uFF1ADianthus chinensis L. \u4E3A\u53CC\u5B50\u53F6\u690D\u7269\u7EB2\u3001\u77F3\u7AF9\u79D1\u3001\u77F3\u7AF9\u5C5E\u591A\u5E74\u751F\u8349\u672C\uFF0C\u9AD830-50\u5398\u7C73\uFF0C\u5168\u682A\u65E0\u6BDB\uFF0C\u5E26\u7C89\u7EFF\u8272\u3002\u830E\u7531\u6839\u9888\u751F\u51FA\u3002\u53F6\u7247\u7EBF\u72B6\u62AB\u9488\u5F62\uFF0C\u9876\u7AEF\u6E10\u5C16\uFF0C\u57FA\u90E8\u7A0D\u72ED\uFF0C\u5168\u7F18\u6216\u6709\u7EC6\u5C0F\u9F7F\uFF0C\u4E2D\u8109\u8F83\u663E\u3002\u82B1\u5355\u751F\u679D\u7AEF\u6216\u6570\u82B1\u96C6\u6210\u805A\u4F1E\u82B1\u5E8F\uFF1B\u7D2B\u7EA2\u8272\u3001\u7C89\u7EA2\u8272\u3001\u9C9C\u7EA2\u8272\u6216\u767D\u8272\uFF0C\u82B1\u671F5-6\u6708\uFF0C\u679C\u671F7-9\u6708\u3002
`,title:"\u77F3\u7AF9",level:1,content:`# \u77F3\u7AF9

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u77F3\u7AF91.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u77F3\u7AF92.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u77F3\u7AF9\uFF0C\u522B\u540D\u77BF\u9EA6\u8349\uFF0C\u62C9\u4E01\u6587\u540D\uFF1ADianthus chinensis L. \u4E3A\u53CC\u5B50\u53F6\u690D\u7269\u7EB2\u3001\u77F3\u7AF9\u79D1\u3001\u77F3\u7AF9\u5C5E\u591A\u5E74\u751F\u8349\u672C\uFF0C\u9AD830-50\u5398\u7C73\uFF0C\u5168\u682A\u65E0\u6BDB\uFF0C\u5E26\u7C89\u7EFF\u8272\u3002\u830E\u7531\u6839\u9888\u751F\u51FA\u3002\u53F6\u7247\u7EBF\u72B6\u62AB\u9488\u5F62\uFF0C\u9876\u7AEF\u6E10\u5C16\uFF0C\u57FA\u90E8\u7A0D\u72ED\uFF0C\u5168\u7F18\u6216\u6709\u7EC6\u5C0F\u9F7F\uFF0C\u4E2D\u8109\u8F83\u663E\u3002\u82B1\u5355\u751F\u679D\u7AEF\u6216\u6570\u82B1\u96C6\u6210\u805A\u4F1E\u82B1\u5E8F\uFF1B\u7D2B\u7EA2\u8272\u3001\u7C89\u7EA2\u8272\u3001\u9C9C\u7EA2\u8272\u6216\u767D\u8272\uFF0C\u82B1\u671F5-6\u6708\uFF0C\u679C\u671F7-9\u6708\u3002`,frontmatter:{},index:18,start:450,end:473,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Hy,meta:{slide:{raw:`
# \u677E\u679C\u83CA

XWD\u62CD\u6444\u4E8E2022\u5E748\u670812\u65E5\u4E09\u53F7\u697C\u5929\u53F0\u3002

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

\u677E\u679C\u83CA\uFF08\u5B66\u540D\uFF1AEchinacea purpurea (Linn.) Moench\uFF09\u662F\u83CA\u79D1\u677E\u679C\u83CA\u5C5E\u690D\u7269\uFF0C\u591A\u5E74\u751F\u8349\u672C\u690D\u7269\u3002\u9AD850-150\u5398\u7C73\uFF0C\u5168\u682A\u6709\u7C97\u6BDB\uFF0C\u830E\u76F4\u7ACB\uFF1B\u53F6\u7F18\u5177\u952F\u9F7F\u3002\u57FA\u751F\u53F6\u5375\u5F62\u6216\u4E09\u89D2\u5F62\uFF0C\u830E\u751F\u53F6\u536F\u72B6\u62AB\u9488\u5F62\uFF0C\u53F6\u67C4\u57FA\u90E8\u7565\u62B1\u830E\u3002\u5934\u72B6\u82B1\u5E8F\uFF0C\u5355\u751F\u6216\u591A\u6570\u805A\u751F\u4E8E\u6280\u9876\uFF0C\u82B1\u5927\uFF0C\u76F4\u5F84\u53EF\u8FBE10\u5398\u7C73\uFF1A\u82B1\u7684\u4E2D\u5FC3\u90E8\u4F4D\u51F8\u8D77\uFF0C\u5448\u7403\u5F62\uFF0C\u7403\u4E0A\u4E3A\u7BA1\u72B6\u82B1\uFF0C\u6A59\u9EC4\u8272\uFF1B\u79CD\u5B50\u6D45\u8910\u8272\uFF0C\u5916\u76AE\u786C\u3002\u82B1\u671F\u590F\u79CB\u3002

</div>

<div>
<img src="/\u690D\u7269/\u677E\u679C\u83CA1.jpg" class="w-80 mx-auto"/>

</div>

<div>
<img src="/\u690D\u7269/\u677E\u679C\u83CA2.jpg" class="w-80 mx-auto"/>

</div>

</div>
`,title:"\u677E\u679C\u83CA",level:1,content:`# \u677E\u679C\u83CA

XWD\u62CD\u6444\u4E8E2022\u5E748\u670812\u65E5\u4E09\u53F7\u697C\u5929\u53F0\u3002

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

\u677E\u679C\u83CA\uFF08\u5B66\u540D\uFF1AEchinacea purpurea (Linn.) Moench\uFF09\u662F\u83CA\u79D1\u677E\u679C\u83CA\u5C5E\u690D\u7269\uFF0C\u591A\u5E74\u751F\u8349\u672C\u690D\u7269\u3002\u9AD850-150\u5398\u7C73\uFF0C\u5168\u682A\u6709\u7C97\u6BDB\uFF0C\u830E\u76F4\u7ACB\uFF1B\u53F6\u7F18\u5177\u952F\u9F7F\u3002\u57FA\u751F\u53F6\u5375\u5F62\u6216\u4E09\u89D2\u5F62\uFF0C\u830E\u751F\u53F6\u536F\u72B6\u62AB\u9488\u5F62\uFF0C\u53F6\u67C4\u57FA\u90E8\u7565\u62B1\u830E\u3002\u5934\u72B6\u82B1\u5E8F\uFF0C\u5355\u751F\u6216\u591A\u6570\u805A\u751F\u4E8E\u6280\u9876\uFF0C\u82B1\u5927\uFF0C\u76F4\u5F84\u53EF\u8FBE10\u5398\u7C73\uFF1A\u82B1\u7684\u4E2D\u5FC3\u90E8\u4F4D\u51F8\u8D77\uFF0C\u5448\u7403\u5F62\uFF0C\u7403\u4E0A\u4E3A\u7BA1\u72B6\u82B1\uFF0C\u6A59\u9EC4\u8272\uFF1B\u79CD\u5B50\u6D45\u8910\u8272\uFF0C\u5916\u76AE\u786C\u3002\u82B1\u671F\u590F\u79CB\u3002

</div>

<div>
<img src="/\u690D\u7269/\u677E\u679C\u83CA1.jpg" class="w-80 mx-auto"/>

</div>

<div>
<img src="/\u690D\u7269/\u677E\u679C\u83CA2.jpg" class="w-80 mx-auto"/>

</div>

</div>`,frontmatter:{},index:19,start:474,end:499,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:qy,meta:{slide:{raw:`
# \u84B2\u82C7

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670829\u65E5B\u533A\u65C1\u3002

<img src="/\u690D\u7269/\u84B2\u82C71.jpg" class="w-110 mx-auto"/>

\u84B2\u82C7\uFF08\u5B66\u540D\uFF1ACortaderia selloana (Schult.) Aschers. et Graebn.\uFF09\u662F\u79BE\u672C\u79D1\u3001\u84B2\u82C7\u5C5E\u690D\u7269\u3002

\u82B1\u8BED\uFF1A\u5BF9\u7231\u60C5\u575A\u8D1E\u4E0D\u6E1D\u7684\u4FE1\u5FF5\u4E0E\u51B3\u5FC3\u3002
`,title:"\u84B2\u82C7",level:1,content:`# \u84B2\u82C7

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670829\u65E5B\u533A\u65C1\u3002

<img src="/\u690D\u7269/\u84B2\u82C71.jpg" class="w-110 mx-auto"/>

\u84B2\u82C7\uFF08\u5B66\u540D\uFF1ACortaderia selloana (Schult.) Aschers. et Graebn.\uFF09\u662F\u79BE\u672C\u79D1\u3001\u84B2\u82C7\u5C5E\u690D\u7269\u3002

\u82B1\u8BED\uFF1A\u5BF9\u7231\u60C5\u575A\u8D1E\u4E0D\u6E1D\u7684\u4FE1\u5FF5\u4E0E\u51B3\u5FC3\u3002`,frontmatter:{},index:20,start:500,end:511,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:ew,meta:{slide:{raw:`
# \u77F3\u849C

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E749\u670813\u65E5\u4E09\u53F7\u697C\u897F\u4FA7\u8DEF\u8FB9\u3002

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u77F3\u849C3.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u77F3\u849C2.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u77F3\u849C\uFF08\u5B66\u540D\uFF1ALycoris radiata (L\u2019Her.) Herb.\uFF09
*\u6240\u8C13\u7684\u201C\u66FC\u73E0\u6C99\u534E\u201D\u3001\u201C\u66FC\u6B8A\u6C99\u534E\u201D\u3001\u201C\u5F7C\u5CB8\u82B1\u201D\u3001\u201C\u8389\u53EF\u4E3D\u4E1D\u201D\u90FD\u662F\u8FD9\u79CD\u82B1\u3002\u672C\u6765\u4EE5\u4E3A\u6E2F\u91CC\u6CA1\u6709\u7684\uFF0C\u524D\u51E0\u5929\u770B\u5230\u540C\u73ED\u540C\u5B66\u670B\u53CB\u5708\u53D1\u4E86\uFF0C\u8D76\u5FEB\u548C\u5979\u6253\u542C\u4F4D\u7F6E\u53BB\u62CD\u4E24\u5F20\u3002*
`,title:"\u77F3\u849C",level:1,content:`# \u77F3\u849C

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E749\u670813\u65E5\u4E09\u53F7\u697C\u897F\u4FA7\u8DEF\u8FB9\u3002

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u77F3\u849C3.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u77F3\u849C2.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u77F3\u849C\uFF08\u5B66\u540D\uFF1ALycoris radiata (L\u2019Her.) Herb.\uFF09
*\u6240\u8C13\u7684\u201C\u66FC\u73E0\u6C99\u534E\u201D\u3001\u201C\u66FC\u6B8A\u6C99\u534E\u201D\u3001\u201C\u5F7C\u5CB8\u82B1\u201D\u3001\u201C\u8389\u53EF\u4E3D\u4E1D\u201D\u90FD\u662F\u8FD9\u79CD\u82B1\u3002\u672C\u6765\u4EE5\u4E3A\u6E2F\u91CC\u6CA1\u6709\u7684\uFF0C\u524D\u51E0\u5929\u770B\u5230\u540C\u73ED\u540C\u5B66\u670B\u53CB\u5708\u53D1\u4E86\uFF0C\u8D76\u5FEB\u548C\u5979\u6253\u542C\u4F4D\u7F6E\u53BB\u62CD\u4E24\u5F20\u3002*`,frontmatter:{},index:21,start:512,end:536,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:ow,meta:{slide:{raw:`
# \u690D\u7269\u2014\u2014\u679C\u5B9E

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u4FA7\u67CF2.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u7389\u51702.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u67FF\u5B501.jpg" class="w-70 mx-auto"/>

</div>

</div>

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u7EA2\u53F6\u78A7\u68433.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u77F3\u69B42.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u5C71\u69421.jpg" class="w-70 mx-auto"/>

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"\u690D\u7269\u2014\u2014\u679C\u5B9E",level:1,content:`# \u690D\u7269\u2014\u2014\u679C\u5B9E

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u4FA7\u67CF2.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u7389\u51702.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u67FF\u5B501.jpg" class="w-70 mx-auto"/>

</div>

</div>

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u7EA2\u53F6\u78A7\u68433.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u77F3\u69B42.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u5C71\u69421.jpg" class="w-70 mx-auto"/>

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{},index:22,start:537,end:596,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:dw,meta:{slide:{raw:`
# \u7389\u5170

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670829\u65E5\u897F\u7389\u5170\u8DEF\u3002

<img src="/\u690D\u7269/\u7389\u51702.jpg" class="w-125 mx-auto"/>

*\u5B66\u6821\u4E1C\u897F\u7389\u5170\u8DEF\u6709\u597D\u591A\u7389\u5170\u6811\uFF0C\u5728\u65E9\u6625\u5F00\u82B1\u7279\u522B\u6F02\u4EAE\u3002\u7389\u5170\u7684\u679C\u5B9E\u50CF\u7EA2\u8272\u7684\u9EBB\u82B1\uFF0C\u8C8C\u4F3C\u6709\u6BD2\u3002*
`,title:"\u7389\u5170",level:1,content:`# \u7389\u5170

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670829\u65E5\u897F\u7389\u5170\u8DEF\u3002

<img src="/\u690D\u7269/\u7389\u51702.jpg" class="w-125 mx-auto"/>

*\u5B66\u6821\u4E1C\u897F\u7389\u5170\u8DEF\u6709\u597D\u591A\u7389\u5170\u6811\uFF0C\u5728\u65E9\u6625\u5F00\u82B1\u7279\u522B\u6F02\u4EAE\u3002\u7389\u5170\u7684\u679C\u5B9E\u50CF\u7EA2\u8272\u7684\u9EBB\u82B1\uFF0C\u8C8C\u4F3C\u6709\u6BD2\u3002*`,frontmatter:{},index:23,start:597,end:606,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:_w,meta:{slide:{raw:`
# \u7EA2\u53F6\u78A7\u6843

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876----------------------2022\u5E748\u670830\u65E5\u56DB\u53F7\u697C\u9876---------------------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u7EA2\u53F6\u78A7\u68433.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u7EA2\u53F6\u78A7\u68434.jpg" class="w-125 mx-auto"/>

</div>

</div>

*\u56DB\u53F7\u697C\u697C\u9876\u6709\u597D\u591A\u515A\u652F\u90E8\u6350\u8D60\u7684\u690D\u7269\uFF0C\u7EA2\u53F6\u78A7\u6843\u5F00\u82B1\u6BD4\u8F83\u65E9\uFF0C\u5728\u65E9\u6625\u5C31\u76DB\u5F00\u4E86\u3002\u78A7\u6843\u57288\u6708\u5E95\u5C31\u5927\u91CF\u6210\u719F\uFF0C\u6BD4\u666E\u901A\u7684\u6843\u5B50\u7A0D\u5FAE\u6DA9\u4E00\u70B9\uFF0C\u4E0D\u8FC7\u4E5F\u5F88\u751C\u5F88\u597D\u5403\u3002*
`,title:"\u7EA2\u53F6\u78A7\u6843",level:1,content:`# \u7EA2\u53F6\u78A7\u6843

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876----------------------2022\u5E748\u670830\u65E5\u56DB\u53F7\u697C\u9876---------------------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u7EA2\u53F6\u78A7\u68433.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u7EA2\u53F6\u78A7\u68434.jpg" class="w-125 mx-auto"/>

</div>

</div>

*\u56DB\u53F7\u697C\u697C\u9876\u6709\u597D\u591A\u515A\u652F\u90E8\u6350\u8D60\u7684\u690D\u7269\uFF0C\u7EA2\u53F6\u78A7\u6843\u5F00\u82B1\u6BD4\u8F83\u65E9\uFF0C\u5728\u65E9\u6625\u5C31\u76DB\u5F00\u4E86\u3002\u78A7\u6843\u57288\u6708\u5E95\u5C31\u5927\u91CF\u6210\u719F\uFF0C\u6BD4\u666E\u901A\u7684\u6843\u5B50\u7A0D\u5FAE\u6DA9\u4E00\u70B9\uFF0C\u4E0D\u8FC7\u4E5F\u5F88\u751C\u5F88\u597D\u5403\u3002*`,frontmatter:{},index:24,start:607,end:630,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:xw,meta:{slide:{raw:`
<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u7EA2\u53F6\u78A7\u6843

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670830\u65E5\u56DB\u53F7\u697C\u5DE5\u4F4D\u3002

<img src="/\u690D\u7269/\u7EA2\u53F6\u78A7\u68436.jpg" class="w-120 mx-auto"/>

</div>

<div>

# \u5C71\u6843

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E749\u67084\u65E5\u5BBF\u820D

<img src="/\u690D\u7269/\u5C71\u68432.jpg" class="w-120 mx-auto"/>

</div>

</div>

*\u5C71\u6843\u{1F351}\u76AE\u6BD4\u78A7\u6843\u5149\u6ED1\u4E00\u4E9B\uFF0C\u679C\u5B50\u8981\u5C0F\u4E00\u4E9B\u3002\u603B\u7684\u6765\u8BF4\u78A7\u6843\u6BD4\u8F83\u751C\u4E5F\u66F4\u597D\u5403\u3002*
`,title:"\u7EA2\u53F6\u78A7\u6843",level:1,content:`<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u7EA2\u53F6\u78A7\u6843

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670830\u65E5\u56DB\u53F7\u697C\u5DE5\u4F4D\u3002

<img src="/\u690D\u7269/\u7EA2\u53F6\u78A7\u68436.jpg" class="w-120 mx-auto"/>

</div>

<div>

# \u5C71\u6843

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E749\u67084\u65E5\u5BBF\u820D

<img src="/\u690D\u7269/\u5C71\u68432.jpg" class="w-120 mx-auto"/>

</div>

</div>

*\u5C71\u6843\u{1F351}\u76AE\u6BD4\u78A7\u6843\u5149\u6ED1\u4E00\u4E9B\uFF0C\u679C\u5B50\u8981\u5C0F\u4E00\u4E9B\u3002\u603B\u7684\u6765\u8BF4\u78A7\u6843\u6BD4\u8F83\u751C\u4E5F\u66F4\u597D\u5403\u3002*`,frontmatter:{},index:25,start:631,end:658,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:jw,meta:{slide:{raw:`
# \u897F\u5E9C\u6D77\u68E0

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u897F\u5E9C\u6D77\u68E02.jpg" class="w-125 mx-auto"/>

*\u6D77\u68E0\u82B1\u7684\u679C\u5B9E\u53EB\u6D77\u68E0\u679C\uFF0C\u4E5F\u53EB\u6978\u5B50\u3002\u5206\u5E03\u4E8E\u6CB3\u5317\u3001\u5C71\u4E1C\u3001\u5C71\u897F\u3001\u6CB3\u5357\u3001\u9655\u897F\u3001\u7518\u8083\u3001\u8FBD\u5B81\u3001\u5185\u8499\u53E4\u7B49\u7701\u533A\u3002*
`,title:"\u897F\u5E9C\u6D77\u68E0",level:1,content:`# \u897F\u5E9C\u6D77\u68E0

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u690D\u7269/\u897F\u5E9C\u6D77\u68E02.jpg" class="w-125 mx-auto"/>

*\u6D77\u68E0\u82B1\u7684\u679C\u5B9E\u53EB\u6D77\u68E0\u679C\uFF0C\u4E5F\u53EB\u6978\u5B50\u3002\u5206\u5E03\u4E8E\u6CB3\u5317\u3001\u5C71\u4E1C\u3001\u5C71\u897F\u3001\u6CB3\u5357\u3001\u9655\u897F\u3001\u7518\u8083\u3001\u8FBD\u5B81\u3001\u5185\u8499\u53E4\u7B49\u7701\u533A\u3002*`,frontmatter:{},index:26,start:659,end:668,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Iw,meta:{slide:{raw:`
# \u77F3\u69B4

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670822\u65E5\u4E00\u53F7\u697C\u9876----------------------2022\u5E748\u670829\u65E5B\u533A\u5916\u7EFF\u5316\u5E26---------------------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u77F3\u69B41.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u77F3\u69B43.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u77F3\u69B4\uFF08\u62C9\u4E01\u540D\uFF1APunica granatum L.\uFF09\u843D\u53F6\u4E54\u6728\u6216\u704C\u6728\uFF1B\u843D\u53F6\u704C\u6728\u6216\u4E54\u6728\uFF0C\u9AD82\u20147\u7C73\uFF0C\u7A00\u8FBE10\u7C73\u3002

*\u5B66\u6821\u7684\u77F3\u69B4\u867D\u7136\u662F\u89C2\u8D4F\u77F3\u69B4\uFF0C\u4F46\u662F\u4E5F\u53EF\u4EE5\u5403\uFF0C\u9178\u9178\u751C\u751C\u7684\uFF0C\u516B\u6708\u5E95\u719F\u7684\u8FD8\u4E0D\u591A\uFF0C\u4E5D\u6708\u4EFD\u5C31\u5927\u91CF\u6210\u719F\u4E86\u3002*
`,title:"\u77F3\u69B4",level:1,content:`# \u77F3\u69B4

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670822\u65E5\u4E00\u53F7\u697C\u9876----------------------2022\u5E748\u670829\u65E5B\u533A\u5916\u7EFF\u5316\u5E26---------------------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u77F3\u69B41.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u77F3\u69B43.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u77F3\u69B4\uFF08\u62C9\u4E01\u540D\uFF1APunica granatum L.\uFF09\u843D\u53F6\u4E54\u6728\u6216\u704C\u6728\uFF1B\u843D\u53F6\u704C\u6728\u6216\u4E54\u6728\uFF0C\u9AD82\u20147\u7C73\uFF0C\u7A00\u8FBE10\u7C73\u3002

*\u5B66\u6821\u7684\u77F3\u69B4\u867D\u7136\u662F\u89C2\u8D4F\u77F3\u69B4\uFF0C\u4F46\u662F\u4E5F\u53EF\u4EE5\u5403\uFF0C\u9178\u9178\u751C\u751C\u7684\uFF0C\u516B\u6708\u5E95\u719F\u7684\u8FD8\u4E0D\u591A\uFF0C\u4E5D\u6708\u4EFD\u5C31\u5927\u91CF\u6210\u719F\u4E86\u3002*`,frontmatter:{},index:27,start:669,end:694,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Vw,meta:{slide:{raw:`
# \u6728\u74DC

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670818\u65E5B\u5317\u533A\u95E8\u53E3\u3002

<img src="/\u690D\u7269/\u6728\u74DC1.jpg" class="w-125 mx-auto"/>

\u6728\u74DC\uFF08\u5B66\u540D\uFF1AChaenomeles sinensis (Thouin) Koehne\uFF09\u662F\u8537\u8587\u79D1\u3001\u6728\u74DC\u5C5E\u690D\u7269\u3002\u704C\u6728\u6216\u5C0F\u4E54\u6728\uFF0C\u9AD8\u8FBE5-10\u7C73\u3002
`,title:"\u6728\u74DC",level:1,content:`# \u6728\u74DC

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670818\u65E5B\u5317\u533A\u95E8\u53E3\u3002

<img src="/\u690D\u7269/\u6728\u74DC1.jpg" class="w-125 mx-auto"/>

\u6728\u74DC\uFF08\u5B66\u540D\uFF1AChaenomeles sinensis (Thouin) Koehne\uFF09\u662F\u8537\u8587\u79D1\u3001\u6728\u74DC\u5C5E\u690D\u7269\u3002\u704C\u6728\u6216\u5C0F\u4E54\u6728\uFF0C\u9AD8\u8FBE5-10\u7C73\u3002`,frontmatter:{},index:28,start:695,end:704,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:qw,meta:{slide:{raw:`
# \u5C71\u6942

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670829\u65E5A\u533A\u65C1\u3002

<img src="/\u690D\u7269/\u5C71\u69421.jpg" class="w-125 mx-auto"/>

\u5C71\u6942\uFF08Crataegus pinnatifida Bge.\uFF09\uFF0C\u8537\u8587\u79D1\u5C71\u6942\u5C5E\uFF0C\u6297\u8870\u8001\u4F5C\u7528\u4F4D\u5C45\u7FA4\u679C\u4E4B\u9996\u3002 \u843D\u53F6\u4E54\u6728\uFF0C\u9AD8\u53EF\u8FBE6\u7C73\u3002
`,title:"\u5C71\u6942",level:1,content:`# \u5C71\u6942

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670829\u65E5A\u533A\u65C1\u3002

<img src="/\u690D\u7269/\u5C71\u69421.jpg" class="w-125 mx-auto"/>

\u5C71\u6942\uFF08Crataegus pinnatifida Bge.\uFF09\uFF0C\u8537\u8587\u79D1\u5C71\u6942\u5C5E\uFF0C\u6297\u8870\u8001\u4F5C\u7528\u4F4D\u5C45\u7FA4\u679C\u4E4B\u9996\u3002 \u843D\u53F6\u4E54\u6728\uFF0C\u9AD8\u53EF\u8FBE6\u7C73\u3002`,frontmatter:{},index:29,start:705,end:714,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:ex,meta:{slide:{raw:`
# \u4FA7\u67CF

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670829\u65E5A\u533A\u65C1\u3002

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u4FA7\u67CF1.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u4FA7\u67CF2.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u4FA7\u67CF\uFF08\u5B66\u540D\uFF1APlatycladus orientalis \uFF08L.) Franco\uFF09\u662F\u67CF\u79D1\u4FA7\u67CF\u5C5E\u5E38\u7EFF\u4E54\u6728\u3002

\u4FA7\u67CF\u4E3A\u4E2D\u56FD\u7279\u4EA7\uFF0C\u9664\u9752\u6D77\u3001\u65B0\u7586\u5916\uFF0C\u5168\u56FD\u5747\u6709\u5206\u5E03\u3002\u5BFF\u547D\u5F88\u957F\uFF0C\u5E38\u6709\u767E\u5E74\u548C\u6570\u767E\u5E74\u4EE5\u4E0A\u7684\u53E4\u6811\u3002
`,title:"\u4FA7\u67CF",level:1,content:`# \u4FA7\u67CF

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670829\u65E5A\u533A\u65C1\u3002

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u690D\u7269/\u4FA7\u67CF1.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u690D\u7269/\u4FA7\u67CF2.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u4FA7\u67CF\uFF08\u5B66\u540D\uFF1APlatycladus orientalis \uFF08L.) Franco\uFF09\u662F\u67CF\u79D1\u4FA7\u67CF\u5C5E\u5E38\u7EFF\u4E54\u6728\u3002

\u4FA7\u67CF\u4E3A\u4E2D\u56FD\u7279\u4EA7\uFF0C\u9664\u9752\u6D77\u3001\u65B0\u7586\u5916\uFF0C\u5168\u56FD\u5747\u6709\u5206\u5E03\u3002\u5BFF\u547D\u5F88\u957F\uFF0C\u5E38\u6709\u767E\u5E74\u548C\u6570\u767E\u5E74\u4EE5\u4E0A\u7684\u53E4\u6811\u3002`,frontmatter:{},index:30,start:715,end:740,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:ix,meta:{slide:{raw:`
# \u67FF\u5B50

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670831\u65E5\u9053\u79D1\u5230\u6559\u5B66\u533A\u9014\u4E2D\u3002

<img src="/\u690D\u7269/\u67FF\u5B501.jpg" class="w-125 mx-auto"/>

\u67FF\uFF08\u5B66\u540D\uFF1ADiospyros kaki Thunb.\uFF09\u662F\u67FF\u79D1\u3001\u67FF\u5C5E\u843D\u53F6\u5927\u4E54\u6728\u3002\u82B1\u671F5-6\u6708\uFF0C\u679C\u671F9-10\u6708\u3002
`,title:"\u67FF\u5B50",level:1,content:`# \u67FF\u5B50

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E748\u670831\u65E5\u9053\u79D1\u5230\u6559\u5B66\u533A\u9014\u4E2D\u3002

<img src="/\u690D\u7269/\u67FF\u5B501.jpg" class="w-125 mx-auto"/>

\u67FF\uFF08\u5B66\u540D\uFF1ADiospyros kaki Thunb.\uFF09\u662F\u67FF\u79D1\u3001\u67FF\u5C5E\u843D\u53F6\u5927\u4E54\u6728\u3002\u82B1\u671F5-6\u6708\uFF0C\u679C\u671F9-10\u6708\u3002`,frontmatter:{},index:31,start:741,end:750,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:dx,meta:{slide:{raw:`
# \u52A8\u7269\u2014\u2014\u5927\u578B\u52A8\u7269

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u767D\u9E3D2.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u87FE\u870D1.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u732B6.jpg" class="w-70 mx-auto"/>

</div>

</div>

<div class="grid grid-cols-5 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u86C71.jpg" class="w-50 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u9EBB\u96C02.jpg" class="w-50 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u7EA2\u5634\u84DD\u9E4A1.jpg" class="w-33 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u5927\u9EC42.jpg" class="w-50 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u8759\u87601.jpg" class="w-50 mx-auto"/>

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"\u52A8\u7269\u2014\u2014\u5927\u578B\u52A8\u7269",level:1,content:`# \u52A8\u7269\u2014\u2014\u5927\u578B\u52A8\u7269

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u767D\u9E3D2.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u87FE\u870D1.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u732B6.jpg" class="w-70 mx-auto"/>

</div>

</div>

<div class="grid grid-cols-5 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u86C71.jpg" class="w-50 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u9EBB\u96C02.jpg" class="w-50 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u7EA2\u5634\u84DD\u9E4A1.jpg" class="w-33 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u5927\u9EC42.jpg" class="w-50 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u8759\u87601.jpg" class="w-50 mx-auto"/>

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{},index:32,start:751,end:822,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:vx,meta:{slide:{raw:`
# \u732B

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670816\u65E5B\u5357\u533A\u7269\u4E1A\u95E8\u53E3----------------2022\u5E746\u670828\u65E5B\u5317\u533A----------------------------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u732B4.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u732B6.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u732B\uFF0C\u5C5E\u4E8E\u732B\u79D1\u52A8\u7269\uFF0C\u662F\u5168\u4E16\u754C\u5BB6\u5EAD\u4E2D\u8F83\u4E3A\u5E7F\u6CDB\u7684\u5BA0\u7269\u3002

*\u6E2F\u91CC\u9762\u597D\u591A\u732B\u732B\u72D7\u72D7\uFF0C\u6211\u4F4F\u7684B\u5317\u533A\u6709\u4E00\u53EA\u4E09\u82B1\u4E00\u53EA\u6A58\u732B\u3002\u540E\u6765\u53C8\u6765\u4E86\u4E00\u53EA\u5976\u725B\u732B\uFF0C\u8FD9\u4E9B\u{1F431}\u751F\u4E86\u597D\u591A\u5C0F\u732B\u3002*
`,title:"\u732B",level:1,content:`# \u732B

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670816\u65E5B\u5357\u533A\u7269\u4E1A\u95E8\u53E3----------------2022\u5E746\u670828\u65E5B\u5317\u533A----------------------------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u732B4.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u732B6.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u732B\uFF0C\u5C5E\u4E8E\u732B\u79D1\u52A8\u7269\uFF0C\u662F\u5168\u4E16\u754C\u5BB6\u5EAD\u4E2D\u8F83\u4E3A\u5E7F\u6CDB\u7684\u5BA0\u7269\u3002

*\u6E2F\u91CC\u9762\u597D\u591A\u732B\u732B\u72D7\u72D7\uFF0C\u6211\u4F4F\u7684B\u5317\u533A\u6709\u4E00\u53EA\u4E09\u82B1\u4E00\u53EA\u6A58\u732B\u3002\u540E\u6765\u53C8\u6765\u4E86\u4E00\u53EA\u5976\u725B\u732B\uFF0C\u8FD9\u4E9B\u{1F431}\u751F\u4E86\u597D\u591A\u5C0F\u732B\u3002*`,frontmatter:{},index:33,start:823,end:848,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:Ox,meta:{slide:{raw:`
# \u72D7

XWD\u62CD\u6444\u4E8E2022\u5E745\u67086\u65E5\u64CD\u573A--------------------------\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670819\u65E5\u6DB5\u82F1\u697C\u5317\u64CD\u573A----------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u5927\u9EC41.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u5C0F\u767D1.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u72D7\uFF0C\u810A\u7D22\u52A8\u7269\u95E8\u3001\u810A\u690E\u52A8\u7269\u4E9A\u95E8\u3001\u54FA\u4E73\u7EB2\u3001\u771F\u517D\u4E9A\u7EB2\u3001\u98DF\u8089\u76EE\u3001\u88C2\u811A\u4E9A\u76EE\u3001\u72AC\u79D1\u52A8\u7269\u3002

*\u5927\u9EC4\u{1F415}\u53EF\u4EE5\u6478\uFF0C\u8FD8\u4F1A\u8FFD\u732B\uFF0C\u8DD1\u6B65\u592A\u5FEB\u4ED6\u4F1A\u64B5\u4F60\u3002\u5C0F\u767D\u633A\u53EF\u7231\u7684\uFF0C\u542C\u8BF4\u4E5F\u5F88\u542C\u8BDD\uFF0C\u51FA\u73B0\u9891\u7387\u6BD4\u5927\u9EC4\u4F4E\u4E00\u4E9B\u3002*
`,title:"\u72D7",level:1,content:`# \u72D7

XWD\u62CD\u6444\u4E8E2022\u5E745\u67086\u65E5\u64CD\u573A--------------------------\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670819\u65E5\u6DB5\u82F1\u697C\u5317\u64CD\u573A----------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u5927\u9EC41.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u5C0F\u767D1.jpg" class="w-125 mx-auto"/>

</div>

</div>

\u72D7\uFF0C\u810A\u7D22\u52A8\u7269\u95E8\u3001\u810A\u690E\u52A8\u7269\u4E9A\u95E8\u3001\u54FA\u4E73\u7EB2\u3001\u771F\u517D\u4E9A\u7EB2\u3001\u98DF\u8089\u76EE\u3001\u88C2\u811A\u4E9A\u76EE\u3001\u72AC\u79D1\u52A8\u7269\u3002

*\u5927\u9EC4\u{1F415}\u53EF\u4EE5\u6478\uFF0C\u8FD8\u4F1A\u8FFD\u732B\uFF0C\u8DD1\u6B65\u592A\u5FEB\u4ED6\u4F1A\u64B5\u4F60\u3002\u5C0F\u767D\u633A\u53EF\u7231\u7684\uFF0C\u542C\u8BF4\u4E5F\u5F88\u542C\u8BDD\uFF0C\u51FA\u73B0\u9891\u7387\u6BD4\u5927\u9EC4\u4F4E\u4E00\u4E9B\u3002*`,frontmatter:{},index:34,start:849,end:874,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:jx,meta:{slide:{raw:`
<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

# \u7EA2\u5634\u84DD\u9E4A

Why\u62CD\u6444\u4E8E2022\u5E744\u670828\u65E5\uFF0C\u5728\u6DB5\u82F1\u697C\u5730\u4E0B\u8D85\u5E02\u5BF9\u9762\u7684\u5C0F\u5C71\u5761\u3002

\u7EA2\u5634\u84DD\u9E4A\uFF08Urocissa erythrorhyncha\uFF09\u662F\u5927\u578B\u9E26\u7C7B\uFF0C\u4F53\u957F54-65\u5398\u7C73\u3002\u5634\u3001\u811A\u7EA2\u8272\uFF0C\u5934\u3001\u9888\u3001\u5589\u548C\u80F8\u9ED1\u8272\uFF0C\u5934\u9876\u81F3\u540E\u9888\u6709\u4E00\u5757\u767D\u8272\u81F3\u6DE1\u84DD\u767D\u8272\u6216\u7D2B\u7070\u8272\u5757\u6591\uFF0C\u5176\u4F59\u4E0A\u4F53\u7D2B\u84DD\u7070\u8272\u6216\u6DE1\u84DD\u7070\u8910\u8272\u3002\u5C3E\u957F\u5448\u51F8\u72B6\u5177\u9ED1\u8272\u4E9A\u7AEF\u6591\u548C\u767D\u8272\u7AEF\u6591\u3002\u4E0B\u4F53\u767D\u8272\u3002 \u9EC4\u5634\u84DD\u9E4A\u5916\u5F62\u548C\u7FBD\u8272\u548C\u8BE5\u79CD\u975E\u5E38\u76F8\u4F3C\uFF0C\u4F46\u9EC4\u5634\u84DD\u9E4A\u5634\u4E3A\u9EC4\u8272\uFF0C\u5934\u90E8\u4EC5\u6795\u6709\u767D\u8272\u5757\u6591\u3002

\u5E7F\u6CDB\u5206\u5E03\u4E8E\u6797\u7F18\u5730\u5E26\u3001\u704C\u4E1B\u751A\u81F3\u6751\u5E84\u3002\u6027\u55A7\u95F9\uFF0C\u7ED3\u5C0F\u7FA4\u6D3B\u52A8\u3002\u4EE5\u679C\u5B9E\u3001\u5C0F\u578B\u9E1F\u7C7B\u53CA\u5375\u3001\u6606\u866B\u4E3A\u98DF\uFF0C\u5E38\u5728\u5730\u9762\u53D6\u98DF\u3002\u559C\u9A6C\u62C9\u96C5\u5C71\u8109\u3001\u5370\u5EA6\u4E1C\u5317\u90E8\u3001\u4E2D\u56FD\u3001\u7F05\u7538\u53CA\u5370\u5EA6\u652F\u90A3\u5747\u6709\u5206\u5E03\u3002

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u7EA2\u5634\u84DD\u9E4A1.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u7EA2\u5634\u84DD\u9E4A2.jpg" class="w-70 mx-auto"/>

</div>

</div>
`,title:"\u7EA2\u5634\u84DD\u9E4A",level:1,content:`<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

# \u7EA2\u5634\u84DD\u9E4A

Why\u62CD\u6444\u4E8E2022\u5E744\u670828\u65E5\uFF0C\u5728\u6DB5\u82F1\u697C\u5730\u4E0B\u8D85\u5E02\u5BF9\u9762\u7684\u5C0F\u5C71\u5761\u3002

\u7EA2\u5634\u84DD\u9E4A\uFF08Urocissa erythrorhyncha\uFF09\u662F\u5927\u578B\u9E26\u7C7B\uFF0C\u4F53\u957F54-65\u5398\u7C73\u3002\u5634\u3001\u811A\u7EA2\u8272\uFF0C\u5934\u3001\u9888\u3001\u5589\u548C\u80F8\u9ED1\u8272\uFF0C\u5934\u9876\u81F3\u540E\u9888\u6709\u4E00\u5757\u767D\u8272\u81F3\u6DE1\u84DD\u767D\u8272\u6216\u7D2B\u7070\u8272\u5757\u6591\uFF0C\u5176\u4F59\u4E0A\u4F53\u7D2B\u84DD\u7070\u8272\u6216\u6DE1\u84DD\u7070\u8910\u8272\u3002\u5C3E\u957F\u5448\u51F8\u72B6\u5177\u9ED1\u8272\u4E9A\u7AEF\u6591\u548C\u767D\u8272\u7AEF\u6591\u3002\u4E0B\u4F53\u767D\u8272\u3002 \u9EC4\u5634\u84DD\u9E4A\u5916\u5F62\u548C\u7FBD\u8272\u548C\u8BE5\u79CD\u975E\u5E38\u76F8\u4F3C\uFF0C\u4F46\u9EC4\u5634\u84DD\u9E4A\u5634\u4E3A\u9EC4\u8272\uFF0C\u5934\u90E8\u4EC5\u6795\u6709\u767D\u8272\u5757\u6591\u3002

\u5E7F\u6CDB\u5206\u5E03\u4E8E\u6797\u7F18\u5730\u5E26\u3001\u704C\u4E1B\u751A\u81F3\u6751\u5E84\u3002\u6027\u55A7\u95F9\uFF0C\u7ED3\u5C0F\u7FA4\u6D3B\u52A8\u3002\u4EE5\u679C\u5B9E\u3001\u5C0F\u578B\u9E1F\u7C7B\u53CA\u5375\u3001\u6606\u866B\u4E3A\u98DF\uFF0C\u5E38\u5728\u5730\u9762\u53D6\u98DF\u3002\u559C\u9A6C\u62C9\u96C5\u5C71\u8109\u3001\u5370\u5EA6\u4E1C\u5317\u90E8\u3001\u4E2D\u56FD\u3001\u7F05\u7538\u53CA\u5370\u5EA6\u652F\u90A3\u5747\u6709\u5206\u5E03\u3002

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u7EA2\u5634\u84DD\u9E4A1.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u7EA2\u5634\u84DD\u9E4A2.jpg" class="w-70 mx-auto"/>

</div>

</div>`,frontmatter:{},index:35,start:875,end:904,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:Cx,meta:{slide:{raw:`
<div style="display:flex;">

<div style="width: 60%;">

# \u767D\u9E3D

\u5FB7\u534E\u62CD\u6444\u4E8E2021\u5E7411\u67084\u65E5\u725B\u987F\u96D5\u50CF\uFF0C2022\u5E746\u670821\u65E5\u6DB5\u82F1\u697C\u5357\u5E7F\u573A

<img src="/\u5927\u578B\u52A8\u7269/\u767D\u9E3D2.jpg" class="w-100 mx-auto"/>

\u{1F54A}\u9E3D\u5F62\u76EE\u9E20\u9E3D\u79D1\u9E3D\u5C5E\u4E0B\u7684\u52A8\u7269

*\u65C1\u8FB9\u6709\u552E\u8D27\u673A\u5356\u9E3D\u7CAE\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u7F51\u4E0A\u4E70\u4E00\u5927\u888B\u5B50\u6765\u5582\uFF0C\u5B8C\u5168\u4E0D\u6015\u4EBA\u3002\u5F00\u5B66\u548C\u6BD5\u4E1A\u5178\u793C\u7684\u65F6\u5019\u4F1A\u653E\u98DE\uFF0C\u5F88\u597D\u770B\u3002*

</div>

<div style="width: 40%;">

<img src="/\u5927\u578B\u52A8\u7269/\u767D\u9E3D1.jpg" class="w-70 mx-auto"/>

</div>

</div>
`,title:"\u767D\u9E3D",level:1,content:`<div style="display:flex;">

<div style="width: 60%;">

# \u767D\u9E3D

\u5FB7\u534E\u62CD\u6444\u4E8E2021\u5E7411\u67084\u65E5\u725B\u987F\u96D5\u50CF\uFF0C2022\u5E746\u670821\u65E5\u6DB5\u82F1\u697C\u5357\u5E7F\u573A

<img src="/\u5927\u578B\u52A8\u7269/\u767D\u9E3D2.jpg" class="w-100 mx-auto"/>

\u{1F54A}\u9E3D\u5F62\u76EE\u9E20\u9E3D\u79D1\u9E3D\u5C5E\u4E0B\u7684\u52A8\u7269

*\u65C1\u8FB9\u6709\u552E\u8D27\u673A\u5356\u9E3D\u7CAE\uFF0C\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u7F51\u4E0A\u4E70\u4E00\u5927\u888B\u5B50\u6765\u5582\uFF0C\u5B8C\u5168\u4E0D\u6015\u4EBA\u3002\u5F00\u5B66\u548C\u6BD5\u4E1A\u5178\u793C\u7684\u65F6\u5019\u4F1A\u653E\u98DE\uFF0C\u5F88\u597D\u770B\u3002*

</div>

<div style="width: 40%;">

<img src="/\u5927\u578B\u52A8\u7269/\u767D\u9E3D1.jpg" class="w-70 mx-auto"/>

</div>

</div>`,frontmatter:{},index:36,start:905,end:930,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:Lx,meta:{slide:{raw:`
<div style="display:flex;">

<div style="width: 60%;">

# \u9EBB\u96C0

\u5FB7\u534E2022.6.26 C\u98DF\u5802\u4E8C\u697C\uFF0C\u4F24\u4E0D\u8D772022.6.25 \u7F51\u7403\u573A\u5916

<img src="/\u5927\u578B\u52A8\u7269/\u9EBB\u96C01.jpg" class="w-100 mx-auto"/>

\u9EBB\u96C0\uFF08Passer\uFF09\uFF1A\u662F\u96C0\u79D1\u9EBB\u96C0\u5C5E27\u79CD\u5C0F\u578B\u9E1F\u7C7B\u7684\u7EDF\u79F0\u3002\u5B83\u4EEC\u7684\u5927\u5C0F\u3001\u4F53\u8272\u751A\u76F8\u8FD1\u3002\u4E00\u822C\u4E0A\u4F53\u5448\u68D5\u3001\u9ED1\u8272\u7684\u6591\u6742\u72B6\uFF0C\u56E0\u800C\u4FD7\u79F0\u9EBB\u96C0\u3002

*\u9EBB\u96C0\u968F\u5904\u53EF\u89C1\uFF0C\u4F46\u662F\u8FD9\u4E9B\u5BB6\u4F19\u592A\u7CBE\u4E86\uFF0C\u6BCF\u6B21\u8981\u62CD\u7167\u5B83\u4EEC\u5C31\u8DD1\u4E86\u3002*

</div>

<div style="width: 40%;">

<img src="/\u5927\u578B\u52A8\u7269/\u9EBB\u96C02.jpg" class="w-100 mx-auto"/>

</div>

</div>
`,title:"\u9EBB\u96C0",level:1,content:`<div style="display:flex;">

<div style="width: 60%;">

# \u9EBB\u96C0

\u5FB7\u534E2022.6.26 C\u98DF\u5802\u4E8C\u697C\uFF0C\u4F24\u4E0D\u8D772022.6.25 \u7F51\u7403\u573A\u5916

<img src="/\u5927\u578B\u52A8\u7269/\u9EBB\u96C01.jpg" class="w-100 mx-auto"/>

\u9EBB\u96C0\uFF08Passer\uFF09\uFF1A\u662F\u96C0\u79D1\u9EBB\u96C0\u5C5E27\u79CD\u5C0F\u578B\u9E1F\u7C7B\u7684\u7EDF\u79F0\u3002\u5B83\u4EEC\u7684\u5927\u5C0F\u3001\u4F53\u8272\u751A\u76F8\u8FD1\u3002\u4E00\u822C\u4E0A\u4F53\u5448\u68D5\u3001\u9ED1\u8272\u7684\u6591\u6742\u72B6\uFF0C\u56E0\u800C\u4FD7\u79F0\u9EBB\u96C0\u3002

*\u9EBB\u96C0\u968F\u5904\u53EF\u89C1\uFF0C\u4F46\u662F\u8FD9\u4E9B\u5BB6\u4F19\u592A\u7CBE\u4E86\uFF0C\u6BCF\u6B21\u8981\u62CD\u7167\u5B83\u4EEC\u5C31\u8DD1\u4E86\u3002*

</div>

<div style="width: 40%;">

<img src="/\u5927\u578B\u52A8\u7269/\u9EBB\u96C02.jpg" class="w-100 mx-auto"/>

</div>

</div>`,frontmatter:{},index:37,start:931,end:956,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:Ix,meta:{slide:{raw:`
<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u8759\u8760

\u4F24\u4E0D\u8D77\u62CD\u6444\u4E8E2022\u5E747\u670811\u65E5C\u533A\u5BBF\u820D\u5185

\u8759\u8760\u{1F987}\uFF08\u5B66\u540D\uFF1AChiroptera\uFF09\u662F\u810A\u7D22\u52A8\u7269\u95E8\u3001\u54FA\u4E73\u7EB2\u4E0B\u7684\u4E00\u7C7B\u52A8\u7269\uFF0C\u662F\u552F\u4E00\u80FD\u591F\u771F\u6B63\u98DE\u7FD4\u7684\u54FA\u4E73\u52A8\u7269\uFF1B\u9664\u4E00\u822C\u54FA\u4E73\u52A8\u7269\u7684\u7279\u70B9\u5916\uFF0C\u8FD8\u6709\u4E00\u7CFB\u5217\u9002\u5E94\u98DE\u884C\u7684\u5F62\u6001\u7279\u5F81 \u3002\u6700\u5C0F\u7684\u662F\u6DF7\u5408\u8760\uFF0C\u4F53\u91CD\u4EC5\u67091.9\u514B\uFF0C\u7FFC\u5C5516\u5398\u7C73\uFF1B\u4E00\u4E9B\u72D0\u8760\u7684\u4F53\u91CD\u53EF\u4EE5\u8D85\u8FC71.3\u5343\u514B\uFF0C\u7FFC\u5C55\u53EF\u8FBE1.7\u7C73\u3002\u8759\u8760\u5168\u8EAB\u9AA8\u8D28\u8F7B\uFF0C\u5934\u9AA8\u6108\u5408\u7A0B\u5EA6\u8F83\u9AD8\uFF0C\u80A9\u5E26\u53D1\u8FBE\uFF0C\u80F8\u9AA8\u5177\u9F99\u9AA8\u72B6\u7A81\u8D77\u3002\u540E\u80A2\u80EB\u9AA8\u3001\u8153\u9AA8\u9000\u5316\u3002\u8033\u58F3\u53D1\u8FBE\uFF0C\u5E38\u5177\u53D1\u8FBE\u7684\u8033\u5C4F\u6216\u5BF9\u8033\u5C4F\u3002\u7FFC\u819C\u3001\u8033\u3001\u5507\u7B49\u5904\u6709\u4E30\u5BCC\u7684\u611F\u89C9\u6BDB\u3002\u989C\u8272\u591A\u6837\uFF0C\u5927\u591A\u662F\u8910\u8272\u3001\u7070\u8272\u548C\u9ED1\u8272\u3002

*\u521B\u65B0\u6E2F\u7684\u8759\u8760\u5176\u5B9E\u5F88\u591A\uFF0C\u4E0B\u96E8\u524D\u7A7A\u6C14\u6E7F\u5EA6\u5927\u866B\u5B50\u4F4E\u98DE\u5B83\u4EEC\u5C31\u66F4\u591A\u4E86\u3002\u5E73\u65F6\u665A\u4E0A\u64CD\u573A\u5927\u706F\u65C1\u8FB9\u98DE\u821E\u7684\u90FD\u662F\u8759\u8760\uFF0C\u597D\u591A\u65F6\u5019\u5927\u5BB6\u90FD\u6CA1\u6709\u6CE8\u610F\u3002*

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u8759\u87601.jpg" class="w-90 mx-auto"/>

</div>

</div>
`,title:"\u8759\u8760",level:1,content:`<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u8759\u8760

\u4F24\u4E0D\u8D77\u62CD\u6444\u4E8E2022\u5E747\u670811\u65E5C\u533A\u5BBF\u820D\u5185

\u8759\u8760\u{1F987}\uFF08\u5B66\u540D\uFF1AChiroptera\uFF09\u662F\u810A\u7D22\u52A8\u7269\u95E8\u3001\u54FA\u4E73\u7EB2\u4E0B\u7684\u4E00\u7C7B\u52A8\u7269\uFF0C\u662F\u552F\u4E00\u80FD\u591F\u771F\u6B63\u98DE\u7FD4\u7684\u54FA\u4E73\u52A8\u7269\uFF1B\u9664\u4E00\u822C\u54FA\u4E73\u52A8\u7269\u7684\u7279\u70B9\u5916\uFF0C\u8FD8\u6709\u4E00\u7CFB\u5217\u9002\u5E94\u98DE\u884C\u7684\u5F62\u6001\u7279\u5F81 \u3002\u6700\u5C0F\u7684\u662F\u6DF7\u5408\u8760\uFF0C\u4F53\u91CD\u4EC5\u67091.9\u514B\uFF0C\u7FFC\u5C5516\u5398\u7C73\uFF1B\u4E00\u4E9B\u72D0\u8760\u7684\u4F53\u91CD\u53EF\u4EE5\u8D85\u8FC71.3\u5343\u514B\uFF0C\u7FFC\u5C55\u53EF\u8FBE1.7\u7C73\u3002\u8759\u8760\u5168\u8EAB\u9AA8\u8D28\u8F7B\uFF0C\u5934\u9AA8\u6108\u5408\u7A0B\u5EA6\u8F83\u9AD8\uFF0C\u80A9\u5E26\u53D1\u8FBE\uFF0C\u80F8\u9AA8\u5177\u9F99\u9AA8\u72B6\u7A81\u8D77\u3002\u540E\u80A2\u80EB\u9AA8\u3001\u8153\u9AA8\u9000\u5316\u3002\u8033\u58F3\u53D1\u8FBE\uFF0C\u5E38\u5177\u53D1\u8FBE\u7684\u8033\u5C4F\u6216\u5BF9\u8033\u5C4F\u3002\u7FFC\u819C\u3001\u8033\u3001\u5507\u7B49\u5904\u6709\u4E30\u5BCC\u7684\u611F\u89C9\u6BDB\u3002\u989C\u8272\u591A\u6837\uFF0C\u5927\u591A\u662F\u8910\u8272\u3001\u7070\u8272\u548C\u9ED1\u8272\u3002

*\u521B\u65B0\u6E2F\u7684\u8759\u8760\u5176\u5B9E\u5F88\u591A\uFF0C\u4E0B\u96E8\u524D\u7A7A\u6C14\u6E7F\u5EA6\u5927\u866B\u5B50\u4F4E\u98DE\u5B83\u4EEC\u5C31\u66F4\u591A\u4E86\u3002\u5E73\u65F6\u665A\u4E0A\u64CD\u573A\u5927\u706F\u65C1\u8FB9\u98DE\u821E\u7684\u90FD\u662F\u8759\u8760\uFF0C\u597D\u591A\u65F6\u5019\u5927\u5BB6\u90FD\u6CA1\u6709\u6CE8\u610F\u3002*

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u8759\u87601.jpg" class="w-90 mx-auto"/>

</div>

</div>`,frontmatter:{},index:38,start:957,end:980,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:zx,meta:{slide:{raw:`
# \u87FE\u870D

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670824\u65E5\u64CD\u573A\u5357\u4FA7------------------------2022\u5E747\u670812\u65E5\u64CD\u573A\u5317\u4FA7-----------------------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u87FE\u870D1.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u87FE\u870D2.jpg" class="w-100 mx-auto"/>

</div>

</div>

\u87FE\u870D\uFF0C\u4E5F\u53EB\u86E4\u87C6\u3002\u4E24\u6816\u52A8\u7269\uFF0C\u4F53\u8868\u6709\u8BB8\u591A\u7599\u7629\uFF0C\u5185\u6709\u6BD2\u817A\uFF0C\u4FD7\u79F0\u765E\u86E4\u87C6\u3001\u765E\u7334\u5B50\u3001\u765E\u523A\u3001\u765E\u7599\u5B9D\u3002

*\u603B\u5728\u64CD\u573A\u542C\u89C1\u86E4\u87C6\u53EB\uFF0C\u8FD9\u5929\u8DD1\u6B65\u65F6\u5019\u770B\u89C1\u6709\u4EBA\u56F4\u7740\u62CD\uFF0C\u603B\u7B97\u8BA9\u6211\u902E\u5230\u4E86\u3002*
`,title:"\u87FE\u870D",level:1,content:`# \u87FE\u870D

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670824\u65E5\u64CD\u573A\u5357\u4FA7------------------------2022\u5E747\u670812\u65E5\u64CD\u573A\u5317\u4FA7-----------------------------

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u87FE\u870D1.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u87FE\u870D2.jpg" class="w-100 mx-auto"/>

</div>

</div>

\u87FE\u870D\uFF0C\u4E5F\u53EB\u86E4\u87C6\u3002\u4E24\u6816\u52A8\u7269\uFF0C\u4F53\u8868\u6709\u8BB8\u591A\u7599\u7629\uFF0C\u5185\u6709\u6BD2\u817A\uFF0C\u4FD7\u79F0\u765E\u86E4\u87C6\u3001\u765E\u7334\u5B50\u3001\u765E\u523A\u3001\u765E\u7599\u5B9D\u3002

*\u603B\u5728\u64CD\u573A\u542C\u89C1\u86E4\u87C6\u53EB\uFF0C\u8FD9\u5929\u8DD1\u6B65\u65F6\u5019\u770B\u89C1\u6709\u4EBA\u56F4\u7740\u62CD\uFF0C\u603B\u7B97\u8BA9\u6211\u902E\u5230\u4E86\u3002*`,frontmatter:{},index:39,start:981,end:1006,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:Yx,meta:{slide:{raw:`
# \u86C7

iT\u3002iT\u62CD\u6444\u4E8E2022\u5E7407\u670818\u65E5\uFF0C\u56DB\u53F7\u697C1\u697C\u3002

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

\u77ED\u5C3E\u876E\u{1F40D}\uFF08\u5B66\u540D\uFF1AGloydius brevicaudus\uFF09\u53C8\u79F0\u8349\u4E0A\u98DE\u3001\u5730\u6241\u86C7\uFF0C\u5267\u6BD2\u3002\u4F53\u8F83\u77ED\u7C97\uFF0C\u5934\u7565\u5448\u4E09\u89D2\u5F62\uFF0C\u4E0E\u9888\u533A\u5206\u660E\u663E\uFF0C\u543B\u68F1\u660E\u663E\uFF0C\u5C3E\u77ED\uFF0C\u5177\u7BA1\u7259\uFF1B\u6709\u988A\u7A9D\u3002\u5934\u80CC\u6DF1\u68D5\u8272\uFF0C\u4F53\u8179\u9762\u7070\u767D\u8272\uFF0C\u5C3E\u5C16\u68D5\u9ED1\u8272\u3002\u4E2D\u56FD\u56FD\u5185\u5206\u5E03\u4E8E\u5317\u4EAC\u3001\u5929\u6D25\u3001\u6CB3\u5317\u3001\u8FBD\u5B81\u3001\u4E0A\u6D77\u3001\u6C5F\u82CF\u3001\u6D59\u6C5F\u3001\u5B89\u5FBD\u3001\u798F\u5EFA\u3001\u6C5F\u897F\u3001\u6E56\u5317\u3001\u6E56\u5357\u3001\u56DB\u5DDD\u3001\u8D35\u5DDE\u3001\u9655\u897F\u3001\u7518\u8083\u3001\u5E7F\u4E1C\uFF08\u5357\u6FB3\uFF09\u3002

*\u521B\u65B0\u6E2F\u8FD8\u6709\u8FD9\u79CD\u4E1C\u897F\u7740\u5B9E\u628A\u6211\u5413\u4E86\u4E00\u8DF3\uFF0C\u8001\u5144\u4E0A[\u86C7\u5427](https://tieba.baidu.com/p/7930370200?pid=144788736187&cid=0#144788736187)\u8BF7\u6559\u4E86\u786E\u5B9E\u662F\u6BD2\u86C7\uFF0C\u5E73\u65F6\u8981\u6CE8\u610F\u4E00\u4E0B\u4E86\u3002*

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u86C71.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u86C72.jpg" class="w-70 mx-auto"/>

</div>

</div>
`,title:"\u86C7",level:1,content:`# \u86C7

iT\u3002iT\u62CD\u6444\u4E8E2022\u5E7407\u670818\u65E5\uFF0C\u56DB\u53F7\u697C1\u697C\u3002

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

\u77ED\u5C3E\u876E\u{1F40D}\uFF08\u5B66\u540D\uFF1AGloydius brevicaudus\uFF09\u53C8\u79F0\u8349\u4E0A\u98DE\u3001\u5730\u6241\u86C7\uFF0C\u5267\u6BD2\u3002\u4F53\u8F83\u77ED\u7C97\uFF0C\u5934\u7565\u5448\u4E09\u89D2\u5F62\uFF0C\u4E0E\u9888\u533A\u5206\u660E\u663E\uFF0C\u543B\u68F1\u660E\u663E\uFF0C\u5C3E\u77ED\uFF0C\u5177\u7BA1\u7259\uFF1B\u6709\u988A\u7A9D\u3002\u5934\u80CC\u6DF1\u68D5\u8272\uFF0C\u4F53\u8179\u9762\u7070\u767D\u8272\uFF0C\u5C3E\u5C16\u68D5\u9ED1\u8272\u3002\u4E2D\u56FD\u56FD\u5185\u5206\u5E03\u4E8E\u5317\u4EAC\u3001\u5929\u6D25\u3001\u6CB3\u5317\u3001\u8FBD\u5B81\u3001\u4E0A\u6D77\u3001\u6C5F\u82CF\u3001\u6D59\u6C5F\u3001\u5B89\u5FBD\u3001\u798F\u5EFA\u3001\u6C5F\u897F\u3001\u6E56\u5317\u3001\u6E56\u5357\u3001\u56DB\u5DDD\u3001\u8D35\u5DDE\u3001\u9655\u897F\u3001\u7518\u8083\u3001\u5E7F\u4E1C\uFF08\u5357\u6FB3\uFF09\u3002

*\u521B\u65B0\u6E2F\u8FD8\u6709\u8FD9\u79CD\u4E1C\u897F\u7740\u5B9E\u628A\u6211\u5413\u4E86\u4E00\u8DF3\uFF0C\u8001\u5144\u4E0A[\u86C7\u5427](https://tieba.baidu.com/p/7930370200?pid=144788736187&cid=0#144788736187)\u8BF7\u6559\u4E86\u786E\u5B9E\u662F\u6BD2\u86C7\uFF0C\u5E73\u65F6\u8981\u6CE8\u610F\u4E00\u4E0B\u4E86\u3002*

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u86C71.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5927\u578B\u52A8\u7269/\u86C72.jpg" class="w-70 mx-auto"/>

</div>

</div>`,frontmatter:{},index:40,start:1007,end:1036,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:e$,meta:{slide:{raw:`
<br/>
<br/>

<div style="color:#FF0000; font-size: 90px;">
Warning\uFF01\uFF01\uFF01
</div>

<br/><br/>

<div style="font-size: 50px;color: #2B90B6;">
\u4EE5\u4E0B\u5185\u5BB9\u53EF\u80FD\u4F1A\u9020\u6210\u4E0D\u9002\uFF0C\u8BF7\u8C28\u614E\u89C2\u770B
</div>
`,content:`<br/>
<br/>

<div style="color:#FF0000; font-size: 90px;">
Warning\uFF01\uFF01\uFF01
</div>

<br/><br/>

<div style="font-size: 50px;color: #2B90B6;">
\u4EE5\u4E0B\u5185\u5BB9\u53EF\u80FD\u4F1A\u9020\u6210\u4E0D\u9002\uFF0C\u8BF7\u8C28\u614E\u89C2\u770B
</div>`,frontmatter:{},index:41,start:1037,end:1051,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:o$,meta:{slide:{raw:`
# \u52A8\u7269\u2014\u2014\u5C0F\u578B\u52A8\u7269

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u879F\u86FE\u79D11.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u62DF\u6B65\u7532\u79D11.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u5C0F\u5730\u8001\u864E1.jpg" class="w-60 mx-auto"/>

</div>

</div>

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div class="grid grid-rows-2 gap-0 pt-0 -mb-0">
<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u7126\u6591\u8273\u9752\u5C3A\u86FE1.jpg" class="h-30 mx-auto"/>

</div>
<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u4E1C\u4E9A\u98DE\u87571.jpg" class="h-30 mx-auto"/>

</div>
</div>
    
<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u8717\u725B1.jpg" class="w-100 mx-auto"/>

</div>

<div>

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u87CB\u87C01.jpg" class="w-50 mx-auto"/>

</div>
<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u4E3D\u91D1\u9F9F1.jpg" class="w-50 mx-auto"/>

</div>
</div>

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
`,title:"\u52A8\u7269\u2014\u2014\u5C0F\u578B\u52A8\u7269",level:1,content:`# \u52A8\u7269\u2014\u2014\u5C0F\u578B\u52A8\u7269

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u879F\u86FE\u79D11.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u62DF\u6B65\u7532\u79D11.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u5C0F\u5730\u8001\u864E1.jpg" class="w-60 mx-auto"/>

</div>

</div>

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div class="grid grid-rows-2 gap-0 pt-0 -mb-0">
<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u7126\u6591\u8273\u9752\u5C3A\u86FE1.jpg" class="h-30 mx-auto"/>

</div>
<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u4E1C\u4E9A\u98DE\u87571.jpg" class="h-30 mx-auto"/>

</div>
</div>
    
<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u8717\u725B1.jpg" class="w-100 mx-auto"/>

</div>

<div>

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u87CB\u87C01.jpg" class="w-50 mx-auto"/>

</div>
<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u4E3D\u91D1\u9F9F1.jpg" class="w-50 mx-auto"/>

</div>
</div>

</div>

</div>

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>`,frontmatter:{},index:42,start:1052,end:1130,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:f$,meta:{slide:{raw:`
# \u7070\u8776

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u7070\u87761.jpg" class="w-125 mx-auto"/>

\u7070\u8776 gossamer-winged butterfly \uFF0C\u9CDE\u7FC5\u76EE(Lepidoptera)\u7070\u8776\u79D1(Lycaenidae)\u7684\u6606\u866B\u3002
`,title:"\u7070\u8776",level:1,content:`# \u7070\u8776

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E747\u670812\u65E5\u56DB\u53F7\u697C\u9876\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u7070\u87761.jpg" class="w-125 mx-auto"/>

\u7070\u8776 gossamer-winged butterfly \uFF0C\u9CDE\u7FC5\u76EE(Lepidoptera)\u7070\u8776\u79D1(Lycaenidae)\u7684\u6606\u866B\u3002`,frontmatter:{},index:43,start:1131,end:1140,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:_$,meta:{slide:{raw:`
# \u7126\u6591\u8273\u9752\u5C3A\u86FE

Why\u62CD\u6444\u4E8E2021\u5E749\u67086\u65E5B\u533Ab03\u697C\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u7126\u6591\u8273\u9752\u5C3A\u86FE1.jpg" class="w-160 mx-auto"/>

\u7126\u6591\u8273\u9752\u5C3A\u86FE(Agathia curvifiniens Prout)\uFF0C\u5C3A\u86FE\u79D1\u8273\u9752\u5C3A\u86FE\u5C5E\u7684\u4E00\u4E2A\u7269\u79CD\u3002\u524D\u7FC5\u957F22mm\u3002\u5934\u9876\u53CA\u80F8\u90E8\u7C89\u9752\u8272\uFF0C\u8179\u90E8\u524D\u90E8\u7C89\u9752\uFF0C\u540E\u90E8\u7070\u7C89\u8272\uFF1B\u524D\u7FC5\u5916\u7EBF\u4E0B\u90E8\u4E00\u5927\u6591\uFF1B\u540E\u7FC5\u5916\u6709\u4E8C\u7A81\u8D77\uFF0C \u540E\u89D2\u4E0A\u4E00\u6D45\u6591\u6709\u788E\u7EB9\u3002\u7FC5\u53CD\u9762\u8272\u8F83\u6DE1\uFF0C\u6591\u7EB9\u8F83\u6DE1\u800C\u95F4\u65AD\u3002
`,title:"\u7126\u6591\u8273\u9752\u5C3A\u86FE",level:1,content:`# \u7126\u6591\u8273\u9752\u5C3A\u86FE

Why\u62CD\u6444\u4E8E2021\u5E749\u67086\u65E5B\u533Ab03\u697C\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u7126\u6591\u8273\u9752\u5C3A\u86FE1.jpg" class="w-160 mx-auto"/>

\u7126\u6591\u8273\u9752\u5C3A\u86FE(Agathia curvifiniens Prout)\uFF0C\u5C3A\u86FE\u79D1\u8273\u9752\u5C3A\u86FE\u5C5E\u7684\u4E00\u4E2A\u7269\u79CD\u3002\u524D\u7FC5\u957F22mm\u3002\u5934\u9876\u53CA\u80F8\u90E8\u7C89\u9752\u8272\uFF0C\u8179\u90E8\u524D\u90E8\u7C89\u9752\uFF0C\u540E\u90E8\u7070\u7C89\u8272\uFF1B\u524D\u7FC5\u5916\u7EBF\u4E0B\u90E8\u4E00\u5927\u6591\uFF1B\u540E\u7FC5\u5916\u6709\u4E8C\u7A81\u8D77\uFF0C \u540E\u89D2\u4E0A\u4E00\u6D45\u6591\u6709\u788E\u7EB9\u3002\u7FC5\u53CD\u9762\u8272\u8F83\u6DE1\uFF0C\u6591\u7EB9\u8F83\u6DE1\u800C\u95F4\u65AD\u3002`,frontmatter:{},index:44,start:1141,end:1150,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:x$,meta:{slide:{raw:`
# \u879F\u86FE\u79D1

Why\u62CD\u6444\u4E8E2021\u5E749\u67082\u65E5B\u533Ab03\u697C\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u879F\u86FE\u79D11.jpg" class="w-160 mx-auto"/>

\u879F\u86FE\u79D1(Pyralidae) \u4E3A\u9CDE\u7FC5\u76EE\uFF08Lepidoptera\uFF09\u4E2D\u7684\u4E00\u4E2A\u5927\u79D1\uFF0C\u5168\u4E16\u754C\u5DF2\u8BB0\u8F7D\u7EA61\u4E07\u79CD\uFF0C\u4E2D\u56FD\u5DF2\u77E5l000\u4F59\u79CD\uFF0C\u8BB8\u591A\u79CD\u7C7B\u4E3A\u519C\u4E1A\u4E0A\u7684\u91CD\u8981\u5BB3\u866B\u3002
`,title:"\u879F\u86FE\u79D1",level:1,content:`# \u879F\u86FE\u79D1

Why\u62CD\u6444\u4E8E2021\u5E749\u67082\u65E5B\u533Ab03\u697C\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u879F\u86FE\u79D11.jpg" class="w-160 mx-auto"/>

\u879F\u86FE\u79D1(Pyralidae) \u4E3A\u9CDE\u7FC5\u76EE\uFF08Lepidoptera\uFF09\u4E2D\u7684\u4E00\u4E2A\u5927\u79D1\uFF0C\u5168\u4E16\u754C\u5DF2\u8BB0\u8F7D\u7EA61\u4E07\u79CD\uFF0C\u4E2D\u56FD\u5DF2\u77E5l000\u4F59\u79CD\uFF0C\u8BB8\u591A\u79CD\u7C7B\u4E3A\u519C\u4E1A\u4E0A\u7684\u91CD\u8981\u5BB3\u866B\u3002`,frontmatter:{},index:45,start:1151,end:1160,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:O$,meta:{slide:{raw:`
# \u5C0F\u5730\u8001\u864E

Why\u62CD\u6444\u4E8E2021\u5E749\u670820\u65E5\uFF0C\u6CD3\u7406\u697C\u4E8C\u697C\u3002

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<br/>

\u5C0F\u5730\u8001\u864E(Agrotis ypsilon),\u53C8\u540D\u571F\u8695\uFF0C\u5207\u6839\u866B\u3002

<br/>

\u7ECF\u5386\u5375\uFF0C\u5E7C\u866B\uFF0C\u86F9\uFF0C\u6210\u866B\u3002\u5E74\u53D1\u751F\u4EE3\u6570\u968F\u5404\u5730\u6C14\u5019\u4E0D\u540C\u800C\u5F02\uFF0C\u6108\u5F80\u5357\u5E74\u53D1\u751F\u4EE3\u6570\u6108\u591A\uFF0C\u4EE5\u96E8\u91CF\u5145\u6C9B\u3001\u6C14\u5019\u6E7F\u6DA6\u7684\u957F\u6C5F\u4E2D\u4E0B\u6E38\u548C\u4E1C\u5357\u6CBF\u6D77\u53CA\u5317\u65B9\u7684\u4F4E\u6D3C\u5185\u6D9D\u6216\u704C\u533A\u53D1\u751F\u6BD4\u8F83\u4E25\u91CD\uFF1B\u5728\u957F\u6C5F\u4EE5\u5357\u4EE5\u86F9\u53CA\u5E7C\u866B\u8D8A\u51AC\uFF0C\u9002\u5B9C\u751F\u5B58\u6E29\u5EA6\u4E3A 15 \u2103\uFF5E25 \u2103 \u3002\u5BF9\u519C\u3001\u6797\u6728\u5E7C\u82D7\u5371\u5BB3\u5F88\u5927\uFF0C\u8F7B\u5219\u9020\u6210\u7F3A\u82D7\u65AD\u5784\uFF0C\u91CD\u5219\u6BC1\u79CD\u91CD\u64AD\u3002

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u5C0F\u5730\u8001\u864E1.jpg" class="w-120 mx-auto"/>

</div>

</div>
`,title:"\u5C0F\u5730\u8001\u864E",level:1,content:`# \u5C0F\u5730\u8001\u864E

Why\u62CD\u6444\u4E8E2021\u5E749\u670820\u65E5\uFF0C\u6CD3\u7406\u697C\u4E8C\u697C\u3002

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<br/>

\u5C0F\u5730\u8001\u864E(Agrotis ypsilon),\u53C8\u540D\u571F\u8695\uFF0C\u5207\u6839\u866B\u3002

<br/>

\u7ECF\u5386\u5375\uFF0C\u5E7C\u866B\uFF0C\u86F9\uFF0C\u6210\u866B\u3002\u5E74\u53D1\u751F\u4EE3\u6570\u968F\u5404\u5730\u6C14\u5019\u4E0D\u540C\u800C\u5F02\uFF0C\u6108\u5F80\u5357\u5E74\u53D1\u751F\u4EE3\u6570\u6108\u591A\uFF0C\u4EE5\u96E8\u91CF\u5145\u6C9B\u3001\u6C14\u5019\u6E7F\u6DA6\u7684\u957F\u6C5F\u4E2D\u4E0B\u6E38\u548C\u4E1C\u5357\u6CBF\u6D77\u53CA\u5317\u65B9\u7684\u4F4E\u6D3C\u5185\u6D9D\u6216\u704C\u533A\u53D1\u751F\u6BD4\u8F83\u4E25\u91CD\uFF1B\u5728\u957F\u6C5F\u4EE5\u5357\u4EE5\u86F9\u53CA\u5E7C\u866B\u8D8A\u51AC\uFF0C\u9002\u5B9C\u751F\u5B58\u6E29\u5EA6\u4E3A 15 \u2103\uFF5E25 \u2103 \u3002\u5BF9\u519C\u3001\u6797\u6728\u5E7C\u82D7\u5371\u5BB3\u5F88\u5927\uFF0C\u8F7B\u5219\u9020\u6210\u7F3A\u82D7\u65AD\u5784\uFF0C\u91CD\u5219\u6BC1\u79CD\u91CD\u64AD\u3002

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u5C0F\u5730\u8001\u864E1.jpg" class="w-120 mx-auto"/>

</div>

</div>`,frontmatter:{},index:46,start:1161,end:1188,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:T$,meta:{slide:{raw:`
# \u6591\u8863\u8721\u8749

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670830\u65E5C\u9053\u79D1\u5E7F\u573A\u5916\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u6591\u8863\u8721\u87491.jpg" class="w-120 mx-auto"/>

\u6591\u8863\u8721\u8749\uFF08Lycorma delicatula\uFF09\u662F\u540C\u7FC5\u76EE\u8721\u8749\u79D1\u7684\u6606\u866B\uFF0C\u6C11\u95F4\u4FD7\u79F0\u201C\u82B1\u59D1\u5A18\u201D\u3001\u201C\u693F\u8E66\u201D\u3001\u201C\u82B1\u8E66\u8E66\u201D\u3001\u201C\u7070\u82B1\u86FE\u201D\u7B49\u3002
`,title:"\u6591\u8863\u8721\u8749",level:1,content:`# \u6591\u8863\u8721\u8749

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670830\u65E5C\u9053\u79D1\u5E7F\u573A\u5916\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u6591\u8863\u8721\u87491.jpg" class="w-120 mx-auto"/>

\u6591\u8863\u8721\u8749\uFF08Lycorma delicatula\uFF09\u662F\u540C\u7FC5\u76EE\u8721\u8749\u79D1\u7684\u6606\u866B\uFF0C\u6C11\u95F4\u4FD7\u79F0\u201C\u82B1\u59D1\u5A18\u201D\u3001\u201C\u693F\u8E66\u201D\u3001\u201C\u82B1\u8E66\u8E66\u201D\u3001\u201C\u7070\u82B1\u86FE\u201D\u7B49\u3002`,frontmatter:{},index:47,start:1189,end:1198,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:N$,meta:{slide:{raw:`
# \u871C\u8702

\u4F24\u4E0D\u8D77\u62CD\u6444\u4E8E2022\u5E74 \u5177\u4F53\u65F6\u95F4\u672A\u77E5\uFF0C\u5730\u70B9\u672A\u77E5\uFF08\u5927\u6982\u5728\u64CD\u573A\u65C1\u8FB9\uFF09

<img src="/\u5C0F\u578B\u52A8\u7269/\u871C\u87021.jpg" class="w-120 mx-auto"/>

\u4E2D\u534E\u871C\u8702\u{1F41D}\u8EAF\u4F53\u8F83\u5C0F\uFF0C\u5934\u80F8\u90E8\u5448\u9ED1\u8272\uFF0C\u8702\u4F53\u957F11mm\u5DE6\u53F3\uFF0C\u5599\u957F5mm\u5DE6\u53F3\uFF0C\u8179\u8282\u80CC\u677F\u5448\u9ED1\u8272\u9EC4\u8272\u73AF\u3002
`,title:"\u871C\u8702",level:1,content:`# \u871C\u8702

\u4F24\u4E0D\u8D77\u62CD\u6444\u4E8E2022\u5E74 \u5177\u4F53\u65F6\u95F4\u672A\u77E5\uFF0C\u5730\u70B9\u672A\u77E5\uFF08\u5927\u6982\u5728\u64CD\u573A\u65C1\u8FB9\uFF09

<img src="/\u5C0F\u578B\u52A8\u7269/\u871C\u87021.jpg" class="w-120 mx-auto"/>

\u4E2D\u534E\u871C\u8702\u{1F41D}\u8EAF\u4F53\u8F83\u5C0F\uFF0C\u5934\u80F8\u90E8\u5448\u9ED1\u8272\uFF0C\u8702\u4F53\u957F11mm\u5DE6\u53F3\uFF0C\u5599\u957F5mm\u5DE6\u53F3\uFF0C\u8179\u8282\u80CC\u677F\u5448\u9ED1\u8272\u9EC4\u8272\u73AF\u3002`,frontmatter:{},index:48,start:1199,end:1208,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:W$,meta:{slide:{raw:`
# \u4E2D\u534E\u9732\u87BD

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670815\u65E5\u56DB\u53F7\u5DE8\u6784\u697C\u5185\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u4E2D\u534E\u9732\u87BD1.jpg" class="w-125 mx-auto"/>

\u4E2D\u534E\u9732\u87BD\uFF08 Phaneroptera sinensis Uvarov)\u5C5E\u6606\u866B\u7EB2\u76F4\u7FC5\u76EE\uFF0C\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u6606\u866B\u3002
`,title:"\u4E2D\u534E\u9732\u87BD",level:1,content:`# \u4E2D\u534E\u9732\u87BD

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670815\u65E5\u56DB\u53F7\u5DE8\u6784\u697C\u5185\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u4E2D\u534E\u9732\u87BD1.jpg" class="w-125 mx-auto"/>

\u4E2D\u534E\u9732\u87BD\uFF08 Phaneroptera sinensis Uvarov)\u5C5E\u6606\u866B\u7EB2\u76F4\u7FC5\u76EE\uFF0C\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u6606\u866B\u3002`,frontmatter:{},index:49,start:1209,end:1218,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:Z$,meta:{slide:{raw:`
# \u4E1C\u4E9A\u98DE\u8757

Why\u62CD\u6444\u4E8E2021\u5E748\u670830\u65E5\u56DB\u53F7\u5DE8\u67842\u697C\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u4E1C\u4E9A\u98DE\u87571.jpg" class="w-180 mx-auto"/>

\u4E1C\u4E9A\u98DE\u8757\uFF08Locusta migratoria manilensis\uFF09\u662F\u98DE\u8757\u79D1\u3001\u98DE\u8757\u5C5E\u6606\u866B\u98DE\u8757\u4E0B\u7684\u4E00\u4E2A\u4E9A\u79CD\u3002\u4F53\u5927\u578B\uFF0C\u7EFF\u8272\u6216\u9EC4\u8910\u8272\uFF0C\u5300\u79F0\u3002\u4E1C\u4E9A\u98DE\u8757\u4E3B\u8981\u5206\u5E03\u5728\u4E2D\u56FD\u4E1C\u90E8\uFF0C\u9EC4\u6DEE\u6D77\u5E73\u539F\u662F\u4E3B\u8981\u53D1\u751F\u548C\u5371\u5BB3\u533A\u57DF\u3002
`,title:"\u4E1C\u4E9A\u98DE\u8757",level:1,content:`# \u4E1C\u4E9A\u98DE\u8757

Why\u62CD\u6444\u4E8E2021\u5E748\u670830\u65E5\u56DB\u53F7\u5DE8\u67842\u697C\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u4E1C\u4E9A\u98DE\u87571.jpg" class="w-180 mx-auto"/>

\u4E1C\u4E9A\u98DE\u8757\uFF08Locusta migratoria manilensis\uFF09\u662F\u98DE\u8757\u79D1\u3001\u98DE\u8757\u5C5E\u6606\u866B\u98DE\u8757\u4E0B\u7684\u4E00\u4E2A\u4E9A\u79CD\u3002\u4F53\u5927\u578B\uFF0C\u7EFF\u8272\u6216\u9EC4\u8910\u8272\uFF0C\u5300\u79F0\u3002\u4E1C\u4E9A\u98DE\u8757\u4E3B\u8981\u5206\u5E03\u5728\u4E2D\u56FD\u4E1C\u90E8\uFF0C\u9EC4\u6DEE\u6D77\u5E73\u539F\u662F\u4E3B\u8981\u53D1\u751F\u548C\u5371\u5BB3\u533A\u57DF\u3002`,frontmatter:{},index:50,start:1219,end:1228,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:e5,meta:{slide:{raw:`
# \u87CB\u87C0

Why\u62CD\u6444\u4E8E2021\u5E748\u670821\u65E5B\u533Ab11\u697C\u3002

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

\u87CB\u87C0\uFF08Gryllulus\uFF09\u65E0\u810A\u690E\u52A8\u7269\uFF0C\u6606\u866B\u7EB2\uFF0C\u76F4\u7FC5\u76EE\uFF0C\u87CB\u87C0\u603B\u79D1\u3002\u4EA6\u79F0\u4FC3\u7EC7\uFF0C\u4FD7\u540D\u86D0\u86D0\u3001\u591C\u9E23\u866B\uFF08\u56E0\u4E3A\u5B83\u5728\u591C\u665A\u9E23\u53EB\uFF09\u3001\u5C06\u519B\u866B\u3002\u87CB\u87C0\u662F\u4E00\u79CD\u53E4\u8001\u7684\u6606\u866B\uFF0C\u81F3\u5C11\u5DF2\u67091.4\u4EBF\u5E74\u7684\u5386\u53F2\uFF0C\u8FD8\u662F\u5728\u53E4\u4EE3\u548C\u73B0\u4EE3\u73A9\u6597\u7684\u5BF9\u8C61\u3002

\u5168\u4E16\u754C\u5DF2\u77E5 22 \u4E9A\u79D155 \u65CF 595 \u5C5E\uFF08\u5305\u62EC 17 \u4E2A\u5316\u77F3\u5C5E\uFF09\uFF0C\u7EA6 4649 \u79CD\uFF08\u4E9A\u79CD\uFF09\uFF08\u5305\u62EC 50 \u4E2A\u5316\u77F3\u79CD\uFF09\u3002\u8BE5\u79D1\u6606\u866B\u4F53\u957F\u5927\u4E8E 3cm\uFF0C\u7F3A\u5C11\u9CDE\u7247\uFF1B\u89E6\u89D2\u4E1D\u72B6\uFF0C\u957F\u4E8E\u8EAB\u4F53\uFF1B\u8DD7\u8282 3 \u8282\uFF0C\u524D\u8DB3\u4E3A\u6B65\u884C\u8DB3\uFF0C\u80EB\u8282\u5E38\u5177\u9F13\u819C\u542C\u5668\uFF0C\u540E\u8DB3\u4E3A\u8DF3\u8DC3\u8DB3\uFF1B\u591A\u6570\u79CD\u7C7B\u96C4\u866B\u524D\u7FC5\u5177\u53D1\u58F0\u7ED3\u6784\uFF1B\u96CC\u6027\u4EA7\u5375\u74E3\u53D1\u8FBE\uFF0C\u5448\u5200\u72B6\u3001\u77DB\u72B6\u6216\u957F\u677F\u72B6\u3002

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u87CB\u87C01.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u87CB\u87C02.jpg" class="w-70 mx-auto"/>

</div>

</div>
`,title:"\u87CB\u87C0",level:1,content:`# \u87CB\u87C0

Why\u62CD\u6444\u4E8E2021\u5E748\u670821\u65E5B\u533Ab11\u697C\u3002

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

\u87CB\u87C0\uFF08Gryllulus\uFF09\u65E0\u810A\u690E\u52A8\u7269\uFF0C\u6606\u866B\u7EB2\uFF0C\u76F4\u7FC5\u76EE\uFF0C\u87CB\u87C0\u603B\u79D1\u3002\u4EA6\u79F0\u4FC3\u7EC7\uFF0C\u4FD7\u540D\u86D0\u86D0\u3001\u591C\u9E23\u866B\uFF08\u56E0\u4E3A\u5B83\u5728\u591C\u665A\u9E23\u53EB\uFF09\u3001\u5C06\u519B\u866B\u3002\u87CB\u87C0\u662F\u4E00\u79CD\u53E4\u8001\u7684\u6606\u866B\uFF0C\u81F3\u5C11\u5DF2\u67091.4\u4EBF\u5E74\u7684\u5386\u53F2\uFF0C\u8FD8\u662F\u5728\u53E4\u4EE3\u548C\u73B0\u4EE3\u73A9\u6597\u7684\u5BF9\u8C61\u3002

\u5168\u4E16\u754C\u5DF2\u77E5 22 \u4E9A\u79D155 \u65CF 595 \u5C5E\uFF08\u5305\u62EC 17 \u4E2A\u5316\u77F3\u5C5E\uFF09\uFF0C\u7EA6 4649 \u79CD\uFF08\u4E9A\u79CD\uFF09\uFF08\u5305\u62EC 50 \u4E2A\u5316\u77F3\u79CD\uFF09\u3002\u8BE5\u79D1\u6606\u866B\u4F53\u957F\u5927\u4E8E 3cm\uFF0C\u7F3A\u5C11\u9CDE\u7247\uFF1B\u89E6\u89D2\u4E1D\u72B6\uFF0C\u957F\u4E8E\u8EAB\u4F53\uFF1B\u8DD7\u8282 3 \u8282\uFF0C\u524D\u8DB3\u4E3A\u6B65\u884C\u8DB3\uFF0C\u80EB\u8282\u5E38\u5177\u9F13\u819C\u542C\u5668\uFF0C\u540E\u8DB3\u4E3A\u8DF3\u8DC3\u8DB3\uFF1B\u591A\u6570\u79CD\u7C7B\u96C4\u866B\u524D\u7FC5\u5177\u53D1\u58F0\u7ED3\u6784\uFF1B\u96CC\u6027\u4EA7\u5375\u74E3\u53D1\u8FBE\uFF0C\u5448\u5200\u72B6\u3001\u77DB\u72B6\u6216\u957F\u677F\u72B6\u3002

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u87CB\u87C01.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u87CB\u87C02.jpg" class="w-70 mx-auto"/>

</div>

</div>`,frontmatter:{},index:51,start:1229,end:1258,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:s5,meta:{slide:{raw:`
<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

# \u87D1\u8782

Why\u62CD\u6444\u4E8E2021\u5E749\u67081\u65E5b11\u697C\u3002

\u87D1\u8782\uFF0C \u5C5E\u4E8E\u8282\u80A2\u52A8\u7269\u95E8\u3001\u6606\u866B\u7EB2\u3001\u871A\u880A\u76EE\uFF08Blattaria\uFF09\uFF0C\u4FD7\u79F0\u87D1\u8782\uFF0C\u662F\u5E38\u89C1\u7684\u533B\u5B66\u6606\u866B\u3002\u87D1\u8782\u4F53\u6241\u5E73\uFF0C\u9ED1\u8910\u8272\uFF0C\u901A\u5E38\u4E2D\u7B49\u5927\u5C0F\u3002\u5934\u5C0F\uFF0C\u80FD\u6D3B\u52A8\u3002

# \u87B3\u8782

Why2021\u5E748\u670825\u65E5\uFF0C\u6DB5\u82F1\u697C\u897F\u3002

\u87B3\u8782\u76EE\uFF08Mantodea\uFF09\u7684\u6606\u866B\u7EDF\u79F0\u87B3\u8782\u3002\u87B3\u8782\u5C5E\u8089\u98DF\u6027\u6606\u866B\uFF0C\u6210\u866B\u4E0E\u5E7C\u866B\u5747\u4E3A\u6355\u98DF\u6027\uFF0C\u4EE5\u5176\u4ED6\u6606\u866B\u53CA\u5C0F\u52A8\u7269\u4E3A\u98DF\uFF0C\u662F\u8457\u540D\u7684\u519C\u6797\u4E1A\u76CA\u866B\u3002\u87B3\u8782\u4EA7\u7684\u5375\u6709\u5375\u9798\u5305\u56F4\uFF0C\u5375\u9798\u79F0\u87B5\u86F8\u3002\u4E16\u754C\u5DF2\u77E52200\u591A\u79CD\uFF0C\u4E2D\u56FD\u5DF2\u8BB0\u8F7D8\u79D119\u4E9A\u79D147\u5C5E112\u79CD\uFF0C\u5E7F\u6CDB\u5206\u5E03\u4E8E\u70ED\u5E26\u3001\u4E9A\u70ED\u5E26\u548C\u6E29\u5E26\u7684\u5927\u90E8\u5206\u5730\u533A\u3002

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u87D1\u87821.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u87B3\u8782\u76EE1.jpg" class="w-70 mx-auto"/>

</div>

</div>
`,title:"\u87D1\u8782",level:1,content:`<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

# \u87D1\u8782

Why\u62CD\u6444\u4E8E2021\u5E749\u67081\u65E5b11\u697C\u3002

\u87D1\u8782\uFF0C \u5C5E\u4E8E\u8282\u80A2\u52A8\u7269\u95E8\u3001\u6606\u866B\u7EB2\u3001\u871A\u880A\u76EE\uFF08Blattaria\uFF09\uFF0C\u4FD7\u79F0\u87D1\u8782\uFF0C\u662F\u5E38\u89C1\u7684\u533B\u5B66\u6606\u866B\u3002\u87D1\u8782\u4F53\u6241\u5E73\uFF0C\u9ED1\u8910\u8272\uFF0C\u901A\u5E38\u4E2D\u7B49\u5927\u5C0F\u3002\u5934\u5C0F\uFF0C\u80FD\u6D3B\u52A8\u3002

# \u87B3\u8782

Why2021\u5E748\u670825\u65E5\uFF0C\u6DB5\u82F1\u697C\u897F\u3002

\u87B3\u8782\u76EE\uFF08Mantodea\uFF09\u7684\u6606\u866B\u7EDF\u79F0\u87B3\u8782\u3002\u87B3\u8782\u5C5E\u8089\u98DF\u6027\u6606\u866B\uFF0C\u6210\u866B\u4E0E\u5E7C\u866B\u5747\u4E3A\u6355\u98DF\u6027\uFF0C\u4EE5\u5176\u4ED6\u6606\u866B\u53CA\u5C0F\u52A8\u7269\u4E3A\u98DF\uFF0C\u662F\u8457\u540D\u7684\u519C\u6797\u4E1A\u76CA\u866B\u3002\u87B3\u8782\u4EA7\u7684\u5375\u6709\u5375\u9798\u5305\u56F4\uFF0C\u5375\u9798\u79F0\u87B5\u86F8\u3002\u4E16\u754C\u5DF2\u77E52200\u591A\u79CD\uFF0C\u4E2D\u56FD\u5DF2\u8BB0\u8F7D8\u79D119\u4E9A\u79D147\u5C5E112\u79CD\uFF0C\u5E7F\u6CDB\u5206\u5E03\u4E8E\u70ED\u5E26\u3001\u4E9A\u70ED\u5E26\u548C\u6E29\u5E26\u7684\u5927\u90E8\u5206\u5730\u533A\u3002

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u87D1\u87821.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u87B3\u8782\u76EE1.jpg" class="w-70 mx-auto"/>

</div>

</div>`,frontmatter:{},index:52,start:1259,end:1292,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:c5,meta:{slide:{raw:`
# \u74E2\u866B

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670818\u65E5B11\u5BBF\u820D\u5185\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u74E2\u866B1.jpg" class="w-125 mx-auto"/>

\u74E2\u866B\u{1F41E}\u4E3A\u9798\u7FC5\u76EE\u74E2\u866B\u79D1\uFF08\u5B66\u540D\uFF1ACoccinellidae\uFF09\u901A\u79F0\uFF0C\u662F\u4F53\u8272\u9C9C\u8273\u7684\u5C0F\u578B\u6606\u866B\uFF0C\u5E38\u5177\u7EA2\u3001\u9ED1\u6216\u9EC4\u8272\u6591\u70B9\u3002
`,title:"\u74E2\u866B",level:1,content:`# \u74E2\u866B

\u5FB7\u534E\u62CD\u6444\u4E8E2022\u5E746\u670818\u65E5B11\u5BBF\u820D\u5185\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u74E2\u866B1.jpg" class="w-125 mx-auto"/>

\u74E2\u866B\u{1F41E}\u4E3A\u9798\u7FC5\u76EE\u74E2\u866B\u79D1\uFF08\u5B66\u540D\uFF1ACoccinellidae\uFF09\u901A\u79F0\uFF0C\u662F\u4F53\u8272\u9C9C\u8273\u7684\u5C0F\u578B\u6606\u866B\uFF0C\u5E38\u5177\u7EA2\u3001\u9ED1\u6216\u9EC4\u8272\u6591\u70B9\u3002`,frontmatter:{},index:53,start:1293,end:1302,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",name:"page-55",component:h5,meta:{slide:{raw:`
# \u883C\u878B

Why\u62CD\u6444\u4E8E2021\u5E748\u670817\u65E5\uFF0CB\u533Ab11\u67D0\u5BBF\u820D\u5185\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u883C\u878B1.jpg" class="w-120 mx-auto"/>

\u883C\u878B[q\xFA s\u014Du](earwig Furficulidae)\u9769\u7FC5\u76EE\uFF0C\u883C\u878B\u79D1\u7EDF\u79F0\u3002\u4F53\u957F4~35mm\uFF0C\u4F53\u72ED\u957F\uFF0C\u7565\u6241\u5E73\uFF0C\u5934\u6241\u5BBD\uFF0C\u89E6\u89D2\u4E1D\u72B6\u3002
`,title:"\u883C\u878B",level:1,content:`# \u883C\u878B

Why\u62CD\u6444\u4E8E2021\u5E748\u670817\u65E5\uFF0CB\u533Ab11\u67D0\u5BBF\u820D\u5185\u3002

<img src="/\u5C0F\u578B\u52A8\u7269/\u883C\u878B1.jpg" class="w-120 mx-auto"/>

\u883C\u878B[q\xFA s\u014Du](earwig Furficulidae)\u9769\u7FC5\u76EE\uFF0C\u883C\u878B\u79D1\u7EDF\u79F0\u3002\u4F53\u957F4~35mm\uFF0C\u4F53\u72ED\u957F\uFF0C\u7565\u6241\u5E73\uFF0C\u5934\u6241\u5BBD\uFF0C\u89E6\u89D2\u4E1D\u72B6\u3002`,frontmatter:{},index:54,start:1303,end:1312,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:54,no:55},__clicksElements:[],__preloaded:!1}},{path:"56",name:"page-56",component:v5,meta:{slide:{raw:`
<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u91D1\u9F9F\u5B50

\u5FB7\u534E2022.6.21C\u533A\u98DF\u5802\u95E8\u53E3\uFF0C2022.6.22\u56DB\u53F7\u5DE8\u6784\u697C\u5185

<img src="/\u5C0F\u578B\u52A8\u7269/\u6697\u9ED1\u9CC3\u91D1\u9F9F1.jpg" class="w-100 mx-auto"/>

\u91D1\u9F9F\u5B50\u662F\u9798\u7FC5\u76EE\u91D1\u9F9F\u603B\u79D1(Scarabaeoidea)\u7684\u901A\u79F0\u3002\u5176\u5E7C\u866B(\u86F4\u87AC)\u662F\u4E3B\u8981\u5730\u4E0B\u5BB3\u866B\u4E4B\u4E00\u3002

\u4E0A\u9762\u662F\u6697\u9ED1\u9CC3\u91D1\u9F9F\uFF0C\u53F3\u9762\u662F\u4E3D\u91D1\u9F9F\u3002

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u4E3D\u91D1\u9F9F1.jpg" class="w-80 mx-auto"/>

</div>

</div>
`,title:"\u91D1\u9F9F\u5B50",level:1,content:`<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u91D1\u9F9F\u5B50

\u5FB7\u534E2022.6.21C\u533A\u98DF\u5802\u95E8\u53E3\uFF0C2022.6.22\u56DB\u53F7\u5DE8\u6784\u697C\u5185

<img src="/\u5C0F\u578B\u52A8\u7269/\u6697\u9ED1\u9CC3\u91D1\u9F9F1.jpg" class="w-100 mx-auto"/>

\u91D1\u9F9F\u5B50\u662F\u9798\u7FC5\u76EE\u91D1\u9F9F\u603B\u79D1(Scarabaeoidea)\u7684\u901A\u79F0\u3002\u5176\u5E7C\u866B(\u86F4\u87AC)\u662F\u4E3B\u8981\u5730\u4E0B\u5BB3\u866B\u4E4B\u4E00\u3002

\u4E0A\u9762\u662F\u6697\u9ED1\u9CC3\u91D1\u9F9F\uFF0C\u53F3\u9762\u662F\u4E3D\u91D1\u9F9F\u3002

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u4E3D\u91D1\u9F9F1.jpg" class="w-80 mx-auto"/>

</div>

</div>`,frontmatter:{},index:55,start:1313,end:1338,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:55,no:56},__clicksElements:[],__preloaded:!1}},{path:"57",name:"page-57",component:w5,meta:{slide:{raw:`
<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u8718\u86DB

\u4F24\u4E0D\u8D77\u62CD\u6444\u4E8E2022\u5E745\u67087\u65E5\u64CD\u573A

\u8718\u86DB\uFF0C\u8282\u80A2\u52A8\u7269\uFF0C\u4F53\u957F1\uFF5E90\u6BEB\u7C73\uFF0C\u8EAB\u4F53\u5206\u5934\u80F8\u90E8\uFF08\u524D\u4F53\uFF09\u548C\u8179\u90E8\uFF08\u540E\u4F53\uFF09\u4E24\u90E8\u5206\uFF0C\u5934\u80F8\u90E8\u8986\u4EE5\u80CC\u7532\u548C\u80F8\u677F\u3002\u5934\u80F8\u90E8\u6709\u9644\u80A2\u4E24\u5BF9\uFF0C\u7B2C\u4E00\u5BF9\u4E3A\u87AF\u80A2\uFF0C\u6709\u87AF\u7259\u3001\u87AF\u7259\u5C16\u7AEF\u6709\u6BD2\u817A\u5F00\u53E3\uFF1B\u76F4\u816D\u4E9A\u76EE\u7684\u87AF\u80A2\u524D\u540E\u6D3B\u52A8\uFF0C\u94B3\u816D\u4E9A\u76EE\u8005\u4FA7\u5411\u8FD0\u52A8\u53CA\u76F8\u5411\u8FD0\u52A8\uFF1B\u7B2C\u4E8C\u5BF9\u4E3A\u987B\u80A2\uFF0C\u5728\u96CC\u86DB\u548C\u672A\u6210\u719F\u7684\u96C4\u86DB\u5448\u6B65\u8DB3\u72B6\uFF0C\u7528\u4EE5\u5939\u6301\u98DF\u7269\u53CA\u4F5C\u611F\u89C9\u5668\u5B98\uFF1B\u4F46\u5728\u96C4\u6027\u6210\u86DB\u987B\u80A2\u672B\u8282\u81A8\u5927\uFF0C\u53D8\u4E3A\u4F20\u9001\u7CBE\u5B50\u7684\u4EA4\u63A5\u5668\u3002

\u7591\u4F3C\u4E2D\u534E\u72FC\u86DB\uFF0C\u5168\u8EAB\u5BC6\u751F\u9ED1\u8272\u3001\u767D\u8272\u53CA\u9EC4\u8272\u7EC6\u6BDB\uFF0C\u5934\u80F8\u90E8\u3001\u80CC\u9762\u68D5\u8910\u8272\uFF0C\u4E2D\u592E\u6709\u4E00\u9EC4\u68D5\u8272\u7EB5\u6591\u3002\u524D\u5BBD\u540E\u7A84\uFF0C\u4E2D\u7A9D\u660E\u663E\uFF0C\u4F53\u957F3\uFF5E4\u5398\u7C73\u3002\u4E3A\u7A74\u5C45\u8718\u86DB\uFF0C\u591A\u5728\u5E73\u539F\u5730\u533A\u7684\u68C9\u82B1\u3001\u5C0F\u9EA6\u3001\u5927\u8C46\u7B49\u4F5C\u7269\u7530\u95F4\u6316\u7A74\u7B51\u5DE2\u3002\u4EA7\u4E8E\u9655\u897F\u3001\u5C71\u4E1C\u3001\u6CB3\u5357\u7B49\u7701\u3002

*\u{1F577}\u5728\u521B\u65B0\u6E2F\u8FD8\u662F\u5F88\u591A\u7684\uFF0C\u4E0D\u8FC7\u4E0D\u62DB\u60F9\u4ED6\u4EEC\u4E00\u822C\u6CA1\u4EC0\u4E48\u4E8B\u3002*

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u8718\u86DB1.jpg" class="w-90 mx-auto"/>

</div>

</div>
`,title:"\u8718\u86DB",level:1,content:`<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u8718\u86DB

\u4F24\u4E0D\u8D77\u62CD\u6444\u4E8E2022\u5E745\u67087\u65E5\u64CD\u573A

\u8718\u86DB\uFF0C\u8282\u80A2\u52A8\u7269\uFF0C\u4F53\u957F1\uFF5E90\u6BEB\u7C73\uFF0C\u8EAB\u4F53\u5206\u5934\u80F8\u90E8\uFF08\u524D\u4F53\uFF09\u548C\u8179\u90E8\uFF08\u540E\u4F53\uFF09\u4E24\u90E8\u5206\uFF0C\u5934\u80F8\u90E8\u8986\u4EE5\u80CC\u7532\u548C\u80F8\u677F\u3002\u5934\u80F8\u90E8\u6709\u9644\u80A2\u4E24\u5BF9\uFF0C\u7B2C\u4E00\u5BF9\u4E3A\u87AF\u80A2\uFF0C\u6709\u87AF\u7259\u3001\u87AF\u7259\u5C16\u7AEF\u6709\u6BD2\u817A\u5F00\u53E3\uFF1B\u76F4\u816D\u4E9A\u76EE\u7684\u87AF\u80A2\u524D\u540E\u6D3B\u52A8\uFF0C\u94B3\u816D\u4E9A\u76EE\u8005\u4FA7\u5411\u8FD0\u52A8\u53CA\u76F8\u5411\u8FD0\u52A8\uFF1B\u7B2C\u4E8C\u5BF9\u4E3A\u987B\u80A2\uFF0C\u5728\u96CC\u86DB\u548C\u672A\u6210\u719F\u7684\u96C4\u86DB\u5448\u6B65\u8DB3\u72B6\uFF0C\u7528\u4EE5\u5939\u6301\u98DF\u7269\u53CA\u4F5C\u611F\u89C9\u5668\u5B98\uFF1B\u4F46\u5728\u96C4\u6027\u6210\u86DB\u987B\u80A2\u672B\u8282\u81A8\u5927\uFF0C\u53D8\u4E3A\u4F20\u9001\u7CBE\u5B50\u7684\u4EA4\u63A5\u5668\u3002

\u7591\u4F3C\u4E2D\u534E\u72FC\u86DB\uFF0C\u5168\u8EAB\u5BC6\u751F\u9ED1\u8272\u3001\u767D\u8272\u53CA\u9EC4\u8272\u7EC6\u6BDB\uFF0C\u5934\u80F8\u90E8\u3001\u80CC\u9762\u68D5\u8910\u8272\uFF0C\u4E2D\u592E\u6709\u4E00\u9EC4\u68D5\u8272\u7EB5\u6591\u3002\u524D\u5BBD\u540E\u7A84\uFF0C\u4E2D\u7A9D\u660E\u663E\uFF0C\u4F53\u957F3\uFF5E4\u5398\u7C73\u3002\u4E3A\u7A74\u5C45\u8718\u86DB\uFF0C\u591A\u5728\u5E73\u539F\u5730\u533A\u7684\u68C9\u82B1\u3001\u5C0F\u9EA6\u3001\u5927\u8C46\u7B49\u4F5C\u7269\u7530\u95F4\u6316\u7A74\u7B51\u5DE2\u3002\u4EA7\u4E8E\u9655\u897F\u3001\u5C71\u4E1C\u3001\u6CB3\u5357\u7B49\u7701\u3002

*\u{1F577}\u5728\u521B\u65B0\u6E2F\u8FD8\u662F\u5F88\u591A\u7684\uFF0C\u4E0D\u8FC7\u4E0D\u62DB\u60F9\u4ED6\u4EEC\u4E00\u822C\u6CA1\u4EC0\u4E48\u4E8B\u3002*

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u8718\u86DB1.jpg" class="w-90 mx-auto"/>

</div>

</div>`,frontmatter:{},index:56,start:1339,end:1364,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:56,no:57},__clicksElements:[],__preloaded:!1}},{path:"58",name:"page-58",component:E5,meta:{slide:{raw:`
<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u5929\u725B

\u4F24\u4E0D\u8D77\u62CD\u6444\u4E8E2022\u5E745\u670826\u65E5\uFF0C\u5730\u70B9\u672A\u77E5\uFF08\u5927\u6982C\u533A\u65C1\u8FB9\u5C0F\u6797\uFF09

\u5929\u725B\u662F\u591A\u98DF\u4E9A\u76EE\u5929\u725B\u79D1\u6606\u866B\u7684\u603B\u79F0\uFF0C\u5480\u56BC\u5F0F\u53E3\u5668\uFF0C\u6709\u5F88\u957F\u7684\u89E6\u89D2\uFF0C\u5E38\u5E38\u8D85\u8FC7\u8EAB\u4F53\u7684\u957F\u5EA6\uFF0C\u5168\u4E16\u754C\u7EA6\u6709\u8D85\u8FC720,000\u79CD\u3002\u6709\u4E00\u4E9B\u79CD\u7C7B\u5C5E\u4E8E\u5BB3\u866B\uFF0C\u5176\u5E7C\u866B\u751F\u6D3B\u4E8E\u6728\u6750\u4E2D\uFF0C\u53EF\u80FD\u5BF9\u6811\u6216\u5EFA\u7B51\u7269\u9020\u6210\u5371\u5BB3\u3002

\u5929\u725B\u662F\u690D\u98DF\u6027\u6606\u866B\uFF0C\u4F1A\u5371\u5BB3\u6728\u672C\u690D\u7269\uFF0C\u5927\u90E8\u5206\u677E\u3001\u67CF\u3001\u67F3\u3001\u6986\u3001\u6838\u6843\u3001\u67D1\u6A58\u3001\u82F9\u679C\u3001\u6843\u548C\u8336\u7B49\uFF0C\u4E00\u90E8\u5206\u68C9\u3001\u9EA6\u3001\u7389\u7C73\u3001\u9AD8\u7CB1\u3001\u7518\u8517\u548C\u9EBB\u7B49\uFF0C\u5C11\u6570\u6728\u6750\u3001\u5EFA\u7B51\u3001\u623F\u5C4B\u548C\u5BB6\u5177\u7B49\uFF0C\u662F\u6797\u4E1A\u751F\u4EA7\u3001\u4F5C\u7269\u683D\u57F9\u548C\u5EFA\u7B51\u6728\u6750\u4E0A\u7684\u4E3B\u8981\u5BB3\u866B\u3002

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u5929\u725B1.jpg" class="w-90 mx-auto"/>

</div>

</div>
`,title:"\u5929\u725B",level:1,content:`<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

# \u5929\u725B

\u4F24\u4E0D\u8D77\u62CD\u6444\u4E8E2022\u5E745\u670826\u65E5\uFF0C\u5730\u70B9\u672A\u77E5\uFF08\u5927\u6982C\u533A\u65C1\u8FB9\u5C0F\u6797\uFF09

\u5929\u725B\u662F\u591A\u98DF\u4E9A\u76EE\u5929\u725B\u79D1\u6606\u866B\u7684\u603B\u79F0\uFF0C\u5480\u56BC\u5F0F\u53E3\u5668\uFF0C\u6709\u5F88\u957F\u7684\u89E6\u89D2\uFF0C\u5E38\u5E38\u8D85\u8FC7\u8EAB\u4F53\u7684\u957F\u5EA6\uFF0C\u5168\u4E16\u754C\u7EA6\u6709\u8D85\u8FC720,000\u79CD\u3002\u6709\u4E00\u4E9B\u79CD\u7C7B\u5C5E\u4E8E\u5BB3\u866B\uFF0C\u5176\u5E7C\u866B\u751F\u6D3B\u4E8E\u6728\u6750\u4E2D\uFF0C\u53EF\u80FD\u5BF9\u6811\u6216\u5EFA\u7B51\u7269\u9020\u6210\u5371\u5BB3\u3002

\u5929\u725B\u662F\u690D\u98DF\u6027\u6606\u866B\uFF0C\u4F1A\u5371\u5BB3\u6728\u672C\u690D\u7269\uFF0C\u5927\u90E8\u5206\u677E\u3001\u67CF\u3001\u67F3\u3001\u6986\u3001\u6838\u6843\u3001\u67D1\u6A58\u3001\u82F9\u679C\u3001\u6843\u548C\u8336\u7B49\uFF0C\u4E00\u90E8\u5206\u68C9\u3001\u9EA6\u3001\u7389\u7C73\u3001\u9AD8\u7CB1\u3001\u7518\u8517\u548C\u9EBB\u7B49\uFF0C\u5C11\u6570\u6728\u6750\u3001\u5EFA\u7B51\u3001\u623F\u5C4B\u548C\u5BB6\u5177\u7B49\uFF0C\u662F\u6797\u4E1A\u751F\u4EA7\u3001\u4F5C\u7269\u683D\u57F9\u548C\u5EFA\u7B51\u6728\u6750\u4E0A\u7684\u4E3B\u8981\u5BB3\u866B\u3002

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u5929\u725B1.jpg" class="w-90 mx-auto"/>

</div>

</div>`,frontmatter:{},index:57,start:1365,end:1388,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:57,no:58},__clicksElements:[],__preloaded:!1}},{path:"59",name:"page-59",component:C5,meta:{slide:{raw:`
# \u8717\u725B

gtx\u62CD\u6444\u4E8E2022\u5E747\u670822\u65E5\u56DB\u53F7\u697C\u9876

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u8717\u725B1.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u8717\u725B2.jpg" class="w-100 mx-auto"/>

</div>

</div>

\u8717\u725B\u662F\u6307\u8179\u8DB3\u7EB2\u7684\u9646\u751F\u6240\u6709\u79CD\u7C7B\u3002\u4E00\u822C\u897F\u65B9\u8BED\u8A00\u4E2D\u4E0D\u533A\u5206\u6C34\u751F\u7684\u87BA\u7C7B\u548C\u9646\u751F\u7684\u8717\u725B\uFF0C\u6C49\u8BED\u4E2D\u8717\u725B\u53EA\u6307\u9646\u751F\u79CD\u7C7B\uFF0C\u800C\u5E7F\u4E49\u7684\u8717\u725B\u8FD8\u5305\u62EC\u5DE8\u76FE\u86DE\u8753\u3002

\u8717\u725B\u662F\u4E00\u79CD\u5305\u62EC\u8BB8\u591A\u4E0D\u540C\u79D1\u3001\u5C5E\u7684\u52A8\u7269\u3002\u53D6\u98DF\u690D\u7269\uFF0C\u4EA7\u5375\u4E8E\u571F\u4E2D\u6216\u8005\u6811\u4E0A\u3002\u5728\u70ED\u5E26\u5C9B\u5C7F\u6BD4\u8F83\u5E38\u89C1\uFF0C\u4F46\u6709\u7684\u4E5F\u751F\u5B58\u5728\u5BD2\u51B7\u5730\u533A\u3002\u6811\u6816\u79CD\u7C7B\u7684\u8272\u6CFD\u9C9C\u8273\uFF0C\u800C\u5730\u6816\u7684\u901A\u5E38\u51E0\u79CD\u63A5\u8FD1\u7684\u989C\u8272\uFF0C\u4E00\u822C\u6709\u6761\u7EB9\u3002
`,title:"\u8717\u725B",level:1,content:`# \u8717\u725B

gtx\u62CD\u6444\u4E8E2022\u5E747\u670822\u65E5\u56DB\u53F7\u697C\u9876

<div class="grid grid-cols-2 gap-0 pt-0 -mb-0">

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u8717\u725B1.jpg" class="w-125 mx-auto"/>

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u8717\u725B2.jpg" class="w-100 mx-auto"/>

</div>

</div>

\u8717\u725B\u662F\u6307\u8179\u8DB3\u7EB2\u7684\u9646\u751F\u6240\u6709\u79CD\u7C7B\u3002\u4E00\u822C\u897F\u65B9\u8BED\u8A00\u4E2D\u4E0D\u533A\u5206\u6C34\u751F\u7684\u87BA\u7C7B\u548C\u9646\u751F\u7684\u8717\u725B\uFF0C\u6C49\u8BED\u4E2D\u8717\u725B\u53EA\u6307\u9646\u751F\u79CD\u7C7B\uFF0C\u800C\u5E7F\u4E49\u7684\u8717\u725B\u8FD8\u5305\u62EC\u5DE8\u76FE\u86DE\u8753\u3002

\u8717\u725B\u662F\u4E00\u79CD\u5305\u62EC\u8BB8\u591A\u4E0D\u540C\u79D1\u3001\u5C5E\u7684\u52A8\u7269\u3002\u53D6\u98DF\u690D\u7269\uFF0C\u4EA7\u5375\u4E8E\u571F\u4E2D\u6216\u8005\u6811\u4E0A\u3002\u5728\u70ED\u5E26\u5C9B\u5C7F\u6BD4\u8F83\u5E38\u89C1\uFF0C\u4F46\u6709\u7684\u4E5F\u751F\u5B58\u5728\u5BD2\u51B7\u5730\u533A\u3002\u6811\u6816\u79CD\u7C7B\u7684\u8272\u6CFD\u9C9C\u8273\uFF0C\u800C\u5730\u6816\u7684\u901A\u5E38\u51E0\u79CD\u63A5\u8FD1\u7684\u989C\u8272\uFF0C\u4E00\u822C\u6709\u6761\u7EB9\u3002`,frontmatter:{},index:58,start:1389,end:1414,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:58,no:59},__clicksElements:[],__preloaded:!1}},{path:"60",name:"page-60",component:F5,meta:{slide:{raw:`
# \u8749

\u670B\u53CB\u5708\u5E08\u59D0\u53D1\u7684\uFF0C\u539F\u4F5C\u8005\u770B\u5230\u53EF\u4EE5\u8054\u7CFB\u6211\u54E6\u3002

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

\u8749\u6709\u4E24\u5BF9\u819C\u7FC5\uFF0C\u5F62\u72B6\u57FA\u672C\u76F8\u540C\uFF0C\u5934\u90E8\u5BBD\u800C\u77ED\uFF0C\u5177\u6709\u660E\u663E\u7A81\u51FA\u7684\u989D\u5507\u57FA\uFF1B\u89C6\u529B\u76F8\u5F53\u826F\u597D\uFF0C\u590D\u773C\u4E0D\u5927\uFF0C\u4F4D\u4E8E\u5934\u90E8\u4E24\u4FA7\u4E14\u5206\u5F97\u5F88\u5F00\uFF0C\u67093\u4E2A\u5355\u773C\u3002\u89E6\u89D2\u77ED\uFF0C\u5448\u521A\u6BDB\u72B6\u3002\u53E3\u5668\u7EC6\u957F\uFF0C\u53E3\u5668\u5185\u6709\u98DF\u7BA1\u4E0E\u553E\u6DB2\u7BA1\uFF0C\u5C5E\u4E8E\u523A\u5438\u5F0F\u3002\u80F8\u90E8\u5219\u5305\u62EC\u524D\u80F8\u3001\u4E2D\u80F8\u53CA\u540E\u80F8\uFF0C\u5176\u4E2D\u524D\u80F8\u548C\u4E2D\u80F8\u8F83\u957F\u30023\u4E2A\u80F8\u90E8\u90FD\u5177\u6709\u4E00\u5BF9\u8DB3\uFF0C\u817F\u8282\u7C97\u58EE\u53D1\u8FBE\uFF08\u82E5\u866B\u524D\u811A\u7528\u6765\u6316\u6398\uFF0C\u817F\u8282\u81A8\u5927\uFF0C\u5E26\u523A\uFF09\u3002\u8749\u7684\u8179\u90E8\u5448\u957F\u9525\u5F62\uFF0C\u603B\u5171\u670910\u4E2A\u8179\u8282\uFF0C\u7B2C9\u8179\u8282\u6210\u4E3A\u5C3E\u8282\u3002\u96C4\u8749\u7B2C1\u3001\u7B2C2\u8179\u8282\u5177\u53D1\u97F3\u5668\uFF0C\u7B2C10\u8179\u8282\u5F62\u6210\u809B\u95E8\uFF1B\u96CC\u8749\u7B2C10\u8179\u8282\u5F62\u6210\u4EA7\u5375\u7BA1\uFF0C\u4E14\u8F83\u4E3A\u81A8\u5927\u3002\u5E7C\u866B\u751F\u6D3B\u5728\u571F\u4E2D\uFF0C\u672B\u9F84\u5E7C\u866B\u591A\u4E3A\u68D5\u8272\uFF0C\u4E0E\u6210\u866B\u76F8\u4F3C\u3002

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u77E5\u4E861.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u77E5\u4E862.jpg" class="w-70 mx-auto"/>

</div>

</div>
`,title:"\u8749",level:1,content:`# \u8749

\u670B\u53CB\u5708\u5E08\u59D0\u53D1\u7684\uFF0C\u539F\u4F5C\u8005\u770B\u5230\u53EF\u4EE5\u8054\u7CFB\u6211\u54E6\u3002

<div class="grid grid-cols-3 gap-0 pt-0 -mb-0">

<div>

\u8749\u6709\u4E24\u5BF9\u819C\u7FC5\uFF0C\u5F62\u72B6\u57FA\u672C\u76F8\u540C\uFF0C\u5934\u90E8\u5BBD\u800C\u77ED\uFF0C\u5177\u6709\u660E\u663E\u7A81\u51FA\u7684\u989D\u5507\u57FA\uFF1B\u89C6\u529B\u76F8\u5F53\u826F\u597D\uFF0C\u590D\u773C\u4E0D\u5927\uFF0C\u4F4D\u4E8E\u5934\u90E8\u4E24\u4FA7\u4E14\u5206\u5F97\u5F88\u5F00\uFF0C\u67093\u4E2A\u5355\u773C\u3002\u89E6\u89D2\u77ED\uFF0C\u5448\u521A\u6BDB\u72B6\u3002\u53E3\u5668\u7EC6\u957F\uFF0C\u53E3\u5668\u5185\u6709\u98DF\u7BA1\u4E0E\u553E\u6DB2\u7BA1\uFF0C\u5C5E\u4E8E\u523A\u5438\u5F0F\u3002\u80F8\u90E8\u5219\u5305\u62EC\u524D\u80F8\u3001\u4E2D\u80F8\u53CA\u540E\u80F8\uFF0C\u5176\u4E2D\u524D\u80F8\u548C\u4E2D\u80F8\u8F83\u957F\u30023\u4E2A\u80F8\u90E8\u90FD\u5177\u6709\u4E00\u5BF9\u8DB3\uFF0C\u817F\u8282\u7C97\u58EE\u53D1\u8FBE\uFF08\u82E5\u866B\u524D\u811A\u7528\u6765\u6316\u6398\uFF0C\u817F\u8282\u81A8\u5927\uFF0C\u5E26\u523A\uFF09\u3002\u8749\u7684\u8179\u90E8\u5448\u957F\u9525\u5F62\uFF0C\u603B\u5171\u670910\u4E2A\u8179\u8282\uFF0C\u7B2C9\u8179\u8282\u6210\u4E3A\u5C3E\u8282\u3002\u96C4\u8749\u7B2C1\u3001\u7B2C2\u8179\u8282\u5177\u53D1\u97F3\u5668\uFF0C\u7B2C10\u8179\u8282\u5F62\u6210\u809B\u95E8\uFF1B\u96CC\u8749\u7B2C10\u8179\u8282\u5F62\u6210\u4EA7\u5375\u7BA1\uFF0C\u4E14\u8F83\u4E3A\u81A8\u5927\u3002\u5E7C\u866B\u751F\u6D3B\u5728\u571F\u4E2D\uFF0C\u672B\u9F84\u5E7C\u866B\u591A\u4E3A\u68D5\u8272\uFF0C\u4E0E\u6210\u866B\u76F8\u4F3C\u3002

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u77E5\u4E861.jpg" class="w-70 mx-auto"/>

</div>

<div>

<img src="/\u5C0F\u578B\u52A8\u7269/\u77E5\u4E862.jpg" class="w-70 mx-auto"/>

</div>

</div>`,frontmatter:{},index:59,start:1415,end:1442,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:59,no:60},__clicksElements:[],__preloaded:!1}},{path:"61",name:"page-61",component:U5,meta:{layout:"cover",background:"/\u690D\u7269/\u5C71\u68431.jpg",class:"text-center",slide:{raw:`---
layout: cover
background: /\u690D\u7269/\u5C71\u68431.jpg

class: text-center
---

# \u8C22\u8C22\u5927\u5BB6\uFF01

\u4E1A\u4F59\u6574\u7406\u96BE\u514D\u51FA\u9519\uFF0C\u656C\u8BF7\u5404\u4F4D\u5927\u4F6C\u6279\u8BC4\u6307\u6B63\uFF0C\u6709\u95EE\u9898\u6216\u6295\u7A3F\u4E5F\u53EF\u4EE5\u76F4\u63A5\u63D0PR

\u2014\u2014little tiger \u5C0F\u534E\u534E 2022.10.01

[\u70B9\u6B64\u52A0\u5165\u9879\u76EE](https://github.com/Renzehua1998/iharbour-creatures)

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/Renzehua1998" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="https://renzehua.gitee.io/" target="_blank" alt="Page"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <mdi-account-circle />
  </a>
</div>`,title:"\u8C22\u8C22\u5927\u5BB6\uFF01",level:1,content:`# \u8C22\u8C22\u5927\u5BB6\uFF01

\u4E1A\u4F59\u6574\u7406\u96BE\u514D\u51FA\u9519\uFF0C\u656C\u8BF7\u5404\u4F4D\u5927\u4F6C\u6279\u8BC4\u6307\u6B63\uFF0C\u6709\u95EE\u9898\u6216\u6295\u7A3F\u4E5F\u53EF\u4EE5\u76F4\u63A5\u63D0PR

\u2014\u2014little tiger \u5C0F\u534E\u534E 2022.10.01

[\u70B9\u6B64\u52A0\u5165\u9879\u76EE](https://github.com/Renzehua1998/iharbour-creatures)

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/Renzehua1998" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
  <a href="https://renzehua.gitee.io/" target="_blank" alt="Page"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <mdi-account-circle />
  </a>
</div>`,frontmatter:{layout:"cover",background:"/\u690D\u7269/\u5C71\u68431.jpg",class:"text-center"},index:60,start:1442,end:1467,notesHTML:"",filepath:"E:\\\u4E66\u5305\\MySlidev\\sharing\\slides.md",id:60,no:61},__clicksElements:[],__preloaded:!1}},{path:"62",component:j2,meta:{layout:"end"}}],De=K5,q5=[{name:"play",path:"/",component:y2,children:[...De]},{name:"print",path:"/print",component:S2},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>ls(()=>import("./Presenter.f633c520.js"),["assets/Presenter.f633c520.js","assets/Presenter.e29290d2.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.c1501809.js"]),beforeEnter:e=>{if(!vn.remote||vn.remote===e.query.password)return!0;if(vn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(vn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],ft=l1({history:x0("/slides/iharbour-creatures/"),routes:q5});function Y5(e,t,{mode:n="replace"}={}){return k({get(){const s=ft.currentRoute.value.query[e];return s==null?t!=null?t:null:Array.isArray(s)?s.filter(Boolean):s},set(s){We(()=>{ft[w(n)]({query:{...ft.currentRoute.value.query,[e]:s}})})}})}const qd=W(0);We(()=>{ft.afterEach(async()=>{await We(),qd.value+=1})});const Kt=k(()=>ft.currentRoute.value),nl=k(()=>Kt.value.query.print!==void 0),Z5=k(()=>Kt.value.query.print==="clicks"),Dt=k(()=>Kt.value.query.embedded!==void 0),At=k(()=>Kt.value.path.startsWith("/presenter")),Ps=k(()=>nl.value&&!Z5.value),so=k(()=>Kt.value.query.password),G5=k(()=>!At.value&&(!we.remote||so.value===we.remote)),Ja=Y5("clicks","0"),Yd=k(()=>De.length-1),X5=k(()=>Kt.value.path),He=k(()=>parseInt(X5.value.split(/\//g).slice(-1)[0])||1);k(()=>Xr(He.value));const lt=k(()=>De.find(e=>e.path===`${He.value}`));k(()=>{var e,t,n;return(n=(t=(e=lt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});k(()=>{var e,t;return(t=(e=lt.value)==null?void 0:e.meta)==null?void 0:t.layout});const gi=k(()=>De.find(e=>e.path===`${Math.min(De.length,He.value+1)}`)),Q5=k(()=>{var e,t;return qd.value,((t=(e=lt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ot=k({get(){if(Ps.value)return 99999;let e=+(Ja.value||0);return isNaN(e)&&(e=0),e},set(e){Ja.value=e.toString()}}),Cr=k(()=>{var e,t,n;return+((n=(t=(e=lt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:Q5.value.length)}),J5=k(()=>He.value<De.length-1||Ot.value<Cr.value),e3=k(()=>He.value>1||Ot.value>0),t3=k(()=>De.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(sl(e,t),e),[])),n3=k(()=>rl(t3.value,lt.value));k(()=>il(n3.value));function rn(){Cr.value<=Ot.value?zs():Ot.value+=1}async function on(){Ot.value<=0?await Ws():Ot.value-=1}function Xr(e){return At.value?`/presenter/${e}`:`/${e}`}function zs(){const e=Math.min(De.length,He.value+1);return ts(e)}async function Ws(e=!0){const t=Math.max(1,He.value-1);await ts(t),e&&Cr.value&&ft.replace({query:{...Kt.value.query,clicks:Cr.value}})}function ts(e,t){return ft.push({path:Xr(e),query:{...Kt.value.query,clicks:t}})}function s3(e){const t=W(0),{direction:n,distanceX:s,distanceY:r}=Yg(e,{onSwipeStart(i){i.pointerType==="touch"&&(Bs.value||(t.value=Ui()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!t.value||Bs.value)return;const o=Math.abs(s.value),l=Math.abs(r.value);o/window.innerWidth>.3||o>100?n.value===Vt.LEFT?rn():on():(l/window.innerHeight>.4||l>200)&&(n.value===Vt.DOWN?Ws():zs())}})}async function ro(){const{saveAs:e}=await ls(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(Ru(we.download)?we.download:we.exportFilename?`${we.exportFilename}.pdf`:"/slides/iharbour-creatures/slidev-exported.pdf",`${we.title}.pdf`)}async function r3(e){var t,n;if(e==null){const s=(n=(t=lt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(s!=null&&s.filepath))return!1;e=`${s.filepath}:${s.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function sl(e,t,n=1){var r,i,o,l,a;const s=(i=(r=t.meta)==null?void 0:r.slide)==null?void 0:i.level;s&&s>n&&e.length>0?sl(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((o=t.meta)==null?void 0:o.hideInToc),title:(a=(l=t.meta)==null?void 0:l.slide)==null?void 0:a.title})}function rl(e,t,n=!1,s){return e.map(r=>{const i={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return i.children.length>0&&(i.children=rl(i.children,t,i.active||i.hasActiveParent,i)),s&&(i.active||i.activeParent)&&(s.activeParent=!0),i})}function il(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:il(n.children,t+1)}))}function i3(){const e=we.titleTemplate.replace("%s",we.title||"Slidev");wh({title:e}),Ph(`${e} - shared`),Ah(`${e} - drawings`);function t(){At.value&&(ra("page",+He.value),ra("clicks",Ot.value))}ft.afterEach(t),ue(Ot,t),Mh(n=>{(+n.page!=+He.value||Ot.value!==n.clicks)&&ft.replace({path:Xr(n.page),query:{...ft.currentRoute.value.query,clicks:n.clicks||0}})})}const o3=Me({__name:"App",setup(e){return C(R),i3(),(t,n)=>{const s=Li("RouterView"),r=Li("StarportCarrier");return y(),U($e,null,[Q(s),Q(r)],64)}}});function _i(e){return e!==null&&typeof e=="object"}function io(e,t,n=".",s){if(!_i(t))return io(e,{},n,s);const r=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const o=e[i];o!=null&&(s&&s(r,i,o,n)||(Array.isArray(o)&&Array.isArray(r[i])?r[i]=o.concat(r[i]):_i(o)&&_i(r[i])?r[i]=io(o,r[i],(n?`${n}.`:"")+i.toString(),s):r[i]=o))}return r}function l3(e){return(...t)=>t.reduce((n,s)=>io(n,s,"",e),{})}const a3=l3();var ec;const Zd=typeof window<"u",c3=Object.prototype.toString,u3=e=>typeof e=="number",d3=e=>typeof e=="string",oo=e=>c3.call(e)==="[object Object]",Sn=()=>{};Zd&&((ec=window==null?void 0:window.navigator)==null?void 0:ec.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Gd(e){return So()?(Oo(e),!0):!1}function ol(e){os()&&No(e)}function f3(e,t,n){const s=ue(e,(...r)=>(We(()=>s()),t(...r)),n)}function Pn(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Xd=Zd?window:void 0;function p3(...e){let t,n,s,r;if(d3(e[0])?([n,s,r]=e,t=Xd):[t,n,s,r]=e,!t)return Sn;let i=Sn;const o=ue(()=>Pn(t),a=>{i(),a&&(a.addEventListener(n,s,r),i=()=>{a.removeEventListener(n,s,r),i=Sn})},{immediate:!0,flush:"post"}),l=()=>{o(),i()};return Gd(l),l}const lo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ao="__vueuse_ssr_handlers__";lo[ao]=lo[ao]||{};lo[ao];function m3(e,t,n={}){const{root:s,rootMargin:r="0px",threshold:i=.1,window:o=Xd}=n,l=o&&"IntersectionObserver"in o;let a=Sn;const u=l?ue(()=>({el:Pn(e),root:Pn(s)}),({el:p,root:f})=>{if(a(),!p)return;const m=new IntersectionObserver(t,{root:f,rootMargin:r,threshold:i});m.observe(p),a=()=>{m.disconnect(),a=Sn}},{immediate:!0,flush:"post"}):Sn,d=()=>{a(),u()};return Gd(d),{isSupported:l,stop:d}}var tc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(tc||(tc={}));const Qd=1/60*1e3,h3=typeof performance<"u"?()=>performance.now():()=>Date.now(),Jd=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(h3()),Qd);function g3(e){let t=[],n=[],s=0,r=!1,i=!1;const o=new WeakSet,l={schedule:(a,u=!1,d=!1)=>{const p=d&&r,f=p?t:n;return u&&o.add(a),f.indexOf(a)===-1&&(f.push(a),p&&r&&(s=t.length)),a},cancel:a=>{const u=n.indexOf(a);u!==-1&&n.splice(u,1),o.delete(a)},process:a=>{if(r){i=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,s=t.length,s)for(let u=0;u<s;u++){const d=t[u];d(a),o.has(d)&&(l.schedule(d),e())}r=!1,i&&(i=!1,l.process(a))}};return l}const _3=40;let co=!0,Us=!1,uo=!1;const Gn={delta:0,timestamp:0},Zs=["read","update","preRender","render","postRender"],Qr=Zs.reduce((e,t)=>(e[t]=g3(()=>Us=!0),e),{}),fo=Zs.reduce((e,t)=>{const n=Qr[t];return e[t]=(s,r=!1,i=!1)=>(Us||y3(),n.schedule(s,r,i)),e},{}),v3=Zs.reduce((e,t)=>(e[t]=Qr[t].cancel,e),{});Zs.reduce((e,t)=>(e[t]=()=>Qr[t].process(Gn),e),{});const b3=e=>Qr[e].process(Gn),ef=e=>{Us=!1,Gn.delta=co?Qd:Math.max(Math.min(e-Gn.timestamp,_3),1),Gn.timestamp=e,uo=!0,Zs.forEach(b3),uo=!1,Us&&(co=!1,Jd(ef))},y3=()=>{Us=!0,co=!0,uo||Jd(ef)},tf=()=>Gn;function nf(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n}var w3=function(){},nc=function(){};const po=(e,t,n)=>Math.min(Math.max(n,e),t),vi=.001,x3=.01,sc=10,$3=.05,E3=1;function S3({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let r,i;w3(e<=sc*1e3);let o=1-t;o=po($3,E3,o),e=po(x3,sc,e/1e3),o<1?(r=u=>{const d=u*o,p=d*e,f=d-n,m=mo(u,o),h=Math.exp(-p);return vi-f/m*h},i=u=>{const p=u*o*e,f=p*n+n,m=Math.pow(o,2)*Math.pow(u,2)*e,h=Math.exp(-p),b=mo(Math.pow(u,2),o);return(-r(u)+vi>0?-1:1)*((f-m)*h)/b}):(r=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-vi+d*p},i=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const l=5/e,a=k3(r,i,l);if(e=e*1e3,isNaN(a))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(a,2)*s;return{stiffness:u,damping:o*2*Math.sqrt(s*u),duration:e}}}const O3=12;function k3(e,t,n){let s=n;for(let r=1;r<O3;r++)s=s-e(s)/t(s);return s}function mo(e,t){return e*Math.sqrt(1-t*t)}const j3=["duration","bounce"],P3=["stiffness","damping","mass"];function rc(e,t){return t.some(n=>e[n]!==void 0)}function M3(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!rc(e,P3)&&rc(e,j3)){const n=S3(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function ll(e){var{from:t=0,to:n=1,restSpeed:s=2,restDelta:r}=e,i=nf(e,["from","to","restSpeed","restDelta"]);const o={done:!1,value:t};let{stiffness:l,damping:a,mass:u,velocity:d,duration:p,isResolvedFromDuration:f}=M3(i),m=ic,h=ic;function b(){const v=d?-(d/1e3):0,S=n-t,$=a/(2*Math.sqrt(l*u)),E=Math.sqrt(l/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),$<1){const O=mo(E,$);m=D=>{const I=Math.exp(-$*E*D);return n-I*((v+$*E*S)/O*Math.sin(O*D)+S*Math.cos(O*D))},h=D=>{const I=Math.exp(-$*E*D);return $*E*I*(Math.sin(O*D)*(v+$*E*S)/O+S*Math.cos(O*D))-I*(Math.cos(O*D)*(v+$*E*S)-O*S*Math.sin(O*D))}}else if($===1)m=O=>n-Math.exp(-E*O)*(S+(v+E*S)*O);else{const O=E*Math.sqrt($*$-1);m=D=>{const I=Math.exp(-$*E*D),B=Math.min(O*D,300);return n-I*((v+$*E*S)*Math.sinh(B)+O*S*Math.cosh(B))/O}}}return b(),{next:v=>{const S=m(v);if(f)o.done=v>=p;else{const $=h(v)*1e3,E=Math.abs($)<=s,O=Math.abs(n-S)<=r;o.done=E&&O}return o.value=o.done?n:S,o},flipTarget:()=>{d=-d,[t,n]=[n,t],b()}}}ll.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const ic=e=>0,sf=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},al=(e,t,n)=>-n*e+n*t+e,rf=(e,t)=>n=>Math.max(Math.min(n,t),e),Ms=e=>e%1?Number(e.toFixed(5)):e,Ks=/(-)?([\d]*\.?[\d])+/g,ho=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,C3=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Gs(e){return typeof e=="string"}const Xs={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Cs=Object.assign(Object.assign({},Xs),{transform:rf(0,1)}),lr=Object.assign(Object.assign({},Xs),{default:1}),cl=e=>({test:t=>Gs(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),pn=cl("deg"),Ts=cl("%"),ae=cl("px"),oc=Object.assign(Object.assign({},Ts),{parse:e=>Ts.parse(e)/100,transform:e=>Ts.transform(e*100)}),ul=(e,t)=>n=>Boolean(Gs(n)&&C3.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),of=(e,t,n)=>s=>{if(!Gs(s))return s;const[r,i,o,l]=s.match(Ks);return{[e]:parseFloat(r),[t]:parseFloat(i),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},yn={test:ul("hsl","hue"),parse:of("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+Ts.transform(Ms(t))+", "+Ts.transform(Ms(n))+", "+Ms(Cs.transform(s))+")"},T3=rf(0,255),bi=Object.assign(Object.assign({},Xs),{transform:e=>Math.round(T3(e))}),en={test:ul("rgb","red"),parse:of("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+bi.transform(e)+", "+bi.transform(t)+", "+bi.transform(n)+", "+Ms(Cs.transform(s))+")"};function A3(e){let t="",n="",s="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),s=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),s=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,s+=s,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const go={test:ul("#"),parse:A3,transform:en.transform},tt={test:e=>en.test(e)||go.test(e)||yn.test(e),parse:e=>en.test(e)?en.parse(e):yn.test(e)?yn.parse(e):go.parse(e),transform:e=>Gs(e)?e:e.hasOwnProperty("red")?en.transform(e):yn.transform(e)},lf="${c}",af="${n}";function L3(e){var t,n,s,r;return isNaN(e)&&Gs(e)&&((n=(t=e.match(Ks))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(s=e.match(ho))===null||s===void 0?void 0:s.length)!==null&&r!==void 0?r:0)>0}function cf(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const s=e.match(ho);s&&(n=s.length,e=e.replace(ho,lf),t.push(...s.map(tt.parse)));const r=e.match(Ks);return r&&(e=e.replace(Ks,af),t.push(...r.map(Xs.parse))),{values:t,numColors:n,tokenised:e}}function uf(e){return cf(e).values}function df(e){const{values:t,numColors:n,tokenised:s}=cf(e),r=t.length;return i=>{let o=s;for(let l=0;l<r;l++)o=o.replace(l<n?lf:af,l<n?tt.transform(i[l]):Ms(i[l]));return o}}const R3=e=>typeof e=="number"?0:e;function I3(e){const t=uf(e);return df(e)(t.map(R3))}const Qs={test:L3,parse:uf,createTransformer:df,getAnimatableNone:I3},F3=new Set(["brightness","contrast","saturate","opacity"]);function N3(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(Ks)||[];if(!s)return e;const r=n.replace(s,"");let i=F3.has(t)?1:0;return s!==n&&(i*=100),t+"("+i+r+")"}const D3=/([a-z-]*)\(.*?\)/g,_o=Object.assign(Object.assign({},Qs),{getAnimatableNone:e=>{const t=e.match(D3);return t?t.map(N3).join(" "):e}});function yi(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function lc({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let r=0,i=0,o=0;if(!t)r=i=o=n;else{const l=n<.5?n*(1+t):n+t-n*t,a=2*n-l;r=yi(a,l,e+1/3),i=yi(a,l,e),o=yi(a,l,e-1/3)}return{red:Math.round(r*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:s}}const H3=(e,t,n)=>{const s=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-s)+s))},B3=[go,en,yn],ac=e=>B3.find(t=>t.test(e)),ff=(e,t)=>{let n=ac(e),s=ac(t),r=n.parse(e),i=s.parse(t);n===yn&&(r=lc(r),n=en),s===yn&&(i=lc(i),s=en);const o=Object.assign({},r);return l=>{for(const a in o)a!=="alpha"&&(o[a]=H3(r[a],i[a],l));return o.alpha=al(r.alpha,i.alpha,l),n.transform(o)}},V3=e=>typeof e=="number",z3=(e,t)=>n=>t(e(n)),pf=(...e)=>e.reduce(z3);function mf(e,t){return V3(e)?n=>al(e,t,n):tt.test(e)?ff(e,t):gf(e,t)}const hf=(e,t)=>{const n=[...e],s=n.length,r=e.map((i,o)=>mf(i,t[o]));return i=>{for(let o=0;o<s;o++)n[o]=r[o](i);return n}},W3=(e,t)=>{const n=Object.assign(Object.assign({},e),t),s={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(s[r]=mf(e[r],t[r]));return r=>{for(const i in s)n[i]=s[i](r);return n}};function cc(e){const t=Qs.parse(e),n=t.length;let s=0,r=0,i=0;for(let o=0;o<n;o++)s||typeof t[o]=="number"?s++:t[o].hue!==void 0?i++:r++;return{parsed:t,numNumbers:s,numRGB:r,numHSL:i}}const gf=(e,t)=>{const n=Qs.createTransformer(t),s=cc(e),r=cc(t);return s.numHSL===r.numHSL&&s.numRGB===r.numRGB&&s.numNumbers>=r.numNumbers?pf(hf(s.parsed,r.parsed),n):o=>`${o>0?t:e}`},U3=(e,t)=>n=>al(e,t,n);function K3(e){if(typeof e=="number")return U3;if(typeof e=="string")return tt.test(e)?ff:gf;if(Array.isArray(e))return hf;if(typeof e=="object")return W3}function q3(e,t,n){const s=[],r=n||K3(e[0]),i=e.length-1;for(let o=0;o<i;o++){let l=r(e[o],e[o+1]);if(t){const a=Array.isArray(t)?t[o]:t;l=pf(a,l)}s.push(l)}return s}function Y3([e,t],[n]){return s=>n(sf(e,t,s))}function Z3(e,t){const n=e.length,s=n-1;return r=>{let i=0,o=!1;if(r<=e[0]?o=!0:r>=e[s]&&(i=s-1,o=!0),!o){let a=1;for(;a<n&&!(e[a]>r||a===s);a++);i=a-1}const l=sf(e[i],e[i+1],r);return t[i](l)}}function _f(e,t,{clamp:n=!0,ease:s,mixer:r}={}){const i=e.length;nc(i===t.length),nc(!s||!Array.isArray(s)||s.length===i-1),e[0]>e[i-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const o=q3(t,s,r),l=i===2?Y3(e,o):Z3(e,o);return n?a=>l(po(e[0],e[i-1],a)):l}const Jr=e=>t=>1-e(1-t),dl=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,G3=e=>t=>Math.pow(t,e),vf=e=>t=>t*t*((e+1)*t-e),X3=e=>{const t=vf(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},bf=1.525,Q3=4/11,J3=8/11,e4=9/10,yf=e=>e,fl=G3(2),t4=Jr(fl),wf=dl(fl),xf=e=>1-Math.sin(Math.acos(e)),$f=Jr(xf),n4=dl($f),pl=vf(bf),s4=Jr(pl),r4=dl(pl),i4=X3(bf),o4=4356/361,l4=35442/1805,a4=16061/1805,Tr=e=>{if(e===1||e===0)return e;const t=e*e;return e<Q3?7.5625*t:e<J3?9.075*t-9.9*e+3.4:e<e4?o4*t-l4*e+a4:10.8*e*e-20.52*e+10.72},c4=Jr(Tr),u4=e=>e<.5?.5*(1-Tr(1-e*2)):.5*Tr(e*2-1)+.5;function d4(e,t){return e.map(()=>t||wf).splice(0,e.length-1)}function f4(e){const t=e.length;return e.map((n,s)=>s!==0?s/(t-1):0)}function p4(e,t){return e.map(n=>n*t)}function vr({from:e=0,to:t=1,ease:n,offset:s,duration:r=300}){const i={done:!1,value:e},o=Array.isArray(t)?t:[e,t],l=p4(s&&s.length===o.length?s:f4(o),r);function a(){return _f(l,o,{ease:Array.isArray(n)?n:d4(o,n)})}let u=a();return{next:d=>(i.value=u(d),i.done=d>=r,i),flipTarget:()=>{o.reverse(),u=a()}}}function m4({velocity:e=0,from:t=0,power:n=.8,timeConstant:s=350,restDelta:r=.5,modifyTarget:i}){const o={done:!1,value:t};let l=n*e;const a=t+l,u=i===void 0?a:i(a);return u!==a&&(l=u-t),{next:d=>{const p=-l*Math.exp(-d/s);return o.done=!(p>r||p<-r),o.value=o.done?u:u+p,o},flipTarget:()=>{}}}const uc={keyframes:vr,spring:ll,decay:m4};function h4(e){if(Array.isArray(e.to))return vr;if(uc[e.type])return uc[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?vr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?ll:vr}function Ef(e,t,n=0){return e-t-n}function g4(e,t,n=0,s=!0){return s?Ef(t+-e,t,n):t-(e-t)+n}function _4(e,t,n,s){return s?e>=t+n:e<=-n}const v4=e=>{const t=({delta:n})=>e(n);return{start:()=>fo.update(t,!0),stop:()=>v3.update(t)}};function Sf(e){var t,n,{from:s,autoplay:r=!0,driver:i=v4,elapsed:o=0,repeat:l=0,repeatType:a="loop",repeatDelay:u=0,onPlay:d,onStop:p,onComplete:f,onRepeat:m,onUpdate:h}=e,b=nf(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=b,S,$=0,E=b.duration,O,D=!1,I=!0,B;const ne=h4(b);!((n=(t=ne).needsInterpolation)===null||n===void 0)&&n.call(t,s,v)&&(B=_f([0,100],[s,v],{clamp:!1}),s=0,v=100);const le=ne(Object.assign(Object.assign({},b),{from:s,to:v}));function me(){$++,a==="reverse"?(I=$%2===0,o=g4(o,E,u,I)):(o=Ef(o,E,u),a==="mirror"&&le.flipTarget()),D=!1,m&&m()}function _e(){S.stop(),f&&f()}function Ae(Ue){if(I||(Ue=-Ue),o+=Ue,!D){const Se=le.next(Math.max(0,o));O=Se.value,B&&(O=B(O)),D=I?Se.done:o<=0}h==null||h(O),D&&($===0&&(E!=null||(E=o)),$<l?_4(o,E,u,I)&&me():_e())}function Fe(){d==null||d(),S=i(Ae),S.start()}return r&&Fe(),{stop:()=>{p==null||p(),S.stop()}}}function Of(e,t){return t?e*(1e3/t):0}function b4({from:e=0,velocity:t=0,min:n,max:s,power:r=.8,timeConstant:i=750,bounceStiffness:o=500,bounceDamping:l=10,restDelta:a=1,modifyTarget:u,driver:d,onUpdate:p,onComplete:f,onStop:m}){let h;function b(E){return n!==void 0&&E<n||s!==void 0&&E>s}function v(E){return n===void 0?s:s===void 0||Math.abs(n-E)<Math.abs(s-E)?n:s}function S(E){h==null||h.stop(),h=Sf(Object.assign(Object.assign({},E),{driver:d,onUpdate:O=>{var D;p==null||p(O),(D=E.onUpdate)===null||D===void 0||D.call(E,O)},onComplete:f,onStop:m}))}function $(E){S(Object.assign({type:"spring",stiffness:o,damping:l,restDelta:a},E))}if(b(e))$({from:e,velocity:t,to:v(e)});else{let E=r*t+e;typeof u<"u"&&(E=u(E));const O=v(E),D=O===n?-1:1;let I,B;const ne=le=>{I=B,B=le,t=Of(le-I,tf().delta),(D===1&&le>O||D===-1&&le<O)&&$({from:le,to:O,velocity:t})};S({type:"decay",from:e,velocity:t,timeConstant:i,power:r,restDelta:a,modifyTarget:u,onUpdate:b(E)?ne:void 0})}return{stop:()=>h==null?void 0:h.stop()}}const kf=(e,t)=>1-3*t+3*e,jf=(e,t)=>3*t-6*e,Pf=e=>3*e,Ar=(e,t,n)=>((kf(t,n)*e+jf(t,n))*e+Pf(t))*e,Mf=(e,t,n)=>3*kf(t,n)*e*e+2*jf(t,n)*e+Pf(t),y4=1e-7,w4=10;function x4(e,t,n,s,r){let i,o,l=0;do o=t+(n-t)/2,i=Ar(o,s,r)-e,i>0?n=o:t=o;while(Math.abs(i)>y4&&++l<w4);return o}const $4=8,E4=.001;function S4(e,t,n,s){for(let r=0;r<$4;++r){const i=Mf(t,n,s);if(i===0)return t;t-=(Ar(t,n,s)-e)/i}return t}const br=11,ar=1/(br-1);function O4(e,t,n,s){if(e===t&&n===s)return yf;const r=new Float32Array(br);for(let o=0;o<br;++o)r[o]=Ar(o*ar,e,n);function i(o){let l=0,a=1;const u=br-1;for(;a!==u&&r[a]<=o;++a)l+=ar;--a;const d=(o-r[a])/(r[a+1]-r[a]),p=l+d*ar,f=Mf(p,e,n);return f>=E4?S4(o,p,e,n):f===0?p:x4(o,l,l+ar,e,n)}return o=>o===0||o===1?o:Ar(i(o),t,s)}const wi={};class k4{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,s){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(t,n,s)}clear(){this.subscriptions.clear()}}const dc=e=>!isNaN(parseFloat(e));class j4{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new k4,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:r}=tf();this.lastUpdated!==r&&(this.timeDelta=s,this.lastUpdated=r),fo.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>fo.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=dc(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=dc(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Of(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:s}=t(n);this.stopAnimation=s}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function P4(e){return new j4(e)}const{isArray:M4}=Array;function C4(){const e=W({}),t=s=>{const r=i=>{!e.value[i]||(e.value[i].stop(),e.value[i].destroy(),Fh(e.value,i))};s?M4(s)?s.forEach(r):r(s):Object.keys(e.value).forEach(r)},n=(s,r,i)=>{if(e.value[s])return e.value[s];const o=P4(r);return o.onChange(l=>{nt(i,s,l)}),nt(e.value,s,o),o};return ol(t),{motionValues:e,get:n,stop:t}}const T4=e=>Array.isArray(e),mn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),xi=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),A4=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),$i=()=>({type:"keyframes",ease:"linear",duration:300}),L4=e=>({type:"keyframes",duration:800,values:e}),fc={default:A4,x:mn,y:mn,z:mn,rotate:mn,rotateX:mn,rotateY:mn,rotateZ:mn,scaleX:xi,scaleY:xi,scale:xi,backgroundColor:$i,color:$i,opacity:$i},Cf=(e,t)=>{let n;return T4(t)?n=L4:n=fc[e]||fc.default,{to:t,...n(t)}},pc={...Xs,transform:Math.round},Tf={color:tt,backgroundColor:tt,outlineColor:tt,fill:tt,stroke:tt,borderColor:tt,borderTopColor:tt,borderRightColor:tt,borderBottomColor:tt,borderLeftColor:tt,borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,size:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,rotate:pn,rotateX:pn,rotateY:pn,rotateZ:pn,scale:lr,scaleX:lr,scaleY:lr,scaleZ:lr,skew:pn,skewX:pn,skewY:pn,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:Cs,originX:oc,originY:oc,originZ:ae,zIndex:pc,filter:_o,WebkitFilter:_o,fillOpacity:Cs,strokeOpacity:Cs,numOctaves:pc},ml=e=>Tf[e],Af=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function R4(e,t){let n=ml(e);return n!==_o&&(n=Qs),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const I4={linear:yf,easeIn:fl,easeInOut:wf,easeOut:t4,circIn:xf,circInOut:n4,circOut:$f,backIn:pl,backInOut:r4,backOut:s4,anticipate:i4,bounceIn:c4,bounceInOut:u4,bounceOut:Tr},mc=e=>{if(Array.isArray(e)){const[t,n,s,r]=e;return O4(t,n,s,r)}else if(typeof e=="string")return I4[e];return e},F4=e=>Array.isArray(e)&&typeof e[0]!="number",hc=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Qs.test(t)&&!t.startsWith("url("));function N4(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function D4({ease:e,times:t,delay:n,...s}){const r={...s};return t&&(r.offset=t),e&&(r.ease=F4(e)?e.map(mc):mc(e)),n&&(r.elapsed=-n),r}function H4(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),N4(t),B4(e)||(e={...e,...Cf(n,t.to)}),{...t,...D4(e)}}function B4({delay:e,repeat:t,repeatType:n,repeatDelay:s,from:r,...i}){return!!Object.keys(i).length}function V4(e,t){return e[t]||e.default||e}function z4(e,t,n,s,r){const i=V4(s,e);let o=i.from===null||i.from===void 0?t.get():i.from;const l=hc(e,n);o==="none"&&l&&typeof n=="string"&&(o=R4(e,n));const a=hc(e,o);function u(p){const f={from:o,to:n,velocity:s.velocity?s.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return i.type==="inertia"||i.type==="decay"?b4({...f,...i}):Sf({...H4(i,f,e),onUpdate:m=>{f.onUpdate(m),i.onUpdate&&i.onUpdate(m)},onComplete:()=>{s.onComplete&&s.onComplete(),r&&r(),p&&p()}})}function d(p){return t.set(n),s.onComplete&&s.onComplete(),r&&r(),p&&p(),{stop:()=>{}}}return!a||!l||i.type===!1?d:u}function W4(){const{motionValues:e,stop:t,get:n}=C4();return{motionValues:e,stop:t,push:(r,i,o,l={},a)=>{const u=o[r],d=n(r,u,o);if(l&&l.immediate){d.set(i);return}const p=z4(r,d,i,l,a);d.start(p)}}}function U4(e,t={},{motionValues:n,push:s,stop:r}=W4()){const i=w(t),o=W(!1),l=ue(n,f=>{o.value=Object.values(f).filter(m=>m.isAnimating()).length>0},{immediate:!0,deep:!0}),a=f=>{if(!i||!i[f])throw new Error(`The variant ${f} does not exist.`);return i[f]},u=f=>(typeof f=="string"&&(f=a(f)),Promise.all(Object.entries(f).map(([m,h])=>{if(m!=="transition")return new Promise(b=>{s(m,h,e,f.transition||Cf(m,f[m]),b)})}).filter(Boolean)));return{isAnimating:o,apply:u,set:f=>{const m=oo(f)?f:a(f);Object.entries(m).forEach(([h,b])=>{h!=="transition"&&s(h,b,e,{immediate:!0})})},stopTransitions:()=>{l(),r()},leave:async f=>{let m;if(i&&(i.leave&&(m=i.leave),!i.leave&&i.initial&&(m=i.initial)),!m){f();return}await u(m),f()}}}const hl=typeof window<"u",K4=()=>hl&&window.onpointerdown===null,q4=()=>hl&&window.ontouchstart===null,Y4=()=>hl&&window.onmousedown===null;function Z4({target:e,state:t,variants:n,apply:s}){const r=w(n),i=[],o=(...h)=>{const b=p3.apply(null,h);return i.push(b),b},l=W(!1),a=W(!1),u=W(!1),d=k(()=>{let h=[];return r&&(r.hovered&&(h=[...h,...Object.keys(r.hovered)]),r.tapped&&(h=[...h,...Object.keys(r.tapped)]),r.focused&&(h=[...h,...Object.keys(r.focused)])),h}),p=k(()=>{const h={};Object.assign(h,t.value),l.value&&r.hovered&&Object.assign(h,r.hovered),a.value&&r.tapped&&Object.assign(h,r.tapped),u.value&&r.focused&&Object.assign(h,r.focused);for(const b in h)d.value.includes(b)||delete h[b];return h});r.hovered&&(o(e,"mouseenter",()=>{l.value=!0}),o(e,"mouseleave",()=>{l.value=!1,a.value=!1}),o(e,"mouseout",()=>{l.value=!1,a.value=!1})),r.tapped&&(Y4()&&(o(e,"mousedown",()=>{a.value=!0}),o(e,"mouseup",()=>{a.value=!1})),K4()&&(o(e,"pointerdown",()=>{a.value=!0}),o(e,"pointerup",()=>{a.value=!1})),q4()&&(o(e,"touchstart",()=>{a.value=!0}),o(e,"touchend",()=>{a.value=!1}))),r.focused&&(o(e,"focus",()=>{u.value=!0}),o(e,"blur",()=>{u.value=!1}));const f=ue(p,s);return{stop:()=>{i.forEach(h=>h()),f()}}}function G4({set:e,target:t,variants:n,variant:s}){const r=w(n);return{stop:ue(()=>t,()=>{!r||(r.initial&&e("initial"),r.enter&&(s.value="enter"))},{immediate:!0,flush:"pre"})}}function X4({state:e,apply:t}){return{stop:ue(e,s=>{s&&t(s)},{immediate:!0})}}function Q4({target:e,variants:t,variant:n}){const s=w(t);let r=Sn;if(s&&(s.visible||s.visibleOnce)){const{stop:i}=m3(e,([{isIntersecting:o}])=>{s.visible?o?n.value="visible":n.value="initial":s.visibleOnce&&(o?n.value!=="visibleOnce"&&(n.value="visibleOnce"):n.value||(n.value="initial"))});r=i}return{stop:r}}function J4(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const n=W([]);if(t.lifeCycleHooks){const{stop:r}=G4(e);n.value.push(r)}if(t.syncVariants){const{stop:r}=X4(e);n.value.push(r)}if(t.visibilityHooks){const{stop:r}=Q4(e);n.value.push(r)}if(t.eventListeners){const{stop:r}=Z4(e);n.value.push(r)}const s=()=>n.value.forEach(r=>r());return ol(s),{stop:s}}function Lf(e={}){const t=Le({...e}),n=W({});return ue(t,()=>{const s={};for(const[r,i]of Object.entries(t)){const o=ml(r),l=Af(i,o);s[r]=l}n.value=s},{immediate:!0,deep:!0}),{state:t,style:n}}const eE=["","X","Y","Z"],tE=["perspective","translate","scale","rotate","skew"],Rf=["transformPerspective","x","y","z"];tE.forEach(e=>{eE.forEach(t=>{const n=e+t;Rf.push(n)})});const nE=new Set(Rf);function gl(e){return nE.has(e)}const sE=new Set(["originX","originY","originZ"]);function If(e){return sE.has(e)}function rE(e){const t={},n={};return Object.entries(e).forEach(([s,r])=>{gl(s)||If(s)?t[s]=r:n[s]=r}),{transform:t,style:n}}function iE(e,t){let n,s;const{state:r,style:i}=Lf(),o=ue(()=>Pn(e),u=>{if(!!u){s=u;for(const d of Object.keys(Tf))u.style[d]===null||u.style[d]===""||gl(d)||If(d)||nt(r,d,u.style[d]);n&&Object.entries(n).forEach(([d,p])=>nt(u.style,d,p)),t&&t(r)}},{immediate:!0}),l=ue(i,u=>{if(!s){n=u;return}for(const d in u)nt(s.style,d,u[d])},{immediate:!0});return{style:r,stop:()=>{s=void 0,n=void 0,o(),l()}}}const oE={x:"translateX",y:"translateY",z:"translateZ"};function Ff(e={},t=!0){const n=Le({...e}),s=W("");return ue(n,r=>{let i="",o=!1;t&&(r.x||r.y||r.z)&&(i+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(ae.transform).join(",")}) `,o=!0);for(const[l,a]of Object.entries(r)){if(t&&(l==="x"||l==="y"||l==="z"))continue;const u=ml(l),d=Af(a,u);i+=`${oE[l]||l}(${d}) `}t&&!o&&(i+="translateZ(0px) "),s.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:s}}function lE(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=s=>s.endsWith("px")||s.endsWith("deg")?parseFloat(s):isNaN(Number(s))?Number(s):s;return t.reduce((s,r)=>{if(!r)return s;const[i,o]=r.split("("),a=o.split(",").map(d=>n(d.endsWith(")")?d.replace(")",""):d.trim())),u=a.length===1?a[0]:a;return{...s,[i]:u}},{})}function aE(e,t){Object.entries(lE(t)).forEach(([n,s])=>{s=parseFloat(s);const r=["x","y","z"];if(n==="translate3d"){if(s===0){r.forEach(i=>{nt(e,i,0)});return}s.forEach((i,o)=>{nt(e,r[o],i)});return}if(n==="translateX"){nt(e,"x",s);return}if(n==="translateY"){nt(e,"y",s);return}if(n==="translateZ"){nt(e,"z",s);return}nt(e,n,s)})}function cE(e,t){let n,s;const{state:r,transform:i}=Ff(),o=ue(()=>Pn(e),u=>{!u||(s=u,u.style.transform&&aE(r,u.style.transform),n&&(u.style.transform=n),t&&t(r))},{immediate:!0}),l=ue(i,u=>{if(!s){n=u;return}s.style.transform=u},{immediate:!0});return{transform:r,stop:()=>{n=void 0,s=void 0,o(),l()}}}function uE(e,t){const n=Le({}),s=p=>{Object.entries(p).forEach(([f,m])=>{nt(n,f,m)})},{style:r,stop:i}=iE(e,s),{transform:o,stop:l}=cE(e,s),a=ue(n,p=>{Object.entries(p).forEach(([f,m])=>{const h=gl(f)?o:r;h[f]&&h[f]===m||nt(h,f,m)})},{immediate:!0,deep:!0}),u=ue(()=>Pn(e),p=>{!p||t&&s(t)},{immediate:!0});return{motionProperties:n,style:r,transform:o,stop:()=>{i(),l(),a(),u()}}}function dE(e={}){const t=w(e),n=W();return{state:k(()=>{if(!!n.value)return t[n.value]}),variant:n}}function fE(e,t={},n){const{motionProperties:s,stop:r}=uE(e),{variant:i,state:o}=dE(t),l=U4(s,t),a={target:e,variant:i,variants:t,state:o,motionProperties:s,...l,stop:(d=!1)=>{}},{stop:u}=J4(a,n);return a.stop=(d=!1)=>{const p=()=>{a.stopTransitions(),r(),u()};if(!d&&t.value&&t.value.leave){const f=ue(a.isAnimating,m=>{m||(f(),p())})}else p()},ol(()=>a.stop()),f3(()=>Pn(e),d=>{!d||d!=null&&d.motionInstance&&(a.stop(),Object.assign(a,d.motionInstance))}),a}const pE=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],mE=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&oo(n.variants)&&(t.value={...t.value,...n.variants}),pE.forEach(s=>{if(s==="delay"){if(n&&n[s]&&u3(n[s])){const r=n[s];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={...t.value.enter.transition,delay:r}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={...t.value.visible.transition,delay:r}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={...t.value.visibleOnce.transition,delay:r}))}return}s==="visible-once"&&(s="visibleOnce"),n&&n[s]&&oo(n[s])&&(t.value[s]=n[s])}))},Ei=e=>{const t=(s,r,i)=>{const o=r.value&&typeof r.value=="string"?r.value:i.key;o&&wi[o]&&wi[o].stop();const l=W(e||{});typeof r.value=="object"&&(l.value=r.value),mE(i,l);const a=fE(s,l);s.motionInstance=a,o&&nt(wi,o,a)},n=s=>{s.motionInstance&&s.motionInstance.stop()};return{created:t,unmounted:n,bind:t,unbind:n,getSSRProps(s,r){const{initial:i}=s.value||r&&r.props||{},o=a3((e==null?void 0:e.initial)||{},i||{});if(!o||Object.keys(o).length===0)return;const{transform:l,style:a}=rE(o),{transform:u}=Ff(l),{style:d}=Lf(a);return u.value&&(d.value.transform=u.value),{style:d.value}}}},hE={initial:{opacity:0},enter:{opacity:1}},gE={initial:{opacity:0},visible:{opacity:1}},_E={initial:{opacity:0},visibleOnce:{opacity:1}},vE={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},bE={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},yE={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},wE={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},xE={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},$E={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},EE={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},SE={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},OE={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},kE={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},jE={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},PE={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},ME={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},CE={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},TE={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},AE={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},LE={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},RE={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},IE={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},FE={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},NE={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},DE={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},HE={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},BE={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},VE={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},zE={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},WE={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},gc={__proto__:null,fade:hE,fadeVisible:gE,fadeVisibleOnce:_E,pop:vE,popVisible:bE,popVisibleOnce:yE,rollBottom:ME,rollLeft:wE,rollRight:EE,rollTop:kE,rollVisibleBottom:CE,rollVisibleLeft:xE,rollVisibleRight:SE,rollVisibleTop:jE,rollVisibleOnceBottom:TE,rollVisibleOnceLeft:$E,rollVisibleOnceRight:OE,rollVisibleOnceTop:PE,slideBottom:VE,slideLeft:AE,slideRight:IE,slideTop:DE,slideVisibleBottom:zE,slideVisibleLeft:LE,slideVisibleRight:FE,slideVisibleTop:HE,slideVisibleOnceBottom:WE,slideVisibleOnceLeft:RE,slideVisibleOnceRight:NE,slideVisibleOnceTop:BE};function UE(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",s=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(s,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const KE={install(e,t){if(e.directive("motion",Ei()),!t||t&&!t.excludePresets)for(const n in gc){const s=gc[n];e.directive(`motion-${UE(n)}`,Ei(s))}if(t&&t.directives)for(const n in t.directives){const s=t.directives[n];s.initial,e.directive(`motion-${n}`,Ei(s))}}};var _c;const As=typeof window<"u",qE=Object.prototype.toString,YE=e=>qE.call(e)==="[object Object]";As&&((_c=window==null?void 0:window.navigator)==null?void 0:_c.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ZE(e){return So()?(Oo(e),!0):!1}function GE(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const XE=As?window:void 0,vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bo="__vueuse_ssr_handlers__";vo[bo]=vo[bo]||{};vo[bo];function QE(e,t={}){const{immediate:n=!0,window:s=XE}=t,r=W(!1);let i=null;function o(){!r.value||!s||(e(),i=s.requestAnimationFrame(o))}function l(){!r.value&&s&&(r.value=!0,o())}function a(){r.value=!1,i!=null&&s&&(s.cancelAnimationFrame(i),i=null)}return n&&l(),ZE(a),{isActive:r,pause:a,resume:l}}var vc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(vc||(vc={}));const _l="vue-starport-injection",Nf="vue-starport-options",JE={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Df={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var e6=Object.defineProperty,Lr=Object.getOwnPropertySymbols,Hf=Object.prototype.hasOwnProperty,Bf=Object.prototype.propertyIsEnumerable,bc=(e,t,n)=>t in e?e6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,t6=(e,t)=>{for(var n in t||(t={}))Hf.call(t,n)&&bc(e,n,t[n]);if(Lr)for(var n of Lr(t))Bf.call(t,n)&&bc(e,n,t[n]);return e},yc=(e,t)=>{var n={};for(var s in e)Hf.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&Lr)for(var s of Lr(e))t.indexOf(s)<0&&Bf.call(e,s)&&(n[s]=e[s]);return n};const n6=Me({name:"StarportProxy",props:t6({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Df),setup(e,t){const n=C(_l),s=k(()=>n.getInstance(e.port,e.component)),r=W(),i=s.value.generateId(),o=W(!1);return s.value.isVisible||(s.value.land(),o.value=!0),qs(async()=>{s.value.el||(s.value.el=r.value,await We(),o.value=!0,s.value.rect.update())}),qr(async()=>{s.value.rect.update(),s.value.liftOff(),s.value.el=void 0,o.value=!1,!s.value.options.keepAlive&&(await We(),await We(),!s.value.el&&n.dispose(s.value.port))}),ue(()=>e,async()=>{s.value.props&&await We();const l=e,{props:a}=l,u=yc(l,["props"]);s.value.props=a||{},s.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:a,mountedProps:u}=l,d=yc(l,["initialProps","mountedProps"]),p=Sr(d,(o.value?u:a)||{});return St("div",Sr(p,{id:i,ref:r,"data-starport-proxy":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true"}),t.slots.default?St(t.slots.default):void 0)}}});var s6=Object.defineProperty,r6=Object.defineProperties,i6=Object.getOwnPropertyDescriptors,wc=Object.getOwnPropertySymbols,o6=Object.prototype.hasOwnProperty,l6=Object.prototype.propertyIsEnumerable,xc=(e,t,n)=>t in e?s6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a6=(e,t)=>{for(var n in t||(t={}))o6.call(t,n)&&xc(e,n,t[n]);if(wc)for(var n of wc(t))l6.call(t,n)&&xc(e,n,t[n]);return e},c6=(e,t)=>r6(e,i6(t));const u6=Me({name:"Starport",inheritAttrs:!0,props:Df,setup(e,t){const n=W(!1);return qs(()=>{n.value=!0}),()=>{var o,l;const s=(l=(o=t.slots).default)==null?void 0:l.call(o);if(!s)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(s.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${s.length}`);const r=s[0];let i=r.type;return(!YE(i)||Xn(i))&&(i={render(){return s}}),St(n6,c6(a6({},e),{key:e.port,component:Hr(i),props:r.props}))}}});function d6(e){const t=Le({height:0,width:0,left:0,top:0,update:s,listen:i,pause:o,margin:"0px",padding:"0px"}),n=As?document.documentElement||document.body:void 0;function s(){if(!As)return;const l=GE(e);if(!l)return;const{height:a,width:u,left:d,top:p}=l.getBoundingClientRect(),f=window.getComputedStyle(l),m=f.margin,h=f.padding;Object.assign(t,{height:a,width:u,left:d,top:n.scrollTop+p,margin:m,padding:h})}const r=QE(s,{immediate:!1});function i(){!As||(s(),r.resume())}function o(){r.pause()}return t}let f6=(e,t=21)=>(n=t)=>{let s="",r=n;for(;r--;)s+=e[Math.random()*e.length|0];return s};const $c=f6("abcdefghijklmnopqrstuvwxyz",5);function Ec(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function p6(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var m6=Object.defineProperty,Sc=Object.getOwnPropertySymbols,h6=Object.prototype.hasOwnProperty,g6=Object.prototype.propertyIsEnumerable,Oc=(e,t,n)=>t in e?m6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Si=(e,t)=>{for(var n in t||(t={}))h6.call(t,n)&&Oc(e,n,t[n]);if(Sc)for(var n of Sc(t))g6.call(t,n)&&Oc(e,n,t[n]);return e};function _6(e,t,n={}){const s=p6(t),r=Ec(s)||$c(),i=W(),o=W(null),l=W(!1),a=W(!1),u=ep(!0),d=W({}),p=k(()=>Si(Si(Si({},JE),n),d.value)),f=W(0);let m;u.run(()=>{m=d6(i),ue(i,async S=>{S&&(a.value=!0),await We(),i.value||(a.value=!1)})});const h=Ec(e);function b(){return`starport-${r}-${h}-${$c()}`}const v=b();return Le({el:i,id:v,port:e,props:o,rect:m,scope:u,isLanded:l,isVisible:a,options:p,liftOffTime:f,component:t,componentName:s,componentId:r,generateId:b,setLocalOptions(S={}){d.value=JSON.parse(JSON.stringify(S))},elRef(){return i},liftOff(){!l.value||(l.value=!1,f.value=Date.now(),m.listen())},land(){l.value||(l.value=!0,m.pause())}})}function v6(e){const t=Le(new Map);function n(r,i){let o=t.get(r);return o||(o=_6(r,i,e),t.set(r,o)),o.component=i,o}function s(r){var i;(i=t.get(r))==null||i.scope.stop(),t.delete(r)}return{portMap:t,dispose:s,getInstance:n}}var b6=Object.defineProperty,y6=Object.defineProperties,w6=Object.getOwnPropertyDescriptors,kc=Object.getOwnPropertySymbols,x6=Object.prototype.hasOwnProperty,$6=Object.prototype.propertyIsEnumerable,jc=(e,t,n)=>t in e?b6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E6=(e,t)=>{for(var n in t||(t={}))x6.call(t,n)&&jc(e,n,t[n]);if(kc)for(var n of kc(t))$6.call(t,n)&&jc(e,n,t[n]);return e},S6=(e,t)=>y6(e,w6(t));const O6=Me({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=C(_l);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=k(()=>t.getInstance(e.port,e.component)),s=k(()=>{var o;return((o=n.value.el)==null?void 0:o.id)||n.value.id}),r=k(()=>{const o=Date.now()-n.value.liftOffTime,l=Math.max(0,n.value.options.duration-o),a=n.value.rect,u={position:"absolute",left:0,top:0,width:`${a.width}px`,height:`${a.height}px`,margin:a.margin,padding:a.padding,transform:`translate3d(${a.left}px,${a.top}px,0px)`};return!n.value.isVisible||!n.value.el?S6(E6({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:n.value.options.easing}),u)}),i={};return()=>{const o=!!(n.value.isLanded&&n.value.el);return St("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},St(Sm,{to:o?`#${s.value}`:"body",disabled:!o},St(n.value.component,Sr(i,n.value.props))))}}}),k6=Me({name:"StarportCarrier",setup(e,{slots:t}){const n=v6(C(Nf,{}));return os().appContext.app.provide(_l,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([i,{component:o}])=>St(O6,{key:i,port:i,component:o}))]}}});function j6(e={}){return{install(t){t.provide(Nf,e),t.component("Starport",u6),t.component("StarportCarrier",k6)}}}function P6(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(KE),e.app.use(j6({keepAlive:!0}))}function rt(e,t,n){var s,r;return(r=((s=e.instance)==null?void 0:s.$).provides[t])!=null?r:n}function M6(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var d,p,f,m;if(Ps.value||((d=rt(n,fr))==null?void 0:d.value))return;const s=rt(n,Hn),r=rt(n,dr),i=rt(n,Wi),o=n.modifiers.hide!==!1&&n.modifiers.hide!=null,l=n.modifiers.fade!==!1&&n.modifiers.fade!=null,a=((p=s==null?void 0:s.value)==null?void 0:p.length)||0,u=l?Eh:li;if(s&&!((f=s==null?void 0:s.value)!=null&&f.includes(t))&&s.value.push(t),n.value===null&&(n.value=s==null?void 0:s.value.length),!(i!=null&&i.value.has(n.value)))i==null||i.value.set(n.value,[t]);else if(!((m=i==null?void 0:i.value.get(n.value))!=null&&m.includes(t))){const h=(i==null?void 0:i.value.get(n.value))||[];i==null||i.value.set(n.value,[t].concat(h))}t==null||t.classList.toggle(Ln,!0),r&&ue(r,()=>{var S;const h=(S=r==null?void 0:r.value)!=null?S:0,b=n.value!=null?h>=n.value:h>a;t.classList.contains(ai)||t.classList.toggle(u,!b),o!==!1&&o!==void 0&&t.classList.toggle(u,b),t.classList.toggle(ps,!1);const v=i==null?void 0:i.value.get(h);v==null||v.forEach(($,E)=>{$.classList.toggle(ir,!1),E===v.length-1?$.classList.toggle(ps,!0):$.classList.toggle(ir,!0)}),t.classList.contains(ps)||t.classList.toggle(ir,b)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Ln,!1);const s=rt(n,Hn);s!=null&&s.value&&sa(s.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var l,a;if(Ps.value||((l=rt(n,fr))==null?void 0:l.value))return;const s=rt(n,Hn),r=rt(n,dr),i=rt(n,Wi),o=s==null?void 0:s.value.length;n.value===void 0&&(n.value=s==null?void 0:s.value.length),i!=null&&i.value.has(n.value)?(a=i==null?void 0:i.value.get(n.value))==null||a.push(t):i==null||i.value.set(n.value,[t]),t==null||t.classList.toggle(Ln,!0),r&&ue(r,()=>{var d,p,f;const u=((d=r.value)!=null?d:0)>=((f=(p=n.value)!=null?p:o)!=null?f:0);t.classList.contains(ai)||t.classList.toggle(li,!u),t.classList.toggle(ps,!1),t.classList.contains(ps)||t.classList.toggle(ir,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Ln,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var o,l,a;if(Ps.value||((o=rt(n,fr))==null?void 0:o.value))return;const s=rt(n,Hn),r=rt(n,dr),i=((l=s==null?void 0:s.value)==null?void 0:l.length)||0;s&&!((a=s==null?void 0:s.value)!=null&&a.includes(t))&&s.value.push(t),t==null||t.classList.toggle(Ln,!0),r&&ue(r,()=>{var p;const u=(p=r==null?void 0:r.value)!=null?p:0,d=n.value!=null?u>=n.value:u>i;t.classList.toggle(li,d),t.classList.toggle(ai,d)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Ln,!1);const s=rt(n,Hn);s!=null&&s.value&&sa(s.value,t)}})}}}function C6(e,t){const n=pd(e),s=md(t,n.currentRoute,n.currentPage);return{nav:{...n,...s,downloadPDF:ro,next:rn,nextSlide:zs,openInEditor:r3,prev:on,prevSlide:Ws},configs:we,themeConfigs:k(()=>we.themeConfig)}}function T6(){return{install(e){const t=C6(Kt,Ot);e.provide(R,Le(t))}}}const cs=oh(o3);cs.use(ft);cs.use(bh());cs.use(M6());cs.use(T6());P6({app:cs,router:ft});cs.mount("#app");export{vs as $,pe as A,xe as B,Ze as C,h_ as D,rs as E,$e as F,is as G,Ot as H,Cr as I,J5 as J,gi as K,ci as L,Bs as M,mi as N,Tu as O,b2 as P,Zo as Q,g2 as R,Go as S,He as T,Yd as U,E_ as V,un as W,Pt as X,A6 as Y,an as Z,ad as _,c as a,or as a0,Ys as a1,bn as a2,Rt as a3,to as a4,K1 as a5,q1 as a6,Y1 as a7,G1 as a8,Do as a9,ku as aa,F6 as ab,Ge as ac,rv as ad,Mu as ae,X1 as af,qr as ag,f_ as ah,k as b,U as c,Me as d,R as e,lt as f,A as g,w as h,C as i,i_ as j,s3 as k,we as l,wh as m,Re as n,y as o,qs as p,Le as q,W as r,L6 as s,On as t,R6 as u,I6 as v,ue as w,Q as x,Xe as y,V as z};
