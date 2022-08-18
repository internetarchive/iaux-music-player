const Yt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}};Yt();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function h(o,t,e,i){var s=arguments.length,r=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var p=o.length-1;p>=0;p--)(n=o[p])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),dt=new Map;class Ct{constructor(t,e){if(this._$cssResult$=!0,e!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=dt.get(this.cssText);return et&&t===void 0&&(dt.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Vt=o=>new Ct(typeof o=="string"?o:o+"",it),B=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new Ct(e,it)},qt=(o,t)=>{et?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},ct=et?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Vt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z;const pt=window.trustedTypes,Kt=pt?pt.emptyScript:"",ht=window.reactiveElementPolyfillSupport,X={toAttribute(o,t){switch(t){case Boolean:o=o?Kt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Et=(o,t)=>t!==o&&(t==t||o==o),F={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Et};class T extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Eh(i,e);s!==void 0&&(this._$Eu.set(s,i),t.push(s))}),t}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||F}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(ct(s))}else t!==void 0&&e.push(ct(t));return e}static _$Eh(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return qt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=F){var s,r;const n=this.constructor._$Eh(t,i);if(n!==void 0&&i.reflect===!0){const p=((r=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&r!==void 0?r:X.toAttribute)(e,i.type);this._$Ei=t,p==null?this.removeAttribute(n):this.setAttribute(n,p),this._$Ei=null}}_$AK(t,e){var i,s,r;const n=this.constructor,p=n._$Eu.get(t);if(p!==void 0&&this._$Ei!==p){const d=n.getPropertyOptions(p),a=d.converter,g=(r=(s=(i=a)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof a=="function"?a:null)!==null&&r!==void 0?r:X.fromAttribute;this._$Ei=p,this[p]=g(e,d.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Et)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,r)=>this[r]=s),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,i)=>this._$ES(i,this[i],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}T.finalized=!0,T.elementProperties=new Map,T.elementStyles=[],T.shadowRootOptions={mode:"open"},ht==null||ht({ReactiveElement:T}),((Z=globalThis.reactiveElementVersions)!==null&&Z!==void 0?Z:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var G;const P=globalThis.trustedTypes,ut=P?P.createPolicy("lit-html",{createHTML:o=>o}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,ot="?"+x,Zt=`<${ot}>`,H=document,L=(o="")=>H.createComment(o),N=o=>o===null||typeof o!="object"&&typeof o!="function",kt=Array.isArray,Bt=o=>{var t;return kt(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yt=/-->/g,ft=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,bt=/'/g,vt=/"/g,Tt=/^(?:script|style|textarea)$/i,Ut=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),c=Ut(1),gt=Ut(2),S=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),mt=new WeakMap,Pt=(o,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=r._$litPart$;if(n===void 0){const p=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=n=new R(t.insertBefore(L(),p),p,void 0,e!=null?e:{})}return n._$AI(o),n},U=H.createTreeWalker(H,129,null,!1),Ht=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":"",n=I;for(let d=0;d<e;d++){const a=o[d];let g,u,b=-1,$=0;for(;$<a.length&&(n.lastIndex=$,u=n.exec(a),u!==null);)$=n.lastIndex,n===I?u[1]==="!--"?n=yt:u[1]!==void 0?n=ft:u[2]!==void 0?(Tt.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=C):u[3]!==void 0&&(n=C):n===C?u[0]===">"?(n=s!=null?s:I,b=-1):u[1]===void 0?b=-2:(b=n.lastIndex-u[2].length,g=u[1],n=u[3]===void 0?C:u[3]==='"'?vt:bt):n===vt||n===bt?n=C:n===yt||n===ft?n=I:(n=C,s=void 0);const W=n===C&&o[d+1].startsWith("/>")?" ":"";r+=n===I?a+Zt:b>=0?(i.push(g),a.slice(0,b)+"$lit$"+a.slice(b)+x+W):a+x+(b===-2?(i.push(void 0),d):W)}const p=r+(o[e]||"<?>")+(t===2?"</svg>":"");return[ut!==void 0?ut.createHTML(p):p,i]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const p=t.length-1,d=this.parts,[a,g]=Ht(t,e);if(this.el=M.createElement(a,i),U.currentNode=this.el.content,e===2){const u=this.el.content,b=u.firstChild;b.remove(),u.append(...b.childNodes)}for(;(s=U.nextNode())!==null&&d.length<p;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const b of s.getAttributeNames())if(b.endsWith("$lit$")||b.startsWith(x)){const $=g[n++];if(u.push(b),$!==void 0){const W=s.getAttribute($.toLowerCase()+"$lit$").split(x),Y=/([.?@])?(.*)/.exec($);d.push({type:1,index:r,name:Y[2],strings:W,ctor:Y[1]==="."?Rt:Y[1]==="?"?Dt:Y[1]==="@"?It:j})}else d.push({type:6,index:r})}for(const b of u)s.removeAttribute(b)}if(Tt.test(s.tagName)){const u=s.textContent.split(x),b=u.length-1;if(b>0){s.textContent=P?P.emptyScript:"";for(let $=0;$<b;$++)s.append(u[$],L()),U.nextNode(),d.push({type:2,index:++r});s.append(u[b],L())}}}else if(s.nodeType===8)if(s.data===ot)d.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(x,u+1))!==-1;)d.push({type:7,index:r}),u+=x.length-1}r++}}static createElement(t,e){const i=H.createElement("template");return i.innerHTML=t,i}}function E(o,t,e=o,i){var s,r,n,p;if(t===S)return t;let d=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const a=N(t)?void 0:t._$litDirective$;return(d==null?void 0:d.constructor)!==a&&((r=d==null?void 0:d._$AO)===null||r===void 0||r.call(d,!1),a===void 0?d=void 0:(d=new a(o),d._$AT(o,e,i)),i!==void 0?((n=(p=e)._$Cl)!==null&&n!==void 0?n:p._$Cl=[])[i]=d:e._$Cu=d),d!==void 0&&(t=E(o,d._$AS(o,t.values),d,i)),t}class Ot{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:H).importNode(i,!0);U.currentNode=r;let n=U.nextNode(),p=0,d=0,a=s[0];for(;a!==void 0;){if(p===a.index){let g;a.type===2?g=new R(n,n.nextSibling,this,t):a.type===1?g=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(g=new Lt(n,this,t)),this.v.push(g),a=s[++d]}p!==(a==null?void 0:a.index)&&(n=U.nextNode(),p++)}return r}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class R{constructor(t,e,i,s){var r;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),N(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==S&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):Bt(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==y&&N(this._$AH)?this._$AA.nextSibling.data=t:this.S(H.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=M.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(i);else{const n=new Ot(r,this),p=n.p(this.options);n.m(i),this.S(p),this._$AH=n}}_$AC(t){let e=mt.get(t.strings);return e===void 0&&mt.set(t.strings,e=new M(t)),e}M(t){kt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new R(this.A(L()),this.A(L()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class j{constructor(t,e,i,s,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=E(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const p=t;let d,a;for(t=r[0],d=0;d<r.length-1;d++)a=E(this,p[i+d],e,d),a===S&&(a=this._$AH[d]),n||(n=!N(a)||a!==this._$AH[d]),a===y?t=y:t!==y&&(t+=(a!=null?a:"")+r[d+1]),this._$AH[d]=a}n&&!s&&this.k(t)}k(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Rt extends j{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===y?void 0:t}}const Ft=P?P.emptyScript:"";class Dt extends j{constructor(){super(...arguments),this.type=4}k(t){t&&t!==y?this.element.setAttribute(this.name,Ft):this.element.removeAttribute(this.name)}}class It extends j{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=E(this,t,e,0))!==null&&i!==void 0?i:y)===S)return;const s=this._$AH,r=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==y&&(s===y||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Lt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const Gt={P:"$lit$",V:x,L:ot,I:1,N:Ht,R:Ot,D:Bt,j:E,H:R,O:j,F:Dt,B:It,W:Rt,Z:Lt},$t=window.litHtmlPolyfillSupport;$t==null||$t(M,R),((G=globalThis.litHtmlVersions)!==null&&G!==void 0?G:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J,Q;class _ extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return S}}_.finalized=!0,_._$litElement$=!0,(J=globalThis.litElementHydrateSupport)===null||J===void 0||J.call(globalThis,{LitElement:_});const wt=globalThis.litElementPolyfillSupport;wt==null||wt({LitElement:_});((Q=globalThis.litElementVersions)!==null&&Q!==void 0?Q:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=o=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(n){window.customElements.define(e,n)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jt=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function f(o){return(t,e)=>e!==void 0?((i,s,r)=>{s.constructor.createProperty(r,i)})(o,t,e):Jt(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt=({finisher:o,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const r=(s=e.originalKey)!==null&&s!==void 0?s:e.key,n=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return o!=null&&(n.finisher=function(p){o(p,r)}),n}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o==null||o(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function st(o,t){return Qt({descriptor:e=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var r,n;return this[s]===void 0&&(this[s]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null),this[s]}}return i}})}let tt=class extends _{render(){return c`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};tt.styles=B`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host(.invert-icon-at-hover:hover) slot[name='icon'] {
      filter: invert(1);
    }

    :host(.selected) {
      background-color: var(--selectedBgColor, #fff);
      color: var(--selectedTextColor, #2c2c2c);
    }

    :host(.invert-icon-at-selected.selected) slot[name='icon'] {
      filter: invert(1);
    }

    div.icon-label-container {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;
      height: 100%;
    }

    slot[name='icon'] {
      width: var(--iconWidth, 20px);
      margin-right: var(--iconLabelGutterWidth, 10px);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;
      height: 100%;
    }
  `;tt=h([D("ia-icon-label")],tt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},rt=o=>(...t)=>({_$litDirective$:o,values:t});class nt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=rt(class extends nt{constructor(o){var t;if(super(o),o.type!==Nt.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const i=o[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ut===void 0){this.ut=new Set;for(const i in t)this.ut.add(i);return this.render(t)}this.ut.forEach(i=>{t[i]==null&&(this.ut.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const s=t[i];s!=null&&(this.ut.add(i),i.includes("-")?e.setProperty(i,s):e[i]=s)}return S}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=rt(class extends nt{constructor(o){var t;if(super(o),o.type!==Nt.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,i;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.et=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.et)===null||e===void 0)&&e.has(r))&&this.st.add(r);return this.render(t)}const s=o.element.classList;this.st.forEach(r=>{r in t||(s.remove(r),this.st.delete(r))});for(const r in t){const n=!!t[r];n===this.st.has(r)||((i=this.et)===null||i===void 0?void 0:i.has(r))||(n?(s.add(r),this.st.add(r)):(s.remove(r),this.st.delete(r)))}return S}});var l;(function(o){o.ia="ia",o.beta="beta",o.youtube="youtube",o.spotify="spotify",o.webamp="webamp"})(l||(l={}));var v;(function(o){o.iaSamples="Samples",o.iaPlayer="Player",o.beta="Beta",o.spotify="Spotify",o.webamp="Webamp",o.youtube="YouTube"})(v||(v={}));const w={ia:c`<img
    class="ia"
    src="https://archive.org/images/music-theater/internet-archive.svg"
    alt="Internet Archive logo"
    style="height: 20px; width: 20px;"
  />`,beta:c`<img
    class="ia-beta"
    src="https://archive.org/images/music-theater/streaming.svg"
    alt="Internet Archive beta player logo"
    style="height: 20px; width: 20px;"
  />`,spotify:c`<img
    class="spotify"
    src="https://archive.org/images/music-theater/spotify.svg"
    alt="Spotify logo"
    style="display: block;"
  />`,webamp:c`<img
    class="webamp"
    src="https://archive.org/images/music-theater/webamp.svg"
    alt="webamp logo"
    style="height: 20px;"
  />`,youtube:c`<img
    class="youtube"
    src="https://archive.org/images/music-theater/youtube.svg"
    alt="youtube logo"
    style="height: 20px; width: 20px; display: block;"
  />`},K=(o=v.iaPlayer,t)=>{const i=lt({filter:t?"invert(1)":"invert(0)",height:"20px",width:"20px"}),s=at({selected:t,"invert-icon-at-hover-selected":t});return c`
    <ia-icon-label class=${s}>
      <span slot="icon" style=${i}>${w.ia}</span>
      <span>${o}</span>
    </ia-icon-label>
  `},Mt=o=>{const e=lt({filter:o?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=at({selected:o,"invert-icon-at-hover-selected":o});return c`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${e}>${w.beta}</span>
      <span>${v.beta}</span>
    </ia-icon-label>
  `},zt=o=>c`
  <ia-icon-label class="${o?"selected":""}">
    <span slot="icon">${w.spotify}</span>
    <span>${v.spotify}</span>
  </ia-icon-label>
`,jt=o=>{const e=lt({filter:o?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=at({selected:o,"invert-icon-at-hover-selected":o});return c`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${e}>${w.webamp}</span>
      <span>Webamp</span>
    </ia-icon-label>
  `},Wt=o=>c`
  <ia-icon-label class="${o?"selected":""}">
    <span slot="icon">${w.youtube}</span>
    <span>${v.youtube}</span>
  </ia-icon-label>
`,Xt=({samples:o,onClick:t,href:e,selected:i})=>{const s=o?v.iaSamples:v.iaPlayer;return c`
    <a href=${e} @click=${()=>t()}>${K(s,i)}</button>
  `},te=({samples:o,onClick:t,selected:e})=>{const i=o?v.iaSamples:v.iaPlayer;return c`
    <button @click=${s=>t(s)} class="ia">
      ${K(i,e)}
    </button>
  `},ee=({onClick:o,selected:t})=>c`<button
  @click=${e=>o(e)}
  class="ia-beta"
>
  ${Mt(t)}
</button>`,ie=({onClick:o,selected:t})=>c`<button
  @click=${e=>o(e)}
  class="sp"
>
  ${zt(t)}
</button>`,oe=({onClick:o,href:t,selected:e})=>{const i=`${t}?webamp=default`;return c`
    <a href=${i} @click=${s=>o(s)} class="wa">${jt(e)}</button>
  `},se=({onClick:o,selected:t})=>c`<button
  @click=${e=>o(e)}
  class="yt"
>
  ${Wt(t)}
</button>`,re=({samples:o,onClick:t,href:e,selectedOption:i})=>({url:e,selectedHandler:r=>{t(r)},label:K(o?v.iaSamples:v.iaPlayer,i===l.ia),id:l.ia}),ne=({samples:o,onClick:t,selectedOption:e})=>({selectedHandler:s=>{t(s)},label:K(o?v.iaSamples:v.iaPlayer,e===l.ia),id:l.ia}),le=({onClick:o,selectedOption:t})=>({selectedHandler:i=>{o(i)},label:Mt(t===l.beta),id:l.beta}),ae=({onClick:o,selectedOption:t})=>({selectedHandler:i=>{o(i)},label:zt(t===l.spotify),id:l.spotify}),de=({href:o,onClick:t,selectedOption:e})=>{const i=s=>{t(s)};return{url:`${o}?webamp=default`,selectedHandler:i,label:jt(e===l.webamp),id:l.webamp}},ce=({onClick:o,selectedOption:t})=>({selectedHandler:i=>{o(i)},label:Wt(t===l.youtube),id:l.youtube}),pe=o=>{const{spotify:t,beta:e,youtube:i,selectedOption:s}=o;return[s===l.webamp?re(o):ne(o),e?le(o):null,t?ae(o):null,i?ce(o):null,de(o)].filter(Boolean)};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:he}=Gt,V=(o,t)=>{var e,i;return t===void 0?((e=o)===null||e===void 0?void 0:e._$litType$)!==void 0:((i=o)===null||i===void 0?void 0:i._$litType$)===t},_t=()=>document.createComment(""),xt=(o,t,e)=>{var i;const s=o._$AA.parentNode,r=t===void 0?o._$AB:t._$AA;if(e===void 0){const n=s.insertBefore(_t(),r),p=s.insertBefore(_t(),r);e=new he(n,p,o,o.options)}else{const n=e._$AB.nextSibling,p=e._$AM,d=p!==o;if(d){let a;(i=e._$AQ)===null||i===void 0||i.call(e,o),e._$AM=o,e._$AP!==void 0&&(a=o._$AU)!==p._$AU&&e._$AP(a)}if(n!==r||d){let a=e._$AA;for(;a!==n;){const g=a.nextSibling;s.insertBefore(a,r),a=g}}}return e},ue={},At=(o,t=ue)=>o._$AH=t,St=o=>o._$AH,ye=o=>{o._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=rt(class extends nt{constructor(o){super(o),this.tt=new WeakMap}render(o){return[o]}update(o,[t]){if(V(this.it)&&(!V(t)||this.it.strings!==t.strings)){const e=St(o).pop();let i=this.tt.get(this.it.strings);if(i===void 0){const s=document.createDocumentFragment();i=Pt(y,s),i.setConnected(!1),this.tt.set(this.it.strings,i)}At(i,[e]),xt(i,void 0,e)}if(V(t)){if(!V(this.it)||this.it.strings!==t.strings){const e=this.tt.get(t.strings);if(e!==void 0){const i=St(e).pop();ye(o),xt(o,void 0,i),At(o,[i])}}this.it=t}else this.it=void 0;return this.render(t)}});let A=class extends _{constructor(){super(...arguments),this.open=!1,this.displayCaret=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{}}renderOption(t){const{label:e,url:i=void 0,id:s}=t;let r;const n=this.selectedOption===s?"selected":"";return i?r=c`<a
        href=${i}
        @click=${()=>this.optionClicked(t)}
        >${e}</a
      >`:r=c`<button
        @click=${()=>this.optionClicked(t)}
      >
        ${e}
      </button>`,c`<li class=${n}>${r}</li>`}optionClicked(t){this.selectedOption=t.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:t}})),t.selectedHandler&&(t==null||t.selectedHandler(t))}toggleOptions(){this.open=!this.open}get caret(){return this.open?this.caretUp:this.caretDown}get dropdownState(){return this.open?"open":"closed"}get caretUp(){return gt`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
      fill=""></path>
  </svg>`}get caretDown(){return gt`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
    fill=""></path>
  </svg>`}get availableOptions(){return this.options.filter(t=>this.selectedOption!==t.id)}render(){return c`
      <div class="ia-dropdown-group">
        <button @click=${this.toggleOptions} class="click-main">
          <span class="cta sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.displayCaret?c`<span class="caret">${this.caret}</span>`:y}
        </button>

        <ul class="dropdown-main ${this.dropdownState}">
          ${this.availableOptions.map(t=>this.renderOption(t))}
        </ul>
      </div>
    `}};A.styles=B`
    :host {
      display: inline;
      color: var(--dropdownTextColor, #fff);
    }

    svg.caret-up-svg,
    svg.caret-down-svg {
      fill: var(--dropdownCaretColor, #fff);
      vertical-align: middle;
    }

    button.click-main {
      background: transparent;
      color: inherit;
      border: none;
      cursor: pointer;
      outline: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      flex-wrap: nowrap;
      flex-direction: row;
      padding-left: 0;
    }

    button slot {
      padding-right: 5px;
      display: inline-block;
    }

    .ia-dropdown-group {
      width: inherit;
      height: inherit;
      position: relative;
    }

    .sr-only {
      border: 0 !important;
      clip: rect(1px, 1px, 1px, 1px) !important;
      -webkit-clip-path: inset(50%) !important;
      clip-path: inset(50%) !important;
      height: 1px !important;
      margin: -1px !important;
      overflow: hidden !important;
      padding: 0 !important;
      position: absolute !important;
      width: 1px !important;
      white-space: nowrap !important;
    }

    .caret svg {
      height: var(--caretHeight, 10px);
      width: var(--caretWidth, 20px);
    }

    ul {
      z-index: var(--dropdownListZIndex, 1);
    }

    ul.dropdown-main.closed {
      visibility: hidden;
      height: 1px;
      width: 1px;
    }

    ul.dropdown-main {
      position: absolute;
      list-style: none;
      margin: 5px 0 0 0;
      padding: 0;
      color: var(--dropdownTextColor, #fff);
      border-radius: 4px;
      border: 1px solid var(--dropdownBorderColor, #fff);
    }

    ul.dropdown-main {
      background: var(--dropdownBgColor, #333);
    }

    ul.dropdown-main li:hover:first-child {
      border-top-color: var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3));
    }

    ul.dropdown-main li:hover:last-child {
      border-bottom-color: var(
        --dropdownHoverBgColor,
        rgba(255, 255, 255, 0.3)
      );
    }

    ul.dropdown-main li:hover:not(:first-child) {
      border-top: 0.5px solid var(--dropdownHoverTopBottomBorderColor, #333);
    }
    ul.dropdown-main li:hover:not(:last-child) {
      border-bottom: 0.5px solid var(--dropdownHoverTopBottomBorderColor, #333);
    }

    ul.dropdown-main li.selected:last-child {
      border-bottom-color: var(--dropdownSelectedBgColor, #fff);
    }

    ul.dropdown-main li.selected:first-child {
      border-top-color: var(--dropdownSelectedBgColor, #fff);
    }

    ul.dropdown-main li.selected > * {
      background-color: var(--dropdownSelectedBgColor, #fff);
      color: var(--dropdownSelectedTextColor, #2c2c2c);
    }

    ul.dropdown-main li:hover {
      background-color: var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3));
      color: var(--dropdownHoverTextColor, #fff);
      list-style: none;
      cursor: pointer;
    }

    ul.dropdown-main li:hover > * {
      background-color: var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3));
      color: var(--dropdownHoverTextColor, #fff);
    }

    ul.dropdown-main li {
      background: var(--dropdownBgColor, #333);
      list-style: none;
      height: 30px;
      cursor: pointer;
      border-bottom: 0.5px solid var(--dropdownBgColor, #333);
      border-top: 0.5px solid var(--dropdownBgColor, #333);
    }

    ul.dropdown-main li button {
      background: none;
      color: inherit;
      border: none;
      font: inherit;
      cursor: pointer;
      outline: inherit;
    }

    ul.dropdown-main li a {
      text-decoration: none;
      display: block;
      box-sizing: border-box;
    }

    ul.dropdown-main li:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    ul.dropdown-main li:last-child {
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    /* cover the list with the label */
    ul.dropdown-main li > * > :first-child {
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;
      height: 100%;
      padding: 5px 10px;
      box-sizing: border-box;
    }

    ul.dropdown-main li > * {
      width: 100%;
      height: inherit;
      color: var(--dropdownTextColor, #fff);
      background: transparent;
      padding: 0;
    }
  `;h([f({type:Boolean,attribute:!0})],A.prototype,"open",void 0);h([f({type:Boolean,attribute:!0})],A.prototype,"displayCaret",void 0);h([f({type:String,attribute:!0})],A.prototype,"selectedOption",void 0);h([f({type:Array})],A.prototype,"options",void 0);h([f({type:String})],A.prototype,"optionGroup",void 0);h([f({type:Function})],A.prototype,"optionSelected",void 0);A=h([D("ia-dropdown")],A);const be=B`
  section#radio {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #radio #selector-title {
    margin-right: 5px;
  }

  #radio ul {
    display: inline-block;
  }

  #radio ul {
    border-radius: 50px;
    display: inline-flex;
    align-content: flex-start;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }

  #radio li {
    border: 1px solid #fff;
  }

  #radio li:first-child {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding-left: 5px;
  }
  #radio li:first-child ia-icon-label {
    margin-left: 5px;
  }

  #radio li:last-child {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding-right: 10px;
    padding-left: 5px;
  }

  #radio li:last-child ia-icon-label {
    margin-right: 5px;
  }

  #radio li:not(:last-child) {
    border-right: none;
    padding-right: 5px;
    padding-left: 5px;
  }

  /* Demarcate when hovering next to selected channel */
  #radio li > ia-icon-label {
    height: 30px;
    padding: 5px;
    box-sizing: border-box;
  }
  /* End demarcation */
`;var q;(function(o){o.postInit="postInit",o.channelChange="channelChange"})(q||(q={}));let m=class extends _{constructor(){super(...arguments),this.youtube=!1,this.spotify=!1,this.beta=!1,this.webamp=!0,this.samples=!1,this.selected=l.ia,this.displayStyle="radio",this.url=""}firstUpdated(){this.dispatchEvent(new CustomEvent(q.postInit,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}emitChannelChanged(){this.dispatchEvent(new CustomEvent(q.channelChange,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}iaClicked(){this.selected!==l.ia&&(this.selected=l.ia,this.emitChannelChanged())}betaClicked(){this.selected!==l.beta&&(this.selected=l.beta,this.emitChannelChanged())}spotifyClicked(){this.selected!==l.spotify&&(this.selected=l.spotify,this.emitChannelChanged())}webampClicked(){this.selected!==l.webamp&&(this.selected=l.webamp,this.emitChannelChanged())}youtubeClicked(){this.selected!==l.youtube&&(this.selected=l.youtube,this.emitChannelChanged())}dropdownOptionSelected(t){this.selected=t.id,this.emitChannelChanged(),this.iaDropdown.open=!1}get iaLinkSelector(){const t=this.selected===l.ia?"selected":"";return c`
      <li class=${t}>
        ${Xt({samples:this.samples,selected:this.selected===l.ia,onClick:()=>this.iaClicked(),href:this.url})}
      </li>
    `}get iaButtonSelector(){const t=this.selected===l.ia?"selected":"";return c`
      <li class=${t}>
        ${te({samples:this.samples,selected:this.selected===l.ia,onClick:()=>this.iaClicked()})}
      </li>
    `}get iaBetaSelector(){const t=this.selected===l.beta?"selected":"";return c`
      <li class=${t}>
        ${ee({selected:this.selected===l.beta,onClick:()=>this.betaClicked()})}
      </li>
    `}get spotifySelector(){const t=this.selected===l.spotify?"selected":"";return c`
      <li class=${t}>
        ${ie({selected:this.selected===l.spotify,onClick:()=>this.spotifyClicked()})}
      </li>
    `}get webampSelector(){const t=this.selected===l.webamp?"selected":"";return c`
      <li class=${t}>
        ${oe({href:this.url||window.location.href,selected:this.selected===l.webamp,onClick:()=>this.webampClicked()})}
      </li>
    `}get youtubeSelector(){const t=this.selected===l.youtube?"selected":"";return c`
      <li class=${t}>
        ${se({selected:this.selected===l.youtube,onClick:()=>this.youtubeClicked()})}
      </li>
    `}get properIaSelector(){return this.selected===l.webamp?this.iaLinkSelector:this.iaButtonSelector}toggleDisplayStyle(){const t=this.displayStyle==="dropdown"?"radio":"dropdown";this.displayStyle=t}shouldShowChannelType(t){const e=this.selected===t;return this.displayStyle==="radio"?!0:!(this.displayStyle==="dropdown"&&e)}get dropdownOptions(){const{samples:t,beta:e,spotify:i,webamp:s,youtube:r,url:n,selected:p}=this;return pe({selectedOption:p,samples:!!t,beta:e,spotify:i,webamp:s,youtube:r,href:n,onClick:this.dropdownOptionSelected.bind(this)})}get currentlySelectedIcon(){switch(this.selected){case l.beta:return w.beta;case l.spotify:return w.spotify;case l.youtube:return w.youtube;case l.webamp:return w.webamp;default:return w.ia}}get dropdown(){return c`
      <ia-dropdown
        displayCaret
        .options=${this.dropdownOptions}
        .selectedOption=${this.selected}
      >
        <span slot="dropdown-label">${this.currentlySelectedIcon}</span>
      </ia-dropdown>
    `}get radioView(){return c`
      <div id="selector-title"><h4>Play from:</h4></div>
      <div>
        <ul>
          ${this.properIaSelector} ${this.beta?this.iaBetaSelector:y}
          ${this.youtube?this.youtubeSelector:y}
          ${this.spotify?this.spotifySelector:y}
          ${this.webamp?this.webampSelector:y}
        </ul>
      </div>
    `}render(){return c`
      <section id=${this.displayStyle} class=${this.displayStyle}>
        ${fe(this.displayStyle==="radio"?this.radioView:this.dropdown)}
      </section>
    `}};m.styles=[B`
      :host {
        display: block;
        color: var(--channel-selector-text-color, #fff);
      }

      ia-dropdown {
        --dropdownBgColor: #333;
        --dropdownHoverBgColor: #474747;
      }

      #selector-title,
      .selected-option {
        color: var(--channel-selector-title-color, #fff);
      }

      h4 {
        margin: 0;
      }

      a:link,
      a:visited,
      a:active,
      a {
        color: inherit;
        text-decoration: none;
      }

      button {
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        margin: 0;
      }

      li > *,
      #dropdown .selected-option {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: center;
        width: 100%;
      }

      li:hover {
        background-color: var(--channel-selector-hover-bg-color, #474747);
      }

      li.selected {
        background-color: #fff;
        color: #2c2c2c;
      }

      ul,
      li {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      li {
        display: flex;
        height: 30px;
        background-color: #333;
      }

      #dropdown .close,
      .sr-only {
        width: 1px;
        height: 1px;
        padding: 0px;
        margin: -1px;
        overflow: hidden;
        clip: rect(0px, 0px, 0px, 0px);
        border: 0px;
        display: block;
      }

      #radio .selected-option {
        display: none;
      }

      li a.ia {
        display: flex;
      }

      *[slot='dropdown-label'] img {
        height: 30px !important;
        width: 30px !important;
        display: block;
      }
    `,be];h([f({attribute:!0,type:Boolean,reflect:!0})],m.prototype,"youtube",void 0);h([f({attribute:!0,type:Boolean,reflect:!0})],m.prototype,"spotify",void 0);h([f({attribute:!0,type:Boolean,reflect:!0})],m.prototype,"beta",void 0);h([f({attribute:!0,type:Boolean,reflect:!0})],m.prototype,"webamp",void 0);h([f({attribute:!0,type:Boolean,reflect:!0})],m.prototype,"samples",void 0);h([f({type:String,reflect:!0})],m.prototype,"selected",void 0);h([f({type:String,reflect:!0})],m.prototype,"displayStyle",void 0);h([f({type:String})],m.prototype,"url",void 0);h([st("ia-dropdown")],m.prototype,"iaDropdown",void 0);m=h([D("channel-selector")],m);let z=class extends _{constructor(){super(...arguments),this.iaSpotifyUrn="",this.display=!1}get spotifyUrl(){return!this.iaSpotifyUrn||!this.iaSpotifyUrn.match(/urn:spotify:/g)?"":`https://open.spotify.com/embed/${this.iaSpotifyUrn.replace(/urn:spotify:/g,"").replace(/:/g,"/")}`}render(){const t=this.spotifyUrl;return t?c`
      <iframe
        id="embed-iframe"
        src="${t}"
        width="100%"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Spotify Player"
      ></iframe>
    `:c`<h3>Invalid Spotify URI: ${this.iaSpotifyUrn}</h3>`}static get styles(){return[B`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}};h([f({type:String,reflect:!0})],z.prototype,"iaSpotifyUrn",void 0);h([f({type:Boolean,reflect:!0})],z.prototype,"display",void 0);h([st("iframe")],z.prototype,"iframe",void 0);z=h([D("spotify-player")],z);let O=class extends _{constructor(){super(...arguments),this.iaYouTubeUrn="",this.display=!1,this.baseHost="https://archive.org"}get youTubeUrl(){if(!this.iaYouTubeUrn||!this.iaYouTubeUrn.match(/urn:youtube:/g))return"";const e=this.iaYouTubeUrn.replace(/urn:youtube:/g,"").replace(/:/g,"/"),i=`origin=${this.baseHost}&widgetid=1&autoplay=1&rel=0`;return`https://www.youtube.com/embed/${e}?${i}`}render(){const t=this.youTubeUrl;return t?c`
      <iframe
        id="embed-iframe"
        src="${t}"
        width="100%"
        height="180"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="YouTube Player"
      ></iframe>
    `:c`<h3>Invalid YouTube ID: ${this.iaYouTubeUrn}</h3>`}static get styles(){return[B`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}};h([f({type:String,reflect:!0})],O.prototype,"iaYouTubeUrn",void 0);h([f({type:Boolean,reflect:!0})],O.prototype,"display",void 0);h([f({type:String})],O.prototype,"baseHost",void 0);h([st("iframe")],O.prototype,"iframe",void 0);O=h([D("youtube-player")],O);let k=class extends _{constructor(){super(...arguments),this.selectedByDropdown=l.beta,this.selectedByDropdownOnload="",this.selectedByRadio=l.beta,this.selectedByRadioOnload=""}get startAtWebamp(){return new URLSearchParams(location.search.slice(1)).has("webamp")}get playerByRadio(){return this.selectedByRadio===l.spotify?c`<spotify-player
        iAspotifyUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`:this.selectedByRadio===l.youtube?c`<youtube-player
        iaYouTubeUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`:c`<h2>Player type: ${this.selectedByRadio}</h2>`}get playerByDropdown(){return this.selectedByDropdown===l.spotify?c`<spotify-player
        iAspotifyUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`:this.selectedByDropdown===l.youtube?c`<youtube-player
        iaYouTubeUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`:c`<h2>Player type: ${this.selectedByDropdown}</h2>`}render(){const t=`${location.origin}/demo`;return c`
      <br />
      <channel-selector
        spotify
        youtube
        beta
        samples
        .selected=${this.startAtWebamp?l.webamp:this.selectedByRadio}
        @postInit=${e=>{this.selectedByRadioOnload=e.detail.channel}}
        @channelChange=${e=>{this.selectedByRadio=e.detail.channel}}
        .url=${t}
      >
      </channel-selector>

      <section class="player">${this.playerByRadio}</section>
      <section class="details">
        <h2>Selected by radio</h2>
        <h2>on first load: ${this.selectedByRadioOnload}</h2>
        <h2>on change: ${this.selectedByRadio}</h2>
      </section>

      <channel-selector
        spotify
        youtube
        beta
        .displayStyle=${"dropdown"}
        .url=${t}
        @postInit=${e=>{this.selectedByDropdownOnload=e.detail.channel}}
        @channelChange=${e=>{this.selectedByDropdown=e.detail.channel}}
        .selected=${this.startAtWebamp?l.webamp:this.selectedByDropdown?this.selectedByDropdown:l.beta}
      >
      </channel-selector>
      <section class="player">${this.playerByDropdown}</section>
      <section class="details">
        <h2>Selected by dropdown</h2>
        <h2>on first load: ${this.selectedByDropdownOnload}</h2>
        <h2>on change: ${this.selectedByDropdown}</h2>
      </section>
    `}};k.styles=B`
    :host {
      display: block;
      position: relative;
      color: #fff;
    }

    .details {
      margin: 30px auto;
      padding: 10px;
    }

    .player {
      display: block;
      margin: 10px auto;
      border: 1px solid green;
      text-align: center;
    }
  `;h([f({type:String})],k.prototype,"selectedByDropdown",void 0);h([f({type:String})],k.prototype,"selectedByDropdownOnload",void 0);h([f({type:String})],k.prototype,"selectedByRadio",void 0);h([f({type:String})],k.prototype,"selectedByRadioOnload",void 0);k=h([D("app-root")],k);
