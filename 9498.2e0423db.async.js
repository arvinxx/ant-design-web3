"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[9498],{84353:function(Ge,_,t){t.d(_,{Z:function(){return G}});var v=t(80284),n=t(50959),Y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},d=Y,$=t(97736),se=function(N,h){return n.createElement($.Z,(0,v.Z)({},N,{ref:h,icon:d}))},F=n.forwardRef(se),G=F},76099:function(Ge,_,t){t.d(_,{Z:function(){return G}});var v=t(80284),n=t(50959),Y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},d=Y,$=t(97736),se=function(N,h){return n.createElement($.Z,(0,v.Z)({},N,{ref:h,icon:d}))},F=n.forwardRef(se),G=F},45998:function(Ge,_,t){t.d(_,{Z:function(){return G}});var v=t(80284),n=t(50959),Y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"},d=Y,$=t(97736),se=function(N,h){return n.createElement($.Z,(0,v.Z)({},N,{ref:h,icon:d}))},F=n.forwardRef(se),G=F},77324:function(Ge,_,t){var v=t(50959),n=t(93785),Y=t(39743),d=t(94666);function $(F){return!!(F&&F.then)}const se=F=>{const{type:G,children:L,prefixCls:N,buttonProps:h,close:I,autoFocus:D,emitEvent:w,isSilent:de,quitOnNullishReturnValue:Ne,actionFn:ae}=F,X=v.useRef(!1),Te=v.useRef(null),[Ae,We]=(0,n.Z)(!1),je=function(){I==null||I.apply(void 0,arguments)};v.useEffect(()=>{let me=null;return D&&(me=setTimeout(()=>{var ee;(ee=Te.current)===null||ee===void 0||ee.focus()})),()=>{me&&clearTimeout(me)}},[]);const Be=me=>{$(me)&&(We(!0),me.then(function(){We(!1,!0),je.apply(void 0,arguments),X.current=!1},ee=>{if(We(!1,!0),X.current=!1,!(de!=null&&de()))return Promise.reject(ee)}))},Le=me=>{if(X.current)return;if(X.current=!0,!ae){je();return}let ee;if(w){if(ee=ae(me),Ne&&!$(ee)){X.current=!1,je(me);return}}else if(ae.length)ee=ae(I),X.current=!1;else if(ee=ae(),!ee){je();return}Be(ee)};return v.createElement(Y.ZP,Object.assign({},(0,d.nx)(G),{onClick:Le,loading:Ae,prefixCls:N},h,{ref:Te}),L)};_.Z=se},98502:function(Ge,_,t){t.d(_,{i:function(){return $}});var v=t(50959),n=t(91425),Y=t(35591),d=t(91852);function $(F){return G=>v.createElement(Y.ZP,{theme:{token:{motion:!1,zIndexPopupBase:0}}},v.createElement(F,Object.assign({},G)))}const se=(F,G,L,N)=>$(I=>{const{prefixCls:D,style:w}=I,de=v.useRef(null),[Ne,ae]=v.useState(0),[X,Te]=v.useState(0),[Ae,We]=(0,n.Z)(!1,{value:I.open}),{getPrefixCls:je}=v.useContext(d.E_),Be=je(G||"select",D);v.useEffect(()=>{if(We(!0),typeof ResizeObserver<"u"){const ee=new ResizeObserver(ke=>{const He=ke[0].target;ae(He.offsetHeight+8),Te(He.offsetWidth)}),en=setInterval(()=>{var ke;const He=L?`.${L(Be)}`:`.${Be}-dropdown`,Ye=(ke=de.current)===null||ke===void 0?void 0:ke.querySelector(He);Ye&&(clearInterval(en),ee.observe(Ye))},10);return()=>{clearInterval(en),ee.disconnect()}}},[]);let Le=Object.assign(Object.assign({},I),{style:Object.assign(Object.assign({},w),{margin:0}),open:Ae,visible:Ae,getPopupContainer:()=>de.current});N&&(Le=N(Le));const me={paddingBottom:Ne,position:"relative",minWidth:X};return v.createElement("div",{ref:de,style:me},v.createElement(F,Object.assign({},Le)))});_.Z=se},96763:function(Ge,_,t){t.d(_,{Z:function(){return G},w:function(){return d}});var v=t(50959),n=t(79407),Y=t(54020);function d(L){if(L)return{closable:L.closable,closeIcon:L.closeIcon}}function $(L){const{closable:N,closeIcon:h}=L||{};return v.useMemo(()=>{if(!N&&(N===!1||h===!1||h===null))return!1;if(N===void 0&&h===void 0)return null;let I={closeIcon:typeof h!="boolean"&&h!==null?h:void 0};return N&&typeof N=="object"&&(I=Object.assign(Object.assign({},I),N)),I},[N,h])}function se(){const L={};for(var N=arguments.length,h=new Array(N),I=0;I<N;I++)h[I]=arguments[I];return h.forEach(D=>{D&&Object.keys(D).forEach(w=>{D[w]!==void 0&&(L[w]=D[w])})}),L}const F={};function G(L,N){let h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:F;const I=$(L),D=$(N),w=v.useMemo(()=>Object.assign({closeIcon:v.createElement(n.Z,null)},h),[h]),de=v.useMemo(()=>I===!1?!1:I?se(w,D,I):D===!1?!1:D?se(w,D):w.closable?w:!1,[I,D,w]);return v.useMemo(()=>{if(de===!1)return[!1,null];const{closeIconRender:Ne}=w,{closeIcon:ae}=de;let X=ae;if(X!=null){Ne&&(X=Ne(ae));const Te=(0,Y.Z)(de,!0);Object.keys(Te).length&&(X=v.isValidElement(X)?v.cloneElement(X,Te):v.createElement("span",Object.assign({},Te),X))}return[!0,X]},[de,w])}},54360:function(Ge,_,t){t.d(_,{J:function(){return n}});var v=t(50959);const n=v.createContext({}),Y=v.createContext({message:{},notification:{},modal:{}});var d=null},73756:function(Ge,_,t){t.d(_,{ZP:function(){return y}});var v=t(6399),n=t(50959),Y=t(83473),d=t(54360),$=t(91852),se=t(35591),F=t(84353),G=t(15209),L=t(76099),N=t(45998),h=t(41349),I=t(82187),D=t.n(I),w=t(73062),de=t(7838),Ne=t(63173),ae=t(29918),X=t(23603),Te=t(49507),Ae=t(65626);const We=l=>{const{componentCls:o,iconCls:c,boxShadow:a,colorText:f,colorSuccess:O,colorError:S,colorWarning:R,colorInfo:oe,fontSizeLG:T,motionEaseInOutCirc:K,motionDurationSlow:ie,marginXS:le,paddingXS:Ie,borderRadiusLG:he,zIndexPopup:ue,contentPadding:ge,contentBg:we}=l,Xe=`${o}-notice`,Fe=new Ne.Keyframes("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:Ie,transform:"translateY(0)",opacity:1}}),$e=new Ne.Keyframes("MessageMoveOut",{"0%":{maxHeight:l.height,padding:Ie,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),qe={padding:Ie,textAlign:"center",[`${o}-custom-content > ${c}`]:{verticalAlign:"text-bottom",marginInlineEnd:le,fontSize:T},[`${Xe}-content`]:{display:"inline-block",padding:ge,background:we,borderRadius:he,boxShadow:a,pointerEvents:"all"},[`${o}-success > ${c}`]:{color:O},[`${o}-error > ${c}`]:{color:S},[`${o}-warning > ${c}`]:{color:R},[`${o}-info > ${c},
      ${o}-loading > ${c}`]:{color:oe}};return[{[o]:Object.assign(Object.assign({},(0,X.Wf)(l)),{color:f,position:"fixed",top:le,width:"100%",pointerEvents:"none",zIndex:ue,[`${o}-move-up`]:{animationFillMode:"forwards"},[`
        ${o}-move-up-appear,
        ${o}-move-up-enter
      `]:{animationName:Fe,animationDuration:ie,animationPlayState:"paused",animationTimingFunction:K},[`
        ${o}-move-up-appear${o}-move-up-appear-active,
        ${o}-move-up-enter${o}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${o}-move-up-leave`]:{animationName:$e,animationDuration:ie,animationPlayState:"paused",animationTimingFunction:K},[`${o}-move-up-leave${o}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[o]:{[`${Xe}-wrapper`]:Object.assign({},qe)}},{[`${o}-notice-pure-panel`]:Object.assign(Object.assign({},qe),{padding:0,textAlign:"start"})}]},je=l=>({zIndexPopup:l.zIndexPopupBase+ae.u6+10,contentBg:l.colorBgElevated,contentPadding:`${(l.controlHeightLG-l.fontSize*l.lineHeight)/2}px ${l.paddingSM}px`});var Be=(0,Te.I$)("Message",l=>{const o=(0,Ae.TS)(l,{height:150});return[We(o)]},je),Le=function(l,o){var c={};for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&o.indexOf(a)<0&&(c[a]=l[a]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,a=Object.getOwnPropertySymbols(l);f<a.length;f++)o.indexOf(a[f])<0&&Object.prototype.propertyIsEnumerable.call(l,a[f])&&(c[a[f]]=l[a[f]]);return c};const me={info:n.createElement(N.Z,null),success:n.createElement(F.Z,null),error:n.createElement(G.Z,null),warning:n.createElement(L.Z,null),loading:n.createElement(h.Z,null)},ee=l=>{let{prefixCls:o,type:c,icon:a,children:f}=l;return n.createElement("div",{className:D()(`${o}-custom-content`,`${o}-${c}`)},a||me[c],n.createElement("span",null,f))};var ke=l=>{const{prefixCls:o,className:c,type:a,icon:f,content:O}=l,S=Le(l,["prefixCls","className","type","icon","content"]),{getPrefixCls:R}=n.useContext($.E_),oe=o||R("message"),T=(0,de.Z)(oe),[K,ie,le]=Be(oe,T);return K(n.createElement(w.qX,Object.assign({},S,{prefixCls:oe,className:D()(c,ie,`${oe}-notice-pure-panel`,le,T),eventKey:"pure",duration:null,content:n.createElement(ee,{prefixCls:oe,type:a,icon:f},O)})))},He=t(79407),Ye=t(61252);function on(l,o){return{motionName:o??`${l}-move-up`}}function Je(l){let o;const c=new Promise(f=>{o=l(()=>{f(!0)})}),a=()=>{o==null||o()};return a.then=(f,O)=>c.then(f,O),a.promise=c,a}var ln=function(l,o){var c={};for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&o.indexOf(a)<0&&(c[a]=l[a]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,a=Object.getOwnPropertySymbols(l);f<a.length;f++)o.indexOf(a[f])<0&&Object.prototype.propertyIsEnumerable.call(l,a[f])&&(c[a[f]]=l[a[f]]);return c};const tn=8,x=3,P=l=>{let{children:o,prefixCls:c}=l;const a=(0,de.Z)(c),[f,O,S]=Be(c,a);return f(n.createElement(w.JB,{classNames:{list:D()(O,S,a)}},o))},ne=(l,o)=>{let{prefixCls:c,key:a}=o;return n.createElement(P,{prefixCls:c,key:a},l)},A=n.forwardRef((l,o)=>{const{top:c,prefixCls:a,getContainer:f,maxCount:O,duration:S=x,rtl:R,transitionName:oe,onAllRemoved:T}=l,{getPrefixCls:K,getPopupContainer:ie,message:le,direction:Ie}=n.useContext($.E_),he=a||K("message"),ue=()=>({left:"50%",transform:"translateX(-50%)",top:c??tn}),ge=()=>D()({[`${he}-rtl`]:R??Ie==="rtl"}),we=()=>on(he,oe),Xe=n.createElement("span",{className:`${he}-close-x`},n.createElement(He.Z,{className:`${he}-close-icon`})),[Fe,$e]=(0,w.lm)({prefixCls:he,style:ue,className:ge,motion:we,closable:!1,closeIcon:Xe,duration:S,getContainer:()=>(f==null?void 0:f())||(ie==null?void 0:ie())||document.body,maxCount:O,onAllRemoved:T,renderNotifications:ne});return n.useImperativeHandle(o,()=>Object.assign(Object.assign({},Fe),{prefixCls:he,message:le})),$e});let W=0;function re(l){const o=n.useRef(null),c=(0,Ye.ln)("Message");return[n.useMemo(()=>{const f=T=>{var K;(K=o.current)===null||K===void 0||K.close(T)},O=T=>{if(!o.current){const De=()=>{};return De.then=()=>{},De}const{open:K,prefixCls:ie,message:le}=o.current,Ie=`${ie}-notice`,{content:he,icon:ue,type:ge,key:we,className:Xe,style:Fe,onClose:$e}=T,qe=ln(T,["content","icon","type","key","className","style","onClose"]);let Ue=we;return Ue==null&&(W+=1,Ue=`antd-message-${W}`),Je(De=>(K(Object.assign(Object.assign({},qe),{key:Ue,content:n.createElement(ee,{prefixCls:ie,type:ge,icon:ue},he),placement:"top",className:D()(ge&&`${Ie}-${ge}`,Xe,le==null?void 0:le.className),style:Object.assign(Object.assign({},le==null?void 0:le.style),Fe),onClose:()=>{$e==null||$e(),De()}})),()=>{f(Ue)}))},R={open:O,destroy:T=>{var K;T!==void 0?f(T):(K=o.current)===null||K===void 0||K.destroy()}};return["info","success","warning","error","loading"].forEach(T=>{const K=(ie,le,Ie)=>{let he;ie&&typeof ie=="object"&&"content"in ie?he=ie:he={content:ie};let ue,ge;typeof le=="function"?ge=le:(ue=le,ge=Ie);const we=Object.assign(Object.assign({onClose:ge,duration:ue},he),{type:T});return O(we)};R[T]=K}),R},[]),n.createElement(A,Object.assign({key:"message-holder"},l,{ref:o}))]}function ve(l){return re(l)}let k=null,te=l=>l(),J=[],ye={};function Me(){const{getContainer:l,duration:o,rtl:c,maxCount:a,top:f}=ye,O=(l==null?void 0:l())||document.body;return{getContainer:()=>O,duration:o,rtl:c,maxCount:a,top:f}}const q=n.forwardRef((l,o)=>{const{messageConfig:c,sync:a}=l,{getPrefixCls:f}=(0,n.useContext)($.E_),O=ye.prefixCls||f("message"),S=(0,n.useContext)(d.J),[R,oe]=re(Object.assign(Object.assign(Object.assign({},c),{prefixCls:O}),S.message));return n.useImperativeHandle(o,()=>{const T=Object.assign({},R);return Object.keys(T).forEach(K=>{T[K]=function(){return a(),R[K].apply(R,arguments)}}),{instance:T,sync:a}}),oe}),ce=n.forwardRef((l,o)=>{const[c,a]=n.useState(Me),f=()=>{a(Me)};n.useEffect(f,[]);const O=(0,se.w6)(),S=O.getRootPrefixCls(),R=O.getIconPrefixCls(),oe=O.getTheme(),T=n.createElement(q,{ref:o,sync:f,messageConfig:c});return n.createElement(se.ZP,{prefixCls:S,iconPrefixCls:R,theme:oe},O.holderRender?O.holderRender(T):T)});function be(){if(!k){const l=document.createDocumentFragment(),o={fragment:l};k=o,te(()=>{(0,Y.s)(n.createElement(ce,{ref:c=>{const{instance:a,sync:f}=c||{};Promise.resolve().then(()=>{!o.instance&&a&&(o.instance=a,o.sync=f,be())})}}),l)});return}k.instance&&(J.forEach(l=>{const{type:o,skipped:c}=l;if(!c)switch(o){case"open":{te(()=>{const a=k.instance.open(Object.assign(Object.assign({},ye),l.config));a==null||a.then(l.resolve),l.setCloseFn(a)});break}case"destroy":te(()=>{k==null||k.instance.destroy(l.key)});break;default:te(()=>{var a;const f=(a=k.instance)[o].apply(a,(0,v.Z)(l.args));f==null||f.then(l.resolve),l.setCloseFn(f)})}}),J=[])}function Ze(l){ye=Object.assign(Object.assign({},ye),l),te(()=>{var o;(o=k==null?void 0:k.sync)===null||o===void 0||o.call(k)})}function Q(l){const o=Je(c=>{let a;const f={type:"open",config:l,resolve:c,setCloseFn:O=>{a=O}};return J.push(f),()=>{a?te(()=>{a()}):f.skipped=!0}});return be(),o}function ze(l,o){const c=(0,se.w6)(),a=Je(f=>{let O;const S={type:l,args:o,resolve:f,setCloseFn:R=>{O=R}};return J.push(S),()=>{O?te(()=>{O()}):S.skipped=!0}});return be(),a}const Re=l=>{J.push({type:"destroy",key:l}),be()},Oe=["success","info","warning","error","loading"],pe={open:Q,destroy:Re,config:Ze,useMessage:ve,_InternalPanelDoNotUseOrYouWillBeFired:ke};Oe.forEach(l=>{pe[l]=function(){for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return ze(l,c)}});const U=()=>{};let xe=null,b=null;var y=pe},47083:function(Ge,_,t){t.d(_,{Z:function(){return an}});var v=t(6399),n=t(50959),Y=t(83473),d=t(91852),$=t(35591),se=t(84353),F=t(15209),G=t(76099),L=t(45998),N=t(82187),h=t.n(N),I=t(29918),D=t(58105),w=t(17671),de=t(58586),Ne=t(77324);const ae=n.createContext({}),{Provider:X}=ae;var Ae=()=>{const{autoFocusButton:e,cancelButtonProps:r,cancelTextLocale:u,isSilent:s,mergedOkCancel:i,rootPrefixCls:C,close:M,onCancel:E,onConfirm:g}=(0,n.useContext)(ae);return i?n.createElement(Ne.Z,{isSilent:s,actionFn:E,close:function(){M==null||M.apply(void 0,arguments),g==null||g(!1)},autoFocus:e==="cancel",buttonProps:r,prefixCls:`${C}-btn`},u):null},je=()=>{const{autoFocusButton:e,close:r,isSilent:u,okButtonProps:s,rootPrefixCls:i,okTextLocale:C,okType:M,onConfirm:E,onOk:g}=(0,n.useContext)(ae);return n.createElement(Ne.Z,{isSilent:u,type:M||"primary",actionFn:g,close:function(){r==null||r.apply(void 0,arguments),E==null||E(!0)},autoFocus:e==="ok",buttonProps:s,prefixCls:`${i}-btn`},C)},Be=t(79407),Le=t(2477),me=t(96763),ee=t(79670);const en=()=>(0,ee.Z)()&&window.document.documentElement;var ke=t(99221),He=t(7838),Ye=t(11913),on=t(90372),Je=t(94289),ln=t(47721),tn=t(39743),P=()=>{const{cancelButtonProps:e,cancelTextLocale:r,onCancel:u}=(0,n.useContext)(ae);return n.createElement(tn.ZP,Object.assign({onClick:u},e),r)},ne=t(94666),W=()=>{const{confirmLoading:e,okButtonProps:r,okType:u,okTextLocale:s,onOk:i}=(0,n.useContext)(ae);return n.createElement(tn.ZP,Object.assign({},(0,ne.nx)(u),{loading:e,onClick:i},r),s)},re=t(29872);function ve(e,r){return n.createElement("span",{className:`${e}-close-x`},r||n.createElement(Be.Z,{className:`${e}-close-icon`}))}const k=e=>{const{okText:r,okType:u="primary",cancelText:s,confirmLoading:i,onOk:C,onCancel:M,okButtonProps:E,cancelButtonProps:g,footer:p}=e,[m]=(0,w.Z)("Modal",(0,re.A)()),j=r||(m==null?void 0:m.okText),V=s||(m==null?void 0:m.cancelText),Z={confirmLoading:i,okButtonProps:E,cancelButtonProps:g,okTextLocale:j,cancelTextLocale:V,okType:u,onOk:C,onCancel:M},Se=n.useMemo(()=>Z,(0,v.Z)(Object.values(Z)));let H;return typeof p=="function"||typeof p>"u"?(H=n.createElement(n.Fragment,null,n.createElement(P,null),n.createElement(W,null)),typeof p=="function"&&(H=p(H,{OkBtn:W,CancelBtn:P})),H=n.createElement(X,{value:Se},H)):H=p,n.createElement(ln.n,{disabled:!1},H)};var te=t(23711),J=function(e,r){var u={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(u[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)r.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(u[s[i]]=e[s[i]]);return u};let ye;const Me=e=>{ye={x:e.pageX,y:e.pageY},setTimeout(()=>{ye=null},100)};en()&&document.documentElement.addEventListener("click",Me,!0);var ce=e=>{var r;const{getPopupContainer:u,getPrefixCls:s,direction:i,modal:C}=n.useContext(d.E_),M=sn=>{const{onCancel:nn}=e;nn==null||nn(sn)},E=sn=>{const{onOk:nn}=e;nn==null||nn(sn)},{prefixCls:g,className:p,rootClassName:m,open:j,wrapClassName:V,centered:Z,getContainer:Se,focusTriggerAfterClose:H=!0,style:fe,visible:B,width:z=520,footer:Ke,classNames:Ee,styles:_e}=e,Ve=J(e,["prefixCls","className","rootClassName","open","wrapClassName","centered","getContainer","focusTriggerAfterClose","style","visible","width","footer","classNames","styles"]),Qe=s("modal",g),rn=s(),cn=(0,He.Z)(Qe),[un,fn,dn]=(0,te.ZP)(Qe,cn),mn=h()(V,{[`${Qe}-centered`]:!!Z,[`${Qe}-wrap-rtl`]:i==="rtl"}),vn=Ke!==null&&n.createElement(k,Object.assign({},e,{onOk:E,onCancel:M})),[Cn,gn]=(0,me.Z)((0,me.w)(e),(0,me.w)(C),{closable:!0,closeIcon:n.createElement(Be.Z,{className:`${Qe}-close-icon`}),closeIconRender:sn=>ve(Qe,sn)}),yn=(0,Je.H)(`.${Qe}-content`),[pn,xn]=(0,I.Cn)("Modal",Ve.zIndex);return un(n.createElement(on.BR,null,n.createElement(Ye.Ux,{status:!0,override:!0},n.createElement(ke.Z.Provider,{value:xn},n.createElement(Le.Z,Object.assign({width:z},Ve,{zIndex:pn,getContainer:Se===void 0?u:Se,prefixCls:Qe,rootClassName:h()(fn,m,dn,cn),footer:vn,visible:j??B,mousePosition:(r=Ve.mousePosition)!==null&&r!==void 0?r:ye,onClose:M,closable:Cn,closeIcon:gn,focusTriggerAfterClose:H,transitionName:(0,D.m)(rn,"zoom",e.transitionName),maskTransitionName:(0,D.m)(rn,"fade",e.maskTransitionName),className:h()(fn,p,C==null?void 0:C.className),style:Object.assign(Object.assign({},C==null?void 0:C.style),fe),classNames:Object.assign(Object.assign(Object.assign({},C==null?void 0:C.classNames),Ee),{wrapper:h()(mn,Ee==null?void 0:Ee.wrapper)}),styles:Object.assign(Object.assign({},C==null?void 0:C.styles),_e),panelRef:yn}))))))},be=t(63173),Ze=t(23603),Q=t(49507);const ze=e=>{const{componentCls:r,titleFontSize:u,titleLineHeight:s,modalConfirmIconSize:i,fontSize:C,lineHeight:M,modalTitleHeight:E,fontHeight:g,confirmBodyPadding:p}=e,m=`${r}-confirm`;return{[m]:{"&-rtl":{direction:"rtl"},[`${e.antCls}-modal-header`]:{display:"none"},[`${m}-body-wrapper`]:Object.assign({},(0,Ze.dF)()),[`&${r} ${r}-body`]:{padding:p},[`${m}-body`]:{display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${e.iconCls}`]:{flex:"none",fontSize:i,marginInlineEnd:e.confirmIconMarginInlineEnd,marginTop:e.calc(e.calc(g).sub(i).equal()).div(2).equal()},[`&-has-title > ${e.iconCls}`]:{marginTop:e.calc(e.calc(E).sub(i).equal()).div(2).equal()}},[`${m}-paragraph`]:{display:"flex",flexDirection:"column",flex:"auto",rowGap:e.marginXS},[`${e.iconCls} + ${m}-paragraph`]:{maxWidth:`calc(100% - ${(0,be.unit)(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`},[`${m}-title`]:{color:e.colorTextHeading,fontWeight:e.fontWeightStrong,fontSize:u,lineHeight:s},[`${m}-content`]:{color:e.colorText,fontSize:C,lineHeight:M},[`${m}-btns`]:{textAlign:"end",marginTop:e.confirmBtnsMarginTop,[`${e.antCls}-btn + ${e.antCls}-btn`]:{marginBottom:0,marginInlineStart:e.marginXS}}},[`${m}-error ${m}-body > ${e.iconCls}`]:{color:e.colorError},[`${m}-warning ${m}-body > ${e.iconCls},
        ${m}-confirm ${m}-body > ${e.iconCls}`]:{color:e.colorWarning},[`${m}-info ${m}-body > ${e.iconCls}`]:{color:e.colorInfo},[`${m}-success ${m}-body > ${e.iconCls}`]:{color:e.colorSuccess}}};var Re=(0,Q.bk)(["Modal","confirm"],e=>{const r=(0,te.B4)(e);return[ze(r)]},te.eh,{order:-1e3}),Oe=function(e,r){var u={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(u[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)r.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(u[s[i]]=e[s[i]]);return u};function Ce(e){const{prefixCls:r,icon:u,okText:s,cancelText:i,confirmPrefixCls:C,type:M,okCancel:E,footer:g,locale:p}=e,m=Oe(e,["prefixCls","icon","okText","cancelText","confirmPrefixCls","type","okCancel","footer","locale"]);let j=u;if(!u&&u!==null)switch(M){case"info":j=n.createElement(L.Z,null);break;case"success":j=n.createElement(se.Z,null);break;case"error":j=n.createElement(F.Z,null);break;default:j=n.createElement(G.Z,null)}const V=E??M==="confirm",Z=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",[Se]=(0,w.Z)("Modal"),H=p||Se,fe=s||(V?H==null?void 0:H.okText:H==null?void 0:H.justOkText),B=i||(H==null?void 0:H.cancelText),z=Object.assign({autoFocusButton:Z,cancelTextLocale:B,okTextLocale:fe,mergedOkCancel:V},m),Ke=n.useMemo(()=>z,(0,v.Z)(Object.values(z))),Ee=n.createElement(n.Fragment,null,n.createElement(Ae,null),n.createElement(je,null)),_e=e.title!==void 0&&e.title!==null,Ve=`${C}-body`;return n.createElement("div",{className:`${C}-body-wrapper`},n.createElement("div",{className:h()(Ve,{[`${Ve}-has-title`]:_e})},j,n.createElement("div",{className:`${C}-paragraph`},_e&&n.createElement("span",{className:`${C}-title`},e.title),n.createElement("div",{className:`${C}-content`},e.content))),g===void 0||typeof g=="function"?n.createElement(X,{value:Ke},n.createElement("div",{className:`${C}-btns`},typeof g=="function"?g(Ee,{OkBtn:je,CancelBtn:Ae}):Ee)):g,n.createElement(Re,{prefixCls:r}))}const pe=e=>{const{close:r,zIndex:u,afterClose:s,open:i,keyboard:C,centered:M,getContainer:E,maskStyle:g,direction:p,prefixCls:m,wrapClassName:j,rootPrefixCls:V,bodyStyle:Z,closable:Se=!1,closeIcon:H,modalRender:fe,focusTriggerAfterClose:B,onConfirm:z,styles:Ke}=e,Ee=`${m}-confirm`,_e=e.width||416,Ve=e.style||{},Qe=e.mask===void 0?!0:e.mask,rn=e.maskClosable===void 0?!1:e.maskClosable,cn=h()(Ee,`${Ee}-${e.type}`,{[`${Ee}-rtl`]:p==="rtl"},e.className),[,un]=(0,de.ZP)(),fn=n.useMemo(()=>u!==void 0?u:un.zIndexPopupBase+I.u6,[u,un]);return n.createElement(ce,{prefixCls:m,className:cn,wrapClassName:h()({[`${Ee}-centered`]:!!e.centered},j),onCancel:()=>{r==null||r({triggerCancel:!0}),z==null||z(!1)},open:i,title:"",footer:null,transitionName:(0,D.m)(V||"","zoom",e.transitionName),maskTransitionName:(0,D.m)(V||"","fade",e.maskTransitionName),mask:Qe,maskClosable:rn,style:Ve,styles:Object.assign({body:Z,mask:g},Ke),width:_e,zIndex:fn,afterClose:s,keyboard:C,centered:M,getContainer:E,closable:Se,closeIcon:H,modalRender:fe,focusTriggerAfterClose:B},n.createElement(Ce,Object.assign({},e,{confirmPrefixCls:Ee})))};var xe=e=>{const{rootPrefixCls:r,iconPrefixCls:u,direction:s,theme:i}=e;return n.createElement($.ZP,{prefixCls:r,iconPrefixCls:u,direction:s,theme:i},n.createElement(pe,Object.assign({},e)))},y=[];let l="";function o(){return l}const c=e=>{var r,u;const{prefixCls:s,getContainer:i,direction:C}=e,M=(0,re.A)(),E=(0,n.useContext)(d.E_),g=o()||E.getPrefixCls(),p=s||`${g}-modal`;let m=i;return m===!1&&(m=void 0),n.createElement(xe,Object.assign({},e,{rootPrefixCls:g,prefixCls:p,iconPrefixCls:E.iconPrefixCls,theme:E.theme,direction:C??E.direction,locale:(u=(r=E.locale)===null||r===void 0?void 0:r.Modal)!==null&&u!==void 0?u:M,getContainer:m}))};function a(e){const r=(0,$.w6)(),u=document.createDocumentFragment();let s=Object.assign(Object.assign({},e),{close:E,open:!0}),i;function C(){for(var p=arguments.length,m=new Array(p),j=0;j<p;j++)m[j]=arguments[j];const V=m.some(Z=>Z&&Z.triggerCancel);e.onCancel&&V&&e.onCancel.apply(e,[()=>{}].concat((0,v.Z)(m.slice(1))));for(let Z=0;Z<y.length;Z++)if(y[Z]===E){y.splice(Z,1);break}(0,Y.v)(u)}function M(p){clearTimeout(i),i=setTimeout(()=>{const m=r.getPrefixCls(void 0,o()),j=r.getIconPrefixCls(),V=r.getTheme(),Z=n.createElement(c,Object.assign({},p));(0,Y.s)(n.createElement($.ZP,{prefixCls:m,iconPrefixCls:j,theme:V},r.holderRender?r.holderRender(Z):Z),u)})}function E(){for(var p=arguments.length,m=new Array(p),j=0;j<p;j++)m[j]=arguments[j];s=Object.assign(Object.assign({},s),{open:!1,afterClose:()=>{typeof e.afterClose=="function"&&e.afterClose(),C.apply(this,m)}}),s.visible&&delete s.visible,M(s)}function g(p){typeof p=="function"?s=p(s):s=Object.assign(Object.assign({},s),p),M(s)}return M(s),y.push(E),{destroy:E,update:g}}function f(e){return Object.assign(Object.assign({},e),{type:"warning"})}function O(e){return Object.assign(Object.assign({},e),{type:"info"})}function S(e){return Object.assign(Object.assign({},e),{type:"success"})}function R(e){return Object.assign(Object.assign({},e),{type:"error"})}function oe(e){return Object.assign(Object.assign({},e),{type:"confirm"})}function T(e){let{rootPrefixCls:r}=e;l=r}var K=t(98502),ie=function(e,r){var u={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(u[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)r.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(u[s[i]]=e[s[i]]);return u};const le=e=>{const{prefixCls:r,className:u,closeIcon:s,closable:i,type:C,title:M,children:E,footer:g}=e,p=ie(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:m}=n.useContext(d.E_),j=m(),V=r||m("modal"),Z=(0,He.Z)(j),[Se,H,fe]=(0,te.ZP)(V,Z),B=`${V}-confirm`;let z={};return C?z={closable:i??!1,title:"",footer:"",children:n.createElement(Ce,Object.assign({},e,{prefixCls:V,confirmPrefixCls:B,rootPrefixCls:j,content:E}))}:z={closable:i??!0,title:M,footer:g!==null&&n.createElement(k,Object.assign({},e)),children:E},Se(n.createElement(Le.s,Object.assign({prefixCls:V,className:h()(H,`${V}-pure-panel`,C&&B,C&&`${B}-${C}`,u,fe,Z)},p,{closeIcon:ve(V,s),closable:i},z)))};var Ie=(0,K.i)(le);function he(){const[e,r]=n.useState([]),u=n.useCallback(s=>(r(i=>[].concat((0,v.Z)(i),[s])),()=>{r(i=>i.filter(C=>C!==s))}),[]);return[e,u]}var ue=t(27386),ge=function(e,r){var u={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&r.indexOf(s)<0&&(u[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(e);i<s.length;i++)r.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(u[s[i]]=e[s[i]]);return u};const we=(e,r)=>{var u,{afterClose:s,config:i}=e,C=ge(e,["afterClose","config"]);const[M,E]=n.useState(!0),[g,p]=n.useState(i),{direction:m,getPrefixCls:j}=n.useContext(d.E_),V=j("modal"),Z=j(),Se=()=>{var z;s(),(z=g.afterClose)===null||z===void 0||z.call(g)},H=function(){E(!1);for(var z=arguments.length,Ke=new Array(z),Ee=0;Ee<z;Ee++)Ke[Ee]=arguments[Ee];const _e=Ke.some(Ve=>Ve&&Ve.triggerCancel);g.onCancel&&_e&&g.onCancel.apply(g,[()=>{}].concat((0,v.Z)(Ke.slice(1))))};n.useImperativeHandle(r,()=>({destroy:H,update:z=>{p(Ke=>Object.assign(Object.assign({},Ke),z))}}));const fe=(u=g.okCancel)!==null&&u!==void 0?u:g.type==="confirm",[B]=(0,w.Z)("Modal",ue.Z.Modal);return n.createElement(xe,Object.assign({prefixCls:V,rootPrefixCls:Z},g,{close:H,open:M,afterClose:Se,okText:g.okText||(fe?B==null?void 0:B.okText:B==null?void 0:B.justOkText),direction:g.direction||m,cancelText:g.cancelText||(B==null?void 0:B.cancelText)},C))};var Xe=n.forwardRef(we);let Fe=0;const $e=n.memo(n.forwardRef((e,r)=>{const[u,s]=he();return n.useImperativeHandle(r,()=>({patchElement:s}),[]),n.createElement(n.Fragment,null,u)}));function qe(){const e=n.useRef(null),[r,u]=n.useState([]);n.useEffect(()=>{r.length&&((0,v.Z)(r).forEach(M=>{M()}),u([]))},[r]);const s=n.useCallback(C=>function(E){var g;Fe+=1;const p=n.createRef();let m;const j=new Promise(fe=>{m=fe});let V=!1,Z;const Se=n.createElement(Xe,{key:`modal-${Fe}`,config:C(E),ref:p,afterClose:()=>{Z==null||Z()},isSilent:()=>V,onConfirm:fe=>{m(fe)}});return Z=(g=e.current)===null||g===void 0?void 0:g.patchElement(Se),Z&&y.push(Z),{destroy:()=>{function fe(){var B;(B=p.current)===null||B===void 0||B.destroy()}p.current?fe():u(B=>[].concat((0,v.Z)(B),[fe]))},update:fe=>{function B(){var z;(z=p.current)===null||z===void 0||z.update(fe)}p.current?B():u(z=>[].concat((0,v.Z)(z),[B]))},then:fe=>(V=!0,j.then(fe))}},[]);return[n.useMemo(()=>({info:s(O),success:s(S),error:s(R),warning:s(f),confirm:s(oe)}),[]),n.createElement($e,{key:"modal-holder",ref:e})]}var Ue=qe;function De(e){return a(f(e))}const Pe=ce;Pe.useModal=Ue,Pe.info=function(r){return a(O(r))},Pe.success=function(r){return a(S(r))},Pe.error=function(r){return a(R(r))},Pe.warning=De,Pe.warn=De,Pe.confirm=function(r){return a(oe(r))},Pe.destroyAll=function(){for(;y.length;){const r=y.pop();r&&r()}},Pe.config=T,Pe._InternalPanelDoNotUseOrYouWillBeFired=Ie;var an=Pe},94289:function(Ge,_,t){t.d(_,{H:function(){return $}});var v=t(50959),n=t(82926);function Y(){}const d=v.createContext({add:Y,remove:Y});function $(F){const G=v.useContext(d),L=v.useRef();return(0,n.useEvent)(h=>{if(h){const I=F?h.querySelector(F):h;G.add(I),L.current=I}else G.remove(L.current)})}var se=null},73062:function(Ge,_,t){t.d(_,{qX:function(){return Ne},JB:function(){return Te},lm:function(){return tn}});var v=t(6399),n=t(3392),Y=t(46060),d=t(50959),$=t(28484),se=t(10422),F=t(80284),G=t(55250),L=t(82187),N=t.n(L),h=t(48431),I=t(63509),D=t(11820),w=t(54020),de=d.forwardRef(function(x,P){var ne=x.prefixCls,A=x.style,W=x.className,re=x.duration,ve=re===void 0?4.5:re,k=x.eventKey,te=x.content,J=x.closable,ye=x.closeIcon,Me=ye===void 0?"x":ye,q=x.props,ce=x.onClick,be=x.onNoticeClose,Ze=x.times,Q=x.hovering,ze=d.useState(!1),Re=(0,n.Z)(ze,2),Oe=Re[0],Ce=Re[1],pe=Q||Oe,U=function(){be(k)},xe=function(c){(c.key==="Enter"||c.code==="Enter"||c.keyCode===D.Z.ENTER)&&U()};d.useEffect(function(){if(!pe&&ve>0){var o=setTimeout(function(){U()},ve*1e3);return function(){clearTimeout(o)}}},[ve,pe,Ze]);var b=d.useMemo(function(){return(0,I.Z)(J)==="object"&&J!==null?J:J?{closeIcon:Me}:{}},[J,Me]),y=(0,w.Z)(b,!0),l="".concat(ne,"-notice");return d.createElement("div",(0,F.Z)({},q,{ref:P,className:N()(l,W,(0,G.Z)({},"".concat(l,"-closable"),J)),style:A,onMouseEnter:function(c){var a;Ce(!0),q==null||(a=q.onMouseEnter)===null||a===void 0||a.call(q,c)},onMouseLeave:function(c){var a;Ce(!1),q==null||(a=q.onMouseLeave)===null||a===void 0||a.call(q,c)},onClick:ce}),d.createElement("div",{className:"".concat(l,"-content")},te),J&&d.createElement("a",(0,F.Z)({tabIndex:0,className:"".concat(l,"-close"),onKeyDown:xe,"aria-label":"Close"},y,{onClick:function(c){c.preventDefault(),c.stopPropagation(),U()}}),b.closeIcon))}),Ne=de,ae=d.createContext({}),X=function(P){var ne=P.children,A=P.classNames;return d.createElement(ae.Provider,{value:{classNames:A}},ne)},Te=X,Ae=8,We=3,je=16,Be=function(P){var ne={offset:Ae,threshold:We,gap:je};if(P&&(0,I.Z)(P)==="object"){var A,W,re;ne.offset=(A=P.offset)!==null&&A!==void 0?A:Ae,ne.threshold=(W=P.threshold)!==null&&W!==void 0?W:We,ne.gap=(re=P.gap)!==null&&re!==void 0?re:je}return[!!P,ne]},Le=Be,me=["className","style","classNames","styles"],ee=function(P){var ne=P.configList,A=P.placement,W=P.prefixCls,re=P.className,ve=P.style,k=P.motion,te=P.onAllNoticeRemoved,J=P.onNoticeClose,ye=P.stack,Me=(0,d.useContext)(ae),q=Me.classNames,ce=(0,d.useRef)({}),be=(0,d.useState)(null),Ze=(0,n.Z)(be,2),Q=Ze[0],ze=Ze[1],Re=(0,d.useState)([]),Oe=(0,n.Z)(Re,2),Ce=Oe[0],pe=Oe[1],U=ne.map(function(S){return{config:S,key:String(S.key)}}),xe=Le(ye),b=(0,n.Z)(xe,2),y=b[0],l=b[1],o=l.offset,c=l.threshold,a=l.gap,f=y&&(Ce.length>0||U.length<=c),O=typeof k=="function"?k(A):k;return(0,d.useEffect)(function(){y&&Ce.length>1&&pe(function(S){return S.filter(function(R){return U.some(function(oe){var T=oe.key;return R===T})})})},[Ce,U,y]),(0,d.useEffect)(function(){var S;if(y&&ce.current[(S=U[U.length-1])===null||S===void 0?void 0:S.key]){var R;ze(ce.current[(R=U[U.length-1])===null||R===void 0?void 0:R.key])}},[U,y]),d.createElement(h.CSSMotionList,(0,F.Z)({key:A,className:N()(W,"".concat(W,"-").concat(A),q==null?void 0:q.list,re,(0,G.Z)((0,G.Z)({},"".concat(W,"-stack"),!!y),"".concat(W,"-stack-expanded"),f)),style:ve,keys:U,motionAppear:!0},O,{onAllRemoved:function(){te(A)}}),function(S,R){var oe=S.config,T=S.className,K=S.style,ie=S.index,le=oe,Ie=le.key,he=le.times,ue=String(Ie),ge=oe,we=ge.className,Xe=ge.style,Fe=ge.classNames,$e=ge.styles,qe=(0,Y.Z)(ge,me),Ue=U.findIndex(function(g){return g.key===ue}),De={};if(y){var Pe=U.length-1-(Ue>-1?Ue:ie-1),an=A==="top"||A==="bottom"?"-50%":"0";if(Pe>0){var e,r,u;De.height=f?(e=ce.current[ue])===null||e===void 0?void 0:e.offsetHeight:Q==null?void 0:Q.offsetHeight;for(var s=0,i=0;i<Pe;i++){var C;s+=((C=ce.current[U[U.length-1-i].key])===null||C===void 0?void 0:C.offsetHeight)+a}var M=(f?s:Pe*o)*(A.startsWith("top")?1:-1),E=!f&&Q!==null&&Q!==void 0&&Q.offsetWidth&&(r=ce.current[ue])!==null&&r!==void 0&&r.offsetWidth?((Q==null?void 0:Q.offsetWidth)-o*2*(Pe<3?Pe:3))/((u=ce.current[ue])===null||u===void 0?void 0:u.offsetWidth):1;De.transform="translate3d(".concat(an,", ").concat(M,"px, 0) scaleX(").concat(E,")")}else De.transform="translate3d(".concat(an,", 0, 0)")}return d.createElement("div",{ref:R,className:N()("".concat(W,"-notice-wrapper"),T,Fe==null?void 0:Fe.wrapper),style:(0,$.Z)((0,$.Z)((0,$.Z)({},K),De),$e==null?void 0:$e.wrapper),onMouseEnter:function(){return pe(function(p){return p.includes(ue)?p:[].concat((0,v.Z)(p),[ue])})},onMouseLeave:function(){return pe(function(p){return p.filter(function(m){return m!==ue})})}},d.createElement(Ne,(0,F.Z)({},qe,{ref:function(p){Ue>-1?ce.current[ue]=p:delete ce.current[ue]},prefixCls:W,classNames:Fe,styles:$e,className:N()(we,q==null?void 0:q.notice),style:Xe,times:he,key:Ie,eventKey:Ie,onNoticeClose:J,hovering:y&&Ce.length>0})))})},en=ee,ke=d.forwardRef(function(x,P){var ne=x.prefixCls,A=ne===void 0?"rc-notification":ne,W=x.container,re=x.motion,ve=x.maxCount,k=x.className,te=x.style,J=x.onAllRemoved,ye=x.stack,Me=x.renderNotifications,q=d.useState([]),ce=(0,n.Z)(q,2),be=ce[0],Ze=ce[1],Q=function(y){var l,o=be.find(function(c){return c.key===y});o==null||(l=o.onClose)===null||l===void 0||l.call(o),Ze(function(c){return c.filter(function(a){return a.key!==y})})};d.useImperativeHandle(P,function(){return{open:function(y){Ze(function(l){var o=(0,v.Z)(l),c=o.findIndex(function(O){return O.key===y.key}),a=(0,$.Z)({},y);if(c>=0){var f;a.times=(((f=l[c])===null||f===void 0?void 0:f.times)||0)+1,o[c]=a}else a.times=0,o.push(a);return ve>0&&o.length>ve&&(o=o.slice(-ve)),o})},close:function(y){Q(y)},destroy:function(){Ze([])}}});var ze=d.useState({}),Re=(0,n.Z)(ze,2),Oe=Re[0],Ce=Re[1];d.useEffect(function(){var b={};be.forEach(function(y){var l=y.placement,o=l===void 0?"topRight":l;o&&(b[o]=b[o]||[],b[o].push(y))}),Object.keys(Oe).forEach(function(y){b[y]=b[y]||[]}),Ce(b)},[be]);var pe=function(y){Ce(function(l){var o=(0,$.Z)({},l),c=o[y]||[];return c.length||delete o[y],o})},U=d.useRef(!1);if(d.useEffect(function(){Object.keys(Oe).length>0?U.current=!0:U.current&&(J==null||J(),U.current=!1)},[Oe]),!W)return null;var xe=Object.keys(Oe);return(0,se.createPortal)(d.createElement(d.Fragment,null,xe.map(function(b){var y=Oe[b],l=d.createElement(en,{key:b,configList:y,placement:b,prefixCls:A,className:k==null?void 0:k(b),style:te==null?void 0:te(b),motion:re,onNoticeClose:Q,onAllNoticeRemoved:pe,stack:ye});return Me?Me(l,{prefixCls:A,key:b}):l})),W)}),He=ke,Ye=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],on=function(){return document.body},Je=0;function ln(){for(var x={},P=arguments.length,ne=new Array(P),A=0;A<P;A++)ne[A]=arguments[A];return ne.forEach(function(W){W&&Object.keys(W).forEach(function(re){var ve=W[re];ve!==void 0&&(x[re]=ve)})}),x}function tn(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},P=x.getContainer,ne=P===void 0?on:P,A=x.motion,W=x.prefixCls,re=x.maxCount,ve=x.className,k=x.style,te=x.onAllRemoved,J=x.stack,ye=x.renderNotifications,Me=(0,Y.Z)(x,Ye),q=d.useState(),ce=(0,n.Z)(q,2),be=ce[0],Ze=ce[1],Q=d.useRef(),ze=d.createElement(He,{container:be,ref:Q,prefixCls:W,motion:A,maxCount:re,className:ve,style:k,onAllRemoved:te,stack:J,renderNotifications:ye}),Re=d.useState([]),Oe=(0,n.Z)(Re,2),Ce=Oe[0],pe=Oe[1],U=d.useMemo(function(){return{open:function(b){var y=ln(Me,b);(y.key===null||y.key===void 0)&&(y.key="rc-notification-".concat(Je),Je+=1),pe(function(l){return[].concat((0,v.Z)(l),[{type:"open",config:y}])})},close:function(b){pe(function(y){return[].concat((0,v.Z)(y),[{type:"close",key:b}])})},destroy:function(){pe(function(b){return[].concat((0,v.Z)(b),[{type:"destroy"}])})}}},[]);return d.useEffect(function(){Ze(ne())}),d.useEffect(function(){Q.current&&Ce.length&&(Ce.forEach(function(xe){switch(xe.type){case"open":Q.current.open(xe.config);break;case"close":Q.current.close(xe.key);break;case"destroy":Q.current.destroy();break}}),pe(function(xe){return xe.filter(function(b){return!Ce.includes(b)})}))},[Ce]),[U,ze]}}}]);