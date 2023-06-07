const Tt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};Tt();const Mt="modulepreload",Ue={},It="./",z=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${It}${i}`,i in Ue)return;Ue[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":Mt,r||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),r)return new Promise((d,n)=>{a.addEventListener("load",d),a.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function l(o,e,t,i){var r=arguments.length,s=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,e,t,i);else for(var d=o.length-1;d>=0;d--)(a=o[d])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=window,Be=ae.ShadowRoot&&(ae.ShadyCSS===void 0||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ne=Symbol(),Fe=new WeakMap;class lt{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Be&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Fe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Fe.set(t,e))}return e}toString(){return this.cssText}}const Et=o=>new lt(typeof o=="string"?o:o+"",void 0,Ne),T=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[s+1],o[0]);return new lt(t,o,Ne)},Pt=(o,e)=>{Be?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=ae.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,o.appendChild(i)})},ze=Be?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Et(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ye;const le=window,je=le.trustedTypes,Bt=je?je.emptyScript:"",We=le.reactiveElementPolyfillSupport,Ae={toAttribute(o,e){switch(e){case Boolean:o=o?Bt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},dt=(o,e)=>e!==o&&(e==e||o==o),be={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:dt};class W extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=be){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||be}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(ze(r))}else e!==void 0&&t.push(ze(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Pt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=be){var r;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const a=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:Ae).toAttribute(t,i.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=r.getPropertyOptions(s),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:Ae;this._$El=s,this[s]=d.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||dt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}W.finalized=!0,W.elementProperties=new Map,W.elementStyles=[],W.shadowRootOptions={mode:"open"},We?.({ReactiveElement:W}),((ye=le.reactiveElementVersions)!==null&&ye!==void 0?ye:le.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var we;const de=window,Y=de.trustedTypes,qe=Y?Y.createPolicy("lit-html",{createHTML:o=>o}):void 0,ce="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,Re="?"+P,Nt=`<${Re}>`,G=document,X=()=>G.createComment(""),ee=o=>o===null||typeof o!="object"&&typeof o!="function",ct=Array.isArray,ut=o=>ct(o)||typeof o?.[Symbol.iterator]=="function",$e=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ye=/-->/g,Ge=/>/g,L=RegExp(`>|${$e}(?:([^\\s"'>=/]+)(${$e}*=${$e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ze=/'/g,Je=/"/g,ht=/^(?:script|style|textarea|title)$/i,pt=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),h=pt(1),Ke=pt(2),O=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Qe=new WeakMap,q=G.createTreeWalker(G,129,null,!1),vt=(o,e)=>{const t=o.length-1,i=[];let r,s=e===2?"<svg>":"",a=Q;for(let n=0;n<t;n++){const c=o[n];let b,m,g=-1,_=0;for(;_<c.length&&(a.lastIndex=_,m=a.exec(c),m!==null);)_=a.lastIndex,a===Q?m[1]==="!--"?a=Ye:m[1]!==void 0?a=Ge:m[2]!==void 0?(ht.test(m[2])&&(r=RegExp("</"+m[2],"g")),a=L):m[3]!==void 0&&(a=L):a===L?m[0]===">"?(a=r??Q,g=-1):m[1]===void 0?g=-2:(g=a.lastIndex-m[2].length,b=m[1],a=m[3]===void 0?L:m[3]==='"'?Je:Ze):a===Je||a===Ze?a=L:a===Ye||a===Ge?a=Q:(a=L,r=void 0);const j=a===L&&o[n+1].startsWith("/>")?" ":"";s+=a===Q?c+Nt:g>=0?(i.push(b),c.slice(0,g)+ce+c.slice(g)+P+j):c+P+(g===-2?(i.push(void 0),n):j)}const d=s+(o[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[qe!==void 0?qe.createHTML(d):d,i]};class te{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,a=0;const d=e.length-1,n=this.parts,[c,b]=vt(e,t);if(this.el=te.createElement(c,i),q.currentNode=this.el.content,t===2){const m=this.el.content,g=m.firstChild;g.remove(),m.append(...g.childNodes)}for(;(r=q.nextNode())!==null&&n.length<d;){if(r.nodeType===1){if(r.hasAttributes()){const m=[];for(const g of r.getAttributeNames())if(g.endsWith(ce)||g.startsWith(P)){const _=b[a++];if(m.push(g),_!==void 0){const j=r.getAttribute(_.toLowerCase()+ce).split(P),K=/([.?@])?(.*)/.exec(_);n.push({type:1,index:s,name:K[2],strings:j,ctor:K[1]==="."?mt:K[1]==="?"?gt:K[1]==="@"?yt:oe})}else n.push({type:6,index:s})}for(const g of m)r.removeAttribute(g)}if(ht.test(r.tagName)){const m=r.textContent.split(P),g=m.length-1;if(g>0){r.textContent=Y?Y.emptyScript:"";for(let _=0;_<g;_++)r.append(m[_],X()),q.nextNode(),n.push({type:2,index:++s});r.append(m[g],X())}}}else if(r.nodeType===8)if(r.data===Re)n.push({type:2,index:s});else{let m=-1;for(;(m=r.data.indexOf(P,m+1))!==-1;)n.push({type:7,index:s}),m+=P.length-1}s++}}static createElement(e,t){const i=G.createElement("template");return i.innerHTML=e,i}}function F(o,e,t=o,i){var r,s,a,d;if(e===O)return e;let n=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const c=ee(e)?void 0:e._$litDirective$;return n?.constructor!==c&&((s=n?._$AO)===null||s===void 0||s.call(n,!1),c===void 0?n=void 0:(n=new c(o),n._$AT(o,t,i)),i!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[i]=n:t._$Cl=n),n!==void 0&&(e=F(o,n._$AS(o,e.values),n,i)),e}class ft{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:r}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:G).importNode(i,!0);q.currentNode=s;let a=q.nextNode(),d=0,n=0,c=r[0];for(;c!==void 0;){if(d===c.index){let b;c.type===2?b=new J(a,a.nextSibling,this,e):c.type===1?b=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(b=new bt(a,this,e)),this.u.push(b),c=r[++n]}d!==c?.index&&(a=q.nextNode(),d++)}return s}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class J{constructor(e,t,i,r){var s;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cm=(s=r?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=F(this,e,t),ee(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==O&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ut(e)?this.k(e):this.g(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}g(e){this._$AH!==y&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.T(G.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=te.createElement(r.h,this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.p(i);else{const a=new ft(s,this),d=a.v(this.options);a.p(i),this.T(d),this._$AH=a}}_$AC(e){let t=Qe.get(e.strings);return t===void 0&&Qe.set(e.strings,t=new te(e)),t}k(e){ct(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new J(this.S(X()),this.S(X()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class oe{constructor(e,t,i,r,s){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const s=this.strings;let a=!1;if(s===void 0)e=F(this,e,t,0),a=!ee(e)||e!==this._$AH&&e!==O,a&&(this._$AH=e);else{const d=e;let n,c;for(e=s[0],n=0;n<s.length-1;n++)c=F(this,d[i+n],t,n),c===O&&(c=this._$AH[n]),a||(a=!ee(c)||c!==this._$AH[n]),c===y?e=y:e!==y&&(e+=(c??"")+s[n+1]),this._$AH[n]=c}a&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class mt extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}}const Rt=Y?Y.emptyScript:"";class gt extends oe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==y?this.element.setAttribute(this.name,Rt):this.element.removeAttribute(this.name)}}class yt extends oe{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=F(this,e,t,0))!==null&&i!==void 0?i:y)===O)return;const r=this._$AH,s=e===y&&r!==y||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==y&&(r===y||s);s&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class bt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){F(this,e)}}const Dt={P:ce,A:P,M:Re,C:1,L:vt,D:ft,R:ut,V:F,I:J,H:oe,N:gt,U:yt,F:mt,B:bt},Xe=de.litHtmlPolyfillSupport;Xe?.(te,J),((we=de.litHtmlVersions)!==null&&we!==void 0?we:de.litHtmlVersions=[]).push("2.7.0");const wt=(o,e,t)=>{var i,r;const s=(i=t?.renderBefore)!==null&&i!==void 0?i:e;let a=s._$litPart$;if(a===void 0){const d=(r=t?.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=a=new J(e.insertBefore(X(),d),d,void 0,t??{})}return a._$AI(o),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _e,ke;class x extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=wt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return O}}x.finalized=!0,x._$litElement$=!0,(_e=globalThis.litElementHydrateSupport)===null||_e===void 0||_e.call(globalThis,{LitElement:x});const et=globalThis.litElementPolyfillSupport;et?.({LitElement:x});((ke=globalThis.litElementVersions)!==null&&ke!==void 0?ke:globalThis.litElementVersions=[]).push("3.3.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=o=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(o,e):((t,i)=>{const{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(a){customElements.define(t,a)}}})(o,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}};function f(o){return(e,t)=>t!==void 0?((i,r,s)=>{r.constructor.createProperty(s,i)})(o,e,t):Ot(o,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vt(o){return f({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=({finisher:o,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const s=(r=t.originalKey)!==null&&r!==void 0?r:t.key,a=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return o!=null&&(a.finisher=function(d){o(d,s)}),a}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),o?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(o,e){return Ht({descriptor:t=>{const i={get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var s,a;return this[r]===void 0&&(this[r]=(a=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o))!==null&&a!==void 0?a:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe;((xe=window.HTMLSlotElement)===null||xe===void 0?void 0:xe.prototype.assignedElements)!=null;function u(o){let e,t,i;return typeof o=="object"?(e=o.hashFunction,t=o.expiring,i=o.tags):e=o,(r,s,a)=>{if(a.value!=null)a.value=tt(a.value,e,t,i);else if(a.get!=null)a.get=tt(a.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const Se=new Map;function tt(o,e,t=0,i){const r=Symbol("__memoized_map__");return function(...s){let a;this.hasOwnProperty(r)||Object.defineProperty(this,r,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[r];if(Array.isArray(i))for(const n of i)Se.has(n)?Se.get(n).push(d):Se.set(n,[d]);if(e||s.length>0||t>0){let n;e===!0?n=s.map(m=>m.toString()).join("!"):e?n=e.apply(this,s):n=s[0];const c=`${n}__timestamp`;let b=!1;if(t>0)if(!d.has(c))b=!0;else{let m=d.get(c);b=Date.now()-m>t}d.has(n)&&!b?a=d.get(n):(a=o.apply(this,s),d.set(n,a),t>0&&d.set(c,Date.now()))}else{const n=this;d.has(n)?a=d.get(n):(a=o.apply(this,s),d.set(n,a))}return a}}class Te{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}Te.shared=new Te;class D{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}D.shared=new D;class ue{parseValue(e){return D.shared.parseValue(e)}}ue.shared=new ue;class ie{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let r=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(r=new Date(r.getTime()+r.getTimezoneOffset()*1e3*60)),r}}ie.shared=new ie;class he{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((r,s)=>{const a=parseFloat(r);if(Number.isNaN(a))return t=!0,0;const d=e.length-1-s,n=60**d;return a*Math.floor(n)}).reduce((r,s)=>r+s,0);return t?void 0:i}}he.shared=new he;class Me{parseValue(e){if(typeof e=="string")return e}}Me.shared=new Me;class Lt{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const r of this.separators)if(i=t.split(r),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),r=[];return i.forEach(s=>{s!==void 0&&r.push(s)}),r}}class Ie{parseValue(e){if(typeof e=="string")return e}}Ie.shared=new Ie;class pe{parseValue(e){return String(e)}}pe.shared=new pe;class M{constructor(e,t){this.parser=e,this.rawValue=t}get values(){return this.parseRawValue()}get value(){return this.values[0]}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const r=this.parser.parseValue(i);Array.isArray(r)?t.push(...r):r!==void 0&&t.push(r)}),t}}l([u()],M.prototype,"values",null);l([u()],M.prototype,"value",null);class Ut extends M{constructor(e){super(Te.shared,e)}}class E extends M{constructor(e){super(ie.shared,e)}}class Ce extends M{constructor(e){super(he.shared,e)}}class A extends M{constructor(e){super(D.shared,e)}}class w extends M{constructor(e){super(pe.shared,e)}}class Ft extends M{constructor(e){super(Ie.shared,e)}}class it extends M{constructor(e){super(ue.shared,e)}}class zt extends M{constructor(e){super(Me.shared,e)}}class jt extends M{constructor(e,t){super(t,e)}}class Wt extends jt{constructor(e){const t=new Lt(pe.shared);super(e,t)}}class v{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.identifier}get addeddate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.addeddate?new E(this.rawMetadata.addeddate):void 0}get audio_codec(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_codec?new w(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_sample_rate?new A(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.avg_rating?new A(this.rawMetadata.avg_rating):void 0}get collection(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection?new w(this.rawMetadata.collection):void 0}get collections_raw(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collections_raw?new w(this.rawMetadata.collections_raw):void 0}get collection_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection_size?new it(this.rawMetadata.collection_size):void 0}get contributor(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.contributor?new w(this.rawMetadata.contributor):void 0}get coverage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.coverage?new w(this.rawMetadata.coverage):void 0}get creator(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.creator?new w(this.rawMetadata.creator):void 0}get date(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.date?new E(this.rawMetadata.date):void 0}get description(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.description?new w(this.rawMetadata.description):void 0}get downloads(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.downloads?new A(this.rawMetadata.downloads):void 0}get duration(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.duration?new Ce(this.rawMetadata.duration):void 0}get"external-identifier"(){var e,t;return!((e=this.rawMetadata)===null||e===void 0)&&e["external-identifier"]?new w((t=this.rawMetadata)===null||t===void 0?void 0:t["external-identifier"]):void 0}get files_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.files_count?new A(this.rawMetadata.files_count):void 0}get indexdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.indexdate?new E(this.rawMetadata.indexdate):void 0}get isbn(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.isbn?new w(this.rawMetadata.isbn):void 0}get issue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.issue?new w(this.rawMetadata.issue):void 0}get item_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_count?new A(this.rawMetadata.item_count):void 0}get item_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_size?new it(this.rawMetadata.item_size):void 0}get language(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.language?new w(this.rawMetadata.language):void 0}get length(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.length?new Ce(this.rawMetadata.length):void 0}get lineage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.lineage?new w(this.rawMetadata.lineage):void 0}get month(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.month?new A(this.rawMetadata.month):void 0}get mediatype(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.mediatype?new zt(this.rawMetadata.mediatype):void 0}get noindex(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.noindex?new Ut(this.rawMetadata.noindex):void 0}get notes(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.notes?new w(this.rawMetadata.notes):void 0}get num_favorites(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_favorites?new A(this.rawMetadata.num_favorites):void 0}get num_reviews(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_reviews?new A(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_edition?new w(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_work?new w(this.rawMetadata.openlibrary_work):void 0}get page_progression(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.page_progression?new Ft(this.rawMetadata.page_progression):void 0}get partner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.partner?new w(this.rawMetadata.partner):void 0}get ppi(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.ppi?new A(this.rawMetadata.ppi):void 0}get publicdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publicdate?new E(this.rawMetadata.publicdate):void 0}get publisher(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publisher?new w(this.rawMetadata.publisher):void 0}get reviewdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.reviewdate?new E(this.rawMetadata.reviewdate):void 0}get runtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.runtime?new Ce(this.rawMetadata.runtime):void 0}get scanner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.scanner?new w(this.rawMetadata.scanner):void 0}get source(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.source?new w(this.rawMetadata.source):void 0}get start_localtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_localtime?new E(this.rawMetadata.start_localtime):void 0}get start_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_time?new E(this.rawMetadata.start_time):void 0}get stop_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.stop_time?new E(this.rawMetadata.stop_time):void 0}get subject(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.subject?new Wt(this.rawMetadata.subject):void 0}get taper(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.taper?new w(this.rawMetadata.taper):void 0}get title(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.title?new w(this.rawMetadata.title):void 0}get transferer(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.transferer?new w(this.rawMetadata.transferer):void 0}get track(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.track?new A(this.rawMetadata.track):void 0}get type(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.type?new w(this.rawMetadata.type):void 0}get uploader(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.uploader?new w(this.rawMetadata.uploader):void 0}get utc_offset(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.utc_offset?new A(this.rawMetadata.utc_offset):void 0}get venue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.venue?new w(this.rawMetadata.venue):void 0}get volume(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.volume?new w(this.rawMetadata.volume):void 0}get week(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.week?new A(this.rawMetadata.week):void 0}get year(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.year?new E(this.rawMetadata.year):void 0}}l([u()],v.prototype,"addeddate",null);l([u()],v.prototype,"audio_codec",null);l([u()],v.prototype,"audio_sample_rate",null);l([u()],v.prototype,"avg_rating",null);l([u()],v.prototype,"collection",null);l([u()],v.prototype,"collections_raw",null);l([u()],v.prototype,"collection_size",null);l([u()],v.prototype,"contributor",null);l([u()],v.prototype,"coverage",null);l([u()],v.prototype,"creator",null);l([u()],v.prototype,"date",null);l([u()],v.prototype,"description",null);l([u()],v.prototype,"downloads",null);l([u()],v.prototype,"duration",null);l([u()],v.prototype,"external-identifier",null);l([u()],v.prototype,"files_count",null);l([u()],v.prototype,"indexdate",null);l([u()],v.prototype,"isbn",null);l([u()],v.prototype,"issue",null);l([u()],v.prototype,"item_count",null);l([u()],v.prototype,"item_size",null);l([u()],v.prototype,"language",null);l([u()],v.prototype,"length",null);l([u()],v.prototype,"lineage",null);l([u()],v.prototype,"month",null);l([u()],v.prototype,"mediatype",null);l([u()],v.prototype,"noindex",null);l([u()],v.prototype,"notes",null);l([u()],v.prototype,"num_favorites",null);l([u()],v.prototype,"num_reviews",null);l([u()],v.prototype,"openlibrary_edition",null);l([u()],v.prototype,"openlibrary_work",null);l([u()],v.prototype,"page_progression",null);l([u()],v.prototype,"partner",null);l([u()],v.prototype,"ppi",null);l([u()],v.prototype,"publicdate",null);l([u()],v.prototype,"publisher",null);l([u()],v.prototype,"reviewdate",null);l([u()],v.prototype,"runtime",null);l([u()],v.prototype,"scanner",null);l([u()],v.prototype,"source",null);l([u()],v.prototype,"start_localtime",null);l([u()],v.prototype,"start_time",null);l([u()],v.prototype,"stop_time",null);l([u()],v.prototype,"subject",null);l([u()],v.prototype,"taper",null);l([u()],v.prototype,"title",null);l([u()],v.prototype,"transferer",null);l([u()],v.prototype,"track",null);l([u()],v.prototype,"type",null);l([u()],v.prototype,"uploader",null);l([u()],v.prototype,"utc_offset",null);l([u()],v.prototype,"venue",null);l([u()],v.prototype,"volume",null);l([u()],v.prototype,"week",null);l([u()],v.prototype,"year",null);class H{constructor(e){this.rawValue=e}get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size?ue.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length?he.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height?D.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width?D.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track?D.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}}l([u()],H.prototype,"size",null);l([u()],H.prototype,"length",null);l([u()],H.prototype,"height",null);l([u()],H.prototype,"width",null);l([u()],H.prototype,"track",null);class me{constructor(e){this.rawValue=e}get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate?ie.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate?ie.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars?D.shared.parseValue(this.rawValue.stars):void 0}}l([u()],me.prototype,"reviewdate",null);l([u()],me.prototype,"createdate",null);l([u()],me.prototype,"stars",null);class De{constructor(e){var t,i;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(r=>new H(r)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new v(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(i=e.reviews)===null||i===void 0?void 0:i.map(r=>new me(r))}}class qt{constructor(e){this.numFound=e.numFound,this.start=e.start,this.docs=e.docs.map(t=>new v(t)),this.aggregations=e.aggregations}}class Yt{constructor(e){this.rawResponse=e,this.responseHeader=e.responseHeader,this.response=new qt(e.response)}}var U;(function(o){o.networkError="SearchService.NetworkError",o.itemNotFound="SearchService.ItemNotFound",o.decodingError="SearchService.DecodingError",o.searchEngineError="SearchService.SearchEngineError"})(U||(U={}));class Ee extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class Gt{static aggregateSearchParamsAsString(e){if(e.advancedParams){const t=e.advancedParams.map(r=>({terms:r}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field} ${e.direction}`}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("q",e.query),t.append("output","json"),e.rows&&t.append("rows",String(e.rows)),e.page&&t.append("page",String(e.page)),e.fields&&t.append("fl",e.fields.join(",")),e.sort){const r=e.sort.map(s=>this.sortParamsAsString(s));t.append("sort",r.join(","))}const i=e.aggregations;if(i){const r=this.aggregateSearchParamsAsString(i);r&&t.append("user_aggs",r)}return t}}class Zt{constructor(e){var t;if(this.baseUrl=(t=e?.baseUrl)!==null&&t!==void 0?t:"archive.org",e?.includeCredentials!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,e?.scope!==void 0)this.requestScope=e.scope;else{const r=new URL(window.location.href).searchParams.get("scope");r&&(this.requestScope=r)}}async performSearch(e){const i=Gt.generateURLSearchParams(e).toString(),r=`https://${this.baseUrl}/advancedsearch.php?${i}`;return this.fetchUrl(r)}async fetchMetadata(e,t){const i=t?`/${t}`:"",r=`https://${this.baseUrl}/metadata/${e}${i}`;return this.fetchUrl(r,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var i;const r=new URL(e);this.requestScope&&r.searchParams.set("scope",this.requestScope);let s;try{const a=(i=t?.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(r.href,a)}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(U.networkError,d)}try{const a=await s.json(),d=a.error;if(d){const n=a.forensics;return this.getErrorResult(U.searchEngineError,d,n)}else return{success:a}}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(U.decodingError,d)}}getErrorResult(e,t,i){return{error:new Ee(e,t,i)}}}class rt{constructor(e){this.searchBackend=e}async search(e){const t=await this.searchBackend.performSearch(e);return t.error?t:{success:new Yt(t.success)}}async fetchMetadata(e){var t;const i=await this.searchBackend.fetchMetadata(e);return i.error?i:((t=i.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new Ee(U.itemNotFound)}:{success:new De(i.success)}}async fetchMetadataValue(e,t){var i;const r=await this.searchBackend.fetchMetadata(e,t);return r.error?r:((i=r.success)===null||i===void 0?void 0:i.result)===void 0?{error:new Ee(U.itemNotFound)}:{success:r.success.result}}}rt.default=new rt(new Zt);var Jt=h`
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
`;class Kt extends x{static get styles(){return T`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor, #999);
      }
    `}render(){return Jt}}customElements.define("ia-icon-close-circle",Kt);function $t(){return{el:"#BookReader",showToolbar:!1,onePage:{autofit:"height"},enableFSLogoShortcut:!0,enableBookmarks:!1,enablePageResume:!1,enableTtsPlugin:!1,enableUrlPlugin:!1,defaults:"mode/1up",enableSearch:!0,searchInsideUrl:"/fulltext/inside.php",initialSearchTerm:null,imagesBaseURL:"/bookreader/BookReader/images/",defaultStartLeaf:0,titleLeaf:0,controls:{twoPage:{visible:!1},viewmode:{visible:!1}},bookType:"linerNotes"}}function Qt(o){var e;const t=o.brOptions,i={...$t(),...t},r=new window.BookReader(i),s=window.BookReader.prototype.getPageURI;r.getPageURI=(d,n=1,c=0)=>{const b=Math.pow(2,Math.floor(Math.log2(Math.max(1,n))));let m=s.call(r,d,b,c);return m+=m.indexOf("?")>-1?"&":"?",m=`${m}scale=${b}&rotate=${c}`,m},window.br=r;const a=(e=o?.data)===null||e===void 0?void 0:e.isRestricted;return window.dispatchEvent(new CustomEvent("contextmenu",{detail:{isRestricted:a}})),r}async function Xt(o){return await new Promise((t,i)=>{const r=new Image;r.onload=()=>t(r),r.onerror=i,r.src=o})}async function ei(o){const e=[];return await Promise.all(o.map(async t=>{let i;try{i=await Xt(t.uri)}catch{i=new Image(300,300)}console.log("^^^^^^^^^^^^^^ FETCH IMAGE ~~~~~~~",i,i.height,i.width);const r=o.indexOf(t);e[r]={...t,width:i.width,height:i.height}})),e}async function ti({images:o=[],itemIdentifier:e="",itemTitle:t="",baseHost:i="archive.org"}){const r=(await fetch(`https://${i}/metadata/${e}/metadata`).then(g=>g.json())).result||{},s=o.map((g,_)=>{const j=_%2===1?"L":"R";return console.log("imgPath",g),{uri:`https://${i}/download/${e}${g}`,leafNum:_,pageType:"Normal",pageSide:j}}),a=await ei(s),d=[];a.forEach((g,_)=>{if(_===0){d.push([g]);return}if(_%2===1){d.push([g]);return}_%2===0&&d[d.length-1].push(g)});const c={...{bookId:e,bookPath:`/download/${e}`,bookTitle:t,defaults:"mode/1up",dfaultStartLeaf:0,ppi:200,data:d},...$t(),enableSearch:!1,plugins:{textSelection:{enabled:!1}}},m={data:{streamOnly:!1,isRestricted:!1,id:e,subPrefix:e,bookUrl:`/details/${e}`},brOptions:c,metadata:r};return console.log("**** MANIFEST _---",m,c),m}var ii=h`
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
`;class ri extends x{static get styles(){return T`
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
    `}render(){return ii}}customElements.define("ia-icon-audio",ri);let re=class extends x{constructor(){super(...arguments),this.iaIdentifier="",this.gradType=""}updated(e){e.has("iaIdentifier")&&this.setGradType()}hashStrToInt(e){return e.split("").reduce((t,i)=>t+i.charCodeAt(0),0)}setGradType(){let e=0;this.iaIdentifier?(e=this.hashStrToInt(this.iaIdentifier)%6,this.gradType=`grad${e}`):this.gradType="grad0",this.dispatchEvent(new CustomEvent("iaMusicNoImageAvailable",{detail:{gradient:e,gradType:this.gradType,identifier:this.iaIdentifier},bubbles:!0,composed:!0}))}render(){return h`
      <div class="no-image">
        <ia-icon-audio class=${this.gradType}></ia-icon-audio>
      </div>
    `}};re.styles=T`
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

    ia-icon-audio {
      border: 1px solid #fff8;
    }

    ia-icon-audio.grad0 {
      background: linear-gradient(
        hsl(300, 80%, 55%),
        hsl(330, 80%, 33%) 35%,
        hsl(330, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    ia-icon-audio.grad1 {
      background: linear-gradient(
        hsl(200, 80%, 55%),
        hsl(230, 80%, 33%) 35%,
        hsl(230, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    ia-icon-audio.grad2 {
      background: linear-gradient(
        hsl(160, 80%, 55%),
        hsl(190, 80%, 33%) 35%,
        hsl(190, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    ia-icon-audio.grad3 {
      background: linear-gradient(
        hsl(250, 80%, 55%),
        hsl(280, 80%, 33%) 35%,
        hsl(280, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    ia-icon-audio.grad4 {
      background: linear-gradient(
        hsl(280, 80%, 55%),
        hsl(310, 80%, 33%) 35%,
        hsl(310, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }

    ia-icon-audio.grad5 {
      background: linear-gradient(
        hsl(340, 80%, 55%),
        hsl(0, 80%, 33%) 35%,
        hsl(0, 80%, 22%) 70%,
        hsl(0, 0%, 0%)
      );
    }
  `;l([f({type:String,reflect:!0,attribute:!0})],re.prototype,"iaIdentifier",void 0);l([f({type:String,reflect:!0})],re.prototype,"gradType",void 0);re=l([R("iamusic-noimage")],re);var oi=h`
  <svg
    id="more-inside-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
  >
    <path
      d="m96.8125698 30.0518396-12.4391845 11.1531924c-6.4532715-6.3905169-12.9677985-11.5730208-19.5435809-15.5475116s-12.5677954-6.5813314-17.976039-7.8205218c-5.4082436-1.2391903-10.6069142-1.851437-15.5960116-1.8369986-4.9890974.0149552-9.3415934.6580779-13.0574879 1.9296264-3.7158945 1.2715486-6.9635733 2.5779337-9.74303641 3.9191553-2.77946307 1.3412217-4.90933068 2.5788117-6.38960283 3.7127699l-2.06762666 1.7089107c7.29513996.9354669 14.2472986 2.8747038 20.856476 5.8177108 6.6091773 2.9430069 12.0620941 6.1781707 16.3587501 9.7054913 4.2966561 3.5273205 8.0790367 6.9908189 11.3471418 10.3904951 3.2681052 3.3996761 5.6276868 6.2214567 7.0787448 8.4653416l2.1765871 3.3658274-13.0786842 11.7265792 55.2609844 8.2580923z"
      fill-rule="evenodd"
      class="fill-color"
    />
  </svg>
`;let k=class extends x{constructor(){super(...arguments),this.showAllPhotos=!1,this.baseHost="archive.org",this.signedIn=!1,this.itemIdentifier="",this.fullscreenActive=!1,this.reInitBrAtFullscreen=!1,this.noImageAvailable=!1,this.backgroundTheme="dark",this.bindBrEvents=()=>{window.addEventListener("BookReader:PostInit",this.handleBrPostInit),window.addEventListener("BookReader:fullscreenToggled",()=>{var e;this.fullscreenActive=((e=this.bookreader)===null||e===void 0?void 0:e.isFullscreen())||!1;const t=this.fullscreenActive?"fullscreenOpened":"fullscreenClosed";this.dispatchEvent(new Event(t))})}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("BookReader:PostInit",this.handleBrPostInit)}firstUpdated(){this.bindBrEvents()}updated(e){e.has("linerNotesManifest")&&this.linerNotesManifest&&this.loadFreshBookReaderFromManifest(),e.has("showAllPhotos")&&this.showAllPhotos&&this.initBr(500)}render(){if(this.noImageAvailable)return h`
        <div class="no-images">
          <iamusic-noimage .iaIdentifier=${this.itemIdentifier}
            >no image available</iamusic-noimage
          >
        </div>
      `;const e=this.backgroundTheme==="light"?"light":"",t=this.showAllPhotos?"show-back":"",i=this.fullscreenActive?"fullscreenActive":"";return h`
      <div
        class=${`flip-card ${t} ${i} ${e}`}
      >
        <div class="flip-card-inner">
          <div class="flip-card-front">${this.photoAlbumCover}</div>
          <div class="flip-card-back">${this.linerNotesView}</div>
        </div>
      </div>
    `}togglePhotoViewer(){this.showAllPhotos=!this.showAllPhotos,this.showAllPhotos||(this.fullscreenActive=!1,this.dispatchEvent(new Event("fullscreenClosed")))}get imageBaseUrl(){return`https://${this.baseHost}/download/${this.itemIdentifier}`}get primaryImage(){var e;if(this.linerNotesManifest){const t=(e=this.linerNotesManifest.brOptions.data)===null||e===void 0?void 0:e.flat()[0];return t?.uri||void 0}}get linerNotesView(){return h`
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
    `}get photoAlbumCover(){var e,t;const i=(t=(e=this.itemMD)===null||e===void 0?void 0:e.title)!==null&&t!==void 0?t:this.itemIdentifier,r=this.primaryImage?this.primaryImage:`//${this.baseHost}/services/img/${this.itemIdentifier}`;return h`
      <div class="cover-art">
        <button
          class="click-for-photos"
          @click=${async()=>{this.togglePhotoViewer()}}
        >
          <img
            src=${r}
            alt=${`primary image for ${i}`}
            @load=${s=>{const a=s.target,{width:d,height:n}=a.getBoundingClientRect();this.dispatchEvent(new CustomEvent("coverImageLoaded",{detail:{width:d,height:n,target:a}}))}}
          />
          <span class="sr-only">See all photos for ${i}</span>
          
          <div id="see-more-cta">
            <p><span>See more</span> <span>${oi}</span></p>
          </div>

          </div>
        </button>
      </div>
    `}handleBrPostInit(e){this.bookreader=e?.detail.props,window.br=this.bookreader,setTimeout(()=>{var t,i;(t=this.bookreader)===null||t===void 0||t.jumpToIndex(0),(i=this.bookreader)===null||i===void 0||i.resize()},1e3)}prepareLightDomHook(){var e,t;const i=(e=this.lightDomHook)===null||e===void 0?void 0:e.querySelector("div.bookreader-slot");i&&((t=this.lightDomHook)===null||t===void 0||t.removeChild(i))}async loadFreshBookReaderFromManifest(){await this.mountBookReaderLightDomHook(),await this.initBr()}async initBr(e=0){console.log("&&&& INIT BR"),await new Promise(t=>{setTimeout(()=>{var i,r;this.bookreader=this.linerNotesManifest&&Qt(this.linerNotesManifest),console.log("&&&& BR OPTIONS",(i=this.bookreader)===null||i===void 0?void 0:i.options),(r=this.bookreader)===null||r===void 0||r.init(),t()},e)})}async mountBookReaderLightDomHook(){await new Promise(e=>{var t,i,r;const s=(t=this.lightDomHook)===null||t===void 0?void 0:t.querySelector("div.bookreader-slot");s&&((i=this.lightDomHook)===null||i===void 0||i.removeChild(s));const a=document.createElement("div");a.setAttribute("slot","main"),a.classList.add("bookreader-slot");const d=document.createElement("div");d.classList.add("liner-notes"),a.append(d),(r=this.lightDomHook)===null||r===void 0||r.append(a),d.setAttribute("id","BookReader"),d.classList.add("BookReader"),e(!0)})}};k.styles=T`
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
      min-width: 25%;
    }

    button.click-for-photos img {
      display: block;
      overflow: hidden;
      object-fit: contain;
      object-position: top;
      max-width: 100%;
      margin-top: 18px;
      max-height: calc(var(--linerNotesInTheaterHeight, 100%) - 30px);
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

    /* see more cta */
    .flip-card #see-more-cta {
      font-family: 'Helvetica Neue Bold', Helvetica, Arial, sans-serif;
      font-weight: bold;
      font-size: 14px;
      color: white;
      align-self: end;
      margin: 0;

      position: absolute;
      top: 0;
      right: 0;
    }
    .flip-card #see-more-cta p {
      display: inline-block;
      margin: 0;
      width: 90px;
    }
    .flip-card #see-more-cta svg {
      position: absolute;
      width: 16px;
      margin-left: 0px;
      top: 0;
      right: 0;
      margin-top: -2px;
    }
    .flip-card #see-more-cta .fill-color {
      fill: white;
    }

    .flip-card.light #see-more-cta {
      color: #222;
    }
    .flip-card.light #see-more-cta .fill-color {
      fill: #222;
    }
  `;l([f({type:Boolean,reflect:!0})],k.prototype,"showAllPhotos",void 0);l([f({type:String,attribute:!0,reflect:!0})],k.prototype,"baseHost",void 0);l([f({type:Boolean,reflect:!0})],k.prototype,"signedIn",void 0);l([f({type:String,reflect:!0,attribute:!0})],k.prototype,"itemIdentifier",void 0);l([f({type:Object})],k.prototype,"itemMD",void 0);l([f({type:Object})],k.prototype,"linerNotesManifest",void 0);l([f({type:Object})],k.prototype,"bookreader",void 0);l([f({type:Boolean,reflect:!0})],k.prototype,"fullscreenActive",void 0);l([f({type:Boolean})],k.prototype,"reInitBrAtFullscreen",void 0);l([f({type:Boolean,reflect:!0})],k.prototype,"noImageAvailable",void 0);l([f({attribute:!0,type:String,reflect:!0})],k.prototype,"backgroundTheme",void 0);l([f({type:Object})],k.prototype,"lightDomHook",void 0);l([V("button.click-for-photos img")],k.prototype,"coverImage",void 0);k=l([R("iaux-photo-viewer")],k);let Pe=class extends x{render(){return h`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};Pe.styles=T`
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
  `;Pe=l([R("ia-icon-label")],Pe);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Oe=o=>(...e)=>({_$litDirective$:o,values:e});class Ve{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=Oe(class extends Ve{constructor(o){var e;if(super(o),o.type!==_t.ATTRIBUTE||o.name!=="style"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((e,t)=>{const i=o[t];return i==null?e:e+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(o,[e]){const{style:t}=o.element;if(this.vt===void 0){this.vt=new Set;for(const i in e)this.vt.add(i);return this.render(e)}this.vt.forEach(i=>{e[i]==null&&(this.vt.delete(i),i.includes("-")?t.removeProperty(i):t[i]="")});for(const i in e){const r=e[i];r!=null&&(this.vt.add(i),i.includes("-")?t.setProperty(i,r):t[i]=r)}return O}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=Oe(class extends Ve{constructor(o){var e;if(super(o),o.type!==_t.ATTRIBUTE||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var t,i;if(this.nt===void 0){this.nt=new Set,o.strings!==void 0&&(this.st=new Set(o.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((t=this.st)===null||t===void 0)&&t.has(s))&&this.nt.add(s);return this.render(e)}const r=o.element.classList;this.nt.forEach(s=>{s in e||(r.remove(s),this.nt.delete(s))});for(const s in e){const a=!!e[s];a===this.nt.has(s)||((i=this.st)===null||i===void 0?void 0:i.has(s))||(a?(r.add(s),this.nt.add(s)):(r.remove(s),this.nt.delete(s)))}return O}});var p;(function(o){o.ia="ia",o.beta="beta",o.youtube="youtube",o.spotify="spotify",o.webamp="webamp"})(p||(p={}));var S;(function(o){o.iaSamples="Samples",o.iaPlayer="Player",o.beta="Beta",o.spotify="Spotify",o.webamp="Webamp",o.youtube="YouTube"})(S||(S={}));const I={ia:h`<img
    class="ia"
    src="https://archive.org/images/music-theater/internet-archive.svg"
    alt="Internet Archive logo"
    style="height: 20px; width: 20px;"
  />`,beta:h`<img
    class="ia-beta"
    src="https://archive.org/images/music-theater/streaming.svg"
    alt="Internet Archive beta player logo"
    style="height: 20px; width: 20px;"
  />`,spotify:h`<img
    class="spotify"
    src="https://archive.org/images/music-theater/spotify.svg"
    alt="Spotify logo"
    style="display: block;"
  />`,webamp:h`<img
    class="webamp"
    src="https://archive.org/images/music-theater/webamp.svg"
    alt="webamp logo"
    style="height: 20px;"
  />`,youtube:h`<img
    class="youtube"
    src="https://archive.org/images/music-theater/youtube.svg"
    alt="youtube logo"
    style="height: 20px; width: 20px; display: block;"
  />`},ge=({label:o=S.iaPlayer,selected:e})=>{const i=He({filter:e?"invert(1)":"invert(0)",height:"20px",width:"20px"}),r=Le({selected:e,"invert-icon-at-hover-selected":e});return h`
    <ia-icon-label class=${r}>
      <span slot="icon" style=${i}>${I.ia}</span>
      <span>${o}</span>
    </ia-icon-label>
  `},kt=o=>{const t=He({filter:o?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=Le({selected:o,"invert-icon-at-hover-selected":o});return h`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${t}>${I.beta}</span>
      <span>${S.beta}</span>
    </ia-icon-label>
  `},xt=o=>h`
  <ia-icon-label class="${o?"selected":""}">
    <span slot="icon">${I.spotify}</span>
    <span>${S.spotify}</span>
  </ia-icon-label>
`,St=o=>{const t=He({filter:o?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=Le({selected:o,"invert-icon-at-hover-selected":o});return h`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${t}>${I.webamp}</span>
      <span>Webamp</span>
    </ia-icon-label>
  `},Ct=o=>h`
  <ia-icon-label class="${o?"selected":""}">
    <span slot="icon">${I.youtube}</span>
    <span>${S.youtube}</span>
  </ia-icon-label>
`,si=({samples:o,onClick:e,href:t,selected:i})=>{const r=o?S.iaSamples:S.iaPlayer;return h`
    <a href=${t} @click=${()=>e()}>${ge({label:r,selected:i})}</button>
  `},ai=({samples:o,onClick:e,selected:t})=>{const i=o?S.iaSamples:S.iaPlayer;return h`
    <button @click=${r=>e(r)} class="ia">
      ${ge({label:i,selected:t})}
    </button>
  `},ni=({onClick:o,selected:e})=>h`<button
  @click=${t=>o(t)}
  class="ia-beta"
>
  ${kt(e)}
</button>`,li=({onClick:o,selected:e})=>h`<button
  @click=${t=>o(t)}
  class="sp"
>
  ${xt(e)}
</button>`,di=({onClick:o,href:e,selected:t})=>{const i=`${e}?webamp=default`;return h`
    <a href=${i} @click=${r=>o(r)} class="wa">${St(t)}</button>
  `},ci=({onClick:o,selected:e})=>h`<button
  @click=${t=>o(t)}
  class="yt"
>
  ${Ct(e)}
</button>`,ui=({samples:o,onClick:e,href:t,selectedOption:i})=>({url:t,selectedHandler:s=>{e(s)},label:ge({label:o?S.iaSamples:S.iaPlayer,selected:i===p.ia}),id:p.ia}),hi=({samples:o,onClick:e,selectedOption:t})=>({selectedHandler:r=>{e(r)},label:ge({label:o?S.iaSamples:S.iaPlayer,selected:t===p.ia}),id:p.ia}),pi=({onClick:o,selectedOption:e})=>({selectedHandler:i=>{o(i)},label:kt(e===p.beta),id:p.beta}),vi=({onClick:o,selectedOption:e})=>({selectedHandler:i=>{o(i)},label:xt(e===p.spotify),id:p.spotify}),fi=({href:o,onClick:e,selectedOption:t})=>{const i=r=>{e(r)};return{url:`${o}?webamp=default`,selectedHandler:i,label:St(t===p.webamp),id:p.webamp}},mi=({onClick:o,selectedOption:e})=>({selectedHandler:i=>{o(i)},label:Ct(e===p.youtube),id:p.youtube}),gi=o=>{const{spotify:e,beta:t,youtube:i,selectedOption:r}=o;return[r===p.webamp?ui(o):hi(o),t?pi(o):null,e?vi(o):null,i?mi(o):null,fi(o)].filter(Boolean)};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:yi}=Dt,se=(o,e)=>e===void 0?o?._$litType$!==void 0:o?._$litType$===e,ot=()=>document.createComment(""),st=(o,e,t)=>{var i;const r=o._$AA.parentNode,s=e===void 0?o._$AB:e._$AA;if(t===void 0){const a=r.insertBefore(ot(),s),d=r.insertBefore(ot(),s);t=new yi(a,d,o,o.options)}else{const a=t._$AB.nextSibling,d=t._$AM,n=d!==o;if(n){let c;(i=t._$AQ)===null||i===void 0||i.call(t,o),t._$AM=o,t._$AP!==void 0&&(c=o._$AU)!==d._$AU&&t._$AP(c)}if(a!==s||n){let c=t._$AA;for(;c!==a;){const b=c.nextSibling;r.insertBefore(c,s),c=b}}}return t},bi={},at=(o,e=bi)=>o._$AH=e,nt=o=>o._$AH,wi=o=>{o._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i=Oe(class extends Ve{constructor(o){super(o),this.et=new WeakMap}render(o){return[o]}update(o,[e]){if(se(this.it)&&(!se(e)||this.it.strings!==e.strings)){const t=nt(o).pop();let i=this.et.get(this.it.strings);if(i===void 0){const r=document.createDocumentFragment();i=wt(y,r),i.setConnected(!1),this.et.set(this.it.strings,i)}at(i,[t]),st(i,void 0,t)}if(se(e)){if(!se(this.it)||this.it.strings!==e.strings){const t=this.et.get(e.strings);if(t!==void 0){const i=nt(t).pop();wi(o),st(o,void 0,i),at(o,[i])}}this.it=e}else this.it=void 0;return this.render(e)}});let B=class extends x{constructor(){super(...arguments),this.open=!1,this.displayCaret=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{}}renderOption(e){const{label:t,url:i=void 0,id:r}=e;let s;const a=this.selectedOption===r?"selected":"";return i?s=h`<a
        href=${i}
        @click=${()=>this.optionClicked(e)}
        >${t}</a
      >`:s=h`<button
        @click=${()=>this.optionClicked(e)}
      >
        ${t}
      </button>`,h`<li class=${a}>${s}</li>`}optionClicked(e){this.selectedOption=e.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:e}})),e.selectedHandler&&e?.selectedHandler(e)}toggleOptions(){this.open=!this.open}get caret(){return this.open?this.caretUp:this.caretDown}get dropdownState(){return this.open?"open":"closed"}get caretUp(){return Ke`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
      fill=""></path>
  </svg>`}get caretDown(){return Ke`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
    fill=""></path>
  </svg>`}get availableOptions(){return this.options.filter(e=>this.selectedOption!==e.id)}render(){return h`
      <div class="ia-dropdown-group">
        <button @click=${this.toggleOptions} class="click-main">
          <span class="cta sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.displayCaret?h`<span class="caret">${this.caret}</span>`:y}
        </button>

        <ul class="dropdown-main ${this.dropdownState}">
          ${this.availableOptions.map(e=>this.renderOption(e))}
        </ul>
      </div>
    `}};B.styles=T`
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
  `;l([f({type:Boolean,attribute:!0})],B.prototype,"open",void 0);l([f({type:Boolean,attribute:!0})],B.prototype,"displayCaret",void 0);l([f({type:String,attribute:!0})],B.prototype,"selectedOption",void 0);l([f({type:Array})],B.prototype,"options",void 0);l([f({type:String})],B.prototype,"optionGroup",void 0);l([f({type:Function})],B.prototype,"optionSelected",void 0);B=l([R("ia-dropdown")],B);const _i=T`
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
`;var ve;(function(o){o.postInit="postInit",o.channelChange="channelChange"})(ve||(ve={}));let C=class extends x{constructor(){super(...arguments),this.youtube=!1,this.spotify=!1,this.beta=!1,this.webamp=!0,this.samples=!1,this.backgroundTheme="dark",this.selected=p.ia,this.displayStyle="radio",this.url=""}firstUpdated(){this.dispatchEvent(new CustomEvent(ve.postInit,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}emitChannelChanged(){this.dispatchEvent(new CustomEvent(ve.channelChange,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}iaClicked(){this.selected!==p.ia&&(this.selected=p.ia,this.emitChannelChanged())}betaClicked(){this.selected!==p.beta&&(this.selected=p.beta,this.emitChannelChanged())}spotifyClicked(){this.selected!==p.spotify&&(this.selected=p.spotify,this.emitChannelChanged())}webampClicked(){this.selected!==p.webamp&&(this.selected=p.webamp,this.emitChannelChanged())}youtubeClicked(){this.selected!==p.youtube&&(this.selected=p.youtube,this.emitChannelChanged())}dropdownOptionSelected(e){this.selected=e.id,this.emitChannelChanged(),this.iaDropdown.open=!1}get iaLinkSelector(){const e=this.selected===p.ia?"selected":"";return h`
      <li class=${e}>
        ${si({samples:this.samples,selected:this.selected===p.ia,onClick:()=>this.iaClicked(),href:this.url})}
      </li>
    `}get iaButtonSelector(){const e=this.selected===p.ia?"selected":"";return h`
      <li class=${e}>
        ${ai({samples:this.samples,selected:this.selected===p.ia,onClick:()=>this.iaClicked()})}
      </li>
    `}get iaBetaSelector(){const e=this.selected===p.beta?"selected":"";return h`
      <li class=${e}>
        ${ni({selected:this.selected===p.beta,onClick:()=>this.betaClicked()})}
      </li>
    `}get spotifySelector(){const e=this.selected===p.spotify?"selected":"";return h`
      <li class=${e}>
        ${li({selected:this.selected===p.spotify,onClick:()=>this.spotifyClicked()})}
      </li>
    `}get webampSelector(){const e=this.selected===p.webamp?"selected":"";return h`
      <li class=${e}>
        ${di({href:this.url||window.location.href,selected:this.selected===p.webamp,onClick:()=>this.webampClicked()})}
      </li>
    `}get youtubeSelector(){const e=this.selected===p.youtube?"selected":"";return h`
      <li class=${e}>
        ${ci({selected:this.selected===p.youtube,onClick:()=>this.youtubeClicked()})}
      </li>
    `}get properIaSelector(){return this.selected===p.webamp?this.iaLinkSelector:this.iaButtonSelector}toggleDisplayStyle(){const e=this.displayStyle==="dropdown"?"radio":"dropdown";this.displayStyle=e}shouldShowChannelType(e){const t=this.selected===e;return this.displayStyle==="radio"?!0:!(this.displayStyle==="dropdown"&&t)}get dropdownOptions(){const{samples:e,beta:t,spotify:i,webamp:r,youtube:s,url:a,selected:d}=this;return gi({selectedOption:d,samples:!!e,beta:t,spotify:i,webamp:r,youtube:s,href:a,onClick:this.dropdownOptionSelected.bind(this)})}get currentlySelectedIcon(){switch(this.selected){case p.beta:return I.beta;case p.spotify:return I.spotify;case p.youtube:return I.youtube;case p.webamp:return I.webamp;default:return I.ia}}get dropdown(){return h`
      <ia-dropdown
        displayCaret
        .options=${this.dropdownOptions}
        .selectedOption=${this.selected}
        class=${this.backgroundTheme}
      >
        <span slot="dropdown-label">${this.currentlySelectedIcon}</span>
      </ia-dropdown>
    `}get radioView(){return h`
      <div id="selector-title"><h4>Play from:</h4></div>
      <div>
        <ul>
          ${this.properIaSelector} ${this.beta?this.iaBetaSelector:y}
          ${this.youtube?this.youtubeSelector:y}
          ${this.spotify?this.spotifySelector:y}
          ${this.webamp?this.webampSelector:y}
        </ul>
      </div>
    `}render(){return h`
      <section
        id=${this.displayStyle}
        class="${this.displayStyle} ${this.backgroundTheme}"
      >
        ${$i(this.displayStyle==="radio"?this.radioView:this.dropdown)}
      </section>
    `}};C.styles=[T`
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
    `,_i];l([f({attribute:!0,type:Boolean,reflect:!0})],C.prototype,"youtube",void 0);l([f({attribute:!0,type:Boolean,reflect:!0})],C.prototype,"spotify",void 0);l([f({attribute:!0,type:Boolean,reflect:!0})],C.prototype,"beta",void 0);l([f({attribute:!0,type:Boolean,reflect:!0})],C.prototype,"webamp",void 0);l([f({attribute:!0,type:Boolean,reflect:!0})],C.prototype,"samples",void 0);l([f({attribute:!0,type:String,reflect:!0})],C.prototype,"backgroundTheme",void 0);l([f({type:String,reflect:!0})],C.prototype,"selected",void 0);l([f({type:String,reflect:!0})],C.prototype,"displayStyle",void 0);l([f({type:String})],C.prototype,"url",void 0);l([V("ia-dropdown")],C.prototype,"iaDropdown",void 0);C=l([R("channel-selector")],C);let fe=class extends x{constructor(){super(...arguments),this.iaUrn=""}get spotifyUrl(){return!this.iaUrn||!this.iaUrn.match(/urn:spotify:/g)?"":`https://open.spotify.com/embed/${this.iaUrn.replace(/urn:spotify:/g,"").replace(/:/g,"/")}`}render(){const e=this.spotifyUrl;return e?h`
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
    `:h`<h3>Invalid Spotify URI: ${this.iaUrn}</h3>`}static get styles(){return[T`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}};l([f({type:String,attribute:!0,reflect:!0})],fe.prototype,"iaUrn",void 0);l([V("iframe")],fe.prototype,"iframe",void 0);fe=l([R("spotify-player")],fe);let Z=class extends x{constructor(){super(...arguments),this.iaUrn="",this.display=!1,this.baseHost="https://archive.org"}get youTubeUrl(){if(!this.iaUrn||!this.iaUrn.match(/urn:youtube:/g))return"";const t=this.iaUrn.replace(/urn:youtube:/g,"").replace(/:/g,"/"),i=`origin=${this.baseHost}&widgetid=1&autoplay=1&rel=0`;return`https://www.youtube.com/embed/${t}?${i}`}render(){const e=this.youTubeUrl;return e?h`
      <iframe
        id="embed-iframe"
        src="${e}"
        width="100%"
        height="200"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
        title="YouTube Player"
      ></iframe>
    `:y}static get styles(){return[T`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}};l([f({type:String,reflect:!0})],Z.prototype,"iaUrn",void 0);l([f({type:Boolean,reflect:!0})],Z.prototype,"display",void 0);l([f({type:String})],Z.prototype,"baseHost",void 0);l([V("iframe")],Z.prototype,"iframe",void 0);Z=l([R("youtube-player")],Z);let N=class extends x{constructor(){super(...arguments),this.selectedChannel="",this.playerApi=void 0}updated(e){e.has("album")&&this.album&&this.dispatchAlbumInfo(),e.has("selectedChannel")&&this.selectedChannel&&this.album&&this.updateToSelectedChannel(),e.has("selectedTrack")&&this.selectedTrack&&this.dispatchSelectedTrack()}dispatchSelectedTrack(){console.log("externalchannels-player: SELECTED TRACK",this.selectedTrack),this.dispatchEvent(new CustomEvent("externalChannelsSelectedTrack",{detail:{track:this.selectedTrack}}))}dispatchAlbumInfo(){var e,t;console.log("externalchannels-player: ALBUM INFO",this.album),this.dispatchEvent(new CustomEvent("externalChannelsPlayerLoaded",{detail:{album:this.album,spotifyTracks:((e=this.album)===null||e===void 0?void 0:e.spotifyTracks)||[],youtubeTracks:((t=this.album)===null||t===void 0?void 0:t.youtubeTracks)||[]}}))}onTracklistClickCallback(e){var t,i,r,s,a;this.currentTrackNum=e+1;let d=(t=this.album)===null||t===void 0?void 0:t.tracks.find(n=>n.track===this.currentTrackNum);if(this.selectedChannel===p.spotify){const n=(i=this.album)===null||i===void 0?void 0:i.spotifyTracks.find(c=>c.track===this.currentTrackNum);d=n??((r=this.album)===null||r===void 0?void 0:r.spotifyTracks[0])}else if(this.selectedChannel===p.youtube){const n=(s=this.album)===null||s===void 0?void 0:s.youtubeTracks.find(c=>c.track===this.currentTrackNum);d=n??((a=this.album)===null||a===void 0?void 0:a.youtubeTracks[0])}this.selectedTrack=d,console.log("*** onTracklistClickCallback ** ",{selectedTrack:d,iaTrackNum:e,currentTrackNum:this.currentTrackNum})}updateToSelectedChannel(){var e,t,i,r,s;if(this.selectedChannel==="youtube"){const a=this.album.youtubeTracks||[],d=[];if(console.log("youtubeTracks",a),a.length){const n=a.reduce((c,b)=>{const m=Number.isInteger(b.track)?`${b.track}`:"n/a";if(c.push(m),m!=="n/a"){const g=Number(m)-1;d.push(g)}return c},[]).join(", ");console.log("ytTrackNums",{ytTrackNums:n,iaYtTracklist:d}),(e=this.playerApi)===null||e===void 0||e.headless(d,c=>this.onTracklistClickCallback(c))}}else if(this.selectedChannel==="spotify"){const a=((t=this.album)===null||t===void 0?void 0:t.spotifyTracks)||[],d=[];if(console.log("spotifyTracks",a),a.length){const n=((i=this.album)===null||i===void 0?void 0:i.spotifyTracks.reduce((c,b)=>{const m=Number.isInteger(b.track)?`${b.track}`:"n/a";if(c.push(m),m!=="n/a"){const g=Number(m)-1;d.push(g)}return c},[])).join(", ");console.log("spTrackNums ------",{spTrackNums:n,iaSpTracklist:d}),(r=this.playerApi)===null||r===void 0||r.headless(d,c=>this.onTracklistClickCallback(c))}}else(s=this.playerApi)===null||s===void 0||s.headless()}render(){var e,t;if(!(this.selectedChannel==="youtube"||this.selectedChannel==="spotify"))return y;if(this.selectedChannel==="spotify"){const r=(e=this.album)===null||e===void 0?void 0:e.spotifyTracks.find(s=>{var a;return s?.track===((a=this.selectedTrack)===null||a===void 0?void 0:a.track)});if(r)return h`
          <spotify-player .iaUrn=${r?.spotifyId}></spotify-player>
        `}else if(this.selectedChannel==="youtube"){const r=(t=this.album)===null||t===void 0?void 0:t.youtubeTracks.find(s=>{var a;return s.track===((a=this.selectedTrack)===null||a===void 0?void 0:a.track)});if(console.log("~~~~ trackFound YT ID",r?.youtubeId,r),r)return h`
          <youtube-player .iaUrn=${r.youtubeId}></youtube-player>
        `}return y}};l([f({type:String,attribute:!0,reflect:!0})],N.prototype,"selectedChannel",void 0);l([f({type:Object})],N.prototype,"playerApi",void 0);l([f({type:Object})],N.prototype,"album",void 0);l([f({type:Object})],N.prototype,"selectedTrack",void 0);l([Vt()],N.prototype,"currentTrackNum",void 0);l([V("spotify-player")],N.prototype,"spotifyPlayer",void 0);l([V("youtube-player")],N.prototype,"youtubePlayer",void 0);N=l([R("externalchannels-player")],N);class ki extends H{constructor(e,t="archive.org"){super(e),this.isSegmented=!1,this.private=!1,this.details=null,this.orig="",this.image="",this.duration=0,this.sources=[],this._playlistTrack=null,this.details=e.details,this.baseHost=t}setPlaylistInfo(e){this._playlistTrack=e,this.orig=e.orig,this.image=e.image,this.duration=e.duration,this.sources=e.sources}get url(){return`https://${this.baseHost}/${this.name}`}get title(){var e;return((e=this._playlistTrack)===null||e===void 0?void 0:e.title)||(this===null||this===void 0?void 0:this.title)||this.name}get youtubeId(){return this.externalIds.find(e=>e.match(/youtube/gi))||""}get spotifyId(){return this.externalIds.find(e=>e.match(/spotify/gi))||""}get externalIds(){return Array.isArray(this.rawValue["external-identifier"])?this.rawValue["external-identifier"]:[this.rawValue["external-identifier"]||""]}}class xi{constructor(e,t){this.tracks=[],this.images=[],this.linerNotes=[],this.tracksAreSegmented=!1,this.baseHost="archive.org",this.relatedFiles=[],this.rawPlaylistTracks=[],this.item=new De(e),this.rawPlaylistTracks=t,this.tracks=t,this.filterFiles(this.item.files)}get title(){var e,t;return((t=(e=this.item.metadata)===null||e===void 0?void 0:e.title)===null||t===void 0?void 0:t.values.join("; "))||""}get creator(){var e,t,i,r,s,a;return!((t=(e=this.item.metadata)===null||e===void 0?void 0:e.creator)===null||t===void 0)&&t.values?(r=(i=this.item.metadata)===null||i===void 0?void 0:i.creator)===null||r===void 0?void 0:r.values.join("; "):!((s=this.item.metadata.rawMetadata)===null||s===void 0)&&s.artist?(a=this.item.metadata.rawMetadata)===null||a===void 0?void 0:a.artist:""}get youtubeId(){return this.externalIds.find(e=>e.match(/youtube/gi))||""}get spotifyId(){return this.externalIds.find(e=>e.match(/spotify/gi))||""}get externalIds(){var e;if(!this.item.metadata.rawMetadata)return[""];const t=this.item.metadata["external-identifier"];return!((e=t?.values)===null||e===void 0)&&e.length?t.values:[t?.value||""]}get youtubeTracks(){const e=this.tracks.filter(t=>t.youtubeId);return this.albumTrackOption("yt")!==void 0&&e.unshift(this.albumTrackOption("yt")),e}get spotifyTracks(){const e=this.tracks.filter(t=>t.spotifyId);return this.albumTrackOption("sp")!==void 0&&e.unshift(this.albumTrackOption("sp")),e}get albumImage(){const e=this.images.find(r=>r.format==="Item Image"),t=`https://${this.baseHost}/download/${this.item.metadata.identifier}/`;if(e)return`${t}${e.name}`;const i=this.images.find(r=>{const s=["Item Image","JPEG Thumb"];return r.source==="original"&&!s.includes(r.format)});return i?`${t}${i.name}`:`${t}__ia_thumb.jpg`}albumTrackOption(e){const t={title:"Full Album",orig:"",image:"",duration:"-- : --",track:0,iaTrackNum:-1,sources:[]};if(e==="yt"&&this.youtubeId)return{...t,youtubeId:this.youtubeId};if(e==="sp"&&this.spotifyId)return{...t,spotifyId:this.spotifyId}}isAlbumRelatedFile(e){var t,i;return!!(!((t=e.name.match(/.(ffp|md5)$/g))===null||t===void 0)&&t.length)&&!!(!((i=e.original)===null||i===void 0)&&i.length)&&e.source==="derivative"}isValidAudioFile(e=""){var t;return!!(!((t=e.match(/(mp3|ogg|flac|m4a|wma|aiff|aac|aa|ra|ram|shn|wav|wave|opus)$/gi))===null||t===void 0)&&t.length)}isValidImageFile(e=""){var t;return!!(!((t=e.match(/.(png|jpg|jpeg)$/gi))===null||t===void 0)&&t.length)}isValidImageFileFormat(e=""){var t;return!!(!((t=e.match(/(png|jpg|jpeg)/gi))===null||t===void 0)&&t.length)}isValidSegmentFile(e=""){var t;return!!(!((t=e.match(/_segments.(json|xml)$/gi))===null||t===void 0)&&t.length)}isSpectrogram(e=""){var t;return!!(!((t=e.match(/spectrogram/gi))===null||t===void 0)&&t.length)}isSampleMP3(e=""){var t;return!!(!((t=e.match(/_sample\.mp3$/gi))===null||t===void 0)&&t.length)}hasScannedLinerNotes(e=""){var t;return!!(!((t=e.match(/_jp2.(zip|tar)/gi))===null||t===void 0)&&t.length)}filterFiles(e){const t=[],i={};e.forEach(s=>{var a,d;const n=s.rawValue,c=this.isValidAudioFile(n.name);if(this.isAlbumRelatedFile(n)){this.relatedFiles.push(n);return}if(this.isValidSegmentFile(n.name)&&(this.tracksAreSegmented=!0,this.relatedFiles.push(n),n.original&&this.isValidAudioFile(n.name)&&!i[n.original]&&(i[n.original]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0})),n.source==="original"&&!i[n.name]&&c&&(i[n.name]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0}),n.original&&this.isValidAudioFile(n.original)&&!i[n.original]&&(i[n.original]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0}),this.hasScannedLinerNotes(n.name)&&this.linerNotes.push(n),this.isValidImageFile(n.name)){n.original&&this.isValidAudioFile(n.original)?i[n.original].spectrogram=n:t.push(n);return}if(n.original&&this.isValidAudioFile(n.original)&&!this.isValidAudioFile(n.name)){i[n.original].related.push(n);return}if(!this.isValidAudioFile(n.name)||!this.isValidImageFile(n.name)&&!this.isValidAudioFile(n.name))return;const b=this.isValidSegmentFile(n.original)&&this.isValidAudioFile(n.name);if(n.source==="original"&&this.isValidAudioFile(n.name)||b){i[n.name]||(i[n.name]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0}),i[n.name].primary=n;return}if(((a=n.name.match(/_sample\.mp3$/))===null||a===void 0?void 0:a.length)&&n.original){i[n.original].sampleMp3=new H(n);return}this.isValidAudioFile(n.name)&&!this.isSampleMP3(n.name)&&this.isValidAudioFile(n.original)&&n.original&&(!((d=n.name.match(/.mp3$/))===null||d===void 0)&&d.length?i[n.original].fullMp3=n:i[n.original].related.push(n))}),this.images=t;const r=[];this.tracks.forEach((s,a)=>{const d=i[s.orig].primary,n=new ki({...s,...d,details:i[s.orig]},"archive.org");n.setPlaylistInfo(s),r[a]=n}),this.tracks=r}}await z(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/jquery-3.js"),[]);await z(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/BookReader.js"),[]);await z(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/plugins/plugin.search.js"),[]);await z(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/plugins/plugin.tts.js"),[]);await z(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/plugins/plugin.archive_analytics.js"),[]);await z(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/plugins/plugin.text_selection.js"),[]);await z(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/src/ia-bookreader/ia-bookreader.js"),[]);const At=await fetch("./liner-notes-manifest-demo.json").then(o=>o.json());console.log("*** defaultLinerNotesManifest",At);const ne=await fetch("./loose-images-demo.json").then(o=>o.json());console.log("*** defaultLooseImagesData",ne);const Si=[{id:"cd_first-life_various-artists",desc:"CD - with no Liner notes, yes YT, yes SP, no Webamp"},{id:"lp_the-dark-side-of-the-moon_pink-floyd",desc:"LP - Pink Floyd Dark Side of the Moon"},{id:"cd_the-dark-side-of-the-moon_pink-floyd",desc:"CD - Pink Floyd Dark Side of the Moon"},{id:"capitol-15045-b-cigarettes-whiskey-and-wild-wild-women",desc:"78 - w/o jp2 (only 1 item image)"},{id:"bestofdollyparto00part",desc:"LP - older"},{id:"lp_dancing-tonight_freddy-martin-and-his-orchestra",desc:"LP - current, ~ 2020"},{id:"cd_beethoven-complete-works-for-string-trio_the-adaskin-string-trio",desc:"what_cd"},{id:"wcd_message-in-a-box-th_the-police_flac_lossless_807968",desc:"Irregular Photo - (portrait)"},{id:"lak-JC_Burris-James_Booker",desc:"No photo + long track list"},{id:"wcd_various-artiststhe-best-of-country-music_flac_lossless_29887623",desc:"Complilation, various artists"},{id:"lp_emperor-concerto_ludwig-van-beethoven-arthur-rubinstein-bos",desc:"Track names, multiple but same as album artist (should be omitted)"},{id:"illegal-art",desc:"3 column track list wide view pagination check"},{id:"wcd_borghild_die-warzau_mp3_320_1648819",desc:"Track time display, 60 seconds adds another minute. should display as 10:00"},{id:"cd_aaliyah_aaliyah-static-from-playa-timbaland",desc:'Has 3rd party "Full Album". Clicking on Full Album should highlight full album'}];let $=class extends x{constructor(){super(...arguments),this.viewToShow="components",this.selectedByDropdown=p.beta,this.errorMsg="",this.selectedByDropdownOnload="",this.selectedByRadio=p.beta,this.selectedByRadioOnload="",this.albumId="",this.bgColor="dark",this.albumMd=null,this.albumPlaylist=null,this.album=null,this.componentToShow="photos",this.signedIn=!1,this.photoDisplay="looseImages"}firstUpdated(){this.startAtWebamp&&(this.selectedByRadio=p.webamp,this.selectedByDropdown=p.webamp)}updated(e){var t,i,r,s;e.has("viewToShow")&&((t=document.querySelector("body"))===null||t===void 0||t.removeAttribute(e.get("viewToShow")),(i=document.querySelector("body"))===null||i===void 0||i.setAttribute(this.viewToShow,"")),e.has("albumId")&&this.albumId&&this.albumInfo(),e.has("bgColor")&&(this.bgColor==="dark"?(r=document.querySelector("body"))===null||r===void 0||r.classList.remove("light"):(s=document.querySelector("body"))===null||s===void 0||s.classList.add("light")),e.has("photoDisplay")&&this.photoDisplay==="looseImages"&&this.viewToShow==="components"&&this.displayLooseImages()}get startAtWebamp(){return new URLSearchParams(location.search.slice(1)).has("webamp")}get playerByRadio(){return this.selectedByRadio===p.spotify?h`<spotify-player
        iaUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`:this.selectedByRadio===p.youtube?h`<youtube-player
        iaUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`:h`<h2>Player type: ${this.selectedByRadio}</h2>`}get playerByDropdown(){return this.selectedByDropdown===p.spotify?h`<spotify-player
        iaUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`:this.selectedByDropdown===p.youtube?h`<youtube-player
        iaUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`:h`<h2>Player type: ${this.selectedByDropdown}</h2>`}render(){return h`
      <section id="app-root">
        <h1>
          Music Player Things:
          <button @click=${()=>this.viewToShow="components"}>
            Components
          </button>
          <button @click=${()=>this.viewToShow="data"}>Data</button>

          ${this.viewToShow==="data"?h`<div>
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
              </div>`:y}
        </h1>
        <hr />
        <hr />
        ${this.viewToShow==="components"?this.componentsView:this.dataView}
      </section>
    `}async albumInfo(){this.errorMsg="";try{const e=await fetch(`https://archive.org/metadata/${this.albumId}`).then(i=>i.json()),t=await fetch(`https://archive.org/services/playlist/${this.albumId}`).then(i=>i.json());this.albumPlaylist=t,this.albumMd=new De(e),this.album=new xi(e,this.albumPlaylist),window.Album=this.album}catch(e){this.errorMsg=e.message}}formInputSubmit(e){e.preventDefault(),this.albumId=this.input.value}get albumStats(){if(!this.album)return y;const e=this.album.spotifyTracks.reduce((i,r)=>(i.push(Number.isInteger(r?.track)?`${r?.track}`:"n/a"),i),[]).join(", "),t=this.album.youtubeTracks.reduce((i,r)=>(i.push(Number.isInteger(r?.track)?`${r?.track}`:"n/a"),i),[]).join(", ");return h`
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
          <dr
            ><dt>External channels player component</dt>
            <dd>
              <externalchannels-player
                .selectedChannel=${p.spotify}
                .album=${this.album}
                .selectedTrack=${this.selectedTrack}
                id="dedicated-spotify-player"
              ></externalchannels-player>
              <div>
                <p>Available Spotify Tracks</p>
                ${this.album.spotifyTracks.map(i=>h`
                      <button
                        @click=${()=>this.displayTrack(i,p.spotify)}
                      >
                        ${i.track} - ${i.title}
                      </button>
                    `)}
              </div>
              <externalchannels-player
                .selectedChannel=${p.youtube}
                .album=${this.album}
                id="dedicated-youtube-player"
                .selectedTrack=${this.selectedTrack}
              ></externalchannels-player>
              <div>
                <p>Available YouTube Tracks</p>
                ${this.album.youtubeTracks.map(i=>h`
                      <button
                        @click=${()=>this.displayTrack(i,p.youtube)}
                      >
                        ${i.track} - ${i.title}
                      </button>
                    `)}
              </div>
            </dd></dr
          >
        </dl>
      </section>
    `}displayTrack(e,t){console.log("Displaying track: ",{track:e,channelType:t}),this.selectedTrack=e}get demoClicks(){return h`
      <section id="demo-clicks">
        ${Si.map(e=>{const t=this.albumId===e.id;return h`
            <div class=${`demo ${t?"selected":""}`}>
              <button class="demo-go" @click=${()=>this.albumId=e.id}>
                GO
              </button>
              <p><b>ID: ${e.id}</b></p>
              <p>${e.desc}</p>
            </div>
          `})}
      </section>
    `}get dataView(){return h`
      <section id="data">
        <div></div>
        ${this.demoClicks}
        ${this.errorMsg?h`<h2 id="error">ERROR: ${this.errorMsg}</h2>`:y}

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
    `}get channelSelectors(){const e=`${location.origin}/demo`;return h`
      <section id="components">
        <channel-selector
          .backgroundTheme=${this.bgColor}
          spotify
          youtube
          beta
          samples
          .selected=${this.startAtWebamp?p.webamp:this.selectedByRadio}
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
          .selected=${this.startAtWebamp?p.webamp:this.selectedByDropdown?this.selectedByDropdown:p.beta}
        >
        </channel-selector>
        <section class="player">${this.playerByDropdown}</section>
        <section class="details">
          <h2>Selected by dropdown</h2>
          <h2>on first load: ${this.selectedByDropdownOnload}</h2>
          <h2>on change: ${this.selectedByDropdown}</h2>
        </section>
      </section>
    `}async displayLooseImages(){var e;(e=this.photoViewerEl)===null||e===void 0||e.prepareLightDomHook();const t=await ti({images:ne.image_filenames,itemIdentifier:ne.item.identifier,itemTitle:ne.item.title,baseHost:"archive.org"});console.log("####### generateBookReaderManifest",t),this.photoViewerEl.linerNotesManifest=t,this.photoViewerEl.itemMD=t.metadata,this.photoViewerEl.itemIdentifier=t.metadata.identifier}get photoViewer(){var e;let t,i,r;switch(this.photoDisplay){case"noData":i="foo-data-12345-ddd";break;case"linerNotes":this.photoDisplay==="linerNotes"&&(t=At,i=(e=t?.metadata)===null||e===void 0?void 0:e.identifier,r=t?.metadata);break}return h`
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
        ${this.photoDisplay==="noData"?h`<iaux-photo-viewer
              noimageavailable
              .itemIdentifier=${Math.random().toString(36).slice(2)}
            ></iaux-photo-viewer>`:y}
        ${this.photoDisplay==="looseImages"?h`<iaux-photo-viewer
              .backgroundTheme=${this.bgColor}
              .lightDomHook=${this}
              ?signedIn=${this.signedIn}
              baseHost="archive.org"
              ?showLinerNotes=${!0}
              @fullscreenOpened=${()=>{console.log("THIS FS OPENED ",this.scrollHeight),this.style.setProperty("--linerNotesFullscreenHeight",`${Math.round(window.innerHeight)}px`),setTimeout(()=>{this.scrollIntoView()},0)}}
              @coverImageLoaded=${s=>{const{height:a}=s.detail;document.body.removeAttribute("--brInTheaterHeight"),document.body.style.setProperty("--brInTheaterHeight",`${a}px`)}}
              ><div slot="main">
                <slot name="main"><p>Placeholder text</p></slot>
              </div></iaux-photo-viewer
            >`:h`<iaux-photo-viewer
              .backgroundTheme=${this.bgColor}
              .linerNotesManifest=${t}
              .lightDomHook=${this}
              baseHost="archive.org"
              .itemIdentifier=${i}
              .itemMD=${r}
              ?signedIn=${this.signedIn}
              ?showLinerNotes=${this.photoDisplay==="linerNotes"}
              @fullscreenOpened=${()=>{console.log("THIS FS OPENED ",this.scrollHeight),this.style.setProperty("--linerNotesFullscreenHeight",`${Math.round(window.innerHeight)}px`),setTimeout(()=>{this.scrollIntoView()},0)}}
              @coverImageLoaded=${s=>{const{height:a}=s.detail;document.body.removeAttribute("--brInTheaterHeight"),document.body.style.setProperty("--brInTheaterHeight",`${a}px`)}}
              ><div slot="main">
                <slot name="main"><p>Placeholder text</p></slot>
              </div></iaux-photo-viewer
            > `}
      </section>
    `}get componentsView(){return h`
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
      ${this.componentToShow==="channels"?this.channelSelectors:y}
      ${this.componentToShow==="photos"?this.photoViewer:y}
      <slot name="foo"></slot>
    `}};$.styles=T`
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
      max-height: 300px;
      overflow-y: scroll;
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
    }
  `;l([f({type:String,reflect:!0})],$.prototype,"viewToShow",void 0);l([f({type:String})],$.prototype,"selectedByDropdown",void 0);l([f({type:String})],$.prototype,"errorMsg",void 0);l([f({type:String})],$.prototype,"selectedByDropdownOnload",void 0);l([f({type:String})],$.prototype,"selectedByRadio",void 0);l([f({type:String})],$.prototype,"selectedByRadioOnload",void 0);l([f({type:String})],$.prototype,"albumId",void 0);l([f({type:String})],$.prototype,"bgColor",void 0);l([f({type:Object,attribute:!1})],$.prototype,"albumMd",void 0);l([f({type:Object,attribute:!1})],$.prototype,"albumPlaylist",void 0);l([f({type:Object,attribute:!1})],$.prototype,"album",void 0);l([f({type:String})],$.prototype,"componentToShow",void 0);l([V("input#md-search")],$.prototype,"input",void 0);l([V("iaux-photo-viewer")],$.prototype,"photoViewerEl",void 0);l([f({type:Object})],$.prototype,"selectedTrack",void 0);l([f({type:Boolean})],$.prototype,"signedIn",void 0);l([f({type:String})],$.prototype,"photoDisplay",void 0);$=l([R("app-root")],$);
