(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return g});var a=n(6),i=(n(249),n(250),n(205)),r=n(212),o=n(221),c=n(202),l=n(211),d=n(215),s=n(14),b=n.n(s),u=(n(0),n(206)),m=n.n(u);t.default=function(e){var t=e.data,n=t.post,s=n.frontmatter,u=s.title,g=s.description,p=s.date,f=s.tags,O=s.thumbnail,j={url:"http://fairuzi10.github.io/blog"+n.fields.slug,identifier:"blog"+n.fields.slug,title:n.frontmatter.title},h=f.map(function(e){return Object(a.d)(b.a,{to:Object(l.b)(e),key:e,className:"mx-1"},"#",e," ")}),A=t.relatedPost.edges.map(function(e){var t=e.node,n=t.frontmatter,i=n.title,o=n.description;return Object(a.d)("div",{className:"col-md-6 pt-3",key:t.id},Object(a.d)("strong",null,Object(a.d)(r.a,{to:Object(l.c)(t.fields.slug)},i)),Object(a.d)("br",null),o)});return Object(a.d)(c.a,{single:!0},Object(a.d)(m.a,null,Object(a.d)("title",null,u),Object(a.d)("meta",{name:"og:title",content:u}),Object(a.d)("meta",{name:"description",content:g}),Object(a.d)("meta",{name:"og:description",content:g}),Object(a.d)("meta",{name:"og:image",content:O.publicURL})),Object(a.d)(i.b,null,p,Object(a.d)(o.a,null),Object(a.d)("h1",null,u),Object(a.d)("div",{dangerouslySetInnerHTML:{__html:n.html},className:"blog-post"}),Object(a.d)(o.a,null),h,Object(a.d)(o.a,null),Object(a.d)("div",null,Object(a.d)("strong",null,Object(a.d)("span",{className:"black-link"},"Related Post:")),Object(a.d)("br",null),Object(a.d)("div",{className:"row"},A)),Object(a.d)(o.a,null)),Object(a.d)(i.b,null,Object(a.d)(d.DiscussionEmbed,{shortname:"fairuzi10-github-io",config:j})))};var g="684499129"},200:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={primary:"#007bff",black:"#000000",dark:"#263646",blue:"#1B1464",blueFade:"#e6ecf0",white:"#ffffff",yellow:"#f1c40f",gray:"#34495e",orange:"#F79F1F"}},202:function(e,t,n){"use strict";var a=n(6),i=n(0),r=n.n(i),o=n(199),c=n(206),l=n.n(c),d=n(200),s=Object(o.a)("footer",{target:"e13cr25x0"})({marginTop:"1rem",borderTop:"1px solid #e5e5e5",padding:"3rem 0",textAlign:"center",color:d.a.dark,backgroundColor:d.a.white},""),b=function(){return Object(a.d)(s,null,"Muhammad Fairuzi Teguh © 2019")},u=n(66),m=n.n(u),g=n(11),p=n.n(g),f=n(14),O=n.n(f),j=n(331),h=n(332),A=n(333),v=n(334),k=n(335),x=n(336),y=Object(o.a)("div",{target:"e1sv22g80"})({name:"1aytqvp",styles:"margin-bottom:2rem;box-shadow:0px 10px 20px -10px rgba(0,64,128,0.2);"}),w=function(e){var t=e.to,n=e.children;return Object(a.d)(j.a,null,Object(a.d)(O.a,{className:"nav-link",to:t,activeClassName:"active",partiallyActive:!0},n))},C=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggle=n.toggle.bind(m()(n)),n.state={isOpen:!1},n}p()(t,e);var n=t.prototype;return n.toggle=function(){this.setState({isOpen:!this.state.isOpen})},n.render=function(){return Object(a.d)(y,null,Object(a.d)(h.a,{color:"white",light:!0,expand:"md",className:"py-3"},Object(a.d)(A.a,{href:"/"},Object(a.d)("b",null,"Fairuzi10")),Object(a.d)(v.a,{onClick:this.toggle}),Object(a.d)(k.a,{isOpen:this.state.isOpen,navbar:!0,"aria-label":"Toggle navbar"},Object(a.d)(x.a,{className:"ml-auto",navbar:!0},Object(a.d)(w,{to:"/blog/"},"Blog"),Object(a.d)(w,{to:"/project/"},"Project"),Object(a.d)(w,{to:"/meme/"},"Meme")))))},t}(r.a.Component),F=Object(o.a)("div",{target:"ef2xkqd0"})({name:"114u1sp",styles:"min-height:100%;display:flex;flex-direction:column;"}),E=(Object(o.a)("div",{target:"ef2xkqd1"})({name:"1sftn1d",styles:"min-height:100%;display:flex;flex-direction:column;flex:1;"}),Object(o.a)("div",{target:"ef2xkqd2"})({name:"1rr4qq7",styles:"flex:1;"})),z=Object(a.c)("@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css');body{background-color:",d.a.blueFade,";color:",d.a.dark,";}h1{font-weight:bold;}h2{font-weight:bold;}h3{font-weight:bold;}h4{font-weight:bold;}.black-link{color:",d.a.dark," !important;}.black-link:hover{color:",d.a.dark," !important;}.grey-link{color:#777 !important;}.grey-link:hover{color:#777 !important;}.img-caption{margin-top:-1em;text-align:center;color:rgba(0,0,0,0.5);margin-bottom:1em;}.gatsby-resp-image-link{margin-bottom:1em;}blockquote{background:#f8f9fa;border-left:0.3em solid #e5e5e5;padding:1em;}hr.section-divider{margin:3em 0;border:0;text-align:center;}hr.section-divider:before{content:'...';font-size:2em;top:-1em;position:relative;letter-spacing:1em;margin-left:1em;color:rgb(33,37,41);}.blog-post p{text-align:justify;}.dark-text{color:",d.a.dark,";}.text-decoration-none{text-decoration:none;}"),I=Object(o.a)("div",{target:"e5wc0qt0"})({name:"1647184",styles:"min-height:100vh;height:1px;"}),M=function(e){var t=e.children;return Object(a.d)(I,null,Object(a.d)(l.a,{htmlAttributes:{lang:"id"}},Object(a.d)("title",null,"Fairuzi10"),Object(a.d)("meta",{name:"og:title",content:"Fairuzi10"}),Object(a.d)("meta",{name:"description",content:"Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita mengenai hidup seperti perkuliahan di Universitas Indonesia (UI) serta Olimpiade Sains Nasional (OSN) Komputer/Informatika."}),Object(a.d)("meta",{name:"description",content:"Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita mengenai hidup seperti perkuliahan di Universitas Indonesia (UI) serta Olimpiade Sains Nasional (OSN) Komputer/Informatika."}),Object(a.d)("meta",{name:"og:description",content:"Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita mengenai hidup seperti perkuliahan di Universitas Indonesia (UI) serta Olimpiade Sains Nasional (OSN) Komputer/Informatika."}),Object(a.d)("meta",{name:"og:image",content:n(208)}),Object(a.d)("meta",{name:"google-site-verification",content:"uu3IRN8Av5aq9r0lEKhIJjoLFIi1T8TFKymt0f-68bk"})),Object(a.d)(a.a,{styles:z}),Object(a.d)(F,null,Object(a.d)(C,null),t,Object(a.d)(b,null)))};t.a=function(e){var t=e.children,n=e.single,i=e.mid;i&&(n=!0);var r=n?"col-md-10 col-lg-9 col-xl-8":"";return Object(a.d)(M,null,Object(a.d)(E,{className:i?"d-flex align-items-center text-center":""},Object(a.d)("div",{className:"container"},Object(a.d)("div",{className:"row no-gutters justify-content-center"},Object(a.d)("div",{className:"col "+r},t)))))}},205:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(199),i=n(200),r=Object(a.a)("div",{target:"enk9rlm0"})({backgroundColor:i.a.white,padding:"1.5rem",borderRadius:"0.5rem",boxShadow:"0px 10px 40px -10px rgba(0,64,128,0.2)"},"");t.b=r},208:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAACMCAYAAABPh5YqAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gEMAx8CwfxXygAAA6NJREFUeNrt3c9rHGUcx/HPd2az3fqjavHkTT31oiAFFQNCwYOkBy+9edGDQvSqh9BQTDzoX+FFyMGLrVUoqBeXgIJ4KPViRb1pUVHT7jaZnefjYW1pA7azmexmJnm/LoEkQzbz3pl95sk8GwkAAAAAAAAAAAAAAKCqqLPxwkrfktmLUykTT326PP/dJJtk7LXGmvgoIeY+QkxigpjYlzEZAk9Bp9boOYszsgrJFS5xwlKUdjou6RS7vnExs/dly6mscCwmDTaulIePPPKynE7t5OB0xMeSStnR2j0esRnSk7KP1b3O39WYnyw9uznxRMPqernTn5dl+ZvF8OpvebfX2pafLc+PFlb770hxutoZbUYxZ/6kVpQX3n1hdPCmAxjNMpoFMUFMEBPEJCaICWKCmCAmMbEL8gr7fuJJ+A77dfYidMmKs+MJ921/OYlIsh4IxV/EbLhHT7wS55fn1yStcZptuZ++/GBqt8wQkwEQiAligtHs1C2uufPr5W+7ZbHp7dcekuLeIw+nY48/Viy/1CmJ2XC//NB/Q4r31NE/t92lFSFZ2d/Xrlz75uIfpyV9SMzm60nujT/ewjfCxlxyuofXzHa42zVj0gyXYhCT0SyICWKCmMQEMUFMHOSY5vH8v1ZN59m+f2Glv7XbK44nPgLyjoeD3weSDhNzxzXLtxQqZe1pzJRKH+o9tCX7ODF3fmS+1pAHwmsmiAliEhPEBDFxgK8zpZ/HN0s14L3zIkpZD0o+SszJ954iYtHyhqS9j2kNJL8qxWJTZvVaFNOKfO7r80tP/9mUR7Sw8tXzTZqebddrpt3lZYoBEKNZEBPEBDFBTGKCmCBmG0SFr89s6pHFtvXcmMsrtkXzfweKFTEiZhtOa1l+wU5Xpdiy082YEZnHt4PGyFm2TswW6HXvuzgqht9bUllcv/n5fK4rl4WyTu7hXJaI2QIfvf1E0nipOwMgEBPEJCaICWKCmCAmMUFMEBPEJCaICWKCmCAmMUFMEBPEBDGJCWKCmCAmMUFMHOyYEVHU2HhEsjvsnjobn1xdf06hkVMZd++Q2XIp6aSsM5O/51xISici8sGtayErbZnl48Wv9vUszy+fW3pmYz/GrLWkz0592ani99Z8AllSfF7xx92+ZSolRRbSjy5Hr0v6gph7f6rO6pyDbMkNWk/JAAjEJCaICWJO1/hK6KikQ/v1V6w7mn1RzfuflncylH2JYxgAAAAAAAAAAABohX8BVogEyIwqhx0AAAAASUVORK5CYII="},211:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r}),n.d(t,"d",function(){return o});var a=function(e){return"/blog/"+e+"/"},i=function(e){return"/blog/"+(1===e?"":e+"/")},r=function(e){return"/blog/tag/"+e+"/"},o=function(e){return"/project/"+e+"/"}},212:function(e,t,n){"use strict";var a=n(68),i=n.n(a),r=n(132),o=n.n(r),c=n(199),l=n(6),d=(n(0),n(200)),s=n(94),b=Object(c.a)(s.Link,{target:"e1qploph0"})({color:d.a.dark,":hover":{color:d.a.dark,textDecoration:"underline"}},""),u=Object(c.a)("a",{target:"e1qploph1"})({color:d.a.dark,":hover":{color:d.a.dark,textDecoration:"underline"}},"");t.a=function(e){var t=e.to,n=o()(e,["to"]);switch(t[0]){case"/":return Object(l.d)(b,i()({to:t},n));default:return Object(l.d)(u,i()({href:t},n))}}},221:function(e,t,n){"use strict";var a=n(199),i=Object(a.a)("hr",{target:"e2koeu40"})({name:"12vuxj9",styles:"margin:1rem 0;"});t.a=i}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f8942da06733127d84f2.js.map