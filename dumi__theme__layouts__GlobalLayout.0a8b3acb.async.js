"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[1032],{77862:function(z,x,t){t.r(x),t.d(x,{default:function(){return R}});var y=t(48305),D=t.n(y),A=t(50959),d=t(11188),u=t(79641),F=t(96986),W=t(26068),w=t.n(W),g=t(67825),L=t.n(g),N=t(43456),B=t(17938),S=t(91637),r=t(11527),j=["children","theme"],T=64,M=38,G=function(c){var s=c.children,i=c.theme,f=L()(c,j),p=N.Z.useToken(),h=p.token;return(0,A.useEffect)(function(){B.ZP.config({theme:i})},[i]),(0,r.jsx)(S.f6,w()(w()({},f),{},{theme:i,customToken:{bannerHeight:M,headerHeight:T,anchorTop:T+h.margin},children:s}))},H=G,U=function(){var c=(0,u.pC)(),s=(0,u.TH)(),i=s.pathname,f=(0,u.OI)(),p=D()(f,1),h=p[0],C=(0,u.YB)(),m=C.locale;return(0,r.jsx)(F.By,{children:(0,r.jsx)(d.BQ,{locale:m==="zh-CN"?d.bF:d.iF,children:(0,r.jsx)(H,{themeMode:h||"auto",children:(0,r.jsx)("div",{className:i==="/"||i==="/index-cn"?"home":"",children:c})})})})},R=U},11188:function(z,x,t){t.d(x,{XN:function(){return y},E_:function(){return k},JR:function(){return D},G8:function(){return U},BQ:function(){return $},sT:function(){return S},al:function(){return m},ln:function(){return R},iF:function(){return C},O_:function(){return L},hB:function(){return W},Tg:function(){return B},ZT:function(){return T},M4:function(){return N},Xw:function(){return w},lp:function(){return G},bF:function(){return J}});var y=function(e){return e[e.Mainnet=1]="Mainnet",e[e.Polygon=137]="Polygon",e[e.BSC=56]="BSC",e[e.Arbitrum=42161]="Arbitrum",e[e.Optimism=10]="Optimism",e[e.Goerli=5]="Goerli",e[e.Avalanche=43114]="Avalanche",e[e.X1Testnet=195]="X1Testnet",e[e.Sepolia=11155111]="Sepolia",e[e.Holesky=17e3]="Holesky",e[e.Scroll=534352]="Scroll",e[e.ScrollSepolia=534351]="ScrollSepolia",e[e.Hardhat=31337]="Hardhat",e[e.Localhost=1337]="Localhost",e}({}),D=function(e){return e[e.MainnetBeta=2]="MainnetBeta",e[e.Devnet=3]="Devnet",e[e.Testnet=4]="Testnet",e}({}),A=t(90228),d=t.n(A),u=t(87999),F=t.n(u);function W(e){if(!e)return e;var o=e;return e.startsWith("ipfs://")&&(o="https://ipfs.io/ipfs/".concat(e.replace("ipfs://",""))),o}function w(e){return g.apply(this,arguments)}function g(){return g=F()(d()().mark(function e(o){return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(o){n.next=2;break}throw new Error("URL not set");case 2:return n.abrupt("return",fetch(W(o)).then(function(a){return a.json()}));case 3:case"end":return n.stop()}},e)})),g.apply(this,arguments)}function L(e){return e.startsWith("0x")?e:"0x".concat(e)}function N(e){if(e!==void 0)return typeof e!="bigint"?BigInt(e):e}function B(e){e.json=function(){return Promise.resolve(e)};var o=function(){return Promise.resolve(e)},l=function(){return o()};Object.defineProperty(window,"fetch",{value:l})}var S=function(o){return function(l,n){if(n==="address")return"".concat(o,"/address/").concat(l);if(n==="transaction")return"".concat(o,"/tx/").concat(l);throw new Error("getBrowserLink unsupported type ".concat(n))}},r=t(50959),j=t(76737);function T(){}var M=null;function G(){M=null,(0,j.resetWarned)()}var H=null,U=r.createContext({}),R=function(){var e=function(){};return e.deprecated=T,e},b=null,c=t(26068),s=t.n(c),i=t(67825),f=t.n(i),p=t(3835),h={ConnectButton:{connect:"Connect Wallet",disconnect:"Disconnect",copyAddress:"Copy Address",copied:"Copied!",walletAddress:"Wallet address",moreWallets:"More Wallets"},ConnectModal:{title:"Connect Wallet",guideTitle:"What is a Wallet?",guideInfos1Title:"Manage your private key and assets",guideInfos1Desc:"Manage your private key and the assets of the corresponding chain address",guideInfos2Title:"Help you connect to DApp",guideInfos2Desc:"Authorize DApp to get your address, similar to login",guideInfos3Title:"Call smart contract",guideInfos3Desc:"Through authorization of private key signature, initiate interaction with smart contract on the chain",guideInfosGetWalletBtnText:"Get a Wallet",guideInfosMoreLinkText:"Learn More",getWalletBtnText:"Get",getWalletUniversalProtocolBtnText:"About",getWalletPanelTitle:"Get a Wallet",getWalletPanelInfoDesc:"Select a wallet on the left to get started with a different wallet provider.",qrCodePanelTitleForDownload:"Download {walletName}",qrCodePanelTitleForScan:"Scan with {walletName}",qrCodePanelTitleForUniversalProtocol:"Scan with your wallet",qrCodePanelLinkForDownload:"Click to go to the download page",qrCodePanelLinkForConnect:"Click to connect directly",qrCodePanelDownloadTipForReady:"Scan the QR code to download the wallet.",qrCodePanelDownloadTipForNotReady:"Don't have",qrCodePanelUniversalProtocolTipForNotReady:"Don't know",walletCardPanelTitle:"Get {selectedWalletName}",walletCardAppTitle:"{selectedWalletName} for Mobile",walletCardAppDesc:"Use the mobile wallet to explore the world of Ethereum.",walletCardExtensionTitle:"{selectedWalletName} for {selectedExtensionBrowserName}",guideTipTitle:"New to crypto wallets?",guideTipLearnMoreLinkText:"Learn More",walletPanelPlugin:"PLUGIN",walletConnectSuccess:"Wallet Connected!",getWalletTipsTitle:"Not what you're looking for?",getWalletTipsDesc:"Select a wallet on the left to get started with a different wallet provider.",linkWallet:"Link",walletConnecting:"Connecting..."},NFTCard:{actionText:"Buy Now"},Address:{copyTips:"Copy Address",copiedTips:"Address Copied!"}},C=h,m=C,k=r.createContext({defaultLocale:m}),O=t(11527),X=["children","parentContext"],Z=["extendsContextFromParent"],Q=function(o){var l=o.children,n=o.parentContext,a=f()(o,X),v=s()({},n);Object.keys(a).forEach(function(K){var E=K;a[E]!==void 0&&(v[E]=a[E])});var P=(0,r.useMemo)(function(){if(n!=null&&n.locale&&a.locale)return(0,p.Z)(n.locale,a.locale)},[n==null?void 0:n.locale,a.locale]);return v.locale=P??v.locale,(0,O.jsx)(k.Provider,{value:v,children:l})},$=function(o){var l=o.extendsContextFromParent,n=l===void 0?!0:l,a=f()(o,Z),v=r.useContext(k),P=n?v:void 0;return(0,O.jsx)(Q,s()(s()({},a),{},{defaultLocale:m,parentContext:P,extendsContextFromParent:n}))},V={ConnectButton:{connect:"\u8FDE\u63A5\u94B1\u5305",disconnect:"\u65AD\u5F00\u8FDE\u63A5",copyAddress:"\u590D\u5236\u5730\u5740",copied:"\u590D\u5236\u6210\u529F\uFF01",walletAddress:"\u94B1\u5305\u5730\u5740",moreWallets:"\u66F4\u591A\u94B1\u5305"},ConnectModal:{title:"\u8FDE\u63A5\u94B1\u5305",guideTitle:"\u4EC0\u4E48\u662F\u94B1\u5305\uFF1F",guideInfos1Title:"\u7BA1\u7406\u79C1\u94A5\u548C\u8D44\u4EA7",guideInfos1Desc:"\u7BA1\u7406\u79C1\u94A5\u548C\u5BF9\u5E94\u94FE\u5730\u5740\u7684\u8D44\u4EA7",guideInfos2Title:"\u5E2E\u52A9\u4F60\u8FDE\u63A5 DApp",guideInfos2Desc:"\u6388\u6743 DApp \u83B7\u53D6\u4F60\u7684\u5730\u5740\uFF0C\u7C7B\u4F3C\u767B\u5F55",guideInfos3Title:"\u8C03\u7528\u667A\u80FD\u5408\u7EA6",guideInfos3Desc:"\u901A\u8FC7\u6388\u6743\u79C1\u94A5\u7B7E\u540D\uFF0C\u53D1\u8D77\u4E0E\u94FE\u4E0A\u667A\u80FD\u5408\u7EA6\u7684\u4EA4\u4E92",guideInfosGetWalletBtnText:"\u83B7\u53D6\u94B1\u5305",guideInfosMoreLinkText:"\u4E86\u89E3\u66F4\u591A",getWalletBtnText:"\u83B7\u53D6",getWalletUniversalProtocolBtnText:"\u66F4\u591A",getWalletPanelTitle:"\u83B7\u53D6\u94B1\u5305",getWalletPanelInfoDesc:"\u5728\u5DE6\u4FA7\u9009\u62E9\u94B1\u5305\uFF0C\u4EE5\u5F00\u59CB\u4F7F\u7528\u4E0D\u540C\u7684\u94B1\u5305\u63D0\u4F9B\u5546\u3002",qrCodePanelTitleForDownload:"\u4E0B\u8F7D {walletName}",qrCodePanelTitleForScan:"\u4F7F\u7528 {walletName} \u626B\u63CF",qrCodePanelTitleForUniversalProtocol:"\u4F7F\u7528\u4F60\u7684\u94B1\u5305\u626B\u63CF",qrCodePanelLinkForDownload:"\u70B9\u51FB\u524D\u5F80\u4E0B\u8F7D\u9875\u9762",qrCodePanelLinkForConnect:"\u70B9\u51FB\u76F4\u63A5\u8FDE\u63A5",qrCodePanelDownloadTipForReady:"\u626B\u63CF\u4E8C\u7EF4\u7801\u4E0B\u8F7D\u94B1\u5305",qrCodePanelDownloadTipForNotReady:"\u6682\u65E0",qrCodePanelUniversalProtocolTipForNotReady:"\u4E0D\u4E86\u89E3",walletCardPanelTitle:"\u83B7\u53D6 {selectedWalletName}",walletCardAppTitle:"\u5728\u624B\u673A\u4F7F\u7528 {selectedWalletName}",walletCardAppDesc:"\u4F7F\u7528\u79FB\u52A8\u94B1\u5305\u63A2\u7D22\u4EE5\u592A\u574A\u4E16\u754C\u3002",walletCardExtensionTitle:"\u5728 {selectedExtensionBrowserName} \u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528 {selectedWalletName}",guideTipTitle:"\u521D\u6B21\u63A5\u89E6\u52A0\u5BC6\u94B1\u5305?",guideTipLearnMoreLinkText:"\u4E86\u89E3\u66F4\u591A",walletPanelPlugin:"\u63D2\u4EF6",walletConnectSuccess:"\u94B1\u5305\u5DF2\u8FDE\u63A5\uFF01",getWalletTipsTitle:"\u6CA1\u6709\u627E\u5230\u60A8\u60F3\u8981\u7684\uFF1F",getWalletTipsDesc:"\u5728\u5DE6\u4FA7\u9009\u62E9\u4E00\u4E2A\u65B0\u7684\u94B1\u5305\u5F00\u59CB\u5427",linkWallet:"\u8FDE\u63A5",walletConnecting:"\u8FDE\u63A5\u4E2D..."},NFTCard:{actionText:"\u7ACB\u5373\u8D2D\u4E70"},Address:{copyTips:"\u590D\u5236\u5730\u5740",copiedTips:"\u5730\u5740\u590D\u5236\u6210\u529F\uFF01"}},J=V}}]);
