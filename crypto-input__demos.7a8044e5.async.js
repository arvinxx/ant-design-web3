"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[4641],{49818:function(I,s,_){_.r(s);var D=_(90228),u=_.n(D),M=_(87999),O=_.n(M),g=_(48305),i=_.n(g),o=_(50959),b=_(48116),T=_(82750),h=_(45790),r=_(11527),m=function(){var c=(0,o.useState)(),R=i()(c,2),C=R[0],E=R[1],U=(0,o.useState)(),K=i()(U,2),y=K[0],B=K[1],t=function(){var f=O()(u()().mark(function l(v){return u()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:if(v){A.next=2;break}return A.abrupt("return",B(void 0));case 2:setTimeout(function(){B({amount:10000000000000000000000n,unit:"$",price:3984.57})},500);case 3:case"end":return A.stop()}},l)}));return function(v){return f.apply(this,arguments)}}();return(0,r.jsx)("div",{style:{width:456},children:(0,r.jsx)(b.V,{value:C,balance:y,onChange:function(l){var v,P;E(l),(l==null||(v=l.token)===null||v===void 0?void 0:v.symbol)!==(C==null||(P=C.token)===null||P===void 0?void 0:P.symbol)&&t(l==null?void 0:l.token)},options:[T.h,h.A]})})};s.default=m},90239:function(I,s,_){_.r(s);var D=_(48305),u=_.n(D),M=_(50959),O=_(48116),g=_(82750),i=_(45790),o=_(11527),b=function(){var h=(0,M.useState)(),r=u()(h,2),m=r[0],p=r[1];return(0,o.jsx)("div",{style:{width:456},children:(0,o.jsx)(O.V,{footer:"Custom Footer",value:m,onChange:p,options:[g.h,i.A]})})};s.default=b},65149:function(I,s,_){_.r(s);var D=_(48305),u=_.n(D),M=_(50959),O=_(48116),g=_(82750),i=_(45790),o=_(11527),b=function(){var h=(0,M.useState)(),r=u()(h,2),m=r[0],p=r[1];return(0,o.jsx)("div",{style:{width:456},children:(0,o.jsx)(O.V,{value:m,onChange:p,header:"Crypto Input Header",options:[g.h,i.A]})})};s.default=b},4696:function(I,s,_){_.r(s);var D=_(48305),u=_.n(D),M=_(50959),O=_(48116),g=_(82750),i=_(45790),o=_(11527),b=function(){var h=(0,M.useState)(),r=u()(h,2),m=r[0],p=r[1];return(0,o.jsx)("div",{style:{width:456},children:(0,o.jsx)(O.V,{value:m,footer:!1,onChange:p,options:[g.h,i.A]})})};s.default=b},34267:function(I,s,_){_.r(s);var D=_(90228),u=_.n(D),M=_(87999),O=_.n(M),g=_(48305),i=_.n(g),o=_(50959),b=_(48116),T=_(82750),h=_(45790),r=_(84596),m=_(11527),p=function(){var R=(0,o.useState)(),C=i()(R,2),E=C[0],U=C[1],K=(0,o.useState)(),y=i()(K,2),B=y[0],t=y[1],f=(0,o.useState)("middle"),l=i()(f,2),v=l[0],P=l[1],A=function(){var w=O()(u()().mark(function a(e){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",t(void 0));case 2:setTimeout(function(){t({amount:10000000000000000000000n,unit:"$",price:3984.57})},500);case 3:case"end":return n.stop()}},a)}));return function(e){return w.apply(this,arguments)}}();return(0,m.jsxs)("div",{style:{width:480,rowGap:16},children:[(0,m.jsx)(r.ZP.Group,{value:v,onChange:function(a){return P(a.target.value)},optionType:"button",options:[{label:"small",value:"small"},{label:"middle",value:"middle"},{label:"large",value:"large"}],style:{marginBottom:16}}),(0,m.jsx)(b.V,{value:E,balance:B,onChange:function(a){var e,d;U(a),(a==null||(e=a.token)===null||e===void 0?void 0:e.symbol)!==(E==null||(d=E.token)===null||d===void 0?void 0:d.symbol)&&A(a==null?void 0:a.token)},options:[T.h,h.A],size:v})]})};s.default=p},72298:function(I,s,_){_.r(s);var D=_(90228),u=_.n(D),M=_(15558),O=_.n(M),g=_(87999),i=_.n(g),o=_(48305),b=_.n(o),T=_(50959),h=_(19273),r=_(48116),m=_(82750),p=_(45790),c=_(55487),R=_(61080),C=_(53765),E=_(11527),U=function(){var y=(0,T.useState)([]),B=b()(y,2),t=B[0],f=B[1],l=(0,T.useState)([]),v=b()(l,2),P=v[0],A=v[1],w=function(){var a=i()(u()().mark(function e(d,n){var L;return u()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:if(L=O()(P),n){W.next=4;break}return L[d]=void 0,W.abrupt("return",A(L));case 4:console.log("Decimal.pow(10, token.decimal)",C.default.pow(10,n.decimal).toFixed()),setTimeout(function(){L[d]={amount:BigInt(new C.default(1e3).times(C.default.pow(10,n.decimal)).toFixed()),unit:"$",price:n.name.includes("USD")?.99:3984.57},A(L)},500);case 6:case"end":return W.stop()}},e)}));return function(d,n){return a.apply(this,arguments)}}();return(0,E.jsxs)(c.Z,{vertical:!0,align:"center",style:{width:456},gap:16,children:[(0,E.jsx)(r.V,{header:"Sell",value:t[0],balance:P[0],onChange:function(e){var d,n;f([e,t[1]]),(e==null||(d=e.token)===null||d===void 0?void 0:d.symbol)!==(t==null||(n=t[0])===null||n===void 0||(n=n.token)===null||n===void 0?void 0:n.symbol)&&w(0,e==null?void 0:e.token)},options:[m.h,p.A]}),(0,E.jsx)("span",{style:{width:30,height:30,background:"#fff",border:"1px solid #d9d9d9",borderRadius:8,marginBlock:-24,zIndex:2,textAlign:"center",cursor:"pointer",boxShadow:"0 2px 4px 0 rgba(0, 0, 0, 0.1)"},onClick:function(){f([t[1],t[0]]),A([P[1],P[0]])},children:(0,E.jsx)(h.Z,{style:{fontSize:18,transform:"rotate(90deg)",marginBlockStart:6}})}),(0,E.jsx)(r.V,{header:"Buy",value:t[1],balance:P[1],onChange:function(e){var d,n;f([t[0],e]),(e==null||(d=e.token)===null||d===void 0?void 0:d.symbol)!==(t==null||(n=t[1])===null||n===void 0||(n=n.token)===null||n===void 0?void 0:n.symbol)&&w(1,e==null?void 0:e.token)},options:[m.h,p.A]}),(0,E.jsx)(R.ZP,{type:"primary",size:"large",style:{width:"100%"},onClick:function(){console.log("current crypto pair:",t)},children:"Swap"})]})};s.default=U}}]);
