"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{9655:function(e,t,n){n.d(t,{OL:function(){return C}});var a,r,i,o,l,s,c=n(7294),u=n(3935),h=n(9250),f=n(2599);/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}let v=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],w=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"];try{window.__reactRouterVersion="6"}catch(e){}let m=c.createContext({isTransitioning:!1});(i||(i=n.t(c,2))).startTransition,(o||(o=n.t(u,2))).flushSync,(i||(i=n.t(c,2))).useId;let g="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,y=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,b=c.forwardRef(function(e,t){let n,{onClick:a,relative:r,reloadDocument:i,replace:o,state:l,target:s,to:u,preventScrollReset:w,unstable_viewTransition:m}=e,b=d(e,v),{basename:C}=c.useContext(h.Us),L=!1;if("string"==typeof u&&y.test(u)&&(n=u,g))try{let e=new URL(window.location.href),t=new URL(u.startsWith("//")?e.protocol+u:u),n=(0,f.Zn)(t.pathname,C);t.origin===e.origin&&null!=n?u=n+t.search+t.hash:L=!0}catch(e){}let S=(0,h.oQ)(u,{relative:r}),U=function(e,t){let{target:n,replace:a,state:r,preventScrollReset:i,relative:o,unstable_viewTransition:l}=void 0===t?{}:t,s=(0,h.s0)(),u=(0,h.TH)(),p=(0,h.WU)(e,{relative:o});return c.useCallback(t=>{0!==t.button||n&&"_self"!==n||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),s(e,{replace:void 0!==a?a:(0,f.Ep)(u)===(0,f.Ep)(p),state:r,preventScrollReset:i,relative:o,unstable_viewTransition:l}))},[u,s,p,a,r,n,e,i,o,l])}(u,{replace:o,state:l,target:s,preventScrollReset:w,relative:r,unstable_viewTransition:m});return c.createElement("a",p({},b,{href:n||S,onClick:L||i?a:function(e){a&&a(e),e.defaultPrevented||U(e)},ref:t,target:s}))}),C=c.forwardRef(function(e,t){let n,{"aria-current":a="page",caseSensitive:r=!1,className:i="",end:o=!1,style:s,to:u,unstable_viewTransition:v,children:g}=e,y=d(e,w),C=(0,h.WU)(u,{relative:y.relative}),L=(0,h.TH)(),S=c.useContext(h.FR),{navigator:U,basename:R}=c.useContext(h.Us),T=null!=S&&function(e,t){var n;let a;void 0===t&&(t={});let r=c.useContext(m);null!=r||(0,f.J0)(!1);let{basename:i}=(n=l.useViewTransitionState,(a=c.useContext(h.w3))||(0,f.J0)(!1),a),o=(0,h.WU)(e,{relative:t.relative});if(!r.isTransitioning)return!1;let s=(0,f.Zn)(r.currentLocation.pathname,i)||r.currentLocation.pathname,u=(0,f.Zn)(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=(0,f.LX)(o.pathname,u)||null!=(0,f.LX)(o.pathname,s)}(C)&&!0===v,_=U.encodeLocation?U.encodeLocation(C).pathname:C.pathname,x=L.pathname,F=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;r||(x=x.toLowerCase(),F=F?F.toLowerCase():null,_=_.toLowerCase()),F&&R&&(F=(0,f.Zn)(F,R)||F);let k="/"!==_&&_.endsWith("/")?_.length-1:_.length,E=x===_||!o&&x.startsWith(_)&&"/"===x.charAt(k),O=null!=F&&(F===_||!o&&F.startsWith(_)&&"/"===F.charAt(_.length)),W={isActive:E,isPending:O,isTransitioning:T},j=E?a:void 0;n="function"==typeof i?i(W):[i,E?"active":null,O?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let N="function"==typeof s?s(W):s;return c.createElement(b,p({},y,{"aria-current":j,className:n,ref:t,style:N,to:u,unstable_viewTransition:v}),"function"==typeof g?g(W):g)});(a=l||(l={})).UseScrollRestoration="useScrollRestoration",a.UseSubmit="useSubmit",a.UseSubmitFetcher="useSubmitFetcher",a.UseFetcher="useFetcher",a.useViewTransitionState="useViewTransitionState",(r=s||(s={})).UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"}}]);