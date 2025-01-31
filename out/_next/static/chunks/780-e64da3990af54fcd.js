"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[780],{2413:(A,e,t)=>{t.d(e,{u2:()=>I,iO:()=>u,VN:()=>w,Vy:()=>Q,WF:()=>c,iD:()=>l,$6:()=>a,WU:()=>i,kz:()=>d,vT:()=>k,lL:()=>B,Re:()=>h,aZ:()=>p,ze:()=>J});var o=t(13205),r=t(82651),s=t(89208);let C=async A=>{let e=new o.$t({...A.headers}),t=s.A.get("access_token");return t&&e.set("Authorization","Bearer ".concat(t)),{...A,headers:e}},g=async A=>{if(A.config.url===a||A.config.url===k){if(console.log(A),A.data.token)s.A.set("access_token",A.data.token),A.data.refresh_token&&s.A.set("refresh_token",A.data.refresh_token);else throw Error("The server did not provide jwt.")}else A.config.url===i&&(200===A.status||204===A.status)&&(s.A.remove("access_token"),s.A.remove("refresh_token"));return A},n=r.A.create({baseURL:"https://zandocs.kz",timeout:1e5});n.interceptors.request.use(C,A=>A),n.interceptors.response.use(g,A=>(A.response?console.error('Ответ сервера - "Ошибка":',A.response.status,A.response.data):A.request?console.error("Ошибка при выполнении запроса:",A.request):console.error("Произошла ошибка:",A.message),Promise.reject(A)));let a="/wp-json/jwt-auth/v1/token",i="/wp-json/jwt-auth/v1/logout",l=A=>n.post(a,A),k="/wp-json/custom/v1/register",d=A=>n.post(k,A),c=function(A){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t="/wp-json/wc/v3/orders?customer={id}".replace("{id}",A);return n.get(t,{params:{page:e,per_page:10}})},Q=()=>n.get("/wp-json/wp/v2/users/me"),p=(A,e)=>{let t="/wp-json/wp/v2/users/{id}".replace("{id}",A);return n.patch(t,e)},J=(A,e)=>{let t="wp-json/wp/v2/users/{id}".replace("{id}",A);return n.patch(t,e)},h=A=>n.post("/wp-json/custom/v1/reset-password",A),u=A=>n.post("/wp-json/epay/v1/create-invoice/",A),I=A=>n.post("/wp-json/wc/store/cart/add-item",A),w=()=>n.get("/wp-json/wc/store/cart/"),B=A=>{let e="/wp-json/wc/store/cart/items/{cartItemKey}".replace("{cartItemKey}",String(A));return n.delete(e)}},26599:(A,e,t)=>{t.d(e,{A:()=>C});var o=t(95155),r=t(7110),s=t(92967);t(12115);let C=A=>{let{children:e,column:t=!1,sx:C}=A,g=(0,r.A)();return(0,o.jsx)(s.A,{direction:t?"column":"row",sx:{maxWidth:g?"100%":"1228px",width:"100%",maxHeight:"max-content",...C},children:e})}},84780:(A,e,t)=>{t.d(e,{A:()=>s});var o=t(97532),r=t(55295);let s=()=>(0,r.A)(o.m.mobile)},7110:(A,e,t)=>{t.d(e,{A:()=>s});var o=t(97532),r=t(55295);let s=()=>(0,r.A)(o.m.tablet)},66540:(A,e,t)=>{t.d(e,{A:()=>r});var o=t(95155);t(12115);let r=A=>{let{size:e=17,color:t="#111420"}=A;return(0,o.jsxs)("svg",{width:e,height:e,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,o.jsx)("mask",{id:"mask0_323_39297",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"17",height:"16",children:(0,o.jsx)("rect",{x:"0.5",width:"16",height:"16",fill:"url(#pattern0_323_39297)"})}),(0,o.jsx)("g",{mask:"url(#mask0_323_39297)",children:(0,o.jsx)("rect",{x:"0.470703",y:"0.140015",width:"16.0295",height:"15.86",fill:t})}),(0,o.jsxs)("defs",{children:[(0,o.jsx)("pattern",{id:"pattern0_323_39297",patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,o.jsx)("use",{xlinkHref:"#image0_323_39297",transform:"scale(0.00195312)"})}),(0,o.jsx)("image",{id:"image0_323_39297",width:"512",height:"512",xlinkHref:"data:image/png;base64,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AAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAAAKCQAAKCQAAKCQAACAQgIAAAoJAAAoJAAAoJAAAIBCAgAACgkAACgkAACgkAAAgEICAHaGC9MDrsJO2gq1BADsDC9OD7gKL0wPAN6cAICd4fnpAVfhuekBAHCt2Ejy1yRba/569pWtwJpzBQB2hq0kP50e8RY8msVWAGCbHEzycuY/5b/RazPJbUv76QGg2IOZP+jf6PXdJf7cAFDt+iS/yPxhf/nrVJI9y/uxAYB3JflV5g/9V18nX9kEACzZnixuB2xm7uDfzOKy/+4l/6wAwGXek+R4Fl+/W9XB/2yS78cDf7Cj+b4uXBs2khxKciDJviX9HWeSnE7ydBYhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwLb5Hxj7uOLkwEyyAAAAAElFTkSuQmCC"})]})]})}},33223:(A,e,t)=>{t.d(e,{M:()=>o});let o=(0,t(99827).v)()(A=>({cart:[],setCart:e=>A({cart:e}),isLoading:!1,setIsLoading:e=>A({isLoading:e})}))},97532:(A,e,t)=>{t.d(e,{m:()=>r});let o={mobile:576,desktopXS:768,tablet:1024,desktopXL:3200},r={mobile:"(max-width: ".concat(o.mobile,"px)"),tablet:"(max-width: ".concat(o.tablet,"px)"),desktopXS:"(max-width: ".concat(o.desktopXS,"px)"),largeDesktop:"(max-width: ".concat(o.desktopXL,"px)")}},69265:(A,e,t)=>{t.d(e,{A:()=>C});var o=t(95155),r=t(22282),s=t(96854);let C=(0,t(12115).memo)(A=>{let{children:e,variant:t,sx:C,onClick:g,size:n="20",disabled:a=!1,isCircular:i=!0,fullWidth:l=!1}=A,k=(A,e)=>{switch(e){case"primary":return{position:"relative",background:"linear-gradient(90deg, #0454FF 0%, #2916B9 100%)",color:A.palette.primary.light,borderRadius:"4px",overflow:"hidden",padding:"20px 32px",transition:"all 0.2s ease",zIndex:1,"&:disabled":{color:A.palette.primary.light},"&:hover::before":{content:'""',position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(90deg, #0486FF 0%, #0353FD 100%)",opacity:1,zIndex:-1,transition:"opacity 0.2s ease"},"&::before":{content:'""',zIndex:-1,position:"absolute",top:0,left:0,right:0,bottom:0,background:"linear-gradient(90deg, #0486FF 0%, #0353FD 100%)",opacity:0,transition:"opacity 0.2s ease"}};case"secondary":return{padding:"20px 32px",backgroundColor:A.palette.background.default,color:A.palette.text.secondary,"&:disable":{color:A.palette.text.secondary},border:"1px solid ".concat(A.palette.text.secondary),borderRadius:"4px",transition:"all 0.2s easy-in-out","&:hover":{backgroundColor:"#0454FF",color:A.palette.primary.light,border:"1px solid transparent"}};default:return{}}},d=A=>{switch(A){case"16":return{fontWeight:400,fontSize:"16px",lineHeight:"16px"};case"20":return{fontWeight:400,fontSize:"20px",lineHeight:"24px"};default:return{}}};return(0,o.jsxs)(r.A,{type:"submit",onClick:g,disabled:a,fullWidth:l,style:{alignItems:"stretch",textTransform:"none"},sx:A=>({...d(n),...k(A,t),...C}),children:[a&&i?(0,o.jsx)(s.A,{sx:{marginLeft:"-32px"},size:Number(n),color:"primary"===t?"info":"primary"}):null,e]})})},20970:(A,e,t)=>{t.d(e,{A:()=>g});var o=t(95155),r=t(7110),s=t(68998),C=t(5565);let g=(0,t(12115).memo)(A=>{let{bg:e,top:t="0",left:g="0",height:n="700px",opacity:a=1,reverce:i=!1,width:l}=A,k=(0,r.A)();return console.log(l),(0,o.jsx)(s.A,{sx:{width:l||(k?"150vw":"100vw"),height:n,position:"absolute",top:t,left:g,zIndex:-1,opacity:a,transform:i?"scaleX(-1)":"scaleX(1)"},children:(0,o.jsx)(C.default,{fill:!0,style:{objectFit:"cover",backgroundPosition:"center right"},alt:"бэкграунд",src:e,quality:100})})})},80398:(A,e,t)=>{t.d(e,{default:()=>l,m:()=>i});var o=t(95155);t(12115);var r=t(14046);t(85716);var s=t(84780);let C=A=>{let{width:e="24",height:t="24"}=A;return(0,o.jsxs)("svg",{width:e,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M22 11.0818V12.0018C21.9988 14.1582 21.3005 16.2565 20.0093 17.9836C18.7182 19.7108 16.9033 20.9743 14.8354 21.5857C12.7674 22.1971 10.5573 22.1237 8.53447 21.3764C6.51168 20.6291 4.78465 19.2479 3.61096 17.4389C2.43727 15.6299 1.87979 13.4899 2.02168 11.3381C2.16356 9.18638 2.99721 7.13814 4.39828 5.49889C5.79935 3.85964 7.69279 2.7172 9.79619 2.24196C11.8996 1.76673 14.1003 1.98415 16.07 2.86182",stroke:"#439F6E",strokeWidth:"1.33333",strokeLinecap:"round",strokeLinejoin:"round"}),(0,o.jsx)("path",{d:"M22 4L12 14.01L9 11.01",stroke:"#439F6E",strokeWidth:"1.33333",strokeLinecap:"round",strokeLinejoin:"round"})]})},g=(0,t(12983).A)((0,o.jsx)("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{id:"Vector",d:"M1 10C1 5.02954 5.0293 1 10 1C14.9707 1 19 5.02954 19 10C19 14.9705 14.9707 19 10 19C5.0293 19 1 14.9705 1 10ZM10.0498 13.5503L9.9502 13.5498L9.9502 13.4502L10.0498 13.4502L10.0498 13.5503ZM10 6.4502L10 10.4502",stroke:"#FF3333",strokeOpacity:"1.000000",strokeWidth:"2.000000",strokeLinejoin:"round",strokeLinecap:"round"})}),"ErrorIcon"),n={success:r.oR.success,error:r.oR.error,info:r.oR.info,warning:r.oR.warning,default:r.oR},a={autoClose:2500,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,transition:r.q7},i=function(A,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;return n[A](e,{...a,...t,position:o})};function l(A){let{children:e}=A,t=(0,s.A)();return(0,o.jsxs)(o.Fragment,{children:[e,(0,o.jsx)(r.N9,{hideProgressBar:!0,closeButton:!1,position:t?"top-center":"top-right",toastClassName:()=>"toast-container",toastStyle:t?{backgroundColor:"rgba(0, 0, 0, 0.9)",color:"#FFFFFF",margin:"15px auto ",width:"445px"}:{},icon:A=>{let{type:e}=A;return"success"===e?(0,o.jsx)(C,{}):"error"===e?(0,o.jsx)(g,{}):void 0}})]})}}}]);