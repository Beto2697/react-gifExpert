(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(7),c=n.n(a),i=n(2),s=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],o=a[1];return Object(u.jsxs)("form",{onSubmit:function(e){c.trim().length>2&&(e.preventDefault(),t((function(e){return[c].concat(Object(s.a)(e))})),o(""))},children:[Object(u.jsx)("h2",{children:"AddCategory"}),Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){o(e.target.value)}})]})},j=n(10),d=n(6),l=n.n(d),b=n(8),p=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,r,a,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=2zsOaXiidTT9qel6UIfyLB42de27kUoG"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,c=a.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__lightSpeedOutRight",children:[Object(u.jsx)("img",{src:n,alt:t}),Object(u.jsx)("p",{children:t})]})},O=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),a}(t),a=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:t}),c&&Object(u.jsx)("p",{children:"Loading"}),Object(u.jsx)("div",{className:"card-grid animate__animated animate__bounce animate__fadeInDown",children:a.map((function(e){return Object(u.jsx)(f,Object(j.a)({},e),e.id)}))})]})},h=function(){var e=Object(r.useState)(["Clone Wars"]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:a}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(O,{category:e},e)}))})]})};n(17);c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.91c42bfa.chunk.js.map