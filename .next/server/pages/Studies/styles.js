"use strict";(()=>{var e={};e.id=350,e.ids=[350,660],e.modules={8598:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},491:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>b,default:()=>c,getServerSideProps:()=>v,getStaticPaths:()=>g,getStaticProps:()=>P,reportWebVitals:()=>x,routeModule:()=>w,unstable_getServerProps:()=>m,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>_,unstable_getStaticPaths:()=>h,unstable_getStaticProps:()=>S});var o=r(492),a=r(6475),n=r(8598),l=r(5311),s=r.n(l),d=r(1231),u=r.n(d),p=r(4935),f=e([p]);p=(f.then?(await f)():f)[0];let c=(0,n.l)(p,"default"),P=(0,n.l)(p,"getStaticProps"),g=(0,n.l)(p,"getStaticPaths"),v=(0,n.l)(p,"getServerSideProps"),b=(0,n.l)(p,"config"),x=(0,n.l)(p,"reportWebVitals"),S=(0,n.l)(p,"unstable_getStaticProps"),h=(0,n.l)(p,"unstable_getStaticPaths"),_=(0,n.l)(p,"unstable_getStaticParams"),m=(0,n.l)(p,"unstable_getServerProps"),y=(0,n.l)(p,"unstable_getServerSideProps"),w=new o.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/Studies/styles",pathname:"/Studies/styles",bundlePath:"",filename:""},components:{App:u(),Document:s()},userland:p});i()}catch(e){i(e)}})},1231:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let i=r(3538),o=r(997),a=i._(r(6689)),n=r(2344);async function l(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,n.loadGetInitialProps)(t,r)}}class s extends a.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,o.jsx)(e,{...t})}}s.origGetInitialProps=l,s.getInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4935:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{Card:()=>s,Country:()=>u,DescriptionStudies:()=>f,Period:()=>p,StudiesContainer:()=>n,StyledAStudies:()=>c,Title:()=>l,TitleStudium:()=>d});var o=r(4115),a=e([o]);o=(a.then?(await a)():a)[0];let n=o.default.div`
  display: flex;
  flex-direction: column;
  gap: 5.2vw;
  position: relative;
  z-index: 35;
  width: 100%;
`,l=o.default.h1`
  font-size: 3.75vw;
  font-weight: bold;
  text-shadow:
    2px 2px 0px rgba(252, 241, 228, 0.1),
    -2px -2px 0px rgba(252, 241, 228, 0.1);
  color: #fcf1e4;
  position: relative;
  z-index: 3;
`,s=o.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.42vw;
  border: 0.05vw solid rgba(252, 241, 228, 0.7);
  position: relative;
  z-index: 3;
  gap: 1.66vw;
  padding: 3vw;
`,d=o.default.h2`
 font-size: 1.46vw;
  font-weight: bold;
  color: #fcf1e4;
  position: relative;
  z-index: 3;
`,u=o.default.h3`
  font-size: 1.04vw;
  font-weight: bold;
  color: #fcf1e4;
  position: relative;
  z-index: 3;`,p=o.default.h3`
  font-size: 1.04vw;
  color: rgba(252, 241, 228, 0.9);
  position: relative;
  z-index: 3;`,f=o.default.p`
  font-size: 1.04vw;
  color: rgba(252, 241, 228, 0.9);
  position: relative;
  z-index: 3;
`,c=o.default.a`
  color: #fcf1e4;
  text-decoration: none;
  display: inline-block;
 :hover {
       transform: scale(1.1);
  }
`;i()}catch(e){i(e)}})},6475:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},4115:e=>{e.exports=import("@emotion/styled")},1017:e=>{e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[311],()=>r(491));module.exports=i})();