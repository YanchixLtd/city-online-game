"use strict";(self.webpackChunkcity_online_game=self.webpackChunkcity_online_game||[]).push([[706],{1706:(e,t,n)=>{n.d(t,{worker:()=>y});var s=n(5865),a=n(9486),c=n(4849),r=n(4207),o=n(3734),u=n(4206);const i=w("/data"),l=(a.d.post(i,(async e=>{let{request:t}=e;await(0,r.gw)(500);const n=await t.json();return(0,u.cM)({op:"MSW request SUCCESS",body:n}),o.Z.json({message:"OK"})})),a.d.post(i,(async e=>{let{request:t}=e;await(0,r.gw)(500);const n=await t.json();return(0,u.cM)({op:"MSW request FAILURE",body:n}),new o.Z(JSON.stringify({Message:null}),{status:403})})),d(i)),g=w("/landing");a.d.get(g,(async e=>{let{request:t}=e;await(0,r.gw)(500);const{searchParams:n}=new URL(t.url);return o.Z.json({message:"OK",gameId:"MOCK-".concat(n.get("respId"))})}));function w(e){return"".concat(("","")).concat(e)}function d(e){return a.d.all(e,c.B)}const p=[d(g),l,d("*")];(0,u.cM)({REACT_APP_MOCK_API_URL:"",handlers:p});const y=(0,s.L)(...p)}}]);