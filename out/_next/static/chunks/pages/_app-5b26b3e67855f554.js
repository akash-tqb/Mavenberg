(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9811)}])},3991:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return s},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return o},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return d}});let i="refresh",s="navigate",l="restore",a="server-patch",o="prefetch",c="fast-refresh",d="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1516:function(e,t){"use strict";function n(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8872:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return g}});let r=n(8754),i=n(1757),s=i._(n(7294)),l=r._(n(2636)),a=n(5471),o=n(3735),c=n(3341);n(4210);let d=r._(n(7746)),u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Mavenberg/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e,t,n,r,i,s){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function h(e){let[t,n]=s.version.split("."),r=parseInt(t,10),i=parseInt(n,10);return r>18||18===r&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,s.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:l,width:a,decoding:o,className:c,style:d,fetchPriority:u,placeholder:m,loading:g,unoptimized:p,fill:x,onLoadRef:v,onLoadingCompleteRef:j,setBlurComplete:b,setShowAltText:w,onLoad:y,onError:N,...C}=e;return s.default.createElement("img",{...C,...h(u),loading:g,width:a,height:l,decoding:o,"data-nimg":x?"fill":"1",className:c,style:d,sizes:i,srcSet:r,src:n,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&f(e,m,v,j,b,p))},[n,m,v,j,b,N,p,t]),onLoad:e=>{let t=e.currentTarget;f(t,m,v,j,b,p)},onError:e=>{w(!0),"blur"===m&&b(!0),N&&N(e)}})}),g=(0,s.forwardRef)((e,t)=>{let n=(0,s.useContext)(c.ImageConfigContext),r=(0,s.useMemo)(()=>{let e=u||n||o.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:i,onLoadingComplete:f}=e,g=(0,s.useRef)(i);(0,s.useEffect)(()=>{g.current=i},[i]);let p=(0,s.useRef)(f);(0,s.useEffect)(()=>{p.current=f},[f]);let[x,v]=(0,s.useState)(!1),[j,b]=(0,s.useState)(!1),{props:w,meta:y}=(0,a.getImgProps)(e,{defaultLoader:d.default,imgConf:r,blurComplete:x,showAltText:j});return s.default.createElement(s.default.Fragment,null,s.default.createElement(m,{...w,unoptimized:y.unoptimized,placeholder:y.placeholder,fill:y.fill,onLoadRef:g,onLoadingCompleteRef:p,setBlurComplete:v,setShowAltText:b,ref:t}),y.priority?s.default.createElement(l.default,null,s.default.createElement("link",{key:"__nimg-"+w.src+w.srcSet+w.sizes,rel:"preload",as:"image",href:w.srcSet?void 0:w.src,imageSrcSet:w.srcSet,imageSizes:w.sizes,crossOrigin:w.crossOrigin,referrerPolicy:w.referrerPolicy,...h(w.fetchPriority)})):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(8754),i=r._(n(7294)),s=n(4532),l=n(3353),a=n(1410),o=n(9064),c=n(370),d=n(9955),u=n(4224),f=n(508),h=n(1516),m=n(4266),g=n(3991),p=new Set;function x(e,t,n,r,i,s){if(!s&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let i=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,s=t+"%"+n+"%"+i;if(p.has(s))return;p.add(s)}let a=s?e.prefetch(t,i):e.prefetch(t,n,r);Promise.resolve(a).catch(e=>{})}function v(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let j=i.default.forwardRef(function(e,t){let n,r;let{href:a,as:p,children:j,prefetch:b=null,passHref:w,replace:y,shallow:N,scroll:C,locale:A,onClick:k,onMouseEnter:_,onTouchStart:M,legacyBehavior:E=!1,...S}=e;n=j,E&&("string"==typeof n||"number"==typeof n)&&(n=i.default.createElement("a",null,n));let P=i.default.useContext(d.RouterContext),O=i.default.useContext(u.AppRouterContext),I=null!=P?P:O,R=!P,z=!1!==b,L=null===b?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:T,as:D}=i.default.useMemo(()=>{if(!P){let e=v(a);return{href:e,as:p?v(p):e}}let[e,t]=(0,s.resolveHref)(P,a,!0);return{href:e,as:p?(0,s.resolveHref)(P,p):t||e}},[P,a,p]),H=i.default.useRef(T),U=i.default.useRef(D);E&&(r=i.default.Children.only(n));let V=E?r&&"object"==typeof r&&r.ref:t,[B,F,W]=(0,f.useIntersection)({rootMargin:"200px"}),G=i.default.useCallback(e=>{(U.current!==D||H.current!==T)&&(W(),U.current=D,H.current=T),B(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[D,V,T,W,B]);i.default.useEffect(()=>{I&&F&&z&&x(I,T,D,{locale:A},{kind:L},R)},[D,T,F,A,z,null==P?void 0:P.locale,I,R,L]);let K={ref:G,onClick(e){E||"function"!=typeof k||k(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,s,a,o,c,d,u){let{nodeName:f}=e.currentTarget,h="A"===f.toUpperCase();if(h&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!d&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let m=()=>{let e=null==o||o;"beforePopState"in t?t[s?"replace":"push"](n,r,{shallow:a,locale:c,scroll:e}):t[s?"replace":"push"](r||n,{forceOptimisticNavigation:!u,scroll:e})};d?i.default.startTransition(m):m()}(e,I,T,D,y,N,C,A,R,z)},onMouseEnter(e){E||"function"!=typeof _||_(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(z||!R)&&x(I,T,D,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:L},R)},onTouchStart(e){E||"function"!=typeof M||M(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(z||!R)&&x(I,T,D,{locale:A,priority:!0,bypassPrefetchedCheck:!0},{kind:L},R)}};if((0,o.isAbsoluteUrl)(D))K.href=D;else if(!E||w||"a"===r.type&&!("href"in r.props)){let e=void 0!==A?A:null==P?void 0:P.locale,t=(null==P?void 0:P.isLocaleDomain)&&(0,h.getDomainLocale)(D,e,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);K.href=t||(0,m.addBasePath)((0,c.addLocale)(D,e,null==P?void 0:P.defaultLocale))}return E?i.default.cloneElement(r,K):i.default.createElement("a",{...S,...K},n)}),b=j;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return o}});let r=n(7294),i=n(29),s="function"==typeof IntersectionObserver,l=new Map,a=[];function o(e){let{rootRef:t,rootMargin:n,disabled:o}=e,c=o||!s,[d,u]=(0,r.useState)(!1),f=(0,r.useRef)(null),h=(0,r.useCallback)(e=>{f.current=e},[]);(0,r.useEffect)(()=>{if(s){if(c||d)return;let e=f.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:i,elements:s}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let i=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:s,elements:i},a.push(n),l.set(n,t),t}(n);return s.set(e,t),i.observe(e),function(){if(s.delete(e),i.unobserve(e),0===s.size){i.disconnect(),l.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&u(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!d){let e=(0,i.requestIdleCallback)(()=>u(!0));return()=>(0,i.cancelIdleCallback)(e)}},[c,n,t,d,f.current]);let m=(0,r.useCallback)(()=>{u(!1)},[]);return[h,d,m]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5471:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(4210);let r=n(7757),i=n(3735);function s(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,o,c,{src:d,sizes:u,unoptimized:f=!1,priority:h=!1,loading:m,className:g,quality:p,width:x,height:v,fill:j=!1,style:b,onLoad:w,onLoadingComplete:y,placeholder:N="empty",blurDataURL:C,fetchPriority:A,layout:k,objectFit:_,objectPosition:M,lazyBoundary:E,lazyRoot:S,...P}=e,{imgConf:O,showAltText:I,blurComplete:R,defaultLoader:z}=t,L=O||i.imageConfigDefault;if("allSizes"in L)a=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t);a={...L,allSizes:e,deviceSizes:t}}let T=P.loader||z;delete P.loader,delete P.srcSet;let D="__next_img_default"in T;if(D){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=T;T=t=>{let{config:n,...r}=t;return e(r)}}if(k){"fill"===k&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!u&&(u=t)}let H="",U=l(x),V=l(v);if("object"==typeof(n=d)&&(s(n)||void 0!==n.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(o=e.blurWidth,c=e.blurHeight,C=C||e.blurDataURL,H=e.src,!j){if(U||V){if(U&&!V){let t=U/e.width;V=Math.round(e.height*t)}else if(!U&&V){let t=V/e.height;U=Math.round(e.width*t)}}else U=e.width,V=e.height}}let B=!h&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:H)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,B=!1),a.unoptimized&&(f=!0),D&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),h&&(A="high");let F=l(p),W=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:_,objectPosition:M}:{},I?{}:{color:"transparent"},b),G="blur"===N&&C&&!R?{backgroundSize:W.objectFit||"cover",backgroundPosition:W.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:U,heightInt:V,blurWidth:o,blurHeight:c,blurDataURL:C,objectFit:W.objectFit})+'")'}:{},K=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:s,sizes:l,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:o,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let s=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:s,kind:"x"}}(t,i,l),d=o.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:o.map((e,r)=>a({config:t,src:n,quality:s,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:a({config:t,src:n,quality:s,width:o[d]})}}({config:a,src:d,unoptimized:f,width:U,quality:F,sizes:u,loader:T}),X={...P,loading:B?"lazy":m,fetchPriority:A,width:U,height:V,decoding:"async",className:g,style:{...W,...G},sizes:K.sizes,srcSet:K.srcSet,src:K.src},Y={unoptimized:f,priority:h,placeholder:N,fill:j};return{props:X,meta:Y}}},7757:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:s,objectFit:l}=e,a=r||t,o=i||n,c=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+a+" "+o+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&i?"1":"20")+"'/%3E"+c+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+s+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},2555:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return c},unstable_getImgProps:function(){return o}});let r=n(8754),i=n(5471),s=n(4210),l=n(8872),a=r._(n(7746)),o=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Mavenberg/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},c=l.Image},7746:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},9811:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),i=n(5675),s=n.n(i),l={src:"/Mavenberg//_next/static/media/logoold.bb3b3178.png",height:389,width:1087,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbElEQVR4nGM8cu/5JHYOdt19567klP8Xe2LO+pvz4T+GfwwMDMxA/IfxyMNX/znYWBnOP33Tnnrz40pjEQ7Fp38ZhECSDIwMXxgvf/g5jZmJUe/Dr78Rh5+8ffLs+0+2lR++czP8ByphZPgDAKpMLV/Q7VCaAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3},a=n(1664),o=n.n(a);function c(){return(0,r.jsx)("div",{className:"bg-maven-bg nav-shadow",id:"footer",children:(0,r.jsxs)("div",{className:"px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-5 lg:gap-8 mb-8 lg:grid-cols-7",children:[(0,r.jsxs)("div",{className:"md:max-w-md lg:col-span-3",children:[(0,r.jsx)("a",{href:"/","aria-label":"Go home",title:"Company",className:"inline-flex items-center",children:(0,r.jsx)("div",{children:(0,r.jsx)(s(),{src:l,alt:"Mavenberg",width:200,height:100})})}),(0,r.jsx)("div",{className:"mt-4 lg:max-w-md",children:(0,r.jsx)("p",{className:"text-maven-white text-justify",children:"Mavenberg Innovations is a digital transformation company that takes end to end responsibility of your digital investment outcomes and transforms your business by offering products and services focused on managing the digital thread across your product's life cycle."})})]}),(0,r.jsxs)(o(),{href:"https://goo.gl/maps/wVDifbMbenai2cBP6",target:"_blank",rel:"noopener noreferrer",className:"flex flex-col lg:justify-center gap-4 lg:col-span-2 text-maven-orange transition-colors duration-300 hover:text-teal-accent-400",children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:[(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-2 w-11/12",children:[(0,r.jsx)("h1",{className:"text-maven-orange font-semibold",children:"India Office"}),(0,r.jsx)("p",{className:"text-maven-white transition-colors duration-300",children:"7th Floor, Ncc Urban - Windsor, No: 17/1, Bellary Rd, Yashoda Nagar, Yelahanka, Bengaluru, Karnataka, India-560064"})]})]}),(0,r.jsxs)(o(),{href:"https://goo.gl/maps/wVDifbMbenai2cBP6",target:"_blank",rel:"noopener noreferrer",className:"flex flex-col gap-4 lg:justify-center lg:col-span-2 text-maven-orange transition-colors duration-300 hover:text-teal-accent-400",children:[(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:[(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"}),(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-2 w-11/12",children:[(0,r.jsx)("h1",{className:"text-maven-orange font-semibold",children:"Germany Office"}),(0,r.jsxs)("p",{className:"text-maven-white transition-colors duration-300",children:["Mavenberg Innovations GmbH,",(0,r.jsx)("br",{}),"F\xfcrtherstra\xdfe 27,",(0,r.jsx)("br",{}),"90429 N\xfcrnberg, Germany."]})]})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8 lg:grid-cols-4 mb-8",children:[(0,r.jsx)("div",{className:"lg:flex justify-center",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-medium tracking-wide text-maven-blue",children:"Products"}),(0,r.jsxs)("ul",{className:"mt-2 space-y-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/",className:"text-maven-white transition-colors duration-300 ",children:"MavenDx"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/products/panel-configurator",className:"text-maven-white transition-colors duration-300 ",children:"Panel Configurator"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/products/license-insights",className:"text-maven-white transition-colors duration-300 ",children:"License Insights"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/products/tc&alias-integration",className:"text-maven-white transition-colors duration-300 ",children:"TC & Alias Integration"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/products/3d-visualiser",className:"text-maven-white transition-colors duration-300 ",children:"3D Visualizer"})})]})]})}),(0,r.jsx)("div",{className:"lg:flex justify-center",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-medium tracking-wide text-maven-blue",children:"Services"}),(0,r.jsxs)("ul",{className:"mt-2 space-y-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/services/plm&allied-services",className:"text-maven-white transition-colors duration-300 ",children:"PLM & Allied Services"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/services/plm-managed-services",className:"text-maven-white transition-colors duration-300 ",children:"PLM Managed Services"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/services/engineering-services",className:"text-maven-white transition-colors duration-300 ",children:"Engineering Services"})})]})]})}),(0,r.jsx)("div",{className:"lg:flex justify-center",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"font-medium tracking-wide text-maven-blue",children:"Quick Links"}),(0,r.jsxs)("ul",{className:"mt-2 space-y-2",children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/aboutus",className:"text-maven-white transition-colors duration-300 ",children:"About Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/careers",className:"text-maven-white transition-colors duration-300 ",children:"Careers"})})]})]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-base font-medium tracking-wide text-maven-blue mb-2",children:"Contacts"}),(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsxs)(o(),{href:"mailto:info@mavenberg.com",className:"flex flex-row space-x-4 text-maven-blue transition-colors duration-300 hover:text-teal-accent-400",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})}),(0,r.jsx)("p",{className:"text-maven-white transition-colors duration-300 ",children:"info@mavenberg.com"})]}),(0,r.jsxs)(o(),{href:"tel:+918951996331",className:"flex flex-row space-x-4 text-maven-blue transition-colors duration-300 hover:text-teal-accent-400",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})}),(0,r.jsx)("p",{className:"text-maven-white transition-colors duration-300 ",children:"+91-89519 96331"})]}),(0,r.jsx)("div",{children:(0,r.jsxs)(o(),{href:"https://www.linkedin.com/company/mavenberg-innovations-india-private-limited",target:"_blank",rel:"noopener noreferrer",className:"flex gap-4 items-center",children:[(0,r.jsx)("p",{className:"text-maven-white",children:"Get Connected with Us"}),(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",version:"1.1",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 510 510",children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{fill:"#03E5E5",d:"M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zM153 433.5H76.5V204H153v229.5zm-38.25-272.85c-25.5 0-45.9-20.4-45.9-45.9s20.4-45.9 45.9-45.9 45.9 20.4 45.9 45.9-20.4 45.9-45.9 45.9zM433.5 433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25 17.851-38.25 38.25V433.5H204V204h76.5v30.6c12.75-20.4 40.8-35.7 63.75-35.7 48.45 0 89.25 40.8 89.25 89.25V433.5z"})})})]})})]})]})]}),(0,r.jsx)("div",{className:"flex flex-col-reverse justify-between pt-5 pb-10 border-t border-maven-blue lg:flex-row",children:(0,r.jsx)("p",{className:"text-sm text-maven-white",children:"\xa9 Copyright 2023 Mavenberg Innovation India Pvt Ltd. All rights reserved."})})]})})}var d=n(7294),u={src:"/Mavenberg//_next/static/media/logoHex.7ee3dd7c.png",height:389,width:335,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA0klEQVR42j2NXQvBcBTG/x+I3PgC7pRrH8yFC3KjdiMKeUnJIsWmjDGzyUuTLOvvZWyavR3/qXnqdDq/8/Q8KNRI0ZLcRc/SshL5w654SIj6p7V+2kA2SC/HXlzNYnWyjKF8k7bb/AaYE/ZXD8sZ7lVoTEXIlNsMqnESnmlPqHOSX2IE6Ag7l8cGFHpsD1VWR7x9eyAbrh/EbkzPDSpyrEyj5gG7MjmEu+UFsWR+JkpSx4hRH6nl7d0nEAIokCd/NamBokVRqOlFT8+xQbHnWzxkX8R3ofUEAJC1AAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8},f={src:"/Mavenberg//_next/static/media/independenceday.0eceb0ad.svg",height:233,width:1061,blurWidth:0,blurHeight:0};function h(){let[e,t]=(0,d.useState)(!1);return(0,r.jsx)("div",{className:"bg-maven-bg lg:sticky lg-nav-shadow lg:z-50 lg:top-0",children:(0,r.jsx)("div",{className:"px-4 py-6 mx-auto lg:py-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8",children:(0,r.jsxs)("div",{className:"relative flex items-center justify-between lg:justify-center lg:space-x-16 lg:py-4 ",children:[(0,r.jsxs)("div",{className:"absolute left-0 hidden lg:flex",children:[(0,r.jsxs)("p",{className:"relative text-lg tracking-wider text-maven-orange",children:["Happy ",(0,r.jsx)("span",{className:"text-maven-white",children:"Indpendence "})," ",(0,r.jsx)("span",{className:"text-[#22c55e]",children:"Day"})]}),(0,r.jsx)(s(),{src:f,width:200,height:100,className:"absolute top-[-80%] opacity-50",alt:"navimage"})]}),(0,r.jsxs)("ul",{className:"items-center hidden space-x-12 lg:flex",children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/#products",className:"font-medium tracking-wide text-maven-white transition-colors duration-200 hover:text-maven-blue",children:"Products"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/#services",className:"font-medium tracking-wide text-maven-white transition-colors duration-200 hover:text-maven-blue",children:"Services"})})]}),(0,r.jsx)(o(),{href:"/","aria-label":"Mavenberg",title:"Mavenberg",className:"inline-flex items-center justify-center",children:(0,r.jsx)("div",{children:(0,r.jsx)(s(),{src:u,alt:"Mavenberg",width:50,height:50})})}),(0,r.jsxs)("ul",{className:"items-center hidden space-x-8 lg:flex",children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/aboutus",className:"font-medium tracking-wide text-maven-white transition-colors duration-200 hover:text-maven-blue",children:"About us"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/careers","aria-label":"Careers",title:"Careers",className:"font-medium tracking-wide text-maven-white transition-colors duration-200 hover:text-maven-blue",children:"Careers"})})]}),(0,r.jsxs)("div",{className:"lg:flex absolute right-0 hidden",children:[(0,r.jsx)(o(),{href:"/#footer",className:"inline-flex  items-center justify-center h-10 px-6 font-medium tracking-wide text-maven-bg transition duration-200 rounded-lg shadow-md bg-maven-blue focus:shadow-outline focus:outline-none",children:"Contact Us"})," "]}),(0,r.jsxs)("div",{className:"lg:hidden",children:[(0,r.jsx)("button",{"aria-label":"Open Menu",title:"Open Menu",className:"p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline",onClick:()=>t(!0),children:(0,r.jsxs)("svg",{className:"w-5 text-maven-white",viewBox:"0 0 24 24",children:[(0,r.jsx)("path",{fill:"currentColor",d:"M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"}),(0,r.jsx)("path",{fill:"currentColor",d:"M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"}),(0,r.jsx)("path",{fill:"currentColor",d:"M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"})]})}),e&&(0,r.jsx)("div",{className:"absolute top-0 left-0 w-full",children:(0,r.jsxs)("div",{className:"p-5 bg-maven-bg shadow-md shadow-maven-blue border rounded",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,r.jsx)("div",{children:(0,r.jsx)(o(),{href:"/","aria-label":"Company",title:"Company",className:"inline-flex items-center",children:(0,r.jsx)("div",{children:(0,r.jsx)(s(),{src:u,alt:"Mavenberg",width:50,height:50})})})}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{"aria-label":"Close Menu",title:"Close Menu",className:"p-2 -mt-2 -mr-2 transition duration-200 rounded  focus:bg-maven-white focus:outline-none focus:shadow-outline",onClick:()=>t(!1),children:(0,r.jsx)("svg",{className:"w-5 text-maven-white",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{fill:"currentColor",d:"M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"})})})})]}),(0,r.jsx)("nav",{children:(0,r.jsxs)("ul",{className:"space-y-4",children:[(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/#products",className:"font-medium tracking-wide text-maven-white transition-colors duration-200 ",children:"Product"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/#services",className:"font-medium tracking-wide text-maven-white transition-colors duration-200 ",children:"Services"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/aboutus",className:"font-medium tracking-wide text-maven-white transition-colors duration-200",children:"About Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)(o(),{href:"/careers",className:"font-medium tracking-wide text-maven-white transition-colors duration-200",children:"Careers"})})]})})]})})]})]})})})}var m=n(9008),g=n.n(m);function p(){return(0,r.jsxs)(g(),{children:[(0,r.jsx)("link",{rel:"shortcut icon",href:"https://www.mavenberg.com/wp-content/uploads/2021/03/cropped-favicon.ico-32x32.png"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r.jsx)("title",{children:"Mavenberg Innovations India Private Limited | Showing the next way"}),(0,r.jsx)("meta",{name:"description",content:"Discover seamless product lifecycle management with our cutting-edge products."})]})}function x(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"layout",children:[(0,r.jsx)(h,{}),(0,r.jsx)(p,{}),(0,r.jsx)("main",{className:"bg-maven-bg",children:t}),(0,r.jsx)(c,{})]})}function v(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(x,{children:(0,r.jsx)(t,{...n})})}n(3814)},3814:function(){},9008:function(e,t,n){e.exports=n(2636)},5675:function(e,t,n){e.exports=n(2555)},1664:function(e,t,n){e.exports=n(5569)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);