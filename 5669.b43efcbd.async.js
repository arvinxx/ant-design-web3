(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[5669],{30580:function(zn,x,i){"use strict";i.d(x,{CoinbaseWallet:function(){return Nn},Goerli:function(){return $.Du},ImToken:function(){return Fn},Mainnet:function(){return $.ny},MetaMask:function(){return kn},OkxWallet:function(){return Qn},Polygon:function(){return $.mg},SafeheronWallet:function(){return Dn},TokenPocket:function(){return On},UniversalWallet:function(){return j},WagmiWeb3ConfigProvider:function(){return $n},WalletConnect:function(){return Sn},X1Testnet:function(){return $.$R}});var q=i(77117),y=i.n(q),_=i(67855),H=i.n(_),nn=i(95530),J=i.n(nn),M=i(50959),$=i(97567),en=i(53951),rn=i(2265),an=i(8792),tn=i(27566),un=i.n(tn),ln=i(13448),u=i.n(ln),sn=i(74815),b=i.n(sn),cn=i(28152),K=i.n(cn),N=i(3602),on=i(54416),dn=i(44598),vn=i(31974),fn=i(7665),hn=i(91519),mn=i(98486),Vn=i(9691),pn=i(90177),Yn=function(e){return debug("antd-web3:wagmi:".concat(e))},Q=function(e){return!!(e.type===pn.L.type&&e.icon&&e.id&&e.name)},gn="EIP6963",Cn=function(e){return{connectors:[gn],create:function(l){var n=l==null?void 0:l[0],h={icon:n==null?void 0:n.icon,name:n.name,remark:"Wallet ".concat(n==null?void 0:n.name," detected"),key:n==null?void 0:n.id};return y()(y()({},h),{},{hasWalletReady:function(){var c=b()(u()().mark(function f(){return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n==null?void 0:n.getProvider();case 2:return t.abrupt("return",!!t.sent);case 3:case"end":return t.stop()}},f)}));function v(){return c.apply(this,arguments)}return v}(),hasExtensionInstalled:function(){var c=b()(u()().mark(function f(){return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n==null?void 0:n.getProvider();case 2:return t.abrupt("return",!!t.sent);case 3:case"end":return t.stop()}},f)}));function v(){return c.apply(this,arguments)}return v}()},e)}}},yn=i(20503);function Wn(d,e,w){return F.apply(this,arguments)}function F(){return F=b()(u()().mark(function d(e,w,l){var n;return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,(0,yn.w)(e,{address:w.address,chainId:l});case 2:return n=c.sent,c.abrupt("return",y()(y()({},w),{},{name:n??void 0}));case 4:case"end":return c.stop()}},d)})),F.apply(this,arguments)}var wn=i(96708);function Pn(d,e,w,l){return U.apply(this,arguments)}function U(){return U=b()(u()().mark(function d(e,w,l,n){var h,c;return u()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,(0,wn.L)(e,{address:(0,N.O_)(w),args:[l],chainId:n,abi:[{name:"tokenURI",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}],stateMutability:"view",type:"function"}],functionName:"tokenURI"});case 2:return h=f.sent,f.next=5,(0,N.Xw)(h);case 5:return c=f.sent,f.abrupt("return",c);case 7:case"end":return f.stop()}},d)})),U.apply(this,arguments)}var O=i(11527),bn=function(e){var w=e.children,l=e.chainAssets,n=e.walletFactorys,h=e.availableChains,c=e.availableConnectors,v=e.ens,f=e.balance,s=e.locale,t=e.eip6963,m=(0,on.m)(),C=m.address,p=m.isDisconnected,r=m.chain,R=(0,dn.Z)(),D=M.useState(),S=K()(D,2),G=S[0],L=S[1],Un=(0,vn.$)(),Bn=Un.connectAsync,Gn=(0,fn.o)(),X=Gn.switchChain,Ln=(0,hn.q)(),Xn=Ln.disconnectAsync,Zn=M.useState(void 0),z=K()(Zn,2),E=z[0],V=z[1],Hn=(0,mn.K)({address:f&&G?(0,N.O_)(G.address):void 0}),T=Hn.data;M.useEffect(function(){if(!C||p){L(void 0);return}var W=function(){var o=b()(u()().mark(function a(){var P;return u()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:if(P={address:C},L(P),!v){I.next=8;break}return I.t0=L,I.next=6,Wn(R,P);case 6:I.t1=I.sent,(0,I.t0)(I.t1);case 8:case"end":return I.stop()}},a)}));return function(){return o.apply(this,arguments)}}();W()},[C,p,r,v]);var Y=function(o){var a=c.find(function(g){return g.name===o&&!Q(g)});if(!t)return a;var P=c.find(function(g){return g.name===o&&Q(g)});return P||a},Jn=M.useMemo(function(){var W=[];c.forEach(function(a){if(Q(a)){un()(t)==="object"&&t!==null&&t!==void 0&&t.autoAddInjectedWallets&&!n.find(function(g){return g.connectors.includes(a.name)})&&W.push(Cn().create([a]));return}var P=n.find(function(g){return g.connectors.includes(a.name)});P!=null&&P.create||console.error("Can not find wallet factory for ".concat(a.name,", you should config it in WagmiWeb3ConfigProvider 'wallets'."))});var o=n.map(function(a){var P=a.connectors.map(Y).filter(function(g){return!!g});return P.length===0&&!t?(console.error("Can not find connector for ".concat(a.connectors.join(","),", ignore the wallet. Please config connectors or add eip6963 config in WagmiWeb3ConfigProvider.")),null):a.create(P)}).filter(function(a){return a!==null});return[].concat(H()(o),W)},[c,n,t]),Kn=M.useMemo(function(){return h.map(function(W){var o=l==null?void 0:l.find(function(a){return a.id===W.id});return o!=null&&o.id?{id:o.id,name:o.name,icon:o.icon}:(console.error("Can not find chain ".concat(W.id,", you should config it in WagmiWeb3ConfigProvider 'chains'.")),null)}).filter(function(W){return W!==null})},[h,l]);M.useEffect(function(){var W;if(!(!r&&E)){var o=r??h[0];if(o){var a=l==null?void 0:l.find(function(P){return P.id===(o==null?void 0:o.id)});(W=a)!==null&&W!==void 0&&W.id||(a={id:o.id,name:o.name}),V(a)}}},[r,l,h,E]);var Z=E==null?void 0:E.nativeCurrency;return(0,O.jsx)(N.BQ,{locale:s,availableChains:Kn,chain:E,account:G,balance:f?{symbol:T==null?void 0:T.symbol,value:T==null?void 0:T.value,decimals:T==null?void 0:T.decimals,icon:Z==null?void 0:Z.icon}:void 0,availableWallets:Jn,addressPrefix:"0x",connect:function(){var W=b()(u()().mark(function o(a,P){var g,I,A;return u()().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return k.next=2,a==null||(g=(I=a).getWagmiConnector)===null||g===void 0?void 0:g.call(I,P);case 2:if(A=k.sent,!A&&a&&(A=Y(a.name)),A){k.next=6;break}throw new Error("Can not find connector for ".concat(a==null?void 0:a.name));case 6:return k.next=8,Bn({connector:A,chainId:E==null?void 0:E.id});case 8:case"end":return k.stop()}},o)}));return function(o,a){return W.apply(this,arguments)}}(),disconnect:b()(u()().mark(function W(){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Xn();case 2:case"end":return a.stop()}},W)})),switchChain:function(){var W=b()(u()().mark(function o(a){return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(r){g.next=3;break}return V(a),g.abrupt("return");case 3:X==null||X({chainId:a.id});case 4:case"end":return g.stop()}},o)}));return function(o){return W.apply(this,arguments)}}(),getNFTMetadata:function(){var W=b()(u()().mark(function o(a){var P,g;return u()().wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return P=a.address,g=a.tokenId,A.abrupt("return",Pn(R,P,g,r==null?void 0:r.id));case 2:case"end":return A.stop()}},o)}));return function(o){return W.apply(this,arguments)}}(),children:w})},In=["children","wallets","chains","ens","locale","balance","config","queryClient","eip6963"];function $n(d){var e=d.children,w=d.wallets,l=w===void 0?[]:w,n=d.chains,h=n===void 0?[]:n,c=d.ens,v=d.locale,f=d.balance,s=d.config,t=d.queryClient,m=d.eip6963,C=J()(d,In),p=[].concat(H()(h),[$.ny]),r=M.useMemo(function(){return t??new en.S},[t]);return(0,O.jsx)(an.F,y()(y()({config:s},C),{},{children:(0,O.jsx)(rn.aH,{client:r,children:(0,O.jsx)(bn,{locale:v,chainAssets:p,walletFactorys:l,availableChains:s.chains,availableConnectors:s.connectors,ens:c,balance:f,eip6963:m,children:e})})}))}var Rn=i(96345),An=i.n(Rn),En=i(15033),Tn=i.n(En),Mn=i(21320),B=i.n(Mn),j=An()(function d(e){var w=this;Tn()(this,d),B()(this,"name",void 0),B()(this,"connectors",[]),B()(this,"create",function(l){var n=l==null?void 0:l.find(function(s){return s.name==="WalletConnect"}),h=l==null?void 0:l.find(function(s){return s.name===w.wallet.name}),c=void 0,v=function(){var s=b()(u()().mark(function t(){var m;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,n==null?void 0:n.getProvider();case 2:return m=p.sent,p.abrupt("return",new Promise(function(r){if(c){r({uri:c});return}m==null||m.on("display_uri",function(R){c=R,r({uri:R})})}));case 4:case"end":return p.stop()}},t)}));return function(){return s.apply(this,arguments)}}(),f=function(){var s=b()(u()().mark(function t(){var m,C;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,h==null||(m=h.getProvider)===null||m===void 0?void 0:m.call(h);case 2:return C=r.sent,r.abrupt("return",!!C);case 4:case"end":return r.stop()}},t)}));return function(){return s.apply(this,arguments)}}();return y()(y()({},w.wallet),{},{getWagmiConnector:function(){var s=b()(u()().mark(function m(C){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if((C==null?void 0:C.connectType)!=="qrCode"){r.next=2;break}return r.abrupt("return",n);case 2:return r.next=4,f();case 4:if(!r.sent){r.next=6;break}return r.abrupt("return",h);case 6:return r.abrupt("return",n);case 7:case"end":return r.stop()}},m)}));function t(m){return s.apply(this,arguments)}return t}(),hasExtensionInstalled:function(){var s=b()(u()().mark(function m(){return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",f());case 1:case"end":return p.stop()}},m)}));function t(){return s.apply(this,arguments)}return t}(),hasWalletReady:function(){var s=b()(u()().mark(function m(){var C;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,f();case 2:return C=r.sent,r.abrupt("return",!!(C||n));case 4:case"end":return r.stop()}},m)}));function t(){return s.apply(this,arguments)}return t}(),getQrCode:n?v:void 0})}),this.wallet=e,this.name=e.name,e.extensions&&this.connectors.push(e.name),e.app&&this.connectors.push("WalletConnect")}),kn=function(e){return new j(y()(y()({},$.Zv),e))},jn=["useWalletConnectOfficialModal"],Sn=function(e){var w=e||{},l=w.useWalletConnectOfficialModal,n=l===void 0?!1:l,h=J()(w,jn);return{connectors:["WalletConnect"],create:function(v){var f=void 0,s=function(){var t=b()(u()().mark(function m(){var C,p;return u()().wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return R.next=2,v==null||(C=v[0])===null||C===void 0?void 0:C.getProvider();case 2:return p=R.sent,R.abrupt("return",new Promise(function(D){if(f){D({uri:f});return}p==null||p.on("display_uri",function(S){f=S,D({uri:S})})}));case 4:case"end":return R.stop()}},m)}));return function(){return t.apply(this,arguments)}}();return y()(y()({},$.Tl),{},{hasWalletReady:function(){var t=b()(u()().mark(function C(){return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",!0);case 1:case"end":return r.stop()}},C)}));function m(){return t.apply(this,arguments)}return m}(),getQrCode:n?void 0:s},h)}}},Nn=function(e){return{connectors:["Coinbase Wallet"],create:function(){return y()(y()({},$.p_),{},{hasWalletReady:function(){var l=b()(u()().mark(function h(){return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",!0);case 1:case"end":return v.stop()}},h)}));function n(){return l.apply(this,arguments)}return n}()},e)}}},On=function(e){return new j(y()(y()({},$.eu),e))},Dn=function(e){return{connectors:["Safeheron"],create:function(l){return y()(y()({},$.OJ),{},{hasWalletReady:function(){var n=b()(u()().mark(function c(){var v;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,l==null||(v=l[0])===null||v===void 0?void 0:v.getProvider();case 2:return s.abrupt("return",!!s.sent);case 3:case"end":return s.stop()}},c)}));function h(){return n.apply(this,arguments)}return h}(),hasExtensionInstalled:function(){var n=b()(u()().mark(function c(){var v;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,l==null||(v=l[0])===null||v===void 0?void 0:v.getProvider();case 2:return s.abrupt("return",!!s.sent);case 3:case"end":return s.stop()}},c)}));function h(){return n.apply(this,arguments)}return h}()},e)}}},Qn=function(e){return new j(y()(y()({},$.tw),e))},Fn=function(e){return new j(y()(y()({},$.o4),e))},xn=i(36123)},36123:function(){}}]);
