(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{190:function(e,t,a){"use strict";a.r(t),a.d(t,"metaData",function(){return T});a(31),a(6);var n=a(66),r=a.n(n),s=a(11),i=a.n(s),o=a(199),c=a(10),l=a(0),d=a.n(l),u=a(205),h=a.n(u),m=a(292),b=a.n(m),p=a(311),g=a(315),j=a.n(g),f=a(319),O=a.n(f),I=a(340),v=a(341),w=a(342),y=a(343),x=a(344),k=a(345),M=a(346),Z=a(338),N=a(339),C=a(347),W=a(327),S=a.n(W),D=a(328),z=a.n(D),R=a(204),H=a(210),T={name:"Saved Messages",url:Object(H.d)("saved-messages"),description:"Simpan pesanmu untuk dilihat di komputer lain."},Y=Object(o.a)("div",{target:"e971wrx0"})({name:"64wke4",styles:"background-color:#f8f9fa;padding:1rem;margin:1rem 0;box-shadow:0 8px 6px -6px #777;overflow-wrap:break-word;"}),X=Object(o.a)("span",{target:"e971wrx1"})("color:#777;cursor:pointer;margin:0 0.5rem;pointer-events:",function(e){return e.disabled?"none":"auto"},";"),B=b.a.create({baseURL:"https://fairuzi10.pythonanywhere.com/saved-messages/"});function J(e){this.setState({password:e.target.value})}var E=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={valid:null,text:"",password:"",loading:!1},a.handleTextChange=a.handleTextChange.bind(r()(a)),a.handleSubmit=a.handleSubmit.bind(r()(a)),a.handlePasswordChange=J.bind(r()(a)),a}i()(t,e);var a=t.prototype;return a.handleTextChange=function(e){this.setState({valid:e.target.value.length>0,text:e.target.value})},a.handleSubmit=function(e){var t=this;this.setState({loading:!0});var a={text:this.state.text};""!==this.state.password&&(a.password=this.state.password),B.post("create/",a).then(function(){t.props.searchMessage(a)}).then(function(){t.setState({loading:!1,valid:null,text:"",password:"",passwordMask:""})}).catch(this.props.alertError),e.preventDefault()},a.render=function(){return Object(c.d)("div",{className:"mt-2"},Object(c.d)("h3",{className:"text-center"},"Simpan Pesan"),Object(c.d)(I.a,{onSubmit:this.handleSubmit,autoComplete:"off"},Object(c.d)(v.a,null,Object(c.d)(w.a,null,"Pesan Anda"),Object(c.d)(y.a,{type:"textarea",name:"text",rows:"6",onChange:this.handleTextChange,onBlur:this.handleTextChange,valid:this.state.valid,value:this.state.text}),!this.state.valid&&Object(c.d)(x.a,null,"Pesan tidak boleh kosong!")),Object(c.d)(v.a,null,Object(c.d)(w.a,null,"Password"),Object(c.d)(y.a,{type:"password",name:"password",placeholder:"Opsional",onChange:this.handlePasswordChange,value:this.state.password})),Object(c.d)(k.a,{color:"primary",disabled:!this.state.valid||this.state.loading},"Kirim ",this.state.loading&&Object(c.d)("img",{src:z.a,alt:"loading..."}))))},t}(d.a.Component),F=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={password:"",loading:!1},a.handleSubmit=a.handleSubmit.bind(r()(a)),a.handlePasswordChange=J.bind(r()(a)),a}i()(t,e);var a=t.prototype;return a.handleSubmit=function(e){var t=this;this.setState({loading:!0});var a={};""!==this.state.password&&(a.password=this.state.password),this.props.searchMessage(a).then(function(){t.setState({loading:!1,password:"",passwordMask:""})}).catch(this.alertError),e.preventDefault()},a.render=function(){return Object(c.d)("div",{className:"mt-3"},Object(c.d)("h3",{className:"text-center"},"Cari Pesan"),Object(c.d)(I.a,{onSubmit:this.handleSubmit,autoComplete:"off"},Object(c.d)(v.a,null,Object(c.d)(w.a,null,"Password"),Object(c.d)(y.a,{type:"password",name:"password",value:this.state.password,onChange:this.handlePasswordChange})),Object(c.d)(k.a,{color:"primary",disabled:this.state.loading},"Cari ",this.state.loading&&Object(c.d)("img",{src:z.a,alt:"loading..."}))))},t}(d.a.Component),P=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:!1},a.deleteMessage=a.deleteMessage.bind(r()(a)),a.deleteError=a.deleteError.bind(r()(a)),a}i()(t,e);var a=t.prototype;return a.deleteError=function(e,t){404===e.response.status?(this.props.searchMessage(t),this.props.alertError("Pesan telah dihapus sebelumnya. Daftar pesan telah diperbarui.")):this.props.alertError()},a.deleteMessage=function(){var e=this;this.setState({loading:!0});var t={};""!==this.props.password&&(t.password=this.props.password);var a=this.props.pk;B.delete("delete/"+a+"/",{data:t}).then(function(){e.props.searchMessage(t)}).then(function(){e.setState({loading:!1})}).catch(function(a){e.deleteError(a,t)})},a.render=function(){return Object(c.d)(X,{onClick:this.deleteMessage,disabled:this.state.loading},"hapus")},t}(d.a.Component),A=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={clicked:!1},a.toggle=a.toggle.bind(r()(a)),a.handleClick=a.handleClick.bind(r()(a)),a}i()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({clicked:!this.state.clicked})},a.handleClick=function(){this.toggle(),setTimeout(this.toggle,500)},a.render=function(){return Object(c.d)("span",null,Object(c.d)(p.CopyToClipboard,{text:this.props.message.text,id:"salin-"+this.props.message.pk},Object(c.d)(X,{onClick:this.handleClick},"salin")),Object(c.d)(M.a,{placement:"bottom",isOpen:this.state.clicked,target:"salin-"+this.props.message.pk},"copied!"))},t}(d.a.Component),G=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this,t=this.props.messages,a=t?t.map(function(t){return Object(c.d)(Y,{key:t.pk},Object(c.d)("div",{className:"text-right"},Object(c.d)(P,{pk:t.pk,searchMessage:e.props.searchMessage,password:e.props.password,alertError:e.props.alertError}),Object(c.d)(A,{message:t})),Object(c.d)(O.a,null,Object(c.d)(j.a,{clamp:8},t.text)))}):Object(c.d)("div",{className:"text-center"},Object(c.d)("img",{src:S.a,alt:"loading..."}));return Object(c.d)("div",{className:"mt-3"},Object(c.d)("h3",{className:"text-center"},"Pesan Tersimpan"),a)},t}(d.a.Component),U=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={password:"",messages:null,error:""},a.searchMessage=a.searchMessage.bind(r()(a)),a.alertError=a.alertError.bind(r()(a)),a.ignoreError=a.ignoreError.bind(r()(a)),a}i()(t,e);var a=t.prototype;return a.searchMessage=function(e){return new Promise(function(t){var a=this;B.post("",e).then(function(t){a.setState({messages:t.data,password:e.password})}).then(t).catch(function(){B.post("",e).then(function(t){a.setState({messages:t.data,password:e.password})}).then(t).catch(function(e){a.alertError(e)})})}.bind(this))},a.alertError=function(e,t){var a=t||"Maaf, terjadi kesalahan. Silakan beri tahu admin agar segera diperbaiki.";this.setState({error:a})},a.ignoreError=function(){this.setState({error:""})},a.componentDidMount=function(){this.searchMessage({})},a.render=function(){return Object(c.d)(R.a,null,Object(c.d)(h.a,{title:"Saved Messages",meta:[{name:"description",content:"Kirim pesan untuk dibaca di komputer lain"}]}),Object(c.d)("div",{className:"text-center"},Object(c.d)("h1",{className:"display-4"},"Saved Messages"),Object(c.d)("div",{className:"text-muted"},"Kirim pesanmu untuk dibaca di komputer lain nanti. ",Object(c.d)("br",null),"Contoh: https://www.ideone.com/xjX4Tx, https://docs.google.com/xXxXx...",Object(c.d)("br",null)),Object(c.d)("br",null)),Object(c.d)("div",null),Object(c.d)(Z.a,null,""!==this.state.error&&Object(c.d)(N.a,{sm:"12"},Object(c.d)(C.a,{color:"danger",isOpen:""!==this.state.error,toggle:this.ignoreError},this.state.error)),Object(c.d)(N.a,{xs:"12",lg:"5"},Object(c.d)(E,{searchMessage:this.searchMessage,alertError:this.alertError})),Object(c.d)(N.a,{xs:"12",lg:"7"},Object(c.d)(F,{searchMessage:this.searchMessage,alertError:this.alertError}),Object(c.d)(G,{messages:this.state.messages,searchMessage:this.searchMessage,password:this.state.password,alertError:this.alertError}))))},t}(d.a.Component);t.default=U},200:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={primary:"#007bff",black:"#000000",dark:"#263646",blue:"#1B1464",blueFade:"#e6ecf0",white:"#ffffff",yellow:"#f1c40f",gray:"#34495e",orange:"#F79F1F"}},204:function(e,t,a){"use strict";var n=a(10),r=a(0),s=a.n(r),i=a(199),o=a(205),c=a.n(o),l=a(200),d=Object(i.a)("footer",{target:"e13cr25x0"})({marginTop:"1rem",borderTop:"1px solid #e5e5e5",padding:"3rem 0",textAlign:"center",color:l.a.dark,fontSize:"0.8rem",backgroundColor:l.a.white},""),u=function(){return Object(n.d)(d,null,"Muhammad Fairuzi Teguh © 2019")},h=a(66),m=a.n(h),b=a(11),p=a.n(b),g=a(14),j=a.n(g),f=a(331),O=a(332),I=a(333),v=a(334),w=a(335),y=a(336),x=Object(i.a)("div",{target:"e1sv22g80"})({name:"1ke08uv",styles:"margin-bottom:3rem;box-shadow:0px 10px 20px -10px rgba(0,64,128,0.2);"}),k=function(e){var t=e.to,a=e.children;return Object(n.d)(f.a,null,Object(n.d)(j.a,{className:"nav-link",to:t,activeClassName:"active",partiallyActive:!0},a))},M=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(m()(a)),a.state={isOpen:!1},a}p()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return Object(n.d)(x,null,Object(n.d)(O.a,{color:"white",light:!0,expand:"md",className:"py-3"},Object(n.d)(I.a,{href:"/"},"Fairuzi10"),Object(n.d)(v.a,{onClick:this.toggle}),Object(n.d)(w.a,{isOpen:this.state.isOpen,navbar:!0,"aria-label":"Toggle navbar"},Object(n.d)(y.a,{className:"ml-auto",navbar:!0},Object(n.d)(k,{to:"/blog/"},"Blog"),Object(n.d)(k,{to:"/project/"},"Project"),Object(n.d)(k,{to:"/meme/"},"Meme")))))},t}(s.a.Component),Z=Object(i.a)("div",{target:"ef2xkqd0"})({name:"114u1sp",styles:"min-height:100%;display:flex;flex-direction:column;"}),N=(Object(i.a)("div",{target:"ef2xkqd1"})({name:"1sftn1d",styles:"min-height:100%;display:flex;flex-direction:column;flex:1;"}),Object(i.a)("div",{target:"ef2xkqd2"})({name:"1rr4qq7",styles:"flex:1;"})),C=Object(n.c)("@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');@import url('https://fonts.googleapis.com/css?family=Arvo&display=swap');*{font-family:'Arvo';}body{background-color:",l.a.blueFade,";}.black-link{color:",l.a.dark," !important;}.black-link:hover{color:",l.a.dark," !important;}.grey-link{color:#777 !important;}.grey-link:hover{color:#777 !important;}.img-caption{margin-top:-1em;text-align:center;color:rgba(0,0,0,0.5);margin-bottom:1em;}.gatsby-resp-image-link{margin-bottom:1em;}blockquote{background:#f8f9fa;border-left:0.3em solid #e5e5e5;padding:1em;}hr.section-divider{margin:3em 0;border:0;text-align:center;}hr.section-divider:before{content:'...';font-size:2em;top:-1em;position:relative;letter-spacing:1em;margin-left:1em;color:rgb(33,37,41);}.blog-post p{text-align:justify;}"),W=Object(i.a)("div",{target:"e5wc0qt0"})({name:"1647184",styles:"min-height:100vh;height:1px;"}),S=function(e){var t=e.children;if(document){var a=document.getElementById("loading-style"),r=document.getElementById("loading-body");a&&a.remove(),r&&r.remove()}return Object(n.d)(W,null,Object(n.d)(c.a,{title:"Fairuzi10",htmlAttributes:{lang:"id"},meta:[{name:"google-site-verification",content:"uu3IRN8Av5aq9r0lEKhIJjoLFIi1T8TFKymt0f-68bk"}]}),Object(n.d)(n.a,{styles:C}),Object(n.d)(Z,null,Object(n.d)(M,null),t,Object(n.d)(u,null)))},D=a(337),z=a(338),R=a(339);t.a=function(e){var t=e.children,a=e.single,r=e.mid;r&&(a=!0);var s=a?{md:"10",lg:"9",xl:"8"}:{};return Object(n.d)(S,null,Object(n.d)(N,{className:r?"d-flex align-items-center text-center":""},Object(n.d)(D.a,null,Object(n.d)(z.a,{className:"justify-content-center"},Object(n.d)(R.a,s,t)))))}},210:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"a",function(){return r}),a.d(t,"b",function(){return s}),a.d(t,"d",function(){return i});var n=function(e){return"/blog/"+e+"/"},r=function(e){return"/blog/"+(1===e?"":e+"/")},s=function(e){return"/blog/tag/"+e+"/"},i=function(e){return"/project/"+e+"/"}},327:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwcHgiICBoZWlnaHQ9IjEwMHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJsZHMtZHVhbC1yaW5nIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIG5nLWF0dHItcj0ie3tjb25maWcucmFkaXVzfX0iIG5nLWF0dHItc3Ryb2tlLXdpZHRoPSJ7e2NvbmZpZy53aWR0aH19IiBuZy1hdHRyLXN0cm9rZT0ie3tjb25maWcuc3Ryb2tlfX0iIG5nLWF0dHItc3Ryb2tlLWRhc2hhcnJheT0ie3tjb25maWcuZGFzaGFycmF5fX0iIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgcj0iNDAiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZT0iIzAwN2JmZiIgc3Ryb2tlLWRhc2hhcnJheT0iNjIuODMxODUzMDcxNzk1ODYgNjIuODMxODUzMDcxNzk1ODYiIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9zdmc+"},328:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjBweCIgIGhlaWdodD0iMjBweCIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0ibGRzLWR1YWwtcmluZyIgc3R5bGU9ImJhY2tncm91bmQ6IG5vbmU7Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBuZy1hdHRyLXI9Int7Y29uZmlnLnJhZGl1c319IiBuZy1hdHRyLXN0cm9rZS13aWR0aD0ie3tjb25maWcud2lkdGh9fSIgbmctYXR0ci1zdHJva2U9Int7Y29uZmlnLnN0cm9rZX19IiBuZy1hdHRyLXN0cm9rZS1kYXNoYXJyYXk9Int7Y29uZmlnLmRhc2hhcnJheX19IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHI9IjQwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWRhc2hhcnJheT0iNjIuODMxODUzMDcxNzk1ODYgNjIuODMxODUzMDcxNzk1ODYiIHRyYW5zZm9ybT0icm90YXRlKDMzMCA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-project-saved-messages-index-js-5b0e3240482b60238581.js.map