(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),l=a.n(r),s=a(2),i=a.n(s),o=a(5),u=a(1);var m=function(e){var t=e.movies;return c.a.createElement("div",{className:"movie-list"},t.filter((function(e){return e.poster_path})).map((function(e){return c.a.createElement("div",{className:"card",key:e.id},c.a.createElement("img",{className:"card-image",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.poster_path),alt:e.title+" poster"}),c.a.createElement("div",{className:"card-content"},c.a.createElement("h3",{className:"card-title"},e.title),c.a.createElement("p",{className:"card-info"},"\u041f\u0440\u0435\u043c\u044c\u0435\u0440\u0430: ",function(e){var t=e.split("-");return"".concat(t[2],".").concat(t[1],".").concat(t[0])}(e.release_date)),c.a.createElement("p",{className:"card-info"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433: ",e.vote_average),c.a.createElement("p",{className:"card-description"},e.overview)))})))};var p=function(){return c.a.createElement("div",{className:"lds-ellipsis"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))};var v=function(e){for(var t=[],a=function(a){t.push(c.a.createElement("li",{className:"pagination-item",key:a},c.a.createElement("a",{className:e.currentPage==a?"pagination-link pagination-link-active":"pagination-link pagination-link-passive",href:"#",onClick:e.currentPage==a?function(e){return e.preventDefault()}:function(t){return e.changePage(t,a)}},a)))},n=1;n<=e.totalPages;n++)a(n);return c.a.createElement("ul",{className:"pagination"},t)};var d=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(void 0),s=Object(u.a)(l,2),d=s[0],f=s[1],g=Object(n.useState)(void 0),E=Object(u.a)(g,2),b=E[0],h=E[1],N=Object(n.useState)(void 0),j=Object(u.a)(N,2),O=j[0],_=j[1],k=Object(n.useState)(void 0),y=Object(u.a)(k,2),P=y[0],S=y[1],w=Object(n.useState)(void 0),x=Object(u.a)(w,2),D=x[0],M=x[1],F=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,n,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=t.target.elements.movie.value)&&f(!0),D&&f(!1),n="https://api.themoviedb.org/3/search/movie?api_key=".concat("3b33b8c8d2c93ecef17e3034abad89bd","&query=").concat(a,"&page=").concat(a!==P?_(1):O,"&include_adult=false&language=ru-RU"),e.next=7,fetch(n);case 7:return c=e.sent,e.next=10,c.json();case 10:l=e.sent,a?l.total_results?l.total_results&&(r(l.results),h(l.total_pages>10?10:l.total_pages),S(a),M(void 0),f(!1)):(r([]),h(0),M("\u0424\u0438\u043b\u044c\u043c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d."),f(!1)):(r([]),h(0),M(void 0),f(!1));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=Object(n.useRef)(),R=["\u0428\u0440\u0435\u043a","\u041f\u0438\u043b\u0430","\u0427\u0443\u0436\u043e\u0439","\u0411\u044d\u0442\u043c\u0435\u043d","\u0420\u044d\u043c\u0431\u043e","\u0422\u0435\u0440\u043c\u0438\u043d\u0430\u0442\u043e\u0440","\u0410\u043b\u0430\u0434\u0434\u0438\u043d","\u0410\u0432\u0430\u0442\u0430\u0440","\u0422\u0438\u0442\u0430\u043d\u0438\u043a","\u0421\u0438\u044f\u043d\u0438\u0435","\u0414\u0440\u0430\u043a\u0443\u043b\u0430"],q=R[Math.floor(Math.random()*R.length)];return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"search-form",onSubmit:F},c.a.createElement("input",{className:"search-input",type:"text",name:"movie",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \xab".concat(q,"\xbb"),autoFocus:!0}),c.a.createElement("button",{className:"search-btn",type:"submit",ref:J},"\u041d\u0430\u0439\u0442\u0438")),D?c.a.createElement("p",{className:"error"},D):c.a.createElement(m,{movies:a}),d&&c.a.createElement(p,null),!1===d&&b>1&&c.a.createElement(v,{totalPages:b,currentPage:O,changePage:function(e,t){e.preventDefault(),_(t),r([]),setTimeout((function(){return J.current.click()}))}}))};a(12),a(13);var f=function(){return c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"header"},"Movie Db"),c.a.createElement(d,null))};l.a.render(c.a.createElement(f,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.3779d703.chunk.js.map