(this["webpackJsonpbreaking-app"]=this["webpackJsonpbreaking-app"]||[]).push([[0],{10:function(e,t,r){},11:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),c=r(4),i=r.n(c),o=r(2),s=function(e){var t=e.character;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"char-name",children:t.author}),Object(n.jsx)("img",{className:"character-img",src:t.img,alt:t.author})]})},h=function(e){var t=e.setNext;return Object(n.jsx)("div",{className:"arrows-container",children:Object(n.jsxs)("button",{onClick:function(){t(!0)},children:[Object(n.jsx)("span",{children:"N"}),Object(n.jsx)("span",{children:"ext"})]})})},j=function(e){var t=e.quote;return Object(n.jsx)("div",{children:Object(n.jsx)("p",{className:"character-quote",children:t})})},u=function(e,t,r){var n=Object(a.useState)({author:"",img:"",quote:"",loading:!0,error:!1}),c=Object(o.a)(n,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){s({author:"",img:"",quote:"",loading:!0,error:!1}),fetch(e[1]).then((function(e){return e.json()})).then((function(t){fetch(e[0]+t[0].author).then((function(e){return e.json()})).then((function(e){e.length>0?s({author:t[0].author,img:e[0].img,quote:t[0].quote,loading:!1,error:!1}):s({author:t[0].author,loading:!1,error:!0}),r(!1)}))}))}),[t]),i},b=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),r=t[0],c=t[1],i=u(["https://www.breakingbadapi.com/api/characters?name=","https://www.breakingbadapi.com/api/quote/random?author="],r,c);return Object(n.jsxs)("div",{className:"app-wrapper",children:[Object(n.jsx)("h1",{className:"title",children:"Breaking Bad"}),Object(n.jsx)("hr",{}),i.loading?Object(n.jsx)("h1",{children:" Loading..."}):i.error?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:i.author}),Object(n.jsx)("h3",{children:" No hay informaci\xf3n para ese personaje"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(s,{character:i}),Object(n.jsx)(j,{quote:i.quote})]}),Object(n.jsx)(h,{setNext:c})]})};r(10);i.a.render(Object(n.jsx)(b,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c34380bb.chunk.js.map