/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var I=["require","exports","vs/base/common/platform","vs/base/common/extpath","vs/base/common/strings","vs/base/common/network","vs/base/common/uri","vs/base/common/path","vs/base/common/resources","vs/base/common/types","vs/workbench/contrib/output/common/outputLinkComputer","vs/editor/common/core/range"],M=function(O){for(var e=[],u=0,P=O.length;u<P;u++)e[u]=I[O[u]];return e};define(I[3],M([0,1,7,2,4,9]),function(O,e,u,P,c,w){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.randomPath=e.parseLineAndColumnAware=e.indexOfPath=e.getDriveLetter=e.hasDriveLetter=e.isRootOrDriveLetter=e.sanitizeFilePath=e.isWindowsDriveLetter=e.isEqualOrParent=e.isEqual=e.isValidBasename=e.isUNC=e.getRoot=e.toPosixPath=e.toSlashes=e.isPathSeparator=void 0;function C(i){return i===47||i===92}e.isPathSeparator=C;function a(i){return i.replace(/[\\/]/g,u.posix.sep)}e.toSlashes=a;function l(i){return i.indexOf("/")===-1&&(i=a(i)),/^[a-zA-Z]:(\/|$)/.test(i)&&(i="/"+i),i}e.toPosixPath=l;function m(i,o=u.posix.sep){if(!i)return"";const d=i.length,b=i.charCodeAt(0);if(C(b)){if(C(i.charCodeAt(1))&&!C(i.charCodeAt(2))){let R=3;const S=R;for(;R<d&&!C(i.charCodeAt(R));R++);if(S!==R&&!C(i.charCodeAt(R+1))){for(R+=1;R<d;R++)if(C(i.charCodeAt(R)))return i.slice(0,R+1).replace(/[\\/]/g,o)}}return o}else if(h(b)&&i.charCodeAt(1)===58)return C(i.charCodeAt(2))?i.slice(0,2)+o:i.slice(0,2);let U=i.indexOf("://");if(U!==-1){for(U+=3;U<d;U++)if(C(i.charCodeAt(U)))return i.slice(0,U+1)}return""}e.getRoot=m;function g(i){if(!P.isWindows||!i||i.length<5)return!1;let o=i.charCodeAt(0);if(o!==92||(o=i.charCodeAt(1),o!==92))return!1;let d=2;const b=d;for(;d<i.length&&(o=i.charCodeAt(d),o!==92);d++);return!(b===d||(o=i.charCodeAt(d+1),isNaN(o)||o===92))}e.isUNC=g;const L=/[\\/:\*\?"<>\|]/g,v=/[\\/]/g,s=/^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i;function t(i,o=P.isWindows){const d=o?L:v;return!(!i||i.length===0||/^\s+$/.test(i)||(d.lastIndex=0,d.test(i))||o&&s.test(i)||i==="."||i===".."||o&&i[i.length-1]==="."||o&&i.length!==i.trim().length||i.length>255)}e.isValidBasename=t;function n(i,o,d){const b=i===o;return!d||b?b:!i||!o?!1:(0,c.equalsIgnoreCase)(i,o)}e.isEqual=n;function r(i,o,d,b=u.sep){if(i===o)return!0;if(!i||!o||o.length>i.length)return!1;if(d){if(!(0,c.startsWithIgnoreCase)(i,o))return!1;if(o.length===i.length)return!0;let R=o.length;return o.charAt(o.length-1)===b&&R--,i.charAt(R)===b}return o.charAt(o.length-1)!==b&&(o+=b),i.indexOf(o)===0}e.isEqualOrParent=r;function h(i){return i>=65&&i<=90||i>=97&&i<=122}e.isWindowsDriveLetter=h;function f(i,o){return P.isWindows&&i.endsWith(":")&&(i+=u.sep),(0,u.isAbsolute)(i)||(i=(0,u.join)(o,i)),i=(0,u.normalize)(i),P.isWindows?(i=(0,c.rtrim)(i,u.sep),i.endsWith(":")&&(i+=u.sep)):(i=(0,c.rtrim)(i,u.sep),i||(i=u.sep)),i}e.sanitizeFilePath=f;function A(i){const o=(0,u.normalize)(i);return P.isWindows?i.length>3?!1:E(o)&&(i.length===2||o.charCodeAt(2)===92):o===u.posix.sep}e.isRootOrDriveLetter=A;function E(i,o=P.isWindows){return o?h(i.charCodeAt(0))&&i.charCodeAt(1)===58:!1}e.hasDriveLetter=E;function y(i){return E(i)?i[0]:void 0}e.getDriveLetter=y;function k(i,o,d){return o.length>i.length?-1:i===o?0:(d&&(i=i.toLowerCase(),o=o.toLowerCase()),i.indexOf(o))}e.indexOfPath=k;function q(i){const o=i.split(":");let d,b,U;for(const R of o){const S=Number(R);(0,w.isNumber)(S)?b===void 0?b=S:U===void 0&&(U=S):d=d?[d,R].join(":"):R}if(!d)throw new Error("Format for `--goto` should be: `FILE:LINE(:COLUMN)`");return{path:d,line:b!==void 0?b:void 0,column:U!==void 0?U:b!==void 0?1:void 0}}e.parseLineAndColumnAware=q;const N="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";function T(i,o,d=8){let b="";for(let R=0;R<d;R++)b+=N.charAt(Math.floor(Math.random()*N.length));let U;return o?U=`${o}-${b}`:U=b,i?(0,u.join)(i,U):U}e.randomPath=T}),define(I[5],M([0,1,2,6]),function(O,e,u,P){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FileAccess=e.RemoteAuthorities=e.connectionTokenQueryName=e.connectionTokenCookieName=e.Schemas=void 0;var c;(function(a){a.inMemory="inmemory",a.vscode="vscode",a.internal="private",a.walkThrough="walkThrough",a.walkThroughSnippet="walkThroughSnippet",a.http="http",a.https="https",a.file="file",a.mailto="mailto",a.untitled="untitled",a.data="data",a.command="command",a.vscodeRemote="vscode-remote",a.vscodeRemoteResource="vscode-remote-resource",a.vscodeUserData="vscode-userdata",a.vscodeCustomEditor="vscode-custom-editor",a.vscodeNotebook="vscode-notebook",a.vscodeNotebookCell="vscode-notebook-cell",a.vscodeNotebookCellMetadata="vscode-notebook-cell-metadata",a.vscodeNotebookCellOutput="vscode-notebook-cell-output",a.vscodeInteractive="vscode-interactive",a.vscodeInteractiveInput="vscode-interactive-input",a.vscodeSettings="vscode-settings",a.vscodeWorkspaceTrust="vscode-workspace-trust",a.vscodeTerminal="vscode-terminal",a.webviewPanel="webview-panel",a.vscodeWebview="vscode-webview",a.extension="extension",a.vscodeFileResource="vscode-file",a.tmp="tmp",a.vsls="vsls",a.vscodeSourceControl="vscode-scm"})(c=e.Schemas||(e.Schemas={})),e.connectionTokenCookieName="vscode-tkn",e.connectionTokenQueryName="tkn";class w{constructor(){this._hosts=Object.create(null),this._ports=Object.create(null),this._connectionTokens=Object.create(null),this._preferredWebSchema="http",this._delegate=null,this._remoteResourcesPath=`/${c.vscodeRemoteResource}`}setPreferredWebSchema(l){this._preferredWebSchema=l}setDelegate(l){this._delegate=l}setServerRootPath(l){this._remoteResourcesPath=`${l}/${c.vscodeRemoteResource}`}set(l,m,g){this._hosts[l]=m,this._ports[l]=g}setConnectionToken(l,m){this._connectionTokens[l]=m}getPreferredWebSchema(){return this._preferredWebSchema}rewrite(l){if(this._delegate)return this._delegate(l);const m=l.authority;let g=this._hosts[m];g&&g.indexOf(":")!==-1&&(g=`[${g}]`);const L=this._ports[m],v=this._connectionTokens[m];let s=`path=${encodeURIComponent(l.path)}`;return typeof v=="string"&&(s+=`&${e.connectionTokenQueryName}=${encodeURIComponent(v)}`),P.URI.from({scheme:u.isWeb?this._preferredWebSchema:c.vscodeRemoteResource,authority:`${g}:${L}`,path:this._remoteResourcesPath,query:s})}}e.RemoteAuthorities=new w;class C{asBrowserUri(l,m){const g=this.toUri(l,m);return g.scheme===c.vscodeRemote?e.RemoteAuthorities.rewrite(g):g.scheme===c.file&&(u.isNative||u.isWebWorker&&u.globals.origin===`${c.vscodeFileResource}://${C.FALLBACK_AUTHORITY}`)?g.with({scheme:c.vscodeFileResource,authority:g.authority||C.FALLBACK_AUTHORITY,query:null,fragment:null}):g}asFileUri(l,m){const g=this.toUri(l,m);return g.scheme===c.vscodeFileResource?g.with({scheme:c.file,authority:g.authority!==C.FALLBACK_AUTHORITY?g.authority:null,query:null,fragment:null}):g}toUri(l,m){return P.URI.isUri(l)?l:P.URI.parse(m.toUrl(l))}}C.FALLBACK_AUTHORITY="vscode-app",e.FileAccess=new C}),define(I[8],M([0,1,3,5,7,2,4,6]),function(O,e,u,P,c,w,C,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toLocalResource=e.DataUri=e.distinctParents=e.addTrailingPathSeparator=e.removeTrailingPathSeparator=e.hasTrailingPathSeparator=e.isEqualAuthority=e.isAbsolutePath=e.resolvePath=e.relativePath=e.normalizePath=e.joinPath=e.dirname=e.extname=e.basename=e.basenameOrAuthority=e.getComparisonKey=e.isEqualOrParent=e.isEqual=e.extUriIgnorePathCase=e.extUriBiasedIgnorePathCase=e.extUri=e.ExtUri=e.originalFSPath=void 0;function l(s){return(0,a.uriToFsPath)(s,!0)}e.originalFSPath=l;class m{constructor(t){this._ignorePathCasing=t}compare(t,n,r=!1){return t===n?0:(0,C.compare)(this.getComparisonKey(t,r),this.getComparisonKey(n,r))}isEqual(t,n,r=!1){return t===n?!0:!t||!n?!1:this.getComparisonKey(t,r)===this.getComparisonKey(n,r)}getComparisonKey(t,n=!1){return t.with({path:this._ignorePathCasing(t)?t.path.toLowerCase():void 0,fragment:n?null:void 0}).toString()}ignorePathCasing(t){return this._ignorePathCasing(t)}isEqualOrParent(t,n,r=!1){if(t.scheme===n.scheme){if(t.scheme===P.Schemas.file)return u.isEqualOrParent(l(t),l(n),this._ignorePathCasing(t))&&t.query===n.query&&(r||t.fragment===n.fragment);if((0,e.isEqualAuthority)(t.authority,n.authority))return u.isEqualOrParent(t.path,n.path,this._ignorePathCasing(t),"/")&&t.query===n.query&&(r||t.fragment===n.fragment)}return!1}joinPath(t,...n){return a.URI.joinPath(t,...n)}basenameOrAuthority(t){return(0,e.basename)(t)||t.authority}basename(t){return c.posix.basename(t.path)}extname(t){return c.posix.extname(t.path)}dirname(t){if(t.path.length===0)return t;let n;return t.scheme===P.Schemas.file?n=a.URI.file(c.dirname(l(t))).path:(n=c.posix.dirname(t.path),t.authority&&n.length&&n.charCodeAt(0)!==47&&(console.error(`dirname("${t.toString})) resulted in a relative path`),n="/")),t.with({path:n})}normalizePath(t){if(!t.path.length)return t;let n;return t.scheme===P.Schemas.file?n=a.URI.file(c.normalize(l(t))).path:n=c.posix.normalize(t.path),t.with({path:n})}relativePath(t,n){if(t.scheme!==n.scheme||!(0,e.isEqualAuthority)(t.authority,n.authority))return;if(t.scheme===P.Schemas.file){const f=c.relative(l(t),l(n));return w.isWindows?u.toSlashes(f):f}let r=t.path||"/";const h=n.path||"/";if(this._ignorePathCasing(t)){let f=0;for(const A=Math.min(r.length,h.length);f<A&&!(r.charCodeAt(f)!==h.charCodeAt(f)&&r.charAt(f).toLowerCase()!==h.charAt(f).toLowerCase());f++);r=h.substr(0,f)+r.substr(f)}return c.posix.relative(r,h)}resolvePath(t,n){if(t.scheme===P.Schemas.file){const r=a.URI.file(c.resolve(l(t),n));return t.with({authority:r.authority,path:r.path})}return n=u.toPosixPath(n),t.with({path:c.posix.resolve(t.path,n)})}isAbsolutePath(t){return!!t.path&&t.path[0]==="/"}isEqualAuthority(t,n){return t===n||t!==void 0&&n!==void 0&&(0,C.equalsIgnoreCase)(t,n)}hasTrailingPathSeparator(t,n=c.sep){if(t.scheme===P.Schemas.file){const r=l(t);return r.length>u.getRoot(r).length&&r[r.length-1]===n}else{const r=t.path;return r.length>1&&r.charCodeAt(r.length-1)===47&&!/^[a-zA-Z]:(\/$|\\$)/.test(t.fsPath)}}removeTrailingPathSeparator(t,n=c.sep){return(0,e.hasTrailingPathSeparator)(t,n)?t.with({path:t.path.substr(0,t.path.length-1)}):t}addTrailingPathSeparator(t,n=c.sep){let r=!1;if(t.scheme===P.Schemas.file){const h=l(t);r=h!==void 0&&h.length===u.getRoot(h).length&&h[h.length-1]===n}else{n="/";const h=t.path;r=h.length===1&&h.charCodeAt(h.length-1)===47}return!r&&!(0,e.hasTrailingPathSeparator)(t,n)?t.with({path:t.path+"/"}):t}}e.ExtUri=m,e.extUri=new m(()=>!1),e.extUriBiasedIgnorePathCase=new m(s=>s.scheme===P.Schemas.file?!w.isLinux:!0),e.extUriIgnorePathCase=new m(s=>!0),e.isEqual=e.extUri.isEqual.bind(e.extUri),e.isEqualOrParent=e.extUri.isEqualOrParent.bind(e.extUri),e.getComparisonKey=e.extUri.getComparisonKey.bind(e.extUri),e.basenameOrAuthority=e.extUri.basenameOrAuthority.bind(e.extUri),e.basename=e.extUri.basename.bind(e.extUri),e.extname=e.extUri.extname.bind(e.extUri),e.dirname=e.extUri.dirname.bind(e.extUri),e.joinPath=e.extUri.joinPath.bind(e.extUri),e.normalizePath=e.extUri.normalizePath.bind(e.extUri),e.relativePath=e.extUri.relativePath.bind(e.extUri),e.resolvePath=e.extUri.resolvePath.bind(e.extUri),e.isAbsolutePath=e.extUri.isAbsolutePath.bind(e.extUri),e.isEqualAuthority=e.extUri.isEqualAuthority.bind(e.extUri),e.hasTrailingPathSeparator=e.extUri.hasTrailingPathSeparator.bind(e.extUri),e.removeTrailingPathSeparator=e.extUri.removeTrailingPathSeparator.bind(e.extUri),e.addTrailingPathSeparator=e.extUri.addTrailingPathSeparator.bind(e.extUri);function g(s,t){const n=[];for(let r=0;r<s.length;r++){const h=t(s[r]);s.some((f,A)=>A===r?!1:(0,e.isEqualOrParent)(h,t(f)))||n.push(s[r])}return n}e.distinctParents=g;var L;(function(s){s.META_DATA_LABEL="label",s.META_DATA_DESCRIPTION="description",s.META_DATA_SIZE="size",s.META_DATA_MIME="mime";function t(n){const r=new Map;n.path.substring(n.path.indexOf(";")+1,n.path.lastIndexOf(";")).split(";").forEach(A=>{const[E,y]=A.split(":");E&&y&&r.set(E,y)});const f=n.path.substring(0,n.path.indexOf(";"));return f&&r.set(s.META_DATA_MIME,f),r}s.parseMetaData=t})(L=e.DataUri||(e.DataUri={}));function v(s,t,n){if(t){let r=s.path;return r&&r[0]!==c.posix.sep&&(r=c.posix.sep+r),s.with({scheme:n,authority:t,path:r})}return s.with({scheme:n})}e.toLocalResource=v}),define(I[10],M([0,1,6,3,8,4,11,2,5]),function(O,e,u,P,c,w,C,a,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.OutputLinkComputer=void 0;class m{constructor(v,s){this.ctx=v,this.patterns=new Map,this.computePatterns(s)}computePatterns(v){const s=v.workspaceFolders.sort((t,n)=>n.length-t.length).map(t=>u.URI.parse(t));for(const t of s){const n=m.createPatterns(t);this.patterns.set(t,n)}}getModel(v){return this.ctx.getMirrorModels().find(t=>t.uri.toString()===v)}computeLinks(v){const s=this.getModel(v);if(!s)return[];const t=[],n=w.splitLines(s.getValue());for(const[r,h]of this.patterns){const f={toResource:A=>typeof A=="string"?c.joinPath(r,A):null};for(let A=0,E=n.length;A<E;A++)t.push(...m.detectLinks(n[A],A+1,h,f))}return t}static createPatterns(v){const s=[],t=v.scheme===l.Schemas.file?v.fsPath:v.path,n=[t];a.isWindows&&v.scheme===l.Schemas.file&&n.push(P.toSlashes(t));for(const r of n){const h='[^\\s\\(\\):<>"]',A=`${`(?:${h}| ${h})`}+\\.${h}+`,E=`${h}+`;s.push(new RegExp(w.escapeRegExpCharacters(r)+`(${A}) on line ((\\d+)(, column (\\d+))?)`,"gi")),s.push(new RegExp(w.escapeRegExpCharacters(r)+`(${A}):line ((\\d+)(, column (\\d+))?)`,"gi")),s.push(new RegExp(w.escapeRegExpCharacters(r)+`(${A})(\\s?\\((\\d+)(,(\\d+))?)\\)`,"gi")),s.push(new RegExp(w.escapeRegExpCharacters(r)+`(${E})(:(\\d+))?(:(\\d+))?`,"gi"))}return s}static detectLinks(v,s,t,n){const r=[];return t.forEach(h=>{h.lastIndex=0;let f,A=0;for(;(f=h.exec(v))!==null;){const E=w.rtrim(f[1],".").replace(/\\/g,"/");let y;try{const T=n.toResource(E);T&&(y=T.toString())}catch{continue}if(f[3]){const T=f[3];if(f[5]){const i=f[5];y=w.format("{0}#{1},{2}",y,T,i)}else y=w.format("{0}#{1}",y,T)}const k=w.rtrim(f[0],"."),q=v.indexOf(k,A);A=q+k.length;const N={startColumn:q+1,startLineNumber:s,endColumn:q+1+k.length,endLineNumber:s};if(r.some(T=>C.Range.areIntersectingOrTouching(T.range,N)))return;r.push({range:N,url:y})}}),r}}e.OutputLinkComputer=m;function g(L,v){return new m(L,v)}e.create=g})}).call(this);

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/784b0177c56c607789f9638da7b6bf3230d47a8c/core/vs/workbench/contrib/output/common/outputLinkComputer.js.map
