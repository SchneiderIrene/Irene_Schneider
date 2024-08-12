"use strict";(()=>{var e={};e.id=352,e.ids=[352,660],e.modules={8598:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2035:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>b,default:()=>f,getServerSideProps:()=>x,getStaticPaths:()=>g,getStaticProps:()=>P,reportWebVitals:()=>v,routeModule:()=>A,unstable_getServerProps:()=>m,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>h,unstable_getStaticPaths:()=>_,unstable_getStaticProps:()=>S});var n=r(492),i=r(6475),o=r(8598),l=r(5311),s=r.n(l),u=r(1231),p=r.n(u),d=r(8428),c=e([d]);d=(c.then?(await c)():c)[0];let f=(0,o.l)(d,"default"),P=(0,o.l)(d,"getStaticProps"),g=(0,o.l)(d,"getStaticPaths"),x=(0,o.l)(d,"getServerSideProps"),b=(0,o.l)(d,"config"),v=(0,o.l)(d,"reportWebVitals"),S=(0,o.l)(d,"unstable_getStaticProps"),_=(0,o.l)(d,"unstable_getStaticPaths"),h=(0,o.l)(d,"unstable_getStaticParams"),m=(0,o.l)(d,"unstable_getServerProps"),y=(0,o.l)(d,"unstable_getServerSideProps"),A=new n.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/Experience/styles",pathname:"/Experience/styles",bundlePath:"",filename:""},components:{App:p(),Document:s()},userland:d});a()}catch(e){a(e)}})},1231:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let a=r(3538),n=r(997),i=a._(r(6689)),o=r(2344);async function l(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,o.loadGetInitialProps)(t,r)}}class s extends i.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,n.jsx)(e,{...t})}}s.origGetInitialProps=l,s.getInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8428:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{CardContainer:()=>s,ExperienceContainer:()=>o,Title:()=>l});var n=r(4115),i=e([n]);n=(i.then?(await i)():i)[0];let o=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 5.2vw;
  width: 100%;
  position: relative;
  z-index: 33;
`,l=n.default.h1`
  font-size: 3.75vw;
  font-weight: bold;
  text-shadow:
    2px 2px 0px rgba(252, 241, 228, 0.1),
    -2px -2px 0px rgba(252, 241, 228, 0.1);
  color: #fcf1e4;
  position: relative;
  z-index: 3;
`,s=n.default.div`
  display: flex;
  flex-direction: column;
  gap: 1.04vw;
  width: 100%;
  position: relative;
  z-index: 3;
`;a()}catch(e){a(e)}})},6475:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},4115:e=>{e.exports=import("@emotion/styled")},1017:e=>{e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[311],()=>r(2035));module.exports=a})();