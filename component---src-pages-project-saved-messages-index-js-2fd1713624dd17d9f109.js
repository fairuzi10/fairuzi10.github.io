(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{190:function(e,t,a){"use strict";a.r(t),a.d(t,"metaData",function(){return T});a(31),a(7);var n=a(66),i=a.n(n),r=a(11),s=a.n(r),o=a(199),c=a(6),d=a(0),l=a.n(d),m=a(206),u=a.n(m),h=a(292),b=a.n(h),p=a(311),g=a(315),j=a.n(g),f=a(319),O=a.n(f),I=a(337),v=a(338),w=a(339),x=a(340),A=a(341),k=a(342),y=a(345),M=a(343),C=a(344),Z=a(346),N=a(327),S=a.n(N),z=a(328),W=a.n(z),E=a(202),H=a(211),T={name:"Saved Messages",url:Object(H.d)("saved-messages"),description:"Simpan pesanmu untuk dilihat di komputer lain."},X=Object(o.a)("div",{target:"e971wrx0"})({name:"64wke4",styles:"background-color:#f8f9fa;padding:1rem;margin:1rem 0;box-shadow:0 8px 6px -6px #777;overflow-wrap:break-word;"}),F=Object(o.a)("span",{target:"e971wrx1"})("color:#777;cursor:pointer;margin:0 0.5rem;pointer-events:",function(e){return e.disabled?"none":"auto"},";"),Y=b.a.create({baseURL:"https://fairuzi10.pythonanywhere.com/saved-messages/"});function J(e){this.setState({password:e.target.value})}var B=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={valid:null,text:"",password:"",loading:!1},a.handleTextChange=a.handleTextChange.bind(i()(a)),a.handleSubmit=a.handleSubmit.bind(i()(a)),a.handlePasswordChange=J.bind(i()(a)),a}s()(t,e);var a=t.prototype;return a.handleTextChange=function(e){this.setState({valid:e.target.value.length>0,text:e.target.value})},a.handleSubmit=function(e){var t=this;this.setState({loading:!0});var a={text:this.state.text};""!==this.state.password&&(a.password=this.state.password),Y.post("create/",a).then(function(){t.props.searchMessage(a)}).then(function(){t.setState({loading:!1,valid:null,text:"",password:"",passwordMask:""})}).catch(this.props.alertError),e.preventDefault()},a.render=function(){return Object(c.d)("div",{className:"mt-2"},Object(c.d)("h3",{className:"text-center"},"Simpan Pesan"),Object(c.d)(I.a,{onSubmit:this.handleSubmit,autoComplete:"off"},Object(c.d)(v.a,null,Object(c.d)(w.a,null,"Pesan Anda"),Object(c.d)(x.a,{type:"textarea",name:"text",rows:"6",onChange:this.handleTextChange,onBlur:this.handleTextChange,valid:this.state.valid,value:this.state.text}),!this.state.valid&&Object(c.d)(A.a,null,"Pesan tidak boleh kosong!")),Object(c.d)(v.a,null,Object(c.d)(w.a,null,"Password"),Object(c.d)(x.a,{type:"password",name:"password",placeholder:"Opsional",onChange:this.handlePasswordChange,value:this.state.password})),Object(c.d)(k.a,{color:"primary",disabled:!this.state.valid||this.state.loading},"Kirim ",this.state.loading&&Object(c.d)("img",{src:W.a,alt:"loading..."}))))},t}(l.a.Component),R=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={password:"",loading:!1},a.handleSubmit=a.handleSubmit.bind(i()(a)),a.handlePasswordChange=J.bind(i()(a)),a}s()(t,e);var a=t.prototype;return a.handleSubmit=function(e){var t=this;this.setState({loading:!0});var a={};""!==this.state.password&&(a.password=this.state.password),this.props.searchMessage(a).then(function(){t.setState({loading:!1,password:"",passwordMask:""})}).catch(this.alertError),e.preventDefault()},a.render=function(){return Object(c.d)("div",{className:"mt-3"},Object(c.d)("h3",{className:"text-center"},"Cari Pesan"),Object(c.d)(I.a,{onSubmit:this.handleSubmit,autoComplete:"off"},Object(c.d)(v.a,null,Object(c.d)(w.a,null,"Password"),Object(c.d)(x.a,{type:"password",name:"password",value:this.state.password,onChange:this.handlePasswordChange})),Object(c.d)(k.a,{color:"primary",disabled:this.state.loading},"Cari ",this.state.loading&&Object(c.d)("img",{src:W.a,alt:"loading..."}))))},t}(l.a.Component),U=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:!1},a.deleteMessage=a.deleteMessage.bind(i()(a)),a.deleteError=a.deleteError.bind(i()(a)),a}s()(t,e);var a=t.prototype;return a.deleteError=function(e,t){404===e.response.status?(this.props.searchMessage(t),this.props.alertError("Pesan telah dihapus sebelumnya. Daftar pesan telah diperbarui.")):this.props.alertError()},a.deleteMessage=function(){var e=this;this.setState({loading:!0});var t={};""!==this.props.password&&(t.password=this.props.password);var a=this.props.pk;Y.delete("delete/"+a+"/",{data:t}).then(function(){e.props.searchMessage(t)}).then(function(){e.setState({loading:!1})}).catch(function(a){e.deleteError(a,t)})},a.render=function(){return Object(c.d)(F,{onClick:this.deleteMessage,disabled:this.state.loading},"hapus")},t}(l.a.Component),D=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={clicked:!1},a.toggle=a.toggle.bind(i()(a)),a.handleClick=a.handleClick.bind(i()(a)),a}s()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({clicked:!this.state.clicked})},a.handleClick=function(){this.toggle(),setTimeout(this.toggle,500)},a.render=function(){return Object(c.d)("span",null,Object(c.d)(p.CopyToClipboard,{text:this.props.message.text,id:"salin-"+this.props.message.pk},Object(c.d)(F,{onClick:this.handleClick},"salin")),Object(c.d)(y.a,{placement:"bottom",isOpen:this.state.clicked,target:"salin-"+this.props.message.pk},"copied!"))},t}(l.a.Component),P=function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){var e=this,t=this.props.messages,a=t?t.map(function(t){return Object(c.d)(X,{key:t.pk},Object(c.d)("div",{className:"text-right"},Object(c.d)(U,{pk:t.pk,searchMessage:e.props.searchMessage,password:e.props.password,alertError:e.props.alertError}),Object(c.d)(D,{message:t})),Object(c.d)(O.a,null,Object(c.d)(j.a,{clamp:8},t.text)))}):Object(c.d)("div",{className:"text-center"},Object(c.d)("img",{src:S.a,alt:"loading..."}));return Object(c.d)("div",{className:"mt-3"},Object(c.d)("h3",{className:"text-center"},"Pesan Tersimpan"),a)},t}(l.a.Component),G=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={password:"",messages:null,error:""},a.searchMessage=a.searchMessage.bind(i()(a)),a.alertError=a.alertError.bind(i()(a)),a.ignoreError=a.ignoreError.bind(i()(a)),a}s()(t,e);var a=t.prototype;return a.searchMessage=function(e){return new Promise(function(t){var a=this;Y.post("",e).then(function(t){a.setState({messages:t.data,password:e.password})}).then(t).catch(function(){Y.post("",e).then(function(t){a.setState({messages:t.data,password:e.password})}).then(t).catch(function(e){a.alertError(e)})})}.bind(this))},a.alertError=function(e,t){var a=t||"Maaf, terjadi kesalahan. Silakan beri tahu admin agar segera diperbaiki.";this.setState({error:a})},a.ignoreError=function(){this.setState({error:""})},a.componentDidMount=function(){this.searchMessage({})},a.render=function(){return Object(c.d)(E.a,null,Object(c.d)(u.a,null,Object(c.d)("title",null,"Saved Messages"),Object(c.d)("meta",{name:"og:title",content:"Saved Messages"}),Object(c.d)("meta",{name:"description",content:"Kirim pesan untuk dibaca di komputer lain"}),Object(c.d)("meta",{name:"og:description",content:"Kirim pesan untuk dibaca di komputer lain"})),Object(c.d)("div",{className:"text-center"},Object(c.d)("h1",{className:"display-4"},"Saved Messages"),Object(c.d)("div",{className:"text-muted"},"Kirim pesanmu untuk dibaca di komputer lain nanti. ",Object(c.d)("br",null),"Contoh: https://www.ideone.com/xjX4Tx, https://docs.google.com/xXxXx...",Object(c.d)("br",null)),Object(c.d)("br",null)),Object(c.d)("div",null),Object(c.d)(M.a,null,""!==this.state.error&&Object(c.d)(C.a,{sm:"12"},Object(c.d)(Z.a,{color:"danger",isOpen:""!==this.state.error,toggle:this.ignoreError},this.state.error)),Object(c.d)(C.a,{xs:"12",lg:"5"},Object(c.d)(B,{searchMessage:this.searchMessage,alertError:this.alertError})),Object(c.d)(C.a,{xs:"12",lg:"7"},Object(c.d)(R,{searchMessage:this.searchMessage,alertError:this.alertError}),Object(c.d)(P,{messages:this.state.messages,searchMessage:this.searchMessage,password:this.state.password,alertError:this.alertError}))))},t}(l.a.Component);t.default=G},200:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={primary:"#007bff",black:"#000000",dark:"#263646",blue:"#1B1464",blueFade:"#e6ecf0",white:"#ffffff",yellow:"#f1c40f",gray:"#34495e",orange:"#F79F1F"}},202:function(e,t,a){"use strict";var n=a(6),i=a(0),r=a.n(i),s=a(199),o=a(206),c=a.n(o),d=a(200),l=Object(s.a)("footer",{target:"e13cr25x0"})({marginTop:"1rem",borderTop:"1px solid #e5e5e5",padding:"3rem 0",textAlign:"center",color:d.a.dark,backgroundColor:d.a.white},""),m=function(){return Object(n.d)(l,null,"Muhammad Fairuzi Teguh © 2019")},u=a(66),h=a.n(u),b=a(11),p=a.n(b),g=a(14),j=a.n(g),f=a(331),O=a(332),I=a(333),v=a(334),w=a(335),x=a(336),A=Object(s.a)("div",{target:"e1sv22g80"})({name:"1aytqvp",styles:"margin-bottom:2rem;box-shadow:0px 10px 20px -10px rgba(0,64,128,0.2);"}),k=function(e){var t=e.to,a=e.children;return Object(n.d)(f.a,null,Object(n.d)(j.a,{className:"nav-link",to:t,activeClassName:"active",partiallyActive:!0},a))},y=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(h()(a)),a.state={isOpen:!1},a}p()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return Object(n.d)(A,null,Object(n.d)(O.a,{color:"white",light:!0,expand:"md",className:"py-3"},Object(n.d)(I.a,{href:"/"},Object(n.d)("b",null,"Fairuzi10")),Object(n.d)(v.a,{onClick:this.toggle}),Object(n.d)(w.a,{isOpen:this.state.isOpen,navbar:!0,"aria-label":"Toggle navbar"},Object(n.d)(x.a,{className:"ml-auto",navbar:!0},Object(n.d)(k,{to:"/blog/"},"Blog"),Object(n.d)(k,{to:"/project/"},"Project"),Object(n.d)(k,{to:"/meme/"},"Meme")))))},t}(r.a.Component),M=Object(s.a)("div",{target:"ef2xkqd0"})({name:"114u1sp",styles:"min-height:100%;display:flex;flex-direction:column;"}),C=(Object(s.a)("div",{target:"ef2xkqd1"})({name:"1sftn1d",styles:"min-height:100%;display:flex;flex-direction:column;flex:1;"}),Object(s.a)("div",{target:"ef2xkqd2"})({name:"1rr4qq7",styles:"flex:1;"})),Z=Object(n.c)("@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.2.0/css/bootstrap.min.css');body{background-color:",d.a.blueFade,";color:",d.a.dark,";}h1{font-weight:bold;}h2{font-weight:bold;}h3{font-weight:bold;}h4{font-weight:bold;}.black-link{color:",d.a.dark," !important;}.black-link:hover{color:",d.a.dark," !important;}.grey-link{color:#777 !important;}.grey-link:hover{color:#777 !important;}.img-caption{margin-top:-1em;text-align:center;color:rgba(0,0,0,0.5);margin-bottom:1em;}.gatsby-resp-image-link{margin-bottom:1em;}blockquote{background:#f8f9fa;border-left:0.3em solid #e5e5e5;padding:1em;}hr.section-divider{margin:3em 0;border:0;text-align:center;}hr.section-divider:before{content:'...';font-size:2em;top:-1em;position:relative;letter-spacing:1em;margin-left:1em;color:rgb(33,37,41);}.blog-post p{text-align:justify;}.dark-text{color:",d.a.dark,";}.text-decoration-none{text-decoration:none;}"),N=Object(s.a)("div",{target:"e5wc0qt0"})({name:"1647184",styles:"min-height:100vh;height:1px;"}),S=function(e){var t=e.children;return Object(n.d)(N,null,Object(n.d)(c.a,{htmlAttributes:{lang:"id"}},Object(n.d)("title",null,"Fairuzi10"),Object(n.d)("meta",{name:"og:title",content:"Fairuzi10"}),Object(n.d)("meta",{name:"description",content:"Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita mengenai hidup seperti perkuliahan di Universitas Indonesia (UI) serta Olimpiade Sains Nasional (OSN) Komputer/Informatika."}),Object(n.d)("meta",{name:"description",content:"Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita mengenai hidup seperti perkuliahan di Universitas Indonesia (UI) serta Olimpiade Sains Nasional (OSN) Komputer/Informatika."}),Object(n.d)("meta",{name:"og:description",content:"Website pribadi Muhammad Fairuzi Teguh, berisikan cerita-cerita mengenai hidup seperti perkuliahan di Universitas Indonesia (UI) serta Olimpiade Sains Nasional (OSN) Komputer/Informatika."}),Object(n.d)("meta",{name:"og:image",content:a(208)}),Object(n.d)("meta",{name:"google-site-verification",content:"uu3IRN8Av5aq9r0lEKhIJjoLFIi1T8TFKymt0f-68bk"})),Object(n.d)(n.a,{styles:Z}),Object(n.d)(M,null,Object(n.d)(y,null),t,Object(n.d)(m,null)))};t.a=function(e){var t=e.children,a=e.single,i=e.mid;i&&(a=!0);var r=a?"col-md-10 col-lg-9 col-xl-8":"";return Object(n.d)(S,null,Object(n.d)(C,{className:i?"d-flex align-items-center text-center":""},Object(n.d)("div",{className:"container"},Object(n.d)("div",{className:"row no-gutters justify-content-center"},Object(n.d)("div",{className:"col "+r},t)))))}},208:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAACMCAYAAABPh5YqAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gEMAx8CwfxXygAAA6NJREFUeNrt3c9rHGUcx/HPd2az3fqjavHkTT31oiAFFQNCwYOkBy+9edGDQvSqh9BQTDzoX+FFyMGLrVUoqBeXgIJ4KPViRb1pUVHT7jaZnefjYW1pA7azmexmJnm/LoEkQzbz3pl95sk8GwkAAAAAAAAAAAAAAKCqqLPxwkrfktmLUykTT326PP/dJJtk7LXGmvgoIeY+QkxigpjYlzEZAk9Bp9boOYszsgrJFS5xwlKUdjou6RS7vnExs/dly6mscCwmDTaulIePPPKynE7t5OB0xMeSStnR2j0esRnSk7KP1b3O39WYnyw9uznxRMPqernTn5dl+ZvF8OpvebfX2pafLc+PFlb770hxutoZbUYxZ/6kVpQX3n1hdPCmAxjNMpoFMUFMEBPEJCaICWKCmCAmMbEL8gr7fuJJ+A77dfYidMmKs+MJ921/OYlIsh4IxV/EbLhHT7wS55fn1yStcZptuZ++/GBqt8wQkwEQiAligtHs1C2uufPr5W+7ZbHp7dcekuLeIw+nY48/Viy/1CmJ2XC//NB/Q4r31NE/t92lFSFZ2d/Xrlz75uIfpyV9SMzm60nujT/ewjfCxlxyuofXzHa42zVj0gyXYhCT0SyICWKCmMQEMUFMHOSY5vH8v1ZN59m+f2Glv7XbK44nPgLyjoeD3weSDhNzxzXLtxQqZe1pzJRKH+o9tCX7ODF3fmS+1pAHwmsmiAliEhPEBDFxgK8zpZ/HN0s14L3zIkpZD0o+SszJ954iYtHyhqS9j2kNJL8qxWJTZvVaFNOKfO7r80tP/9mUR7Sw8tXzTZqebddrpt3lZYoBEKNZEBPEBDFBTGKCmCBmG0SFr89s6pHFtvXcmMsrtkXzfweKFTEiZhtOa1l+wU5Xpdiy082YEZnHt4PGyFm2TswW6HXvuzgqht9bUllcv/n5fK4rl4WyTu7hXJaI2QIfvf1E0nipOwMgEBPEJCaICWKCmCAmMUFMEBPEJCaICWKCmCAmMUFMEBPEBDGJCWKCmCAmMUFMHOyYEVHU2HhEsjvsnjobn1xdf06hkVMZd++Q2XIp6aSsM5O/51xISici8sGtayErbZnl48Wv9vUszy+fW3pmYz/GrLWkz0592ani99Z8AllSfF7xx92+ZSolRRbSjy5Hr0v6gph7f6rO6pyDbMkNWk/JAAjEJCaICWJO1/hK6KikQ/v1V6w7mn1RzfuflncylH2JYxgAAAAAAAAAAABohX8BVogEyIwqhx0AAAAASUVORK5CYII="},211:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"a",function(){return i}),a.d(t,"b",function(){return r}),a.d(t,"d",function(){return s});var n=function(e){return"/blog/"+e+"/"},i=function(e){return"/blog/"+(1===e?"":e+"/")},r=function(e){return"/blog/tag/"+e+"/"},s=function(e){return"/project/"+e+"/"}},327:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwcHgiICBoZWlnaHQ9IjEwMHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJsZHMtZHVhbC1yaW5nIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIG5nLWF0dHItcj0ie3tjb25maWcucmFkaXVzfX0iIG5nLWF0dHItc3Ryb2tlLXdpZHRoPSJ7e2NvbmZpZy53aWR0aH19IiBuZy1hdHRyLXN0cm9rZT0ie3tjb25maWcuc3Ryb2tlfX0iIG5nLWF0dHItc3Ryb2tlLWRhc2hhcnJheT0ie3tjb25maWcuZGFzaGFycmF5fX0iIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgcj0iNDAiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZT0iIzAwN2JmZiIgc3Ryb2tlLWRhc2hhcnJheT0iNjIuODMxODUzMDcxNzk1ODYgNjIuODMxODUzMDcxNzk1ODYiIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9zdmc+"},328:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjBweCIgIGhlaWdodD0iMjBweCIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0ibGRzLWR1YWwtcmluZyIgc3R5bGU9ImJhY2tncm91bmQ6IG5vbmU7Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBuZy1hdHRyLXI9Int7Y29uZmlnLnJhZGl1c319IiBuZy1hdHRyLXN0cm9rZS13aWR0aD0ie3tjb25maWcud2lkdGh9fSIgbmctYXR0ci1zdHJva2U9Int7Y29uZmlnLnN0cm9rZX19IiBuZy1hdHRyLXN0cm9rZS1kYXNoYXJyYXk9Int7Y29uZmlnLmRhc2hhcnJheX19IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHI9IjQwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWRhc2hhcnJheT0iNjIuODMxODUzMDcxNzk1ODYgNjIuODMxODUzMDcxNzk1ODYiIHRyYW5zZm9ybT0icm90YXRlKDMzMCA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-project-saved-messages-index-js-2fd1713624dd17d9f109.js.map