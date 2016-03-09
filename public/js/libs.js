/*
 * SystemJS v0.19.22
 */
!function(){function e(){!function(e){function t(e,t){return e instanceof Error?e.message=e.message+"\n	"+t:e+="\n	"+t,e}function n(e,n,r){try{new Function(e).call(r)}catch(a){throw t(a,"Evaluating "+n)}}function r(){}function a(t){this._loader={loaderObj:this,loads:[],modules:{},importPromises:{},moduleRecords:{}},T(this,"global",{get:function(){return e}})}function o(){a.call(this),this.paths={}}function s(e,t){var n,r="",a=0;for(var o in e){var s=o.split("*");if(s.length>2)throw new TypeError("Only one wildcard in a path is permitted");if(1==s.length){if(t==o)return e[o];if(t.substr(0,o.length-1)==o.substr(0,o.length-1)&&(t.length<o.length||t[o.length-1]==o[o.length-1])&&"/"==e[o][e[o].length-1])return e[o].substr(0,e[o].length-1)+(t.length>o.length?"/"+t.substr(o.length):"")}else{var i=s[0].length;i>=a&&t.substr(0,s[0].length)==s[0]&&t.substr(t.length-s[1].length)==s[1]&&(a=i,r=o,n=t.substr(s[0].length,t.length-s[1].length-s[0].length))}}var l=e[r];return"string"==typeof n&&(l=l.replace("*",n)),l}function i(){}function l(){o.call(this),q.call(this)}function u(){}function d(e,t){l.prototype[e]=t(l.prototype[e]||function(){})}function c(e){q=e(q||function(){})}function f(e){for(var t=[],n=[],r=0,a=e.length;a>r;r++){var o=I.call(t,e[r]);-1===o?(t.push(e[r]),n.push([r])):n[o].push(r)}return{names:t,indices:n}}function m(e){var t={};if("object"==typeof e||"function"==typeof e)if(N){var n;for(var r in e)(n=Object.getOwnPropertyDescriptor(e,r))&&T(t,r,n)}else{var a=e&&e.hasOwnProperty;for(var r in e)(!a||e.hasOwnProperty(r))&&(t[r]=e[r])}return t["default"]=e,T(t,"__useDefault",{value:!0}),t}function p(e,t,n){for(var r in t)n&&r in e||(e[r]=t[r]);return e}function h(e,t,n){for(var r in t){var a=t[r];r in e?a instanceof Array&&e[r]instanceof Array?e[r]=[].concat(n?a:e[r]).concat(n?e[r]:a):"object"==typeof a&&null!==a&&"object"==typeof e[r]?e[r]=p(p({},e[r]),a,n):n||(e[r]=a):e[r]=a}}function g(e){this.warnings&&"undefined"!=typeof console&&console.warn}function v(e,t){for(var n=e.split(".");n.length;)t=t[n.shift()];return t}function b(){if(Z[this.baseURL])return Z[this.baseURL];"/"!=this.baseURL[this.baseURL.length-1]&&(this.baseURL+="/");var e=new A(this.baseURL,L);return this.baseURL=e.href,Z[this.baseURL]=e}function y(e,t){var n,r=0;for(var a in e)if(t.substr(0,a.length)==a&&(t.length==a.length||"/"==t[a.length])){var o=a.split("/").length;if(r>=o)continue;n=a,r=o}return n}function x(e){this.set("@system-env",this.newModule({browser:O,node:!!this._nodeRequire,production:e}))}function w(e){if("."!=e[0]&&"/"!=e[0]&&!e.match(X)){var t=y(this.map,e);if(t)return this.map[t]+e.substr(t.length)}return e}function S(e){var t=e.match(K);return t&&"System.register"==e.substr(t[0].length,15)}function E(){return{name:null,deps:null,originalIndices:null,declare:null,execute:null,executingRequire:!1,declarative:!1,normalizedDeps:null,groupIndex:null,evaluated:!1,module:null,esModule:null,esmExports:!1}}function j(e){var t,n,r,r="~"==e[0],a=e.lastIndexOf("|");return-1!=a?(t=e.substr(a+1),n=e.substr(r,a-r)||"@system-env"):(t=null,n=e.substr(r)),{module:n,prop:t,negate:r}}function _(e){return(e.negate?"~":"")+e.module+(e.prop?"|"+e.prop:"")}function k(e,t,n){return this["import"](e.module,t).then(function(t){if(e.prop?t=v(e.prop,t):"object"==typeof t&&t+""=="Module"&&(t=t["default"]),n&&"boolean"!=typeof t)throw new TypeError("Condition "+_(e)+" did not resolve to a boolean.");return e.negate?!t:t})}function P(e,t){var n=e.match(Q);if(!n)return Promise.resolve(e);var r=j(n[0].substr(2,n[0].length-3));return this.builder?this.normalize(r.module,t).then(function(t){return r.module=t,e.replace(Q,"#{"+_(r)+"}")}):k.call(this,r,t,!1).then(function(n){if("string"!=typeof n)throw new TypeError("The condition value for "+e+" doesn't resolve to a string.");if(-1!=n.indexOf("/"))throw new TypeError("Unabled to interpolate conditional "+e+(t?" in "+t:"")+"\n	The condition value "+n+' cannot contain a "/" separator.');return e.replace(Q,n)})}function R(e,t){var n=e.lastIndexOf("#?");if(-1==n)return Promise.resolve(e);var r=j(e.substr(n+2));return this.builder?this.normalize(r.module,t).then(function(t){return r.module=t,e.substr(0,n)+"#?"+_(r)}):k.call(this,r,t,!0).then(function(t){return t?e.substr(0,n):"@empty"})}var M="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,O="undefined"!=typeof window&&"undefined"!=typeof document,z="undefined"!=typeof process&&"undefined"!=typeof process.platform&&!!process.platform.match(/^win/);e.console||(e.console={assert:function(){}});var T,I=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1};!function(){try{Object.defineProperty({},"a",{})&&(T=Object.defineProperty)}catch(e){T=function(e,t,n){try{e[t]=n.value||n.get.call(e)}catch(r){}}}}();var L;if("undefined"!=typeof document&&document.getElementsByTagName){if(L=document.baseURI,!L){var F=document.getElementsByTagName("base");L=F[0]&&F[0].href||window.location.href}L=L.split("#")[0].split("?")[0],L=L.substr(0,L.lastIndexOf("/")+1)}else if("undefined"!=typeof process&&process.cwd)L="file://"+(z?"/":"")+process.cwd()+"/",z&&(L=L.replace(/\\/g,"/"));else{if("undefined"==typeof location)throw new TypeError("No environment baseURI");L=e.location.href}var A=e.URLPolyfill||e.URL;T(r.prototype,"toString",{value:function(){return"Module"}}),function(){function o(e){return{status:"loading",name:e,linkSets:[],dependencies:[],metadata:{}}}function s(e,t,n){return new Promise(c({step:n.address?"fetch":"locate",loader:e,moduleName:t,moduleMetadata:n&&n.metadata||{},moduleSource:n.source,moduleAddress:n.address}))}function i(e,t,n,r){return new Promise(function(a,o){a(e.loaderObj.normalize(t,n,r))}).then(function(t){var n;if(e.modules[t])return n=o(t),n.status="linked",n.module=e.modules[t],n;for(var r=0,a=e.loads.length;a>r;r++)if(n=e.loads[r],n.name==t)return n;return n=o(t),e.loads.push(n),l(e,n),n})}function l(e,t){u(e,t,Promise.resolve().then(function(){return e.loaderObj.locate({name:t.name,metadata:t.metadata})}))}function u(e,t,n){d(e,t,n.then(function(n){return"loading"==t.status?(t.address=n,e.loaderObj.fetch({name:t.name,metadata:t.metadata,address:n})):void 0}))}function d(t,r,a){a.then(function(a){return"loading"==r.status?Promise.resolve(t.loaderObj.translate({name:r.name,metadata:r.metadata,address:r.address,source:a})).then(function(e){return r.source=e,t.loaderObj.instantiate({name:r.name,metadata:r.metadata,address:r.address,source:e})}).then(function(a){if(void 0===a)return r.address=r.address||"<Anonymous Module "+ ++j+">",r.isDeclarative=!0,E.call(t.loaderObj,r).then(function(t){var a=e.System,o=a.register;a.register=function(e,t,n){"string"!=typeof e&&(n=t,t=e),r.declare=n,r.depsList=t},n(t,r.address,{}),a.register=o});if("object"!=typeof a)throw TypeError("Invalid instantiate return value");r.depsList=a.deps||[],r.execute=a.execute,r.isDeclarative=!1}).then(function(){r.dependencies=[];for(var e=r.depsList,n=[],a=0,o=e.length;o>a;a++)(function(e,a){n.push(i(t,e,r.name,r.address).then(function(t){if(r.dependencies[a]={key:e,value:t.name},"linked"!=t.status)for(var n=r.linkSets.concat([]),o=0,s=n.length;s>o;o++)m(n[o],t)}))})(e[a],a);return Promise.all(n)}).then(function(){r.status="loaded";for(var e=r.linkSets.concat([]),t=0,n=e.length;n>t;t++)h(e[t],r)}):void 0})["catch"](function(e){r.status="failed",r.exception=e;for(var t=r.linkSets.concat([]),n=0,a=t.length;a>n;n++)g(t[n],r,e)})}function c(e){return function(t,n){var r=e.loader,a=e.moduleName,s=e.step;if(r.modules[a])throw new TypeError('"'+a+'" already exists in the module table');for(var i,c=0,m=r.loads.length;m>c;c++)if(r.loads[c].name==a&&(i=r.loads[c],"translate"!=s||i.source||(i.address=e.moduleAddress,d(r,i,Promise.resolve(e.moduleSource))),i.linkSets.length&&i.linkSets[0].loads[0].name==i.name))return i.linkSets[0].done.then(function(){t(i)});var p=i||o(a);p.metadata=e.moduleMetadata;var h=f(r,p);r.loads.push(p),t(h.done),"locate"==s?l(r,p):"fetch"==s?u(r,p,Promise.resolve(e.moduleAddress)):(p.address=e.moduleAddress,d(r,p,Promise.resolve(e.moduleSource)))}}function f(e,t){var n={loader:e,loads:[],startingLoad:t,loadingCount:0};return n.done=new Promise(function(e,t){n.resolve=e,n.reject=t}),m(n,t),n}function m(e,t){if("failed"!=t.status){for(var n=0,r=e.loads.length;r>n;n++)if(e.loads[n]==t)return;e.loads.push(t),t.linkSets.push(e),"loaded"!=t.status&&e.loadingCount++;for(var a=e.loader,n=0,r=t.dependencies.length;r>n;n++)if(t.dependencies[n]){var o=t.dependencies[n].value;if(!a.modules[o])for(var s=0,i=a.loads.length;i>s;s++)if(a.loads[s].name==o){m(e,a.loads[s]);break}}}}function p(e){var t=!1;try{x(e,function(n,r){g(e,n,r),t=!0})}catch(n){g(e,null,n),t=!0}return t}function h(e,t){if(e.loadingCount--,!(e.loadingCount>0)){var n=e.startingLoad;if(e.loader.loaderObj.execute===!1){for(var r=[].concat(e.loads),a=0,o=r.length;o>a;a++){var t=r[a];t.module=t.isDeclarative?{name:t.name,module:_({}),evaluated:!0}:{module:_({})},t.status="linked",v(e.loader,t)}return e.resolve(n)}var s=p(e);s||e.resolve(n)}}function g(e,n,r){var a=e.loader;e:if(n)if(e.loads[0].name==n.name)r=t(r,"Error loading "+n.name);else{for(var o=0;o<e.loads.length;o++)for(var s=e.loads[o],i=0;i<s.dependencies.length;i++){var l=s.dependencies[i];if(l.value==n.name){r=t(r,"Error loading "+n.name+' as "'+l.key+'" from '+s.name);break e}}r=t(r,"Error loading "+n.name+" from "+e.loads[0].name)}else r=t(r,"Error linking "+e.loads[0].name);for(var u=e.loads.concat([]),o=0,d=u.length;d>o;o++){var n=u[o];a.loaderObj.failed=a.loaderObj.failed||[],-1==I.call(a.loaderObj.failed,n)&&a.loaderObj.failed.push(n);var c=I.call(n.linkSets,e);if(n.linkSets.splice(c,1),0==n.linkSets.length){var f=I.call(e.loader.loads,n);-1!=f&&e.loader.loads.splice(f,1)}}e.reject(r)}function v(e,t){if(e.loaderObj.trace){e.loaderObj.loads||(e.loaderObj.loads={});var n={};t.dependencies.forEach(function(e){n[e.key]=e.value}),e.loaderObj.loads[t.name]={name:t.name,deps:t.dependencies.map(function(e){return e.key}),depMap:n,address:t.address,metadata:t.metadata,source:t.source,kind:t.isDeclarative?"declarative":"dynamic"}}t.name&&(e.modules[t.name]=t.module);var r=I.call(e.loads,t);-1!=r&&e.loads.splice(r,1);for(var a=0,o=t.linkSets.length;o>a;a++)r=I.call(t.linkSets[a].loads,t),-1!=r&&t.linkSets[a].loads.splice(r,1);t.linkSets.splice(0,t.linkSets.length)}function b(e,t,n){try{var a=t.execute()}catch(o){return void n(t,o)}return a&&a instanceof r?a:void n(t,new TypeError("Execution must define a Module instance"))}function y(e,t,n){var r=e._loader.importPromises;return r[t]=n.then(function(e){return r[t]=void 0,e},function(e){throw r[t]=void 0,e})}function x(e,t){var n=e.loader;if(e.loads.length)for(var r=e.loads.concat([]),a=0;a<r.length;a++){var o=r[a],s=b(e,o,t);if(!s)return;o.module={name:o.name,module:s},o.status="linked",v(n,o)}}function w(e,t){return t.module.module}function S(){}function E(){throw new TypeError("ES6 transpilation is only provided in the dev module loader build.")}var j=0;a.prototype={constructor:a,define:function(e,t,n){if(this._loader.importPromises[e])throw new TypeError("Module is already loading.");return y(this,e,new Promise(c({step:"translate",loader:this._loader,moduleName:e,moduleMetadata:n&&n.metadata||{},moduleSource:t,moduleAddress:n&&n.address})))},"delete":function(e){var t=this._loader;return delete t.importPromises[e],delete t.moduleRecords[e],t.modules[e]?delete t.modules[e]:!1},get:function(e){return this._loader.modules[e]?(S(this._loader.modules[e],[],this),this._loader.modules[e].module):void 0},has:function(e){return!!this._loader.modules[e]},"import":function(e,t,n){"object"==typeof t&&(t=t.name);var r=this;return Promise.resolve(r.normalize(e,t)).then(function(e){var t=r._loader;return t.modules[e]?(S(t.modules[e],[],t._loader),t.modules[e].module):t.importPromises[e]||y(r,e,s(t,e,{}).then(function(n){return delete t.importPromises[e],w(t,n)}))})},load:function(e){var t=this._loader;return t.modules[e]?Promise.resolve():t.importPromises[e]||y(this,e,new Promise(c({step:"locate",loader:t,moduleName:e,moduleMetadata:{},moduleSource:void 0,moduleAddress:void 0})).then(function(){delete t.importPromises[e]}))},module:function(e,t){var n=o();n.address=t&&t.address;var r=f(this._loader,n),a=Promise.resolve(e),s=this._loader,i=r.done.then(function(){return w(s,n)});return d(s,n,a),i},newModule:function(e){if("object"!=typeof e)throw new TypeError("Expected object");var t=new r,n=[];if(Object.getOwnPropertyNames&&null!=e)n=Object.getOwnPropertyNames(e);else for(var a in e)n.push(a);for(var o=0;o<n.length;o++)(function(n){T(t,n,{configurable:!1,enumerable:!0,get:function(){return e[n]},set:function(){throw new Error("Module exports cannot be changed externally.")}})})(n[o]);return Object.freeze&&Object.freeze(t),t},set:function(e,t){if(!(t instanceof r))throw new TypeError("Loader.set("+e+", module) must be a module");this._loader.modules[e]={module:t}},normalize:function(e,t,n){return e},locate:function(e){return e.name},fetch:function(e){},translate:function(e){return e.source},instantiate:function(e){}};var _=a.prototype.newModule}();var D;i.prototype=a.prototype,o.prototype=new i;var J;if("undefined"!=typeof XMLHttpRequest)J=function(e,t,n,r){function a(){n(s.responseText)}function o(){r(new Error("XHR error"+(s.status?" ("+s.status+(s.statusText?" "+s.statusText:"")+")":"")+" loading "+e))}var s=new XMLHttpRequest,i=!0,l=!1;if(!("withCredentials"in s)){var u=/^(\w+:)?\/\/([^\/]+)/.exec(e);u&&(i=u[2]===window.location.host,u[1]&&(i&=u[1]===window.location.protocol))}i||"undefined"==typeof XDomainRequest||(s=new XDomainRequest,s.onload=a,s.onerror=o,s.ontimeout=o,s.onprogress=function(){},s.timeout=0,l=!0),s.onreadystatechange=function(){4===s.readyState&&(0==s.status?s.responseText?a():(s.addEventListener("error",o),s.addEventListener("load",a)):200===s.status?a():o())},s.open("GET",e,!0),s.setRequestHeader&&(s.setRequestHeader("Accept","application/x-es-module, */*"),t&&("string"==typeof t&&s.setRequestHeader("Authorization",t),s.withCredentials=!0)),l?setTimeout(function(){s.send()},0):s.send(null)};else if("undefined"!=typeof require&&"undefined"!=typeof process){var C;J=function(e,t,n,r){if("file:///"!=e.substr(0,8))throw new Error('Unable to fetch "'+e+'". Only file URLs of the form file:/// allowed running in Node.');return C=C||require("fs"),e=z?e.replace(/\//g,"\\").substr(8):e.substr(7),C.readFile(e,function(e,t){if(e)return r(e);var a=t+"";"\ufeff"===a[0]&&(a=a.substr(1)),n(a)})}}else{if("undefined"==typeof self||"undefined"==typeof self.fetch)throw new TypeError("No environment fetch API available.");J=function(e,t,n,r){var a={headers:{Accept:"application/x-es-module, */*"}};t&&("string"==typeof t&&(a.headers.Authorization=t),a.credentials="include"),fetch(e,a).then(function(e){if(e.ok)return e.text();throw new Error("Fetch error: "+e.status+" "+e.statusText)}).then(n,r)}}o.prototype.fetch=function(e){return new Promise(function(t,n){J(e.address,void 0,t,n)})};var U=function(){function t(t){var r=this;return Promise.resolve(e["typescript"==r.transpiler?"ts":r.transpiler]||(r.pluginLoader||r)["import"](r.transpiler)).then(function(e){e.__useDefault&&(e=e["default"]);var a;return a=e.Compiler?n:e.createLanguageService?s:o,"(function(__moduleName){"+a.call(r,t,e)+'\n})("'+t.name+'");\n//# sourceURL='+t.address+"!transpiled"})}function n(e,t){var n=this.traceurOptions||{};n.modules="instantiate",n.script=!1,void 0===n.sourceMaps&&(n.sourceMaps="inline"),n.filename=e.address,n.inputSourceMap=e.metadata.sourceMap,n.moduleName=!1;var a=new t.Compiler(n);return r(e.source,a,n.filename)}function r(e,t,n){try{return t.compile(e,n)}catch(r){if(r.length)throw r[0];throw r}}function o(e,t){var n=this.babelOptions||{};return n.modules="system",void 0===n.sourceMap&&(n.sourceMap="inline"),n.inputSourceMap=e.metadata.sourceMap,n.filename=e.address,n.code=!0,n.ast=!1,t.transform(e.source,n).code}function s(e,t){var n=this.typescriptOptions||{};return n.target=n.target||t.ScriptTarget.ES5,void 0===n.sourceMap&&(n.sourceMap=!0),n.sourceMap&&n.inlineSourceMap!==!1&&(n.inlineSourceMap=!0),n.module=t.ModuleKind.System,t.transpile(e.source,n,e.address)}return a.prototype.transpiler="traceur",t}();u.prototype=o.prototype,l.prototype=new u,l.prototype.constructor=l,l.prototype.instantiate=function(){};var q,N=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch($){N=!1}var B,H=["main","format","defaultExtension","meta","map","basePath","depCache"];!function(){function n(e){var t=e.source.lastIndexOf("\n"),n="esm"==e.metadata.format||"register"==e.metadata.format||e.metadata.bundle,r=e.metadata.sourceMap;if(r){if("object"!=typeof r)throw new TypeError("load.metadata.sourceMap must be set to an object.");r.mappings&&(r.mappings=";"+r.mappings)}return r=JSON.stringify(r),(n?"(function(System, SystemJS) {":"")+("cjs"==e.metadata.format?e.source.replace(l,""):e.source)+(n?"\n})(System, System);":"")+("\n//# sourceURL="!=e.source.substr(t,15)?"\n//# sourceURL="+e.address+(r?"!transpiled":""):"")+(r&&i&&"\n//# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(r)))||"")}function r(t,n){s=n,0==c++&&(u=e.System),e.System=e.SystemJS=t}function a(){0==--c&&(e.System=e.SystemJS=u),s=void 0}function o(e){p||(p=document.head||document.body||document.documentElement);var o=document.createElement("script");o.text=n(e,!1);var s,i=window.onerror;if(window.onerror=function(n){s=t(n,"Evaluating "+e.address)},r(this,e),e.metadata.integrity&&o.setAttribute("integrity",e.metadata.integrity),e.metadata.nonce&&o.setAttribute("nonce",e.metadata.nonce),p.appendChild(o),p.removeChild(o),a(),window.onerror=i,s)throw s}var s,i="undefined"!=typeof btoa,l=/^\#\!.*/;d("pushRegister_",function(){return function(e){return s?(this.reduceRegister_(s,e),!0):!1}});var u,c=0;B=function(e){if((e.metadata.integrity||e.metadata.nonce)&&f)return o.call(this,e);try{r(this,e),s=e,(0,eval)(n(e)),a()}catch(i){throw a(),t(i,"Evaluating "+e.address)}};var f=!1;if(O&&"undefined"!=typeof document&&document.getElementsByTagName){var m=document.getElementsByTagName("script");$__curScript=m[m.length-1],window.chrome&&window.chrome.extension||navigator.userAgent.match(/^Node\.js/)||(f=!0)}var p}();var X=/^[^\/]+:\/\//,Z={},G=new A(L);c(function(e){return function(){e.call(this),this.baseURL=L.substr(0,L.lastIndexOf("/")+1),this.map={},this.paths={},this.warnings=!1,this.defaultJSExtensions=!1,this.pluginFirst=!1,this.set("@empty",this.newModule({})),x.call(this,!1)}}),"undefined"==typeof require||"undefined"==typeof process||process.browser||(l.prototype._nodeRequire=require);var W=["assert","buffer","child_process","cluster","console","constants","crypto","dgram","dns","domain","events","fs","http","https","module","net","os","path","process","punycode","querystring","readline","repl","stream","string_decoder","sys","timers","tls","tty","url","util","vm","zlib"];d("normalize",function(e){return function(e,t,n){if(e=w.call(this,e),"@node/"==e.substr(0,6)&&-1!=W.indexOf(e.substr(6))){if(!this._nodeRequire)throw new TypeError("Error loading "+e+". Can only load node core modules in Node.");this.set(e,this.newModule(m(this._nodeRequire(e.substr(6)))))}return("."==e[0]||"/"==e[0])&&(e=t?new A(e,t.replace(/#/g,"%05")).href.replace(/%05/g,"#"):new A(e,G).href),this.has(e)?e:e.match(X)?(this.defaultJSExtensions&&".js"!=e.substr(e.length-3,3)&&!n&&(e+=".js"),e):(e=s(this.paths,e)||e,this.defaultJSExtensions&&".js"!=e.substr(e.length-3,3)&&!n&&(e+=".js"),"."==e[0]||"/"==e[0]?new A(e,G).href:new A(e,b.call(this)).href)}});var V="undefined"!=typeof XMLHttpRequest;d("locate",function(e){return function(t){return Promise.resolve(e.call(this,t)).then(function(e){return V?e.replace(/#/g,"%23"):e})}}),d("fetch",function(){return function(e){return new Promise(function(t,n){J(e.address,e.metadata.authorization,t,n)})}}),d("import",function(e){return function(t,n,r){return n&&n.name&&g.call(this,"SystemJS.import(name, { name: parentName }) is deprecated for SystemJS.import(name, parentName), while importing "+t+" from "+n.name),e.call(this,t,n,r).then(function(e){return e.__useDefault?e["default"]:e})}}),d("translate",function(e){return function(t){return"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t)}}),d("instantiate",function(e){return function(e){if("json"==e.metadata.format&&!this.builder){var t=e.metadata.entry=E();t.deps=[],t.execute=function(){try{return JSON.parse(e.source)}catch(t){throw new Error("Invalid JSON file "+e.name)}}}}}),l.prototype.env="development",l.prototype.config=function(e){function t(e){for(var t in e)if(hasOwnProperty.call(e,t))return!0}var n=this;if("warnings"in e&&(n.warnings=e.warnings),e.transpilerRuntime===!1&&(n._loader.loadedTranspilerRuntime=!0),e.baseURL){if(t(n.packages)||t(n.meta)||t(n.depCache)||t(n.bundles)||t(n.packageConfigPaths))throw new TypeError("Incorrect configuration order. The baseURL must be configured with the first SystemJS.config call.");n.baseURL=e.baseURL,b.call(n)}if(e.defaultJSExtensions&&(n.defaultJSExtensions=e.defaultJSExtensions,g.call(n,"The defaultJSExtensions configuration option is deprecated, use packages configuration instead.")),e.pluginFirst&&(n.pluginFirst=e.pluginFirst),e.production&&x.call(n,!0),e.paths)for(var r in e.paths)n.paths[r]=e.paths[r];if(e.map){var a="";for(var r in e.map){var o=e.map[r];if("string"!=typeof o){a+=(a.length?", ":"")+'"'+r+'"';var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(r);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3));var l="";for(var u in n.packages)i.substr(0,u.length)==u&&(!i[u.length]||"/"==i[u.length])&&l.split("/").length<u.split("/").length&&(l=u);l&&n.packages[l].main&&(i=i.substr(0,i.length-n.packages[l].main.length-1));var u=n.packages[i]=n.packages[i]||{};u.map=o}else n.map[r]=o}a&&g.call(n,"The map configuration for "+a+' uses object submaps, which is deprecated in global map.\nUpdate this to use package contextual map with configs like SystemJS.config({ packages: { "'+r+'": { map: {...} } } }).')}if(e.packageConfigPaths){for(var d=[],c=0;c<e.packageConfigPaths.length;c++){var f=e.packageConfigPaths[c],m=Math.max(f.lastIndexOf("*")+1,f.lastIndexOf("/")),s=n.defaultJSExtensions&&".js"!=f.substr(m-3,3),p=n.decanonicalize(f.substr(0,m));s&&".js"==p.substr(p.length-3,3)&&(p=p.substr(0,p.length-3)),d[c]=p+f.substr(m)}n.packageConfigPaths=d}if(e.bundles)for(var r in e.bundles){for(var v=[],c=0;c<e.bundles[r].length;c++){var s=n.defaultJSExtensions&&".js"!=e.bundles[r][c].substr(e.bundles[r][c].length-3,3),y=n.decanonicalize(e.bundles[r][c]);s&&".js"==y.substr(y.length-3,3)&&(y=y.substr(0,y.length-3)),v.push(y)}n.bundles[r]=v}if(e.packages)for(var r in e.packages){if(r.match(/^([^\/]+:)?\/\/$/))throw new TypeError('"'+r+'" is not a valid package name.');var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(w(r));s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3)),"/"==i[i.length-1]&&(i=i.substr(0,i.length-1)),n.packages[i]=n.packages[i]||{},e.packages[r].modules&&(g.call(n,"Package "+r+' is configured with "modules", which is deprecated as it has been renamed to "meta".'),e.packages[r].meta=e.packages[r].modules,delete e.packages[r].modules);for(var S in e.packages[r])-1==I.call(H,S)&&g.call(n,'"'+S+'" is not a valid package configuration option in package '+r);h(n.packages[i],e.packages[r])}for(var E in e){var o=e[E];if("baseURL"!=E&&"map"!=E&&"packages"!=E&&"bundles"!=E&&"paths"!=E&&"warnings"!=E&&"packageConfigPaths"!=E)if("object"!=typeof o||o instanceof Array)n[E]=o;else{n[E]=n[E]||{};for(var r in o)if("meta"==E&&"*"==r[0])n[E][r]=o[r];else if("meta"==E)n[E][n.decanonicalize(w(r))]=o[r];else if("depCache"==E){var s=n.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),i=n.decanonicalize(r);s&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3)),n[E][i]=o[r]}else n[E][r]=o[r]}}},function(){function e(e,t){var n,r,a=0;for(var o in e.packages)t.substr(0,o.length)!==o||t.length!==o.length&&"/"!==t[o.length]||(r=o.split("/").length,r>a&&(n=o,a=r));return n}function t(e){var t=e.basePath&&"."!=e.basePath?e.basePath:"";return t&&("./"==t.substr(0,2)&&(t=t.substr(2)),"/"!=t[t.length-1]&&(t+="/")),t}function n(e,t,n,r,a,o){if(!a||"/"==a[a.length-1]||o||t.defaultExtension===!1)return a;if(a.match(Q))return a;var s=!1;if(t.meta&&p(t.meta,a,function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?s=!0:void 0}),!s&&e.meta&&p(e.meta,n+"/"+r+a,function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?s=!0:void 0}),s)return a;var i="."+(t.defaultExtension||"js");return a.substr(a.length-i.length)!=i?a+i:a}function r(e,r,o,s,i){if(!s){if(!r.main)return o+(e.defaultJSExtensions?".js":"");s="./"==r.main.substr(0,2)?r.main.substr(2):r.main}var l=t(r);if(r.map){var u="./"+s,d=y(r.map,u);if(d||(u="./"+n(e,r,o,l,s,i),u!="./"+s&&(d=y(r.map,u))),d)return a(e,r,o,l,d,u,i)}return o+"/"+l+n(e,r,o,l,s,i)}function a(e,t,r,a,o,s,i){var l=t.map[o];if("string"!=typeof l&&(l=o=s),"."==l)l=r;else if("./"==l.substr(0,2))return r+"/"+a+n(e,t,r,a,l.substr(2)+s.substr(o.length),i);return e.normalizeSync(l+s.substr(o.length),r+"/")}function o(e,r,a,o,s){if(!o){if(!r.main)return Promise.resolve(a+(e.defaultJSExtensions?".js":""));o="./"==r.main.substr(0,2)?r.main.substr(2):r.main}var l,u,d=t(r);return r.map&&(l="./"+o,u=y(r.map,l),u||(l="./"+n(e,r,a,d,o,s),l!="./"+o&&(u=y(r.map,l)))),(u?i(e,r,a,d,u,l,s):Promise.resolve()).then(function(t){return t?Promise.resolve(t):Promise.resolve(a+"/"+d+n(e,r,a,d,o,s))})}function s(e,t,r,a,o,s,i,l){if("."==s)s=r;else if("./"==s.substr(0,2))return Promise.resolve(r+"/"+a+n(e,t,r,a,s.substr(2)+i.substr(o.length),l)).then(function(t){return P.call(e,t,r+"/")});return e.normalize(s+i.substr(o.length),r+"/")}function i(e,t,n,r,a,o,i){var l=t.map[a];return"string"==typeof l?s(e,t,n,r,a,l,o,i):e.builder?Promise.resolve(n+"/#:"+o):e["import"](t.map["@env"]||"@system-env",n).then(function(e){for(var t in l){var n="~"==t[0],r=v(n?t.substr(1):t,e);if(!n&&r||n&&!r)return l[t]}}).then(function(l){return l?s(e,t,n,r,a,l,o,i):void 0})}function u(e){var t=e.lastIndexOf("*"),n=Math.max(t+1,e.lastIndexOf("/"));return{length:n,regEx:new RegExp("^("+e.substr(0,n).replace(/\*/g,"[^\\/]+")+")(\\/|$)"),wildcard:-1!=t}}function f(e,t){for(var n,r,a=!1,o=0;o<e.packageConfigPaths.length;o++){var s=e.packageConfigPaths[o],i=b[s]||(b[s]=u(s));if(!(t.length<i.length)){var l=t.match(i.regEx);!l||n&&(a&&i.wildcard||!(n.length<l[1].length))||(n=l[1],a=!i.wildcard,r=n+s.substr(i.length))}}return n?{packageName:n,configPath:r}:void 0}function m(e,n,r){var a=e.pluginLoader||e;return(a.meta[r]=a.meta[r]||{}).format="json",a.load(r).then(function(){pkgConfig=a.get(r);var o=pkgConfig["default"];o.systemjs&&(o=o.systemjs),o.modules&&(o.meta=o.modules,g.call(e,"Package config file "+r+' is configured with "modules", which is deprecated as it has been renamed to "meta".'));for(var s in o)-1==I.call(H,s)&&delete o[s];var i=e.packages[n]=e.packages[n]||{};h(i,o,!0);var l=t(i);if(o.depCache){for(var u in o.depCache){var d;d="./"==u.substr(0,2)?n+"/"+l+u.substr(2):coreResolve.call(e,u),e.depCache[d]=(e.depCache[d]||[]).concat(o.depCache[u])}delete o.depCache}return i})}function p(e,t,n){var r;for(var a in e){var o="./"==a.substr(0,2)?"./":"";if(o&&(a=a.substr(2)),r=a.indexOf("*"),-1!==r&&a.substr(0,r)==t.substr(0,r)&&a.substr(r+1)==t.substr(t.length-a.length+r+1)&&n(a,e[o+a],a.split("/").length))return}var s=e[t]||e["./"+t];s&&n(s,s,0)}c(function(e){return function(){e.call(this),this.packages={},this.packageConfigPaths=[]}}),l.prototype.normalizeSync=l.prototype.decanonicalize=l.prototype.normalize,d("decanonicalize",function(t){return function(n,r){if(this.builder)return t.call(this,n,r,!0);var a=t.call(this,n,r);if(!this.defaultJSExtensions)return a;var o=e(this,a),s=this.packages[o],i=s&&s.defaultExtension;return void 0==i&&s&&s.meta&&p(s.meta,a.substr(o),function(e,t,n){return 0==n||e.lastIndexOf("*")!=e.length-1?(i=!1,!0):void 0}),(i===!1||i&&".js"!=i)&&".js"!=n.substr(n.length-3,3)&&".js"==a.substr(a.length-3,3)&&(a=a.substr(0,a.length-3)),a}}),d("normalizeSync",function(n){return function(o,s,i){g.call(this,"SystemJS.normalizeSync has been deprecated for SystemJS.decanonicalize.");var l=this;if(i=i===!0,s)var u=e(l,s)||l.defaultJSExtensions&&".js"==s.substr(s.length-3,3)&&e(l,s.substr(0,s.length-3));var d=u&&l.packages[u];if(d){var c=t(d);c&&s.substr(u.length+1,c.length)==c&&(s=u+s.substr(u.length+c.length))}if(d&&"."!=o[0]){var m=d.map,p=m&&y(m,o);if(p&&"string"==typeof m[p])return a(l,d,u,t(d),p,o,i)}var h=l.defaultJSExtensions&&".js"!=o.substr(o.length-3,3),v=n.call(l,o,s);h&&".js"!=v.substr(v.length-3,3)&&(h=!1),h&&(v=v.substr(0,v.length-3));var b=f(l,v),x=b&&b.packageName||e(l,v);if(!x)return v+(h?".js":"");var w=v.substr(x.length+1);return r(l,l.packages[x]||{},x,w,i)}}),d("normalize",function(n){return function(r,a,s){var l=this;return s=s===!0,Promise.resolve().then(function(){if(a)var n=e(l,a)||l.defaultJSExtensions&&".js"==a.substr(a.length-3,3)&&e(l,a.substr(0,a.length-3));var o=n&&l.packages[n];if(o){var u=t(o);u&&a.substr(n.length+1,u.length)==u&&(a=n+a.substr(n.length+u.length))}if(o&&"./"!=r.substr(0,2)){var d=o.map,c=d&&y(d,r);if(c)return i(l,o,n,u,c,r,s)}return Promise.resolve()}).then(function(t){if(t)return t;var i=l.defaultJSExtensions&&".js"!=r.substr(r.length-3,3),u=n.call(l,r,a);i&&".js"!=u.substr(u.length-3,3)&&(i=!1),i&&(u=u.substr(0,u.length-3));var d=f(l,u),c=d&&d.packageName||e(l,u);if(!c)return Promise.resolve(u+(i?".js":""));var p=l.packages[c],h=p&&(p.configured||!d);return(h?Promise.resolve(p):m(l,c,d.configPath)).then(function(e){var t=u.substr(c.length+1);return o(l,e,c,t,s)})})}});var b={};d("locate",function(n){return function(r){var a=this;return Promise.resolve(n.call(this,r)).then(function(n){var o=e(a,r.name);if(o){var s=a.packages[o],i=t(s),l=r.name.substr(o.length+i.length+1);s.format&&(r.metadata.format=r.metadata.format||s.format);var u={};if(s.meta){var d=0;p(s.meta,l,function(e,t,n){n>d&&(d=n),h(u,t,n&&d>n)}),u.alias&&"./"==u.alias.substr(0,2)&&(u.alias=o+u.alias.substr(1)),u.loader&&"./"==u.loader.substr(0,2)&&(u.loader=o+u.loader.substr(1)),h(r.metadata,u)}}return n})}})}(),function(){function t(){if(o&&"interactive"===o.script.readyState)return o.load;for(var e=0;e<l.length;e++)if("interactive"==l[e].script.readyState)return o=l[e],o.load}function n(e,t){return new Promise(function(e,n){t.metadata.integrity&&n(new Error("Subresource integrity checking is not supported in web workers.")),s=t;try{importScripts(t.address)}catch(r){s=null,n(r)}s=null,t.metadata.entry||n(new Error(t.address+" did not call System.register or AMD define")),e("")})}if("undefined"!=typeof document)var r=document.getElementsByTagName("head")[0];var a,o,s=null,i=r&&function(){var e=document.createElement("script"),t="undefined"!=typeof opera&&"[object Opera]"===opera.toString();return e.attachEvent&&!(e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0)&&!t}(),l=[],u=0,c=[];d("pushRegister_",function(e){return function(n){return e.call(this,n)?!1:(s?this.reduceRegister_(s,n):i?this.reduceRegister_(t(),n):u?c.push(n):this.reduceRegister_(null,n),!0)}}),d("fetch",function(t){return function(s){var d=this;return"json"!=s.metadata.format&&s.metadata.scriptLoad&&(O||M)?M?n(d,s):new Promise(function(t,n){function f(e){if(!h.readyState||"loaded"==h.readyState||"complete"==h.readyState){if(u--,s.metadata.entry||c.length){if(!i){for(var r=0;r<c.length;r++)d.reduceRegister_(s,c[r]);c=[]}}else d.reduceRegister_(s);p(),s.metadata.entry||s.metadata.bundle||n(new Error(s.name+" did not call System.register or AMD define. If loading a global module configure the global name via the meta exports property for script injection support.")),t("")}}function m(e){p(),n(new Error("Unable to load script "+s.address))}function p(){if(e.System=a,h.detachEvent){
h.detachEvent("onreadystatechange",f);for(var t=0;t<l.length;t++)l[t].script==h&&(o&&o.script==h&&(o=null),l.splice(t,1))}else h.removeEventListener("load",f,!1),h.removeEventListener("error",m,!1);r.removeChild(h)}var h=document.createElement("script");h.async=!0,s.metadata.integrity&&h.setAttribute("integrity",s.metadata.integrity),i?(h.attachEvent("onreadystatechange",f),l.push({script:h,load:s})):(h.addEventListener("load",f,!1),h.addEventListener("error",m,!1)),u++,a=e.System,h.src=s.address,r.appendChild(h)}):t.call(this,s)}})}();var K=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/;!function(){function t(e,n,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==I.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,o=e.normalizedDeps.length;o>a;a++){var s=e.normalizedDeps[a],i=n.defined[s];if(i&&!i.evaluated){var l=e.groupIndex+(i.declarative!=e.declarative);if(null===i.groupIndex||i.groupIndex<l){if(null!==i.groupIndex&&(r[i.groupIndex].splice(I.call(r[i.groupIndex],i),1),0==r[i.groupIndex].length))throw new Error("Mixed dependency cycle detected");i.groupIndex=l}t(i,n,r)}}}}function n(e,n){var r=n.defined[e];if(!r.module){r.groupIndex=0;var a=[];t(r,n,a);for(var s=!!r.declarative==a.length%2,l=a.length-1;l>=0;l--){for(var u=a[l],d=0;d<u.length;d++){var c=u[d];s?o(c,n):i(c,n)}s=!s}}}function r(){}function a(e,t){return t[e]||(t[e]={name:e,dependencies:[],exports:new r,importers:[]})}function o(t,n){if(!t.module){var r=n._loader.moduleRecords,s=t.module=a(t.name,r),i=t.module.exports,l=t.declare.call(e,function(e,t){if(s.locked=!0,"object"==typeof e)for(var n in e)i[n]=e[n];else i[e]=t;for(var r=0,a=s.importers.length;a>r;r++){var o=s.importers[r];if(!o.locked){var l=I.call(o.dependencies,s);o.setters[l](i)}}return s.locked=!1,t},{id:t.name});if(s.setters=l.setters,s.execute=l.execute,!s.setters||!s.execute)throw new TypeError("Invalid System.register form for "+t.name);for(var u=0,d=t.normalizedDeps.length;d>u;u++){var c,f=t.normalizedDeps[u],m=n.defined[f],p=r[f];p?c=p.exports:m&&!m.declarative?c=m.esModule:m?(o(m,n),p=m.module,c=p.exports):c=n.get(f),p&&p.importers?(p.importers.push(s),s.dependencies.push(p)):s.dependencies.push(null);for(var h=t.originalIndices[u],g=0,v=h.length;v>g;++g){var b=h[g];s.setters[b]&&s.setters[b](c)}}}}function s(e,t){var n,r=t.defined[e];if(r)r.declarative?u(e,[],t):r.evaluated||i(r,t),n=r.module.exports;else if(n=t.get(e),!n)throw new Error("Unable to load dependency "+e+".");return(!r||r.declarative)&&n&&n.__useDefault?n["default"]:n}function i(t,n){if(!t.module){var r={},a=t.module={exports:r,id:t.name};if(!t.executingRequire)for(var o=0,l=t.normalizedDeps.length;l>o;o++){var u=t.normalizedDeps[o],d=n.defined[u];d&&i(d,n)}t.evaluated=!0;var c=t.execute.call(e,function(e){for(var r=0,a=t.deps.length;a>r;r++)if(t.deps[r]==e)return s(t.normalizedDeps[r],n);throw new Error("Module "+e+" not declared as a dependency.")},r,a);c&&(a.exports=c),r=a.exports,r&&r.__esModule?t.esModule=r:t.esmExports&&r!==e?t.esModule=m(r):t.esModule={"default":r}}}function u(t,n,r){var a=r.defined[t];if(a&&!a.evaluated&&a.declarative){n.push(t);for(var o=0,s=a.normalizedDeps.length;s>o;o++){var i=a.normalizedDeps[o];-1==I.call(n,i)&&(r.defined[i]?u(i,n,r):r.get(i))}a.evaluated||(a.evaluated=!0,a.module.execute.call(e))}}l.prototype.register=function(e,t,n){if("string"!=typeof e&&(n=t,t=e,e=null),"boolean"==typeof n)return this.registerDynamic.apply(this,arguments);var r=E();r.name=e&&(this.decanonicalize||this.normalize).call(this,e),r.declarative=!0,r.deps=t,r.declare=n,this.pushRegister_({amd:!1,entry:r})},l.prototype.registerDynamic=function(e,t,n,r){"string"!=typeof e&&(r=n,n=t,t=e,e=null);var a=E();a.name=e&&(this.decanonicalize||this.normalize).call(this,e),a.deps=t,a.execute=r,a.executingRequire=n,this.pushRegister_({amd:!1,entry:a})},d("reduceRegister_",function(){return function(e,t){if(t){var n=t.entry,r=e&&e.metadata;if(n.name&&(n.name in this.defined||(this.defined[n.name]=n),r&&(r.bundle=!0)),!n.name||e&&n.name==e.name){if(!r)throw new TypeError("Unexpected anonymous System.register call.");if(r.entry)throw"register"==r.format?new Error("Multiple anonymous System.register calls in module "+e.name+". If loading a bundle, ensure all the System.register calls are named."):new Error("Module "+e.name+" interpreted as "+r.format+" module format, but called System.register.");r.format||(r.format="register"),r.entry=n}}}}),c(function(e){return function(){e.call(this),this.defined={},this._loader.moduleRecords={}}}),T(r,"toString",{value:function(){return"Module"}}),d("delete",function(e){return function(t){return delete this._loader.moduleRecords[t],delete this.defined[t],e.call(this,t)}}),d("fetch",function(e){return function(t){return this.defined[t.name]?(t.metadata.format="defined",""):(t.metadata.deps=t.metadata.deps||[],e.call(this,t))}}),d("translate",function(e){return function(t){return t.metadata.deps=t.metadata.deps||[],Promise.resolve(e.call(this,t)).then(function(e){return("register"==t.metadata.format||!t.metadata.format&&S(t.source))&&(t.metadata.format="register"),e})}}),d("instantiate",function(e){return function(t){"detect"==t.metadata.format&&(t.metadata.format=void 0),e.call(this,t);var r,a=this;if(a.defined[t.name])r=a.defined[t.name],r.declarative||(r.deps=r.deps.concat(t.metadata.deps));else if(t.metadata.entry)r=t.metadata.entry,r.deps=r.deps.concat(t.metadata.deps);else if(!(a.builder&&t.metadata.bundle||"register"!=t.metadata.format&&"esm"!=t.metadata.format&&"es6"!=t.metadata.format)){if("undefined"!=typeof B&&B.call(a,t),!t.metadata.entry&&!t.metadata.bundle)throw new Error(t.name+" detected as "+t.metadata.format+" but didn't execute.");r=t.metadata.entry,r&&t.metadata.deps&&(r.deps=r.deps.concat(t.metadata.deps))}r||(r=E(),r.deps=t.metadata.deps,r.execute=function(){}),a.defined[t.name]=r;var o=f(r.deps);r.deps=o.names,r.originalIndices=o.indices,r.name=t.name,r.esmExports=t.metadata.esmExports!==!1;for(var s=[],i=0,l=r.deps.length;l>i;i++)s.push(Promise.resolve(a.normalize(r.deps[i],t.name)));return Promise.all(s).then(function(e){return r.normalizedDeps=e,{deps:r.deps,execute:function(){return n(t.name,a),u(t.name,[],a),a.defined[t.name]=void 0,a.newModule(r.declarative?r.module.exports:r.esModule)}}})}})}(),function(){var t=/(^\s*|[}\);\n]\s*)(import\s+(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s+from\s+['"]|\{)|export\s+\*\s+from\s+["']|export\s+(\{|default|function|class|var|const|let|async\s+function))/,n=/\$traceurRuntime\s*\./,r=/babelHelpers\s*\./;d("translate",function(a){return function(o){var s=this;return a.call(s,o).then(function(a){if("esm"==o.metadata.format||"es6"==o.metadata.format||!o.metadata.format&&s.transpiler!==!1&&a.match(t)){if("es6"==o.metadata.format&&g.call(s,"Module "+o.name+' has metadata setting its format to "es6", which is deprecated.\nThis should be updated to "esm".'),o.metadata.format="esm",s.transpiler===!1){if(s.builder)return a;throw new TypeError("Unable to dynamically transpile ES module as SystemJS.transpiler set to false.")}return s._loader.loadedTranspiler=s._loader.loadedTranspiler||!1,s.pluginLoader&&(s.pluginLoader._loader.loadedTranspiler=s._loader.loadedTranspiler||!1),(s._loader.transpilerPromise||(s._loader.transpilerPromise=Promise.resolve(e["typescript"==s.transpiler?"ts":s.transpiler]||(s.pluginLoader||s)["import"](s.transpiler)))).then(function(e){return s._loader.loadedTranspilerRuntime=!0,e.translate?e==o.metadata.loaderModule?o.source:("string"==typeof o.metadata.sourceMap&&(o.metadata.sourceMap=JSON.parse(o.metadata.sourceMap)),Promise.resolve(e.translate.call(s,o)).then(function(e){var t=o.metadata.sourceMap;if(t&&"object"==typeof t){var n=o.name.split("!")[0];t.file=n+"!transpiled",(!t.sources||t.sources.length<=1)&&(t.sources=[n])}return"esm"==o.metadata.format&&!s.builder&&S(e)&&(o.metadata.format="register"),e})):(s.builder&&(o.metadata.originalSource=o.source),U.call(s,o).then(function(e){return o.metadata.sourceMap=void 0,e}))})}if(s.transpiler===!1)return a;if(s._loader.loadedTranspiler!==!1||"traceur"!=s.transpiler&&"typescript"!=s.transpiler&&"babel"!=s.transpiler||o.name!=s.normalizeSync(s.transpiler)||(a.length>100&&!o.metadata.format&&(o.metadata.format="global","traceur"===s.transpiler&&(o.metadata.exports="traceur"),"typescript"===s.transpiler&&(o.metadata.exports="ts")),s._loader.loadedTranspiler=!0),s._loader.loadedTranspilerRuntime===!1&&(o.name==s.normalizeSync("traceur-runtime")||o.name==s.normalizeSync("babel/external-helpers*"))&&(a.length>100&&(o.metadata.format=o.metadata.format||"global"),s._loader.loadedTranspilerRuntime=!0),("register"==o.metadata.format||o.metadata.bundle)&&s._loader.loadedTranspilerRuntime!==!0){if(!e.$traceurRuntime&&o.source.match(n))return s._loader.loadedTranspilerRuntime=s._loader.loadedTranspilerRuntime||!1,s["import"]("traceur-runtime").then(function(){return a});if(!e.babelHelpers&&o.source.match(r))return s._loader.loadedTranspilerRuntime=s._loader.loadedTranspilerRuntime||!1,s["import"]("babel/external-helpers").then(function(){return a})}return a})}})}();var Y="undefined"!=typeof self?"self":"global";d("fetch",function(e){return function(t){return t.metadata.exports&&!t.metadata.format&&(t.metadata.format="global"),e.call(this,t)}}),d("instantiate",function(e){return function(t){var n=this;if(t.metadata.format||(t.metadata.format="global"),"global"==t.metadata.format&&!t.metadata.registered){var r=E();t.metadata.entry=r,r.deps=[];for(var a in t.metadata.globals){var o=t.metadata.globals[a];o&&r.deps.push(o)}r.execute=function(e,r,a){var o;if(t.metadata.globals){o={};for(var s in t.metadata.globals)t.metadata.globals[s]&&(o[s]=e(t.metadata.globals[s]))}var i=t.metadata.exports;i&&(t.source+="\n"+Y+'["'+i+'"] = '+i+";");var l=n.get("@@global-helpers").prepareGlobal(a.id,i,o);return B.call(n,t),l()}}return e.call(this,t)}}),d("reduceRegister_",function(t){return function(n,r){if(r||!n.metadata.exports)return t.call(this,n,r);n.metadata.format="global";var a=n.metadata.entry=E();a.deps=n.metadata.deps;var o=v(n.metadata.exports,e);a.execute=function(){return o}}}),c(function(t){return function(){function n(t){if(Object.keys)Object.keys(e).forEach(t);else for(var n in e)s.call(e,n)&&t(n)}function r(t){n(function(n){if(-1==I.call(i,n)){try{var r=e[n]}catch(a){i.push(n)}t(n,r)}})}var a=this;t.call(a);var o,s=Object.prototype.hasOwnProperty,i=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];a.set("@@global-helpers",a.newModule({prepareGlobal:function(t,n,a){var s=e.define;e.define=void 0,e.exports=void 0,e.module&&e.module.exports&&(e.module=void 0);var i;if(a){i={};for(var l in a)i[l]=e[l],e[l]=a[l]}return n||(o={},r(function(e,t){o[e]=t})),function(){var t;if(n)t=v(n,e);else{var a,l,u={};r(function(e,t){o[e]!==t&&"undefined"!=typeof t&&(u[e]=t,"undefined"!=typeof a?l||a===t||(l=!0):a=t)}),t=l?u:a}if(i)for(var d in i)e[d]=i[d];return e.define=s,t}}}))}}),function(){function t(e){function t(e,t){for(var n=0;n<e.length;n++)if(e[n][0]<t.index&&e[n][1]>t.index)return!0;return!1}r.lastIndex=a.lastIndex=o.lastIndex=0;var n,s=[],i=[],l=[];if(e.length/e.split("\n").length<200){for(;n=o.exec(e);)i.push([n.index,n.index+n[0].length]);for(;n=a.exec(e);)t(i,n)||l.push([n.index,n.index+n[0].length])}for(;n=r.exec(e);)if(!t(i,n)&&!t(l,n)){var u=n[1].substr(1,n[1].length-2);if(u.match(/"|'/))continue;"/"==u[u.length-1]&&(u=u.substr(0,u.length-1)),s.push(u)}return s}var n=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/,r=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g,a=/(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,o=/("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g;d("instantiate",function(a){return function(o){var s=this;if(o.metadata.format||(n.lastIndex=0,r.lastIndex=0,(r.exec(o.source)||n.exec(o.source))&&(o.metadata.format="cjs")),"cjs"==o.metadata.format){var i=o.metadata.deps,l=o.metadata.cjsRequireDetection===!1?[]:t(o.source);for(var u in o.metadata.globals)o.metadata.globals[u]&&l.push(o.metadata.globals[u]);var d=E();o.metadata.entry=d,d.deps=l,d.executingRequire=!0,d.execute=function(t,n,r){function a(e){return"/"==e[e.length-1]&&(e=e.substr(0,e.length-1)),t.apply(this,arguments)}for(var l=0;l<i.length;l++)a(i[l]);var u=e.define;e.define=void 0;var d=s.get("@@cjs-helpers").getPathVars(r.id);e.__cjsWrapper={exports:n,args:[a,n,r,d.filename,d.dirname,e,e]};var c="";if(o.metadata.globals)for(var f in o.metadata.globals)c+="var "+f+' = require("'+o.metadata.globals[f]+'");';o.source="(function(require, exports, module, __filename, __dirname, global, GLOBAL) {"+c+o.source+"\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);",B.call(s,o),e.__cjsWrapper=void 0,e.define=u}}return a.call(s,o)}})}(),c(function(e){return function(){var t=this;if(e.call(t),"undefined"!=typeof window&&"undefined"!=typeof document&&window.location)var n=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");t.set("@@cjs-helpers",t.newModule({getPathVars:function(e){var t,r=e.lastIndexOf("!");t=-1!=r?e.substr(0,r):e;var a=t.split("/");return a.pop(),a=a.join("/"),"file:///"==t.substr(0,8)?(t=t.substr(7),a=a.substr(7),z&&(t=t.substr(1),a=a.substr(1))):n&&t.substr(0,n.length)===n&&(t=t.substr(n.length),a=a.substr(n.length)),{filename:t,dirname:a}}}))}}),c(function(t){return function(){function n(e,t){e=e.replace(i,"");var n=e.match(c),r=(n[1].split(",")[t]||"require").replace(f,""),a=m[r]||(m[r]=new RegExp(l+r+u,"g"));a.lastIndex=0;for(var o,s=[];o=a.exec(e);)s.push(o[2]||o[3]);return s}function r(e,t,n,a){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof t&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var o=s.defaultJSExtensions&&".js"!=e.substr(e.length-3,3),i=s.decanonicalize(e,a);o&&".js"==i.substr(i.length-3,3)&&(i=i.substr(0,i.length-3));var l=s.get(i);if(!l)throw new Error('Module not already loaded loading "'+e+'" from "'+a+'".');return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var u=[],d=0;d<e.length;d++)u.push(s["import"](e[d],a));Promise.all(u).then(function(e){t&&t.apply(null,e)},n)}function a(t,a,o){function i(t,n,i){function c(e,n,a){return"string"==typeof e&&"function"!=typeof n?t(e):r.call(s,e,n,a,i.id)}for(var f=[],m=0;m<a.length;m++)f.push(t(a[m]));i.uri=i.id,i.config=function(){},-1!=d&&f.splice(d,0,i),-1!=u&&f.splice(u,0,n),-1!=l&&(c.toUrl=function(e){var t=s.defaultJSExtensions&&".js"!=e.substr(e.length-3,3),n=s.decanonicalize(e,i.id);return t&&".js"==n.substr(n.length-3,3)&&(n=n.substr(0,n.length-3)),n},f.splice(l,0,c));var p=e.require;e.require=r;var h=o.apply(-1==u?e:n,f);return e.require=p,"undefined"==typeof h&&i&&(h=i.exports),"undefined"!=typeof h?h:void 0}"string"!=typeof t&&(o=a,a=t,t=null),a instanceof Array||(o=a,a=["require","exports","module"].splice(0,o.length)),"function"!=typeof o&&(o=function(e){return function(){return e}}(o)),void 0===a[a.length-1]&&a.pop();var l,u,d;-1!=(l=I.call(a,"require"))&&(a.splice(l,1),t||(a=a.concat(n(o.toString(),l)))),-1!=(u=I.call(a,"exports"))&&a.splice(u,1),-1!=(d=I.call(a,"module"))&&a.splice(d,1);var c=E();c.name=t&&(s.decanonicalize||s.normalize).call(s,t),c.deps=a,c.execute=i,s.pushRegister_({amd:!0,entry:c})}function o(){var t=e.module,n=e.exports,r=e.define;return e.module=void 0,e.exports=void 0,e.define=a,function(){e.define=r,e.module=t,e.exports=n}}var s=this;t.call(this);var i=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,l="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",u="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",c=/\(([^\)]*)\)/,f=/^\s+|\s+$/g,m={};a.amd={},d("reduceRegister_",function(e){return function(t,n){if(!n||!n.amd)return e.call(this,t,n);var r=t&&t.metadata,a=n.entry;if(r&&(r.format="amd"),a.name)r&&(r.entry||r.bundle?r.entry=void 0:r.entry=a,r.bundle=!0),a.name in this.defined||(this.defined[a.name]=a);else{if(!r)throw new TypeError("Unexpected anonymous AMD define.");if(r.entry)throw new TypeError("Multiple defines for anonymous module "+t.name);r.entry=a}}}),s.set("@@amd-helpers",s.newModule({createDefine:o,require:r,define:a})),s.amdDefine=a,s.amdRequire=r}}),function(){var e=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;d("fetch",function(e){return function(t){return t.metadata.scriptLoad&&O&&this.get("@@amd-helpers").createDefine(),e.call(this,t)}}),d("instantiate",function(t){return function(n){var r=this;if("amd"==n.metadata.format||!n.metadata.format&&n.source.match(e))if(n.metadata.format="amd",r.builder||r.execute===!1)n.metadata.execute=function(){return n.metadata.builderExecute.apply(this,arguments)};else{var a=this.get("@@amd-helpers").createDefine();try{B.call(r,n)}finally{a()}if(!n.metadata.entry&&!n.metadata.bundle)throw new TypeError("AMD module "+n.name+" did not define")}return t.call(r,n)}})}(),function(){function e(e,t){if(t){var n;if(e.pluginFirst){if(-1!=(n=t.lastIndexOf("!")))return t.substr(n+1)}else if(-1!=(n=t.indexOf("!")))return t.substr(0,n);return t}}function t(e,t){var n,r,a=t.lastIndexOf("!");return-1!=a?(e.pluginFirst?(n=t.substr(a+1),r=t.substr(0,a)):(n=t.substr(0,a),r=t.substr(a+1)||n.substr(n.lastIndexOf(".")+1)),{argument:n,plugin:r}):void 0}function n(e,t,n,r){return r&&".js"==t.substr(t.length-3,3)&&(t=t.substr(0,t.length-3)),e.pluginFirst?n+"!"+t:t+"!"+n}function r(e,t){return e.defaultJSExtensions&&".js"!=t.substr(t.length-3,3)}function a(a){return function(o,s,i){var l=this;s=e(this,s);var u=t(l,o);if(!u)return a.call(this,o,s,i);var d=l.normalizeSync(u.argument,s,!0),c=l.normalizeSync(u.plugin,s,!0);return n(l,d,c,r(l,u.argument))}}d("decanonicalize",a),d("normalizeSync",a),d("normalize",function(a){return function(o,s,i){var l=this;s=e(this,s);var u=t(l,o);return u?Promise.all([l.normalize(u.argument,s,!0),l.normalize(u.plugin,s)]).then(function(e){return n(l,e[0],e[1],r(l,u.argument))}):a.call(l,o,s,i)}}),d("locate",function(e){return function(t){var n,r=this,a=t.name;return r.pluginFirst?-1!=(n=a.indexOf("!"))&&(t.metadata.loader=a.substr(0,n),t.name=a.substr(n+1)):-1!=(n=a.lastIndexOf("!"))&&(t.metadata.loader=a.substr(n+1),t.name=a.substr(0,n)),e.call(r,t).then(function(e){var n=t.metadata.loader;if(!n)return e;if(r.defined&&r.defined[a])return e;var o=r.pluginLoader||r;return o["import"](n).then(function(n){return t.metadata.loaderModule=n,t.address=e,n.locate?n.locate.call(r,t):e})})}}),d("fetch",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.fetch&&"defined"!=t.metadata.format?(t.metadata.scriptLoad=!1,t.metadata.loaderModule.fetch.call(n,t,function(t){return e.call(n,t)})):e.call(n,t)}}),d("translate",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.translate&&"defined"!=t.metadata.format?Promise.resolve(t.metadata.loaderModule.translate.call(n,t)).then(function(r){var a=t.metadata.sourceMap;if(a){if("object"!=typeof a)throw new Error("load.metadata.sourceMap must be set to an object.");var o=t.name.split("!")[0];a.file=o+"!transpiled",(!a.sources||a.sources.length<=1)&&(a.sources=[o])}return"string"==typeof r?t.source=r:g.call(this,"Plugin "+t.metadata.loader+" should return the source in translate, instead of setting load.source directly. This support will be deprecated."),e.call(n,t)}):e.call(n,t)}}),d("instantiate",function(e){return function(t){var n=this;return t.metadata.loaderModule&&t.metadata.loaderModule.instantiate&&!n.builder&&"defined"!=t.metadata.format?Promise.resolve(t.metadata.loaderModule.instantiate.call(n,t)).then(function(r){return t.metadata.entry=E(),t.metadata.entry.execute=function(){return r},t.metadata.entry.deps=t.metadata.deps,t.metadata.format="defined",e.call(n,t)}):e.call(n,t)}})}();var Q=/#\{[^\}]+\}/;d("normalize",function(e){return function(t,n,r){var a=this;return R.call(a,t,n).then(function(t){return e.call(a,t,n,r)}).then(function(e){return P.call(a,e,n)})}}),function(){d("fetch",function(e){return function(t){var n=t.metadata.alias,r=t.metadata.deps||[];if(n){t.metadata.format="defined";var a=E();return this.defined[t.name]=a,a.declarative=!0,a.deps=r.concat([n]),a.declare=function(e){return{setters:[function(t){for(var n in t)e(n,t[n]);t.__useDefault&&(a.module.exports.__useDefault=!0)}],execute:function(){}}},""}return e.call(this,t)}})}(),function(){function e(e,t,n){for(var r,a=t.split(".");a.length>1;)r=a.shift(),e=e[r]=e[r]||{};r=a.shift(),r in e||(e[r]=n)}c(function(e){return function(){this.meta={},e.call(this)}}),d("locate",function(e){return function(t){var n,r=this.meta,a=t.name,o=0;for(var s in r)if(n=s.indexOf("*"),-1!==n&&s.substr(0,n)===a.substr(0,n)&&s.substr(n+1)===a.substr(a.length-s.length+n+1)){var i=s.split("/").length;i>o&&(o=i),h(t.metadata,r[s],o!=i)}return r[a]&&h(t.metadata,r[a]),e.call(this,t)}});var t=/^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,n=/\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;d("translate",function(r){return function(a){var o=a.source.match(t);if(o)for(var s=o[0].match(n),i=0;i<s.length;i++){var l=s[i],u=l.length,d=l.substr(0,1);if(";"==l.substr(u-1,1)&&u--,'"'==d||"'"==d){var c=l.substr(1,l.length-3),f=c.substr(0,c.indexOf(" "));if(f){var m=c.substr(f.length+1,c.length-f.length-1);"[]"==f.substr(f.length-2,2)?(f=f.substr(0,f.length-2),a.metadata[f]=a.metadata[f]||[],a.metadata[f].push(m)):a.metadata[f]instanceof Array?(g.call(this,"Module "+a.name+' contains deprecated "deps '+m+'" meta syntax.\nThis should be updated to "deps[] '+m+'" for pushing to array meta.'),a.metadata[f].push(m)):e(a.metadata,f,m)}else a.metadata[c]=!0}}return r.call(this,a)}})}(),function(){c(function(e){return function(){e.call(this),this.bundles={},this._loader.loadedBundles={}}}),d("locate",function(e){return function(t){var n=this,r=!1;if(!(t.name in n.defined))for(var a in n.bundles){for(var o=0;o<n.bundles[a].length;o++){var s=n.bundles[a][o];if(s==t.name){r=!0;break}if(-1!=s.indexOf("*")){var i=s.split("*");if(2!=i.length){n.bundles[a].splice(o--,1);continue}if(t.name.substring(0,i[0].length)==i[0]&&t.name.substr(t.name.length-i[1].length,i[1].length)==i[1]&&-1==t.name.substr(i[0].length,t.name.length-i[1].length-i[0].length).indexOf("/")){r=!0;break}}}if(r)return n["import"](a).then(function(){return e.call(n,t)})}return e.call(n,t)}})}(),function(){c(function(e){return function(){e.call(this),this.depCache={}}}),d("locate",function(e){return function(t){var n=this,r=n.depCache[t.name];if(r)for(var a=0;a<r.length;a++)n["import"](r[a],t.name);return e.call(n,t)}})}(),D=new l,e.SystemJS=D,D.version="0.19.22 Standard","object"==typeof exports&&(module.exports=a),e.Reflect=e.Reflect||{},e.Reflect.Loader=e.Reflect.Loader||a,e.Reflect.global=e.Reflect.global||e,e.LoaderPolyfill=a,D||(D=new o,D.constructor=o),"object"==typeof exports&&(module.exports=D),e.System=D}("undefined"!=typeof self?self:global)}try{var t="undefined"!=typeof URLPolyfill||"test:"==new URL("test:///").protocol}catch(n){}if("undefined"!=typeof Promise&&t)e();else if("undefined"!=typeof document){var r=document.getElementsByTagName("script");$__curScript=r[r.length-1];var a=$__curScript.src,o=a.substr(0,a.lastIndexOf("/")+1);window.systemJSBootstrap=e,document.write('<script type="text/javascript" src="'+o+'system-polyfills.js"></script>')}else if("undefined"!=typeof importScripts){var o="";try{throw new Error("_")}catch(n){n.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/,function(e,t){o=t.replace(/\/[^\/]*$/,"/")})}importScripts(o+"system-polyfills.js"),e()}else e()}();
//# sourceMappingURL=system.js.map

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["expect"] = factory();
	else
		root["expect"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Expectation = __webpack_require__(1);

	var _Expectation2 = _interopRequireDefault(_Expectation);

	var _SpyUtils = __webpack_require__(18);

	var _assert = __webpack_require__(16);

	var _assert2 = _interopRequireDefault(_assert);

	var _extend = __webpack_require__(20);

	var _extend2 = _interopRequireDefault(_extend);

	function expect(actual) {
	  return new _Expectation2['default'](actual);
	}

	expect.createSpy = _SpyUtils.createSpy;
	expect.spyOn = _SpyUtils.spyOn;
	expect.isSpy = _SpyUtils.isSpy;
	expect.restoreSpies = _SpyUtils.restoreSpies;
	expect.assert = _assert2['default'];
	expect.extend = _extend2['default'];

	exports['default'] = expect;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _isEqual = __webpack_require__(2);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _isRegex = __webpack_require__(11);

	var _isRegex2 = _interopRequireDefault(_isRegex);

	var _assert = __webpack_require__(16);

	var _assert2 = _interopRequireDefault(_assert);

	var _SpyUtils = __webpack_require__(18);

	var _TestUtils = __webpack_require__(19);

	/**
	 * An Expectation is a wrapper around an assertion that allows it to be written
	 * in a more natural style, without the need to remember the order of arguments.
	 * This helps prevent you from making mistakes when writing tests.
	 */

	var Expectation = (function () {
	  function Expectation(actual) {
	    _classCallCheck(this, Expectation);

	    this.actual = actual;

	    if (_TestUtils.isFunction(actual)) {
	      this.context = null;
	      this.args = [];
	    }
	  }

	  Expectation.prototype.toExist = function toExist(message) {
	    _assert2['default'](this.actual, message || 'Expected %s to exist', this.actual);

	    return this;
	  };

	  Expectation.prototype.toNotExist = function toNotExist(message) {
	    _assert2['default'](!this.actual, message || 'Expected %s to not exist', this.actual);

	    return this;
	  };

	  Expectation.prototype.toBe = function toBe(value, message) {
	    _assert2['default'](this.actual === value, message || 'Expected %s to be %s', this.actual, value);

	    return this;
	  };

	  Expectation.prototype.toNotBe = function toNotBe(value, message) {
	    _assert2['default'](this.actual !== value, message || 'Expected %s to not be %s', this.actual, value);

	    return this;
	  };

	  Expectation.prototype.toEqual = function toEqual(value, message) {
	    try {
	      _assert2['default'](_isEqual2['default'](this.actual, value), message || 'Expected %s to equal %s', this.actual, value);
	    } catch (e) {
	      // These attributes are consumed by Mocha to produce a diff output.
	      e.showDiff = true;
	      e.actual = this.actual;
	      e.expected = value;
	      throw e;
	    }

	    return this;
	  };

	  Expectation.prototype.toNotEqual = function toNotEqual(value, message) {
	    _assert2['default'](!_isEqual2['default'](this.actual, value), message || 'Expected %s to not equal %s', this.actual, value);

	    return this;
	  };

	  Expectation.prototype.toThrow = function toThrow(value, message) {
	    _assert2['default'](_TestUtils.isFunction(this.actual), 'The "actual" argument in expect(actual).toThrow() must be a function, %s was given', this.actual);

	    _assert2['default'](_TestUtils.functionThrows(this.actual, this.context, this.args, value), message || 'Expected %s to throw %s', this.actual, value || 'an error');

	    return this;
	  };

	  Expectation.prototype.toNotThrow = function toNotThrow(value, message) {
	    _assert2['default'](_TestUtils.isFunction(this.actual), 'The "actual" argument in expect(actual).toNotThrow() must be a function, %s was given', this.actual);

	    _assert2['default'](!_TestUtils.functionThrows(this.actual, this.context, this.args, value), message || 'Expected %s to not throw %s', this.actual, value || 'an error');

	    return this;
	  };

	  Expectation.prototype.toBeA = function toBeA(value, message) {
	    _assert2['default'](_TestUtils.isFunction(value) || typeof value === 'string', 'The "value" argument in toBeA(value) must be a function or a string');

	    _assert2['default'](_TestUtils.isA(this.actual, value), message || 'Expected %s to be a %s', this.actual, value);

	    return this;
	  };

	  Expectation.prototype.toNotBeA = function toNotBeA(value, message) {
	    _assert2['default'](_TestUtils.isFunction(value) || typeof value === 'string', 'The "value" argument in toNotBeA(value) must be a function or a string');

	    _assert2['default'](!_TestUtils.isA(this.actual, value), message || 'Expected %s to be a %s', this.actual, value);

	    return this;
	  };

	  Expectation.prototype.toMatch = function toMatch(pattern, message) {
	    _assert2['default'](typeof this.actual === 'string', 'The "actual" argument in expect(actual).toMatch() must be a string');

	    _assert2['default'](_isRegex2['default'](pattern), 'The "value" argument in toMatch(value) must be a RegExp');

	    _assert2['default'](pattern.test(this.actual), message || 'Expected %s to match %s', this.actual, pattern);

	    return this;
	  };

	  Expectation.prototype.toNotMatch = function toNotMatch(pattern, message) {
	    _assert2['default'](typeof this.actual === 'string', 'The "actual" argument in expect(actual).toNotMatch() must be a string');

	    _assert2['default'](_isRegex2['default'](pattern), 'The "value" argument in toNotMatch(value) must be a RegExp');

	    _assert2['default'](!pattern.test(this.actual), message || 'Expected %s to not match %s', this.actual, pattern);

	    return this;
	  };

	  Expectation.prototype.toBeLessThan = function toBeLessThan(value, message) {
	    _assert2['default'](typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeLessThan() must be a number');

	    _assert2['default'](typeof value === 'number', 'The "value" argument in toBeLessThan(value) must be a number');

	    _assert2['default'](this.actual < value, message || 'Expected %s to be less than %s', this.actual, value);

	    return this;
	  };

	  Expectation.prototype.toBeLessThanOrEqualTo = function toBeLessThanOrEqualTo(value, message) {
	    _assert2['default'](typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeLessThanOrEqualTo() must be a number');

	    _assert2['default'](typeof value === 'number', 'The "value" argument in toBeLessThanOrEqualTo(value) must be a number');

	    _assert2['default'](this.actual <= value, message || 'Expected %s to be less than or equal to %s', this.actual, value);

	    return this;
	  };

	  Expectation.prototype.toBeGreaterThan = function toBeGreaterThan(value, message) {
	    _assert2['default'](typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeGreaterThan() must be a number');

	    _assert2['default'](typeof value === 'number', 'The "value" argument in toBeGreaterThan(value) must be a number');

	    _assert2['default'](this.actual > value, message || 'Expected %s to be greater than %s', this.actual, value);

	    return this;
	  };

	  Expectation.prototype.toBeGreaterThanOrEqualTo = function toBeGreaterThanOrEqualTo(value, message) {
	    _assert2['default'](typeof this.actual === 'number', 'The "actual" argument in expect(actual).toBeGreaterThanOrEqualTo() must be a number');

	    _assert2['default'](typeof value === 'number', 'The "value" argument in toBeGreaterThanOrEqualTo(value) must be a number');

	    _assert2['default'](this.actual >= value, message || 'Expected %s to be greater than or equal to %s', this.actual, value);

	    return this;
	  };

	  Expectation.prototype.toInclude = function toInclude(value, compareValues, message) {
	    _assert2['default'](_TestUtils.isArray(this.actual) || typeof this.actual === 'string', 'The "actual" argument in expect(actual).toInclude() must be an array or a string');

	    if (typeof compareValues === 'string') {
	      message = compareValues;
	      compareValues = null;
	    }

	    message = message || 'Expected %s to include %s';

	    if (_TestUtils.isArray(this.actual)) {
	      _assert2['default'](_TestUtils.arrayContains(this.actual, value, compareValues), message, this.actual, value);
	    } else {
	      _assert2['default'](_TestUtils.stringContains(this.actual, value), message, this.actual, value);
	    }

	    return this;
	  };

	  Expectation.prototype.toExclude = function toExclude(value, compareValues, message) {
	    _assert2['default'](_TestUtils.isArray(this.actual) || typeof this.actual === 'string', 'The "actual" argument in expect(actual).toExclude() must be an array or a string');

	    if (typeof compareValues === 'string') {
	      message = compareValues;
	      compareValues = null;
	    }

	    message = message || 'Expected %s to exclude %s';

	    if (_TestUtils.isArray(this.actual)) {
	      _assert2['default'](!_TestUtils.arrayContains(this.actual, value, compareValues), message, this.actual, value);
	    } else {
	      _assert2['default'](!_TestUtils.stringContains(this.actual, value), message, this.actual, value);
	    }

	    return this;
	  };

	  Expectation.prototype.toHaveBeenCalled = function toHaveBeenCalled(message) {
	    var spy = this.actual;

	    _assert2['default'](_SpyUtils.isSpy(spy), 'The "actual" argument in expect(actual).toHaveBeenCalled() must be a spy');

	    _assert2['default'](spy.calls.length > 0, message || 'spy was not called');

	    return this;
	  };

	  Expectation.prototype.toHaveBeenCalledWith = function toHaveBeenCalledWith() {
	    var spy = this.actual;

	    _assert2['default'](_SpyUtils.isSpy(spy), 'The "actual" argument in expect(actual).toHaveBeenCalledWith() must be a spy');

	    var expectedArgs = Array.prototype.slice.call(arguments, 0);

	    _assert2['default'](spy.calls.some(function (call) {
	      return _isEqual2['default'](call.arguments, expectedArgs);
	    }), 'spy was never called with %s', expectedArgs);

	    return this;
	  };

	  Expectation.prototype.toNotHaveBeenCalled = function toNotHaveBeenCalled(message) {
	    var spy = this.actual;

	    _assert2['default'](_SpyUtils.isSpy(spy), 'The "actual" argument in expect(actual).toNotHaveBeenCalled() must be a spy');

	    _assert2['default'](spy.calls.length === 0, message || 'spy was not supposed to be called');

	    return this;
	  };

	  Expectation.prototype.withContext = function withContext(context) {
	    _assert2['default'](_TestUtils.isFunction(this.actual), 'The "actual" argument in expect(actual).withContext() must be a function');

	    this.context = context;

	    return this;
	  };

	  Expectation.prototype.withArgs = function withArgs() {
	    _assert2['default'](_TestUtils.isFunction(this.actual), 'The "actual" argument in expect(actual).withArgs() must be a function');

	    if (arguments.length) this.args = this.args.concat(Array.prototype.slice.call(arguments, 0));

	    return this;
	  };

	  return Expectation;
	})();

	var aliases = {
	  toBeAn: 'toBeA',
	  toNotBeAn: 'toNotBeA',
	  toBeTruthy: 'toExist',
	  toBeFalsy: 'toNotExist',
	  toBeFewerThan: 'toBeLessThan',
	  toBeMoreThan: 'toBeGreaterThan',
	  toContain: 'toInclude',
	  toNotContain: 'toExclude'
	};

	for (var alias in aliases) {
	  Expectation.prototype[alias] = Expectation.prototype[aliases[alias]];
	}exports['default'] = Expectation;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ObjectPrototype = Object.prototype;
	var toStr = ObjectPrototype.toString;
	var booleanValue = Boolean.prototype.valueOf;
	var has = __webpack_require__(3);
	var isArrowFunction = __webpack_require__(5);
	var isBoolean = __webpack_require__(7);
	var isDate = __webpack_require__(8);
	var isGenerator = __webpack_require__(9);
	var isNumber = __webpack_require__(10);
	var isRegex = __webpack_require__(11);
	var isString = __webpack_require__(12);
	var isSymbol = __webpack_require__(13);
	var isCallable = __webpack_require__(6);

	var isProto = Object.prototype.isPrototypeOf;

	var foo = function foo() {};
	var functionsHaveNames = foo.name === 'foo';

	var symbolValue = typeof Symbol === 'function' ? Symbol.prototype.valueOf : null;
	var symbolIterator = __webpack_require__(14)();

	var collectionsForEach = __webpack_require__(15)();

	var getPrototypeOf = Object.getPrototypeOf;
	if (!getPrototypeOf) {
		/* eslint-disable no-proto */
		if (typeof 'test'.__proto__ === 'object') {
			getPrototypeOf = function (obj) {
				return obj.__proto__;
			};
		} else {
			getPrototypeOf = function (obj) {
				var constructor = obj.constructor,
					oldConstructor;
				if (has(obj, 'constructor')) {
					oldConstructor = constructor;
					if (!(delete obj.constructor)) { // reset constructor
						return null; // can't delete obj.constructor, return null
					}
					constructor = obj.constructor; // get real constructor
					obj.constructor = oldConstructor; // restore constructor
				}
				return constructor ? constructor.prototype : ObjectPrototype; // needed for IE
			};
		}
		/* eslint-enable no-proto */
	}

	var isArray = Array.isArray || function (value) {
		return toStr.call(value) === '[object Array]';
	};

	var normalizeFnWhitespace = function normalizeFnWhitespace(fnStr) {
		// this is needed in IE 9, at least, which has inconsistencies here.
		return fnStr.replace(/^function ?\(/, 'function (').replace('){', ') {');
	};

	var tryMapSetEntries = function tryMapSetEntries(collection) {
		var foundEntries = [];
		try {
			collectionsForEach.Map.call(collection, function (key, value) {
				foundEntries.push([key, value]);
			});
		} catch (notMap) {
			try {
				collectionsForEach.Set.call(collection, function (value) {
					foundEntries.push([value]);
				});
			} catch (notSet) {
				return false;
			}
		}
		return foundEntries;
	};

	module.exports = function isEqual(value, other) {
		if (value === other) { return true; }
		if (value == null || other == null) { return value === other; }

		if (toStr.call(value) !== toStr.call(other)) { return false; }

		var valIsBool = isBoolean(value);
		var otherIsBool = isBoolean(other);
		if (valIsBool || otherIsBool) {
			return valIsBool && otherIsBool && booleanValue.call(value) === booleanValue.call(other);
		}

		var valIsNumber = isNumber(value);
		var otherIsNumber = isNumber(value);
		if (valIsNumber || otherIsNumber) {
			return valIsNumber && otherIsNumber && (Number(value) === Number(other) || (isNaN(value) && isNaN(other)));
		}

		var valIsString = isString(value);
		var otherIsString = isString(other);
		if (valIsString || otherIsString) {
			return valIsString && otherIsString && String(value) === String(other);
		}

		var valIsDate = isDate(value);
		var otherIsDate = isDate(other);
		if (valIsDate || otherIsDate) {
			return valIsDate && otherIsDate && +value === +other;
		}

		var valIsRegex = isRegex(value);
		var otherIsRegex = isRegex(other);
		if (valIsRegex || otherIsRegex) {
			return valIsRegex && otherIsRegex && String(value) === String(other);
		}

		var valIsArray = isArray(value);
		var otherIsArray = isArray(other);
		if (valIsArray || otherIsArray) {
			if (!valIsArray || !otherIsArray) { return false; }
			if (value.length !== other.length) { return false; }
			if (String(value) !== String(other)) { return false; }

			var index = value.length - 1;
			var equal = true;
			while (equal && index >= 0) {
				equal = has(value, index) && has(other, index) && isEqual(value[index], other[index]);
				index -= 1;
			}
			return equal;
		}

		var valueIsSym = isSymbol(value);
		var otherIsSym = isSymbol(other);
		if (valueIsSym !== otherIsSym) { return false; }
		if (valueIsSym && otherIsSym) {
			return symbolValue.call(value) === symbolValue.call(other);
		}

		var valueIsGen = isGenerator(value);
		var otherIsGen = isGenerator(other);
		if (valueIsGen !== otherIsGen) { return false; }

		var valueIsArrow = isArrowFunction(value);
		var otherIsArrow = isArrowFunction(other);
		if (valueIsArrow !== otherIsArrow) { return false; }

		if (isCallable(value) || isCallable(other)) {
			if (functionsHaveNames && !isEqual(value.name, other.name)) { return false; }
			if (!isEqual(value.length, other.length)) { return false; }

			var valueStr = normalizeFnWhitespace(String(value));
			var otherStr = normalizeFnWhitespace(String(other));
			if (isEqual(valueStr, otherStr)) { return true; }

			if (!valueIsGen && !valueIsArrow) {
				return isEqual(valueStr.replace(/\)\s*\{/, '){'), otherStr.replace(/\)\s*\{/, '){'));
			}
			return isEqual(valueStr, otherStr);
		}

		if (typeof value === 'object' || typeof other === 'object') {
			if (typeof value !== typeof other) { return false; }
			if (isProto.call(value, other) || isProto.call(other, value)) { return false; }
			if (getPrototypeOf(value) !== getPrototypeOf(other)) { return false; }

			if (symbolIterator) {
				var valueIteratorFn = value[symbolIterator];
				var valueIsIterable = isCallable(valueIteratorFn);
				var otherIteratorFn = other[symbolIterator];
				var otherIsIterable = isCallable(otherIteratorFn);
				if (valueIsIterable !== otherIsIterable) {
					return false;
				}
				if (valueIsIterable && otherIsIterable) {
					var valueIterator = valueIteratorFn.call(value);
					var otherIterator = otherIteratorFn.call(other);
					var valueNext, otherNext;
					do {
						valueNext = valueIterator.next();
						otherNext = otherIterator.next();
						if (!valueNext.done && !otherNext.done && !isEqual(valueNext, otherNext)) {
							return false;
						}
					} while (!valueNext.done && !otherNext.done);
					return valueNext.done === otherNext.done;
				}
			} else if (collectionsForEach.Map || collectionsForEach.Set) {
				var valueEntries = tryMapSetEntries(value);
				var otherEntries = tryMapSetEntries(other);
				if (isArray(valueEntries) !== isArray(otherEntries)) {
					return false; // either: neither is a Map/Set, or one is and the other isn't.
				}
				if (valueEntries && otherEntries) {
					return isEqual(valueEntries, otherEntries);
				}
			}

			var key, valueKeyIsRecursive, otherKeyIsRecursive;
			for (key in value) {
				if (has(value, key)) {
					if (!has(other, key)) { return false; }
					valueKeyIsRecursive = value[key] && value[key][key] === value;
					otherKeyIsRecursive = other[key] && other[key][key] === other;
					if (valueKeyIsRecursive !== otherKeyIsRecursive) {
						return false;
					}
					if (!valueKeyIsRecursive && !otherKeyIsRecursive && !isEqual(value[key], other[key])) {
						return false;
					}
				}
			}
			for (key in other) {
				if (has(other, key)) {
					if (!has(value, key)) { return false; }
					valueKeyIsRecursive = value[key] && value[key][key] === value;
					otherKeyIsRecursive = other[key] && other[key][key] === other;
					if (valueKeyIsRecursive !== otherKeyIsRecursive) {
						return false;
					}
					if (!valueKeyIsRecursive && !otherKeyIsRecursive && !isEqual(other[key], value[key])) {
						return false;
					}
				}
			}
			return true;
		}

		return false;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var bind = __webpack_require__(4);

	module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ },
/* 4 */
/***/ function(module, exports) {

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';

	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);

	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };

	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }

	    var bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }

	    return bound;
	};



/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isCallable = __webpack_require__(6);
	var fnToStr = Function.prototype.toString;
	var isNonArrowFnRegex = /^\s*function/;
	var isArrowFnWithParensRegex = /^\([^\)]*\) *=>/;
	var isArrowFnWithoutParensRegex = /^[^=]*=>/;

	module.exports = function isArrowFunction(fn) {
		if (!isCallable(fn)) { return false; }
		var fnStr = fnToStr.call(fn);
		return fnStr.length > 0 &&
			!isNonArrowFnRegex.test(fnStr) &&
			(isArrowFnWithParensRegex.test(fnStr) || isArrowFnWithoutParensRegex.test(fnStr));
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var constructorRegex = /\s*class /;
	var isNonES6ClassFn = function isNonES6ClassFn(value) {
		try {
			return !constructorRegex.test(value);
		} catch (e) {
			return false; // not a function
		}
	};

	var fnToStr = Function.prototype.toString;
	var tryFunctionObject = function tryFunctionObject(value) {
		try {
			if (constructorRegex.test(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (!isNonES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var boolToStr = Boolean.prototype.toString;

	var tryBooleanObject = function tryBooleanObject(value) {
		try {
			boolToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var boolClass = '[object Boolean]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isBoolean(value) {
		if (typeof value === 'boolean') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryBooleanObject(value) : toStr.call(value) === boolClass;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var getDay = Date.prototype.getDay;
	var tryDateObject = function tryDateObject(value) {
		try {
			getDay.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};

	var toStr = Object.prototype.toString;
	var dateClass = '[object Date]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isDateObject(value) {
		if (typeof value !== 'object' || value === null) { return false; }
		return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	var toStr = Object.prototype.toString;
	var fnToStr = Function.prototype.toString;
	var isFnRegex = /^\s*function\*/;

	module.exports = function isGeneratorFunction(fn) {
		if (typeof fn !== 'function') { return false; }
		var fnStr = toStr.call(fn);
		return (fnStr === '[object Function]' || fnStr === '[object GeneratorFunction]') && isFnRegex.test(fnToStr.call(fn));
	};



/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	var numToStr = Number.prototype.toString;
	var tryNumberObject = function tryNumberObject(value) {
		try {
			numToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var numClass = '[object Number]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isNumberObject(value) {
		if (typeof value === 'number') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	var regexExec = RegExp.prototype.exec;
	var tryRegexExec = function tryRegexExec(value) {
		try {
			regexExec.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var regexClass = '[object RegExp]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isRegex(value) {
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryRegexExec(value) : toStr.call(value) === regexClass;
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	var strValue = String.prototype.valueOf;
	var tryStringObject = function tryStringObject(value) {
		try {
			strValue.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var strClass = '[object String]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isString(value) {
		if (typeof value === 'string') { return true; }
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	var toStr = Object.prototype.toString;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

	if (hasSymbols) {
		var symToStr = Symbol.prototype.toString;
		var symStringRegex = /^Symbol\(.*\)$/;
		var isSymbolObject = function isSymbolObject(value) {
			if (typeof value.valueOf() !== 'symbol') { return false; }
			return symStringRegex.test(symToStr.call(value));
		};
		module.exports = function isSymbol(value) {
			if (typeof value === 'symbol') { return true; }
			if (toStr.call(value) !== '[object Symbol]') { return false; }
			try {
				return isSymbolObject(value);
			} catch (e) {
				return false;
			}
		};
	} else {
		module.exports = function isSymbol(value) {
			// this environment does not support Symbols.
			return false;
		};
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isSymbol = __webpack_require__(13);

	module.exports = function getSymbolIterator() {
		var symbolIterator = typeof Symbol === 'function' && isSymbol(Symbol.iterator) ? Symbol.iterator : null;

		if (typeof Object.getOwnPropertyNames === 'function' && typeof Map === 'function' && typeof Map.prototype.entries === 'function') {
			Object.getOwnPropertyNames(Map.prototype).forEach(function (name) {
				if (name !== 'entries' && name !== 'size' && Map.prototype[name] === Map.prototype.entries) {
					symbolIterator = name;
				}
			});
		}

		return symbolIterator;
	};


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		var mapForEach = (function () {
			if (typeof Map !== 'function') { return null; }
			try {
				Map.prototype.forEach.call({}, function () {});
			} catch (e) {
				return Map.prototype.forEach;
			}
			return null;
		}());

		var setForEach = (function () {
			if (typeof Set !== 'function') { return null; }
			try {
				Set.prototype.forEach.call({}, function () {});
			} catch (e) {
				return Set.prototype.forEach;
			}
			return null;
		}());

		return { Map: mapForEach, Set: setForEach };
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _objectInspect = __webpack_require__(17);

	var _objectInspect2 = _interopRequireDefault(_objectInspect);

	function assert(condition, messageFormat) {
	  for (var _len = arguments.length, extraArgs = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    extraArgs[_key - 2] = arguments[_key];
	  }

	  if (condition) return;

	  var index = 0;

	  throw new Error(messageFormat.replace(/%s/g, function () {
	    return _objectInspect2['default'](extraArgs[index++]);
	  }));
	}

	exports['default'] = assert;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	var hasMap = typeof Map === 'function' && Map.prototype;
	var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
	var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
	var mapForEach = hasMap && Map.prototype.forEach;
	var hasSet = typeof Set === 'function' && Set.prototype;
	var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
	var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
	var setForEach = hasSet && Set.prototype.forEach;

	module.exports = function inspect_ (obj, opts, depth, seen) {
	    if (!opts) opts = {};
	    
	    var maxDepth = opts.depth === undefined ? 5 : opts.depth;
	    if (depth === undefined) depth = 0;
	    if (depth >= maxDepth && maxDepth > 0
	    && obj && typeof obj === 'object') {
	        return '[Object]';
	    }
	    
	    if (seen === undefined) seen = [];
	    else if (indexOf(seen, obj) >= 0) {
	        return '[Circular]';
	    }
	    
	    function inspect (value, from) {
	        if (from) {
	            seen = seen.slice();
	            seen.push(from);
	        }
	        return inspect_(value, opts, depth + 1, seen);
	    }
	    
	    if (typeof obj === 'string') {
	        return inspectString(obj);
	    }
	    else if (typeof obj === 'function') {
	        var name = nameOf(obj);
	        return '[Function' + (name ? ': ' + name : '') + ']';
	    }
	    else if (obj === null) {
	        return 'null';
	    }
	    else if (isSymbol(obj)) {
	        var symString = Symbol.prototype.toString.call(obj);
	        return typeof obj === 'object' ? 'Object(' + symString + ')' : symString;
	    }
	    else if (isElement(obj)) {
	        var s = '<' + String(obj.nodeName).toLowerCase();
	        var attrs = obj.attributes || [];
	        for (var i = 0; i < attrs.length; i++) {
	            s += ' ' + attrs[i].name + '="' + quote(attrs[i].value) + '"';
	        }
	        s += '>';
	        if (obj.childNodes && obj.childNodes.length) s += '...';
	        s += '</' + String(obj.nodeName).toLowerCase() + '>';
	        return s;
	    }
	    else if (isArray(obj)) {
	        if (obj.length === 0) return '[]';
	        var xs = Array(obj.length);
	        for (var i = 0; i < obj.length; i++) {
	            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
	        }
	        return '[ ' + xs.join(', ') + ' ]';
	    }
	    else if (isError(obj)) {
	        var parts = [];
	        for (var key in obj) {
	            if (!has(obj, key)) continue;
	            
	            if (/[^\w$]/.test(key)) {
	                parts.push(inspect(key) + ': ' + inspect(obj[key]));
	            }
	            else {
	                parts.push(key + ': ' + inspect(obj[key]));
	            }
	        }
	        if (parts.length === 0) return '[' + obj + ']';
	        return '{ [' + obj + '] ' + parts.join(', ') + ' }';
	    }
	    else if (typeof obj === 'object' && typeof obj.inspect === 'function') {
	        return obj.inspect();
	    }
	    else if (isMap(obj)) {
	        var parts = [];
	        mapForEach.call(obj, function (value, key) {
	            parts.push(inspect(key, obj) + ' => ' + inspect(value, obj));
	        });
	        return 'Map (' + mapSize.call(obj) + ') {' + parts.join(', ') + '}';
	    }
	    else if (isSet(obj)) {
	        var parts = [];
	        setForEach.call(obj, function (value ) {
	            parts.push(inspect(value, obj));
	        });
	        return 'Set (' + setSize.call(obj) + ') {' + parts.join(', ') + '}';
	    }
	    else if (typeof obj === 'object' && !isDate(obj) && !isRegExp(obj)) {
	        var xs = [], keys = [];
	        for (var key in obj) {
	            if (has(obj, key)) keys.push(key);
	        }
	        keys.sort();
	        for (var i = 0; i < keys.length; i++) {
	            var key = keys[i];
	            if (/[^\w$]/.test(key)) {
	                xs.push(inspect(key) + ': ' + inspect(obj[key], obj));
	            }
	            else xs.push(key + ': ' + inspect(obj[key], obj));
	        }
	        if (xs.length === 0) return '{}';
	        return '{ ' + xs.join(', ') + ' }';
	    }
	    else return String(obj);
	};

	function quote (s) {
	    return String(s).replace(/"/g, '&quot;');
	}

	function isArray (obj) { return toStr(obj) === '[object Array]' }
	function isDate (obj) { return toStr(obj) === '[object Date]' }
	function isRegExp (obj) { return toStr(obj) === '[object RegExp]' }
	function isError (obj) { return toStr(obj) === '[object Error]' }
	function isSymbol (obj) { return toStr(obj) === '[object Symbol]' }

	var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
	function has (obj, key) {
	    return hasOwn.call(obj, key);
	}

	function toStr (obj) {
	    return Object.prototype.toString.call(obj);
	}

	function nameOf (f) {
	    if (f.name) return f.name;
	    var m = f.toString().match(/^function\s*([\w$]+)/);
	    if (m) return m[1];
	}

	function indexOf (xs, x) {
	    if (xs.indexOf) return xs.indexOf(x);
	    for (var i = 0, l = xs.length; i < l; i++) {
	        if (xs[i] === x) return i;
	    }
	    return -1;
	}

	function isMap (x) {
	    if (!mapSize) {
	        return false;
	    }
	    try {
	        mapSize.call(x);
	        return true;
	    } catch (e) {}
	    return false;
	}

	function isSet (x) {
	    if (!setSize) {
	        return false;
	    }
	    try {
	        setSize.call(x);
	        return true;
	    } catch (e) {}
	    return false;
	}

	function isElement (x) {
	    if (!x || typeof x !== 'object') return false;
	    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
	        return true;
	    }
	    return typeof x.nodeName === 'string'
	        && typeof x.getAttribute === 'function'
	    ;
	}

	function inspectString (str) {
	    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
	    return "'" + s + "'";
	    
	    function lowbyte (c) {
	        var n = c.charCodeAt(0);
	        var x = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[n];
	        if (x) return '\\' + x;
	        return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
	    }
	}


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createSpy = createSpy;
	exports.spyOn = spyOn;
	exports.isSpy = isSpy;
	exports.restoreSpies = restoreSpies;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _assert = __webpack_require__(16);

	var _assert2 = _interopRequireDefault(_assert);

	var _TestUtils = __webpack_require__(19);

	function noop() {}

	var spies = [];

	function createSpy(fn) {
	  var restore = arguments.length <= 1 || arguments[1] === undefined ? noop : arguments[1];

	  if (fn == null) fn = noop;

	  _assert2['default'](_TestUtils.isFunction(fn), 'createSpy needs a function');

	  var targetFn = undefined,
	      thrownValue = undefined,
	      returnValue = undefined;

	  var spy = function spy() {
	    spy.calls.push({
	      context: this,
	      arguments: Array.prototype.slice.call(arguments, 0)
	    });

	    if (targetFn) return targetFn.apply(this, arguments);

	    if (thrownValue) throw thrownValue;

	    return returnValue;
	  };

	  spy.calls = [];

	  spy.andCall = function (fn) {
	    targetFn = fn;
	    return spy;
	  };

	  spy.andCallThrough = function () {
	    return spy.andCall(fn);
	  };

	  spy.andThrow = function (object) {
	    thrownValue = object;
	    return spy;
	  };

	  spy.andReturn = function (value) {
	    returnValue = value;
	    return spy;
	  };

	  spy.getLastCall = function () {
	    return spy.calls[spy.calls.length - 1];
	  };

	  spy.reset = function () {
	    spy.calls = [];
	  };

	  spy.restore = spy.destroy = restore;

	  spy.__isSpy = true;

	  spies.push(spy);

	  return spy;
	}

	function spyOn(object, methodName) {
	  var original = object[methodName];

	  if (!isSpy(original)) {
	    _assert2['default'](_TestUtils.isFunction(original), 'Cannot spyOn the %s property; it is not a function', methodName);

	    object[methodName] = createSpy(original, function () {
	      object[methodName] = original;
	    });
	  }

	  return object[methodName];
	}

	function isSpy(object) {
	  return object && object.__isSpy === true;
	}

	function restoreSpies() {
	  for (var i = spies.length - 1; i >= 0; i--) {
	    spies[i].restore();
	  }spies = [];
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.functionThrows = functionThrows;
	exports.arrayContains = arrayContains;
	exports.stringContains = stringContains;
	exports.isArray = isArray;
	exports.isFunction = isFunction;
	exports.isA = isA;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _isEqual = __webpack_require__(2);

	var _isEqual2 = _interopRequireDefault(_isEqual);

	var _isRegex = __webpack_require__(11);

	var _isRegex2 = _interopRequireDefault(_isRegex);

	/**
	 * Returns true if the given function throws the given value
	 * when invoked. The value may be:
	 *
	 * - undefined, to merely assert there was a throw
	 * - a constructor function, for comparing using instanceof
	 * - a regular expression, to compare with the error message
	 * - a string, to find in the error message
	 */

	function functionThrows(fn, context, args, value) {
	  try {
	    fn.apply(context, args);
	  } catch (error) {
	    if (value == null) return true;

	    if (isFunction(value) && error instanceof value) return true;

	    var message = error.message || error;

	    if (typeof message === 'string') {
	      if (_isRegex2['default'](value) && value.test(error.message)) return true;

	      if (typeof value === 'string' && message.indexOf(value) !== -1) return true;
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if the given array contains the value, false
	 * otherwise. The compareValues function must return false to
	 * indicate a non-match.
	 */

	function arrayContains(array, value, compareValues) {
	  if (compareValues == null) compareValues = _isEqual2['default'];

	  return array.some(function (item) {
	    return compareValues(item, value) !== false;
	  });
	}

	/**
	 * Returns true if the given string contains the value, false otherwise.
	 */

	function stringContains(string, value) {
	  return string.indexOf(value) !== -1;
	}

	/**
	 * Returns true if the given object is an array.
	 */

	function isArray(object) {
	  return Array.isArray(object);
	}

	/**
	 * Returns true if the given object is a function.
	 */

	function isFunction(object) {
	  return typeof object === 'function';
	}

	/**
	 * Returns true if the given object is an instanceof value
	 * or its typeof is the given value.
	 */

	function isA(object, value) {
	  if (isFunction(value)) return object instanceof value;

	  if (value === 'array') return Array.isArray(object);

	  return typeof object === value;
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Expectation = __webpack_require__(1);

	var _Expectation2 = _interopRequireDefault(_Expectation);

	var Extensions = [];

	function extend(extension) {
	  if (Extensions.indexOf(extension) === -1) {
	    Extensions.push(extension);

	    for (var p in extension) {
	      if (extension.hasOwnProperty(p)) _Expectation2['default'].prototype[p] = extension[p];
	    }
	  }
	}

	exports['default'] = extend;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Redux"] = factory();
	else
		root["Redux"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(2);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(7);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(6);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(5);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(1);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(3);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (("development") !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return function () {
	    if (funcs.length === 0) {
	      return arguments.length <= 0 ? undefined : arguments[0];
	    }

	    var last = funcs[funcs.length - 1];
	    var rest = funcs.slice(0, -1);

	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(4);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all states changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var isHostObject = __webpack_require__(8),
	    isObjectLike = __webpack_require__(9);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = objectProto;
	  if (typeof value.constructor == 'function') {
	    proto = getPrototypeOf(value);
	  }
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(1);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(2);

	var _isPlainObject = __webpack_require__(4);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(3);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (true) {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 9 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ }
/******/ ])
});
;