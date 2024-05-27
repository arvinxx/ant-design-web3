"use strict";(self.webpackChunk_ant_design_web3_docs=self.webpackChunk_ant_design_web3_docs||[]).push([[1164],{51440:function(T,v,r){r.d(v,{offchainLookup:function(){return P},offchainLookupSignature:function(){return $}});var L=r(85514),m=r(98648),h=r(86514),y=r(15679);class O extends h.G{constructor({callbackSelector:e,cause:t,data:c,extraData:i,sender:f,urls:a}){var u;super(t.shortMessage||"An error occurred while fetching for an offchain result.",{cause:t,metaMessages:[...t.metaMessages||[],(u=t.metaMessages)!=null&&u.length?"":[],"Offchain Gateway Call:",a&&["  Gateway URL(s):",...a.map(d=>`    ${(0,y.Gr)(d)}`)],`  Sender: ${f}`,`  Data: ${c}`,`  Callback selector: ${e}`,`  Extra data: ${i}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class k extends h.G{constructor({result:e,url:t}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${(0,y.Gr)(t)}`,`Response: ${(0,m.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class E extends h.G{constructor({sender:e,to:t}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${t}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var g=r(39577),x=r(27938),G=r(17343),w=r(3664),b=r(48271);function M(s,e){if(!(0,b.U)(s,{strict:!1}))throw new w.b({address:s});if(!(0,b.U)(e,{strict:!1}))throw new w.b({address:e});return s.toLowerCase()===e.toLowerCase()}var R=r(65928),S=r(92325);const $="0x556f1830",C={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function P(s,{blockNumber:e,blockTag:t,data:c,to:i}){const{args:f}=(0,x.p)({data:c,abi:[C]}),[a,u,d,n,o]=f,{ccipRead:l}=s,j=l&&typeof(l==null?void 0:l.request)=="function"?l.request:A;try{if(!M(i,a))throw new E({sender:a,to:i});const p=await j({data:d,sender:a,urls:u}),{data:D}=await(0,L.RE)(s,{blockNumber:e,blockTag:t,data:(0,R.zo)([n,(0,G.E)([{type:"bytes"},{type:"bytes"}],[p,o])]),to:i});return D}catch(p){throw new O({callbackSelector:n,cause:p,data:c,extraData:o,sender:a,urls:u})}}async function A({data:s,sender:e,urls:t}){var i;let c=new Error("An unknown error occurred.");for(let f=0;f<t.length;f++){const a=t[f],u=a.includes("{data}")?"GET":"POST",d=u==="POST"?{data:s,sender:e}:void 0;try{const n=await fetch(a.replace("{sender}",e).replace("{data}",s),{body:JSON.stringify(d),method:u});let o;if((i=n.headers.get("Content-Type"))!=null&&i.startsWith("application/json")?o=(await n.json()).data:o=await n.text(),!n.ok){c=new g.Gg({body:d,details:o!=null&&o.error?(0,m.P)(o.error):n.statusText,headers:n.headers,status:n.status,url:a});continue}if(!(0,S.v)(o)){c=new k({result:o,url:a});continue}return o}catch(n){c=new g.Gg({body:d,details:n.message,url:a})}}throw c}}}]);
