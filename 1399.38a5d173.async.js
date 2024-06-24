"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[1399],{51317:function(v,w,e){e.d(w,{E:function(){return p}});var g=e(1541),h=e(78590);function p(l,m){if(!(0,h.U)(l,{strict:!1}))throw new g.b({address:l});if(!(0,h.U)(m,{strict:!1}))throw new g.b({address:m});return l.toLowerCase()===m.toLowerCase()}},21399:function(v,w,e){e.d(w,{G:function(){return L},offchainLookup:function(){return D},K:function(){return O},offchainLookupSignature:function(){return A}});var g=e(67102),h=e(21798),p=e(86252),l=e(50169);class m extends p.G{constructor({callbackSelector:n,cause:t,data:o,extraData:u,sender:d,urls:a}){var i;super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],(i=t.metaMessages)!=null&&i.length?"":[],"Offchain Gateway Call:",a&&["  Gateway URL(s):",...a.map(f=>`    ${(0,l.Gr)(f)}`)],`  Sender: ${d}`,`  Data: ${o}`,`  Callback selector: ${n}`,`  Extra data: ${u}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class k extends p.G{constructor({result:n,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,l.Gr)(t)}`,`Response: ${(0,h.P)(n)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class M extends p.G{constructor({sender:n,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${n}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var E=e(14246),G=e(46951),P=e(86594),R=e(51317),x=e(73698),C=e(76129);const A="0x556f1830",O={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function D(c,{blockNumber:n,blockTag:t,data:o,to:u}){const{args:d}=(0,G.p)({data:o,abi:[O]}),[a,i,f,r,s]=d,{ccipRead:y}=c,S=y&&typeof(y==null?void 0:y.request)=="function"?y.request:L;try{if(!(0,R.E)(u,a))throw new M({sender:a,to:u});const b=await S({data:f,sender:a,urls:i}),{data:$}=await(0,g.R)(c,{blockNumber:n,blockTag:t,data:(0,x.zo)([r,(0,P.E)([{type:"bytes"},{type:"bytes"}],[b,s])]),to:u});return $}catch(b){throw new m({callbackSelector:r,cause:b,data:o,extraData:s,sender:a,urls:i})}}async function L({data:c,sender:n,urls:t}){var u;let o=new Error("An unknown error occurred.");for(let d=0;d<t.length;d++){const a=t[d],i=a.includes("{data}")?"GET":"POST",f=i==="POST"?{data:c,sender:n}:void 0;try{const r=await fetch(a.replace("{sender}",n).replace("{data}",c),{body:JSON.stringify(f),method:i});let s;if((u=r.headers.get("Content-Type"))!=null&&u.startsWith("application/json")?s=(await r.json()).data:s=await r.text(),!r.ok){o=new E.Gg({body:f,details:s!=null&&s.error?(0,h.P)(s.error):r.statusText,headers:r.headers,status:r.status,url:a});continue}if(!(0,C.v)(s)){o=new k({result:s,url:a});continue}return s}catch(r){o=new E.Gg({body:f,details:r.message,url:a})}}throw o}}}]);
