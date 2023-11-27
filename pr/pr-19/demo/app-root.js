const ri=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}};ri();const si="modulepreload",st={},ai="./",G=function(e,t){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=`${ai}${i}`,i in st)return;st[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":si,o||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),o)return new Promise((d,n)=>{a.addEventListener("load",d),a.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function l(r,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,i);else for(var d=r.length-1;d>=0;d--)(a=r[d])&&(s=(o<3?a(s):o>3?a(e,t,s):a(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=window,Je=ge.ShadowRoot&&(ge.ShadyCSS===void 0||ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qe=Symbol(),at=new WeakMap;class Pt{constructor(e,t,i){if(this._$cssResult$=!0,i!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Je&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=at.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&at.set(t,e))}return e}toString(){return this.cssText}}const ni=r=>new Pt(typeof r=="string"?r:r+"",void 0,Qe),k=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((i,o,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[s+1],r[0]);return new Pt(t,r,Qe)},li=(r,e)=>{Je?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),o=ge.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=t.cssText,r.appendChild(i)})},nt=Je?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return ni(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pe;const be=window,lt=be.trustedTypes,di=lt?lt.emptyScript:"",dt=be.reactiveElementPolyfillSupport,je={toAttribute(r,e){switch(e){case Boolean:r=r?di:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Nt=(r,e)=>e!==r&&(e==e||r==r),Ne={attribute:!0,type:String,converter:je,reflect:!1,hasChanged:Nt};class J extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const o=this._$Ep(i,t);o!==void 0&&(this._$Ev.set(o,i),e.push(o))}),e}static createProperty(e,t=Ne){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const s=this[e];this[t]=o,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ne}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of i)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)t.unshift(nt(o))}else e!==void 0&&t.push(nt(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return li(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Ne){var o;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const a=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:je).toAttribute(t,i.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,t){var i;const o=this.constructor,s=o._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=o.getPropertyOptions(s),d=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:je;this._$El=s,this[s]=d.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,i){let o=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Nt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,s)=>this[s]=o),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var s;return(s=o.hostUpdate)===null||s===void 0?void 0:s.call(o)}),this.update(i)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}J.finalized=!0,J.elementProperties=new Map,J.elementStyles=[],J.shadowRootOptions={mode:"open"},dt?.({ReactiveElement:J}),((Pe=be.reactiveElementVersions)!==null&&Pe!==void 0?Pe:be.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Re;const we=window,X=we.trustedTypes,ct=X?X.createPolicy("lit-html",{createHTML:r=>r}):void 0,$e="$lit$",R=`lit$${(Math.random()+"").slice(9)}$`,Xe="?"+R,ci=`<${Xe}>`,ee=document,ne=()=>ee.createComment(""),le=r=>r===null||typeof r!="object"&&typeof r!="function",Rt=Array.isArray,Ht=r=>Rt(r)||typeof r?.[Symbol.iterator]=="function",He=`[ 	
\f\r]`,se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,ut=/>/g,j=RegExp(`>|${He}(?:([^\\s"'>=/]+)(${He}*=${He}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,vt=/"/g,Ot=/^(?:script|style|textarea|title)$/i,Vt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),u=Vt(1),mt=Vt(2),F=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),ft=new WeakMap,Q=ee.createTreeWalker(ee,129,null,!1),Lt=(r,e)=>{const t=r.length-1,i=[];let o,s=e===2?"<svg>":"",a=se;for(let n=0;n<t;n++){const c=r[n];let y,h,g=-1,w=0;for(;w<c.length&&(a.lastIndex=w,h=a.exec(c),h!==null);)w=a.lastIndex,a===se?h[1]==="!--"?a=ht:h[1]!==void 0?a=ut:h[2]!==void 0?(Ot.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=j):h[3]!==void 0&&(a=j):a===j?h[0]===">"?(a=o??se,g=-1):h[1]===void 0?g=-2:(g=a.lastIndex-h[2].length,y=h[1],a=h[3]===void 0?j:h[3]==='"'?vt:pt):a===vt||a===pt?a=j:a===ht||a===ut?a=se:(a=j,o=void 0);const L=a===j&&r[n+1].startsWith("/>")?" ":"";s+=a===se?c+ci:g>=0?(i.push(y),c.slice(0,g)+$e+c.slice(g)+R+L):c+R+(g===-2?(i.push(void 0),n):L)}const d=s+(r[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ct!==void 0?ct.createHTML(d):d,i]};class de{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,a=0;const d=e.length-1,n=this.parts,[c,y]=Lt(e,t);if(this.el=de.createElement(c,i),Q.currentNode=this.el.content,t===2){const h=this.el.content,g=h.firstChild;g.remove(),h.append(...g.childNodes)}for(;(o=Q.nextNode())!==null&&n.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const g of o.getAttributeNames())if(g.endsWith($e)||g.startsWith(R)){const w=y[a++];if(h.push(g),w!==void 0){const L=o.getAttribute(w.toLowerCase()+$e).split(R),B=/([.?@])?(.*)/.exec(w);n.push({type:1,index:s,name:B[2],strings:L,ctor:B[1]==="."?Ut:B[1]==="?"?Ft:B[1]==="@"?zt:me})}else n.push({type:6,index:s})}for(const g of h)o.removeAttribute(g)}if(Ot.test(o.tagName)){const h=o.textContent.split(R),g=h.length-1;if(g>0){o.textContent=X?X.emptyScript:"";for(let w=0;w<g;w++)o.append(h[w],ne()),Q.nextNode(),n.push({type:2,index:++s});o.append(h[g],ne())}}}else if(o.nodeType===8)if(o.data===Xe)n.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(R,h+1))!==-1;)n.push({type:7,index:s}),h+=R.length-1}s++}}static createElement(e,t){const i=ee.createElement("template");return i.innerHTML=e,i}}function Y(r,e,t=r,i){var o,s,a,d;if(e===F)return e;let n=i!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[i]:t._$Cl;const c=le(e)?void 0:e._$litDirective$;return n?.constructor!==c&&((s=n?._$AO)===null||s===void 0||s.call(n,!1),c===void 0?n=void 0:(n=new c(r),n._$AT(r,t,i)),i!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[i]=n:t._$Cl=n),n!==void 0&&(e=Y(r,n._$AS(r,e.values),n,i)),e}class Dt{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:o}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:ee).importNode(i,!0);Q.currentNode=s;let a=Q.nextNode(),d=0,n=0,c=o[0];for(;c!==void 0;){if(d===c.index){let y;c.type===2?y=new re(a,a.nextSibling,this,e):c.type===1?y=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(y=new jt(a,this,e)),this.u.push(y),c=o[++n]}d!==c?.index&&(a=Q.nextNode(),d++)}return s}p(e){let t=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class re{constructor(e,t,i,o){var s;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cm=(s=o?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),le(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==F&&this.g(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ht(e)?this.k(e):this.g(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}g(e){this._$AH!==b&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(ee.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=de.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.p(i);else{const a=new Dt(s,this),d=a.v(this.options);a.p(i),this.T(d),this._$AH=a}}_$AC(e){let t=ft.get(e.strings);return t===void 0&&ft.set(e.strings,t=new de(e)),t}k(e){Rt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new re(this.S(ne()),this.S(ne()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cm=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class me{constructor(e,t,i,o,s){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const s=this.strings;let a=!1;if(s===void 0)e=Y(this,e,t,0),a=!le(e)||e!==this._$AH&&e!==F,a&&(this._$AH=e);else{const d=e;let n,c;for(e=s[0],n=0;n<s.length-1;n++)c=Y(this,d[i+n],t,n),c===F&&(c=this._$AH[n]),a||(a=!le(c)||c!==this._$AH[n]),c===b?e=b:e!==b&&(e+=(c??"")+s[n+1]),this._$AH[n]=c}a&&!o&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ut extends me{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}const hi=X?X.emptyScript:"";class Ft extends me{constructor(){super(...arguments),this.type=4}j(e){e&&e!==b?this.element.setAttribute(this.name,hi):this.element.removeAttribute(this.name)}}class zt extends me{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=Y(this,e,t,0))!==null&&i!==void 0?i:b)===F)return;const o=this._$AH,s=e===b&&o!==b||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==b&&(o===b||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class jt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const ui={P:$e,A:R,M:Xe,C:1,L:Lt,D:Dt,R:Ht,V:Y,I:re,H:me,N:Ft,U:zt,F:Ut,B:jt},gt=we.litHtmlPolyfillSupport;gt?.(de,re),((Re=we.litHtmlVersions)!==null&&Re!==void 0?Re:we.litHtmlVersions=[]).push("2.7.0");const Wt=(r,e,t)=>{var i,o;const s=(i=t?.renderBefore)!==null&&i!==void 0?i:e;let a=s._$litPart$;if(a===void 0){const d=(o=t?.renderBefore)!==null&&o!==void 0?o:null;s._$litPart$=a=new re(e.insertBefore(ne(),d),d,void 0,t??{})}return a._$AI(r),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oe,Ve;class C extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Wt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return F}}C.finalized=!0,C._$litElement$=!0,(Oe=globalThis.litElementHydrateSupport)===null||Oe===void 0||Oe.call(globalThis,{LitElement:C});const yt=globalThis.litElementPolyfillSupport;yt?.({LitElement:C});((Ve=globalThis.litElementVersions)!==null&&Ve!==void 0?Ve:globalThis.litElementVersions=[]).push("3.3.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=r=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(r,e):((t,i)=>{const{kind:o,elements:s}=i;return{kind:o,elements:s,finisher(a){customElements.define(t,a)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pi=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function m(r){return(e,t)=>t!==void 0?((i,o,s)=>{o.constructor.createProperty(s,i)})(r,e,t):pi(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qt(r){return m({...r,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=({finisher:r,descriptor:e})=>(t,i)=>{var o;if(i===void 0){const s=(o=t.originalKey)!==null&&o!==void 0?o:t.key,a=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return r!=null&&(a.finisher=function(d){r(d,s)}),a}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),r?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function V(r,e){return vi({descriptor:t=>{const i={get(){var o,s;return(s=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const o=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var s,a;return this[o]===void 0&&(this[o]=(a=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(r))!==null&&a!==void 0?a:null),this[o]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Le;((Le=window.HTMLSlotElement)===null||Le===void 0?void 0:Le.prototype.assignedElements)!=null;function p(r){let e,t,i;return typeof r=="object"?(e=r.hashFunction,t=r.expiring,i=r.tags):e=r,(o,s,a)=>{if(a.value!=null)a.value=bt(a.value,e,t,i);else if(a.get!=null)a.get=bt(a.get,e,t,i);else throw"Only put a Memoize() decorator on a method or get accessor."}}const De=new Map;function bt(r,e,t=0,i){const o=Symbol("__memoized_map__");return function(...s){let a;this.hasOwnProperty(o)||Object.defineProperty(this,o,{configurable:!1,enumerable:!1,writable:!1,value:new Map});let d=this[o];if(Array.isArray(i))for(const n of i)De.has(n)?De.get(n).push(d):De.set(n,[d]);if(e||s.length>0||t>0){let n;e===!0?n=s.map(h=>h.toString()).join("!"):e?n=e.apply(this,s):n=s[0];const c=`${n}__timestamp`;let y=!1;if(t>0)if(!d.has(c))y=!0;else{let h=d.get(c);y=Date.now()-h>t}d.has(n)&&!y?a=d.get(n):(a=r.apply(this,s),d.set(n,a),t>0&&d.set(c,Date.now()))}else{const n=this;d.has(n)?a=d.get(n):(a=r.apply(this,s),d.set(n,a))}return a}}class We{parseValue(e){return typeof e=="string"&&(e==="false"||e==="0")?!1:Boolean(e)}}We.shared=new We;class U{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=parseFloat(e);if(!Number.isNaN(t))return t}}U.shared=new U;class _e{parseValue(e){return U.shared.parseValue(e)}}_e.shared=new _e;class ce{parseValue(e){return this.parseJSDate(e)||this.parseBracketDate(e)}parseBracketDate(e){if(typeof e!="string")return;const t=e.match(/\[([0-9]{4})\]/);if(!(!t||t.length<2))return this.parseJSDate(t[1])}parseJSDate(e){if(typeof e!="string")return;let t=e;t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)&&(t=t.replace(" ","T"));const i=Date.parse(t);if(Number.isNaN(i))return;let o=new Date(t);return(t.indexOf("Z")>-1||t.indexOf("+")>-1||t.match(/^[0-9]{4}$/)||t.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/)||t.match(/^.*?-[0-9]{2}:[0-9]{2}$/)||t.match(/^.*?-[0-9]{4}$/))&&(o=new Date(o.getTime()+o.getTimezoneOffset()*1e3*60)),o}}ce.shared=new ce;class ke{parseValue(e){if(typeof e=="number")return e;if(typeof e=="boolean")return;const t=e.split(":");let i;return t.length===1?i=this.parseNumberFormat(t[0]):i=this.parseColonSeparatedFormat(t),i}parseNumberFormat(e){let t=parseFloat(e);return Number.isNaN(t)&&(t=void 0),t}parseColonSeparatedFormat(e){let t=!1;const i=e.map((o,s)=>{const a=parseFloat(o);if(Number.isNaN(a))return t=!0,0;const d=e.length-1-s,n=60**d;return a*Math.floor(n)}).reduce((o,s)=>o+s,0);return t?void 0:i}}ke.shared=new ke;class qe{parseValue(e){if(typeof e=="string")return e}}qe.shared=new qe;class mi{constructor(e,t){this.separators=[";",","],this.parser=e,t&&t.separators&&(this.separators=t.separators)}parseValue(e){const t=String(e);let i=[];for(const o of this.separators)if(i=t.split(o),i.length>1)break;return this.parseListValues(i)}parseListValues(e){const i=e.map(s=>s.trim()).map(s=>this.parser.parseValue(s)),o=[];return i.forEach(s=>{s!==void 0&&o.push(s)}),o}}class Ke{parseValue(e){if(typeof e=="string")return e}}Ke.shared=new Ke;class xe{parseValue(e){return String(e)}}xe.shared=new xe;class E{constructor(e,t){this.parser=e,this.rawValue=t}get values(){return this.parseRawValue()}get value(){return this.values[0]}parseRawValue(){if(this.rawValue===void 0)return[];const e=Array.isArray(this.rawValue)?this.rawValue:[this.rawValue],t=[];return e.forEach(i=>{const o=this.parser.parseValue(i);Array.isArray(o)?t.push(...o):o!==void 0&&t.push(o)}),t}}l([p()],E.prototype,"values",null);l([p()],E.prototype,"value",null);class fi extends E{constructor(e){super(We.shared,e)}}class N extends E{constructor(e){super(ce.shared,e)}}class Ue extends E{constructor(e){super(ke.shared,e)}}class I extends E{constructor(e){super(U.shared,e)}}class $ extends E{constructor(e){super(xe.shared,e)}}class gi extends E{constructor(e){super(Ke.shared,e)}}class wt extends E{constructor(e){super(_e.shared,e)}}class yi extends E{constructor(e){super(qe.shared,e)}}class bi extends E{constructor(e,t){super(t,e)}}class wi extends bi{constructor(e){const t=new mi(xe.shared);super(e,t)}}class f{constructor(e){this.rawMetadata=e}get identifier(){var e;return(e=this.rawMetadata)===null||e===void 0?void 0:e.identifier}get addeddate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.addeddate?new N(this.rawMetadata.addeddate):void 0}get audio_codec(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_codec?new $(this.rawMetadata.audio_codec):void 0}get audio_sample_rate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.audio_sample_rate?new I(this.rawMetadata.audio_sample_rate):void 0}get avg_rating(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.avg_rating?new I(this.rawMetadata.avg_rating):void 0}get collection(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection?new $(this.rawMetadata.collection):void 0}get collections_raw(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collections_raw?new $(this.rawMetadata.collections_raw):void 0}get collection_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.collection_size?new wt(this.rawMetadata.collection_size):void 0}get contributor(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.contributor?new $(this.rawMetadata.contributor):void 0}get coverage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.coverage?new $(this.rawMetadata.coverage):void 0}get creator(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.creator?new $(this.rawMetadata.creator):void 0}get date(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.date?new N(this.rawMetadata.date):void 0}get description(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.description?new $(this.rawMetadata.description):void 0}get downloads(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.downloads?new I(this.rawMetadata.downloads):void 0}get duration(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.duration?new Ue(this.rawMetadata.duration):void 0}get"external-identifier"(){var e,t;return!((e=this.rawMetadata)===null||e===void 0)&&e["external-identifier"]?new $((t=this.rawMetadata)===null||t===void 0?void 0:t["external-identifier"]):void 0}get files_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.files_count?new I(this.rawMetadata.files_count):void 0}get indexdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.indexdate?new N(this.rawMetadata.indexdate):void 0}get isbn(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.isbn?new $(this.rawMetadata.isbn):void 0}get issue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.issue?new $(this.rawMetadata.issue):void 0}get item_count(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_count?new I(this.rawMetadata.item_count):void 0}get item_size(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.item_size?new wt(this.rawMetadata.item_size):void 0}get language(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.language?new $(this.rawMetadata.language):void 0}get length(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.length?new Ue(this.rawMetadata.length):void 0}get lineage(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.lineage?new $(this.rawMetadata.lineage):void 0}get month(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.month?new I(this.rawMetadata.month):void 0}get mediatype(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.mediatype?new yi(this.rawMetadata.mediatype):void 0}get noindex(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.noindex?new fi(this.rawMetadata.noindex):void 0}get notes(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.notes?new $(this.rawMetadata.notes):void 0}get num_favorites(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_favorites?new I(this.rawMetadata.num_favorites):void 0}get num_reviews(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.num_reviews?new I(this.rawMetadata.num_reviews):void 0}get openlibrary_edition(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_edition?new $(this.rawMetadata.openlibrary_edition):void 0}get openlibrary_work(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.openlibrary_work?new $(this.rawMetadata.openlibrary_work):void 0}get page_progression(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.page_progression?new gi(this.rawMetadata.page_progression):void 0}get partner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.partner?new $(this.rawMetadata.partner):void 0}get ppi(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.ppi?new I(this.rawMetadata.ppi):void 0}get publicdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publicdate?new N(this.rawMetadata.publicdate):void 0}get publisher(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.publisher?new $(this.rawMetadata.publisher):void 0}get reviewdate(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.reviewdate?new N(this.rawMetadata.reviewdate):void 0}get runtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.runtime?new Ue(this.rawMetadata.runtime):void 0}get scanner(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.scanner?new $(this.rawMetadata.scanner):void 0}get source(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.source?new $(this.rawMetadata.source):void 0}get start_localtime(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_localtime?new N(this.rawMetadata.start_localtime):void 0}get start_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.start_time?new N(this.rawMetadata.start_time):void 0}get stop_time(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.stop_time?new N(this.rawMetadata.stop_time):void 0}get subject(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.subject?new wi(this.rawMetadata.subject):void 0}get taper(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.taper?new $(this.rawMetadata.taper):void 0}get title(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.title?new $(this.rawMetadata.title):void 0}get transferer(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.transferer?new $(this.rawMetadata.transferer):void 0}get track(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.track?new I(this.rawMetadata.track):void 0}get type(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.type?new $(this.rawMetadata.type):void 0}get uploader(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.uploader?new $(this.rawMetadata.uploader):void 0}get utc_offset(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.utc_offset?new I(this.rawMetadata.utc_offset):void 0}get venue(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.venue?new $(this.rawMetadata.venue):void 0}get volume(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.volume?new $(this.rawMetadata.volume):void 0}get week(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.week?new I(this.rawMetadata.week):void 0}get year(){var e;return!((e=this.rawMetadata)===null||e===void 0)&&e.year?new N(this.rawMetadata.year):void 0}}l([p()],f.prototype,"addeddate",null);l([p()],f.prototype,"audio_codec",null);l([p()],f.prototype,"audio_sample_rate",null);l([p()],f.prototype,"avg_rating",null);l([p()],f.prototype,"collection",null);l([p()],f.prototype,"collections_raw",null);l([p()],f.prototype,"collection_size",null);l([p()],f.prototype,"contributor",null);l([p()],f.prototype,"coverage",null);l([p()],f.prototype,"creator",null);l([p()],f.prototype,"date",null);l([p()],f.prototype,"description",null);l([p()],f.prototype,"downloads",null);l([p()],f.prototype,"duration",null);l([p()],f.prototype,"external-identifier",null);l([p()],f.prototype,"files_count",null);l([p()],f.prototype,"indexdate",null);l([p()],f.prototype,"isbn",null);l([p()],f.prototype,"issue",null);l([p()],f.prototype,"item_count",null);l([p()],f.prototype,"item_size",null);l([p()],f.prototype,"language",null);l([p()],f.prototype,"length",null);l([p()],f.prototype,"lineage",null);l([p()],f.prototype,"month",null);l([p()],f.prototype,"mediatype",null);l([p()],f.prototype,"noindex",null);l([p()],f.prototype,"notes",null);l([p()],f.prototype,"num_favorites",null);l([p()],f.prototype,"num_reviews",null);l([p()],f.prototype,"openlibrary_edition",null);l([p()],f.prototype,"openlibrary_work",null);l([p()],f.prototype,"page_progression",null);l([p()],f.prototype,"partner",null);l([p()],f.prototype,"ppi",null);l([p()],f.prototype,"publicdate",null);l([p()],f.prototype,"publisher",null);l([p()],f.prototype,"reviewdate",null);l([p()],f.prototype,"runtime",null);l([p()],f.prototype,"scanner",null);l([p()],f.prototype,"source",null);l([p()],f.prototype,"start_localtime",null);l([p()],f.prototype,"start_time",null);l([p()],f.prototype,"stop_time",null);l([p()],f.prototype,"subject",null);l([p()],f.prototype,"taper",null);l([p()],f.prototype,"title",null);l([p()],f.prototype,"transferer",null);l([p()],f.prototype,"track",null);l([p()],f.prototype,"type",null);l([p()],f.prototype,"uploader",null);l([p()],f.prototype,"utc_offset",null);l([p()],f.prototype,"venue",null);l([p()],f.prototype,"volume",null);l([p()],f.prototype,"week",null);l([p()],f.prototype,"year",null);class z{constructor(e){this.rawValue=e}get name(){return this.rawValue.name}get source(){return this.rawValue.source}get btih(){return this.rawValue.btih}get md5(){return this.rawValue.md5}get format(){return this.rawValue.format}get mtime(){return this.rawValue.mtime}get crc32(){return this.rawValue.crc32}get sha1(){return this.rawValue.sha1}get original(){return this.rawValue.original}get size(){return this.rawValue.size?_e.shared.parseValue(this.rawValue.size):void 0}get title(){return this.rawValue.title}get length(){return this.rawValue.length?ke.shared.parseValue(this.rawValue.length):void 0}get height(){return this.rawValue.height?U.shared.parseValue(this.rawValue.height):void 0}get width(){return this.rawValue.width?U.shared.parseValue(this.rawValue.width):void 0}get track(){return this.rawValue.track?U.shared.parseValue(this.rawValue.track):void 0}get external_identifier(){return this.rawValue.external_identifier}get creator(){return this.rawValue.creator}get album(){return this.rawValue.album}}l([p()],z.prototype,"size",null);l([p()],z.prototype,"length",null);l([p()],z.prototype,"height",null);l([p()],z.prototype,"width",null);l([p()],z.prototype,"track",null);class Me{constructor(e){this.rawValue=e}get reviewbody(){return this.rawValue.reviewbody}get reviewtitle(){return this.rawValue.reviewtitle}get reviewer(){return this.rawValue.reviewer}get reviewdate(){return this.rawValue.reviewdate?ce.shared.parseValue(this.rawValue.reviewdate):void 0}get createdate(){return this.rawValue.createdate?ce.shared.parseValue(this.rawValue.createdate):void 0}get stars(){return this.rawValue.stars?U.shared.parseValue(this.rawValue.stars):void 0}}l([p()],Me.prototype,"reviewdate",null);l([p()],Me.prototype,"createdate",null);l([p()],Me.prototype,"stars",null);class et{constructor(e){var t,i;this.rawResponse=e,this.created=e.created,this.d1=e.d1,this.d2=e.d2,this.dir=e.dir,this.files=(t=e.files)===null||t===void 0?void 0:t.map(o=>new z(o)),this.files_count=e.files_count,this.item_last_updated=e.item_last_updated,this.item_size=e.item_size,this.metadata=new f(e.metadata),this.server=e.server,this.uniq=e.uniq,this.workable_servers=e.workable_servers,this.speech_vs_music_asr=e.speech_vs_music_asr,this.reviews=(i=e.reviews)===null||i===void 0?void 0:i.map(o=>new Me(o))}}class $i{constructor(e){this.numFound=e.numFound,this.start=e.start,this.docs=e.docs.map(t=>new f(t)),this.aggregations=e.aggregations}}class _i{constructor(e){this.rawResponse=e,this.responseHeader=e.responseHeader,this.response=new $i(e.response)}}var K;(function(r){r.networkError="SearchService.NetworkError",r.itemNotFound="SearchService.ItemNotFound",r.decodingError="SearchService.DecodingError",r.searchEngineError="SearchService.SearchEngineError"})(K||(K={}));class Ye extends Error{constructor(e,t,i){super(t),this.name=e,this.type=e,this.details=i}}class ki{static aggregateSearchParamsAsString(e){if(e.advancedParams){const t=e.advancedParams.map(o=>({terms:o}));return JSON.stringify(t)}if(e.simpleParams)return e.simpleParams.join(",")}static sortParamsAsString(e){return`${e.field} ${e.direction}`}static generateURLSearchParams(e){const t=new URLSearchParams;if(t.append("q",e.query),t.append("output","json"),e.rows&&t.append("rows",String(e.rows)),e.page&&t.append("page",String(e.page)),e.fields&&t.append("fl",e.fields.join(",")),e.sort){const o=e.sort.map(s=>this.sortParamsAsString(s));t.append("sort",o.join(","))}const i=e.aggregations;if(i){const o=this.aggregateSearchParamsAsString(i);o&&t.append("user_aggs",o)}return t}}class xi{constructor(e){var t;if(this.baseUrl=(t=e?.baseUrl)!==null&&t!==void 0?t:"archive.org",e?.includeCredentials!==void 0?this.includeCredentials=e.includeCredentials:this.includeCredentials=window.location.href.match(/^https?:\/\/.*archive\.org(:[0-9]+)?/)!==null,e?.scope!==void 0)this.requestScope=e.scope;else{const o=new URL(window.location.href).searchParams.get("scope");o&&(this.requestScope=o)}}async performSearch(e){const i=ki.generateURLSearchParams(e).toString(),o=`https://${this.baseUrl}/advancedsearch.php?${i}`;return this.fetchUrl(o)}async fetchMetadata(e,t){const i=t?`/${t}`:"",o=`https://${this.baseUrl}/metadata/${e}${i}`;return this.fetchUrl(o,{requestOptions:{credentials:"omit"}})}async fetchUrl(e,t){var i;const o=new URL(e);this.requestScope&&o.searchParams.set("scope",this.requestScope);let s;try{const a=(i=t?.requestOptions)!==null&&i!==void 0?i:{credentials:this.includeCredentials?"include":"same-origin"};s=await fetch(o.href,a)}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(K.networkError,d)}try{const a=await s.json(),d=a.error;if(d){const n=a.forensics;return this.getErrorResult(K.searchEngineError,d,n)}else return{success:a}}catch(a){const d=a instanceof Error?a.message:typeof a=="string"?a:"Unknown error";return this.getErrorResult(K.decodingError,d)}}getErrorResult(e,t,i){return{error:new Ye(e,t,i)}}}class $t{constructor(e){this.searchBackend=e}async search(e){const t=await this.searchBackend.performSearch(e);return t.error?t:{success:new _i(t.success)}}async fetchMetadata(e){var t;const i=await this.searchBackend.fetchMetadata(e);return i.error?i:((t=i.success)===null||t===void 0?void 0:t.metadata)===void 0?{error:new Ye(K.itemNotFound)}:{success:new et(i.success)}}async fetchMetadataValue(e,t){var i;const o=await this.searchBackend.fetchMetadata(e,t);return o.error?o:((i=o.success)===null||i===void 0?void 0:i.result)===void 0?{error:new Ye(K.itemNotFound)}:{success:o.success.result}}}$t.default=new $t(new xi);var Ai=u`
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
`;class Si extends C{static get styles(){return k`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor, #999);
      }
    `}render(){return Ai}}customElements.define("ia-icon-close-circle",Si);function Kt(){return{el:"#BookReader",showToolbar:!1,onePage:{autofit:"height"},enableFSLogoShortcut:!0,enableBookmarks:!1,enablePageResume:!1,enableTtsPlugin:!1,enableUrlPlugin:!1,defaults:"mode/1up",enableSearch:!0,searchInsideUrl:"/fulltext/inside.php",initialSearchTerm:null,imagesBaseURL:"/bookreader/BookReader/images/",defaultStartLeaf:0,titleLeaf:0,controls:{twoPage:{visible:!1},viewmode:{visible:!1}},bookType:"linerNotes"}}function Ci(r){var e;const t=r.brOptions,i={...Kt(),...t},o=new window.BookReader(i),s=window.BookReader.prototype.getPageURI;o.getPageURI=(d,n=1,c=0)=>{const y=Math.pow(2,Math.floor(Math.log2(Math.max(1,n))));let h=s.call(o,d,y,c);return h+=h.indexOf("?")>-1?"&":"?",h=`${h}scale=${y}&rotate=${c}`,h},window.br=o;const a=(e=r?.data)===null||e===void 0?void 0:e.isRestricted;return window.dispatchEvent(new CustomEvent("contextmenu",{detail:{isRestricted:a}})),o}async function Ti(r){return await new Promise((t,i)=>{const o=new Image;o.onload=()=>t(o),o.onerror=i,o.src=r})}async function Mi(r){const e=[];return await Promise.all(r.map(async t=>{let i;try{i=await Ti(t.uri)}catch{i=new Image(300,300)}console.log("^^^^^^^^^^^^^^ FETCH IMAGE ~~~~~~~",i,i.height,i.width);const o=r.indexOf(t);e[o]={...t,width:i.width,height:i.height}})),e}async function Ii({images:r=[],itemIdentifier:e="",itemTitle:t="",baseHost:i="archive.org"}){const o=(await fetch(`https://${i}/metadata/${e}/metadata`).then(g=>g.json())).result||{},s=r.map((g,w)=>{const L=w%2===1?"L":"R";return console.log("imgPath",g),{uri:`https://${i}/download/${e}${g}`,leafNum:w,pageType:"Normal",pageSide:L}}),a=await Mi(s),d=[];a.forEach((g,w)=>{if(w===0){d.push([g]);return}if(w%2===1){d.push([g]);return}w%2===0&&d[d.length-1].push(g)});const c={...{bookId:e,bookPath:`/download/${e}`,bookTitle:t,defaults:"mode/1up",dfaultStartLeaf:0,ppi:200,data:d},...Kt(),enableSearch:!1,plugins:{textSelection:{enabled:!1}}},h={data:{streamOnly:!1,isRestricted:!1,id:e,subPrefix:e,bookUrl:`/details/${e}`},brOptions:c,metadata:o};return console.log("**** MANIFEST _---",h,c),h}var Ei=u`
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
`;class Bi extends C{static get styles(){return k`
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
    `}render(){return Ei}}customElements.define("ia-icon-audio",Bi);let he=class extends C{constructor(){super(...arguments),this.iaIdentifier="",this.gradType=""}updated(e){e.has("iaIdentifier")&&this.setGradType()}hashStrToInt(e){return e.split("").reduce((t,i)=>t+i.charCodeAt(0),0)}setGradType(){let e=0;this.iaIdentifier?(e=this.hashStrToInt(this.iaIdentifier)%6,this.gradType=`grad${e}`):this.gradType="grad0",this.dispatchEvent(new CustomEvent("iaMusicNoImageAvailable",{detail:{gradient:e,gradType:this.gradType,identifier:this.iaIdentifier},bubbles:!0,composed:!0}))}render(){return u`
      <div class="no-image">
        <ia-icon-audio class=${this.gradType}></ia-icon-audio>
      </div>
    `}};he.styles=k`
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
  `;l([m({type:String,reflect:!0,attribute:!0})],he.prototype,"iaIdentifier",void 0);l([m({type:String,reflect:!0})],he.prototype,"gradType",void 0);he=l([O("iamusic-noimage")],he);var Pi=u`
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
`;let S=class extends C{constructor(){super(...arguments),this.showAllPhotos=!1,this.baseHost="archive.org",this.signedIn=!1,this.itemIdentifier="",this.fullscreenActive=!1,this.reInitBrAtFullscreen=!1,this.noImageAvailable=!1,this.backgroundTheme="dark",this.bindBrEvents=()=>{window.addEventListener("BookReader:PostInit",this.handleBrPostInit),window.addEventListener("BookReader:fullscreenToggled",()=>{var e;this.fullscreenActive=((e=this.bookreader)===null||e===void 0?void 0:e.isFullscreen())||!1;const t=this.fullscreenActive?"fullscreenOpened":"fullscreenClosed";this.dispatchEvent(new Event(t))})}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("BookReader:PostInit",this.handleBrPostInit)}firstUpdated(){this.bindBrEvents()}updated(e){e.has("linerNotesManifest")&&this.linerNotesManifest&&this.loadFreshBookReaderFromManifest(),e.has("showAllPhotos")&&this.showAllPhotos&&this.initBr(500)}render(){if(this.noImageAvailable)return u`
        <div class="no-images">
          <iamusic-noimage .iaIdentifier=${this.itemIdentifier}
            >no image available</iamusic-noimage
          >
        </div>
      `;const e=this.backgroundTheme==="light"?"light":"",t=this.showAllPhotos?"show-back":"",i=this.fullscreenActive?"fullscreenActive":"";return u`
      <div
        class=${`flip-card ${t} ${i} ${e}`}
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
            @load=${s=>{const a=s.target,{width:d,height:n}=a.getBoundingClientRect();this.dispatchEvent(new CustomEvent("coverImageLoaded",{detail:{width:d,height:n,target:a}}))}}
          />
          <span class="sr-only">See all photos for ${i}</span>
          <div id="see-more-cta">
            <p><span>See more</span> <span>${Pi}</span></p>
          </div>
        </button>
      </div>
    `}handleBrPostInit(e){this.bookreader=e?.detail.props,window.br=this.bookreader,setTimeout(()=>{var t,i;(t=this.bookreader)===null||t===void 0||t.jumpToIndex(0),(i=this.bookreader)===null||i===void 0||i.resize()},1e3)}prepareLightDomHook(){var e,t;const i=(e=this.lightDomHook)===null||e===void 0?void 0:e.querySelector("div.bookreader-slot");i&&((t=this.lightDomHook)===null||t===void 0||t.removeChild(i))}async loadFreshBookReaderFromManifest(){await this.mountBookReaderLightDomHook(),await this.initBr()}async initBr(e=0){console.log("&&&& INIT BR"),await new Promise(t=>{setTimeout(()=>{var i,o;this.bookreader=this.linerNotesManifest&&Ci(this.linerNotesManifest),console.log("&&&& BR OPTIONS",(i=this.bookreader)===null||i===void 0?void 0:i.options),(o=this.bookreader)===null||o===void 0||o.init(),t()},e)})}async mountBookReaderLightDomHook(){await new Promise(e=>{var t,i,o;const s=(t=this.lightDomHook)===null||t===void 0?void 0:t.querySelector("div.bookreader-slot");s&&((i=this.lightDomHook)===null||i===void 0||i.removeChild(s));const a=document.createElement("div");a.setAttribute("slot","main"),a.classList.add("bookreader-slot");const d=document.createElement("div");d.classList.add("liner-notes"),a.append(d),(o=this.lightDomHook)===null||o===void 0||o.append(a),d.setAttribute("id","BookReader"),d.classList.add("BookReader"),e(!0)})}};S.styles=k`
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
      background-color: transparent;
    }

    /* see more cta */
    .flip-card #see-more-cta {
      font-family: 'Helvetica Neue Bold', Helvetica, Arial, sans-serif;
      font-weight: bold;
      font-size: 14px;
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

    .flip-card #see-more-cta {
      color: white;
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
  `;l([m({type:Boolean,reflect:!0})],S.prototype,"showAllPhotos",void 0);l([m({type:String,attribute:!0,reflect:!0})],S.prototype,"baseHost",void 0);l([m({type:Boolean,reflect:!0})],S.prototype,"signedIn",void 0);l([m({type:String,reflect:!0,attribute:!0})],S.prototype,"itemIdentifier",void 0);l([m({type:Object})],S.prototype,"itemMD",void 0);l([m({type:Object})],S.prototype,"linerNotesManifest",void 0);l([m({type:Object})],S.prototype,"bookreader",void 0);l([m({type:Boolean,reflect:!0})],S.prototype,"fullscreenActive",void 0);l([m({type:Boolean})],S.prototype,"reInitBrAtFullscreen",void 0);l([m({type:Boolean,reflect:!0})],S.prototype,"noImageAvailable",void 0);l([m({attribute:!0,type:String,reflect:!0})],S.prototype,"backgroundTheme",void 0);l([m({type:Object})],S.prototype,"lightDomHook",void 0);l([V("button.click-for-photos img")],S.prototype,"coverImage",void 0);S=l([O("iaux-photo-viewer")],S);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fe;const Ae=window,te=Ae.trustedTypes,_t=te?te.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ze="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,Yt="?"+D,Ni=`<${Yt}>`,Z=document,Se=()=>Z.createComment(""),ue=r=>r===null||typeof r!="object"&&typeof r!="function",Zt=Array.isArray,Ri=r=>Zt(r)||typeof r?.[Symbol.iterator]=="function",ze=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,xt=/>/g,W=RegExp(`>|${ze}(?:([^\\s"'>=/]+)(${ze}*=${ze}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),At=/'/g,St=/"/g,Gt=/^(?:script|style|textarea|title)$/i,pe=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Ct=new WeakMap,q=Z.createTreeWalker(Z,129,null,!1);function Jt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return _t!==void 0?_t.createHTML(e):e}const Hi=(r,e)=>{const t=r.length-1,i=[];let o,s=e===2?"<svg>":"",a=ae;for(let d=0;d<t;d++){const n=r[d];let c,y,h=-1,g=0;for(;g<n.length&&(a.lastIndex=g,y=a.exec(n),y!==null);)g=a.lastIndex,a===ae?y[1]==="!--"?a=kt:y[1]!==void 0?a=xt:y[2]!==void 0?(Gt.test(y[2])&&(o=RegExp("</"+y[2],"g")),a=W):y[3]!==void 0&&(a=W):a===W?y[0]===">"?(a=o??ae,h=-1):y[1]===void 0?h=-2:(h=a.lastIndex-y[2].length,c=y[1],a=y[3]===void 0?W:y[3]==='"'?St:At):a===St||a===At?a=W:a===kt||a===xt?a=ae:(a=W,o=void 0);const w=a===W&&r[d+1].startsWith("/>")?" ":"";s+=a===ae?n+Ni:h>=0?(i.push(c),n.slice(0,h)+Ze+n.slice(h)+D+w):n+D+(h===-2?(i.push(void 0),d):w)}return[Jt(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),i]};class ve{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,a=0;const d=e.length-1,n=this.parts,[c,y]=Hi(e,t);if(this.el=ve.createElement(c,i),q.currentNode=this.el.content,t===2){const h=this.el.content,g=h.firstChild;g.remove(),h.append(...g.childNodes)}for(;(o=q.nextNode())!==null&&n.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const h=[];for(const g of o.getAttributeNames())if(g.endsWith(Ze)||g.startsWith(D)){const w=y[a++];if(h.push(g),w!==void 0){const L=o.getAttribute(w.toLowerCase()+Ze).split(D),B=/([.?@])?(.*)/.exec(w);n.push({type:1,index:s,name:B[2],strings:L,ctor:B[1]==="."?Vi:B[1]==="?"?Di:B[1]==="@"?Ui:Ee})}else n.push({type:6,index:s})}for(const g of h)o.removeAttribute(g)}if(Gt.test(o.tagName)){const h=o.textContent.split(D),g=h.length-1;if(g>0){o.textContent=te?te.emptyScript:"";for(let w=0;w<g;w++)o.append(h[w],Se()),q.nextNode(),n.push({type:2,index:++s});o.append(h[g],Se())}}}else if(o.nodeType===8)if(o.data===Yt)n.push({type:2,index:s});else{let h=-1;for(;(h=o.data.indexOf(D,h+1))!==-1;)n.push({type:7,index:s}),h+=D.length-1}s++}}static createElement(e,t){const i=Z.createElement("template");return i.innerHTML=e,i}}function ie(r,e,t=r,i){var o,s,a,d;if(e===pe)return e;let n=i!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[i]:t._$Cl;const c=ue(e)?void 0:e._$litDirective$;return n?.constructor!==c&&((s=n?._$AO)===null||s===void 0||s.call(n,!1),c===void 0?n=void 0:(n=new c(r),n._$AT(r,t,i)),i!==void 0?((a=(d=t)._$Co)!==null&&a!==void 0?a:d._$Co=[])[i]=n:t._$Cl=n),n!==void 0&&(e=ie(r,n._$AS(r,e.values),n,i)),e}class Oi{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:o}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:Z).importNode(i,!0);q.currentNode=s;let a=q.nextNode(),d=0,n=0,c=o[0];for(;c!==void 0;){if(d===c.index){let y;c.type===2?y=new Ie(a,a.nextSibling,this,e):c.type===1?y=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(y=new Fi(a,this,e)),this._$AV.push(y),c=o[++n]}d!==c?.index&&(a=q.nextNode(),d++)}return q.currentNode=Z,s}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Ie{constructor(e,t,i,o){var s;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cp=(s=o?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ie(this,e,t),ue(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==pe&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ri(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==x&&ue(this._$AH)?this._$AA.nextSibling.data=e:this.$(Z.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ve.createElement(Jt(o.h,o.h[0]),this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(i);else{const a=new Oi(s,this),d=a.u(this.options);a.v(i),this.$(d),this._$AH=a}}_$AC(e){let t=Ct.get(e.strings);return t===void 0&&Ct.set(e.strings,t=new ve(e)),t}T(e){Zt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new Ie(this.k(Se()),this.k(Se()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Ee{constructor(e,t,i,o,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){const s=this.strings;let a=!1;if(s===void 0)e=ie(this,e,t,0),a=!ue(e)||e!==this._$AH&&e!==pe,a&&(this._$AH=e);else{const d=e;let n,c;for(e=s[0],n=0;n<s.length-1;n++)c=ie(this,d[i+n],t,n),c===pe&&(c=this._$AH[n]),a||(a=!ue(c)||c!==this._$AH[n]),c===x?e=x:e!==x&&(e+=(c??"")+s[n+1]),this._$AH[n]=c}a&&!o&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Vi extends Ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}}const Li=te?te.emptyScript:"";class Di extends Ee{constructor(){super(...arguments),this.type=4}j(e){e&&e!==x?this.element.setAttribute(this.name,Li):this.element.removeAttribute(this.name)}}class Ui extends Ee{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=ie(this,e,t,0))!==null&&i!==void 0?i:x)===pe)return;const o=this._$AH,s=e===x&&o!==x||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==x&&(o===x||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Fi{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}}const Tt=Ae.litHtmlPolyfillSupport;Tt?.(ve,Ie),((Fe=Ae.litHtmlVersions)!==null&&Fe!==void 0?Fe:Ae.litHtmlVersions=[]).push("2.8.0");let Ge=class extends C{render(){return u`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};Ge.styles=k`
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
      flex-direction: var(--iconLabelFlexDirection, row);
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
      white-space: nowrap;
      height: 100%;
    }

    /* https://css-tricks.com/flexbox-truncated-text/ */
    ::slotted(div.truncate) {
      display: flex;
      width: var(--labelWidth, 100%);
      text-align: left;
      word-wrap: break-word; /* Important for long words! */
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }

    @supports not (-webkit-line-clamp: 2) {
      ::slotted(div.truncate) {
        min-width: 0;
      }
    }
    @supports (-webkit-line-clamp: 2) {
      ::slotted(div.truncate) {
        min-width: 0;
        display: -webkit-box;
        overflow-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        /* max-height needed for Safari browser */
        max-height: var(--labelTruncateHeight, 30px);
        max-width: var(--labelWidth, 100%);
      }
    }
  `;Ge=l([O("ia-icon-label")],Ge);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},tt=r=>(...e)=>({_$litDirective$:r,values:e});class it{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=tt(class extends it{constructor(r){var e;if(super(r),r.type!==Qt.ATTRIBUTE||r.name!=="style"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((e,t)=>{const i=r[t];return i==null?e:e+`${t=t.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(r,[e]){const{style:t}=r.element;if(this.vt===void 0){this.vt=new Set;for(const i in e)this.vt.add(i);return this.render(e)}this.vt.forEach(i=>{e[i]==null&&(this.vt.delete(i),i.includes("-")?t.removeProperty(i):t[i]="")});for(const i in e){const o=e[i];o!=null&&(this.vt.add(i),i.includes("-")?t.setProperty(i,o):t[i]=o)}return F}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=tt(class extends it{constructor(r){var e;if(super(r),r.type!==Qt.ATTRIBUTE||r.name!=="class"||((e=r.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(e=>r[e]).join(" ")+" "}update(r,[e]){var t,i;if(this.nt===void 0){this.nt=new Set,r.strings!==void 0&&(this.st=new Set(r.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in e)e[s]&&!(!((t=this.st)===null||t===void 0)&&t.has(s))&&this.nt.add(s);return this.render(e)}const o=r.element.classList;this.nt.forEach(s=>{s in e||(o.remove(s),this.nt.delete(s))});for(const s in e){const a=!!e[s];a===this.nt.has(s)||((i=this.st)===null||i===void 0?void 0:i.has(s))||(a?(o.add(s),this.nt.add(s)):(o.remove(s),this.nt.delete(s)))}return F}});var v;(function(r){r.ia="ia",r.beta="beta",r.youtube="youtube",r.spotify="spotify",r.webamp="webamp"})(v||(v={}));var T;(function(r){r.iaSamples="Samples",r.iaPlayer="Player",r.beta="Beta",r.spotify="Spotify",r.webamp="Webamp",r.youtube="YouTube"})(T||(T={}));const P={ia:u`<img
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
  />`},Be=({label:r=T.iaPlayer,selected:e})=>{const i=ot({filter:e?"invert(1)":"invert(0)",height:"20px",width:"20px"}),o=rt({selected:e,"invert-icon-at-hover-selected":e});return u`
    <ia-icon-label class=${o}>
      <span slot="icon" style=${i}>${P.ia}</span>
      <span>${r}</span>
    </ia-icon-label>
  `},Xt=r=>{const t=ot({filter:r?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=rt({selected:r,"invert-icon-at-hover-selected":r});return u`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${t}>${P.beta}</span>
      <span>${T.beta}</span>
    </ia-icon-label>
  `},ei=r=>u`
  <ia-icon-label class="${r?"selected":""}">
    <span slot="icon">${P.spotify}</span>
    <span>${T.spotify}</span>
  </ia-icon-label>
`,ti=r=>{const t=ot({filter:r?"invert(1)":"invert(0)",height:"20px",width:"20px"}),i=rt({selected:r,"invert-icon-at-hover-selected":r});return u`
    <ia-icon-label class=${i}>
      <span slot="icon" style=${t}>${P.webamp}</span>
      <span>Webamp</span>
    </ia-icon-label>
  `},ii=r=>u`
  <ia-icon-label class="${r?"selected":""}">
    <span slot="icon">${P.youtube}</span>
    <span>${T.youtube}</span>
  </ia-icon-label>
`,zi=({samples:r,onClick:e,href:t,selected:i})=>{const o=r?T.iaSamples:T.iaPlayer;return u`
    <a href=${t} @click=${()=>e()}>${Be({label:o,selected:i})}</button>
  `},ji=({samples:r,onClick:e,selected:t})=>{const i=r?T.iaSamples:T.iaPlayer;return u`
    <button @click=${o=>e(o)} class="ia">
      ${Be({label:i,selected:t})}
    </button>
  `},Wi=({onClick:r,selected:e})=>u`<button
  @click=${t=>r(t)}
  class="ia-beta"
>
  ${Xt(e)}
</button>`,qi=({onClick:r,selected:e})=>u`<button
  @click=${t=>r(t)}
  class="sp"
>
  ${ei(e)}
</button>`,Ki=({onClick:r,href:e,selected:t})=>{const i=`${e}?webamp=default`;return u`
    <a href=${i} @click=${o=>r(o)} class="wa">${ti(t)}</button>
  `},Yi=({onClick:r,selected:e})=>u`<button
  @click=${t=>r(t)}
  class="yt"
>
  ${ii(e)}
</button>`,Zi=({samples:r,onClick:e,href:t,selectedOption:i})=>({url:t,selectedHandler:s=>{e(s)},label:Be({label:r?T.iaSamples:T.iaPlayer,selected:i===v.ia}),id:v.ia}),Gi=({samples:r,onClick:e,selectedOption:t})=>({selectedHandler:o=>{e(o)},label:Be({label:r?T.iaSamples:T.iaPlayer,selected:t===v.ia}),id:v.ia}),Ji=({onClick:r,selectedOption:e})=>({selectedHandler:i=>{r(i)},label:Xt(e===v.beta),id:v.beta}),Qi=({onClick:r,selectedOption:e})=>({selectedHandler:i=>{r(i)},label:ei(e===v.spotify),id:v.spotify}),Xi=({href:r,onClick:e,selectedOption:t})=>{const i=o=>{e(o)};return{url:`${r}?webamp=default`,selectedHandler:i,label:ti(t===v.webamp),id:v.webamp}},eo=({onClick:r,selectedOption:e})=>({selectedHandler:i=>{r(i)},label:ii(e===v.youtube),id:v.youtube}),to=r=>{const{spotify:e,beta:t,youtube:i,selectedOption:o}=r;return[o===v.webamp?Zi(r):Gi(r),t?Ji(r):null,e?Qi(r):null,i?eo(r):null,Xi(r)].filter(Boolean)};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:io}=ui,fe=(r,e)=>e===void 0?r?._$litType$!==void 0:r?._$litType$===e,Mt=()=>document.createComment(""),It=(r,e,t)=>{var i;const o=r._$AA.parentNode,s=e===void 0?r._$AB:e._$AA;if(t===void 0){const a=o.insertBefore(Mt(),s),d=o.insertBefore(Mt(),s);t=new io(a,d,r,r.options)}else{const a=t._$AB.nextSibling,d=t._$AM,n=d!==r;if(n){let c;(i=t._$AQ)===null||i===void 0||i.call(t,r),t._$AM=r,t._$AP!==void 0&&(c=r._$AU)!==d._$AU&&t._$AP(c)}if(a!==s||n){let c=t._$AA;for(;c!==a;){const y=c.nextSibling;o.insertBefore(c,s),c=y}}}return t},oo={},Et=(r,e=oo)=>r._$AH=e,Bt=r=>r._$AH,ro=r=>{r._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const so=tt(class extends it{constructor(r){super(r),this.et=new WeakMap}render(r){return[r]}update(r,[e]){if(fe(this.it)&&(!fe(e)||this.it.strings!==e.strings)){const t=Bt(r).pop();let i=this.et.get(this.it.strings);if(i===void 0){const o=document.createDocumentFragment();i=Wt(b,o),i.setConnected(!1),this.et.set(this.it.strings,i)}Et(i,[t]),It(i,void 0,t)}if(fe(e)){if(!fe(this.it)||this.it.strings!==e.strings){const t=this.et.get(e.strings);if(t!==void 0){const i=Bt(t).pop();ro(r),It(r,void 0,i),Et(r,[i])}}this.it=e}else this.it=void 0;return this.render(e)}});let A=class extends C{constructor(){super(...arguments),this.open=!1,this.displayCaret=!1,this.closeOnSelect=!1,this.openViaButton=!0,this.openViaCaret=!0,this.includeSelectedOption=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{},this.isCustomList=!1,this.closeOnEscape=!1,this.closeOnBackdropClick=!1,this.dropdownBackdropVisible=!1,this.boundKeyboardListener=e=>{switch(e.key){case"Escape":case"Esc":this.closeOptions();break}},this.closeOptions=()=>{this.dropdownBackdropVisible=!1,this.open=!1},this.handlingCaretClick=!1}disconnectedCallback(){var e;(e=super.disconnectedCallback)===null||e===void 0||e.call(this),this.removeKeyboardListener()}setupKeyboardListener(){this.closeOnEscape&&document.addEventListener("keydown",this.boundKeyboardListener)}removeKeyboardListener(){this.closeOnEscape&&document.removeEventListener("keydown",this.boundKeyboardListener)}get dropdownState(){return this.open?(this.setupKeyboardListener(),"open"):(this.removeKeyboardListener(),"closed")}async firstUpdated(){await new Promise(e=>setTimeout(e,0)),this.addEventListener("closeDropdown",this.closeOptions)}get dropdownBackdrop(){return u`
      <div
        id="dropdown-backdrop"
        @keyup=${this.closeOptions}
        @click=${this.closeOptions}
      ></div>
    `}renderOption(e){const{label:t,url:i=void 0,id:o}=e;let s;const a=this.selectedOption===o?"selected":"";return i?s=u`<a
        href=${i}
        @click=${()=>this.optionClicked(e)}
        >${t}</a
      >`:s=u`<button
        @click=${()=>this.optionClicked(e)}
      >
        ${t}
      </button>`,u`<li class=${a}>${s}</li>`}optionClicked(e){var t;this.selectedOption!==e.id&&(this.selectedOption=e.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:e}})),(t=e.selectedHandler)===null||t===void 0||t.call(e,e)),this.closeOnSelect&&this.closeOptions()}toggleOptions(){this.open=!this.open,this.dropdownBackdropVisible=this.open}mainButtonClicked(){if(this.handlingCaretClick){this.handlingCaretClick=!1;return}this.openViaButton&&this.toggleOptions()}caretInteracted(){this.openViaCaret&&this.toggleOptions()}caretClicked(){this.handlingCaretClick=!0,this.caretInteracted()}caretKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.caretInteracted())}get caretUp(){return mt`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
      fill=""></path>
  </svg>`}get caretDown(){return mt`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
    fill=""></path>
  </svg>`}get availableOptions(){return this.includeSelectedOption?this.options:this.options.filter(e=>this.selectedOption!==e.id)}get dropdownFormat(){return this.isCustomList?u`<slot name="list"></slot>`:u`${this.availableOptions.map(e=>this.renderOption(e))}`}render(){return u`
      <div class="ia-dropdown-group">
        <button class="click-main" @click=${this.mainButtonClicked}>
          <span class="cta sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.displayCaret?u`
                <span
                  class="caret"
                  tabindex=${this.openViaCaret&&!this.openViaButton?"0":b}
                  role=${this.openViaCaret?"button":b}
                  @click=${this.caretClicked}
                  @keydown=${this.caretKeyDown}
                >
                  <span ?hidden=${!this.open} class="caret-up-slot">
                    <slot name="caret-up">${this.caretUp}</slot>
                  </span>
                  <span ?hidden=${this.open} class="caret-down-slot">
                    <slot name="caret-down">${this.caretDown}</slot>
                  </span>
                </span>
              `:b}
        </button>

        <ul class="dropdown-main ${this.dropdownState}">
          ${this.dropdownFormat}
        </ul>

        ${this.closeOnBackdropClick&&this.dropdownBackdropVisible?this.dropdownBackdrop:b}
      </div>
    `}static get styles(){const e=k`var(--dropdownBorderWidth, 1px)`,t=k`var(--dropdownBorderRadius, 4px)`,i=k`var(--dropdownBorderColor, #fff)`,o=k`var(--dropdownBgColor, #333)`,s=k`var(--dropdownTextColor, #fff)`,a=k`var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3))`,d=k`var(--dropdownSelectedBgColor, #fff)`;return k`
      :host {
        display: inline;
        color: ${s};
      }

      svg.caret-up-svg,
      svg.caret-down-svg,
      ::slotted(svg.caret-up-svg),
      ::slotted(svg.caret-down-svg) {
        fill: var(--dropdownCaretColor, #fff);
        vertical-align: middle;
      }

      button.click-main {
        background: transparent;
        color: inherit;
        padding: var(--dropdownMainButtonPadding, 0px);
        border: var(--dropdownMainButtonBorder, none);
        border-radius: var(--dropdownMainButtonBorderRadius, none);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        flex-direction: var(--dropdownMainButtonFlexDirection, row);
        z-index: var(--dropdownListZIndex, 2);
      }

      button.click-main:hover {
        background-color: var(--dropdownMainButtonHoverBgColor, inherit);
      }

      button.click-main:focus,
      button.click-main:focus-visible {
        background-color: var(--dropdownMainButtonFocusBgColor, inherit);
      }

      button.click-main:active {
        background-color: var(--dropdownMainButtonActiveBgColor, inherit);
      }

      button slot[name='dropdown-label'] {
        /* Set var to 0px for column layout */
        padding-right: var(--buttonSlotPaddingRight, 5px);
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

      .caret {
        /* Maintain centered caret position but with a full-height clickable region */
        display: flex;
        align-self: stretch;
        align-items: center;
        padding: var(--caretPadding, 0px);
      }

      .caret svg {
        height: var(--caretHeight, 10px);
        width: var(--caretWidth, 20px);
      }

      #dropdown-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: transparent;
        z-index: 1;
      }

      ul {
        z-index: var(--dropdownListZIndex, 2);
      }

      ul.dropdown-main.closed {
        visibility: hidden;
        height: 1px;
        width: 1px;
      }

      ul.dropdown-main {
        position: var(--dropdownListPosition, absolute);
        list-style: none;
        margin: var(--dropdownOffsetTop, 5px) 0 0 0;
        padding: 0;
        color: ${s};
        font-size: var(--dropdownFontSize, inherit);

        border-top: var(--dropdownBorderTopWidth, ${e}) solid
          ${i};
        border-right: var(--dropdownBorderRightWidth, ${e})
          solid ${i};
        border-bottom: var(--dropdownBorderBottomWidth, ${e})
          solid ${i};
        border-left: var(--dropdownBorderLeftWidth, ${e})
          solid ${i};

        border-radius: var(
            --dropdownBorderTopLeftRadius,
            ${t}
          )
          var(--dropdownBorderTopRightRadius, ${t})
          var(--dropdownBorderBottomRightRadius, ${t})
          var(--dropdownBorderBottomLeftRadius, ${t});

        white-space: var(--dropdownWhiteSpace, normal);
      }

      ul.dropdown-main {
        background: ${o};
        /* Prevent top/bottom inner li from overlapping inner border */
        overflow: hidden;
      }

      ul.dropdown-main li:hover {
        background-color: ${a};
        color: var(--dropdownHoverTextColor, #fff);
        list-style: none;
        cursor: pointer;
      }

      ul.dropdown-main li:hover:first-child {
        border-top-color: ${a};
      }

      ul.dropdown-main li:hover:last-child {
        border-bottom-color: ${a};
      }

      ul.dropdown-main li:hover:not(:first-child) {
        border-top: 0.5px solid var(--dropdownHoverTopBottomBorderColor, #333);
      }
      ul.dropdown-main li:hover:not(:last-child) {
        border-bottom: 0.5px solid
          var(--dropdownHoverTopBottomBorderColor, #333);
      }

      ul.dropdown-main li.selected:last-child {
        border-bottom-color: ${d};
      }

      ul.dropdown-main li.selected:first-child {
        border-top-color: ${d};
      }

      ul.dropdown-main li:hover > *,
      ul.dropdown-main li:focus-within > * {
        background-color: ${a};
        color: var(--dropdownHoverTextColor, #fff);
      }

      ul.dropdown-main li.selected > * {
        background-color: ${d};
        color: var(--dropdownSelectedTextColor, #2c2c2c);
      }

      ul.dropdown-main li {
        background: ${o};
        list-style: none;
        height: 30px;
        cursor: pointer;
        border-bottom: 0.5px solid ${o};
        border-top: 0.5px solid ${o};
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
        border-top-left-radius: var(--dropdownBorderTopLeftRadius, 4px);
        border-top-right-radius: var(--dropdownBorderTopRightRadius, 4px);
      }

      ul.dropdown-main li:last-child {
        border-bottom-right-radius: var(--dropdownBorderBottomRightRadius, 4px);
        border-bottom-left-radius: var(--dropdownBorderBottomLeftRadius, 4px);
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
        padding: var(--dropdownItemPaddingTop, 5px)
          var(--dropdownItemPaddingRight, 10px)
          var(--dropdownItemPaddingBottom, 5px)
          var(--dropdownItemPaddingLeft, 10px);
        box-sizing: border-box;
      }

      ul.dropdown-main li > * {
        width: 100%;
        height: inherit;
        color: ${s};
        background: transparent;
        padding: 0;
      }
    `}};l([m({type:Boolean,attribute:!0})],A.prototype,"open",void 0);l([m({type:Boolean,attribute:!0})],A.prototype,"displayCaret",void 0);l([m({type:Boolean,attribute:!0})],A.prototype,"closeOnSelect",void 0);l([m({type:Boolean,attribute:!0})],A.prototype,"openViaButton",void 0);l([m({type:Boolean,attribute:!0})],A.prototype,"openViaCaret",void 0);l([m({type:Boolean,attribute:!0})],A.prototype,"includeSelectedOption",void 0);l([m({type:String,attribute:!0})],A.prototype,"selectedOption",void 0);l([m({type:Array})],A.prototype,"options",void 0);l([m({type:String})],A.prototype,"optionGroup",void 0);l([m({type:Function})],A.prototype,"optionSelected",void 0);l([m({type:Boolean,reflect:!0})],A.prototype,"isCustomList",void 0);l([m({type:Boolean,reflect:!0})],A.prototype,"closeOnEscape",void 0);l([m({type:Boolean,reflect:!0})],A.prototype,"closeOnBackdropClick",void 0);l([qt()],A.prototype,"dropdownBackdropVisible",void 0);l([V(".click-main")],A.prototype,"mainButton",void 0);A=l([O("ia-dropdown")],A);const ao=k`
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
`;var Ce;(function(r){r.postInit="postInit",r.channelChange="channelChange"})(Ce||(Ce={}));let M=class extends C{constructor(){super(...arguments),this.youtube=!1,this.spotify=!1,this.beta=!1,this.webamp=!0,this.samples=!1,this.backgroundTheme="dark",this.selected=v.ia,this.displayStyle="radio",this.url=""}firstUpdated(){this.dispatchEvent(new CustomEvent(Ce.postInit,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}emitChannelChanged(){this.dispatchEvent(new CustomEvent(Ce.channelChange,{detail:{channel:this.selected},composed:!0,bubbles:!0}))}iaClicked(){this.selected!==v.ia&&(this.selected=v.ia,this.emitChannelChanged())}betaClicked(){this.selected!==v.beta&&(this.selected=v.beta,this.emitChannelChanged())}spotifyClicked(){this.selected!==v.spotify&&(this.selected=v.spotify,this.emitChannelChanged())}webampClicked(){this.selected!==v.webamp&&(this.selected=v.webamp,this.emitChannelChanged())}youtubeClicked(){this.selected!==v.youtube&&(this.selected=v.youtube,this.emitChannelChanged())}dropdownOptionSelected(e){this.selected=e.id,this.emitChannelChanged(),this.iaDropdown.open=!1}get iaLinkSelector(){const e=this.selected===v.ia?"selected":"";return u`
      <li class=${e}>
        ${zi({samples:this.samples,selected:this.selected===v.ia,onClick:()=>this.iaClicked(),href:this.url})}
      </li>
    `}get iaButtonSelector(){const e=this.selected===v.ia?"selected":"";return u`
      <li class=${e}>
        ${ji({samples:this.samples,selected:this.selected===v.ia,onClick:()=>this.iaClicked()})}
      </li>
    `}get iaBetaSelector(){const e=this.selected===v.beta?"selected":"";return u`
      <li class=${e}>
        ${Wi({selected:this.selected===v.beta,onClick:()=>this.betaClicked()})}
      </li>
    `}get spotifySelector(){const e=this.selected===v.spotify?"selected":"";return u`
      <li class=${e}>
        ${qi({selected:this.selected===v.spotify,onClick:()=>this.spotifyClicked()})}
      </li>
    `}get webampSelector(){const e=this.selected===v.webamp?"selected":"";return u`
      <li class=${e}>
        ${Ki({href:this.url||window.location.href,selected:this.selected===v.webamp,onClick:()=>this.webampClicked()})}
      </li>
    `}get youtubeSelector(){const e=this.selected===v.youtube?"selected":"";return u`
      <li class=${e}>
        ${Yi({selected:this.selected===v.youtube,onClick:()=>this.youtubeClicked()})}
      </li>
    `}get properIaSelector(){return this.selected===v.webamp?this.iaLinkSelector:this.iaButtonSelector}toggleDisplayStyle(){const e=this.displayStyle==="dropdown"?"radio":"dropdown";this.displayStyle=e}shouldShowChannelType(e){const t=this.selected===e;return this.displayStyle==="radio"?!0:!(this.displayStyle==="dropdown"&&t)}get dropdownOptions(){const{samples:e,beta:t,spotify:i,webamp:o,youtube:s,url:a,selected:d}=this;return to({selectedOption:d,samples:!!e,beta:t,spotify:i,webamp:o,youtube:s,href:a,onClick:this.dropdownOptionSelected.bind(this)})}get currentlySelectedIcon(){switch(this.selected){case v.beta:return P.beta;case v.spotify:return P.spotify;case v.youtube:return P.youtube;case v.webamp:return P.webamp;default:return P.ia}}get dropdown(){return u`
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
          ${this.properIaSelector} ${this.beta?this.iaBetaSelector:b}
          ${this.youtube?this.youtubeSelector:b}
          ${this.spotify?this.spotifySelector:b}
          ${this.webamp?this.webampSelector:b}
        </ul>
      </div>
    `}render(){return u`
      <section
        id=${this.displayStyle}
        class="${this.displayStyle} ${this.backgroundTheme}"
      >
        ${so(this.displayStyle==="radio"?this.radioView:this.dropdown)}
      </section>
    `}};M.styles=[k`
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
    `,ao];l([m({attribute:!0,type:Boolean,reflect:!0})],M.prototype,"youtube",void 0);l([m({attribute:!0,type:Boolean,reflect:!0})],M.prototype,"spotify",void 0);l([m({attribute:!0,type:Boolean,reflect:!0})],M.prototype,"beta",void 0);l([m({attribute:!0,type:Boolean,reflect:!0})],M.prototype,"webamp",void 0);l([m({attribute:!0,type:Boolean,reflect:!0})],M.prototype,"samples",void 0);l([m({attribute:!0,type:String,reflect:!0})],M.prototype,"backgroundTheme",void 0);l([m({type:String,reflect:!0})],M.prototype,"selected",void 0);l([m({type:String,reflect:!0})],M.prototype,"displayStyle",void 0);l([m({type:String})],M.prototype,"url",void 0);l([V("ia-dropdown")],M.prototype,"iaDropdown",void 0);M=l([O("channel-selector")],M);let Te=class extends C{constructor(){super(...arguments),this.iaUrn=""}get spotifyUrl(){return!this.iaUrn||!this.iaUrn.match(/urn:spotify:/g)?"":`https://open.spotify.com/embed/${this.iaUrn.replace(/urn:spotify:/g,"").replace(/:/g,"/")}`}render(){const e=this.spotifyUrl;return e?u`
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
    `:u`<h3>Invalid Spotify URI: ${this.iaUrn}</h3>`}static get styles(){return[k`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}};l([m({type:String,attribute:!0,reflect:!0})],Te.prototype,"iaUrn",void 0);l([V("iframe")],Te.prototype,"iframe",void 0);Te=l([O("spotify-player")],Te);let oe=class extends C{constructor(){super(...arguments),this.iaUrn="",this.display=!1,this.baseHost="https://archive.org"}get youTubeUrl(){if(!this.iaUrn||!this.iaUrn.match(/urn:youtube:/g))return"";const t=this.iaUrn.replace(/urn:youtube:/g,"").replace(/:/g,"/"),i=`origin=${this.baseHost}&widgetid=1&autoplay=1&rel=0`;return`https://www.youtube.com/embed/${t}?${i}`}render(){const e=this.youTubeUrl;return e?u`
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
    `:b}static get styles(){return[k`
        :host {
          display: block;
          width: 100%;
          height: 100%;
        }
      `]}};l([m({type:String,reflect:!0})],oe.prototype,"iaUrn",void 0);l([m({type:Boolean,reflect:!0})],oe.prototype,"display",void 0);l([m({type:String})],oe.prototype,"baseHost",void 0);l([V("iframe")],oe.prototype,"iframe",void 0);oe=l([O("youtube-player")],oe);let H=class extends C{constructor(){super(...arguments),this.selectedChannel="",this.playerApi=void 0}updated(e){e.has("album")&&this.album&&this.dispatchAlbumInfo(),e.has("selectedChannel")&&this.selectedChannel&&this.album&&this.updateToSelectedChannel(),e.has("selectedTrack")&&this.selectedTrack&&this.dispatchSelectedTrack()}dispatchSelectedTrack(){console.log("externalchannels-player: SELECTED TRACK",this.selectedTrack),this.dispatchEvent(new CustomEvent("externalChannelsSelectedTrack",{detail:{track:this.selectedTrack}}))}dispatchAlbumInfo(){var e,t;console.log("externalchannels-player: ALBUM INFO",this.album),this.dispatchEvent(new CustomEvent("externalChannelsPlayerLoaded",{detail:{album:this.album,spotifyTracks:((e=this.album)===null||e===void 0?void 0:e.spotifyTracks)||[],youtubeTracks:((t=this.album)===null||t===void 0?void 0:t.youtubeTracks)||[]}}))}onTracklistClickCallback(e){var t,i,o,s,a;this.currentTrackNum=e+1;let d=(t=this.album)===null||t===void 0?void 0:t.tracks.find(n=>n.track===this.currentTrackNum);if(this.selectedChannel===v.spotify){const n=(i=this.album)===null||i===void 0?void 0:i.spotifyTracks.find(c=>c.track===this.currentTrackNum);d=n??((o=this.album)===null||o===void 0?void 0:o.spotifyTracks[0])}else if(this.selectedChannel===v.youtube){const n=(s=this.album)===null||s===void 0?void 0:s.youtubeTracks.find(c=>c.track===this.currentTrackNum);d=n??((a=this.album)===null||a===void 0?void 0:a.youtubeTracks[0])}this.selectedTrack=d,console.log("*** onTracklistClickCallback ** ",{selectedTrack:d,iaTrackNum:e,currentTrackNum:this.currentTrackNum})}updateToSelectedChannel(){var e,t,i,o,s;if(this.selectedChannel==="youtube"){const a=this.album.youtubeTracks||[],d=[];if(console.log("youtubeTracks",a),a.length){const n=a.reduce((c,y)=>{const h=Number.isInteger(y.track)?`${y.track}`:"n/a";if(c.push(h),h!=="n/a"){const g=Number(h)-1;d.push(g)}return c},[]).join(", ");console.log("ytTrackNums",{ytTrackNums:n,iaYtTracklist:d}),(e=this.playerApi)===null||e===void 0||e.headless(d,c=>this.onTracklistClickCallback(c))}}else if(this.selectedChannel==="spotify"){const a=((t=this.album)===null||t===void 0?void 0:t.spotifyTracks)||[],d=[];if(console.log("spotifyTracks",a),a.length){const n=((i=this.album)===null||i===void 0?void 0:i.spotifyTracks.reduce((c,y)=>{const h=Number.isInteger(y.track)?`${y.track}`:"n/a";if(c.push(h),h!=="n/a"){const g=Number(h)-1;d.push(g)}return c},[])).join(", ");console.log("spTrackNums ------",{spTrackNums:n,iaSpTracklist:d}),(o=this.playerApi)===null||o===void 0||o.headless(d,c=>this.onTracklistClickCallback(c))}}else(s=this.playerApi)===null||s===void 0||s.headless()}render(){var e,t;if(!(this.selectedChannel==="youtube"||this.selectedChannel==="spotify"))return b;if(this.selectedChannel==="spotify"){const o=(e=this.album)===null||e===void 0?void 0:e.spotifyTracks.find(s=>{var a;return s?.track===((a=this.selectedTrack)===null||a===void 0?void 0:a.track)});if(o)return u`
          <spotify-player .iaUrn=${o?.spotifyId}></spotify-player>
        `}else if(this.selectedChannel==="youtube"){const o=(t=this.album)===null||t===void 0?void 0:t.youtubeTracks.find(s=>{var a;return s.track===((a=this.selectedTrack)===null||a===void 0?void 0:a.track)});if(console.log("~~~~ trackFound YT ID",o?.youtubeId,o),o)return u`
          <youtube-player .iaUrn=${o.youtubeId}></youtube-player>
        `}return b}};l([m({type:String,attribute:!0,reflect:!0})],H.prototype,"selectedChannel",void 0);l([m({type:Object})],H.prototype,"playerApi",void 0);l([m({type:Object})],H.prototype,"album",void 0);l([m({type:Object})],H.prototype,"selectedTrack",void 0);l([qt()],H.prototype,"currentTrackNum",void 0);l([V("spotify-player")],H.prototype,"spotifyPlayer",void 0);l([V("youtube-player")],H.prototype,"youtubePlayer",void 0);H=l([O("externalchannels-player")],H);class no extends z{constructor(e,t="archive.org"){super(e),this.isSegmented=!1,this.private=!1,this.details=null,this.orig="",this.image="",this.duration=0,this.sources=[],this._playlistTrack=null,this.details=e.details,this.baseHost=t}setPlaylistInfo(e){this._playlistTrack=e,this.orig=e.orig,this.image=e.image,this.duration=e.duration,this.sources=e.sources}get url(){return`https://${this.baseHost}/${this.name}`}get title(){var e;return((e=this._playlistTrack)===null||e===void 0?void 0:e.title)||(this===null||this===void 0?void 0:this.title)||this.name}get youtubeId(){return this.externalIds.find(e=>e.match(/youtube/gi))||""}get spotifyId(){return this.externalIds.find(e=>e.match(/spotify/gi))||""}get externalIds(){return Array.isArray(this.rawValue["external-identifier"])?this.rawValue["external-identifier"]:[this.rawValue["external-identifier"]||""]}}class lo{constructor(e,t){this.tracks=[],this.images=[],this.linerNotes=[],this.tracksAreSegmented=!1,this.baseHost="archive.org",this.relatedFiles=[],this.rawPlaylistTracks=[],this.item=new et(e),this.rawPlaylistTracks=t,this.tracks=t,this.filterFiles(this.item.files)}get title(){var e,t;return((t=(e=this.item.metadata)===null||e===void 0?void 0:e.title)===null||t===void 0?void 0:t.values.join("; "))||""}get creator(){var e,t,i,o,s,a;return!((t=(e=this.item.metadata)===null||e===void 0?void 0:e.creator)===null||t===void 0)&&t.values?(o=(i=this.item.metadata)===null||i===void 0?void 0:i.creator)===null||o===void 0?void 0:o.values.join("; "):!((s=this.item.metadata.rawMetadata)===null||s===void 0)&&s.artist?(a=this.item.metadata.rawMetadata)===null||a===void 0?void 0:a.artist:""}get youtubeId(){return this.externalIds.find(e=>e.match(/youtube/gi))||""}get spotifyId(){return this.externalIds.find(e=>e.match(/spotify/gi))||""}get externalIds(){var e;if(!this.item.metadata.rawMetadata)return[""];const t=this.item.metadata["external-identifier"];return!((e=t?.values)===null||e===void 0)&&e.length?t.values:[t?.value||""]}get youtubeTracks(){const e=this.tracks.filter(t=>t.youtubeId);return this.albumTrackOption("yt")!==void 0&&e.unshift(this.albumTrackOption("yt")),e}get spotifyTracks(){const e=this.tracks.filter(t=>t.spotifyId);return this.albumTrackOption("sp")!==void 0&&e.unshift(this.albumTrackOption("sp")),e}get albumImage(){const e=this.images.find(o=>o.format==="Item Image"),t=`https://${this.baseHost}/download/${this.item.metadata.identifier}/`;if(e)return`${t}${e.name}`;const i=this.images.find(o=>{const s=["Item Image","JPEG Thumb"];return o.source==="original"&&!s.includes(o.format)});return i?`${t}${i.name}`:`${t}__ia_thumb.jpg`}albumTrackOption(e){const t={title:"Full Album",orig:"",image:"",duration:"-- : --",track:0,iaTrackNum:-1,sources:[]};if(e==="yt"&&this.youtubeId)return{...t,youtubeId:this.youtubeId};if(e==="sp"&&this.spotifyId)return{...t,spotifyId:this.spotifyId}}isAlbumRelatedFile(e){var t,i;return!!(!((t=e.name.match(/.(ffp|md5)$/g))===null||t===void 0)&&t.length)&&!!(!((i=e.original)===null||i===void 0)&&i.length)&&e.source==="derivative"}isValidAudioFile(e=""){var t;return!!(!((t=e.match(/(mp3|ogg|flac|m4a|wma|aiff|aac|aa|ra|ram|shn|wav|wave|opus)$/gi))===null||t===void 0)&&t.length)}isValidImageFile(e=""){var t;return!!(!((t=e.match(/.(png|jpg|jpeg)$/gi))===null||t===void 0)&&t.length)}isValidImageFileFormat(e=""){var t;return!!(!((t=e.match(/(png|jpg|jpeg)/gi))===null||t===void 0)&&t.length)}isValidSegmentFile(e=""){var t;return!!(!((t=e.match(/_segments.(json|xml)$/gi))===null||t===void 0)&&t.length)}isSpectrogram(e=""){var t;return!!(!((t=e.match(/spectrogram/gi))===null||t===void 0)&&t.length)}isSampleMP3(e=""){var t;return!!(!((t=e.match(/_sample\.mp3$/gi))===null||t===void 0)&&t.length)}hasScannedLinerNotes(e=""){var t;return!!(!((t=e.match(/_jp2.(zip|tar)/gi))===null||t===void 0)&&t.length)}filterFiles(e){const t=[],i={};e.forEach(s=>{var a,d;const n=s.rawValue,c=this.isValidAudioFile(n.name);if(this.isAlbumRelatedFile(n)){this.relatedFiles.push(n);return}if(this.isValidSegmentFile(n.name)&&(this.tracksAreSegmented=!0,this.relatedFiles.push(n),n.original&&this.isValidAudioFile(n.name)&&!i[n.original]&&(i[n.original]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0})),n.source==="original"&&!i[n.name]&&c&&(i[n.name]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0}),n.original&&this.isValidAudioFile(n.original)&&!i[n.original]&&(i[n.original]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0}),this.hasScannedLinerNotes(n.name)&&this.linerNotes.push(n),this.isValidImageFile(n.name)){n.original&&this.isValidAudioFile(n.original)?i[n.original].spectrogram=n:t.push(n);return}if(n.original&&this.isValidAudioFile(n.original)&&!this.isValidAudioFile(n.name)){i[n.original].related.push(n);return}if(!this.isValidAudioFile(n.name)||!this.isValidImageFile(n.name)&&!this.isValidAudioFile(n.name))return;const y=this.isValidSegmentFile(n.original)&&this.isValidAudioFile(n.name);if(n.source==="original"&&this.isValidAudioFile(n.name)||y){i[n.name]||(i[n.name]={primary:void 0,spectrogram:void 0,related:[],sampleMp3:void 0,fullMp3:void 0}),i[n.name].primary=n;return}if(((a=n.name.match(/_sample\.mp3$/))===null||a===void 0?void 0:a.length)&&n.original){i[n.original].sampleMp3=new z(n);return}this.isValidAudioFile(n.name)&&!this.isSampleMP3(n.name)&&this.isValidAudioFile(n.original)&&n.original&&(!((d=n.name.match(/.mp3$/))===null||d===void 0)&&d.length?i[n.original].fullMp3=n:i[n.original].related.push(n))}),this.images=t;const o=[];this.tracks.forEach((s,a)=>{const d=i[s.orig].primary,n=new no({...s,...d,details:i[s.orig]},"archive.org");n.setPlaylistInfo(s),o[a]=n}),this.tracks=o}}await G(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/jquery-3.js"),[]);await G(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/BookReader.js"),[]);await G(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/plugins/plugin.search.js"),[]);await G(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/plugins/plugin.tts.js"),[]);await G(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/plugins/plugin.archive_analytics.js"),[]);await G(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/BookReader/plugins/plugin.text_selection.js"),[]);await G(()=>import("https://esm.archive.org/@internetarchive/bookreader@5.0.0-55/src/ia-bookreader/ia-bookreader.js"),[]);const oi=await fetch("./liner-notes-manifest-demo.json").then(r=>r.json());console.log("*** defaultLinerNotesManifest",oi);const ye=await fetch("./loose-images-demo.json").then(r=>r.json());console.log("*** defaultLooseImagesData",ye);const co=[{id:"cd_first-life_various-artists",desc:"CD - with no Liner notes, yes YT, yes SP, no Webamp"},{id:"lp_the-dark-side-of-the-moon_pink-floyd",desc:"LP - Pink Floyd Dark Side of the Moon"},{id:"cd_the-dark-side-of-the-moon_pink-floyd",desc:"CD - Pink Floyd Dark Side of the Moon"},{id:"capitol-15045-b-cigarettes-whiskey-and-wild-wild-women",desc:"78 - w/o jp2 (only 1 item image)"},{id:"bestofdollyparto00part",desc:"LP - older"},{id:"lp_dancing-tonight_freddy-martin-and-his-orchestra",desc:"LP - current, ~ 2020"},{id:"cd_beethoven-complete-works-for-string-trio_the-adaskin-string-trio",desc:"what_cd"},{id:"wcd_message-in-a-box-th_the-police_flac_lossless_807968",desc:"Irregular Photo - (portrait)"},{id:"lak-JC_Burris-James_Booker",desc:"No photo + long track list"},{id:"wcd_various-artiststhe-best-of-country-music_flac_lossless_29887623",desc:"Complilation, various artists"},{id:"lp_emperor-concerto_ludwig-van-beethoven-arthur-rubinstein-bos",desc:"Track names, multiple but same as album artist (should be omitted)"},{id:"illegal-art",desc:"3 column track list wide view pagination check"},{id:"wcd_borghild_die-warzau_mp3_320_1648819",desc:"Track time display, 60 seconds adds another minute. should display as 10:00"},{id:"cd_aaliyah_aaliyah-static-from-playa-timbaland",desc:'Has 3rd party "Full Album". Clicking on Full Album should highlight full album'}];let _=class extends C{constructor(){super(...arguments),this.viewToShow="components",this.selectedByDropdown=v.beta,this.errorMsg="",this.selectedByDropdownOnload="",this.selectedByRadio=v.beta,this.selectedByRadioOnload="",this.albumId="",this.bgColor="dark",this.albumMd=null,this.albumPlaylist=null,this.album=null,this.componentToShow="photos",this.signedIn=!1,this.photoDisplay="looseImages"}firstUpdated(){this.startAtWebamp&&(this.selectedByRadio=v.webamp,this.selectedByDropdown=v.webamp)}updated(e){var t,i,o,s;e.has("viewToShow")&&((t=document.querySelector("body"))===null||t===void 0||t.removeAttribute(e.get("viewToShow")),(i=document.querySelector("body"))===null||i===void 0||i.setAttribute(this.viewToShow,"")),e.has("albumId")&&this.albumId&&this.albumInfo(),e.has("bgColor")&&(this.bgColor==="dark"?(o=document.querySelector("body"))===null||o===void 0||o.classList.remove("light"):(s=document.querySelector("body"))===null||s===void 0||s.classList.add("light")),e.has("photoDisplay")&&this.photoDisplay==="looseImages"&&this.viewToShow==="components"&&this.displayLooseImages()}get startAtWebamp(){return new URLSearchParams(location.search.slice(1)).has("webamp")}get playerByRadio(){return this.selectedByRadio===v.spotify?u`<spotify-player
        iaUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`:this.selectedByRadio===v.youtube?u`<youtube-player
        iaUrn="urn:youtube:p3o5PzqmYik"
      ></youtube-player>`:u`<h2>Player type: ${this.selectedByRadio}</h2>`}get playerByDropdown(){return this.selectedByDropdown===v.spotify?u`<spotify-player
        iaUrn="urn:spotify:track:6smNPW8bUwL8VbSzgz0CLf"
      ></spotify-player>`:this.selectedByDropdown===v.youtube?u`<youtube-player
        iaUrn="urn:youtube:p3o5PzqmYik"
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
              </div>`:b}
        </h1>
        <hr />
        <hr />
        ${this.viewToShow==="components"?this.componentsView:this.dataView}
      </section>
    `}async albumInfo(){this.errorMsg="";try{const e=await fetch(`https://archive.org/metadata/${this.albumId}`).then(i=>i.json()),t=await fetch(`https://archive.org/services/playlist/${this.albumId}`).then(i=>i.json());this.albumPlaylist=t,this.albumMd=new et(e),this.album=new lo(e,this.albumPlaylist),window.Album=this.album}catch(e){this.errorMsg=e.message}}formInputSubmit(e){e.preventDefault(),this.albumId=this.input.value}get albumStats(){if(!this.album)return b;const e=this.album.spotifyTracks.reduce((i,o)=>(i.push(Number.isInteger(o?.track)?`${o?.track}`:"n/a"),i),[]).join(", "),t=this.album.youtubeTracks.reduce((i,o)=>(i.push(Number.isInteger(o?.track)?`${o?.track}`:"n/a"),i),[]).join(", ");return u`
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
                .selectedChannel=${v.spotify}
                .album=${this.album}
                .selectedTrack=${this.selectedTrack}
                id="dedicated-spotify-player"
              ></externalchannels-player>
              <div>
                <p>Available Spotify Tracks</p>
                ${this.album.spotifyTracks.map(i=>u`
                      <button
                        @click=${()=>this.displayTrack(i,v.spotify)}
                      >
                        ${i.track} - ${i.title}
                      </button>
                    `)}
              </div>
              <externalchannels-player
                .selectedChannel=${v.youtube}
                .album=${this.album}
                id="dedicated-youtube-player"
                .selectedTrack=${this.selectedTrack}
              ></externalchannels-player>
              <div>
                <p>Available YouTube Tracks</p>
                ${this.album.youtubeTracks.map(i=>u`
                      <button
                        @click=${()=>this.displayTrack(i,v.youtube)}
                      >
                        ${i.track} - ${i.title}
                      </button>
                    `)}
              </div>
            </dd></dr
          >
        </dl>
      </section>
    `}displayTrack(e,t){console.log("Displaying track: ",{track:e,channelType:t}),this.selectedTrack=e}get demoClicks(){return u`
      <section id="demo-clicks">
        ${co.map(e=>{const t=this.albumId===e.id;return u`
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
        ${this.errorMsg?u`<h2 id="error">ERROR: ${this.errorMsg}</h2>`:b}

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
          .selected=${this.startAtWebamp?v.webamp:this.selectedByRadio}
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
          .selected=${this.startAtWebamp?v.webamp:this.selectedByDropdown?this.selectedByDropdown:v.beta}
        >
        </channel-selector>
        <section class="player">${this.playerByDropdown}</section>
        <section class="details">
          <h2>Selected by dropdown</h2>
          <h2>on first load: ${this.selectedByDropdownOnload}</h2>
          <h2>on change: ${this.selectedByDropdown}</h2>
        </section>
      </section>
    `}async displayLooseImages(){var e;(e=this.photoViewerEl)===null||e===void 0||e.prepareLightDomHook();const t=await Ii({images:ye.image_filenames,itemIdentifier:ye.item.identifier,itemTitle:ye.item.title,baseHost:"archive.org"});console.log("####### generateBookReaderManifest",t),this.photoViewerEl.linerNotesManifest=t,this.photoViewerEl.itemMD=t.metadata,this.photoViewerEl.itemIdentifier=t.metadata.identifier}get photoViewer(){var e;let t,i,o;switch(this.photoDisplay){case"noData":i="foo-data-12345-ddd";break;case"linerNotes":this.photoDisplay==="linerNotes"&&(t=oi,i=(e=t?.metadata)===null||e===void 0?void 0:e.identifier,o=t?.metadata);break}return u`
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
            ></iaux-photo-viewer>`:b}
        ${this.photoDisplay==="looseImages"?u`<iaux-photo-viewer
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
            >`:u`<iaux-photo-viewer
              .backgroundTheme=${this.bgColor}
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
      ${this.componentToShow==="channels"?this.channelSelectors:b}
      ${this.componentToShow==="photos"?this.photoViewer:b}
      <slot name="foo"></slot>
    `}};_.styles=k`
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
  `;l([m({type:String,reflect:!0})],_.prototype,"viewToShow",void 0);l([m({type:String})],_.prototype,"selectedByDropdown",void 0);l([m({type:String})],_.prototype,"errorMsg",void 0);l([m({type:String})],_.prototype,"selectedByDropdownOnload",void 0);l([m({type:String})],_.prototype,"selectedByRadio",void 0);l([m({type:String})],_.prototype,"selectedByRadioOnload",void 0);l([m({type:String})],_.prototype,"albumId",void 0);l([m({type:String})],_.prototype,"bgColor",void 0);l([m({type:Object,attribute:!1})],_.prototype,"albumMd",void 0);l([m({type:Object,attribute:!1})],_.prototype,"albumPlaylist",void 0);l([m({type:Object,attribute:!1})],_.prototype,"album",void 0);l([m({type:String})],_.prototype,"componentToShow",void 0);l([V("input#md-search")],_.prototype,"input",void 0);l([V("iaux-photo-viewer")],_.prototype,"photoViewerEl",void 0);l([m({type:Object})],_.prototype,"selectedTrack",void 0);l([m({type:Boolean})],_.prototype,"signedIn",void 0);l([m({type:String})],_.prototype,"photoDisplay",void 0);_=l([O("app-root")],_);
