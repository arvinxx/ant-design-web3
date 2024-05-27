"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[3673],{43673:function(Un,x,e){e.d(x,{h:function(){return Nn}});var k=e(26068),E=e.n(k),q=e(15558),Q=e.n(q),_=e(67825),nn=e.n(_),P=e(50959),en=e(23202),an=e(65122),rn=e(15826),tn=e(96566),ln=e(31759),on=e.n(ln),un=e(90228),v=e.n(un),cn=e(87999),W=e.n(cn),sn=e(48305),z=e.n(sn),H=e(70478),dn=e(89429),vn=e(20739),fn=e(45476),hn=e(61344),mn=e(55775),gn=e(57810),Cn=e(64755),yn=e(8841),Gn=e(64551),pn=e(77991),Qn=function(i){return debug("antd-web3:wagmi:".concat(i))},F=function(i){return!!(i.type===pn.L.type&&i.icon&&i.id&&i.name)},Wn="EIP6963",An=function(i){return{connectors:[Wn],create:function(g){var r=g==null?void 0:g[0],f={icon:r==null?void 0:r.icon,name:r.name,remark:"Wallet ".concat(r==null?void 0:r.name," detected"),key:r==null?void 0:r.id};return E()(E()({},f),{},{hasWalletReady:function(){var u=W()(v()().mark(function s(){return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,r==null?void 0:r.getProvider();case 2:return l.abrupt("return",!!l.sent);case 3:case"end":return l.stop()}},s)}));function h(){return u.apply(this,arguments)}return h}(),hasExtensionInstalled:function(){var u=W()(v()().mark(function s(){return v()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,r==null?void 0:r.getProvider();case 2:return l.abrupt("return",!!l.sent);case 3:case"end":return l.stop()}},s)}));function h(){return u.apply(this,arguments)}return h}()},i)}}},In=e(80417);function Pn(o,i,m){return D.apply(this,arguments)}function D(){return D=W()(v()().mark(function o(i,m,g){var r;return v()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,(0,In.w)(i,{address:m.address,chainId:g});case 2:return r=u.sent,u.abrupt("return",E()(E()({},m),{},{name:r??void 0}));case 4:case"end":return u.stop()}},o)})),D.apply(this,arguments)}var bn=e(69508),$n=e(83895);function wn(o,i,m,g){return M.apply(this,arguments)}function M(){return M=W()(v()().mark(function o(i,m,g,r){var f,u;return v()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,$n.L)(i,{address:(0,H.O)(m),args:[g],chainId:r,abi:[{name:"tokenURI",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}],stateMutability:"view",type:"function"}],functionName:"tokenURI"});case 2:return f=s.sent,s.next=5,(0,bn.X)(f);case 5:return u=s.sent,s.abrupt("return",u);case 7:case"end":return s.stop()}},o)})),M.apply(this,arguments)}var R=e(11527),En=function(i){var m,g,r=i.children,f=i.chainAssets,u=i.walletFactorys,h=i.availableChains,s=i.availableConnectors,b=i.ens,l=i.balance,B=i.locale,A=i.eip6963,j=(0,hn.m)(),N=j.address,K=j.isDisconnected,C=j.chain,S=(0,mn.Z)(),Rn=P.useState(),X=z()(Rn,2),O=X[0],L=X[1],Sn=(0,gn.$)(),Tn=Sn.connectAsync,Fn=(0,Cn.o)(),U=Fn.switchChain,Dn=(0,yn.K)({address:l&&O?(0,H.O)(O.address):void 0}),I=Dn.data;P.useEffect(function(){if(!N||K)L(void 0);else{var c=function(){var a=W()(v()().mark(function n(){var d;return v()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(d={address:N},L(d),!b){y.next=8;break}return y.t0=L,y.next=6,Pn(S,d);case 6:y.t1=y.sent,(0,y.t0)(y.t1);case 8:case"end":return y.stop()}},n)}));return function(){return a.apply(this,arguments)}}();c()}},[N,K,C,b]);var Z=function(a){var n=s.find(function(t){return t.name===a&&!F(t)});if(!A)return n;var d=s.find(function(t){return t.name===a&&F(t)});return d||n},Mn=P.useMemo(function(){var c=[];s.forEach(function(n){if(F(n)){on()(A)==="object"&&A!==null&&A!==void 0&&A.autoAddInjectedWallets&&!u.find(function(t){return t.connectors.includes(n.name)})&&c.push(An().create([n]));return}var d=u.find(function(t){return t.connectors.includes(n.name)});d!=null&&d.create||console.error("Can not find wallet factory for ".concat(n.name,", you should config it in WagmiWeb3ConfigProvider 'wallets'."))});var a=u.map(function(n){var d=n.connectors.map(Z).filter(function(t){return!!t});return d.length===0&&!A?(console.error("Can not find connector for ".concat(n.connectors.join(","),", ignore the wallet. Please config connectors or add eip6963 config in WagmiWeb3ConfigProvider.")),null):n.create(d)}).filter(function(n){return n!==null});return[].concat(Q()(a),c)},[s,u,A]),Bn=P.useMemo(function(){return h.map(function(c){var a=f==null?void 0:f.find(function(n){return n.id===c.id});return a!=null&&a.id?{id:a.id,name:a.name,icon:a.icon}:(console.error("Can not find chain ".concat(c.id,", you should config it in WagmiWeb3ConfigProvider 'chains'.")),null)}).filter(function(c){return c!==null})},[h,f]),T=(C==null?void 0:C.id)||(h==null||(m=h[0])===null||m===void 0?void 0:m.id),J=(C==null?void 0:C.name)||(h==null||(g=h[0])===null||g===void 0?void 0:g.name),On=P.useState(void 0),V=z()(On,2),$=V[0],Y=V[1];P.useEffect(function(){Y(function(c){var a=f==null?void 0:f.find(function(n){return(n==null?void 0:n.id)===T});return!a&&T&&(a={id:T,name:J}),a||c})},[f,h,T,J]);var G=$==null?void 0:$.nativeCurrency,Ln=P.useCallback(function(){var c=W()(v()().mark(function a(n){var d,t;return v()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return d=n.address,t=n.tokenId,p.abrupt("return",wn(S,d,t,C==null?void 0:C.id));case 2:case"end":return p.stop()}},a)}));return function(a){return c.apply(this,arguments)}}(),[C==null?void 0:C.id]);return(0,R.jsx)(dn.B,{locale:B,availableChains:Bn,chain:$,account:O,balance:l?{symbol:I==null?void 0:I.symbol,value:I==null?void 0:I.value,decimals:I==null?void 0:I.decimals,icon:G==null?void 0:G.icon}:void 0,availableWallets:Mn,addressPrefix:"0x",connect:function(){var c=W()(v()().mark(function a(n,d){var t,y,p;return v()().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,n==null||(t=(y=n).getWagmiConnector)===null||t===void 0?void 0:t.call(y,d);case 2:if(p=w.sent,!p&&n&&(p=Z(n.name)),p){w.next=6;break}throw new Error("Can not find connector for ".concat(n==null?void 0:n.name));case 6:return w.next=8,Tn({connector:p,chainId:$==null?void 0:$.id});case 8:case"end":return w.stop()}},a)}));return function(a,n){return c.apply(this,arguments)}}(),disconnect:W()(v()().mark(function c(){var a,n;return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=(0,vn.D)(S),n=a.connector,t.next=3,(0,fn.z)(S,{connector:n});case 3:case"end":return t.stop()}},c)})),switchChain:function(){var c=W()(v()().mark(function a(n){return v()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:C?U==null||U({chainId:n.id}):Y(n);case 1:case"end":return t.stop()}},a)}));return function(a){return c.apply(this,arguments)}}(),getNFTMetadata:Ln,children:r})},jn=["children","wallets","chains","ens","locale","balance","config","queryClient","eip6963"];function Nn(o){var i=o.children,m=o.wallets,g=m===void 0?[]:m,r=o.chains,f=r===void 0?[]:r,u=o.ens,h=o.locale,s=o.balance,b=o.config,l=o.queryClient,B=o.eip6963,A=nn()(o,jn),j=[].concat(Q()(f),[en.ny]),N=P.useMemo(function(){return l??new an.S},[l]);return(0,R.jsx)(tn.F,E()(E()({config:b},A),{},{children:(0,R.jsx)(rn.aH,{client:N,children:(0,R.jsx)(En,{locale:h,chainAssets:j,walletFactorys:g,availableChains:b.chains,availableConnectors:b.connectors,ens:u,balance:s,eip6963:B,children:i})})}))}}}]);
