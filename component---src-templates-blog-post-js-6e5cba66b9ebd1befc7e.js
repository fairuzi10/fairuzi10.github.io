(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+pfR":function(e,t,n){},"7evw":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var o=n("UZsz"),r=n("Bp/N"),i=n("HhXV");t.CommentCount=o.CommentCount,t.CommentEmbed=r.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},"Bp/N":function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("h7Nl"),n("Btvt"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=a(n("q1tI")),i=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=t.CommentEmbed=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(r.default.Component);c.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},c.propTypes={commentId:i.default.string.isRequired,showMedia:i.default.bool,showParentComment:i.default.bool,width:i.default.number,height:i.default.number}},HhXV:function(e,t,n){"use strict";n("8+KV"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=s(n("q1tI")),a=s(n("17x9")),u=n("ZMnY");function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"];(t.DiscussionEmbed=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,u.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,u.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,u.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,d.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return i.default.createElement("div",o({},this.props,{id:"disqus_thread"}))}}]),t}(i.default.Component)).propTypes={shortname:a.default.string.isRequired,config:a.default.shape({identifier:a.default.string,url:a.default.string,title:a.default.string,preData:a.default.func,preInit:a.default.func,onInit:a.default.func,onReady:a.default.func,afterRender:a.default.func,preReset:a.default.func,onIdentify:a.default.func,beforeComment:a.default.func,onNewComment:a.default.func,onPaginate:a.default.func}).isRequired}},JMMV:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("wTIg"),r=n("BYIe"),i=Object(o.a)("div",{target:"enk9rlm0"})({backgroundColor:r.a.white,padding:"1.5rem",borderRadius:"0.5rem",boxShadow:"0px 10px 40px -10px rgba(0,64,128,0.2)"});t.b=i},UZsz:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=u(n("q1tI")),i=u(n("17x9")),a=n("ZMnY");function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);(t.CommentCount=function(e){function t(){return s(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,a.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,a.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(r.default.Component)).propTypes={shortname:i.default.string.isRequired,config:i.default.shape({identifier:i.default.string,url:i.default.string,title:i.default.string}).isRequired}},ZMnY:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("dZ+Y"),n("LK8F"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var o=window.document.createElement("script");return o.async=!0,o.src=e,o.id=t,n.appendChild(o),o},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var o=void 0;return function(){var r=this,i=arguments,a=function(){o=null,n||e.apply(r,i)},u=n&&!o;window.clearTimeout(o),o=setTimeout(a,t),u&&e.apply(r,i)}},t.isReactElement=a,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),o=!0,r=!1,i=void 0;try{for(var u,s=n[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){var c=u.value;if(e[c]!==t[c]&&!a(e[c]))return!0}}catch(l){r=!0,i=l}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return!1};var o,r=n("q1tI"),i=(o=r)&&o.__esModule?o:{default:o};function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},cA2t:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var o=function(e){return""+e},r=function(e){return"/blog/"+(1===e?"":e+"/")},i=function(e){return"/blog/tag/"+e+"/"}},je9R:function(e,t,n){"use strict";n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var o=n("wTIg"),r=(n("q1tI"),n("BYIe")),i=n("Wbzz"),a=n("qKvR");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s=Object(o.a)(i.Link,{target:"e1qploph0"})({color:r.a.dark,":hover":{color:r.a.dark,textDecoration:"underline"}}),c=Object(o.a)("a",{target:"e1qploph1"})({color:r.a.dark,":hover":{color:r.a.dark,textDecoration:"underline"}});t.a=function(e){var t=e.to,n=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["to"]);switch(t[0]){case"/":return Object(a.d)(s,u({to:t},n));default:return Object(a.d)(c,u({href:t},n))}}},jyrK:function(e,t,n){"use strict";var o=n("wTIg"),r=Object(o.a)("hr",{target:"e2koeu40"})({name:"12vuxj9",styles:"margin:1rem 0;"});t.a=r},vg9a:function(e,t,n){},xfY5:function(e,t,n){"use strict";var o=n("dyZX"),r=n("aagx"),i=n("LZWt"),a=n("Xbzi"),u=n("apmT"),s=n("eeVq"),c=n("kJMx").f,l=n("EemH").f,d=n("hswa").f,f=n("qncB").trim,p=o.Number,m=p,h=p.prototype,b="Number"==i(n("Kuth")(h)),g="trim"in String.prototype,y=function(e){var t=u(e,!1);if("string"==typeof t&&t.length>2){var n,o,r,i=(t=g?t.trim():f(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+t}for(var a,s=t.slice(2),c=0,l=s.length;c<l;c++)if((a=s.charCodeAt(c))<48||a>r)return NaN;return parseInt(s,o)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(b?s((function(){h.valueOf.call(n)})):"Number"!=i(n))?a(new m(y(t)),n,p):y(t)};for(var w,v=n("nh4g")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;v.length>O;O++)r(m,w=v[O])&&!r(p,w)&&d(p,w,l(m,w));p.prototype=h,h.constructor=p,n("KroJ")(o,"Number",p)}},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return h}));var o=n("qKvR"),r=n("JMMV"),i=n("je9R"),a=n("jyrK"),u=n("Xj0o"),s=n("7evw"),c=n("+ZDr"),l=n.n(c),d=(n("vg9a"),n("+pfR"),n("q1tI"),n("TJpk")),f=n.n(d),p={name:"5qcaj6",styles:"p{text-align:justify;}blockquote{background:#f8f9fa;border-left:0.3rem solid #e5e5e5;margin-left:-1rem;padding:0.8rem;}.img-potrait{width:50%;margin-left:25%;margin-bottom:1rem;}figcaption.img-caption{text-align:center;color:rgba(0,0,0,0.5);margin-bottom:1em;font-size:0.9rem;margin-top:-1em;}iframe{max-width:100%;display:block;margin:auto;}figcaption.iframe-caption{text-align:center;color:rgba(0,0,0,0.5);margin-bottom:1em;font-size:0.9rem;}h1{font-size:2rem;font-weight:bold;}h2{font-size:1.8rem;font-weight:bold;}h3{font-size:1.6rem;font-weight:bold;}h4{font-size:1.4rem;font-weight:bold;}h5{font-size:1.2rem;}h6{font-size:1rem;}"},m=n("cA2t"),h=(t.default=function(e){var t=e.data,n=t.post,c=n.frontmatter,d=c.title,h=c.description,b=c.date,g=c.tags,y=c.thumbnail,w=c.lang,v={url:"http://fairuzi10.github.io/blog"+n.fields.slug,identifier:"blog"+n.fields.slug,title:n.frontmatter.title},O=g.map((function(e){return Object(o.d)(l.a,{to:Object(m.b)(e),key:e,className:"mx-1"},"#",e," ")})),j=t.relatedPost.edges.map((function(e){var t=e.node,n=t.frontmatter,r=n.title,a=n.description;return Object(o.d)("div",{className:"col-md-6 pt-3",key:t.id},Object(o.d)("strong",null,Object(o.d)(i.a,{to:Object(m.c)(t.fields.slug)},r)),Object(o.d)("br",null),a)}));return Object(o.d)(u.a,{single:!0},Object(o.d)(o.a,{styles:p}),Object(o.d)(f.a,{htmlAttributes:{lang:w||"id"}},Object(o.d)("title",null,d),Object(o.d)("meta",{name:"og:title",content:d}),Object(o.d)("meta",{name:"description",content:h}),Object(o.d)("meta",{name:"og:description",content:h}),y&&Object(o.d)("meta",{name:"og:image",content:y.publicURL})),Object(o.d)(r.b,{className:"mb-4"},b,Object(o.d)(a.a,null),Object(o.d)("h1",null,d),Object(o.d)("div",{dangerouslySetInnerHTML:{__html:n.html},className:"blog-post"}),Object(o.d)(a.a,null),O,Object(o.d)(a.a,null),Object(o.d)("div",null,Object(o.d)("strong",null,Object(o.d)("span",{className:"black-link"},"Related Post:")),Object(o.d)("br",null),Object(o.d)("div",{className:"row"},j)),Object(o.d)(a.a,null)),Object(o.d)(r.b,null,Object(o.d)(s.DiscussionEmbed,{shortname:"fairuzi10-github-io",config:v})))},"892269360")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6e5cba66b9ebd1befc7e.js.map