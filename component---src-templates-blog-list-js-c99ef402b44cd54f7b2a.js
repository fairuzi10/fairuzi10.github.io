webpackJsonp([58949769251002],{202:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),u=l(n),r=a(36),d=l(r),f=a(14);t.default=function(e){for(var t=e.index,a=e.pageCount,l=[],n=Math.max(1,t-2);n<=Math.min(t+2,a);n++)l.push(n);return u.default.createElement(f.Pagination,null,u.default.createElement(f.PaginationItem,{disabled:1===t},u.default.createElement(d.default,{to:"/blog"+(t-1>1?"/"+(t-1):""),className:"page-link"},"«")),l.map(function(e){return u.default.createElement(f.PaginationItem,{key:e,disabled:e===t},u.default.createElement(d.default,{to:"/blog"+(e>1?"/"+e:""),className:"page-link"},e))}),u.default.createElement(f.PaginationItem,{disabled:t===a},u.default.createElement(d.default,{to:"/blog/"+(t+1),className:"page-link"},"»")))},e.exports=t.default},44:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),u=l(n),r=a(14),d=a(22);t.default=function(e){var t=e.children;return u.default.createElement(d.Stretch,{className:"d-flex justify-content-center"},u.default.createElement(r.Col,{md:"10",lg:"8"},u.default.createElement(r.Container,null,t)))},e.exports=t.default},208:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),u=l(n),r=a(36),d=l(r),f=a(202),c=l(f),o=a(44),i=l(o),m=a(14),s=a(22),E=function(e){var t=e.pathContext,a=t.group,l=t.index,n=t.pageCount;return u.default.createElement(i.default,null,u.default.createElement(s.StretchContainer,null,u.default.createElement(s.Stretch,{className:"text-left"},a.map(function(e){var t=e.node;return u.default.createElement("div",{key:t.id},u.default.createElement("div",null,t.frontmatter.date),u.default.createElement("h1",null,u.default.createElement(d.default,{to:"/blog"+t.fields.slug,className:"black-link"},t.frontmatter.title)),u.default.createElement("div",null,t.excerpt),u.default.createElement("hr",{className:"my-4"}))})),u.default.createElement(m.Row,{className:"justify-content-center"},u.default.createElement(c.default,{index:l,pageCount:n}))))};t.default=E,e.exports=t.default}});
//# sourceMappingURL=component---src-templates-blog-list-js-c99ef402b44cd54f7b2a.js.map