const Zt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}};Zt();/*! *****************************************************************************
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
 */const q=window,rt=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol(),ut=new WeakMap;class Tt{constructor(t,e,i){if(this._$cssResult$=!0,i!==nt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(rt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ut.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ut.set(e,t))}return t}toString(){return this.cssText}}const Ft=o=>new Tt(typeof o=="string"?o:o+"",void 0,nt),B=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new Tt(e,o,nt)},Gt=(o,t)=>{rt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=q.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},yt=rt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ft(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J;const K=window,ft=K.trustedTypes,Jt=ft?ft.emptyScript:"",vt=K.reactiveElementPolyfillSupport,ot={toAttribute(o,t){switch(t){case Boolean:o=o?Jt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Pt=(o,t)=>t!==o&&(t==t||o==o),Q={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:Pt};class T extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=Q){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Q}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(yt(s))}else t!==void 0&&e.push(yt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Gt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Q){var s;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const n=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:ot).toAttribute(e,i.type);this._$El=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,r=s._$Ev.get(t);if(r!==void 0&&this._$El!==r){const n=s.getPropertyOptions(r),p=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?n.converter:ot;this._$El=r,this[r]=p.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Pt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}T.finalized=!0,T.elementProperties=new Map,T.elementStyles=[],T.shadowRootOptions={mode:"open"},vt==null||vt({ReactiveElement:T}),((J=K.reactiveElementVersions)!==null&&J!==void 0?J:K.reactiveElementVersions=[]).push("1.4.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X;const Z=window,U=Z.trustedTypes,bt=U?U.createPolicy("lit-html",{createHTML:o=>o}):void 0,S=`lit$${(Math.random()+"").slice(9)}$`,lt="?"+S,Qt=`<${lt}>`,O=document,N=(o="")=>O.createComment(o),L=o=>o===null||typeof o!="object"&&typeof o!="function",Ut=Array.isArray,Ot=o=>Ut(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,gt=/-->/g,mt=/>/g,E=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,wt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,Rt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),a=Rt(1),_t=Rt(2),x=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),St=new WeakMap,Dt=(o,t,e)=>{var i,s;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let n=r._$litPart$;if(n===void 0){const p=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=n=new R(t.insertBefore(N(),p),p,void 0,e!=null?e:{})}return n._$AI(o),n},P=O.createTreeWalker(O,129,null,!1),It=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":"",n=I;for(let c=0;c<e;c++){const d=o[c];let m,u,v=-1,$=0;for(;$<d.length&&(n.lastIndex=$,u=n.exec(d),u!==null);)$=n.lastIndex,n===I?u[1]==="!--"?n=gt:u[1]!==void 0?n=mt:u[2]!==void 0?(Ht.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=E):u[3]!==void 0&&(n=E):n===E?u[0]===">"?(n=s!=null?s:I,v=-1):u[1]===void 0?v=-2:(v=n.lastIndex-u[2].length,m=u[1],n=u[3]===void 0?E:u[3]==='"'?wt:$t):n===wt||n===$t?n=E:n===gt||n===mt?n=I:(n=E,s=void 0);const V=n===E&&o[c+1].startsWith("/>")?" ":"";r+=n===I?d+Qt:v>=0?(i.push(m),d.slice(0,v)+"$lit$"+d.slice(v)+S+V):d+S+(v===-2?(i.push(void 0),c):V)}const p=r+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[bt!==void 0?bt.createHTML(p):p,i]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const p=t.length-1,c=this.parts,[d,m]=It(t,e);if(this.el=M.createElement(d,i),P.currentNode=this.el.content,e===2){const u=this.el.content,v=u.firstChild;v.remove(),u.append(...v.childNodes)}for(;(s=P.nextNode())!==null&&c.length<p;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const v of s.getAttributeNames())if(v.endsWith("$lit$")||v.startsWith(S)){const $=m[n++];if(u.push(v),$!==void 0){const V=s.getAttribute($.toLowerCase()+"$lit$").split(S),W=/([.?@])?(.*)/.exec($);c.push({type:1,index:r,name:W[2],strings:V,ctor:W[1]==="."?Lt:W[1]==="?"?Mt:W[1]==="@"?zt:j})}else c.push({type:6,index:r})}for(const v of u)s.removeAttribute(v)}if(Ht.test(s.tagName)){const u=s.textContent.split(S),v=u.length-1;if(v>0){s.textContent=U?U.emptyScript:"";for(let $=0;$<v;$++)s.append(u[$],N()),P.nextNode(),c.push({type:2,index:++r});s.append(u[v],N())}}}else if(s.nodeType===8)if(s.data===lt)c.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(S,u+1))!==-1;)c.push({type:7,index:r}),u+=S.length-1}r++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function k(o,t,e=o,i){var s,r,n,p;if(t===x)return t;let c=i!==void 0?(s=e._$Cl)===null||s===void 0?void 0:s[i]:e._$Cu;const d=L(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==d&&((r=c==null?void 0:c._$AO)===null||r===void 0||r.call(c,!1),d===void 0?c=void 0:(c=new d(o),c._$AT(o,e,i)),i!==void 0?((n=(p=e)._$Cl)!==null&&n!==void 0?n:p._$Cl=[])[i]=c:e._$Cu=c),c!==void 0&&(t=k(o,c._$AS(o,t.values),c,i)),t}class Nt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:O).importNode(i,!0);P.currentNode=r;let n=P.nextNode(),p=0,c=0,d=s[0];for(;d!==void 0;){if(p===d.index){let m;d.type===2?m=new R(n,n.nextSibling,this,t):d.type===1?m=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(m=new jt(n,this,t)),this.v.push(m),d=s[++c]}p!==(d==null?void 0:d.index)&&(n=P.nextNode(),p++)}return r}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class R{constructor(t,e,i,s){var r;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),L(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==x&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.k(t):Ot(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==y&&L(this._$AH)?this._$AA.nextSibling.data=t:this.k(O.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=M.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(i);else{const n=new Nt(r,this),p=n.p(this.options);n.m(i),this.k(p),this._$AH=n}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new M(t)),e}O(t){Ut(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new R(this.S(N()),this.S(N()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$C_=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class j{constructor(t,e,i,s,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=k(this,t,e,0),n=!L(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const p=t;let c,d;for(t=r[0],c=0;c<r.length-1;c++)d=k(this,p[i+c],e,c),d===x&&(d=this._$AH[c]),n||(n=!L(d)||d!==this._$AH[c]),d===y?t=y:t!==y&&(t+=(d!=null?d:"")+r[c+1]),this._$AH[c]=d}n&&!s&&this.P(t)}P(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Lt extends j{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===y?void 0:t}}const Xt=U?U.emptyScript:"";class Mt extends j{constructor(){super(...arguments),this.type=4}P(t){t&&t!==y?this.element.setAttribute(this.name,Xt):this.element.removeAttribute(this.name)}}class zt extends j{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=k(this,t,e,0))!==null&&i!==void 0?i:y)===x)return;const s=this._$AH,r=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==y&&(s===y||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class jt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const te={A:"$lit$",M:S,C:lt,L:1,R:It,D:Nt,V:Ot,I:k,H:R,N:j,U:Mt,B:zt,F:Lt,W:jt},At=Z.litHtmlPolyfillSupport;At==null||At(M,R),((X=Z.litHtmlVersions)!==null&&X!==void 0?X:Z.litHtmlVersions=[]).push("2.3.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tt,et;class _ extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Dt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return x}}_.finalized=!0,_._$litElement$=!0,(tt=globalThis.litElementHydrateSupport)===null||tt===void 0||tt.call(globalThis,{LitElement:_});const xt=globalThis.litElementPolyfillSupport;xt==null||xt({LitElement:_});((et=globalThis.litElementVersions)!==null&&et!==void 0?et:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(n){customElements.define(e,n)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function f(o){return(t,e)=>e!==void 0?((i,s,r)=>{s.constructor.createProperty(r,i)})(o,t,e):ee(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=({finisher:o,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const r=(s=e.originalKey)!==null&&s!==void 0?s:e.key,n=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return o!=null&&(n.finisher=function(p){o(p,r)}),n}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o==null||o(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(o,t){return ie({descriptor:e=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var r,n;return this[s]===void 0&&(this[s]=(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var it;((it=window.HTMLSlotElement)===null||it===void 0?void 0:it.prototype.assignedElements)!=null;let st=class extends _{render(){return a`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};st.styles=B`
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
  `;st=h([D("ia-icon-label")],st);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},dt=o=>(...t)=>({_$litDirective$:o,values:t});class ct{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=dt(class extends ct{constructor(o){var t;if(super(o),o.type!==Vt.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,e)=>{const i=o[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[t]){const{style:e}=o.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const s=t[i];s!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,s):e[i]=s)}return x}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=dt(class extends ct{constructor(o){var t;if(super(o),o.type!==Vt.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,i;if(this.nt===void 0){this.nt=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!(!((e=this.st)===null||e===void 0)&&e.has(r))&&this.nt.add(r);return this.render(t)}const s=o.element.classList;this.nt.forEach(r=>{r in t||(s.remove(r),this.nt.delete(r))});for(const r in t){const n=!!t[r];n===this.nt.has(r)||((i=this.st)===null||i===void 0?void 0:i.has(r))||(n?(s.add(r),this.nt.add(r)):(s.remove(r),this.nt.delete(r)))}return x}});var l;(function(o){o.ia="ia",o.beta="beta",o.youtube="youtube",o.spotify="spotify",o.webamp="webamp"})(l||(l={}));var b;(function(o){o.iaSamples="Samples",o.iaPlayer="Player",o.beta="Beta",o.spotify="Spotify",o.webamp="Webamp",o.youtube="YouTube"})(b||(b={}));const w={ia:a`<img
    class="ia"
    src="https://archive.org/images/music-theater/internet-archive.svg"
    alt="Internet Archive logo"
    style="height: 20px; width: 20px;"
  />`,beta:a`<img
    class="ia-beta"
    src="https://archive.org/images/music-theater/streaming.svg"
    alt="Internet Archive beta player logo"
    style="height: 20px; width: 20px;"
  />`,spotify:a`<img
    class="spotify"
    src="https://archive.org/images/music-theater/spotify.svg"
    alt="Spotify logo"
    style="display: block;"
  />`,webamp:a`<img
    class="webamp"
    src="https://archive.org/images/music-theater/webamp.svg"
    alt="webamp logo"
    style="height: 20px;"
  />`,youtube:a`<img
    class="youtube"
    src="https://archive.org/images/music-theater/youtube.svg"
    alt="youtube logo"
    style="height: 20px; width: 20px; display: block;"
  />`},G=(o=b.iaPlayer,t)=>{const i=pt({filter:t?"invert(1)":"invert(0)",height:"20px",width:"20px"}),s=ht({selected:t,"invert-icon-at-hover-selected":t});return a`
    <ia-icon-label class=${s}>
      <span slot="icon" style=${i}>${w.ia}</span>
      <span>${o}</span>
    </ia-icon-label>
  `},Wt=o=>{const e=pt({filter:o?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=ht({selected:o,"invert-icon-at-hover-selected":o});return a`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${e}>${w.beta}</span>
      <span>${b.beta}</span>
    </ia-icon-label>
  `},Yt=o=>a`
  <ia-icon-label class="${o?"selected":""}">
    <span slot="icon">${w.spotify}</span>
    <span>${b.spotify}</span>
  </ia-icon-label>
`,qt=o=>{const e=pt({filter:o?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=ht({selected:o,"invert-icon-at-hover-selected":o});return a`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${e}>${w.webamp}</span>
      <span>Webamp</span>
    </ia-icon-label>
  `},Kt=o=>a`
  <ia-icon-label class="${o?"selected":""}">
    <span slot="icon">${w.youtube}</span>
    <span>${b.youtube}</span>
  </ia-icon-label>
`,oe=({samples:o,onClick:t,href:e,selected:i})=>{const s=o?b.iaSamples:b.iaPlayer;return a`
    <a href=${e} @click=${()=>t()}>${G(s,i)}</button>
  `},se=({samples:o,onClick:t,selected:e})=>{const i=o?b.iaSamples:b.iaPlayer;return a`
    <button @click=${s=>t(s)} class="ia">
      ${G(i,e)}
    </button>
  `},re=({onClick:o,selected:t})=>a`<button
  @click=${e=>o(e)}
  class="ia-beta"
>
  ${Wt(t)}
</button>`,ne=({onClick:o,selected:t})=>a`<button
  @click=${e=>o(e)}
  class="sp"
>
  ${Yt(t)}
</button>`,le=({onClick:o,href:t,selected:e})=>{const i=`${t}?webamp=default`;return a`
    <a href=${i} @click=${s=>o(s)} class="wa">${qt(e)}</button>
  `},ae=({onClick:o,selected:t})=>a`<button
  @click=${e=>o(e)}
  class="yt"
>
  ${Kt(t)}
</button>`,de=({samples:o,onClick:t,href:e,selectedOption:i})=>({url:e,selectedHandler:r=>{t(r)},label:G(o?b.iaSamples:b.iaPlayer,i===l.ia),id:l.ia}),ce=({samples:o,onClick:t,selectedOption:e})=>({selectedHandler:s=>{t(s)},label:G(o?b.iaSamples:b.iaPlayer,e===l.ia),id:l.ia}),pe=({onClick:o,selectedOption:t})=>({selectedHandler:i=>{o(i)},label:Wt(t===l.beta),id:l.beta}),he=({onClick:o,selectedOption:t})=>({selectedHandler:i=>{o(i)},label:Yt(t===l.spotify),id:l.spotify}),ue=({href:o,onClick:t,selectedOption:e})=>{const i=s=>{t(s)};return{url:`${o}?webamp=default`,selectedHandler:i,label:qt(e===l.webamp),id:l.webamp}},ye=({onClick:o,selectedOption:t})=>({selectedHandler:i=>{o(i)},label:Kt(t===l.youtube),id:l.youtube}),fe=o=>{const{spotify:t,beta:e,youtube:i,selectedOption:s}=o;return[s===l.webamp?de(o):ce(o),e?pe(o):null,t?he(o):null,i?ye(o):null,ue(o)].filter(Boolean)};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:ve}=te,Y=(o,t)=>t===void 0?(o==null?void 0:o._$litType$)!==void 0:(o==null?void 0:o._$litType$)===t,Ct=()=>document.createComment(""),Et=(o,t,e)=>{var i;const s=o._$AA.parentNode,r=t===void 0?o._$AB:t._$AA;if(e===void 0){const n=s.insertBefore(Ct(),r),p=s.insertBefore(Ct(),r);e=new ve(n,p,o,o.options)}else{const n=e._$AB.nextSibling,p=e._$AM,c=p!==o;if(c){let d;(i=e._$AQ)===null||i===void 0||i.call(e,o),e._$AM=o,e._$AP!==void 0&&(d=o._$AU)!==p._$AU&&e._$AP(d)}if(n!==r||c){let d=e._$AA;for(;d!==n;){const m=d.nextSibling;s.insertBefore(d,r),d=m}}}return e},be={},kt=(o,t=be)=>o._$AH=t,Bt=o=>o._$AH,ge=o=>{o._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=dt(class extends ct{constructor(o){super(o),this.et=new WeakMap}render(o){return[o]}update(o,[t]){if(Y(this.it)&&(!Y(t)||this.it.strings!==t.strings)){const e=Bt(o).pop();let i=this.et.get(this.it.strings);if(i===void 0){const s=document.createDocumentFragment();i=Dt(y,s),i.setConnected(!1),this.et.set(this.it.strings,i)}kt(i,[e]),Et(i,void 0,e)}if(Y(t)){if(!Y(this.it)||this.it.strings!==t.strings){const e=this.et.get(t.strings);if(e!==void 0){const i=Bt(e).pop();ge(o),Et(o,void 0,i),kt(o,[i])}}this.it=t}else this.it=void 0;return this.render(t)}});let A=class extends _{constructor(){super(...arguments),this.open=!1,this.displayCaret=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{}}renderOption(t){const{label:e,url:i=void 0,id:s}=t;let r;const n=this.selectedOption===s?"selected":"";return i?r=a`<a
        href=${i}
        @click=${()=>this.optionClicked(t)}
        >${e}</a
      >`:r=a`<button
        @click=${()=>this.optionClicked(t)}
      >
        ${e}
      </button>`,a`<li class=${n}>${r}</li>`}optionClicked(t){this.selectedOption=t.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:t}})),t.selectedHandler&&(t==null||t.selectedHandler(t))}toggleOptions(){this.open=!this.open}get caret(){return this.open?this.caretUp:this.caretDown}get dropdownState(){return this.open?"open":"closed"}get caretUp(){return _t`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
      fill=""></path>
  </svg>`}get caretDown(){return _t`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
    fill=""></path>
  </svg>`}get availableOptions(){return this.options.filter(t=>this.selectedOption!==t.id)}render(){return a`
      <div class="ia-dropdown-group">
        <button @click=${this.toggleOptions} class="click-main">
          <span class="cta sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.displayCaret?a`<span class="caret">${this.caret}</span>`:y}
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
  `;h([f({type:Boolean,attribute:!0})],A.prototype,"open",void 0);h([f({type:Boolean,attribute:!0})],A.prototype,"displayCaret",void 0);h([f({type:String,attribute:!0})],A.prototype,"selectedOption",void 0);h([f({type:Array})],A.prototype,"options",void 0);h([f({type:String})],A.prototype,"optionGroup",void 0);h([f({type:Function})],A.prototype,"optionSelected",void 0);A=h([D("ia-dropdown")],A);const $e=B`
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
`;var F;(function(o){o.postInit="postInit",o.channelChange="channelChange"})(F||(F={}));let g=class extends _{constructor(){super(...arguments),this.youtube=!1,this.spotify=!1,this.beta=!1,this.webamp=!0,this.samples=!1,this.selected=l.ia,this.displayStyle="radio",this.url=""}firstUpdated(){this.dispatchEvent(new CustomEvent(F.postInit,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}emitChannelChanged(){this.dispatchEvent(new CustomEvent(F.channelChange,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}iaClicked(){this.selected!==l.ia&&(this.selected=l.ia,this.emitChannelChanged())}betaClicked(){this.selected!==l.beta&&(this.selected=l.beta,this.emitChannelChanged())}spotifyClicked(){this.selected!==l.spotify&&(this.selected=l.spotify,this.emitChannelChanged())}webampClicked(){this.selected!==l.webamp&&(this.selected=l.webamp,this.emitChannelChanged())}youtubeClicked(){this.selected!==l.youtube&&(this.selected=l.youtube,this.emitChannelChanged())}dropdownOptionSelected(t){this.selected=t.id,this.emitChannelChanged(),this.iaDropdown.open=!1}get iaLinkSelector(){const t=this.selected===l.ia?"selected":"";return a`
      <li class=${t}>
        ${oe({samples:this.samples,selected:this.selected===l.ia,onClick:()=>this.iaClicked(),href:this.url})}
      </li>
    `}get iaButtonSelector(){const t=this.selected===l.ia?"selected":"";return a`
      <li class=${t}>
        ${se({samples:this.samples,selected:this.selected===l.ia,onClick:()=>this.iaClicked()})}
      </li>
    `}get iaBetaSelector(){const t=this.selected===l.beta?"selected":"";return a`
      <li class=${t}>
        ${re({selected:this.selected===l.beta,onClick:()=>this.betaClicked()})}
      </li>
    `}get spotifySelector(){const t=this.selected===l.spotify?"selected":"";return a`
      <li class=${t}>
        ${ne({selected:this.selected===l.spotify,onClick:()=>this.spotifyClicked()})}
      </li>
    `}get webampSelector(){const t=this.selected===l.webamp?"selected":"";return a`
      <li class=${t}>
        ${le({href:this.url||window.location.href,selected:this.selected===l.webamp,onClick:()=>this.webampClicked()})}
      </li>
    `}get youtubeSelector(){const t=this.selected===l.youtube?"selected":"";return a`
      <li class=${t}>
        ${ae({selected:this.selected===l.youtube,onClick:()=>this.youtubeClicked()})}
      </li>
    `}get properIaSelector(){return this.selected===l.webamp?this.iaLinkSelector:this.iaButtonSelector}toggleDisplayStyle(){const t=this.displayStyle==="dropdown"?"radio":"dropdown";this.displayStyle=t}shouldShowChannelType(t){const e=this.selected===t;return this.displayStyle==="radio"?!0:!(this.displayStyle==="dropdown"&&e)}get dropdownOptions(){const{samples:t,beta:e,spotify:i,webamp:s,youtube:r,url:n,selected:p}=this;return fe({selectedOption:p,samples:!!t,beta:e,spotify:i,webamp:s,youtube:r,href:n,onClick:this.dropdownOptionSelected.bind(this)})}get currentlySelectedIcon(){switch(this.selected){case l.beta:return w.beta;case l.spotify:return w.spotify;case l.youtube:return w.youtube;case l.webamp:return w.webamp;default:return w.ia}}get dropdown(){return a`
      <ia-dropdown
        displayCaret
        .options=${this.dropdownOptions}
        .selectedOption=${this.selected}
      >
        <span slot="dropdown-label">${this.currentlySelectedIcon}</span>
      </ia-dropdown>
    `}get radioView(){return a`
      <div id="selector-title"><h4>Play from:</h4></div>
      <div>
        <ul>
          ${this.properIaSelector} ${this.beta?this.iaBetaSelector:y}
          ${this.youtube?this.youtubeSelector:y}
          ${this.spotify?this.spotifySelector:y}
          ${this.webamp?this.webampSelector:y}
        </ul>
      </div>
    `}render(){return a`
      <section id=${this.displayStyle} class=${this.displayStyle}>
        ${me(this.displayStyle==="radio"?this.radioView:this.dropdown)}
      </section>
    `}};g.styles=[B`
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
    `,$e];h([f({attribute:!0,type:Boolean,reflect:!0})],g.prototype,"youtube",void 0);h([f({attribute:!0,type:Boolean,reflect:!0})],g.prototype,"spotify",void 0);h([f({attribute:!0,type:Boolean,reflect:!0})],g.prototype,"beta",void 0);h([f({attribute:!0,type:Boolean,reflect:!0})],g.prototype,"webamp",void 0);h([f({attribute:!0,type:Boolean,reflect:!0})],g.prototype,"samples",void 0);h([f({type:String,reflect:!0})],g.prototype,"selected",void 0);h([f({type:String,reflect:!0})],g.prototype,"displayStyle",void 0);h([f({type:String})],g.prototype,"url",void 0);h([at("ia-dropdown")],g.prototype,"iaDropdown",void 0);g=h([D("channel-selector")],g);let z=class extends _{constructor(){super(...arguments),this.iaSpotifyUrn="",this.display=!1}get spotifyUrl(){return!this.iaSpotifyUrn||!this.iaSpotifyUrn.match(/urn:spotify:/g)?"":`https://open.spotify.com/embed/${this.iaSpotifyUrn.replace(/urn:spotify:/g,"").replace(/:/g,"/")}`}render(){const t=this.spotifyUrl;return t?a`
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
    `:a`<h3>Invalid Spotify URI: ${this.iaSpotifyUrn}</h3>`}static get styles(){return[B`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}};h([f({type:String,reflect:!0})],z.prototype,"iaSpotifyUrn",void 0);h([f({type:Boolean,reflect:!0})],z.prototype,"display",void 0);h([at("iframe")],z.prototype,"iframe",void 0);z=h([D("spotify-player")],z);let H=class extends _{constructor(){super(...arguments),this.iaYouTubeUrn="",this.display=!1,this.baseHost="https://archive.org"}get youTubeUrl(){if(!this.iaYouTubeUrn||!this.iaYouTubeUrn.match(/urn:youtube:/g))return"";const e=this.iaYouTubeUrn.replace(/urn:youtube:/g,"").replace(/:/g,"/"),i=`origin=${this.baseHost}&widgetid=1&autoplay=1&rel=0`;return`https://www.youtube.com/embed/${e}?${i}`}render(){const t=this.youTubeUrl;return t?a`
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
    `:a`<h3>Invalid YouTube ID: ${this.iaYouTubeUrn}</h3>`}static get styles(){return[B`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}};h([f({type:String,reflect:!0})],H.prototype,"iaYouTubeUrn",void 0);h([f({type:Boolean,reflect:!0})],H.prototype,"display",void 0);h([f({type:String})],H.prototype,"baseHost",void 0);h([at("iframe")],H.prototype,"iframe",void 0);H=h([D("youtube-player")],H);let C=class extends _{constructor(){super(...arguments),this.viewToShow="components",this.selectedByDropdown=l.beta,this.selectedByDropdownOnload="",this.selectedByRadio=l.beta,this.selectedByRadioOnload=""}updated(t){var e,i;t.has("viewToShow")&&((e=document.querySelector("body"))===null||e===void 0||e.removeAttribute(t.get("viewToShow")),(i=document.querySelector("body"))===null||i===void 0||i.setAttribute(this.viewToShow,""))}get startAtWebamp(){return new URLSearchParams(location.search.slice(1)).has("webamp")}get playerByRadio(){return this.selectedByRadio===l.spotify?a`<spotify-player
        iAspotifyUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`:this.selectedByRadio===l.youtube?a`<youtube-player
        iaYouTubeUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`:a`<h2>Player type: ${this.selectedByRadio}</h2>`}get playerByDropdown(){return this.selectedByDropdown===l.spotify?a`<spotify-player
        iAspotifyUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`:this.selectedByDropdown===l.youtube?a`<youtube-player
        iaYouTubeUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`:a`<h2>Player type: ${this.selectedByDropdown}</h2>`}render(){return a`
      <section id="app-root">
        <h1>
          Music Player Things:
          <button @click=${()=>this.viewToShow="components"}>
            Components
          </button>
          <button @click=${()=>this.viewToShow="data"}>Data</button>
        </h1>
        <hr />
        <hr />
        <br /><br />
        ${this.viewToShow==="components"?this.componentsView:this.dataView}
      </section>
    `}get dataView(){return a`
      <section id="data">
        <div></div>
      </section>
    `}get componentsView(){const t=`${location.origin}/demo`;return a`
      <section id="components">
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
      </section>
    `}};C.styles=B`
    :host {
      display: block;
      position: relative;
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
  `;h([f({type:String,reflect:!0})],C.prototype,"viewToShow",void 0);h([f({type:String})],C.prototype,"selectedByDropdown",void 0);h([f({type:String})],C.prototype,"selectedByDropdownOnload",void 0);h([f({type:String})],C.prototype,"selectedByRadio",void 0);h([f({type:String})],C.prototype,"selectedByRadioOnload",void 0);C=h([D("app-root")],C);
