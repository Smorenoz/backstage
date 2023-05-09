/*! For license information please see 742b4c97.29b16d38.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[149575],{459338:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var t=r(824246),o=r(511151);const c={id:"plugin-sonarqube-backend.sonarqubeconfig.getinstanceconfig",title:"SonarqubeConfig.getInstanceConfig()",description:"API reference for SonarqubeConfig.getInstanceConfig()"},i=void 0,a={unversionedId:"reference/plugin-sonarqube-backend.sonarqubeconfig.getinstanceconfig",id:"reference/plugin-sonarqube-backend.sonarqubeconfig.getinstanceconfig",title:"SonarqubeConfig.getInstanceConfig()",description:"API reference for SonarqubeConfig.getInstanceConfig()",source:"@site/../docs/reference/plugin-sonarqube-backend.sonarqubeconfig.getinstanceconfig.md",sourceDirName:"reference",slug:"/reference/plugin-sonarqube-backend.sonarqubeconfig.getinstanceconfig",permalink:"/docs/reference/plugin-sonarqube-backend.sonarqubeconfig.getinstanceconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-sonarqube-backend.sonarqubeconfig.getinstanceconfig.md",tags:[],version:"current",frontMatter:{id:"plugin-sonarqube-backend.sonarqubeconfig.getinstanceconfig",title:"SonarqubeConfig.getInstanceConfig()",description:"API reference for SonarqubeConfig.getInstanceConfig()"}},u={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2}];function f(e){const n=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-sonarqube-backend",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-sonarqube-backend"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-sonarqube-backend.sonarqubeconfig",children:(0,t.jsx)(n.code,{children:"SonarqubeConfig"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-sonarqube-backend.sonarqubeconfig.getinstanceconfig",children:(0,t.jsx)(n.code,{children:"getInstanceConfig"})})]}),"\n",(0,t.jsx)(n.p,{children:"Gets a Sonarqube instance configuration by name, or the default one if no name is provided."}),"\n",(0,t.jsx)(n.p,{children:"Signature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"getInstanceConfig(options?: {\n        sonarqubeName?: string;\n    }): SonarqubeInstanceConfig;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"options"}),(0,t.jsx)(n.td,{children:"{ sonarqubeName?: string; }"}),(0,t.jsx)(n.td,{children:"(Optional)"})]})})]}),"\n",(0,t.jsx)(n.p,{children:"Returns:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-sonarqube-backend.sonarqubeinstanceconfig",children:"SonarqubeInstanceConfig"})}),"\n",(0,t.jsx)(n.p,{children:"The requested Sonarqube instance."}),"\n",(0,t.jsx)(n.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,t.jsx)(n.p,{children:"Error when no default config could be found or the requested name couldn't be found in config."})]})}const l=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var c,i,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in c=Object(arguments[u]))r.call(c,s)&&(a[s]=c[s]);if(n){i=n(c);for(var f=0;f<i.length;f++)t.call(c,i[f])&&(a[i[f]]=c[i[f]])}}return a}},371426:(e,n,r)=>{r(862525);var t=r(827378),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;o=c("react.element"),n.Fragment=c("react.fragment")}var i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,n,r){var t,c={},s=null,f=null;for(t in void 0!==r&&(s=""+r),void 0!==n.key&&(s=""+n.key),void 0!==n.ref&&(f=n.ref),n)a.call(n,t)&&!u.hasOwnProperty(t)&&(c[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===c[t]&&(c[t]=n[t]);return{$$typeof:o,type:e,key:s,ref:f,props:c,_owner:i.current}}n.jsx=s,n.jsxs=s},541535:(e,n,r)=>{var t=r(862525),o=60103,c=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var i=60109,a=60110,u=60112;n.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),c=l("react.portal"),n.Fragment=l("react.fragment"),n.StrictMode=l("react.strict_mode"),n.Profiler=l("react.profiler"),i=l("react.provider"),a=l("react.context"),u=l("react.forward_ref"),n.Suspense=l("react.suspense"),s=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function b(e,n,r){this.props=e,this.context=n,this.refs=h,this.updater=r||g}function y(){}function m(e,n,r){this.props=e,this.context=n,this.refs=h,this.updater=r||g}b.prototype.isReactComponent={},b.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,n,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var v=m.prototype=new y;v.constructor=m,t(v,b.prototype),v.isPureReactComponent=!0;var j={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,r){var t,c={},i=null,a=null;if(null!=n)for(t in void 0!==n.ref&&(a=n.ref),void 0!==n.key&&(i=""+n.key),n)_.call(n,t)&&!x.hasOwnProperty(t)&&(c[t]=n[t]);var u=arguments.length-2;if(1===u)c.children=r;else if(1<u){for(var s=Array(u),f=0;f<u;f++)s[f]=arguments[f+2];c.children=s}if(e&&e.defaultProps)for(t in u=e.defaultProps)void 0===c[t]&&(c[t]=u[t]);return{$$typeof:o,type:e,key:i,ref:a,props:c,_owner:j.current}}function q(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function S(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function O(e,n,r,t,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case c:u=!0}}if(u)return i=i(u=e),e=""===t?"."+S(u,0):t,Array.isArray(i)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),O(i,n,r,"",(function(e){return e}))):null!=i&&(q(i)&&(i=function(e,n){return{$$typeof:o,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,r+(!i.key||u&&u.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),n.push(i)),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=t+S(a=e[s],s);u+=O(a,n,r,f,i)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(a=e.next()).done;)u+=O(a=a.value,n,r,f=t+S(a,s++),i);else if("object"===a)throw n=""+e,Error(d(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return u}function w(e,n,r){if(null==e)return e;var t=[],o=0;return O(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function E(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function I(){var e=P.current;if(null===e)throw Error(d(321));return e}var R={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:t};n.Children={map:w,forEach:function(e,n,r){w(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return w(e,(function(){n++})),n},toArray:function(e){return w(e,(function(e){return e}))||[]},only:function(e){if(!q(e))throw Error(d(143));return e}},n.Component=b,n.PureComponent=m,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,n.cloneElement=function(e,n,r){if(null==e)throw Error(d(267,e));var c=t({},e.props),i=e.key,a=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,u=j.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in n)_.call(n,f)&&!x.hasOwnProperty(f)&&(c[f]=void 0===n[f]&&void 0!==s?s[f]:n[f])}var f=arguments.length-2;if(1===f)c.children=r;else if(1<f){s=Array(f);for(var l=0;l<f;l++)s[l]=arguments[l+2];c.children=s}return{$$typeof:o,type:e.type,key:i,ref:a,props:c,_owner:u}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:a,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=q,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},n.memo=function(e,n){return{$$typeof:s,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return I().useCallback(e,n)},n.useContext=function(e,n){return I().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return I().useEffect(e,n)},n.useImperativeHandle=function(e,n,r){return I().useImperativeHandle(e,n,r)},n.useLayoutEffect=function(e,n){return I().useLayoutEffect(e,n)},n.useMemo=function(e,n){return I().useMemo(e,n)},n.useReducer=function(e,n,r){return I().useReducer(e,n,r)},n.useRef=function(e){return I().useRef(e)},n.useState=function(e){return I().useState(e)},n.version="17.0.2"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>c});var t=r(667294);const o=t.createContext({});function c(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||i:c(e),t.createElement(o.Provider,{value:a},n)}}}]);