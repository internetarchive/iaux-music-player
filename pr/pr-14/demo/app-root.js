const Ct=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}};Ct();const Mt="modulepreload",Ne={},It="./",U=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${It}${i}`,i in Ne)return;Ne[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Mt,o||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),o)return new Promise((d,l)=>{a.addEventListener("load",d),a.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function n(r,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,i);else for(var d=r.length-1;d>=0;d--)(a=r[d])&&(s=(o<3?a(s):o>3?a(e,t,s):a(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=window,Pe=ae.ShadowRoot&&(ae.ShadyCSS===void 0||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol(),Le=new WeakMap;class at{constructor(e,t,i){if(this._$cssResult$=!0,i!==Be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Pe&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Le.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Le.set(t,e))}return e}toString(){return this.cssText}}const Tt=r=>new at(typeof r=="string"?r:r+"",void 0,Be),M=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,o,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[s+1],r[0]);return new at(t,r,Be)},Et=(r,e)=>{Pe?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),o=ae.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,r.appendChild(i)})},Ue=Pe?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Tt(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var me;const le=window,Fe=le.trustedTypes,Pt=Fe?Fe.emptyScript:"",ze=le.reactiveElementPolyfillSupport,Ae={toAttribute(r,e){switch(e){case Boolean:r=r?Pt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},nt=(r,e)=>e!==r&&(e==e||r==r),ye={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:nt};class z extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=ye){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const s=this[e];this[t]=o,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ye}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(Ue(o))}else e!==void 0&&t.push(Ue(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Et(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ye){var o;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const a=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:Ae).toAttribute(t,i.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,s=o._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=o.getPropertyOptions(s),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:Ae;this._$El=s,this[s]=d.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||nt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}z.finalized=!0,z.elementProperties=new Map,z.elementStyles=[],z.shadowRootOptions={mode:"open"},ze?.({ReactiveElement:z}),((me=le.reactiveElementVersions)!==null&&me!==void 0?me:le.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we;const de=window,W=de.trustedTypes,je=W?W.createPolicy("lit-html",{createHTML:r=>r}):void 0,ce="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,De="?"+P,Bt=`<${De}>`,q=document,Q=()=>q.createComment(""),X=r=>r===null||typeof r!="object"&&typeof r!="function",lt=Array.isArray,dt=r=>lt(r)||typeof r?.[Symbol.iterator]=="function",be=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,We=/-->/g,qe=/>/g,H=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ye=/'/g,Ge=/"/g,ct=/^(?:script|style|textarea|title)$/i,ut=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),u=ut(1),Ze=ut(2),R=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Je=new WeakMap,j=q.createTreeWalker(q,129,null,!1),ht=(r,e)=>{const t=r.length-1,i=[];let o,s=e===2?"<svg>":"",a=K;for(let l=0;l<t;l++){const p=r[l];let b,f,y=-1,_=0;for(;_<p.length&&(a.lastIndex=_,f=a.exec(p),f!==null);)_=a.lastIndex,a===K?f[1]==="!--"?a=We:f[1]!==void 0?a=qe:f[2]!==void 0?(ct.test(f[2])&&(o=RegExp("</"+f[2],"g")),a=H):f[3]!==void 0&&(a=H):a===H?f[0]===">"?(a=o??K,y=-1):f[1]===void 0?y=-2:(y=a.lastIndex-f[2].length,b=f[1],a=f[3]===void 0?H:f[3]==='"'?Ge:Ye):a===Ge||a===Ye?a=H:a===We||a===qe?a=K:(a=H,o=void 0);const F=a===H&&r[l+1].startsWith("/>")?" ":"";s+=a===K?p+Bt:y>=0?(i.push(b),p.slice(0,y)+ce+p.slice(y)+P+F):p+P+(y===-2?(i.push(void 0),l):F)}const d=s+(r[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[je!==void 0?je.createHTML(d):d,i]};class ee{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,a=0;const d=e.length-1,l=this.parts,[p,b]=ht(e,t);if(this.el=ee.createElement(p,i),j.currentNode=this.el.content,t===2){const f=this.el.content,y=f.firstChild;y.remove(),f.append(...y.childNodes)}for(;(o=j.nextNode())!==null&&l.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const f=[];for(const y of o.getAttributeNames())if(y.endsWith(ce)||y.startsWith(P)){const _=b[a++];if(f.push(y),_!==void 0){const F=o.getAttribute(_.toLowerCase()+ce).split(P),J=/([.?@])?(.*)/.exec(_);l.push({type:1,index:s,name:J[2],strings:F,ctor:J[1]==="."?gt:J[1]==="?"?vt:J[1]==="@"?ft:oe})}else l.push({type:6,index:s})}for(const y of f)o.removeAttribute(y)}if(ct.test(o.tagName)){const f=o.textContent.split(P),y=f.length-1;if(y>0){o.textContent=W?W.emptyScript:"";for(let _=0;_<y;_++)o.append(f[_],Q()),j.nextNode(),l.push({type:2,index:++s});o.append(f[y],Q())}}}else if(o.nodeType===8)if(o.data===De)l.push({type:2,index:s});else{let f=-1;for(;(f=o.data.indexOf(P,f+1))!==-1;)l.push({type:7,index:s}),f+=P.length-1}s++}}static createElement(e,t){const i=q.createElement("template");return i.innerHTML=e,i}}function L(r,e,t=r,i){var o,s,a,d;if(e===R)return e;let l=i!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[i]:t._$Cl;const p=X(e)?void 0:e._$litDirective$;return l?.constructor!==p&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),p===void 0?l=void 0:(l=new p(r),l._$AT(r,t,i)),i!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=L(r,l._$AS(r,e.values),l,i)),e}class pt{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:o}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:q).importNode(i,!0);j.currentNode=s;let a=j.nextNode(),d=0,l=0,p=o[0];for(;p!==void 0;){if(d===p.index){let b;p.type===2?b=new G(a,a.nextSibling,this,e):p.type===1?b=new p.ctor(a,p.name,p.strings,this,e):p.type===6&&(b=new mt(a,this,e)),this.u.push(b),p=o[++l]}d!==p?.index&&(a=j.nextNode(),d++)}return s}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class G{constructor(e,t,i,o){var s;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cm=(s=o?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=L(this,e,t),X(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==R&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):dt(e)?this.k(e):this.g(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}g(e){this._$AH!==m&&X(this._$AH)?this._$AA.nextSibling.data=e:this.T(q.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ee.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.p(i);else{const a=new pt(s,this),d=a.v(this.options);a.p(i),this.T(d),this._$AH=a}}_$AC(e){let t=Je.get(e.strings);return t===void 0&&Je.set(e.strings,t=new ee(e)),t}k(e){lt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new G(this.S(Q()),this.S(Q()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class oe{constructor(e,t,i,o,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const s=this.strings;let a=!1;if(s===void 0)e=L(this,e,t,0),a=!X(e)||e!==this._$AH&&e!==R,a&&(this._$AH=e);else{const d=e;let l,p;for(e=s[0],l=0;l<s.length-1;l++)p=L(this,d[i+l],t,l),p===R&&(p=this._$AH[l]),a||(a=!X(p)||p!==this._$AH[l]),p===m?e=m:e!==m&&(e+=(p??"")+s[l+1]),this._$AH[l]=p}a&&!o&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gt extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}const Dt=W?W.emptyScript:"";class vt extends oe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==m?this.element.setAttribute(this.name,Dt):this.element.removeAttribute(this.name)}}class ft extends oe{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=L(this,e,t,0))!==null&&i!==void 0?i:m)===R)return;const o=this._$AH,s=e===m&&o!==m||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==m&&(o===m||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class mt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){L(this,e)}}const Rt={P:ce,A:P,M:De,C:1,L:ht,D:pt,R:dt,V:L,I:G,H:oe,N:vt,U:ft,F:gt,B:mt},Ke=de.litHtmlPolyfillSupport;Ke?.(ee,G),((we=de.litHtmlVersions)!==null&&we!==void 0?we:de.litHtmlVersions=[]).push("2.7.0");const yt=(r,e,t)=>{var i,o;const s=(i=t?.renderBefore)!==null&&i!==void 0?i:e;let a=s._$litPart$;if(a===void 0){const d=(o=t?.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=a=new G(e.insertBefore(Q(),d),d,void 0,t??{})}return a._$AI(r),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $e,_e;class k extends z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=yt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return R}}k.finalized=!0,k._$litElement$=!0,($e=globalThis.litElementHydrateSupport)===null||$e===void 0||$e.call(globalThis,{LitElement:k});const Qe=globalThis.litElementPolyfillSupport;Qe?.({LitElement:k});((_e=globalThis.litElementVersions)!==null&&_e!==void 0?_e:globalThis.litElementVersions=[]).push("3.3.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=r=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(r,e):((t,i)=>{const{kind:o,elements:s}=i;return{kind:o,elements:s,finisher(a){customElements.define(t,a)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function v(r){return(e,t)=>t!==void 0?((i,o,s)=>{o.constructor.createProperty(s,i)})(r,e,t):Ot(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt=({finisher:r,descriptor:e})=>(t,i)=>{var o;if(i===void 0){const s=(o=t.originalKey)!==null&&o!==void 0?o:t.key,a=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return r!=null&&(a.finisher=function(d){r(d,s)}),a}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),r?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Z(r,e){return Vt({descriptor:t=>{const i={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const o=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var s,a;return this[o]===void 0&&(this[o]=(a=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(r))!==null&&a!==void 0?a:null),this[o]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ke;((ke=window.HTMLSlotElement)===null||ke===void 0?void 0:ke.prototype.assignedElements)!=null;function c(r){let e,t,i;return typeof r=="object"?(e=r.hashFunction,t=r.expiring,i=r.tags):e=r,(o,s,a)=>{if(a.value!=null)a.value=Xe(a.value,e,t,i);else if(a.get!=null)a.get=Xe(a.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const xe=new Map;function Xe(r,e,t=0,i){const o=Symbol("__memoized_map__");return function(...s){let a;this.hasOwnProperty(o)||Object.defineProperty(this,o,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[o];if(Array.isArray(i))for(const l of i)xe.has(l)?xe.get(l).push(d):xe.set(l,[d]);if(e||s.length>0||t>0){let l;e===!0?l=s.map(f=>f.toString()).join("!"):e?l=e.apply(this,s):l=s[0];const p=`${l}__timestamp`;let b=!1;if(t>0)if(!d.has(p))b=!0;else{let f=d.get(p);b=Date.now()-f>t}d.has(l)&&!b?a=d.get(l):(a=r.apply(this,s),d.set(l,a),t>0&&d.set(p,Date.now()))}else{const l=this;d.has(l)?a=d.get(l):(a=r.apply(this,s),d.set(l,a))}return a}}class Ce{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}Ce.shared=new Ce;class D{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}D.shared=new D;class ue{parseValue(e){return D.shared.parseValue(e)}}ue.shared=new ue;class te{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let o=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(o=new Date(o.getTime()+o.getTimezoneOffset()*1e3*60)),o}}te.shared=new te;class he{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((o,s)=>{const a=parseFloat(o);if(Number.isNaN(a))return t=!0,0;const d=e.length-1-s,l=60**d;return a*Math.floor(l)}).reduce((o,s)=>o+s,0);return t?void 0:i}}he.shared=new he;class Me{parseValue(e){if(typeof e=="string")return e}}Me.shared=new Me;class Ht{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const o of this.separators)if(i=t.split(o),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),o=[];return i.forEach(s=>{s!==void 0&&o.push(s)}),o}}class Ie{parseValue(e){if(typeof e=="string")return e}}Ie.shared=new Ie;class pe{parseValue(e){return String(e)}}pe.shared=new pe;class I{constructor(e,t){this.parser=e,this.rawValue=t}get values(){return this.parseRawValue()}get value(){return this.values[0]}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const o=this.parser.parseValue(i);Array.isArray(o)?t.push(...o):o!==void 0&&t.push(o)}),t}}n([c()],I.prototype,"values",null);n([c()],I.prototype,"value",null);class Nt extends I{constructor(e){super(Ce.shared,e)}}class E extends I{constructor(e){super(te.shared,e)}}class Se extends I{constructor(e){super(he.shared,e)}}class C extends I{constructor(e){super(D.shared,e)}}class w extends I{constructor(e){super(pe.shared,e)}}class Lt extends I{constructor(e){super(Ie.shared,e)}}class et extends I{constructor(e){super(ue.shared,e)}}class Ut extends I{constructor(e){super(Me.shared,e)}}class Ft extends I{constructor(e,t){super(t,e)}}class zt extends Ft{constructor(e){const t=new Ht(pe.shared);super(e,t)}}class h{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.identifier}get addeddate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.addeddate?new E(this.rawMetadata.addeddate):void 0}get audio_codec(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_codec?new w(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_sample_rate?new C(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.avg_rating?new C(this.rawMetadata.avg_rating):void 0}get collection(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection?new w(this.rawMetadata.collection):void 0}get collections_raw(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collections_raw?new w(this.rawMetadata.collections_raw):void 0}get collection_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection_size?new et(this.rawMetadata.collection_size):void 0}get contributor(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.contributor?new w(this.rawMetadata.contributor):void 0}get coverage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.coverage?new w(this.rawMetadata.coverage):void 0}get creator(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.creator?new w(this.rawMetadata.creator):void 0}get date(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.date?new E(this.rawMetadata.date):void 0}get description(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.description?new w(this.rawMetadata.description):void 0}get downloads(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.downloads?new C(this.rawMetadata.downloads):void 0}get duration(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.duration?new Se(this.rawMetadata.duration):void 0}get"external-identifier"(){var e,t;return!((e=this.rawMetadata)===null||e===void 0)&&e["external-identifier"]?new w((t=this.rawMetadata)===null||t===void 0?void 0:t["external-identifier"]):void 0}get files_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.files_count?new C(this.rawMetadata.files_count):void 0}get indexdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.indexdate?new E(this.rawMetadata.indexdate):void 0}get isbn(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.isbn?new w(this.rawMetadata.isbn):void 0}get issue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.issue?new w(this.rawMetadata.issue):void 0}get item_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_count?new C(this.rawMetadata.item_count):void 0}get item_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_size?new et(this.rawMetadata.item_size):void 0}get language(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.language?new w(this.rawMetadata.language):void 0}get length(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.length?new Se(this.rawMetadata.length):void 0}get lineage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.lineage?new w(this.rawMetadata.lineage):void 0}get month(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.month?new C(this.rawMetadata.month):void 0}get mediatype(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.mediatype?new Ut(this.rawMetadata.mediatype):void 0}get noindex(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.noindex?new Nt(this.rawMetadata.noindex):void 0}get notes(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.notes?new w(this.rawMetadata.notes):void 0}get num_favorites(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_favorites?new C(this.rawMetadata.num_favorites):void 0}get num_reviews(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_reviews?new C(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_edition?new w(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_work?new w(this.rawMetadata.openlibrary_work):void 0}get page_progression(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.page_progression?new Lt(this.rawMetadata.page_progression):void 0}get partner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.partner?new w(this.rawMetadata.partner):void 0}get ppi(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.ppi?new C(this.rawMetadata.ppi):void 0}get publicdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publicdate?new E(this.rawMetadata.publicdate):void 0}get publisher(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publisher?new w(this.rawMetadata.publisher):void 0}get reviewdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.reviewdate?new E(this.rawMetadata.reviewdate):void 0}get runtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.runtime?new Se(this.rawMetadata.runtime):void 0}get scanner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.scanner?new w(this.rawMetadata.scanner):void 0}get source(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.source?new w(this.rawMetadata.source):void 0}get start_localtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_localtime?new E(this.rawMetadata.start_localtime):void 0}get start_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_time?new E(this.rawMetadata.start_time):void 0}get stop_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.stop_time?new E(this.rawMetadata.stop_time):void 0}get subject(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.subject?new zt(this.rawMetadata.subject):void 0}get taper(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.taper?new w(this.rawMetadata.taper):void 0}get title(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.title?new w(this.rawMetadata.title):void 0}get transferer(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.transferer?new w(this.rawMetadata.transferer):void 0}get track(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.track?new C(this.rawMetadata.track):void 0}get type(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.type?new w(this.rawMetadata.type):void 0}get uploader(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.uploader?new w(this.rawMetadata.uploader):void 0}get utc_offset(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.utc_offset?new C(this.rawMetadata.utc_offset):void 0}get venue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.venue?new w(this.rawMetadata.venue):void 0}get volume(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.volume?new w(this.rawMetadata.volume):void 0}get week(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.week?new C(this.rawMetadata.week):void 0}get year(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.year?new E(this.rawMetadata.year):void 0}}n([c()],h.prototype,"addeddate",null);n([c()],h.prototype,"audio_codec",null);n([c()],h.prototype,"audio_sample_rate",null);n([c()],h.prototype,"avg_rating",null);n([c()],h.prototype,"collection",null);n([c()],h.prototype,"collections_raw",null);n([c()],h.prototype,"collection_size",null);n([c()],h.prototype,"contributor",null);n([c()],h.prototype,"coverage",null);n([c()],h.prototype,"creator",null);n([c()],h.prototype,"date",null);n([c()],h.prototype,"description",null);n([c()],h.prototype,"downloads",null);n([c()],h.prototype,"duration",null);n([c()],h.prototype,"external-identifier",null);n([c()],h.prototype,"files_count",null);n([c()],h.prototype,"indexdate",null);n([c()],h.prototype,"isbn",null);n([c()],h.prototype,"issue",null);n([c()],h.prototype,"item_count",null);n([c()],h.prototype,"item_size",null);n([c()],h.prototype,"language",null);n([c()],h.prototype,"length",null);n([c()],h.prototype,"lineage",null);n([c()],h.prototype,"month",null);n([c()],h.prototype,"mediatype",null);n([c()],h.prototype,"noindex",null);n([c()],h.prototype,"notes",null);n([c()],h.prototype,"num_favorites",null);n([c()],h.prototype,"num_reviews",null);n([c()],h.prototype,"openlibrary_edition",null);n([c()],h.prototype,"openlibrary_work",null);n([c()],h.prototype,"page_progression",null);n([c()],h.prototype,"partner",null);n([c()],h.prototype,"ppi",null);n([c()],h.prototype,"publicdate",null);n([c()],h.prototype,"publisher",null);n([c()],h.prototype,"reviewdate",null);n([c()],h.prototype,"runtime",null);n([c()],h.prototype,"scanner",null);n([c()],h.prototype,"source",null);n([c()],h.prototype,"start_localtime",null);n([c()],h.prototype,"start_time",null);n([c()],h.prototype,"stop_time",null);n([c()],h.prototype,"subject",null);n([c()],h.prototype,"taper",null);n([c()],h.prototype,"title",null);n([c()],h.prototype,"transferer",null);n([c()],h.prototype,"track",null);n([c()],h.prototype,"type",null);n([c()],h.prototype,"uploader",null);n([c()],h.prototype,"utc_offset",null);n([c()],h.prototype,"venue",null);n([c()],h.prototype,"volume",null);n([c()],h.prototype,"week",null);n([c()],h.prototype,"year",null);class V{constructor(e){this.rawValue=e}get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size?ue.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length?he.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height?D.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width?D.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track?D.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}}n([c()],V.prototype,"size",null);n([c()],V.prototype,"length",null);n([c()],V.prototype,"height",null);n([c()],V.prototype,"width",null);n([c()],V.prototype,"track",null);class ve{constructor(e){this.rawValue=e}get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate?te.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate?te.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars?D.shared.parseValue(this.rawValue.stars):void 0}}n([c()],ve.prototype,"reviewdate",null);n([c()],ve.prototype,"createdate",null);n([c()],ve.prototype,"stars",null);class wt{constructor(e){var t,i;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(o=>new V(o)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new h(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(i=e.reviews)===null||i===void 0?void 0:i.map(o=>new ve(o))}}class jt{constructor(e){this.numFound=e.numFound,this.start=e.start,this.docs=e.docs.map(t=>new h(t)),this.aggregations=e.aggregations}}class Wt{constructor(e){this.rawResponse=e,this.responseHeader=e.responseHeader,this.response=new jt(e.response)}}var N;(function(r){r.networkError="SearchService.NetworkError",r.itemNotFound="SearchService.ItemNotFound",r.decodingError="SearchService.DecodingError",r.searchEngineError="SearchService.SearchEngineError"})(N||(N={}));class Te extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class qt{static aggregateSearchParamsAsString(e){if(e.advancedParams){const t=e.advancedParams.map(o=>({terms:o}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field} ${e.direction}`}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("q",e.query),t.append("output","json"),e.rows&&t.append("rows",String(e.rows)),e.page&&t.append("page",String(e.page)),e.fields&&t.append("fl",e.fields.join(",")),e.sort){const o=e.sort.map(s=>this.sortParamsAsString(s));t.append("sort",o.join(","))}const i=e.aggregations;if(i){const o=this.aggregateSearchParamsAsString(i);o&&t.append("user_aggs",o)}return t}}class Yt{constructor(e){var t;if(this.baseUrl=(t=e?.baseUrl)!==null&&t!==void 0?t:"archive.org",e?.includeCredentials!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,e?.scope!==void 0)this.requestScope=e.scope;else{const o=new URL(window.location.href).searchParams.get("scope");o&&(this.requestScope=o)}}async performSearch(e){const i=qt.generateURLSearchParams(e).toString(),o=`https://${this.baseUrl}/advancedsearch.php?${i}`;return this.fetchUrl(o)}async fetchMetadata(e,t){const i=t?`/${t}`:"",o=`https://${this.baseUrl}/metadata/${e}${i}`;return this.fetchUrl(o,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var i;const o=new URL(e);this.requestScope&&o.searchParams.set("scope",this.requestScope);let s;try{const a=(i=t?.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(o.href,a)}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(N.networkError,d)}try{const a=await s.json(),d=a.error;if(d){const l=a.forensics;return this.getErrorResult(N.searchEngineError,d,l)}else return{success:a}}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(N.decodingError,d)}}getErrorResult(e,t,i){return{error:new Te(e,t,i)}}}class tt{constructor(e){this.searchBackend=e}async search(e){const t=await this.searchBackend.performSearch(e);return t.error?t:{success:new Wt(t.success)}}async fetchMetadata(e){var t;const i=await this.searchBackend.fetchMetadata(e);return i.error?i:((t=i.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new Te(N.itemNotFound)}:{success:new wt(i.success)}}async fetchMetadataValue(e,t){var i;const o=await this.searchBackend.fetchMetadata(e,t);return o.error?o:((i=o.success)===null||i===void 0?void 0:i.result)===void 0?{error:new Te(N.itemNotFound)}:{success:o.success.result}}}tt.default=new tt(new Yt);var Gt=u`
  <svg
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="closeCircleTitleID">Close circle icon</title>
    <desc id="closeCircleTitleID">A line drawing of an X in a circle</desc>
    <path
      d="m6 0c3.3137085 0 6 2.6862915 6 6s-2.6862915 6-6 6-6-2.6862915-6-6 2.6862915-6 6-6zm-2.3406945 2.96359116c-.19486814-.13499605-.46429254-.1157109-.63785889.05785545-.19526215.19526215-.19526215.51184463 0 .70710678l2.27155339 2.27144661-2.20567981 2.20557302-.05785545.06924789c-.13499605.19486814-.1157109.46429254.05785545.6378589.19526215.19526214.51184464.19526214.70710679 0l2.20557302-2.20567981 2.20557302 2.20567981.06924789.05785545c.19486814.13499605.46429254.1157109.6378589-.05785545.19526214-.19526215.19526214-.51184464 0-.70710679l-2.20567981-2.20557302 2.27155339-2.27144661.05785545-.06924789c.13499605-.19486814.1157109-.46429254-.05785545-.63785889-.19526215-.19526215-.51184463-.19526215-.70710678 0l-2.27144661 2.27155339-2.27144661-2.27155339z"
      class="fill-color"
      fill-rule="evenodd"
    />
  </svg>
`;class Zt extends k{static get styles(){return M`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor, #999);
      }
    `}render(){return Gt}}customElements.define("ia-icon-close-circle",Zt);var Jt=u`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="textsTitleID textsDescID"
>
  <title id="textsTitleID">Texts icon</title>
  <desc id="textsDescID">An illustration of an open book.</desc>
  <path class="fill-color" d="m10.3323235 11.0007023h6.9060825c.8851083 0 1.5847122.3064258 2.0988114.9192774v14.4324451h-.6460032c-.1435563-.120323-.3528315-.2434552-.6278257-.3693964-.2749942-.1259413-.5201585-.2191097-.7354929-.2795053l-.3048241-.1081503h-5.7042647c-.3108832 0-.5621067-.0601615-.7536705-.1804846-.0717781-.0599274-.1256117-.1439663-.1615008-.2521166-.0358891-.1081502-.0598928-.2043619-.0720112-.2886348v-13.8741368zm19.1752505 0v13.603761c-.0717781.3361555-.2211606.5943584-.4481473.7746089-.0717781.0599274-.1733862.1079162-.304824.1439663-.1314379.0360501-.2451643.0601615-.3411793.0723343h-5.5965975c-.9568865.2640552-1.5068748.5164059-1.649965.757052h-.6634817v-14.4324451c.5140992-.6128516 1.2076439-.9192774 2.0806339-.9192774h6.92426zm1.3814961.6489017-.1796783 15.2976474c-.0955489 0-1.0342578.0119386-2.8161268.035816-1.7818691.0238773-3.3006293.0898911-4.5562806.1980414-1.2556514.1081503-1.9613144.2884008-2.1169891.5407514-.0955488.1924233-.5439291.273419-1.345141.2429871-.8012118-.0304319-1.3155441-.1776755-1.5429969-.4417308-.334654-.3843783-3.4558378-.5765674-9.36355164-.5765674v-15.3875385l-.96830576.3960828v16.2702977c6.4096947-.2041278 9.7760429-.0840388 10.0990445.3602669.2391051.276228.9864833.414342 2.2421347.414342.1915638 0 .4187835-.0210682.6816593-.0632047s.4810068-.0870821.6543929-.1348367c.1733862-.0477547.2719646-.0838048.2957353-.1081503.0838965-.1563732.9599161-.2675666 2.6280587-.3335805 1.6681426-.0660138 3.3213703-.0931684 4.9596831-.0814638l2.4392915.0182591v-16.2344816z"/>
</svg>
`;class Kt extends k{static get styles(){return M`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return Jt}}customElements.define("ia-icon-texts",Kt);function bt(){return{el:"#BookReader",showToolbar:!1,onePage:{autofit:"height"},enableFSLogoShortcut:!0,enableBookmarks:!1,enablePageResume:!1,enableTtsPlugin:!1,enableUrlPlugin:!1,defaults:"mode/1up",enableSearch:!0,searchInsideUrl:"/fulltext/inside.php",initialSearchTerm:null,imagesBaseURL:"/bookreader/BookReader/images/",defaultStartLeaf:0,titleLeaf:0,controls:{twoPage:{visible:!1},viewmode:{visible:!1}},bookType:"linerNotes"}}function Qt(r){var e;const t=r.brOptions,i={...bt(),...t},o=new window.BookReader(i),s=window.BookReader.prototype.getPageURI;o.getPageURI=(d,l=1,p=0)=>{const b=Math.pow(2,Math.floor(Math.log2(Math.max(1,l))));let f=s.call(o,d,b,p);return f+=f.indexOf("?")>-1?"&":"?",f=`${f}scale=${b}&rotate=${p}`,f},window.br=o;const a=(e=r?.data)===null||e===void 0?void 0:e.isRestricted;return window.dispatchEvent(new CustomEvent("contextmenu",{detail:{isRestricted:a}})),o}async function Xt(r){return await new Promise((t,i)=>{const o=new Image;o.onload=()=>t(o),o.onerror=i,o.src=r})}async function ei(r){const e=[];return await Promise.all(r.map(async t=>{let i;try{i=await Xt(t.uri)}catch{i=new Image(300,300)}console.log("^^^^^^^^^^^^^^ FETCH IMAGE ~~~~~~~",i,i.height,i.width);const o=r.indexOf(t);e[o]={...t,width:i.width,height:i.height}})),e}async function ti({images:r=[],itemIdentifier:e="",itemTitle:t="",baseHost:i="archive.org"}){const o=(await fetch(`https://${i}/metadata/${e}/metadata`).then(y=>y.json())).result||{},s=r.map((y,_)=>{const F=_%2===1?"L":"R";return console.log("imgPath",y),{uri:`https://${i}/download/${e}${y}`,leafNum:_,pageType:"Normal",pageSide:F}}),a=await ei(s),d=[];a.forEach((y,_)=>{if(_===0){d.push([y]);return}if(_%2===1){d.push([y]);return}_%2===0&&d[d.length-1].push(y)});const p={...{bookId:e,bookPath:`/download/${e}`,bookTitle:t,defaults:"mode/1up",dfaultStartLeaf:0,ppi:200,data:d},...bt(),enableSearch:!1,plugins:{textSelection:{enabled:!1}}},f={data:{streamOnly:!1,isRestricted:!1,id:e,subPrefix:e,bookUrl:`/details/${e}`},brOptions:p,metadata:o};return console.log("**** MANIFEST _---",f,p),f}var ii=u`
<svg
  viewBox="0 0 40 40"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="audioTitleID audioDescID"
>
  <title id="audioTitleID">Audio icon</title>
  <desc id="audioDescID">An illustration of an audio speaker.</desc>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g transform="translate(10, 8)" class="fill-color">
      <path
        d="M19.4264564,11.8585048 L19.4264564,20.7200433 C19.4264564,22.3657576 18.8838179,23.2519114 16.8489237,23.2519114 C12.2364969,23.125318 7.75972977,23.125318 3.14730298,23.2519114 C1.24806842,23.2519114 0.569770368,22.492351 0.569770368,20.7200433 L0.569770368,2.74377955 C0.569770368,1.09806526 1.11240881,0.211911416 3.14730298,0.211911416 C7.75972977,0.338504822 12.2364969,0.338504822 16.8489237,0.211911416 C18.7481583,0.211911416 19.4264564,0.971471855 19.4264564,2.74377955 C19.2907967,5.78202131 19.4264564,8.82026306 19.4264564,11.8585048 L19.4264564,11.8585048 Z M10.0659432,2.74377955 C8.16670861,2.74377955 6.67445288,4.13630702 6.67445288,5.90861471 C6.67445288,7.6809224 8.16670861,9.07344988 10.0659432,9.07344988 C11.9651777,9.07344988 13.4574335,7.6809224 13.4574335,5.90861471 C13.4574335,4.13630702 11.8295181,2.74377955 10.0659432,2.74377955 L10.0659432,2.74377955 Z M10.0659432,11.4787246 C7.21709133,11.4787246 5.04653754,13.6308125 5.04653754,16.1626806 C5.04653754,18.8211422 7.35275094,20.8466367 10.0659432,20.8466367 C12.914795,20.8466367 15.0853488,18.6945488 15.0853488,16.1626806 C15.0853488,13.6308125 12.7791354,11.4787246 10.0659432,11.4787246 L10.0659432,11.4787246 Z"
      ></path>
      <ellipse cx="10.2016028" cy="16.5690777" rx="1.35659611" ry="1.34075134"></ellipse>
    </g>
  </g>
</svg>
`;class ri extends k{static get styles(){return M`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return ii}}customElements.define("ia-icon-audio",ri);let ie=class extends k{constructor(){super(...arguments),this.iaIdentifier="",this.gradType=""}updated(e){e.has("iaIdentifier")&&this.setGradType()}hashStrToInt(e){return e.split("").reduce((t,i)=>t+i.charCodeAt(0),0)}setGradType(){let e=0;this.iaIdentifier?(e=this.hashStrToInt(this.iaIdentifier)%6,this.gradType=`grad${e}`):this.gradType="grad0",this.dispatchEvent(new CustomEvent("iaMusicNoImageAvailable",{detail:{gradient:e,gradType:this.gradType,identifier:this.iaIdentifier},bubbles:!0,composed:!0}))}render(){return u`
      <div class="no-image">
        <ia-icon-audio class=${this.gradType}></ia-icon-audio>
      </div>
    `}};ie.styles=M`
    ia-icon-audio {
      margin: auto;
      display: block;
      height: var(--imageHeight, 100%);
      width: var(--imageWidth, 100%);
      opacity: 0.8;
    }
    :host {
      height: 100%;
      width: 100%;
    }

    ia-icon-audio.grad0 {
      background: linear-gradient(
        hsl(340, 80%, 55%),
        hsl(0, 80%, 33%) 35%,
        hsl(0, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    ia-icon-audio.grad1 {
      background: linear-gradient(
        hsl(300, 80%, 55%),
        hsl(330, 80%, 33%) 35%,
        hsl(330, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    ia-icon-audio.grad2 {
      background: linear-gradient(
        hsl(200, 80%, 55%),
        hsl(230, 80%, 33%) 35%,
        hsl(230, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    ia-icon-audio.grad3 {
      background: linear-gradient(
        hsl(160, 80%, 55%),
        hsl(190, 80%, 33%) 35%,
        hsl(190, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    ia-icon-audio.grad4 {
      background: linear-gradient(
        hsl(250, 80%, 55%),
        hsl(280, 80%, 33%) 35%,
        hsl(280, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    ia-icon-audio.grad5 {
      background: linear-gradient(
        hsl(280, 80%, 55%),
        hsl(310, 80%, 33%) 35%,
        hsl(310, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }
  `;n([v({type:String,reflect:!0})],ie.prototype,"iaIdentifier",void 0);n([v({type:String,reflect:!0})],ie.prototype,"gradType",void 0);ie=n([O("iamusic-noimage")],ie);let x=class extends k{constructor(){super(...arguments),this.showAllPhotos=!1,this.baseHost="archive.org",this.signedIn=!1,this.itemIdentifier="",this.fullscreenActive=!1,this.reInitBrAtFullscreen=!1,this.noImageAvailable=!1,this.bindBrEvents=()=>{window.addEventListener("BookReader:PostInit",this.handleBrPostInit),window.addEventListener("BookReader:fullscreenToggled",()=>{var e;this.fullscreenActive=((e=this.bookreader)===null||e===void 0?void 0:e.isFullscreen())||!1;const t=this.fullscreenActive?"fullscreenOpened":"fullscreenClosed";this.dispatchEvent(new Event(t))})}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("BookReader:PostInit",this.handleBrPostInit)}firstUpdated(){this.bindBrEvents()}updated(e){e.has("linerNotesManifest")&&this.linerNotesManifest&&this.loadFreshBookReaderFromManifest(),e.has("showAllPhotos")&&this.showAllPhotos&&this.initBr(500)}render(){return this.noImageAvailable?u`
        <div class="no-images">
          <iamusic-noimage .iaIdentifier=${this.itemIdentifier}
            >no image available</iamusic-noimage
          >
        </div>
      `:u`
      <div
        class=${`flip-card ${this.showAllPhotos?"show-back":""} ${this.fullscreenActive?"fullscreenActive":""}`}
      >
        <div class="flip-card-inner">
          <div class="flip-card-front">${this.photoAlbumCover}</div>
          <div class="flip-card-back">${this.linerNotesView}</div>
        </div>
      </div>
    `}togglePhotoViewer(){this.showAllPhotos=!this.showAllPhotos,this.showAllPhotos||(this.fullscreenActive=!1,this.dispatchEvent(new Event("fullscreenClosed")))}get imageBaseUrl(){return`https://${this.baseHost}/download/${this.itemIdentifier}`}get primaryImage(){var e;if(this.linerNotesManifest){const t=(e=this.linerNotesManifest.brOptions.data)===null||e===void 0?void 0:e.flat()[0];return t?.uri||void 0}}get linerNotesView(){return u`
      <div class=${"photo-viewer-container"}>
        <button
          id="close-photo-viewer"
          @click=${()=>{var e;(e=this.bookreader)===null||e===void 0||e.exitFullScreen(),this.togglePhotoViewer()}}
        >
          <span class="sr-only">Click to close Photo Viewer.</span>
          <ia-icon-close-circle></ia-icon-close-circle>
        </button>
        <ia-bookreader
          .item=${this.linerNotesManifest}
          .baseHost=${this.baseHost}
          .signedIn=${this.signedIn}
          ><div slot="main"><slot name="main"></slot></div
        ></ia-bookreader>
      </div>
    `}get photoAlbumCover(){var e,t;const i=(t=(e=this.itemMD)===null||e===void 0?void 0:e.title)!==null&&t!==void 0?t:this.itemIdentifier,o=this.primaryImage?this.primaryImage:`//${this.baseHost}/services/img/${this.itemIdentifier}`;return u`
      <div class="cover-art">
        <button
          class="click-for-photos"
          @click=${async()=>{this.togglePhotoViewer()}}
        >
          <img
            src=${o}
            alt=${`primary image for ${i}`}
            @load=${s=>{const a=s.target,{width:d,height:l}=a.getBoundingClientRect();this.dispatchEvent(new CustomEvent("coverImageLoaded",{detail:{width:d,height:l,target:a}}))}}
          />
          <ia-icon-texts></ia-icon-texts>
          <span class="sr-only">See all photos for ${i}</span>
        </button>
      </div>
    `}handleBrPostInit(e){this.bookreader=e?.detail.props,window.br=this.bookreader,setTimeout(()=>{var t,i;(t=this.bookreader)===null||t===void 0||t.jumpToIndex(0),(i=this.bookreader)===null||i===void 0||i.resize()},1e3)}prepareLightDomHook(){var e,t;const i=(e=this.lightDomHook)===null||e===void 0?void 0:e.querySelector("div.bookreader-slot");i&&((t=this.lightDomHook)===null||t===void 0||t.removeChild(i))}async loadFreshBookReaderFromManifest(){await this.mountBookReaderLightDomHook(),await this.initBr()}async initBr(e=0){console.log("&&&& INIT BR"),await new Promise(t=>{setTimeout(()=>{var i,o;this.bookreader=this.linerNotesManifest&&Qt(this.linerNotesManifest),console.log("&&&& BR OPTIONS",(i=this.bookreader)===null||i===void 0?void 0:i.options),(o=this.bookreader)===null||o===void 0||o.init(),t()},e)})}async mountBookReaderLightDomHook(){await new Promise(e=>{var t,i,o;const s=(t=this.lightDomHook)===null||t===void 0?void 0:t.querySelector("div.bookreader-slot");s&&((i=this.lightDomHook)===null||i===void 0||i.removeChild(s));const a=document.createElement("div");a.setAttribute("slot","main"),a.classList.add("bookreader-slot");const d=document.createElement("div");d.classList.add("liner-notes"),a.append(d),(o=this.lightDomHook)===null||o===void 0||o.append(a),d.setAttribute("id","BookReader"),d.classList.add("BookReader"),e(!0)})}};x.styles=M`
    :host {
      display: block;
    }

    :host[fullscreenactive],
    .flip-card.fullscreenActive {
      position: absolute;
      inset: 0;
      height: var(--linerNotesFullscreenHeight, 100vh);
    }

    div.no-images {
      display: flex;
      height: inherit;
    }
    div.no-images * {
      --iconFillColor: white;
      --iconHeight: 250px;
      --iconWidth: 250px;
      margin: auto;
    }

    ia-icon-texts {
      height: 50px;
      width: 50px;
      --iconFillColor: white;
      display: block;
    }

    button {
      cursor: pointer;
      border: 1px solid transparent;
      background-color: transparent;
    }

    .cover-art,
    button.click-for-photos {
      height: inherit;
      position: relative;
      padding: 0;
    }

    button.click-for-photos {
      display: flex;
      margin: auto;
      min-height: 30%;
      min-width: 30%;
    }

    button.click-for-photos img {
      display: block;
      overflow: hidden;
      object-fit: contain;
      object-position: top;
      max-width: 100%;
      max-height: 100%;
      min-height: 250px;
      margin-top: 0;
    }

    button.click-for-photos ia-icon-texts,
    button#close-photo-viewer {
      position: absolute;
      top: 0;
      right: 0;
    }

    button span.sr-only {
      position: absolute;
      height: 1px;
      width: 1px;
      top: 0;
      left: 0;
      visibility: hidden;
    }

    button#close-photo-viewer {
      border: none;
      z-index: 2;
      padding: 0;
    }

    button#close-photo-viewer ia-icon-close-circle {
      display: block;
      padding: 10px;
      --iconHeight: 20px;
      --iconWidth: 20px;
      --iconFillColor: #fff;
    }

    .flip-card {
      width: 100%;
      height: 100%;
      perspective: 1000px;
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .flip-card.show-back .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card.show-back .flip-card-front .cover-art {
      transition: height 0.5s;
      height: 100%;
      visibility: hidden;
    }

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: transparent;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    .flip-card-back {
      transform: rotateY(180deg);
    }

    .photo-viewer-container {
      height: inherit;
    }

    ia-bookreader {
      display: block;
      /* height: inherit; */
      background-color: transparent;
    }
  `;n([v({type:Boolean,reflect:!0})],x.prototype,"showAllPhotos",void 0);n([v({type:String,attribute:!0,reflect:!0})],x.prototype,"baseHost",void 0);n([v({type:Boolean,reflect:!0})],x.prototype,"signedIn",void 0);n([v({type:String,reflect:!0})],x.prototype,"itemIdentifier",void 0);n([v({type:Object})],x.prototype,"itemMD",void 0);n([v({type:Object})],x.prototype,"linerNotesManifest",void 0);n([v({type:Object})],x.prototype,"bookreader",void 0);n([v({type:Boolean,reflect:!0})],x.prototype,"fullscreenActive",void 0);n([v({type:Boolean})],x.prototype,"reInitBrAtFullscreen",void 0);n([v({type:Boolean,reflect:!0})],x.prototype,"noImageAvailable",void 0);n([v({type:Object})],x.prototype,"lightDomHook",void 0);n([Z("button.click-for-photos img")],x.prototype,"coverImage",void 0);x=n([O("iaux-photo-viewer")],x);let Ee=class extends k{render(){return u`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};Ee.styles=M`
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
  `;Ee=n([O("ia-icon-label")],Ee);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Re=r=>(...e)=>({_$litDirective$:r,values:e});class Oe{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=Re(class extends Oe{constructor(r){var e;if(super(r),r.type!==$t.ATTRIBUTE||r.name!=="style"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{const i=r[t];return i==null?e:e+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[e]){const{style:t}=r.element;if(this.vt===void 0){this.vt=new Set;for(const i in e)this.vt.add(i);return this.render(e)}this.vt.forEach(i=>{e[i]==null&&(this.vt.delete(i),i.includes("-")?t.removeProperty(i):t[i]="")});for(const i in e){const o=e[i];o!=null&&(this.vt.add(i),i.includes("-")?t.setProperty(i,o):t[i]=o)}return R}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=Re(class extends Oe{constructor(r){var e;if(super(r),r.type!==$t.ATTRIBUTE||r.name!=="class"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var t,i;if(this.nt===void 0){this.nt=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((t=this.st)===null||t===void 0)&&t.has(s))&&this.nt.add(s);return this.render(e)}const o=r.element.classList;this.nt.forEach(s=>{s in e||(o.remove(s),this.nt.delete(s))});for(const s in e){const a=!!e[s];a===this.nt.has(s)||((i=this.st)===null||i===void 0?void 0:i.has(s))||(a?(o.add(s),this.nt.add(s)):(o.remove(s),this.nt.delete(s)))}return R}});var g;(function(r){r.ia="ia",r.beta="beta",r.youtube="youtube",r.spotify="spotify",r.webamp="webamp"})(g||(g={}));var S;(function(r){r.iaSamples="Samples",r.iaPlayer="Player",r.beta="Beta",r.spotify="Spotify",r.webamp="Webamp",r.youtube="YouTube"})(S||(S={}));const T={ia:u`<img
    class="ia"
    src="https://archive.org/images/music-theater/internet-archive.svg"
    alt="Internet Archive logo"
    style="height: 20px; width: 20px;"
  />`,beta:u`<img
    class="ia-beta"
    src="https://archive.org/images/music-theater/streaming.svg"
    alt="Internet Archive beta player logo"
    style="height: 20px; width: 20px;"
  />`,spotify:u`<img
    class="spotify"
    src="https://archive.org/images/music-theater/spotify.svg"
    alt="Spotify logo"
    style="display: block;"
  />`,webamp:u`<img
    class="webamp"
    src="https://archive.org/images/music-theater/webamp.svg"
    alt="webamp logo"
    style="height: 20px;"
  />`,youtube:u`<img
    class="youtube"
    src="https://archive.org/images/music-theater/youtube.svg"
    alt="youtube logo"
    style="height: 20px; width: 20px; display: block;"
  />`},fe=({label:r=S.iaPlayer,selected:e})=>{const i=Ve({filter:e?"invert(1)":"invert(0)",height:"20px",width:"20px"}),o=He({selected:e,"invert-icon-at-hover-selected":e});return u`
    <ia-icon-label class=${o}>
      <span slot="icon" style=${i}>${T.ia}</span>
      <span>${r}</span>
    </ia-icon-label>
  `},_t=r=>{const t=Ve({filter:r?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=He({selected:r,"invert-icon-at-hover-selected":r});return u`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${t}>${T.beta}</span>
      <span>${S.beta}</span>
    </ia-icon-label>
  `},kt=r=>u`
  <ia-icon-label class="${r?"selected":""}">
    <span slot="icon">${T.spotify}</span>
    <span>${S.spotify}</span>
  </ia-icon-label>
`,xt=r=>{const t=Ve({filter:r?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=He({selected:r,"invert-icon-at-hover-selected":r});return u`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${t}>${T.webamp}</span>
      <span>Webamp</span>
    </ia-icon-label>
  `},St=r=>u`
  <ia-icon-label class="${r?"selected":""}">
    <span slot="icon">${T.youtube}</span>
    <span>${S.youtube}</span>
  </ia-icon-label>
`,oi=({samples:r,onClick:e,href:t,selected:i})=>{const o=r?S.iaSamples:S.iaPlayer;return u`
    <a href=${t} @click=${()=>e()}>${fe({label:o,selected:i})}</button>
  `},si=({samples:r,onClick:e,selected:t})=>{const i=r?S.iaSamples:S.iaPlayer;return u`
    <button @click=${o=>e(o)} class="ia">
      ${fe({label:i,selected:t})}
    </button>
  `},ai=({onClick:r,selected:e})=>u`<button
  @click=${t=>r(t)}
  class="ia-beta"
>
  ${_t(e)}
</button>`,ni=({onClick:r,selected:e})=>u`<button
  @click=${t=>r(t)}
  class="sp"
>
  ${kt(e)}
</button>`,li=({onClick:r,href:e,selected:t})=>{const i=`${e}?webamp=default`;return u`
    <a href=${i} @click=${o=>r(o)} class="wa">${xt(t)}</button>
  `},di=({onClick:r,selected:e})=>u`<button
  @click=${t=>r(t)}
  class="yt"
>
  ${St(e)}
</button>`,ci=({samples:r,onClick:e,href:t,selectedOption:i})=>({url:t,selectedHandler:s=>{e(s)},label:fe({label:r?S.iaSamples:S.iaPlayer,selected:i===g.ia}),id:g.ia}),ui=({samples:r,onClick:e,selectedOption:t})=>({selectedHandler:o=>{e(o)},label:fe({label:r?S.iaSamples:S.iaPlayer,selected:t===g.ia}),id:g.ia}),hi=({onClick:r,selectedOption:e})=>({selectedHandler:i=>{r(i)},label:_t(e===g.beta),id:g.beta}),pi=({onClick:r,selectedOption:e})=>({selectedHandler:i=>{r(i)},label:kt(e===g.spotify),id:g.spotify}),gi=({href:r,onClick:e,selectedOption:t})=>{const i=o=>{e(o)};return{url:`${r}?webamp=default`,selectedHandler:i,label:xt(t===g.webamp),id:g.webamp}},vi=({onClick:r,selectedOption:e})=>({selectedHandler:i=>{r(i)},label:St(e===g.youtube),id:g.youtube}),fi=r=>{const{spotify:e,beta:t,youtube:i,selectedOption:o}=r;return[o===g.webamp?ci(r):ui(r),t?hi(r):null,e?pi(r):null,i?vi(r):null,gi(r)].filter(Boolean)};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:mi}=Rt,se=(r,e)=>e===void 0?r?._$litType$!==void 0:r?._$litType$===e,it=()=>document.createComment(""),rt=(r,e,t)=>{var i;const o=r._$AA.parentNode,s=e===void 0?r._$AB:e._$AA;if(t===void 0){const a=o.insertBefore(it(),s),d=o.insertBefore(it(),s);t=new mi(a,d,r,r.options)}else{const a=t._$AB.nextSibling,d=t._$AM,l=d!==r;if(l){let p;(i=t._$AQ)===null||i===void 0||i.call(t,r),t._$AM=r,t._$AP!==void 0&&(p=r._$AU)!==d._$AU&&t._$AP(p)}if(a!==s||l){let p=t._$AA;for(;p!==a;){const b=p.nextSibling;o.insertBefore(p,s),p=b}}}return t},yi={},ot=(r,e=yi)=>r._$AH=e,st=r=>r._$AH,wi=r=>{r._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=Re(class extends Oe{constructor(r){super(r),this.et=new WeakMap}render(r){return[r]}update(r,[e]){if(se(this.it)&&(!se(e)||this.it.strings!==e.strings)){const t=st(r).pop();let i=this.et.get(this.it.strings);if(i===void 0){const o=document.createDocumentFragment();i=yt(m,o),i.setConnected(!1),this.et.set(this.it.strings,i)}ot(i,[t]),rt(i,void 0,t)}if(se(e)){if(!se(this.it)||this.it.strings!==e.strings){const t=this.et.get(e.strings);if(t!==void 0){const i=st(t).pop();wi(r),rt(r,void 0,i),ot(r,[i])}}this.it=e}else this.it=void 0;return this.render(e)}});let B=class extends k{constructor(){super(...arguments),this.open=!1,this.displayCaret=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{}}renderOption(e){const{label:t,url:i=void 0,id:o}=e;let s;const a=this.selectedOption===o?"selected":"";return i?s=u`<a
        href=${i}
        @click=${()=>this.optionClicked(e)}
        >${t}</a
      >`:s=u`<button
        @click=${()=>this.optionClicked(e)}
      >
        ${t}
      </button>`,u`<li class=${a}>${s}</li>`}optionClicked(e){this.selectedOption=e.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:e}})),e.selectedHandler&&e?.selectedHandler(e)}toggleOptions(){this.open=!this.open}get caret(){return this.open?this.caretUp:this.caretDown}get dropdownState(){return this.open?"open":"closed"}get caretUp(){return Ze`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
      fill=""></path>
  </svg>`}get caretDown(){return Ze`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
    fill=""></path>
  </svg>`}get availableOptions(){return this.options.filter(e=>this.selectedOption!==e.id)}render(){return u`
      <div class="ia-dropdown-group">
        <button @click=${this.toggleOptions} class="click-main">
          <span class="cta sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.displayCaret?u`<span class="caret">${this.caret}</span>`:m}
        </button>

        <ul class="dropdown-main ${this.dropdownState}">
          ${this.availableOptions.map(e=>this.renderOption(e))}
        </ul>
      </div>
    `}};B.styles=M`
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
  `;n([v({type:Boolean,attribute:!0})],B.prototype,"open",void 0);n([v({type:Boolean,attribute:!0})],B.prototype,"displayCaret",void 0);n([v({type:String,attribute:!0})],B.prototype,"selectedOption",void 0);n([v({type:Array})],B.prototype,"options",void 0);n([v({type:String})],B.prototype,"optionGroup",void 0);n([v({type:Function})],B.prototype,"optionSelected",void 0);B=n([O("ia-dropdown")],B);const $i=M`
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
`;var ge;(function(r){r.postInit="postInit",r.channelChange="channelChange"})(ge||(ge={}));let A=class extends k{constructor(){super(...arguments),this.youtube=!1,this.spotify=!1,this.beta=!1,this.webamp=!0,this.samples=!1,this.backgroundTheme="dark",this.selected=g.ia,this.displayStyle="radio",this.url=""}firstUpdated(){this.dispatchEvent(new CustomEvent(ge.postInit,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}emitChannelChanged(){this.dispatchEvent(new CustomEvent(ge.channelChange,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}iaClicked(){this.selected!==g.ia&&(this.selected=g.ia,this.emitChannelChanged())}betaClicked(){this.selected!==g.beta&&(this.selected=g.beta,this.emitChannelChanged())}spotifyClicked(){this.selected!==g.spotify&&(this.selected=g.spotify,this.emitChannelChanged())}webampClicked(){this.selected!==g.webamp&&(this.selected=g.webamp,this.emitChannelChanged())}youtubeClicked(){this.selected!==g.youtube&&(this.selected=g.youtube,this.emitChannelChanged())}dropdownOptionSelected(e){this.selected=e.id,this.emitChannelChanged(),this.iaDropdown.open=!1}get iaLinkSelector(){const e=this.selected===g.ia?"selected":"";return u`
      <li class=${e}>
        ${oi({samples:this.samples,selected:this.selected===g.ia,onClick:()=>this.iaClicked(),href:this.url})}
      </li>
    `}get iaButtonSelector(){const e=this.selected===g.ia?"selected":"";return u`
      <li class=${e}>
        ${si({samples:this.samples,selected:this.selected===g.ia,onClick:()=>this.iaClicked()})}
      </li>
    `}get iaBetaSelector(){const e=this.selected===g.beta?"selected":"";return u`
      <li class=${e}>
        ${ai({selected:this.selected===g.beta,onClick:()=>this.betaClicked()})}
      </li>
    `}get spotifySelector(){const e=this.selected===g.spotify?"selected":"";return u`
      <li class=${e}>
        ${ni({selected:this.selected===g.spotify,onClick:()=>this.spotifyClicked()})}
      </li>
    `}get webampSelector(){const e=this.selected===g.webamp?"selected":"";return u`
      <li class=${e}>
        ${li({href:this.url||window.location.href,selected:this.selected===g.webamp,onClick:()=>this.webampClicked()})}
      </li>
    `}get youtubeSelector(){const e=this.selected===g.youtube?"selected":"";return u`
      <li class=${e}>
        ${di({selected:this.selected===g.youtube,onClick:()=>this.youtubeClicked()})}
      </li>
    `}get properIaSelector(){return this.selected===g.webamp?this.iaLinkSelector:this.iaButtonSelector}toggleDisplayStyle(){const e=this.displayStyle==="dropdown"?"radio":"dropdown";this.displayStyle=e}shouldShowChannelType(e){const t=this.selected===e;return this.displayStyle==="radio"?!0:!(this.displayStyle==="dropdown"&&t)}get dropdownOptions(){const{samples:e,beta:t,spotify:i,webamp:o,youtube:s,url:a,selected:d}=this;return fi({selectedOption:d,samples:!!e,beta:t,spotify:i,webamp:o,youtube:s,href:a,onClick:this.dropdownOptionSelected.bind(this)})}get currentlySelectedIcon(){switch(this.selected){case g.beta:return T.beta;case g.spotify:return T.spotify;case g.youtube:return T.youtube;case g.webamp:return T.webamp;default:return T.ia}}get dropdown(){return u`
      <ia-dropdown
        displayCaret
        .options=${this.dropdownOptions}
        .selectedOption=${this.selected}
        class=${this.backgroundTheme}
      >
        <span slot="dropdown-label">${this.currentlySelectedIcon}</span>
      </ia-dropdown>
    `}get radioView(){return u`
      <div id="selector-title"><h4>Play from:</h4></div>
      <div>
        <ul>
          ${this.properIaSelector} ${this.beta?this.iaBetaSelector:m}
          ${this.youtube?this.youtubeSelector:m}
          ${this.spotify?this.spotifySelector:m}
          ${this.webamp?this.webampSelector:m}
        </ul>
      </div>
    `}render(){return u`
      <section
        id=${this.displayStyle}
        class="${this.displayStyle} ${this.backgroundTheme}"
      >
        ${bi(this.displayStyle==="radio"?this.radioView:this.dropdown)}
      </section>
    `}};A.styles=[M`
      :host {
        display: block;
      }

      :host(:focus) {
        outline: none;
      }

      section.radio ul,
      section.radio h4 {
        color: #fff;
      }

      section.radio.light h4 {
        color: #222;
      }

      ia-dropdown.light {
        --channel-selector-dropdown-text-color: #222;
        color: var(--channel-selector-dropdown-text-color, #222);
        --dropdownCaretColor: var(--channel-selector-dropdown-text-color, #222);
      }

      ia-dropdown {
        --dropdownBgColor: #333;
        --dropdownHoverBgColor: #474747;
        color: var(--channel-selector-dropdown-text-color, #fff);
        --dropdownCaretColor: var(--channel-selector-dropdown-text-color, #fff);
      }

      ia-dropdown.light img.ia,
      ia-dropdown.light img.ia-beta,
      ia-dropdown.light img.webamp {
        filter: invert(1);
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
    `,$i];n([v({attribute:!0,type:Boolean,reflect:!0})],A.prototype,"youtube",void 0);n([v({attribute:!0,type:Boolean,reflect:!0})],A.prototype,"spotify",void 0);n([v({attribute:!0,type:Boolean,reflect:!0})],A.prototype,"beta",void 0);n([v({attribute:!0,type:Boolean,reflect:!0})],A.prototype,"webamp",void 0);n([v({attribute:!0,type:Boolean,reflect:!0})],A.prototype,"samples",void 0);n([v({attribute:!0,type:String,reflect:!0})],A.prototype,"backgroundTheme",void 0);n([v({type:String,reflect:!0})],A.prototype,"selected",void 0);n([v({type:String,reflect:!0})],A.prototype,"displayStyle",void 0);n([v({type:String})],A.prototype,"url",void 0);n([Z("ia-dropdown")],A.prototype,"iaDropdown",void 0);A=n([O("channel-selector")],A);let re=class extends k{constructor(){super(...arguments),this.iaSpotifyUrn="",this.display=!1}get spotifyUrl(){return!this.iaSpotifyUrn||!this.iaSpotifyUrn.match(/urn:spotify:/g)?"":`https://open.spotify.com/embed/${this.iaSpotifyUrn.replace(/urn:spotify:/g,"").replace(/:/g,"/")}`}render(){const e=this.spotifyUrl;return e?u`
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
    `:u`<h3>Invalid Spotify URI: ${this.iaSpotifyUrn}</h3>`}static get styles(){return[M`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}};n([v({type:String,reflect:!0})],re.prototype,"iaSpotifyUrn",void 0);n([v({type:Boolean,reflect:!0})],re.prototype,"display",void 0);n([Z("iframe")],re.prototype,"iframe",void 0);re=n([O("spotify-player")],re);let Y=class extends k{constructor(){super(...arguments),this.iaYouTubeUrn="",this.display=!1,this.baseHost="https://archive.org"}get youTubeUrl(){if(!this.iaYouTubeUrn||!this.iaYouTubeUrn.match(/urn:youtube:/g))return"";const t=this.iaYouTubeUrn.replace(/urn:youtube:/g,"").replace(/:/g,"/"),i=`origin=${this.baseHost}&widgetid=1&autoplay=1&rel=0`;return`https://www.youtube.com/embed/${t}?${i}`}render(){const e=this.youTubeUrl;return e?u`
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
    `:u`<h3>Invalid YouTube ID: ${this.iaYouTubeUrn}</h3>`}static get styles(){return[M`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}};n([v({type:String,reflect:!0})],Y.prototype,"iaYouTubeUrn",void 0);n([v({type:Boolean,reflect:!0})],Y.prototype,"display",void 0);n([v({type:String})],Y.prototype,"baseHost",void 0);n([Z("iframe")],Y.prototype,"iframe",void 0);Y=n([O("youtube-player")],Y);class _i extends V{constructor(e,t="archive.org"){super(e),this.isSegmented=!1,this.private=!1,this.details=null,this.orig="",this.image="",this.duration=0,this.sources=[],this._playlistTrack=null,this.details=e.details,this.baseHost=t}setPlaylistInfo(e){this._playlistTrack=e,this.orig=e.orig,this.image=e.image,this.duration=e.duration,this.sources=e.sources}get url(){return`https://${this.baseHost}/${this.name}`}get title(){var e;return((e=this._playlistTrack)===null||e===void 0?void 0:e.title)||(this===null||this===void 0?void 0:this.title)||this.name}get youtubeId(){return this.externalIds.find(e=>e.match(/youtube/gi))||""}get spotifyId(){return this.externalIds.find(e=>e.match(/spotify/gi))||""}get externalIds(){return Array.isArray(this.rawValue["external-identifier"])?this.rawValue["external-identifier"]:[this.rawValue["external-identifier"]||""]}}class ki{constructor(e,t){this.tracks=[],this.images=[],this.linerNotes=[],this.tracksAreSegmented=!1,this.baseHost="archive.org",this.relatedFiles=[],this.rawPlaylistTracks=[],this.item=e,this.rawPlaylistTracks=t,this.tracks=t,this.filterFiles(this.item.files)}get title(){var e,t;return((t=(e=this.item.metadata)===null||e===void 0?void 0:e.title)===null||t===void 0?void 0:t.values.join("; "))||""}get creator(){var e,t,i,o,s,a;return!((t=(e=this.item.metadata)===null||e===void 0?void 0:e.creator)===null||t===void 0)&&t.values?(o=(i=this.item.metadata)===null||i===void 0?void 0:i.creator)===null||o===void 0?void 0:o.values.join("; "):!((s=this.item.metadata.rawMetadata)===null||s===void 0)&&s.artist?(a=this.item.metadata.rawMetadata)===null||a===void 0?void 0:a.artist:""}get youtubeId(){return this.externalIds.find(e=>e.match(/youtube/gi))||""}get spotifyId(){return this.externalIds.find(e=>e.match(/spotify/gi))||""}get externalIds(){var e;if(!this.item.metadata.rawMetadata)return[""];const t=this.item.metadata["external-identifier"];return!((e=t?.values)===null||e===void 0)&&e.length?t.values:[t?.value||""]}get youtubeTracks(){const e=this.tracks.filter(t=>t.youtubeId);return this.albumTrackOption("yt")!==void 0&&e.unshift(this.albumTrackOption("yt")),e}get spotifyTracks(){const e=this.tracks.filter(t=>t.spotifyId);return this.albumTrackOption("sp")!==void 0&&e.unshift(this.albumTrackOption("sp")),e}get albumImage(){const e=this.images.find(o=>o.format==="Item Image"),t=`https://${this.baseHost}/download/${this.item.metadata.identifier}/`;if(e)return`${t}${e.name}`;const i=this.images.find(o=>{const s=["Item Image","JPEG Thumb"];return o.source==="original"&&!s.includes(o.format)});return i?`${t}${i.name}`:`${t}__ia_thumb.jpg`}albumTrackOption(e){const t={title:"Full Album",orig:"",image:"",duration:"-- : --",track:"0",sources:[]};if(e==="yt"&&this.youtubeId)return{...t,youtubeId:this.youtubeId};if(e==="sp"&&this.spotifyId)return{...t,spotifyId:this.spotifyId}}isAlbumRelatedFile(e){var t,i;return!!(!((t=e.name.match(/.(ffp|md5)$/g))===null||t===void 0)&&t.length)&&!!(!((i=e.original)===null||i===void 0)&&i.length)&&e.source==="derivative"}isValidAudioFile(e=""){var t;return!!(!((t=e.match(/(mp3|ogg|flac|m4a|wma|aiff|aac|aa|ra|ram|shn|wav|wave|opus)$/gi))===null||t===void 0)&&t.length)}isValidImageFile(e=""){var t;return!!(!((t=e.match(/.(png|jpg|jpeg)$/gi))===null||t===void 0)&&t.length)}isValidImageFileFormat(e=""){var t;return!!(!((t=e.match(/(png|jpg|jpeg)/gi))===null||t===void 0)&&t.length)}isValidSegmentFile(e=""){var t;return!!(!((t=e.match(/_segments.(json|xml)$/gi))===null||t===void 0)&&t.length)}isSpectrogram(e=""){var t;return!!(!((t=e.match(/spectrogram/gi))===null||t===void 0)&&t.length)}isSampleMP3(e=""){var t;return!!(!((t=e.match(/_sample\.mp3$/gi))===null||t===void 0)&&t.length)}hasScannedLinerNotes(e=""){var t;return!!(!((t=e.match(/_jp2.(zip|tar)/gi))===null||t===void 0)&&t.length)}filterFiles(e){const t=[],i={};e.forEach(s=>{var a,d;const l=s.rawValue,p=this.isValidAudioFile(l.name);if(this.isAlbumRelatedFile(l)){this.relatedFiles.push(l);return}if(this.isValidSegmentFile(l.name)&&(this.tracksAreSegmented=!0,this.relatedFiles.push(l),l.original&&this.isValidAudioFile(l.name)&&!i[l.original]&&(i[l.original]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0})),l.source==="original"&&!i[l.name]&&p&&(i[l.name]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0}),l.original&&this.isValidAudioFile(l.original)&&!i[l.original]&&(i[l.original]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0}),this.hasScannedLinerNotes(l.name)&&this.linerNotes.push(l),this.isValidImageFile(l.name)){l.original&&this.isValidAudioFile(l.original)?i[l.original].spectrogram=l:t.push(l);return}if(l.original&&this.isValidAudioFile(l.original)&&!this.isValidAudioFile(l.name)){i[l.original].related.push(l);return}if(!this.isValidAudioFile(l.name)||!this.isValidImageFile(l.name)&&!this.isValidAudioFile(l.name))return;const b=this.isValidSegmentFile(l.original)&&this.isValidAudioFile(l.name);if(l.source==="original"&&this.isValidAudioFile(l.name)||b){i[l.name]||(i[l.name]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0}),i[l.name].primary=l;return}if(((a=l.name.match(/_sample\.mp3$/))===null||a===void 0?void 0:a.length)&&l.original){i[l.original].sampleMp3=new V(l);return}this.isValidAudioFile(l.name)&&!this.isSampleMP3(l.name)&&this.isValidAudioFile(l.original)&&l.original&&(!((d=l.name.match(/.mp3$/))===null||d===void 0)&&d.length?i[l.original].fullMp3=l:i[l.original].related.push(l))}),this.images=t;const o=[];this.tracks.forEach((s,a)=>{const d=i[s.orig].primary,l=new _i({...s,...d,details:i[s.orig]},"archive.org");l.setPlaylistInfo(s),o[a]=l}),this.tracks=o}}await U(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/jquery-3.js"),[]);await U(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/BookReader.js"),[]);await U(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/plugins/plugin.search.js"),[]);await U(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/plugins/plugin.tts.js"),[]);await U(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/plugins/plugin.archive_analytics.js"),[]);await U(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/plugins/plugin.text_selection.js"),[]);await U(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/src/ia-bookreader/ia-bookreader.js"),[]);const At=await fetch("./liner-notes-manifest-demo.json").then(r=>r.json());console.log("*** defaultLinerNotesManifest",At);const ne=await fetch("./loose-images-demo.json").then(r=>r.json());console.log("*** defaultLooseImagesData",ne);const xi=[{id:"cd_first-life_various-artists",desc:"CD - with no Liner notes, yes YT, yes SP, no Webamp"},{id:"lp_the-dark-side-of-the-moon_pink-floyd",desc:"LP - Pink Floyd Dark Side of the Moon"},{id:"cd_the-dark-side-of-the-moon_pink-floyd",desc:"CD - Pink Floyd Dark Side of the Moon"},{id:"capitol-15045-b-cigarettes-whiskey-and-wild-wild-women",desc:"78 - w/o jp2 (only 1 item image)"},{id:"bestofdollyparto00part",desc:"LP - older"},{id:"lp_dancing-tonight_freddy-martin-and-his-orchestra",desc:"LP - current, ~ 2020"},{id:"cd_beethoven-complete-works-for-string-trio_the-adaskin-string-trio",desc:"what_cd"},{id:"wcd_message-in-a-box-th_the-police_flac_lossless_807968",desc:"Irregular Photo - (portrait)"},{id:"lak-JC_Burris-James_Booker",desc:"No photo + long track list"},{id:"wcd_various-artiststhe-best-of-country-music_flac_lossless_29887623",desc:"Complilation, various artists"},{id:"lp_emperor-concerto_ludwig-van-beethoven-arthur-rubinstein-bos",desc:"Track names, multiple but same as album artist (should be omitted)"},{id:"illegal-art",desc:"3 column track list wide view pagination check"},{id:"wcd_borghild_die-warzau_mp3_320_1648819",desc:"Track time display, 60 seconds adds another minute. should display as 10:00"},{id:"cd_aaliyah_aaliyah-static-from-playa-timbaland",desc:'Has 3rd party "Full Album". Clicking on Full Album should highlight full album'}];let $=class extends k{constructor(){super(...arguments),this.viewToShow="components",this.selectedByDropdown=g.beta,this.errorMsg="",this.selectedByDropdownOnload="",this.selectedByRadio=g.beta,this.selectedByRadioOnload="",this.albumId="",this.bgColor="dark",this.albumMd=null,this.albumPlaylist=null,this.album=null,this.componentToShow="photos",this.signedIn=!1,this.photoDisplay="looseImages"}firstUpdated(){this.startAtWebamp&&(this.selectedByRadio=g.webamp,this.selectedByDropdown=g.webamp)}updated(e){var t,i,o,s;e.has("viewToShow")&&((t=document.querySelector("body"))===null||t===void 0||t.removeAttribute(e.get("viewToShow")),(i=document.querySelector("body"))===null||i===void 0||i.setAttribute(this.viewToShow,"")),e.has("albumId")&&this.albumId&&this.albumInfo(),e.has("bgColor")&&(this.bgColor==="dark"?(o=document.querySelector("body"))===null||o===void 0||o.classList.remove("light"):(s=document.querySelector("body"))===null||s===void 0||s.classList.add("light")),e.has("photoDisplay")&&this.photoDisplay==="looseImages"&&this.displayLooseImages()}get startAtWebamp(){return new URLSearchParams(location.search.slice(1)).has("webamp")}get playerByRadio(){return this.selectedByRadio===g.spotify?u`<spotify-player
        iAspotifyUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`:this.selectedByRadio===g.youtube?u`<youtube-player
        iaYouTubeUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`:u`<h2>Player type: ${this.selectedByRadio}</h2>`}get playerByDropdown(){return this.selectedByDropdown===g.spotify?u`<spotify-player
        iAspotifyUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`:this.selectedByDropdown===g.youtube?u`<youtube-player
        iaYouTubeUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`:u`<h2>Player type: ${this.selectedByDropdown}</h2>`}render(){return u`
      <section id="app-root">
        <h1>
          Music Player Things:
          <button @click=${()=>this.viewToShow="components"}>
            Components
          </button>
          <button @click=${()=>this.viewToShow="data"}>Data</button>

          ${this.viewToShow==="data"?u`<div>
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
              </div>`:m}
        </h1>
        <hr />
        <hr />
        ${this.viewToShow==="components"?this.componentsView:this.dataView}
      </section>
    `}async albumInfo(){this.errorMsg="";try{const e=await fetch(`https://archive.org/metadata/${this.albumId}`).then(i=>i.json()),t=await fetch(`https://archive.org/services/playlist/${this.albumId}`).then(i=>i.json());this.albumPlaylist=t,this.albumMd=new wt(e),this.album=new ki(this.albumMd,this.albumPlaylist),window.Album=this.album}catch(e){this.errorMsg=e.message}}formInputSubmit(e){e.preventDefault(),this.albumId=this.input.value}get albumStats(){if(!this.album)return m;const e=this.album.spotifyTracks.reduce((i,o)=>(i.push(o?.track||"n/a"),i),[]).join(", "),t=this.album.youtubeTracks.reduce((i,o)=>(i.push(o?.track||"n/a"),i),[]).join(", ");return u`
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
    `}get demoClicks(){return u`
      <section id="demo-clicks">
        ${xi.map(e=>{const t=this.albumId===e.id;return u`
            <div class=${`demo ${t?"selected":""}`}>
              <button class="demo-go" @click=${()=>this.albumId=e.id}>
                GO
              </button>
              <p><b>ID: ${e.id}</b></p>
              <p>${e.desc}</p>
            </div>
          `})}
      </section>
    `}get dataView(){return u`
      <section id="data">
        <div></div>
        ${this.demoClicks}
        ${this.errorMsg?u`<h2 id="error">ERROR: ${this.errorMsg}</h2>`:m}

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
    `}get channelSelectors(){const e=`${location.origin}/demo`;return u`
      <section id="components">
        <channel-selector
          .backgroundTheme=${this.bgColor}
          spotify
          youtube
          beta
          samples
          .selected=${this.startAtWebamp?g.webamp:this.selectedByRadio}
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
        <hr />
        <channel-selector
          .backgroundTheme=${this.bgColor}
          spotify
          youtube
          beta
          .displayStyle=${"dropdown"}
          .url=${e}
          @postInit=${t=>{this.selectedByDropdownOnload=t.detail.channel}}
          @channelChange=${t=>{this.selectedByDropdown=t.detail.channel}}
          .selected=${this.startAtWebamp?g.webamp:this.selectedByDropdown?this.selectedByDropdown:g.beta}
        >
        </channel-selector>
        <section class="player">${this.playerByDropdown}</section>
        <section class="details">
          <h2>Selected by dropdown</h2>
          <h2>on first load: ${this.selectedByDropdownOnload}</h2>
          <h2>on change: ${this.selectedByDropdown}</h2>
        </section>
      </section>
    `}async displayLooseImages(){this.photoViewerEl.prepareLightDomHook();const e=await ti({images:ne.image_filenames,itemIdentifier:ne.item.identifier,itemTitle:ne.item.title,baseHost:"archive.org"});console.log("####### generateBookReaderManifest",e),this.photoViewerEl.linerNotesManifest=e,this.photoViewerEl.itemMD=e.metadata,this.photoViewerEl.itemIdentifier=e.metadata.identifier}get photoViewer(){var e;let t,i,o;switch(this.photoDisplay){case"noData":i="foo-data-12345-ddd";break;case"linerNotes":this.photoDisplay==="linerNotes"&&(t=At,i=(e=t?.metadata)===null||e===void 0?void 0:e.identifier,o=t?.metadata);break}return u`
      <section id="components">
        <div>
          <h3>Various Views</h3>
          <button @click=${()=>this.photoDisplay="noData"}>
            No data
          </button>
          <button @click=${()=>this.photoDisplay="linerNotes"}>
            with liner notes
          </button>
          <button
            @click=${()=>{this.photoDisplay="looseImages",this.displayLooseImages()}}
          >
            loose images viewer
          </button>
        </div>
        <br />
        ${this.photoDisplay==="noData"?u`<iaux-photo-viewer
              noimageavailable
              .itemIdentifier=${Math.random().toString(36).slice(2)}
            ></iaux-photo-viewer>`:m}
        ${this.photoDisplay==="looseImages"?u`<iaux-photo-viewer
              .lightDomHook=${this}
              ?signedIn=${this.signedIn}
              baseHost="archive.org"
              ?showLinerNotes=${!0}
              @fullscreenOpened=${()=>{console.log("THIS FS OPENED ",this.scrollHeight),this.style.setProperty("--linerNotesFullscreenHeight",`${Math.round(window.innerHeight)}px`),setTimeout(()=>{this.scrollIntoView()},0)}}
              @coverImageLoaded=${s=>{const{height:a}=s.detail;document.body.removeAttribute("--brInTheaterHeight"),document.body.style.setProperty("--brInTheaterHeight",`${a}px`)}}
              ><div slot="main">
                <slot name="main"><p>Placeholder text</p></slot>
              </div></iaux-photo-viewer
            >`:u`<iaux-photo-viewer
              .linerNotesManifest=${t}
              .lightDomHook=${this}
              baseHost="archive.org"
              .itemIdentifier=${i}
              .itemMD=${o}
              ?signedIn=${this.signedIn}
              ?showLinerNotes=${this.photoDisplay==="linerNotes"}
              @fullscreenOpened=${()=>{console.log("THIS FS OPENED ",this.scrollHeight),this.style.setProperty("--linerNotesFullscreenHeight",`${Math.round(window.innerHeight)}px`),setTimeout(()=>{this.scrollIntoView()},0)}}
              @coverImageLoaded=${s=>{const{height:a}=s.detail;document.body.removeAttribute("--brInTheaterHeight"),document.body.style.setProperty("--brInTheaterHeight",`${a}px`)}}
              ><div slot="main">
                <slot name="main"><p>Placeholder text</p></slot>
              </div></iaux-photo-viewer
            > `}
      </section>
    `}get componentsView(){return u`
      <div id="menu">
        <button
          @click=${()=>{if(this.bgColor==="light"){this.bgColor="dark";return}this.bgColor==="dark"&&(this.bgColor="light")}}
        >
          Change background theme - currently: ${this.bgColor}
        </button>
        <div id="components-menu">
          <p>Show:</p>
          <button
            @click=${()=>{this.componentToShow="channels"}}
          >
            Channel Selectors
          </button>
          <button
            @click=${()=>{this.componentToShow="photos"}}
          >
            Photos
          </button>
        </div>
      </div>
      <hr />
      ${this.componentToShow==="channels"?this.channelSelectors:m}
      ${this.componentToShow==="photos"?this.photoViewer:m}
      <slot name="foo"></slot>
    `}};$.styles=M`
    :host {
      display: block;
      position: relative;
      font-size: 16px;
    }

    h1 {
      margin-top: 0;
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

    iaux-photo-viewer {
      display: block;
      border: 1px solid red;
      width: 450px;
      height: 450px;
      /* height: 720px; */
    }
  `;n([v({type:String,reflect:!0})],$.prototype,"viewToShow",void 0);n([v({type:String})],$.prototype,"selectedByDropdown",void 0);n([v({type:String})],$.prototype,"errorMsg",void 0);n([v({type:String})],$.prototype,"selectedByDropdownOnload",void 0);n([v({type:String})],$.prototype,"selectedByRadio",void 0);n([v({type:String})],$.prototype,"selectedByRadioOnload",void 0);n([v({type:String})],$.prototype,"albumId",void 0);n([v({type:String})],$.prototype,"bgColor",void 0);n([v({type:Object,attribute:!1})],$.prototype,"albumMd",void 0);n([v({type:Object,attribute:!1})],$.prototype,"albumPlaylist",void 0);n([v({type:Object,attribute:!1})],$.prototype,"album",void 0);n([v({type:String})],$.prototype,"componentToShow",void 0);n([Z("input#md-search")],$.prototype,"input",void 0);n([Z("iaux-photo-viewer")],$.prototype,"photoViewerEl",void 0);n([v({type:Boolean})],$.prototype,"signedIn",void 0);n([v({type:String})],$.prototype,"photoDisplay",void 0);$=n([O("app-root")],$);