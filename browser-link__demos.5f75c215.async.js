(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[9678],{36034:function(P,o,e){"use strict";var l=e(80284),s=e(28484),d=e(55250),i=e(46060),n=e(50959),u=e(82187),c=e.n(u),f=e(52869),v=e(73877),_=e(59633),a=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],t=n.forwardRef(function(r,E){var h=r.className,M=r.component,m=r.viewBox,g=r.spin,C=r.rotate,y=r.tabIndex,U=r.onClick,x=r.children,p=(0,i.Z)(r,a),b=n.useRef(),W=(0,f.x1)(b,E);(0,_.Kp)(!!(M||x),"Should have `component` prop or `children`."),(0,_.C3)(b);var B=n.useContext(v.Z),L=B.prefixCls,T=L===void 0?"anticon":L,j=B.rootClassName,D=c()(j,T,h),R=c()((0,d.Z)({},"".concat(T,"-spin"),!!g)),A=C?{msTransform:"rotate(".concat(C,"deg)"),transform:"rotate(".concat(C,"deg)")}:void 0,O=(0,s.Z)((0,s.Z)({},_.vD),{},{className:R,style:A,viewBox:m});m||delete O.viewBox;var S=function(){return M?n.createElement(M,O,x):x?((0,_.Kp)(!!m||n.Children.count(x)===1&&n.isValidElement(x)&&n.Children.only(x).type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),n.createElement("svg",(0,l.Z)({},O,{viewBox:m}),x)):null},I=y;return I===void 0&&U&&(I=-1),n.createElement("span",(0,l.Z)({role:"img"},p,{ref:W,tabIndex:I,onClick:U,className:D}),S())});t.displayName="AntdIcon",o.Z=t},38555:function(P,o,e){"use strict";e.d(o,{Z:function(){return f}});var l=e(80284),s=e(50959),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"},i=d,n=e(97736),u=function(_,a){return s.createElement(n.Z,(0,l.Z)({},_,{ref:a,icon:i}))},c=s.forwardRef(u),f=c},5015:function(P,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var l=e(50959),s=e(49982),d=e(11527);function i(f){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(_){return typeof _}:i=function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},i(f)}var n=function(v){if(!["undefined","string"].includes(i(v.idPrefix)))throw new Error('Invalid value passed for prop "idPrefix", expected undefined or string, got '.concat(i(v.idPrefix)));return v},u=function(v){var _=n(v),a=_.children,t=_.idPrefix,r=t===void 0?"i":t,E=(0,l.useRef)(0),h=(0,l.useCallback)(function(){return"".concat(r).concat(E.current++)},[]);return(0,d.jsx)(s.UniqueIdGeneratorContextProvider,{value:h,children:a})},c=u;o.default=c},49982:function(P,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.UniqueIdGeneratorContextProvider=o.useUniqueIdGenerator=void 0;var l=e(50959),s=function(){var u=0;return function(){return"i".concat(u++)}}(),d=(0,l.createContext)(s),i=function(){return(0,l.useContext)(d)};o.useUniqueIdGenerator=i;var n=d.Provider;o.UniqueIdGeneratorContextProvider=n},97971:function(P,o,e){"use strict";var l;l={value:!0},Object.defineProperty(o,"uB",{enumerable:!0,get:function(){return s.default}}),l={enumerable:!0,get:function(){return d.default}};var s=i(e(63916)),d=i(e(5015));function i(n){return n&&n.__esModule?n:{default:n}}},63916:function(P,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var l=e(50959),s=e(49982);function d(a,t){return f(a)||c(a,t)||n(a,t)||i()}function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n(a,t){if(a){if(typeof a=="string")return u(a,t);var r=Object.prototype.toString.call(a).slice(8,-1);if(r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set")return Array.from(a);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(a,t)}}function u(a,t){(t==null||t>a.length)&&(t=a.length);for(var r=0,E=new Array(t);r<t;r++)E[r]=a[r];return E}function c(a,t){var r=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(r!=null){var E=[],h=!0,M=!1,m,g;try{for(r=r.call(a);!(h=(m=r.next()).done)&&(E.push(m.value),!(t&&E.length===t));h=!0);}catch(C){M=!0,g=C}finally{try{!h&&r.return!=null&&r.return()}finally{if(M)throw g}}return E}}function f(a){if(Array.isArray(a))return a}var v=function(){var t=(0,s.useUniqueIdGenerator)(),r=(0,l.useState)(t),E=d(r,1),h=E[0];return h},_=v;o.default=_},8623:function(P,o,e){"use strict";e.r(o);var l=e(16416),s=e(23202),d=e(11527),i=function(){return(0,d.jsx)(l.V,{chain:s.ny,address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",target:"_blank",rel:"noopener noreferrer"})};o.default=i},16765:function(P,o,e){"use strict";e.r(o);var l=e(16416),s=e(23202),d=e(61255),i=e(11527),n=function(){return(0,i.jsx)(d.Z,{direction:"vertical",children:(0,i.jsx)(l.V,{ellipsis:!0,address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",href:"https://etherscan.io/address/3ea2cfd153b8d8505097b81c87c11f5d05097c18",chain:s.ny,iconStyle:{fontSize:40,background:"#eee",boxShadow:"0 0 5px #999",padding:8,borderRadius:"50%"},target:"_blank",rel:"noopener noreferrer"})})};o.default=n},80390:function(P,o,e){"use strict";e.r(o);var l=e(38555),s=e(16416),d=e(11527),i=function(){return(0,d.jsx)(s.V,{icon:(0,d.jsx)(l.Z,{}),address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",name:"Custom name",target:"_blank",rel:"noopener noreferrer"})};o.default=i},71391:function(P,o,e){"use strict";e.r(o);var l=e(16416),s=e(11527),d=function(){return(0,s.jsx)("div",{style:{fontSize:64},children:(0,s.jsx)(l.V,{iconOnly:!0,address:"3ea2cfd153b8d8505097b81c87c11f5d05097c18",target:"_blank",rel:"noopener noreferrer"})})};o.default=d},63754:function(P,o,e){"use strict";e.d(o,{k:function(){return U}});var l=e(31759),s=e.n(l),d=e(50959),i=e(35591),n=e(61255),u=e(45086),c=e(35412),f=e(82187),v=e.n(f),_=e(84717),a=e(53614),t=e(44977),r=e(26068),E=e.n(r),h=e(82092),M=e.n(h),m=e(97857),g=function(p){return M()({},p.componentCls,{wordBreak:"break-all"})};function C(x){return(0,m.Xj)("Address",function(p){var b=E()(E()({},p),{},{componentCls:".".concat(x)});return[g(b)]})}var y=e(11527),U=function(p){var b=p.ellipsis,W=p.addressPrefix,B=p.address,L=p.copyable,T=L===void 0?!1:L,j=p.tooltip,D=j===void 0?!0:j,R=p.format,A=R===void 0?!1:R,O=p.children,S=p.locale,I=(0,d.useContext)(i.ZP.ConfigContext),G=I.getPrefixCls,K=(0,_.Z)(),$=K.addressPrefix,w=G("web3-address"),V=C(w),N=V.wrapSSR,J=V.hashId,Q=(0,a.Z)("Address",S),z=Q.messages,Y=(0,d.useMemo)(function(){return typeof A=="function"?A:A?t.Tg:function(F){return F}},[A]),q=!!b,k=s()(b)!=="object"?{headClip:6,tailClip:4}:b,H=k.headClip,ee=H===void 0?6:H,X=k.tailClip,ne=X===void 0?4:X;if(!B)return null;var Z=(0,t.C_)(B,W,$),te=function(){return(0,d.isValidElement)(D)||typeof D=="string"?D:D&&Z},re=Y(Z);return N((0,y.jsx)(n.Z,{className:v()(w,J),children:(0,y.jsx)(u.Z.Text,{copyable:T?{text:Z,tooltips:[z.copyTips,z.copiedTips]}:!1,children:(0,y.jsx)(c.Z,{title:te(),children:O??(q?"".concat(Z.slice(0,ee),"...").concat(Z.slice(-ne)):re)})})}))}},16416:function(P,o,e){"use strict";e.d(o,{V:function(){return h},t:function(){return E}});var l=e(26068),s=e.n(l),d=e(67825),i=e.n(d),n=e(50959),u=e(23202),c=e(35412),f=e(61255),v=e(63754),_=e(84717),a=e(44977),t=e(11527),r=["icon","iconStyle","ellipsis","address","addressPrefix","href","type","chain","name","iconOnly"],E=function(m){var g,C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"address",y=arguments.length>2?arguments[2]:void 0;if(!y||!((g=y.browser)!==null&&g!==void 0&&g.getBrowserLink))throw new Error("getBrowserLink unsupported chain ".concat(y==null?void 0:y.id));return y.browser.getBrowserLink(m,C)},h=function(m){var g,C=m.icon,y=m.iconStyle,U=m.ellipsis,x=m.address,p=m.addressPrefix,b=m.href,W=m.type,B=m.chain,L=m.name,T=m.iconOnly,j=T===void 0?!1:T,D=i()(m,r),R=(0,_.Z)({chain:B}),A=R.chain,O=A===void 0?u.ny:A,S=R.addressPrefix,I=C||(O==null||(g=O.browser)===null||g===void 0?void 0:g.icon)||(O==null?void 0:O.icon),G=n.isValidElement(I)?n.cloneElement(I,{style:s()(s()({},y),I.props.style)}):I;if(!x)return console.error('"address" property of the "BrowserLink" is required'),null;var K=(0,a.C_)(x,p,S),$=b??E(K,W,O),w=function(N){return(0,t.jsx)(c.Z,{title:K,children:(0,t.jsx)("a",s()(s()({href:$,style:{display:"inline-block"}},D),{},{children:(0,t.jsxs)(f.Z,{size:"small",children:[G,!j&&N]})}))})};return w(L||(0,t.jsx)(v.k,{ellipsis:U,address:K,tooltip:!1}))}},53614:function(P,o,e){"use strict";e.d(o,{Z:function(){return n}});var l=e(26068),s=e.n(l),d=e(50959),i=e(9537);function n(u,c){var f,v=d.useContext(i.E),_=s()(s()(s()({},v.defaultLocale[u]),v==null||(f=v.locale)===null||f===void 0?void 0:f[u]),c);return{messages:_,getMessage:function(t,r){return r?t.replace(/\{([\w\.]+)\}/g,function(E,h){return r[h]}):t}}}},97857:function(P,o,e){"use strict";e.d(o,{Xj:function(){return _}});var l=e(26068),s=e.n(l),d=e(50959),i=e(63173),n=e(70735),u=e(35591),c=n.Z.useToken,f=function(t,r){return new TinyColor(t).setAlpha(r).toRgbString()},v=function(t,r){var E=new TinyColor(t);return E.lighten(r).toHexString()};function _(a,t){var r=c(),E=r.theme,h=r.token,M=r.hashId,m=(0,d.useContext)(u.ZP.ConfigContext),g=m.getPrefixCls,C=s()(s()({},h),{},{web3ComponentsCls:".".concat(g("web3")),antCls:".".concat(g())});return{wrapSSR:(0,i.useStyleRegister)({theme:E,token:C,hashId:M,path:[a]},function(){return t(C)}),hashId:M}}},44977:function(P,o,e){"use strict";e.d(o,{C_:function(){return l},Tg:function(){return s},az:function(){return d}});var l=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",u=arguments.length>1?arguments[1]:void 0,c=arguments.length>2?arguments[2]:void 0,f=void 0;return u===void 0&&c===void 0?f="0x":u!==void 0?f=u===!1?"":u:c!==void 0&&(f=c===!1?"":c),f?n.startsWith(f)?n:"".concat(f).concat(n):n},s=function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:4,c=[],f=n.startsWith("0x"),v=f?n.slice(2):n,_=0;_<v.length;_+=u){var a=v.slice(_,_+u);c.push(a)}var t=c.join(" ");return f?"0x ".concat(t):t},d=function(n,u,c){var f=typeof n=="bigint"?n:BigInt(n),v=BigInt(Math.pow(10,u)),_=f/v,a=f%v;if(a===0n&&c===void 0)return"".concat(_);var t=a.toString().padStart(u,"0");return c===void 0?"".concat(_,".").concat(t.replace(/0+$/,"")):(t=t.substring(0,c).padEnd(c,"0"),"".concat(_,".").concat(t))}},67825:function(P,o,e){var l=e(64382);function s(d,i){if(d==null)return{};var n=l(d,i),u,c;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(d);for(c=0;c<f.length;c++)u=f[c],!(i.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(d,u)&&(n[u]=d[u])}return n}P.exports=s,P.exports.__esModule=!0,P.exports.default=P.exports},64382:function(P){function o(e,l){if(e==null)return{};var s={},d=Object.keys(e),i,n;for(n=0;n<d.length;n++)i=d[n],!(l.indexOf(i)>=0)&&(s[i]=e[i]);return s}P.exports=o,P.exports.__esModule=!0,P.exports.default=P.exports}}]);
