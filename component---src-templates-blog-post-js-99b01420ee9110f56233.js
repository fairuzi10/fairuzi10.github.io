webpackJsonp([0x620f737b6699],{308:function(e,t){},309:function(e,t){},377:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function f(e,t){var n=t.onNewComment,r=t.language,a=l(t,["onNewComment","language"]);for(var o in a)e.page[o]=a[o];e.language=r,n&&(e.callbacks={onNewComment:[n]})}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(1),p=r(d),m=n(6),h=r(m),g=["shortname","identifier","title","url","category_id","onNewComment","language"],y=!1,b=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return g.some(function(e){return e===n})?t:s({},t,a({},n,e.props[n]))},{});return p.default.createElement("div",t,p.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!y){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),y=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};g.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){f(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){f(this,t)},this.addDisqusScript())}}]),t}(p.default.Component);b.displayName="DisqusThread",b.propTypes={id:h.default.string,shortname:h.default.string.isRequired,identifier:h.default.string,title:h.default.string,url:h.default.string,category_id:h.default.string,onNewComment:h.default.func,language:h.default.string},b.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=b},378:function(e,t,n){"use strict";e.exports=n(377)},47:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),o=r(a),u=n(18),i=n(23);t.default=function(e){var t=e.children;return o.default.createElement(i.Stretch,{className:"d-flex justify-content-center"},o.default.createElement(u.Col,{md:"10",lg:"8"},o.default.createElement(u.Container,null,t)))},e.exports=t.default},218:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=n(1),o=r(a),u=n(47),i=r(u),l=n(378),f=r(l),s=n(43),c=r(s);n(18);n(308),n(309),t.default=function(e){var t=e.data,n=t.markdownRemark;return o.default.createElement(i.default,null,o.default.createElement(c.default,{title:n.frontmatter.title,meta:[{name:"description",content:n.frontmatter.description}]}),n.frontmatter.date,o.default.createElement("hr",null),o.default.createElement("h1",null,n.frontmatter.title),o.default.createElement("div",{className:"text-justify",dangerouslySetInnerHTML:{__html:n.html}}),o.default.createElement("hr",null),o.default.createElement(f.default,{identifier:n.fields.slug,url:"http://fairuzi10.github.io/blog{ post.fields.slug }",shortname:"fairuzi10-github-io"}))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-blog-post-js-99b01420ee9110f56233.js.map