"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[1637],{91637:function(It,Ve,h){h.d(Ve,{f6:function(){return ln},vJ:function(){return sn},kc:function(){return on},iv:function(){return cn},Fg:function(){return un}});var S="acss",T=h(28484),p=h(50959),ge=h(68190),ye=h(90396),Pe=h(55250),le=h(72955),J=h(60806),_=h(18246);function Ce(i,e){if(i.inserted[e.name]===void 0)return i.insert("",e,i.sheet,!0)}function je(i,e,t){var n=[],r=(0,_.fp)(i,n,t);return n.length<2?t:r+e(n)}var xe=function(e){var t=(0,le.Z)(e);t.sheet.speedy=function(d){this.isSpeedy=d},t.compat=!0;var n=function(){for(var f=arguments.length,v=new Array(f),u=0;u<f;u++)v[u]=arguments[u];var g=(0,J.O)(v,t.registered,void 0);return(0,_.My)(t,g,!1),t.key+"-"+g.name},r=function(){for(var f=arguments.length,v=new Array(f),u=0;u<f;u++)v[u]=arguments[u];var g=(0,J.O)(v,t.registered),C="animation-"+g.name;return Ce(t,{name:g.name,styles:"@keyframes "+C+"{"+g.styles+"}"}),C},s=function(){for(var f=arguments.length,v=new Array(f),u=0;u<f;u++)v[u]=arguments[u];var g=(0,J.O)(v,t.registered);Ce(t,g)},c=function(){for(var f=arguments.length,v=new Array(f),u=0;u<f;u++)v[u]=arguments[u];return je(t.registered,n,q(v))};return{css:n,cx:c,injectGlobal:s,keyframes:r,hydrate:function(f){f.forEach(function(v){t.inserted[v]=!0})},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:_.fp.bind(null,t.registered),merge:je.bind(null,t.registered,n)}},q=function i(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(r!=null){var s=void 0;switch(typeof r){case"boolean":break;case"object":{if(Array.isArray(r))s=i(r);else{s="";for(var c in r)r[c]&&c&&(s&&(s+=" "),s+=c)}break}default:s=r}s&&(t&&(t+=" "),t+=s)}}return t},B=xe({key:"css"}),Ue=B.flush,Y=B.hydrate,lt=B.cx,Xe=B.merge,ut=B.getRegisteredStyles,Ke=B.injectGlobal,At=B.keyframes,mt=B.css,dt=B.sheet,Ye=B.cache,Qe=function(){function i(){(0,ge.Z)(this,i),(0,Pe.Z)(this,"_cacheList",[Ye])}return(0,ye.Z)(i,[{key:"add",value:function(t){var n=this.getCache(t.key);return n||(this._cacheList.push(t),t)}},{key:"delete",value:function(t){this._cacheList=this._cacheList.filter(function(n){return n.key!==t.key})}},{key:"hasCache",value:function(t){return this._cacheList.some(function(n){return n.key===t.key})}},{key:"getCache",value:function(t){return this._cacheList.find(function(n){return n.key===t})}},{key:"getCacheList",value:function(){return this._cacheList}}]),i}(),Ee=typeof document<"u",Me=function(e,t){return"".concat(e,"-").concat(t)},ft=function(e,t,n,r){var s=r.hashPriority||"high";(0,_.hC)(e,t,n);var c=".".concat(Me(e.key,t.name)),d=s==="low"?":where(".concat(c,")"):c;if(e.inserted[t.name]===void 0){var f="",v=t;do{var u=e.insert(t===v?d:"",v,e.sheet,!0);!Ee&&u!==void 0&&(f+=u),v=v.next}while(v!==void 0);if(!Ee&&f.length!==0)return f}},ue=h(63509),me=function(e){return(0,ue.Z)(e)==="object"&&"styles"in e&&"name"in e&&"toString"in e},Je=function i(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(r!==null){var s=void 0;switch((0,ue.Z)(r)){case"boolean":break;case"object":{if(Array.isArray(r))s=i(r);else{s="";for(var c in r)r[c]&&c&&(s&&(s+=" "),s+=c)}break}default:s=r}s&&(t&&(t+=" "),t+=s)}}return t},we=function(e,t,n){var r=[],s=(0,_.fp)(e,r,n);return r.length<2?n:s+t(r)},$e=function(e,t){return function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var c=(0,J.O)(r,e.registered,void 0);return ft(e,c,!1,t),Me(e.key,c.name)}},Oe=function(e,t){return function(){for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];var c=r.map(function(d){return me(d)?t(d):d});return we(e.registered,t,Je(c))}},ke=function(e,t){var n=$e(e,{hashPriority:t.hashPriority||"high",label:t.label}),r=Oe(e,n);return{css:n,cx:r}},oe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,J.O)(t)},vt=function(e){return(0,p.createContext)(e)},Se=h(80284),Ne=function(e){var t=new WeakMap;return function(n){if(t.has(n))return t.get(n);var r=e(n);return t.set(n,r),r}},be=h(46096),_e=!0,qe={}.hasOwnProperty,ie=p.createContext(typeof HTMLElement<"u"?(0,le.Z)({key:"css"}):null),ht=ie.Provider,pt=function(){return useContext(ie)},Ie=function(e){return(0,p.forwardRef)(function(t,n){var r=(0,p.useContext)(ie);return e(t,r,n)})};_e||(Ie=function(e){return function(t){var n=(0,p.useContext)(ie);return n===null?(n=(0,le.Z)({key:"css"}),p.createElement(ie.Provider,{value:n},e(t,n))):e(t,n)}});var te=p.createContext({}),et=function(){return React.useContext(te)},tt=function(e,t){if(typeof t=="function"){var n=t(e);return n}return(0,Se.Z)({},e,t)},nt=Ne(function(i){return Ne(function(e){return tt(i,e)})}),rt=function(e){var t=p.useContext(te);return e.theme!==t&&(t=nt(t)(e.theme)),p.createElement(te.Provider,{value:t},e.children)};function gt(i){var e=i.displayName||i.name||"Component",t=function(s,c){var d=React.useContext(te);return React.createElement(i,_extends({theme:d,ref:c},s))},n=React.forwardRef(t);return n.displayName="WithTheme("+e+")",hoistNonReactStatics(n,i)}var Ae=function(e){var t=e.split(".");return t[t.length-1]},Ze=function(e){var t=/^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(e);if(t||(t=/^([A-Za-z0-9$.]+)@/.exec(e),t))return Ae(t[1])},at=new Set(["renderWithHooks","processChild","finishClassComponent","renderToString"]),D=function(e){return e.replace(/\$/g,"-")},Te=function(e){if(e)for(var t=e.split(`
`),n=0;n<t.length;n++){var r=Ze(t[n]);if(r){if(at.has(r))break;if(/^[A-Z]/.test(r))return D(r)}}},de="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",fe="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",ot=function(e,t){var n={};for(var r in t)qe.call(t,r)&&(n[r]=t[r]);if(n[de]=e,!1)var s;return n},yt=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return registerStyles(t,n,r),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(t,n,r)}),null},Ct=null,Re=null,xt=h(72535),it={name:"@emotion/react",version:"11.11.4",main:"dist/emotion-react.cjs.js",module:"dist/emotion-react.esm.js",browser:{"./dist/emotion-react.esm.js":"./dist/emotion-react.browser.esm.js"},exports:{".":{module:{worker:"./dist/emotion-react.worker.esm.js",browser:"./dist/emotion-react.browser.esm.js",default:"./dist/emotion-react.esm.js"},import:"./dist/emotion-react.cjs.mjs",default:"./dist/emotion-react.cjs.js"},"./jsx-runtime":{module:{worker:"./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",browser:"./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"},import:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",default:"./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"},"./_isolated-hnrs":{module:{worker:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",browser:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"},import:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",default:"./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"},"./jsx-dev-runtime":{module:{worker:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",browser:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"},import:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",default:"./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"},"./package.json":"./package.json","./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}},types:"types/index.d.ts",files:["src","dist","jsx-runtime","jsx-dev-runtime","_isolated-hnrs","types/*.d.ts","macro.*"],sideEffects:!1,author:"Emotion Contributors",license:"MIT",scripts:{"test:typescript":"dtslint types"},dependencies:{"@babel/runtime":"^7.18.3","@emotion/babel-plugin":"^11.11.0","@emotion/cache":"^11.11.0","@emotion/serialize":"^1.1.3","@emotion/use-insertion-effect-with-fallbacks":"^1.0.1","@emotion/utils":"^1.2.1","@emotion/weak-memoize":"^0.3.1","hoist-non-react-statics":"^3.3.1"},peerDependencies:{react:">=16.8.0"},peerDependenciesMeta:{"@types/react":{optional:!0}},devDependencies:{"@definitelytyped/dtslint":"0.0.112","@emotion/css":"11.11.2","@emotion/css-prettifier":"1.1.3","@emotion/server":"11.11.0","@emotion/styled":"11.11.0","html-tag-names":"^1.1.2",react:"16.14.0","svg-tag-names":"^1.1.1",typescript:"^4.5.5"},repository:"https://github.com/emotion-js/emotion/tree/main/packages/react",publishConfig:{access:"public"},"umd:main":"dist/emotion-react.umd.min.js",preconstruct:{entrypoints:["./index.js","./jsx-runtime.js","./jsx-dev-runtime.js","./_isolated-hnrs.js"],umdName:"emotionReact",exports:{envConditions:["browser","worker"],extra:{"./types/css-prop":"./types/css-prop.d.ts","./macro":{types:{import:"./macro.d.mts",default:"./macro.d.ts"},default:"./macro.js"}}}}},St=function(e,t){var n=arguments;if(t==null||!hasOwn.call(t,"css"))return React.createElement.apply(void 0,n);var r=n.length,s=new Array(r);s[0]=Emotion,s[1]=createEmotionProps(e,t);for(var c=2;c<r;c++)s[c]=n[c];return React.createElement.apply(null,s)},bt=!1,Tt=Ie(function(i,e){var t=i.styles,n=(0,J.O)([t],void 0,p.useContext(te));if(!_e){for(var r,s=n.name,c=n.styles,d=n.next;d!==void 0;)s+=" "+d.name,c+=d.styles,d=d.next;var f=e.compat===!0,v=e.insert("",{name:s,styles:c},e.sheet,f);return f?null:p.createElement("style",(r={},r["data-emotion"]=e.key+"-global "+s,r.dangerouslySetInnerHTML={__html:v},r.nonce=e.sheet.nonce,r))}var u=p.useRef();return(0,be.j)(function(){var g=e.key+"-global",C=new e.sheet.constructor({key:g,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),b=!1,w=document.querySelector('style[data-emotion="'+g+" "+n.name+'"]');return e.sheet.tags.length&&(C.before=e.sheet.tags[0]),w!==null&&(b=!0,w.setAttribute("data-emotion",g),C.hydrate([w])),u.current=[C,b],function(){C.flush()}},[e]),(0,be.j)(function(){var g=u.current,C=g[0],b=g[1];if(b){g[1]=!1;return}if(n.next!==void 0&&(0,_.My)(e,n.next,!0),C.tags.length){var w=C.tags[C.tags.length-1].nextElementSibling;C.before=w,C.flush()}e.insert("",n,C,!1)},[e,n.name]),null});function Le(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];return serializeStyles(e)}var Zt=function(){var e=Le.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Rt=function i(e){for(var t=e.length,n=0,r="";n<t;n++){var s=e[n];if(s!=null){var c=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))c=i(s);else{c="";for(var d in s)s[d]&&d&&(c&&(c+=" "),c+=d)}break}default:c=s}c&&(r&&(r+=" "),r+=c)}}return r};function Lt(i,e,t){var n=[],r=getRegisteredStyles(i,n,t);return n.length<2?t:r+e(n)}var Pt=function(e){var t=e.cache,n=e.serializedArr;return useInsertionEffectAlwaysWithSyncFallback(function(){for(var r=0;r<n.length;r++)insertStyles(t,n[r],!1)}),null},a=null;if(!1)var o,m,l,y;var x=h(11527),O=function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(0,p.memo)(function(s){var c=e();return(0,x.jsx)(Tt,{styles:(0,J.O)(n,void 0,(0,T.Z)((0,T.Z)({},s),{},{theme:c}))})})}},k=function(e){return function(t){var n=e(t);return function(r){var s=n(r),c=s.styles;return c}}},P=h(46060),E=h(63173),I=["children","prefix","speedy","getStyleManager","container","nonce","insertionPoint","stylisPlugins","linters"],ee=function(e){return(0,p.memo)(function(t){var n=t.children,r=t.prefix,s=t.speedy,c=t.getStyleManager,d=t.container,f=t.nonce,v=t.insertionPoint,u=t.stylisPlugins,g=t.linters,C=(0,P.Z)(t,I),b=(0,p.useContext)(e),w=r??b.sheet.key,$=d??b.sheet.container,N=s??b.sheet.isSpeedy,R=(0,p.useMemo)(function(){var L=!1,F=xe({speedy:N??L,key:w,container:$,nonce:f,insertionPoint:v,stylisPlugins:u});if(typeof h.g<"u"){var Q=h.g.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__;Q&&(F.cache=Q.add(F.cache))}return F},[w,N,$,f,v,u]);(0,p.useEffect)(function(){c==null||c(R)},[R]);var j=(0,x.jsx)(e.Provider,{value:R,children:n});return Object.keys(C).length||$?(0,x.jsx)(E.StyleProvider,(0,T.Z)((0,T.Z)({linters:g,container:$},C),{},{children:j})):j})},M=h(3392),A=h(43456),G=function(){var e=A.Z.useToken(),t=e.token;return t},W=function(e){return(0,T.Z)((0,T.Z)({},e),{},{mobile:e.xs,tablet:e.md,laptop:e.lg,desktop:e.xxl})},H=function(){var e=G(),t={xs:"@media (max-width: ".concat(e.screenXSMax,"px)"),sm:"@media (max-width: ".concat(e.screenSMMax,"px)"),md:"@media (max-width: ".concat(e.screenMDMax,"px)"),lg:"@media (max-width: ".concat(e.screenLGMax,"px)"),xl:"@media (max-width: ".concat(e.screenXLMax,"px)"),xxl:"@media (min-width: ".concat(e.screenXXLMin,"px)")};return(0,p.useMemo)(function(){return W(t)},[e])},V=function(e,t){return Object.entries(e).map(function(n){var r=(0,M.Z)(n,2),s=r[0],c=r[1],d=c;return me(c)||(d=oe(c)),t[s]?"".concat(t[s]," {").concat(d.styles,"}"):""}).join("")},U=["stylish","appearance","isDarkMode","prefixCls","iconPrefixCls"],se=["prefixCls","iconPrefixCls"],Z=function(e){var t=e.hashPriority,n=e.useTheme,r=e.EmotionContext;return function(s,c){var d=c==null?void 0:c.__BABEL_FILE_NAME__,f=!!d;return function(v){var u=n(),g=(0,p.useContext)(r),C=g.cache,b=ke(C,{hashPriority:(c==null?void 0:c.hashPriority)||t,label:c==null?void 0:c.label}),w=b.cx,$=b.css,N=H(),R=(0,p.useMemo)(function(){var j;if(s instanceof Function){var L=u.stylish,F=u.appearance,Q=u.isDarkMode,K=u.prefixCls,z=u.iconPrefixCls,ce=(0,P.Z)(u,U),ae=function(He){return V(He,N)};Object.assign(ae,N),j=s({token:ce,stylish:L,appearance:F,isDarkMode:Q,prefixCls:K,iconPrefixCls:z,cx:w,css:oe,responsive:ae},v)}else j=s;return(0,ue.Z)(j)==="object"&&(me(j)?j=$(j):j=Object.fromEntries(Object.entries(j).map(function(pe){var He=(0,M.Z)(pe,2),Ge=He[0],We=He[1],mn=f?"".concat(d,"-").concat(Ge):void 0;return(0,ue.Z)(We)==="object"?f?[Ge,$(We,"label:".concat(mn))]:[Ge,$(We)]:[Ge,We]}))),j},[v,u]);return(0,p.useMemo)(function(){var j=u.prefixCls,L=u.iconPrefixCls,F=(0,P.Z)(u,se);return{styles:R,cx:w,theme:F,prefixCls:j,iconPrefixCls:L}},[R,u])}}},ve=rt,ne=te,Fe=function(e){if(!e.ThemeContext)throw"ThemeContext is required. Please check your config.";ne=e.ThemeContext,ve=createStyledThemeProvider(e)},Be=function(e){if(e.ThemeProvider)return e.ThemeProvider;var t=e.ThemeContext;return function(n){return(0,x.jsx)(t.Provider,{value:n.theme,children:n.children})}},ze=h(6399),Ft=h(88063),Bt=h(63340),zt=h(17102),jt=h(17938),he=function(e){return typeof window<"u"?matchMedia&&matchMedia("(prefers-color-scheme: ".concat(e,")")):{matches:!1}},st,Et=(0,p.createContext)({appearance:"light",setAppearance:function(){},isDarkMode:!1,themeMode:"light",setThemeMode:function(){},browserPrefers:(st=he("dark"))!==null&&st!==void 0&&st.matches?"dark":"light"}),De=function(){return(0,p.useContext)(Et)},Mt=(0,p.memo)(function(i){var e=i.children,t=i.theme,n=i.prefixCls,r=i.getStaticInstance,s=i.staticInstanceConfig,c=De(),d=c.appearance,f=c.isDarkMode,v=Ft.ZP.useMessage(s==null?void 0:s.message),u=(0,M.Z)(v,2),g=u[0],C=u[1],b=Bt.ZP.useNotification(s==null?void 0:s.notification),w=(0,M.Z)(b,2),$=w[0],N=w[1],R=zt.Z.useModal(),j=(0,M.Z)(R,2),L=j[0],F=j[1];(0,p.useEffect)(function(){r==null||r({message:g,modal:L,notification:$})},[]);var Q=(0,p.useMemo)(function(){var K=f?A.Z.darkAlgorithm:A.Z.defaultAlgorithm,z=t;if(typeof t=="function"&&(z=t(d)),!z)return{algorithm:K};var ce=z.algorithm?z.algorithm instanceof Array?z.algorithm:[z.algorithm]:[];return(0,T.Z)((0,T.Z)({},z),{},{algorithm:z.algorithm?[K].concat((0,ze.Z)(ce)):K})},[t,f]);return(0,x.jsxs)(jt.ZP,{prefixCls:n,theme:Q,children:[C,N,F,e]})});Mt.displayName="AntdProvider";var Dt=Mt;function Ht(i,e){var t=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(t!=null){var n,r,s,c,d=[],f=!0,v=!1;try{if(s=(t=t.call(i)).next,e===0){if(Object(t)!==t)return;f=!1}else for(;!(f=(n=s.call(t)).done)&&(d.push(n.value),d.length!==e);f=!0);}catch(u){v=!0,r=u}finally{try{if(!f&&t.return!=null&&(c=t.return(),Object(c)!==c))return}finally{if(v)throw r}}return d}}function Gt(i,e){return Wt(i)||Ht(i,e)||Vt(i,e)||Ut()}function Wt(i){if(Array.isArray(i))return i}function Vt(i,e){if(i){if(typeof i=="string")return wt(i,e);var t=Object.prototype.toString.call(i).slice(8,-1);if(t==="Object"&&i.constructor&&(t=i.constructor.name),t==="Map"||t==="Set")return Array.from(i);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return wt(i,e)}}function wt(i,e){(e==null||e>i.length)&&(e=i.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=i[t];return n}function Ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xt(i,e){var t=e||{},n=t.defaultValue,r=t.value,s=t.onChange,c=t.postState,d=p.useState(function(){return r!==void 0?r:n!==void 0?typeof n=="function"?n():n:typeof i=="function"?i():i}),f=Gt(d,2),v=f[0],u=f[1],g=r!==void 0?r:v;c&&(g=c(g));function C(b){u(b),g!==b&&s&&s(b,g)}return[g,C]}var $t=Xt,ct=function(e){typeof p.startTransition=="function"?(0,p.startTransition)(e):e()},re,Kt=function(e){var t=e.themeMode,n=e.setAppearance,r=e.setBrowserPrefers,s=function(){ct(function(){he("dark").matches?n("dark"):n("light")})},c=function(){ct(function(){he("dark").matches?r("dark"):r("light")})};return(0,p.useLayoutEffect)(function(){if(t!=="auto"){ct(function(){n(t)});return}return setTimeout(s,1),re||(re=he("dark")),re.addEventListener("change",s),function(){re.removeEventListener("change",s)}},[t]),(0,p.useLayoutEffect)(function(){return re||(re=he("dark")),re.addEventListener("change",c),function(){re.removeEventListener("change",c)}},[]),null},Ot=(0,p.memo)(function(i){var e,t=i.children,n=i.appearance,r=i.defaultAppearance,s=i.onAppearanceChange,c=i.themeMode,d=i.defaultThemeMode,f=i.onThemeModeChange,v=i.useTheme,u=v(),g=u.appearance,C=u.themeMode,b=$t("light",{value:c,defaultValue:d??C,onChange:function(pe){return f==null?void 0:f(pe)}}),w=(0,M.Z)(b,2),$=w[0],N=w[1],R=$t("light",{value:n,defaultValue:r??g,onChange:function(pe){return s==null?void 0:s(pe)}}),j=(0,M.Z)(R,2),L=j[0],F=j[1],Q=(0,p.useState)((e=he("dark"))!==null&&e!==void 0&&e.matches?"dark":"light"),K=(0,M.Z)(Q,2),z=K[0],ce=K[1];return(0,x.jsxs)(Et.Provider,{value:{themeMode:$,setThemeMode:N,appearance:L,setAppearance:F,isDarkMode:L==="dark",browserPrefers:z},children:[typeof window<"u"&&(0,x.jsx)(Kt,{themeMode:$,setAppearance:F,setBrowserPrefers:ce}),t]})});Ot.displayName="ThemeSwitcher";var Yt=Ot,Qt=function(e){var t=e.css,n=e.token;return{buttonDefaultHover:t({backgroundColor:n.colorBgContainer,border:"1px solid ".concat(n.colorBorder),cursor:"pointer",":hover":{color:n.colorPrimaryHover,borderColor:n.colorPrimaryHover},":active":{color:n.colorPrimaryActive,borderColor:n.colorPrimaryActive}})}},Jt=function(e){return Object.fromEntries(Object.entries(e).map(function(t){var n=(0,M.Z)(t,2),r=n[0],s=n[1];return[r,s.styles]}))},_t=function(){var e=G(),t=De(),n=t.appearance,r=t.isDarkMode;return(0,p.useMemo)(function(){return Jt(Qt({token:e,css:oe,appearance:n,isDarkMode:r}))},[e,n,r])},kt=function(){var e=G(),t=_t();return(0,p.useMemo)(function(){return(0,T.Z)((0,T.Z)({},e),{},{stylish:t})},[e,t])},qt=["stylish"],en=function(e){var t=e.children,n=e.customToken,r=e.defaultCustomToken,s=e.customStylish,c=e.prefixCls,d=e.StyledThemeProvider,f=De(),v=f.appearance,u=f.isDarkMode,g=kt(),C=g.stylish,b=(0,P.Z)(g,qt),w=(0,p.useMemo)(function(){return r?r instanceof Function?r({token:b,appearance:v,isDarkMode:u}):r:{}},[r,b,v]),$=(0,p.useMemo)(function(){return n instanceof Function?(0,T.Z)((0,T.Z)({},w),n({token:b,appearance:v,isDarkMode:u})):(0,T.Z)((0,T.Z)({},w),n)},[w,n,b,v]),N=(0,p.useMemo)(function(){return s?s({token:(0,T.Z)((0,T.Z)({},b),$),stylish:C,appearance:v,isDarkMode:u,css:oe}):{}},[s,b,$,C,v]),R=(0,p.useMemo)(function(){return(0,T.Z)((0,T.Z)({},N),C)},[N,C]),j=(0,T.Z)((0,T.Z)((0,T.Z)((0,T.Z)({},b),$),{},{stylish:R},f),{},{prefixCls:c});return(0,x.jsx)(d,{theme:j,children:t})},tn=en,nn=function(e){var t=e.styledConfig?Be(e.styledConfig):void 0,n=e.StyleEngineContext;return(0,p.memo)(function(r){var s=r.children,c=r.customToken,d=r.customStylish,f=r.theme,v=r.getStaticInstance,u=r.prefixCls,g=r.staticInstanceConfig,C=r.appearance,b=r.defaultAppearance,w=r.onAppearanceChange,$=r.themeMode,N=r.defaultThemeMode,R=r.onThemeModeChange,j=r.styled,L=(0,p.useContext)(n),F=L.prefixCls,Q=L.StyledThemeContext,K=L.CustomThemeContext,z=(0,p.useContext)(K),ce=j?Be(j):t||ve,ae=u||F;return(0,x.jsx)(n.Provider,{value:{prefixCls:ae,StyledThemeContext:(j==null?void 0:j.ThemeContext)||Q||ne,CustomThemeContext:K},children:(0,x.jsx)(Yt,{themeMode:$,defaultThemeMode:N,onThemeModeChange:R,defaultAppearance:b,appearance:C,onAppearanceChange:w,useTheme:e.useTheme,children:(0,x.jsx)(Dt,{prefixCls:ae,staticInstanceConfig:g,theme:f,getStaticInstance:v,children:(0,x.jsx)(tn,{prefixCls:ae,customToken:c,defaultCustomToken:z,customStylish:d,StyledThemeProvider:ce,children:s})})})})})},rn=function(e){return function(){var t=e.StyleEngineContext,n=(0,p.useContext)(t),r=n.StyledThemeContext,s=n.CustomThemeContext,c=n.prefixCls,d=kt(),f=De(),v=(0,p.useContext)(s),u=(0,p.useContext)(r??ne)||{},g=(0,p.useContext)(jt.ZP.ConfigContext),C=g.iconPrefixCls,b=g.getPrefixCls,w=b(),$=c&&c!=="ant"?c:w,N=(0,p.useMemo)(function(){return(0,T.Z)((0,T.Z)((0,T.Z)((0,T.Z)({},d),f),v),{},{prefixCls:$,iconPrefixCls:C})},[d,f,v,$,C]);return!u||Object.keys(u).length===0?N:(0,T.Z)((0,T.Z)({},u),{},{prefixCls:$,iconPrefixCls:C})}},Nt=new Qe;typeof h.g<"u"&&(h.g.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__=Nt);var an=function(e){var t,n,r,s=(0,T.Z)((0,T.Z)({},e),{},{key:(t=e.key)!==null&&t!==void 0?t:"zcss",speedy:(n=e.speedy)!==null&&n!==void 0?n:!1}),c=xe({key:s.key,speedy:s.speedy,container:s.container}),d=vt(c),f=ee(d);c.cache=Nt.add(c.cache);var v=(0,p.createContext)(s.customToken?s.customToken:{}),u=(r=s.styled)===null||r===void 0?void 0:r.ThemeContext,g=(0,p.createContext)({CustomThemeContext:v,StyledThemeContext:u,prefixCls:s==null?void 0:s.prefixCls,iconPrefixCls:s==null?void 0:s.iconPrefixCls}),C=rn({StyleEngineContext:g}),b=Z({hashPriority:s.hashPriority,useTheme:C,EmotionContext:d}),w=O(C),$=k(b),N=nn({styledConfig:s.styled,StyleEngineContext:g,useTheme:C});N.displayName="AntdStyleThemeProvider";var R=ke(c.cache,{hashPriority:s.hashPriority}),j=R.cx,L=c.injectGlobal,F=c.keyframes;return{createStyles:b,createGlobalStyle:w,createStylish:$,css:oe,cx:j,keyframes:F,injectGlobal:L,styleManager:c,useTheme:C,StyleProvider:f,ThemeProvider:N}},X=an({key:S,speedy:!1}),on=X.createStyles,sn=X.createGlobalStyle,dn=X.createStylish,cn=X.css,fn=X.cx,vn=X.keyframes,hn=X.injectGlobal,pn=X.styleManager,ln=X.ThemeProvider,gn=X.StyleProvider,un=X.useTheme},63340:function(It,Ve,h){h.d(Ve,{ZP:function(){return Pt}});var S=h(50959),T=h(22217),p=h(24044),ge=h(95841),ye=h(17938),Pe=h(20962),le=h(1713),J=h(95457),_=h(35627),Ce=h(33897),je=h(92065),xe=h(82187),q=h.n(xe),B=h(73062),Ue=h(57739),Y=h(63173),lt=h(34463),Xe=h(69741),ut=h(47043),Ke=h(7673),mt=a=>{const{componentCls:o,notificationMarginEdge:m,animationMaxHeight:l}=a,y=`${o}-notice`,x=new Y.Keyframes("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),O=new Y.Keyframes("antNotificationTopFadeIn",{"0%":{top:-l,opacity:0},"100%":{top:0,opacity:1}}),k=new Y.Keyframes("antNotificationBottomFadeIn",{"0%":{bottom:a.calc(l).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),P=new Y.Keyframes("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[o]:{[`&${o}-top, &${o}-bottom`]:{marginInline:0,[y]:{marginInline:"auto auto"}},[`&${o}-top`]:{[`${o}-fade-enter${o}-fade-enter-active, ${o}-fade-appear${o}-fade-appear-active`]:{animationName:O}},[`&${o}-bottom`]:{[`${o}-fade-enter${o}-fade-enter-active, ${o}-fade-appear${o}-fade-appear-active`]:{animationName:k}},[`&${o}-topRight, &${o}-bottomRight`]:{[`${o}-fade-enter${o}-fade-enter-active, ${o}-fade-appear${o}-fade-appear-active`]:{animationName:x}},[`&${o}-topLeft, &${o}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:m,_skip_check_:!0},[y]:{marginInlineEnd:"auto",marginInlineStart:0},[`${o}-fade-enter${o}-fade-enter-active, ${o}-fade-appear${o}-fade-appear-active`]:{animationName:P}}}}};const dt=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],Ye={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},Qe=(a,o)=>{const{componentCls:m}=a;return{[`${m}-${o}`]:{[`&${m}-stack > ${m}-notice-wrapper`]:{[o.startsWith("top")?"top":"bottom"]:0,[Ye[o]]:{value:0,_skip_check_:!0}}}}},Ee=a=>{const o={};for(let m=1;m<a.notificationStackLayer;m++)o[`&:nth-last-child(${m+1})`]={overflow:"hidden",[`& > ${a.componentCls}-notice`]:{opacity:0,transition:`opacity ${a.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${a.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},o)},Me=a=>{const o={};for(let m=1;m<a.notificationStackLayer;m++)o[`&:nth-last-child(${m+1})`]={background:a.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},o)};var ue=a=>{const{componentCls:o}=a;return Object.assign({[`${o}-stack`]:{[`& > ${o}-notice-wrapper`]:Object.assign({transition:`all ${a.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},Ee(a))},[`${o}-stack:not(${o}-stack-expanded)`]:{[`& > ${o}-notice-wrapper`]:Object.assign({},Me(a))},[`${o}-stack${o}-stack-expanded`]:{[`& > ${o}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${a.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:a.margin,width:"100%",insetInline:0,bottom:a.calc(a.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},dt.map(m=>Qe(a,m)).reduce((m,l)=>Object.assign(Object.assign({},m),l),{}))};const me=a=>{const{iconCls:o,componentCls:m,boxShadow:l,fontSizeLG:y,notificationMarginBottom:x,borderRadiusLG:O,colorSuccess:k,colorInfo:P,colorWarning:E,colorError:I,colorTextHeading:ee,notificationBg:M,notificationPadding:A,notificationMarginEdge:G,fontSize:W,lineHeight:H,width:V,notificationIconSize:U,colorText:se}=a,Z=`${m}-notice`;return{position:"relative",marginBottom:x,marginInlineStart:"auto",background:M,borderRadius:O,boxShadow:l,[Z]:{padding:A,width:V,maxWidth:`calc(100vw - ${(0,Y.unit)(a.calc(G).mul(2).equal())})`,overflow:"hidden",lineHeight:H,wordWrap:"break-word"},[`${Z}-message`]:{marginBottom:a.marginXS,color:ee,fontSize:y,lineHeight:a.lineHeightLG},[`${Z}-description`]:{fontSize:W,color:se},[`${Z}-closable ${Z}-message`]:{paddingInlineEnd:a.paddingLG},[`${Z}-with-icon ${Z}-message`]:{marginBottom:a.marginXS,marginInlineStart:a.calc(a.marginSM).add(U).equal(),fontSize:y},[`${Z}-with-icon ${Z}-description`]:{marginInlineStart:a.calc(a.marginSM).add(U).equal(),fontSize:W},[`${Z}-icon`]:{position:"absolute",fontSize:U,lineHeight:1,[`&-success${o}`]:{color:k},[`&-info${o}`]:{color:P},[`&-warning${o}`]:{color:E},[`&-error${o}`]:{color:I}},[`${Z}-close`]:Object.assign({position:"absolute",top:a.notificationPaddingVertical,insetInlineEnd:a.notificationPaddingHorizontal,color:a.colorIcon,outline:"none",width:a.notificationCloseButtonSize,height:a.notificationCloseButtonSize,borderRadius:a.borderRadiusSM,transition:`background-color ${a.motionDurationMid}, color ${a.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:a.colorIconHover,backgroundColor:a.colorBgTextHover},"&:active":{backgroundColor:a.colorBgTextActive}},(0,Xe.Qy)(a)),[`${Z}-btn`]:{float:"right",marginTop:a.marginSM}}},Je=a=>{const{componentCls:o,notificationMarginBottom:m,notificationMarginEdge:l,motionDurationMid:y,motionEaseInOut:x}=a,O=`${o}-notice`,k=new Y.Keyframes("antNotificationFadeOut",{"0%":{maxHeight:a.animationMaxHeight,marginBottom:m},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[o]:Object.assign(Object.assign({},(0,Xe.Wf)(a)),{position:"fixed",zIndex:a.zIndexPopup,marginRight:{value:l,_skip_check_:!0},[`${o}-hook-holder`]:{position:"relative"},[`${o}-fade-appear-prepare`]:{opacity:"0 !important"},[`${o}-fade-enter, ${o}-fade-appear`]:{animationDuration:a.motionDurationMid,animationTimingFunction:x,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${o}-fade-leave`]:{animationTimingFunction:x,animationFillMode:"both",animationDuration:y,animationPlayState:"paused"},[`${o}-fade-enter${o}-fade-enter-active, ${o}-fade-appear${o}-fade-appear-active`]:{animationPlayState:"running"},[`${o}-fade-leave${o}-fade-leave-active`]:{animationName:k,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${O}-btn`]:{float:"left"}}})},{[o]:{[`${O}-wrapper`]:Object.assign({},me(a))}}]},we=a=>({zIndexPopup:a.zIndexPopupBase+lt.u6+50,width:384}),$e=a=>{const o=a.paddingMD,m=a.paddingLG;return(0,ut.TS)(a,{notificationBg:a.colorBgElevated,notificationPaddingVertical:o,notificationPaddingHorizontal:m,notificationIconSize:a.calc(a.fontSizeLG).mul(a.lineHeightLG).equal(),notificationCloseButtonSize:a.calc(a.controlHeightLG).mul(.55).equal(),notificationMarginBottom:a.margin,notificationPadding:`${(0,Y.unit)(a.paddingMD)} ${(0,Y.unit)(a.paddingContentHorizontalLG)}`,notificationMarginEdge:a.marginLG,animationMaxHeight:150,notificationStackLayer:3})};var Oe=(0,Ke.I$)("Notification",a=>{const o=$e(a);return[Je(o),mt(o),ue(o)]},we),ke=(0,Ke.bk)(["Notification","PurePanel"],a=>{const o=`${a.componentCls}-notice`,m=$e(a);return{[`${o}-pure-panel`]:Object.assign(Object.assign({},me(m)),{width:m.width,maxWidth:`calc(100vw - ${(0,Y.unit)(a.calc(m.notificationMarginEdge).mul(2).equal())})`,margin:0})}},we),oe=function(a,o){var m={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&o.indexOf(l)<0&&(m[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,l=Object.getOwnPropertySymbols(a);y<l.length;y++)o.indexOf(l[y])<0&&Object.prototype.propertyIsEnumerable.call(a,l[y])&&(m[l[y]]=a[l[y]]);return m};const vt={info:S.createElement(Ce.Z,null),success:S.createElement(Pe.Z,null),error:S.createElement(le.Z,null),warning:S.createElement(_.Z,null),loading:S.createElement(je.Z,null)};function Se(a,o){return o===null||o===!1?null:o||S.createElement(J.Z,{className:`${a}-close-icon`})}const Ne={success:Pe.Z,info:Ce.Z,error:le.Z,warning:_.Z},be=a=>{const{prefixCls:o,icon:m,type:l,message:y,description:x,btn:O,role:k="alert"}=a;let P=null;return m?P=S.createElement("span",{className:`${o}-icon`},m):l&&(P=S.createElement(Ne[l]||null,{className:q()(`${o}-icon`,`${o}-icon-${l}`)})),S.createElement("div",{className:q()({[`${o}-with-icon`]:P}),role:k},P,S.createElement("div",{className:`${o}-message`},y),S.createElement("div",{className:`${o}-description`},x),O&&S.createElement("div",{className:`${o}-btn`},O))};var qe=a=>{const{prefixCls:o,className:m,icon:l,type:y,message:x,description:O,btn:k,closable:P=!0,closeIcon:E,className:I}=a,ee=oe(a,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:M}=S.useContext(ge.E_),A=o||M("notification"),G=`${A}-notice`,W=(0,Ue.Z)(A),[H,V,U]=Oe(A,W);return H(S.createElement("div",{className:q()(`${G}-pure-panel`,V,m,U,W)},S.createElement(ke,{prefixCls:A}),S.createElement(B.qX,Object.assign({},ee,{prefixCls:A,eventKey:"pure",duration:null,closable:P,className:q()({notificationClassName:I}),closeIcon:Se(A,E),content:S.createElement(be,{prefixCls:G,icon:l,type:y,message:x,description:O,btn:k})}))))},ie=h(95046),ht=h(51360);function pt(a,o,m){let l;switch(a){case"top":l={left:"50%",transform:"translateX(-50%)",right:"auto",top:o,bottom:"auto"};break;case"topLeft":l={left:0,top:o,bottom:"auto"};break;case"topRight":l={right:0,top:o,bottom:"auto"};break;case"bottom":l={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:m};break;case"bottomLeft":l={left:0,top:"auto",bottom:m};break;default:l={right:0,top:"auto",bottom:m};break}return l}function Ie(a){return{motionName:`${a}-fade`}}var te=function(a,o){var m={};for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&o.indexOf(l)<0&&(m[l]=a[l]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,l=Object.getOwnPropertySymbols(a);y<l.length;y++)o.indexOf(l[y])<0&&Object.prototype.propertyIsEnumerable.call(a,l[y])&&(m[l[y]]=a[l[y]]);return m};const et=24,tt=4.5,nt="topRight",rt=a=>{let{children:o,prefixCls:m}=a;const l=(0,Ue.Z)(m),[y,x,O]=Oe(m,l);return y(S.createElement(B.JB,{classNames:{list:q()(x,O,l)}},o))},gt=(a,o)=>{let{prefixCls:m,key:l}=o;return S.createElement(rt,{prefixCls:m,key:l},a)},Ae=S.forwardRef((a,o)=>{const{top:m,bottom:l,prefixCls:y,getContainer:x,maxCount:O,rtl:k,onAllRemoved:P,stack:E,duration:I}=a,{getPrefixCls:ee,getPopupContainer:M,notification:A,direction:G}=(0,S.useContext)(ge.E_),[,W]=(0,ht.ZP)(),H=y||ee("notification"),V=ne=>pt(ne,m??et,l??et),U=()=>q()({[`${H}-rtl`]:k??G==="rtl"}),se=()=>Ie(H),[Z,ve]=(0,B.lm)({prefixCls:H,style:V,className:U,motion:se,closable:!0,closeIcon:Se(H),duration:I??tt,getContainer:()=>(x==null?void 0:x())||(M==null?void 0:M())||document.body,maxCount:O,onAllRemoved:P,renderNotifications:gt,stack:E===!1?!1:{threshold:typeof E=="object"?E==null?void 0:E.threshold:void 0,offset:8,gap:W.margin}});return S.useImperativeHandle(o,()=>Object.assign(Object.assign({},Z),{prefixCls:H,notification:A})),ve});function Ze(a){const o=S.useRef(null),m=(0,ie.ln)("Notification");return[S.useMemo(()=>{const y=P=>{var E;if(!o.current)return;const{open:I,prefixCls:ee,notification:M}=o.current,A=`${ee}-notice`,{message:G,description:W,icon:H,type:V,btn:U,className:se,style:Z,role:ve="alert",closeIcon:ne,closable:Fe}=P,Be=te(P,["message","description","icon","type","btn","className","style","role","closeIcon","closable"]),ze=Se(A,typeof ne<"u"?ne:M==null?void 0:M.closeIcon);return I(Object.assign(Object.assign({placement:(E=a==null?void 0:a.placement)!==null&&E!==void 0?E:nt},Be),{content:S.createElement(be,{prefixCls:A,icon:H,type:V,message:G,description:W,btn:U,role:ve}),className:q()(V&&`${A}-${V}`,se,M==null?void 0:M.className),style:Object.assign(Object.assign({},M==null?void 0:M.style),Z),closeIcon:ze,closable:Fe??!!ze}))},O={open:y,destroy:P=>{var E,I;P!==void 0?(E=o.current)===null||E===void 0||E.close(P):(I=o.current)===null||I===void 0||I.destroy()}};return["success","info","warning","error"].forEach(P=>{O[P]=E=>y(Object.assign(Object.assign({},E),{type:P}))}),O},[]),S.createElement(Ae,Object.assign({key:"notification-holder"},a,{ref:o}))]}function at(a){return Ze(a)}let D=null,Te=a=>a(),de=[],fe={};function ot(){const{getContainer:a,rtl:o,maxCount:m,top:l,bottom:y}=fe,x=(a==null?void 0:a())||document.body;return{getContainer:()=>x,rtl:o,maxCount:m,top:l,bottom:y}}const yt=S.forwardRef((a,o)=>{const{notificationConfig:m,sync:l}=a,{getPrefixCls:y}=(0,S.useContext)(ge.E_),x=fe.prefixCls||y("notification"),O=(0,S.useContext)(p.J),[k,P]=Ze(Object.assign(Object.assign(Object.assign({},m),{prefixCls:x}),O.notification));return S.useEffect(l,[]),S.useImperativeHandle(o,()=>{const E=Object.assign({},k);return Object.keys(E).forEach(I=>{E[I]=function(){return l(),k[I].apply(k,arguments)}}),{instance:E,sync:l}}),P}),Ct=S.forwardRef((a,o)=>{const[m,l]=S.useState(ot),y=()=>{l(ot)};S.useEffect(y,[]);const x=(0,ye.w6)(),O=x.getRootPrefixCls(),k=x.getIconPrefixCls(),P=x.getTheme(),E=S.createElement(yt,{ref:o,sync:y,notificationConfig:m});return S.createElement(ye.ZP,{prefixCls:O,iconPrefixCls:k,theme:P},x.holderRender?x.holderRender(E):E)});function Re(){if(!D){const a=document.createDocumentFragment(),o={fragment:a};D=o,Te(()=>{(0,T.s)(S.createElement(Ct,{ref:m=>{const{instance:l,sync:y}=m||{};Promise.resolve().then(()=>{!o.instance&&l&&(o.instance=l,o.sync=y,Re())})}}),a)});return}D.instance&&(de.forEach(a=>{switch(a.type){case"open":{Te(()=>{D.instance.open(Object.assign(Object.assign({},fe),a.config))});break}case"destroy":Te(()=>{D==null||D.instance.destroy(a.key)});break}}),de=[])}function xt(a){fe=Object.assign(Object.assign({},fe),a),Te(()=>{var o;(o=D==null?void 0:D.sync)===null||o===void 0||o.call(D)})}function it(a){const o=(0,ye.w6)();de.push({type:"open",config:a}),Re()}const St=a=>{de.push({type:"destroy",key:a}),Re()},bt=["success","info","warning","error"],Le={open:it,destroy:St,config:xt,useNotification:at,_InternalPanelDoNotUseOrYouWillBeFired:qe};bt.forEach(a=>{Le[a]=o=>it(Object.assign(Object.assign({},o),{type:a}))});const Zt=()=>{};let Rt=null,Lt=null;var Pt=Le}}]);
