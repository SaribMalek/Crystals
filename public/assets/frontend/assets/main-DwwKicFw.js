function qd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vs={exports:{}},Ri={},Qs={exports:{}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gn=Symbol.for("react.element"),Wd=Symbol.for("react.portal"),Bd=Symbol.for("react.fragment"),Hd=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),Qd=Symbol.for("react.provider"),Yd=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),Gd=Symbol.for("react.suspense"),Xd=Symbol.for("react.memo"),Jd=Symbol.for("react.lazy"),El=Symbol.iterator;function Zd(e){return e===null||typeof e!="object"?null:(e=El&&e[El]||e["@@iterator"],typeof e=="function"?e:null)}var Ys={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ks=Object.assign,Gs={};function Nr(e,t,r){this.props=e,this.context=t,this.refs=Gs,this.updater=r||Ys}Nr.prototype.isReactComponent={};Nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xs(){}Xs.prototype=Nr.prototype;function Sa(e,t,r){this.props=e,this.context=t,this.refs=Gs,this.updater=r||Ys}var ba=Sa.prototype=new Xs;ba.constructor=Sa;Ks(ba,Nr.prototype);ba.isPureReactComponent=!0;var zl=Array.isArray,Js=Object.prototype.hasOwnProperty,Ca={current:null},Zs={key:!0,ref:!0,__self:!0,__source:!0};function eu(e,t,r){var n,i={},a=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Js.call(t,n)&&!Zs.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:gn,type:e,key:a,ref:l,props:i,_owner:Ca.current}}function ep(e,t){return{$$typeof:gn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ea(e){return typeof e=="object"&&e!==null&&e.$$typeof===gn}function tp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Pl=/\/+/g;function Xi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tp(""+e.key):t.toString(36)}function Hn(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case gn:case Wd:l=!0}}if(l)return l=e,i=i(l),e=n===""?"."+Xi(l,0):n,zl(i)?(r="",e!=null&&(r=e.replace(Pl,"$&/")+"/"),Hn(i,t,r,"",function(c){return c})):i!=null&&(Ea(i)&&(i=ep(i,r+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Pl,"$&/")+"/")+e)),t.push(i)),1;if(l=0,n=n===""?".":n+":",zl(e))for(var s=0;s<e.length;s++){a=e[s];var u=n+Xi(a,s);l+=Hn(a,t,r,u,i)}else if(u=Zd(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=n+Xi(a,s++),l+=Hn(a,t,r,u,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function En(e,t,r){if(e==null)return e;var n=[],i=0;return Hn(e,n,"","",function(a){return t.call(r,a,i++)}),n}function rp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Vn={transition:null},np={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Vn,ReactCurrentOwner:Ca};function tu(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:En,forEach:function(e,t,r){En(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return En(e,function(){t++}),t},toArray:function(e){return En(e,function(t){return t})||[]},only:function(e){if(!Ea(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=Nr;A.Fragment=Bd;A.Profiler=Vd;A.PureComponent=Sa;A.StrictMode=Hd;A.Suspense=Gd;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=np;A.act=tu;A.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Ks({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Ca.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Js.call(t,u)&&!Zs.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];n.children=s}return{$$typeof:gn,type:e.type,key:i,ref:a,props:n,_owner:l}};A.createContext=function(e){return e={$$typeof:Yd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qd,_context:e},e.Consumer=e};A.createElement=eu;A.createFactory=function(e){var t=eu.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:Kd,render:e}};A.isValidElement=Ea;A.lazy=function(e){return{$$typeof:Jd,_payload:{_status:-1,_result:e},_init:rp}};A.memo=function(e,t){return{$$typeof:Xd,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=Vn.transition;Vn.transition={};try{e()}finally{Vn.transition=t}};A.unstable_act=tu;A.useCallback=function(e,t){return ge.current.useCallback(e,t)};A.useContext=function(e){return ge.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};A.useEffect=function(e,t){return ge.current.useEffect(e,t)};A.useId=function(){return ge.current.useId()};A.useImperativeHandle=function(e,t,r){return ge.current.useImperativeHandle(e,t,r)};A.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ge.current.useMemo(e,t)};A.useReducer=function(e,t,r){return ge.current.useReducer(e,t,r)};A.useRef=function(e){return ge.current.useRef(e)};A.useState=function(e){return ge.current.useState(e)};A.useSyncExternalStore=function(e,t,r){return ge.current.useSyncExternalStore(e,t,r)};A.useTransition=function(){return ge.current.useTransition()};A.version="18.3.1";Qs.exports=A;var x=Qs.exports;const ip=qd(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op=x,ap=Symbol.for("react.element"),lp=Symbol.for("react.fragment"),sp=Object.prototype.hasOwnProperty,up=op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cp={key:!0,ref:!0,__self:!0,__source:!0};function ru(e,t,r){var n,i={},a=null,l=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)sp.call(t,n)&&!cp.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:ap,type:e,key:a,ref:l,props:i,_owner:up.current}}Ri.Fragment=lp;Ri.jsx=ru;Ri.jsxs=ru;Vs.exports=Ri;var o=Vs.exports,zo={},nu={exports:{}},Ee={},iu={exports:{}},ou={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,T){var F=z.length;z.push(T);e:for(;0<F;){var $=F-1>>>1,J=z[$];if(0<i(J,T))z[$]=T,z[F]=J,F=$;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var T=z[0],F=z.pop();if(F!==T){z[0]=F;e:for(var $=0,J=z.length,Tt=J>>>1;$<Tt;){var Ve=2*($+1)-1,Kt=z[Ve],Qe=Ve+1,Gt=z[Qe];if(0>i(Kt,F))Qe<J&&0>i(Gt,Kt)?(z[$]=Gt,z[Qe]=F,$=Qe):(z[$]=Kt,z[Ve]=F,$=Ve);else if(Qe<J&&0>i(Gt,F))z[$]=Gt,z[Qe]=F,$=Qe;else break e}}return T}function i(z,T){var F=z.sortIndex-T.sortIndex;return F!==0?F:z.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],h=1,d=null,g=3,y=!1,v=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(z){for(var T=r(c);T!==null;){if(T.callback===null)n(c);else if(T.startTime<=z)n(c),T.sortIndex=T.expirationTime,t(u,T);else break;T=r(c)}}function k(z){if(w=!1,f(z),!v)if(r(u)!==null)v=!0,L(S);else{var T=r(c);T!==null&&oe(k,T.startTime-z)}}function S(z,T){v=!1,w&&(w=!1,m(j),j=-1),y=!0;var F=g;try{for(f(T),d=r(u);d!==null&&(!(d.expirationTime>T)||z&&!B());){var $=d.callback;if(typeof $=="function"){d.callback=null,g=d.priorityLevel;var J=$(d.expirationTime<=T);T=e.unstable_now(),typeof J=="function"?d.callback=J:d===r(u)&&n(u),f(T)}else n(u);d=r(u)}if(d!==null)var Tt=!0;else{var Ve=r(c);Ve!==null&&oe(k,Ve.startTime-T),Tt=!1}return Tt}finally{d=null,g=F,y=!1}}var E=!1,C=null,j=-1,_=5,R=-1;function B(){return!(e.unstable_now()-R<_)}function fe(){if(C!==null){var z=e.unstable_now();R=z;var T=!0;try{T=C(!0,z)}finally{T?_e():(E=!1,C=null)}}else E=!1}var _e;if(typeof p=="function")_e=function(){p(fe)};else if(typeof MessageChannel<"u"){var Yt=new MessageChannel,Cn=Yt.port2;Yt.port1.onmessage=fe,_e=function(){Cn.postMessage(null)}}else _e=function(){N(fe,0)};function L(z){C=z,E||(E=!0,_e())}function oe(z,T){j=N(function(){z(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,L(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var T=3;break;default:T=g}var F=g;g=T;try{return z()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,T){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var F=g;g=z;try{return T()}finally{g=F}},e.unstable_scheduleCallback=function(z,T,F){var $=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?$+F:$):F=$,z){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=F+J,z={id:h++,callback:T,priorityLevel:z,startTime:F,expirationTime:J,sortIndex:-1},F>$?(z.sortIndex=F,t(c,z),r(u)===null&&z===r(c)&&(w?(m(j),j=-1):w=!0,oe(k,F-$))):(z.sortIndex=J,t(u,z),v||y||(v=!0,L(S))),z},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(z){var T=g;return function(){var F=g;g=T;try{return z.apply(this,arguments)}finally{g=F}}}})(ou);iu.exports=ou;var dp=iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=x,Ce=dp;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var au=new Set,Gr={};function Vt(e,t){gr(e,t),gr(e+"Capture",t)}function gr(e,t){for(Gr[e]=t,e=0;e<t.length;e++)au.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=Object.prototype.hasOwnProperty,fp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_l={},Rl={};function mp(e){return Po.call(Rl,e)?!0:Po.call(_l,e)?!1:fp.test(e)?Rl[e]=!0:(_l[e]=!0,!1)}function hp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gp(e,t,r,n){if(t===null||typeof t>"u"||hp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,r,n,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var za=/[\-:]([a-z])/g;function Pa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(za,Pa);se[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(za,Pa);se[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(za,Pa);se[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function _a(e,t,r,n){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gp(t,r,i,n)&&(r=null),n||i===null?mp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var dt=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zn=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),Ra=Symbol.for("react.strict_mode"),_o=Symbol.for("react.profiler"),lu=Symbol.for("react.provider"),su=Symbol.for("react.context"),La=Symbol.for("react.forward_ref"),Ro=Symbol.for("react.suspense"),Lo=Symbol.for("react.suspense_list"),Ta=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),uu=Symbol.for("react.offscreen"),Ll=Symbol.iterator;function zr(e){return e===null||typeof e!="object"?null:(e=Ll&&e[Ll]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Ji;function Or(e){if(Ji===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ji=t&&t[1]||""}return`
`+Ji+e}var Zi=!1;function eo(e,t){if(!e||Zi)return"";Zi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),a=n.stack.split(`
`),l=i.length-1,s=a.length-1;1<=l&&0<=s&&i[l]!==a[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==a[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==a[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Zi=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Or(e):""}function xp(e){switch(e.tag){case 5:return Or(e.type);case 16:return Or("Lazy");case 13:return Or("Suspense");case 19:return Or("SuspenseList");case 0:case 2:case 15:return e=eo(e.type,!1),e;case 11:return e=eo(e.type.render,!1),e;case 1:return e=eo(e.type,!0),e;default:return""}}function To(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Jt:return"Portal";case _o:return"Profiler";case Ra:return"StrictMode";case Ro:return"Suspense";case Lo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case su:return(e.displayName||"Context")+".Consumer";case lu:return(e._context.displayName||"Context")+".Provider";case La:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ta:return t=e.displayName||null,t!==null?t:To(e.type)||"Memo";case ft:t=e._payload,e=e._init;try{return To(e(t))}catch{}}return null}function yp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return To(t);case 8:return t===Ra?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function cu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vp(e){var t=cu(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){n=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pn(e){e._valueTracker||(e._valueTracker=vp(e))}function du(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=cu(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fo(e,t){var r=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Tl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Et(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pu(e,t){t=t.checked,t!=null&&_a(e,"checked",t,!1)}function Mo(e,t){pu(e,t);var r=Et(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ao(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ao(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ao(e,t,r){(t!=="number"||oi(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ir=Array.isArray;function cr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Et(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Oo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ml(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(b(92));if(Ir(r)){if(1<r.length)throw Error(b(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Et(r)}}function fu(e,t){var r=Et(t.value),n=Et(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Al(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Io(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _n,hu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_n=_n||document.createElement("div"),_n.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_n.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wp=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){wp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function gu(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function xu(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=gu(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var jp=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Do(e,t){if(t){if(jp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function $o(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uo=null;function Fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qo=null,dr=null,pr=null;function Ol(e){if(e=vn(e)){if(typeof qo!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Ai(t),qo(e.stateNode,e.type,t))}}function yu(e){dr?pr?pr.push(e):pr=[e]:dr=e}function vu(){if(dr){var e=dr,t=pr;if(pr=dr=null,Ol(e),t)for(e=0;e<t.length;e++)Ol(t[e])}}function wu(e,t){return e(t)}function ju(){}var to=!1;function ku(e,t,r){if(to)return e(t,r);to=!0;try{return wu(e,t,r)}finally{to=!1,(dr!==null||pr!==null)&&(ju(),vu())}}function Jr(e,t){var r=e.stateNode;if(r===null)return null;var n=Ai(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(b(231,t,typeof r));return r}var Wo=!1;if(at)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{Wo=!1}function kp(e,t,r,n,i,a,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(h){this.onError(h)}}var qr=!1,ai=null,li=!1,Bo=null,Np={onError:function(e){qr=!0,ai=e}};function Sp(e,t,r,n,i,a,l,s,u){qr=!1,ai=null,kp.apply(Np,arguments)}function bp(e,t,r,n,i,a,l,s,u){if(Sp.apply(this,arguments),qr){if(qr){var c=ai;qr=!1,ai=null}else throw Error(b(198));li||(li=!0,Bo=c)}}function Qt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Nu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Il(e){if(Qt(e)!==e)throw Error(b(188))}function Cp(e){var t=e.alternate;if(!t){if(t=Qt(e),t===null)throw Error(b(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Il(i),e;if(a===n)return Il(i),t;a=a.sibling}throw Error(b(188))}if(r.return!==n.return)r=i,n=a;else{for(var l=!1,s=i.child;s;){if(s===r){l=!0,r=i,n=a;break}if(s===n){l=!0,n=i,r=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===r){l=!0,r=a,n=i;break}if(s===n){l=!0,n=a,r=i;break}s=s.sibling}if(!l)throw Error(b(189))}}if(r.alternate!==n)throw Error(b(190))}if(r.tag!==3)throw Error(b(188));return r.stateNode.current===r?e:t}function Su(e){return e=Cp(e),e!==null?bu(e):null}function bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bu(e);if(t!==null)return t;e=e.sibling}return null}var Cu=Ce.unstable_scheduleCallback,Dl=Ce.unstable_cancelCallback,Ep=Ce.unstable_shouldYield,zp=Ce.unstable_requestPaint,X=Ce.unstable_now,Pp=Ce.unstable_getCurrentPriorityLevel,Ma=Ce.unstable_ImmediatePriority,Eu=Ce.unstable_UserBlockingPriority,si=Ce.unstable_NormalPriority,_p=Ce.unstable_LowPriority,zu=Ce.unstable_IdlePriority,Li=null,Xe=null;function Rp(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(Li,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Fp,Lp=Math.log,Tp=Math.LN2;function Fp(e){return e>>>=0,e===0?32:31-(Lp(e)/Tp|0)|0}var Rn=64,Ln=4194304;function Dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ui(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,l=r&268435455;if(l!==0){var s=l&~i;s!==0?n=Dr(s):(a&=l,a!==0&&(n=Dr(a)))}else l=r&~i,l!==0?n=Dr(l):a!==0&&(n=Dr(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-qe(t),i=1<<r,n|=e[r],t&=~i;return n}function Mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ap(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-qe(a),s=1<<l,u=i[l];u===-1?(!(s&r)||s&n)&&(i[l]=Mp(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function Ho(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pu(){var e=Rn;return Rn<<=1,!(Rn&4194240)&&(Rn=64),e}function ro(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function xn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=r}function Op(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-qe(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function Aa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-qe(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var D=0;function _u(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ru,Oa,Lu,Tu,Fu,Vo=!1,Tn=[],vt=null,wt=null,jt=null,Zr=new Map,en=new Map,ht=[],Ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $l(e,t){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":en.delete(t.pointerId)}}function _r(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=vn(t),t!==null&&Oa(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Dp(e,t,r,n,i){switch(t){case"focusin":return vt=_r(vt,e,t,r,n,i),!0;case"dragenter":return wt=_r(wt,e,t,r,n,i),!0;case"mouseover":return jt=_r(jt,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return Zr.set(a,_r(Zr.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,en.set(a,_r(en.get(a)||null,e,t,r,n,i)),!0}return!1}function Mu(e){var t=At(e.target);if(t!==null){var r=Qt(t);if(r!==null){if(t=r.tag,t===13){if(t=Nu(r),t!==null){e.blockedOn=t,Fu(e.priority,function(){Lu(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Qo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Uo=n,r.target.dispatchEvent(n),Uo=null}else return t=vn(r),t!==null&&Oa(t),e.blockedOn=r,!1;t.shift()}return!0}function Ul(e,t,r){Qn(e)&&r.delete(t)}function $p(){Vo=!1,vt!==null&&Qn(vt)&&(vt=null),wt!==null&&Qn(wt)&&(wt=null),jt!==null&&Qn(jt)&&(jt=null),Zr.forEach(Ul),en.forEach(Ul)}function Rr(e,t){e.blockedOn===t&&(e.blockedOn=null,Vo||(Vo=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,$p)))}function tn(e){function t(i){return Rr(i,e)}if(0<Tn.length){Rr(Tn[0],e);for(var r=1;r<Tn.length;r++){var n=Tn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(vt!==null&&Rr(vt,e),wt!==null&&Rr(wt,e),jt!==null&&Rr(jt,e),Zr.forEach(t),en.forEach(t),r=0;r<ht.length;r++)n=ht[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<ht.length&&(r=ht[0],r.blockedOn===null);)Mu(r),r.blockedOn===null&&ht.shift()}var fr=dt.ReactCurrentBatchConfig,ci=!0;function Up(e,t,r,n){var i=D,a=fr.transition;fr.transition=null;try{D=1,Ia(e,t,r,n)}finally{D=i,fr.transition=a}}function qp(e,t,r,n){var i=D,a=fr.transition;fr.transition=null;try{D=4,Ia(e,t,r,n)}finally{D=i,fr.transition=a}}function Ia(e,t,r,n){if(ci){var i=Qo(e,t,r,n);if(i===null)fo(e,t,n,di,r),$l(e,n);else if(Dp(i,e,t,r,n))n.stopPropagation();else if($l(e,n),t&4&&-1<Ip.indexOf(e)){for(;i!==null;){var a=vn(i);if(a!==null&&Ru(a),a=Qo(e,t,r,n),a===null&&fo(e,t,n,di,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else fo(e,t,n,null,r)}}var di=null;function Qo(e,t,r,n){if(di=null,e=Fa(n),e=At(e),e!==null)if(t=Qt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Nu(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return di=e,null}function Au(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pp()){case Ma:return 1;case Eu:return 4;case si:case _p:return 16;case zu:return 536870912;default:return 16}default:return 16}}var xt=null,Da=null,Yn=null;function Ou(){if(Yn)return Yn;var e,t=Da,r=t.length,n,i="value"in xt?xt.value:xt.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===i[a-n];n++);return Yn=i.slice(e,1<n?1-n:void 0)}function Kn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fn(){return!0}function ql(){return!1}function ze(e){function t(r,n,i,a,l){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Fn:ql,this.isPropagationStopped=ql,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Fn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Fn)},persist:function(){},isPersistent:Fn}),t}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$a=ze(Sr),yn=K({},Sr,{view:0,detail:0}),Wp=ze(yn),no,io,Lr,Ti=K({},yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lr&&(Lr&&e.type==="mousemove"?(no=e.screenX-Lr.screenX,io=e.screenY-Lr.screenY):io=no=0,Lr=e),no)},movementY:function(e){return"movementY"in e?e.movementY:io}}),Wl=ze(Ti),Bp=K({},Ti,{dataTransfer:0}),Hp=ze(Bp),Vp=K({},yn,{relatedTarget:0}),oo=ze(Vp),Qp=K({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yp=ze(Qp),Kp=K({},Sr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gp=ze(Kp),Xp=K({},Sr,{data:0}),Bl=ze(Xp),Jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ef={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ef[e])?!!t[e]:!1}function Ua(){return tf}var rf=K({},yn,{key:function(e){if(e.key){var t=Jp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(e){return e.type==="keypress"?Kn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nf=ze(rf),of=K({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hl=ze(of),af=K({},yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),lf=ze(af),sf=K({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),uf=ze(sf),cf=K({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),df=ze(cf),pf=[9,13,27,32],qa=at&&"CompositionEvent"in window,Wr=null;at&&"documentMode"in document&&(Wr=document.documentMode);var ff=at&&"TextEvent"in window&&!Wr,Iu=at&&(!qa||Wr&&8<Wr&&11>=Wr),Vl=" ",Ql=!1;function Du(e,t){switch(e){case"keyup":return pf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $u(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var er=!1;function mf(e,t){switch(e){case"compositionend":return $u(t);case"keypress":return t.which!==32?null:(Ql=!0,Vl);case"textInput":return e=t.data,e===Vl&&Ql?null:e;default:return null}}function hf(e,t){if(er)return e==="compositionend"||!qa&&Du(e,t)?(e=Ou(),Yn=Da=xt=null,er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Iu&&t.locale!=="ko"?null:t.data;default:return null}}var gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gf[e.type]:t==="textarea"}function Uu(e,t,r,n){yu(n),t=pi(t,"onChange"),0<t.length&&(r=new $a("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Br=null,rn=null;function xf(e){Ju(e,0)}function Fi(e){var t=nr(e);if(du(t))return e}function yf(e,t){if(e==="change")return t}var qu=!1;if(at){var ao;if(at){var lo="oninput"in document;if(!lo){var Kl=document.createElement("div");Kl.setAttribute("oninput","return;"),lo=typeof Kl.oninput=="function"}ao=lo}else ao=!1;qu=ao&&(!document.documentMode||9<document.documentMode)}function Gl(){Br&&(Br.detachEvent("onpropertychange",Wu),rn=Br=null)}function Wu(e){if(e.propertyName==="value"&&Fi(rn)){var t=[];Uu(t,rn,e,Fa(e)),ku(xf,t)}}function vf(e,t,r){e==="focusin"?(Gl(),Br=t,rn=r,Br.attachEvent("onpropertychange",Wu)):e==="focusout"&&Gl()}function wf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fi(rn)}function jf(e,t){if(e==="click")return Fi(t)}function kf(e,t){if(e==="input"||e==="change")return Fi(t)}function Nf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:Nf;function nn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!Po.call(t,i)||!Be(e[i],t[i]))return!1}return!0}function Xl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jl(e,t){var r=Xl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xl(r)}}function Bu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hu(){for(var e=window,t=oi();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=oi(e.document)}return t}function Wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sf(e){var t=Hu(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Bu(r.ownerDocument.documentElement,r)){if(n!==null&&Wa(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=Jl(r,a);var l=Jl(r,n);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bf=at&&"documentMode"in document&&11>=document.documentMode,tr=null,Yo=null,Hr=null,Ko=!1;function Zl(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Ko||tr==null||tr!==oi(n)||(n=tr,"selectionStart"in n&&Wa(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Hr&&nn(Hr,n)||(Hr=n,n=pi(Yo,"onSelect"),0<n.length&&(t=new $a("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=tr)))}function Mn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var rr={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionend:Mn("Transition","TransitionEnd")},so={},Vu={};at&&(Vu=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function Mi(e){if(so[e])return so[e];if(!rr[e])return e;var t=rr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Vu)return so[e]=t[r];return e}var Qu=Mi("animationend"),Yu=Mi("animationiteration"),Ku=Mi("animationstart"),Gu=Mi("transitionend"),Xu=new Map,es="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){Xu.set(e,t),Vt(t,[e])}for(var uo=0;uo<es.length;uo++){var co=es[uo],Cf=co.toLowerCase(),Ef=co[0].toUpperCase()+co.slice(1);Pt(Cf,"on"+Ef)}Pt(Qu,"onAnimationEnd");Pt(Yu,"onAnimationIteration");Pt(Ku,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(Gu,"onTransitionEnd");gr("onMouseEnter",["mouseout","mouseover"]);gr("onMouseLeave",["mouseout","mouseover"]);gr("onPointerEnter",["pointerout","pointerover"]);gr("onPointerLeave",["pointerout","pointerover"]);Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zf=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function ts(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,bp(n,t,void 0,e),e.currentTarget=null}function Ju(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var l=n.length-1;0<=l;l--){var s=n[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==a&&i.isPropagationStopped())break e;ts(i,s,c),a=u}else for(l=0;l<n.length;l++){if(s=n[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==a&&i.isPropagationStopped())break e;ts(i,s,c),a=u}}}if(li)throw e=Bo,li=!1,Bo=null,e}function q(e,t){var r=t[ea];r===void 0&&(r=t[ea]=new Set);var n=e+"__bubble";r.has(n)||(Zu(t,e,2,!1),r.add(n))}function po(e,t,r){var n=0;t&&(n|=4),Zu(r,e,n,t)}var An="_reactListening"+Math.random().toString(36).slice(2);function on(e){if(!e[An]){e[An]=!0,au.forEach(function(r){r!=="selectionchange"&&(zf.has(r)||po(r,!1,e),po(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[An]||(t[An]=!0,po("selectionchange",!1,t))}}function Zu(e,t,r,n){switch(Au(t)){case 1:var i=Up;break;case 4:i=qp;break;default:i=Ia}r=i.bind(null,t,r,e),i=void 0,!Wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function fo(e,t,r,n,i){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=n.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=At(s),l===null)return;if(u=l.tag,u===5||u===6){n=a=l;continue e}s=s.parentNode}}n=n.return}ku(function(){var c=a,h=Fa(r),d=[];e:{var g=Xu.get(e);if(g!==void 0){var y=$a,v=e;switch(e){case"keypress":if(Kn(r)===0)break e;case"keydown":case"keyup":y=nf;break;case"focusin":v="focus",y=oo;break;case"focusout":v="blur",y=oo;break;case"beforeblur":case"afterblur":y=oo;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Wl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Hp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=lf;break;case Qu:case Yu:case Ku:y=Yp;break;case Gu:y=uf;break;case"scroll":y=Wp;break;case"wheel":y=df;break;case"copy":case"cut":case"paste":y=Gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Hl}var w=(t&4)!==0,N=!w&&e==="scroll",m=w?g!==null?g+"Capture":null:g;w=[];for(var p=c,f;p!==null;){f=p;var k=f.stateNode;if(f.tag===5&&k!==null&&(f=k,m!==null&&(k=Jr(p,m),k!=null&&w.push(an(p,k,f)))),N)break;p=p.return}0<w.length&&(g=new y(g,v,null,r,h),d.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&r!==Uo&&(v=r.relatedTarget||r.fromElement)&&(At(v)||v[lt]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=r.relatedTarget||r.toElement,y=c,v=v?At(v):null,v!==null&&(N=Qt(v),v!==N||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(w=Wl,k="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Hl,k="onPointerLeave",m="onPointerEnter",p="pointer"),N=y==null?g:nr(y),f=v==null?g:nr(v),g=new w(k,p+"leave",y,r,h),g.target=N,g.relatedTarget=f,k=null,At(h)===c&&(w=new w(m,p+"enter",v,r,h),w.target=f,w.relatedTarget=N,k=w),N=k,y&&v)t:{for(w=y,m=v,p=0,f=w;f;f=Xt(f))p++;for(f=0,k=m;k;k=Xt(k))f++;for(;0<p-f;)w=Xt(w),p--;for(;0<f-p;)m=Xt(m),f--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=Xt(w),m=Xt(m)}w=null}else w=null;y!==null&&rs(d,g,y,w,!1),v!==null&&N!==null&&rs(d,N,v,w,!0)}}e:{if(g=c?nr(c):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=yf;else if(Yl(g))if(qu)S=kf;else{S=wf;var E=vf}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=jf);if(S&&(S=S(e,c))){Uu(d,S,r,h);break e}E&&E(e,g,c),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&Ao(g,"number",g.value)}switch(E=c?nr(c):window,e){case"focusin":(Yl(E)||E.contentEditable==="true")&&(tr=E,Yo=c,Hr=null);break;case"focusout":Hr=Yo=tr=null;break;case"mousedown":Ko=!0;break;case"contextmenu":case"mouseup":case"dragend":Ko=!1,Zl(d,r,h);break;case"selectionchange":if(bf)break;case"keydown":case"keyup":Zl(d,r,h)}var C;if(qa)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else er?Du(e,r)&&(j="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(j="onCompositionStart");j&&(Iu&&r.locale!=="ko"&&(er||j!=="onCompositionStart"?j==="onCompositionEnd"&&er&&(C=Ou()):(xt=h,Da="value"in xt?xt.value:xt.textContent,er=!0)),E=pi(c,j),0<E.length&&(j=new Bl(j,e,null,r,h),d.push({event:j,listeners:E}),C?j.data=C:(C=$u(r),C!==null&&(j.data=C)))),(C=ff?mf(e,r):hf(e,r))&&(c=pi(c,"onBeforeInput"),0<c.length&&(h=new Bl("onBeforeInput","beforeinput",null,r,h),d.push({event:h,listeners:c}),h.data=C))}Ju(d,t)})}function an(e,t,r){return{instance:e,listener:t,currentTarget:r}}function pi(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Jr(e,r),a!=null&&n.unshift(an(e,a,i)),a=Jr(e,t),a!=null&&n.push(an(e,a,i))),e=e.return}return n}function Xt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rs(e,t,r,n,i){for(var a=t._reactName,l=[];r!==null&&r!==n;){var s=r,u=s.alternate,c=s.stateNode;if(u!==null&&u===n)break;s.tag===5&&c!==null&&(s=c,i?(u=Jr(r,a),u!=null&&l.unshift(an(r,u,s))):i||(u=Jr(r,a),u!=null&&l.push(an(r,u,s)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Pf=/\r\n?/g,_f=/\u0000|\uFFFD/g;function ns(e){return(typeof e=="string"?e:""+e).replace(Pf,`
`).replace(_f,"")}function On(e,t,r){if(t=ns(t),ns(e)!==t&&r)throw Error(b(425))}function fi(){}var Go=null,Xo=null;function Jo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zo=typeof setTimeout=="function"?setTimeout:void 0,Rf=typeof clearTimeout=="function"?clearTimeout:void 0,is=typeof Promise=="function"?Promise:void 0,Lf=typeof queueMicrotask=="function"?queueMicrotask:typeof is<"u"?function(e){return is.resolve(null).then(e).catch(Tf)}:Zo;function Tf(e){setTimeout(function(){throw e})}function mo(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),tn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);tn(t)}function kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function os(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),Ge="__reactFiber$"+br,ln="__reactProps$"+br,lt="__reactContainer$"+br,ea="__reactEvents$"+br,Ff="__reactListeners$"+br,Mf="__reactHandles$"+br;function At(e){var t=e[Ge];if(t)return t;for(var r=e.parentNode;r;){if(t=r[lt]||r[Ge]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=os(e);e!==null;){if(r=e[Ge])return r;e=os(e)}return t}e=r,r=e.parentNode}return null}function vn(e){return e=e[Ge]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Ai(e){return e[ln]||null}var ta=[],ir=-1;function _t(e){return{current:e}}function W(e){0>ir||(e.current=ta[ir],ta[ir]=null,ir--)}function U(e,t){ir++,ta[ir]=e.current,e.current=t}var zt={},pe=_t(zt),we=_t(!1),Ut=zt;function xr(e,t){var r=e.type.contextTypes;if(!r)return zt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function je(e){return e=e.childContextTypes,e!=null}function mi(){W(we),W(pe)}function as(e,t,r){if(pe.current!==zt)throw Error(b(168));U(pe,t),U(we,r)}function ec(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(b(108,yp(e)||"Unknown",i));return K({},r,n)}function hi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zt,Ut=pe.current,U(pe,e),U(we,we.current),!0}function ls(e,t,r){var n=e.stateNode;if(!n)throw Error(b(169));r?(e=ec(e,t,Ut),n.__reactInternalMemoizedMergedChildContext=e,W(we),W(pe),U(pe,e)):W(we),U(we,r)}var tt=null,Oi=!1,ho=!1;function tc(e){tt===null?tt=[e]:tt.push(e)}function Af(e){Oi=!0,tc(e)}function Rt(){if(!ho&&tt!==null){ho=!0;var e=0,t=D;try{var r=tt;for(D=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}tt=null,Oi=!1}catch(i){throw tt!==null&&(tt=tt.slice(e+1)),Cu(Ma,Rt),i}finally{D=t,ho=!1}}return null}var or=[],ar=0,gi=null,xi=0,Re=[],Le=0,qt=null,rt=1,nt="";function Ft(e,t){or[ar++]=xi,or[ar++]=gi,gi=e,xi=t}function rc(e,t,r){Re[Le++]=rt,Re[Le++]=nt,Re[Le++]=qt,qt=e;var n=rt;e=nt;var i=32-qe(n)-1;n&=~(1<<i),r+=1;var a=32-qe(t)+i;if(30<a){var l=i-i%5;a=(n&(1<<l)-1).toString(32),n>>=l,i-=l,rt=1<<32-qe(t)+i|r<<i|n,nt=a+e}else rt=1<<a|r<<i|n,nt=e}function Ba(e){e.return!==null&&(Ft(e,1),rc(e,1,0))}function Ha(e){for(;e===gi;)gi=or[--ar],or[ar]=null,xi=or[--ar],or[ar]=null;for(;e===qt;)qt=Re[--Le],Re[Le]=null,nt=Re[--Le],Re[Le]=null,rt=Re[--Le],Re[Le]=null}var be=null,Se=null,H=!1,Ue=null;function nc(e,t){var r=Te(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ss(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,be=e,Se=kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,be=e,Se=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=qt!==null?{id:rt,overflow:nt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Te(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,be=e,Se=null,!0):!1;default:return!1}}function ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function na(e){if(H){var t=Se;if(t){var r=t;if(!ss(e,t)){if(ra(e))throw Error(b(418));t=kt(r.nextSibling);var n=be;t&&ss(e,t)?nc(n,r):(e.flags=e.flags&-4097|2,H=!1,be=e)}}else{if(ra(e))throw Error(b(418));e.flags=e.flags&-4097|2,H=!1,be=e}}}function us(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;be=e}function In(e){if(e!==be)return!1;if(!H)return us(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jo(e.type,e.memoizedProps)),t&&(t=Se)){if(ra(e))throw ic(),Error(b(418));for(;t;)nc(e,t),t=kt(t.nextSibling)}if(us(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Se=kt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Se=null}}else Se=be?kt(e.stateNode.nextSibling):null;return!0}function ic(){for(var e=Se;e;)e=kt(e.nextSibling)}function yr(){Se=be=null,H=!1}function Va(e){Ue===null?Ue=[e]:Ue.push(e)}var Of=dt.ReactCurrentBatchConfig;function Tr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(b(309));var n=r.stateNode}if(!n)throw Error(b(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var s=i.refs;l===null?delete s[a]:s[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(b(284));if(!r._owner)throw Error(b(290,e))}return e}function Dn(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cs(e){var t=e._init;return t(e._payload)}function oc(e){function t(m,p){if(e){var f=m.deletions;f===null?(m.deletions=[p],m.flags|=16):f.push(p)}}function r(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function n(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Ct(m,p),m.index=0,m.sibling=null,m}function a(m,p,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<p?(m.flags|=2,p):f):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,p,f,k){return p===null||p.tag!==6?(p=ko(f,m.mode,k),p.return=m,p):(p=i(p,f),p.return=m,p)}function u(m,p,f,k){var S=f.type;return S===Zt?h(m,p,f.props.children,k,f.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ft&&cs(S)===p.type)?(k=i(p,f.props),k.ref=Tr(m,p,f),k.return=m,k):(k=ri(f.type,f.key,f.props,null,m.mode,k),k.ref=Tr(m,p,f),k.return=m,k)}function c(m,p,f,k){return p===null||p.tag!==4||p.stateNode.containerInfo!==f.containerInfo||p.stateNode.implementation!==f.implementation?(p=No(f,m.mode,k),p.return=m,p):(p=i(p,f.children||[]),p.return=m,p)}function h(m,p,f,k,S){return p===null||p.tag!==7?(p=$t(f,m.mode,k,S),p.return=m,p):(p=i(p,f),p.return=m,p)}function d(m,p,f){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ko(""+p,m.mode,f),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case zn:return f=ri(p.type,p.key,p.props,null,m.mode,f),f.ref=Tr(m,null,p),f.return=m,f;case Jt:return p=No(p,m.mode,f),p.return=m,p;case ft:var k=p._init;return d(m,k(p._payload),f)}if(Ir(p)||zr(p))return p=$t(p,m.mode,f,null),p.return=m,p;Dn(m,p)}return null}function g(m,p,f,k){var S=p!==null?p.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:s(m,p,""+f,k);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case zn:return f.key===S?u(m,p,f,k):null;case Jt:return f.key===S?c(m,p,f,k):null;case ft:return S=f._init,g(m,p,S(f._payload),k)}if(Ir(f)||zr(f))return S!==null?null:h(m,p,f,k,null);Dn(m,f)}return null}function y(m,p,f,k,S){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(f)||null,s(p,m,""+k,S);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case zn:return m=m.get(k.key===null?f:k.key)||null,u(p,m,k,S);case Jt:return m=m.get(k.key===null?f:k.key)||null,c(p,m,k,S);case ft:var E=k._init;return y(m,p,f,E(k._payload),S)}if(Ir(k)||zr(k))return m=m.get(f)||null,h(p,m,k,S,null);Dn(p,k)}return null}function v(m,p,f,k){for(var S=null,E=null,C=p,j=p=0,_=null;C!==null&&j<f.length;j++){C.index>j?(_=C,C=null):_=C.sibling;var R=g(m,C,f[j],k);if(R===null){C===null&&(C=_);break}e&&C&&R.alternate===null&&t(m,C),p=a(R,p,j),E===null?S=R:E.sibling=R,E=R,C=_}if(j===f.length)return r(m,C),H&&Ft(m,j),S;if(C===null){for(;j<f.length;j++)C=d(m,f[j],k),C!==null&&(p=a(C,p,j),E===null?S=C:E.sibling=C,E=C);return H&&Ft(m,j),S}for(C=n(m,C);j<f.length;j++)_=y(C,m,j,f[j],k),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?j:_.key),p=a(_,p,j),E===null?S=_:E.sibling=_,E=_);return e&&C.forEach(function(B){return t(m,B)}),H&&Ft(m,j),S}function w(m,p,f,k){var S=zr(f);if(typeof S!="function")throw Error(b(150));if(f=S.call(f),f==null)throw Error(b(151));for(var E=S=null,C=p,j=p=0,_=null,R=f.next();C!==null&&!R.done;j++,R=f.next()){C.index>j?(_=C,C=null):_=C.sibling;var B=g(m,C,R.value,k);if(B===null){C===null&&(C=_);break}e&&C&&B.alternate===null&&t(m,C),p=a(B,p,j),E===null?S=B:E.sibling=B,E=B,C=_}if(R.done)return r(m,C),H&&Ft(m,j),S;if(C===null){for(;!R.done;j++,R=f.next())R=d(m,R.value,k),R!==null&&(p=a(R,p,j),E===null?S=R:E.sibling=R,E=R);return H&&Ft(m,j),S}for(C=n(m,C);!R.done;j++,R=f.next())R=y(C,m,j,R.value,k),R!==null&&(e&&R.alternate!==null&&C.delete(R.key===null?j:R.key),p=a(R,p,j),E===null?S=R:E.sibling=R,E=R);return e&&C.forEach(function(fe){return t(m,fe)}),H&&Ft(m,j),S}function N(m,p,f,k){if(typeof f=="object"&&f!==null&&f.type===Zt&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case zn:e:{for(var S=f.key,E=p;E!==null;){if(E.key===S){if(S=f.type,S===Zt){if(E.tag===7){r(m,E.sibling),p=i(E,f.props.children),p.return=m,m=p;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ft&&cs(S)===E.type){r(m,E.sibling),p=i(E,f.props),p.ref=Tr(m,E,f),p.return=m,m=p;break e}r(m,E);break}else t(m,E);E=E.sibling}f.type===Zt?(p=$t(f.props.children,m.mode,k,f.key),p.return=m,m=p):(k=ri(f.type,f.key,f.props,null,m.mode,k),k.ref=Tr(m,p,f),k.return=m,m=k)}return l(m);case Jt:e:{for(E=f.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===f.containerInfo&&p.stateNode.implementation===f.implementation){r(m,p.sibling),p=i(p,f.children||[]),p.return=m,m=p;break e}else{r(m,p);break}else t(m,p);p=p.sibling}p=No(f,m.mode,k),p.return=m,m=p}return l(m);case ft:return E=f._init,N(m,p,E(f._payload),k)}if(Ir(f))return v(m,p,f,k);if(zr(f))return w(m,p,f,k);Dn(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,p!==null&&p.tag===6?(r(m,p.sibling),p=i(p,f),p.return=m,m=p):(r(m,p),p=ko(f,m.mode,k),p.return=m,m=p),l(m)):r(m,p)}return N}var vr=oc(!0),ac=oc(!1),yi=_t(null),vi=null,lr=null,Qa=null;function Ya(){Qa=lr=vi=null}function Ka(e){var t=yi.current;W(yi),e._currentValue=t}function ia(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function mr(e,t){vi=e,Qa=lr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ve=!0),e.firstContext=null)}function Me(e){var t=e._currentValue;if(Qa!==e)if(e={context:e,memoizedValue:t,next:null},lr===null){if(vi===null)throw Error(b(308));lr=e,vi.dependencies={lanes:0,firstContext:e}}else lr=lr.next=e;return t}var Ot=null;function Ga(e){Ot===null?Ot=[e]:Ot.push(e)}function lc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Ga(t)):(r.next=i.next,i.next=r),t.interleaved=r,st(e,n)}function st(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var mt=!1;function Xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,O&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,st(e,r)}return i=n.interleaved,i===null?(t.next=t,Ga(n)):(t.next=i.next,i.next=t),n.interleaved=t,st(e,r)}function Gn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Aa(e,r)}}function ds(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=l:a=a.next=l,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function wi(e,t,r,n){var i=e.updateQueue;mt=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?a=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(a!==null){var d=i.baseState;l=0,h=c=u=null,s=a;do{var g=s.lane,y=s.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,w=s;switch(g=t,y=r,w.tag){case 1:if(v=w.payload,typeof v=="function"){d=v.call(y,d,g);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,g=typeof v=="function"?v.call(y,d,g):v,g==null)break e;d=K({},d,g);break e;case 2:mt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[s]:g.push(s))}else y={eventTime:y,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=y,u=d):h=h.next=y,l|=g;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;g=s,s=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=d),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Bt|=l,e.lanes=l,e.memoizedState=d}}function ps(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(b(191,i));i.call(n)}}}var wn={},Je=_t(wn),sn=_t(wn),un=_t(wn);function It(e){if(e===wn)throw Error(b(174));return e}function Ja(e,t){switch(U(un,t),U(sn,e),U(Je,wn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Io(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Io(t,e)}W(Je),U(Je,t)}function wr(){W(Je),W(sn),W(un)}function uc(e){It(un.current);var t=It(Je.current),r=Io(t,e.type);t!==r&&(U(sn,e),U(Je,r))}function Za(e){sn.current===e&&(W(Je),W(sn))}var V=_t(0);function ji(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=[];function el(){for(var e=0;e<go.length;e++)go[e]._workInProgressVersionPrimary=null;go.length=0}var Xn=dt.ReactCurrentDispatcher,xo=dt.ReactCurrentBatchConfig,Wt=0,Q=null,te=null,ne=null,ki=!1,Vr=!1,cn=0,If=0;function ue(){throw Error(b(321))}function tl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Be(e[r],t[r]))return!1;return!0}function rl(e,t,r,n,i,a){if(Wt=a,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xn.current=e===null||e.memoizedState===null?qf:Wf,e=r(n,i),Vr){a=0;do{if(Vr=!1,cn=0,25<=a)throw Error(b(301));a+=1,ne=te=null,t.updateQueue=null,Xn.current=Bf,e=r(n,i)}while(Vr)}if(Xn.current=Ni,t=te!==null&&te.next!==null,Wt=0,ne=te=Q=null,ki=!1,t)throw Error(b(300));return e}function nl(){var e=cn!==0;return cn=0,e}function Ke(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Q.memoizedState=ne=e:ne=ne.next=e,ne}function Ae(){if(te===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ne===null?Q.memoizedState:ne.next;if(t!==null)ne=t,te=e;else{if(e===null)throw Error(b(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ne===null?Q.memoizedState=ne=e:ne=ne.next=e}return ne}function dn(e,t){return typeof t=="function"?t(e):t}function yo(e){var t=Ae(),r=t.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=e;var n=te,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var s=l=null,u=null,c=a;do{var h=c.lane;if((Wt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=d,l=n):u=u.next=d,Q.lanes|=h,Bt|=h}c=c.next}while(c!==null&&c!==a);u===null?l=n:u.next=s,Be(n,t.memoizedState)||(ve=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,Q.lanes|=a,Bt|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function vo(e){var t=Ae(),r=t.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);Be(a,t.memoizedState)||(ve=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function cc(){}function dc(e,t){var r=Q,n=Ae(),i=t(),a=!Be(n.memoizedState,i);if(a&&(n.memoizedState=i,ve=!0),n=n.queue,il(mc.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||ne!==null&&ne.memoizedState.tag&1){if(r.flags|=2048,pn(9,fc.bind(null,r,n,i,t),void 0,null),ie===null)throw Error(b(349));Wt&30||pc(r,t,i)}return i}function pc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function fc(e,t,r,n){t.value=r,t.getSnapshot=n,hc(t)&&gc(e)}function mc(e,t,r){return r(function(){hc(t)&&gc(e)})}function hc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Be(e,r)}catch{return!0}}function gc(e){var t=st(e,1);t!==null&&We(t,e,1,-1)}function fs(e){var t=Ke();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:e},t.queue=e,e=e.dispatch=Uf.bind(null,Q,e),[t.memoizedState,e]}function pn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function xc(){return Ae().memoizedState}function Jn(e,t,r,n){var i=Ke();Q.flags|=e,i.memoizedState=pn(1|t,r,void 0,n===void 0?null:n)}function Ii(e,t,r,n){var i=Ae();n=n===void 0?null:n;var a=void 0;if(te!==null){var l=te.memoizedState;if(a=l.destroy,n!==null&&tl(n,l.deps)){i.memoizedState=pn(t,r,a,n);return}}Q.flags|=e,i.memoizedState=pn(1|t,r,a,n)}function ms(e,t){return Jn(8390656,8,e,t)}function il(e,t){return Ii(2048,8,e,t)}function yc(e,t){return Ii(4,2,e,t)}function vc(e,t){return Ii(4,4,e,t)}function wc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jc(e,t,r){return r=r!=null?r.concat([e]):null,Ii(4,4,wc.bind(null,t,e),r)}function ol(){}function kc(e,t){var r=Ae();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&tl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Nc(e,t){var r=Ae();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&tl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Sc(e,t,r){return Wt&21?(Be(r,t)||(r=Pu(),Q.lanes|=r,Bt|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=r)}function Df(e,t){var r=D;D=r!==0&&4>r?r:4,e(!0);var n=xo.transition;xo.transition={};try{e(!1),t()}finally{D=r,xo.transition=n}}function bc(){return Ae().memoizedState}function $f(e,t,r){var n=bt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Cc(e))Ec(t,r);else if(r=lc(e,t,r,n),r!==null){var i=he();We(r,e,n,i),zc(r,t,n)}}function Uf(e,t,r){var n=bt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Cc(e))Ec(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,s=a(l,r);if(i.hasEagerState=!0,i.eagerState=s,Be(s,l)){var u=t.interleaved;u===null?(i.next=i,Ga(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=lc(e,t,i,n),r!==null&&(i=he(),We(r,e,n,i),zc(r,t,n))}}function Cc(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Ec(e,t){Vr=ki=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function zc(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Aa(e,r)}}var Ni={readContext:Me,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},qf={readContext:Me,useCallback:function(e,t){return Ke().memoizedState=[e,t===void 0?null:t],e},useContext:Me,useEffect:ms,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Jn(4194308,4,wc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Jn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jn(4,2,e,t)},useMemo:function(e,t){var r=Ke();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ke();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=$f.bind(null,Q,e),[n.memoizedState,e]},useRef:function(e){var t=Ke();return e={current:e},t.memoizedState=e},useState:fs,useDebugValue:ol,useDeferredValue:function(e){return Ke().memoizedState=e},useTransition:function(){var e=fs(!1),t=e[0];return e=Df.bind(null,e[1]),Ke().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Q,i=Ke();if(H){if(r===void 0)throw Error(b(407));r=r()}else{if(r=t(),ie===null)throw Error(b(349));Wt&30||pc(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,ms(mc.bind(null,n,a,e),[e]),n.flags|=2048,pn(9,fc.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=Ke(),t=ie.identifierPrefix;if(H){var r=nt,n=rt;r=(n&~(1<<32-qe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=cn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=If++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wf={readContext:Me,useCallback:kc,useContext:Me,useEffect:il,useImperativeHandle:jc,useInsertionEffect:yc,useLayoutEffect:vc,useMemo:Nc,useReducer:yo,useRef:xc,useState:function(){return yo(dn)},useDebugValue:ol,useDeferredValue:function(e){var t=Ae();return Sc(t,te.memoizedState,e)},useTransition:function(){var e=yo(dn)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:cc,useSyncExternalStore:dc,useId:bc,unstable_isNewReconciler:!1},Bf={readContext:Me,useCallback:kc,useContext:Me,useEffect:il,useImperativeHandle:jc,useInsertionEffect:yc,useLayoutEffect:vc,useMemo:Nc,useReducer:vo,useRef:xc,useState:function(){return vo(dn)},useDebugValue:ol,useDeferredValue:function(e){var t=Ae();return te===null?t.memoizedState=e:Sc(t,te.memoizedState,e)},useTransition:function(){var e=vo(dn)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:cc,useSyncExternalStore:dc,useId:bc,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function oa(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:K({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Di={isMounted:function(e){return(e=e._reactInternals)?Qt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=he(),i=bt(e),a=it(n,i);a.payload=t,r!=null&&(a.callback=r),t=Nt(e,a,i),t!==null&&(We(t,e,i,n),Gn(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=he(),i=bt(e),a=it(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Nt(e,a,i),t!==null&&(We(t,e,i,n),Gn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=he(),n=bt(e),i=it(r,n);i.tag=2,t!=null&&(i.callback=t),t=Nt(e,i,n),t!==null&&(We(t,e,n,r),Gn(t,e,n))}};function hs(e,t,r,n,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,l):t.prototype&&t.prototype.isPureReactComponent?!nn(r,n)||!nn(i,a):!0}function Pc(e,t,r){var n=!1,i=zt,a=t.contextType;return typeof a=="object"&&a!==null?a=Me(a):(i=je(t)?Ut:pe.current,n=t.contextTypes,a=(n=n!=null)?xr(e,i):zt),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Di,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function gs(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Di.enqueueReplaceState(t,t.state,null)}function aa(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Xa(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Me(a):(a=je(t)?Ut:pe.current,i.context=xr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(oa(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Di.enqueueReplaceState(i,i.state,null),wi(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t){try{var r="",n=t;do r+=xp(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function wo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function la(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Hf=typeof WeakMap=="function"?WeakMap:Map;function _c(e,t,r){r=it(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){bi||(bi=!0,xa=n),la(e,t)},r}function Rc(e,t,r){r=it(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){la(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){la(e,t),typeof n!="function"&&(St===null?St=new Set([this]):St.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function xs(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Hf;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=om.bind(null,e,t,r),t.then(e,e))}function ys(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vs(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=it(-1,1),t.tag=2,Nt(r,t,1))),r.lanes|=1),e)}var Vf=dt.ReactCurrentOwner,ve=!1;function me(e,t,r,n){t.child=e===null?ac(t,null,r,n):vr(t,e.child,r,n)}function ws(e,t,r,n,i){r=r.render;var a=t.ref;return mr(t,i),n=rl(e,t,r,n,a,i),r=nl(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(H&&r&&Ba(t),t.flags|=1,me(e,t,n,i),t.child)}function js(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!fl(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,Lc(e,t,a,n,i)):(e=ri(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(r=r.compare,r=r!==null?r:nn,r(l,n)&&e.ref===t.ref)return ut(e,t,i)}return t.flags|=1,e=Ct(a,n),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(nn(a,n)&&e.ref===t.ref)if(ve=!1,t.pendingProps=n=a,(e.lanes&i)!==0)e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,ut(e,t,i)}return sa(e,t,r,n,i)}function Tc(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(ur,Ne),Ne|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(ur,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,U(ur,Ne),Ne|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,U(ur,Ne),Ne|=n;return me(e,t,i,r),t.child}function Fc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function sa(e,t,r,n,i){var a=je(r)?Ut:pe.current;return a=xr(t,a),mr(t,i),r=rl(e,t,r,n,a,i),n=nl(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ut(e,t,i)):(H&&n&&Ba(t),t.flags|=1,me(e,t,r,i),t.child)}function ks(e,t,r,n,i){if(je(r)){var a=!0;hi(t)}else a=!1;if(mr(t,i),t.stateNode===null)Zn(e,t),Pc(t,r,n),aa(t,r,n,i),n=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=r.contextType;typeof c=="object"&&c!==null?c=Me(c):(c=je(r)?Ut:pe.current,c=xr(t,c));var h=r.getDerivedStateFromProps,d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==n||u!==c)&&gs(t,l,n,c),mt=!1;var g=t.memoizedState;l.state=g,wi(t,n,l,i),u=t.memoizedState,s!==n||g!==u||we.current||mt?(typeof h=="function"&&(oa(t,r,h,n),u=t.memoizedState),(s=mt||hs(t,r,s,n,g,u,c))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),l.props=n,l.state=u,l.context=c,n=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,sc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:De(t.type,s),l.props=c,d=t.pendingProps,g=l.context,u=r.contextType,typeof u=="object"&&u!==null?u=Me(u):(u=je(r)?Ut:pe.current,u=xr(t,u));var y=r.getDerivedStateFromProps;(h=typeof y=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==d||g!==u)&&gs(t,l,n,u),mt=!1,g=t.memoizedState,l.state=g,wi(t,n,l,i);var v=t.memoizedState;s!==d||g!==v||we.current||mt?(typeof y=="function"&&(oa(t,r,y,n),v=t.memoizedState),(c=mt||hs(t,r,c,n,g,v,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),l.props=n,l.state=v,l.context=u,n=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return ua(e,t,r,n,a,i)}function ua(e,t,r,n,i,a){Fc(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return i&&ls(t,r,!1),ut(e,t,a);n=t.stateNode,Vf.current=t;var s=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=vr(t,e.child,null,a),t.child=vr(t,null,s,a)):me(e,t,s,a),t.memoizedState=n.state,i&&ls(t,r,!0),t.child}function Mc(e){var t=e.stateNode;t.pendingContext?as(e,t.pendingContext,t.pendingContext!==t.context):t.context&&as(e,t.context,!1),Ja(e,t.containerInfo)}function Ns(e,t,r,n,i){return yr(),Va(i),t.flags|=256,me(e,t,r,n),t.child}var ca={dehydrated:null,treeContext:null,retryLane:0};function da(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ac(e,t,r){var n=t.pendingProps,i=V.current,a=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(V,i&1),e===null)return na(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,a?(n=t.mode,a=t.child,l={mode:"hidden",children:l},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=qi(l,n,0,null),e=$t(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=da(r),t.memoizedState=ca,e):al(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return Qf(e,t,l,n,s,i,r);if(a){a=n.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:n.children};return!(l&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=Ct(i,u),n.subtreeFlags=i.subtreeFlags&14680064),s!==null?a=Ct(s,a):(a=$t(a,l,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,l=e.child.memoizedState,l=l===null?da(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~r,t.memoizedState=ca,n}return a=e.child,e=a.sibling,n=Ct(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function al(e,t){return t=qi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $n(e,t,r,n){return n!==null&&Va(n),vr(t,e.child,null,r),e=al(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qf(e,t,r,n,i,a,l){if(r)return t.flags&256?(t.flags&=-257,n=wo(Error(b(422))),$n(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=qi({mode:"visible",children:n.children},i,0,null),a=$t(a,i,l,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&vr(t,e.child,null,l),t.child.memoizedState=da(l),t.memoizedState=ca,a);if(!(t.mode&1))return $n(e,t,l,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,a=Error(b(419)),n=wo(a,n,void 0),$n(e,t,l,n)}if(s=(l&e.childLanes)!==0,ve||s){if(n=ie,n!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,st(e,i),We(n,e,i,-1))}return pl(),n=wo(Error(b(421))),$n(e,t,l,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=am.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Se=kt(i.nextSibling),be=t,H=!0,Ue=null,e!==null&&(Re[Le++]=rt,Re[Le++]=nt,Re[Le++]=qt,rt=e.id,nt=e.overflow,qt=t),t=al(t,n.children),t.flags|=4096,t)}function Ss(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ia(e.return,t,r)}function jo(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function Oc(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(me(e,t,n.children,r),n=V.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ss(e,r,t);else if(e.tag===19)Ss(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(U(V,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&ji(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),jo(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ji(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}jo(t,!0,r,null,a);break;case"together":jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ut(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,r=Ct(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ct(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Yf(e,t,r){switch(t.tag){case 3:Mc(t),yr();break;case 5:uc(t);break;case 1:je(t.type)&&hi(t);break;case 4:Ja(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;U(yi,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(U(V,V.current&1),t.flags|=128,null):r&t.child.childLanes?Ac(e,t,r):(U(V,V.current&1),e=ut(e,t,r),e!==null?e.sibling:null);U(V,V.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Oc(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(V,V.current),n)break;return null;case 22:case 23:return t.lanes=0,Tc(e,t,r)}return ut(e,t,r)}var Ic,pa,Dc,$c;Ic=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};pa=function(){};Dc=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,It(Je.current);var a=null;switch(r){case"input":i=Fo(e,i),n=Fo(e,n),a=[];break;case"select":i=K({},i,{value:void 0}),n=K({},n,{value:void 0}),a=[];break;case"textarea":i=Oo(e,i),n=Oo(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=fi)}Do(r,n);var l;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gr.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in n){var u=n[c];if(s=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(r||(r={}),r[l]=u[l])}else r||(a||(a=[]),a.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&q("scroll",e),a||s===u||(a=[])):(a=a||[]).push(c,u))}r&&(a=a||[]).push("style",r);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};$c=function(e,t,r,n){r!==n&&(t.flags|=4)};function Fr(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Kf(e,t,r){var n=t.pendingProps;switch(Ha(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return je(t.type)&&mi(),ce(t),null;case 3:return n=t.stateNode,wr(),W(we),W(pe),el(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(In(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ue!==null&&(wa(Ue),Ue=null))),pa(e,t),ce(t),null;case 5:Za(t);var i=It(un.current);if(r=t.type,e!==null&&t.stateNode!=null)Dc(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(b(166));return ce(t),null}if(e=It(Je.current),In(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[Ge]=t,n[ln]=a,e=(t.mode&1)!==0,r){case"dialog":q("cancel",n),q("close",n);break;case"iframe":case"object":case"embed":q("load",n);break;case"video":case"audio":for(i=0;i<$r.length;i++)q($r[i],n);break;case"source":q("error",n);break;case"img":case"image":case"link":q("error",n),q("load",n);break;case"details":q("toggle",n);break;case"input":Tl(n,a),q("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},q("invalid",n);break;case"textarea":Ml(n,a),q("invalid",n)}Do(r,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="children"?typeof s=="string"?n.textContent!==s&&(a.suppressHydrationWarning!==!0&&On(n.textContent,s,e),i=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&On(n.textContent,s,e),i=["children",""+s]):Gr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&q("scroll",n)}switch(r){case"input":Pn(n),Fl(n,a,!0);break;case"textarea":Pn(n),Al(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=fi)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mu(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[Ge]=t,e[ln]=n,Ic(e,t,!1,!1),t.stateNode=e;e:{switch(l=$o(r,n),r){case"dialog":q("cancel",e),q("close",e),i=n;break;case"iframe":case"object":case"embed":q("load",e),i=n;break;case"video":case"audio":for(i=0;i<$r.length;i++)q($r[i],e);i=n;break;case"source":q("error",e),i=n;break;case"img":case"image":case"link":q("error",e),q("load",e),i=n;break;case"details":q("toggle",e),i=n;break;case"input":Tl(e,n),i=Fo(e,n),q("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=K({},n,{value:void 0}),q("invalid",e);break;case"textarea":Ml(e,n),i=Oo(e,n),q("invalid",e);break;default:i=n}Do(r,i),s=i;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?xu(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&hu(e,u)):a==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Xr(e,u):typeof u=="number"&&Xr(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Gr.hasOwnProperty(a)?u!=null&&a==="onScroll"&&q("scroll",e):u!=null&&_a(e,a,u,l))}switch(r){case"input":Pn(e),Fl(e,n,!1);break;case"textarea":Pn(e),Al(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Et(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?cr(e,!!n.multiple,a,!1):n.defaultValue!=null&&cr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=fi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)$c(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(b(166));if(r=It(un.current),It(Je.current),In(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ge]=t,(a=n.nodeValue!==r)&&(e=be,e!==null))switch(e.tag){case 3:On(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&On(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ge]=t,t.stateNode=n}return ce(t),null;case 13:if(W(V),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Se!==null&&t.mode&1&&!(t.flags&128))ic(),yr(),t.flags|=98560,a=!1;else if(a=In(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(b(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));a[Ge]=t}else yr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),a=!1}else Ue!==null&&(wa(Ue),Ue=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?re===0&&(re=3):pl())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return wr(),pa(e,t),e===null&&on(t.stateNode.containerInfo),ce(t),null;case 10:return Ka(t.type._context),ce(t),null;case 17:return je(t.type)&&mi(),ce(t),null;case 19:if(W(V),a=t.memoizedState,a===null)return ce(t),null;if(n=(t.flags&128)!==0,l=a.rendering,l===null)if(n)Fr(a,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ji(e),l!==null){for(t.flags|=128,Fr(a,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return U(V,V.current&1|2),t.child}e=e.sibling}a.tail!==null&&X()>kr&&(t.flags|=128,n=!0,Fr(a,!1),t.lanes=4194304)}else{if(!n)if(e=ji(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Fr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!H)return ce(t),null}else 2*X()-a.renderingStartTime>kr&&r!==1073741824&&(t.flags|=128,n=!0,Fr(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(r=a.last,r!==null?r.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=X(),t.sibling=null,r=V.current,U(V,n?r&1|2:r&1),t):(ce(t),null);case 22:case 23:return dl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ne&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Gf(e,t){switch(Ha(t),t.tag){case 1:return je(t.type)&&mi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),W(we),W(pe),el(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Za(t),null;case 13:if(W(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));yr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(V),null;case 4:return wr(),null;case 10:return Ka(t.type._context),null;case 22:case 23:return dl(),null;case 24:return null;default:return null}}var Un=!1,de=!1,Xf=typeof WeakSet=="function"?WeakSet:Set,P=null;function sr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){G(e,t,n)}else r.current=null}function fa(e,t,r){try{r()}catch(n){G(e,t,n)}}var bs=!1;function Jf(e,t){if(Go=ci,e=Hu(),Wa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var l=0,s=-1,u=-1,c=0,h=0,d=e,g=null;t:for(;;){for(var y;d!==r||i!==0&&d.nodeType!==3||(s=l+i),d!==a||n!==0&&d.nodeType!==3||(u=l+n),d.nodeType===3&&(l+=d.nodeValue.length),(y=d.firstChild)!==null;)g=d,d=y;for(;;){if(d===e)break t;if(g===r&&++c===i&&(s=l),g===a&&++h===n&&(u=l),(y=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=y}r=s===-1||u===-1?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xo={focusedElem:e,selectionRange:r},ci=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,N=v.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:De(t.type,w),N);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(k){G(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return v=bs,bs=!1,v}function Qr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&fa(t,r,a)}i=i.next}while(i!==n)}}function $i(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function ma(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Uc(e){var t=e.alternate;t!==null&&(e.alternate=null,Uc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[ln],delete t[ea],delete t[Ff],delete t[Mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function qc(e){return e.tag===5||e.tag===3||e.tag===4}function Cs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=fi));else if(n!==4&&(e=e.child,e!==null))for(ha(e,t,r),e=e.sibling;e!==null;)ha(e,t,r),e=e.sibling}function ga(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ga(e,t,r),e=e.sibling;e!==null;)ga(e,t,r),e=e.sibling}var ae=null,$e=!1;function pt(e,t,r){for(r=r.child;r!==null;)Wc(e,t,r),r=r.sibling}function Wc(e,t,r){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(Li,r)}catch{}switch(r.tag){case 5:de||sr(r,t);case 6:var n=ae,i=$e;ae=null,pt(e,t,r),ae=n,$e=i,ae!==null&&($e?(e=ae,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ae.removeChild(r.stateNode));break;case 18:ae!==null&&($e?(e=ae,r=r.stateNode,e.nodeType===8?mo(e.parentNode,r):e.nodeType===1&&mo(e,r),tn(e)):mo(ae,r.stateNode));break;case 4:n=ae,i=$e,ae=r.stateNode.containerInfo,$e=!0,pt(e,t,r),ae=n,$e=i;break;case 0:case 11:case 14:case 15:if(!de&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&fa(r,t,l),i=i.next}while(i!==n)}pt(e,t,r);break;case 1:if(!de&&(sr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){G(r,t,s)}pt(e,t,r);break;case 21:pt(e,t,r);break;case 22:r.mode&1?(de=(n=de)||r.memoizedState!==null,pt(e,t,r),de=n):pt(e,t,r);break;default:pt(e,t,r)}}function Es(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Xf),t.forEach(function(n){var i=lm.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Ie(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,$e=!1;break e;case 3:ae=s.stateNode.containerInfo,$e=!0;break e;case 4:ae=s.stateNode.containerInfo,$e=!0;break e}s=s.return}if(ae===null)throw Error(b(160));Wc(a,l,i),ae=null,$e=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){G(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Bc(t,e),t=t.sibling}function Bc(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ie(t,e),Ye(e),n&4){try{Qr(3,e,e.return),$i(3,e)}catch(w){G(e,e.return,w)}try{Qr(5,e,e.return)}catch(w){G(e,e.return,w)}}break;case 1:Ie(t,e),Ye(e),n&512&&r!==null&&sr(r,r.return);break;case 5:if(Ie(t,e),Ye(e),n&512&&r!==null&&sr(r,r.return),e.flags&32){var i=e.stateNode;try{Xr(i,"")}catch(w){G(e,e.return,w)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=r!==null?r.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&pu(i,a),$o(s,l);var c=$o(s,a);for(l=0;l<u.length;l+=2){var h=u[l],d=u[l+1];h==="style"?xu(i,d):h==="dangerouslySetInnerHTML"?hu(i,d):h==="children"?Xr(i,d):_a(i,h,d,c)}switch(s){case"input":Mo(i,a);break;case"textarea":fu(i,a);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?cr(i,!!a.multiple,y,!1):g!==!!a.multiple&&(a.defaultValue!=null?cr(i,!!a.multiple,a.defaultValue,!0):cr(i,!!a.multiple,a.multiple?[]:"",!1))}i[ln]=a}catch(w){G(e,e.return,w)}}break;case 6:if(Ie(t,e),Ye(e),n&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){G(e,e.return,w)}}break;case 3:if(Ie(t,e),Ye(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(w){G(e,e.return,w)}break;case 4:Ie(t,e),Ye(e);break;case 13:Ie(t,e),Ye(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(ul=X())),n&4&&Es(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(de=(c=de)||h,Ie(t,e),de=c):Ie(t,e),Ye(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(d=P=h;P!==null;){switch(g=P,y=g.child,g.tag){case 0:case 11:case 14:case 15:Qr(4,g,g.return);break;case 1:sr(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){G(n,r,w)}}break;case 5:sr(g,g.return);break;case 22:if(g.memoizedState!==null){Ps(d);continue}}y!==null?(y.return=g,P=y):Ps(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,u=d.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=gu("display",l))}catch(w){G(e,e.return,w)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){G(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ie(t,e),Ye(e),n&4&&Es(e);break;case 21:break;default:Ie(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(qc(r)){var n=r;break e}r=r.return}throw Error(b(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Xr(i,""),n.flags&=-33);var a=Cs(e);ga(e,a,i);break;case 3:case 4:var l=n.stateNode.containerInfo,s=Cs(e);ha(e,s,l);break;default:throw Error(b(161))}}catch(u){G(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zf(e,t,r){P=e,Hc(e)}function Hc(e,t,r){for(var n=(e.mode&1)!==0;P!==null;){var i=P,a=i.child;if(i.tag===22&&n){var l=i.memoizedState!==null||Un;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||de;s=Un;var c=de;if(Un=l,(de=u)&&!c)for(P=i;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?_s(i):u!==null?(u.return=l,P=u):_s(i);for(;a!==null;)P=a,Hc(a),a=a.sibling;P=i,Un=s,de=c}zs(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,P=a):zs(e)}}function zs(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||$i(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!de)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:De(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&ps(t,a,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ps(t,l,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&tn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}de||t.flags&512&&ma(t)}catch(g){G(t,t.return,g)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function Ps(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function _s(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{$i(4,t)}catch(u){G(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){G(t,i,u)}}var a=t.return;try{ma(t)}catch(u){G(t,a,u)}break;case 5:var l=t.return;try{ma(t)}catch(u){G(t,l,u)}}}catch(u){G(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var em=Math.ceil,Si=dt.ReactCurrentDispatcher,ll=dt.ReactCurrentOwner,Fe=dt.ReactCurrentBatchConfig,O=0,ie=null,ee=null,le=0,Ne=0,ur=_t(0),re=0,fn=null,Bt=0,Ui=0,sl=0,Yr=null,ye=null,ul=0,kr=1/0,et=null,bi=!1,xa=null,St=null,qn=!1,yt=null,Ci=0,Kr=0,ya=null,ei=-1,ti=0;function he(){return O&6?X():ei!==-1?ei:ei=X()}function bt(e){return e.mode&1?O&2&&le!==0?le&-le:Of.transition!==null?(ti===0&&(ti=Pu()),ti):(e=D,e!==0||(e=window.event,e=e===void 0?16:Au(e.type)),e):1}function We(e,t,r,n){if(50<Kr)throw Kr=0,ya=null,Error(b(185));xn(e,r,n),(!(O&2)||e!==ie)&&(e===ie&&(!(O&2)&&(Ui|=r),re===4&&gt(e,le)),ke(e,n),r===1&&O===0&&!(t.mode&1)&&(kr=X()+500,Oi&&Rt()))}function ke(e,t){var r=e.callbackNode;Ap(e,t);var n=ui(e,e===ie?le:0);if(n===0)r!==null&&Dl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Dl(r),t===1)e.tag===0?Af(Rs.bind(null,e)):tc(Rs.bind(null,e)),Lf(function(){!(O&6)&&Rt()}),r=null;else{switch(_u(n)){case 1:r=Ma;break;case 4:r=Eu;break;case 16:r=si;break;case 536870912:r=zu;break;default:r=si}r=Zc(r,Vc.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Vc(e,t){if(ei=-1,ti=0,O&6)throw Error(b(327));var r=e.callbackNode;if(hr()&&e.callbackNode!==r)return null;var n=ui(e,e===ie?le:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ei(e,n);else{t=n;var i=O;O|=2;var a=Yc();(ie!==e||le!==t)&&(et=null,kr=X()+500,Dt(e,t));do try{nm();break}catch(s){Qc(e,s)}while(!0);Ya(),Si.current=a,O=i,ee!==null?t=0:(ie=null,le=0,t=re)}if(t!==0){if(t===2&&(i=Ho(e),i!==0&&(n=i,t=va(e,i))),t===1)throw r=fn,Dt(e,0),gt(e,n),ke(e,X()),r;if(t===6)gt(e,n);else{if(i=e.current.alternate,!(n&30)&&!tm(i)&&(t=Ei(e,n),t===2&&(a=Ho(e),a!==0&&(n=a,t=va(e,a))),t===1))throw r=fn,Dt(e,0),gt(e,n),ke(e,X()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(b(345));case 2:Mt(e,ye,et);break;case 3:if(gt(e,n),(n&130023424)===n&&(t=ul+500-X(),10<t)){if(ui(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zo(Mt.bind(null,e,ye,et),t);break}Mt(e,ye,et);break;case 4:if(gt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var l=31-qe(n);a=1<<l,l=t[l],l>i&&(i=l),n&=~a}if(n=i,n=X()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*em(n/1960))-n,10<n){e.timeoutHandle=Zo(Mt.bind(null,e,ye,et),n);break}Mt(e,ye,et);break;case 5:Mt(e,ye,et);break;default:throw Error(b(329))}}}return ke(e,X()),e.callbackNode===r?Vc.bind(null,e):null}function va(e,t){var r=Yr;return e.current.memoizedState.isDehydrated&&(Dt(e,t).flags|=256),e=Ei(e,t),e!==2&&(t=ye,ye=r,t!==null&&wa(t)),e}function wa(e){ye===null?ye=e:ye.push.apply(ye,e)}function tm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!Be(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gt(e,t){for(t&=~sl,t&=~Ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-qe(t),n=1<<r;e[r]=-1,t&=~n}}function Rs(e){if(O&6)throw Error(b(327));hr();var t=ui(e,0);if(!(t&1))return ke(e,X()),null;var r=Ei(e,t);if(e.tag!==0&&r===2){var n=Ho(e);n!==0&&(t=n,r=va(e,n))}if(r===1)throw r=fn,Dt(e,0),gt(e,t),ke(e,X()),r;if(r===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,ye,et),ke(e,X()),null}function cl(e,t){var r=O;O|=1;try{return e(t)}finally{O=r,O===0&&(kr=X()+500,Oi&&Rt())}}function Ht(e){yt!==null&&yt.tag===0&&!(O&6)&&hr();var t=O;O|=1;var r=Fe.transition,n=D;try{if(Fe.transition=null,D=1,e)return e()}finally{D=n,Fe.transition=r,O=t,!(O&6)&&Rt()}}function dl(){Ne=ur.current,W(ur)}function Dt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Rf(r)),ee!==null)for(r=ee.return;r!==null;){var n=r;switch(Ha(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&mi();break;case 3:wr(),W(we),W(pe),el();break;case 5:Za(n);break;case 4:wr();break;case 13:W(V);break;case 19:W(V);break;case 10:Ka(n.type._context);break;case 22:case 23:dl()}r=r.return}if(ie=e,ee=e=Ct(e.current,null),le=Ne=t,re=0,fn=null,sl=Ui=Bt=0,ye=Yr=null,Ot!==null){for(t=0;t<Ot.length;t++)if(r=Ot[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var l=a.next;a.next=i,n.next=l}r.pending=n}Ot=null}return e}function Qc(e,t){do{var r=ee;try{if(Ya(),Xn.current=Ni,ki){for(var n=Q.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ki=!1}if(Wt=0,ne=te=Q=null,Vr=!1,cn=0,ll.current=null,r===null||r.return===null){re=1,fn=t,ee=null;break}e:{var a=e,l=r.return,s=r,u=t;if(t=le,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=ys(l);if(y!==null){y.flags&=-257,vs(y,l,s,a,t),y.mode&1&&xs(a,c,t),t=y,u=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(u),t.updateQueue=w}else v.add(u);break e}else{if(!(t&1)){xs(a,c,t),pl();break e}u=Error(b(426))}}else if(H&&s.mode&1){var N=ys(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),vs(N,l,s,a,t),Va(jr(u,s));break e}}a=u=jr(u,s),re!==4&&(re=2),Yr===null?Yr=[a]:Yr.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=_c(a,u,t);ds(a,m);break e;case 1:s=u;var p=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(St===null||!St.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=Rc(a,s,t);ds(a,k);break e}}a=a.return}while(a!==null)}Gc(r)}catch(S){t=S,ee===r&&r!==null&&(ee=r=r.return);continue}break}while(!0)}function Yc(){var e=Si.current;return Si.current=Ni,e===null?Ni:e}function pl(){(re===0||re===3||re===2)&&(re=4),ie===null||!(Bt&268435455)&&!(Ui&268435455)||gt(ie,le)}function Ei(e,t){var r=O;O|=2;var n=Yc();(ie!==e||le!==t)&&(et=null,Dt(e,t));do try{rm();break}catch(i){Qc(e,i)}while(!0);if(Ya(),O=r,Si.current=n,ee!==null)throw Error(b(261));return ie=null,le=0,re}function rm(){for(;ee!==null;)Kc(ee)}function nm(){for(;ee!==null&&!Ep();)Kc(ee)}function Kc(e){var t=Jc(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?Gc(e):ee=t,ll.current=null}function Gc(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Gf(r,t),r!==null){r.flags&=32767,ee=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,ee=null;return}}else if(r=Kf(r,t,Ne),r!==null){ee=r;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);re===0&&(re=5)}function Mt(e,t,r){var n=D,i=Fe.transition;try{Fe.transition=null,D=1,im(e,t,r,n)}finally{Fe.transition=i,D=n}return null}function im(e,t,r,n){do hr();while(yt!==null);if(O&6)throw Error(b(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Op(e,a),e===ie&&(ee=ie=null,le=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||qn||(qn=!0,Zc(si,function(){return hr(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Fe.transition,Fe.transition=null;var l=D;D=1;var s=O;O|=4,ll.current=null,Jf(e,r),Bc(r,e),Sf(Xo),ci=!!Go,Xo=Go=null,e.current=r,Zf(r),zp(),O=s,D=l,Fe.transition=a}else e.current=r;if(qn&&(qn=!1,yt=e,Ci=i),a=e.pendingLanes,a===0&&(St=null),Rp(r.stateNode),ke(e,X()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(bi)throw bi=!1,e=xa,xa=null,e;return Ci&1&&e.tag!==0&&hr(),a=e.pendingLanes,a&1?e===ya?Kr++:(Kr=0,ya=e):Kr=0,Rt(),null}function hr(){if(yt!==null){var e=_u(Ci),t=Fe.transition,r=D;try{if(Fe.transition=null,D=16>e?16:e,yt===null)var n=!1;else{if(e=yt,yt=null,Ci=0,O&6)throw Error(b(331));var i=O;for(O|=4,P=e.current;P!==null;){var a=P,l=a.child;if(P.flags&16){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(P=c;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:Qr(8,h,a)}var d=h.child;if(d!==null)d.return=h,P=d;else for(;P!==null;){h=P;var g=h.sibling,y=h.return;if(Uc(h),h===c){P=null;break}if(g!==null){g.return=y,P=g;break}P=y}}}var v=a.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}P=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,P=l;else e:for(;P!==null;){if(a=P,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Qr(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,P=m;break e}P=a.return}}var p=e.current;for(P=p;P!==null;){l=P;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,P=f;else e:for(l=p;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:$i(9,s)}}catch(S){G(s,s.return,S)}if(s===l){P=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,P=k;break e}P=s.return}}if(O=i,Rt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(Li,e)}catch{}n=!0}return n}finally{D=r,Fe.transition=t}}return!1}function Ls(e,t,r){t=jr(r,t),t=_c(e,t,1),e=Nt(e,t,1),t=he(),e!==null&&(xn(e,1,t),ke(e,t))}function G(e,t,r){if(e.tag===3)Ls(e,e,r);else for(;t!==null;){if(t.tag===3){Ls(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(St===null||!St.has(n))){e=jr(r,e),e=Rc(t,e,1),t=Nt(t,e,1),e=he(),t!==null&&(xn(t,1,e),ke(t,e));break}}t=t.return}}function om(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&r,ie===e&&(le&r)===r&&(re===4||re===3&&(le&130023424)===le&&500>X()-ul?Dt(e,0):sl|=r),ke(e,t)}function Xc(e,t){t===0&&(e.mode&1?(t=Ln,Ln<<=1,!(Ln&130023424)&&(Ln=4194304)):t=1);var r=he();e=st(e,t),e!==null&&(xn(e,t,r),ke(e,r))}function am(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Xc(e,r)}function lm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(b(314))}n!==null&&n.delete(t),Xc(e,r)}var Jc;Jc=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ve=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ve=!1,Yf(e,t,r);ve=!!(e.flags&131072)}else ve=!1,H&&t.flags&1048576&&rc(t,xi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Zn(e,t),e=t.pendingProps;var i=xr(t,pe.current);mr(t,r),i=rl(null,t,n,e,i,r);var a=nl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(n)?(a=!0,hi(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xa(t),i.updater=Di,t.stateNode=i,i._reactInternals=t,aa(t,n,e,r),t=ua(null,t,n,!0,a,r)):(t.tag=0,H&&a&&Ba(t),me(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Zn(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=um(n),e=De(n,e),i){case 0:t=sa(null,t,n,e,r);break e;case 1:t=ks(null,t,n,e,r);break e;case 11:t=ws(null,t,n,e,r);break e;case 14:t=js(null,t,n,De(n.type,e),r);break e}throw Error(b(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:De(n,i),sa(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:De(n,i),ks(e,t,n,i,r);case 3:e:{if(Mc(t),e===null)throw Error(b(387));n=t.pendingProps,a=t.memoizedState,i=a.element,sc(e,t),wi(t,n,null,r);var l=t.memoizedState;if(n=l.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=jr(Error(b(423)),t),t=Ns(e,t,n,r,i);break e}else if(n!==i){i=jr(Error(b(424)),t),t=Ns(e,t,n,r,i);break e}else for(Se=kt(t.stateNode.containerInfo.firstChild),be=t,H=!0,Ue=null,r=ac(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(yr(),n===i){t=ut(e,t,r);break e}me(e,t,n,r)}t=t.child}return t;case 5:return uc(t),e===null&&na(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Jo(n,i)?l=null:a!==null&&Jo(n,a)&&(t.flags|=32),Fc(e,t),me(e,t,l,r),t.child;case 6:return e===null&&na(t),null;case 13:return Ac(e,t,r);case 4:return Ja(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=vr(t,null,n,r):me(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:De(n,i),ws(e,t,n,i,r);case 7:return me(e,t,t.pendingProps,r),t.child;case 8:return me(e,t,t.pendingProps.children,r),t.child;case 12:return me(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,U(yi,n._currentValue),n._currentValue=l,a!==null)if(Be(a.value,l)){if(a.children===i.children&&!we.current){t=ut(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){l=a.child;for(var u=s.firstContext;u!==null;){if(u.context===n){if(a.tag===1){u=it(-1,r&-r),u.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}a.lanes|=r,u=a.alternate,u!==null&&(u.lanes|=r),ia(a.return,r,t),s.lanes|=r;break}u=u.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(b(341));l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),ia(l,r,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}me(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,mr(t,r),i=Me(i),n=n(i),t.flags|=1,me(e,t,n,r),t.child;case 14:return n=t.type,i=De(n,t.pendingProps),i=De(n.type,i),js(e,t,n,i,r);case 15:return Lc(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:De(n,i),Zn(e,t),t.tag=1,je(n)?(e=!0,hi(t)):e=!1,mr(t,r),Pc(t,n,i),aa(t,n,i,r),ua(null,t,n,!0,e,r);case 19:return Oc(e,t,r);case 22:return Tc(e,t,r)}throw Error(b(156,t.tag))};function Zc(e,t){return Cu(e,t)}function sm(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,t,r,n){return new sm(e,t,r,n)}function fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function um(e){if(typeof e=="function")return fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===La)return 11;if(e===Ta)return 14}return 2}function Ct(e,t){var r=e.alternate;return r===null?(r=Te(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ri(e,t,r,n,i,a){var l=2;if(n=e,typeof e=="function")fl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Zt:return $t(r.children,i,a,t);case Ra:l=8,i|=8;break;case _o:return e=Te(12,r,t,i|2),e.elementType=_o,e.lanes=a,e;case Ro:return e=Te(13,r,t,i),e.elementType=Ro,e.lanes=a,e;case Lo:return e=Te(19,r,t,i),e.elementType=Lo,e.lanes=a,e;case uu:return qi(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lu:l=10;break e;case su:l=9;break e;case La:l=11;break e;case Ta:l=14;break e;case ft:l=16,n=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Te(l,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function $t(e,t,r,n){return e=Te(7,e,n,t),e.lanes=r,e}function qi(e,t,r,n){return e=Te(22,e,n,t),e.elementType=uu,e.lanes=r,e.stateNode={isHidden:!1},e}function ko(e,t,r){return e=Te(6,e,null,t),e.lanes=r,e}function No(e,t,r){return t=Te(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cm(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ro(0),this.expirationTimes=ro(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ro(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ml(e,t,r,n,i,a,l,s,u){return e=new cm(e,t,r,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Te(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xa(a),e}function dm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ed(e){if(!e)return zt;e=e._reactInternals;e:{if(Qt(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var r=e.type;if(je(r))return ec(e,r,t)}return t}function td(e,t,r,n,i,a,l,s,u){return e=ml(r,n,!0,e,i,a,l,s,u),e.context=ed(null),r=e.current,n=he(),i=bt(r),a=it(n,i),a.callback=t??null,Nt(r,a,i),e.current.lanes=i,xn(e,i,n),ke(e,n),e}function Wi(e,t,r,n){var i=t.current,a=he(),l=bt(i);return r=ed(r),t.context===null?t.context=r:t.pendingContext=r,t=it(a,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Nt(i,t,l),e!==null&&(We(e,i,l,a),Gn(e,i,l)),l}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ts(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function hl(e,t){Ts(e,t),(e=e.alternate)&&Ts(e,t)}function pm(){return null}var rd=typeof reportError=="function"?reportError:function(e){console.error(e)};function gl(e){this._internalRoot=e}Bi.prototype.render=gl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Wi(e,t,null,null)};Bi.prototype.unmount=gl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ht(function(){Wi(null,e,null,null)}),t[lt]=null}};function Bi(e){this._internalRoot=e}Bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tu();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ht.length&&t!==0&&t<ht[r].priority;r++);ht.splice(r,0,e),r===0&&Mu(e)}};function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fs(){}function fm(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var c=zi(l);a.call(c)}}var l=td(t,n,e,0,null,!1,!1,"",Fs);return e._reactRootContainer=l,e[lt]=l.current,on(e.nodeType===8?e.parentNode:e),Ht(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var s=n;n=function(){var c=zi(u);s.call(c)}}var u=ml(e,0,!1,null,null,!1,!1,"",Fs);return e._reactRootContainer=u,e[lt]=u.current,on(e.nodeType===8?e.parentNode:e),Ht(function(){Wi(t,u,r,n)}),u}function Vi(e,t,r,n,i){var a=r._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var s=i;i=function(){var u=zi(l);s.call(u)}}Wi(t,l,e,i)}else l=fm(r,t,e,i,n);return zi(l)}Ru=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Dr(t.pendingLanes);r!==0&&(Aa(t,r|1),ke(t,X()),!(O&6)&&(kr=X()+500,Rt()))}break;case 13:Ht(function(){var n=st(e,1);if(n!==null){var i=he();We(n,e,1,i)}}),hl(e,1)}};Oa=function(e){if(e.tag===13){var t=st(e,134217728);if(t!==null){var r=he();We(t,e,134217728,r)}hl(e,134217728)}};Lu=function(e){if(e.tag===13){var t=bt(e),r=st(e,t);if(r!==null){var n=he();We(r,e,t,n)}hl(e,t)}};Tu=function(){return D};Fu=function(e,t){var r=D;try{return D=e,t()}finally{D=r}};qo=function(e,t,r){switch(t){case"input":if(Mo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Ai(n);if(!i)throw Error(b(90));du(n),Mo(n,i)}}}break;case"textarea":fu(e,r);break;case"select":t=r.value,t!=null&&cr(e,!!r.multiple,t,!1)}};wu=cl;ju=Ht;var mm={usingClientEntryPoint:!1,Events:[vn,nr,Ai,yu,vu,cl]},Mr={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hm={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Su(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||pm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wn.isDisabled&&Wn.supportsFiber)try{Li=Wn.inject(hm),Xe=Wn}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;Ee.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xl(t))throw Error(b(200));return dm(e,t,null,r)};Ee.createRoot=function(e,t){if(!xl(e))throw Error(b(299));var r=!1,n="",i=rd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ml(e,1,!1,null,null,r,!1,n,i),e[lt]=t.current,on(e.nodeType===8?e.parentNode:e),new gl(t)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Su(t),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Ht(e)};Ee.hydrate=function(e,t,r){if(!Hi(t))throw Error(b(200));return Vi(null,e,t,!0,r)};Ee.hydrateRoot=function(e,t,r){if(!xl(e))throw Error(b(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",l=rd;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=td(t,null,e,1,r??null,i,!1,a,l),e[lt]=t.current,on(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Bi(t)};Ee.render=function(e,t,r){if(!Hi(t))throw Error(b(200));return Vi(null,e,t,!1,r)};Ee.unmountComponentAtNode=function(e){if(!Hi(e))throw Error(b(40));return e._reactRootContainer?(Ht(function(){Vi(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1};Ee.unstable_batchedUpdates=cl;Ee.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Hi(r))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Vi(e,t,r,!1,n)};Ee.version="18.3.1-next-f1338f8080-20240426";function nd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nd)}catch(e){console.error(e)}}nd(),nu.exports=Ee;var gm=nu.exports,Ms=gm;zo.createRoot=Ms.createRoot,zo.hydrateRoot=Ms.hydrateRoot;/**
 * react-router v7.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var As="popstate";function xm(e={}){function t(n,i){let{pathname:a,search:l,hash:s}=n.location;return ja("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:mn(i)}return vm(t,r,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function He(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ym(){return Math.random().toString(36).substring(2,10)}function Os(e,t){return{usr:e.state,key:e.key,idx:t}}function ja(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Cr(t):t,state:r,key:t&&t.key||n||ym()}}function mn({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Cr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function vm(e,t,r,n={}){let{window:i=document.defaultView,v5Compat:a=!1}=n,l=i.history,s="POP",u=null,c=h();c==null&&(c=0,l.replaceState({...l.state,idx:c},""));function h(){return(l.state||{idx:null}).idx}function d(){s="POP";let N=h(),m=N==null?null:N-c;c=N,u&&u({action:s,location:w.location,delta:m})}function g(N,m){s="PUSH";let p=ja(w.location,N,m);c=h()+1;let f=Os(p,c),k=w.createHref(p);try{l.pushState(f,"",k)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(k)}a&&u&&u({action:s,location:w.location,delta:1})}function y(N,m){s="REPLACE";let p=ja(w.location,N,m);c=h();let f=Os(p,c),k=w.createHref(p);l.replaceState(f,"",k),a&&u&&u({action:s,location:w.location,delta:0})}function v(N){return wm(N)}let w={get action(){return s},get location(){return e(i,l)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(As,d),u=N,()=>{i.removeEventListener(As,d),u=null}},createHref(N){return t(i,N)},createURL:v,encodeLocation(N){let m=v(N);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:y,go(N){return l.go(N)}};return w}function wm(e,t=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Y(r,"No window.location.(origin|href) available to create URL");let n=typeof e=="string"?e:mn(e);return n=n.replace(/ $/,"%20"),!t&&n.startsWith("//")&&(n=r+n),new URL(n,r)}function id(e,t,r="/"){return jm(e,t,r,!1)}function jm(e,t,r,n){let i=typeof t=="string"?Cr(t):t,a=ct(i.pathname||"/",r);if(a==null)return null;let l=od(e);km(l);let s=null;for(let u=0;s==null&&u<l.length;++u){let c=Tm(a);s=Rm(l[u],c,n)}return s}function od(e,t=[],r=[],n="",i=!1){let a=(l,s,u=i,c)=>{let h={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(n)&&u)return;Y(h.relativePath.startsWith(n),`Absolute route path "${h.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(n.length)}let d=ot([n,h.relativePath]),g=r.concat(h);l.children&&l.children.length>0&&(Y(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),od(l.children,t,g,d,u)),!(l.path==null&&!l.index)&&t.push({path:d,score:Pm(d,l.index),routesMeta:g})};return e.forEach((l,s)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))a(l,s);else for(let c of ad(l.path))a(l,s,!0,c)}),t}function ad(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return i?[a,""]:[a];let l=ad(n.join("/")),s=[];return s.push(...l.map(u=>u===""?a:[a,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function km(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:_m(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var Nm=/^:[\w-]+$/,Sm=3,bm=2,Cm=1,Em=10,zm=-2,Is=e=>e==="*";function Pm(e,t){let r=e.split("/"),n=r.length;return r.some(Is)&&(n+=zm),t&&(n+=bm),r.filter(i=>!Is(i)).reduce((i,a)=>i+(Nm.test(a)?Sm:a===""?Cm:Em),n)}function _m(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function Rm(e,t,r=!1){let{routesMeta:n}=e,i={},a="/",l=[];for(let s=0;s<n.length;++s){let u=n[s],c=s===n.length-1,h=a==="/"?t:t.slice(a.length)||"/",d=hn({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!d&&c&&r&&!n[n.length-1].route.index&&(d=hn({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),l.push({params:i,pathname:ot([a,d.pathname]),pathnameBase:Om(ot([a,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(a=ot([a,d.pathnameBase]))}return l}function hn(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Lm(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.reduce((c,{paramName:h,isOptional:d},g)=>{if(h==="*"){let v=s[g]||"";l=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const y=s[g];return d&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:l,pattern:e}}function Lm(e,t=!1,r=!0){He(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(n.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function Tm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return He(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ct(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}var ld=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fm=e=>ld.test(e);function Mm(e,t="/"){let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?Cr(e):e,a;if(r)if(Fm(r))a=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),He(!1,`Pathnames cannot have embedded double slashes - normalizing ${l} -> ${r}`)}r.startsWith("/")?a=Ds(r.substring(1),"/"):a=Ds(r,t)}else a=t;return{pathname:a,search:Im(n),hash:Dm(i)}}function Ds(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function So(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Am(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function sd(e){let t=Am(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function ud(e,t,r,n=!1){let i;typeof e=="string"?i=Cr(e):(i={...e},Y(!i.pathname||!i.pathname.includes("?"),So("?","pathname","search",i)),Y(!i.pathname||!i.pathname.includes("#"),So("#","pathname","hash",i)),Y(!i.search||!i.search.includes("#"),So("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,s;if(l==null)s=r;else{let d=t.length-1;if(!n&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}s=d>=0?t[d]:"/"}let u=Mm(i,s),c=l&&l!=="/"&&l.endsWith("/"),h=(a||l===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}var ot=e=>e.join("/").replace(/\/\/+/g,"/"),Om=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Im=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Dm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,$m=class{constructor(e,t,r,n=!1){this.status=e,this.statusText=t||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Um(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function qm(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var cd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function dd(e,t){let r=e;if(typeof r!="string"||!ld.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let n=r,i=!1;if(cd)try{let a=new URL(window.location.href),l=r.startsWith("//")?new URL(a.protocol+r):new URL(r),s=ct(l.pathname,t);l.origin===a.origin&&s!=null?r=s+l.search+l.hash:i=!0}catch{He(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:i,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var pd=["POST","PUT","PATCH","DELETE"];new Set(pd);var Wm=["GET",...pd];new Set(Wm);var Er=x.createContext(null);Er.displayName="DataRouter";var Qi=x.createContext(null);Qi.displayName="DataRouterState";var Bm=x.createContext(!1),fd=x.createContext({isTransitioning:!1});fd.displayName="ViewTransition";var Hm=x.createContext(new Map);Hm.displayName="Fetchers";var Vm=x.createContext(null);Vm.displayName="Await";var Oe=x.createContext(null);Oe.displayName="Navigation";var jn=x.createContext(null);jn.displayName="Location";var Ze=x.createContext({outlet:null,matches:[],isDataRoute:!1});Ze.displayName="Route";var yl=x.createContext(null);yl.displayName="RouteError";var md="REACT_ROUTER_ERROR",Qm="REDIRECT",Ym="ROUTE_ERROR_RESPONSE";function Km(e){if(e.startsWith(`${md}:${Qm}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Gm(e){if(e.startsWith(`${md}:${Ym}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new $m(t.status,t.statusText,t.data)}catch{}}function Xm(e,{relative:t}={}){Y(kn(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=x.useContext(Oe),{hash:i,pathname:a,search:l}=Nn(e,{relative:t}),s=a;return r!=="/"&&(s=a==="/"?r:ot([r,a])),n.createHref({pathname:s,search:l,hash:i})}function kn(){return x.useContext(jn)!=null}function Pe(){return Y(kn(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(jn).location}var hd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function gd(e){x.useContext(Oe).static||x.useLayoutEffect(e)}function Yi(){let{isDataRoute:e}=x.useContext(Ze);return e?dh():Jm()}function Jm(){Y(kn(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(Er),{basename:t,navigator:r}=x.useContext(Oe),{matches:n}=x.useContext(Ze),{pathname:i}=Pe(),a=JSON.stringify(sd(n)),l=x.useRef(!1);return gd(()=>{l.current=!0}),x.useCallback((u,c={})=>{if(He(l.current,hd),!l.current)return;if(typeof u=="number"){r.go(u);return}let h=ud(u,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:ot([t,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[t,r,a,i,e])}x.createContext(null);function Zm(){let{matches:e}=x.useContext(Ze),t=e[e.length-1];return t?t.params:{}}function Nn(e,{relative:t}={}){let{matches:r}=x.useContext(Ze),{pathname:n}=Pe(),i=JSON.stringify(sd(r));return x.useMemo(()=>ud(e,JSON.parse(i),n,t==="path"),[e,i,n,t])}function eh(e,t){return xd(e,t)}function xd(e,t,r,n,i){var p;Y(kn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=x.useContext(Oe),{matches:l}=x.useContext(Ze),s=l[l.length-1],u=s?s.params:{},c=s?s.pathname:"/",h=s?s.pathnameBase:"/",d=s&&s.route;{let f=d&&d.path||"";vd(c,!d||f.endsWith("*")||f.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${f}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${f}"> to <Route path="${f==="/"?"*":`${f}/*`}">.`)}let g=Pe(),y;if(t){let f=typeof t=="string"?Cr(t):t;Y(h==="/"||((p=f.pathname)==null?void 0:p.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${f.pathname}" was given in the \`location\` prop.`),y=f}else y=g;let v=y.pathname||"/",w=v;if(h!=="/"){let f=h.replace(/^\//,"").split("/");w="/"+v.replace(/^\//,"").split("/").slice(f.length).join("/")}let N=id(e,{pathname:w});He(d||N!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),He(N==null||N[N.length-1].route.element!==void 0||N[N.length-1].route.Component!==void 0||N[N.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let m=oh(N&&N.map(f=>Object.assign({},f,{params:Object.assign({},u,f.params),pathname:ot([h,a.encodeLocation?a.encodeLocation(f.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathname]),pathnameBase:f.pathnameBase==="/"?h:ot([h,a.encodeLocation?a.encodeLocation(f.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:f.pathnameBase])})),l,r,n,i);return t&&m?x.createElement(jn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},m):m}function th(){let e=ch(),t=Um(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},a={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:a},"ErrorBoundary")," or"," ",x.createElement("code",{style:a},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),r?x.createElement("pre",{style:i},r):null,l)}var rh=x.createElement(th,null),yd=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const r=Gm(e.digest);r&&(e=r)}let t=e!==void 0?x.createElement(Ze.Provider,{value:this.props.routeContext},x.createElement(yl.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?x.createElement(nh,{error:e},t):t}};yd.contextType=Bm;var bo=new WeakMap;function nh({children:e,error:t}){let{basename:r}=x.useContext(Oe);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let n=Km(t.digest);if(n){let i=bo.get(t);if(i)throw i;let a=dd(n.location,r);if(cd&&!bo.get(t))if(a.isExternal||n.reloadDocument)window.location.href=a.absoluteURL||a.to;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(a.to,{replace:n.replace}));throw bo.set(t,l),l}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${a.absoluteURL||a.to}`})}}return e}function ih({routeContext:e,match:t,children:r}){let n=x.useContext(Er);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Ze.Provider,{value:e},r)}function oh(e,t=[],r=null,n=null,i=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,l=r==null?void 0:r.errors;if(l!=null){let h=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);Y(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let s=!1,u=-1;if(r)for(let h=0;h<a.length;h++){let d=a[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:g,errors:y}=r,v=d.route.loader&&!g.hasOwnProperty(d.route.id)&&(!y||y[d.route.id]===void 0);if(d.route.lazy||v){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}let c=r&&n?(h,d)=>{var g,y;n(h,{location:r.location,params:((y=(g=r.matches)==null?void 0:g[0])==null?void 0:y.params)??{},unstable_pattern:qm(r.matches),errorInfo:d})}:void 0;return a.reduceRight((h,d,g)=>{let y,v=!1,w=null,N=null;r&&(y=l&&d.route.id?l[d.route.id]:void 0,w=d.route.errorElement||rh,s&&(u<0&&g===0?(vd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,N=null):u===g&&(v=!0,N=d.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,g+1)),p=()=>{let f;return y?f=w:v?f=N:d.route.Component?f=x.createElement(d.route.Component,null):d.route.element?f=d.route.element:f=h,x.createElement(ih,{match:d,routeContext:{outlet:h,matches:m,isDataRoute:r!=null},children:f})};return r&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?x.createElement(yd,{location:r.location,revalidation:r.revalidation,component:w,error:y,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:c}):p()},null)}function vl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ah(e){let t=x.useContext(Er);return Y(t,vl(e)),t}function lh(e){let t=x.useContext(Qi);return Y(t,vl(e)),t}function sh(e){let t=x.useContext(Ze);return Y(t,vl(e)),t}function wl(e){let t=sh(e),r=t.matches[t.matches.length-1];return Y(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function uh(){return wl("useRouteId")}function ch(){var n;let e=x.useContext(yl),t=lh("useRouteError"),r=wl("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function dh(){let{router:e}=ah("useNavigate"),t=wl("useNavigate"),r=x.useRef(!1);return gd(()=>{r.current=!0}),x.useCallback(async(i,a={})=>{He(r.current,hd),r.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...a}))},[e,t])}var $s={};function vd(e,t,r){!t&&!$s[e]&&($s[e]=!0,He(!1,r))}x.memo(ph);function ph({routes:e,future:t,state:r,onError:n}){return xd(e,void 0,r,n,t)}function Z(e){Y(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fh({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:i,static:a=!1,unstable_useTransitions:l}){Y(!kn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:l,future:{}}),[s,i,a,l]);typeof r=="string"&&(r=Cr(r));let{pathname:c="/",search:h="",hash:d="",state:g=null,key:y="default"}=r,v=x.useMemo(()=>{let w=ct(c,s);return w==null?null:{location:{pathname:w,search:h,hash:d,state:g,key:y},navigationType:n}},[s,c,h,d,g,y,n]);return He(v!=null,`<Router basename="${s}"> is not able to match the URL "${c}${h}${d}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:x.createElement(Oe.Provider,{value:u},x.createElement(jn.Provider,{children:t,value:v}))}function mh({children:e,location:t}){return eh(ka(e),t)}function ka(e,t=[]){let r=[];return x.Children.forEach(e,(n,i)=>{if(!x.isValidElement(n))return;let a=[...t,i];if(n.type===x.Fragment){r.push.apply(r,ka(n.props.children,a));return}Y(n.type===Z,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Y(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=ka(n.props.children,a)),r.push(l)}),r}var ni="get",ii="application/x-www-form-urlencoded";function Ki(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function hh(e){return Ki(e)&&e.tagName.toLowerCase()==="button"}function gh(e){return Ki(e)&&e.tagName.toLowerCase()==="form"}function xh(e){return Ki(e)&&e.tagName.toLowerCase()==="input"}function yh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vh(e,t){return e.button===0&&(!t||t==="_self")&&!yh(e)}var Bn=null;function wh(){if(Bn===null)try{new FormData(document.createElement("form"),0),Bn=!1}catch{Bn=!0}return Bn}var jh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Co(e){return e!=null&&!jh.has(e)?(He(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ii}"`),null):e}function kh(e,t){let r,n,i,a,l;if(gh(e)){let s=e.getAttribute("action");n=s?ct(s,t):null,r=e.getAttribute("method")||ni,i=Co(e.getAttribute("enctype"))||ii,a=new FormData(e)}else if(hh(e)||xh(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||s.getAttribute("action");if(n=u?ct(u,t):null,r=e.getAttribute("formmethod")||s.getAttribute("method")||ni,i=Co(e.getAttribute("formenctype"))||Co(s.getAttribute("enctype"))||ii,a=new FormData(s,e),!wh()){let{name:c,type:h,value:d}=e;if(h==="image"){let g=c?`${c}.`:"";a.append(`${g}x`,"0"),a.append(`${g}y`,"0")}else c&&a.append(c,d)}}else{if(Ki(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ni,n=null,i=ii,l=e}return a&&i==="text/plain"&&(l=a,a=void 0),{action:n,method:r.toLowerCase(),encType:i,formData:a,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jl(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Nh(e,t,r,n){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${n}`:i.pathname=`${i.pathname}.${n}`:i.pathname==="/"?i.pathname=`_root.${n}`:t&&ct(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:i.pathname=`${i.pathname.replace(/\/$/,"")}.${n}`,i}async function Sh(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Ch(e,t,r){let n=await Promise.all(e.map(async i=>{let a=t.routes[i.route.id];if(a){let l=await Sh(a,r);return l.links?l.links():[]}return[]}));return _h(n.flat(1).filter(bh).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Us(e,t,r,n,i,a){let l=(u,c)=>r[c]?u.route.id!==r[c].route.id:!0,s=(u,c)=>{var h;return r[c].pathname!==u.pathname||((h=r[c].route.path)==null?void 0:h.endsWith("*"))&&r[c].params["*"]!==u.params["*"]};return a==="assets"?t.filter((u,c)=>l(u,c)||s(u,c)):a==="data"?t.filter((u,c)=>{var d;let h=n.routes[u.route.id];if(!h||!h.hasLoader)return!1;if(l(u,c)||s(u,c))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((d=r[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Eh(e,t,{includeHydrateFallback:r}={}){return zh(e.map(n=>{let i=t.routes[n.route.id];if(!i)return[];let a=[i.module];return i.clientActionModule&&(a=a.concat(i.clientActionModule)),i.clientLoaderModule&&(a=a.concat(i.clientLoaderModule)),r&&i.hydrateFallbackModule&&(a=a.concat(i.hydrateFallbackModule)),i.imports&&(a=a.concat(i.imports)),a}).flat(1))}function zh(e){return[...new Set(e)]}function Ph(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function _h(e,t){let r=new Set;return new Set(t),e.reduce((n,i)=>{let a=JSON.stringify(Ph(i));return r.has(a)||(r.add(a),n.push({key:a,link:i})),n},[])}function wd(){let e=x.useContext(Er);return jl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Rh(){let e=x.useContext(Qi);return jl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var kl=x.createContext(void 0);kl.displayName="FrameworkContext";function jd(){let e=x.useContext(kl);return jl(e,"You must render this element inside a <HydratedRouter> element"),e}function Lh(e,t){let r=x.useContext(kl),[n,i]=x.useState(!1),[a,l]=x.useState(!1),{onFocus:s,onBlur:u,onMouseEnter:c,onMouseLeave:h,onTouchStart:d}=t,g=x.useRef(null);x.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let w=m=>{m.forEach(p=>{l(p.isIntersecting)})},N=new IntersectionObserver(w,{threshold:.5});return g.current&&N.observe(g.current),()=>{N.disconnect()}}},[e]),x.useEffect(()=>{if(n){let w=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(w)}}},[n]);let y=()=>{i(!0)},v=()=>{i(!1),l(!1)};return r?e!=="intent"?[a,g,{}]:[a,g,{onFocus:Ar(s,y),onBlur:Ar(u,v),onMouseEnter:Ar(c,y),onMouseLeave:Ar(h,v),onTouchStart:Ar(d,y)}]:[!1,g,{}]}function Ar(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Th({page:e,...t}){let{router:r}=wd(),n=x.useMemo(()=>id(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?x.createElement(Mh,{page:e,matches:n,...t}):null}function Fh(e){let{manifest:t,routeModules:r}=jd(),[n,i]=x.useState([]);return x.useEffect(()=>{let a=!1;return Ch(e,t,r).then(l=>{a||i(l)}),()=>{a=!0}},[e,t,r]),n}function Mh({page:e,matches:t,...r}){let n=Pe(),{future:i,manifest:a,routeModules:l}=jd(),{basename:s}=wd(),{loaderData:u,matches:c}=Rh(),h=x.useMemo(()=>Us(e,t,c,a,n,"data"),[e,t,c,a,n]),d=x.useMemo(()=>Us(e,t,c,a,n,"assets"),[e,t,c,a,n]),g=x.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let w=new Set,N=!1;if(t.forEach(p=>{var k;let f=a.routes[p.route.id];!f||!f.hasLoader||(!h.some(S=>S.route.id===p.route.id)&&p.route.id in u&&((k=l[p.route.id])!=null&&k.shouldRevalidate)||f.hasClientLoader?N=!0:w.add(p.route.id))}),w.size===0)return[];let m=Nh(e,s,i.unstable_trailingSlashAwareDataRequests,"data");return N&&w.size>0&&m.searchParams.set("_routes",t.filter(p=>w.has(p.route.id)).map(p=>p.route.id).join(",")),[m.pathname+m.search]},[s,i.unstable_trailingSlashAwareDataRequests,u,n,a,h,t,e,l]),y=x.useMemo(()=>Eh(d,a),[d,a]),v=Fh(d);return x.createElement(x.Fragment,null,g.map(w=>x.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...r})),y.map(w=>x.createElement("link",{key:w,rel:"modulepreload",href:w,...r})),v.map(({key:w,link:N})=>x.createElement("link",{key:w,nonce:r.nonce,...N})))}function Ah(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Oh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Oh&&(window.__reactRouterVersion="7.12.0")}catch{}function Ih({basename:e,children:t,unstable_useTransitions:r,window:n}){let i=x.useRef();i.current==null&&(i.current=xm({window:n,v5Compat:!0}));let a=i.current,[l,s]=x.useState({action:a.action,location:a.location}),u=x.useCallback(c=>{r===!1?s(c):x.startTransition(()=>s(c))},[r]);return x.useLayoutEffect(()=>a.listen(u),[a,u]),x.createElement(fh,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:a,unstable_useTransitions:r})}var kd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M=x.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:i,reloadDocument:a,replace:l,state:s,target:u,to:c,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:g,...y},v){let{basename:w,unstable_useTransitions:N}=x.useContext(Oe),m=typeof c=="string"&&kd.test(c),p=dd(c,w);c=p.to;let f=Xm(c,{relative:i}),[k,S,E]=Lh(n,y),C=qh(c,{replace:l,state:s,target:u,preventScrollReset:h,relative:i,viewTransition:d,unstable_defaultShouldRevalidate:g,unstable_useTransitions:N});function j(R){t&&t(R),R.defaultPrevented||C(R)}let _=x.createElement("a",{...y,...E,href:p.absoluteURL||f,onClick:p.isExternal||a?t:j,ref:Ah(v,S),target:u,"data-discover":!m&&r==="render"?"true":void 0});return k&&!m?x.createElement(x.Fragment,null,_,x.createElement(Th,{page:f})):_});M.displayName="Link";var Dh=x.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:i=!1,style:a,to:l,viewTransition:s,children:u,...c},h){let d=Nn(l,{relative:c.relative}),g=Pe(),y=x.useContext(Qi),{navigator:v,basename:w}=x.useContext(Oe),N=y!=null&&Qh(d)&&s===!0,m=v.encodeLocation?v.encodeLocation(d).pathname:d.pathname,p=g.pathname,f=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;r||(p=p.toLowerCase(),f=f?f.toLowerCase():null,m=m.toLowerCase()),f&&w&&(f=ct(f,w)||f);const k=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let S=p===m||!i&&p.startsWith(m)&&p.charAt(k)==="/",E=f!=null&&(f===m||!i&&f.startsWith(m)&&f.charAt(m.length)==="/"),C={isActive:S,isPending:E,isTransitioning:N},j=S?t:void 0,_;typeof n=="function"?_=n(C):_=[n,S?"active":null,E?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let R=typeof a=="function"?a(C):a;return x.createElement(M,{...c,"aria-current":j,className:_,ref:h,style:R,to:l,viewTransition:s},typeof u=="function"?u(C):u)});Dh.displayName="NavLink";var $h=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:i,state:a,method:l=ni,action:s,onSubmit:u,relative:c,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:g,...y},v)=>{let{unstable_useTransitions:w}=x.useContext(Oe),N=Hh(),m=Vh(s,{relative:c}),p=l.toLowerCase()==="get"?"get":"post",f=typeof s=="string"&&kd.test(s),k=S=>{if(u&&u(S),S.defaultPrevented)return;S.preventDefault();let E=S.nativeEvent.submitter,C=(E==null?void 0:E.getAttribute("formmethod"))||l,j=()=>N(E||S.currentTarget,{fetcherKey:t,method:C,navigate:r,replace:i,state:a,relative:c,preventScrollReset:h,viewTransition:d,unstable_defaultShouldRevalidate:g});w&&r!==!1?x.startTransition(()=>j()):j()};return x.createElement("form",{ref:v,method:p,action:m,onSubmit:n?u:k,...y,"data-discover":!f&&e==="render"?"true":void 0})});$h.displayName="Form";function Uh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nd(e){let t=x.useContext(Er);return Y(t,Uh(e)),t}function qh(e,{target:t,replace:r,state:n,preventScrollReset:i,relative:a,viewTransition:l,unstable_defaultShouldRevalidate:s,unstable_useTransitions:u}={}){let c=Yi(),h=Pe(),d=Nn(e,{relative:a});return x.useCallback(g=>{if(vh(g,t)){g.preventDefault();let y=r!==void 0?r:mn(h)===mn(d),v=()=>c(e,{replace:y,state:n,preventScrollReset:i,relative:a,viewTransition:l,unstable_defaultShouldRevalidate:s});u?x.startTransition(()=>v()):v()}},[h,c,d,r,n,t,e,i,a,l,s,u])}var Wh=0,Bh=()=>`__${String(++Wh)}__`;function Hh(){let{router:e}=Nd("useSubmit"),{basename:t}=x.useContext(Oe),r=uh(),n=e.fetch,i=e.navigate;return x.useCallback(async(a,l={})=>{let{action:s,method:u,encType:c,formData:h,body:d}=kh(a,t);if(l.navigate===!1){let g=l.fetcherKey||Bh();await n(g,r,l.action||s,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:h,body:d,formMethod:l.method||u,formEncType:l.encType||c,flushSync:l.flushSync})}else await i(l.action||s,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:h,body:d,formMethod:l.method||u,formEncType:l.encType||c,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,i,t,r])}function Vh(e,{relative:t}={}){let{basename:r}=x.useContext(Oe),n=x.useContext(Ze);Y(n,"useFormAction must be used inside a RouteContext");let[i]=n.matches.slice(-1),a={...Nn(e||".",{relative:t})},l=Pe();if(e==null){a.search=l.search;let s=new URLSearchParams(a.search),u=s.getAll("index");if(u.some(h=>h==="")){s.delete("index"),u.filter(d=>d).forEach(d=>s.append("index",d));let h=s.toString();a.search=h?`?${h}`:""}}return(!e||e===".")&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(a.pathname=a.pathname==="/"?r:ot([r,a.pathname])),mn(a)}function Qh(e,{relative:t}={}){let r=x.useContext(fd);Y(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Nd("useViewTransitionState"),i=Nn(e,{relative:t});if(!r.isTransitioning)return!1;let a=ct(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=ct(r.nextLocation.pathname,n)||r.nextLocation.pathname;return hn(i.pathname,l)!=null||hn(i.pathname,a)!=null}const Sd=x.createContext(null),Yh=({children:e})=>{const[t,r]=x.useState(null),[n,i]=x.useState(!0),a=x.useCallback(async()=>{try{const h=await fetch("/api/customer/me",{credentials:"same-origin"}),d=await h.json();h.ok&&(d!=null&&d.authenticated)&&(d!=null&&d.customer)?r(d.customer):r(null)}catch{r(null)}finally{i(!1)}},[]);x.useEffect(()=>{a()},[a]);const l=async({email:h,password:d,fullName:g})=>{const y=await fetch("/api/customer/signup",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({email:h,password:d,full_name:g})}),v=await y.json();if(!y.ok)throw new Error((v==null?void 0:v.error)||"Signup failed");return r(v.customer||null),v.customer||null},s=async({email:h,password:d})=>{const g=await fetch("/api/customer/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({email:h,password:d})}),y=await g.json();if(!g.ok)throw new Error((y==null?void 0:y.error)||"Login failed");return r(y.customer||null),y.customer||null},u=async()=>{try{await fetch("/api/customer/logout",{method:"POST",credentials:"same-origin"})}finally{r(null)}},c=x.useMemo(()=>({customer:t,loading:n,isAuthenticated:!!t,signup:l,login:s,logout:u,refresh:a}),[t,n,a]);return o.jsx(Sd.Provider,{value:c,children:e})},Sn=()=>{const e=x.useContext(Sd);if(!e)throw new Error("useAuth must be used within AuthProvider");return e},bd=x.createContext(),bn=()=>x.useContext(bd),Cd=e=>{const t=Number.parseFloat(e);return Number.isFinite(t)?t:0},Na=e=>{const t=Number.parseInt(e,10);return Number.isFinite(t)&&t>0?t:1},qs=e=>({...e,price:Cd(e==null?void 0:e.price),quantity:Na(e==null?void 0:e.quantity)}),Kh=({children:e})=>{const{customer:t,isAuthenticated:r,loading:n}=Sn(),[i,a]=x.useState([]),l=r&&(t!=null&&t.email)?`as_crystals_cart_${String(t.email).toLowerCase()}`:null;x.useEffect(()=>{if(!n){if(!l){a([]);return}try{const y=localStorage.getItem(l);if(!y){a([]);return}const v=JSON.parse(y);if(!Array.isArray(v)){a([]);return}a(v.map(qs))}catch(y){console.error("Invalid cart data in localStorage:",y),a([])}}},[n,l]),x.useEffect(()=>{n||!l||localStorage.setItem(l,JSON.stringify(i))},[n,i,l]);const s=(y,v=1)=>{if(!l)return;const w=qs({...y,quantity:v});a(N=>N.find(p=>p.id===w.id)?N.map(p=>p.id===w.id?{...p,quantity:p.quantity+w.quantity}:p):[...N,w])},u=y=>{a(v=>v.filter(w=>w.id!==y))},c=(y,v)=>{const w=Na(v);a(N=>N.map(m=>m.id===y?{...m,quantity:w}:m))},h=()=>{a([])},d=i.reduce((y,v)=>y+Cd(v.price)*Na(v.quantity),0),g=i.reduce((y,v)=>y+v.quantity,0);return o.jsx(bd.Provider,{value:{cartItems:i,addToCart:s,removeFromCart:u,updateQuantity:c,clearCart:h,cartTotal:d,cartCount:g},children:e})};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xh=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase()),Ws=e=>{const t=Xh(e);return t.charAt(0).toUpperCase()+t.slice(1)},Ed=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim(),Jh=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:i="",children:a,iconNode:l,...s},u)=>x.createElement("svg",{ref:u,...Zh,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:Ed("lucide",i),...!a&&!Jh(s)&&{"aria-hidden":"true"},...s},[...l.map(([c,h])=>x.createElement(c,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(e,t)=>{const r=x.forwardRef(({className:n,...i},a)=>x.createElement(eg,{ref:a,iconNode:t,className:Ed(`lucide-${Gh(Ws(e))}`,`lucide-${e}`,n),...i}));return r.displayName=Ws(e),r};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],rg=I("arrow-left",tg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],zd=I("chevron-down",ng);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],og=I("circle-check-big",ig);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],lg=I("credit-card",ag);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ug=I("eye",sg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],Pd=I("facebook",cg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],pg=I("file-text",dg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],mg=I("funnel",fg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],_d=I("instagram",hg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],xg=I("log-in",gg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],vg=I("log-out",yg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Rd=I("mail",wg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ld=I("map-pin",jg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Ng=I("menu",kg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M5 12h14",key:"1ays0h"}]],Td=I("minus",Sg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Cg=I("package",bg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Fd=I("phone",Eg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Md=I("plus",zg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],_g=I("receipt",Pg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Pi=I("search",Rg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Tg=I("send",Lg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Mg=I("settings",Fg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ad=I("shield-check",Ag);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Ig=I("shopping-bag",Og);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Od=I("shopping-cart",Dg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Id=I("star",$g);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],qg=I("truck",Ug);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],Dd=I("twitter",Wg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Hg=I("user",Bg);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],_i=I("x",Vg),Qg=[{name:"HOME",path:"/"},{name:"SHOP",path:"/shop"},{name:"HEALING STONES",path:"/healing-stones",dropdown:["Rose Quartz","Clear Quartz","Amethyst","Black Tourmaline","Lapis Lazuli","Citrine","Selenite","Pyrite"].map(e=>({label:e,path:`/shop?search=${encodeURIComponent(e)}`}))},{name:"CRYSTAL JEWELRY",path:"/crystal-jewelry",dropdown:["Bracelets","Pendants","Malas","Rings"].map(e=>({label:e,path:`/shop?search=${encodeURIComponent(e)}`}))},{name:"REIKI TOOLS",path:"/reiki-tools",dropdown:["Pendulums","Chakra Sets","Engraved Stones","Charging Plates"].map(e=>({label:e,path:`/shop?search=${encodeURIComponent(e)}`}))},{name:"REMEDIES",path:"/remedies",dropdown:["Wealth","Health","Protection","Relationship","Root Chakra","Self-Confidence","Education"].map(e=>({label:e,path:`/shop?search=${encodeURIComponent(e)}`}))},{name:"SERVICES",path:"/services"},{name:"CONTACT",path:"/contact"}],Yg=()=>{const[e,t]=x.useState(!1),[r,n]=x.useState(!1),[i,a]=x.useState(!1),[l,s]=x.useState(!1),[u,c]=x.useState(""),[h,d]=x.useState(Qg),{cartCount:g}=bn(),{customer:y,isAuthenticated:v,logout:w}=Sn(),N=Pe(),m=Yi(),p=x.useRef(null),f=x.useRef(null),k=x.useRef(null),S=x.useRef(null);x.useEffect(()=>{const j=()=>{n(window.scrollY>20)};return window.addEventListener("scroll",j),()=>window.removeEventListener("scroll",j)},[]),x.useEffect(()=>{const j=new URLSearchParams(N.search);c(j.get("search")||"")},[N.search]),x.useEffect(()=>{(async()=>{try{const _=await fetch("/api/header-menu");if(!_.ok)return;const R=await _.json();Array.isArray(R)&&R.length>0&&d(R)}catch(_){console.error("Unable to load header menu:",_)}})()},[]),x.useEffect(()=>{const j=()=>{const _=p.current,R=f.current,B=k.current,fe=S.current;if(!_||!R||!B||!fe)return;const _e=_.clientWidth,Yt=R.offsetWidth+B.scrollWidth+fe.offsetWidth+100;s(Yt>_e)};return j(),window.addEventListener("resize",j),()=>{window.removeEventListener("resize",j)}},[h,v]);const E=j=>{j.preventDefault();const _=u.trim();m(_?`/shop?search=${encodeURIComponent(_)}`:"/shop"),a(!1)},C=(j,_,R=void 0)=>{const B=j.path||"/",fe=!!j.openInNewTab;return B.startsWith("/")&&!fe?o.jsx(M,{to:B,className:_,onClick:R,children:j.name||j.label}):o.jsx("a",{href:B,className:_,onClick:R,target:fe?"_blank":void 0,rel:fe?"noopener noreferrer":void 0,children:j.name||j.label})};return o.jsxs("header",{className:`header ${r?"header-scrolled":""}`,children:[o.jsxs("div",{className:"top-bar",children:[o.jsx("span",{children:"Free Shipping on Orders Over $150"}),o.jsx("span",{className:"top-bar-sep",children:"|"}),o.jsx("span",{children:"Secure Manifestation Tools"})]}),o.jsxs("div",{className:"container main-header",ref:p,children:[o.jsx(M,{to:"/",className:"logo-container",ref:f,children:o.jsx("img",{src:"/images/AS_Crystal_logo.png",alt:"AS Crystal",className:"brand-logo-img"})}),o.jsx("nav",{ref:k,className:`desktop-nav ${l?"desktop-nav-hidden":""}`,children:o.jsx("ul",{className:"nav-list",children:h.map(j=>o.jsxs("li",{className:`nav-item ${Array.isArray(j.dropdown)&&j.dropdown.length>0?"has-dropdown":""}`,children:[C(j,`nav-link ${N.pathname===j.path?"active":""}`),Array.isArray(j.dropdown)&&j.dropdown.length>0&&o.jsx("ul",{className:"mega-menu",children:j.dropdown.map(_=>o.jsx("li",{children:C(_,"",void 0)},_.label))})]},j.name))})}),o.jsxs("div",{className:"header-actions",ref:S,children:[o.jsx("button",{className:`icon-btn ${i?"active":""}`,onClick:()=>a(j=>!j),"aria-label":"Toggle search",children:o.jsx(Pi,{size:18,strokeWidth:1.5})}),o.jsxs(M,{to:"/cart",className:"icon-btn cart-btn",children:[o.jsx(Od,{size:18,strokeWidth:1.5}),g>0&&o.jsx("span",{className:"cart-count",children:g})]}),o.jsx(M,{to:v?`/orders?email=${encodeURIComponent((y==null?void 0:y.email)||"")}`:"/login?redirect=/orders",className:"icon-btn","aria-label":"My Orders",title:"My Orders",children:o.jsx(Hg,{size:18,strokeWidth:1.5})}),!v&&o.jsx(M,{to:"/login?redirect=/checkout",className:"icon-btn","aria-label":"Customer Login",title:"Login",children:o.jsx(xg,{size:18,strokeWidth:1.5})}),v&&o.jsx("button",{type:"button",className:"icon-btn logout-mini-link","aria-label":"Logout",title:"Logout",onClick:async()=>{await w(),m("/login")},children:o.jsx(vg,{size:18,strokeWidth:1.5})}),o.jsx("a",{href:"/admin",className:"icon-btn","aria-label":"Admin Dashboard",title:"Admin Dashboard",children:o.jsx(Mg,{size:18,strokeWidth:1.5})}),o.jsx("button",{className:`mobile-toggle ${l?"compact-visible":""}`,onClick:()=>t(!e),children:e?o.jsx(_i,{size:24}):o.jsx(Ng,{size:24})})]})]}),o.jsx("div",{className:`search-panel ${i?"open":""}`,children:o.jsxs("form",{className:"search-form",onSubmit:E,children:[o.jsx(Pi,{size:16,strokeWidth:1.8}),o.jsx("input",{type:"text",value:u,onChange:j=>c(j.target.value),placeholder:"Search crystals, jewelry, remedies...","aria-label":"Search products"}),o.jsx("button",{type:"submit",children:"Search"})]})}),o.jsx("nav",{className:`mobile-nav ${e?"nav-open":""}`,children:o.jsxs("ul",{className:"mobile-nav-list",children:[h.map(j=>o.jsxs("li",{children:[C(j,"",()=>t(!1)),Array.isArray(j.dropdown)&&j.dropdown.length>0&&o.jsx("ul",{className:"mobile-submenu-list",children:j.dropdown.map(_=>o.jsx("li",{children:C(_,"",()=>t(!1))},_.label))})]},j.name)),o.jsx("li",{children:o.jsx(M,{to:v?`/orders?email=${encodeURIComponent((y==null?void 0:y.email)||"")}`:"/login?redirect=/orders",onClick:()=>t(!1),children:"MY ORDERS"})}),!v&&o.jsx("li",{children:o.jsx(M,{to:"/login?redirect=/checkout",onClick:()=>t(!1),children:"LOGIN"})}),!v&&o.jsx("li",{children:o.jsx(M,{to:"/signup?redirect=/checkout",onClick:()=>t(!1),children:"SIGN UP"})}),v&&o.jsx("li",{children:o.jsx("button",{type:"button",className:"mobile-logout-link",onClick:async()=>{await w(),t(!1),m("/login")},children:"LOGOUT"})}),v&&o.jsx("li",{children:o.jsx("span",{className:"mobile-customer-email",children:(y==null?void 0:y.email)||""})}),o.jsx("li",{children:o.jsx("a",{href:"/admin",children:"ADMIN DASHBOARD"})})]})}),o.jsx("style",{jsx:"true",children:`
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
                    padding-right: 14px;
                }
                .desktop-nav.desktop-nav-hidden {
                    display: none !important;
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
                    margin-left: 22px;
                    padding-left: 6px;
                }
                .logout-mini-link {
                    font-family: inherit;
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
                .mobile-toggle.compact-visible { display: block; }
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
                
                @media (max-width: 1360px) {
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
                    .mobile-logout-link {
                        border: none;
                        background: none;
                        color: var(--text-main);
                        font-family: var(--font-serif);
                        font-size: 2rem;
                        cursor: pointer;
                        padding: 0;
                    }
                    .mobile-customer-email {
                        display: block;
                        color: var(--text-light);
                        font-size: 0.75rem;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                        margin-top: -8px;
                    }
                }
            `})]})},Kg=()=>o.jsxs("footer",{className:"luxury-footer",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"footer-main",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsx(M,{to:"/",className:"luxury-logo-link",children:o.jsx("img",{src:"/images/AS_Crystal_logo.png?v=20260219",alt:"AS Crystal",className:"footer-logo-img"})}),o.jsx("p",{className:"footer-about",children:"Curating authentic energy tools for the modern healer. Our crystals are hand-selected for their vibrational resonance and ethical origin."}),o.jsxs("div",{className:"social-luxury",children:[o.jsx("a",{href:"#",children:o.jsx(_d,{size:18})}),o.jsx("a",{href:"#",children:o.jsx(Pd,{size:18})}),o.jsx("a",{href:"#",children:o.jsx(Dd,{size:18})})]})]}),o.jsxs("div",{className:"footer-links-grid",children:[o.jsxs("div",{className:"footer-column",children:[o.jsx("h3",{children:"Collections"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(M,{to:"/shop",children:"All Crystals"})}),o.jsx("li",{children:o.jsx(M,{to:"/remedies",children:"Remedies"})}),o.jsx("li",{children:o.jsx(M,{to:"/gifts",children:"Gifts"})}),o.jsx("li",{children:o.jsx(M,{to:"/trainings",children:"Workshops"})})]})]}),o.jsxs("div",{className:"footer-column",children:[o.jsx("h3",{children:"Company"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(M,{to:"/about",children:"Our Story"})}),o.jsx("li",{children:o.jsx(M,{to:"/contact",children:"Contact"})}),o.jsx("li",{children:o.jsx(M,{to:"/services",children:"Services"})}),o.jsx("li",{children:o.jsx(M,{to:"/orders",children:"My Orders"})}),o.jsx("li",{children:o.jsx(M,{to:"/terms",children:"Terms"})})]})]}),o.jsxs("div",{className:"footer-column contact-col-luxury",children:[o.jsx("h3",{children:"Connect"}),o.jsxs("p",{children:[o.jsx(Rd,{size:14})," ascrystal0204@gmail.com "]}),o.jsxs("p",{children:[o.jsx(Fd,{size:14})," +91 99097 86552 "]}),o.jsxs("p",{children:[o.jsx(Ld,{size:14})," Kadival, Laldarvaja Khambhat - 388620 "]})]})]})]}),o.jsxs("div",{className:"footer-legal",children:[o.jsx("p",{children:"© 2026 REIKI CRYSTALS. Crafted for the Soul."}),o.jsxs("div",{className:"legal-links",children:[o.jsx(M,{to:"/privacy",children:"Privacy"}),o.jsx(M,{to:"/terms",children:"Conditions"})]})]})]}),o.jsx("style",{jsx:"true",children:`
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
      `})]}),Gg=()=>o.jsxs("div",{className:"page-loader",role:"status","aria-live":"polite","aria-label":"Loading page",children:[o.jsx("div",{className:"page-loader__spinner"}),o.jsx("p",{className:"page-loader__text",children:"Loading..."})]}),Xg=()=>o.jsxs("section",{className:"hero",children:[o.jsx("div",{className:"container hero-container",children:o.jsxs("div",{className:"hero-content",children:[o.jsx("span",{className:"hero-eyebrow",children:"Natural Gemstones For Daily Wellness"}),o.jsxs("h1",{className:"hero-title",children:["Healing Crystals ",o.jsx("br",{}),"For Reiki & Balance"]}),o.jsx("p",{className:"hero-desc",children:"Explore authentic healing crystals, bracelets, malas and Reiki tools curated to support grounding, protection, prosperity, love and spiritual growth."}),o.jsxs("div",{className:"hero-actions",children:[o.jsx(M,{to:"/shop",className:"btn-luxury",children:"Shop Collection"}),o.jsx(M,{to:"/services",className:"btn-text",children:"Our Services"})]})]})}),o.jsx("style",{jsx:"true",children:`
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
      `})]}),Bs={"healing stones":"https://images.unsplash.com/photo-1610450949015-c231777d5d95?q=80&w=900&auto=format&fit=crop","crystal jewelry":"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=900&auto=format&fit=crop","reiki tools":"https://images.unsplash.com/photo-1590422749897-40899033321d?q=80&w=900&auto=format&fit=crop","vastu & feng shui":"https://images.unsplash.com/photo-1596439535105-bb59e5504c41?q=80&w=900&auto=format&fit=crop"},Jg=[{keyword:"amethyst",image:"https://images.unsplash.com/photo-1615486363973-f79d8757803d?q=80&w=900&auto=format&fit=crop"},{keyword:"rose quartz",image:"https://images.unsplash.com/photo-1641363133700-14f5f43ff053?q=80&w=900&auto=format&fit=crop"},{keyword:"clear quartz",image:"https://images.unsplash.com/photo-1523348830708-15d4a09cfac2?q=80&w=900&auto=format&fit=crop"},{keyword:"citrine",image:"https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?q=80&w=900&auto=format&fit=crop"},{keyword:"tourmaline",image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=900&auto=format&fit=crop"},{keyword:"lapis",image:"https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=900&auto=format&fit=crop"},{keyword:"pendulum",image:"https://images.unsplash.com/photo-1601821765780-754fa98637c1?q=80&w=900&auto=format&fit=crop"},{keyword:"chakra",image:"https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=900&auto=format&fit=crop"},{keyword:"bracelet",image:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=900&auto=format&fit=crop"},{keyword:"ring",image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=900&auto=format&fit=crop"},{keyword:"mala",image:"https://images.unsplash.com/photo-1634757796423-6e941a3bca4f?q=80&w=900&auto=format&fit=crop"}],Gi=(e={})=>{var a,l;const t=e.image;if(t&&t!=="default.jpg")return t.startsWith("http://")||t.startsWith("https://")||t.startsWith("/")?t:`/uploads/products/${t}`;const r=`${e.name||""} ${((a=e.category)==null?void 0:a.name)||""}`.toLowerCase(),n=Jg.find(s=>r.includes(s.keyword));if(n)return n.image;const i=(((l=e.category)==null?void 0:l.name)||"").toLowerCase();return Bs[i]?Bs[i]:"https://images.unsplash.com/photo-1523348830708-15d4a09cfac2?q=80&w=900&auto=format&fit=crop"},Lt=({product:e})=>{const{addToCart:t}=bn(),r=Gi(e);return o.jsxs("div",{className:"luxury-product-card",children:[o.jsxs("div",{className:"product-visual",children:[o.jsx("img",{src:r,alt:e.name,className:"product-img-main"}),e.is_sale&&o.jsx("span",{className:"luxury-badge",children:"Essence Sale"}),o.jsxs("div",{className:"product-actions-overlay",children:[o.jsx("button",{className:"action-circle",onClick:()=>t(e),title:"Add to Cart",children:o.jsx(Od,{size:18})}),o.jsx(M,{to:`/product/${e.id}`,className:"action-circle",title:"View Details",children:o.jsx(ug,{size:18})})]})]}),o.jsxs("div",{className:"product-details-luxury",children:[o.jsx("div",{className:"product-rating-gold",children:[...Array(5)].map((n,i)=>o.jsx(Id,{size:10,fill:"#D4AF37",color:"#D4AF37"},i))}),o.jsx("h3",{className:"product-name-serif",children:o.jsx(M,{to:`/product/${e.id}`,children:e.name})}),o.jsx("p",{className:"product-cat-tag",children:e.category?e.category.name:"Curated Crystal"}),o.jsxs("div",{className:"product-price-luxury",children:[o.jsxs("span",{className:"price-primary",children:["$",e.price]}),e.old_price&&o.jsxs("span",{className:"price-old",children:["$",e.old_price]})]})]}),o.jsx("style",{jsx:"true",children:`
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
      `})]})},Zg=[{name:"New Arrivals",desc:"Fresh gemstone arrivals and trending spiritual tools.",path:"/shop?search=new"},{name:"7 Chakra",desc:"Balanced chakra sets for alignment and emotional clarity.",path:"/shop?search=chakra"},{name:"Bracelets",desc:"Crystal bracelets for confidence, abundance and protection.",path:"/crystal-jewelry?search=bracelet"},{name:"Malas",desc:"Meditation malas for mantra practice and focused intention.",path:"/crystal-jewelry?search=mala"},{name:"Pendants",desc:"Wearable crystal pendants to keep healing energy close.",path:"/crystal-jewelry?search=pendant"},{name:"Rudraksha",desc:"Sacred rudraksha combinations for grounding and strength.",path:"/shop?search=rudraksha"},{name:"Angels",desc:"Carved angel crystals for guidance and emotional support.",path:"/shop?search=angel"},{name:"Tumbles",desc:"Pocket-friendly tumble stones for everyday energy work.",path:"/healing-stones?search=tumble"},{name:"Pencils & Obelisks",desc:"Crystal points for manifestation, grids and healing.",path:"/healing-stones?search=obelisk"},{name:"Pyramids",desc:"Sacred geometry crystal pyramids for space harmonizing.",path:"/healing-stones?search=pyramid"}],ex=[{title:"Free Shipping",text:"On qualifying orders"},{title:"Secure Payments",text:"Safe checkout guaranteed"},{title:"Speedy Delivery",text:"Fast dispatch & tracking"},{title:"Cash On Delivery",text:"Available on selected orders"},{title:"Expert Support",text:"Crystal guidance available"}],tx=[{name:"Priya S.",text:"Original crystals, beautiful quality and very helpful guidance."},{name:"Swaroop P.",text:"Great variety of stones at reasonable prices. Highly recommended."},{name:"Umaid S.",text:"Authentic products, great pricing and patient staff support."}],rx=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{const l=await(await fetch("/api/products")).json();t(l.slice(0,8))}catch(a){console.error("Error fetching featured products:",a)}finally{n(!1)}})()},[]),o.jsxs("div",{className:"home-page",children:[o.jsx(Xg,{}),o.jsx("section",{className:"usp-strip",children:o.jsx("div",{className:"container usp-grid",children:ex.map(i=>o.jsxs("div",{className:"usp-card",children:[o.jsx("h4",{children:i.title}),o.jsx("p",{children:i.text})]},i.title))})}),o.jsx("section",{className:"section-padding collections-section",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"text-center mb-60",children:[o.jsx("span",{className:"hero-eyebrow",children:"Shop By Collection"}),o.jsx("h2",{className:"section-title",children:"Popular Crystal Categories"})]}),o.jsx("div",{className:"collections-grid",children:Zg.map(i=>o.jsxs(M,{to:i.path,className:"collection-card",children:[o.jsx("h3",{children:i.name}),o.jsx("p",{children:i.desc}),o.jsx("span",{children:"Explore"})]},i.name))})]})}),o.jsx("section",{className:"section-padding featured-products",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"text-center mb-60",children:[o.jsx("span",{className:"hero-eyebrow",children:"Featured Products"}),o.jsx("h2",{className:"section-title",children:"Best Sellers"})]}),o.jsx("div",{className:"products-grid",children:r?o.jsx("div",{className:"loading-state",children:"Loading products..."}):e.length>0?e.map(i=>o.jsx(Lt,{product:i},i.id)):o.jsx("div",{className:"no-products",children:"No featured products available."})}),o.jsx("div",{className:"text-center mt-60",children:o.jsx(M,{to:"/shop",className:"btn-luxury",children:"View All Products"})})]})}),o.jsx("section",{className:"section-padding service-focus",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"text-center mb-60",children:[o.jsx("span",{className:"hero-eyebrow",children:"Our Services"}),o.jsx("h2",{className:"section-title",children:"Reiki Healing & Consultation"})]}),o.jsxs("div",{className:"service-grid",children:[o.jsxs("div",{className:"service-card",children:[o.jsx("h3",{children:"Reiki Healing"}),o.jsx("p",{children:"Energy balancing sessions for emotional, physical and spiritual well-being."})]}),o.jsxs("div",{className:"service-card",children:[o.jsx("h3",{children:"Reiki Emergency Healing"}),o.jsx("p",{children:"Focused sessions designed for urgent emotional stress and energy imbalance."})]}),o.jsxs("div",{className:"service-card",children:[o.jsx("h3",{children:"Reiki Personalized Healing"}),o.jsx("p",{children:"Custom healing protocols aligned to your life goals and current challenges."})]}),o.jsxs("div",{className:"service-card",children:[o.jsx("h3",{children:"Crystal Vastu Consultation"}),o.jsx("p",{children:"Space harmonization with crystal placements for home and business environments."})]})]}),o.jsx("div",{className:"text-center mt-60",children:o.jsx(M,{to:"/services",className:"btn-luxury",children:"Book A Service"})})]})}),o.jsx("section",{className:"section-padding testimonials",children:o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"text-center mb-60",children:[o.jsx("span",{className:"hero-eyebrow",children:"Client Feedback"}),o.jsx("h2",{className:"section-title",children:"What Customers Say"})]}),o.jsx("div",{className:"testimonials-grid",children:tx.map(i=>o.jsxs("article",{className:"testimonial-card",children:[o.jsx("div",{className:"stars",children:"★★★★★"}),o.jsxs("p",{children:['"',i.text,'"']}),o.jsx("strong",{children:i.name})]},i.name))})]})}),o.jsx("section",{className:"home-cta",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"cta-box",children:[o.jsx("h2",{children:"Start Your Crystal Journey Today"}),o.jsx("p",{children:"Shop natural gemstones, Reiki tools and intention-based collections for every life goal."}),o.jsx(M,{to:"/shop",className:"btn-luxury",children:"Shop Now"})]})})}),o.jsx("style",{jsx:"true",children:`
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
      `})]})},nx=()=>{const e=Pe(),[t,r]=x.useState("All"),[n,i]=x.useState(""),[a,l]=x.useState("featured"),[s,u]=x.useState(!1),[c,h]=x.useState(!1),[d,g]=x.useState(""),[y,v]=x.useState(""),[w,N]=x.useState(!1),[m,p]=x.useState(!1),[f,k]=x.useState([]),[S,E]=x.useState(!0);x.useEffect(()=>{(async()=>{try{const z=await(await fetch("/api/products")).json();k(z),E(!1)}catch(oe){console.error("Error fetching products:",oe),E(!1)}})()},[]),x.useEffect(()=>{const L=new URLSearchParams(e.search),oe=L.get("category"),z=L.get("search");r(oe||"All"),i(z?z.trim():""),u(!1)},[e]);const C=["All","Healing Stones","Crystal Jewelry","Reiki Tools","Vastu & Feng Shui"],j=[{value:"featured",label:"Featured"},{value:"latest",label:"Latest"},{value:"price-low",label:"Price: Low to High"},{value:"price-high",label:"Price: High to Low"},{value:"name-az",label:"Name: A to Z"},{value:"name-za",label:"Name: Z to A"}],_=n.toLowerCase(),R=d!==""?Number.parseFloat(d):null,B=y!==""?Number.parseFloat(y):null,_e=[...f.filter(L=>{var Tt,Ve,Kt,Qe;const oe=Number.parseFloat(L.price)||0,z=Number.parseInt(L.stock,10)||0;if(R!==null&&!Number.isNaN(R)&&oe<R||B!==null&&!Number.isNaN(B)&&oe>B||w&&!L.is_sale||m&&z<1||!(t==="All"?!0:(()=>{var Sl,bl,Cl;const Gt=((Sl=L.category)==null?void 0:Sl.name)||"",$d=((bl=L.name)==null?void 0:bl.toLowerCase())||"",Ud=((Cl=L.description)==null?void 0:Cl.toLowerCase())||"",Nl=t.toLowerCase();return Gt===t||$d.includes(Nl)||Ud.includes(Nl)})()))return!1;if(!_)return!0;const F=((Tt=L.name)==null?void 0:Tt.toLowerCase())||"",$=((Ve=L.description)==null?void 0:Ve.toLowerCase())||"",J=((Qe=(Kt=L.category)==null?void 0:Kt.name)==null?void 0:Qe.toLowerCase())||"";return F.includes(_)||$.includes(_)||J.includes(_)})].sort((L,oe)=>{const z=Number.parseFloat(L.price)||0,T=Number.parseFloat(oe.price)||0,F=L.name||"",$=oe.name||"";switch(a){case"latest":return(oe.id||0)-(L.id||0);case"price-low":return z-T;case"price-high":return T-z;case"name-az":return F.localeCompare($);case"name-za":return $.localeCompare(F);case"featured":default:return(oe.is_featured?1:0)-(L.is_featured?1:0)}}),Yt=()=>{r("All"),g(""),v(""),N(!1),p(!1)},Cn=[d!=="",y!=="",w,m,t!=="All"].filter(Boolean).length;return o.jsxs("div",{className:"shop-page",children:[o.jsx("header",{className:"shop-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("span",{className:"hero-eyebrow",children:"The Catalog"}),o.jsx("h1",{className:"hero-title",children:"Discover Your Stone"}),o.jsx("p",{className:"hero-desc",children:"Sourced for purity. Curated for your unique vibration."})]})}),o.jsx("div",{className:"container section-padding",children:o.jsxs("div",{className:"shop-layout",children:[o.jsx("aside",{className:"shop-sidebar",children:o.jsxs("div",{className:"sidebar-section",children:[o.jsx("h3",{className:"sidebar-title",children:"Intentions"}),o.jsx("ul",{className:"category-list-luxury",children:C.map(L=>o.jsx("li",{children:o.jsx("button",{className:`cat-btn-luxury ${t===L?"active":""}`,onClick:()=>r(L),children:L})},L))})]})}),o.jsxs("main",{className:"shop-main",children:[o.jsxs("div",{className:"shop-toolbar",children:[o.jsxs("div",{className:"toolbar-left",children:[o.jsxs("span",{className:"results-count",children:[_e.length," Gems Found"]}),o.jsxs("div",{className:"toolbar-search",children:[o.jsx(Pi,{size:14}),o.jsx("input",{type:"text",value:n,onChange:L=>i(L.target.value),placeholder:"Search products...","aria-label":"Search products in catalog"}),n&&o.jsx("button",{className:"clear-search-btn",onClick:()=>i(""),"aria-label":"Clear search",children:o.jsx(_i,{size:14})})]})]}),o.jsxs("div",{className:"toolbar-actions",children:[o.jsxs("div",{className:"sort-wrap",children:[o.jsxs("button",{className:"toolbar-btn",onClick:()=>u(L=>!L),children:["Sort ",o.jsx(zd,{size:14})]}),s&&o.jsx("div",{className:"sort-menu",children:j.map(L=>o.jsx("button",{className:`sort-item ${a===L.value?"active":""}`,onClick:()=>{l(L.value),u(!1)},children:L.label},L.value))})]}),o.jsxs("button",{className:"toolbar-btn",onClick:()=>h(L=>!L),children:[o.jsx(mg,{size:14})," Filter ",Cn>0?`(${Cn})`:""]})]})]}),c&&o.jsxs("div",{className:"filter-panel",children:[o.jsxs("div",{className:"filter-grid",children:[o.jsxs("div",{className:"filter-group",children:[o.jsx("label",{children:"Category"}),o.jsx("select",{value:t,onChange:L=>r(L.target.value),children:C.map(L=>o.jsx("option",{value:L,children:L},L))})]}),o.jsxs("div",{className:"filter-group",children:[o.jsx("label",{children:"Min Price"}),o.jsx("input",{type:"number",min:"0",value:d,onChange:L=>g(L.target.value),placeholder:"0"})]}),o.jsxs("div",{className:"filter-group",children:[o.jsx("label",{children:"Max Price"}),o.jsx("input",{type:"number",min:"0",value:y,onChange:L=>v(L.target.value),placeholder:"1000"})]}),o.jsxs("label",{className:"checkbox-filter",children:[o.jsx("input",{type:"checkbox",checked:w,onChange:L=>N(L.target.checked)}),"On Sale"]}),o.jsxs("label",{className:"checkbox-filter",children:[o.jsx("input",{type:"checkbox",checked:m,onChange:L=>p(L.target.checked)}),"In Stock"]})]}),o.jsx("div",{className:"filter-actions",children:o.jsx("button",{className:"toolbar-btn reset-btn",onClick:Yt,children:"Reset Filters"})})]}),o.jsx("div",{className:"products-grid-luxury",children:S?o.jsx("div",{className:"loading-state",children:"Cleansing energy..."}):_e.length>0?_e.map(L=>o.jsx(Lt,{product:L},L.id)):o.jsx("div",{className:"no-results",children:"No matches for this cycle."})})]})]})}),o.jsx("style",{jsx:"true",children:`
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
                .shop-sidebar {
                    position: sticky;
                    top: 190px;
                    align-self: start;
                }
                .sidebar-section {
                    background: linear-gradient(180deg, #ffffff 0%, #fbf8f4 100%);
                    border: 1px solid #ece2d7;
                    border-radius: 16px;
                    padding: 20px 16px;
                    box-shadow: 0 14px 28px rgba(38, 52, 67, 0.08);
                }
                
                .sidebar-title {
                    font-family: var(--font-serif);
                    font-size: 1.1rem;
                    margin-bottom: 14px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: var(--primary);
                    border-bottom: 1px solid #eadfce;
                    padding-bottom: 10px;
                }
                .category-list-luxury {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 9px;
                }
                .cat-btn-luxury {
                    background: #fff;
                    border: 1px solid #ede4db;
                    display: block;
                    width: 100%;
                    text-align: left;
                    padding: 12px 14px;
                    font-size: 0.86rem;
                    color: #586674;
                    cursor: pointer;
                    transition: all 0.28s ease;
                    text-transform: uppercase;
                    letter-spacing: 1.1px;
                    border-radius: 10px;
                    font-weight: 600;
                    position: relative;
                }
                .cat-btn-luxury::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 10px;
                    bottom: 10px;
                    width: 0;
                    border-radius: 0 8px 8px 0;
                    background: linear-gradient(180deg, #d4af37 0%, #b18b2f 100%);
                    transition: width 0.22s ease;
                }
                .cat-btn-luxury:hover {
                    color: #304355;
                    transform: translateX(2px);
                    border-color: #ddc08b;
                    background: #fffdf8;
                    box-shadow: 0 8px 16px rgba(29, 44, 62, 0.09);
                }
                .cat-btn-luxury:hover::before {
                    width: 4px;
                }
                .cat-btn-luxury.active {
                    color: var(--secondary);
                    border-color: #d6b06b;
                    background: linear-gradient(90deg, rgba(212, 175, 55, 0.18) 0%, rgba(212, 175, 55, 0.03) 80%);
                    box-shadow: 0 10px 18px rgba(28, 42, 58, 0.1);
                }
                .cat-btn-luxury.active::before {
                    width: 5px;
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
            `})]})},ix=()=>{const{id:e}=Zm(),{addToCart:t}=bn(),[r,n]=x.useState(null),[i,a]=x.useState(1),[l,s]=x.useState("description"),[u,c]=x.useState(!0),[h,d]=x.useState([]);return x.useEffect(()=>{(async()=>{try{const v=await(await fetch(`/api/products/${e}`)).json();n(v),c(!1),window.scrollTo(0,0);const N=await(await fetch("/api/products")).json();d(N.filter(m=>m.category===v.category&&m.id!==v.id).slice(0,4))}catch(y){console.error("Error fetching product:",y),c(!1)}})()},[e]),u?o.jsx("div",{className:"container section-padding",children:"Loading..."}):r?o.jsxs("div",{className:"product-details-page",children:[o.jsxs("div",{className:"container section-padding",children:[o.jsxs("nav",{className:"breadcrumb-luxury",children:[o.jsx(M,{to:"/",children:"Manifest"})," / ",o.jsx(M,{to:"/shop",children:"Shop"})," / ",o.jsx("span",{children:r.name})]}),o.jsxs("div",{className:"product-main-luxury",children:[o.jsx("div",{className:"product-gallery-luxury",children:o.jsx("div",{className:"main-image-luxury",children:o.jsx("img",{src:Gi(r),alt:r.name})})}),o.jsxs("div",{className:"product-info-boutique",children:[o.jsx("div",{className:"badges-luxury",children:r.is_sale&&o.jsx("span",{className:"badge-luxury",children:"Divine Sale"})}),o.jsx("h1",{className:"product-title-serif",children:r.name}),o.jsxs("div",{className:"product-rating-gold-large",children:[o.jsx("div",{className:"stars",children:[1,2,3,4,5].map(g=>o.jsx(Id,{size:14,fill:g<=4?"#D4AF37":"none",color:"#D4AF37"},g))}),o.jsx("span",{className:"review-meta",children:"24 Enlightened Reviews"})]}),o.jsxs("div",{className:"product-price-boutique",children:[r.old_price&&o.jsxs("span",{className:"old-price",children:["$",r.old_price]}),o.jsxs("span",{className:"current-price",children:["$",r.price]})]}),o.jsx("p",{className:"boutique-desc",children:r.description||"A masterfully selected crystal, chosen for its unique energetic imprint and aesthetic purity. A perfect companion for your manifestation journey."}),o.jsxs("div",{className:"boutique-actions",children:[o.jsxs("div",{className:"qty-luxury",children:[o.jsx("button",{onClick:()=>a(g=>Math.max(1,g-1)),children:o.jsx(Td,{size:16})}),o.jsx("span",{children:i}),o.jsx("button",{onClick:()=>a(g=>g+1),children:o.jsx(Md,{size:16})})]}),o.jsxs("button",{className:"btn-luxury-add",onClick:()=>t(r,i),children:[o.jsx(Ig,{size:18}),"Add to Sanctuary"]})]}),o.jsxs("div",{className:"boutique-features",children:[o.jsxs("div",{className:"feature-item",children:[o.jsx(qg,{size:18}),o.jsxs("div",{children:[o.jsx("p",{className:"f-title",children:"Sacred Delivery"}),o.jsx("p",{className:"f-desc",children:"Free on orders over $150"})]})]}),o.jsxs("div",{className:"feature-item",children:[o.jsx(Ad,{size:18}),o.jsxs("div",{children:[o.jsx("p",{className:"f-title",children:"Authentic Origin"}),o.jsx("p",{className:"f-desc",children:"100% Earth-born stones"})]})]})]})]})]}),o.jsxs("div",{className:"details-tabs-luxury",children:[o.jsxs("div",{className:"tab-headers-boutique",children:[o.jsx("button",{className:l==="description"?"active":"",onClick:()=>s("description"),children:"The Essence"}),o.jsx("button",{className:l==="benefits"?"active":"",onClick:()=>s("benefits"),children:"Vibrations"}),o.jsx("button",{className:l==="shipping"?"active":"",onClick:()=>s("shipping"),children:"Sacred Journey"})]}),o.jsxs("div",{className:"tab-content-boutique",children:[l==="description"&&o.jsxs("div",{className:"tab-pane-luxury fade-in",children:[o.jsx("p",{children:r.description}),o.jsx("p",{className:"nature-notice",children:"Note: Stones are natural minerals. Please embrace minor variance in color and structure as a signature of Earth's artistry."})]}),l==="benefits"&&o.jsx("div",{className:"tab-pane-luxury fade-in",children:o.jsxs("ul",{className:"benefits-list-luxury",children:[r.benefits&&r.benefits.map((g,y)=>o.jsx("li",{children:g},y)),o.jsx("li",{children:"Harmonizes personal energetic fields"}),o.jsx("li",{children:"Promotes deep cellular calm and mental clarity"})]})}),l==="shipping"&&o.jsxs("div",{className:"tab-pane-luxury fade-in",children:[o.jsx("p",{children:"We meticulously package your crystals with intention to ensure they arrive in perfect resonance."}),o.jsxs("ul",{className:"benefits-list-luxury",children:[o.jsx("li",{children:"Domestic Path: 5-7 business days"}),o.jsx("li",{children:"Expedited Path: 2-3 business days"}),o.jsx("li",{children:"Global Delivery available for all seekers"})]})]})]})]}),h.length>0&&o.jsxs("div",{className:"related-section-luxury",children:[o.jsxs("div",{className:"text-center mb-60",children:[o.jsx("span",{className:"hero-eyebrow",children:"Complementary"}),o.jsx("h2",{className:"section-title",children:"Synergistic Pairings"})]}),o.jsx("div",{className:"products-grid-luxury",children:h.map(g=>o.jsx(Lt,{product:g},g.id))})]})]}),o.jsx("style",{jsx:"true",children:`
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
            `})]}):o.jsx("div",{className:"container section-padding",children:"Product not found."})},ox=()=>{const{cartItems:e,removeFromCart:t,updateQuantity:r,cartTotal:n}=bn();return e.length===0?o.jsxs("div",{className:"container section-padding text-center",children:[o.jsxs("header",{className:"cart-header-luxury",children:[o.jsx("span",{className:"hero-eyebrow",children:"Your Selection"}),o.jsx("h1",{className:"hero-title",children:"Your Sanctuary is Empty"}),o.jsx("p",{className:"boutique-p",style:{maxWidth:"600px",margin:"0 auto 40px"},children:"It appears you haven't selected any crystal masterpieces for your collection yet."}),o.jsx(M,{to:"/shop",className:"btn-luxury-checkout",style:{display:"inline-block",width:"auto",padding:"20px 60px"},children:"Begin Your Discovery"})]}),o.jsx("style",{jsx:"true",children:`
                    .cart-header-luxury { padding: 100px 0; }
                    .boutique-p { font-family: var(--font-sans); color: var(--text-light); font-weight: 300; }
                    .btn-luxury-checkout { background: var(--primary); color: white; text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; text-decoration: none; transition: var(--transition); }
                    .btn-luxury-checkout:hover { background: var(--bg-dark); transform: translateY(-3px); }
                `})]}):o.jsxs("div",{className:"cart-page",children:[o.jsxs("div",{className:"container section-padding",children:[o.jsxs("header",{className:"cart-header-luxury",children:[o.jsx("span",{className:"hero-eyebrow",children:"Your Selection"}),o.jsx("h1",{className:"hero-title",children:"The Collection"})]}),o.jsxs("div",{className:"cart-layout-luxury",children:[o.jsxs("div",{className:"cart-items-luxury",children:[o.jsxs("div",{className:"cart-table-header",children:[o.jsx("span",{className:"col-product",children:"Masterpiece"}),o.jsx("span",{className:"col-price",children:"Offering"}),o.jsx("span",{className:"col-quantity",children:"Quantity"}),o.jsx("span",{className:"col-total",children:"Subtotal"})]}),e.map(i=>{var a;return o.jsxs("div",{className:"cart-item-luxury fade-in",children:[o.jsx("div",{className:"col-product",children:o.jsxs("div",{className:"item-info-boutique",children:[o.jsx("div",{className:"item-img-luxury",children:o.jsx("img",{src:Gi(i),alt:i.name})}),o.jsxs("div",{className:"item-text",children:[o.jsx("h3",{className:"item-name-serif",children:i.name}),o.jsx("p",{className:"item-meta",children:((a=i.category)==null?void 0:a.name)||"Crystal"}),o.jsx("button",{className:"remove-luxury",onClick:()=>t(i.id),children:"Remove from Sanctuary"})]})]})}),o.jsxs("div",{className:"col-price-luxury",children:["$",i.price.toFixed(2)]}),o.jsx("div",{className:"col-quantity",children:o.jsxs("div",{className:"qty-boutique",children:[o.jsx("button",{onClick:()=>r(i.id,i.quantity-1),children:o.jsx(Td,{size:12})}),o.jsx("span",{children:i.quantity}),o.jsx("button",{onClick:()=>r(i.id,i.quantity+1),children:o.jsx(Md,{size:12})})]})}),o.jsxs("div",{className:"col-total-luxury",children:["$",(i.price*i.quantity).toFixed(2)]})]},i.id)}),o.jsx("div",{className:"cart-actions-luxury",children:o.jsxs(M,{to:"/shop",className:"back-to-shop",children:[o.jsx(rg,{size:16})," Rediscover Collection"]})})]}),o.jsxs("aside",{className:"summary-sidebar-luxury",children:[o.jsx("h3",{className:"sidebar-title-serif",children:"Manifestation Summary"}),o.jsxs("div",{className:"summary-details-luxury",children:[o.jsxs("div",{className:"summary-row-luxury",children:[o.jsx("span",{children:"Collection Total"}),o.jsxs("span",{children:["$",n.toFixed(2)]})]}),o.jsxs("div",{className:"summary-row-luxury",children:[o.jsx("span",{children:"Sacred Delivery"}),o.jsx("span",{children:n>150?"Complimentary":"$15.00"})]}),o.jsxs("div",{className:"summary-total-luxury",children:[o.jsx("span",{children:"Total Amount"}),o.jsxs("span",{children:["$",(n>150?n:n+15).toFixed(2)]})]})]}),n<150&&o.jsx("div",{className:"shipping-upsell-luxury",children:o.jsxs("p",{children:["Invite $",(150-n).toFixed(0)," more to your collection for complimentary delivery."]})}),o.jsx(M,{to:"/checkout",className:"btn-luxury-checkout",children:"Proceed to Acquisition"}),o.jsxs("div",{className:"trust-luxury",children:[o.jsx(Ad,{size:16}),o.jsx("span",{children:"Secured Spiritual Exchange"})]})]})]})]}),o.jsx("style",{jsx:"true",children:`
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
            `})]})},ax=()=>{const{cartItems:e,cartTotal:t,clearCart:r}=bn(),{customer:n,loading:i}=Sn(),a=Pe(),l=new URLSearchParams(a.search),s=l.get("status"),u=l.get("session_id"),[c,h]=x.useState("idle"),[d,g]=x.useState(null),[y,v]=x.useState(1),[w,N]=x.useState(!1),[m,p]=x.useState(""),[f,k]=x.useState({email:"",firstName:"",lastName:"",address:"",city:"",zipCode:""});x.useEffect(()=>{n&&k(j=>{const _=(n.full_name||"").trim(),[R="",...B]=_.split(/\s+/),fe=B.join(" ");return{...j,email:n.email||j.email,firstName:j.firstName||R,lastName:j.lastName||fe}})},[n]),x.useEffect(()=>{(async()=>{if(!(s!=="success"||!u)){h("loading");try{const _=await fetch(`/api/checkout-session-status?session_id=${encodeURIComponent(u)}`),R=await _.json();if(!_.ok)throw new Error(R.error||"Unable to verify payment");R.payment_status==="paid"?(R.order_id&&(g(R.order_id),localStorage.setItem("as_last_order_id",String(R.order_id))),r(),h("paid")):h("unpaid")}catch(_){console.error("Payment verification error:",_),h("error")}}})()},[s,u,r]);const S=j=>{k({...f,[j.target.name]:j.target.value})},E=async j=>{if(j.preventDefault(),p(""),y===1){v(2);return}if(y===2||y===3){await C();return}},C=async()=>{if(p(""),e.length===0){p("Your cart is empty.");return}try{N(!0);const j=await fetch("/api/create-checkout-session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items:e,customer:{email:f.email,firstName:f.firstName,lastName:f.lastName},shipping:{address:f.address,city:f.city,zipCode:f.zipCode}})}),_=await j.json();if(!j.ok)throw new Error(_.error||"Error creating checkout session");if(!_.url)throw new Error("Stripe checkout URL was not returned.");localStorage.setItem("as_last_order_email",f.email.trim().toLowerCase()),window.location.href=_.url}catch(j){console.error("Checkout error:",j),p(j.message||"Something went wrong. Please try again.")}finally{N(!1)}};return s==="success"?c==="loading"||c==="idle"?o.jsxs("div",{className:"container section-padding text-center success-page",children:[o.jsx("h1",{children:"Verifying Payment..."}),o.jsx("p",{children:"Please wait while we confirm your Stripe payment."})]}):c!=="paid"?o.jsxs("div",{className:"container section-padding text-center success-page",children:[o.jsx(_i,{size:80,color:"#E91E63",style:{marginBottom:"30px"}}),o.jsx("h1",{children:"Payment Not Confirmed Yet"}),o.jsx("p",{children:"We could not verify your payment. If you were charged, contact support with your payment receipt."}),o.jsx(M,{to:"/cart",className:"btn btn-primary",style:{marginTop:"30px"},children:"Return to Cart"})]}):o.jsxs("div",{className:"container section-padding text-center success-page",children:[o.jsx(og,{size:80,color:"#E91E63",style:{marginBottom:"30px"}}),o.jsx("h1",{children:"Payment Successful!"}),o.jsx("p",{children:"Your order has been paid and is now being prepared."}),d&&o.jsxs("p",{children:["Your order number is #",d,"."]}),o.jsx(M,{to:"/orders",className:"btn btn-primary",style:{marginTop:"20px",marginRight:"10px"},children:"View My Orders"}),o.jsx(M,{to:"/shop",className:"btn btn-primary",style:{marginTop:"30px"},children:"Continue Shopping"})]}):s==="cancel"?o.jsxs("div",{className:"container section-padding text-center success-page",children:[o.jsx(_i,{size:80,color:"#E91E63",style:{marginBottom:"30px"}}),o.jsx("h1",{children:"Payment Cancelled"}),o.jsx("p",{children:"Your payment was not completed. Please try again when you are ready."}),o.jsx(M,{to:"/cart",className:"btn btn-primary",style:{marginTop:"30px"},children:"Return to Cart"})]}):i?o.jsx("div",{className:"container section-padding text-center success-page",children:o.jsx("h1",{children:"Loading..."})}):n?o.jsxs("div",{className:"checkout-page",children:[o.jsxs("div",{className:"container section-padding",children:[o.jsxs("div",{className:"checkout-steps-luxury",children:[o.jsxs("div",{className:`step-item-boutique ${y>=1?"active":""}`,children:[o.jsx("span",{children:"I"})," Shipping"]}),o.jsx("div",{className:"step-divider-luxury"}),o.jsxs("div",{className:`step-item-boutique ${y>=2?"active":""}`,children:[o.jsx("span",{children:"II"})," Payment"]}),o.jsx("div",{className:"step-divider-luxury"}),o.jsxs("div",{className:`step-item-boutique ${y>=3?"active":""}`,children:[o.jsx("span",{children:"III"})," Review"]})]}),o.jsxs("div",{className:"checkout-layout-luxury",children:[o.jsx("div",{className:"checkout-main-panel",children:o.jsxs("form",{className:"checkout-form-luxury",onSubmit:E,children:[y===1&&o.jsxs("div",{className:"form-section-luxury fade-in",children:[o.jsx("h2",{className:"section-title-small",children:"Shipping Details"}),o.jsxs("div",{className:"form-grid-luxury",children:[o.jsxs("div",{className:"form-group-luxury full",children:[o.jsx("label",{children:"Email (Account)"}),o.jsx("input",{type:"email",name:"email",required:!0,value:f.email,readOnly:!0})]}),o.jsxs("div",{className:"form-group-luxury",children:[o.jsx("label",{children:"First Name"}),o.jsx("input",{type:"text",name:"firstName",required:!0,value:f.firstName,onChange:S})]}),o.jsxs("div",{className:"form-group-luxury",children:[o.jsx("label",{children:"Last Name"}),o.jsx("input",{type:"text",name:"lastName",required:!0,value:f.lastName,onChange:S})]}),o.jsxs("div",{className:"form-group-luxury full",children:[o.jsx("label",{children:"Address"}),o.jsx("input",{type:"text",name:"address",required:!0,value:f.address,onChange:S})]}),o.jsxs("div",{className:"form-group-luxury",children:[o.jsx("label",{children:"City"}),o.jsx("input",{type:"text",name:"city",required:!0,value:f.city,onChange:S})]}),o.jsxs("div",{className:"form-group-luxury",children:[o.jsx("label",{children:"Postal Code"}),o.jsx("input",{type:"text",name:"zipCode",required:!0,value:f.zipCode,onChange:S})]})]}),o.jsx("button",{type:"submit",className:"btn-luxury-submit",children:"Continue to Payment"})]}),y===2&&o.jsxs("div",{className:"form-section-luxury fade-in",children:[o.jsx("h2",{className:"section-title-small",children:"Secure Stripe Payment"}),o.jsx("div",{className:"payment-select-luxury",children:o.jsxs("div",{className:"payment-option-boutique active",children:[o.jsx(lg,{size:18}),o.jsx("span",{children:"Card payment powered by Stripe Checkout"})]})}),o.jsx("div",{className:"review-card-boutique",style:{marginBottom:"30px"},children:o.jsxs("div",{className:"review-item",children:[o.jsx("span",{className:"review-label",children:"Card Entry"}),o.jsx("p",{className:"review-val",children:"Click below to open Stripe and enter your card details securely."})]})}),o.jsxs("div",{className:"btn-group-luxury",children:[o.jsx("button",{type:"button",className:"btn-luxury-back",onClick:()=>v(1),children:"Back"}),o.jsx("button",{type:"submit",className:"btn-luxury-submit",disabled:w,children:w?"Redirecting...":`Pay ${(t+(t>150?0:15)).toFixed(2)} with Card`})]}),m&&o.jsx("p",{className:"checkout-error",children:m})]}),y===3&&o.jsxs("div",{className:"form-section-luxury fade-in",children:[o.jsx("h2",{className:"section-title-small",children:"Final Review"}),o.jsxs("div",{className:"review-card-boutique",children:[o.jsxs("div",{className:"review-item",children:[o.jsx("span",{className:"review-label",children:"Customer"}),o.jsxs("p",{className:"review-val",children:[f.firstName," ",f.lastName]})]}),o.jsxs("div",{className:"review-item",children:[o.jsx("span",{className:"review-label",children:"Address"}),o.jsxs("p",{className:"review-val",children:[f.address,", ",f.city," ",f.zipCode]})]}),o.jsxs("div",{className:"review-item",children:[o.jsx("span",{className:"review-label",children:"Payment"}),o.jsx("p",{className:"review-val",children:"Secure checkout on Stripe"})]})]}),o.jsx("button",{type:"submit",className:"btn-luxury-submit full-width",disabled:w,children:w?"Redirecting...":`Pay ${(t+(t>150?0:15)).toFixed(2)} with Stripe`}),m&&o.jsx("p",{className:"checkout-error",children:m}),o.jsx("button",{type:"button",className:"btn-text-luxury",onClick:()=>v(2),children:"Back to Payment"})]})]})}),o.jsxs("aside",{className:"order-sidebar-luxury",children:[o.jsx("h3",{className:"sidebar-title-serif",children:"Order Summary"}),o.jsx("div",{className:"sidebar-items-luxury",children:e.map(j=>o.jsxs("div",{className:"sidebar-item-boutique",children:[o.jsx("div",{className:"sidebar-img",children:o.jsx("img",{src:Gi(j),alt:j.name})}),o.jsxs("div",{className:"sidebar-info",children:[o.jsxs("p",{className:"s-name",children:[j.name," ",o.jsxs("span",{className:"s-qty",children:["x ",j.quantity]})]}),o.jsxs("p",{className:"s-price",children:["$",(j.price*j.quantity).toFixed(2)]})]})]},j.id))}),o.jsxs("div",{className:"sidebar-totals-luxury",children:[o.jsxs("div",{className:"s-row",children:[o.jsx("span",{children:"Subtotal"}),o.jsxs("span",{children:["$",t.toFixed(2)]})]}),o.jsxs("div",{className:"s-row",children:[o.jsx("span",{children:"Shipping"}),o.jsx("span",{children:t>150?"Free":"$15.00"})]}),o.jsxs("div",{className:"s-row total",children:[o.jsx("span",{children:"Total"}),o.jsxs("span",{children:["$",(t>150?t:t+15).toFixed(2)]})]})]})]})]})]}),o.jsx("style",{jsx:"true",children:`
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
      `})]}):o.jsxs("div",{className:"container section-padding text-center success-page",children:[o.jsx("h1",{children:"Login Required"}),o.jsx("p",{children:"Please signup or login before placing an order."}),o.jsx(M,{to:"/login?redirect=/checkout",className:"btn btn-primary",style:{marginTop:"20px",marginRight:"10px"},children:"Login"}),o.jsx(M,{to:"/signup?redirect=/checkout",className:"btn btn-primary",style:{marginTop:"20px"},children:"Signup"})]})},lx=()=>o.jsxs("div",{className:"about-page",children:[o.jsx("section",{className:"about-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("span",{className:"hero-eyebrow",children:"About Us"}),o.jsx("h1",{className:"hero-title",children:"AS Crystal"}),o.jsx("p",{className:"hero-desc",children:"Healing crystals and natural gemstones for Reiki healing, crystal therapy and everyday wellness."})]})}),o.jsx("section",{className:"section-padding",children:o.jsxs("div",{className:"container about-grid",children:[o.jsxs("div",{className:"about-copy",children:[o.jsx("h2",{className:"section-title-serif",children:"Our Story"}),o.jsx("p",{children:"AS Crystal was created to make authentic crystal tools more accessible to spiritual seekers and wellness-focused families. We curate products that blend practical use with energetic intention."}),o.jsx("p",{children:"From bracelets and malas to tumble stones and healing sets, each item is selected to support focused goals like protection, clarity, grounding, confidence and prosperity."}),o.jsx("p",{children:"Along with products, we offer Reiki healing sessions, crystal consultation and training programs for people who want guided support in their energy journey."})]}),o.jsxs("div",{className:"about-points",children:[o.jsxs("article",{children:[o.jsx("h3",{children:"Authentic Selection"}),o.jsx("p",{children:"Carefully sourced crystal products selected for quality, finish and energetic use."})]}),o.jsxs("article",{children:[o.jsx("h3",{children:"Consultation Support"}),o.jsx("p",{children:"Get practical guidance on what to choose for relationship, career, health and peace."})]}),o.jsxs("article",{children:[o.jsx("h3",{children:"Training Path"}),o.jsx("p",{children:"Beginner to advanced Reiki learning options with crystal integration workshops."})]}),o.jsxs("article",{children:[o.jsx("h3",{children:"Customer-First Service"}),o.jsx("p",{children:"Responsive support before and after purchase to help you use products effectively."})]})]})]})}),o.jsx("section",{className:"about-stats",children:o.jsxs("div",{className:"container stats-grid",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"100+"}),o.jsx("span",{children:"Product Options"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"5+"}),o.jsx("span",{children:"Healing Services"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"6"}),o.jsx("span",{children:"Training Programs"})]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Daily"}),o.jsx("span",{children:"Support Available"})]})]})}),o.jsx("style",{jsx:"true",children:`
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
      `})]}),sx=()=>{const e=["General Manifestation","Order Sanctuary Support","Wholesale Partnerships","Bespoke Selection"],[t,r]=x.useState(e[0]),[n,i]=x.useState(!1),a=x.useRef(null);return x.useEffect(()=>{const l=u=>{a.current&&!a.current.contains(u.target)&&i(!1)},s=u=>{u.key==="Escape"&&i(!1)};return document.addEventListener("mousedown",l),document.addEventListener("keydown",s),()=>{document.removeEventListener("mousedown",l),document.removeEventListener("keydown",s)}},[]),o.jsxs("div",{className:"contact-page",children:[o.jsx("div",{className:"boutique-contact-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("span",{className:"hero-eyebrow white",children:"Connect"}),o.jsx("h1",{className:"hero-title white",children:"Sacred Inquiries"}),o.jsx("p",{className:"boutique-hero-p white",children:"We are here to assist you on your journey of discovery. Reach out for bespoke selections or spiritual guidance."})]})}),o.jsx("section",{className:"section-padding",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"contact-layout-boutique",children:[o.jsxs("div",{className:"contact-info-panel",children:[o.jsx("h2",{className:"section-title-serif",children:"The Sanctuary Studio"}),o.jsx("p",{className:"boutique-p",children:"Whether you seek a specific vibration, require guidance on crystal care, or wish to inquire about a unique manifestation, our stewards are ready to help."}),o.jsxs("div",{className:"boutique-contact-methods",children:[o.jsxs("div",{className:"contact-method-item",children:[o.jsx("div",{className:"method-icon",children:o.jsx(Rd,{size:20,strokeWidth:1})}),o.jsxs("div",{className:"method-text",children:[o.jsx("h3",{children:"Electronic Mail"}),o.jsx("p",{children:"ascrystal0204@gmail.com"})]})]}),o.jsxs("div",{className:"contact-method-item",children:[o.jsx("div",{className:"method-icon",children:o.jsx(Fd,{size:20,strokeWidth:1})}),o.jsxs("div",{className:"method-text",children:[o.jsx("h3",{children:"Direct Dial"}),o.jsx("p",{children:"+1 (555) 123-4567"})]})]}),o.jsxs("div",{className:"contact-method-item",children:[o.jsx("div",{className:"method-icon",children:o.jsx(Ld,{size:20,strokeWidth:1})}),o.jsxs("div",{className:"method-text",children:[o.jsx("h3",{children:"Sacred Studio"}),o.jsx("p",{children:"123 Healing Way, Crystal Valley, CA 90210"})]})]})]}),o.jsxs("div",{className:"boutique-social-presence",children:[o.jsx("h3",{children:"Digital Footprints"}),o.jsxs("div",{className:"social-icons-row",children:[o.jsx("a",{href:"#",children:o.jsx(_d,{size:24})}),o.jsx("a",{href:"#",children:o.jsx(Pd,{size:24})}),o.jsx("a",{href:"#",children:o.jsx(Dd,{size:24})})]})]})]}),o.jsxs("form",{className:"boutique-contact-form",children:[o.jsx("h3",{className:"form-title-serif",children:"Send Your Word"}),o.jsxs("div",{className:"form-grid-boutique",children:[o.jsxs("div",{className:"form-group-boutique",children:[o.jsx("label",{children:"First Name"}),o.jsx("input",{type:"text",placeholder:"e.g. Julian",required:!0})]}),o.jsxs("div",{className:"form-group-boutique",children:[o.jsx("label",{children:"Last Name"}),o.jsx("input",{type:"text",placeholder:"e.g. Thorne",required:!0})]}),o.jsxs("div",{className:"form-group-boutique full",children:[o.jsx("label",{children:"Email Address"}),o.jsx("input",{type:"email",placeholder:"julian@reikicrystals.com",required:!0})]}),o.jsxs("div",{className:"form-group-boutique full",children:[o.jsx("label",{children:"The Nature of Your Inquiry"}),o.jsxs("div",{className:"boutique-select-wrap",ref:a,children:[o.jsx("input",{type:"hidden",name:"inquiry_type",value:t}),o.jsxs("button",{type:"button",className:"boutique-select-trigger",onClick:()=>i(l=>!l),"aria-haspopup":"listbox","aria-expanded":n,children:[o.jsx("span",{children:t}),o.jsx(zd,{size:18,className:`select-chevron ${n?"open":""}`})]}),n&&o.jsx("ul",{className:"boutique-select-menu",role:"listbox",children:e.map(l=>o.jsx("li",{children:o.jsx("button",{type:"button",className:`select-option ${t===l?"active":""}`,onClick:()=>{r(l),i(!1)},children:l})},l))})]})]}),o.jsxs("div",{className:"form-group-boutique full",children:[o.jsx("label",{children:"Your Message to Us"}),o.jsx("textarea",{rows:"5",placeholder:"Share your intentions..."})]})]}),o.jsxs("button",{type:"submit",className:"btn-luxury-submit full-width",children:["Transmit Message ",o.jsx(Tg,{size:16,style:{marginLeft:"10px"}})]})]})]})})}),o.jsxs("div",{className:"boutique-studio-image",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop",alt:"Our Sacred Studio"}),o.jsx("div",{className:"studio-overlay",children:o.jsxs("div",{className:"studio-label",children:[o.jsx("span",{className:"hero-eyebrow white",children:"Our Studio"}),o.jsx("p",{children:"Crystal Valley, CA — Open Mon–Sat, 10am–6pm"})]})})]}),o.jsx("style",{jsx:"true",children:`
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
                .form-group-boutique input, .form-group-boutique textarea { border: none; border-bottom: 1px solid #F0EAE5; padding: 12px 0; font-size: 1rem; color: var(--primary); background: transparent; transition: var(--transition); }
                .form-group-boutique input:focus, .form-group-boutique textarea:focus { outline: none; border-color: var(--secondary); }

                .boutique-select-wrap {
                    position: relative;
                }
                .boutique-select-trigger {
                    width: 100%;
                    border: 1px solid #E8DED3;
                    border-radius: 12px;
                    padding: 14px 16px;
                    min-height: 58px;
                    font-size: 1rem;
                    color: var(--primary);
                    background: linear-gradient(180deg, #ffffff 0%, #fbf8f4 100%);
                    transition: border-color 0.25s ease, box-shadow 0.25s ease;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    text-align: left;
                }
                .boutique-select-trigger:focus {
                    outline: none;
                    border-color: var(--secondary);
                    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.18);
                }
                .select-chevron {
                    color: #7B8894;
                    transition: transform 0.22s ease;
                }
                .select-chevron.open {
                    transform: rotate(180deg);
                }
                .boutique-select-menu {
                    position: absolute;
                    top: calc(100% + 8px);
                    left: 0;
                    right: 0;
                    background: #fff;
                    border: 1px solid #E6DBCE;
                    border-radius: 12px;
                    box-shadow: 0 14px 28px rgba(31, 49, 71, 0.12);
                    z-index: 20;
                    padding: 8px;
                }
                .select-option {
                    width: 100%;
                    border: none;
                    background: transparent;
                    text-align: left;
                    padding: 11px 12px;
                    border-radius: 8px;
                    color: #2a3e54;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: background 0.2s ease, color 0.2s ease;
                }
                .select-option:hover {
                    background: #f8f3e9;
                    color: #213449;
                }
                .select-option.active {
                    background: linear-gradient(90deg, rgba(212, 175, 55, 0.25), rgba(212, 175, 55, 0.08));
                    color: #213449;
                    font-weight: 600;
                }
                
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
            `})]})},ux=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{const l=await(await fetch("/api/products")).json();t(l.filter(s=>s.category&&s.category.name==="Gifts"||s.is_featured)),n(!1)}catch(a){console.error("Error fetching products:",a),n(!1)}})()},[]),o.jsxs("div",{className:"category-page",children:[o.jsx("header",{className:"shop-hero luxury-gifts-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("span",{className:"hero-eyebrow",children:"Soulful Giving"}),o.jsx("h1",{className:"hero-title",children:"Crystal Gift Collections"}),o.jsx("p",{className:"hero-desc",children:"Thoughtfully curated sets to bring harmony, love, and protection to your loved ones."})]})}),o.jsxs("div",{className:"container section-padding",children:[o.jsxs("div",{className:"intro-text text-center mb-60",children:[o.jsx("h2",{className:"section-title-serif",children:"Perfect for Every Occasion"}),o.jsx("p",{style:{maxWidth:"700px",margin:"0 auto",color:"var(--text-light)",fontWeight:"300"},children:"Whether it's a birthday, anniversary, or a gesture of support, our crystal gifts are intentions wrapped in nature's beauty."})]}),o.jsx("div",{className:"products-grid-luxury",children:r?o.jsx("div",{className:"loading-state",children:"Wrapping intentions..."}):e.length>0?e.map(i=>o.jsx(Lt,{product:i},i.id)):o.jsx("div",{className:"no-results",children:"Our gift collection is being updated. Check back soon!"})})]}),o.jsx("style",{jsx:"true",children:`
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
            `})]})},cx=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{const l=await(await fetch("/api/products")).json();t(l.filter(s=>s.category&&s.category.name==="Vastu & Feng Shui")),n(!1)}catch(a){console.error("Error fetching products:",a),n(!1)}})()},[]),o.jsxs("div",{className:"category-page",children:[o.jsx("header",{className:"shop-hero luxury-hero-bg",children:o.jsxs("div",{className:"container",children:[o.jsx("span",{className:"hero-eyebrow",children:"Sacred Space Harmony"}),o.jsx("h1",{className:"hero-title",children:"Vastu & Feng Shui"}),o.jsx("p",{className:"hero-desc",children:"Ancient remedies and architectural alignments to harmonize your living and working environments."})]})}),o.jsxs("div",{className:"container section-padding",children:[o.jsxs("div",{className:"intro-text text-center mb-60",children:[o.jsx("h2",{className:"section-title-serif",children:"Energize Your Environment"}),o.jsx("p",{style:{maxWidth:"700px",margin:"0 auto",color:"var(--text-light)",fontWeight:"300"},children:"From salt lamps to crystal pyramids, our Vastu and Feng Shui collection is designed to correct energetic imbalances and invite abundance into your space."})]}),o.jsx("div",{className:"products-grid-luxury",children:r?o.jsx("div",{className:"loading-state",children:"Aligning energies..."}):e.length>0?e.map(i=>o.jsx(Lt,{product:i},i.id)):o.jsx("div",{className:"no-results",children:"Sacred space tools are being arriving soon."})})]}),o.jsx("style",{jsx:"true",children:`
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
            `})]})},dx=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{const l=await(await fetch("/api/products")).json();t(l.filter(s=>s.category&&s.category.name==="Healing Stones")),n(!1)}catch(a){console.error("Error fetching products:",a),n(!1)}})()},[]),o.jsxs("div",{className:"category-page",children:[o.jsx("header",{className:"shop-hero luxury-stones-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("span",{className:"hero-eyebrow",children:"Ancient Wisdom"}),o.jsx("h1",{className:"hero-title",children:"Healing Stones"}),o.jsx("p",{className:"hero-desc",children:"Raw and polished gems, hand-selected for their unique vibrational properties."})]})}),o.jsxs("div",{className:"container section-padding",children:[o.jsxs("div",{className:"intro-text text-center mb-60",children:[o.jsx("h2",{className:"section-title-serif",children:"Earth's Natural Vibrations"}),o.jsx("p",{style:{maxWidth:"700px",margin:"0 auto",color:"var(--text-light)",fontWeight:"300"},children:"From grounding black tourmaline to heart-opening rose quartz, discover the perfect companion for your spiritual journey."})]}),o.jsx("div",{className:"products-grid-luxury",children:r?o.jsx("div",{className:"loading-state",children:"Cleansing stones..."}):e.length>0?e.map(i=>o.jsx(Lt,{product:i},i.id)):o.jsx("div",{className:"no-results",children:"New stones are arriving soon!"})})]}),o.jsx("style",{jsx:"true",children:`
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
            `})]})},px=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{const l=await(await fetch("/api/products")).json();t(l.filter(s=>s.category&&s.category.name==="Reiki Tools")),n(!1)}catch(a){console.error("Error fetching products:",a),n(!1)}})()},[]),o.jsxs("div",{className:"category-page",children:[o.jsx("header",{className:"shop-hero luxury-tools-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("span",{className:"hero-eyebrow",children:"Sacred Practices"}),o.jsx("h1",{className:"hero-title",children:"Reiki Tools"}),o.jsx("p",{className:"hero-desc",children:"Professional-grade pendulums, chakra sets, and healing symbols for the modern practitioner."})]})}),o.jsxs("div",{className:"container section-padding",children:[o.jsxs("div",{className:"intro-text text-center mb-60",children:[o.jsx("h2",{className:"section-title-serif",children:"Elevate Your Practice"}),o.jsx("p",{style:{maxWidth:"700px",margin:"0 auto",color:"var(--text-light)",fontWeight:"300"},children:"Each tool is energetically cleansed and prepared specifically for lightwork, ensuring you have the highest vibration instruments for your sessions."})]}),o.jsx("div",{className:"products-grid-luxury",children:r?o.jsx("div",{className:"loading-state",children:"Tuning energies..."}):e.length>0?e.map(i=>o.jsx(Lt,{product:i},i.id)):o.jsx("div",{className:"no-results",children:"Sacred tools are being prepared."})})]}),o.jsx("style",{jsx:"true",children:`
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
            `})]})},fx=()=>{const[e,t]=x.useState([]),[r,n]=x.useState(!0);return x.useEffect(()=>{(async()=>{try{const l=await(await fetch("/api/products")).json();t(l.filter(s=>s.category&&s.category.name==="Crystal Jewelry")),n(!1)}catch(a){console.error("Error fetching products:",a),n(!1)}})()},[]),o.jsxs("div",{className:"category-page",children:[o.jsx("header",{className:"shop-hero luxury-jewelry-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("span",{className:"hero-eyebrow",children:"Wearable Wisdom"}),o.jsx("h1",{className:"hero-title",children:"Crystal Jewelry"}),o.jsx("p",{className:"hero-desc",children:"Elegant, artisanal pieces designed to keep you in sync with Earth's natural frequency."})]})}),o.jsxs("div",{className:"container section-padding",children:[o.jsxs("div",{className:"intro-text text-center mb-60",children:[o.jsx("h2",{className:"section-title-serif",children:"Soulful Adornment"}),o.jsx("p",{style:{maxWidth:"700px",margin:"0 auto",color:"var(--text-light)",fontWeight:"300"},children:"From grounding malás to protective pendants, our jewelry collection blends aesthetic beauty with powerful spiritual intentions."})]}),o.jsx("div",{className:"products-grid-luxury",children:r?o.jsx("div",{className:"loading-state",children:"Polishing gems..."}):e.length>0?e.map(i=>o.jsx(Lt,{product:i},i.id)):o.jsx("div",{className:"no-results",children:"Our collection is being expanded."})})]}),o.jsx("style",{jsx:"true",children:`
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
            `})]})},mx=[{title:"Reiki Level 1",desc:"Foundations of self-healing, hand positions and energetic awareness.",level:"Beginner"},{title:"Reiki Level 2",desc:"Distance healing, advanced symbols and deeper emotional healing techniques.",level:"Intermediate"},{title:"Reiki Master Healer",desc:"Master-level energetic work for committed healing practitioners.",level:"Advanced"},{title:"Reiki Master Teacher",desc:"Teaching methodology and attunement process for future Reiki teachers.",level:"Advanced"},{title:"Reiki Grand Master",desc:"Highest-level initiation for long-term dedicated Reiki path practitioners.",level:"Mastery"},{title:"Crystal Healing Workshop",desc:"Practical crystal cleansing, charging and application for life goals.",level:"Workshop"}],hx=()=>o.jsxs("div",{className:"category-page",children:[o.jsx("header",{className:"shop-hero trainings-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("span",{className:"hero-eyebrow",children:"Training & Consultancy"}),o.jsx("h1",{className:"hero-title",children:"Reiki & Crystal Learning Programs"}),o.jsx("p",{className:"hero-desc",children:"Structured programs for beginners, practitioners and advanced healers."})]})}),o.jsx("section",{className:"section-padding",children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"program-grid",children:mx.map(e=>o.jsxs("article",{className:"program-card",children:[o.jsx("span",{children:e.level}),o.jsx("h3",{children:e.title}),o.jsx("p",{children:e.desc}),o.jsx("button",{className:"btn-luxury-sm",children:"Enroll Now"})]},e.title))})})}),o.jsx("style",{jsx:"true",children:`
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
      `})]}),gx=[{title:"Reiki Healing",duration:"45-60 min",desc:"Core healing session focused on chakra balancing, emotional release and energetic alignment."},{title:"Reiki Emergency Healing",duration:"30 min",desc:"Immediate support session for stress, anxiety and urgent energetic disturbances."},{title:"Reiki Personalized Healing",duration:"60 min",desc:"Customized Reiki session designed around your personal goals and current life blocks."},{title:"Crystal Healing",duration:"60 min",desc:"Crystal-assisted healing using selected stones to support grounding, clarity and vitality."},{title:"Crystal Vastu Consultation",duration:"On-site / Virtual",desc:"Guided crystal placement for home or office to improve harmony, focus and prosperity flow."},{title:"Aura Cleansing",duration:"40 min",desc:"Smoke, sound and intention-based aura cleanse to remove heavy energy and restore balance."}],xx=()=>o.jsxs("div",{className:"category-page",children:[o.jsx("header",{className:"shop-hero services-hero",children:o.jsxs("div",{className:"container",children:[o.jsx("span",{className:"hero-eyebrow",children:"Our Services"}),o.jsx("h1",{className:"hero-title",children:"Reiki & Crystal Healing Sessions"}),o.jsx("p",{className:"hero-desc",children:"Professional healing and consultation services inspired by traditional Reiki and gemstone therapy."})]})}),o.jsx("section",{className:"section-padding",children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"services-grid",children:gx.map(e=>o.jsxs("article",{className:"service-card",children:[o.jsx("span",{className:"time-pill",children:e.duration}),o.jsx("h3",{children:e.title}),o.jsx("p",{children:e.desc}),o.jsx("button",{className:"btn-luxury-sm",children:"Book Now"})]},e.title))})})}),o.jsx("style",{jsx:"true",children:`
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
      `})]}),yx=()=>o.jsxs("div",{className:"container section-padding",children:[o.jsx("h1",{className:"hero-title",style:{fontSize:"3rem",marginBottom:"20px"},children:"Privacy Policy"}),o.jsx("p",{style:{color:"var(--text-light)",maxWidth:"900px"},children:"We only use your information to process orders, communicate order updates, and improve your experience. Payment data is handled by secure third-party providers and is never stored on this site."})]}),vx=()=>o.jsxs("div",{className:"container section-padding",children:[o.jsx("h1",{className:"hero-title",style:{fontSize:"3rem",marginBottom:"20px"},children:"Terms and Conditions"}),o.jsx("p",{style:{color:"var(--text-light)",maxWidth:"900px"},children:"By using this site, you agree to our product, payment, and shipping terms. Orders are confirmed after successful payment, and delivery estimates are provided at checkout."})]}),Hs={pending:"pending",paid:"paid",processing:"processing",shipped:"shipped",delivered:"delivered",cancelled:"cancelled",refunded:"refunded"},Eo=e=>`$${Number(e||0).toFixed(2)}`,wx=e=>e?new Date(e).toLocaleString():"-",jx=()=>{const[e,t]=x.useState(""),[r,n]=x.useState([]),[i,a]=x.useState(!1),[l,s]=x.useState("");x.useEffect(()=>{const g=new URLSearchParams(window.location.search).get("email")||"",y=localStorage.getItem("as_last_order_email")||"",v=g||y;v&&(t(v),c(v))},[]);const u=x.useMemo(()=>r.reduce((d,g)=>{const y=g.status||"pending";return d[y]=(d[y]||0)+1,d},{}),[r]),c=async(d=e)=>{const g=d.trim().toLowerCase();if(!g){s("Please enter your email to view orders."),n([]);return}try{a(!0),s("");const y=await fetch(`/api/orders?email=${encodeURIComponent(g)}`),v=await y.json();if(!y.ok)throw new Error(v.error||"Unable to load orders.");n(Array.isArray(v)?v:[]),localStorage.setItem("as_last_order_email",g)}catch(y){n([]),s(y.message||"Unable to load orders.")}finally{a(!1)}},h=d=>{d.preventDefault(),c()};return o.jsxs("div",{className:"orders-page",children:[o.jsxs("div",{className:"container section-padding",children:[o.jsxs("div",{className:"orders-header",children:[o.jsx("h1",{children:"My Orders"}),o.jsx("p",{children:"Track your order status, view order details, and download invoice or packing slip."})]}),o.jsxs("form",{className:"order-search",onSubmit:h,children:[o.jsxs("div",{className:"search-input-wrap",children:[o.jsx(Pi,{size:16}),o.jsx("input",{type:"email",placeholder:"Enter your checkout email",value:e,onChange:d=>t(d.target.value),required:!0})]}),o.jsx("button",{type:"submit",disabled:i,children:i?"Loading...":"View Orders"})]}),l&&o.jsx("p",{className:"orders-error",children:l}),r.length>0&&o.jsx("div",{className:"status-grid",children:Object.keys(Hs).map(d=>o.jsxs("div",{className:"status-card",children:[o.jsx("span",{children:d}),o.jsx("strong",{children:u[d]||0})]},d))}),o.jsxs("div",{className:"orders-list",children:[!i&&r.length===0&&!l&&o.jsxs("div",{className:"empty-orders",children:[o.jsx(Cg,{size:24}),o.jsx("p",{children:"No orders found for this email yet."})]}),r.map(d=>o.jsxs("article",{className:"order-card",children:[o.jsxs("header",{className:"order-card-head",children:[o.jsxs("div",{children:[o.jsxs("p",{className:"order-id",children:["Order #",d.id]}),o.jsx("p",{className:"order-date",children:wx(d.created_at)})]}),o.jsx("span",{className:`order-status ${Hs[d.status]||"pending"}`,children:d.status_label||d.status})]}),o.jsxs("div",{className:"order-meta",children:[o.jsxs("p",{children:[o.jsx("strong",{children:"Total:"})," ",Eo(d.total_amount)]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Payment:"})," ",d.payment_method||"-"]}),o.jsxs("p",{children:[o.jsx("strong",{children:"Shipping Address:"})," ",d.shipping_address||"-"]}),Number(d.refunded_amount||0)>0&&o.jsxs("p",{children:[o.jsx("strong",{children:"Refunded:"})," ",Eo(d.refunded_amount)]})]}),o.jsx("div",{className:"order-items",children:d.items.map(g=>o.jsxs("div",{className:"order-item",children:[o.jsxs("div",{className:"item-left",children:[o.jsx("span",{className:"item-name",children:g.product||"Product"}),o.jsxs("span",{className:"item-qty",children:["x",g.quantity]})]}),o.jsx("div",{className:"item-right",children:Eo(g.line_total)})]},g.id))}),o.jsxs("div",{className:"order-actions",children:[o.jsxs("a",{href:d.invoice_url,className:"order-action-btn",children:[o.jsx(_g,{size:16})," Invoice PDF"]}),o.jsxs("a",{href:d.packing_slip_url,className:"order-action-btn outline",children:[o.jsx(pg,{size:16})," Packing Slip PDF"]})]})]},d.id))]})]}),o.jsx("style",{jsx:"true",children:`
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
      `})]})},kx=()=>{const{login:e}=Sn(),t=Yi(),r=Pe(),n=new URLSearchParams(r.search),i=n.get("redirect")||"/shop",a=n.get("registered")==="1",[l,s]=x.useState(""),[u,c]=x.useState(""),[h,d]=x.useState(!1),[g,y]=x.useState(""),v=async w=>{w.preventDefault(),d(!0),y("");try{await e({email:l.trim(),password:u}),t(i)}catch(N){y(N.message||"Unable to login.")}finally{d(!1)}};return o.jsxs("div",{className:"auth-page",children:[o.jsx("div",{className:"container section-padding",children:o.jsxs("div",{className:"auth-card",children:[o.jsx("h1",{children:"Login"}),o.jsx("p",{children:"Login to continue checkout and manage your orders."}),a&&o.jsx("p",{className:"auth-success",children:"Registration successful. Please login."}),o.jsxs("form",{onSubmit:v,className:"auth-form",children:[o.jsx("label",{children:"Email"}),o.jsx("input",{type:"email",value:l,onChange:w=>s(w.target.value),required:!0}),o.jsx("label",{children:"Password"}),o.jsx("input",{type:"password",value:u,onChange:w=>c(w.target.value),required:!0}),g&&o.jsx("p",{className:"auth-error",children:g}),o.jsx("button",{type:"submit",className:"btn-luxury",disabled:h,children:h?"Please wait...":"Login"})]}),o.jsxs("p",{className:"auth-link-row",children:["New here? ",o.jsx(M,{to:`/signup?redirect=${encodeURIComponent(i)}`,children:"Create an account"})]})]})}),o.jsx("style",{jsx:"true",children:`
        .auth-page { min-height: 65vh; }
        .auth-card { max-width: 520px; margin: 0 auto; background: #fff; border: 1px solid #efe7de; border-radius: 12px; padding: 36px; }
        .auth-card h1 { font-family: var(--font-serif); color: var(--primary); margin-bottom: 8px; }
        .auth-card p { color: var(--text-light); margin-bottom: 18px; }
        .auth-form { display: grid; gap: 12px; }
        .auth-form label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light); }
        .auth-form input { border: 1px solid #e7dfd7; border-radius: 8px; padding: 12px 14px; font-size: 0.95rem; color: var(--primary); }
        .auth-form input:focus { outline: none; border-color: var(--secondary); }
        .auth-error { color: #b3261e; margin: 6px 0; font-size: 0.86rem; }
        .auth-success { color: #1d6a3d; margin-bottom: 14px; font-size: 0.9rem; }
        .auth-link-row { margin-top: 16px; margin-bottom: 0; font-size: 0.9rem; }
        .auth-link-row a { color: var(--primary); text-decoration: underline; }
      `})]})},Nx=()=>{const{signup:e}=Sn(),t=Yi(),r=Pe(),n=new URLSearchParams(r.search).get("redirect")||"/shop",[i,a]=x.useState(""),[l,s]=x.useState(""),[u,c]=x.useState(""),[h,d]=x.useState(!1),[g,y]=x.useState(""),v=async w=>{w.preventDefault(),d(!0),y("");try{await e({fullName:i.trim(),email:l.trim(),password:u}),t(`/login?registered=1&redirect=${encodeURIComponent(n)}`)}catch(N){y(N.message||"Unable to signup.")}finally{d(!1)}};return o.jsxs("div",{className:"auth-page",children:[o.jsx("div",{className:"container section-padding",children:o.jsxs("div",{className:"auth-card",children:[o.jsx("h1",{children:"Create Account"}),o.jsx("p",{children:"Sign up before checkout so your orders stay connected to your account."}),o.jsxs("form",{onSubmit:v,className:"auth-form",children:[o.jsx("label",{children:"Full Name"}),o.jsx("input",{type:"text",value:i,onChange:w=>a(w.target.value),required:!0}),o.jsx("label",{children:"Email"}),o.jsx("input",{type:"email",value:l,onChange:w=>s(w.target.value),required:!0}),o.jsx("label",{children:"Password"}),o.jsx("input",{type:"password",value:u,onChange:w=>c(w.target.value),minLength:8,required:!0}),g&&o.jsx("p",{className:"auth-error",children:g}),o.jsx("button",{type:"submit",className:"btn-luxury",disabled:h,children:h?"Please wait...":"Create Account"})]}),o.jsxs("p",{className:"auth-link-row",children:["Already registered? ",o.jsx(M,{to:`/login?redirect=${encodeURIComponent(n)}`,children:"Login"})]})]})}),o.jsx("style",{jsx:"true",children:`
        .auth-page { min-height: 65vh; }
        .auth-card { max-width: 520px; margin: 0 auto; background: #fff; border: 1px solid #efe7de; border-radius: 12px; padding: 36px; }
        .auth-card h1 { font-family: var(--font-serif); color: var(--primary); margin-bottom: 8px; }
        .auth-card p { color: var(--text-light); margin-bottom: 18px; }
        .auth-form { display: grid; gap: 12px; }
        .auth-form label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1px; color: var(--text-light); }
        .auth-form input { border: 1px solid #e7dfd7; border-radius: 8px; padding: 12px 14px; font-size: 0.95rem; color: var(--primary); }
        .auth-form input:focus { outline: none; border-color: var(--secondary); }
        .auth-error { color: #b3261e; margin: 6px 0; font-size: 0.86rem; }
        .auth-link-row { margin-top: 16px; margin-bottom: 0; font-size: 0.9rem; }
        .auth-link-row a { color: var(--primary); text-decoration: underline; }
      `})]})},Sx=[{path:"/",title:"Home | AS Crystals"},{path:"/shop",title:"Shop | AS Crystals"},{path:"/product/:id",title:"Product Details | AS Crystals"},{path:"/cart",title:"Cart | AS Crystals"},{path:"/checkout",title:"Checkout | AS Crystals"},{path:"/orders",title:"My Orders | AS Crystals"},{path:"/login",title:"Login | AS Crystals"},{path:"/signup",title:"Signup | AS Crystals"},{path:"/about",title:"About Us | AS Crystals"},{path:"/contact",title:"Contact | AS Crystals"},{path:"/gifts",title:"Gift Sets | AS Crystals"},{path:"/remedies",title:"Remedies | AS Crystals"},{path:"/healing-stones",title:"Healing Stones | AS Crystals"},{path:"/reiki-tools",title:"Reiki Tools | AS Crystals"},{path:"/crystal-jewelry",title:"Crystal Jewelry | AS Crystals"},{path:"/trainings",title:"Trainings | AS Crystals"},{path:"/services",title:"Services | AS Crystals"},{path:"/privacy",title:"Privacy Policy | AS Crystals"},{path:"/terms",title:"Terms & Conditions | AS Crystals"}],bx=e=>{const t=Sx.find(r=>hn({path:r.path,end:!0},e));document.title=(t==null?void 0:t.title)||"AS Crystals | Premium Healing Crystals & Jewelry"};function Cx(){const e=Pe();return x.useEffect(()=>{bx(e.pathname)},[e.pathname]),x.useEffect(()=>{const t=Array.from(document.querySelectorAll('main section, main article, main [class*="card"], main .luxury-product-card, main .btn-luxury'));if(t.length===0)return;t.forEach(n=>n.classList.add("reveal-on-scroll"));const r=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(i.target.classList.add("is-visible"),r.unobserve(i.target))})},{threshold:.14,rootMargin:"0px 0px -8% 0px"});return t.forEach(n=>r.observe(n)),()=>r.disconnect()},[e.pathname]),o.jsx("div",{className:"route-shell",children:o.jsxs(mh,{children:[o.jsx(Z,{path:"/",element:o.jsx(rx,{})}),o.jsx(Z,{path:"/shop",element:o.jsx(nx,{})}),o.jsx(Z,{path:"/product/:id",element:o.jsx(ix,{})}),o.jsx(Z,{path:"/cart",element:o.jsx(ox,{})}),o.jsx(Z,{path:"/checkout",element:o.jsx(ax,{})}),o.jsx(Z,{path:"/orders",element:o.jsx(jx,{})}),o.jsx(Z,{path:"/login",element:o.jsx(kx,{})}),o.jsx(Z,{path:"/signup",element:o.jsx(Nx,{})}),o.jsx(Z,{path:"/about",element:o.jsx(lx,{})}),o.jsx(Z,{path:"/contact",element:o.jsx(sx,{})}),o.jsx(Z,{path:"/gifts",element:o.jsx(ux,{})}),o.jsx(Z,{path:"/remedies",element:o.jsx(cx,{})}),o.jsx(Z,{path:"/healing-stones",element:o.jsx(dx,{})}),o.jsx(Z,{path:"/reiki-tools",element:o.jsx(px,{})}),o.jsx(Z,{path:"/crystal-jewelry",element:o.jsx(fx,{})}),o.jsx(Z,{path:"/trainings",element:o.jsx(hx,{})}),o.jsx(Z,{path:"/services",element:o.jsx(xx,{})}),o.jsx(Z,{path:"/privacy",element:o.jsx(yx,{})}),o.jsx(Z,{path:"/terms",element:o.jsx(vx,{})})]})},e.pathname)}function Ex(){const[e,t]=x.useState(!0);return x.useEffect(()=>{const r=()=>t(!1);if(document.readyState==="complete"){const n=setTimeout(r,500);return()=>clearTimeout(n)}return window.addEventListener("load",r),()=>window.removeEventListener("load",r)},[]),e?o.jsx(Gg,{}):o.jsx(Yh,{children:o.jsx(Kh,{children:o.jsx(Ih,{children:o.jsxs("div",{className:"app",children:[o.jsx(Yg,{}),o.jsx("main",{style:{marginTop:"160px"},children:o.jsx(Cx,{})}),o.jsx(Kg,{})]})})})})}zo.createRoot(document.getElementById("root")).render(o.jsx(ip.StrictMode,{children:o.jsx(Ex,{})}));
