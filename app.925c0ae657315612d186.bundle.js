!function(){"use strict";var e,t,n,o,r={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return r[e].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=r,a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var r=Object.create(null);a.r(r);var i={};e=e||[null,t({}),t([]),t(t)];for(var d=2&o&&n;"object"==typeof d&&!~e.indexOf(d);d=t(d))Object.getOwnPropertyNames(d).forEach((function(e){i[e]=function(){return n[e]}}));return i.default=function(){return n},a.d(r,i),r},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return e+"."+{336:"a9ab6e36c7a598d969b0",484:"aa5eb10d3c08bae9cc39",504:"990aa363839cc6aaf678",548:"1e53cddc04e62111a4e6"}[e]+".bundle.js"},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},o="react-sdk:",a.l=function(e,t,r,i){if(n[e])n[e].push(t);else{var d,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var l=s[c];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+r){d=l;break}}d||(u=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.setAttribute("data-webpack",o+r),d.src=e),n[e]=[t];var f=function(t,o){d.onerror=d.onload=null,clearTimeout(g);var r=n[e];if(delete n[e],d.parentNode&&d.parentNode.removeChild(d),r&&r.forEach((function(e){return e(o)})),t)return t(o)},g=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),u&&document.head.appendChild(d)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){var e={524:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,r){o=e[t]=[n,r]}));n.push(o[2]=r);var i=a.p+a.u(t),d=new Error;a.l(i,(function(n){if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",d.name="ChunkLoadError",d.type=r,d.request=i,o[1](d)}}),"chunk-"+t,t)}};var t=function(t,n){var o,r,i=n[0],d=n[1],u=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(o in d)a.o(d,o)&&(a.m[o]=d[o]);u&&u(a)}for(t&&t(n);s<i.length;s++)r=i[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0},n=self.webpackChunkreact_sdk=self.webpackChunkreact_sdk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),a.nc=void 0;const d="8.8.2";var u=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{u(o.next(e))}catch(e){i(e)}}function d(e){try{u(o.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,d)}u((o=o.apply(e,t||[])).next())}))};function s(e,t){return u(this,void 0,void 0,(function*(){const n=document.createElement("div");n.id="pega-root",t.prepend(n);const o=(yield Promise.all([a.e(548),a.e(484),a.e(336)]).then(a.bind(a,7336))).default;if(!window.pega.errorLoading)return new Promise((t=>{window.PCore.onPCoreReady((e=>u(this,void 0,void 0,(function*(){const n=(yield a.e(504).then(a.t.bind(a,1504,19))).default,r=(yield Promise.all([a.e(548),a.e(484)]).then(a.bind(a,1484))).default;window.PCore.registerComponentCreator(((e,t={})=>{const o=r();return n.createElement(o,Object.assign({},Object.assign(Object.assign(Object.assign(Object.assign({},e),e.getPConnect().getConfigProps()),e.getPConnect().getActions()),{additionalProps:t})))})),console.log("PCore ready!"),PCore.getPCoreVersion().includes(d)?console.log(`sdkVersion: ${d} matches PCore version: ${PCore.getPCoreVersion()}`):console.error(`sdkVersion: ${d} does NOT match PCore version: ${PCore.getPCoreVersion()}`),o(e),t(e.props.getPConnect())})))),"mashup"===e?window.loadMashup("pega-root",!1):window.loadPortal("pega-root","WebPortal")}));o({domContainerID:n.id})}))}function c(e,t){return u(this,void 0,void 0,(function*(){return yield(yield f(`${e}?access=${t}`)).text()}))}function l(e,t){return u(this,void 0,void 0,(function*(){window.PCore.getRestClient().getHeaderProcessor().unRegisterHeader(e),window.PCore.getRestClient().getHeaderProcessor().registerHeader(e,t)}))}function f(e){return u(this,void 0,void 0,(function*(){const t=yield fetch(e);if(t.ok)return t;throw new Error}))}window.pega={initPega:function(e,t){return u(this,void 0,void 0,(function*(){try{const t=e.authConfig.pegaHeaderName||"CustHdrPEGAJWT",n=e.authConfig.gatewayTokenUrl,o=e.authConfig.pegaTokenUrl,r=e.authConfig.gatewayTokenRefreshUrl,i=e.serverConfig.sdkContentServerUrl,a=e.serverConfig.infinityRestServerUrl,d=yield function(e){return u(this,void 0,void 0,(function*(){return yield(yield f(e)).json()}))}(n),s=yield c(o,d.access_token),g=yield import(`${i}bootstrap-shell.js`);window.loadView=g.loadView,window.loadPortal=g.loadPortal,window.loadComponent=g.loadComponent,window.loadMashup=g.loadMashup,window.loadViewByName=g.loadViewByName,window.loadCase=g.loadCase,window.createCase=g.createCase,window.loadAssignment=g.loadAssignment,yield g.bootstrapWithAuthHeader({authInfo:{authType:"custom"},restServerUrl:a,staticContentServerUrl:i,dynamicLoadComponents:!1,dynamicSetCookie:!1,renderingMode:"EMBED",authorizationHeader:`${d.token_type} ${d.access_token}`,customHeaders:{[t]:s},customRendering:null==e.serverConfig.customRendering||e.serverConfig.customRendering}),window.PCore.onPCoreReady((e=>u(this,void 0,void 0,(function*(){window.PCore.getEnvironmentInfo().setLocale("en-US"),window.PCore.getAuthUtils().setTokens(d),yield l(t,s)})))),window.PCore.getPubSubUtils().subscribe(window.PCore.getConstants().PUB_SUB_EVENTS.EVENT_CUSTOM_REAUTH,(()=>u(this,void 0,void 0,(function*(){const e=yield function(e,t){return u(this,void 0,void 0,(function*(){return yield(yield f(`${e}?access=${t}`)).json()}))}(r,d.refresh_token),n=yield c(o,e.access_token);yield l(t,n),window.PCore.getAuthUtils().setTokens(e)}))),"customReauth")}catch(e){console.error(e),window.pega.errorLoading=!0}}))},initMashup:function(e){return u(this,void 0,void 0,(function*(){window.PConn=yield s("mashup",e)}))},initPortal:function(e){return u(this,void 0,void 0,(function*(){window.PConn=yield s("portal",e)}))},getNotificationCount:function(e){return u(this,void 0,void 0,(function*(){return(yield window.PCore.getDataApiUtils().getListCount(null==e?"D_pyMyWorkList":e,{})).data.resultCount}))},showPage:function(e,t){return u(this,void 0,void 0,(function*(){return window.PCore.getMashupApi().openPage(e,t,"root")}))},startCase:function(e,t){return u(this,void 0,void 0,(function*(){return yield window.PCore.getMashupApi().createCase(e,"root",{pageName:"pyEmbedAssignment",startingFields:t})}))},continueCase:function(e){return u(this,void 0,void 0,(function*(){return window.PCore.getMashupApi().openAssignment(e,"root")}))},getBuildTime:function(){return"2024-02-08T07:43:55.090Z"},errorLoading:!1}}();