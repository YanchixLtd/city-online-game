"use strict";(self.webpackChunkcity_online_game=self.webpackChunkcity_online_game||[]).push([[498,98],{76769:(e,r,t)=>{t.r(r),t.d(r,{ExportConfig:()=>c,default:()=>g,transformContentConfig:()=>u,transformOldConfig:()=>m});var o=t(14206),s=t(60611),l=t(1104),n=t(81936),a=t(69961),i=t(46417);const c=()=>{(0,a.D)();try{const e=u((0,s.l)());return(0,o.cM)({ret:e}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("pre",{style:{...l.preStyles,maxHeight:"95vh"},children:(0,i.jsx)("code",{className:"language-json",children:JSON.stringify(e,null,2)})}),(0,i.jsx)("hr",{})]})}catch(e){return(0,i.jsx)("pre",{style:l.preStyles,children:(0,i.jsx)("code",{children:JSON.stringify(e,null,2)})})}},d=e=>n.$P.reduce(((r,t)=>({...r,[t]:e[t]||""})),{}),u=e=>Object.values(e).reduce(((e,r)=>[...e,...p(r),...f(r)]),[]),m=e=>e.reduce(((e,r)=>(0,n.LS)(r)?[...e,...p(r),...f(r)]:e),[]),p=e=>{let{id:r,messages:t}=e;return t.filter((e=>{let{type:r}=e;return"message"===r})).reduce(((e,t)=>[...e,...t.messages.map((e=>d({ID:r,From:t.from,Message:"object"===typeof e?e.alt||"":e,Image:"object"===typeof e?e.src:""})))]),[])},f=e=>{var r;let{id:t,response:o}=e;if(!o)return[];return[...o.options.reduce(((e,r,s)=>{var l;return[...e,d({ID:t,"Answer ID":r.id,Answer:r.label,"Next step":r.nextStepId,Randomise:0===s&&!1===o.randomise?"false":void 0,"Multi-Choice":0===s&&!0===o.multiChoice?"true":void 0}),...(null===(l=r.answer)||void 0===l?void 0:l.messages.map((e=>{var o;return d({ID:t,From:null===(o=r.answer)||void 0===o?void 0:o.from,"Answer ID":r.id,"Follow up":"object"===typeof e?e.alt||"":e,Image:"object"===typeof e?e.src:""})})))||[]]}),[]),...(null===(r=o.followUp)||void 0===r?void 0:r.messages.map((e=>{var r;return d({ID:t,From:null===(r=o.followUp)||void 0===r?void 0:r.from,"Follow up":"object"===typeof e?e.alt||"":e,Image:"object"===typeof e?e.src:""})})))||[]]},g=c}}]);