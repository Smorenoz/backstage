/*! For license information please see 996d7c9e.284bd73a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[908831],{346605:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>f});var n=t(824246),o=t(511151);const c={id:"backend-app-api.lifecycleservicefactory",title:"lifecycleServiceFactory",description:"API reference for lifecycleServiceFactory"},a=void 0,i={unversionedId:"reference/backend-app-api.lifecycleservicefactory",id:"reference/backend-app-api.lifecycleservicefactory",title:"lifecycleServiceFactory",description:"API reference for lifecycleServiceFactory",source:"@site/../docs/reference/backend-app-api.lifecycleservicefactory.md",sourceDirName:"reference",slug:"/reference/backend-app-api.lifecycleservicefactory",permalink:"/docs/reference/backend-app-api.lifecycleservicefactory",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-app-api.lifecycleservicefactory.md",tags:[],version:"current",frontMatter:{id:"backend-app-api.lifecycleservicefactory",title:"lifecycleServiceFactory",description:"API reference for lifecycleServiceFactory"}},u={},f=[];function s(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/backend-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/backend-app-api.lifecycleservicefactory",children:(0,n.jsx)(r.code,{children:"lifecycleServiceFactory"})})]}),"\n",(0,n.jsx)(r.p,{children:"Allows plugins to register shutdown hooks that are run when the process is about to exit."}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:'lifecycleServiceFactory: () => import("@backstage/backend-plugin-api").ServiceFactory<import("@backstage/backend-plugin-api").LifecycleService, "plugin">\n'})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,a,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var f in c=Object(arguments[u]))t.call(c,f)&&(i[f]=c[f]);if(r){a=r(c);for(var s=0;s<a.length;s++)n.call(c,a[s])&&(i[a[s]]=c[a[s]])}}return i}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),r.Fragment=c("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,t){var n,c={},f=null,s=null;for(n in void 0!==t&&(f=""+t),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(s=r.ref),r)i.call(r,n)&&!u.hasOwnProperty(n)&&(c[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===c[n]&&(c[n]=r[n]);return{$$typeof:o,type:e,key:f,ref:s,props:c,_owner:a.current}}r.jsx=f,r.jsxs=f},541535:(e,r,t)=>{var n=t(862525),o=60103,c=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var a=60109,i=60110,u=60112;r.Suspense=60113;var f=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),a=l("react.provider"),i=l("react.context"),u=l("react.forward_ref"),r.Suspense=l("react.suspense"),f=l("react.memo"),s=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function h(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||d}function b(){}function m(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var _=m.prototype=new b;_.constructor=m,n(_,h.prototype),_.isPureReactComponent=!0;var g={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,t){var n,c={},a=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)k.call(r,n)&&!j.hasOwnProperty(n)&&(c[n]=r[n]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var f=Array(u),s=0;s<u;s++)f[s]=arguments[s+2];c.children=f}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===c[n]&&(c[n]=u[n]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:g.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function x(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function C(e,r,t,n,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case c:u=!0}}if(u)return a=a(u=e),e=""===n?"."+x(u,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(O,"$&/")+"/"),C(a,r,t,"",(function(e){return e}))):null!=a&&(w(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),r.push(a)),1;if(u=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var s=n+x(i=e[f],f);u+=C(i,r,t,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),f=0;!(i=e.next()).done;)u+=C(i=i.value,r,t,s=n+x(i,f++),a);else if("object"===i)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function E(e,r,t){if(null==e)return e;var n=[],o=0;return C(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(y(321));return e}var F={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:E,forEach:function(e,r,t){E(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(y(143));return e}},r.Component=h,r.PureComponent=m,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,t){if(null==e)throw Error(y(267,e));var c=n({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=g.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in r)k.call(r,s)&&!j.hasOwnProperty(s)&&(c[s]=void 0===r[s]&&void 0!==f?f[s]:r[s])}var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){f=Array(s);for(var l=0;l<s;l++)f[l]=arguments[l+2];c.children=f}return{$$typeof:o,type:e.type,key:a,ref:i,props:c,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:i,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return R().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,t){return R().useReducer(e,r,t)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>i,ah:()=>c});var n=t(667294);const o=n.createContext({});function c(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function i({components:e,children:r,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||a:c(e),n.createElement(o.Provider,{value:i},r)}}}]);