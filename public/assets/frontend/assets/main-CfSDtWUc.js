function Dd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ws={exports:{}},_i={},qs={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hn=Symbol.for("react.element"),$d=Symbol.for("react.portal"),Ud=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Wd=Symbol.for("react.provider"),qd=Symbol.for("react.context"),Vd=Symbol.for("react.forward_ref"),Qd=Symbol.for("react.suspense"),Yd=Symbol.for("react.memo"),Kd=Symbol.for("react.lazy"),ba=Symbol.iterator;function Gd(e){return e===null||typeof e!="object"?null:(e=ba&&e[ba]||e["@@iterator"],typeof e=="function"?e:null)}var Vs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qs=Object.assign,Ys={};function kr(e,t,r){this.props=e,this.context=t,this.refs=Ys,this.updater=r||Vs}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ks(){}Ks.prototype=kr.prototype;function kl(e,t,r){this.props=e,this.context=t,this.refs=Ys,this.updater=r||Vs}var Nl=kl.prototype=new Ks;Nl.constructor=kl;Qs(Nl,kr.prototype);Nl.isPureReactComponent=!0;var Ea=Array.isArray,Gs=Object.prototype.hasOwnProperty,Sl={current:null},Xs={key:!0,ref:!0,__self:!0,__source:!0};function Js(e,t,r){var n,i={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Gs.call(t,n)&&!Xs.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:hn,type:e,key:o,ref:a,props:i,_owner:Sl.current}}function Xd(e,t){return{$$typeof:hn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function bl(e){return typeof e=="object"&&e!==null&&e.$$typeof===hn}function Jd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Ca=/\/+/g;function Ki(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jd(""+e.key):t.toString(36)}function Wn(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case hn:case $d:a=!0}}if(a)return a=e,i=i(a),e=n===""?"."+Ki(a,0):n,Ea(i)?(r="",e!=null&&(r=e.replace(Ca,"$&/")+"/"),Wn(i,t,r,"",function(c){return c})):i!=null&&(bl(i)&&(i=Xd(i,r+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ca,"$&/")+"/")+e)),t.push(i)),1;if(a=0,n=n===""?".":n+":",Ea(e))for(var s=0;s<e.length;s++){o=e[s];var u=n+Ki(o,s);a+=Wn(o,t,r,u,i)}else if(u=Gd(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=n+Ki(o,s++),a+=Wn(o,t,r,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function En(e,t,r){if(e==null)return e;var n=[],i=0;return Wn(e,n,"","",function(o){return t.call(r,o,i++)}),n}function Zd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var he={current:null},qn={transition:null},ep={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:qn,ReactCurrentOwner:Sl};function Zs(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:En,forEach:function(e,t,r){En(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return En(e,function(){t++}),t},toArray:function(e){return En(e,function(t){return t})||[]},only:function(e){if(!bl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=kr;F.Fragment=Ud;F.Profiler=Hd;F.PureComponent=kl;F.StrictMode=Bd;F.Suspense=Qd;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ep;F.act=Zs;F.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Qs({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Sl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Gs.call(t,u)&&!Xs.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];n.children=s}return{$$typeof:hn,type:e.type,key:i,ref:o,props:n,_owner:a}};F.createContext=function(e){return e={$$typeof:qd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wd,_context:e},e.Consumer=e};F.createElement=Js;F.createFactory=function(e){var t=Js.bind(null,e);return t.type=e,t};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Vd,render:e}};F.isValidElement=bl;F.lazy=function(e){return{$$typeof:Kd,_payload:{_status:-1,_result:e},_init:Zd}};F.memo=function(e,t){return{$$typeof:Yd,type:e,compare:t===void 0?null:t}};F.startTransition=function(e){var t=qn.transition;qn.transition={};try{e()}finally{qn.transition=t}};F.unstable_act=Zs;F.useCallback=function(e,t){return he.current.useCallback(e,t)};F.useContext=function(e){return he.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return he.current.useDeferredValue(e)};F.useEffect=function(e,t){return he.current.useEffect(e,t)};F.useId=function(){return he.current.useId()};F.useImperativeHandle=function(e,t,r){return he.current.useImperativeHandle(e,t,r)};F.useInsertionEffect=function(e,t){return he.current.useInsertionEffect(e,t)};F.useLayoutEffect=function(e,t){return he.current.useLayoutEffect(e,t)};F.useMemo=function(e,t){return he.current.useMemo(e,t)};F.useReducer=function(e,t,r){return he.current.useReducer(e,t,r)};F.useRef=function(e){return he.current.useRef(e)};F.useState=function(e){return he.current.useState(e)};F.useSyncExternalStore=function(e,t,r){return he.current.useSyncExternalStore(e,t,r)};F.useTransition=function(){return he.current.useTransition()};F.version="18.3.1";qs.exports=F;var x=qs.exports;const tp=Dd(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp=x,np=Symbol.for("react.element"),ip=Symbol.for("react.fragment"),op=Object.prototype.hasOwnProperty,lp=rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ap={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,t,r){var n,i={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)op.call(t,n)&&!ap.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:np,type:e,key:o,ref:a,props:i,_owner:lp.current}}_i.Fragment=ip;_i.jsx=eu;_i.jsxs=eu;Ws.exports=_i;var l=Ws.exports,Eo={},tu={exports:{}},Ee={},ru={exports:{}},nu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,L){var T=C.length;C.push(L);e:for(;0<T;){var $=T-1>>>1,X=C[$];if(0<i(X,L))C[$]=L,C[T]=X,T=$;else break e}}function r(C){return C.length===0?null:C[0]}function n(C){if(C.length===0)return null;var L=C[0],T=C.pop();if(T!==L){C[0]=T;e:for(var $=0,X=C.length,Lt=X>>>1;$<Lt;){var We=2*($+1)-1,Yt=C[We],qe=We+1,Kt=C[qe];if(0>i(Yt,T))qe<X&&0>i(Kt,Yt)?(C[$]=Kt,C[qe]=T,$=qe):(C[$]=Yt,C[We]=T,$=We);else if(qe<X&&0>i(Kt,T))C[$]=Kt,C[qe]=T,$=qe;else break e}}return L}function i(C,L){var T=C.sortIndex-L.sortIndex;return T!==0?T:C.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],h=1,d=null,g=3,y=!1,w=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var L=r(c);L!==null;){if(L.callback===null)n(c);else if(L.startTime<=C)n(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=r(c)}}function j(C){if(v=!1,m(C),!w)if(r(u)!==null)w=!0,_(b);else{var L=r(c);L!==null&&ie(j,L.startTime-C)}}function b(C,L){w=!1,v&&(v=!1,p(z),z=-1),y=!0;var T=g;try{for(m(L),d=r(u);d!==null&&(!(d.expirationTime>L)||C&&!pe());){var $=d.callback;if(typeof $=="function"){d.callback=null,g=d.priorityLevel;var X=$(d.expirationTime<=L);L=e.unstable_now(),typeof X=="function"?d.callback=X:d===r(u)&&n(u),m(L)}else n(u);d=r(u)}if(d!==null)var Lt=!0;else{var We=r(c);We!==null&&ie(j,We.startTime-L),Lt=!1}return Lt}finally{d=null,g=T,y=!1}}var S=!1,E=null,z=-1,A=5,R=-1;function pe(){return!(e.unstable_now()-R<A)}function Qt(){if(E!==null){var C=e.unstable_now();R=C;var L=!0;try{L=E(!0,C)}finally{L?Je():(S=!1,E=null)}}else S=!1}var Je;if(typeof f=="function")Je=function(){f(Qt)};else if(typeof MessageChannel<"u"){var Sn=new MessageChannel,bn=Sn.port2;Sn.port1.onmessage=Qt,Je=function(){bn.postMessage(null)}}else Je=function(){k(Qt,0)};function _(C){E=C,S||(S=!0,Je())}function ie(C,L){z=k(function(){C(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,_(b))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(C){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var T=g;g=L;try{return C()}finally{g=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,L){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var T=g;g=C;try{return L()}finally{g=T}},e.unstable_scheduleCallback=function(C,L,T){var $=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?$+T:$):T=$,C){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=T+X,C={id:h++,callback:L,priorityLevel:C,startTime:T,expirationTime:X,sortIndex:-1},T>$?(C.sortIndex=T,t(c,C),r(u)===null&&C===r(c)&&(v?(p(z),z=-1):v=!0,ie(j,T-$))):(C.sortIndex=X,t(u,C),w||y||(w=!0,_(b))),C},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(C){var L=g;return function(){var T=g;g=L;try{return C.apply(this,arguments)}finally{g=T}}}})(nu);ru.exports=nu;var sp=ru.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=x,be=sp;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var iu=new Set,Kr={};function qt(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(Kr[e]=t,e=0;e<t.length;e++)iu.add(t[e])}var ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Co=Object.prototype.hasOwnProperty,cp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,za={},Pa={};function dp(e){return Co.call(Pa,e)?!0:Co.call(za,e)?!1:cp.test(e)?Pa[e]=!0:(za[e]=!0,!1)}function pp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fp(e,t,r,n){if(t===null||typeof t>"u"||pp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ge(e,t,r,n,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ge(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var El=/[\-:]([a-z])/g;function Cl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(El,Cl);ae[t]=new ge(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(El,Cl);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(El,Cl);ae[t]=new ge(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function zl(e,t,r,n){var i=ae.hasOwnProperty(t)?ae[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fp(t,r,i,n)&&(r=null),n||i===null?dp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ct=up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cn=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Jt=Symbol.for("react.fragment"),Pl=Symbol.for("react.strict_mode"),zo=Symbol.for("react.profiler"),ou=Symbol.for("react.provider"),lu=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),Po=Symbol.for("react.suspense"),_o=Symbol.for("react.suspense_list"),Rl=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),au=Symbol.for("react.offscreen"),_a=Symbol.iterator;function Cr(e){return e===null||typeof e!="object"?null:(e=_a&&e[_a]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Gi;function Ar(e){if(Gi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Gi=t&&t[1]||""}return`
`+Gi+e}var Xi=!1;function Ji(e,t){if(!e||Xi)return"";Xi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=n.stack.split(`
`),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||i[a]!==o[s]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Xi=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Ar(e):""}function mp(e){switch(e.tag){case 5:return Ar(e.type);case 16:return Ar("Lazy");case 13:return Ar("Suspense");case 19:return Ar("SuspenseList");case 0:case 2:case 15:return e=Ji(e.type,!1),e;case 11:return e=Ji(e.type.render,!1),e;case 1:return e=Ji(e.type,!0),e;default:return""}}function Ro(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jt:return"Fragment";case Xt:return"Portal";case zo:return"Profiler";case Pl:return"StrictMode";case Po:return"Suspense";case _o:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case lu:return(e.displayName||"Context")+".Consumer";case ou:return(e._context.displayName||"Context")+".Provider";case _l:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rl:return t=e.displayName||null,t!==null?t:Ro(e.type)||"Memo";case pt:t=e._payload,e=e._init;try{return Ro(e(t))}catch{}}return null}function hp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ro(t);case 8:return t===Pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function su(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gp(e){var t=su(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zn(e){e._valueTracker||(e._valueTracker=gp(e))}function uu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=su(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ii(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Lo(e,t){var r=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ra(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Et(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cu(e,t){t=t.checked,t!=null&&zl(e,"checked",t,!1)}function To(e,t){cu(e,t);var r=Et(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Fo(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function La(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Fo(e,t,r){(t!=="number"||ii(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Or=Array.isArray;function ur(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Et(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Mo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ta(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(N(92));if(Or(r)){if(1<r.length)throw Error(N(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Et(r)}}function du(e,t){var r=Et(t.value),n=Et(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ao(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pn,fu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pn=Pn||document.createElement("div"),Pn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var $r={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xp=["Webkit","ms","Moz","O"];Object.keys($r).forEach(function(e){xp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$r[t]=$r[e]})});function mu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||$r.hasOwnProperty(e)&&$r[e]?(""+t).trim():t+"px"}function hu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=mu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var yp=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oo(e,t){if(t){if(yp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Io(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Do=null;function Ll(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $o=null,cr=null,dr=null;function Ma(e){if(e=yn(e)){if(typeof $o!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Mi(t),$o(e.stateNode,e.type,t))}}function gu(e){cr?dr?dr.push(e):dr=[e]:cr=e}function xu(){if(cr){var e=cr,t=dr;if(dr=cr=null,Ma(e),t)for(e=0;e<t.length;e++)Ma(t[e])}}function yu(e,t){return e(t)}function vu(){}var Zi=!1;function wu(e,t,r){if(Zi)return e(t,r);Zi=!0;try{return yu(e,t,r)}finally{Zi=!1,(cr!==null||dr!==null)&&(vu(),xu())}}function Xr(e,t){var r=e.stateNode;if(r===null)return null;var n=Mi(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(N(231,t,typeof r));return r}var Uo=!1;if(ot)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){Uo=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{Uo=!1}function vp(e,t,r,n,i,o,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(h){this.onError(h)}}var Ur=!1,oi=null,li=!1,Bo=null,wp={onError:function(e){Ur=!0,oi=e}};function jp(e,t,r,n,i,o,a,s,u){Ur=!1,oi=null,vp.apply(wp,arguments)}function kp(e,t,r,n,i,o,a,s,u){if(jp.apply(this,arguments),Ur){if(Ur){var c=oi;Ur=!1,oi=null}else throw Error(N(198));li||(li=!0,Bo=c)}}function Vt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ju(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Aa(e){if(Vt(e)!==e)throw Error(N(188))}function Np(e){var t=e.alternate;if(!t){if(t=Vt(e),t===null)throw Error(N(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return Aa(i),e;if(o===n)return Aa(i),t;o=o.sibling}throw Error(N(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,s=i.child;s;){if(s===r){a=!0,r=i,n=o;break}if(s===n){a=!0,n=i,r=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===r){a=!0,r=o,n=i;break}if(s===n){a=!0,n=o,r=i;break}s=s.sibling}if(!a)throw Error(N(189))}}if(r.alternate!==n)throw Error(N(190))}if(r.tag!==3)throw Error(N(188));return r.stateNode.current===r?e:t}function ku(e){return e=Np(e),e!==null?Nu(e):null}function Nu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Nu(e);if(t!==null)return t;e=e.sibling}return null}var Su=be.unstable_scheduleCallback,Oa=be.unstable_cancelCallback,Sp=be.unstable_shouldYield,bp=be.unstable_requestPaint,G=be.unstable_now,Ep=be.unstable_getCurrentPriorityLevel,Tl=be.unstable_ImmediatePriority,bu=be.unstable_UserBlockingPriority,ai=be.unstable_NormalPriority,Cp=be.unstable_LowPriority,Eu=be.unstable_IdlePriority,Ri=null,Ke=null;function zp(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Ri,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Rp,Pp=Math.log,_p=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(Pp(e)/_p|0)|0}var _n=64,Rn=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function si(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~i;s!==0?n=Ir(s):(o&=a,o!==0&&(n=Ir(o)))}else a=r&~i,a!==0?n=Ir(a):o!==0&&(n=Ir(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-De(t),i=1<<r,n|=e[r],t&=~i;return n}function Lp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-De(o),s=1<<a,u=i[a];u===-1?(!(s&r)||s&n)&&(i[a]=Lp(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function Ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cu(){var e=_n;return _n<<=1,!(_n&4194240)&&(_n=64),e}function eo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function gn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=r}function Fp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-De(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function Fl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-De(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var I=0;function zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pu,Ml,_u,Ru,Lu,Wo=!1,Ln=[],yt=null,vt=null,wt=null,Jr=new Map,Zr=new Map,mt=[],Mp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ia(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(t.pointerId)}}function Pr(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=yn(t),t!==null&&Ml(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ap(e,t,r,n,i){switch(t){case"focusin":return yt=Pr(yt,e,t,r,n,i),!0;case"dragenter":return vt=Pr(vt,e,t,r,n,i),!0;case"mouseover":return wt=Pr(wt,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Jr.set(o,Pr(Jr.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Zr.set(o,Pr(Zr.get(o)||null,e,t,r,n,i)),!0}return!1}function Tu(e){var t=Mt(e.target);if(t!==null){var r=Vt(t);if(r!==null){if(t=r.tag,t===13){if(t=ju(r),t!==null){e.blockedOn=t,Lu(e.priority,function(){_u(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=qo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Do=n,r.target.dispatchEvent(n),Do=null}else return t=yn(r),t!==null&&Ml(t),e.blockedOn=r,!1;t.shift()}return!0}function Da(e,t,r){Vn(e)&&r.delete(t)}function Op(){Wo=!1,yt!==null&&Vn(yt)&&(yt=null),vt!==null&&Vn(vt)&&(vt=null),wt!==null&&Vn(wt)&&(wt=null),Jr.forEach(Da),Zr.forEach(Da)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,Wo||(Wo=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Op)))}function en(e){function t(i){return _r(i,e)}if(0<Ln.length){_r(Ln[0],e);for(var r=1;r<Ln.length;r++){var n=Ln[r];n.blockedOn===e&&(n.blockedOn=null)}}for(yt!==null&&_r(yt,e),vt!==null&&_r(vt,e),wt!==null&&_r(wt,e),Jr.forEach(t),Zr.forEach(t),r=0;r<mt.length;r++)n=mt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<mt.length&&(r=mt[0],r.blockedOn===null);)Tu(r),r.blockedOn===null&&mt.shift()}var pr=ct.ReactCurrentBatchConfig,ui=!0;function Ip(e,t,r,n){var i=I,o=pr.transition;pr.transition=null;try{I=1,Al(e,t,r,n)}finally{I=i,pr.transition=o}}function Dp(e,t,r,n){var i=I,o=pr.transition;pr.transition=null;try{I=4,Al(e,t,r,n)}finally{I=i,pr.transition=o}}function Al(e,t,r,n){if(ui){var i=qo(e,t,r,n);if(i===null)co(e,t,n,ci,r),Ia(e,n);else if(Ap(i,e,t,r,n))n.stopPropagation();else if(Ia(e,n),t&4&&-1<Mp.indexOf(e)){for(;i!==null;){var o=yn(i);if(o!==null&&Pu(o),o=qo(e,t,r,n),o===null&&co(e,t,n,ci,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else co(e,t,n,null,r)}}var ci=null;function qo(e,t,r,n){if(ci=null,e=Ll(n),e=Mt(e),e!==null)if(t=Vt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ju(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ci=e,null}function Fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ep()){case Tl:return 1;case bu:return 4;case ai:case Cp:return 16;case Eu:return 536870912;default:return 16}default:return 16}}var gt=null,Ol=null,Qn=null;function Mu(){if(Qn)return Qn;var e,t=Ol,r=t.length,n,i="value"in gt?gt.value:gt.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===i[o-n];n++);return Qn=i.slice(e,1<n?1-n:void 0)}function Yn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function $a(){return!1}function Ce(e){function t(r,n,i,o,a){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Tn:$a,this.isPropagationStopped=$a,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Ce(Nr),xn=Y({},Nr,{view:0,detail:0}),$p=Ce(xn),to,ro,Rr,Li=Y({},xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rr&&(Rr&&e.type==="mousemove"?(to=e.screenX-Rr.screenX,ro=e.screenY-Rr.screenY):ro=to=0,Rr=e),to)},movementY:function(e){return"movementY"in e?e.movementY:ro}}),Ua=Ce(Li),Up=Y({},Li,{dataTransfer:0}),Bp=Ce(Up),Hp=Y({},xn,{relatedTarget:0}),no=Ce(Hp),Wp=Y({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=Ce(Wp),Vp=Y({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qp=Ce(Vp),Yp=Y({},Nr,{data:0}),Ba=Ce(Yp),Kp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xp[e])?!!t[e]:!1}function Dl(){return Jp}var Zp=Y({},xn,{key:function(e){if(e.key){var t=Kp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dl,charCode:function(e){return e.type==="keypress"?Yn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ef=Ce(Zp),tf=Y({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ha=Ce(tf),rf=Y({},xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dl}),nf=Ce(rf),of=Y({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lf=Ce(of),af=Y({},Li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sf=Ce(af),uf=[9,13,27,32],$l=ot&&"CompositionEvent"in window,Br=null;ot&&"documentMode"in document&&(Br=document.documentMode);var cf=ot&&"TextEvent"in window&&!Br,Au=ot&&(!$l||Br&&8<Br&&11>=Br),Wa=" ",qa=!1;function Ou(e,t){switch(e){case"keyup":return uf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function df(e,t){switch(e){case"compositionend":return Iu(t);case"keypress":return t.which!==32?null:(qa=!0,Wa);case"textInput":return e=t.data,e===Wa&&qa?null:e;default:return null}}function pf(e,t){if(Zt)return e==="compositionend"||!$l&&Ou(e,t)?(e=Mu(),Qn=Ol=gt=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Au&&t.locale!=="ko"?null:t.data;default:return null}}var ff={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Va(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ff[e.type]:t==="textarea"}function Du(e,t,r,n){gu(n),t=di(t,"onChange"),0<t.length&&(r=new Il("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Hr=null,tn=null;function mf(e){Gu(e,0)}function Ti(e){var t=rr(e);if(uu(t))return e}function hf(e,t){if(e==="change")return t}var $u=!1;if(ot){var io;if(ot){var oo="oninput"in document;if(!oo){var Qa=document.createElement("div");Qa.setAttribute("oninput","return;"),oo=typeof Qa.oninput=="function"}io=oo}else io=!1;$u=io&&(!document.documentMode||9<document.documentMode)}function Ya(){Hr&&(Hr.detachEvent("onpropertychange",Uu),tn=Hr=null)}function Uu(e){if(e.propertyName==="value"&&Ti(tn)){var t=[];Du(t,tn,e,Ll(e)),wu(mf,t)}}function gf(e,t,r){e==="focusin"?(Ya(),Hr=t,tn=r,Hr.attachEvent("onpropertychange",Uu)):e==="focusout"&&Ya()}function xf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(tn)}function yf(e,t){if(e==="click")return Ti(t)}function vf(e,t){if(e==="input"||e==="change")return Ti(t)}function wf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ue=typeof Object.is=="function"?Object.is:wf;function rn(e,t){if(Ue(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Co.call(t,i)||!Ue(e[i],t[i]))return!1}return!0}function Ka(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ga(e,t){var r=Ka(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ka(r)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hu(){for(var e=window,t=ii();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ii(e.document)}return t}function Ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jf(e){var t=Hu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Bu(r.ownerDocument.documentElement,r)){if(n!==null&&Ul(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=Ga(r,o);var a=Ga(r,n);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var kf=ot&&"documentMode"in document&&11>=document.documentMode,er=null,Vo=null,Wr=null,Qo=!1;function Xa(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Qo||er==null||er!==ii(n)||(n=er,"selectionStart"in n&&Ul(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Wr&&rn(Wr,n)||(Wr=n,n=di(Vo,"onSelect"),0<n.length&&(t=new Il("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=er)))}function Fn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var tr={animationend:Fn("Animation","AnimationEnd"),animationiteration:Fn("Animation","AnimationIteration"),animationstart:Fn("Animation","AnimationStart"),transitionend:Fn("Transition","TransitionEnd")},lo={},Wu={};ot&&(Wu=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Fi(e){if(lo[e])return lo[e];if(!tr[e])return e;var t=tr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Wu)return lo[e]=t[r];return e}var qu=Fi("animationend"),Vu=Fi("animationiteration"),Qu=Fi("animationstart"),Yu=Fi("transitionend"),Ku=new Map,Ja="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zt(e,t){Ku.set(e,t),qt(t,[e])}for(var ao=0;ao<Ja.length;ao++){var so=Ja[ao],Nf=so.toLowerCase(),Sf=so[0].toUpperCase()+so.slice(1);zt(Nf,"on"+Sf)}zt(qu,"onAnimationEnd");zt(Vu,"onAnimationIteration");zt(Qu,"onAnimationStart");zt("dblclick","onDoubleClick");zt("focusin","onFocus");zt("focusout","onBlur");zt(Yu,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dr));function Za(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,kp(n,t,void 0,e),e.currentTarget=null}function Gu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Za(i,s,c),o=u}else for(a=0;a<n.length;a++){if(s=n[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Za(i,s,c),o=u}}}if(li)throw e=Bo,li=!1,Bo=null,e}function B(e,t){var r=t[Jo];r===void 0&&(r=t[Jo]=new Set);var n=e+"__bubble";r.has(n)||(Xu(t,e,2,!1),r.add(n))}function uo(e,t,r){var n=0;t&&(n|=4),Xu(r,e,n,t)}var Mn="_reactListening"+Math.random().toString(36).slice(2);function nn(e){if(!e[Mn]){e[Mn]=!0,iu.forEach(function(r){r!=="selectionchange"&&(bf.has(r)||uo(r,!1,e),uo(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mn]||(t[Mn]=!0,uo("selectionchange",!1,t))}}function Xu(e,t,r,n){switch(Fu(t)){case 1:var i=Ip;break;case 4:i=Dp;break;default:i=Al}r=i.bind(null,t,r,e),i=void 0,!Uo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function co(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(a===4)for(a=n.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;s!==null;){if(a=Mt(s),a===null)return;if(u=a.tag,u===5||u===6){n=o=a;continue e}s=s.parentNode}}n=n.return}wu(function(){var c=o,h=Ll(r),d=[];e:{var g=Ku.get(e);if(g!==void 0){var y=Il,w=e;switch(e){case"keypress":if(Yn(r)===0)break e;case"keydown":case"keyup":y=ef;break;case"focusin":w="focus",y=no;break;case"focusout":w="blur",y=no;break;case"beforeblur":case"afterblur":y=no;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ua;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Bp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=nf;break;case qu:case Vu:case Qu:y=qp;break;case Yu:y=lf;break;case"scroll":y=$p;break;case"wheel":y=sf;break;case"copy":case"cut":case"paste":y=Qp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Ha}var v=(t&4)!==0,k=!v&&e==="scroll",p=v?g!==null?g+"Capture":null:g;v=[];for(var f=c,m;f!==null;){m=f;var j=m.stateNode;if(m.tag===5&&j!==null&&(m=j,p!==null&&(j=Xr(f,p),j!=null&&v.push(on(f,j,m)))),k)break;f=f.return}0<v.length&&(g=new y(g,w,null,r,h),d.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&r!==Do&&(w=r.relatedTarget||r.fromElement)&&(Mt(w)||w[lt]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(w=r.relatedTarget||r.toElement,y=c,w=w?Mt(w):null,w!==null&&(k=Vt(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(v=Ua,j="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=Ha,j="onPointerLeave",p="onPointerEnter",f="pointer"),k=y==null?g:rr(y),m=w==null?g:rr(w),g=new v(j,f+"leave",y,r,h),g.target=k,g.relatedTarget=m,j=null,Mt(h)===c&&(v=new v(p,f+"enter",w,r,h),v.target=m,v.relatedTarget=k,j=v),k=j,y&&w)t:{for(v=y,p=w,f=0,m=v;m;m=Gt(m))f++;for(m=0,j=p;j;j=Gt(j))m++;for(;0<f-m;)v=Gt(v),f--;for(;0<m-f;)p=Gt(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Gt(v),p=Gt(p)}v=null}else v=null;y!==null&&es(d,g,y,v,!1),w!==null&&k!==null&&es(d,k,w,v,!0)}}e:{if(g=c?rr(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var b=hf;else if(Va(g))if($u)b=vf;else{b=xf;var S=gf}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(b=yf);if(b&&(b=b(e,c))){Du(d,b,r,h);break e}S&&S(e,g,c),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&Fo(g,"number",g.value)}switch(S=c?rr(c):window,e){case"focusin":(Va(S)||S.contentEditable==="true")&&(er=S,Vo=c,Wr=null);break;case"focusout":Wr=Vo=er=null;break;case"mousedown":Qo=!0;break;case"contextmenu":case"mouseup":case"dragend":Qo=!1,Xa(d,r,h);break;case"selectionchange":if(kf)break;case"keydown":case"keyup":Xa(d,r,h)}var E;if($l)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Zt?Ou(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Au&&r.locale!=="ko"&&(Zt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Zt&&(E=Mu()):(gt=h,Ol="value"in gt?gt.value:gt.textContent,Zt=!0)),S=di(c,z),0<S.length&&(z=new Ba(z,e,null,r,h),d.push({event:z,listeners:S}),E?z.data=E:(E=Iu(r),E!==null&&(z.data=E)))),(E=cf?df(e,r):pf(e,r))&&(c=di(c,"onBeforeInput"),0<c.length&&(h=new Ba("onBeforeInput","beforeinput",null,r,h),d.push({event:h,listeners:c}),h.data=E))}Gu(d,t)})}function on(e,t,r){return{instance:e,listener:t,currentTarget:r}}function di(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Xr(e,r),o!=null&&n.unshift(on(e,o,i)),o=Xr(e,t),o!=null&&n.push(on(e,o,i))),e=e.return}return n}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function es(e,t,r,n,i){for(var o=t._reactName,a=[];r!==null&&r!==n;){var s=r,u=s.alternate,c=s.stateNode;if(u!==null&&u===n)break;s.tag===5&&c!==null&&(s=c,i?(u=Xr(r,o),u!=null&&a.unshift(on(r,u,s))):i||(u=Xr(r,o),u!=null&&a.push(on(r,u,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Ef=/\r\n?/g,Cf=/\u0000|\uFFFD/g;function ts(e){return(typeof e=="string"?e:""+e).replace(Ef,`
`).replace(Cf,"")}function An(e,t,r){if(t=ts(t),ts(e)!==t&&r)throw Error(N(425))}function pi(){}var Yo=null,Ko=null;function Go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xo=typeof setTimeout=="function"?setTimeout:void 0,zf=typeof clearTimeout=="function"?clearTimeout:void 0,rs=typeof Promise=="function"?Promise:void 0,Pf=typeof queueMicrotask=="function"?queueMicrotask:typeof rs<"u"?function(e){return rs.resolve(null).then(e).catch(_f)}:Xo;function _f(e){setTimeout(function(){throw e})}function po(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),en(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);en(t)}function jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ns(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),Ye="__reactFiber$"+Sr,ln="__reactProps$"+Sr,lt="__reactContainer$"+Sr,Jo="__reactEvents$"+Sr,Rf="__reactListeners$"+Sr,Lf="__reactHandles$"+Sr;function Mt(e){var t=e[Ye];if(t)return t;for(var r=e.parentNode;r;){if(t=r[lt]||r[Ye]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ns(e);e!==null;){if(r=e[Ye])return r;e=ns(e)}return t}e=r,r=e.parentNode}return null}function yn(e){return e=e[Ye]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Mi(e){return e[ln]||null}var Zo=[],nr=-1;function Pt(e){return{current:e}}function H(e){0>nr||(e.current=Zo[nr],Zo[nr]=null,nr--)}function U(e,t){nr++,Zo[nr]=e.current,e.current=t}var Ct={},de=Pt(Ct),ve=Pt(!1),$t=Ct;function gr(e,t){var r=e.type.contextTypes;if(!r)return Ct;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function we(e){return e=e.childContextTypes,e!=null}function fi(){H(ve),H(de)}function is(e,t,r){if(de.current!==Ct)throw Error(N(168));U(de,t),U(ve,r)}function Ju(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(N(108,hp(e)||"Unknown",i));return Y({},r,n)}function mi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,$t=de.current,U(de,e),U(ve,ve.current),!0}function os(e,t,r){var n=e.stateNode;if(!n)throw Error(N(169));r?(e=Ju(e,t,$t),n.__reactInternalMemoizedMergedChildContext=e,H(ve),H(de),U(de,e)):H(ve),U(ve,r)}var et=null,Ai=!1,fo=!1;function Zu(e){et===null?et=[e]:et.push(e)}function Tf(e){Ai=!0,Zu(e)}function _t(){if(!fo&&et!==null){fo=!0;var e=0,t=I;try{var r=et;for(I=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}et=null,Ai=!1}catch(i){throw et!==null&&(et=et.slice(e+1)),Su(Tl,_t),i}finally{I=t,fo=!1}}return null}var ir=[],or=0,hi=null,gi=0,ze=[],Pe=0,Ut=null,tt=1,rt="";function Tt(e,t){ir[or++]=gi,ir[or++]=hi,hi=e,gi=t}function ec(e,t,r){ze[Pe++]=tt,ze[Pe++]=rt,ze[Pe++]=Ut,Ut=e;var n=tt;e=rt;var i=32-De(n)-1;n&=~(1<<i),r+=1;var o=32-De(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,tt=1<<32-De(t)+i|r<<i|n,rt=o+e}else tt=1<<o|r<<i|n,rt=e}function Bl(e){e.return!==null&&(Tt(e,1),ec(e,1,0))}function Hl(e){for(;e===hi;)hi=ir[--or],ir[or]=null,gi=ir[--or],ir[or]=null;for(;e===Ut;)Ut=ze[--Pe],ze[Pe]=null,rt=ze[--Pe],ze[Pe]=null,tt=ze[--Pe],ze[Pe]=null}var Se=null,Ne=null,W=!1,Ie=null;function tc(e,t){var r=_e(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ls(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Se=e,Ne=jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Se=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Ut!==null?{id:tt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=_e(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Se=e,Ne=null,!0):!1;default:return!1}}function el(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tl(e){if(W){var t=Ne;if(t){var r=t;if(!ls(e,t)){if(el(e))throw Error(N(418));t=jt(r.nextSibling);var n=Se;t&&ls(e,t)?tc(n,r):(e.flags=e.flags&-4097|2,W=!1,Se=e)}}else{if(el(e))throw Error(N(418));e.flags=e.flags&-4097|2,W=!1,Se=e}}}function as(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Se=e}function On(e){if(e!==Se)return!1;if(!W)return as(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Go(e.type,e.memoizedProps)),t&&(t=Ne)){if(el(e))throw rc(),Error(N(418));for(;t;)tc(e,t),t=jt(t.nextSibling)}if(as(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ne=jt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Se?jt(e.stateNode.nextSibling):null;return!0}function rc(){for(var e=Ne;e;)e=jt(e.nextSibling)}function xr(){Ne=Se=null,W=!1}function Wl(e){Ie===null?Ie=[e]:Ie.push(e)}var Ff=ct.ReactCurrentBatchConfig;function Lr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(N(309));var n=r.stateNode}if(!n)throw Error(N(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=i.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(N(284));if(!r._owner)throw Error(N(290,e))}return e}function In(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ss(e){var t=e._init;return t(e._payload)}function nc(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function r(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function n(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=bt(p,f),p.index=0,p.sibling=null,p}function o(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,f,m,j){return f===null||f.tag!==6?(f=wo(m,p.mode,j),f.return=p,f):(f=i(f,m),f.return=p,f)}function u(p,f,m,j){var b=m.type;return b===Jt?h(p,f,m.props.children,j,m.key):f!==null&&(f.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===pt&&ss(b)===f.type)?(j=i(f,m.props),j.ref=Lr(p,f,m),j.return=p,j):(j=ti(m.type,m.key,m.props,null,p.mode,j),j.ref=Lr(p,f,m),j.return=p,j)}function c(p,f,m,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=jo(m,p.mode,j),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function h(p,f,m,j,b){return f===null||f.tag!==7?(f=Dt(m,p.mode,j,b),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=wo(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Cn:return m=ti(f.type,f.key,f.props,null,p.mode,m),m.ref=Lr(p,null,f),m.return=p,m;case Xt:return f=jo(f,p.mode,m),f.return=p,f;case pt:var j=f._init;return d(p,j(f._payload),m)}if(Or(f)||Cr(f))return f=Dt(f,p.mode,m,null),f.return=p,f;In(p,f)}return null}function g(p,f,m,j){var b=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return b!==null?null:s(p,f,""+m,j);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Cn:return m.key===b?u(p,f,m,j):null;case Xt:return m.key===b?c(p,f,m,j):null;case pt:return b=m._init,g(p,f,b(m._payload),j)}if(Or(m)||Cr(m))return b!==null?null:h(p,f,m,j,null);In(p,m)}return null}function y(p,f,m,j,b){if(typeof j=="string"&&j!==""||typeof j=="number")return p=p.get(m)||null,s(f,p,""+j,b);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Cn:return p=p.get(j.key===null?m:j.key)||null,u(f,p,j,b);case Xt:return p=p.get(j.key===null?m:j.key)||null,c(f,p,j,b);case pt:var S=j._init;return y(p,f,m,S(j._payload),b)}if(Or(j)||Cr(j))return p=p.get(m)||null,h(f,p,j,b,null);In(f,j)}return null}function w(p,f,m,j){for(var b=null,S=null,E=f,z=f=0,A=null;E!==null&&z<m.length;z++){E.index>z?(A=E,E=null):A=E.sibling;var R=g(p,E,m[z],j);if(R===null){E===null&&(E=A);break}e&&E&&R.alternate===null&&t(p,E),f=o(R,f,z),S===null?b=R:S.sibling=R,S=R,E=A}if(z===m.length)return r(p,E),W&&Tt(p,z),b;if(E===null){for(;z<m.length;z++)E=d(p,m[z],j),E!==null&&(f=o(E,f,z),S===null?b=E:S.sibling=E,S=E);return W&&Tt(p,z),b}for(E=n(p,E);z<m.length;z++)A=y(E,p,z,m[z],j),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?z:A.key),f=o(A,f,z),S===null?b=A:S.sibling=A,S=A);return e&&E.forEach(function(pe){return t(p,pe)}),W&&Tt(p,z),b}function v(p,f,m,j){var b=Cr(m);if(typeof b!="function")throw Error(N(150));if(m=b.call(m),m==null)throw Error(N(151));for(var S=b=null,E=f,z=f=0,A=null,R=m.next();E!==null&&!R.done;z++,R=m.next()){E.index>z?(A=E,E=null):A=E.sibling;var pe=g(p,E,R.value,j);if(pe===null){E===null&&(E=A);break}e&&E&&pe.alternate===null&&t(p,E),f=o(pe,f,z),S===null?b=pe:S.sibling=pe,S=pe,E=A}if(R.done)return r(p,E),W&&Tt(p,z),b;if(E===null){for(;!R.done;z++,R=m.next())R=d(p,R.value,j),R!==null&&(f=o(R,f,z),S===null?b=R:S.sibling=R,S=R);return W&&Tt(p,z),b}for(E=n(p,E);!R.done;z++,R=m.next())R=y(E,p,z,R.value,j),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?z:R.key),f=o(R,f,z),S===null?b=R:S.sibling=R,S=R);return e&&E.forEach(function(Qt){return t(p,Qt)}),W&&Tt(p,z),b}function k(p,f,m,j){if(typeof m=="object"&&m!==null&&m.type===Jt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Cn:e:{for(var b=m.key,S=f;S!==null;){if(S.key===b){if(b=m.type,b===Jt){if(S.tag===7){r(p,S.sibling),f=i(S,m.props.children),f.return=p,p=f;break e}}else if(S.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===pt&&ss(b)===S.type){r(p,S.sibling),f=i(S,m.props),f.ref=Lr(p,S,m),f.return=p,p=f;break e}r(p,S);break}else t(p,S);S=S.sibling}m.type===Jt?(f=Dt(m.props.children,p.mode,j,m.key),f.return=p,p=f):(j=ti(m.type,m.key,m.props,null,p.mode,j),j.ref=Lr(p,f,m),j.return=p,p=j)}return a(p);case Xt:e:{for(S=m.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){r(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{r(p,f);break}else t(p,f);f=f.sibling}f=jo(m,p.mode,j),f.return=p,p=f}return a(p);case pt:return S=m._init,k(p,f,S(m._payload),j)}if(Or(m))return w(p,f,m,j);if(Cr(m))return v(p,f,m,j);In(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(r(p,f.sibling),f=i(f,m),f.return=p,p=f):(r(p,f),f=wo(m,p.mode,j),f.return=p,p=f),a(p)):r(p,f)}return k}var yr=nc(!0),ic=nc(!1),xi=Pt(null),yi=null,lr=null,ql=null;function Vl(){ql=lr=yi=null}function Ql(e){var t=xi.current;H(xi),e._currentValue=t}function rl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function fr(e,t){yi=e,ql=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ye=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(ql!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(yi===null)throw Error(N(308));lr=e,yi.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var At=null;function Yl(e){At===null?At=[e]:At.push(e)}function oc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Yl(t)):(r.next=i.next,i.next=r),t.interleaved=r,at(e,n)}function at(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var ft=!1;function Kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,O&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,at(e,r)}return i=n.interleaved,i===null?(t.next=t,Yl(n)):(t.next=i.next,i.next=t),n.interleaved=t,at(e,r)}function Kn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Fl(e,r)}}function us(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function vi(e,t,r,n){var i=e.updateQueue;ft=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?o=c:a.next=c,a=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==a&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(o!==null){var d=i.baseState;a=0,h=c=u=null,s=o;do{var g=s.lane,y=s.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,v=s;switch(g=t,y=r,v.tag){case 1:if(w=v.payload,typeof w=="function"){d=w.call(y,d,g);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,g=typeof w=="function"?w.call(y,d,g):w,g==null)break e;d=Y({},d,g);break e;case 2:ft=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=y,u=d):h=h.next=y,a|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ht|=a,e.lanes=a,e.memoizedState=d}}function cs(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(N(191,i));i.call(n)}}}var vn={},Ge=Pt(vn),an=Pt(vn),sn=Pt(vn);function Ot(e){if(e===vn)throw Error(N(174));return e}function Gl(e,t){switch(U(sn,t),U(an,e),U(Ge,vn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ao(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ao(t,e)}H(Ge),U(Ge,t)}function vr(){H(Ge),H(an),H(sn)}function ac(e){Ot(sn.current);var t=Ot(Ge.current),r=Ao(t,e.type);t!==r&&(U(an,e),U(Ge,r))}function Xl(e){an.current===e&&(H(Ge),H(an))}var q=Pt(0);function wi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mo=[];function Jl(){for(var e=0;e<mo.length;e++)mo[e]._workInProgressVersionPrimary=null;mo.length=0}var Gn=ct.ReactCurrentDispatcher,ho=ct.ReactCurrentBatchConfig,Bt=0,V=null,Z=null,re=null,ji=!1,qr=!1,un=0,Mf=0;function se(){throw Error(N(321))}function Zl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ue(e[r],t[r]))return!1;return!0}function ea(e,t,r,n,i,o){if(Bt=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gn.current=e===null||e.memoizedState===null?Df:$f,e=r(n,i),qr){o=0;do{if(qr=!1,un=0,25<=o)throw Error(N(301));o+=1,re=Z=null,t.updateQueue=null,Gn.current=Uf,e=r(n,i)}while(qr)}if(Gn.current=ki,t=Z!==null&&Z.next!==null,Bt=0,re=Z=V=null,ji=!1,t)throw Error(N(300));return e}function ta(){var e=un!==0;return un=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return re===null?V.memoizedState=re=e:re=re.next=e,re}function Te(){if(Z===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=re===null?V.memoizedState:re.next;if(t!==null)re=t,Z=e;else{if(e===null)throw Error(N(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},re===null?V.memoizedState=re=e:re=re.next=e}return re}function cn(e,t){return typeof t=="function"?t(e):t}function go(e){var t=Te(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=Z,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var s=a=null,u=null,c=o;do{var h=c.lane;if((Bt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=d,a=n):u=u.next=d,V.lanes|=h,Ht|=h}c=c.next}while(c!==null&&c!==o);u===null?a=n:u.next=s,Ue(n,t.memoizedState)||(ye=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,V.lanes|=o,Ht|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function xo(e){var t=Te(),r=t.queue;if(r===null)throw Error(N(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ue(o,t.memoizedState)||(ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function sc(){}function uc(e,t){var r=V,n=Te(),i=t(),o=!Ue(n.memoizedState,i);if(o&&(n.memoizedState=i,ye=!0),n=n.queue,ra(pc.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||re!==null&&re.memoizedState.tag&1){if(r.flags|=2048,dn(9,dc.bind(null,r,n,i,t),void 0,null),ne===null)throw Error(N(349));Bt&30||cc(r,t,i)}return i}function cc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function dc(e,t,r,n){t.value=r,t.getSnapshot=n,fc(t)&&mc(e)}function pc(e,t,r){return r(function(){fc(t)&&mc(e)})}function fc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ue(e,r)}catch{return!0}}function mc(e){var t=at(e,1);t!==null&&$e(t,e,1,-1)}function ds(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cn,lastRenderedState:e},t.queue=e,e=e.dispatch=If.bind(null,V,e),[t.memoizedState,e]}function dn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function hc(){return Te().memoizedState}function Xn(e,t,r,n){var i=Qe();V.flags|=e,i.memoizedState=dn(1|t,r,void 0,n===void 0?null:n)}function Oi(e,t,r,n){var i=Te();n=n===void 0?null:n;var o=void 0;if(Z!==null){var a=Z.memoizedState;if(o=a.destroy,n!==null&&Zl(n,a.deps)){i.memoizedState=dn(t,r,o,n);return}}V.flags|=e,i.memoizedState=dn(1|t,r,o,n)}function ps(e,t){return Xn(8390656,8,e,t)}function ra(e,t){return Oi(2048,8,e,t)}function gc(e,t){return Oi(4,2,e,t)}function xc(e,t){return Oi(4,4,e,t)}function yc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vc(e,t,r){return r=r!=null?r.concat([e]):null,Oi(4,4,yc.bind(null,t,e),r)}function na(){}function wc(e,t){var r=Te();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Zl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function jc(e,t){var r=Te();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Zl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function kc(e,t,r){return Bt&21?(Ue(r,t)||(r=Cu(),V.lanes|=r,Ht|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ye=!0),e.memoizedState=r)}function Af(e,t){var r=I;I=r!==0&&4>r?r:4,e(!0);var n=ho.transition;ho.transition={};try{e(!1),t()}finally{I=r,ho.transition=n}}function Nc(){return Te().memoizedState}function Of(e,t,r){var n=St(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Sc(e))bc(t,r);else if(r=oc(e,t,r,n),r!==null){var i=me();$e(r,e,n,i),Ec(r,t,n)}}function If(e,t,r){var n=St(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Sc(e))bc(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,r);if(i.hasEagerState=!0,i.eagerState=s,Ue(s,a)){var u=t.interleaved;u===null?(i.next=i,Yl(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=oc(e,t,i,n),r!==null&&(i=me(),$e(r,e,n,i),Ec(r,t,n))}}function Sc(e){var t=e.alternate;return e===V||t!==null&&t===V}function bc(e,t){qr=ji=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Ec(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Fl(e,r)}}var ki={readContext:Le,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},Df={readContext:Le,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:ps,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Xn(4194308,4,yc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Xn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xn(4,2,e,t)},useMemo:function(e,t){var r=Qe();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Qe();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Of.bind(null,V,e),[n.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:ds,useDebugValue:na,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=ds(!1),t=e[0];return e=Af.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=V,i=Qe();if(W){if(r===void 0)throw Error(N(407));r=r()}else{if(r=t(),ne===null)throw Error(N(349));Bt&30||cc(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,ps(pc.bind(null,n,o,e),[e]),n.flags|=2048,dn(9,dc.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=Qe(),t=ne.identifierPrefix;if(W){var r=rt,n=tt;r=(n&~(1<<32-De(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=un++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Mf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$f={readContext:Le,useCallback:wc,useContext:Le,useEffect:ra,useImperativeHandle:vc,useInsertionEffect:gc,useLayoutEffect:xc,useMemo:jc,useReducer:go,useRef:hc,useState:function(){return go(cn)},useDebugValue:na,useDeferredValue:function(e){var t=Te();return kc(t,Z.memoizedState,e)},useTransition:function(){var e=go(cn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:sc,useSyncExternalStore:uc,useId:Nc,unstable_isNewReconciler:!1},Uf={readContext:Le,useCallback:wc,useContext:Le,useEffect:ra,useImperativeHandle:vc,useInsertionEffect:gc,useLayoutEffect:xc,useMemo:jc,useReducer:xo,useRef:hc,useState:function(){return xo(cn)},useDebugValue:na,useDeferredValue:function(e){var t=Te();return Z===null?t.memoizedState=e:kc(t,Z.memoizedState,e)},useTransition:function(){var e=xo(cn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:sc,useSyncExternalStore:uc,useId:Nc,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function nl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Y({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ii={isMounted:function(e){return(e=e._reactInternals)?Vt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=me(),i=St(e),o=nt(n,i);o.payload=t,r!=null&&(o.callback=r),t=kt(e,o,i),t!==null&&($e(t,e,i,n),Kn(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=me(),i=St(e),o=nt(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=kt(e,o,i),t!==null&&($e(t,e,i,n),Kn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=me(),n=St(e),i=nt(r,n);i.tag=2,t!=null&&(i.callback=t),t=kt(e,i,n),t!==null&&($e(t,e,n,r),Kn(t,e,n))}};function fs(e,t,r,n,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!rn(r,n)||!rn(i,o):!0}function Cc(e,t,r){var n=!1,i=Ct,o=t.contextType;return typeof o=="object"&&o!==null?o=Le(o):(i=we(t)?$t:de.current,n=t.contextTypes,o=(n=n!=null)?gr(e,i):Ct),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ii,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ms(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ii.enqueueReplaceState(t,t.state,null)}function il(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Kl(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Le(o):(o=we(t)?$t:de.current,i.context=gr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(nl(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ii.enqueueReplaceState(i,i.state,null),vi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function wr(e,t){try{var r="",n=t;do r+=mp(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function yo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ol(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Bf=typeof WeakMap=="function"?WeakMap:Map;function zc(e,t,r){r=nt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Si||(Si=!0,hl=n),ol(e,t)},r}function Pc(e,t,r){r=nt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){ol(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){ol(e,t),typeof n!="function"&&(Nt===null?Nt=new Set([this]):Nt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function hs(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Bf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=rm.bind(null,e,t,r),t.then(e,e))}function gs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xs(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=nt(-1,1),t.tag=2,kt(r,t,1))),r.lanes|=1),e)}var Hf=ct.ReactCurrentOwner,ye=!1;function fe(e,t,r,n){t.child=e===null?ic(t,null,r,n):yr(t,e.child,r,n)}function ys(e,t,r,n,i){r=r.render;var o=t.ref;return fr(t,i),n=ea(e,t,r,n,o,i),r=ta(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,st(e,t,i)):(W&&r&&Bl(t),t.flags|=1,fe(e,t,n,i),t.child)}function vs(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!da(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,_c(e,t,o,n,i)):(e=ti(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:rn,r(a,n)&&e.ref===t.ref)return st(e,t,i)}return t.flags|=1,e=bt(o,n),e.ref=t.ref,e.return=t,t.child=e}function _c(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(rn(o,n)&&e.ref===t.ref)if(ye=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(ye=!0);else return t.lanes=e.lanes,st(e,t,i)}return ll(e,t,r,n,i)}function Rc(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(sr,ke),ke|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(sr,ke),ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,U(sr,ke),ke|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,U(sr,ke),ke|=n;return fe(e,t,i,r),t.child}function Lc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ll(e,t,r,n,i){var o=we(r)?$t:de.current;return o=gr(t,o),fr(t,i),r=ea(e,t,r,n,o,i),n=ta(),e!==null&&!ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,st(e,t,i)):(W&&n&&Bl(t),t.flags|=1,fe(e,t,r,i),t.child)}function ws(e,t,r,n,i){if(we(r)){var o=!0;mi(t)}else o=!1;if(fr(t,i),t.stateNode===null)Jn(e,t),Cc(t,r,n),il(t,r,n,i),n=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=r.contextType;typeof c=="object"&&c!==null?c=Le(c):(c=we(r)?$t:de.current,c=gr(t,c));var h=r.getDerivedStateFromProps,d=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||u!==c)&&ms(t,a,n,c),ft=!1;var g=t.memoizedState;a.state=g,vi(t,n,a,i),u=t.memoizedState,s!==n||g!==u||ve.current||ft?(typeof h=="function"&&(nl(t,r,h,n),u=t.memoizedState),(s=ft||fs(t,r,s,n,g,u,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),a.props=n,a.state=u,a.context=c,n=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,lc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ae(t.type,s),a.props=c,d=t.pendingProps,g=a.context,u=r.contextType,typeof u=="object"&&u!==null?u=Le(u):(u=we(r)?$t:de.current,u=gr(t,u));var y=r.getDerivedStateFromProps;(h=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||g!==u)&&ms(t,a,n,u),ft=!1,g=t.memoizedState,a.state=g,vi(t,n,a,i);var w=t.memoizedState;s!==d||g!==w||ve.current||ft?(typeof y=="function"&&(nl(t,r,y,n),w=t.memoizedState),(c=ft||fs(t,r,c,n,g,w,u)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,w,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),a.props=n,a.state=w,a.context=u,n=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return al(e,t,r,n,o,i)}function al(e,t,r,n,i,o){Lc(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return i&&os(t,r,!1),st(e,t,o);n=t.stateNode,Hf.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=yr(t,e.child,null,o),t.child=yr(t,null,s,o)):fe(e,t,s,o),t.memoizedState=n.state,i&&os(t,r,!0),t.child}function Tc(e){var t=e.stateNode;t.pendingContext?is(e,t.pendingContext,t.pendingContext!==t.context):t.context&&is(e,t.context,!1),Gl(e,t.containerInfo)}function js(e,t,r,n,i){return xr(),Wl(i),t.flags|=256,fe(e,t,r,n),t.child}var sl={dehydrated:null,treeContext:null,retryLane:0};function ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fc(e,t,r){var n=t.pendingProps,i=q.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(q,i&1),e===null)return tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=Ui(a,n,0,null),e=Dt(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ul(r),t.memoizedState=sl,e):ia(t,a));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Wf(e,t,a,n,s,i,r);if(o){o=n.fallback,a=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:n.children};return!(a&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=bt(i,u),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=bt(s,o):(o=Dt(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?ul(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=sl,n}return o=e.child,e=o.sibling,n=bt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ia(e,t){return t=Ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Dn(e,t,r,n){return n!==null&&Wl(n),yr(t,e.child,null,r),e=ia(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wf(e,t,r,n,i,o,a){if(r)return t.flags&256?(t.flags&=-257,n=yo(Error(N(422))),Dn(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=Ui({mode:"visible",children:n.children},i,0,null),o=Dt(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&yr(t,e.child,null,a),t.child.memoizedState=ul(a),t.memoizedState=sl,o);if(!(t.mode&1))return Dn(e,t,a,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(N(419)),n=yo(o,n,void 0),Dn(e,t,a,n)}if(s=(a&e.childLanes)!==0,ye||s){if(n=ne,n!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,at(e,i),$e(n,e,i,-1))}return ca(),n=yo(Error(N(421))),Dn(e,t,a,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=nm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ne=jt(i.nextSibling),Se=t,W=!0,Ie=null,e!==null&&(ze[Pe++]=tt,ze[Pe++]=rt,ze[Pe++]=Ut,tt=e.id,rt=e.overflow,Ut=t),t=ia(t,n.children),t.flags|=4096,t)}function ks(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),rl(e.return,t,r)}function vo(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function Mc(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(fe(e,t,n.children,r),n=q.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ks(e,r,t);else if(e.tag===19)ks(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(U(q,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&wi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),vo(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&wi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}vo(t,!0,r,null,o);break;case"together":vo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ht|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,r=bt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=bt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function qf(e,t,r){switch(t.tag){case 3:Tc(t),xr();break;case 5:ac(t);break;case 1:we(t.type)&&mi(t);break;case 4:Gl(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;U(xi,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(U(q,q.current&1),t.flags|=128,null):r&t.child.childLanes?Fc(e,t,r):(U(q,q.current&1),e=st(e,t,r),e!==null?e.sibling:null);U(q,q.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Mc(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(q,q.current),n)break;return null;case 22:case 23:return t.lanes=0,Rc(e,t,r)}return st(e,t,r)}var Ac,cl,Oc,Ic;Ac=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};cl=function(){};Oc=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Ot(Ge.current);var o=null;switch(r){case"input":i=Lo(e,i),n=Lo(e,n),o=[];break;case"select":i=Y({},i,{value:void 0}),n=Y({},n,{value:void 0}),o=[];break;case"textarea":i=Mo(e,i),n=Mo(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=pi)}Oo(r,n);var a;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Kr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var u=n[c];if(s=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(r||(r={}),r[a]=u[a])}else r||(o||(o=[]),o.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&B("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Ic=function(e,t,r,n){r!==n&&(t.flags|=4)};function Tr(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Vf(e,t,r){var n=t.pendingProps;switch(Hl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return we(t.type)&&fi(),ue(t),null;case 3:return n=t.stateNode,vr(),H(ve),H(de),Jl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(On(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ie!==null&&(yl(Ie),Ie=null))),cl(e,t),ue(t),null;case 5:Xl(t);var i=Ot(sn.current);if(r=t.type,e!==null&&t.stateNode!=null)Oc(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(N(166));return ue(t),null}if(e=Ot(Ge.current),On(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Ye]=t,n[ln]=o,e=(t.mode&1)!==0,r){case"dialog":B("cancel",n),B("close",n);break;case"iframe":case"object":case"embed":B("load",n);break;case"video":case"audio":for(i=0;i<Dr.length;i++)B(Dr[i],n);break;case"source":B("error",n);break;case"img":case"image":case"link":B("error",n),B("load",n);break;case"details":B("toggle",n);break;case"input":Ra(n,o),B("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},B("invalid",n);break;case"textarea":Ta(n,o),B("invalid",n)}Oo(r,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&An(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&An(n.textContent,s,e),i=["children",""+s]):Kr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&B("scroll",n)}switch(r){case"input":zn(n),La(n,o,!0);break;case"textarea":zn(n),Fa(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=pi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Ye]=t,e[ln]=n,Ac(e,t,!1,!1),t.stateNode=e;e:{switch(a=Io(r,n),r){case"dialog":B("cancel",e),B("close",e),i=n;break;case"iframe":case"object":case"embed":B("load",e),i=n;break;case"video":case"audio":for(i=0;i<Dr.length;i++)B(Dr[i],e);i=n;break;case"source":B("error",e),i=n;break;case"img":case"image":case"link":B("error",e),B("load",e),i=n;break;case"details":B("toggle",e),i=n;break;case"input":Ra(e,n),i=Lo(e,n),B("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Y({},n,{value:void 0}),B("invalid",e);break;case"textarea":Ta(e,n),i=Mo(e,n),B("invalid",e);break;default:i=n}Oo(r,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?hu(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&fu(e,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Gr(e,u):typeof u=="number"&&Gr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Kr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&B("scroll",e):u!=null&&zl(e,o,u,a))}switch(r){case"input":zn(e),La(e,n,!1);break;case"textarea":zn(e),Fa(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Et(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?ur(e,!!n.multiple,o,!1):n.defaultValue!=null&&ur(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=pi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ue(t),null;case 6:if(e&&t.stateNode!=null)Ic(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(N(166));if(r=Ot(sn.current),Ot(Ge.current),On(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ye]=t,(o=n.nodeValue!==r)&&(e=Se,e!==null))switch(e.tag){case 3:An(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&An(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ye]=t,t.stateNode=n}return ue(t),null;case 13:if(H(q),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ne!==null&&t.mode&1&&!(t.flags&128))rc(),xr(),t.flags|=98560,o=!1;else if(o=On(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(N(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(N(317));o[Ye]=t}else xr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ue(t),o=!1}else Ie!==null&&(yl(Ie),Ie=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ee===0&&(ee=3):ca())),t.updateQueue!==null&&(t.flags|=4),ue(t),null);case 4:return vr(),cl(e,t),e===null&&nn(t.stateNode.containerInfo),ue(t),null;case 10:return Ql(t.type._context),ue(t),null;case 17:return we(t.type)&&fi(),ue(t),null;case 19:if(H(q),o=t.memoizedState,o===null)return ue(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)Tr(o,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=wi(e),a!==null){for(t.flags|=128,Tr(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return U(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&G()>jr&&(t.flags|=128,n=!0,Tr(o,!1),t.lanes=4194304)}else{if(!n)if(e=wi(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Tr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!W)return ue(t),null}else 2*G()-o.renderingStartTime>jr&&r!==1073741824&&(t.flags|=128,n=!0,Tr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,r=q.current,U(q,n?r&1|2:r&1),t):(ue(t),null);case 22:case 23:return ua(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?ke&1073741824&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Qf(e,t){switch(Hl(t),t.tag){case 1:return we(t.type)&&fi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vr(),H(ve),H(de),Jl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xl(t),null;case 13:if(H(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));xr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(q),null;case 4:return vr(),null;case 10:return Ql(t.type._context),null;case 22:case 23:return ua(),null;case 24:return null;default:return null}}var $n=!1,ce=!1,Yf=typeof WeakSet=="function"?WeakSet:Set,P=null;function ar(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){K(e,t,n)}else r.current=null}function dl(e,t,r){try{r()}catch(n){K(e,t,n)}}var Ns=!1;function Kf(e,t){if(Yo=ui,e=Hu(),Ul(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,s=-1,u=-1,c=0,h=0,d=e,g=null;t:for(;;){for(var y;d!==r||i!==0&&d.nodeType!==3||(s=a+i),d!==o||n!==0&&d.nodeType!==3||(u=a+n),d.nodeType===3&&(a+=d.nodeValue.length),(y=d.firstChild)!==null;)g=d,d=y;for(;;){if(d===e)break t;if(g===r&&++c===i&&(s=a),g===o&&++h===n&&(u=a),(y=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=y}r=s===-1||u===-1?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ko={focusedElem:e,selectionRange:r},ui=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,k=w.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ae(t.type,v),k);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(j){K(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=Ns,Ns=!1,w}function Vr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&dl(t,r,o)}i=i.next}while(i!==n)}}function Di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function pl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Dc(e){var t=e.alternate;t!==null&&(e.alternate=null,Dc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[ln],delete t[Jo],delete t[Rf],delete t[Lf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $c(e){return e.tag===5||e.tag===3||e.tag===4}function Ss(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=pi));else if(n!==4&&(e=e.child,e!==null))for(fl(e,t,r),e=e.sibling;e!==null;)fl(e,t,r),e=e.sibling}function ml(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ml(e,t,r),e=e.sibling;e!==null;)ml(e,t,r),e=e.sibling}var oe=null,Oe=!1;function dt(e,t,r){for(r=r.child;r!==null;)Uc(e,t,r),r=r.sibling}function Uc(e,t,r){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Ri,r)}catch{}switch(r.tag){case 5:ce||ar(r,t);case 6:var n=oe,i=Oe;oe=null,dt(e,t,r),oe=n,Oe=i,oe!==null&&(Oe?(e=oe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):oe.removeChild(r.stateNode));break;case 18:oe!==null&&(Oe?(e=oe,r=r.stateNode,e.nodeType===8?po(e.parentNode,r):e.nodeType===1&&po(e,r),en(e)):po(oe,r.stateNode));break;case 4:n=oe,i=Oe,oe=r.stateNode.containerInfo,Oe=!0,dt(e,t,r),oe=n,Oe=i;break;case 0:case 11:case 14:case 15:if(!ce&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&dl(r,t,a),i=i.next}while(i!==n)}dt(e,t,r);break;case 1:if(!ce&&(ar(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){K(r,t,s)}dt(e,t,r);break;case 21:dt(e,t,r);break;case 22:r.mode&1?(ce=(n=ce)||r.memoizedState!==null,dt(e,t,r),ce=n):dt(e,t,r);break;default:dt(e,t,r)}}function bs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Yf),t.forEach(function(n){var i=im.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Me(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:oe=s.stateNode,Oe=!1;break e;case 3:oe=s.stateNode.containerInfo,Oe=!0;break e;case 4:oe=s.stateNode.containerInfo,Oe=!0;break e}s=s.return}if(oe===null)throw Error(N(160));Uc(o,a,i),oe=null,Oe=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){K(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bc(t,e),t=t.sibling}function Bc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ve(e),n&4){try{Vr(3,e,e.return),Di(3,e)}catch(v){K(e,e.return,v)}try{Vr(5,e,e.return)}catch(v){K(e,e.return,v)}}break;case 1:Me(t,e),Ve(e),n&512&&r!==null&&ar(r,r.return);break;case 5:if(Me(t,e),Ve(e),n&512&&r!==null&&ar(r,r.return),e.flags&32){var i=e.stateNode;try{Gr(i,"")}catch(v){K(e,e.return,v)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&cu(i,o),Io(s,a);var c=Io(s,o);for(a=0;a<u.length;a+=2){var h=u[a],d=u[a+1];h==="style"?hu(i,d):h==="dangerouslySetInnerHTML"?fu(i,d):h==="children"?Gr(i,d):zl(i,h,d,c)}switch(s){case"input":To(i,o);break;case"textarea":du(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?ur(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?ur(i,!!o.multiple,o.defaultValue,!0):ur(i,!!o.multiple,o.multiple?[]:"",!1))}i[ln]=o}catch(v){K(e,e.return,v)}}break;case 6:if(Me(t,e),Ve(e),n&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){K(e,e.return,v)}}break;case 3:if(Me(t,e),Ve(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{en(t.containerInfo)}catch(v){K(e,e.return,v)}break;case 4:Me(t,e),Ve(e);break;case 13:Me(t,e),Ve(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(aa=G())),n&4&&bs(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(ce=(c=ce)||h,Me(t,e),ce=c):Me(t,e),Ve(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(d=P=h;P!==null;){switch(g=P,y=g.child,g.tag){case 0:case 11:case 14:case 15:Vr(4,g,g.return);break;case 1:ar(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){K(n,r,v)}}break;case 5:ar(g,g.return);break;case 22:if(g.memoizedState!==null){Cs(d);continue}}y!==null?(y.return=g,P=y):Cs(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,u=d.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=mu("display",a))}catch(v){K(e,e.return,v)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){K(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Me(t,e),Ve(e),n&4&&bs(e);break;case 21:break;default:Me(t,e),Ve(e)}}function Ve(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if($c(r)){var n=r;break e}r=r.return}throw Error(N(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Gr(i,""),n.flags&=-33);var o=Ss(e);ml(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,s=Ss(e);fl(e,s,a);break;default:throw Error(N(161))}}catch(u){K(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gf(e,t,r){P=e,Hc(e)}function Hc(e,t,r){for(var n=(e.mode&1)!==0;P!==null;){var i=P,o=i.child;if(i.tag===22&&n){var a=i.memoizedState!==null||$n;if(!a){var s=i.alternate,u=s!==null&&s.memoizedState!==null||ce;s=$n;var c=ce;if($n=a,(ce=u)&&!c)for(P=i;P!==null;)a=P,u=a.child,a.tag===22&&a.memoizedState!==null?zs(i):u!==null?(u.return=a,P=u):zs(i);for(;o!==null;)P=o,Hc(o),o=o.sibling;P=i,$n=s,ce=c}Es(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,P=o):Es(e)}}function Es(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ce||Di(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ce)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ae(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&cs(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}cs(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&en(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ce||t.flags&512&&pl(t)}catch(g){K(t,t.return,g)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function Cs(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function zs(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Di(4,t)}catch(u){K(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){K(t,i,u)}}var o=t.return;try{pl(t)}catch(u){K(t,o,u)}break;case 5:var a=t.return;try{pl(t)}catch(u){K(t,a,u)}}}catch(u){K(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Xf=Math.ceil,Ni=ct.ReactCurrentDispatcher,oa=ct.ReactCurrentOwner,Re=ct.ReactCurrentBatchConfig,O=0,ne=null,J=null,le=0,ke=0,sr=Pt(0),ee=0,pn=null,Ht=0,$i=0,la=0,Qr=null,xe=null,aa=0,jr=1/0,Ze=null,Si=!1,hl=null,Nt=null,Un=!1,xt=null,bi=0,Yr=0,gl=null,Zn=-1,ei=0;function me(){return O&6?G():Zn!==-1?Zn:Zn=G()}function St(e){return e.mode&1?O&2&&le!==0?le&-le:Ff.transition!==null?(ei===0&&(ei=Cu()),ei):(e=I,e!==0||(e=window.event,e=e===void 0?16:Fu(e.type)),e):1}function $e(e,t,r,n){if(50<Yr)throw Yr=0,gl=null,Error(N(185));gn(e,r,n),(!(O&2)||e!==ne)&&(e===ne&&(!(O&2)&&($i|=r),ee===4&&ht(e,le)),je(e,n),r===1&&O===0&&!(t.mode&1)&&(jr=G()+500,Ai&&_t()))}function je(e,t){var r=e.callbackNode;Tp(e,t);var n=si(e,e===ne?le:0);if(n===0)r!==null&&Oa(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Oa(r),t===1)e.tag===0?Tf(Ps.bind(null,e)):Zu(Ps.bind(null,e)),Pf(function(){!(O&6)&&_t()}),r=null;else{switch(zu(n)){case 1:r=Tl;break;case 4:r=bu;break;case 16:r=ai;break;case 536870912:r=Eu;break;default:r=ai}r=Xc(r,Wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Wc(e,t){if(Zn=-1,ei=0,O&6)throw Error(N(327));var r=e.callbackNode;if(mr()&&e.callbackNode!==r)return null;var n=si(e,e===ne?le:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ei(e,n);else{t=n;var i=O;O|=2;var o=Vc();(ne!==e||le!==t)&&(Ze=null,jr=G()+500,It(e,t));do try{em();break}catch(s){qc(e,s)}while(!0);Vl(),Ni.current=o,O=i,J!==null?t=0:(ne=null,le=0,t=ee)}if(t!==0){if(t===2&&(i=Ho(e),i!==0&&(n=i,t=xl(e,i))),t===1)throw r=pn,It(e,0),ht(e,n),je(e,G()),r;if(t===6)ht(e,n);else{if(i=e.current.alternate,!(n&30)&&!Jf(i)&&(t=Ei(e,n),t===2&&(o=Ho(e),o!==0&&(n=o,t=xl(e,o))),t===1))throw r=pn,It(e,0),ht(e,n),je(e,G()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(N(345));case 2:Ft(e,xe,Ze);break;case 3:if(ht(e,n),(n&130023424)===n&&(t=aa+500-G(),10<t)){if(si(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){me(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xo(Ft.bind(null,e,xe,Ze),t);break}Ft(e,xe,Ze);break;case 4:if(ht(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var a=31-De(n);o=1<<a,a=t[a],a>i&&(i=a),n&=~o}if(n=i,n=G()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Xf(n/1960))-n,10<n){e.timeoutHandle=Xo(Ft.bind(null,e,xe,Ze),n);break}Ft(e,xe,Ze);break;case 5:Ft(e,xe,Ze);break;default:throw Error(N(329))}}}return je(e,G()),e.callbackNode===r?Wc.bind(null,e):null}function xl(e,t){var r=Qr;return e.current.memoizedState.isDehydrated&&(It(e,t).flags|=256),e=Ei(e,t),e!==2&&(t=xe,xe=r,t!==null&&yl(t)),e}function yl(e){xe===null?xe=e:xe.push.apply(xe,e)}function Jf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Ue(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ht(e,t){for(t&=~la,t&=~$i,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-De(t),n=1<<r;e[r]=-1,t&=~n}}function Ps(e){if(O&6)throw Error(N(327));mr();var t=si(e,0);if(!(t&1))return je(e,G()),null;var r=Ei(e,t);if(e.tag!==0&&r===2){var n=Ho(e);n!==0&&(t=n,r=xl(e,n))}if(r===1)throw r=pn,It(e,0),ht(e,t),je(e,G()),r;if(r===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,xe,Ze),je(e,G()),null}function sa(e,t){var r=O;O|=1;try{return e(t)}finally{O=r,O===0&&(jr=G()+500,Ai&&_t())}}function Wt(e){xt!==null&&xt.tag===0&&!(O&6)&&mr();var t=O;O|=1;var r=Re.transition,n=I;try{if(Re.transition=null,I=1,e)return e()}finally{I=n,Re.transition=r,O=t,!(O&6)&&_t()}}function ua(){ke=sr.current,H(sr)}function It(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,zf(r)),J!==null)for(r=J.return;r!==null;){var n=r;switch(Hl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&fi();break;case 3:vr(),H(ve),H(de),Jl();break;case 5:Xl(n);break;case 4:vr();break;case 13:H(q);break;case 19:H(q);break;case 10:Ql(n.type._context);break;case 22:case 23:ua()}r=r.return}if(ne=e,J=e=bt(e.current,null),le=ke=t,ee=0,pn=null,la=$i=Ht=0,xe=Qr=null,At!==null){for(t=0;t<At.length;t++)if(r=At[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=i,n.next=a}r.pending=n}At=null}return e}function qc(e,t){do{var r=J;try{if(Vl(),Gn.current=ki,ji){for(var n=V.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ji=!1}if(Bt=0,re=Z=V=null,qr=!1,un=0,oa.current=null,r===null||r.return===null){ee=1,pn=t,J=null;break}e:{var o=e,a=r.return,s=r,u=t;if(t=le,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=gs(a);if(y!==null){y.flags&=-257,xs(y,a,s,o,t),y.mode&1&&hs(o,c,t),t=y,u=c;var w=t.updateQueue;if(w===null){var v=new Set;v.add(u),t.updateQueue=v}else w.add(u);break e}else{if(!(t&1)){hs(o,c,t),ca();break e}u=Error(N(426))}}else if(W&&s.mode&1){var k=gs(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),xs(k,a,s,o,t),Wl(wr(u,s));break e}}o=u=wr(u,s),ee!==4&&(ee=2),Qr===null?Qr=[o]:Qr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=zc(o,u,t);us(o,p);break e;case 1:s=u;var f=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Nt===null||!Nt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=Pc(o,s,t);us(o,j);break e}}o=o.return}while(o!==null)}Yc(r)}catch(b){t=b,J===r&&r!==null&&(J=r=r.return);continue}break}while(!0)}function Vc(){var e=Ni.current;return Ni.current=ki,e===null?ki:e}function ca(){(ee===0||ee===3||ee===2)&&(ee=4),ne===null||!(Ht&268435455)&&!($i&268435455)||ht(ne,le)}function Ei(e,t){var r=O;O|=2;var n=Vc();(ne!==e||le!==t)&&(Ze=null,It(e,t));do try{Zf();break}catch(i){qc(e,i)}while(!0);if(Vl(),O=r,Ni.current=n,J!==null)throw Error(N(261));return ne=null,le=0,ee}function Zf(){for(;J!==null;)Qc(J)}function em(){for(;J!==null&&!Sp();)Qc(J)}function Qc(e){var t=Gc(e.alternate,e,ke);e.memoizedProps=e.pendingProps,t===null?Yc(e):J=t,oa.current=null}function Yc(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Qf(r,t),r!==null){r.flags&=32767,J=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,J=null;return}}else if(r=Vf(r,t,ke),r!==null){J=r;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ee===0&&(ee=5)}function Ft(e,t,r){var n=I,i=Re.transition;try{Re.transition=null,I=1,tm(e,t,r,n)}finally{Re.transition=i,I=n}return null}function tm(e,t,r,n){do mr();while(xt!==null);if(O&6)throw Error(N(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Fp(e,o),e===ne&&(J=ne=null,le=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Un||(Un=!0,Xc(ai,function(){return mr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Re.transition,Re.transition=null;var a=I;I=1;var s=O;O|=4,oa.current=null,Kf(e,r),Bc(r,e),jf(Ko),ui=!!Yo,Ko=Yo=null,e.current=r,Gf(r),bp(),O=s,I=a,Re.transition=o}else e.current=r;if(Un&&(Un=!1,xt=e,bi=i),o=e.pendingLanes,o===0&&(Nt=null),zp(r.stateNode),je(e,G()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Si)throw Si=!1,e=hl,hl=null,e;return bi&1&&e.tag!==0&&mr(),o=e.pendingLanes,o&1?e===gl?Yr++:(Yr=0,gl=e):Yr=0,_t(),null}function mr(){if(xt!==null){var e=zu(bi),t=Re.transition,r=I;try{if(Re.transition=null,I=16>e?16:e,xt===null)var n=!1;else{if(e=xt,xt=null,bi=0,O&6)throw Error(N(331));var i=O;for(O|=4,P=e.current;P!==null;){var o=P,a=o.child;if(P.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(P=c;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Vr(8,h,o)}var d=h.child;if(d!==null)d.return=h,P=d;else for(;P!==null;){h=P;var g=h.sibling,y=h.return;if(Dc(h),h===c){P=null;break}if(g!==null){g.return=y,P=g;break}P=y}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}P=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,P=a;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,P=p;break e}P=o.return}}var f=e.current;for(P=f;P!==null;){a=P;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,P=m;else e:for(a=f;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Di(9,s)}}catch(b){K(s,s.return,b)}if(s===a){P=null;break e}var j=s.sibling;if(j!==null){j.return=s.return,P=j;break e}P=s.return}}if(O=i,_t(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Ri,e)}catch{}n=!0}return n}finally{I=r,Re.transition=t}}return!1}function _s(e,t,r){t=wr(r,t),t=zc(e,t,1),e=kt(e,t,1),t=me(),e!==null&&(gn(e,1,t),je(e,t))}function K(e,t,r){if(e.tag===3)_s(e,e,r);else for(;t!==null;){if(t.tag===3){_s(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Nt===null||!Nt.has(n))){e=wr(r,e),e=Pc(t,e,1),t=kt(t,e,1),e=me(),t!==null&&(gn(t,1,e),je(t,e));break}}t=t.return}}function rm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&r,ne===e&&(le&r)===r&&(ee===4||ee===3&&(le&130023424)===le&&500>G()-aa?It(e,0):la|=r),je(e,t)}function Kc(e,t){t===0&&(e.mode&1?(t=Rn,Rn<<=1,!(Rn&130023424)&&(Rn=4194304)):t=1);var r=me();e=at(e,t),e!==null&&(gn(e,t,r),je(e,r))}function nm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Kc(e,r)}function im(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(t),Kc(e,r)}var Gc;Gc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)ye=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ye=!1,qf(e,t,r);ye=!!(e.flags&131072)}else ye=!1,W&&t.flags&1048576&&ec(t,gi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Jn(e,t),e=t.pendingProps;var i=gr(t,de.current);fr(t,r),i=ea(null,t,n,e,i,r);var o=ta();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(n)?(o=!0,mi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kl(t),i.updater=Ii,t.stateNode=i,i._reactInternals=t,il(t,n,e,r),t=al(null,t,n,!0,o,r)):(t.tag=0,W&&o&&Bl(t),fe(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Jn(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=lm(n),e=Ae(n,e),i){case 0:t=ll(null,t,n,e,r);break e;case 1:t=ws(null,t,n,e,r);break e;case 11:t=ys(null,t,n,e,r);break e;case 14:t=vs(null,t,n,Ae(n.type,e),r);break e}throw Error(N(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ae(n,i),ll(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ae(n,i),ws(e,t,n,i,r);case 3:e:{if(Tc(t),e===null)throw Error(N(387));n=t.pendingProps,o=t.memoizedState,i=o.element,lc(e,t),vi(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=wr(Error(N(423)),t),t=js(e,t,n,r,i);break e}else if(n!==i){i=wr(Error(N(424)),t),t=js(e,t,n,r,i);break e}else for(Ne=jt(t.stateNode.containerInfo.firstChild),Se=t,W=!0,Ie=null,r=ic(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(xr(),n===i){t=st(e,t,r);break e}fe(e,t,n,r)}t=t.child}return t;case 5:return ac(t),e===null&&tl(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Go(n,i)?a=null:o!==null&&Go(n,o)&&(t.flags|=32),Lc(e,t),fe(e,t,a,r),t.child;case 6:return e===null&&tl(t),null;case 13:return Fc(e,t,r);case 4:return Gl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=yr(t,null,n,r):fe(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ae(n,i),ys(e,t,n,i,r);case 7:return fe(e,t,t.pendingProps,r),t.child;case 8:return fe(e,t,t.pendingProps.children,r),t.child;case 12:return fe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,U(xi,n._currentValue),n._currentValue=a,o!==null)if(Ue(o.value,a)){if(o.children===i.children&&!ve.current){t=st(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===n){if(o.tag===1){u=nt(-1,r&-r),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),rl(o.return,r,t),s.lanes|=r;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(N(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),rl(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}fe(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,fr(t,r),i=Le(i),n=n(i),t.flags|=1,fe(e,t,n,r),t.child;case 14:return n=t.type,i=Ae(n,t.pendingProps),i=Ae(n.type,i),vs(e,t,n,i,r);case 15:return _c(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ae(n,i),Jn(e,t),t.tag=1,we(n)?(e=!0,mi(t)):e=!1,fr(t,r),Cc(t,n,i),il(t,n,i,r),al(null,t,n,!0,e,r);case 19:return Mc(e,t,r);case 22:return Rc(e,t,r)}throw Error(N(156,t.tag))};function Xc(e,t){return Su(e,t)}function om(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,r,n){return new om(e,t,r,n)}function da(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lm(e){if(typeof e=="function")return da(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_l)return 11;if(e===Rl)return 14}return 2}function bt(e,t){var r=e.alternate;return r===null?(r=_e(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ti(e,t,r,n,i,o){var a=2;if(n=e,typeof e=="function")da(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Jt:return Dt(r.children,i,o,t);case Pl:a=8,i|=8;break;case zo:return e=_e(12,r,t,i|2),e.elementType=zo,e.lanes=o,e;case Po:return e=_e(13,r,t,i),e.elementType=Po,e.lanes=o,e;case _o:return e=_e(19,r,t,i),e.elementType=_o,e.lanes=o,e;case au:return Ui(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ou:a=10;break e;case lu:a=9;break e;case _l:a=11;break e;case Rl:a=14;break e;case pt:a=16,n=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=_e(a,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Dt(e,t,r,n){return e=_e(7,e,n,t),e.lanes=r,e}function Ui(e,t,r,n){return e=_e(22,e,n,t),e.elementType=au,e.lanes=r,e.stateNode={isHidden:!1},e}function wo(e,t,r){return e=_e(6,e,null,t),e.lanes=r,e}function jo(e,t,r){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function am(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=eo(0),this.expirationTimes=eo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eo(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pa(e,t,r,n,i,o,a,s,u){return e=new am(e,t,r,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=_e(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kl(o),e}function sm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Jc(e){if(!e)return Ct;e=e._reactInternals;e:{if(Vt(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var r=e.type;if(we(r))return Ju(e,r,t)}return t}function Zc(e,t,r,n,i,o,a,s,u){return e=pa(r,n,!0,e,i,o,a,s,u),e.context=Jc(null),r=e.current,n=me(),i=St(r),o=nt(n,i),o.callback=t??null,kt(r,o,i),e.current.lanes=i,gn(e,i,n),je(e,n),e}function Bi(e,t,r,n){var i=t.current,o=me(),a=St(i);return r=Jc(r),t.context===null?t.context=r:t.pendingContext=r,t=nt(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=kt(i,t,a),e!==null&&($e(e,i,a,o),Kn(e,i,a)),a}function Ci(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function fa(e,t){Rs(e,t),(e=e.alternate)&&Rs(e,t)}function um(){return null}var ed=typeof reportError=="function"?reportError:function(e){console.error(e)};function ma(e){this._internalRoot=e}Hi.prototype.render=ma.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Bi(e,t,null,null)};Hi.prototype.unmount=ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){Bi(null,e,null,null)}),t[lt]=null}};function Hi(e){this._internalRoot=e}Hi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ru();e={blockedOn:null,target:e,priority:t};for(var r=0;r<mt.length&&t!==0&&t<mt[r].priority;r++);mt.splice(r,0,e),r===0&&Tu(e)}};function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ls(){}function cm(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var c=Ci(a);o.call(c)}}var a=Zc(t,n,e,0,null,!1,!1,"",Ls);return e._reactRootContainer=a,e[lt]=a.current,nn(e.nodeType===8?e.parentNode:e),Wt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var c=Ci(u);s.call(c)}}var u=pa(e,0,!1,null,null,!1,!1,"",Ls);return e._reactRootContainer=u,e[lt]=u.current,nn(e.nodeType===8?e.parentNode:e),Wt(function(){Bi(t,u,r,n)}),u}function qi(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var s=i;i=function(){var u=Ci(a);s.call(u)}}Bi(t,a,e,i)}else a=cm(r,t,e,i,n);return Ci(a)}Pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ir(t.pendingLanes);r!==0&&(Fl(t,r|1),je(t,G()),!(O&6)&&(jr=G()+500,_t()))}break;case 13:Wt(function(){var n=at(e,1);if(n!==null){var i=me();$e(n,e,1,i)}}),fa(e,1)}};Ml=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var r=me();$e(t,e,134217728,r)}fa(e,134217728)}};_u=function(e){if(e.tag===13){var t=St(e),r=at(e,t);if(r!==null){var n=me();$e(r,e,t,n)}fa(e,t)}};Ru=function(){return I};Lu=function(e,t){var r=I;try{return I=e,t()}finally{I=r}};$o=function(e,t,r){switch(t){case"input":if(To(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Mi(n);if(!i)throw Error(N(90));uu(n),To(n,i)}}}break;case"textarea":du(e,r);break;case"select":t=r.value,t!=null&&ur(e,!!r.multiple,t,!1)}};yu=sa;vu=Wt;var dm={usingClientEntryPoint:!1,Events:[yn,rr,Mi,gu,xu,sa]},Fr={findFiberByHostInstance:Mt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pm={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ku(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||um,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bn.isDisabled&&Bn.supportsFiber)try{Ri=Bn.inject(pm),Ke=Bn}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dm;Ee.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ha(t))throw Error(N(200));return sm(e,t,null,r)};Ee.createRoot=function(e,t){if(!ha(e))throw Error(N(299));var r=!1,n="",i=ed;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=pa(e,1,!1,null,null,r,!1,n,i),e[lt]=t.current,nn(e.nodeType===8?e.parentNode:e),new ma(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=ku(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Wt(e)};Ee.hydrate=function(e,t,r){if(!Wi(t))throw Error(N(200));return qi(null,e,t,!0,r)};Ee.hydrateRoot=function(e,t,r){if(!ha(e))throw Error(N(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",a=ed;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Zc(t,null,e,1,r??null,i,!1,o,a),e[lt]=t.current,nn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Hi(t)};Ee.render=function(e,t,r){if(!Wi(t))throw Error(N(200));return qi(null,e,t,!1,r)};Ee.unmountComponentAtNode=function(e){if(!Wi(e))throw Error(N(40));return e._reactRootContainer?(Wt(function(){qi(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};Ee.unstable_batchedUpdates=sa;Ee.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Wi(r))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return qi(e,t,r,!1,n)};Ee.version="18.3.1-next-f1338f8080-20240426";function td(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(td)}catch(e){console.error(e)}}td(),tu.exports=Ee;var fm=tu.exports,Ts=fm;Eo.createRoot=Ts.createRoot,Eo.hydrateRoot=Ts.hydrateRoot;/**
 * react-router v7.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Fs="popstate";function mm(e={}){function t(n,i){let{pathname:o,search:a,hash:s}=n.location;return vl("",{pathname:o,search:a,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:fn(i)}return gm(t,r,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Be(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hm(){return Math.random().toString(36).substring(2,10)}function Ms(e,t){return{usr:e.state,key:e.key,idx:t}}function vl(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?br(t):t,state:r,key:t&&t.key||n||hm()}}function fn({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function br(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function gm(e,t,r,n={}){let{window:i=document.defaultView,v5Compat:o=!1}=n,a=i.history,s="POP",u=null,c=h();c==null&&(c=0,a.replaceState({...a.state,idx:c},""));function h(){return(a.state||{idx:null}).idx}function d(){s="POP";let k=h(),p=k==null?null:k-c;c=k,u&&u({action:s,location:v.location,delta:p})}function g(k,p){s="PUSH";let f=vl(v.location,k,p);c=h()+1;let m=Ms(f,c),j=v.createHref(f);try{a.pushState(m,"",j)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;i.location.assign(j)}o&&u&&u({action:s,location:v.location,delta:1})}function y(k,p){s="REPLACE";let f=vl(v.location,k,p);c=h();let m=Ms(f,c),j=v.createHref(f);a.replaceState(m,"",j),o&&u&&u({action:s,location:v.location,delta:0})}function w(k){return xm(k)}let v={get action(){return s},get location(){return e(i,a)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Fs,d),u=k,()=>{i.removeEventListener(Fs,d),u=null}},createHref(k){return t(i,k)},createURL:w,encodeLocation(k){let p=w(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(k){return a.go(k)}};return v}function xm(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Q(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:fn(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function rd(e,t,r="/"){return ym(e,t,r,!1)}function ym(e,t,r,n){let i=typeof t=="string"?br(t):t,o=ut(i.pathname||"/",r);if(o==null)return null;let a=nd(e);vm(a);let s=null;for(let u=0;s==null&&u<a.length;++u){let c=_m(o);s=zm(a[u],c,n)}return s}function nd(e,t=[],r=[],n="",i=!1){let o=(a,s,u=i,c)=>{let h={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(n)&&u)return;Q(h.relativePath.startsWith(n),`Absolute route path "${h.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(n.length)}let d=it([n,h.relativePath]),g=r.concat(h);a.children&&a.children.length>0&&(Q(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),nd(a.children,t,g,d,u)),!(a.path==null&&!a.index)&&t.push({path:d,score:Em(d,a.index),routesMeta:g})};return e.forEach((a,s)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))o(a,s);else for(let c of id(a.path))o(a,s,!0,c)}),t}function id(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let a=id(n.join("/")),s=[];return s.push(...a.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function vm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Cm(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var wm=/^:[\w-]+$/,jm=3,km=2,Nm=1,Sm=10,bm=-2,As=e=>e==="*";function Em(e,t){let r=e.split("/"),n=r.length;return r.some(As)&&(n+=bm),t&&(n+=km),r.filter(i=>!As(i)).reduce((i,o)=>i+(wm.test(o)?jm:o===""?Nm:Sm),n)}function Cm(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function zm(e,t,r=!1){let{routesMeta:n}=e,i={},o="/",a=[];for(let s=0;s<n.length;++s){let u=n[s],c=s===n.length-1,h=o==="/"?t:t.slice(o.length)||"/",d=mn({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!d&&c&&r&&!n[n.length-1].route.index&&(d=mn({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),a.push({params:i,pathname:it([o,d.pathname]),pathnameBase:Fm(it([o,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(o=it([o,d.pathnameBase]))}return a}function mn(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Pm(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((c,{paramName:h,isOptional:d},g)=>{if(h==="*"){let w=s[g]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=s[g];return d&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:a,pattern:e}}function Pm(e,t=!1,r=!0){Be(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,u)=>(n.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function _m(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Be(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ut(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}var od=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rm=e=>od.test(e);function Lm(e,t="/"){let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?br(e):e,o;if(r)if(Rm(r))o=r;else{if(r.includes("//")){let a=r;r=r.replace(/\/\/+/g,"/"),Be(!1,`Pathnames cannot have embedded double slashes - normalizing ${a} -> ${r}`)}r.startsWith("/")?o=Os(r.substring(1),"/"):o=Os(r,t)}else o=t;return{pathname:o,search:Mm(n),hash:Am(i)}}function Os(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ko(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ld(e){let t=Tm(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function ad(e,t,r,n=!1){let i;typeof e=="string"?i=br(e):(i={...e},Q(!i.pathname||!i.pathname.includes("?"),ko("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),ko("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),ko("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,s;if(a==null)s=r;else{let d=t.length-1;if(!n&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}s=d>=0?t[d]:"/"}let u=Lm(i,s),c=a&&a!=="/"&&a.endsWith("/"),h=(o||a===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}var it=e=>e.join("/").replace(/\/\/+/g,"/"),Fm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Mm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Am=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Om=class{constructor(e,t,r,n=!1){this.status=e,this.statusText=t||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Im(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Dm(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var sd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ud(e,t){let r=e;if(typeof r!="string"||!od.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let n=r,i=!1;if(sd)try{let o=new URL(window.location.href),a=r.startsWith("//")?new URL(o.protocol+r):new URL(r),s=ut(a.pathname,t);a.origin===o.origin&&s!=null?r=s+a.search+a.hash:i=!0}catch{Be(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:i,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var cd=["POST","PUT","PATCH","DELETE"];new Set(cd);var $m=["GET",...cd];new Set($m);var Er=x.createContext(null);Er.displayName="DataRouter";var Vi=x.createContext(null);Vi.displayName="DataRouterState";var Um=x.createContext(!1),dd=x.createContext({isTransitioning:!1});dd.displayName="ViewTransition";var Bm=x.createContext(new Map);Bm.displayName="Fetchers";var Hm=x.createContext(null);Hm.displayName="Await";var Fe=x.createContext(null);Fe.displayName="Navigation";var wn=x.createContext(null);wn.displayName="Location";var Xe=x.createContext({outlet:null,matches:[],isDataRoute:!1});Xe.displayName="Route";var ga=x.createContext(null);ga.displayName="RouteError";var pd="REACT_ROUTER_ERROR",Wm="REDIRECT",qm="ROUTE_ERROR_RESPONSE";function Vm(e){if(e.startsWith(`${pd}:${Wm}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Qm(e){if(e.startsWith(`${pd}:${qm}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Om(t.status,t.statusText,t.data)}catch{}}function Ym(e,{relative:t}={}){Q(jn(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=x.useContext(Fe),{hash:i,pathname:o,search:a}=kn(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:it([r,o])),n.createHref({pathname:s,search:a,hash:i})}function jn(){return x.useContext(wn)!=null}function He(){return Q(jn(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(wn).location}var fd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function md(e){x.useContext(Fe).static||x.useLayoutEffect(e)}function hd(){let{isDataRoute:e}=x.useContext(Xe);return e?sh():Km()}function Km(){Q(jn(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(Er),{basename:t,navigator:r}=x.useContext(Fe),{matches:n}=x.useContext(Xe),{pathname:i}=He(),o=JSON.stringify(ld(n)),a=x.useRef(!1);return md(()=>{a.current=!0}),x.useCallback((u,c={})=>{if(Be(a.current,fd),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=ad(u,JSON.parse(o),i,c.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:it([t,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[t,r,o,i,e])}x.createContext(null);function Gm(){let{matches:e}=x.useContext(Xe),t=e[e.length-1];return t?t.params:{}}function kn(e,{relative:t}={}){let{matches:r}=x.useContext(Xe),{pathname:n}=He(),i=JSON.stringify(ld(r));return x.useMemo(()=>ad(e,JSON.parse(i),n,t==="path"),[e,i,n,t])}function Xm(e,t){return gd(e,t)}function gd(e,t,r,n,i){var f;Q(jn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=x.useContext(Fe),{matches:a}=x.useContext(Xe),s=a[a.length-1],u=s?s.params:{},c=s?s.pathname:"/",h=s?s.pathnameBase:"/",d=s&&s.route;{let m=d&&d.path||"";yd(c,!d||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let g=He(),y;if(t){let m=typeof t=="string"?br(t):t;Q(h==="/"||((f=m.pathname)==null?void 0:f.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${m.pathname}" was given in the \`location\` prop.`),y=m}else y=g;let w=y.pathname||"/",v=w;if(h!=="/"){let m=h.replace(/^\//,"").split("/");v="/"+w.replace(/^\//,"").split("/").slice(m.length).join("/")}let k=rd(e,{pathname:v});Be(d||k!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),Be(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let p=rh(k&&k.map(m=>Object.assign({},m,{params:Object.assign({},u,m.params),pathname:it([h,o.encodeLocation?o.encodeLocation(m.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?h:it([h,o.encodeLocation?o.encodeLocation(m.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathnameBase])})),a,r,n,i);return t&&p?x.createElement(wn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},p):p}function Jm(){let e=ah(),t=Im(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},o={padding:"2px 4px",backgroundColor:n},a=null;return console.error("Error handled by React Router default ErrorBoundary:",e),a=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:o},"ErrorBoundary")," or"," ",x.createElement("code",{style:o},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),r?x.createElement("pre",{style:i},r):null,a)}var Zm=x.createElement(Jm,null),xd=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const r=Qm(e.digest);r&&(e=r)}let t=e!==void 0?x.createElement(Xe.Provider,{value:this.props.routeContext},x.createElement(ga.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?x.createElement(eh,{error:e},t):t}};xd.contextType=Um;var No=new WeakMap;function eh({children:e,error:t}){let{basename:r}=x.useContext(Fe);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let n=Vm(t.digest);if(n){let i=No.get(t);if(i)throw i;let o=ud(n.location,r);if(sd&&!No.get(t))if(o.isExternal||n.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const a=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:n.replace}));throw No.set(t,a),a}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return e}function th({routeContext:e,match:t,children:r}){let n=x.useContext(Er);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Xe.Provider,{value:e},r)}function rh(e,t=[],r=null,n=null,i=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,a=r==null?void 0:r.errors;if(a!=null){let h=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);Q(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,h+1))}let s=!1,u=-1;if(r)for(let h=0;h<o.length;h++){let d=o[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:g,errors:y}=r,w=d.route.loader&&!g.hasOwnProperty(d.route.id)&&(!y||y[d.route.id]===void 0);if(d.route.lazy||w){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}let c=r&&n?(h,d)=>{var g,y;n(h,{location:r.location,params:((y=(g=r.matches)==null?void 0:g[0])==null?void 0:y.params)??{},unstable_pattern:Dm(r.matches),errorInfo:d})}:void 0;return o.reduceRight((h,d,g)=>{let y,w=!1,v=null,k=null;r&&(y=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||Zm,s&&(u<0&&g===0?(yd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,k=null):u===g&&(w=!0,k=d.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,g+1)),f=()=>{let m;return y?m=v:w?m=k:d.route.Component?m=x.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=h,x.createElement(th,{match:d,routeContext:{outlet:h,matches:p,isDataRoute:r!=null},children:m})};return r&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?x.createElement(xd,{location:r.location,revalidation:r.revalidation,component:v,error:y,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0},onError:c}):f()},null)}function xa(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function nh(e){let t=x.useContext(Er);return Q(t,xa(e)),t}function ih(e){let t=x.useContext(Vi);return Q(t,xa(e)),t}function oh(e){let t=x.useContext(Xe);return Q(t,xa(e)),t}function ya(e){let t=oh(e),r=t.matches[t.matches.length-1];return Q(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function lh(){return ya("useRouteId")}function ah(){var n;let e=x.useContext(ga),t=ih("useRouteError"),r=ya("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function sh(){let{router:e}=nh("useNavigate"),t=ya("useNavigate"),r=x.useRef(!1);return md(()=>{r.current=!0}),x.useCallback(async(i,o={})=>{Be(r.current,fd),r.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...o}))},[e,t])}var Is={};function yd(e,t,r){!t&&!Is[e]&&(Is[e]=!0,Be(!1,r))}x.memo(uh);function uh({routes:e,future:t,state:r,onError:n}){return gd(e,void 0,r,n,t)}function te(e){Q(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ch({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:i,static:o=!1,unstable_useTransitions:a}){Q(!jn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:s,navigator:i,static:o,unstable_useTransitions:a,future:{}}),[s,i,o,a]);typeof r=="string"&&(r=br(r));let{pathname:c="/",search:h="",hash:d="",state:g=null,key:y="default"}=r,w=x.useMemo(()=>{let v=ut(c,s);return v==null?null:{location:{pathname:v,search:h,hash:d,state:g,key:y},navigationType:n}},[s,c,h,d,g,y,n]);return Be(w!=null,`<Router basename="${s}"> is not able to match the URL "${c}${h}${d}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:x.createElement(Fe.Provider,{value:u},x.createElement(wn.Provider,{children:t,value:w}))}function dh({children:e,location:t}){return Xm(wl(e),t)}function wl(e,t=[]){let r=[];return x.Children.forEach(e,(n,i)=>{if(!x.isValidElement(n))return;let o=[...t,i];if(n.type===x.Fragment){r.push.apply(r,wl(n.props.children,o));return}Q(n.type===te,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Q(!n.props.index||!n.props.children,"An index route cannot have child routes.");let a={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=wl(n.props.children,o)),r.push(a)}),r}var ri="get",ni="application/x-www-form-urlencoded";function Qi(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function ph(e){return Qi(e)&&e.tagName.toLowerCase()==="button"}function fh(e){return Qi(e)&&e.tagName.toLowerCase()==="form"}function mh(e){return Qi(e)&&e.tagName.toLowerCase()==="input"}function hh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function gh(e,t){return e.button===0&&(!t||t==="_self")&&!hh(e)}var Hn=null;function xh(){if(Hn===null)try{new FormData(document.createElement("form"),0),Hn=!1}catch{Hn=!0}return Hn}var yh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function So(e){return e!=null&&!yh.has(e)?(Be(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ni}"`),null):e}function vh(e,t){let r,n,i,o,a;if(fh(e)){let s=e.getAttribute("action");n=s?ut(s,t):null,r=e.getAttribute("method")||ri,i=So(e.getAttribute("enctype"))||ni,o=new FormData(e)}else if(ph(e)||mh(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||s.getAttribute("action");if(n=u?ut(u,t):null,r=e.getAttribute("formmethod")||s.getAttribute("method")||ri,i=So(e.getAttribute("formenctype"))||So(s.getAttribute("enctype"))||ni,o=new FormData(s,e),!xh()){let{name:c,type:h,value:d}=e;if(h==="image"){let g=c?`${c}.`:"";o.append(`${g}x`,"0"),o.append(`${g}y`,"0")}else c&&o.append(c,d)}}else{if(Qi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ri,n=null,i=ni,a=e}return o&&i==="text/plain"&&(a=o,o=void 0),{action:n,method:r.toLowerCase(),encType:i,formData:o,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function va(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wh(e,t,r,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${n}`:i.pathname=`${i.pathname}.${n}`:i.pathname==="/"?i.pathname=`_root.${n}`:t&&ut(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function jh(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Nh(e,t,r){let n=await Promise.all(e.map(async i=>{let o=t.routes[i.route.id];if(o){let a=await jh(o,r);return a.links?a.links():[]}return[]}));return Ch(n.flat(1).filter(kh).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Ds(e,t,r,n,i,o){let a=(u,c)=>r[c]?u.route.id!==r[c].route.id:!0,s=(u,c)=>{var h;return r[c].pathname!==u.pathname||((h=r[c].route.path)==null?void 0:h.endsWith("*"))&&r[c].params["*"]!==u.params["*"]};return o==="assets"?t.filter((u,c)=>a(u,c)||s(u,c)):o==="data"?t.filter((u,c)=>{var d;let h=n.routes[u.route.id];if(!h||!h.hasLoader)return!1;if(a(u,c)||s(u,c))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=r[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Sh(e,t,{includeHydrateFallback:r}={}){return bh(e.map(n=>{let i=t.routes[n.route.id];if(!i)return[];let o=[i.module];return i.clientActionModule&&(o=o.concat(i.clientActionModule)),i.clientLoaderModule&&(o=o.concat(i.clientLoaderModule)),r&&i.hydrateFallbackModule&&(o=o.concat(i.hydrateFallbackModule)),i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function bh(e){return[...new Set(e)]}function Eh(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Ch(e,t){let r=new Set;return new Set(t),e.reduce((n,i)=>{let o=JSON.stringify(Eh(i));return r.has(o)||(r.add(o),n.push({key:o,link:i})),n},[])}function vd(){let e=x.useContext(Er);return va(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function zh(){let e=x.useContext(Vi);return va(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var wa=x.createContext(void 0);wa.displayName="FrameworkContext";function wd(){let e=x.useContext(wa);return va(e,"You must render this element inside a <HydratedRouter> element"),e}function Ph(e,t){let r=x.useContext(wa),[n,i]=x.useState(!1),[o,a]=x.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:h,onTouchStart:d}=t,g=x.useRef(null);x.useEffect(()=>{if(e==="render"&&a(!0),e==="viewport"){let v=p=>{p.forEach(f=>{a(f.isIntersecting)})},k=new IntersectionObserver(v,{threshold:.5});return g.current&&k.observe(g.current),()=>{k.disconnect()}}},[e]),x.useEffect(()=>{if(n){let v=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(v)}}},[n]);let y=()=>{i(!0)},w=()=>{i(!1),a(!1)};return r?e!=="intent"?[o,g,{}]:[o,g,{onFocus:Mr(s,y),onBlur:Mr(u,w),onMouseEnter:Mr(c,y),onMouseLeave:Mr(h,w),onTouchStart:Mr(d,y)}]:[!1,g,{}]}function Mr(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function _h({page:e,...t}){let{router:r}=vd(),n=x.useMemo(()=>rd(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?x.createElement(Lh,{page:e,matches:n,...t}):null}function Rh(e){let{manifest:t,routeModules:r}=wd(),[n,i]=x.useState([]);return x.useEffect(()=>{let o=!1;return Nh(e,t,r).then(a=>{o||i(a)}),()=>{o=!0}},[e,t,r]),n}function Lh({page:e,matches:t,...r}){let n=He(),{future:i,manifest:o,routeModules:a}=wd(),{basename:s}=vd(),{loaderData:u,matches:c}=zh(),h=x.useMemo(()=>Ds(e,t,c,o,n,"data"),[e,t,c,o,n]),d=x.useMemo(()=>Ds(e,t,c,o,n,"assets"),[e,t,c,o,n]),g=x.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let v=new Set,k=!1;if(t.forEach(f=>{var j;let m=o.routes[f.route.id];!m||!m.hasLoader||(!h.some(b=>b.route.id===f.route.id)&&f.route.id in u&&((j=a[f.route.id])!=null&&j.shouldRevalidate)||m.hasClientLoader?k=!0:v.add(f.route.id))}),v.size===0)return[];let p=wh(e,s,i.unstable_trailingSlashAwareDataRequests,"data");return k&&v.size>0&&p.searchParams.set("_routes",t.filter(f=>v.has(f.route.id)).map(f=>f.route.id).join(",")),[p.pathname+p.search]},[s,i.unstable_trailingSlashAwareDataRequests,u,n,o,h,t,e,a]),y=x.useMemo(()=>Sh(d,o),[d,o]),w=Rh(d);return x.createElement(x.Fragment,null,g.map(v=>x.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...r})),y.map(v=>x.createElement("link",{key:v,rel:"modulepreload",href:v,...r})),w.map(({key:v,link:k})=>x.createElement("link",{key:v,nonce:r.nonce,...k})))}function Th(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Fh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Fh&&(window.__reactRouterVersion="7.12.0")}catch{}function Mh({basename:e,children:t,unstable_useTransitions:r,window:n}){let i=x.useRef();i.current==null&&(i.current=mm({window:n,v5Compat:!0}));let o=i.current,[a,s]=x.useState({action:o.action,location:o.location}),u=x.useCallback(c=>{r===!1?s(c):x.startTransition(()=>s(c))},[r]);return x.useLayoutEffect(()=>o.listen(u),[o,u]),x.createElement(ch,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o,unstable_useTransitions:r})}var jd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M=x.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:i,reloadDocument:o,replace:a,state:s,target:u,to:c,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:g,...y},w){let{basename:v,unstable_useTransitions:k}=x.useContext(Fe),p=typeof c=="string"&&jd.test(c),f=ud(c,v);c=f.to;let m=Ym(c,{relative:i}),[j,b,S]=Ph(n,y),E=Dh(c,{replace:a,state:s,target:u,preventScrollReset:h,relative:i,viewTransition:d,unstable_defaultShouldRevalidate:g,unstable_useTransitions:k});function z(R){t&&t(R),R.defaultPrevented||E(R)}let A=x.createElement("a",{...y,...S,href:f.absoluteURL||m,onClick:f.isExternal||o?t:z,ref:Th(w,b),target:u,"data-discover":!p&&r==="render"?"true":void 0});return j&&!p?x.createElement(x.Fragment,null,A,x.createElement(_h,{page:m})):A});M.displayName="Link";var Ah=x.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:i=!1,style:o,to:a,viewTransition:s,children:u,...c},h){let d=kn(a,{relative:c.relative}),g=He(),y=x.useContext(Vi),{navigator:w,basename:v}=x.useContext(Fe),k=y!=null&&Wh(d)&&s===!0,p=w.encodeLocation?w.encodeLocation(d).pathname:d.pathname,f=g.pathname,m=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(f=f.toLowerCase(),m=m?m.toLowerCase():null,p=p.toLowerCase()),m&&v&&(m=ut(m,v)||m);const j=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let b=f===p||!i&&f.startsWith(p)&&f.charAt(j)==="/",S=m!=null&&(m===p||!i&&m.startsWith(p)&&m.charAt(p.length)==="/"),E={isActive:b,isPending:S,isTransitioning:k},z=b?t:void 0,A;typeof n=="function"?A=n(E):A=[n,b?"active":null,S?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let R=typeof o=="function"?o(E):o;return x.createElement(M,{...c,"aria-current":z,className:A,ref:h,style:R,to:a,viewTransition:s},typeof u=="function"?u(E):u)});Ah.displayName="NavLink";var Oh=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:i,state:o,method:a=ri,action:s,onSubmit:u,relative:c,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:g,...y},w)=>{let{unstable_useTransitions:v}=x.useContext(Fe),k=Bh(),p=Hh(s,{relative:c}),f=a.toLowerCase()==="get"?"get":"post",m=typeof s=="string"&&jd.test(s),j=b=>{if(u&&u(b),b.defaultPrevented)return;b.preventDefault();let S=b.nativeEvent.submitter,E=(S==null?void 0:S.getAttribute("formmethod"))||a,z=()=>k(S||b.currentTarget,{fetcherKey:t,method:E,navigate:r,replace:i,state:o,relative:c,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:g});v&&r!==!1?x.startTransition(()=>z()):z()};return x.createElement("form",{ref:w,method:f,action:p,onSubmit:n?u:j,...y,"data-discover":!m&&e==="render"?"true":void 0})});Oh.displayName="Form";function Ih(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kd(e){let t=x.useContext(Er);return Q(t,Ih(e)),t}function Dh(e,{target:t,replace:r,state:n,preventScrollReset:i,relative:o,viewTransition:a,unstable_defaultShouldRevalidate:s,unstable_useTransitions:u}={}){let c=hd(),h=He(),d=kn(e,{relative:o});return x.useCallback(g=>{if(gh(g,t)){g.preventDefault();let y=r!==void 0?r:fn(h)===fn(d),w=()=>c(e,{replace:y,state:n,preventScrollReset:i,relative:o,viewTransition:a,unstable_defaultShouldRevalidate:s});u?x.startTransition(()=>w()):w()}},[h,c,d,r,n,t,e,i,o,a,s,u])}var $h=0,Uh=()=>`__${String(++$h)}__`;function Bh(){let{router:e}=kd("useSubmit"),{basename:t}=x.useContext(Fe),r=lh(),n=e.fetch,i=e.navigate;return x.useCallback(async(o,a={})=>{let{action:s,method:u,encType:c,formData:h,body:d}=vh(o,t);if(a.navigate===!1){let g=a.fetcherKey||Uh();await n(g,r,a.action||s,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:h,body:d,formMethod:a.method||u,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||s,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:h,body:d,formMethod:a.method||u,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,i,t,r])}function Hh(e,{relative:t}={}){let{basename:r}=x.useContext(Fe),n=x.useContext(Xe);Q(n,"useFormAction must be used inside a RouteContext");let[i]=n.matches.slice(-1),o={...kn(e||".",{relative:t})},a=He();if(e==null){o.search=a.search;let s=new URLSearchParams(o.search),u=s.getAll("index");if(u.some(h=>h==="")){s.delete("index"),u.filter(d=>d).forEach(d=>s.append("index",d));let h=s.toString();o.search=h?`?${h}`:""}}return(!e||e===".")&&i.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:it([r,o.pathname])),fn(o)}function Wh(e,{relative:t}={}){let r=x.useContext(dd);Q(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=kd("useViewTransitionState"),i=kn(e,{relative:t});if(!r.isTransitioning)return!1;let o=ut(r.currentLocation.pathname,n)||r.currentLocation.pathname,a=ut(r.nextLocation.pathname,n)||r.nextLocation.pathname;return mn(i.pathname,a)!=null||mn(i.pathname,o)!=null}const Nd=x.createContext(),Nn=()=>x.useContext(Nd),Sd=e=>{const t=Number.parseFloat(e);return Number.isFinite(t)?t:0},jl=e=>{const t=Number.parseInt(e,10);return Number.isFinite(t)&&t>0?t:1},$s=e=>({...e,price:Sd(e==null?void 0:e.price),quantity:jl(e==null?void 0:e.quantity)}),qh=({children:e})=>{const[t,r]=x.useState(()=>{try{const c=localStorage.getItem("as_crystals_cart");if(!c)return[];const h=JSON.parse(c);return Array.isArray(h)?h.map($s):[]}catch(c){return console.error("Invalid cart data in localStorage:",c),[]}});x.useEffect(()=>{localStorage.setItem("as_crystals_cart",JSON.stringify(t))},[t]);const n=(c,h=1)=>{const d=$s({...c,quantity:h});r(g=>g.find(w=>w.id===d.id)?g.map(w=>w.id===d.id?{...w,quantity:w.quantity+d.quantity}:w):[...g,d])},i=c=>{r(h=>h.filter(d=>d.id!==c))},o=(c,h)=>{const d=jl(h);r(g=>g.map(y=>y.id===c?{...y,quantity:d}:y))},a=()=>{r([])},s=t.reduce((c,h)=>c+Sd(h.price)*jl(h.quantity),0),u=t.reduce((c,h)=>c+h.quantity,0);return l.jsx(Nd.Provider,{value:{cartItems:t,addToCart:n,removeFromCart:i,updateQuantity:o,clearCart:a,cartTotal:s,cartCount:u},children:e})};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Qh=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase()),Us=e=>{const t=Qh(e);return t.charAt(0).toUpperCase()+t.slice(1)},bd=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim(),Yh=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Kh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:o,iconNode:a,...s},u)=>x.createElement("svg",{ref:u,...Kh,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:bd("lucide",i),...!o&&!Yh(s)&&{"aria-hidden":"true"},...s},[...a.map(([c,h])=>x.createElement(c,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(e,t)=>{const r=x.forwardRef(({className:n,...i},o)=>x.createElement(Gh,{ref:o,iconNode:t,className:bd(`lucide-${Vh(Us(e))}`,`lucide-${e}`,n),...i}));return r.displayName=Us(e),r};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Jh=D("arrow-left",Xh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],eg=D("chevron-down",Zh);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],rg=D("circle-check-big",tg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],ig=D("credit-card",ng);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],lg=D("eye",og);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],Ed=D("facebook",ag);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ug=D("file-text",sg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],dg=D("funnel",cg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Cd=D("instagram",pg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],zd=D("mail",fg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Pd=D("map-pin",mg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],gg=D("menu",hg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["path",{d:"M5 12h14",key:"1ays0h"}]],_d=D("minus",xg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],vg=D("package",yg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Rd=D("phone",wg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ld=D("plus",jg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],Ng=D("receipt",kg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],zi=D("search",Sg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Eg=D("send",bg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zg=D("settings",Cg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Td=D("shield-check",Pg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Rg=D("shopping-bag",_g);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Fd=D("shopping-cart",Lg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Md=D("star",Tg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Mg=D("truck",Fg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Ad=D("twitter",Ag);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ig=D("user",Og);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Pi=D("x",Dg),$g=[{name:"HOME",path:"/"},{name:"SHOP",path:"/shop"},{name:"HEALING STONES",path:"/healing-stones",dropdown:["Rose Quartz","Clear Quartz","Amethyst","Black Tourmaline","Lapis Lazuli","Citrine","Selenite","Pyrite"].map(e=>({label:e,path:`/shop?search=${encodeURIComponent(e)}`}))},{name:"CRYSTAL JEWELRY",path:"/crystal-jewelry",dropdown:["Bracelets","Pendants","Malas","Rings"].map(e=>({label:e,path:`/shop?search=${encodeURIComponent(e)}`}))},{name:"REIKI TOOLS",path:"/reiki-tools",dropdown:["Pendulums","Chakra Sets","Engraved Stones","Charging Plates"].map(e=>({label:e,path:`/shop?search=${encodeURIComponent(e)}`}))},{name:"REMEDIES",path:"/remedies",dropdown:["Wealth","Health","Protection","Relationship","Root Chakra","Self-Confidence","Education"].map(e=>({label:e,path:`/shop?search=${encodeURIComponent(e)}`}))},{name:"SERVICES",path:"/services"},{name:"CONTACT",path:"/contact"}],Ug=()=>{const[e,t]=x.useState(!1),[r,n]=x.useState(!1),[i,o]=x.useState(!1),[a,s]=x.useState(""),[u,c]=x.useState($g),{cartCount:h}=Nn(),d=He(),g=hd();x.useEffect(()=>{const v=()=>{n(window.scrollY>20)};return window.addEventListener("scroll",v),()=>window.removeEventListener("scroll",v)},[]),x.useEffect(()=>{const v=new URLSearchParams(d.search);s(v.get("search")||"")},[d.search]),x.useEffect(()=>{(async()=>{try{const k=await fetch("/api/header-menu");if(!k.ok)return;const p=await k.json();Array.isArray(p)&&p.length>0&&c(p)}catch(k){console.error("Unable to load header menu:",k)}})()},[]);const y=v=>{v.preventDefault();const k=a.trim();g(k?`/shop?search=${encodeURIComponent(k)}`:"/shop"),o(!1)},w=(v,k,p=void 0)=>{const f=v.path||"/",m=!!v.openInNewTab;return f.startsWith("/")&&!m?l.jsx(M,{to:f,className:k,onClick:p,children:v.name||v.label}):l.jsx("a",{href:f,className:k,onClick:p,target:m?"_blank":void 0,rel:m?"noopener noreferrer":void 0,children:v.name||v.label})};return l.jsxs("header",{className:`header ${r?"header-scrolled":""}`,children:[l.jsxs("div",{className:"top-bar",children:[l.jsx("span",{children:"Free Shipping on Orders Over $150"}),l.jsx("span",{className:"top-bar-sep",children:"|"}),l.jsx("span",{children:"Secure Manifestation Tools"})]}),l.jsxs("div",{className:"container main-header",children:[l.jsx(M,{to:"/",className:"logo-container",children:l.jsx("img",{src:"/images/AS_Crystal_logo.png",alt:"AS Crystal",className:"brand-logo-img"})}),l.jsx("nav",{className:"desktop-nav",children:l.jsx("ul",{className:"nav-list",children:u.map(v=>l.jsxs("li",{className:`nav-item ${Array.isArray(v.dropdown)&&v.dropdown.length>0?"has-dropdown":""}`,children:[w(v,`nav-link ${d.pathname===v.path?"active":""}`),Array.isArray(v.dropdown)&&v.dropdown.length>0&&l.jsx("ul",{className:"mega-menu",children:v.dropdown.map(k=>l.jsx("li",{children:w(k,"",void 0)},k.label))})]},v.name))})}),l.jsxs("div",{className:"header-actions",children:[l.jsx("button",{className:`icon-btn ${i?"active":""}`,onClick:()=>o(v=>!v),"aria-label":"Toggle search",children:l.jsx(zi,{size:18,strokeWidth:1.5})}),l.jsxs(M,{to:"/cart",className:"icon-btn cart-btn",children:[l.jsx(Fd,{size:18,strokeWidth:1.5}),h>0&&l.jsx("span",{className:"cart-count",children:h})]}),l.jsx(M,{to:"/orders",className:"icon-btn","aria-label":"My Orders",title:"My Orders",children:l.jsx(Ig,{size:18,strokeWidth:1.5})}),l.jsx("a",{href:"/admin",className:"icon-btn","aria-label":"Admin Dashboard",title:"Admin Dashboard",children:l.jsx(zg,{size:18,strokeWidth:1.5})}),l.jsx("button",{className:"mobile-toggle",onClick:()=>t(!e),children:e?l.jsx(Pi,{size:24}):l.jsx(gg,{size:24})})]})]}),l.jsx("div",{className:`search-panel ${i?"open":""}`,children:l.jsxs("form",{className:"search-form",onSubmit:y,children:[l.jsx(zi,{size:16,strokeWidth:1.8}),l.jsx("input",{type:"text",value:a,onChange:v=>s(v.target.value),placeholder:"Search crystals, jewelry, remedies...","aria-label":"Search products"}),l.jsx("button",{type:"submit",children:"Search"})]})}),l.jsx("nav",{className:`mobile-nav ${e?"nav-open":""}`,children:l.jsxs("ul",{className:"mobile-nav-list",children:[u.map(v=>l.jsxs("li",{children:[w(v,"",()=>t(!1)),Array.isArray(v.dropdown)&&v.dropdown.length>0&&l.jsx("ul",{className:"mobile-submenu-list",children:v.dropdown.map(k=>l.jsx("li",{children:w(k,"",()=>t(!1))},k.label))})]},v.name)),l.jsx("li",{children:l.jsx(M,{to:"/orders",onClick:()=>t(!1),children:"MY ORDERS"})}),l.jsx("li",{children:l.jsx("a",{href:"/admin",children:"ADMIN DASHBOARD"})})]})}),l.jsx("style",{jsx:"true",children:`
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 2000;
                    transition: var(--transition);
                    background: transparent;
                }
                .header-scrolled {
                    background: rgba(255, 255, 255, 0.98);
                    backdrop-filter: blur(15px);
                    box-shadow: 0 5px 20px rgba(0,0,0,0.03);
                }
                .search-panel {
                    max-height: 0;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.98);
                    border-top: 1px solid rgba(0,0,0,0.06);
                    transition: max-height 0.25s ease;
                }
                .search-panel.open {
                    max-height: 90px;
                }
                .search-form {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 16px 24px;
                    display: grid;
                    grid-template-columns: auto 1fr auto;
                    gap: 12px;
                    align-items: center;
                    color: var(--text-light);
                }
                .search-form input {
                    border: 1px solid #E7DFD7;
                    border-radius: 24px;
                    padding: 10px 14px;
                    font-size: 0.9rem;
                    color: var(--primary);
                    background: white;
                }
                .search-form input:focus {
                    outline: none;
                    border-color: var(--secondary);
                }
                .search-form button {
                    border: none;
                    border-radius: 20px;
                    background: var(--primary);
                    color: white;
                    padding: 10px 16px;
                    font-size: 0.72rem;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: var(--transition);
                }
                .search-form button:hover {
                    background: var(--bg-dark);
                }
                .top-bar {
                    background: var(--bg-dark);
                    color: rgba(255,255,255,0.8);
                    text-align: center;
                    padding: 8px;
                    font-size: 0.6rem;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    font-weight: 500;
                }
                .top-bar-sep { opacity: 0.2; }
                
                .main-header {
                    display: flex !important;
                    flex-direction: row !important;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 30px 0;
                    transition: var(--transition);
                }
                .header-scrolled .main-header { padding: 15px 0; }
                
                .logo-container {
                    text-decoration: none;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                }
                .brand-logo-img {
                    width: clamp(180px, 16vw, 250px);
                    height: 56px;
                    object-fit: contain;
                    object-position: left center;
                    display: block;
                }
                .header-scrolled .brand-logo-img { height: 48px; }
                
                .desktop-nav {
                    flex-grow: 1;
                    display: flex;
                    justify-content: center;
                    min-width: 0;
                }
                
                .nav-list {
                    display: flex;
                    gap: clamp(16px, 1.6vw, 30px);
                    list-style: none;
                    margin: 0 auto;
                    align-items: center;
                    flex-wrap: nowrap;
                }
                .nav-item {
                    position: relative;
                }
                
                .nav-link {
                    text-decoration: none;
                    color: var(--text-main);
                    font-size: 0.75rem;
                    font-weight: 500;
                    letter-spacing: 1.5px;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    transition: var(--transition);
                    position: relative;
                    text-transform: uppercase;
                    white-space: nowrap;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: var(--secondary);
                    transition: var(--transition);
                }
                .nav-link:hover::after, .nav-link.active::after { width: 100%; }
                .nav-link:hover { color: var(--secondary); }
                
                .mega-menu {
                    position: absolute;
                    top: calc(100% + 15px);
                    left: 50%;
                    transform: translateX(-50%) translateY(10px);
                    background: white;
                    min-width: 250px;
                    padding: 25px 0;
                    box-shadow: var(--shadow-medium);
                    opacity: 0;
                    visibility: hidden;
                    transition: var(--transition);
                    list-style: none;
                    border-radius: 4px;
                    border-top: 3px solid var(--secondary);
                    z-index: 100;
                }
                .nav-item:hover .mega-menu {
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(-50%) translateY(0);
                }
                .mega-menu li a {
                    display: block;
                    padding: 10px 25px;
                    text-decoration: none;
                    color: var(--text-light);
                    font-size: 0.8rem;
                    transition: var(--transition);
                }
                .mega-menu li a:hover {
                    color: var(--secondary);
                    background: var(--bg-creme);
                    padding-left: 30px;
                }
                
                .header-actions {
                    display: flex;
                    gap: 14px;
                    align-items: center;
                    flex-shrink: 0;
                    white-space: nowrap;
                }
                .icon-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--text-main);
                    position: relative;
                    transition: var(--transition);
                    display: flex;
                    align-items: center;
                }
                .icon-btn.active { color: var(--secondary); }
                .icon-btn:hover { color: var(--secondary); transform: translateY(-2px); }
                .cart-count {
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    background: var(--accent);
                    color: white;
                    font-size: 0.6rem;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                }
                
                .mobile-toggle { display: none; }
                .mobile-nav { display: none; }

                @media (max-width: 1360px) {
                    .main-header { padding: 22px 0; }
                    .brand-logo-img {
                        width: clamp(160px, 14vw, 210px);
                        height: 50px;
                    }
                    .nav-link {
                        font-size: 0.7rem;
                        letter-spacing: 1.2px;
                    }
                    .header-actions { gap: 12px; }
                }

                @media (max-width: 1180px) {
                    .brand-logo-img {
                        width: clamp(150px, 13vw, 185px);
                        height: 46px;
                    }
                    .nav-link {
                        font-size: 0.66rem;
                        letter-spacing: 1px;
                    }
                    .nav-list { gap: 12px; }
                }
                
                @media (max-width: 1024px) {
                    .desktop-nav { display: none; }
                    .mobile-toggle { display: block; }
                    .brand-logo-img {
                        width: clamp(145px, 34vw, 195px);
                        height: 44px;
                    }
                    .header-scrolled .brand-logo-img { height: 40px; }
                    .search-form {
                        padding: 12px 20px;
                        grid-template-columns: 1fr auto;
                    }
                    .search-form svg { display: none; }
                    .search-panel.open { max-height: 120px; }
                    .mobile-nav {
                        display: block;
                        position: fixed;
                        top: 0;
                        right: -100%;
                        width: 80%;
                        height: 100vh;
                        background: white;
                        transition: var(--transition);
                        padding: 100px 40px;
                        z-index: 1000;
                        box-shadow: -10px 0 30px rgba(0,0,0,0.1);
                    }
                    .nav-open { right: 0; }
                    .mobile-nav-list { list-style: none; }
                    .mobile-nav-list li { margin-bottom: 25px; }
                    .mobile-nav-list a {
                        text-decoration: none;
                        color: var(--text-main);
                        font-family: var(--font-serif);
                        font-size: 2rem;
                    }
                    .mobile-submenu-list {
                        list-style: none;
                        margin-top: 10px;
                        margin-left: 10px;
                    }
                    .mobile-submenu-list li {
                        margin-bottom: 10px;
                    }
                    .mobile-submenu-list a {
                        font-size: 1rem;
                        font-family: var(--font-sans);
                        color: var(--text-light);
                        letter-spacing: 1px;
                    }
                }
            `})]})},Bg=()=>l.jsxs("footer",{className:"luxury-footer",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"footer-main",children:[l.jsxs("div",{className:"footer-brand",children:[l.jsx(M,{to:"/",className:"luxury-logo-link",children:l.jsx("img",{src:"/images/AS_Crystal_logo.png?v=20260219",alt:"AS Crystal",className:"footer-logo-img"})}),l.jsx("p",{className:"footer-about",children:"Curating authentic energy tools for the modern healer. Our crystals are hand-selected for their vibrational resonance and ethical origin."}),l.jsxs("div",{className:"social-luxury",children:[l.jsx("a",{href:"#",children:l.jsx(Cd,{size:18})}),l.jsx("a",{href:"#",children:l.jsx(Ed,{size:18})}),l.jsx("a",{href:"#",children:l.jsx(Ad,{size:18})})]})]}),l.jsxs("div",{className:"footer-links-grid",children:[l.jsxs("div",{className:"footer-column",children:[l.jsx("h3",{children:"Collections"}),l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx(M,{to:"/shop",children:"All Crystals"})}),l.jsx("li",{children:l.jsx(M,{to:"/remedies",children:"Remedies"})}),l.jsx("li",{children:l.jsx(M,{to:"/gifts",children:"Gifts"})}),l.jsx("li",{children:l.jsx(M,{to:"/trainings",children:"Workshops"})})]})]}),l.jsxs("div",{className:"footer-column",children:[l.jsx("h3",{children:"Company"}),l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx(M,{to:"/about",children:"Our Story"})}),l.jsx("li",{children:l.jsx(M,{to:"/contact",children:"Contact"})}),l.jsx("li",{children:l.jsx(M,{to:"/services",children:"Services"})}),l.jsx("li",{children:l.jsx(M,{to:"/orders",children:"My Orders"})}),l.jsx("li",{children:l.jsx(M,{to:"/terms",children:"Terms"})})]})]}),l.jsxs("div",{className:"footer-column contact-col-luxury",children:[l.jsx("h3",{children:"Connect"}),l.jsxs("p",{children:[l.jsx(zd,{size:14})," ascrystal0204@gmail.com "]}),l.jsxs("p",{children:[l.jsx(Rd,{size:14})," +91 99097 86552 "]}),l.jsxs("p",{children:[l.jsx(Pd,{size:14})," Kadival, Laldarvaja Khambhat - 388620 "]})]})]})]}),l.jsxs("div",{className:"footer-legal",children:[l.jsx("p",{children:"© 2026 REIKI CRYSTALS. Crafted for the Soul."}),l.jsxs("div",{className:"legal-links",children:[l.jsx(M,{to:"/privacy",children:"Privacy"}),l.jsx(M,{to:"/terms",children:"Conditions"})]})]})]}),l.jsx("style",{jsx:"true",children:`
        .luxury-footer {
          background: #000;
          color: white;
          padding: 100px 0 40px;
        }
        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 100px;
          margin-bottom: 80px;
        }
        
        .luxury-logo-link {
            text-decoration: none;
            display: inline-flex;
            margin-bottom: 30px;
            align-items: center;
        }
        .footer-logo-img {
            width: clamp(230px, 28vw, 340px);
            height: auto;
            object-fit: contain;
            object-position: left center;
            display: block;
        }
        
        .footer-about {
            font-size: 0.85rem;
            color: rgba(255,255,255,0.5);
            line-height: 1.8;
            max-width: 320px;
            margin-bottom: 30px;
            font-weight: 300;
        }
        
        .social-luxury {
            display: flex;
            gap: 20px;
        }
        .social-luxury a {
            color: rgba(255,255,255,0.6);
            transition: var(--transition);
        }
        .social-luxury a:hover { color: var(--secondary); }
        
        .footer-links-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
        }
        .footer-column h3 {
            font-family: var(--font-serif);
            font-size: 1rem;
            margin-bottom: 30px;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: white;
        }
        .footer-column ul { list-style: none; }
        .footer-column ul li { margin-bottom: 15px; }
        .footer-column ul li a {
            text-decoration: none;
            color: rgba(255,255,255,0.5);
            font-size: 0.85rem;
            transition: var(--transition);
        }
        .footer-column ul li a:hover { color: white; padding-left: 5px; }
        
        .contact-col-luxury p {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.85rem;
            color: rgba(255,255,255,0.5);
            margin-bottom: 15px;
            font-weight: 300;
        }
        
        .footer-legal {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.7rem;
            color: rgba(255,255,255,0.4);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .legal-links { display: flex; gap: 30px; }
        .legal-links a {
            text-decoration: none;
            color: inherit;
        }
        .legal-links a:hover { color: white; }

        @media (max-width: 992px) {
            .footer-main { grid-template-columns: 1fr; gap: 60px; }
            .footer-links-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 576px) {
            .footer-logo-img {
                width: clamp(180px, 64vw, 240px);
                height: auto;
            }
            .footer-links-grid { grid-template-columns: 1fr; }
            .footer-legal { flex-direction: column; gap: 20px; text-align: center; }
        }
      `})]}),Hg=()=>l.jsxs("div",{className:"page-loader",role:"status","aria-live":"polite","aria-label":"Loading page",children:[l.jsx("div",{className:"page-loader__spinner"}),l.jsx("p",{className:"page-loader__text",children:"Loading..."})]}),Wg=()=>l.jsxs("section",{className:"hero",children:[l.jsx("div",{className:"container hero-container",children:l.jsxs("div",{className:"hero-content",children:[l.jsx("span",{className:"hero-eyebrow",children:"Natural Gemstones For Daily Wellness"}),l.jsxs("h1",{className:"hero-title",children:["Healing Crystals ",l.jsx("br",{}),"For Reiki & Balance"]}),l.jsx("p",{className:"hero-desc",children:"Explore authentic healing crystals, bracelets, malas and Reiki tools curated to support grounding, protection, prosperity, love and spiritual growth."}),l.jsxs("div",{className:"hero-actions",children:[l.jsx(M,{to:"/shop",className:"btn-luxury",children:"Shop Collection"}),l.jsx(M,{to:"/services",className:"btn-text",children:"Our Services"})]})]})}),l.jsx("style",{jsx:"true",children:`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          background: linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url('https://images.unsplash.com/photo-1569144157591-c483197ec02c?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 40% 50%, rgba(253, 251, 249, 0.8) 0%, transparent 60%);
        }

        .hero-content {
          max-width: 600px;
          position: relative;
          z-index: 10;
          animation: fadeInSlide 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .hero-eyebrow {
            display: block;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-size: 0.7rem;
            color: var(--secondary);
            margin-bottom: 20px;
            font-weight: 600;
        }

        .hero-title {
          font-size: 5rem;
          line-height: 1;
          margin-bottom: 30px;
          color: var(--primary);
        }
        
        .hero-desc {
          font-size: 1.1rem;
          color: var(--text-light);
          margin-bottom: 40px;
          max-width: 480px;
          font-weight: 300;
        }
        
        .hero-actions {
            display: flex;
            align-items: center;
            gap: 30px;
        }

        .btn-luxury {
          display: inline-block;
          padding: 18px 45px;
          background: var(--primary);
          color: white;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 1px;
          font-size: 0.8rem;
          text-transform: uppercase;
          transition: var(--transition);
          box-shadow: var(--shadow-medium);
        }
        
        .btn-luxury:hover {
            background: var(--bg-dark);
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        .btn-text {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
        }
        
        .btn-text::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 30px;
            height: 1px;
            background: var(--secondary);
            transition: var(--transition);
        }
        
        .btn-text:hover::after { width: 100%; }

        @keyframes fadeInSlide {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 992px) {
          .hero-title { font-size: 3.5rem; }
          .hero { height: 80vh; padding-top: 100px; }
        }
      `})]}),Bs={"healing stones":"https://images.unsplash.com/photo-1610450949015-c231777d5d95?q=80&w=900&auto=format&fit=crop","crystal jewelry":"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=900&auto=format&fit=crop","reiki tools":"https://images.unsplash.com/photo-1590422749897-40899033321d?q=80&w=900&auto=format&fit=crop","vastu & feng shui":"https://images.unsplash.com/photo-1596439535105-bb59e5504c41?q=80&w=900&auto=format&fit=crop"},qg=[{keyword:"amethyst",image:"https://images.unsplash.com/photo-1615486363973-f79d8757803d?q=80&w=900&auto=format&fit=crop"},{keyword:"rose quartz",image:"https://images.unsplash.com/photo-1641363133700-14f5f43ff053?q=80&w=900&auto=format&fit=crop"},{keyword:"clear quartz",image:"https://images.unsplash.com/photo-1523348830708-15d4a09cfac2?q=80&w=900&auto=format&fit=crop"},{keyword:"citrine",image:"https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?q=80&w=900&auto=format&fit=crop"},{keyword:"tourmaline",image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop"},{keyword:"lapis",image:"https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=900&auto=format&fit=crop"},{keyword:"pendulum",image:"https://images.unsplash.com/photo-1601821765780-754fa98637c1?q=80&w=900&auto=format&fit=crop"},{keyword:"chakra",image:"https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=900&auto=format&fit=crop"},{keyword:"bracelet",image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=900&auto=format&fit=crop"},{keyword:"ring",image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900&auto=format&fit=crop"},{keyword:"mala",image:"https://images.unsplash.com/photo-1634757796423-6e941a3bca4f?q=80&w=900&auto=format&fit=crop"}],Yi=(e={})=>{var o,a;const t=e.image;if(t&&t!=="default.jpg")return t.startsWith("http://")||t.startsWith("https://")||t.startsWith("/")?t:`/uploads/products/${t}`;const r=`${e.name||""} ${((o=e.category)==null?void 0:o.name)||""}`.toLowerCase(),n=qg.find(s=>r.includes(s.keyword));if(n)return n.image;const i=(((a=e.category)==null?void 0:a.name)||"").toLowerCase();return Bs[i]?Bs[i]:"https://images.unsplash.com/photo-1523348830708-15d4a09cfac2?q=80&w=900&auto=format&fit=crop"},Rt=({product:e})=>{const{addToCart:t}=Nn(),r=Yi(e);return l.jsxs("div",{className:"luxury-product-card",children:[l.jsxs("div",{className:"product-visual",children:[l.jsx("img",{src:r,alt:e.name,className:"product-img-main"}),e.is_sale&&l.jsx("span",{className:"luxury-badge",children:"Essence Sale"}),l.jsxs("div",{className:"product-actions-overlay",children:[l.jsx("button",{className:"action-circle",onClick:()=>t(e),title:"Add to Cart",children:l.jsx(Fd,{size:18})}),l.jsx(M,{to:`/product/${e.id}`,className:"action-circle",title:"View Details",children:l.jsx(lg,{size:18})})]})]}),l.jsxs("div",{className:"product-details-luxury",children:[l.jsx("div",{className:"product-rating-gold",children:[...Array(5)].map((n,i)=>l.jsx(Md,{size:10,fill:"#D4AF37",color:"#D4AF37"},i))}),l.jsx("h3",{className:"product-name-serif",children:l.jsx(M,{to:`/product/${e.id}`,children:e.name})}),l.jsx("p",{className:"product-cat-tag",children:e.category?e.category.name:"Curated Crystal"}),l.jsxs("div",{className:"product-price-luxury",children:[l.jsxs("span",{className:"price-primary",children:["$",e.price]}),e.old_price&&l.jsxs("span",{className:"price-old",children:["$",e.old_price]})]})]}),l.jsx("style",{jsx:"true",children:`
        .luxury-product-card {
           background: transparent;
           transition: var(--transition);
           position: relative;
           overflow: hidden;
        }
        .product-visual {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
          background: #F8F4F0;
          border-radius: 4px;
        }
        .product-img-main {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .luxury-product-card:hover .product-img-main {
          transform: scale(1.08);
        }
        .luxury-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--bg-dark);
          color: white;
          padding: 6px 15px;
          font-size: 0.6rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 2px;
          z-index: 10;
        }
        .product-actions-overlay {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%) translateY(20px);
          display: flex;
          gap: 12px;
          opacity: 0;
          transition: var(--transition);
        }
        .luxury-product-card:hover .product-actions-overlay {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .action-circle {
          background: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          cursor: pointer;
          transition: var(--transition);
          box-shadow: var(--shadow-soft);
        }
        .action-circle:hover {
          background: var(--secondary);
          color: white;
        }
        .product-details-luxury {
          padding: 25px 0;
          text-align: center;
        }
        .product-rating-gold {
            display: flex;
            justify-content: center;
            gap: 3px;
            margin-bottom: 12px;
        }
        .product-name-serif {
          font-size: 1.2rem;
          margin-bottom: 8px;
          font-weight: 500;
          font-family: var(--font-serif);
        }
        .product-name-serif a {
            text-decoration: none;
            color: var(--primary);
            transition: var(--transition);
        }
        .product-name-serif a:hover {
          color: var(--secondary);
        }
        .product-cat-tag {
          font-size: 0.65rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 15px;
          font-weight: 600;
        }
        .product-price-luxury {
          font-weight: 600;
          font-size: 1.1rem;
          color: var(--primary);
          display: flex;
          justify-content: center;
          gap: 15px;
          letter-spacing: 1px;
        }
        .price-old {
          text-decoration: line-through;
          color: #BDC3C7;
          font-size: 0.9rem;
          font-weight: 300;
        }
      `})]})},Vg=[{name:"New Arrivals",desc:"Fresh gemstone arrivals and trending spiritual tools.",path:"/shop?search=new"},{name:"7 Chakra",desc:"Balanced chakra sets for alignment and emotional clarity.",path:"/shop?search=chakra"},{name:"Bracelets",desc:"Crystal bracelets for confidence, abundance and protection.",path:"/crystal-jewelry?search=bracelet"},{name:"Malas",desc:"Meditation malas for mantra practice and focused intention.",path:"/crystal-jewelry?search=mala"},{name:"Pendants",desc:"Wearable crystal pendants to keep healing energy close.",path:"/crystal-jewelry?search=pendant"},{name:"Rudraksha",desc:"Sacred rudraksha combinations for grounding and strength.",path:"/shop?search=rudraksha"},{name:"Angels",desc:"Carved angel crystals for guidance and emotional support.",path:"/shop?search=angel"},{name:"Tumbles",desc:"Pocket-friendly tumble stones for everyday energy work.",path:"/healing-stones?search=tumble"},{name:"Pencils & Obelisks",desc:"Crystal points for manifestation, grids and healing.",path:"/healing-stones?search=obelisk"},{name:"Pyramids",desc:"Sacred geometry crystal pyramids for space harmonizing.",path:"/healing-stones?search=pyramid"}],Qg=[{title:"Free Shipping",text:"On qualifying orders"},{title:"Secure Payments",text:"Safe checkout guaranteed"},{title:"Speedy Delivery",text:"Fast dispatch & tracking"},{title:"Cash On Delivery",text:"Available on selected orders"},{title:"Expert Support",text:"Crystal guidance available"}],Yg=[{name:"Priya S.",text:"Original crystals, beautiful quality and very helpful guidance."},{name:"Swaroop P.",text:"Great variety of stones at reasonable prices. Highly recommended."},{name:"Umaid S.",text:"Authentic products, great pricing and patient staff support."}],Kg=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{const a=await(await fetch("/api/products")).json();t(a.slice(0,8))}catch(o){console.error("Error fetching featured products:",o)}finally{n(!1)}})()},[]),l.jsxs("div",{className:"home-page",children:[l.jsx(Wg,{}),l.jsx("section",{className:"usp-strip",children:l.jsx("div",{className:"container usp-grid",children:Qg.map(i=>l.jsxs("div",{className:"usp-card",children:[l.jsx("h4",{children:i.title}),l.jsx("p",{children:i.text})]},i.title))})}),l.jsx("section",{className:"section-padding collections-section",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"text-center mb-60",children:[l.jsx("span",{className:"hero-eyebrow",children:"Shop By Collection"}),l.jsx("h2",{className:"section-title",children:"Popular Crystal Categories"})]}),l.jsx("div",{className:"collections-grid",children:Vg.map(i=>l.jsxs(M,{to:i.path,className:"collection-card",children:[l.jsx("h3",{children:i.name}),l.jsx("p",{children:i.desc}),l.jsx("span",{children:"Explore"})]},i.name))})]})}),l.jsx("section",{className:"section-padding featured-products",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"text-center mb-60",children:[l.jsx("span",{className:"hero-eyebrow",children:"Featured Products"}),l.jsx("h2",{className:"section-title",children:"Best Sellers"})]}),l.jsx("div",{className:"products-grid",children:r?l.jsx("div",{className:"loading-state",children:"Loading products..."}):e.length>0?e.map(i=>l.jsx(Rt,{product:i},i.id)):l.jsx("div",{className:"no-products",children:"No featured products available."})}),l.jsx("div",{className:"text-center mt-60",children:l.jsx(M,{to:"/shop",className:"btn-luxury",children:"View All Products"})})]})}),l.jsx("section",{className:"section-padding service-focus",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"text-center mb-60",children:[l.jsx("span",{className:"hero-eyebrow",children:"Our Services"}),l.jsx("h2",{className:"section-title",children:"Reiki Healing & Consultation"})]}),l.jsxs("div",{className:"service-grid",children:[l.jsxs("div",{className:"service-card",children:[l.jsx("h3",{children:"Reiki Healing"}),l.jsx("p",{children:"Energy balancing sessions for emotional, physical and spiritual well-being."})]}),l.jsxs("div",{className:"service-card",children:[l.jsx("h3",{children:"Reiki Emergency Healing"}),l.jsx("p",{children:"Focused sessions designed for urgent emotional stress and energy imbalance."})]}),l.jsxs("div",{className:"service-card",children:[l.jsx("h3",{children:"Reiki Personalized Healing"}),l.jsx("p",{children:"Custom healing protocols aligned to your life goals and current challenges."})]}),l.jsxs("div",{className:"service-card",children:[l.jsx("h3",{children:"Crystal Vastu Consultation"}),l.jsx("p",{children:"Space harmonization with crystal placements for home and business environments."})]})]}),l.jsx("div",{className:"text-center mt-60",children:l.jsx(M,{to:"/services",className:"btn-luxury",children:"Book A Service"})})]})}),l.jsx("section",{className:"section-padding testimonials",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"text-center mb-60",children:[l.jsx("span",{className:"hero-eyebrow",children:"Client Feedback"}),l.jsx("h2",{className:"section-title",children:"What Customers Say"})]}),l.jsx("div",{className:"testimonials-grid",children:Yg.map(i=>l.jsxs("article",{className:"testimonial-card",children:[l.jsx("div",{className:"stars",children:"★★★★★"}),l.jsxs("p",{children:['"',i.text,'"']}),l.jsx("strong",{children:i.name})]},i.name))})]})}),l.jsx("section",{className:"home-cta",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"cta-box",children:[l.jsx("h2",{children:"Start Your Crystal Journey Today"}),l.jsx("p",{children:"Shop natural gemstones, Reiki tools and intention-based collections for every life goal."}),l.jsx(M,{to:"/shop",className:"btn-luxury",children:"Shop Now"})]})})}),l.jsx("style",{jsx:"true",children:`
        .text-center { text-align: center; }
        .mb-60 { margin-bottom: 60px; }
        .mt-60 { margin-top: 60px; }

        .usp-strip {
          background: #fff;
          border-top: 1px solid #efe7de;
          border-bottom: 1px solid #efe7de;
          padding: 28px 0;
        }
        .usp-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }
        .usp-card {
          text-align: center;
          padding: 12px 10px;
        }
        .usp-card h4 {
          font-size: 0.9rem;
          margin-bottom: 4px;
          color: var(--primary);
        }
        .usp-card p {
          color: var(--text-light);
          font-size: 0.76rem;
          letter-spacing: 0.4px;
        }

        .collections-section {
          background: var(--bg-creme);
        }
        .collections-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }
        .collection-card {
          background: #fff;
          border: 1px solid #efe7de;
          padding: 24px 20px;
          border-radius: 6px;
          transition: var(--transition);
          min-height: 180px;
        }
        .collection-card:hover {
          border-color: var(--secondary);
          transform: translateY(-6px);
          box-shadow: var(--shadow-soft);
        }
        .collection-card h3 {
          font-size: 1.2rem;
          margin-bottom: 8px;
          color: var(--primary);
        }
        .collection-card p {
          color: var(--text-light);
          font-size: 0.85rem;
          line-height: 1.6;
          min-height: 80px;
        }
        .collection-card span {
          text-transform: uppercase;
          letter-spacing: 1.6px;
          font-size: 0.7rem;
          color: var(--secondary);
          font-weight: 600;
        }

        .featured-products {
          background: #fff;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 30px;
        }
        .loading-state,
        .no-products {
          grid-column: 1 / -1;
          text-align: center;
          color: var(--text-light);
          padding: 24px 0;
        }

        .service-focus {
          background: var(--bg-creme);
        }
        .service-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }
        .service-card {
          background: #fff;
          border: 1px solid #efe7de;
          border-top: 3px solid var(--secondary);
          border-radius: 4px;
          padding: 24px 20px;
        }
        .service-card h3 {
          font-size: 1.05rem;
          margin-bottom: 8px;
          color: var(--primary);
        }
        .service-card p {
          font-size: 0.86rem;
          color: var(--text-light);
        }

        .testimonials {
          background: #fff;
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        .testimonial-card {
          border: 1px solid #efe7de;
          background: #fff;
          padding: 28px;
          border-radius: 6px;
        }
        .testimonial-card .stars {
          color: #d4af37;
          letter-spacing: 1.5px;
          margin-bottom: 10px;
          font-size: 0.9rem;
        }
        .testimonial-card p {
          color: var(--text-light);
          font-size: 0.92rem;
          margin-bottom: 14px;
        }
        .testimonial-card strong {
          color: var(--primary);
          font-size: 0.88rem;
        }

        .home-cta {
          padding: 90px 0;
          background: #111;
        }
        .cta-box {
          text-align: center;
          color: #fff;
          max-width: 760px;
          margin: 0 auto;
        }
        .cta-box h2 {
          font-size: 3rem;
          margin-bottom: 12px;
        }
        .cta-box p {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 32px;
        }

        @media (max-width: 1200px) {
          .collections-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .usp-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .service-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 900px) {
          .products-grid,
          .testimonials-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .collections-grid,
          .usp-grid,
          .products-grid,
          .service-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          .cta-box h2 {
            font-size: 2.1rem;
          }
        }
      `})]})},Gg=()=>{const e=He(),[t,r]=x.useState("All"),[n,i]=x.useState(""),[o,a]=x.useState("featured"),[s,u]=x.useState(!1),[c,h]=x.useState(!1),[d,g]=x.useState(""),[y,w]=x.useState(""),[v,k]=x.useState(!1),[p,f]=x.useState(!1),[m,j]=x.useState([]),[b,S]=x.useState(!0);x.useEffect(()=>{(async()=>{try{const C=await(await fetch("/api/products")).json();j(C),S(!1)}catch(ie){console.error("Error fetching products:",ie),S(!1)}})()},[]),x.useEffect(()=>{const _=new URLSearchParams(e.search),ie=_.get("category"),C=_.get("search");r(ie||"All"),i(C?C.trim():""),u(!1)},[e]);const E=["All","Healing Stones","Crystal Jewelry","Reiki Tools","Vastu & Feng Shui"],z=[{value:"featured",label:"Featured"},{value:"latest",label:"Latest"},{value:"price-low",label:"Price: Low to High"},{value:"price-high",label:"Price: High to Low"},{value:"name-az",label:"Name: A to Z"},{value:"name-za",label:"Name: Z to A"}],A=n.toLowerCase(),R=d!==""?Number.parseFloat(d):null,pe=y!==""?Number.parseFloat(y):null,Je=[...m.filter(_=>{var Lt,We,Yt,qe;const ie=Number.parseFloat(_.price)||0,C=Number.parseInt(_.stock,10)||0;if(R!==null&&!Number.isNaN(R)&&ie<R||pe!==null&&!Number.isNaN(pe)&&ie>pe||v&&!_.is_sale||p&&C<1||!(t==="All"?!0:(()=>{var ka,Na,Sa;const Kt=((ka=_.category)==null?void 0:ka.name)||"",Od=((Na=_.name)==null?void 0:Na.toLowerCase())||"",Id=((Sa=_.description)==null?void 0:Sa.toLowerCase())||"",ja=t.toLowerCase();return Kt===t||Od.includes(ja)||Id.includes(ja)})()))return!1;if(!A)return!0;const T=((Lt=_.name)==null?void 0:Lt.toLowerCase())||"",$=((We=_.description)==null?void 0:We.toLowerCase())||"",X=((qe=(Yt=_.category)==null?void 0:Yt.name)==null?void 0:qe.toLowerCase())||"";return T.includes(A)||$.includes(A)||X.includes(A)})].sort((_,ie)=>{const C=Number.parseFloat(_.price)||0,L=Number.parseFloat(ie.price)||0,T=_.name||"",$=ie.name||"";switch(o){case"latest":return(ie.id||0)-(_.id||0);case"price-low":return C-L;case"price-high":return L-C;case"name-az":return T.localeCompare($);case"name-za":return $.localeCompare(T);case"featured":default:return(ie.is_featured?1:0)-(_.is_featured?1:0)}}),Sn=()=>{r("All"),g(""),w(""),k(!1),f(!1)},bn=[d!=="",y!=="",v,p,t!=="All"].filter(Boolean).length;return l.jsxs("div",{className:"shop-page",children:[l.jsx("header",{className:"shop-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("span",{className:"hero-eyebrow",children:"The Catalog"}),l.jsx("h1",{className:"hero-title",children:"Discover Your Stone"}),l.jsx("p",{className:"hero-desc",children:"Sourced for purity. Curated for your unique vibration."})]})}),l.jsx("div",{className:"container section-padding",children:l.jsxs("div",{className:"shop-layout",children:[l.jsx("aside",{className:"shop-sidebar",children:l.jsxs("div",{className:"sidebar-section",children:[l.jsx("h3",{className:"sidebar-title",children:"Intentions"}),l.jsx("ul",{className:"category-list-luxury",children:E.map(_=>l.jsx("li",{children:l.jsx("button",{className:`cat-btn-luxury ${t===_?"active":""}`,onClick:()=>r(_),children:_})},_))})]})}),l.jsxs("main",{className:"shop-main",children:[l.jsxs("div",{className:"shop-toolbar",children:[l.jsxs("div",{className:"toolbar-left",children:[l.jsxs("span",{className:"results-count",children:[Je.length," Gems Found"]}),l.jsxs("div",{className:"toolbar-search",children:[l.jsx(zi,{size:14}),l.jsx("input",{type:"text",value:n,onChange:_=>i(_.target.value),placeholder:"Search products...","aria-label":"Search products in catalog"}),n&&l.jsx("button",{className:"clear-search-btn",onClick:()=>i(""),"aria-label":"Clear search",children:l.jsx(Pi,{size:14})})]})]}),l.jsxs("div",{className:"toolbar-actions",children:[l.jsxs("div",{className:"sort-wrap",children:[l.jsxs("button",{className:"toolbar-btn",onClick:()=>u(_=>!_),children:["Sort ",l.jsx(eg,{size:14})]}),s&&l.jsx("div",{className:"sort-menu",children:z.map(_=>l.jsx("button",{className:`sort-item ${o===_.value?"active":""}`,onClick:()=>{a(_.value),u(!1)},children:_.label},_.value))})]}),l.jsxs("button",{className:"toolbar-btn",onClick:()=>h(_=>!_),children:[l.jsx(dg,{size:14})," Filter ",bn>0?`(${bn})`:""]})]})]}),c&&l.jsxs("div",{className:"filter-panel",children:[l.jsxs("div",{className:"filter-grid",children:[l.jsxs("div",{className:"filter-group",children:[l.jsx("label",{children:"Category"}),l.jsx("select",{value:t,onChange:_=>r(_.target.value),children:E.map(_=>l.jsx("option",{value:_,children:_},_))})]}),l.jsxs("div",{className:"filter-group",children:[l.jsx("label",{children:"Min Price"}),l.jsx("input",{type:"number",min:"0",value:d,onChange:_=>g(_.target.value),placeholder:"0"})]}),l.jsxs("div",{className:"filter-group",children:[l.jsx("label",{children:"Max Price"}),l.jsx("input",{type:"number",min:"0",value:y,onChange:_=>w(_.target.value),placeholder:"1000"})]}),l.jsxs("label",{className:"checkbox-filter",children:[l.jsx("input",{type:"checkbox",checked:v,onChange:_=>k(_.target.checked)}),"On Sale"]}),l.jsxs("label",{className:"checkbox-filter",children:[l.jsx("input",{type:"checkbox",checked:p,onChange:_=>f(_.target.checked)}),"In Stock"]})]}),l.jsx("div",{className:"filter-actions",children:l.jsx("button",{className:"toolbar-btn reset-btn",onClick:Sn,children:"Reset Filters"})})]}),l.jsx("div",{className:"products-grid-luxury",children:b?l.jsx("div",{className:"loading-state",children:"Cleansing energy..."}):Je.length>0?Je.map(_=>l.jsx(Rt,{product:_},_.id)):l.jsx("div",{className:"no-results",children:"No matches for this cycle."})})]})]})}),l.jsx("style",{jsx:"true",children:`
                .shop-hero {
                    padding: 150px 0 100px;
                    background: var(--bg-creme);
                    text-align: center;
                    border-bottom: 1px solid #F0EAE5;
                }
                .shop-layout {
                    display: grid;
                    grid-template-columns: 220px 1fr;
                    gap: 60px;
                }
                
                .sidebar-title {
                    font-family: var(--font-serif);
                    font-size: 1.2rem;
                    margin-bottom: 25px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: var(--primary);
                }
                .category-list-luxury {
                    list-style: none;
                }
                .cat-btn-luxury {
                    background: none;
                    border: none;
                    display: block;
                    width: 100%;
                    text-align: left;
                    padding: 12px 0;
                    font-size: 0.8rem;
                    color: var(--text-light);
                    cursor: pointer;
                    transition: var(--transition);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .cat-btn-luxury:hover, .cat-btn-luxury.active {
                    color: var(--secondary);
                    padding-left: 10px;
                }
                
                .shop-toolbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                    padding: 18px 20px;
                    border: 1px solid #F0EAE5;
                    border-radius: 6px;
                    background: linear-gradient(180deg, #fff 0%, #fdfbf9 100%);
                }
                .toolbar-left {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .results-count { font-size: 0.8rem; color: var(--text-light); }
                .toolbar-search {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    border: 1px solid #E6DED6;
                    background: white;
                    border-radius: 999px;
                    padding: 8px 12px;
                    min-width: 260px;
                    color: var(--text-light);
                }
                .toolbar-search input {
                    border: none;
                    outline: none;
                    width: 100%;
                    font-size: 0.82rem;
                    color: var(--primary);
                    background: transparent;
                }
                .clear-search-btn {
                    border: none;
                    background: transparent;
                    color: #A2A7AC;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0;
                }
                .toolbar-actions {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .toolbar-btn {
                    background: none;
                    border: 1px solid #F0EAE5;
                    background: white;
                    padding: 10px 18px;
                    font-size: 0.75rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    cursor: pointer;
                    margin-left: 0;
                    transition: var(--transition);
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    border-radius: 4px;
                }
                .toolbar-btn:hover { border-color: var(--secondary); color: var(--secondary); }
                .sort-wrap { position: relative; }
                .sort-menu {
                    position: absolute;
                    top: calc(100% + 8px);
                    right: 0;
                    width: 220px;
                    background: white;
                    border: 1px solid #F0EAE5;
                    box-shadow: var(--shadow-soft);
                    z-index: 10;
                    padding: 8px 0;
                }
                .sort-item {
                    display: block;
                    width: 100%;
                    text-align: left;
                    border: none;
                    background: transparent;
                    padding: 10px 14px;
                    font-size: 0.8rem;
                    cursor: pointer;
                    color: var(--text-main);
                }
                .sort-item:hover, .sort-item.active {
                    background: var(--bg-creme);
                    color: var(--primary);
                }
                .filter-panel {
                    border: 1px solid #F0EAE5;
                    background: var(--bg-creme);
                    padding: 20px;
                    margin-bottom: 30px;
                }
                .filter-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr) auto auto;
                    gap: 16px;
                    align-items: end;
                }
                .filter-group label {
                    display: block;
                    font-size: 0.7rem;
                    margin-bottom: 8px;
                    text-transform: uppercase;
                    color: var(--text-light);
                    letter-spacing: 1px;
                }
                .filter-group input, .filter-group select {
                    width: 100%;
                    border: 1px solid #E7DFD7;
                    padding: 10px 12px;
                    background: white;
                    font-size: 0.85rem;
                }
                .checkbox-filter {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.8rem;
                    color: var(--text-main);
                    cursor: pointer;
                }
                .filter-actions {
                    margin-top: 14px;
                    display: flex;
                    justify-content: flex-end;
                }
                .reset-btn { margin-left: 0; }
                
                .products-grid-luxury {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 40px;
                }

                @media (max-width: 1024px) {
                    .shop-layout { grid-template-columns: 1fr; }
                    .shop-sidebar { display: none; }
                    .shop-toolbar {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 12px;
                    }
                    .toolbar-left {
                        justify-content: space-between;
                        width: 100%;
                    }
                    .filter-grid {
                        grid-template-columns: 1fr 1fr;
                    }
                    .products-grid-luxury { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .toolbar-left {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 10px;
                    }
                    .toolbar-actions {
                        width: 100%;
                        display: flex;
                        gap: 10px;
                    }
                    .toolbar-search {
                        min-width: 0;
                        width: 100%;
                    }
                    .toolbar-btn {
                        margin-left: 0;
                        flex: 1;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                    }
                    .sort-wrap { flex: 1; }
                    .sort-menu {
                        left: 0;
                        right: auto;
                        width: 100%;
                    }
                    .filter-grid {
                        grid-template-columns: 1fr;
                    }
                    .products-grid-luxury { grid-template-columns: 1fr; }
                }
            `})]})},Xg=()=>{const{id:e}=Gm(),{addToCart:t}=Nn(),[r,n]=x.useState(null),[i,o]=x.useState(1),[a,s]=x.useState("description"),[u,c]=x.useState(!0),[h,d]=x.useState([]);return x.useEffect(()=>{(async()=>{try{const w=await(await fetch(`/api/products/${e}`)).json();n(w),c(!1),window.scrollTo(0,0);const k=await(await fetch("/api/products")).json();d(k.filter(p=>p.category===w.category&&p.id!==w.id).slice(0,4))}catch(y){console.error("Error fetching product:",y),c(!1)}})()},[e]),u?l.jsx("div",{className:"container section-padding",children:"Loading..."}):r?l.jsxs("div",{className:"product-details-page",children:[l.jsxs("div",{className:"container section-padding",children:[l.jsxs("nav",{className:"breadcrumb-luxury",children:[l.jsx(M,{to:"/",children:"Manifest"})," / ",l.jsx(M,{to:"/shop",children:"Shop"})," / ",l.jsx("span",{children:r.name})]}),l.jsxs("div",{className:"product-main-luxury",children:[l.jsx("div",{className:"product-gallery-luxury",children:l.jsx("div",{className:"main-image-luxury",children:l.jsx("img",{src:Yi(r),alt:r.name})})}),l.jsxs("div",{className:"product-info-boutique",children:[l.jsx("div",{className:"badges-luxury",children:r.is_sale&&l.jsx("span",{className:"badge-luxury",children:"Divine Sale"})}),l.jsx("h1",{className:"product-title-serif",children:r.name}),l.jsxs("div",{className:"product-rating-gold-large",children:[l.jsx("div",{className:"stars",children:[1,2,3,4,5].map(g=>l.jsx(Md,{size:14,fill:g<=4?"#D4AF37":"none",color:"#D4AF37"},g))}),l.jsx("span",{className:"review-meta",children:"24 Enlightened Reviews"})]}),l.jsxs("div",{className:"product-price-boutique",children:[r.old_price&&l.jsxs("span",{className:"old-price",children:["$",r.old_price]}),l.jsxs("span",{className:"current-price",children:["$",r.price]})]}),l.jsx("p",{className:"boutique-desc",children:r.description||"A masterfully selected crystal, chosen for its unique energetic imprint and aesthetic purity. A perfect companion for your manifestation journey."}),l.jsxs("div",{className:"boutique-actions",children:[l.jsxs("div",{className:"qty-luxury",children:[l.jsx("button",{onClick:()=>o(g=>Math.max(1,g-1)),children:l.jsx(_d,{size:16})}),l.jsx("span",{children:i}),l.jsx("button",{onClick:()=>o(g=>g+1),children:l.jsx(Ld,{size:16})})]}),l.jsxs("button",{className:"btn-luxury-add",onClick:()=>t(r,i),children:[l.jsx(Rg,{size:18}),"Add to Sanctuary"]})]}),l.jsxs("div",{className:"boutique-features",children:[l.jsxs("div",{className:"feature-item",children:[l.jsx(Mg,{size:18}),l.jsxs("div",{children:[l.jsx("p",{className:"f-title",children:"Sacred Delivery"}),l.jsx("p",{className:"f-desc",children:"Free on orders over $150"})]})]}),l.jsxs("div",{className:"feature-item",children:[l.jsx(Td,{size:18}),l.jsxs("div",{children:[l.jsx("p",{className:"f-title",children:"Authentic Origin"}),l.jsx("p",{className:"f-desc",children:"100% Earth-born stones"})]})]})]})]})]}),l.jsxs("div",{className:"details-tabs-luxury",children:[l.jsxs("div",{className:"tab-headers-boutique",children:[l.jsx("button",{className:a==="description"?"active":"",onClick:()=>s("description"),children:"The Essence"}),l.jsx("button",{className:a==="benefits"?"active":"",onClick:()=>s("benefits"),children:"Vibrations"}),l.jsx("button",{className:a==="shipping"?"active":"",onClick:()=>s("shipping"),children:"Sacred Journey"})]}),l.jsxs("div",{className:"tab-content-boutique",children:[a==="description"&&l.jsxs("div",{className:"tab-pane-luxury fade-in",children:[l.jsx("p",{children:r.description}),l.jsx("p",{className:"nature-notice",children:"Note: Stones are natural minerals. Please embrace minor variance in color and structure as a signature of Earth's artistry."})]}),a==="benefits"&&l.jsx("div",{className:"tab-pane-luxury fade-in",children:l.jsxs("ul",{className:"benefits-list-luxury",children:[r.benefits&&r.benefits.map((g,y)=>l.jsx("li",{children:g},y)),l.jsx("li",{children:"Harmonizes personal energetic fields"}),l.jsx("li",{children:"Promotes deep cellular calm and mental clarity"})]})}),a==="shipping"&&l.jsxs("div",{className:"tab-pane-luxury fade-in",children:[l.jsx("p",{children:"We meticulously package your crystals with intention to ensure they arrive in perfect resonance."}),l.jsxs("ul",{className:"benefits-list-luxury",children:[l.jsx("li",{children:"Domestic Path: 5-7 business days"}),l.jsx("li",{children:"Expedited Path: 2-3 business days"}),l.jsx("li",{children:"Global Delivery available for all seekers"})]})]})]})]}),h.length>0&&l.jsxs("div",{className:"related-section-luxury",children:[l.jsxs("div",{className:"text-center mb-60",children:[l.jsx("span",{className:"hero-eyebrow",children:"Complementary"}),l.jsx("h2",{className:"section-title",children:"Synergistic Pairings"})]}),l.jsx("div",{className:"products-grid-luxury",children:h.map(g=>l.jsx(Rt,{product:g},g.id))})]})]}),l.jsx("style",{jsx:"true",children:`
                .breadcrumb-luxury { margin-bottom: 40px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); }
                .breadcrumb-luxury a { color: var(--text-light); text-decoration: none; }
                .breadcrumb-luxury span { color: var(--primary); font-weight: 700; }
                
                .product-main-luxury { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; margin-bottom: 100px; }
                .main-image-luxury { aspect-ratio: 4/5; border-radius: 4px; overflow: hidden; background: var(--bg-creme); }
                .main-image-luxury img { width: 100%; height: 100%; object-fit: cover; }
                
                .badge-luxury { background: var(--secondary); color: white; padding: 5px 15px; font-size: 0.6rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; display: inline-block; margin-bottom: 20px; }
                .product-title-serif { font-size: 3.5rem; margin-bottom: 20px; font-family: var(--font-serif); color: var(--primary); }
                .product-rating-gold-large { display: flex; align-items: center; gap: 15px; margin-bottom: 30px; }
                .review-meta { font-size: 0.75rem; color: var(--text-light); font-weight: 300; }
                
                .product-price-boutique { display: flex; align-items: center; gap: 20px; margin-bottom: 35px; }
                .current-price { font-size: 2.2rem; font-weight: 500; color: var(--primary); font-family: var(--font-serif); }
                .old-price { font-size: 1.2rem; text-decoration: line-through; color: #BDC3C7; font-weight: 300; }
                
                .boutique-desc { line-height: 1.8; color: var(--text-light); margin-bottom: 45px; font-size: 1rem; font-weight: 300; }
                
                .boutique-actions { display: flex; gap: 30px; margin-bottom: 60px; }
                .qty-luxury { display: flex; align-items: center; border: 1px solid #F0EAE5; padding: 5px; }
                .qty-luxury button { background: none; border: none; width: 40px; height: 40px; cursor: pointer; color: var(--primary); }
                .qty-luxury span { width: 40px; text-align: center; font-weight: 600; }
                .btn-luxury-add { flex: 1; display: flex; align-items: center; justify-content: center; gap: 12px; background: var(--primary); color: white; border: none; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; transition: var(--transition); cursor: pointer; }
                .btn-luxury-add:hover { background: var(--bg-dark); transform: translateY(-3px); }
                
                .boutique-features { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; padding-top: 40px; border-top: 1px solid #F0EAE5; }
                .feature-item { display: flex; gap: 15px; align-items: center; color: var(--primary); }
                .f-title { font-weight: 600; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; }
                .f-desc { font-size: 0.7rem; color: var(--text-light); font-weight: 300; }
                
                .details-tabs-luxury { margin-bottom: 100px; }
                .tab-headers-boutique { display: flex; gap: 60px; border-bottom: 1px solid #F0EAE5; margin-bottom: 40px; }
                .tab-headers-boutique button { background: none; border: none; padding: 20px 0; font-size: 0.9rem; font-family: var(--font-serif); text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); cursor: pointer; position: relative; }
                .tab-headers-boutique button.active { color: var(--primary); }
                .tab-headers-boutique button.active::after { content: ''; position: absolute; bottom: -1px; left: 0; width: 100%; height: 1px; background: var(--secondary); }
                .tab-content-boutique { line-height: 2; color: var(--text-light); max-width: 800px; font-weight: 300; }
                .nature-notice { margin-top: 20px; font-style: italic; font-size: 0.85rem; opacity: 0.7; }
                .benefits-list-luxury { list-style: circle; padding-left: 20px; }
                .benefits-list-luxury li { margin-bottom: 10px; }
                
                .products-grid-luxury { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
                .mb-60 { margin-bottom: 60px; }
                .text-center { text-align: center; }

                @media (max-width: 992px) {
                    .product-main-luxury { grid-template-columns: 1fr; gap: 40px; }
                    .products-grid-luxury { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .product-title-serif { font-size: 2.5rem; }
                    .boutique-actions { flex-direction: column; }
                    .boutique-features { grid-template-columns: 1fr; }
                }
            `})]}):l.jsx("div",{className:"container section-padding",children:"Product not found."})},Jg=()=>{const{cartItems:e,removeFromCart:t,updateQuantity:r,cartTotal:n}=Nn();return e.length===0?l.jsxs("div",{className:"container section-padding text-center",children:[l.jsxs("header",{className:"cart-header-luxury",children:[l.jsx("span",{className:"hero-eyebrow",children:"Your Selection"}),l.jsx("h1",{className:"hero-title",children:"Your Sanctuary is Empty"}),l.jsx("p",{className:"boutique-p",style:{maxWidth:"600px",margin:"0 auto 40px"},children:"It appears you haven't selected any crystal masterpieces for your collection yet."}),l.jsx(M,{to:"/shop",className:"btn-luxury-checkout",style:{display:"inline-block",width:"auto",padding:"20px 60px"},children:"Begin Your Discovery"})]}),l.jsx("style",{jsx:"true",children:`
                    .cart-header-luxury { padding: 100px 0; }
                    .boutique-p { font-family: var(--font-sans); color: var(--text-light); font-weight: 300; }
                    .btn-luxury-checkout { background: var(--primary); color: white; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; text-decoration: none; transition: var(--transition); }
                    .btn-luxury-checkout:hover { background: var(--bg-dark); transform: translateY(-3px); }
                `})]}):l.jsxs("div",{className:"cart-page",children:[l.jsxs("div",{className:"container section-padding",children:[l.jsxs("header",{className:"cart-header-luxury",children:[l.jsx("span",{className:"hero-eyebrow",children:"Your Selection"}),l.jsx("h1",{className:"hero-title",children:"The Collection"})]}),l.jsxs("div",{className:"cart-layout-luxury",children:[l.jsxs("div",{className:"cart-items-luxury",children:[l.jsxs("div",{className:"cart-table-header",children:[l.jsx("span",{className:"col-product",children:"Masterpiece"}),l.jsx("span",{className:"col-price",children:"Offering"}),l.jsx("span",{className:"col-quantity",children:"Quantity"}),l.jsx("span",{className:"col-total",children:"Subtotal"})]}),e.map(i=>{var o;return l.jsxs("div",{className:"cart-item-luxury fade-in",children:[l.jsx("div",{className:"col-product",children:l.jsxs("div",{className:"item-info-boutique",children:[l.jsx("div",{className:"item-img-luxury",children:l.jsx("img",{src:Yi(i),alt:i.name})}),l.jsxs("div",{className:"item-text",children:[l.jsx("h3",{className:"item-name-serif",children:i.name}),l.jsx("p",{className:"item-meta",children:((o=i.category)==null?void 0:o.name)||"Crystal"}),l.jsx("button",{className:"remove-luxury",onClick:()=>t(i.id),children:"Remove from Sanctuary"})]})]})}),l.jsxs("div",{className:"col-price-luxury",children:["$",i.price.toFixed(2)]}),l.jsx("div",{className:"col-quantity",children:l.jsxs("div",{className:"qty-boutique",children:[l.jsx("button",{onClick:()=>r(i.id,i.quantity-1),children:l.jsx(_d,{size:12})}),l.jsx("span",{children:i.quantity}),l.jsx("button",{onClick:()=>r(i.id,i.quantity+1),children:l.jsx(Ld,{size:12})})]})}),l.jsxs("div",{className:"col-total-luxury",children:["$",(i.price*i.quantity).toFixed(2)]})]},i.id)}),l.jsx("div",{className:"cart-actions-luxury",children:l.jsxs(M,{to:"/shop",className:"back-to-shop",children:[l.jsx(Jh,{size:16})," Rediscover Collection"]})})]}),l.jsxs("aside",{className:"summary-sidebar-luxury",children:[l.jsx("h3",{className:"sidebar-title-serif",children:"Manifestation Summary"}),l.jsxs("div",{className:"summary-details-luxury",children:[l.jsxs("div",{className:"summary-row-luxury",children:[l.jsx("span",{children:"Collection Total"}),l.jsxs("span",{children:["$",n.toFixed(2)]})]}),l.jsxs("div",{className:"summary-row-luxury",children:[l.jsx("span",{children:"Sacred Delivery"}),l.jsx("span",{children:n>150?"Complimentary":"$15.00"})]}),l.jsxs("div",{className:"summary-total-luxury",children:[l.jsx("span",{children:"Total Amount"}),l.jsxs("span",{children:["$",(n>150?n:n+15).toFixed(2)]})]})]}),n<150&&l.jsx("div",{className:"shipping-upsell-luxury",children:l.jsxs("p",{children:["Invite $",(150-n).toFixed(0)," more to your collection for complimentary delivery."]})}),l.jsx(M,{to:"/checkout",className:"btn-luxury-checkout",children:"Proceed to Acquisition"}),l.jsxs("div",{className:"trust-luxury",children:[l.jsx(Td,{size:16}),l.jsx("span",{children:"Secured Spiritual Exchange"})]})]})]})]}),l.jsx("style",{jsx:"true",children:`
                .cart-header-luxury { text-align: center; margin-bottom: 80px; }
                .cart-layout-luxury { display: grid; grid-template-columns: 1fr 380px; gap: 80px; }
                
                .cart-table-header { display: grid; grid-template-columns: 2.5fr 1fr 1fr 1fr; padding-bottom: 20px; border-bottom: 1px solid #F0EAE5; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); }
                .cart-item-luxury { display: grid; grid-template-columns: 2.5fr 1fr 1fr 1fr; padding: 40px 0; border-bottom: 1px solid #F0EAE5; align-items: center; }
                
                .item-info-boutique { display: flex; gap: 30px; align-items: center; }
                .item-img-luxury { width: 100px; height: 120px; background: var(--bg-creme); border-radius: 2px; overflow: hidden; }
                .item-img-luxury img { width: 100%; height: 100%; object-fit: cover; }
                
                .item-name-serif { font-family: var(--font-serif); font-size: 1.4rem; color: var(--primary); margin-bottom: 5px; }
                .item-meta { font-size: 0.75rem; color: var(--text-light); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; }
                
                .remove-luxury { background: none; border: none; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: #BDC3C7; cursor: pointer; padding: 0; transition: var(--transition); border-bottom: 1px solid transparent; }
                .remove-luxury:hover { color: #E74C3C; border-color: #E74C3C; }
                
                .qty-boutique { display: flex; align-items: center; gap: 15px; border: 1px solid #F0EAE5; padding: 8px 15px; width: fit-content; }
                .qty-boutique button { background: none; border: none; cursor: pointer; color: var(--primary); }
                
                .col-price-luxury, .col-total-luxury { font-size: 1rem; color: var(--primary); font-weight: 300; }
                .col-total-luxury { font-weight: 600; }
                
                .cart-actions-luxury { padding-top: 40px; }
                .back-to-shop { display: flex; align-items: center; gap: 10px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); text-decoration: none; transition: var(--transition); }
                .back-to-shop:hover { color: var(--primary); transform: translateX(-5px); }
                
                .summary-sidebar-luxury { background: var(--bg-creme); padding: 50px; border-radius: 4px; border: 1px solid #F0EAE5; height: fit-content; }
                .sidebar-title-serif { font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 35px; border-bottom: 1px solid #F0EAE5; padding-bottom: 20px; color: var(--primary); }
                
                .summary-row-luxury { display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 0.85rem; color: var(--text-light); }
                .summary-total-luxury { display: flex; justify-content: space-between; border-top: 1px solid #F0EAE5; margin-top: 25px; padding-top: 25px; font-size: 1.3rem; font-family: var(--font-serif); color: var(--primary); font-weight: 700; }
                
                .shipping-upsell-luxury { margin: 30px 0; padding: 15px; background: white; border-radius: 4px; border: 1px dashed var(--secondary); font-size: 0.75rem; text-align: center; color: var(--primary); line-height: 1.5; font-style: italic; }
                
                .btn-luxury-checkout { width: 100%; display: block; background: var(--primary); color: white; border: none; padding: 20px; text-align: center; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; transition: var(--transition); text-decoration: none; margin-bottom: 25px; }
                .btn-luxury-checkout:hover { background: var(--bg-dark); transform: translateY(-3px); }
                
                .trust-luxury { display: flex; align-items: center; justify-content: center; gap: 10px; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1px; color: #BDC3C7; }

                @media (max-width: 992px) {
                    .cart-layout-luxury { grid-template-columns: 1fr; gap: 60px; }
                    .cart-table-header { display: none; }
                    .cart-item-luxury { grid-template-columns: 1fr; gap: 20px; position: relative; padding: 40px 0; }
                    .col-price-luxury, .col-quantity, .col-total-luxury { display: flex; justify-content: space-between; border-bottom: 1px solid #F8F9F9; padding-bottom: 10px; }
                    .col-price-luxury::before { content: 'Individual Offering'; color: var(--text-light); text-transform: uppercase; font-size: 0.6rem; letter-spacing: 1px; }
                    .col-total-luxury::before { content: 'Total Offering'; color: var(--text-light); text-transform: uppercase; font-size: 0.6rem; letter-spacing: 1px; }
                }
            `})]})},Zg=()=>{const{cartItems:e,cartTotal:t,clearCart:r}=Nn(),n=He(),i=new URLSearchParams(n.search),o=i.get("status"),a=i.get("session_id"),[s,u]=x.useState("idle"),[c,h]=x.useState(null),[d,g]=x.useState(1),[y,w]=x.useState(!1),[v,k]=x.useState(""),[p,f]=x.useState({email:"",firstName:"",lastName:"",address:"",city:"",zipCode:""});x.useEffect(()=>{(async()=>{if(!(o!=="success"||!a)){u("loading");try{const E=await fetch(`/api/checkout-session-status?session_id=${encodeURIComponent(a)}`),z=await E.json();if(!E.ok)throw new Error(z.error||"Unable to verify payment");z.payment_status==="paid"?(z.order_id&&(h(z.order_id),localStorage.setItem("as_last_order_id",String(z.order_id))),r(),u("paid")):u("unpaid")}catch(E){console.error("Payment verification error:",E),u("error")}}})()},[o,a,r]);const m=S=>{f({...p,[S.target.name]:S.target.value})},j=async S=>{if(S.preventDefault(),k(""),d===1){g(2);return}if(d===2||d===3){await b();return}},b=async()=>{if(k(""),e.length===0){k("Your cart is empty.");return}try{w(!0);const S=await fetch("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:e,customer:{email:p.email,firstName:p.firstName,lastName:p.lastName},shipping:{address:p.address,city:p.city,zipCode:p.zipCode}})}),E=await S.json();if(!S.ok)throw new Error(E.error||"Error creating checkout session");if(!E.url)throw new Error("Stripe checkout URL was not returned.");localStorage.setItem("as_last_order_email",p.email.trim().toLowerCase()),window.location.href=E.url}catch(S){console.error("Checkout error:",S),k(S.message||"Something went wrong. Please try again.")}finally{w(!1)}};return o==="success"?s==="loading"||s==="idle"?l.jsxs("div",{className:"container section-padding text-center success-page",children:[l.jsx("h1",{children:"Verifying Payment..."}),l.jsx("p",{children:"Please wait while we confirm your Stripe payment."})]}):s!=="paid"?l.jsxs("div",{className:"container section-padding text-center success-page",children:[l.jsx(Pi,{size:80,color:"#E91E63",style:{marginBottom:"30px"}}),l.jsx("h1",{children:"Payment Not Confirmed Yet"}),l.jsx("p",{children:"We could not verify your payment. If you were charged, contact support with your payment receipt."}),l.jsx(M,{to:"/cart",className:"btn btn-primary",style:{marginTop:"30px"},children:"Return to Cart"})]}):l.jsxs("div",{className:"container section-padding text-center success-page",children:[l.jsx(rg,{size:80,color:"#E91E63",style:{marginBottom:"30px"}}),l.jsx("h1",{children:"Payment Successful!"}),l.jsx("p",{children:"Your order has been paid and is now being prepared."}),c&&l.jsxs("p",{children:["Your order number is #",c,"."]}),l.jsx(M,{to:"/orders",className:"btn btn-primary",style:{marginTop:"20px",marginRight:"10px"},children:"View My Orders"}),l.jsx(M,{to:"/shop",className:"btn btn-primary",style:{marginTop:"30px"},children:"Continue Shopping"})]}):o==="cancel"?l.jsxs("div",{className:"container section-padding text-center success-page",children:[l.jsx(Pi,{size:80,color:"#E91E63",style:{marginBottom:"30px"}}),l.jsx("h1",{children:"Payment Cancelled"}),l.jsx("p",{children:"Your payment was not completed. Please try again when you are ready."}),l.jsx(M,{to:"/cart",className:"btn btn-primary",style:{marginTop:"30px"},children:"Return to Cart"})]}):l.jsxs("div",{className:"checkout-page",children:[l.jsxs("div",{className:"container section-padding",children:[l.jsxs("div",{className:"checkout-steps-luxury",children:[l.jsxs("div",{className:`step-item-boutique ${d>=1?"active":""}`,children:[l.jsx("span",{children:"I"})," Shipping"]}),l.jsx("div",{className:"step-divider-luxury"}),l.jsxs("div",{className:`step-item-boutique ${d>=2?"active":""}`,children:[l.jsx("span",{children:"II"})," Payment"]}),l.jsx("div",{className:"step-divider-luxury"}),l.jsxs("div",{className:`step-item-boutique ${d>=3?"active":""}`,children:[l.jsx("span",{children:"III"})," Review"]})]}),l.jsxs("div",{className:"checkout-layout-luxury",children:[l.jsx("div",{className:"checkout-main-panel",children:l.jsxs("form",{className:"checkout-form-luxury",onSubmit:j,children:[d===1&&l.jsxs("div",{className:"form-section-luxury fade-in",children:[l.jsx("h2",{className:"section-title-small",children:"Shipping Details"}),l.jsxs("div",{className:"form-grid-luxury",children:[l.jsxs("div",{className:"form-group-luxury full",children:[l.jsx("label",{children:"Email"}),l.jsx("input",{type:"email",name:"email",required:!0,value:p.email,onChange:m})]}),l.jsxs("div",{className:"form-group-luxury",children:[l.jsx("label",{children:"First Name"}),l.jsx("input",{type:"text",name:"firstName",required:!0,value:p.firstName,onChange:m})]}),l.jsxs("div",{className:"form-group-luxury",children:[l.jsx("label",{children:"Last Name"}),l.jsx("input",{type:"text",name:"lastName",required:!0,value:p.lastName,onChange:m})]}),l.jsxs("div",{className:"form-group-luxury full",children:[l.jsx("label",{children:"Address"}),l.jsx("input",{type:"text",name:"address",required:!0,value:p.address,onChange:m})]}),l.jsxs("div",{className:"form-group-luxury",children:[l.jsx("label",{children:"City"}),l.jsx("input",{type:"text",name:"city",required:!0,value:p.city,onChange:m})]}),l.jsxs("div",{className:"form-group-luxury",children:[l.jsx("label",{children:"Postal Code"}),l.jsx("input",{type:"text",name:"zipCode",required:!0,value:p.zipCode,onChange:m})]})]}),l.jsx("button",{type:"submit",className:"btn-luxury-submit",children:"Continue to Payment"})]}),d===2&&l.jsxs("div",{className:"form-section-luxury fade-in",children:[l.jsx("h2",{className:"section-title-small",children:"Secure Stripe Payment"}),l.jsx("div",{className:"payment-select-luxury",children:l.jsxs("div",{className:"payment-option-boutique active",children:[l.jsx(ig,{size:18}),l.jsx("span",{children:"Card payment powered by Stripe Checkout"})]})}),l.jsx("div",{className:"review-card-boutique",style:{marginBottom:"30px"},children:l.jsxs("div",{className:"review-item",children:[l.jsx("span",{className:"review-label",children:"Card Entry"}),l.jsx("p",{className:"review-val",children:"Click below to open Stripe and enter your card details securely."})]})}),l.jsxs("div",{className:"btn-group-luxury",children:[l.jsx("button",{type:"button",className:"btn-luxury-back",onClick:()=>g(1),children:"Back"}),l.jsx("button",{type:"submit",className:"btn-luxury-submit",disabled:y,children:y?"Redirecting...":`Pay ${(t+(t>150?0:15)).toFixed(2)} with Card`})]}),v&&l.jsx("p",{className:"checkout-error",children:v})]}),d===3&&l.jsxs("div",{className:"form-section-luxury fade-in",children:[l.jsx("h2",{className:"section-title-small",children:"Final Review"}),l.jsxs("div",{className:"review-card-boutique",children:[l.jsxs("div",{className:"review-item",children:[l.jsx("span",{className:"review-label",children:"Customer"}),l.jsxs("p",{className:"review-val",children:[p.firstName," ",p.lastName]})]}),l.jsxs("div",{className:"review-item",children:[l.jsx("span",{className:"review-label",children:"Address"}),l.jsxs("p",{className:"review-val",children:[p.address,", ",p.city," ",p.zipCode]})]}),l.jsxs("div",{className:"review-item",children:[l.jsx("span",{className:"review-label",children:"Payment"}),l.jsx("p",{className:"review-val",children:"Secure checkout on Stripe"})]})]}),l.jsx("button",{type:"submit",className:"btn-luxury-submit full-width",disabled:y,children:y?"Redirecting...":`Pay ${(t+(t>150?0:15)).toFixed(2)} with Stripe`}),v&&l.jsx("p",{className:"checkout-error",children:v}),l.jsx("button",{type:"button",className:"btn-text-luxury",onClick:()=>g(2),children:"Back to Payment"})]})]})}),l.jsxs("aside",{className:"order-sidebar-luxury",children:[l.jsx("h3",{className:"sidebar-title-serif",children:"Order Summary"}),l.jsx("div",{className:"sidebar-items-luxury",children:e.map(S=>l.jsxs("div",{className:"sidebar-item-boutique",children:[l.jsx("div",{className:"sidebar-img",children:l.jsx("img",{src:Yi(S),alt:S.name})}),l.jsxs("div",{className:"sidebar-info",children:[l.jsxs("p",{className:"s-name",children:[S.name," ",l.jsxs("span",{className:"s-qty",children:["x ",S.quantity]})]}),l.jsxs("p",{className:"s-price",children:["$",(S.price*S.quantity).toFixed(2)]})]})]},S.id))}),l.jsxs("div",{className:"sidebar-totals-luxury",children:[l.jsxs("div",{className:"s-row",children:[l.jsx("span",{children:"Subtotal"}),l.jsxs("span",{children:["$",t.toFixed(2)]})]}),l.jsxs("div",{className:"s-row",children:[l.jsx("span",{children:"Shipping"}),l.jsx("span",{children:t>150?"Free":"$15.00"})]}),l.jsxs("div",{className:"s-row total",children:[l.jsx("span",{children:"Total"}),l.jsxs("span",{children:["$",(t>150?t:t+15).toFixed(2)]})]})]})]})]})]}),l.jsx("style",{jsx:"true",children:`
        .success-page { min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .success-page h1 { font-size: 2.4rem; color: #E91E63; margin-bottom: 20px; }
        .success-page p { color: #666; font-size: 1rem; max-width: 640px; }

        .checkout-steps-luxury { display: flex; align-items: center; justify-content: center; gap: 40px; margin-bottom: 80px; }
        .step-item-boutique { display: flex; align-items: center; gap: 15px; color: #BDC3C7; font-size: 0.8rem; letter-spacing: 2px; text-transform: uppercase; font-weight: 500; }
        .step-item-boutique span { font-size: 0.7rem; font-family: var(--font-serif); }
        .step-item-boutique.active { color: var(--primary); }
        .step-divider-luxury { width: 50px; height: 1px; background: #F0EAE5; }

        .checkout-layout-luxury { display: grid; grid-template-columns: 1fr 420px; gap: 100px; }
        .section-title-small { font-family: var(--font-serif); font-size: 2rem; margin-bottom: 35px; color: var(--primary); }
        .form-grid-luxury { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 40px; }
        .form-group-luxury { display: flex; flex-direction: column; gap: 10px; }
        .form-group-luxury.full { grid-column: span 2; }
        .form-group-luxury label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light); }
        .form-group-luxury input { border: none; border-bottom: 1px solid #F0EAE5; padding: 12px 0; font-size: 1rem; color: var(--primary); background: transparent; }
        .form-group-luxury input:focus { outline: none; border-color: var(--secondary); }

        .btn-luxury-submit { background: var(--primary); color: white; border: none; padding: 20px 40px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; transition: var(--transition); }
        .btn-luxury-submit:hover { background: var(--bg-dark); transform: translateY(-3px); }
        .btn-luxury-submit.full-width { width: 100%; }
        .btn-luxury-submit:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

        .payment-select-luxury { margin-bottom: 40px; }
        .payment-option-boutique { border: 1px solid #F0EAE5; padding: 20px; display: flex; align-items: center; gap: 15px; color: var(--text-light); background: var(--bg-creme); }
        .payment-option-boutique.active { border-color: var(--secondary); color: var(--primary); }

        .btn-group-luxury { display: flex; gap: 20px; }
        .btn-luxury-back { background: transparent; border: 1px solid #F0EAE5; padding: 20px 40px; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; }

        .review-card-boutique { background: var(--bg-creme); padding: 32px; border-radius: 4px; margin-bottom: 30px; }
        .review-item { margin-bottom: 18px; }
        .review-item:last-child { margin-bottom: 0; }
        .review-label { font-size: 0.6rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); display: block; margin-bottom: 10px; }
        .review-val { font-size: 1rem; color: var(--primary); font-family: var(--font-serif); }
        .btn-text-luxury { background: none; border: none; display: block; margin: 20px auto 0; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light); cursor: pointer; text-decoration: underline; }
        .checkout-error { color: #b3261e; margin-top: 12px; font-size: 0.85rem; text-align: center; }

        .order-sidebar-luxury { background: var(--bg-creme); padding: 50px; border-radius: 4px; border: 1px solid #F0EAE5; }
        .sidebar-title-serif { font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 35px; border-bottom: 1px solid #F0EAE5; padding-bottom: 20px; }
        .sidebar-items-luxury { margin-bottom: 40px; }
        .sidebar-item-boutique { display: flex; gap: 20px; margin-bottom: 25px; }
        .sidebar-img { width: 70px; height: 90px; overflow: hidden; border-radius: 2px; }
        .sidebar-img img { width: 100%; height: 100%; object-fit: cover; }
        .s-name { font-size: 0.9rem; color: var(--primary); font-weight: 500; margin-bottom: 5px; }
        .s-qty { font-size: 0.7rem; color: var(--text-light); margin-left: 5px; }
        .s-price { font-size: 0.85rem; color: var(--text-light); }
        .sidebar-totals-luxury { border-top: 1px solid #F0EAE5; padding-top: 30px; }
        .s-row { display: flex; justify-content: space-between; margin-bottom: 15px; font-size: 0.85rem; color: var(--text-light); }
        .s-row.total { font-size: 1.2rem; color: var(--primary); font-family: var(--font-serif); margin-top: 20px; font-weight: 700; }

        @media (max-width: 1024px) {
          .checkout-layout-luxury { grid-template-columns: 1fr; gap: 60px; }
          .order-sidebar-luxury { order: -1; }
        }
      `})]})},ex=()=>l.jsxs("div",{className:"about-page",children:[l.jsx("section",{className:"about-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("span",{className:"hero-eyebrow",children:"About Us"}),l.jsx("h1",{className:"hero-title",children:"AS Crystal"}),l.jsx("p",{className:"hero-desc",children:"Healing crystals and natural gemstones for Reiki healing, crystal therapy and everyday wellness."})]})}),l.jsx("section",{className:"section-padding",children:l.jsxs("div",{className:"container about-grid",children:[l.jsxs("div",{className:"about-copy",children:[l.jsx("h2",{className:"section-title-serif",children:"Our Story"}),l.jsx("p",{children:"AS Crystal was created to make authentic crystal tools more accessible to spiritual seekers and wellness-focused families. We curate products that blend practical use with energetic intention."}),l.jsx("p",{children:"From bracelets and malas to tumble stones and healing sets, each item is selected to support focused goals like protection, clarity, grounding, confidence and prosperity."}),l.jsx("p",{children:"Along with products, we offer Reiki healing sessions, crystal consultation and training programs for people who want guided support in their energy journey."})]}),l.jsxs("div",{className:"about-points",children:[l.jsxs("article",{children:[l.jsx("h3",{children:"Authentic Selection"}),l.jsx("p",{children:"Carefully sourced crystal products selected for quality, finish and energetic use."})]}),l.jsxs("article",{children:[l.jsx("h3",{children:"Consultation Support"}),l.jsx("p",{children:"Get practical guidance on what to choose for relationship, career, health and peace."})]}),l.jsxs("article",{children:[l.jsx("h3",{children:"Training Path"}),l.jsx("p",{children:"Beginner to advanced Reiki learning options with crystal integration workshops."})]}),l.jsxs("article",{children:[l.jsx("h3",{children:"Customer-First Service"}),l.jsx("p",{children:"Responsive support before and after purchase to help you use products effectively."})]})]})]})}),l.jsx("section",{className:"about-stats",children:l.jsxs("div",{className:"container stats-grid",children:[l.jsxs("div",{children:[l.jsx("strong",{children:"100+"}),l.jsx("span",{children:"Product Options"})]}),l.jsxs("div",{children:[l.jsx("strong",{children:"5+"}),l.jsx("span",{children:"Healing Services"})]}),l.jsxs("div",{children:[l.jsx("strong",{children:"6"}),l.jsx("span",{children:"Training Programs"})]}),l.jsxs("div",{children:[l.jsx("strong",{children:"Daily"}),l.jsx("span",{children:"Support Available"})]})]})}),l.jsx("style",{jsx:"true",children:`
        .about-hero {
          padding: 150px 0 100px;
          text-align: center;
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=1974&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
        }
        .about-hero .hero-title,
        .about-hero .hero-desc {
          color: #fff;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 44px;
        }
        .about-copy p {
          color: var(--text-light);
          margin-bottom: 14px;
          line-height: 1.8;
        }

        .about-points {
          display: grid;
          gap: 14px;
        }
        .about-points article {
          background: #fff;
          border: 1px solid #efe7de;
          border-left: 3px solid var(--secondary);
          border-radius: 4px;
          padding: 16px;
        }
        .about-points h3 {
          color: var(--primary);
          font-size: 1.1rem;
          margin-bottom: 4px;
        }
        .about-points p {
          color: var(--text-light);
          font-size: 0.88rem;
        }

        .about-stats {
          padding: 0 0 90px;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }
        .stats-grid div {
          background: #fff;
          border: 1px solid #efe7de;
          border-radius: 6px;
          padding: 24px;
          text-align: center;
        }
        .stats-grid strong {
          display: block;
          font-family: var(--font-serif);
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 6px;
        }
        .stats-grid span {
          text-transform: uppercase;
          letter-spacing: 1.4px;
          font-size: 0.66rem;
          color: var(--text-light);
        }

        @media (max-width: 900px) {
          .about-grid,
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),tx=()=>l.jsxs("div",{className:"contact-page",children:[l.jsx("div",{className:"boutique-contact-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("span",{className:"hero-eyebrow white",children:"Connect"}),l.jsx("h1",{className:"hero-title white",children:"Sacred Inquiries"}),l.jsx("p",{className:"boutique-hero-p white",children:"We are here to assist you on your journey of discovery. Reach out for bespoke selections or spiritual guidance."})]})}),l.jsx("section",{className:"section-padding",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"contact-layout-boutique",children:[l.jsxs("div",{className:"contact-info-panel",children:[l.jsx("h2",{className:"section-title-serif",children:"The Sanctuary Studio"}),l.jsx("p",{className:"boutique-p",children:"Whether you seek a specific vibration, require guidance on crystal care, or wish to inquire about a unique manifestation, our stewards are ready to help."}),l.jsxs("div",{className:"boutique-contact-methods",children:[l.jsxs("div",{className:"contact-method-item",children:[l.jsx("div",{className:"method-icon",children:l.jsx(zd,{size:20,strokeWidth:1})}),l.jsxs("div",{className:"method-text",children:[l.jsx("h3",{children:"Electronic Mail"}),l.jsx("p",{children:"ascrystal0204@gmail.com"})]})]}),l.jsxs("div",{className:"contact-method-item",children:[l.jsx("div",{className:"method-icon",children:l.jsx(Rd,{size:20,strokeWidth:1})}),l.jsxs("div",{className:"method-text",children:[l.jsx("h3",{children:"Direct Dial"}),l.jsx("p",{children:"+1 (555) 123-4567"})]})]}),l.jsxs("div",{className:"contact-method-item",children:[l.jsx("div",{className:"method-icon",children:l.jsx(Pd,{size:20,strokeWidth:1})}),l.jsxs("div",{className:"method-text",children:[l.jsx("h3",{children:"Sacred Studio"}),l.jsx("p",{children:"123 Healing Way, Crystal Valley, CA 90210"})]})]})]}),l.jsxs("div",{className:"boutique-social-presence",children:[l.jsx("h3",{children:"Digital Footprints"}),l.jsxs("div",{className:"social-icons-row",children:[l.jsx("a",{href:"#",children:l.jsx(Cd,{size:24})}),l.jsx("a",{href:"#",children:l.jsx(Ed,{size:24})}),l.jsx("a",{href:"#",children:l.jsx(Ad,{size:24})})]})]})]}),l.jsxs("form",{className:"boutique-contact-form",children:[l.jsx("h3",{className:"form-title-serif",children:"Send Your Word"}),l.jsxs("div",{className:"form-grid-boutique",children:[l.jsxs("div",{className:"form-group-boutique",children:[l.jsx("label",{children:"First Name"}),l.jsx("input",{type:"text",placeholder:"e.g. Julian",required:!0})]}),l.jsxs("div",{className:"form-group-boutique",children:[l.jsx("label",{children:"Last Name"}),l.jsx("input",{type:"text",placeholder:"e.g. Thorne",required:!0})]}),l.jsxs("div",{className:"form-group-boutique full",children:[l.jsx("label",{children:"Email Address"}),l.jsx("input",{type:"email",placeholder:"julian@reikicrystals.com",required:!0})]}),l.jsxs("div",{className:"form-group-boutique full",children:[l.jsx("label",{children:"The Nature of Your Inquiry"}),l.jsxs("select",{className:"boutique-select",children:[l.jsx("option",{children:"General Manifestation"}),l.jsx("option",{children:"Order Sanctuary Support"}),l.jsx("option",{children:"Wholesale Partnerships"}),l.jsx("option",{children:"Bespoke Selection"})]})]}),l.jsxs("div",{className:"form-group-boutique full",children:[l.jsx("label",{children:"Your Message to Us"}),l.jsx("textarea",{rows:"5",placeholder:"Share your intentions..."})]})]}),l.jsxs("button",{type:"submit",className:"btn-luxury-submit full-width",children:["Transmit Message ",l.jsx(Eg,{size:16,style:{marginLeft:"10px"}})]})]})]})})}),l.jsxs("div",{className:"boutique-studio-image",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",alt:"Our Sacred Studio"}),l.jsx("div",{className:"studio-overlay",children:l.jsxs("div",{className:"studio-label",children:[l.jsx("span",{className:"hero-eyebrow white",children:"Our Studio"}),l.jsx("p",{children:"Crystal Valley, CA — Open Mon–Sat, 10am–6pm"})]})})]}),l.jsx("style",{jsx:"true",children:`
                .boutique-contact-hero { height: 50vh; background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070&auto=format&fit=crop'); background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center; text-align: center; }
                .hero-eyebrow.white { color: rgba(255,255,255,0.8); }
                .hero-title.white { color: white; margin: 15px 0; }
                .boutique-hero-p { max-width: 600px; margin: 0 auto; line-height: 1.6; opacity: 0.9; font-weight: 300; }

                .contact-layout-boutique { display: grid; grid-template-columns: 1fr 1.5fr; gap: 100px; align-items: start; }
                
                .section-title-serif { font-family: var(--font-serif); font-size: 3rem; color: var(--primary); margin-bottom: 30px; }
                .boutique-p { font-size: 1.1rem; line-height: 1.8; color: var(--text-light); margin-bottom: 60px; font-weight: 300; }

                .boutique-contact-methods { display: grid; gap: 40px; margin-bottom: 80px; }
                .contact-method-item { display: flex; gap: 25px; align-items: center; }
                .method-icon { width: 50px; height: 50px; border: 1px solid #F0EAE5; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--secondary); background: var(--bg-creme); }
                .method-text h3 { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); margin-bottom: 5px; }
                .method-text p { font-family: var(--font-serif); font-size: 1.2rem; color: var(--primary); font-weight: 400; }

                .boutique-social-presence h3 { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-light); margin-bottom: 25px; }
                .social-icons-row { display: flex; gap: 30px; }
                .social-icons-row a { color: var(--primary); opacity: 0.6; transition: var(--transition); }
                .social-icons-row a:hover { opacity: 1; transform: translateY(-3px); }

                .boutique-contact-form { background: white; padding: 60px; border: 1px solid #F0EAE5; box-shadow: var(--shadow-soft); }
                .form-title-serif { font-family: var(--font-serif); font-size: 2.2rem; color: var(--primary); margin-bottom: 40px; }
                .form-grid-boutique { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 50px; }
                .form-group-boutique { display: flex; flex-direction: column; gap: 10px; }
                .form-group-boutique.full { grid-column: span 2; }
                .form-group-boutique label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-light); }
                .form-group-boutique input, .boutique-select, .form-group-boutique textarea { border: none; border-bottom: 1px solid #F0EAE5; padding: 12px 0; font-size: 1rem; color: var(--primary); background: transparent; transition: var(--transition); }
                .form-group-boutique input:focus, .boutique-select:focus, .form-group-boutique textarea:focus { outline: none; border-color: var(--secondary); }
                
                .btn-luxury-submit { background: var(--primary); color: white; border: none; padding: 20px 40px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition); }
                .btn-luxury-submit:hover { background: var(--bg-dark); transform: translateY(-3px); }
                .btn-luxury-submit.full-width { width: 100%; }

                .boutique-studio-image { position: relative; height: 450px; overflow: hidden; border-top: 1px solid #F0EAE5; }
                .boutique-studio-image img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6); }
                .studio-overlay { position: absolute; inset: 0; display: flex; align-items: flex-end; padding: 60px; }
                .studio-label p { color: rgba(255,255,255,0.85); font-size: 1rem; margin-top: 8px; font-weight: 300; }
                .boutique-map-panel { background: var(--bg-creme); height: 400px; border-top: 1px solid #F0EAE5; display: flex; align-items: center; justify-content: center; }
                .map-placeholder-luxury { color: #BDC3C7; font-family: var(--font-serif); font-style: italic; font-size: 1.4rem; }

                @media (max-width: 1024px) {
                    .contact-layout-boutique { grid-template-columns: 1fr; gap: 60px; }
                    .boutique-contact-form { padding: 40px; }
                }
                @media (max-width: 576px) {
                    .form-grid-boutique { grid-template-columns: 1fr; }
                    .form-group-boutique.full { grid-column: span 1; }
                }
            `})]}),rx=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{const a=await(await fetch("/api/products")).json();t(a.filter(s=>s.category&&s.category.name==="Gifts"||s.is_featured)),n(!1)}catch(o){console.error("Error fetching products:",o),n(!1)}})()},[]),l.jsxs("div",{className:"category-page",children:[l.jsx("header",{className:"shop-hero luxury-gifts-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("span",{className:"hero-eyebrow",children:"Soulful Giving"}),l.jsx("h1",{className:"hero-title",children:"Crystal Gift Collections"}),l.jsx("p",{className:"hero-desc",children:"Thoughtfully curated sets to bring harmony, love, and protection to your loved ones."})]})}),l.jsxs("div",{className:"container section-padding",children:[l.jsxs("div",{className:"intro-text text-center mb-60",children:[l.jsx("h2",{className:"section-title-serif",children:"Perfect for Every Occasion"}),l.jsx("p",{style:{maxWidth:"700px",margin:"0 auto",color:"var(--text-light)",fontWeight:"300"},children:"Whether it's a birthday, anniversary, or a gesture of support, our crystal gifts are intentions wrapped in nature's beauty."})]}),l.jsx("div",{className:"products-grid-luxury",children:r?l.jsx("div",{className:"loading-state",children:"Wrapping intentions..."}):e.length>0?e.map(i=>l.jsx(Rt,{product:i},i.id)):l.jsx("div",{className:"no-results",children:"Our gift collection is being updated. Check back soon!"})})]}),l.jsx("style",{jsx:"true",children:`
                .luxury-gifts-hero {
                    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2070&auto=format&fit=crop') !important;
                    background-size: cover !important;
                    background-position: center !important;
                    color: white;
                }
                .luxury-gifts-hero .hero-title { color: white; }
                .luxury-gifts-hero .hero-eyebrow { color: rgba(255,255,255,0.9); }
                .luxury-gifts-hero .hero-desc { color: rgba(255,255,255,0.9); }

                .shop-hero {
                    padding: 150px 0 100px;
                    text-align: center;
                    border-bottom: 1px solid #F0EAE5;
                }
                .section-title-serif { font-family: var(--font-serif); font-size: 2.5rem; color: var(--primary); margin-bottom: 20px; }
                .mb-60 { margin-bottom: 60px; }
                .text-center { text-align: center; }
                .products-grid-luxury {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                }
                @media (max-width: 1024px) {
                    .products-grid-luxury { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .products-grid-luxury { grid-template-columns: 1fr; }
                }
            `})]})},nx=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{const a=await(await fetch("/api/products")).json();t(a.filter(s=>s.category&&s.category.name==="Vastu & Feng Shui")),n(!1)}catch(o){console.error("Error fetching products:",o),n(!1)}})()},[]),l.jsxs("div",{className:"category-page",children:[l.jsx("header",{className:"shop-hero luxury-hero-bg",children:l.jsxs("div",{className:"container",children:[l.jsx("span",{className:"hero-eyebrow",children:"Sacred Space Harmony"}),l.jsx("h1",{className:"hero-title",children:"Vastu & Feng Shui"}),l.jsx("p",{className:"hero-desc",children:"Ancient remedies and architectural alignments to harmonize your living and working environments."})]})}),l.jsxs("div",{className:"container section-padding",children:[l.jsxs("div",{className:"intro-text text-center mb-60",children:[l.jsx("h2",{className:"section-title-serif",children:"Energize Your Environment"}),l.jsx("p",{style:{maxWidth:"700px",margin:"0 auto",color:"var(--text-light)",fontWeight:"300"},children:"From salt lamps to crystal pyramids, our Vastu and Feng Shui collection is designed to correct energetic imbalances and invite abundance into your space."})]}),l.jsx("div",{className:"products-grid-luxury",children:r?l.jsx("div",{className:"loading-state",children:"Aligning energies..."}):e.length>0?e.map(i=>l.jsx(Rt,{product:i},i.id)):l.jsx("div",{className:"no-results",children:"Sacred space tools are being arriving soon."})})]}),l.jsx("style",{jsx:"true",children:`
                .luxury-hero-bg {
                    background: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://images.unsplash.com/photo-1596439535105-bb59e5504c41?q=80&w=2070&auto=format&fit=crop') !important;
                    background-size: cover !important;
                    background-position: center !important;
                }
                .shop-hero {
                    padding: 150px 0 100px;
                    text-align: center;
                    border-bottom: 1px solid #F0EAE5;
                }
                .section-title-serif { font-family: var(--font-serif); font-size: 2.5rem; color: var(--primary); margin-bottom: 20px; }
                .mb-60 { margin-bottom: 60px; }
                .text-center { text-align: center; }
                .products-grid-luxury {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                }
                @media (max-width: 1024px) {
                    .products-grid-luxury { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .products-grid-luxury { grid-template-columns: 1fr; }
                }
            `})]})},ix=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{const a=await(await fetch("/api/products")).json();t(a.filter(s=>s.category&&s.category.name==="Healing Stones")),n(!1)}catch(o){console.error("Error fetching products:",o),n(!1)}})()},[]),l.jsxs("div",{className:"category-page",children:[l.jsx("header",{className:"shop-hero luxury-stones-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("span",{className:"hero-eyebrow",children:"Ancient Wisdom"}),l.jsx("h1",{className:"hero-title",children:"Healing Stones"}),l.jsx("p",{className:"hero-desc",children:"Raw and polished gems, hand-selected for their unique vibrational properties."})]})}),l.jsxs("div",{className:"container section-padding",children:[l.jsxs("div",{className:"intro-text text-center mb-60",children:[l.jsx("h2",{className:"section-title-serif",children:"Earth's Natural Vibrations"}),l.jsx("p",{style:{maxWidth:"700px",margin:"0 auto",color:"var(--text-light)",fontWeight:"300"},children:"From grounding black tourmaline to heart-opening rose quartz, discover the perfect companion for your spiritual journey."})]}),l.jsx("div",{className:"products-grid-luxury",children:r?l.jsx("div",{className:"loading-state",children:"Cleansing stones..."}):e.length>0?e.map(i=>l.jsx(Rt,{product:i},i.id)):l.jsx("div",{className:"no-results",children:"New stones are arriving soon!"})})]}),l.jsx("style",{jsx:"true",children:`
                .luxury-stones-hero {
                    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1610450949015-c231777d5d95?q=80&w=2070&auto=format&fit=crop') !important;
                    background-size: cover !important;
                    background-position: center !important;
                    color: white;
                }
                .luxury-stones-hero .hero-title { color: white; }
                .luxury-stones-hero .hero-eyebrow { color: rgba(255,255,255,0.9); }
                .luxury-stones-hero .hero-desc { color: rgba(255,255,255,0.9); }

                .shop-hero {
                    padding: 150px 0 100px;
                    text-align: center;
                    border-bottom: 1px solid #F0EAE5;
                }
                .section-title-serif { font-family: var(--font-serif); font-size: 2.5rem; color: var(--primary); margin-bottom: 20px; }
                .mb-60 { margin-bottom: 60px; }
                .text-center { text-align: center; }
                .products-grid-luxury {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                }
                @media (max-width: 1024px) {
                    .products-grid-luxury { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .products-grid-luxury { grid-template-columns: 1fr; }
                }
            `})]})},ox=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{const a=await(await fetch("/api/products")).json();t(a.filter(s=>s.category&&s.category.name==="Reiki Tools")),n(!1)}catch(o){console.error("Error fetching products:",o),n(!1)}})()},[]),l.jsxs("div",{className:"category-page",children:[l.jsx("header",{className:"shop-hero luxury-tools-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("span",{className:"hero-eyebrow",children:"Sacred Practices"}),l.jsx("h1",{className:"hero-title",children:"Reiki Tools"}),l.jsx("p",{className:"hero-desc",children:"Professional-grade pendulums, chakra sets, and healing symbols for the modern practitioner."})]})}),l.jsxs("div",{className:"container section-padding",children:[l.jsxs("div",{className:"intro-text text-center mb-60",children:[l.jsx("h2",{className:"section-title-serif",children:"Elevate Your Practice"}),l.jsx("p",{style:{maxWidth:"700px",margin:"0 auto",color:"var(--text-light)",fontWeight:"300"},children:"Each tool is energetically cleansed and prepared specifically for lightwork, ensuring you have the highest vibration instruments for your sessions."})]}),l.jsx("div",{className:"products-grid-luxury",children:r?l.jsx("div",{className:"loading-state",children:"Tuning energies..."}):e.length>0?e.map(i=>l.jsx(Rt,{product:i},i.id)):l.jsx("div",{className:"no-results",children:"Sacred tools are being prepared."})})]}),l.jsx("style",{jsx:"true",children:`
                .luxury-tools-hero {
                    background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1590422749897-40899033321d?q=80&w=2070&auto=format&fit=crop') !important;
                    background-size: cover !important;
                    background-position: center !important;
                    color: white;
                }
                .luxury-tools-hero .hero-title { color: white; }
                .luxury-tools-hero .hero-eyebrow { color: rgba(255,255,255,0.9); }
                .luxury-tools-hero .hero-desc { color: rgba(255,255,255,0.9); }

                .shop-hero {
                    padding: 150px 0 100px;
                    text-align: center;
                    border-bottom: 1px solid #F0EAE5;
                }
                .section-title-serif { font-family: var(--font-serif); font-size: 2.5rem; color: var(--primary); margin-bottom: 20px; }
                .mb-60 { margin-bottom: 60px; }
                .text-center { text-align: center; }
                .products-grid-luxury {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                }
                @media (max-width: 1024px) {
                    .products-grid-luxury { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .products-grid-luxury { grid-template-columns: 1fr; }
                }
            `})]})},lx=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{const a=await(await fetch("/api/products")).json();t(a.filter(s=>s.category&&s.category.name==="Crystal Jewelry")),n(!1)}catch(o){console.error("Error fetching products:",o),n(!1)}})()},[]),l.jsxs("div",{className:"category-page",children:[l.jsx("header",{className:"shop-hero luxury-jewelry-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("span",{className:"hero-eyebrow",children:"Wearable Wisdom"}),l.jsx("h1",{className:"hero-title",children:"Crystal Jewelry"}),l.jsx("p",{className:"hero-desc",children:"Elegant, artisanal pieces designed to keep you in sync with Earth's natural frequency."})]})}),l.jsxs("div",{className:"container section-padding",children:[l.jsxs("div",{className:"intro-text text-center mb-60",children:[l.jsx("h2",{className:"section-title-serif",children:"Soulful Adornment"}),l.jsx("p",{style:{maxWidth:"700px",margin:"0 auto",color:"var(--text-light)",fontWeight:"300"},children:"From grounding malás to protective pendants, our jewelry collection blends aesthetic beauty with powerful spiritual intentions."})]}),l.jsx("div",{className:"products-grid-luxury",children:r?l.jsx("div",{className:"loading-state",children:"Polishing gems..."}):e.length>0?e.map(i=>l.jsx(Rt,{product:i},i.id)):l.jsx("div",{className:"no-results",children:"Our collection is being expanded."})})]}),l.jsx("style",{jsx:"true",children:`
                .luxury-jewelry-hero {
                    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=2070&auto=format&fit=crop') !important;
                    background-size: cover !important;
                    background-position: center !important;
                    color: white;
                }
                .luxury-jewelry-hero .hero-title { color: white; }
                .luxury-jewelry-hero .hero-eyebrow { color: rgba(255,255,255,0.9); }
                .luxury-jewelry-hero .hero-desc { color: rgba(255,255,255,0.9); }

                .shop-hero {
                    padding: 150px 0 100px;
                    text-align: center;
                    border-bottom: 1px solid #F0EAE5;
                }
                .section-title-serif { font-family: var(--font-serif); font-size: 2.5rem; color: var(--primary); margin-bottom: 20px; }
                .mb-60 { margin-bottom: 60px; }
                .text-center { text-align: center; }
                .products-grid-luxury {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                }
                @media (max-width: 1024px) {
                    .products-grid-luxury { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 576px) {
                    .products-grid-luxury { grid-template-columns: 1fr; }
                }
            `})]})},ax=[{title:"Reiki Level 1",desc:"Foundations of self-healing, hand positions and energetic awareness.",level:"Beginner"},{title:"Reiki Level 2",desc:"Distance healing, advanced symbols and deeper emotional healing techniques.",level:"Intermediate"},{title:"Reiki Master Healer",desc:"Master-level energetic work for committed healing practitioners.",level:"Advanced"},{title:"Reiki Master Teacher",desc:"Teaching methodology and attunement process for future Reiki teachers.",level:"Advanced"},{title:"Reiki Grand Master",desc:"Highest-level initiation for long-term dedicated Reiki path practitioners.",level:"Mastery"},{title:"Crystal Healing Workshop",desc:"Practical crystal cleansing, charging and application for life goals.",level:"Workshop"}],sx=()=>l.jsxs("div",{className:"category-page",children:[l.jsx("header",{className:"shop-hero trainings-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("span",{className:"hero-eyebrow",children:"Training & Consultancy"}),l.jsx("h1",{className:"hero-title",children:"Reiki & Crystal Learning Programs"}),l.jsx("p",{className:"hero-desc",children:"Structured programs for beginners, practitioners and advanced healers."})]})}),l.jsx("section",{className:"section-padding",children:l.jsx("div",{className:"container",children:l.jsx("div",{className:"program-grid",children:ax.map(e=>l.jsxs("article",{className:"program-card",children:[l.jsx("span",{children:e.level}),l.jsx("h3",{children:e.title}),l.jsx("p",{children:e.desc}),l.jsx("button",{className:"btn-luxury-sm",children:"Enroll Now"})]},e.title))})})}),l.jsx("style",{jsx:"true",children:`
        .shop-hero {
          padding: 150px 0 100px;
          text-align: center;
          border-bottom: 1px solid #f0eae5;
        }
        .trainings-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
            url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2000&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
        }
        .trainings-hero .hero-title,
        .trainings-hero .hero-desc {
          color: #fff;
        }

        .program-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        .program-card {
          background: #fff;
          border: 1px solid #efe7de;
          padding: 28px;
          border-radius: 6px;
          transition: var(--transition);
        }
        .program-card:hover {
          transform: translateY(-6px);
          border-color: var(--secondary);
          box-shadow: var(--shadow-soft);
        }
        .program-card span {
          font-size: 0.66rem;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          color: var(--secondary);
          font-weight: 600;
        }
        .program-card h3 {
          margin: 10px 0 8px;
          font-size: 1.3rem;
          color: var(--primary);
        }
        .program-card p {
          color: var(--text-light);
          font-size: 0.9rem;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        .btn-luxury-sm {
          background: transparent;
          border: 1px solid var(--secondary);
          color: var(--secondary);
          padding: 10px 18px;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1.6px;
          font-weight: 600;
          cursor: pointer;
        }
        .btn-luxury-sm:hover {
          background: var(--secondary);
          color: #fff;
        }
        @media (max-width: 1000px) {
          .program-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .program-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),ux=[{title:"Reiki Healing",duration:"45-60 min",desc:"Core healing session focused on chakra balancing, emotional release and energetic alignment."},{title:"Reiki Emergency Healing",duration:"30 min",desc:"Immediate support session for stress, anxiety and urgent energetic disturbances."},{title:"Reiki Personalized Healing",duration:"60 min",desc:"Customized Reiki session designed around your personal goals and current life blocks."},{title:"Crystal Healing",duration:"60 min",desc:"Crystal-assisted healing using selected stones to support grounding, clarity and vitality."},{title:"Crystal Vastu Consultation",duration:"On-site / Virtual",desc:"Guided crystal placement for home or office to improve harmony, focus and prosperity flow."},{title:"Aura Cleansing",duration:"40 min",desc:"Smoke, sound and intention-based aura cleanse to remove heavy energy and restore balance."}],cx=()=>l.jsxs("div",{className:"category-page",children:[l.jsx("header",{className:"shop-hero services-hero",children:l.jsxs("div",{className:"container",children:[l.jsx("span",{className:"hero-eyebrow",children:"Our Services"}),l.jsx("h1",{className:"hero-title",children:"Reiki & Crystal Healing Sessions"}),l.jsx("p",{className:"hero-desc",children:"Professional healing and consultation services inspired by traditional Reiki and gemstone therapy."})]})}),l.jsx("section",{className:"section-padding",children:l.jsx("div",{className:"container",children:l.jsx("div",{className:"services-grid",children:ux.map(e=>l.jsxs("article",{className:"service-card",children:[l.jsx("span",{className:"time-pill",children:e.duration}),l.jsx("h3",{children:e.title}),l.jsx("p",{children:e.desc}),l.jsx("button",{className:"btn-luxury-sm",children:"Book Now"})]},e.title))})})}),l.jsx("style",{jsx:"true",children:`
        .shop-hero {
          padding: 150px 0 100px;
          text-align: center;
          border-bottom: 1px solid #f0eae5;
        }
        .services-hero {
          background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
            url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
        }
        .services-hero .hero-title,
        .services-hero .hero-desc {
          color: #fff;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        .service-card {
          background: #fff;
          border: 1px solid #efe7de;
          border-top: 3px solid var(--secondary);
          border-radius: 6px;
          padding: 28px;
          transition: var(--transition);
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-soft);
        }
        .time-pill {
          display: inline-block;
          font-size: 0.66rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #fff;
          background: var(--primary);
          border-radius: 20px;
          padding: 5px 10px;
          margin-bottom: 14px;
        }
        .service-card h3 {
          font-size: 1.35rem;
          margin-bottom: 10px;
          color: var(--primary);
        }
        .service-card p {
          font-size: 0.9rem;
          color: var(--text-light);
          margin-bottom: 24px;
          line-height: 1.7;
        }
        .btn-luxury-sm {
          background: transparent;
          border: 1px solid var(--secondary);
          color: var(--secondary);
          padding: 10px 18px;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1.6px;
          font-weight: 600;
          cursor: pointer;
        }
        .btn-luxury-sm:hover {
          background: var(--secondary);
          color: #fff;
        }
        @media (max-width: 1000px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),dx=()=>l.jsxs("div",{className:"container section-padding",children:[l.jsx("h1",{className:"hero-title",style:{fontSize:"3rem",marginBottom:"20px"},children:"Privacy Policy"}),l.jsx("p",{style:{color:"var(--text-light)",maxWidth:"900px"},children:"We only use your information to process orders, communicate order updates, and improve your experience. Payment data is handled by secure third-party providers and is never stored on this site."})]}),px=()=>l.jsxs("div",{className:"container section-padding",children:[l.jsx("h1",{className:"hero-title",style:{fontSize:"3rem",marginBottom:"20px"},children:"Terms and Conditions"}),l.jsx("p",{style:{color:"var(--text-light)",maxWidth:"900px"},children:"By using this site, you agree to our product, payment, and shipping terms. Orders are confirmed after successful payment, and delivery estimates are provided at checkout."})]}),Hs={pending:"pending",paid:"paid",processing:"processing",shipped:"shipped",delivered:"delivered",cancelled:"cancelled",refunded:"refunded"},bo=e=>`$${Number(e||0).toFixed(2)}`,fx=e=>e?new Date(e).toLocaleString():"-",mx=()=>{const[e,t]=x.useState(""),[r,n]=x.useState([]),[i,o]=x.useState(!1),[a,s]=x.useState("");x.useEffect(()=>{const g=new URLSearchParams(window.location.search).get("email")||"",y=localStorage.getItem("as_last_order_email")||"",w=g||y;w&&(t(w),c(w))},[]);const u=x.useMemo(()=>r.reduce((d,g)=>{const y=g.status||"pending";return d[y]=(d[y]||0)+1,d},{}),[r]),c=async(d=e)=>{const g=d.trim().toLowerCase();if(!g){s("Please enter your email to view orders."),n([]);return}try{o(!0),s("");const y=await fetch(`/api/orders?email=${encodeURIComponent(g)}`),w=await y.json();if(!y.ok)throw new Error(w.error||"Unable to load orders.");n(Array.isArray(w)?w:[]),localStorage.setItem("as_last_order_email",g)}catch(y){n([]),s(y.message||"Unable to load orders.")}finally{o(!1)}},h=d=>{d.preventDefault(),c()};return l.jsxs("div",{className:"orders-page",children:[l.jsxs("div",{className:"container section-padding",children:[l.jsxs("div",{className:"orders-header",children:[l.jsx("h1",{children:"My Orders"}),l.jsx("p",{children:"Track your order status, view order details, and download invoice or packing slip."})]}),l.jsxs("form",{className:"order-search",onSubmit:h,children:[l.jsxs("div",{className:"search-input-wrap",children:[l.jsx(zi,{size:16}),l.jsx("input",{type:"email",placeholder:"Enter your checkout email",value:e,onChange:d=>t(d.target.value),required:!0})]}),l.jsx("button",{type:"submit",disabled:i,children:i?"Loading...":"View Orders"})]}),a&&l.jsx("p",{className:"orders-error",children:a}),r.length>0&&l.jsx("div",{className:"status-grid",children:Object.keys(Hs).map(d=>l.jsxs("div",{className:"status-card",children:[l.jsx("span",{children:d}),l.jsx("strong",{children:u[d]||0})]},d))}),l.jsxs("div",{className:"orders-list",children:[!i&&r.length===0&&!a&&l.jsxs("div",{className:"empty-orders",children:[l.jsx(vg,{size:24}),l.jsx("p",{children:"No orders found for this email yet."})]}),r.map(d=>l.jsxs("article",{className:"order-card",children:[l.jsxs("header",{className:"order-card-head",children:[l.jsxs("div",{children:[l.jsxs("p",{className:"order-id",children:["Order #",d.id]}),l.jsx("p",{className:"order-date",children:fx(d.created_at)})]}),l.jsx("span",{className:`order-status ${Hs[d.status]||"pending"}`,children:d.status_label||d.status})]}),l.jsxs("div",{className:"order-meta",children:[l.jsxs("p",{children:[l.jsx("strong",{children:"Total:"})," ",bo(d.total_amount)]}),l.jsxs("p",{children:[l.jsx("strong",{children:"Payment:"})," ",d.payment_method||"-"]}),l.jsxs("p",{children:[l.jsx("strong",{children:"Shipping Address:"})," ",d.shipping_address||"-"]}),Number(d.refunded_amount||0)>0&&l.jsxs("p",{children:[l.jsx("strong",{children:"Refunded:"})," ",bo(d.refunded_amount)]})]}),l.jsx("div",{className:"order-items",children:d.items.map(g=>l.jsxs("div",{className:"order-item",children:[l.jsxs("div",{className:"item-left",children:[l.jsx("span",{className:"item-name",children:g.product||"Product"}),l.jsxs("span",{className:"item-qty",children:["x",g.quantity]})]}),l.jsx("div",{className:"item-right",children:bo(g.line_total)})]},g.id))}),l.jsxs("div",{className:"order-actions",children:[l.jsxs("a",{href:d.invoice_url,className:"order-action-btn",children:[l.jsx(Ng,{size:16})," Invoice PDF"]}),l.jsxs("a",{href:d.packing_slip_url,className:"order-action-btn outline",children:[l.jsx(ug,{size:16})," Packing Slip PDF"]})]})]},d.id))]})]}),l.jsx("style",{jsx:"true",children:`
        .orders-header h1 { font-family: var(--font-serif); font-size: 2.3rem; margin-bottom: 12px; color: var(--primary); }
        .orders-header p { color: var(--text-light); max-width: 720px; margin-bottom: 30px; }
        .order-search { display: flex; gap: 14px; margin-bottom: 28px; }
        .search-input-wrap { flex: 1; display: flex; align-items: center; gap: 10px; background: white; border: 1px solid #E7DFD7; border-radius: 999px; padding: 0 16px; }
        .search-input-wrap svg { color: var(--text-light); }
        .search-input-wrap input { width: 100%; border: none; background: transparent; padding: 14px 0; font-size: 0.95rem; color: var(--primary); }
        .search-input-wrap input:focus { outline: none; }
        .order-search button { border: none; background: var(--primary); color: white; padding: 0 22px; border-radius: 999px; font-size: 0.75rem; letter-spacing: 1px; text-transform: uppercase; cursor: pointer; }
        .order-search button:disabled { opacity: 0.7; cursor: not-allowed; }
        .orders-error { color: #b3261e; margin-bottom: 15px; font-size: 0.9rem; }
        .status-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 10px; margin-bottom: 24px; }
        .status-card { background: var(--bg-creme); border: 1px solid #F0EAE5; border-radius: 8px; padding: 12px; text-align: center; }
        .status-card span { display: block; text-transform: uppercase; font-size: 0.62rem; letter-spacing: 1px; color: var(--text-light); margin-bottom: 6px; }
        .status-card strong { font-size: 1rem; color: var(--primary); }
        .orders-list { display: grid; gap: 18px; }
        .empty-orders { border: 1px dashed #D8CEC3; border-radius: 10px; padding: 40px 20px; text-align: center; color: var(--text-light); display: flex; flex-direction: column; align-items: center; gap: 12px; background: var(--bg-creme); }
        .order-card { background: white; border: 1px solid #EFE7DE; border-radius: 12px; padding: 20px; box-shadow: 0 12px 30px rgba(15, 30, 45, 0.04); }
        .order-card-head { display: flex; justify-content: space-between; gap: 16px; align-items: center; border-bottom: 1px solid #F4EEE8; padding-bottom: 14px; margin-bottom: 14px; }
        .order-id { font-size: 1.05rem; color: var(--primary); font-weight: 700; }
        .order-date { color: var(--text-light); font-size: 0.8rem; margin-top: 4px; }
        .order-status { border-radius: 999px; padding: 7px 12px; font-size: 0.67rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; }
        .order-status.pending { background: #fff4e8; color: #b26a00; }
        .order-status.paid { background: #e8f7ee; color: #216b3b; }
        .order-status.processing { background: #edf3ff; color: #1f4f8b; }
        .order-status.shipped { background: #e8f7fb; color: #0f6177; }
        .order-status.delivered { background: #e8f7ee; color: #1f7a44; }
        .order-status.cancelled { background: #fcecec; color: #a23939; }
        .order-status.refunded { background: #f2ecff; color: #5b37a8; }
        .order-meta { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 20px; margin-bottom: 16px; font-size: 0.86rem; color: var(--text-light); }
        .order-meta strong { color: var(--primary); font-weight: 600; }
        .order-items { border: 1px solid #F4EEE8; border-radius: 8px; padding: 12px; background: #fffdfa; }
        .order-item { display: flex; justify-content: space-between; gap: 8px; padding: 7px 0; border-bottom: 1px solid #f4eee8; }
        .order-item:last-child { border-bottom: none; }
        .item-left { display: flex; align-items: center; gap: 8px; min-width: 0; }
        .item-name { color: var(--primary); font-size: 0.86rem; }
        .item-qty { color: var(--text-light); font-size: 0.8rem; }
        .item-right { color: var(--text-main); font-size: 0.86rem; font-weight: 600; }
        .order-actions { margin-top: 14px; display: flex; gap: 10px; flex-wrap: wrap; }
        .order-action-btn { display: inline-flex; align-items: center; gap: 7px; text-decoration: none; border: 1px solid var(--primary); background: var(--primary); color: white; border-radius: 999px; padding: 8px 14px; font-size: 0.74rem; letter-spacing: 0.8px; text-transform: uppercase; }
        .order-action-btn.outline { background: white; color: var(--primary); }
        @media (max-width: 1100px) {
          .status-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
        @media (max-width: 768px) {
          .order-search { flex-direction: column; }
          .order-search button { padding: 13px 20px; }
          .status-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .order-meta { grid-template-columns: 1fr; }
          .order-card-head { flex-direction: column; align-items: flex-start; }
        }
      `})]})},hx=[{path:"/",title:"Home | AS Crystals"},{path:"/shop",title:"Shop | AS Crystals"},{path:"/product/:id",title:"Product Details | AS Crystals"},{path:"/cart",title:"Cart | AS Crystals"},{path:"/checkout",title:"Checkout | AS Crystals"},{path:"/orders",title:"My Orders | AS Crystals"},{path:"/about",title:"About Us | AS Crystals"},{path:"/contact",title:"Contact | AS Crystals"},{path:"/gifts",title:"Gift Sets | AS Crystals"},{path:"/remedies",title:"Remedies | AS Crystals"},{path:"/healing-stones",title:"Healing Stones | AS Crystals"},{path:"/reiki-tools",title:"Reiki Tools | AS Crystals"},{path:"/crystal-jewelry",title:"Crystal Jewelry | AS Crystals"},{path:"/trainings",title:"Trainings | AS Crystals"},{path:"/services",title:"Services | AS Crystals"},{path:"/privacy",title:"Privacy Policy | AS Crystals"},{path:"/terms",title:"Terms & Conditions | AS Crystals"}],gx=e=>{const t=hx.find(r=>mn({path:r.path,end:!0},e));document.title=(t==null?void 0:t.title)||"AS Crystals | Premium Healing Crystals & Jewelry"};function xx(){const e=He();return x.useEffect(()=>{gx(e.pathname)},[e.pathname]),l.jsxs(dh,{children:[l.jsx(te,{path:"/",element:l.jsx(Kg,{})}),l.jsx(te,{path:"/shop",element:l.jsx(Gg,{})}),l.jsx(te,{path:"/product/:id",element:l.jsx(Xg,{})}),l.jsx(te,{path:"/cart",element:l.jsx(Jg,{})}),l.jsx(te,{path:"/checkout",element:l.jsx(Zg,{})}),l.jsx(te,{path:"/orders",element:l.jsx(mx,{})}),l.jsx(te,{path:"/about",element:l.jsx(ex,{})}),l.jsx(te,{path:"/contact",element:l.jsx(tx,{})}),l.jsx(te,{path:"/gifts",element:l.jsx(rx,{})}),l.jsx(te,{path:"/remedies",element:l.jsx(nx,{})}),l.jsx(te,{path:"/healing-stones",element:l.jsx(ix,{})}),l.jsx(te,{path:"/reiki-tools",element:l.jsx(ox,{})}),l.jsx(te,{path:"/crystal-jewelry",element:l.jsx(lx,{})}),l.jsx(te,{path:"/trainings",element:l.jsx(sx,{})}),l.jsx(te,{path:"/services",element:l.jsx(cx,{})}),l.jsx(te,{path:"/privacy",element:l.jsx(dx,{})}),l.jsx(te,{path:"/terms",element:l.jsx(px,{})})]})}function yx(){const[e,t]=x.useState(!0);return x.useEffect(()=>{const r=()=>t(!1);if(document.readyState==="complete"){const n=setTimeout(r,500);return()=>clearTimeout(n)}return window.addEventListener("load",r),()=>window.removeEventListener("load",r)},[]),e?l.jsx(Hg,{}):l.jsx(qh,{children:l.jsx(Mh,{children:l.jsxs("div",{className:"app",children:[l.jsx(Ug,{}),l.jsx("main",{style:{marginTop:"160px"},children:l.jsx(xx,{})}),l.jsx(Bg,{})]})})})}Eo.createRoot(document.getElementById("root")).render(l.jsx(tp.StrictMode,{children:l.jsx(yx,{})}));
