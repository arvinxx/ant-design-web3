"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[5977],{95977:function(Jt,lt,p){p.d(lt,{Z:function(){return It}});var $e=p(88028),O=p(2595),be=p(69947),T=p(41171),N=p(22481),it=p(51282),t=p(50959),Oe=p(10422),ot=p(84875),Ze=p.n(ot),Ne=p(87040),Fe=t.forwardRef(function(e,u){var r=e.height,l=e.offsetY,h=e.offsetX,n=e.children,s=e.prefixCls,v=e.onInnerResize,m=e.innerProps,E=e.rtl,S=e.extra,a={},f={display:"flex",flexDirection:"column"};if(l!==void 0){var i;a={height:r,position:"relative",overflow:"hidden"},f=(0,O.Z)((0,O.Z)({},f),{},(i={transform:"translateY(".concat(l,"px)")},(0,N.Z)(i,E?"marginRight":"marginLeft",-h),(0,N.Z)(i,"position","absolute"),(0,N.Z)(i,"left",0),(0,N.Z)(i,"right",0),(0,N.Z)(i,"top",0),i))}return t.createElement("div",{style:a},t.createElement(Ne.Z,{onResize:function(g){var d=g.offsetHeight;d&&v&&v()}},t.createElement("div",(0,$e.Z)({style:f,className:Ze()((0,N.Z)({},"".concat(s,"-holder-inner"),s)),ref:u},m),n,S)))});Fe.displayName="Filler";var ut=Fe,B=p(51537);function Ye(e,u){var r="touches"in e?e.touches[0]:e;return r[u?"pageX":"pageY"]}var st=t.forwardRef(function(e,u){var r,l=e.prefixCls,h=e.rtl,n=e.scrollOffset,s=e.scrollRange,v=e.onStartMove,m=e.onStopMove,E=e.onScroll,S=e.horizontal,a=e.spinSize,f=e.containerSize,i=e.style,R=e.thumbStyle,g=t.useState(!1),d=(0,T.Z)(g,2),Z=d[0],y=d[1],D=t.useState(null),w=(0,T.Z)(D,2),F=w[0],V=w[1],b=t.useState(null),G=(0,T.Z)(b,2),I=G[0],Y=G[1],P=!h,ee=t.useRef(),x=t.useRef(),X=t.useState(!1),te=(0,T.Z)(X,2),re=te[0],J=te[1],$=t.useRef(),k=function(){clearTimeout($.current),J(!0),$.current=setTimeout(function(){J(!1)},3e3)},ne=s-f||0,oe=f-a||0,ae=ne>0,K=t.useMemo(function(){if(n===0||ne===0)return 0;var H=n/ne;return H*oe},[n,ne,oe]),xe=function(L){L.stopPropagation(),L.preventDefault()},ue=t.useRef({top:K,dragging:Z,pageY:F,startTop:I});ue.current={top:K,dragging:Z,pageY:F,startTop:I};var ce=function(L){y(!0),V(Ye(L,S)),Y(ue.current.top),v(),L.stopPropagation(),L.preventDefault()};t.useEffect(function(){var H=function(he){he.preventDefault()},L=ee.current,j=x.current;return L.addEventListener("touchstart",H),j.addEventListener("touchstart",ce),function(){L.removeEventListener("touchstart",H),j.removeEventListener("touchstart",ce)}},[]);var ve=t.useRef();ve.current=ne;var de=t.useRef();de.current=oe,t.useEffect(function(){if(Z){var H,L=function(he){var Se=ue.current,pe=Se.dragging,se=Se.pageY,ze=Se.startTop;if(B.Z.cancel(H),pe){var ge=Ye(he,S)-se,le=ze;!P&&S?le-=ge:le+=ge;var Ee=ve.current,ie=de.current,Q=ie?le/ie:0,W=Math.ceil(Q*Ee);W=Math.max(W,0),W=Math.min(W,Ee),H=(0,B.Z)(function(){E(W,S)})}},j=function(){y(!1),m()};return window.addEventListener("mousemove",L),window.addEventListener("touchmove",L),window.addEventListener("mouseup",j),window.addEventListener("touchend",j),function(){window.removeEventListener("mousemove",L),window.removeEventListener("touchmove",L),window.removeEventListener("mouseup",j),window.removeEventListener("touchend",j),B.Z.cancel(H)}}},[Z]),t.useEffect(function(){k()},[n]),t.useImperativeHandle(u,function(){return{delayHidden:k}});var U="".concat(l,"-scrollbar"),z={position:"absolute",visibility:re&&ae?null:"hidden"},A={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return S?(z.height=8,z.left=0,z.right=0,z.bottom=0,A.height="100%",A.width=a,P?A.left=K:A.right=K):(z.width=8,z.top=0,z.bottom=0,P?z.right=0:z.left=0,A.width="100%",A.height=a,A.top=K),t.createElement("div",{ref:ee,className:Ze()(U,(r={},(0,N.Z)(r,"".concat(U,"-horizontal"),S),(0,N.Z)(r,"".concat(U,"-vertical"),!S),(0,N.Z)(r,"".concat(U,"-visible"),re),r)),style:(0,O.Z)((0,O.Z)({},z),i),onMouseDown:xe,onMouseMove:k},t.createElement("div",{ref:x,className:Ze()("".concat(U,"-thumb"),(0,N.Z)({},"".concat(U,"-thumb-moving"),Z)),style:(0,O.Z)((0,O.Z)({},A),R),onMouseDown:ce}))}),Xe=st;function ft(e){var u=e.children,r=e.setRef,l=t.useCallback(function(h){r(h)},[]);return t.cloneElement(u,{ref:l})}function ct(e,u,r,l,h,n,s){var v=s.getKey;return e.slice(u,r+1).map(function(m,E){var S=u+E,a=n(m,S,{style:{width:l}}),f=v(m);return t.createElement(ft,{key:f,setRef:function(R){return h(m,R)}},a)})}var vt=p(7821),dt=p(21953),ht=p(99044),St=function(){function e(){(0,dt.Z)(this,e),this.maps=void 0,this.id=0,this.maps=Object.create(null)}return(0,ht.Z)(e,[{key:"set",value:function(r,l){this.maps[r]=l,this.id+=1}},{key:"get",value:function(r){return this.maps[r]}}]),e}(),gt=St;function mt(e,u,r){var l=t.useState(0),h=(0,T.Z)(l,2),n=h[0],s=h[1],v=(0,t.useRef)(new Map),m=(0,t.useRef)(new gt),E=(0,t.useRef)();function S(){B.Z.cancel(E.current)}function a(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;S();var R=function(){v.current.forEach(function(d,Z){if(d&&d.offsetParent){var y=(0,vt.Z)(d),D=y.offsetHeight;m.current.get(Z)!==D&&m.current.set(Z,y.offsetHeight)}}),s(function(d){return d+1})};i?R():E.current=(0,B.Z)(R)}function f(i,R){var g=e(i),d=v.current.get(g);R?(v.current.set(g,R),a()):v.current.delete(g),!d!=!R&&(R?u==null||u(i):r==null||r(i))}return(0,t.useEffect)(function(){return S},[]),[f,a,m.current,n]}var fe=p(12334),We=p(5353),Rt=10;function Mt(e,u,r,l,h,n,s,v){var m=t.useRef(),E=t.useState(null),S=(0,T.Z)(E,2),a=S[0],f=S[1];return(0,fe.Z)(function(){if(a&&a.times<Rt){if(!e.current){f(function(k){return(0,O.Z)({},k)});return}n();var i=a.targetAlign,R=a.originAlign,g=a.index,d=a.offset,Z=e.current.clientHeight,y=!1,D=i,w=null;if(Z){for(var F=i||R,V=0,b=0,G=0,I=Math.min(u.length-1,g),Y=0;Y<=I;Y+=1){var P=h(u[Y]);b=V;var ee=r.get(P);G=b+(ee===void 0?l:ee),V=G}for(var x=F==="top"?d:Z-d,X=I;X>=0;X-=1){var te=h(u[X]),re=r.get(te);if(re===void 0){y=!0;break}if(x-=re,x<=0)break}switch(F){case"top":w=b-d;break;case"bottom":w=G-Z+d;break;default:{var J=e.current.scrollTop,$=J+Z;b<J?D="top":G>$&&(D="bottom")}}w!==null&&s(w),w!==a.lastTop&&(y=!0)}y&&f(function(k){return(0,O.Z)((0,O.Z)({},k),{},{times:k.times+1,targetAlign:D,lastTop:w})})}},[a,e.current]),function(i){if(i==null){v();return}if(B.Z.cancel(m.current),typeof i=="number")s(i);else if(i&&(0,be.Z)(i)==="object"){var R,g=i.align;"index"in i?R=i.index:R=u.findIndex(function(y){return h(y)===i.key});var d=i.offset,Z=d===void 0?0:d;f({times:0,index:R,offset:Z,originAlign:g})}}}function Qt(e,u,r,l){var h=r-e,n=u-r,s=Math.min(h,n)*2;if(l<=s){var v=Math.floor(l/2);return l%2?r+v+1:r-v}return h>n?r-(l-n):r+(l-h)}function Zt(e,u,r){var l=e.length,h=u.length,n,s;if(l===0&&h===0)return null;l<h?(n=e,s=u):(n=u,s=e);var v={__EMPTY_ITEM__:!0};function m(R){return R!==void 0?r(R):v}for(var E=null,S=Math.abs(l-h)!==1,a=0;a<s.length;a+=1){var f=m(n[a]),i=m(s[a]);if(f!==i){E=a,S=S||f!==m(s[a+1]);break}}return E===null?null:{index:E,multiple:S}}function yt(e,u,r){var l=t.useState(e),h=(0,T.Z)(l,2),n=h[0],s=h[1],v=t.useState(null),m=(0,T.Z)(v,2),E=m[0],S=m[1];return t.useEffect(function(){var a=Zt(n||[],e||[],u);(a==null?void 0:a.index)!==void 0&&(r==null||r(a.index),S(e[a.index])),s(e)},[e]),[E]}var Et=(typeof navigator>"u"?"undefined":(0,be.Z)(navigator))==="object"&&/Firefox/i.test(navigator.userAgent),Be=Et,Ve=function(e,u){var r=(0,t.useRef)(!1),l=(0,t.useRef)(null);function h(){clearTimeout(l.current),r.current=!0,l.current=setTimeout(function(){r.current=!1},50)}var n=(0,t.useRef)({top:e,bottom:u});return n.current.top=e,n.current.bottom=u,function(s){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=s<0&&n.current.top||s>0&&n.current.bottom;return v&&m?(clearTimeout(l.current),r.current=!1):(!m||r.current)&&h(),!r.current&&m}};function bt(e,u,r,l,h){var n=(0,t.useRef)(0),s=(0,t.useRef)(null),v=(0,t.useRef)(null),m=(0,t.useRef)(!1),E=Ve(u,r);function S(d,Z){B.Z.cancel(s.current),n.current+=Z,v.current=Z,!E(Z)&&(Be||d.preventDefault(),s.current=(0,B.Z)(function(){var y=m.current?10:1;h(n.current*y),n.current=0}))}function a(d,Z){h(Z,!0),Be||d.preventDefault()}var f=(0,t.useRef)(null),i=(0,t.useRef)(null);function R(d){if(e){B.Z.cancel(i.current),i.current=(0,B.Z)(function(){f.current=null},2);var Z=d.deltaX,y=d.deltaY,D=d.shiftKey,w=Z,F=y;(f.current==="sx"||!f.current&&D&&y&&!Z)&&(w=y,F=0,f.current="sx");var V=Math.abs(w),b=Math.abs(F);f.current===null&&(f.current=l&&V>b?"x":"y"),f.current==="y"?S(d,F):a(d,w)}}function g(d){e&&(m.current=d.detail===v.current)}return[R,g]}var xt=14/15;function pt(e,u,r){var l=(0,t.useRef)(!1),h=(0,t.useRef)(0),n=(0,t.useRef)(null),s=(0,t.useRef)(null),v,m=function(f){if(l.current){var i=Math.ceil(f.touches[0].pageY),R=h.current-i;h.current=i,r(R)&&f.preventDefault(),clearInterval(s.current),s.current=setInterval(function(){R*=xt,(!r(R,!0)||Math.abs(R)<=.1)&&clearInterval(s.current)},16)}},E=function(){l.current=!1,v()},S=function(f){v(),f.touches.length===1&&!l.current&&(l.current=!0,h.current=Math.ceil(f.touches[0].pageY),n.current=f.target,n.current.addEventListener("touchmove",m),n.current.addEventListener("touchend",E))};v=function(){n.current&&(n.current.removeEventListener("touchmove",m),n.current.removeEventListener("touchend",E))},(0,fe.Z)(function(){return e&&u.current.addEventListener("touchstart",S),function(){var a;(a=u.current)===null||a===void 0||a.removeEventListener("touchstart",S),v(),clearInterval(s.current)}},[e])}var zt=20;function ke(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=e/u*100;return isNaN(r)&&(r=0),r=Math.max(r,zt),r=Math.min(r,e/2),Math.floor(r)}function Lt(e,u,r,l){var h=t.useMemo(function(){return[new Map,[]]},[e,r.id,l]),n=(0,T.Z)(h,2),s=n[0],v=n[1],m=function(S){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:S,f=s.get(S),i=s.get(a);if(f===void 0||i===void 0)for(var R=e.length,g=v.length;g<R;g+=1){var d,Z=e[g],y=u(Z);s.set(y,g);var D=(d=r.get(y))!==null&&d!==void 0?d:l;if(v[g]=(v[g-1]||0)+D,y===S&&(f=g),y===a&&(i=g),f!==void 0&&i!==void 0)break}return{top:v[f-1]||0,bottom:v[i]}};return m}var Ct=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles"],Tt=[],wt={overflowY:"auto",overflowAnchor:"none"};function Ht(e,u){var r=e.prefixCls,l=r===void 0?"rc-virtual-list":r,h=e.className,n=e.height,s=e.itemHeight,v=e.fullHeight,m=v===void 0?!0:v,E=e.style,S=e.data,a=e.children,f=e.itemKey,i=e.virtual,R=e.direction,g=e.scrollWidth,d=e.component,Z=d===void 0?"div":d,y=e.onScroll,D=e.onVirtualScroll,w=e.onVisibleChange,F=e.innerProps,V=e.extraRender,b=e.styles,G=(0,it.Z)(e,Ct),I=!!(i!==!1&&n&&s),Y=I&&S&&(s*S.length>n||!!g),P=R==="rtl",ee=Ze()(l,(0,N.Z)({},"".concat(l,"-rtl"),P),h),x=S||Tt,X=(0,t.useRef)(),te=(0,t.useRef)(),re=(0,t.useState)(0),J=(0,T.Z)(re,2),$=J[0],k=J[1],ne=(0,t.useState)(0),oe=(0,T.Z)(ne,2),ae=oe[0],K=oe[1],xe=(0,t.useState)(!1),ue=(0,T.Z)(xe,2),ce=ue[0],ve=ue[1],de=function(){ve(!0)},U=function(){ve(!1)},z=t.useCallback(function(o){return typeof f=="function"?f(o):o==null?void 0:o[f]},[f]),A={getKey:z};function H(o){k(function(c){var M;typeof o=="function"?M=o(c):M=o;var C=Yt(M);return X.current.scrollTop=C,C})}var L=(0,t.useRef)({start:0,end:x.length}),j=(0,t.useRef)(),ye=yt(x,z),he=(0,T.Z)(ye,1),Se=he[0];j.current=Se;var pe=mt(z,null,null),se=(0,T.Z)(pe,4),ze=se[0],ge=se[1],le=se[2],Ee=se[3],ie=t.useMemo(function(){if(!I)return{scrollHeight:void 0,start:0,end:x.length-1,offset:void 0};if(!Y){var o;return{scrollHeight:((o=te.current)===null||o===void 0?void 0:o.offsetHeight)||0,start:0,end:x.length-1,offset:void 0}}for(var c=0,M,C,_,Gt=x.length,Me=0;Me<Gt;Me+=1){var Ut=x[Me],jt=z(Ut),at=le.get(jt),Pe=c+(at===void 0?s:at);Pe>=$&&M===void 0&&(M=Me,C=c),Pe>$+n&&_===void 0&&(_=Me),c=Pe}return M===void 0&&(M=0,C=0,_=Math.ceil(n/s)),_===void 0&&(_=x.length-1),_=Math.min(_+1,x.length-1),{scrollHeight:c,start:M,end:_,offset:C}},[Y,I,$,x,Ee,n]),Q=ie.scrollHeight,W=ie.start,me=ie.end,Ae=ie.offset;L.current.start=W,L.current.end=me;var Pt=t.useState({width:0,height:n}),Ge=(0,T.Z)(Pt,2),q=Ge[0],$t=Ge[1],Ot=function(c){$t(c)},Ue=(0,t.useRef)(),je=(0,t.useRef)(),Nt=t.useMemo(function(){return ke(q.width,g)},[q.width,g]),Ft=t.useMemo(function(){return ke(q.height,Q)},[q.height,Q]),Le=Q-n,Ce=(0,t.useRef)(Le);Ce.current=Le;function Yt(o){var c=o;return Number.isNaN(Ce.current)||(c=Math.min(c,Ce.current)),c=Math.max(c,0),c}var Je=$<=0,Qe=$>=Le,Xt=Ve(Je,Qe),Te=function(){return{x:P?-ae:ae,y:$}},we=(0,t.useRef)(Te()),He=(0,We.useEvent)(function(){if(D){var o=Te();(we.current.x!==o.x||we.current.y!==o.y)&&(D(o),we.current=o)}});function qe(o,c){var M=o;c?((0,Oe.flushSync)(function(){K(M)}),He()):H(M)}function Wt(o){var c=o.currentTarget.scrollTop;c!==$&&H(c),y==null||y(o),He()}var De=function(c){var M=c,C=g-q.width;return M=Math.max(M,0),M=Math.min(M,C),M},Bt=(0,We.useEvent)(function(o,c){c?((0,Oe.flushSync)(function(){K(function(M){var C=M+(P?-o:o);return De(C)})}),He()):H(function(M){var C=M+o;return C})}),Vt=bt(I,Je,Qe,!!g,Bt),_e=(0,T.Z)(Vt,2),Ie=_e[0],et=_e[1];pt(I,X,function(o,c){return Xt(o,c)?!1:(Ie({preventDefault:function(){},deltaY:o}),!0)}),(0,fe.Z)(function(){function o(M){I&&M.preventDefault()}var c=X.current;return c.addEventListener("wheel",Ie),c.addEventListener("DOMMouseScroll",et),c.addEventListener("MozMousePixelScroll",o),function(){c.removeEventListener("wheel",Ie),c.removeEventListener("DOMMouseScroll",et),c.removeEventListener("MozMousePixelScroll",o)}},[I]),(0,fe.Z)(function(){g&&K(function(o){return De(o)})},[q.width,g]);var tt=function(){var c,M;(c=Ue.current)===null||c===void 0||c.delayHidden(),(M=je.current)===null||M===void 0||M.delayHidden()},rt=Mt(X,x,le,s,z,function(){return ge(!0)},H,tt);t.useImperativeHandle(u,function(){return{getScrollInfo:Te,scrollTo:function(c){function M(C){return C&&(0,be.Z)(C)==="object"&&("left"in C||"top"in C)}M(c)?(c.left!==void 0&&K(De(c.left)),rt(c.top)):rt(c)}}}),(0,fe.Z)(function(){if(w){var o=x.slice(W,me+1);w(o,x)}},[W,me,x]);var kt=Lt(x,z,le,s),Kt=V==null?void 0:V({start:W,end:me,virtual:Y,offsetX:ae,offsetY:Ae,rtl:P,getSize:kt}),At=ct(x,W,me,g,ze,a,A),Re=null;n&&(Re=(0,O.Z)((0,N.Z)({},m?"height":"maxHeight",n),wt),I&&(Re.overflowY="hidden",g&&(Re.overflowX="hidden"),ce&&(Re.pointerEvents="none")));var nt={};return P&&(nt.dir="rtl"),t.createElement("div",(0,$e.Z)({style:(0,O.Z)((0,O.Z)({},E),{},{position:"relative"}),className:ee},nt,G),t.createElement(Ne.Z,{onResize:Ot},t.createElement(Z,{className:"".concat(l,"-holder"),style:Re,ref:X,onScroll:Wt,onMouseEnter:tt},t.createElement(ut,{prefixCls:l,height:Q,offsetX:ae,offsetY:Ae,scrollWidth:g,onInnerResize:ge,ref:te,innerProps:F,rtl:P,extra:Kt},At))),Y&&Q>n&&t.createElement(Xe,{ref:Ue,prefixCls:l,scrollOffset:$,scrollRange:Q,rtl:P,onScroll:qe,onStartMove:de,onStopMove:U,spinSize:Ft,containerSize:q.height,style:b==null?void 0:b.verticalScrollBar,thumbStyle:b==null?void 0:b.verticalScrollBarThumb}),Y&&g&&t.createElement(Xe,{ref:je,prefixCls:l,scrollOffset:ae,scrollRange:g,rtl:P,onScroll:qe,onStartMove:de,onStopMove:U,spinSize:Nt,containerSize:q.width,horizontal:!0,style:b==null?void 0:b.horizontalScrollBar,thumbStyle:b==null?void 0:b.horizontalScrollBarThumb}))}var Ke=t.forwardRef(Ht);Ke.displayName="List";var Dt=Ke,It=Dt}}]);
