(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{697:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Projects/WeatherApp/Weather/Weather",function(){return t(8849)}])},8849:function(e,n,t){"use strict";t.r(n);var r=t(5893),o=t(8585),a=t(5381),i=t(587),s=t(2100),d=t(5007),c=t(9250),u=t(1594),l=t(7421);n.default=function(){let e=(0,c.s0)(),n=(0,o.C)(i.hX.savedWeather),t=(0,d.I0)(),{t:h}=(0,l.$G)(),w=n.map(e=>{let n=e=>{t(i.Vc.deleteWeatherCardWeather(e))};return(0,r.jsxs)(s.WeatherBlock,{children:[(0,r.jsxs)(s.WeatherInfo,{children:[(0,r.jsxs)(s.IconWeatherContainer,{children:[(0,r.jsx)(s.Temperatur,{children:"".concat((Number(e.weather)-273.15).toFixed(1),"\xb0")}),(0,r.jsxs)(s.IconBox,{children:[(0,r.jsx)(s.IconWeather,{src:"https://openweathermap.org/img/w/".concat(e.icon,".png")}),(0,r.jsx)(s.IconWeather,{src:"https://openweathermap.org/img/w/".concat(e.icon,".png")}),(0,r.jsx)(s.IconWeather,{src:"https://openweathermap.org/img/w/".concat(e.icon,".png")})]})]}),(0,r.jsx)(s.City,{children:e.city})]}),(0,r.jsx)(a.DeleteButtonWeatherBox,{children:(0,r.jsx)(a.DeleteButtonWeather,{onClick:()=>n(e.id),children:h("projects.weather.buttonDelete")})})]},e.id)});return(0,r.jsxs)(a.WeatherPagesWrapper,{children:[(0,r.jsxs)(a.ProjekteButton,{onClick:()=>e("/projects"),disabled:"loading"===status||"error"===status,children:[(0,r.jsx)(u.Umd,{}),(0,r.jsx)("br",{})," ",h("projects.weather.bunttonProjects")," ",(0,r.jsx)("br",{})," ",h("projects.weather.bunttonProjects_br")]}),w,w.length>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.DeleteButtonAllCards,{onClick:()=>{t(i.Vc.deleteAllCards())},children:h("projects.weather.buttonDeleteAll")}),(0,r.jsx)(a.SearchButton,{onClick:()=>e(-1),disabled:"loading"===status||"error"===status,children:h("projects.weather.buttonSearch")})]}),0===w.length&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.StyledP,{children:[" ",h("projects.weather.ooops")]}),(0,r.jsx)(a.SearchButton,{onClick:()=>e(-1),disabled:"loading"===status||"error"===status,children:h("projects.weather.buttonSearch")})]})]})}},5381:function(e,n,t){"use strict";t.r(n),t.d(n,{DeleteButtonAllCards:function(){return m},DeleteButtonWeather:function(){return v},DeleteButtonWeatherBox:function(){return g},ProjekteButton:function(){return f},SearchButton:function(){return b},StyledP:function(){return p},WeatherPagesWrapper:function(){return w}});var r=t(7586),o=t(3496),a=t(8069);function i(){let e=(0,r._)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 80vh;\n  height: auto;\n  padding: 2.6vw;\n  gap: 1.04vw;\n  position: relative;\n  border-radius: 0.625vw;\n  background-image: url(",");\n  background-size: cover;\n\n  @media (max-width: 480px) {\n    padding: 25vw 5vw 15vw 5vw;\n  }\n"]);return i=function(){return e},e}function s(){let e=(0,r._)(["\n  width: 8.07vw;\n  height: 2.5vw;\n  border-radius: 2.6vw;\n  background-color: rgba(255, 255, 255, 0);\n  border: 0.05vw solid rgba(255, 255, 255, 0.8);\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.04vw;\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.1);\n  }\n\n  @media (max-width: 480px) {\n    font-size: 0.7rem;\n    width: 30vw;\n    height: 10vw;\n    border-radius: 10vw;\n\n    :hover {\n      transform: none;\n    }\n  }\n"]);return s=function(){return e},e}function d(){let e=(0,r._)(["\nposition: absolute;\nleft: 50px;\nwidth: 4vw;\nheight: 4vw;\nborder-radius: 2.6vw;\nbackground-color: ",";\nborder: none;\ncolor: ",";\nfont-size: 0.6vw;\ncursor: ",";\n\n:hover {\n  ","\n}\n@media (max-width: 480px) {\n    width: 17vw;\n    height: 17vw;\n    border-radius: 2vw;\n    font-size: 0.7rem;\n    border-radius: 50%;\n    left: 1vw;\n    top: 1vw;\n\n    :hover {\n      transform: none;\n    }\n  }\n"]);return d=function(){return e},e}function c(){let e=(0,r._)(["\n color: rgba(255, 255, 255, 1);\n font-size: 2.04vw;\n margin-top: 5vw;\n\n @media (max-width: 480px) {\n font-size: 0.7rem;\n  }\n"]);return c=function(){return e},e}function u(){let e=(0,r._)(["\n  width: 36.45vw;\n  height: 2.5vw;\n  bottom: 2.6vw;\n  border-radius: 2.6vw;\n  background-color: rgba(54, 120, 180, 1);\n  border: none;\n  color: rgba(255, 255, 255, 1);\n  font-size: 1.04vw;\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.1);\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    height: 10vw;\n    border-radius: 2vw;\n    font-size: 0.7rem;\n    :hover {\n      transform: none;\n    }\n  }\n"]);return u=function(){return e},e}function l(){let e=(0,r._)(["\n  display: flex;\n  justify-content: center;\n"]);return l=function(){return e},e}function h(){let e=(0,r._)(["\n  width: 36.45vw;\n  height: 2.5vw;\n  border-radius: 2.6vw;\n  background-color: rgba(54, 120, 180, 1);\n  border: none;\n  font-size: 1.04vw;\n  color: rgba(255, 255, 255, 0.8);\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.1);\n  }\n\n  @media (max-width: 480px) {\n    width: 100%;\n    height: 10vw;\n    border-radius: 2vw;\n    font-size: 0.7rem;\n    :hover {\n      transform: none;\n    }\n  }\n"]);return h=function(){return e},e}let w=o.Z.div(i(),a.Aq),v=o.Z.button(s()),f=o.Z.button(d(),e=>{let{disabled:n}=e;return n?"rgba(54, 120, 180, 0.7)":"rgba(54, 120, 180, 1)"},e=>{let{disabled:n}=e;return n?"rgba(255, 255, 255, 0.6)":"aliceblue"},e=>{let{disabled:n}=e;return n?"auto":"pointer"},e=>{let{disabled:n}=e;return n?"transform: scale(1.0)":"transform: scale(1.1)"}),p=o.Z.p(c()),b=o.Z.button(u()),g=o.Z.div(l()),m=o.Z.button(h())},8585:function(e,n,t){"use strict";t.d(n,{C:function(){return a},T:function(){return o}});var r=t(5007);let o=r.I0.withTypes(),a=r.v9.withTypes()},587:function(e,n,t){"use strict";t.d(n,{Vc:function(){return s},hX:function(){return d}});var r=t(7616);let o=(0,r.wc)({creators:{asyncThunk:r.eU}});var a=t(7632);let i=o({name:"WEATHER",initialState:{data:[],savedData:[],status:"default",error:void 0},reducers:e=>({getWeather:e.asyncThunk(async(e,n)=>{let{rejectWithValue:t}=n,r=await fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e.city,"&appid=").concat("f648a0bad836a08ddbddfc508621ebf2")),o=await r.json();return r.ok?o:t(o)},{pending:e=>{e.status="loading",e.error=void 0},fulfilled:(e,n)=>{var t,r,o;e.status="success",e.data=[...e.data,{id:(0,a.Z)(),city:null===(t=n.payload)||void 0===t?void 0:t.name,weather:null===(r=n.payload)||void 0===r?void 0:r.main.temp,icon:null===(o=n.payload)||void 0===o?void 0:o.weather[0].icon}]},rejected:(e,n)=>{e.status="error",e.error=n.payload}}),deleteWeatherCardHome:e.reducer((e,n)=>{e.data=e.data.filter(e=>e.id!==n.payload)}),deleteWeatherCardWeather:e.reducer((e,n)=>{e.savedData=e.savedData.filter(e=>e.id!==n.payload)}),deleteAllCards:e.reducer(e=>{e.savedData=[]}),saveWeatherCard:e.reducer((e,n)=>{let t=e.data.find(e=>e.id===n.payload);void 0!==t&&(e.savedData=[...e.savedData,t])}),deleteError:e.reducer(e=>{e.error=void 0,e.status="default"})}),selectors:{weather:e=>e.data,savedWeather:e=>e.savedData,status:e=>e.status,error:e=>e.error}}),s=i.actions,d=i.selectors}},function(e){e.O(0,[774,644,698,133,250,421,655,727,100,888,179],function(){return e(e.s=697)}),_N_E=e.O()}]);