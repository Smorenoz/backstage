/*! For license information please see caf82379.41658e14.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[367616],{183469:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>u,metadata:()=>c,toc:()=>i});var n=t(824246),o=t(511151);const u={id:"core-app-api.oauthrequestmanager.authrequest_",title:"OAuthRequestManager.authRequest$()",description:"API reference for OAuthRequestManager.authRequest$()"},a=void 0,c={unversionedId:"reference/core-app-api.oauthrequestmanager.authrequest_",id:"reference/core-app-api.oauthrequestmanager.authrequest_",title:"OAuthRequestManager.authRequest$()",description:"API reference for OAuthRequestManager.authRequest$()",source:"@site/../docs/reference/core-app-api.oauthrequestmanager.authrequest_.md",sourceDirName:"reference",slug:"/reference/core-app-api.oauthrequestmanager.authrequest_",permalink:"/docs/reference/core-app-api.oauthrequestmanager.authrequest_",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-app-api.oauthrequestmanager.authrequest_.md",tags:[],version:"current",frontMatter:{id:"core-app-api.oauthrequestmanager.authrequest_",title:"OAuthRequestManager.authRequest$()",description:"API reference for OAuthRequestManager.authRequest$()"}},s={},i=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-app-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.oauthrequestmanager",children:(0,n.jsx)(r.code,{children:"OAuthRequestManager"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-app-api.oauthrequestmanager.authrequest_",children:(0,n.jsx)(r.code,{children:"authRequest$"})})]}),"\n",(0,n.jsx)(r.p,{children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"authRequest$(): Observable<PendingOAuthRequest[]>;\n"})}),"\n",(0,n.jsx)(r.p,{children:"Returns:"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/types.observable",children:"Observable"}),"<",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.pendingoauthrequest",children:"PendingOAuthRequest"}),"[]>"]})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var u,a,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var i in u=Object(arguments[s]))t.call(u,i)&&(c[i]=u[i]);if(r){a=r(u);for(var f=0;f<a.length;f++)n.call(u,a[f])&&(c[a[f]]=u[a[f]])}}return c}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),r.Fragment=u("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,u={},i=null,f=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)c.call(r,n)&&!s.hasOwnProperty(n)&&(u[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===u[n]&&(u[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:f,props:u,_owner:a.current}}r.jsx=i,r.jsxs=i},541535:(e,r,t)=>{var n=t(862525),o=60103,u=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var a=60109,c=60110,s=60112;r.Suspense=60113;var i=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),u=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),a=l("react.provider"),c=l("react.context"),s=l("react.forward_ref"),r.Suspense=l("react.suspense"),i=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}function v(){}function g(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var _=g.prototype=new v;_.constructor=g,n(_,m.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,t){var n,u={},a=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(a=""+r.key),r)j.call(r,n)&&!O.hasOwnProperty(n)&&(u[n]=r[n]);var s=arguments.length-2;if(1===s)u.children=t;else if(1<s){for(var i=Array(s),f=0;f<s;f++)i[f]=arguments[f+2];u.children=i}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===u[n]&&(u[n]=s[n]);return{$$typeof:o,type:e,key:a,ref:c,props:u,_owner:b.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,t,n,a){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case u:s=!0}}if(s)return a=a(s=e),e=""===n?"."+w(s,0):n,Array.isArray(a)?(t="",null!=e&&(t=e.replace(k,"$&/")+"/"),x(a,r,t,"",(function(e){return e}))):null!=a&&(R(a)&&(a=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(a,t+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(k,"$&/")+"/")+e)),r.push(a)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=n+w(c=e[i],i);s+=x(c,r,t,f,a)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(c=e.next()).done;)s+=x(c=c.value,r,t,f=n+w(c,i++),a);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function S(e,r,t){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function $(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function E(){var e=C.current;if(null===e)throw Error(d(321));return e}var P={ReactCurrentDispatcher:C,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:S,forEach:function(e,r,t){S(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!R(e))throw Error(d(143));return e}},r.Component=m,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var u=n({},e.props),a=e.key,c=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,s=b.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in r)j.call(r,f)&&!O.hasOwnProperty(f)&&(u[f]=void 0===r[f]&&void 0!==i?i[f]:r[f])}var f=arguments.length-2;if(1===f)u.children=t;else if(1<f){i=Array(f);for(var l=0;l<f;l++)i[l]=arguments[l+2];u.children=i}return{$$typeof:o,type:e.type,key:a,ref:c,props:u,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},r.createElement=q,r.createFactory=function(e){var r=q.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=R,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:i,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return E().useCallback(e,r)},r.useContext=function(e,r){return E().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return E().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return E().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return E().useLayoutEffect(e,r)},r.useMemo=function(e,r){return E().useMemo(e,r)},r.useReducer=function(e,r,t){return E().useReducer(e,r,t)},r.useRef=function(e){return E().useRef(e)},r.useState=function(e){return E().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>c,ah:()=>u});var n=t(667294);const o=n.createContext({});function u(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const a={};function c({components:e,children:r,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||a:u(e),n.createElement(o.Provider,{value:c},r)}}}]);