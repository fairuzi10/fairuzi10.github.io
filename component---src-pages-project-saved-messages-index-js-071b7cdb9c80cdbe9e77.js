(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{158:function(e,t,a){"use strict";a.r(t);a(35);var n=a(6),r=a.n(n),s=a(34),i=a.n(s),l=a(160),o=a(0),c=a.n(o),m=a(163),d=a.n(m),h=a(162),u=a(194),p=a.n(u),g=a(214),b=a.n(g),f=a(215),E=a.n(f),I=a(216),v=a(220),w=a.n(v),x=a(224),y=a.n(x),k=a(161),M=Object(l.a)("div",{target:"e971wrx0"})({name:"64wke4",styles:"background-color:#f8f9fa;padding:1rem;margin:1rem 0;box-shadow:0 8px 6px -6px #777;overflow-wrap:break-word;"}),Z=Object(l.a)("span",{target:"e971wrx1"})("color:#777;cursor:pointer;margin:0 0.5rem;pointer-events:",function(e){return e.disabled?"none":"auto"},";"),j=p.a.create({baseURL:"https://fairuzi10.pythonanywhere.com/saved-messages/"});function N(e){this.setState({password:e.target.value})}var C=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={valid:null,text:"",password:"",loading:!1},a.handleTextChange=a.handleTextChange.bind(i()(i()(a))),a.handleSubmit=a.handleSubmit.bind(i()(i()(a))),a.handlePasswordChange=N.bind(i()(i()(a))),a}r()(t,e);var a=t.prototype;return a.handleTextChange=function(e){this.setState({valid:e.target.value.length>0,text:e.target.value})},a.handleSubmit=function(e){var t=this;this.setState({loading:!0});var a={text:this.state.text};""!==this.state.password&&(a.password=this.state.password),j.post("create/",a).then(function(){t.props.searchMessage(a)}).then(function(){t.setState({loading:!1,valid:null,text:"",password:"",passwordMask:""})}).catch(this.props.alertError),e.preventDefault()},a.render=function(){return c.a.createElement("div",{className:"mt-2"},c.a.createElement("h3",{className:"text-center"},"Simpan Pesan"),c.a.createElement(k.f,{onSubmit:this.handleSubmit,autoComplete:"off"},c.a.createElement(k.h,null,c.a.createElement(k.j,null,"Pesan Anda"),c.a.createElement(k.i,{type:"textarea",name:"text",rows:"6",onChange:this.handleTextChange,onBlur:this.handleTextChange,valid:this.state.valid,value:this.state.text}),!this.state.valid&&c.a.createElement(k.g,null,"Pesan tidak boleh kosong!")),c.a.createElement(k.h,null,c.a.createElement(k.j,null,"Password"),c.a.createElement(k.i,{type:"password",name:"password",placeholder:"Opsional",onChange:this.handlePasswordChange,value:this.state.password})),c.a.createElement(k.b,{color:"primary",disabled:!this.state.valid||this.state.loading},"Kirim ",this.state.loading&&c.a.createElement("img",{src:b.a}))))},t}(c.a.Component),W=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={password:"",loading:!1},a.handleSubmit=a.handleSubmit.bind(i()(i()(a))),a.handlePasswordChange=N.bind(i()(i()(a))),a}r()(t,e);var a=t.prototype;return a.handleSubmit=function(e){var t=this;this.setState({loading:!0});var a={};""!==this.state.password&&(a.password=this.state.password),this.props.searchMessage(a).then(function(){t.setState({loading:!1,password:"",passwordMask:""})}).catch(this.alertError),e.preventDefault()},a.render=function(){return c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",{className:"text-center"},"Cari Pesan"),c.a.createElement(k.f,{onSubmit:this.handleSubmit,autoComplete:"off"},c.a.createElement(k.h,null,c.a.createElement(k.j,null,"Password"),c.a.createElement(k.i,{type:"password",name:"password",value:this.state.password,onChange:this.handlePasswordChange})),c.a.createElement(k.b,{color:"primary",disabled:this.state.loading},"Cari ",this.state.loading&&c.a.createElement("img",{src:b.a}))))},t}(c.a.Component),S=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:!1},a.deleteMessage=a.deleteMessage.bind(i()(i()(a))),a.deleteError=a.deleteError.bind(i()(i()(a))),a}r()(t,e);var a=t.prototype;return a.deleteError=function(e,t){404===e.response.status?(this.props.searchMessage(t),this.props.alertError("Pesan telah dihapus sebelumnya. Daftar pesan telah diperbarui.")):this.props.alertError()},a.deleteMessage=function(){var e=this;this.setState({loading:!0});var t={};""!==this.props.password&&(t.password=this.props.password),j.delete("delete/"+this.props.pk+"/",{data:t}).then(function(){e.props.searchMessage(t)}).then(function(){e.setState({loading:!1})}).catch(function(a){e.deleteError(a,t)})},a.render=function(){return c.a.createElement(Z,{onClick:this.deleteMessage,disabled:this.state.loading},"hapus")},t}(c.a.Component),z=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={clicked:!1},a.toggle=a.toggle.bind(i()(i()(a))),a.handleClick=a.handleClick.bind(i()(i()(a))),a}r()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({clicked:!this.state.clicked})},a.handleClick=function(){this.toggle(),setTimeout(this.toggle,500)},a.render=function(){return c.a.createElement("span",null,c.a.createElement(I.CopyToClipboard,{text:this.props.message.text,id:"salin-"+this.props.message.pk},c.a.createElement(Z,{onClick:this.handleClick},"salin")),c.a.createElement(k.s,{placement:"bottom",isOpen:this.state.clicked,target:"salin-"+this.props.message.pk},"copied!"))},t}(c.a.Component),D=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this,t=this.props.messages,a=t?t.map(function(t){return c.a.createElement(M,{key:t.pk},c.a.createElement("div",{className:"text-right"},c.a.createElement(S,{pk:t.pk,searchMessage:e.props.searchMessage,password:e.props.password,alertError:e.props.alertError}),c.a.createElement(z,{message:t})),c.a.createElement(y.a,null,c.a.createElement(w.a,{clamp:8},t.text)))}):c.a.createElement("div",{className:"text-center"},c.a.createElement("img",{src:E.a}));return c.a.createElement("div",{className:"mt-3"},c.a.createElement("h3",{className:"text-center"},"Pesan Tersimpan"),a)},t}(c.a.Component),R=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={password:"",messages:null,error:""},a.searchMessage=a.searchMessage.bind(i()(i()(a))),a.alertError=a.alertError.bind(i()(i()(a))),a.ignoreError=a.ignoreError.bind(i()(i()(a))),a}r()(t,e);var a=t.prototype;return a.searchMessage=function(e){return new Promise(function(t){var a=this;j.post("",e).then(function(t){a.setState({messages:t.data,password:e.password})}).then(t).catch(function(){j.post("",e).then(function(t){a.setState({messages:t.data,password:e.password})}).then(t).catch(function(e){a.alertError(e)})})}.bind(this))},a.alertError=function(e,t){var a=t||"Maaf, terjadi kesalahan. Silakan beri tahu admin agar segera diperbaiki.";this.setState({error:a})},a.ignoreError=function(){this.setState({error:""})},a.componentDidMount=function(){this.searchMessage({})},a.render=function(){return c.a.createElement(h.a,null,c.a.createElement(d.a,{title:"Saved Messages",meta:[{name:"description",content:"Kirim pesan untuk dibaca di komputer lain"}]}),c.a.createElement("div",{className:"text-center"},c.a.createElement("h1",{className:"display-4"},"Saved Messages"),c.a.createElement("div",{className:"text-muted"},"Kirim pesanmu untuk dibaca di komputer lain nanti. ",c.a.createElement("br",null),"Contoh: https://www.ideone.com/xjX4Tx, https://docs.google.com/xXxXx...",c.a.createElement("br",null)),c.a.createElement("br",null)),c.a.createElement("div",null),c.a.createElement(k.r,null,""!==this.state.error&&c.a.createElement(k.c,{sm:"12"},c.a.createElement(k.a,{color:"danger",isOpen:""!==this.state.error,toggle:this.ignoreError},this.state.error)),c.a.createElement(k.c,{xs:"12",lg:"5"},c.a.createElement(C,{searchMessage:this.searchMessage,alertError:this.alertError})),c.a.createElement(k.c,{xs:"12",lg:"7"},c.a.createElement(W,{searchMessage:this.searchMessage,alertError:this.alertError}),c.a.createElement(D,{messages:this.state.messages,searchMessage:this.searchMessage,password:this.state.password,alertError:this.alertError}))))},t}(c.a.Component);t.default=R},162:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(160),i=a(163),l=a.n(i),o=a(6),c=a.n(o),m=a(34),d=a.n(m),h=a(10),u=a.n(h),p=a(161),g=Object(s.a)("div",{target:"e1sv22g80"})({name:"uirvwh",styles:"margin-bottom:3rem;"}),b=function(e){var t=e.to,a=e.children;return r.a.createElement(p.l,null,r.a.createElement(u.a,{className:"nav-link",to:t},a))},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=a.toggle.bind(d()(d()(a))),a.state={isOpen:!1},a}c()(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return r.a.createElement(g,null,r.a.createElement(p.m,{color:"light",light:!0,expand:"md"},r.a.createElement(p.n,{href:"/"},"Fairuzi10"),r.a.createElement(p.o,{onClick:this.toggle}),r.a.createElement(p.d,{isOpen:this.state.isOpen,navbar:!0,"aria-label":"Toggle navbar"},r.a.createElement(p.k,{className:"ml-auto",navbar:!0},r.a.createElement(b,{to:"/blog/"},"Blog"),r.a.createElement(b,{to:"/project/"},"Project"),r.a.createElement(b,{to:"/meme/"},"Meme")))))},t}(r.a.Component),E=Object(s.a)("footer",{target:"e13cr25x0"})({name:"198q2ua",styles:"margin-top:1rem;border-top:1px solid #e5e5e5;padding:2rem 0;text-align:center;color:#777;background-color:#f8f9fa;font-size:0.8rem;"}),I=function(){return r.a.createElement(E,null,"Muhammad Fairuzi Teguh © 2018")},v=a(164),w=Object(s.a)("div",{target:"ef2xkqd0"})({name:"114u1sp",styles:"min-height:100%;display:flex;flex-direction:column;"}),x=(Object(s.a)("div",{target:"ef2xkqd1"})({name:"1sftn1d",styles:"min-height:100%;display:flex;flex-direction:column;flex:1;"}),Object(s.a)("div",{target:"ef2xkqd2"})({name:"1rr4qq7",styles:"flex:1;"})),y=Object(s.a)("div",{target:"e5wc0qt0"})({name:"1647184",styles:"min-height:100vh;height:1px;"}),k={name:"h82laz",styles:"@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');@import url('https://fonts.googleapis.com/css?family=Arvo');*{font-family:'Arvo';}.black-link{color:black!important;}.black-link:hover{color:black!important;}.grey-link{color:#777!important;}.grey-link:hover{color:#777!important;}.img-caption{margin-top:-1em;text-align:center;color:rgba(0,0,0,.5);margin-bottom:1em;}.gatsby-resp-image-link{margin-bottom:1em;}blockquote{background:#f8f9fa;border-left:0.3em solid #e5e5e5;padding:1em;}hr.section-divider{margin:3em 0;border:0;text-align:center;}hr.section-divider:before{content:'...';font-size:2em;top:-1em;position:relative;letter-spacing:1em;margin-left:1em;color:rgb(33,37,41);}.blog-post p{text-align:justify;}"},M=function(e){var t=e.children;return r.a.createElement(y,null,r.a.createElement(l.a,{title:"Fairuzi10",meta:[{name:"google-site-verification",content:"uu3IRN8Av5aq9r0lEKhIJjoLFIi1T8TFKymt0f-68bk"}]}),r.a.createElement(v.a,{styles:k}),r.a.createElement(w,null,r.a.createElement(f,null),t,r.a.createElement(I,null)))};t.a=function(e){var t=e.children,a=e.single,n=e.mid;n&&(a=!0);var s=a?{md:"10",lg:"9",xl:"8"}:{};return r.a.createElement(M,null,r.a.createElement(x,{className:n?"d-flex align-items-center text-center":""},r.a.createElement(p.e,null,r.a.createElement(p.r,{className:"justify-content-center"},r.a.createElement(p.c,s,t)))))}},214:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjBweCIgIGhlaWdodD0iMjBweCIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0ibGRzLWR1YWwtcmluZyIgc3R5bGU9ImJhY2tncm91bmQ6IG5vbmU7Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBuZy1hdHRyLXI9Int7Y29uZmlnLnJhZGl1c319IiBuZy1hdHRyLXN0cm9rZS13aWR0aD0ie3tjb25maWcud2lkdGh9fSIgbmctYXR0ci1zdHJva2U9Int7Y29uZmlnLnN0cm9rZX19IiBuZy1hdHRyLXN0cm9rZS1kYXNoYXJyYXk9Int7Y29uZmlnLmRhc2hhcnJheX19IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHI9IjQwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWRhc2hhcnJheT0iNjIuODMxODUzMDcxNzk1ODYgNjIuODMxODUzMDcxNzk1ODYiIHRyYW5zZm9ybT0icm90YXRlKDMzMCA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9zdmc+"},215:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwcHgiICBoZWlnaHQ9IjEwMHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJsZHMtZHVhbC1yaW5nIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIG5nLWF0dHItcj0ie3tjb25maWcucmFkaXVzfX0iIG5nLWF0dHItc3Ryb2tlLXdpZHRoPSJ7e2NvbmZpZy53aWR0aH19IiBuZy1hdHRyLXN0cm9rZT0ie3tjb25maWcuc3Ryb2tlfX0iIG5nLWF0dHItc3Ryb2tlLWRhc2hhcnJheT0ie3tjb25maWcuZGFzaGFycmF5fX0iIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgcj0iNDAiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZT0iIzAwN2JmZiIgc3Ryb2tlLWRhc2hhcnJheT0iNjIuODMxODUzMDcxNzk1ODYgNjIuODMxODUzMDcxNzk1ODYiIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9zdmc+"}}]);
//# sourceMappingURL=component---src-pages-project-saved-messages-index-js-071b7cdb9c80cdbe9e77.js.map