(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{174:function(e,t,a){"use strict";var i=a(7),r=a(0),s=a.n(r),o=a(168),n=a(175),l=a.n(n),c=a(8),d=a.n(c),u=a(38),f=a.n(u),p=a(12),h=a.n(p),g=a(283),m=a(284),b=a(285),y=a(286),v=a(287),S=a(288),w=Object(o.a)("div",{target:"e1sv22g80"})({name:"uirvwh",styles:"margin-bottom:3rem;"}),j=function(e){var t=e.to,a=e.children;return Object(i.c)(g.a,null,Object(i.c)(h.a,{className:"nav-link",to:t},a))},O=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(f()(f()(a))),a.state={isOpen:!1},a}d()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return Object(i.c)(w,null,Object(i.c)(m.a,{color:"light",light:!0,expand:"md"},Object(i.c)(b.a,{href:"/"},"Fairuzi10"),Object(i.c)(y.a,{onClick:this.toggle}),Object(i.c)(v.a,{isOpen:this.state.isOpen,navbar:!0,"aria-label":"Toggle navbar"},Object(i.c)(S.a,{className:"ml-auto",navbar:!0},Object(i.c)(j,{to:"/blog/"},"Blog"),Object(i.c)(j,{to:"/project/"},"Project"),Object(i.c)(j,{to:"/meme/"},"Meme")))))},t}(s.a.Component),E=Object(o.a)("footer",{target:"e13cr25x0"})({name:"198q2ua",styles:"margin-top:1rem;border-top:1px solid #e5e5e5;padding:2rem 0;text-align:center;color:#777;background-color:#f8f9fa;font-size:0.8rem;"}),L=function(){return Object(i.c)(E,null,"Muhammad Fairuzi Teguh © 2018")},x=Object(o.a)("div",{target:"ef2xkqd0"})({name:"114u1sp",styles:"min-height:100%;display:flex;flex-direction:column;"}),k=(Object(o.a)("div",{target:"ef2xkqd1"})({name:"1sftn1d",styles:"min-height:100%;display:flex;flex-direction:column;flex:1;"}),Object(o.a)("div",{target:"ef2xkqd2"})({name:"1rr4qq7",styles:"flex:1;"})),I=Object(o.a)("div",{target:"e5wc0qt0"})({name:"1647184",styles:"min-height:100vh;height:1px;"}),R={name:"h82laz",styles:"@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');@import url('https://fonts.googleapis.com/css?family=Arvo');*{font-family:'Arvo';}.black-link{color:black!important;}.black-link:hover{color:black!important;}.grey-link{color:#777!important;}.grey-link:hover{color:#777!important;}.img-caption{margin-top:-1em;text-align:center;color:rgba(0,0,0,.5);margin-bottom:1em;}.gatsby-resp-image-link{margin-bottom:1em;}blockquote{background:#f8f9fa;border-left:0.3em solid #e5e5e5;padding:1em;}hr.section-divider{margin:3em 0;border:0;text-align:center;}hr.section-divider:before{content:'...';font-size:2em;top:-1em;position:relative;letter-spacing:1em;margin-left:1em;color:rgb(33,37,41);}.blog-post p{text-align:justify;}"},z=function(e){var t=e.children;return Object(i.c)(I,null,Object(i.c)(l.a,{title:"Fairuzi10",meta:[{name:"google-site-verification",content:"uu3IRN8Av5aq9r0lEKhIJjoLFIi1T8TFKymt0f-68bk"}]}),Object(i.c)(i.a,{styles:R}),Object(i.c)(x,null,Object(i.c)(O,null),t,Object(i.c)(L,null)))},q=a(289),N=a(290),T=a(291);t.a=function(e){var t=e.children,a=e.single,r=e.mid;r&&(a=!0);var s=a?{md:"10",lg:"9",xl:"8"}:{};return Object(i.c)(z,null,Object(i.c)(k,{className:r?"d-flex align-items-center text-center":""},Object(i.c)(q.a,null,Object(i.c)(N.a,{className:"justify-content-center"},Object(i.c)(T.a,s,t)))))}},187:function(e,t,a){"use strict";var i=a(9);t.__esModule=!0,t.default=void 0;var r,s=i(a(8)),o=i(a(38)),n=i(a(83)),l=i(a(48)),c=i(a(0)),d=i(a(1)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var g=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),h.push([e,t])},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",s=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+n+l+t+o+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,s=(0,n.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},s,{onLoad:i,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,n=p(t);!n&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:s,hasNoScript:l,seenBefore:n},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,o=e.imgStyle,n=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.Tag,S="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},n,f),j=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},n),O={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(h){var E=h;return c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(E.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&c.default.createElement(b,(0,l.default)({src:E.base64},O)),E.tracedSVG&&c.default.createElement(b,(0,l.default)({src:E.tracedSVG},O)),S&&c.default.createElement(v,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,E.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),c.default.createElement("source",{srcSet:E.srcSet,sizes:E.sizes}),c.default.createElement(b,{alt:a,title:t,src:E.src,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},E))}}))}if(g){var L=g,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},s);return"inherit"===s.display&&delete x.display,c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(L.srcSet)},L.base64&&c.default.createElement(b,(0,l.default)({src:L.base64},O)),L.tracedSVG&&c.default.createElement(b,(0,l.default)({src:L.tracedSVG},O)),S&&c.default.createElement(v,{title:t,style:{backgroundColor:S,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),c.default.createElement(b,{alt:a,title:t,width:L.width,height:L.height,src:L.src,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:L.width,height:L.height},L))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var w=y;t.default=w}}]);
//# sourceMappingURL=2-1f7dbbda4952a130d6bb.js.map