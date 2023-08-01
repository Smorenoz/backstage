/*! For license information please see a04f444d.4f85394e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[56726],{180247:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>a});var n=t(824246),o=t(511151);const i={id:"plugin-permission-node.permissionintegrationrouteroptions",title:"PermissionIntegrationRouterOptions",description:"API reference for PermissionIntegrationRouterOptions"},s=void 0,u={unversionedId:"reference/plugin-permission-node.permissionintegrationrouteroptions",id:"reference/plugin-permission-node.permissionintegrationrouteroptions",title:"PermissionIntegrationRouterOptions",description:"API reference for PermissionIntegrationRouterOptions",source:"@site/../docs/reference/plugin-permission-node.permissionintegrationrouteroptions.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.permissionintegrationrouteroptions",permalink:"/docs/reference/plugin-permission-node.permissionintegrationrouteroptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.permissionintegrationrouteroptions.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.permissionintegrationrouteroptions",title:"PermissionIntegrationRouterOptions",description:"API reference for PermissionIntegrationRouterOptions"}},c={},a=[];function p(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-node",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.permissionintegrationrouteroptions",children:(0,n.jsx)(r.code,{children:"PermissionIntegrationRouterOptions"})})]}),"\n",(0,n.jsx)(r.p,{children:"Options for creating a permission integration router exposing permissions and rules from multiple resource types."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.b,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type PermissionIntegrationRouterOptions<TResourceType1 extends string = string, TResource1 = any, TResourceType2 extends string = string, TResource2 = any, TResourceType3 extends string = string, TResource3 = any> = {\n    resources: Readonly<[\n        CreatePermissionIntegrationRouterResourceOptions<TResourceType1, TResource1>\n    ] | [\n        CreatePermissionIntegrationRouterResourceOptions<TResourceType1, TResource1>,\n        CreatePermissionIntegrationRouterResourceOptions<TResourceType2, TResource2>\n    ] | [\n        CreatePermissionIntegrationRouterResourceOptions<TResourceType1, TResource1>,\n        CreatePermissionIntegrationRouterResourceOptions<TResourceType2, TResource2>,\n        CreatePermissionIntegrationRouterResourceOptions<TResourceType3, TResource3>\n    ]>;\n};\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.b,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.createpermissionintegrationrouterresourceoptions",children:"CreatePermissionIntegrationRouterResourceOptions"})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(p,e)})):p(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var a in i=Object(arguments[c]))t.call(i,a)&&(u[a]=i[a]);if(r){s=r(i);for(var p=0;p<s.length;p++)n.call(i,s[p])&&(u[s[p]]=i[s[p]])}}return u}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,i={},a=null,p=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(p=r.ref),r)u.call(r,n)&&!c.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:p,props:i,_owner:s.current}}r.jsx=a,r.jsxs=a},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var s=60109,u=60110,c=60112;r.Suspense=60113;var a=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),s=f("react.provider"),u=f("react.context"),c=f("react.forward_ref"),r.Suspense=f("react.suspense"),a=f("react.memo"),p=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function h(){}function v(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=g.prototype;var R=v.prototype=new h;R.constructor=v,n(R,g.prototype),R.isPureReactComponent=!0;var _={current:null},b=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,r,t){var n,i={},s=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(s=""+r.key),r)b.call(r,n)&&!O.hasOwnProperty(n)&&(i[n]=r[n]);var c=arguments.length-2;if(1===c)i.children=t;else if(1<c){for(var a=Array(c),p=0;p<c;p++)a[p]=arguments[p+2];i.children=a}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:s,ref:u,props:i,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g;function k(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function w(e,r,t,n,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return s=s(c=e),e=""===n?"."+k(c,0):n,Array.isArray(s)?(t="",null!=e&&(t=e.replace(x,"$&/")+"/"),w(s,r,t,"",(function(e){return e}))):null!=s&&(P(s)&&(s=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(x,"$&/")+"/")+e)),r.push(s)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var a=0;a<e.length;a++){var p=n+k(u=e[a],a);c+=w(u,r,t,p,s)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),a=0;!(u=e.next()).done;)c+=w(u=u.value,r,t,p=n+k(u,a++),s);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function C(e,r,t){if(null==e)return e;var n=[],o=0;return w(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function T(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var S={current:null};function I(){var e=S.current;if(null===e)throw Error(d(321));return e}var E={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error(d(143));return e}},r.Component=g,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var i=n({},e.props),s=e.key,u=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,c=_.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(p in r)b.call(r,p)&&!O.hasOwnProperty(p)&&(i[p]=void 0===r[p]&&void 0!==a?a[p]:r[p])}var p=arguments.length-2;if(1===p)i.children=t;else if(1<p){a=Array(p);for(var f=0;f<p;f++)a[f]=arguments[f+2];i.children=a}return{$$typeof:o,type:e.type,key:s,ref:u,props:i,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=j,r.createFactory=function(e){var r=j.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},r.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return I().useCallback(e,r)},r.useContext=function(e,r){return I().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return I().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return I().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return I().useLayoutEffect(e,r)},r.useMemo=function(e,r){return I().useMemo(e,r)},r.useReducer=function(e,r,t){return I().useReducer(e,r,t)},r.useRef=function(e){return I().useRef(e)},r.useState=function(e){return I().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>i});var n=t(667294);const o=n.createContext({});function i(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||s:i(e),n.createElement(o.Provider,{value:u},r)}}}]);