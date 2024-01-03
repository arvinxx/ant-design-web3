"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[9431],{79431:function(we,V,c){c.d(V,{GU:function(){return ne},mg:function(){return W.mg},VX:function(){return ae},hm:function(){return le},be:function(){return ee}});var B=c(77117),h=c.n(B),X=c(67855),J=c.n(X),K=c(38887),Z=c.n(K),z=c(95530),Y=c.n(z),$=c(50959),W=c(72257),k=c(186),q=c(13448),u=c.n(q),x=c(74815),m=c.n(x),_={name:"MetaMask",create:function(){return h()(h()({},W.Zv),{},{hasWalletReady:function(){var e=m()(u()().mark(function l(){var a;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",!!((a=window.ethereum)!==null&&a!==void 0&&a.isMetaMask));case 1:case"end":return v.stop()}},l)}));function o(){return e.apply(this,arguments)}return o}()})}},ee={name:"WalletConnect",create:function(e){var o=function(){var l=m()(u()().mark(function a(){var n;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e==null?void 0:e.getProvider();case 2:return n=t.sent,t.abrupt("return",new Promise(function(M){n.on("display_uri",function(S){M({uri:S})})}));case 4:case"end":return t.stop()}},a)}));return function(){return l.apply(this,arguments)}}();return h()(h()({},W.Tl),{},{hasWalletReady:function(){var l=m()(u()().mark(function n(){return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",!0);case 1:case"end":return t.stop()}},n)}));function a(){return l.apply(this,arguments)}return a}(),getQrCode:(e==null?void 0:e.options.showQrModal)===!1?o:void 0})}},ne={name:"Coinbase Wallet",create:function(){return h()(h()({},W.p_),{},{hasWalletReady:function(){var e=m()(u()().mark(function l(){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",!0);case 1:case"end":return n.stop()}},l)}));function o(){return e.apply(this,arguments)}return o}()})}},Ce={name:"TokenPocket",create:function(){return h()(h()({},W.eu),{},{hasWalletReady:function(){var e=m()(u()().mark(function l(){return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",!0);case 1:case"end":return n.stop()}},l)}));function o(){return e.apply(this,arguments)}return o}()})}},ae={name:"Safeheron",create:function(e){return h()(h()({},W.OJ),{},{hasWalletReady:function(){var o=m()(u()().mark(function a(){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",!!(e!=null&&e.ready));case 1:case"end":return v.stop()}},a)}));function l(){return o.apply(this,arguments)}return l}()})}},re=c(28152),L=c.n(re),N=c(18661),U=c(32836);function te(f,e){return F.apply(this,arguments)}function F(){return F=m()(u()().mark(function f(e,o){var l;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,U.Lk)({address:e.address,chainId:o});case 2:return l=n.sent,n.abrupt("return",h()(h()({},e),{},{name:l??void 0}));case 4:case"end":return n.stop()}},f)})),F.apply(this,arguments)}function ue(f,e,o){return Q.apply(this,arguments)}function Q(){return Q=m()(u()().mark(function f(e,o,l){var a,n;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,U.a4)({address:(0,N.O_)(e),args:[o],chainId:l,abi:[{name:"tokenURI",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}],stateMutability:"view",type:"function"}],functionName:"tokenURI"});case 2:return a=t.sent,t.next=5,(0,N.Xw)(a);case 5:return n=t.sent,t.abrupt("return",n);case 7:case"end":return t.stop()}},f)})),Q.apply(this,arguments)}var O=c(11527),ie=function(e){var o,l=e.children,a=e.assets,n=e.availableChains,v=e.availableConnectors,t=e.ens,M=e.balance,S=e.locale,T=(0,k.mA)(),w=T.address,A=T.isDisconnected,j=$.useState(),D=L()(j,2),y=D[0],I=D[1],ce=(0,k.$4)(),oe=ce.connectAsync,de=(0,k.g0)(),E=de.switchNetwork,fe=(0,k.LN)(),g=fe.chain,ve=(0,k.qL)(),he=ve.disconnectAsync,me=$.useState(void 0),G=L()(me,2),C=G[0],H=G[1],pe=(0,k.KQ)({address:M&&y?(0,N.O_)(y.address):void 0}),b=pe.data;$.useEffect(function(){if(!w||A){I(void 0);return}var s=function(){var r=m()(u()().mark(function i(){var p;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(p={address:w},d.t0=I,!t){d.next=8;break}return d.next=5,te(p);case 5:d.t1=d.sent,d.next=9;break;case 8:d.t1=p;case 9:d.t2=d.t1,(0,d.t0)(d.t2);case 11:case"end":return d.stop()}},i)}));return function(){return r.apply(this,arguments)}}();s()},[w,A,g,t]);var ye=$.useMemo(function(){return v.map(function(s){var r=a==null?void 0:a.find(function(i){return i.name===s.name});return r!=null&&r.create?r.create(s):(console.error("Can not find wallet factory for ".concat(s.name,", you should config it in WagmiWeb3ConfigProvider 'assets'.")),null)}).filter(function(s){return s!==null})},[v,a]),ge=$.useMemo(function(){return n.map(function(s){var r=a==null?void 0:a.find(function(i){return i.id===s.id});return r!=null&&r.id?{id:r.id,name:r.name,icon:r.icon}:(console.error("Can not find chain ".concat(s.id,", you should config it in WagmiWeb3ConfigProvider 'assets'.")),null)}).filter(function(s){return s!==null})},[n,a]);return $.useEffect(function(){var s;if(!(!g&&C)){var r=g??n[0];if(r){var i=a==null?void 0:a.find(function(p){return p.id===(r==null?void 0:r.id)});(s=i)!==null&&s!==void 0&&s.id||(i={id:r.id,name:r.name}),H(i)}}},[g,a,n,C]),(0,O.jsx)(N.BQ,{locale:S,availableChains:ge,chain:C,account:y,balance:M?{symbol:b==null?void 0:b.symbol,value:b==null?void 0:b.value,decimals:b==null?void 0:b.decimals,icon:C==null||(o=C.nativeCurrency)===null||o===void 0?void 0:o.icon}:void 0,availableWallets:ye,connect:function(){var s=m()(u()().mark(function r(i){var p;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=v.find(function(P){return P.name===(i==null?void 0:i.name)}),d.next=3,oe({connector:p,chainId:C==null?void 0:C.id});case 3:case"end":return d.stop()}},r)}));return function(r){return s.apply(this,arguments)}}(),disconnect:m()(u()().mark(function s(){return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,he();case 2:case"end":return i.stop()}},s)})),switchChain:function(){var s=m()(u()().mark(function r(i){return u()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:g?E==null||E(i.id):H(i);case 1:case"end":return R.stop()}},r)}));return function(r){return s.apply(this,arguments)}}(),getNFTMetadata:function(){var s=m()(u()().mark(function r(i){var p,R;return u()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return p=i.address,R=i.tokenId,P.abrupt("return",ue(p,R,g==null?void 0:g.id));case 2:case"end":return P.stop()}},r)}));return function(r){return s.apply(this,arguments)}}(),children:l})},se=["children","assets","ens","locale","balance","config"];function le(f){var e=f.children,o=f.assets,l=o===void 0?[]:o,a=f.ens,n=f.locale,v=f.balance,t=f.config,M=Y()(f,se),S=$.useMemo(function(){var T,w=[],A=Z()(t.connectors),j;try{for(A.s();!(j=A.n()).done;){var D=j.value;D.chains.forEach(function(y){w.find(function(I){return I.id===y.id})||w.push(y)})}}catch(y){A.e(y)}finally{A.f()}return(T=t.publicClient.chains)===null||T===void 0||T.forEach(function(y){w.find(function(I){return I.id===y.id})||w.push(y)}),w},[t]);return(0,O.jsx)(k.eM,h()(h()({config:t},M),{},{children:(0,O.jsx)(ie,{locale:n,assets:[].concat(J()(l),[_,W.ny,W.Du]),availableChains:S,availableConnectors:t.connectors||[],ens:a,balance:v,children:e})}))}}}]);