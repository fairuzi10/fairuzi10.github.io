webpackJsonp([58949769251002],{205:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),u=l(n),r=a(37),d=l(r),i=a(17);t.default=function(e){for(var t=e.index,a=e.pageCount,l=[],n=Math.max(1,t-2);n<=Math.min(t+2,a);n++)l.push(n);return u.default.createElement(i.Pagination,null,u.default.createElement(i.PaginationItem,{disabled:1===t},u.default.createElement(d.default,{to:"/blog"+(t-1>1?"/"+(t-1):""),className:"page-link"},"«")),l.map(function(e){return u.default.createElement(i.PaginationItem,{key:e,disabled:e===t},u.default.createElement(d.default,{to:"/blog"+(e>1?"/"+e:""),className:"page-link"},e))}),u.default.createElement(i.PaginationItem,{disabled:t===a},u.default.createElement(d.default,{to:"/blog/"+(t+1),className:"page-link"},"»")))},e.exports=t.default},45:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),u=l(n),r=a(17),d=a(25);t.default=function(e){var t=e.children;return u.default.createElement(d.Stretch,{className:"d-flex justify-content-center"},u.default.createElement(r.Col,{md:"10",lg:"8"},u.default.createElement(r.Container,null,t)))},e.exports=t.default},213:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),u=l(n),r=a(37),d=l(r),i=a(205),f=l(i),o=a(45),c=l(o),m=a(28),s=l(m),g=function(e){var t=e.pathContext,a=t.group,l=t.index,n=t.pageCount;return u.default.createElement(c.default,null,u.default.createElement(s.default,{title:"Fairuzi10 | Blog",meta:[{name:"description",content:"Kumpulan cerita milik Muhammad Fairuzi Teguh tentang olimpiade\t  komputer, Universitas Indonesia, dan lain sebagainya."}]}),a.map(function(e){var t=e.node;return u.default.createElement("div",{key:t.id},u.default.createElement("div",null,t.frontmatter.date),u.default.createElement("h1",null,u.default.createElement(d.default,{to:"/blog"+t.fields.slug,className:"black-link"},t.frontmatter.title)),u.default.createElement("div",null,t.frontmatter.description),u.default.createElement("hr",{className:"my-4"}))}),u.default.createElement("div",{className:"d-flex justify-content-center"},u.default.createElement(f.default,{index:l,pageCount:n})))};t.default=g,e.exports=t.default}});
//# sourceMappingURL=component---src-templates-blog-list-js-1bf0a8893a329d63680d.js.map