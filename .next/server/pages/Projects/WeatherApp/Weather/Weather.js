"use strict";(()=>{var e={};e.id=232,e.ids=[232,660],e.modules={9959:(e,t,r)=>{r.a(e,async(e,o)=>{try{r.r(t),r.d(t,{config:()=>v,default:()=>p,getServerSideProps:()=>b,getStaticPaths:()=>w,getStaticProps:()=>g,reportWebVitals:()=>m,routeModule:()=>W,unstable_getServerProps:()=>P,unstable_getServerSideProps:()=>S,unstable_getStaticParams:()=>j,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>x});var a=r(492),s=r(6475),n=r(8598),i=r(5311),d=r.n(i),l=r(1231),c=r.n(l),h=r(8849),u=e([h]);h=(u.then?(await u)():u)[0];let p=(0,n.l)(h,"default"),g=(0,n.l)(h,"getStaticProps"),w=(0,n.l)(h,"getStaticPaths"),b=(0,n.l)(h,"getServerSideProps"),v=(0,n.l)(h,"config"),m=(0,n.l)(h,"reportWebVitals"),x=(0,n.l)(h,"unstable_getStaticProps"),f=(0,n.l)(h,"unstable_getStaticPaths"),j=(0,n.l)(h,"unstable_getStaticParams"),P=(0,n.l)(h,"unstable_getServerProps"),S=(0,n.l)(h,"unstable_getServerSideProps"),W=new a.PagesRouteModule({definition:{kind:s.x.PAGES,page:"/Projects/WeatherApp/Weather/Weather",pathname:"/Projects/WeatherApp/Weather/Weather",bundlePath:"",filename:""},components:{App:c(),Document:d()},userland:h});o()}catch(e){o(e)}})},8849:(e,t,r)=>{r.a(e,async(e,o)=>{try{r.r(t),r.d(t,{default:()=>g});var a=r(997),s=r(8585),n=r(5381),i=r(8302),d=r(2100),l=r(3291),c=r(4661),h=r(1594),u=r(7987),p=e([s,n,i,d,l,u]);[s,n,i,d,l,u]=p.then?(await p)():p;let g=function(){let e=(0,c.useNavigate)(),t=(0,s.C)(i.hX.savedWeather),r=(0,l.useDispatch)(),{t:o}=(0,u.useTranslation)(),p=t.map(e=>{let t=e=>{r(i.Vc.deleteWeatherCardWeather(e))};return(0,a.jsxs)(d.WeatherBlock,{children:[(0,a.jsxs)(d.WeatherInfo,{children:[(0,a.jsxs)(d.IconWeatherContainer,{children:[a.jsx(d.Temperatur,{children:`${(Number(e.weather)-273.15).toFixed(1)}\xb0`}),(0,a.jsxs)(d.IconBox,{children:[a.jsx(d.IconWeather,{src:`https://openweathermap.org/img/w/${e.icon}.png`}),a.jsx(d.IconWeather,{src:`https://openweathermap.org/img/w/${e.icon}.png`}),a.jsx(d.IconWeather,{src:`https://openweathermap.org/img/w/${e.icon}.png`})]})]}),a.jsx(d.City,{children:e.city})]}),a.jsx(n.DeleteButtonWeatherBox,{children:a.jsx(n.DeleteButtonWeather,{onClick:()=>t(e.id),children:o("projects.weather.buttonDelete")})})]},e.id)});return(0,a.jsxs)(n.WeatherPagesWrapper,{children:[(0,a.jsxs)(n.ProjekteButton,{onClick:()=>e("/projects"),disabled:"loading"===status||"error"===status,children:[a.jsx(h.Umd,{}),a.jsx("br",{})," ",o("projects.weather.bunttonProjects")," ",a.jsx("br",{})," ",o("projects.weather.bunttonProjects_br")]}),p,p.length>0&&(0,a.jsxs)(a.Fragment,{children:[a.jsx(n.DeleteButtonAllCards,{onClick:()=>{r(i.Vc.deleteAllCards())},children:o("projects.weather.buttonDeleteAll")}),a.jsx(n.SearchButton,{onClick:()=>e(-1),disabled:"loading"===status||"error"===status,children:o("projects.weather.buttonSearch")})]}),0===p.length&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.StyledP,{children:[" ",o("projects.weather.ooops")]}),a.jsx(n.SearchButton,{onClick:()=>e(-1),disabled:"loading"===status||"error"===status,children:o("projects.weather.buttonSearch")})]})]})};o()}catch(e){o(e)}})},5381:(e,t,r)=>{r.a(e,async(e,o)=>{try{r.r(t),r.d(t,{DeleteButtonAllCards:()=>p,DeleteButtonWeather:()=>d,DeleteButtonWeatherBox:()=>u,ProjekteButton:()=>l,SearchButton:()=>h,StyledP:()=>c,WeatherPagesWrapper:()=>i});var a=r(4115),s=r(8069),n=e([a]);a=(n.then?(await n)():n)[0];let i=a.default.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
  height: auto;
  padding: 2.6vw;
  gap: 1.04vw;
  position: relative;
  border-radius: 0.625vw;
  background-image: url(${s.Aq});
  background-size: cover;

  @media (max-width: 480px) {
    padding: 25vw 5vw 15vw 5vw;
  }
`,d=a.default.button`
  width: 8.07vw;
  height: 2.5vw;
  border-radius: 2.6vw;
  background-color: rgba(255, 255, 255, 0);
  border: 0.05vw solid rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.04vw;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    width: 30vw;
    height: 10vw;
    border-radius: 10vw;

    :hover {
      transform: none;
    }
  }
`,l=a.default.button`
position: absolute;
left: 50px;
width: 4vw;
height: 4vw;
border-radius: 2.6vw;
background-color: ${({disabled:e})=>e?"rgba(54, 120, 180, 0.7)":"rgba(54, 120, 180, 1)"};
border: none;
color: ${({disabled:e})=>e?"rgba(255, 255, 255, 0.6)":"aliceblue"};
font-size: 0.6vw;
cursor: ${({disabled:e})=>e?"auto":"pointer"};

:hover {
  ${({disabled:e})=>e?"transform: scale(1.0)":"transform: scale(1.1)"}
}
@media (max-width: 480px) {
    width: 17vw;
    height: 17vw;
    border-radius: 2vw;
    font-size: 0.7rem;
    border-radius: 50%;
    left: 1vw;
    top: 1vw;

    :hover {
      transform: none;
    }
  }
`,c=a.default.p`
 color: rgba(255, 255, 255, 1);
 font-size: 2.04vw;
 margin-top: 5vw;

 @media (max-width: 480px) {
 font-size: 0.7rem;
  }
`,h=a.default.button`
  width: 36.45vw;
  height: 2.5vw;
  bottom: 2.6vw;
  border-radius: 2.6vw;
  background-color: rgba(54, 120, 180, 1);
  border: none;
  color: rgba(255, 255, 255, 1);
  font-size: 1.04vw;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 10vw;
    border-radius: 2vw;
    font-size: 0.7rem;
    :hover {
      transform: none;
    }
  }
`,u=a.default.div`
  display: flex;
  justify-content: center;
`,p=a.default.button`
  width: 36.45vw;
  height: 2.5vw;
  border-radius: 2.6vw;
  background-color: rgba(54, 120, 180, 1);
  border: none;
  font-size: 1.04vw;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 10vw;
    border-radius: 2vw;
    font-size: 0.7rem;
    :hover {
      transform: none;
    }
  }
`;o()}catch(e){o(e)}})},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},4661:e=>{e.exports=require("react-router-dom")},997:e=>{e.exports=require("react/jsx-runtime")},4115:e=>{e.exports=import("@emotion/styled")},3258:e=>{e.exports=import("@reduxjs/toolkit")},7987:e=>{e.exports=import("react-i18next")},3291:e=>{e.exports=import("react-redux")},6555:e=>{e.exports=import("uuid")},1017:e=>{e.exports=require("path")}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[311,953,330],()=>r(9959));module.exports=o})();