(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7evw":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n("UZsz"),o=n("Bp/N"),i=n("HhXV");t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"Bp/N":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("q1tI"),a=(r=i)&&r.__esModule?r:{default:r};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(t.CommentEmbed=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return a.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(a.default.Component)).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},HhXV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("q1tI"),a=(r=i)&&r.__esModule?r:{default:r},c=n("ZMnY");function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.DiscussionEmbed=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return a.default.createElement("div",{id:"disqus_thread"})}}]),t}(a.default.Component)},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},UZsz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("q1tI"),a=(r=i)&&r.__esModule?r:{default:r},c=n("ZMnY");function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);t.CommentCount=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,c.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return a.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(a.default.Component)},X8hv:function(e,t,n){var r=n("sXyB"),o=n("RIqP"),i=n("lSNA"),a=n("8OQS");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=n("q1tI"),l=n("E/Ix"),p=l.useMDXComponents,d=l.mdx,f=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,i=e.children,c=a(e,["scope","components","children"]),l=p(n),m=f(t),h=s.useMemo((function(){if(!i)return null;var e=u({React:s,mdx:d},m),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+i])).apply(void 0,[{}].concat(o(n)))}),[i,t]);return s.createElement(h,u({components:l},c))}},ZMnY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},c=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),c&&e.apply(o,i)}},t.isReactElement=a,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),r=!0,o=!1,i=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var s=c.value;if(e[s]!==t[s]&&!a(e[s]))return!0}}catch(l){o=!0,i=l}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return!1};var r,o=n("q1tI"),i=(r=o)&&r.__esModule?r:{default:r};function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},"b1P/":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("IxVq"),a=n("7evw"),c=n("A2+M"),u=n("s1bq"),s=n("RraF"),l=n("FBsu"),p=n("MUpH"),d=n("vOnD"),f=n("WFIL"),m=n("Wbzz"),h=n("MQhQ"),b=n.n(h);function y(){var e=Object(p.a)(["\n      max-width: 95%;\n  "]);return y=function(){return e},e}function g(){var e=Object(p.a)(["\n      max-width: 75%;\n  "]);return g=function(){return e},e}function w(){var e=Object(p.a)(["\n      z-index: 0;\n    "]);return w=function(){return e},e}function v(){var e=Object(p.a)(["\n      margin: 0 0 25px 0;\n      padding: 0px;\n    "]);return v=function(){return e},e}function x(){var e=Object(p.a)(["\n      border-radius: 0;\n      left: 0;\n      margin: 0 auto 25px;\n      z-index: 0;\n\n      img {\n        border-radius: 0;\n      }\n    "]);return x=function(){return e},e}function O(){var e=Object(p.a)(["\n      left: 0px;\n    "]);return O=function(){return e},e}function _(){var e=Object(p.a)(["\n      left: -34px;\n    "]);return _=function(){return e},e}function j(){var e=Object(p.a)(["\n      max-width: 100%;\n      padding: 0 24px;\n    "]);return j=function(){return e},e}function E(){var e=Object(p.a)(["\n      max-width: 507px;\n      max-width: 486px;\n      margin: 0 auto 25px;\n      left: 0px;\n    "]);return E=function(){return e},e}function k(){var e=Object(p.a)(["\n      margin: 10px auto 45px;\n    "]);return k=function(){return e},e}function C(){var e=Object(p.a)(["\n      margin: 10px auto 45px;\n    "]);return C=function(){return e},e}function I(){var e=Object(p.a)(["\n    padding: 0 20px;\n  "]);return I=function(){return e},e}function S(){var e=Object(p.a)(["\n    max-width: 486px;\n  "]);return S=function(){return e},e}function D(){var e=Object(p.a)(["\n    max-width: 507px;\n  "]);return D=function(){return e},e}function P(){var e=Object(p.a)(["\n      margin: 30px auto 18px;\n    "]);return P=function(){return e},e}function q(){var e=Object(p.a)(["\n    width: 95%;\n    padding: 0px ","\n  "]);return q=function(){return e},e}var T=Object(d.e)(["from{opacity:0;}to{opacity:1;}"]),M=d.d.article.withConfig({displayName:"style__Container",componentId:"sc-1ik9kcc-0"})(["display:flex;flex-direction:column;margin:auto;"]),z=d.d.div.withConfig({displayName:"style__Meta",componentId:"sc-1ik9kcc-1"})(["display:flex;flex-direction:column;z-index:10;position:absolute;width:100%;height:100%;justify-content:center;align-items:center;background:-webkit-linear-gradient( top,rgba(255,255,255,0) 0%,transparent 1%,rgba(0,0,0,0.2) 26%,rgba(0,0,0,0.5) 66%,rgba(0,0,0,0.6) 100% );& > ","{color:",";}"],l.h,(function(e){return e.theme.palette.white})),N=d.d.div.withConfig({displayName:"style__DisqusWrapper",componentId:"sc-1ik9kcc-2"})(["max-width:90em;margin:auto;width:75%;",""],f.b.lessThan("mobile")(q(),(function(e){return e.theme.spacing.md}))),U="800px",R="1100px",B="100vw",Q=Object(d.c)(["h1,h2,h3,h4,h5,h6{margin:0 auto;}h1,h1 *,h2,h2 *{margin:25px auto 18px;",";}h3,h3 *{margin:20px auto 10px;}h1,h2,h3,h4,h5,h6{width:100%;max-width:900px;"," ",";",";}"],f.b.lessThan("tablet")(P()),f.b.lessThan("desktop")(D()),f.b.lessThan("tablet")(S()),f.b.lessThan("mobile")(I())),X=Object(d.c)(["img{display:inline-block;position:relative;max-width:100%;height:auto;z-index:0;margin:15px auto 50px;border-radius:5px;",";}div.i-r{border-radius:50% !important;overflow:hidden;margin-bottom:"," !important;max-width:320px !important;padding:0px !important;pointer-events:none;user-select:none;img{margin:0px !important;}}div.i-f{z-index:10 !important;margin-bottom:"," !important;}div.i-s{display:inline-block;position:relative;max-width:100%;height:auto;z-index:0;margin:15px auto 50px;border-radius:5px;width:",";max-width:900px;text-align:center;",";",";",";}div.i-m{position:relative;margin:15px auto 50px;width:100%;max-width:",";z-index:10;",";",";",";}div.i-l{position:relative;width:",";margin:25px auto 60px;pointer-events:none;z-index:10;img{border-radius:0;}",";",";}span.caption{display:block;margin-top:",';font-family:"Merriweather",Georgia,Serif;color:',";font-size:",";font-style:italic;text-align:center;}"],f.b.lessThan("desktop")(C()),(function(e){return e.theme.spacing.md}),(function(e){return e.theme.spacing.xl}),U,f.b.greaterThan("tablet")(k()),f.b.lessThan("tablet")(E()),f.b.lessThan("mobile")(j()),R,f.b.greaterThan("desktop")(_()),f.b.greaterThan("tablet")(O()),f.b.lessThan("tablet")(x()),B,f.b.lessThan("desktop")(v()),f.b.lessThan("tablet")(w()),(function(e){return e.theme.spacing.sm}),(function(e){return e.theme.palette.text.secondary}),(function(e){return e.theme.size.xs})),A=d.d.div.withConfig({displayName:"style__MDXBody",componentId:"sc-1ik9kcc-3"})(["position:relative;display:flex;justify-content:center;flex-direction:column;overflow:hidden;"," ",""],Q,X),H=d.d.div.withConfig({displayName:"style__Hero",componentId:"sc-1ik9kcc-4"})(["min-height:720px;width:100vw;height:100vh;max-width:initial !important;margin:0 !important;border-radius:0 !important;z-index:10;img{margin:0 !important;border-radius:0 !important;}"]),W=d.d.span.withConfig({displayName:"style__Subtitle",componentId:"sc-1ik9kcc-5"})(['font-family:"Merriweather",Georgia,Serif;color:',";font-weight:lighter;font-style:italic;font-size:",";max-width:80%;text-align:center;margin:auto;"],(function(e){return e.theme.palette.white}),(function(e){return e.theme.size.lg})),L=d.d.h2.withConfig({displayName:"style__TimeHolder",componentId:"sc-1ik9kcc-6"})(["display:flex;font-weight:500;position:absolute;font-size:",";line-height:",";justify-content:center;color:",";font-weight:lighter;font-style:italic;font-size:",";bottom:",";animation:"," 3s ease-in;span{margin:auto "," !important;}time{margin:auto "," !important;flex:1;text-align:right;}span:last-of-type{flex:1;text-align:left;}"],(function(e){return e.theme.size.md}),(function(e){return e.theme.size.lg}),(function(e){return e.theme.palette.white}),(function(e){return e.theme.size.md}),(function(e){return e.theme.spacing.md}),T,(function(e){return e.theme.spacing.xs}),(function(e){return e.theme.spacing.xs})),F=d.d.div.withConfig({displayName:"style__MetaContainer",componentId:"sc-1ik9kcc-7"})(["display:flex;flex-direction:column;text-align:center;max-width:50%;padding:"," ",";border-radius:4px;animation:"," 2s ease-in;width:100%;z-index:10;& > ","{color:",";}",";",";"],(function(e){return e.theme.spacing.md}),(function(e){return e.theme.spacing.xl}),T,l.h,(function(e){return e.theme.palette.white}),f.b.lessThan("tablet")(g()),f.b.lessThan("mobile")(y())),Z=Object(d.d)(m.Link).withConfig({displayName:"style__HomeLink",componentId:"sc-1ik9kcc-8"})(["position:absolute;text-align:center;padding:"," 12px;top:",";left:",";font-weight:bold;text-transform:uppercase;font-size:",";border-radius:25px;background-color:rgba(0,0,0,0.8);color:",";animation:"," 1s ease;"],(function(e){return e.theme.spacing.xs}),(function(e){return e.theme.spacing.md}),(function(e){return e.theme.spacing.md}),(function(e){return e.theme.size.sm}),(function(e){return e.theme.palette.white}),T),G=Object(d.d)(b.a).withConfig({displayName:"style__ScrollPromptIcon",componentId:"sc-1ik9kcc-9"})(["position:absolute;font-size:",";color:rgba(255,255,255,0.7);bottom:12px;right:",";transition:color 0.2s linear;animation:"," 6s ease-in;&:hover{cursor:pointer;color:",";}"],(function(e){return e.theme.size.xl}),(function(e){return e.theme.spacing.md}),T,(function(e){return e.theme.palette.link.primary})),V=d.d.div.withConfig({displayName:"style__MDXContainer",componentId:"sc-1ik9kcc-10"})(["display:grid;grid-template-columns:minmax(0,1fr);"]),Y=n("+p7/"),J=n("9eSz"),K=n.n(J),$=d.d.div.withConfig({displayName:"ScrollProgress__Holder",componentId:"jlgm7m-0"})(["position:fixed;opacity:0.8;width:100%;height:2px;z-index:50;"]),ee=d.d.div.withConfig({displayName:"ScrollProgress__Progress",componentId:"jlgm7m-1"})(["transition:all 0.2s ease-out;background-color:",";width:","%;height:100%;"],(function(e){return e.theme.palette.text.secondary}),(function(e){return e.progress})),te=function(){var e,t,n,i=Object(r.useState)(0),a=i[0],c=i[1],u=(e=c,t=5,n=null,function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];null!==n&&(clearTimeout(n),n=null),n=setTimeout((function(){return e.apply(void 0,o)}),t)}),s=Object(r.useCallback)((function(){requestAnimationFrame((function(){var e=window.pageYOffset,t=window.innerHeight,n=document.body.scrollHeight-t;u(e/n*100)}))}),[c]);return Object(r.useEffect)((function(){return document.addEventListener("scroll",s),function(){return document.removeEventListener("scroll",s)}}),[s]),o.a.createElement($,null,o.a.createElement(ee,{progress:a}))},ne=n("9kay"),re=n("ruvs");t.default=function(e){var t=e.data,n=Object(ne.d)("Sidebar").t,p=t.mdx,d=p.frontmatter,f=p.body,m=p.timeToRead,h=p.excerpt,b=p.id,y=p.fields,g=d,w=g.customHeading,v=g.title,x=g.featuredImage,O=g.date,_=g.description,j=y.slug,E={shortname:"richflavell",config:{identifier:b,title:v,url:i.globalHistory.location.href}};return Object(r.useLayoutEffect)((function(){document.querySelectorAll(".gatsby-resp-image-wrapper").forEach((function(e){var t=e.querySelector("img"),n=e.querySelector("span");t.addEventListener("load",(function(){return n.style.opacity="0"}))}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(Y.a,{title:v,article:!0,description:_||h,image:Object(s.a)(x).publicURL,pathname:j+"/"}),o.a.createElement(re.a,{actionsOnly:!w,alignCenter:!0}),o.a.createElement(te,null),o.a.createElement("main",null,o.a.createElement(M,null,o.a.createElement(A,null,x&&!w&&o.a.createElement(H,{className:"i-m i-f"},o.a.createElement(z,null,o.a.createElement(Z,{to:"/"},n("home")),o.a.createElement(F,null,o.a.createElement(l.h,null,v),o.a.createElement(W,null,_||h)),o.a.createElement(L,null,o.a.createElement("time",{dateTime:O||void 0},Object(u.format)(O))," ",o.a.createElement("span",null,"•"," "),o.a.createElement("span",null,m," min read")),o.a.createElement(G,{onClick:function(){return Object(i.navigate)(j+"#POST")},icon:"arrow_drop_down_circle"})),o.a.createElement(K.a,{fluid:x.childImageSharp.fluid})),o.a.createElement(V,{id:"POST"},o.a.createElement(c.MDXRenderer,null,f))),!w&&o.a.createElement(N,null,o.a.createElement(a.DiscussionEmbed,E)))))}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");function i(t,n,a){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i}}]);
//# sourceMappingURL=component---src-views-post-index-tsx-d740e01604bc1a595381.js.map