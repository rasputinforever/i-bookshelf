(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{138:function(e,t,a){e.exports=a(169)},167:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(47),o=a.n(l),c=a(14),u=a(73),m=a.n(u),i=function(e){var t="/api/users/"+e;return m.a.post(t)},s=function(e){return console.log("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"/")),m.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"/"))},h=function(e,t){var a="/api/users/"+e;return m()({method:"put",url:a,data:t})},E=function(e){var t="/api/users/"+e;return m.a.get(t)},f=function(e,t){var a="/api/users/"+e;return m()({method:"delete",url:a,data:{index:t}})},d=a(182),v=a(185);var b=function(e){var t=e.onChange,a=r.a.useState(""),n=Object(c.a)(a,2),l=n[0],o=n[1];return r.a.createElement(d.a,null,r.a.createElement(d.a.Field,null,r.a.createElement("label",null,"Choose your Username"),r.a.createElement("input",{value:l,onChange:function(e){o(e.target.value)},placeholder:"User Name"})),r.a.createElement(v.a,{type:"submit",onClick:function(){console.log("You clicked it!",l),i(l).then((function(e){var a=JSON.stringify({user:l,userID:e.data});localStorage.setItem("userID",a),t(e.data,l)}))}},"Submit"))},p=a(184),g=a(125),k=a(72);var S=function(e){var t=e.thumb,a=e.title,n=e.index,l=e.onDelete;return r.a.createElement(p.a,{centered:!0,style:{width:"150px"}},r.a.createElement(g.a,{src:t,wrapped:!0,ui:!1,style:{width:"100%"}}),r.a.createElement(p.a.Content,null,r.a.createElement(p.a.Description,null,a)),r.a.createElement(p.a.Content,{extra:!0},r.a.createElement(v.a,{href:"",onClick:function(){l(n)}},r.a.createElement(k.a,{name:"window close outline"}),"Remove from Shelf")))},C=a(187);var w=function(e){var t=e.userid,a=e.data,l=e.onDelete,o=r.a.useState([]),u=Object(c.a)(o,2),m=u[0],i=u[1];function s(e){f(t,e).then((function(){l(t)}))}Object(n.useEffect)((function(){i(a)}),[a]);var h=m.map((function(e,t){return r.a.createElement(S,{key:t,onDelete:s,index:t,thumb:e.thumb,title:e.title})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{as:"h2"},r.a.createElement(k.a,{name:"book"}),"Bookshelf"),r.a.createElement(p.a.Group,null,h))},B=a(188);var I=function(e){var t=e.id,a=e.title,n=e.authors,l=e.description,o=e.thumb,c=e.onSubmit;return r.a.createElement(B.a,{className:"searchBook",columns:"equal",stackable:!0},r.a.createElement(B.a.Column,{width:4},r.a.createElement(g.a,{src:o,alt:a}),r.a.createElement(v.a,{onClick:function(){c({bookid:t,title:a,author:n,description:l,thumb:o})}},"Add to Shelf")),r.a.createElement(B.a.Column,null,r.a.createElement(C.a,{as:"h2"},a,n?r.a.createElement("span",null," by ",n):r.a.createElement(r.a.Fragment,null)),r.a.createElement("p",null,l)))};var O=function(e){var t=e.onSubmit,a=r.a.useState(""),n=Object(c.a)(a,2),l=n[0],o=n[1],u=r.a.useState(""),m=Object(c.a)(u,2),i=m[0],s=m[1];function h(e){switch(e.target.name){case"title":o(e.target.value);break;case"author":s(e.target.value)}}return r.a.createElement(d.a,{color:"red"},r.a.createElement(C.a,{as:"h2"},r.a.createElement(k.a,{name:"search"}),"Book Search"),r.a.createElement(d.a.Field,null,r.a.createElement("label",null,"Book Title"),r.a.createElement("input",{value:l,name:"title",onChange:h,placeholder:"Title"})),r.a.createElement(d.a.Field,null,r.a.createElement("label",null,"Book Author"),r.a.createElement("input",{value:i,name:"author",onChange:h,placeholder:"Author"})),r.a.createElement(v.a,{type:"submit",onClick:function(){t(l,i)}},"Submit"))};var j=function(e){var t=e.userid,a=e.onNewBook,n=r.a.useState(!1),l=Object(c.a)(n,2),o=l[0],u=l[1],m=r.a.useState([]),i=Object(c.a)(m,2),E=i[0],f=i[1];function d(e){h(t,e).then((function(){f([]),a(t)}))}var v=E.map((function(e,t){return r.a.createElement(I,{key:t,id:e.id,title:e.title,authors:e.authors,description:e.description,thumb:e.thumb,onSubmit:d})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginBottom:"30px"}},r.a.createElement(O,{onSubmit:function(e,t){var a=(e||"")+(e&&t?" ":"")+(t||"");a.replace(/[^a-zA-Z ]/g,"%20"),s(a).then((function(e){var t=[];e.data.items?(u(!1),e.data.items.forEach((function(e){var a="./book.PNG";e.volumeInfo.imageLinks&&(a=e.volumeInfo.imageLinks.smallThumbnail),t.push({id:e.id,title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description,thumb:a})}))):u(!0),f(t)}))}})),r.a.createElement("div",null,o?r.a.createElement("h2",null,"Nothing Found!"):v))},x=a(183),y=a(181);var F=function(e){var t=e.user,a=r.a.useState("Home"),n=Object(c.a)(a,2),l=n[0],o=n[1];function u(e){o(e.target.name)}return r.a.createElement("div",null,r.a.createElement(x.a,{fixed:"top",borderless:!0,style:{width:"100%",backgroundColor:"#40D1FF"}},r.a.createElement(x.a.Item,null,r.a.createElement(C.a,{as:"h2"},"iBookshelf"),r.a.createElement(C.a,null,t)),r.a.createElement(y.a,{item:!0,icon:"angle double down",text:"Menu"},r.a.createElement(y.a.Menu,null,r.a.createElement(y.a.Item,{name:"Home",href:"#Home",active:"Home"===l,onClick:u,icon:"home",text:"Home"}),r.a.createElement(y.a.Item,{name:"BookShelf",href:"#BookShelf",active:"BookShelf"===l,onClick:u,icon:"book",text:"Book Shelf"}),r.a.createElement(y.a.Item,{name:"Search",href:"#Search",active:"Search"===l,onClick:u,icon:"search",text:"Search"})))))},D=a(189);a(167);var N=function(e){var t=e.user,a=e.userid,l=r.a.useState([]),o=Object(c.a)(l,2),u=o[0],m=o[1];function i(e){E(e).then((function(e){m(e.data.books)}))}return Object(n.useEffect)((function(){i(a)}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{user:t}),r.a.createElement("div",{id:"Home",style:{marginBottom:"100px"}}),r.a.createElement(B.a,{stackable:!0,columns:2},r.a.createElement(B.a.Column,null,r.a.createElement(D.a,{id:"BookShelf"},r.a.createElement(w,{userid:a,data:u,onDelete:i}))),r.a.createElement(B.a.Column,null,r.a.createElement(D.a,{id:"Search"},r.a.createElement(j,{userid:a,onNewBook:i})))))};var H=function(){var e=r.a.useState(""),t=Object(c.a)(e,2),a=t[0],l=t[1],o=r.a.useState(""),u=Object(c.a)(o,2),m=u[0],i=u[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userID"));l(e.userID),i(e.user)}),[a]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null):r.a.createElement(b,{onChange:function(e,t){l(e),i(t)}}),a?r.a.createElement(N,{user:m,userid:a}):r.a.createElement(r.a.Fragment,null))};a(168);o.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.4affdec7.chunk.js.map