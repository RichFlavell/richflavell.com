(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"3nLz":function(e,t,n){"use strict";n("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("YbXK"),n("eMsz"),n("zTTH"),n("3nLz");var r=n("TqRt");t.__esModule=!0,t.default=void 0;var i,a=r(n("PJYZ")),o=r(n("VbXa")),s=r(n("8OQS")),d=r(n("pVnL")),u=r(n("q1tI")),l=r(n("17x9")),c=function(e){var t=(0,d.default)({},e),n=t.resolutions,r=t.sizes,i=t.critical;return n&&(t.fixed=n,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,n=e.fixed;return h(t||n).src},h=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var n=e.findIndex((function(e){return void 0===e.media}));if(-1!==n)return e[n]}return e[0]},g=Object.create({}),m=function(e){var t=c(e),n=p(t);return g[n]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,x=new WeakMap;function w(e){return e.map((function(e){var t=e.src,n=e.srcSet,r=e.srcSetWebp,i=e.media,a=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},r&&u.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:a}),u.default.createElement("source",{media:i,srcSet:n,sizes:a}))}))}function S(e){var t=[],n=[];return e.forEach((function(e){return(e.media?t:n).push(e)})),[].concat(t,n)}function I(e){return e.map((function(e){var t=e.src,n=e.media,r=e.tracedSVG;return u.default.createElement("source",{key:t,media:n,srcSet:r})}))}function k(e){return e.map((function(e){var t=e.src,n=e.media,r=e.base64;return u.default.createElement("source",{key:t,media:n,srcSet:r})}))}function z(e,t){var n=e.srcSet,r=e.srcSetWebp,i=e.media,a=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:n)+'" '+(a?'sizes="'+a+'" ':"")+"/>"}var E=function(e,t){var n=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return n&&(n.observe(e),x.set(e,t)),function(){n.unobserve(e),x.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+u+o+s+n+r+t+a+i+d+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=u.default.forwardRef((function(e,t){var n=e.src,r=e.imageVariants,i=e.generateSources,a=e.spreadProps,o=e.ariaHidden,s=u.default.createElement(R,(0,d.default)({ref:t,src:n},a,{ariaHidden:o}));return r.length>1?u.default.createElement("picture",null,i(r),s):s})),R=u.default.forwardRef((function(e,t){var n=e.sizes,r=e.srcSet,i=e.src,a=e.style,o=e.onLoad,l=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,d.default)({"aria-hidden":p,sizes:n,srcSet:r,src:i},h,{onLoad:o,onError:l,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))}));R.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var _=function(e){function t(t){var n;(n=e.call(this,t)||this).seenBefore=v&&m(t),n.isCritical="eager"===t.loading||t.critical,n.addNoScript=!(n.isCritical&&!t.fadeIn),n.useIOSupport=!b&&y&&!n.isCritical&&!n.seenBefore;var r=n.isCritical||v&&(b||!n.useIOSupport);return n.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!n.seenBefore&&t.fadeIn},n.imageRef=u.default.createRef(),n.placeholderRef=t.placeholderRef||u.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,a.default)(n)),n.handleRef=n.handleRef.bind((0,a.default)(n)),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},n.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},n.handleImageLoaded=function(){var e,t,n;e=this.props,t=c(e),n=p(t),g[n]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=c(this.props),t=e.title,n=e.alt,r=e.className,i=e.style,a=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,g=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,x=e.itemProp,S=e.loading,z=e.draggable,E=!1===this.state.fadeIn||this.state.imgLoaded,_=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,d.default)({opacity:E?1:0,transition:_?"opacity "+v+"ms":"none"},s),C="boolean"==typeof b?"lightgray":b,N={transitionDelay:v+"ms"},j=(0,d.default)({opacity:this.state.imgLoaded?0:1},_&&N,{},s,{},f),V={title:t,alt:this.state.isVisible?"":n,style:j,className:p,itemProp:x};if(g){var W=g,M=h(g);return u.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},a),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},u.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),C&&u.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},_&&N)}),M.base64&&u.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:V,imageVariants:W,generateSources:k}),M.tracedSVG&&u.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:V,imageVariants:W,generateSources:I}),this.state.isVisible&&u.default.createElement("picture",null,w(W),u.default.createElement(R,{alt:n,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S,draggable:z})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:n,title:t,loading:S},M,{imageVariants:W}))}}))}if(m){var q=m,H=h(m),P=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},a);return"inherit"===a.display&&delete P.display,u.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},C&&u.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},_&&N)}),H.base64&&u.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:V,imageVariants:q,generateSources:k}),H.tracedSVG&&u.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:V,imageVariants:q,generateSources:I}),this.state.isVisible&&u.default.createElement("picture",null,w(q),u.default.createElement(R,{alt:n,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:x,loading:S,draggable:z})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:n,title:t,loading:S},H,{imageVariants:q}))}}))}return null},t}(u.default.Component);_.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),C=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});_.propTypes={resolutions:T,sizes:C,fixed:l.default.oneOfType([T,l.default.arrayOf(T)]),fluid:l.default.oneOfType([C,l.default.arrayOf(C)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var N=_;t.default=N},RraF:function(e,t,n){"use strict";t.a=function(e){return e||{}}},SGlo:function(e,t,n){"use strict";var r=n("rj/q"),i=n("N+BI").getWeak,a=n("1a8y"),o=n("BjK0"),s=n("xa9o"),d=n("yde8"),u=n("Wadk"),l=n("qDzq"),c=n("O1i0"),f=u(5),p=u(6),h=0,g=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var n=b(this,e);n?n[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,n,a){var u=e((function(e,r){s(e,u,t,"_i"),e._t=t,e._i=h++,e._l=void 0,null!=r&&d(r,n,e[a],e)}));return r(u.prototype,{delete:function(e){if(!o(e))return!1;var n=i(e);return!0===n?g(c(this,t)).delete(e):n&&l(n,this._i)&&delete n[this._i]},has:function(e){if(!o(e))return!1;var n=i(e);return!0===n?g(c(this,t)).has(e):n&&l(n,this._i)}}),u},def:function(e,t,n){var r=i(a(t),!0);return!0===r?g(e).set(t,n):r[e._i]=n,e},ufstore:g}},cw5S:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"d",(function(){return x})),n.d(t,"b",(function(){return w})),n.d(t,"f",(function(){return S})),n.d(t,"e",(function(){return O})),n.d(t,"c",(function(){return R}));var r=n("vOnD"),i=n("WFIL");function a(){var e=v(["\n      margin: 0 auto 25px;\n    "]);return a=function(){return e},e}function o(){var e=v(["\n      border-radius: 0;\n      left: 0;\n      margin: 0 auto 25px;\n\n      img {\n        border-radius: 0;\n      }\n    "]);return o=function(){return e},e}function s(){var e=v(["\n      left: 0px;\n    "]);return s=function(){return e},e}function d(){var e=v(["\n      left: -34px;\n    "]);return d=function(){return e},e}function u(){var e=v(["\n      padding: 0 20px;\n    "]);return u=function(){return e},e}function l(){var e=v(["\n      max-width: 486px;\n      margin: 0 auto 25px;\n    "]);return l=function(){return e},e}function c(){var e=v(["\n      max-width: 507px;\n    "]);return c=function(){return e},e}function f(){var e=v(["\n      margin: 10px auto 45px;\n    "]);return f=function(){return e},e}function p(){var e=v(["\n      margin: 10px auto 45px;\n    "]);return p=function(){return e},e}function h(){var e=v(["\n      margin: 30px auto 18px;\n    "]);return h=function(){return e},e}function g(){var e=v(["\n    padding: 0 20px;\n  "]);return g=function(){return e},e}function m(){var e=v(["\n    max-width: 486px;\n  "]);return m=function(){return e},e}function b(){var e=v(["\n    max-width: 507px;\n  "]);return b=function(){return e},e}function v(e,t){return t||(t=e.slice(0)),e.raw=t,e}var y=r.d.article.withConfig({displayName:"style__Container",componentId:"sc-1ik9kcc-0"})(["display:flex;flex-direction:column;margin:auto;"]),x=r.d.header.withConfig({displayName:"style__Header",componentId:"sc-1ik9kcc-1"})(["display:flex;flex-direction:column;margin:",";margin-top:",";margin-bottom:",";"],(function(e){return e.theme.spacing.xl}),(function(e){return e.theme.spacing.md}),(function(e){return e.theme.spacing.xs})),w=r.d.div.withConfig({displayName:"style__DisqusWrapper",componentId:"sc-1ik9kcc-2"})(["max-width:980px;margin:auto;width:100%;"]),S=r.d.h2.withConfig({displayName:"style__Meta",componentId:"sc-1ik9kcc-3"})(["display:flex;font-weight:500;font-size:",";opacity:0.3;line-height:",";justify-content:center;span{margin:auto ",";}time{margin:auto ",";flex:1;text-align:right;}span:last-of-type{flex:1;text-align:left;}"],(function(e){return e.theme.size.md}),(function(e){return e.theme.size.lg}),(function(e){return e.theme.spacing.xs}),(function(e){return e.theme.spacing.xs})),I="980px",k="100vw",z=Object(r.c)(["width:100%;max-width:680px;"," ",";",";"],i.b.lessThan("desktop")(b()),i.b.lessThan("tablet")(m()),i.b.lessThan("mobile")(g())),E=Object(r.c)(["h1,h2,h3,h4,h5,h6{margin:0 auto;}h1,h1 *,h2,h2 *{margin:25px auto 18px;",";}h3,h3 *{margin:20px auto 10px;}h1,h2,h3,h4,h5,h6{",";}"],i.b.lessThan("tablet")(h()),z),L=Object(r.c)([".gatsby-resp-image-background-image{position:absolute !important;}img{display:inline-block;position:relative;max-width:100%;height:auto;z-index:0;margin:15px auto 50px;border-radius:5px;",";}div.i-r{border-radius:50% !important;overflow:hidden;margin-bottom:"," !important;max-width:320px !important;padding:0px !important;img{margin:0px !important;}}div.i-f{margin-bottom:"," !important;}div.i-s{display:inline-block;position:relative;max-width:100%;height:auto;z-index:0;margin:15px auto 50px;border-radius:5px;width:100%;max-width:680px;left:-8px;",";"," ",";",";}div.i-m{position:relative;margin:15px auto 50px;width:100%;max-width:",";",";",";",";}div.i-l{position:relative;width:",";margin:25px auto 60px;pointer-events:none;img{border-radius:0;}",";}"],i.b.lessThan("desktop")(p()),(function(e){return e.theme.spacing.md}),(function(e){return e.theme.spacing.xl}),i.b.greaterThan("tablet")(f()),i.b.lessThan("tablet")(c()),i.b.lessThan("tablet")(l()),i.b.lessThan("mobile")(u()),I,i.b.greaterThan("desktop")(d()),i.b.greaterThan("tablet")(s()),i.b.lessThan("tablet")(o()),k,i.b.lessThan("desktop")(a())),O=r.d.div.withConfig({displayName:"style__MDXBody",componentId:"sc-1ik9kcc-4"})(["position:relative;z-index:10;display:flex;justify-content:center;flex-direction:column;overflow:hidden;"," ",""],E,L),R=r.d.div.withConfig({displayName:"style__FeaturedImageContainer",componentId:"sc-1ik9kcc-5"})(["margin-bottom:12.5vh !important;"])},eMsz:function(e,t,n){"use strict";var r,i=n("emib"),a=n("Wadk")(0),o=n("IYdN"),s=n("N+BI"),d=n("k5Iv"),u=n("SGlo"),l=n("BjK0"),c=n("O1i0"),f=n("O1i0"),p=!i.ActiveXObject&&"ActiveXObject"in i,h=s.getWeak,g=Object.isExtensible,m=u.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(l(e)){var t=h(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return u.def(c(this,"WeakMap"),e,t)}},y=e.exports=n("94Pd")("WeakMap",b,v,u,!0,!0);f&&p&&(d((r=u.getConstructor(b,"WeakMap")).prototype,v),s.NEED=!0,a(["delete","has","get","set"],(function(e){var t=y.prototype,n=t[e];o(t,e,(function(t,i){if(l(t)&&!g(t)){this._f||(this._f=new r);var a=this._f[e](t,i);return"set"==e?this:a}return n.call(this,t,i)}))})))},nWfQ:function(e,t,n){var r=n("P8UN"),i=n("nsRs"),a=n("nONw"),o=n("1a8y"),s=n("BjK0"),d=n("96qb"),u=n("16Xr"),l=(n("emib").Reflect||{}).construct,c=d((function(){function e(){}return!(l((function(){}),[],e)instanceof e)})),f=!d((function(){l((function(){}))}));r(r.S+r.F*(c||f),"Reflect",{construct:function(e,t){a(e),o(t);var n=arguments.length<3?e:a(arguments[2]);if(f&&!c)return l(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(u.apply(e,r))}var d=n.prototype,p=i(s(d)?d:Object.prototype),h=Function.apply.call(e,p,t);return s(h)?h:p}})},xyvv:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=["second","minute","hour","day","week","month","year"],i=["秒","分钟","小时","天","周","个月","年"],a={},o=function(e,t){a[e]=t},s=function(e){return a[e]||a.en_US},d=(n("q8oJ"),n("C9fy"),n("8npG"),n("HXzo"),n("sC2a"),[60,60,24,7,365/7/12,12]);function u(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function l(e,t){for(var n=e<0?1:0,r=e=Math.abs(e),i=0;e>=d[i]&&i<d.length;i++)e/=d[i];return(e=Math.floor(e))>(0===(i*=2)?9:1)&&(i+=1),t(e,i,r)[n].replace("%s",e.toString())}function c(e,t){return(+(t?u(t):new Date)-+u(e))/1e3}var f=function(e,t,n){return l(c(e,n&&n.relativeDate),s(t))};n("rzGZ"),n("Dq+y"),n("Ggvi"),n("JHok");o("en_US",(function(e,t){if(0===t)return["just now","right now"];var n=r[Math.floor(t/2)];return e>1&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]})),o("zh_CN",(function(e,t){if(0===t)return["刚刚","片刻后"];var n=i[~~(t/2)];return[e+" "+n+"前",e+" "+n+"后"]}))},zTTH:function(e,t,n){"use strict";var r=n("P8UN"),i=n("Wadk")(6),a="findIndex",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n("Dq1/")(a)}}]);
//# sourceMappingURL=7dcdc8c3580446720d683ef64bdb36ab58846e60-e5c4485e5d4e2e869aaf.js.map