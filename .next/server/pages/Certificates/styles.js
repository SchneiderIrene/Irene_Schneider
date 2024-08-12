"use strict";(()=>{var e={};e.id=665,e.ids=[665,660],e.modules={8598:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},3394:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>b,default:()=>c,getServerSideProps:()=>v,getStaticPaths:()=>P,getStaticProps:()=>g,reportWebVitals:()=>x,routeModule:()=>w,unstable_getServerProps:()=>y,unstable_getServerSideProps:()=>_,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>m,unstable_getStaticProps:()=>h});var a=r(492),n=r(6475),o=r(8598),l=r(5311),s=r.n(l),d=r(1231),u=r.n(d),p=r(8535),f=e([p]);p=(f.then?(await f)():f)[0];let c=(0,o.l)(p,"default"),g=(0,o.l)(p,"getStaticProps"),P=(0,o.l)(p,"getStaticPaths"),v=(0,o.l)(p,"getServerSideProps"),b=(0,o.l)(p,"config"),x=(0,o.l)(p,"reportWebVitals"),h=(0,o.l)(p,"unstable_getStaticProps"),m=(0,o.l)(p,"unstable_getStaticPaths"),S=(0,o.l)(p,"unstable_getStaticParams"),y=(0,o.l)(p,"unstable_getServerProps"),_=(0,o.l)(p,"unstable_getServerSideProps"),w=new a.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/Certificates/styles",pathname:"/Certificates/styles",bundlePath:"",filename:""},components:{App:u(),Document:s()},userland:p});i()}catch(e){i(e)}})},1231:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let i=r(3538),a=r(997),n=i._(r(6689)),o=r(2344);async function l(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,o.loadGetInitialProps)(t,r)}}class s extends n.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,a.jsx)(e,{...t})}}s.origGetInitialProps=l,s.getInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8535:(e,t,r)=>{r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{Card:()=>d,CardContainer:()=>s,CertificateContainer:()=>o,Img:()=>p,ModalContainer:()=>u,Title:()=>l});var a=r(4115),n=e([a]);a=(n.then?(await n)():n)[0];let o=a.default.div`
  display: flex;
  flex-direction: column;
  gap: 5.2vw;
  flex: 1;
  position: relative;
`,l=a.default.h1`
  font-size: 3.75vw;
  font-weight: bold;
  text-shadow:
    2px 2px 0px rgba(252, 241, 228, 0.1),
    -2px -2px 0px rgba(252, 241, 228, 0.1);
  color: #fcf1e4;
  position: relative;
  z-index: 3;
`,s=a.default.div`
  display: flex;
  gap: 0.52vw;
  width: 70vw;
`,d=a.default.div`
  display: flex;
  justify-content: center;
  align-items: end;
  width: 15.62vw;
  height: 18.22vw;
  border-radius: 0.42vw;
  border: 0.05vw solid rgba(252, 241, 228, 0.7);
  position: relative;
  z-index: 3;
  background-size: 100%;
  filter: brightness(0.4);
  cursor: pointer;
  :hover {
    transform: scale(1.06);
    filter: brightness(0.8);
  }
`,u=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.52vw;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,p=a.default.img`
  position: relative;
  top: 158%;
  width: 100%;
  object-fit: contain;
`;i()}catch(e){i(e)}})},6475:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},4115:e=>{e.exports=import("@emotion/styled")},1017:e=>{e.exports=require("path")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[311],()=>r(3394));module.exports=i})();