const yt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}};yt();/*! *****************************************************************************
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
***************************************************************************** */function l(r,e,t,i){var s=arguments.length,a=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,e,t,i);else for(var u=r.length-1;u>=0;u--)(o=r[u])&&(a=(s<3?o(a):s>3?o(e,t,a):o(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=window,ke=ie.ShadowRoot&&(ie.ShadyCSS===void 0||ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Me=Symbol(),Be=new WeakMap;class Xe{constructor(e,t,i){if(this._$cssResult$=!0,i!==Me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ke&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Be.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Be.set(t,e))}return e}toString(){return this.cssText}}const wt=r=>new Xe(typeof r=="string"?r:r+"",void 0,Me),N=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,s,a)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[a+1],r[0]);return new Xe(t,r,Me)},bt=(r,e)=>{ke?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ie.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,r.appendChild(i)})},Ve=ke?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return wt(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var he;const re=window,Ue=re.trustedTypes,_t=Ue?Ue.emptyScript:"",Oe=re.reactiveElementPolyfillSupport,be={toAttribute(r,e){switch(e){case Boolean:r=r?_t:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},et=(r,e)=>e!==r&&(e==e||r==r),pe={attribute:!0,type:String,converter:be,reflect:!1,hasChanged:et};class H extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const a=this[e];this[t]=s,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pe}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Ve(s))}else e!==void 0&&t.push(Ve(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return bt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=pe){var s;const a=this.constructor._$Ep(e,i);if(a!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:be).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(a):this.setAttribute(a,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,a=s._$Ev.get(e);if(a!==void 0&&this._$El!==a){const o=s.getPropertyOptions(a),u=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:be;this._$El=a,this[a]=u.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||et)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,a)=>this[a]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var a;return(a=s.hostUpdate)===null||a===void 0?void 0:a.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}H.finalized=!0,H.elementProperties=new Map,H.elementStyles=[],H.shadowRootOptions={mode:"open"},Oe==null||Oe({ReactiveElement:H}),((he=re.reactiveElementVersions)!==null&&he!==void 0?he:re.reactiveElementVersions=[]).push("1.4.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fe;const se=window,F=se.trustedTypes,Re=F?F.createPolicy("lit-html",{createHTML:r=>r}):void 0,T=`lit$${(Math.random()+"").slice(9)}$`,Ce="?"+T,$t=`<${Ce}>`,L=document,Y=(r="")=>L.createComment(r),J=r=>r===null||typeof r!="object"&&typeof r!="function",tt=Array.isArray,it=r=>tt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,He=/>/g,U=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),De=/'/g,Fe=/"/g,rt=/^(?:script|style|textarea|title)$/i,st=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),p=st(1),Le=st(2),B=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ze=new WeakMap,at=(r,e,t)=>{var i,s;const a=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=a._$litPart$;if(o===void 0){const u=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;a._$litPart$=o=new j(e.insertBefore(Y(),u),u,void 0,t!=null?t:{})}return o._$AI(r),o},D=L.createTreeWalker(L,129,null,!1),ot=(r,e)=>{const t=r.length-1,i=[];let s,a=e===2?"<svg>":"",o=W;for(let n=0;n<t;n++){const f=r[n];let b,v,w=-1,A=0;for(;A<f.length&&(o.lastIndex=A,v=o.exec(f),v!==null);)A=o.lastIndex,o===W?v[1]==="!--"?o=Ne:v[1]!==void 0?o=He:v[2]!==void 0?(rt.test(v[2])&&(s=RegExp("</"+v[2],"g")),o=U):v[3]!==void 0&&(o=U):o===U?v[0]===">"?(o=s!=null?s:W,w=-1):v[1]===void 0?w=-2:(w=o.lastIndex-v[2].length,b=v[1],o=v[3]===void 0?U:v[3]==='"'?Fe:De):o===Fe||o===De?o=U:o===Ne||o===He?o=W:(o=U,s=void 0);const X=o===U&&r[n+1].startsWith("/>")?" ":"";a+=o===W?f+$t:w>=0?(i.push(b),f.slice(0,w)+"$lit$"+f.slice(w)+T+X):f+T+(w===-2?(i.push(void 0),n):X)}const u=a+(r[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Re!==void 0?Re.createHTML(u):u,i]};class K{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let a=0,o=0;const u=e.length-1,n=this.parts,[f,b]=ot(e,t);if(this.el=K.createElement(f,i),D.currentNode=this.el.content,t===2){const v=this.el.content,w=v.firstChild;w.remove(),v.append(...w.childNodes)}for(;(s=D.nextNode())!==null&&n.length<u;){if(s.nodeType===1){if(s.hasAttributes()){const v=[];for(const w of s.getAttributeNames())if(w.endsWith("$lit$")||w.startsWith(T)){const A=b[o++];if(v.push(w),A!==void 0){const X=s.getAttribute(A.toLowerCase()+"$lit$").split(T),ee=/([.?@])?(.*)/.exec(A);n.push({type:1,index:a,name:ee[2],strings:X,ctor:ee[1]==="."?lt:ee[1]==="?"?dt:ee[1]==="@"?ut:Q})}else n.push({type:6,index:a})}for(const w of v)s.removeAttribute(w)}if(rt.test(s.tagName)){const v=s.textContent.split(T),w=v.length-1;if(w>0){s.textContent=F?F.emptyScript:"";for(let A=0;A<w;A++)s.append(v[A],Y()),D.nextNode(),n.push({type:2,index:++a});s.append(v[w],Y())}}}else if(s.nodeType===8)if(s.data===Ce)n.push({type:2,index:a});else{let v=-1;for(;(v=s.data.indexOf(T,v+1))!==-1;)n.push({type:7,index:a}),v+=T.length-1}a++}}static createElement(e,t){const i=L.createElement("template");return i.innerHTML=e,i}}function R(r,e,t=r,i){var s,a,o,u;if(e===B)return e;let n=i!==void 0?(s=t._$Cl)===null||s===void 0?void 0:s[i]:t._$Cu;const f=J(e)?void 0:e._$litDirective$;return(n==null?void 0:n.constructor)!==f&&((a=n==null?void 0:n._$AO)===null||a===void 0||a.call(n,!1),f===void 0?n=void 0:(n=new f(r),n._$AT(r,t,i)),i!==void 0?((o=(u=t)._$Cl)!==null&&o!==void 0?o:u._$Cl=[])[i]=n:t._$Cu=n),n!==void 0&&(e=R(r,n._$AS(r,e.values),n,i)),e}class nt{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:s}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:L).importNode(i,!0);D.currentNode=a;let o=D.nextNode(),u=0,n=0,f=s[0];for(;f!==void 0;){if(u===f.index){let b;f.type===2?b=new j(o,o.nextSibling,this,e):f.type===1?b=new f.ctor(o,f.name,f.strings,this,e):f.type===6&&(b=new ct(o,this,e)),this.v.push(b),f=s[++n]}u!==(f==null?void 0:f.index)&&(o=D.nextNode(),u++)}return a}m(e){let t=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class j{constructor(e,t,i,s){var a;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$C_=(a=s==null?void 0:s.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$C_}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),J(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==B&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):it(e)?this.O(e):this.$(e)}S(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}$(e){this._$AH!==g&&J(this._$AH)?this._$AA.nextSibling.data=e:this.k(L.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=K.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.m(i);else{const o=new nt(a,this),u=o.p(this.options);o.m(i),this.k(u),this._$AH=o}}_$AC(e){let t=ze.get(e.strings);return t===void 0&&ze.set(e.strings,t=new K(e)),t}O(e){tt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const a of e)s===t.length?t.push(i=new j(this.S(Y()),this.S(Y()),this,this.options)):i=t[s],i._$AI(a),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$C_=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Q{constructor(e,t,i,s,a){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const a=this.strings;let o=!1;if(a===void 0)e=R(this,e,t,0),o=!J(e)||e!==this._$AH&&e!==B,o&&(this._$AH=e);else{const u=e;let n,f;for(e=a[0],n=0;n<a.length-1;n++)f=R(this,u[i+n],t,n),f===B&&(f=this._$AH[n]),o||(o=!J(f)||f!==this._$AH[n]),f===g?e=g:e!==g&&(e+=(f!=null?f:"")+a[n+1]),this._$AH[n]=f}o&&!s&&this.P(e)}P(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class lt extends Q{constructor(){super(...arguments),this.type=3}P(e){this.element[this.name]=e===g?void 0:e}}const St=F?F.emptyScript:"";class dt extends Q{constructor(){super(...arguments),this.type=4}P(e){e&&e!==g?this.element.setAttribute(this.name,St):this.element.removeAttribute(this.name)}}class ut extends Q{constructor(e,t,i,s,a){super(e,t,i,s,a),this.type=5}_$AI(e,t=this){var i;if((e=(i=R(this,e,t,0))!==null&&i!==void 0?i:g)===B)return;const s=this._$AH,a=e===g&&s!==g||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==g&&(s===g||a);a&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class ct{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const xt={A:"$lit$",M:T,C:Ce,L:1,R:ot,D:nt,V:it,I:R,H:j,N:Q,U:dt,B:ut,F:lt,W:ct},je=se.litHtmlPolyfillSupport;je==null||je(K,j),((fe=se.litHtmlVersions)!==null&&fe!==void 0?fe:se.litHtmlVersions=[]).push("2.3.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ve,me;class C extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=at(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return B}}C.finalized=!0,C._$litElement$=!0,(ve=globalThis.litElementHydrateSupport)===null||ve===void 0||ve.call(globalThis,{LitElement:C});const qe=globalThis.litElementPolyfillSupport;qe==null||qe({LitElement:C});((me=globalThis.litElementVersions)!==null&&me!==void 0?me:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=r=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(r,e):((t,i)=>{const{kind:s,elements:a}=i;return{kind:s,elements:a,finisher(o){customElements.define(t,o)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function m(r){return(e,t)=>t!==void 0?((i,s,a)=>{s.constructor.createProperty(a,i)})(r,e,t):At(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=({finisher:r,descriptor:e})=>(t,i)=>{var s;if(i===void 0){const a=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return r!=null&&(o.finisher=function(u){r(u,a)}),o}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),r==null||r(a,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(r,e){return kt({descriptor:t=>{const i={get(){var s,a;return(a=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(r))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var a,o;return this[s]===void 0&&(this[s]=(o=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(r))!==null&&o!==void 0?o:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ge;((ge=window.HTMLSlotElement)===null||ge===void 0?void 0:ge.prototype.assignedElements)!=null;function d(r){let e,t,i;return typeof r=="object"?(e=r.hashFunction,t=r.expiring,i=r.tags):e=r,(s,a,o)=>{if(o.value!=null)o.value=We(o.value,e,t,i);else if(o.get!=null)o.get=We(o.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const ye=new Map;function We(r,e,t=0,i){const s=Symbol("__memoized_map__");return function(...a){let o;this.hasOwnProperty(s)||Object.defineProperty(this,s,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let u=this[s];if(Array.isArray(i))for(const n of i)ye.has(n)?ye.get(n).push(u):ye.set(n,[u]);if(e||a.length>0||t>0){let n;e===!0?n=a.map(v=>v.toString()).join("!"):e?n=e.apply(this,a):n=a[0];const f=`${n}__timestamp`;let b=!1;if(t>0)if(!u.has(f))b=!0;else{let v=u.get(f);b=Date.now()-v>t}u.has(n)&&!b?o=u.get(n):(o=r.apply(this,a),u.set(n,o),t>0&&u.set(f,Date.now()))}else{const n=this;u.has(n)?o=u.get(n):(o=r.apply(this,a),u.set(n,o))}return o}}class _e{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}_e.shared=new _e;class I{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}I.shared=new I;class ae{parseValue(e){return I.shared.parseValue(e)}}ae.shared=new ae;class Z{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let s=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(s=new Date(s.getTime()+s.getTimezoneOffset()*1e3*60)),s}}Z.shared=new Z;class oe{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((s,a)=>{const o=parseFloat(s);if(Number.isNaN(o))return t=!0,0;const u=e.length-1-a,n=60**u;return o*Math.floor(n)}).reduce((s,a)=>s+a,0);return t?void 0:i}}oe.shared=new oe;class $e{parseValue(e){if(typeof e=="string")return e}}$e.shared=new $e;class Mt{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const s of this.separators)if(i=t.split(s),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(a=>a.trim()).map(a=>this.parser.parseValue(a)),s=[];return i.forEach(a=>{a!==void 0&&s.push(a)}),s}}class Se{parseValue(e){if(typeof e=="string")return e}}Se.shared=new Se;class ne{parseValue(e){return String(e)}}ne.shared=new ne;class k{constructor(e,t){this.parser=e,this.rawValue=t}get values(){return this.parseRawValue()}get value(){return this.values[0]}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const s=this.parser.parseValue(i);Array.isArray(s)?t.push(...s):s!==void 0&&t.push(s)}),t}}l([d()],k.prototype,"values",null);l([d()],k.prototype,"value",null);class Ct extends k{constructor(e){super(_e.shared,e)}}class E extends k{constructor(e){super(Z.shared,e)}}class we extends k{constructor(e){super(oe.shared,e)}}class S extends k{constructor(e){super(I.shared,e)}}class y extends k{constructor(e){super(ne.shared,e)}}class Et extends k{constructor(e){super(Se.shared,e)}}class Ye extends k{constructor(e){super(ae.shared,e)}}class Tt extends k{constructor(e){super($e.shared,e)}}class Pt extends k{constructor(e,t){super(t,e)}}class It extends Pt{constructor(e){const t=new Mt(ne.shared);super(e,t)}}class c{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.identifier}get addeddate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.addeddate?new E(this.rawMetadata.addeddate):void 0}get audio_codec(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_codec?new y(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_sample_rate?new S(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.avg_rating?new S(this.rawMetadata.avg_rating):void 0}get collection(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection?new y(this.rawMetadata.collection):void 0}get collections_raw(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collections_raw?new y(this.rawMetadata.collections_raw):void 0}get collection_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection_size?new Ye(this.rawMetadata.collection_size):void 0}get contributor(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.contributor?new y(this.rawMetadata.contributor):void 0}get coverage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.coverage?new y(this.rawMetadata.coverage):void 0}get creator(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.creator?new y(this.rawMetadata.creator):void 0}get date(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.date?new E(this.rawMetadata.date):void 0}get description(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.description?new y(this.rawMetadata.description):void 0}get downloads(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.downloads?new S(this.rawMetadata.downloads):void 0}get duration(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.duration?new we(this.rawMetadata.duration):void 0}get"external-identifier"(){var e,t;return!((e=this.rawMetadata)===null||e===void 0)&&e["external-identifier"]?new y((t=this.rawMetadata)===null||t===void 0?void 0:t["external-identifier"]):void 0}get files_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.files_count?new S(this.rawMetadata.files_count):void 0}get indexdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.indexdate?new E(this.rawMetadata.indexdate):void 0}get isbn(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.isbn?new y(this.rawMetadata.isbn):void 0}get issue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.issue?new y(this.rawMetadata.issue):void 0}get item_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_count?new S(this.rawMetadata.item_count):void 0}get item_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_size?new Ye(this.rawMetadata.item_size):void 0}get language(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.language?new y(this.rawMetadata.language):void 0}get length(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.length?new we(this.rawMetadata.length):void 0}get lineage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.lineage?new y(this.rawMetadata.lineage):void 0}get month(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.month?new S(this.rawMetadata.month):void 0}get mediatype(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.mediatype?new Tt(this.rawMetadata.mediatype):void 0}get noindex(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.noindex?new Ct(this.rawMetadata.noindex):void 0}get notes(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.notes?new y(this.rawMetadata.notes):void 0}get num_favorites(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_favorites?new S(this.rawMetadata.num_favorites):void 0}get num_reviews(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_reviews?new S(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_edition?new y(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_work?new y(this.rawMetadata.openlibrary_work):void 0}get page_progression(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.page_progression?new Et(this.rawMetadata.page_progression):void 0}get partner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.partner?new y(this.rawMetadata.partner):void 0}get ppi(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.ppi?new S(this.rawMetadata.ppi):void 0}get publicdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publicdate?new E(this.rawMetadata.publicdate):void 0}get publisher(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publisher?new y(this.rawMetadata.publisher):void 0}get reviewdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.reviewdate?new E(this.rawMetadata.reviewdate):void 0}get runtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.runtime?new we(this.rawMetadata.runtime):void 0}get scanner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.scanner?new y(this.rawMetadata.scanner):void 0}get source(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.source?new y(this.rawMetadata.source):void 0}get start_localtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_localtime?new E(this.rawMetadata.start_localtime):void 0}get start_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_time?new E(this.rawMetadata.start_time):void 0}get stop_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.stop_time?new E(this.rawMetadata.stop_time):void 0}get subject(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.subject?new It(this.rawMetadata.subject):void 0}get taper(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.taper?new y(this.rawMetadata.taper):void 0}get title(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.title?new y(this.rawMetadata.title):void 0}get transferer(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.transferer?new y(this.rawMetadata.transferer):void 0}get track(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.track?new S(this.rawMetadata.track):void 0}get type(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.type?new y(this.rawMetadata.type):void 0}get uploader(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.uploader?new y(this.rawMetadata.uploader):void 0}get utc_offset(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.utc_offset?new S(this.rawMetadata.utc_offset):void 0}get venue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.venue?new y(this.rawMetadata.venue):void 0}get volume(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.volume?new y(this.rawMetadata.volume):void 0}get week(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.week?new S(this.rawMetadata.week):void 0}get year(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.year?new E(this.rawMetadata.year):void 0}}l([d()],c.prototype,"addeddate",null);l([d()],c.prototype,"audio_codec",null);l([d()],c.prototype,"audio_sample_rate",null);l([d()],c.prototype,"avg_rating",null);l([d()],c.prototype,"collection",null);l([d()],c.prototype,"collections_raw",null);l([d()],c.prototype,"collection_size",null);l([d()],c.prototype,"contributor",null);l([d()],c.prototype,"coverage",null);l([d()],c.prototype,"creator",null);l([d()],c.prototype,"date",null);l([d()],c.prototype,"description",null);l([d()],c.prototype,"downloads",null);l([d()],c.prototype,"duration",null);l([d()],c.prototype,"external-identifier",null);l([d()],c.prototype,"files_count",null);l([d()],c.prototype,"indexdate",null);l([d()],c.prototype,"isbn",null);l([d()],c.prototype,"issue",null);l([d()],c.prototype,"item_count",null);l([d()],c.prototype,"item_size",null);l([d()],c.prototype,"language",null);l([d()],c.prototype,"length",null);l([d()],c.prototype,"lineage",null);l([d()],c.prototype,"month",null);l([d()],c.prototype,"mediatype",null);l([d()],c.prototype,"noindex",null);l([d()],c.prototype,"notes",null);l([d()],c.prototype,"num_favorites",null);l([d()],c.prototype,"num_reviews",null);l([d()],c.prototype,"openlibrary_edition",null);l([d()],c.prototype,"openlibrary_work",null);l([d()],c.prototype,"page_progression",null);l([d()],c.prototype,"partner",null);l([d()],c.prototype,"ppi",null);l([d()],c.prototype,"publicdate",null);l([d()],c.prototype,"publisher",null);l([d()],c.prototype,"reviewdate",null);l([d()],c.prototype,"runtime",null);l([d()],c.prototype,"scanner",null);l([d()],c.prototype,"source",null);l([d()],c.prototype,"start_localtime",null);l([d()],c.prototype,"start_time",null);l([d()],c.prototype,"stop_time",null);l([d()],c.prototype,"subject",null);l([d()],c.prototype,"taper",null);l([d()],c.prototype,"title",null);l([d()],c.prototype,"transferer",null);l([d()],c.prototype,"track",null);l([d()],c.prototype,"type",null);l([d()],c.prototype,"uploader",null);l([d()],c.prototype,"utc_offset",null);l([d()],c.prototype,"venue",null);l([d()],c.prototype,"volume",null);l([d()],c.prototype,"week",null);l([d()],c.prototype,"year",null);class V{constructor(e){this.rawValue=e}get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size?ae.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length?oe.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height?I.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width?I.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track?I.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}}l([d()],V.prototype,"size",null);l([d()],V.prototype,"length",null);l([d()],V.prototype,"height",null);l([d()],V.prototype,"width",null);l([d()],V.prototype,"track",null);class ue{constructor(e){this.rawValue=e}get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate?Z.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate?Z.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars?I.shared.parseValue(this.rawValue.stars):void 0}}l([d()],ue.prototype,"reviewdate",null);l([d()],ue.prototype,"createdate",null);l([d()],ue.prototype,"stars",null);class ht{constructor(e){var t,i;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(s=>new V(s)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new c(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(i=e.reviews)===null||i===void 0?void 0:i.map(s=>new ue(s))}}class Bt{constructor(e){this.numFound=e.numFound,this.start=e.start,this.docs=e.docs.map(t=>new c(t)),this.aggregations=e.aggregations}}class Vt{constructor(e){this.rawResponse=e,this.responseHeader=e.responseHeader,this.response=new Bt(e.response)}}var O;(function(r){r.networkError="SearchService.NetworkError",r.itemNotFound="SearchService.ItemNotFound",r.decodingError="SearchService.DecodingError",r.searchEngineError="SearchService.SearchEngineError"})(O||(O={}));class xe extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class Ut{static aggregateSearchParamsAsString(e){if(e.advancedParams){const t=e.advancedParams.map(s=>({terms:s}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field} ${e.direction}`}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("q",e.query),t.append("output","json"),e.rows&&t.append("rows",String(e.rows)),e.page&&t.append("page",String(e.page)),e.fields&&t.append("fl",e.fields.join(",")),e.sort){const s=e.sort.map(a=>this.sortParamsAsString(a));t.append("sort",s.join(","))}const i=e.aggregations;if(i){const s=this.aggregateSearchParamsAsString(i);s&&t.append("user_aggs",s)}return t}}class Ot{constructor(e){var t;if(this.baseUrl=(t=e==null?void 0:e.baseUrl)!==null&&t!==void 0?t:"archive.org",(e==null?void 0:e.includeCredentials)!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,(e==null?void 0:e.scope)!==void 0)this.requestScope=e.scope;else{const s=new URL(window.location.href).searchParams.get("scope");s&&(this.requestScope=s)}}async performSearch(e){const i=Ut.generateURLSearchParams(e).toString(),s=`https://${this.baseUrl}/advancedsearch.php?${i}`;return this.fetchUrl(s)}async fetchMetadata(e,t){const i=t?`/${t}`:"",s=`https://${this.baseUrl}/metadata/${e}${i}`;return this.fetchUrl(s,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var i;const s=new URL(e);this.requestScope&&s.searchParams.set("scope",this.requestScope);let a;try{const o=(i=t==null?void 0:t.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};a=await fetch(s.href,o)}catch(o){const u=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(O.networkError,u)}try{const o=await a.json(),u=o.error;if(u){const n=o.forensics;return this.getErrorResult(O.searchEngineError,u,n)}else return{success:o}}catch(o){const u=o instanceof Error?o.message:typeof o=="string"?o:"Unknown error";return this.getErrorResult(O.decodingError,u)}}getErrorResult(e,t,i){return{error:new xe(e,t,i)}}}class Je{constructor(e){this.searchBackend=e}async search(e){const t=await this.searchBackend.performSearch(e);return t.error?t:{success:new Vt(t.success)}}async fetchMetadata(e){var t;const i=await this.searchBackend.fetchMetadata(e);return i.error?i:((t=i.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new xe(O.itemNotFound)}:{success:new ht(i.success)}}async fetchMetadataValue(e,t){var i;const s=await this.searchBackend.fetchMetadata(e,t);return s.error?s:((i=s.success)===null||i===void 0?void 0:i.result)===void 0?{error:new xe(O.itemNotFound)}:{success:s.success.result}}}Je.default=new Je(new Ot);let Ae=class extends C{render(){return p`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};Ae.styles=N`
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
  `;Ae=l([q("ia-icon-label")],Ae);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ee=r=>(...e)=>({_$litDirective$:r,values:e});class Te{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=Ee(class extends Te{constructor(r){var e;if(super(r),r.type!==pt.ATTRIBUTE||r.name!=="style"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{const i=r[t];return i==null?e:e+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[e]){const{style:t}=r.element;if(this.vt===void 0){this.vt=new Set;for(const i in e)this.vt.add(i);return this.render(e)}this.vt.forEach(i=>{e[i]==null&&(this.vt.delete(i),i.includes("-")?t.removeProperty(i):t[i]="")});for(const i in e){const s=e[i];s!=null&&(this.vt.add(i),i.includes("-")?t.setProperty(i,s):t[i]=s)}return B}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=Ee(class extends Te{constructor(r){var e;if(super(r),r.type!==pt.ATTRIBUTE||r.name!=="class"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var t,i;if(this.nt===void 0){this.nt=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!(!((t=this.st)===null||t===void 0)&&t.has(a))&&this.nt.add(a);return this.render(e)}const s=r.element.classList;this.nt.forEach(a=>{a in e||(s.remove(a),this.nt.delete(a))});for(const a in e){const o=!!e[a];o===this.nt.has(a)||((i=this.st)===null||i===void 0?void 0:i.has(a))||(o?(s.add(a),this.nt.add(a)):(s.remove(a),this.nt.delete(a)))}return B}});var h;(function(r){r.ia="ia",r.beta="beta",r.youtube="youtube",r.spotify="spotify",r.webamp="webamp"})(h||(h={}));var _;(function(r){r.iaSamples="Samples",r.iaPlayer="Player",r.beta="Beta",r.spotify="Spotify",r.webamp="Webamp",r.youtube="YouTube"})(_||(_={}));const M={ia:p`<img
    class="ia"
    src="https://archive.org/images/music-theater/internet-archive.svg"
    alt="Internet Archive logo"
    style="height: 20px; width: 20px;"
  />`,beta:p`<img
    class="ia-beta"
    src="https://archive.org/images/music-theater/streaming.svg"
    alt="Internet Archive beta player logo"
    style="height: 20px; width: 20px;"
  />`,spotify:p`<img
    class="spotify"
    src="https://archive.org/images/music-theater/spotify.svg"
    alt="Spotify logo"
    style="display: block;"
  />`,webamp:p`<img
    class="webamp"
    src="https://archive.org/images/music-theater/webamp.svg"
    alt="webamp logo"
    style="height: 20px;"
  />`,youtube:p`<img
    class="youtube"
    src="https://archive.org/images/music-theater/youtube.svg"
    alt="youtube logo"
    style="height: 20px; width: 20px; display: block;"
  />`},ce=(r=_.iaPlayer,e)=>{const i=Pe({filter:e?"invert(1)":"invert(0)",height:"20px",width:"20px"}),s=Ie({selected:e,"invert-icon-at-hover-selected":e});return p`
    <ia-icon-label class=${s}>
      <span slot="icon" style=${i}>${M.ia}</span>
      <span>${r}</span>
    </ia-icon-label>
  `},ft=r=>{const t=Pe({filter:r?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=Ie({selected:r,"invert-icon-at-hover-selected":r});return p`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${t}>${M.beta}</span>
      <span>${_.beta}</span>
    </ia-icon-label>
  `},vt=r=>p`
  <ia-icon-label class="${r?"selected":""}">
    <span slot="icon">${M.spotify}</span>
    <span>${_.spotify}</span>
  </ia-icon-label>
`,mt=r=>{const t=Pe({filter:r?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=Ie({selected:r,"invert-icon-at-hover-selected":r});return p`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${t}>${M.webamp}</span>
      <span>Webamp</span>
    </ia-icon-label>
  `},gt=r=>p`
  <ia-icon-label class="${r?"selected":""}">
    <span slot="icon">${M.youtube}</span>
    <span>${_.youtube}</span>
  </ia-icon-label>
`,Rt=({samples:r,onClick:e,href:t,selected:i})=>{const s=r?_.iaSamples:_.iaPlayer;return p`
    <a href=${t} @click=${()=>e()}>${ce(s,i)}</button>
  `},Nt=({samples:r,onClick:e,selected:t})=>{const i=r?_.iaSamples:_.iaPlayer;return p`
    <button @click=${s=>e(s)} class="ia">
      ${ce(i,t)}
    </button>
  `},Ht=({onClick:r,selected:e})=>p`<button
  @click=${t=>r(t)}
  class="ia-beta"
>
  ${ft(e)}
</button>`,Dt=({onClick:r,selected:e})=>p`<button
  @click=${t=>r(t)}
  class="sp"
>
  ${vt(e)}
</button>`,Ft=({onClick:r,href:e,selected:t})=>{const i=`${e}?webamp=default`;return p`
    <a href=${i} @click=${s=>r(s)} class="wa">${mt(t)}</button>
  `},Lt=({onClick:r,selected:e})=>p`<button
  @click=${t=>r(t)}
  class="yt"
>
  ${gt(e)}
</button>`,zt=({samples:r,onClick:e,href:t,selectedOption:i})=>({url:t,selectedHandler:a=>{e(a)},label:ce(r?_.iaSamples:_.iaPlayer,i===h.ia),id:h.ia}),jt=({samples:r,onClick:e,selectedOption:t})=>({selectedHandler:s=>{e(s)},label:ce(r?_.iaSamples:_.iaPlayer,t===h.ia),id:h.ia}),qt=({onClick:r,selectedOption:e})=>({selectedHandler:i=>{r(i)},label:ft(e===h.beta),id:h.beta}),Wt=({onClick:r,selectedOption:e})=>({selectedHandler:i=>{r(i)},label:vt(e===h.spotify),id:h.spotify}),Yt=({href:r,onClick:e,selectedOption:t})=>{const i=s=>{e(s)};return{url:`${r}?webamp=default`,selectedHandler:i,label:mt(t===h.webamp),id:h.webamp}},Jt=({onClick:r,selectedOption:e})=>({selectedHandler:i=>{r(i)},label:gt(e===h.youtube),id:h.youtube}),Kt=r=>{const{spotify:e,beta:t,youtube:i,selectedOption:s}=r;return[s===h.webamp?zt(r):jt(r),t?qt(r):null,e?Wt(r):null,i?Jt(r):null,Yt(r)].filter(Boolean)};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:Zt}=xt,te=(r,e)=>e===void 0?(r==null?void 0:r._$litType$)!==void 0:(r==null?void 0:r._$litType$)===e,Ke=()=>document.createComment(""),Ze=(r,e,t)=>{var i;const s=r._$AA.parentNode,a=e===void 0?r._$AB:e._$AA;if(t===void 0){const o=s.insertBefore(Ke(),a),u=s.insertBefore(Ke(),a);t=new Zt(o,u,r,r.options)}else{const o=t._$AB.nextSibling,u=t._$AM,n=u!==r;if(n){let f;(i=t._$AQ)===null||i===void 0||i.call(t,r),t._$AM=r,t._$AP!==void 0&&(f=r._$AU)!==u._$AU&&t._$AP(f)}if(o!==a||n){let f=t._$AA;for(;f!==o;){const b=f.nextSibling;s.insertBefore(f,a),f=b}}}return t},Gt={},Ge=(r,e=Gt)=>r._$AH=e,Qe=r=>r._$AH,Qt=r=>{r._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt=Ee(class extends Te{constructor(r){super(r),this.et=new WeakMap}render(r){return[r]}update(r,[e]){if(te(this.it)&&(!te(e)||this.it.strings!==e.strings)){const t=Qe(r).pop();let i=this.et.get(this.it.strings);if(i===void 0){const s=document.createDocumentFragment();i=at(g,s),i.setConnected(!1),this.et.set(this.it.strings,i)}Ge(i,[t]),Ze(i,void 0,t)}if(te(e)){if(!te(this.it)||this.it.strings!==e.strings){const t=this.et.get(e.strings);if(t!==void 0){const i=Qe(t).pop();Qt(r),Ze(r,void 0,i),Ge(r,[i])}}this.it=e}else this.it=void 0;return this.render(e)}});let P=class extends C{constructor(){super(...arguments),this.open=!1,this.displayCaret=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{}}renderOption(e){const{label:t,url:i=void 0,id:s}=e;let a;const o=this.selectedOption===s?"selected":"";return i?a=p`<a
        href=${i}
        @click=${()=>this.optionClicked(e)}
        >${t}</a
      >`:a=p`<button
        @click=${()=>this.optionClicked(e)}
      >
        ${t}
      </button>`,p`<li class=${o}>${a}</li>`}optionClicked(e){this.selectedOption=e.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:e}})),e.selectedHandler&&(e==null||e.selectedHandler(e))}toggleOptions(){this.open=!this.open}get caret(){return this.open?this.caretUp:this.caretDown}get dropdownState(){return this.open?"open":"closed"}get caretUp(){return Le`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
      fill=""></path>
  </svg>`}get caretDown(){return Le`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
    fill=""></path>
  </svg>`}get availableOptions(){return this.options.filter(e=>this.selectedOption!==e.id)}render(){return p`
      <div class="ia-dropdown-group">
        <button @click=${this.toggleOptions} class="click-main">
          <span class="cta sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.displayCaret?p`<span class="caret">${this.caret}</span>`:g}
        </button>

        <ul class="dropdown-main ${this.dropdownState}">
          ${this.availableOptions.map(e=>this.renderOption(e))}
        </ul>
      </div>
    `}};P.styles=N`
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
  `;l([m({type:Boolean,attribute:!0})],P.prototype,"open",void 0);l([m({type:Boolean,attribute:!0})],P.prototype,"displayCaret",void 0);l([m({type:String,attribute:!0})],P.prototype,"selectedOption",void 0);l([m({type:Array})],P.prototype,"options",void 0);l([m({type:String})],P.prototype,"optionGroup",void 0);l([m({type:Function})],P.prototype,"optionSelected",void 0);P=l([q("ia-dropdown")],P);const ei=N`
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
`;var le;(function(r){r.postInit="postInit",r.channelChange="channelChange"})(le||(le={}));let x=class extends C{constructor(){super(...arguments),this.youtube=!1,this.spotify=!1,this.beta=!1,this.webamp=!0,this.samples=!1,this.selected=h.ia,this.displayStyle="radio",this.url=""}firstUpdated(){this.dispatchEvent(new CustomEvent(le.postInit,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}emitChannelChanged(){this.dispatchEvent(new CustomEvent(le.channelChange,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}iaClicked(){this.selected!==h.ia&&(this.selected=h.ia,this.emitChannelChanged())}betaClicked(){this.selected!==h.beta&&(this.selected=h.beta,this.emitChannelChanged())}spotifyClicked(){this.selected!==h.spotify&&(this.selected=h.spotify,this.emitChannelChanged())}webampClicked(){this.selected!==h.webamp&&(this.selected=h.webamp,this.emitChannelChanged())}youtubeClicked(){this.selected!==h.youtube&&(this.selected=h.youtube,this.emitChannelChanged())}dropdownOptionSelected(e){this.selected=e.id,this.emitChannelChanged(),this.iaDropdown.open=!1}get iaLinkSelector(){const e=this.selected===h.ia?"selected":"";return p`
      <li class=${e}>
        ${Rt({samples:this.samples,selected:this.selected===h.ia,onClick:()=>this.iaClicked(),href:this.url})}
      </li>
    `}get iaButtonSelector(){const e=this.selected===h.ia?"selected":"";return p`
      <li class=${e}>
        ${Nt({samples:this.samples,selected:this.selected===h.ia,onClick:()=>this.iaClicked()})}
      </li>
    `}get iaBetaSelector(){const e=this.selected===h.beta?"selected":"";return p`
      <li class=${e}>
        ${Ht({selected:this.selected===h.beta,onClick:()=>this.betaClicked()})}
      </li>
    `}get spotifySelector(){const e=this.selected===h.spotify?"selected":"";return p`
      <li class=${e}>
        ${Dt({selected:this.selected===h.spotify,onClick:()=>this.spotifyClicked()})}
      </li>
    `}get webampSelector(){const e=this.selected===h.webamp?"selected":"";return p`
      <li class=${e}>
        ${Ft({href:this.url||window.location.href,selected:this.selected===h.webamp,onClick:()=>this.webampClicked()})}
      </li>
    `}get youtubeSelector(){const e=this.selected===h.youtube?"selected":"";return p`
      <li class=${e}>
        ${Lt({selected:this.selected===h.youtube,onClick:()=>this.youtubeClicked()})}
      </li>
    `}get properIaSelector(){return this.selected===h.webamp?this.iaLinkSelector:this.iaButtonSelector}toggleDisplayStyle(){const e=this.displayStyle==="dropdown"?"radio":"dropdown";this.displayStyle=e}shouldShowChannelType(e){const t=this.selected===e;return this.displayStyle==="radio"?!0:!(this.displayStyle==="dropdown"&&t)}get dropdownOptions(){const{samples:e,beta:t,spotify:i,webamp:s,youtube:a,url:o,selected:u}=this;return Kt({selectedOption:u,samples:!!e,beta:t,spotify:i,webamp:s,youtube:a,href:o,onClick:this.dropdownOptionSelected.bind(this)})}get currentlySelectedIcon(){switch(this.selected){case h.beta:return M.beta;case h.spotify:return M.spotify;case h.youtube:return M.youtube;case h.webamp:return M.webamp;default:return M.ia}}get dropdown(){return p`
      <ia-dropdown
        displayCaret
        .options=${this.dropdownOptions}
        .selectedOption=${this.selected}
      >
        <span slot="dropdown-label">${this.currentlySelectedIcon}</span>
      </ia-dropdown>
    `}get radioView(){return p`
      <div id="selector-title"><h4>Play from:</h4></div>
      <div>
        <ul>
          ${this.properIaSelector} ${this.beta?this.iaBetaSelector:g}
          ${this.youtube?this.youtubeSelector:g}
          ${this.spotify?this.spotifySelector:g}
          ${this.webamp?this.webampSelector:g}
        </ul>
      </div>
    `}render(){return p`
      <section id=${this.displayStyle} class=${this.displayStyle}>
        ${Xt(this.displayStyle==="radio"?this.radioView:this.dropdown)}
      </section>
    `}};x.styles=[N`
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
    `,ei];l([m({attribute:!0,type:Boolean,reflect:!0})],x.prototype,"youtube",void 0);l([m({attribute:!0,type:Boolean,reflect:!0})],x.prototype,"spotify",void 0);l([m({attribute:!0,type:Boolean,reflect:!0})],x.prototype,"beta",void 0);l([m({attribute:!0,type:Boolean,reflect:!0})],x.prototype,"webamp",void 0);l([m({attribute:!0,type:Boolean,reflect:!0})],x.prototype,"samples",void 0);l([m({type:String,reflect:!0})],x.prototype,"selected",void 0);l([m({type:String,reflect:!0})],x.prototype,"displayStyle",void 0);l([m({type:String})],x.prototype,"url",void 0);l([de("ia-dropdown")],x.prototype,"iaDropdown",void 0);x=l([q("channel-selector")],x);let G=class extends C{constructor(){super(...arguments),this.iaSpotifyUrn="",this.display=!1}get spotifyUrl(){return!this.iaSpotifyUrn||!this.iaSpotifyUrn.match(/urn:spotify:/g)?"":`https://open.spotify.com/embed/${this.iaSpotifyUrn.replace(/urn:spotify:/g,"").replace(/:/g,"/")}`}render(){const e=this.spotifyUrl;return e?p`
      <iframe
        id="embed-iframe"
        src="${e}"
        width="100%"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="Spotify Player"
      ></iframe>
    `:p`<h3>Invalid Spotify URI: ${this.iaSpotifyUrn}</h3>`}static get styles(){return[N`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}};l([m({type:String,reflect:!0})],G.prototype,"iaSpotifyUrn",void 0);l([m({type:Boolean,reflect:!0})],G.prototype,"display",void 0);l([de("iframe")],G.prototype,"iframe",void 0);G=l([q("spotify-player")],G);let z=class extends C{constructor(){super(...arguments),this.iaYouTubeUrn="",this.display=!1,this.baseHost="https://archive.org"}get youTubeUrl(){if(!this.iaYouTubeUrn||!this.iaYouTubeUrn.match(/urn:youtube:/g))return"";const t=this.iaYouTubeUrn.replace(/urn:youtube:/g,"").replace(/:/g,"/"),i=`origin=${this.baseHost}&widgetid=1&autoplay=1&rel=0`;return`https://www.youtube.com/embed/${t}?${i}`}render(){const e=this.youTubeUrl;return e?p`
      <iframe
        id="embed-iframe"
        src="${e}"
        width="100%"
        height="180"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="YouTube Player"
      ></iframe>
    `:p`<h3>Invalid YouTube ID: ${this.iaYouTubeUrn}</h3>`}static get styles(){return[N`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}};l([m({type:String,reflect:!0})],z.prototype,"iaYouTubeUrn",void 0);l([m({type:Boolean,reflect:!0})],z.prototype,"display",void 0);l([m({type:String})],z.prototype,"baseHost",void 0);l([de("iframe")],z.prototype,"iframe",void 0);z=l([q("youtube-player")],z);class ti extends V{constructor(e,t="archive.org"){super(e),this.isSegmented=!1,this.private=!1,this.details=null,this.orig="",this.image="",this.duration=0,this.sources=[],this._playlistTrack=null,this.details=e.details,this.baseHost=t}get url(){return`https://${this.baseHost}/${this.name}`}get title(){var e;return((e=this._playlistTrack)===null||e===void 0?void 0:e.title)||(this===null||this===void 0?void 0:this.title)||this.name}get youtubeId(){return this.externalIds.find(e=>e.match(/youtube/gi))||""}get spotifyId(){return this.externalIds.find(e=>e.match(/spotify/gi))||""}get externalIds(){return Array.isArray(this.rawValue["external-identifier"])?this.rawValue["external-identifier"]:[this.rawValue["external-identifier"]||""]}setPlaylistInfo(e){this._playlistTrack=e,this.orig=e.orig,this.image=e.image,this.duration=e.duration,this.sources=e.sources}}class ii{constructor(e,t){this.tracks=[],this.images=[],this.linerNotes=[],this.tracksAreSegmented=!1,this.baseHost="archive.org",this.relatedFiles=[],this.rawPlaylistTracks=[],this.item=e,this.rawPlaylistTracks=t,this.tracks=t,this.filterFiles(this.item.files)}get title(){var e,t;return((t=(e=this.item.metadata)===null||e===void 0?void 0:e.title)===null||t===void 0?void 0:t.values.join("; "))||""}get youtubeId(){return this.externalIds.find(e=>e.match(/youtube/gi))||""}get spotifyId(){return this.externalIds.find(e=>e.match(/spotify/gi))||""}get albumImage(){const e=this.images.find(s=>s.format==="Item Image"),t=`https://${this.baseHost}/download/${this.item.metadata.identifier}/`;if(e)return`${t}${e.name}`;const i=this.images.find(s=>{const a=["Item Image","JPEG Thumb"];return s.source==="original"&&!a.includes(s.format)});return i?`${t}${i.name}`:`${t}__ia_thumb.jpg`}get externalIds(){var e;if(!this.item.metadata.rawMetadata)return[""];const t=this.item.metadata["external-identifier"];return!((e=t==null?void 0:t.values)===null||e===void 0)&&e.length?t.values:[(t==null?void 0:t.value)||""]}get youtubeTracks(){const e=this.tracks.filter(t=>t.youtubeId);return this.albumTrackOption("yt")!==void 0&&e.unshift(this.albumTrackOption("yt")),e}get spotifyTracks(){const e=this.tracks.filter(t=>t.spotifyId);return this.albumTrackOption("sp")!==void 0&&e.unshift(this.albumTrackOption("sp")),e}albumTrackOption(e){const t={title:"Full Album",orig:"",image:"",duration:"-- : --",track:"0",sources:[]};if(e==="yt"&&this.youtubeId)return{...t,youtubeId:this.youtubeId};if(e==="sp"&&this.spotifyId)return{...t,spotifyId:this.spotifyId}}isAlbumRelatedFile(e){var t,i;return!!(!((t=e.name.match(/.(ffp|md5)$/g))===null||t===void 0)&&t.length)&&!!(!((i=e.original)===null||i===void 0)&&i.length)&&e.source==="derivative"}isValidAudioFile(e=""){var t;return!!(!((t=e.match(/(mp3|ogg|flac|m4a|wma|aiff|aac|aa|ra|ram|shn|wav|wave|opus)$/gi))===null||t===void 0)&&t.length)}isValidImageFile(e=""){var t;return!!(!((t=e.match(/.(png|jpg|jpeg)$/gi))===null||t===void 0)&&t.length)}isValidImageFileFormat(e=""){var t;return!!(!((t=e.match(/(png|jpg|jpeg)/gi))===null||t===void 0)&&t.length)}isValidSegmentFile(e=""){var t;return!!(!((t=e.match(/_segments.(json|xml)$/gi))===null||t===void 0)&&t.length)}isSpectrogram(e=""){var t;return!!(!((t=e.match(/spectrogram/gi))===null||t===void 0)&&t.length)}isSampleMP3(e=""){var t;return!!(!((t=e.match(/_sample\.mp3$/gi))===null||t===void 0)&&t.length)}hasScannedLinerNotes(e=""){var t;return!!(!((t=e.match(/_jp2.(zip|tar)/gi))===null||t===void 0)&&t.length)}get creator(){var e,t,i,s,a,o;return!((t=(e=this.item.metadata)===null||e===void 0?void 0:e.creator)===null||t===void 0)&&t.values?(s=(i=this.item.metadata)===null||i===void 0?void 0:i.creator)===null||s===void 0?void 0:s.values.join("; "):!((a=this.item.metadata.rawMetadata)===null||a===void 0)&&a.artist?(o=this.item.metadata.rawMetadata)===null||o===void 0?void 0:o.artist:""}tracksEntry(e){return this.tracks.find(t=>e.original?t.orig===e.original:t.orig===e.name)}filterFiles(e){const t=[],i={};e.forEach(a=>{var o,u;const n=a.rawValue,f=this.isValidAudioFile(n.name);if(this.isAlbumRelatedFile(n)){this.relatedFiles.push(n);return}if(this.isValidSegmentFile(n.name)&&(this.tracksAreSegmented=!0,this.relatedFiles.push(n),n.original&&this.isValidAudioFile(n.name)&&!i[n.original]&&(i[n.original]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0})),n.source==="original"&&!i[n.name]&&f&&(i[n.name]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0}),n.original&&this.isValidAudioFile(n.original)&&!i[n.original]&&(i[n.original]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0}),this.hasScannedLinerNotes(n.name)&&this.linerNotes.push(n),this.isValidImageFile(n.name)){n.original&&this.isValidAudioFile(n.original)?i[n.original].spectrogram=n:t.push(n);return}if(n.original&&this.isValidAudioFile(n.original)&&!this.isValidAudioFile(n.name)){i[n.original].related.push(n);return}if(!this.isValidAudioFile(n.name)||!this.isValidImageFile(n.name)&&!this.isValidAudioFile(n.name))return;const b=this.isValidSegmentFile(n.original)&&this.isValidAudioFile(n.name);if(n.source==="original"&&this.isValidAudioFile(n.name)||b){i[n.name]||(i[n.name]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0}),i[n.name].primary=n;return}if(((o=n.name.match(/_sample\.mp3$/))===null||o===void 0?void 0:o.length)&&n.original){i[n.original].sampleMp3=new V(n);return}this.isValidAudioFile(n.name)&&!this.isSampleMP3(n.name)&&this.isValidAudioFile(n.original)&&n.original&&(!((u=n.name.match(/.mp3$/))===null||u===void 0)&&u.length?i[n.original].fullMp3=n:i[n.original].related.push(n))}),this.images=t;const s=[];this.tracks.forEach((a,o)=>{const u=i[a.orig].primary,n=new ti({...a,...u,details:i[a.orig]},"archive.org");n.setPlaylistInfo(a),s[o]=n}),this.tracks=s}}const ri=[{id:"cd_first-life_various-artists",desc:"CD - with no Liner notes, yes YT, yes SP, no Webamp"},{id:"lp_the-dark-side-of-the-moon_pink-floyd",desc:"LP - Pink Floyd Dark Side of the Moon"},{id:"cd_the-dark-side-of-the-moon_pink-floyd",desc:"CD - Pink Floyd Dark Side of the Moon"},{id:"capitol-15045-b-cigarettes-whiskey-and-wild-wild-women",desc:"78 - w/o jp2 (only 1 item image)"},{id:"bestofdollyparto00part",desc:"LP - older"},{id:"lp_dancing-tonight_freddy-martin-and-his-orchestra",desc:"LP - current, ~ 2020"},{id:"cd_beethoven-complete-works-for-string-trio_the-adaskin-string-trio",desc:"what_cd"},{id:"wcd_message-in-a-box-th_the-police_flac_lossless_807968",desc:"Irregular Photo - (portrait)"},{id:"lak-JC_Burris-James_Booker",desc:"No photo + long track list"},{id:"wcd_various-artiststhe-best-of-country-music_flac_lossless_29887623",desc:"Complilation, various artists"},{id:"lp_emperor-concerto_ludwig-van-beethoven-arthur-rubinstein-bos",desc:"Track names, multiple but same as album artist (should be omitted)"},{id:"illegal-art",desc:"3 column track list wide view pagination check"},{id:"wcd_borghild_die-warzau_mp3_320_1648819",desc:"Track time display, 60 seconds adds another minute. should display as 10:00"},{id:"cd_aaliyah_aaliyah-static-from-playa-timbaland",desc:'Has 3rd party "Full Album". Clicking on Full Album should highlight full album'}];let $=class extends C{constructor(){super(...arguments),this.viewToShow="data",this.selectedByDropdown=h.beta,this.errorMsg="",this.selectedByDropdownOnload="",this.selectedByRadio=h.beta,this.selectedByRadioOnload="",this.albumId="",this.albumMd=null,this.albumPlaylist=null,this.album=null}updated(e){var t,i;e.has("viewToShow")&&((t=document.querySelector("body"))===null||t===void 0||t.removeAttribute(e.get("viewToShow")),(i=document.querySelector("body"))===null||i===void 0||i.setAttribute(this.viewToShow,"")),e.has("albumId")&&this.albumId&&this.albumInfo()}get startAtWebamp(){return new URLSearchParams(location.search.slice(1)).has("webamp")}get playerByRadio(){return this.selectedByRadio===h.spotify?p`<spotify-player
        iAspotifyUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`:this.selectedByRadio===h.youtube?p`<youtube-player
        iaYouTubeUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`:p`<h2>Player type: ${this.selectedByRadio}</h2>`}get playerByDropdown(){return this.selectedByDropdown===h.spotify?p`<spotify-player
        iAspotifyUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`:this.selectedByDropdown===h.youtube?p`<youtube-player
        iaYouTubeUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`:p`<h2>Player type: ${this.selectedByDropdown}</h2>`}render(){return p`
      <section id="app-root">
        <h1>
          Music Player Things:
          <button @click=${()=>this.viewToShow="components"}>
            Components
          </button>
          <button @click=${()=>this.viewToShow="data"}>Data</button>

          ${this.viewToShow==="data"?p`<div>
                <form @submit=${e=>this.formInputSubmit(e)}>
                  <label
                    ><span>Item ID:</span
                    ><input
                      id="md-search"
                      placeholder=""
                      .value=${this.albumId}
                  /></label>
                </form>
                <button
                  @click=${()=>{this.albumId="",this.album=null,this.albumMd=null,this.albumPlaylist=null,this.errorMsg=""}}
                >
                  CLEAR
                </button>
              </div>`:g}
        </h1>
        <hr />
        <hr />
        <br /><br />
        ${this.viewToShow==="components"?this.componentsView:this.dataView}
      </section>
    `}async albumInfo(){this.errorMsg="";try{const e=await fetch(`https://archive.org/metadata/${this.albumId}`).then(i=>i.json()),t=await fetch(`https://archive.org/services/playlist/${this.albumId}`).then(i=>i.json());this.albumPlaylist=t,this.albumMd=new ht(e),this.album=new ii(this.albumMd,this.albumPlaylist),window.Album=this.album}catch(e){this.errorMsg=e.message}}formInputSubmit(e){e.preventDefault(),this.albumId=this.input.value}get albumStats(){if(!this.album)return g;const e=this.album.spotifyTracks.reduce((i,s)=>(i.push((s==null?void 0:s.track)||"n/a"),i),[]).join(", "),t=this.album.youtubeTracks.reduce((i,s)=>(i.push((s==null?void 0:s.track)||"n/a"),i),[]).join(", ");return p`
      <section id="album-stats">
        <h2>Stats</h2>
        <dl>
          <dr
            ><dt>
              <img
                class="album-image"
                src=${this.album.albumImage}
                alt="item img"
              />
            </dt>
            <dd>Image: ${this.album.albumImage}</dd></dr
          >
          <dr
            ><dt>Title</dt>
            <dd>${this.album.title}</dd></dr
          >
          <dr
            ><dt>Creator</dt>
            <dd>${this.album.creator}</dd></dr
          >
          <dr
            ><dt>Liner Notes?</dt>
            <dd>${this.album.linerNotes.length}</dd></dr
          >
          <dr
            ><dt>Images?</dt>
            <dd>${this.album.images.length}</dd></dr
          >
          <dr
            ><dt>/services/playlist Count</dt>
            <dd>${this.album.rawPlaylistTracks.length}</dd></dr
          >
          <dr
            ><dt>Tracks Count Found</dt>
            <dd>${this.album.tracks.length}</dd></dr
          >
          <dr
            ><dt>YT Track #</dt>
            <dd>${this.album.youtubeTracks.length} => ${t}</dd></dr
          >
          <dr
            ><dt>Has YT Album?</dt>
            <dd>${this.album.youtubeId?this.album.youtubeId:"NO"}</dd></dr
          >
          <dr
            ><dt>Spotify Track</dt>
            <dd>${this.album.spotifyTracks.length} => ${e}</dd></dr
          >
          <dr
            ><dt>Has Spotify Album?</dt>
            <dd>${this.album.spotifyId?this.album.spotifyId:"NO"}</dd></dr
          >
        </dl>
      </section>
    `}get demoClicks(){return p`
      <section id="demo-clicks">
        ${ri.map(e=>{const t=this.albumId===e.id;return p`
            <div class=${`demo ${t?"selected":""}`}>
              <button class="demo-go" @click=${()=>this.albumId=e.id}>
                GO
              </button>
              <p><b>ID: ${e.id}</b></p>
              <p>${e.desc}</p>
            </div>
          `})}
      </section>
    `}get dataView(){return p`
      <section id="data">
        <div></div>
        ${this.demoClicks}
        ${this.errorMsg?p`<h2 id="error">ERROR: ${this.errorMsg}</h2>`:g}

        <h2>
          Info for:
          <a
            _target="blank"
            href=${`https:/archive.org/details/${this.albumId}`}
            >${this.albumId}</a
          >
        </h2>

        ${this.albumStats}
        <div>
          <iframe
            src=${`https://archive.org/details/${this.albumId}`}
            title="ia details page"
          ></iframe>
        </div>
        <div>
          <h3>Metadata</h3>
          <pre>${JSON.stringify(this.albumPlaylist)}</pre>
        </div>
      </section>
    `}get componentsView(){const e=`${location.origin}/demo`;return p`
      <section id="components">
        <channel-selector
          spotify
          youtube
          beta
          samples
          .selected=${this.startAtWebamp?h.webamp:this.selectedByRadio}
          @postInit=${t=>{this.selectedByRadioOnload=t.detail.channel}}
          @channelChange=${t=>{this.selectedByRadio=t.detail.channel}}
          .url=${e}
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
          .url=${e}
          @postInit=${t=>{this.selectedByDropdownOnload=t.detail.channel}}
          @channelChange=${t=>{this.selectedByDropdown=t.detail.channel}}
          .selected=${this.startAtWebamp?h.webamp:this.selectedByDropdown?this.selectedByDropdown:h.beta}
        >
        </channel-selector>
        <section class="player">${this.playerByDropdown}</section>
        <section class="details">
          <h2>Selected by dropdown</h2>
          <h2>on first load: ${this.selectedByDropdownOnload}</h2>
          <h2>on change: ${this.selectedByDropdown}</h2>
        </section>
      </section>
    `}};$.styles=N`
    :host {
      display: block;
      position: relative;
      font-size: 16px;
    }

    button,
    input {
      height: 40px;
      font-size: 20px;
    }

    form {
      display: inline-block;
      margin: 10px auto;
    }

    input {
      min-width: 250px;
      margin-left: 10px;
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

    iframe {
      display: block;
      border: 1px solid pink;
      min-height: 500px;
      width: 100%;
    }

    dl dr {
      display: flex;
      font-size: 20px;
      border-bottom: 1px solid;
      padding: 5px;
      align-items: center;
    }

    dl dr dt {
      width: 200px;
    }

    #error {
      background-color: red;
      color: white;
    }

    #demo-clicks {
      border: 3px solid green;
      padding: 5px;
      max-height: 200px;
      overflow-y: auto;
    }

    .demo {
      border: 1px solid rebeccapurple;
      display: inline-block;
      height: 200px;
      width: 200px;
      padding: 5px;
      overflow: auto;
      margin: 5px;
    }

    .demo.selected {
      background-color: lavender;
    }

    .demo-go {
      display: block;
      width: 100%;
    }

    .album-image {
      height: 200px;
      border: 1px solid;
    }
  `;l([m({type:String,reflect:!0})],$.prototype,"viewToShow",void 0);l([m({type:String})],$.prototype,"selectedByDropdown",void 0);l([m({type:String})],$.prototype,"errorMsg",void 0);l([m({type:String})],$.prototype,"selectedByDropdownOnload",void 0);l([m({type:String})],$.prototype,"selectedByRadio",void 0);l([m({type:String})],$.prototype,"selectedByRadioOnload",void 0);l([m({type:String})],$.prototype,"albumId",void 0);l([m({type:Object,attribute:!1})],$.prototype,"albumMd",void 0);l([m({type:Object,attribute:!1})],$.prototype,"albumPlaylist",void 0);l([m({type:Object,attribute:!1})],$.prototype,"album",void 0);l([de("input#md-search")],$.prototype,"input",void 0);$=l([q("app-root")],$);
