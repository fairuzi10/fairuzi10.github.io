(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12,14,16],{155:function(t,e,a){"use strict";a.r(e),a.d(e,"metaData",function(){return m});var n=a(8),r=(a(0),a(5)),i=a.n(r),s=a(173),o=a(184),c=a(172),l=a.n(c),d=a(179),u=a(180),m={name:"OSKP",url:Object(u.c)("oskp"),description:"Kumpulan slide yang dapat digunakan untuk belajar Olimpiade Sains Nasional (OSN) Komputer/Informatika."};e.default=function(){return Object(n.d)(s.a,{single:!0},Object(n.d)(l.a,{title:"OSKP",meta:[{name:"description",content:"Kumpulan slide yang dapat digunakan untuk   belajar Olimpiade Sains Nasional (OSN) Komputer/Informatika"}]}),Object(n.d)(d.b,null,Object(n.d)("h1",null,"OSKP"),Object(n.d)("div",{className:"text-justify"},"Berikut ini slide materi Olimpiade Komputer tingkat kabupaten/kota dan provinsi yang telah saya buat. Semoga slide ini dapat membantu dalam mempelajari materi yang diujikan dalam OSN komputer/informatika tingkat kota maupun provinsi."),Object(n.d)("br",null),Object(n.d)(i.a,{to:"/project/oskp/dynamic-programming/"},"Dynamic Programming"),Object(n.d)("br",null),Object(n.d)(i.a,{to:"/project/oskp/persamaan-linear-diophantine/"},"Persamaan Linear Diophantine"),Object(n.d)("br",null),Object(n.d)("hr",null)),Object(n.d)(d.b,null,Object(n.d)(o.DiscussionEmbed,{shortname:"fairuzi10-github-io",config:{url:"http://fairuzi10.github.io/project/oskp/",identifier:"project/oskp/",title:"Project OSKP"}})))}},156:function(t,e,a){"use strict";a.r(e),a.d(e,"metaData",function(){return T});a(39),a(40);var n=a(38),r=a.n(n),i=a(9),s=a.n(i),o=a(170),c=a(8),l=a(0),d=a.n(l),u=a(172),m=a.n(u),b=a(173),p=a(196),h=a.n(p),g=a(187),j=a.n(g),f=a(188),O=a.n(f),v=a(198),I=a(199),k=a.n(I),y=a(200),w=a.n(y),x=a(297),M=a(298),N=a(299),Z=a(300),S=a(301),C=a(302),D=a(303),W=a(295),z=a(296),R=a(304),H=a(180),T={name:"Saved Messages",url:Object(H.c)("saved-messages"),description:"Simpan pesanmu untuk dilihat di komputer lain."},P=Object(o.a)("div",{target:"e971wrx0"})({name:"64wke4",styles:"background-color:#f8f9fa;padding:1rem;margin:1rem 0;box-shadow:0 8px 6px -6px #777;overflow-wrap:break-word;"}),Y=Object(o.a)("span",{target:"e971wrx1"})("color:#777;cursor:pointer;margin:0 0.5rem;pointer-events:",function(t){return t.disabled?"none":"auto"},";"),X=h.a.create({baseURL:"https://fairuzi10.pythonanywhere.com/saved-messages/"});function B(t){this.setState({password:t.target.value})}var E=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={valid:null,text:"",password:"",loading:!1},a.handleTextChange=a.handleTextChange.bind(r()(a)),a.handleSubmit=a.handleSubmit.bind(r()(a)),a.handlePasswordChange=B.bind(r()(a)),a}s()(e,t);var a=e.prototype;return a.handleTextChange=function(t){this.setState({valid:t.target.value.length>0,text:t.target.value})},a.handleSubmit=function(t){var e=this;this.setState({loading:!0});var a={text:this.state.text};""!==this.state.password&&(a.password=this.state.password),X.post("create/",a).then(function(){e.props.searchMessage(a)}).then(function(){e.setState({loading:!1,valid:null,text:"",password:"",passwordMask:""})}).catch(this.props.alertError),t.preventDefault()},a.render=function(){return Object(c.d)("div",{className:"mt-2"},Object(c.d)("h3",{className:"text-center"},"Simpan Pesan"),Object(c.d)(x.a,{onSubmit:this.handleSubmit,autoComplete:"off"},Object(c.d)(M.a,null,Object(c.d)(N.a,null,"Pesan Anda"),Object(c.d)(Z.a,{type:"textarea",name:"text",rows:"6",onChange:this.handleTextChange,onBlur:this.handleTextChange,valid:this.state.valid,value:this.state.text}),!this.state.valid&&Object(c.d)(S.a,null,"Pesan tidak boleh kosong!")),Object(c.d)(M.a,null,Object(c.d)(N.a,null,"Password"),Object(c.d)(Z.a,{type:"password",name:"password",placeholder:"Opsional",onChange:this.handlePasswordChange,value:this.state.password})),Object(c.d)(C.a,{color:"primary",disabled:!this.state.valid||this.state.loading},"Kirim ",this.state.loading&&Object(c.d)("img",{src:j.a}))))},e}(d.a.Component),J=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={password:"",loading:!1},a.handleSubmit=a.handleSubmit.bind(r()(a)),a.handlePasswordChange=B.bind(r()(a)),a}s()(e,t);var a=e.prototype;return a.handleSubmit=function(t){var e=this;this.setState({loading:!0});var a={};""!==this.state.password&&(a.password=this.state.password),this.props.searchMessage(a).then(function(){e.setState({loading:!1,password:"",passwordMask:""})}).catch(this.alertError),t.preventDefault()},a.render=function(){return Object(c.d)("div",{className:"mt-3"},Object(c.d)("h3",{className:"text-center"},"Cari Pesan"),Object(c.d)(x.a,{onSubmit:this.handleSubmit,autoComplete:"off"},Object(c.d)(M.a,null,Object(c.d)(N.a,null,"Password"),Object(c.d)(Z.a,{type:"password",name:"password",value:this.state.password,onChange:this.handlePasswordChange})),Object(c.d)(C.a,{color:"primary",disabled:this.state.loading},"Cari ",this.state.loading&&Object(c.d)("img",{src:j.a}))))},e}(d.a.Component),A=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={loading:!1},a.deleteMessage=a.deleteMessage.bind(r()(a)),a.deleteError=a.deleteError.bind(r()(a)),a}s()(e,t);var a=e.prototype;return a.deleteError=function(t,e){404===t.response.status?(this.props.searchMessage(e),this.props.alertError("Pesan telah dihapus sebelumnya. Daftar pesan telah diperbarui.")):this.props.alertError()},a.deleteMessage=function(){var t=this;this.setState({loading:!0});var e={};""!==this.props.password&&(e.password=this.props.password),X.delete("delete/"+this.props.pk+"/",{data:e}).then(function(){t.props.searchMessage(e)}).then(function(){t.setState({loading:!1})}).catch(function(a){t.deleteError(a,e)})},a.render=function(){return Object(c.d)(Y,{onClick:this.deleteMessage,disabled:this.state.loading},"hapus")},e}(d.a.Component),F=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={clicked:!1},a.toggle=a.toggle.bind(r()(a)),a.handleClick=a.handleClick.bind(r()(a)),a}s()(e,t);var a=e.prototype;return a.toggle=function(){this.setState({clicked:!this.state.clicked})},a.handleClick=function(){this.toggle(),setTimeout(this.toggle,500)},a.render=function(){return Object(c.d)("span",null,Object(c.d)(v.CopyToClipboard,{text:this.props.message.text,id:"salin-"+this.props.message.pk},Object(c.d)(Y,{onClick:this.handleClick},"salin")),Object(c.d)(D.a,{placement:"bottom",isOpen:this.state.clicked,target:"salin-"+this.props.message.pk},"copied!"))},e}(d.a.Component),G=function(t){function e(){return t.apply(this,arguments)||this}return s()(e,t),e.prototype.render=function(){var t=this,e=this.props.messages,a=e?e.map(function(e){return Object(c.d)(P,{key:e.pk},Object(c.d)("div",{className:"text-right"},Object(c.d)(A,{pk:e.pk,searchMessage:t.props.searchMessage,password:t.props.password,alertError:t.props.alertError}),Object(c.d)(F,{message:e})),Object(c.d)(w.a,null,Object(c.d)(k.a,{clamp:8},e.text)))}):Object(c.d)("div",{className:"text-center"},Object(c.d)("img",{src:O.a}));return Object(c.d)("div",{className:"mt-3"},Object(c.d)("h3",{className:"text-center"},"Pesan Tersimpan"),a)},e}(d.a.Component),U=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={password:"",messages:null,error:""},a.searchMessage=a.searchMessage.bind(r()(a)),a.alertError=a.alertError.bind(r()(a)),a.ignoreError=a.ignoreError.bind(r()(a)),a}s()(e,t);var a=e.prototype;return a.searchMessage=function(t){return new Promise(function(e){var a=this;X.post("",t).then(function(e){a.setState({messages:e.data,password:t.password})}).then(e).catch(function(){X.post("",t).then(function(e){a.setState({messages:e.data,password:t.password})}).then(e).catch(function(t){a.alertError(t)})})}.bind(this))},a.alertError=function(t,e){var a=e||"Maaf, terjadi kesalahan. Silakan beri tahu admin agar segera diperbaiki.";this.setState({error:a})},a.ignoreError=function(){this.setState({error:""})},a.componentDidMount=function(){this.searchMessage({})},a.render=function(){return Object(c.d)(b.a,null,Object(c.d)(m.a,{title:"Saved Messages",meta:[{name:"description",content:"Kirim pesan untuk dibaca di komputer lain"}]}),Object(c.d)("div",{className:"text-center"},Object(c.d)("h1",{className:"display-4"},"Saved Messages"),Object(c.d)("div",{className:"text-muted"},"Kirim pesanmu untuk dibaca di komputer lain nanti. ",Object(c.d)("br",null),"Contoh: https://www.ideone.com/xjX4Tx, https://docs.google.com/xXxXx...",Object(c.d)("br",null)),Object(c.d)("br",null)),Object(c.d)("div",null),Object(c.d)(W.a,null,""!==this.state.error&&Object(c.d)(z.a,{sm:"12"},Object(c.d)(R.a,{color:"danger",isOpen:""!==this.state.error,toggle:this.ignoreError},this.state.error)),Object(c.d)(z.a,{xs:"12",lg:"5"},Object(c.d)(E,{searchMessage:this.searchMessage,alertError:this.alertError})),Object(c.d)(z.a,{xs:"12",lg:"7"},Object(c.d)(J,{searchMessage:this.searchMessage,alertError:this.alertError}),Object(c.d)(G,{messages:this.state.messages,searchMessage:this.searchMessage,password:this.state.password,alertError:this.alertError}))))},e}(d.a.Component);e.default=U},157:function(t,e,a){"use strict";a.r(e),a.d(e,"metaData",function(){return o});var n=a(8),r=(a(0),a(172)),i=a.n(r),s=a(180),o={name:"Jadwal SIAK",url:Object(s.c)("jadwal-siak"),description:"Atur jadwalmu dan jadilah pemenang SIAK War!"};e.default=function(){var t=function(t,e){var a=document,n="script",r=a.createElement(n),i=a.getElementsByTagName(n)[0];r.src=t,e&&r.addEventListener("load",function(t){e(null,t)},!1),i.parentNode.insertBefore(r,i)};if("undefined"!=typeof document){t("https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js",function(){return t("/jadwal-siak/dist/jadwal-siak.min.js")}),t("https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js")}return Object(n.d)("div",null,Object(n.d)(i.a,{meta:[{name:"description",content:"Susun jadwal SIAK-mu di sini dan pastikan kamulah juaranya."}]}),Object(n.d)("jadwal-siak",null))}},159:function(t,e,a){"use strict";a.r(e),a.d(e,"projectsMetaData",function(){return d});a(190);var n=a(8),r=(a(0),a(172)),i=a.n(r),s=a(179),o=a(173),c=a(155),l=a(156),d=[a(157).metaData,l.metaData,c.metaData];e.default=function(){var t=d.map(function(t){return Object(n.d)("div",{key:t.url},Object(n.d)("h2",null,Object(n.d)(s.a,{to:t.url},t.name)),Object(n.d)("div",null,t.description),Object(n.d)("hr",{className:"my-4"}))});return Object(n.d)(o.a,{single:!0},Object(n.d)(i.a,{title:"Project",meta:[{name:"description",content:"Berbagai proyek yang telah saya kerjakan."}]}),Object(n.d)(s.b,null,t))}},171:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n={primary:"#007bff",black:"#14171A",blue:"#1B1464",blueFade:"#e6ecf0",white:"#ffffff",yellow:"#f1c40f",gray:"#34495e",orange:"#F79F1F"}},173:function(t,e,a){"use strict";var n=a(8),r=a(0),i=a.n(r),s=a(170),o=a(172),c=a.n(o),l=a(38),d=a.n(l),u=a(9),m=a.n(u),b=a(5),p=a.n(b),h=a(288),g=a(289),j=a(290),f=a(291),O=a(292),v=a(293),I=Object(s.a)("div",{target:"e1sv22g80"})({name:"uirvwh",styles:"margin-bottom:3rem;"}),k=function(t){var e=t.to,a=t.children;return Object(n.d)(h.a,null,Object(n.d)(p.a,{className:"nav-link",to:e,activeClassName:"active",partiallyActive:!0},a))},y=function(t){function e(e){var a;return(a=t.call(this,e)||this).toggle=a.toggle.bind(d()(a)),a.state={isOpen:!1},a}m()(e,t);var a=e.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return Object(n.d)(I,null,Object(n.d)(g.a,{color:"primary",dark:!0,expand:"md"},Object(n.d)(j.a,{href:"/"},"Fairuzi10"),Object(n.d)(f.a,{onClick:this.toggle}),Object(n.d)(O.a,{isOpen:this.state.isOpen,navbar:!0,"aria-label":"Toggle navbar"},Object(n.d)(v.a,{className:"ml-auto",navbar:!0},Object(n.d)(k,{to:"/blog/"},"Blog"),Object(n.d)(k,{to:"/project/"},"Project"),Object(n.d)(k,{to:"/meme/"},"Meme")))))},e}(i.a.Component),w=a(171),x=Object(s.a)("footer",{target:"e13cr25x0"})({marginTop:"1rem",borderTop:"1px solid #e5e5e5",padding:"2rem 0",textAlign:"center",color:w.a.white,backgroundColor:w.a.primary,fontSize:"0.8rem"},""),M=function(){return Object(n.d)(x,null,"Muhammad Fairuzi Teguh © 2019")},N=Object(s.a)("div",{target:"ef2xkqd0"})({name:"114u1sp",styles:"min-height:100%;display:flex;flex-direction:column;"}),Z=(Object(s.a)("div",{target:"ef2xkqd1"})({name:"1sftn1d",styles:"min-height:100%;display:flex;flex-direction:column;flex:1;"}),Object(s.a)("div",{target:"ef2xkqd2"})({name:"1rr4qq7",styles:"flex:1;"})),S=Object(s.a)("div",{target:"e5wc0qt0"})({name:"1647184",styles:"min-height:100vh;height:1px;"}),C=function(t){var e=t.children;return Object(n.d)(S,null,Object(n.d)(c.a,{title:"Fairuzi10",meta:[{name:"google-site-verification",content:"uu3IRN8Av5aq9r0lEKhIJjoLFIi1T8TFKymt0f-68bk"}]}),Object(n.d)(n.a,{styles:Object(n.c)("@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');@import url('https://fonts.googleapis.com/css?family=Arvo');*{font-family:'Arvo';}body{background-color:",w.a.blueFade,";}.black-link{color:black!important;}.black-link:hover{color:black!important;}.grey-link{color:#777!important;}.grey-link:hover{color:#777!important;}.img-caption{margin-top:-1em;text-align:center;color:rgba(0,0,0,.5);margin-bottom:1em;}.gatsby-resp-image-link{margin-bottom:1em;}blockquote{background:#f8f9fa;border-left:0.3em solid #e5e5e5;padding:1em;}hr.section-divider{margin:3em 0;border:0;text-align:center;}hr.section-divider:before{content:'...';font-size:2em;top:-1em;position:relative;letter-spacing:1em;margin-left:1em;color:rgb(33,37,41);}.blog-post p{text-align:justify;}")}),Object(n.d)(N,null,Object(n.d)(y,null),e,Object(n.d)(M,null)))},D=a(294),W=a(295),z=a(296);e.a=function(t){var e=t.children,a=t.single,r=t.mid;r&&(a=!0);var i=a?{md:"10",lg:"9",xl:"8"}:{};return Object(n.d)(C,null,Object(n.d)(Z,{className:r?"d-flex align-items-center text-center":""},Object(n.d)(D.a,null,Object(n.d)(W.a,{className:"justify-content-center"},Object(n.d)(z.a,i,e)))))}},179:function(t,e,a){"use strict";a.d(e,"b",function(){return s}),a.d(e,"a",function(){return o}),a.d(e,"c",function(){return c});var n=a(170),r=a(171),i=a(59),s=Object(n.a)("div",{target:"emf2aq40"})({backgroundColor:r.a.white,padding:"2rem",margin:"1rem"},""),o=Object(n.a)(i.Link,{target:"emf2aq41"})({color:r.a.black,":hover":{color:r.a.black,textDecoration:"underline"}},""),c=Object(n.a)("hr",{target:"emf2aq42"})({name:"12vuxj9",styles:"margin:1rem 0;"})},180:function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"a",function(){return r}),a.d(e,"c",function(){return i});var n=function(t){return"/blog/"+t+"/"},r=function(t){return"/blog/tag/"+t+"/"},i=function(t){return"/project/"+t+"/"}},187:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjBweCIgIGhlaWdodD0iMjBweCIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0ibGRzLWR1YWwtcmluZyIgc3R5bGU9ImJhY2tncm91bmQ6IG5vbmU7Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBuZy1hdHRyLXI9Int7Y29uZmlnLnJhZGl1c319IiBuZy1hdHRyLXN0cm9rZS13aWR0aD0ie3tjb25maWcud2lkdGh9fSIgbmctYXR0ci1zdHJva2U9Int7Y29uZmlnLnN0cm9rZX19IiBuZy1hdHRyLXN0cm9rZS1kYXNoYXJyYXk9Int7Y29uZmlnLmRhc2hhcnJheX19IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHI9IjQwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWRhc2hhcnJheT0iNjIuODMxODUzMDcxNzk1ODYgNjIuODMxODUzMDcxNzk1ODYiIHRyYW5zZm9ybT0icm90YXRlKDMzMCA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9zdmc+"},188:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwcHgiICBoZWlnaHQ9IjEwMHB4IiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJsZHMtZHVhbC1yaW5nIiBzdHlsZT0iYmFja2dyb3VuZDogbm9uZTsiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIG5nLWF0dHItcj0ie3tjb25maWcucmFkaXVzfX0iIG5nLWF0dHItc3Ryb2tlLXdpZHRoPSJ7e2NvbmZpZy53aWR0aH19IiBuZy1hdHRyLXN0cm9rZT0ie3tjb25maWcuc3Ryb2tlfX0iIG5nLWF0dHItc3Ryb2tlLWRhc2hhcnJheT0ie3tjb25maWcuZGFzaGFycmF5fX0iIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgcj0iNDAiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZT0iIzAwN2JmZiIgc3Ryb2tlLWRhc2hhcnJheT0iNjIuODMxODUzMDcxNzk1ODYgNjIuODMxODUzMDcxNzk1ODYiIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBjYWxjTW9kZT0ibGluZWFyIiB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+PC9jaXJjbGU+PC9zdmc+"},190:function(t,e,a){var n=a(28).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(22)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=component---src-pages-project-index-js-2ee2b461b64635dfb9f3.js.map