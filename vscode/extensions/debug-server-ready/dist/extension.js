(()=>{"use strict";var e={800:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.localize=t.format=t.setPseudo=t.isPseudo=t.isString=t.isNumber=t.isDefined=t.BundleFormat=t.MessageFormat=void 0;var n,o,a,s=r(926);function i(e){return void 0!==e}(a=t.MessageFormat||(t.MessageFormat={})).file="file",a.bundle="bundle",a.both="both",(o=t.BundleFormat||(t.BundleFormat={})).standalone="standalone",o.languagePack="languagePack",function(e){e.is=function(e){var t=e;return t&&i(t.key)&&i(t.comment)}}(n||(n={})),t.isDefined=i;var l=Object.prototype.toString;function c(e,r){return t.isPseudo&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===r.length?e:e.replace(/\{(\d+)\}/g,(function(e,t){var n=t[0],o=r[n],a=e;return"string"==typeof o?a=o:"number"!=typeof o&&"boolean"!=typeof o&&null!=o||(a=String(o)),a}))}t.isNumber=function(e){return"[object Number]"===l.call(e)},t.isString=function(e){return"[object String]"===l.call(e)},t.isPseudo=!1,t.setPseudo=function(e){t.isPseudo=e},t.format=c,t.localize=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];return c(t,r)},t.loadMessageBundle=function(e){return(0,s.default)().loadMessageBundle(e)},t.config=function(e){return(0,s.default)().config(e)}},926:(e,t)=>{var r;function n(){if(void 0===r)throw new Error("No runtime abstraction layer installed");return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.install=function(e){if(void 0===e)throw new Error("No runtime abstraction layer provided");r=e}}(n||(n={})),t.default=n},472:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.BundleFormat=t.MessageFormat=void 0;var n,o,a=r(622),s=r(747),i=r(926),l=r(800),c=r(800);function u(e){return JSON.parse(s.readFileSync(e,"utf8"))}function d(e){return function(t,r){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return(0,l.isNumber)(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: ".concat(new Error("").stack)):(0,l.format)(e[t],n):(0,l.isString)(r)?(console.warn("Message ".concat(r," didn't get externalized correctly.")),(0,l.format)(r,n)):void console.error("Broken localize call found. Stacktrace is\n: ".concat(new Error("").stack))}}function g(e,t){return n[e]=t,t}function f(e){try{return function(e){var t=u(a.join(e,"nls.metadata.json")),r=Object.create(null);for(var n in t){var o=t[n];r[n]=o.messages}return r}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function p(e,t){var r;if(!0===o.languagePackSupport&&void 0!==o.cacheRoot&&void 0!==o.languagePackId&&void 0!==o.translationsConfigFile&&void 0!==o.translationsConfig)try{r=function(e,t){var r,n,i,c=a.join(o.cacheRoot,"".concat(e.id,"-").concat(e.hash,".json")),d=!1,g=!1;try{return r=JSON.parse(s.readFileSync(c,{encoding:"utf8",flag:"r"})),n=c,i=new Date,s.utimes(n,i,i,(function(){})),r}catch(e){if("ENOENT"===e.code)g=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: ".concat(e.message,".")),s.unlink(c,(function(e){e&&console.error("Deleting corrupted bundle ".concat(c," failed."))})),d=!0}}if(!(r=function(e,t){var r=o.translationsConfig[e.id];if(r){var n=u(r).contents,s=u(a.join(t,"nls.metadata.json")),i=Object.create(null);for(var c in s){var d=s[c],g=n["".concat(e.outDir,"/").concat(c)];if(g){for(var f=[],p=0;p<d.keys.length;p++){var h=d.keys[p],m=g[(0,l.isString)(h)?h:h.key];void 0===m&&(m=d.messages[p]),f.push(m)}i[c]=f}else i[c]=d.messages}return i}}(e,t))||d)return r;if(g)try{s.writeFileSync(c,JSON.stringify(r),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return r;throw e}return r}(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!r){if(o.languagePackSupport)return f(t);var n=function(e){for(var t=o.language;t;){var r=a.join(e,"nls.bundle.".concat(t,".json"));if(s.existsSync(r))return r;var n=t.lastIndexOf("-");t=n>0?t.substring(0,n):void 0}if(void 0===t&&(r=a.join(e,"nls.bundle.json"),s.existsSync(r)))return r}(t);if(n)try{return u(n)}catch(e){console.log("Loading in the box message bundle failed.",e)}r=f(t)}return r}function h(e){if(!e)return l.localize;var t=a.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),o.messageFormat===l.MessageFormat.both||o.messageFormat===l.MessageFormat.bundle){var r=function(e){for(var t,r=a.dirname(e);t=a.join(r,"nls.metadata.header.json"),!s.existsSync(t);){var n=a.dirname(r);if(n===r){t=void 0;break}r=n}return t}(e);if(r){var i=a.dirname(r),c=n[i];if(void 0===c)try{var f=JSON.parse(s.readFileSync(r,"utf8"));try{var h=p(f,i);c=g(i,h?{header:f,nlsBundle:h}:null)}catch(e){console.error("Failed to load nls bundle",e),c=g(i,null)}}catch(e){console.error("Failed to read header file",e),c=g(i,null)}if(c){var m=e.substr(i.length+1).replace(/\\/g,"/"),v=c.nlsBundle[m];return void 0===v?(console.error("Messages for file ".concat(e," not found. See console for details.")),function(){return"Messages not found."}):d(v)}}}if(o.messageFormat===l.MessageFormat.both||o.messageFormat===l.MessageFormat.file)try{var b=u(function(e){var t;if(o.cacheLanguageResolution&&t)t=t;else{if(l.isPseudo||!o.language)t=".nls.json";else for(var r=o.language;r;){var n=".nls."+r+".json";if(s.existsSync(e+n)){t=n;break}var a=r.lastIndexOf("-");a>0?r=r.substring(0,a):(t=".nls.json",r=null)}o.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(b)?d(b):(0,l.isDefined)(b.messages)&&(0,l.isDefined)(b.keys)?d(b.messages):(console.error("String bundle '".concat(e,"' uses an unsupported format.")),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file ".concat(e)),function(){return"Failed to load message bundle. See console for details."}}function m(e){return e&&((0,l.isString)(e.locale)&&(o.locale=e.locale.toLowerCase(),o.language=o.locale,n=Object.create(null)),void 0!==e.messageFormat&&(o.messageFormat=e.messageFormat),e.bundleFormat===l.BundleFormat.standalone&&!0===o.languagePackSupport&&(o.languagePackSupport=!1)),(0,l.setPseudo)("pseudo"===o.locale),h}Object.defineProperty(t,"MessageFormat",{enumerable:!0,get:function(){return c.MessageFormat}}),Object.defineProperty(t,"BundleFormat",{enumerable:!0,get:function(){return c.BundleFormat}}),function(){if(o={locale:void 0,language:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:l.MessageFormat.bundle},(0,l.isString)(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG),t=void 0;if(e.availableLanguages){var r=e.availableLanguages["*"];(0,l.isString)(r)&&(t=r)}if((0,l.isString)(e.locale)&&(o.locale=e.locale.toLowerCase()),void 0===t?o.language=o.locale:"en"!==t&&(o.language=t),function(e){return!0===e||!1===e}(e._languagePackSupport)&&(o.languagePackSupport=e._languagePackSupport),(0,l.isString)(e._cacheRoot)&&(o.cacheRoot=e._cacheRoot),(0,l.isString)(e._languagePackId)&&(o.languagePackId=e._languagePackId),(0,l.isString)(e._translationsConfigFile)){o.translationsConfigFile=e._translationsConfigFile;try{o.translationsConfig=u(o.translationsConfigFile)}catch(t){if(e._corruptedFile){var i=a.dirname(e._corruptedFile);s.exists(i,(function(t){t&&s.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}))}}}}catch(e){}(0,l.setPseudo)("pseudo"===o.locale),n=Object.create(null)}(),t.loadMessageBundle=h,t.config=m,i.default.install(Object.freeze({loadMessageBundle:h,config:m}))},747:e=>{e.exports=require("fs")},622:e=>{e.exports=require("path")},669:e=>{e.exports=require("util")},549:e=>{e.exports=require("vscode")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=r(549),o=r(669),a=r(472).loadMessageBundle(r(622).join(__dirname,"extension.ts"));class s{constructor(){this._fired=!1}get hasFired(){return this._fired}fire(){this._fired=!0}}class i extends t.Disposable{constructor(e){super((()=>this.internalDispose())),this.session=e,this.disposables=[],e.parentSession?this.trigger=i.start(e.parentSession)?.trigger??new s:this.trigger=new s,this.regexp=new RegExp(e.configuration.serverReadyAction.pattern||"listening on.* (https?://\\S+|[0-9]+)","i")}static start(e){if(e.configuration.serverReadyAction){let t=i.detectors.get(e);return t||(t=new i(e),i.detectors.set(e,t)),t}}static stop(e){const t=i.detectors.get(e);t&&(i.detectors.delete(e),t.dispose())}static rememberShellPid(e,t){const r=i.detectors.get(e);r&&(r.shellPid=t)}static async startListeningTerminalData(){this.terminalDataListener||(this.terminalDataListener=t.window.onDidWriteTerminalData((async e=>{const t=await e.terminal.processId;for(const[,r]of this.detectors)if(r.shellPid===t)return void r.detectPattern(e.data);for(const[,t]of this.detectors)if(t.detectPattern(e.data))return})))}internalDispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[]}detectPattern(e){if(!this.trigger.hasFired){const t=this.regexp.exec(e);if(t&&t.length>=1)return this.openExternalWithString(this.session,t.length>1?t[1]:""),this.trigger.fire(),this.internalDispose(),!0}return!1}openExternalWithString(e,r){const n=e.configuration.serverReadyAction;let s;if(""===r){const e=n.uriFormat||"";if(e.indexOf("%s")>=0){const r=a(0,null,e);return void t.window.showErrorMessage(r,{modal:!0}).then((e=>{}))}s=e}else{const e=n.uriFormat||(/^[0-9]+$/.test(r)?"http://localhost:%s":"%s");if(2!==e.split("%s").length){const r=a(1,null,e);return void t.window.showErrorMessage(r,{modal:!0}).then((e=>{}))}s=o.format(e,r)}this.openExternalWithUri(e,s)}openExternalWithUri(e,r){const n=e.configuration.serverReadyAction;switch(n.action||"openExternally"){case"openExternally":t.env.openExternal(t.Uri.parse(r));break;case"debugWithChrome":this.debugWithBrowser("pwa-chrome",e,r);break;case"debugWithEdge":this.debugWithBrowser("pwa-msedge",e,r);break;case"startDebugging":t.debug.startDebugging(e.workspaceFolder,n.name||"unspecified")}}debugWithBrowser(e,r,n){return t.debug.startDebugging(r.workspaceFolder,{type:e,name:"Browser Debug",request:"launch",url:n,webRoot:r.configuration.serverReadyAction.webRoot||"${workspaceFolder}"})}}i.detectors=new Map,e.activate=function(e){e.subscriptions.push(t.debug.onDidChangeActiveDebugSession((e=>{e&&e.configuration.serverReadyAction&&i.start(e)&&i.startListeningTerminalData()}))),e.subscriptions.push(t.debug.onDidTerminateDebugSession((e=>{i.stop(e)})));const r=new Set;e.subscriptions.push(t.debug.registerDebugConfigurationProvider("*",{resolveDebugConfigurationWithSubstitutedVariables:(n,o)=>(o.type&&o.serverReadyAction&&(r.has(o.type)||(r.add(o.type),function(e,r){e.subscriptions.push(t.debug.registerDebugAdapterTrackerFactory(r,{createDebugAdapterTracker(e){const t=i.start(e);if(t){let r;return{onDidSendMessage:e=>{if("event"===e.type&&"output"===e.event&&e.body)switch(e.body.category){case"console":case"stderr":case"stdout":e.body.output&&t.detectPattern(e.body.output)}"request"===e.type&&"runInTerminal"===e.command&&e.arguments&&"integrated"===e.arguments.kind&&(r=e.seq)},onWillReceiveMessage:t=>{r&&"response"===t.type&&"runInTerminal"===t.command&&t.body&&r===t.request_seq&&(r=void 0,i.rememberShellPid(e,t.body.shellProcessId))}}}}}))}(e,o.type))),o)}))}})();var o=exports;for(var a in n)o[a]=n[a];n.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/784b0177c56c607789f9638da7b6bf3230d47a8c/extensions/debug-server-ready/dist/extension.js.map