(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),o=a(170),c=a(161),m=a(162),s=a.n(m),u=function(e){var t=e.node,a=t.frontmatter.tags.map(function(e){return r.a.createElement(i.a,{to:"/blog/tag/"+e+"/",key:e,className:"mx-1"},"#",e," ")});return r.a.createElement("div",{key:t.id},r.a.createElement("div",null,t.frontmatter.date),r.a.createElement("h2",null,r.a.createElement(i.a,{to:"/blog"+t.fields.slug,className:"black-link"},t.frontmatter.title)),r.a.createElement("div",null,t.frontmatter.description),a,r.a.createElement("hr",{className:"my-4"}))};t.default=function(e){var t=e.pageContext,a=t.group,n=t.index,l=t.pageCount,i=a.map(function(e){var t=e.node;return r.a.createElement(u,{node:t,key:t.id})});return r.a.createElement(c.a,{single:!0},r.a.createElement(s.a,{title:"Blog",meta:[{name:"description",content:"Kumpulan cerita milik Muhammad Fairuzi Teguh tentang olimpiade  komputer, Universitas Indonesia, dan lain sebagainya."}]}),i,r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement(o.a,{index:n,pageCount:l})))}},161:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(159),i=a(162),o=a.n(i),c=a(6),m=a.n(c),s=a(34),u=a.n(s),g=a(10),d=a.n(g),p=a(160),f=Object(l.a)("div",{target:"e1sv22g80"})({name:"uirvwh",styles:"margin-bottom:3rem;"}),b=function(e){var t=e.to,a=e.children;return r.a.createElement(p.l,null,r.a.createElement(d.a,{className:"nav-link",to:t},a))},E=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(u()(u()(a))),a.state={isOpen:!1},a}m()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return r.a.createElement(f,null,r.a.createElement(p.m,{color:"light",light:!0,expand:"md"},r.a.createElement(p.n,{href:"/"},"Fairuzi10"),r.a.createElement(p.o,{onClick:this.toggle}),r.a.createElement(p.d,{isOpen:this.state.isOpen,navbar:!0,"aria-label":"Toggle navbar"},r.a.createElement(p.k,{className:"ml-auto",navbar:!0},r.a.createElement(b,{to:"/blog/"},"Blog"),r.a.createElement(b,{to:"/project/"},"Project")))))},t}(r.a.Component),h=Object(l.a)("footer",{target:"e13cr25x0"})({name:"198q2ua",styles:"margin-top:1rem;border-top:1px solid #e5e5e5;padding:2rem 0;text-align:center;color:#777;background-color:#f8f9fa;font-size:0.8rem;"}),v=function(){return r.a.createElement(h,null,"Muhammad Fairuzi Teguh © 2018")},k=a(164),y=Object(l.a)("div",{target:"ef2xkqd0"})({name:"114u1sp",styles:"min-height:100%;display:flex;flex-direction:column;"}),x=(Object(l.a)("div",{target:"ef2xkqd1"})({name:"1sftn1d",styles:"min-height:100%;display:flex;flex-direction:column;flex:1;"}),Object(l.a)("div",{target:"ef2xkqd2"})({name:"1rr4qq7",styles:"flex:1;"})),j=Object(l.a)("div",{target:"e5wc0qt0"})({name:"1647184",styles:"min-height:100vh;height:1px;"}),q={name:"57rhpo",styles:"@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');@import url('https://fonts.googleapis.com/css?family=Arvo');*{font-family:'Arvo';}.black-link{color:black!important;}.black-link:hover{color:black!important;}.grey-link{color:#777!important;}.grey-link:hover{color:#777!important;}.gatsby-resp-image-link + em{display:block;text-align:center;color:rgba(0,0,0,.5);font-style:normal;margin-top:-1em;margin-bottom:1em;}.gatsby-resp-image-link{margin-bottom:1em;}blockquote{background:#f8f9fa;border-left:0.3em solid #e5e5e5;padding:1em;}hr.section-divider{margin:3em 0;border:0;text-align:center;}hr.section-divider:before{content:'...';font-size:2em;top:-1em;position:relative;letter-spacing:1em;margin-left:1em;color:rgb(33,37,41);}.blog-post p{text-align:justify;}"},N=function(e){var t=e.children;return r.a.createElement(j,null,r.a.createElement(o.a,{title:"Fairuzi10",meta:[{name:"google-site-verification",content:"uu3IRN8Av5aq9r0lEKhIJjoLFIi1T8TFKymt0f-68bk"}]}),r.a.createElement(k.a,{styles:q}),r.a.createElement(y,null,r.a.createElement(E,null),t,r.a.createElement(v,null)))};t.a=function(e){var t=e.children,a=e.single,n=e.mid;n&&(a=!0);var l=a?{md:"10",lg:"9",xl:"8"}:{};return r.a.createElement(N,null,r.a.createElement(x,{className:n?"d-flex align-items-center text-center":""},r.a.createElement(p.e,null,r.a.createElement(p.r,{className:"justify-content-center"},r.a.createElement(p.c,l,t)))))}},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(10),i=a.n(l),o=a(160);t.a=function(e){for(var t=e.index,a=e.pageCount,n=[],l=Math.max(1,t-2);l<=Math.min(t+2,a);l++)n.push(l);return r.a.createElement(o.p,null,r.a.createElement(o.q,{disabled:1===t},r.a.createElement(i.a,{to:"/blog"+(t-1>1?"/"+(t-1):""),className:"page-link"},"«")),n.map(function(e){return r.a.createElement(o.q,{key:e,disabled:e===t},r.a.createElement(i.a,{to:"/blog"+(e>1?"/"+e:""),className:"page-link"},e))}),r.a.createElement(o.q,{disabled:t===a},r.a.createElement(i.a,{to:"/blog/"+(t+1),className:"page-link"},"»")))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-0ab2d985ad453e5cf2fd.js.map