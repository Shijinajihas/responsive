"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_aria-live_aria-live_ts-ui_packages_promise-with-resolvers-polyfill_promise-with-r-014121"],{31481:(e,t,n)=>{n.d(t,{I:()=>r});let r=(0,n(96540).createContext)(null)},7572:(e,t,n)=>{n.d(t,{C:()=>i,i:()=>o});var r=n(97156),a=n(97564),s=n(46493);function i(e,t){(0,a.G7)("arianotify_comprehensive_migration")?o(c(e),{...t,element:t?.element??e}):(0,a.G7)("primer_live_region_element")&&t?.element===void 0?(0,s.Cj)(e,{politeness:t?.assertive?"assertive":"polite"}):o(c(e),t)}function o(e,t){let{assertive:n,element:i}=t??{};(0,a.G7)("arianotify_comprehensive_migration")&&"ariaNotify"in Element.prototype?(i||document.body).ariaNotify(e,{interrupt:t?.assertive?"all":"none"}):(0,a.G7)("primer_live_region_element")&&void 0===i?(0,s.iP)(e,{politeness:n?"assertive":"polite"}):function(e,t,n){let a=n??r.XC?.querySelector(t?"#js-global-screen-reader-notice-assertive":"#js-global-screen-reader-notice");a&&(a.textContent===e?a.textContent=`${e}\u00A0`:a.textContent=e)}(e,n,i)}function c(e){return(e.getAttribute("aria-label")||e.innerText||"").trim()}},67726:(e,t,n)=>{n.d(t,{l:()=>r});let r=()=>void 0},24620:(e,t,n)=>{n.d(t,{Y:()=>r});function r(){let e={};return e.promise=new Promise((t,n)=>{e.resolve=t,e.reject=n}),e}},23581:(e,t,n)=>{n.d(t,{A:()=>o});let{getItem:r,setItem:a,removeItem:s}=(0,n(74572).A)("localStorage"),i="REACT_PROFILING_ENABLED",o={enable:()=>a(i,"true"),disable:()=>s(i),isEnabled:()=>!!r(i)}},67327:(e,t,n)=>{n.d(t,{Kq:()=>SoftNavErrorEvent,RQ:()=>SoftNavEndEvent,ni:()=>SoftNavSuccessEvent,sW:()=>SoftNavStartEvent});var r=n(27260);let a=class SoftNavEvent extends Event{constructor(e,t){super(t),this.mechanism=e}};let SoftNavStartEvent=class SoftNavStartEvent extends a{constructor(e){super(e,r.z.START)}};let SoftNavSuccessEvent=class SoftNavSuccessEvent extends a{constructor(e,t){super(e,r.z.SUCCESS),this.visitCount=t}};let SoftNavErrorEvent=class SoftNavErrorEvent extends a{constructor(e,t){super(e,r.z.ERROR),this.error=t}};let SoftNavEndEvent=class SoftNavEndEvent extends a{constructor(e){super(e,r.z.END)}}},56725:(e,t,n)=>{n.d(t,{Bu:()=>m,SC:()=>l,Ti:()=>v,iS:()=>u,k5:()=>c,o4:()=>d,rZ:()=>f});var r=n(27260),a=n(67327),s=n(47175),i=n(54861);let o=0;function c(){o=0,document.dispatchEvent(new Event(r.z.INITIAL)),(0,i.xT)()}function l(e){(0,i.LM)()||(document.dispatchEvent(new Event(r.z.PROGRESS_BAR.START)),document.dispatchEvent(new a.sW(e)),(0,i.Vy)(e),(0,i.ZW)(),(0,i.HK)(),(0,s.E5)())}function u(e={}){E(e)&&(o+=1,document.dispatchEvent(new a.ni((0,i.di)(),o)),v(e))}function d(e={}){if(!E(e))return;o=0;let t=(0,i.my)()||i.BW;document.dispatchEvent(new a.Kq((0,i.di)(),t)),p(),(0,s.Cd)(t),(0,i.xT)()}function v(e={}){if(!E(e))return;let t=(0,i.di)();p(),document.dispatchEvent(new a.RQ(t)),(0,i.Ff)(),(0,i.JA)(t)}function f(e={}){E(e)&&((0,s.Im)(),document.dispatchEvent(new Event(r.z.RENDER)))}function m(){document.dispatchEvent(new Event(r.z.FRAME_UPDATE))}function p(){document.dispatchEvent(new Event(r.z.PROGRESS_BAR.END))}function E({skipIfGoingToReactApp:e,allowedMechanisms:t=[]}={}){return(0,i.LM)()&&(0===t.length||t.includes((0,i.di)()))&&(!e||!(0,i.gc)())}},27260:(e,t,n)=>{n.d(t,{z:()=>r});let r=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}})},47175:(e,t,n)=>{n.d(t,{Cd:()=>c,E5:()=>o,Im:()=>l,nW:()=>i});var r=n(51528),a=n(54861);let s="stats:soft-nav-duration",i={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function o(){performance.clearResourceTimings(),performance.mark(s)}function c(e){(0,r.i)({turboFailureReason:e,turboStartUrl:(0,a.dR)(),turboEndUrl:window.location.href})}function l(){let e=function(){if(0===performance.getEntriesByName(s).length)return null;performance.measure(s,s);let e=performance.getEntriesByName(s).pop();return e?e.duration:null}();if(!e)return;let t=i[(0,a.di)()],n=Math.round(e);t===i.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:n}})),(0,r.i)({requestUrl:window.location.href,softNavigationTiming:{mechanism:t,destination:(0,a.fX)()||"rails",duration:n,initiator:(0,a.Pv)()||"rails"}})}},59840:(e,t,n)=>{n.d(t,{m:()=>s});var r=n(96540),a=n(97156);function s(e,t){a.KJ&&(0,r.useLayoutEffect)(e,t)}},73272:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(59840),a=n(96540);function s(){let e=(0,a.useRef)(!1),t=(0,a.useCallback)(()=>e.current,[]);return(0,r.m)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},51012:(e,t,n)=>{n.d(t,{N:()=>s});var r=n(97156),a=n(96540);let s=void 0!==r.cg?.document?.createElement?a.useLayoutEffect:a.useEffect},83784:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(73272),a=n(96540);let s=function(e){let t=(0,r.A)(),[n,s]=(0,a.useState)(e);return[n,(0,a.useCallback)(e=>{t()&&s(e)},[t])]}},37190:(e,t,n)=>{n.d(t,{y:()=>i});var r=n(74848),a=n(96540),s=n(31481);function i({children:e,appName:t,category:n,metadata:i}){let o=(0,a.useMemo)(()=>({appName:t,category:n,metadata:i}),[t,n,i]);return(0,r.jsx)(s.I.Provider,{value:o,children:e})}try{i.displayName||(i.displayName="AnalyticsProvider")}catch{}},47831:(e,t,n)=>{n.d(t,{BP:()=>u,D3:()=>l,O8:()=>r});var r,a=n(74848),s=n(96540),i=n(97156),o=n(59840);!function(e){e.ServerRender="ServerRender",e.ClientHydrate="ClientHydrate",e.ClientRender="ClientRender"}(r||(r={}));let c=(0,s.createContext)("ClientRender");function l({wasServerRendered:e,children:t}){let[n,r]=(0,s.useState)(()=>i.X3?"ServerRender":e?"ClientHydrate":"ClientRender");return(0,o.m)(()=>{"ClientRender"!==n&&r("ClientRender")},[n]),(0,a.jsx)(c.Provider,{value:n,children:t})}function u(){return(0,s.useContext)(c)}try{c.displayName||(c.displayName="RenderPhaseContext")}catch{}try{l.displayName||(l.displayName="RenderPhaseProvider")}catch{}},54156:(e,t,n)=>{n.d(t,{Qn:()=>c,T8:()=>u,Y6:()=>v,k6:()=>d});var r=n(74848),a=n(65556),s=n(96540),i=n(67726),o=n(83784);let c=5e3,l=(0,s.createContext)({addToast:i.l,addPersistedToast:i.l,clearPersistedToast:i.l}),u=(0,s.createContext)({toasts:[],persistedToast:null});function d({children:e}){let[t,n]=(0,o.A)([]),[i,d]=(0,s.useState)(null),{safeSetTimeout:v}=(0,a.A)(),f=(0,s.useCallback)(function(e){n([...t,e]),v(()=>n(t.slice(1)),c)},[t,v,n]),m=(0,s.useCallback)(function(e){d(e)},[d]),p=(0,s.useCallback)(function(){d(null)},[d]),E=(0,s.useMemo)(()=>({addToast:f,addPersistedToast:m,clearPersistedToast:p}),[m,f,p]),h=(0,s.useMemo)(()=>({toasts:t,persistedToast:i}),[t,i]);return(0,r.jsx)(l.Provider,{value:E,children:(0,r.jsx)(u.Provider,{value:h,children:e})})}function v(){return(0,s.useContext)(l)}try{l.displayName||(l.displayName="ToastContext")}catch{}try{u.displayName||(u.displayName="InternalToastsContext")}catch{}try{d.displayName||(d.displayName="ToastContextProvider")}catch{}},67870:(e,t,n)=>{n.d(t,{V:()=>v});var r=n(74848),a=n(96540),s=n(54156),i=n(38621),o=n(65556),c=n(16255);let l={info:"",success:"Toast--success",error:"Toast--error"},u={info:(0,r.jsx)(i.InfoIcon,{}),success:(0,r.jsx)(i.CheckIcon,{}),error:(0,r.jsx)(i.StopIcon,{})},d=({message:e,timeToLive:t,icon:n,type:s="info",role:i="log"})=>{let[d,v]=a.useState(!0),{safeSetTimeout:f}=(0,o.A)();return(0,a.useEffect)(()=>{t&&f(()=>v(!1),t-300)},[f,t]),(0,r.jsx)(c.Z,{children:(0,r.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,r.jsxs)("div",{className:`Toast ${l[s]} ${d?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${s}`,role:i,children:[(0,r.jsx)("span",{className:"Toast-icon",children:n||u[s]}),(0,r.jsx)("span",{className:"Toast-content",children:e})]})})})};try{d.displayName||(d.displayName="Toast")}catch{}function v(){let{toasts:e,persistedToast:t}=(0,a.useContext)(s.T8);return(0,r.jsxs)(r.Fragment,{children:[e.map((e,t)=>(0,r.jsx)(d,{message:e.message,icon:e.icon,timeToLive:s.Qn,type:e.type,role:e.role},t)),t&&(0,r.jsx)(d,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{v.displayName||(v.displayName="Toasts")}catch{}}}]);
//# sourceMappingURL=ui_packages_aria-live_aria-live_ts-ui_packages_promise-with-resolvers-polyfill_promise-with-r-014121-c4843b7a218f.js.map