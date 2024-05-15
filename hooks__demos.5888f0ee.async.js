"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[6652],{81121:function(C,n,e){e.r(n);var l=e(50959),_=e(53042),o=e(64119),r=e(11527),E=function(){var d=(0,_.Z)(),a=d.account;return a?(0,r.jsx)(o.Z,{direction:"vertical",children:a.address}):(0,r.jsx)("div",{children:"Not Connected"})};n.default=E},81782:function(C,n,e){e.r(n);var l=e(90228),_=e.n(l),o=e(87999),r=e.n(o),E=e(48305),f=e.n(E),d=e(50959),a=e(53042),m=e(85258),P=e(57481),T=e(77004),v=e(11527),h=function(){var D=(0,a.Z)(),t=D.account,s=(0,m.Z)(),u=s.connect,i=s.disconnect;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(T.ZP,{onClick:function(){if(t){i==null||i();return}console.log("connect"),u==null||u()},children:t?"Disconnect":"Connect"}),t?(0,v.jsxs)("p",{children:["Account: ",t==null?void 0:t.address]}):(0,v.jsx)("p",{children:"Not Connected"})]})},g=function(){var D=d.useState(),t=f()(D,2),s=t[0],u=t[1];return(0,v.jsx)(P.B,{account:s,connect:r()(_()().mark(function i(){return _()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:console.log("connect call"),u({address:"0x1234567890123456789012345678901234567890"});case 2:case"end":return c.stop()}},i)})),disconnect:r()(_()().mark(function i(){return _()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:u(void 0);case 1:case"end":return c.stop()}},i)})),children:(0,v.jsx)(h,{})})};n.default=g},65697:function(C,n,e){e.r(n);var l=e(50959),_=e(33420),o=e(39821),r=e(11527),E=function(){var d=(0,_.Z)("0x79fcdef22feed20eddacbb2587640e45491b757f",42n),a=d.metadata,m=d.error,P=d.loading;return m?(0,r.jsx)("div",{children:m.message}):(0,r.jsx)(o.Z,{spinning:P,children:a.name})};n.default=E},25557:function(C,n,e){var l=e(22894);n.Z=l.Z},22894:function(C,n){var e={ConnectButton:{connect:"Connect Wallet",disconnect:"Disconnect",copyAddress:"Copy Address",copied:"Copied!",walletAddress:"Wallet address",moreWallets:"More Wallets"},ConnectModal:{title:"Connect Wallet",guideTitle:"What is a Wallet?",guideInfos1Title:"Manage your private key and assets",guideInfos1Desc:"Manage your private key and the assets of the corresponding chain address",guideInfos2Title:"Help you connect to DApp",guideInfos2Desc:"Authorize DApp to get your address, similar to login",guideInfos3Title:"Call smart contract",guideInfos3Desc:"Through authorization of private key signature, initiate interaction with smart contract on the chain",guideInfosGetWalletBtnText:"Get a Wallet",guideInfosMoreLinkText:"Learn More",getWalletBtnText:"Get",getWalletUniversalProtocolBtnText:"About",getWalletPanelTitle:"Get a Wallet",getWalletPanelInfoDesc:"Select a wallet on the left to get started with a different wallet provider.",qrCodePanelTitleForDownload:"Download {walletName}",qrCodePanelTitleForScan:"Scan with {walletName}",qrCodePanelTitleForUniversalProtocol:"Scan with your wallet",qrCodePanelLinkForDownload:"Click to go to the download page",qrCodePanelLinkForConnect:"Click to connect directly",qrCodePanelDownloadTipForReady:"Scan the QR code to download the wallet.",qrCodePanelDownloadTipForNotReady:"Don't have",qrCodePanelUniversalProtocolTipForNotReady:"Don't know",walletCardPanelTitle:"Get {selectedWalletName}",walletCardAppTitle:"{selectedWalletName} for Mobile",walletCardAppDesc:"Use the mobile wallet to explore the world of Ethereum.",walletCardExtensionTitle:"{selectedWalletName} for {selectedExtensionBrowserName}",guideTipTitle:"New to crypto wallets?",guideTipLearnMoreLinkText:"Learn More",walletPanelPlugin:"PLUGIN",walletConnectSuccess:"Wallet Connected!",getWalletTipsTitle:"Not what you're looking for?",getWalletTipsDesc:"Select a wallet on the left to get started with a different wallet provider.",linkWallet:"Link",walletConnecting:"Connecting..."},NFTCard:{actionText:"Buy Now"},Address:{copyTips:"Copy Address",copiedTips:"Address Copied!"}};n.Z=e},87224:function(C,n,e){e.d(n,{E:function(){return o}});var l=e(50959),_=e(25557),o=l.createContext({defaultLocale:_.Z})},57481:function(C,n,e){e.d(n,{B:function(){return h},E:function(){return a.E}});var l=e(26068),_=e.n(l),o=e(67825),r=e.n(o),E=e(50959),f=e(3835),d=e(25557),a=e(87224),m=e(11527),P=["children","parentContext"],T=["extendsContextFromParent"],v=function(M){var D=M.children,t=M.parentContext,s=r()(M,P),u=_()({},t);Object.keys(s).forEach(function(O){var c=O;s[c]!==void 0&&(u[c]=s[c])});var i=(0,E.useMemo)(function(){if(t!=null&&t.locale&&s.locale)return(0,f.Z)(t.locale,s.locale)},[t==null?void 0:t.locale,s.locale]);return u.locale=i??u.locale,(0,m.jsx)(a.E.Provider,{value:u,children:D})},h=function(M){var D=M.extendsContextFromParent,t=D===void 0?!0:D,s=r()(M,T),u=E.useContext(a.E),i=t?u:void 0;return(0,m.jsx)(v,_()(_()({},s),{},{defaultLocale:d.Z,parentContext:i,extendsContextFromParent:t}))}},53042:function(C,n,e){e.d(n,{Z:function(){return _}});var l=e(10799);function _(){var o=(0,l.Z)(),r=o.account;return{account:r}}},85258:function(C,n,e){e.d(n,{Z:function(){return _}});var l=e(10799);function _(){var o=(0,l.Z)(),r=o.connect,E=o.disconnect;return{connect:r,disconnect:E}}},33420:function(C,n,e){e.d(n,{Z:function(){return E}});var l=e(48305),_=e.n(l),o=e(50959),r=e(10799);function E(f,d,a){var m=(0,o.useState)({}),P=_()(m,2),T=P[0],v=P[1],h=(0,o.useState)(!1),g=_()(h,2),M=g[0],D=g[1],t=(0,o.useState)(),s=_()(t,2),u=s[0],i=s[1],O=(0,r.Z)({getNFTMetadata:a}),c=O.getNFTMetadata;return(0,o.useEffect)(function(){!f||!d||(c?(D(!0),c({address:f,tokenId:BigInt(d)}).then(function(p){v(p)}).catch(function(p){i(p),v({})}).finally(function(){D(!1)})):i(new Error("Provider is not ready")))},[f,d,c]),{loading:M,metadata:T,error:u}}},10799:function(C,n,e){e.d(n,{Z:function(){return f}});var l=e(26068),_=e.n(l),o=e(50959),r=e(87224);function E(d,a){var m=_()({},d);if(a)for(var P in a)a&&a[P]!==void 0&&(m[P]=a[P]);return m}function f(d){var a=o.useContext(r.E);return E(a,d)}}}]);
