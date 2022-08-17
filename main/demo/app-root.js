const zt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}};zt();/*! *****************************************************************************
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
***************************************************************************** */function f(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var c=o.length-1;c>=0;c--)(r=o[c])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol(),rt=new Map;class At{constructor(t,e){if(this._$cssResult$=!0,e!==tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=rt.get(this.cssText);return X&&t===void 0&&(rt.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const jt=o=>new At(typeof o=="string"?o:o+"",tt),N=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new At(e,tt)},Wt=(o,t)=>{X?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},lt=X?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return jt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K;const at=window.trustedTypes,Vt=at?at.emptyScript:"",dt=window.reactiveElementPolyfillSupport,Y={toAttribute(o,t){switch(t){case Boolean:o=o?Vt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},xt=(o,t)=>t!==o&&(t==t||o==o),Z={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:xt};class B extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Eh(i,e);s!==void 0&&(this._$Eu.set(s,i),t.push(s))}),t}static createProperty(t,e=Z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(lt(s))}else t!==void 0&&e.push(lt(t));return e}static _$Eh(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Wt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=Z){var s,n;const r=this.constructor._$Eh(t,i);if(r!==void 0&&i.reflect===!0){const c=((n=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&n!==void 0?n:Y.toAttribute)(e,i.type);this._$Ei=t,c==null?this.removeAttribute(r):this.setAttribute(r,c),this._$Ei=null}}_$AK(t,e){var i,s,n;const r=this.constructor,c=r._$Eu.get(t);if(c!==void 0&&this._$Ei!==c){const d=r.getPropertyOptions(c),l=d.converter,b=(n=(s=(i=l)===null||i===void 0?void 0:i.fromAttribute)!==null&&s!==void 0?s:typeof l=="function"?l:null)!==null&&n!==void 0?n:Y.fromAttribute;this._$Ei=c,this[c]=b(e,d.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||xt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((s,n)=>this[n]=s),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$Eg)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,i)=>this._$ES(i,this[i],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}B.finalized=!0,B.elementProperties=new Map,B.elementStyles=[],B.shadowRootOptions={mode:"open"},dt==null||dt({ReactiveElement:B}),((K=globalThis.reactiveElementVersions)!==null&&K!==void 0?K:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;const T=globalThis.trustedTypes,ct=T?T.createPolicy("lit-html",{createHTML:o=>o}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,et="?"+_,qt=`<${et}>`,H=document,R=(o="")=>H.createComment(o),D=o=>o===null||typeof o!="object"&&typeof o!="function",St=Array.isArray,Ct=o=>{var t;return St(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,pt=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ut=/'/g,ft=/"/g,Et=/^(?:script|style|textarea)$/i,kt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),h=kt(1),vt=kt(2),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),yt=new WeakMap,Bt=(o,t,e)=>{var i,s;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=r=new P(t.insertBefore(R(),c),c,void 0,e!=null?e:{})}return r._$AI(o),r},O=H.createTreeWalker(H,129,null,!1),Ot=(o,t)=>{const e=o.length-1,i=[];let s,n=t===2?"<svg>":"",r=U;for(let d=0;d<e;d++){const l=o[d];let b,p,v=-1,m=0;for(;m<l.length&&(r.lastIndex=m,p=r.exec(l),p!==null);)m=r.lastIndex,r===U?p[1]==="!--"?r=ht:p[1]!==void 0?r=pt:p[2]!==void 0?(Et.test(p[2])&&(s=RegExp("</"+p[2],"g")),r=C):p[3]!==void 0&&(r=C):r===C?p[0]===">"?(r=s!=null?s:U,v=-1):p[1]===void 0?v=-2:(v=r.lastIndex-p[2].length,b=p[1],r=p[3]===void 0?C:p[3]==='"'?ft:ut):r===ft||r===ut?r=C:r===ht||r===pt?r=U:(r=C,s=void 0);const M=r===C&&o[d+1].startsWith("/>")?" ":"";n+=r===U?l+qt:v>=0?(i.push(b),l.slice(0,v)+"$lit$"+l.slice(v)+_+M):l+_+(v===-2?(i.push(void 0),d):M)}const c=n+(o[e]||"<?>")+(t===2?"</svg>":"");return[ct!==void 0?ct.createHTML(c):c,i]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const c=t.length-1,d=this.parts,[l,b]=Ot(t,e);if(this.el=I.createElement(l,i),O.currentNode=this.el.content,e===2){const p=this.el.content,v=p.firstChild;v.remove(),p.append(...v.childNodes)}for(;(s=O.nextNode())!==null&&d.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const p=[];for(const v of s.getAttributeNames())if(v.endsWith("$lit$")||v.startsWith(_)){const m=b[r++];if(p.push(v),m!==void 0){const M=s.getAttribute(m.toLowerCase()+"$lit$").split(_),z=/([.?@])?(.*)/.exec(m);d.push({type:1,index:n,name:z[2],strings:M,ctor:z[1]==="."?Ht:z[1]==="?"?Pt:z[1]==="@"?Ut:L})}else d.push({type:6,index:n})}for(const v of p)s.removeAttribute(v)}if(Et.test(s.tagName)){const p=s.textContent.split(_),v=p.length-1;if(v>0){s.textContent=T?T.emptyScript:"";for(let m=0;m<v;m++)s.append(p[m],R()),O.nextNode(),d.push({type:2,index:++n});s.append(p[v],R())}}}else if(s.nodeType===8)if(s.data===et)d.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(_,p+1))!==-1;)d.push({type:7,index:n}),p+=_.length-1}n++}}static createElement(t,e){const i=H.createElement("template");return i.innerHTML=t,i}}function E(o,t,e=o,i){var s,n,r,c;if(t===S)return t;let d=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const l=D(t)?void 0:t._$litDirective$;return(d==null?void 0:d.constructor)!==l&&((n=d==null?void 0:d._$AO)===null||n===void 0||n.call(d,!1),l===void 0?d=void 0:(d=new l(o),d._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Cl)!==null&&r!==void 0?r:c._$Cl=[])[i]=d:e._$Cu=d),d!==void 0&&(t=E(o,d._$AS(o,t.values),d,i)),t}class Tt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:H).importNode(i,!0);O.currentNode=n;let r=O.nextNode(),c=0,d=0,l=s[0];for(;l!==void 0;){if(c===l.index){let b;l.type===2?b=new P(r,r.nextSibling,this,t):l.type===1?b=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(b=new Rt(r,this,t)),this.v.push(b),l=s[++d]}c!==(l==null?void 0:l.index)&&(r=O.nextNode(),c++)}return n}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class P{constructor(t,e,i,s){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),D(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):Ct(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==u&&D(this._$AH)?this._$AA.nextSibling.data=t:this.S(H.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=I.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(i);else{const r=new Tt(n,this),c=r.p(this.options);r.m(i),this.S(c),this._$AH=r}}_$AC(t){let e=yt.get(t.strings);return e===void 0&&yt.set(t.strings,e=new I(t)),e}M(t){St(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new P(this.A(R()),this.A(R()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class L{constructor(t,e,i,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(n===void 0)t=E(this,t,e,0),r=!D(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{const c=t;let d,l;for(t=n[0],d=0;d<n.length-1;d++)l=E(this,c[i+d],e,d),l===S&&(l=this._$AH[d]),r||(r=!D(l)||l!==this._$AH[d]),l===u?t=u:t!==u&&(t+=(l!=null?l:"")+n[d+1]),this._$AH[d]=l}r&&!s&&this.k(t)}k(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Ht extends L{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===u?void 0:t}}const Kt=T?T.emptyScript:"";class Pt extends L{constructor(){super(...arguments),this.type=4}k(t){t&&t!==u?this.element.setAttribute(this.name,Kt):this.element.removeAttribute(this.name)}}class Ut extends L{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=E(this,t,e,0))!==null&&i!==void 0?i:u)===S)return;const s=this._$AH,n=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==u&&(s===u||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const Zt={P:"$lit$",V:_,L:et,I:1,N:Ot,R:Tt,D:Ct,j:E,H:P,O:L,F:Pt,B:Ut,W:Ht,Z:Rt},gt=window.litHtmlPolyfillSupport;gt==null||gt(I,P),((F=globalThis.litHtmlVersions)!==null&&F!==void 0?F:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var G,J;class x extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Bt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return S}}x.finalized=!0,x._$litElement$=!0,(G=globalThis.litElementHydrateSupport)===null||G===void 0||G.call(globalThis,{LitElement:x});const bt=globalThis.litElementPolyfillSupport;bt==null||bt({LitElement:x});((J=globalThis.litElementVersions)!==null&&J!==void 0?J:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=o=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:s,elements:n}=i;return{kind:s,elements:n,finisher(r){window.customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function y(o){return(t,e)=>e!==void 0?((i,s,n)=>{s.constructor.createProperty(n,i)})(o,t,e):Ft(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gt=({finisher:o,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const n=(s=e.originalKey)!==null&&s!==void 0?s:e.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return o!=null&&(r.finisher=function(c){o(c,n)}),r}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o==null||o(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jt(o,t){return Gt({descriptor:e=>{const i={get(){var s,n;return(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var n,r;return this[s]===void 0&&(this[s]=(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&r!==void 0?r:null),this[s]}}return i}})}let Q=class extends x{render(){return h`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};Q.styles=N`
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
  `;Q=f([V("ia-icon-label")],Q);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},it=o=>(...t)=>({_$litDirective$:o,values:t});class ot{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=it(class extends ot{constructor(o){var t;if(super(o),o.type!==Dt.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const i=o[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[t]){const{style:e}=o.element;if(this.ut===void 0){this.ut=new Set;for(const i in t)this.ut.add(i);return this.render(t)}this.ut.forEach(i=>{t[i]==null&&(this.ut.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const s=t[i];s!=null&&(this.ut.add(i),i.includes("-")?e.setProperty(i,s):e[i]=s)}return S}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=it(class extends ot{constructor(o){var t;if(super(o),o.type!==Dt.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,i;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.et=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!(!((e=this.et)===null||e===void 0)&&e.has(n))&&this.st.add(n);return this.render(t)}const s=o.element.classList;this.st.forEach(n=>{n in t||(s.remove(n),this.st.delete(n))});for(const n in t){const r=!!t[n];r===this.st.has(n)||((i=this.et)===null||i===void 0?void 0:i.has(n))||(r?(s.add(n),this.st.add(n)):(s.remove(n),this.st.delete(n)))}return S}});var a;(function(o){o.ia="ia",o.beta="beta",o.youtube="youtube",o.spotify="spotify",o.webamp="webamp"})(a||(a={}));var g;(function(o){o.iaSamples="Samples",o.iaPlayer="Player",o.beta="Beta",o.spotify="Spotify",o.webamp="Webamp",o.youtube="YouTube"})(g||(g={}));const w={ia:h`<img
    class="ia"
    src="/images/music-theater/internet-archive.svg"
    alt="Internet Archive logo"
    style="height: 20px; width: 20px;"
  />`,beta:h`<img
    class="ia-beta"
    src="/images/music-theater/streaming.svg"
    alt="Internet Archive beta player logo"
    style="height: 20px; width: 20px;"
  />`,spotify:h`<img
    class="spotify"
    src="/images/music-theater/spotify.svg"
    alt="spotify logo"
    style="display: block;"
  />`,webamp:h`<img
    class="webamp"
    src="/images/music-theater/webamp.svg"
    alt="webamp logo"
    style="height: 20px;"
  />`,youtube:h`<img
    class="youtube"
    src="/images/music-theater/youtube.svg"
    alt="youtube logo"
    style="height: 20px; width: 20px; display: block;"
  />`},q=(o=g.iaPlayer,t)=>{const i=st({filter:t?"invert(1)":"invert(0)",height:"20px",width:"20px"}),s=nt({selected:t,"invert-icon-at-hover-selected":t});return h`
    <ia-icon-label class=${s}>
      <span slot="icon" style=${i}>${w.ia}</span>
      <span>${o}</span>
    </ia-icon-label>
  `},It=o=>{const e=st({filter:o?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=nt({selected:o,"invert-icon-at-hover-selected":o});return h`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${e}>${w.beta}</span>
      <span>${g.beta}</span>
    </ia-icon-label>
  `},Nt=o=>h`
  <ia-icon-label class="${o?"selected":""}">
    <span slot="icon">${w.spotify}</span>
    <span>${g.spotify}</span>
  </ia-icon-label>
`,Lt=o=>{const e=st({filter:o?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=nt({selected:o,"invert-icon-at-hover-selected":o});return h`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${e}>${w.webamp}</span>
      <span>Webamp</span>
    </ia-icon-label>
  `},Mt=o=>h`
  <ia-icon-label class="${o?"selected":""}">
    <span slot="icon">${w.youtube}</span>
    <span>${g.youtube}</span>
  </ia-icon-label>
`,Yt=({samples:o,onClick:t,href:e,selected:i})=>{const s=o?g.iaSamples:g.iaPlayer;return h`
    <a href=${e} @click=${()=>t()}>${q(s,i)}</button>
  `},Qt=({samples:o,onClick:t,selected:e})=>{const i=o?g.iaSamples:g.iaPlayer;return h`
    <button @click=${s=>t(s)} class="ia">
      ${q(i,e)}
    </button>
  `},Xt=({onClick:o,selected:t})=>h`<button
  @click=${e=>o(e)}
  class="ia-beta"
>
  ${It(t)}
</button>`,te=({onClick:o,selected:t})=>h`<button
  @click=${e=>o(e)}
  class="sp"
>
  ${Nt(t)}
</button>`,ee=({onClick:o,href:t,selected:e})=>{const i=`${t}?webamp=default`;return h`
    <a href=${i} @click=${s=>o(s)} class="wa">${Lt(e)}</button>
  `},ie=({onClick:o,selected:t})=>h`<button
  @click=${e=>o(e)}
  class="yt"
>
  ${Mt(t)}
</button>`,oe=({samples:o,onClick:t,href:e,selectedOption:i})=>({url:e,selectedHandler:n=>{t(n)},label:q(o?g.iaSamples:g.iaPlayer,i===a.ia),id:a.ia}),se=({samples:o,onClick:t,selectedOption:e})=>({selectedHandler:s=>{t(s)},label:q(o?g.iaSamples:g.iaPlayer,e===a.ia),id:a.ia}),ne=({onClick:o,selectedOption:t})=>({selectedHandler:i=>{o(i)},label:It(t===a.beta),id:a.beta}),re=({onClick:o,selectedOption:t})=>({selectedHandler:i=>{o(i)},label:Nt(t===a.spotify),id:a.spotify}),le=({href:o,onClick:t,selectedOption:e})=>{const i=s=>{t(s)};return{url:`${o}?webamp=default`,selectedHandler:i,label:Lt(e===a.webamp),id:a.webamp}},ae=({onClick:o,selectedOption:t})=>({selectedHandler:i=>{o(i)},label:Mt(t===a.youtube),id:a.youtube}),de=o=>{const{spotify:t,beta:e,youtube:i,selectedOption:s}=o;return[s===a.webamp?oe(o):se(o),e?ne(o):null,t?re(o):null,i?ae(o):null,le(o)].filter(Boolean)};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:ce}=Zt,j=(o,t)=>{var e,i;return t===void 0?((e=o)===null||e===void 0?void 0:e._$litType$)!==void 0:((i=o)===null||i===void 0?void 0:i._$litType$)===t},$t=()=>document.createComment(""),mt=(o,t,e)=>{var i;const s=o._$AA.parentNode,n=t===void 0?o._$AB:t._$AA;if(e===void 0){const r=s.insertBefore($t(),n),c=s.insertBefore($t(),n);e=new ce(r,c,o,o.options)}else{const r=e._$AB.nextSibling,c=e._$AM,d=c!==o;if(d){let l;(i=e._$AQ)===null||i===void 0||i.call(e,o),e._$AM=o,e._$AP!==void 0&&(l=o._$AU)!==c._$AU&&e._$AP(l)}if(r!==n||d){let l=e._$AA;for(;l!==r;){const b=l.nextSibling;s.insertBefore(l,n),l=b}}}return e},he={},wt=(o,t=he)=>o._$AH=t,_t=o=>o._$AH,pe=o=>{o._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=it(class extends ot{constructor(o){super(o),this.tt=new WeakMap}render(o){return[o]}update(o,[t]){if(j(this.it)&&(!j(t)||this.it.strings!==t.strings)){const e=_t(o).pop();let i=this.tt.get(this.it.strings);if(i===void 0){const s=document.createDocumentFragment();i=Bt(u,s),i.setConnected(!1),this.tt.set(this.it.strings,i)}wt(i,[e]),mt(i,void 0,e)}if(j(t)){if(!j(this.it)||this.it.strings!==t.strings){const e=this.tt.get(t.strings);if(e!==void 0){const i=_t(e).pop();pe(o),mt(o,void 0,i),wt(o,[i])}}this.it=t}else this.it=void 0;return this.render(t)}});let A=class extends x{constructor(){super(...arguments),this.open=!1,this.displayCaret=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{}}renderOption(t){const{label:e,url:i=void 0,id:s}=t;let n;const r=this.selectedOption===s?"selected":"";return i?n=h`<a
        href=${i}
        @click=${()=>this.optionClicked(t)}
        >${e}</a
      >`:n=h`<button
        @click=${()=>this.optionClicked(t)}
      >
        ${e}
      </button>`,h`<li class=${r}>${n}</li>`}optionClicked(t){this.selectedOption=t.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:t}})),t.selectedHandler&&(t==null||t.selectedHandler(t))}toggleOptions(){this.open=!this.open}get caret(){return this.open?this.caretUp:this.caretDown}get dropdownState(){return this.open?"open":"closed"}get caretUp(){return vt`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
      fill=""></path>
  </svg>`}get caretDown(){return vt`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
    fill=""></path>
  </svg>`}get availableOptions(){return this.options.filter(t=>this.selectedOption!==t.id)}render(){return h`
      <div class="ia-dropdown-group">
        <button @click=${this.toggleOptions} class="click-main">
          <span class="cta sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.displayCaret?h`<span class="caret">${this.caret}</span>`:u}
        </button>

        <ul class="dropdown-main ${this.dropdownState}">
          ${this.availableOptions.map(t=>this.renderOption(t))}
        </ul>
      </div>
    `}};A.styles=N`
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
  `;f([y({type:Boolean,attribute:!0})],A.prototype,"open",void 0);f([y({type:Boolean,attribute:!0})],A.prototype,"displayCaret",void 0);f([y({type:String,attribute:!0})],A.prototype,"selectedOption",void 0);f([y({type:Array})],A.prototype,"options",void 0);f([y({type:String})],A.prototype,"optionGroup",void 0);f([y({type:Function})],A.prototype,"optionSelected",void 0);A=f([V("ia-dropdown")],A);const fe=N`
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
`;var W;(function(o){o.postInit="postInit",o.channelChange="channelChange"})(W||(W={}));let $=class extends x{constructor(){super(...arguments),this.youtube=!1,this.spotify=!1,this.beta=!1,this.webamp=!0,this.samples=!1,this.selected=a.ia,this.displayStyle="radio",this.url=""}firstUpdated(){this.dispatchEvent(new CustomEvent(W.postInit,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}emitChannelChanged(){this.dispatchEvent(new CustomEvent(W.channelChange,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}iaClicked(){this.selected!==a.ia&&(this.selected=a.ia,this.emitChannelChanged())}betaClicked(){this.selected!==a.beta&&(this.selected=a.beta,this.emitChannelChanged())}spotifyClicked(){this.selected!==a.spotify&&(this.selected=a.spotify,this.emitChannelChanged())}webampClicked(){this.selected!==a.webamp&&(this.selected=a.webamp,this.emitChannelChanged())}youtubeClicked(){this.selected!==a.youtube&&(this.selected=a.youtube,this.emitChannelChanged())}dropdownOptionSelected(t){this.selected=t.id,this.emitChannelChanged(),this.iaDropdown.open=!1}get iaLinkSelector(){const t=this.selected===a.ia?"selected":"";return h`
      <li class=${t}>
        ${Yt({samples:this.samples,selected:this.selected===a.ia,onClick:()=>this.iaClicked(),href:this.url})}
      </li>
    `}get iaButtonSelector(){const t=this.selected===a.ia?"selected":"";return h`
      <li class=${t}>
        ${Qt({samples:this.samples,selected:this.selected===a.ia,onClick:()=>this.iaClicked()})}
      </li>
    `}get iaBetaSelector(){const t=this.selected===a.beta?"selected":"";return h`
      <li class=${t}>
        ${Xt({selected:this.selected===a.beta,onClick:()=>this.betaClicked()})}
      </li>
    `}get spotifySelector(){const t=this.selected===a.spotify?"selected":"";return h`
      <li class=${t}>
        ${te({selected:this.selected===a.spotify,onClick:()=>this.spotifyClicked()})}
      </li>
    `}get webampSelector(){const t=this.selected===a.webamp?"selected":"";return h`
      <li class=${t}>
        ${ee({href:this.url||window.location.href,selected:this.selected===a.webamp,onClick:()=>this.webampClicked()})}
      </li>
    `}get youtubeSelector(){const t=this.selected===a.youtube?"selected":"";return h`
      <li class=${t}>
        ${ie({selected:this.selected===a.youtube,onClick:()=>this.youtubeClicked()})}
      </li>
    `}get properIaSelector(){return this.selected===a.webamp?this.iaLinkSelector:this.iaButtonSelector}toggleDisplayStyle(){const t=this.displayStyle==="dropdown"?"radio":"dropdown";this.displayStyle=t}shouldShowChannelType(t){const e=this.selected===t;return this.displayStyle==="radio"?!0:!(this.displayStyle==="dropdown"&&e)}get dropdownOptions(){const{samples:t,beta:e,spotify:i,webamp:s,youtube:n,url:r,selected:c}=this;return de({selectedOption:c,samples:!!t,beta:e,spotify:i,webamp:s,youtube:n,href:r,onClick:this.dropdownOptionSelected.bind(this)})}get currentlySelectedIcon(){switch(this.selected){case a.beta:return w.beta;case a.spotify:return w.spotify;case a.youtube:return w.youtube;case a.webamp:return w.webamp;default:return w.ia}}get dropdown(){return h`
      <ia-dropdown
        displayCaret
        .options=${this.dropdownOptions}
        .selectedOption=${this.selected}
      >
        <span slot="dropdown-label">${this.currentlySelectedIcon}</span>
      </ia-dropdown>
    `}get radioView(){return h`
      <div id="selector-title"><h4>Play from:</h4></div>
      <div>
        <ul>
          ${this.properIaSelector} ${this.beta?this.iaBetaSelector:u}
          ${this.youtube?this.youtubeSelector:u}
          ${this.spotify?this.spotifySelector:u}
          ${this.webamp?this.webampSelector:u}
        </ul>
      </div>
    `}render(){return h`
      <section id=${this.displayStyle} class=${this.displayStyle}>
        ${ue(this.displayStyle==="radio"?this.radioView:this.dropdown)}
      </section>
    `}};$.styles=[N`
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
    `,fe];f([y({attribute:!0,type:Boolean,reflect:!0})],$.prototype,"youtube",void 0);f([y({attribute:!0,type:Boolean,reflect:!0})],$.prototype,"spotify",void 0);f([y({attribute:!0,type:Boolean,reflect:!0})],$.prototype,"beta",void 0);f([y({attribute:!0,type:Boolean,reflect:!0})],$.prototype,"webamp",void 0);f([y({attribute:!0,type:Boolean,reflect:!0})],$.prototype,"samples",void 0);f([y({type:String,reflect:!0})],$.prototype,"selected",void 0);f([y({type:String,reflect:!0})],$.prototype,"displayStyle",void 0);f([y({type:String})],$.prototype,"url",void 0);f([Jt("ia-dropdown")],$.prototype,"iaDropdown",void 0);$=f([V("channel-selector")],$);let k=class extends x{constructor(){super(...arguments),this.selectedByDropdown="",this.selectedByDropdownOnload="",this.selectedByRadio="",this.selectedByRadioOnload=""}get startAtWebamp(){return new URLSearchParams(location.search.slice(1)).has("webamp")}render(){const t=`${location.origin}/demo`;return h`
      <br />
      <br />
      <channel-selector spotify youtube beta samples
        .selected=${this.startAtWebamp?a.webamp:a.beta}
        @postInit=${e=>{this.selectedByRadioOnload=e.detail.channel}}
        @channelChange=${e=>{this.selectedByRadio=e.detail.channel}}
        .url=${t}
      >
      </channel-selector>

      <section class='details'>
        <h2>Selected by radio</2>
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
      .selected=${this.startAtWebamp?a.webamp:this.selectedByDropdown}
    >
    </channel-selector>
    <section class='details'>
    <h2>Selected by dropdown</h2>
    <h2>on first load: ${this.selectedByDropdownOnload}</h2>
    <h2>on change: ${this.selectedByDropdown}</h2>
    </section>
    `}};k.styles=N`
    :host {
      display: block;
      position: relative;
      color: #fff;
    }

    .details {
      margin: 30px auto;
      padding: 10px;
    }
  `;f([y({type:String})],k.prototype,"selectedByDropdown",void 0);f([y({type:String})],k.prototype,"selectedByDropdownOnload",void 0);f([y({type:String})],k.prototype,"selectedByRadio",void 0);f([y({type:String})],k.prototype,"selectedByRadioOnload",void 0);k=f([V("app-root")],k);
