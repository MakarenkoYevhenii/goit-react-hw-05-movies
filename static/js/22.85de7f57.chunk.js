"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[22],{3022:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});var t=n(8683),i=n(5861),a=n(885),c=n(7757),s=n.n(c),u=n(2791),o=n(501),l=n(6871),f=n(6630),p={link:"SingleFilmPage_link__14ftv",container:"SingleFilmPage_container__JuVjt",film_detail:"SingleFilmPage_film_detail__DjqZN",film_description:"SingleFilmPage_film_description__YkOxH",genresList:"SingleFilmPage_genresList__NvAG2"},m=n(184),d=function(){var e,r=(0,u.useState)({film:[],genres:[],error:null}),n=(0,a.Z)(r,2),c=n[0],d=n[1],v=(0,l.UO)().id,h=(0,l.s0)(),g=(0,l.TH)(),b=(null===(e=g.state)||void 0===e?void 0:e.from)||"/";(0,u.useEffect)((function(){var e=function(){var e=(0,i.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.HI)(v);case 3:r=e.sent,d((function(e){return(0,t.Z)((0,t.Z)({},e),{},{film:r,genres:r.genres})})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),d((function(r){return(0,t.Z)((0,t.Z)({},r),{},{error:e.t0.message})}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]);var j=c.genres.map((function(e){return(0,m.jsx)("li",{children:e.name},e.name)}));return(0,m.jsxs)(m.Fragment,{children:[c.error&&(0,m.jsx)("p",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}),(0,m.jsxs)("div",{className:p.film_detail,children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(c.film.poster_path),alt:"",width:"400px",className:p.poster}),(0,m.jsxs)("div",{className:p.film_description,children:[(0,m.jsx)("h2",{children:c.film.original_title}),(0,m.jsx)("p",{children:c.film.overview}),(0,m.jsxs)("ul",{className:p.genresList,children:[(0,m.jsx)("h2",{children:"Genres:"}),j]})]})]}),(0,m.jsxs)("div",{className:p.container,children:[(0,m.jsx)(o.rU,{to:"cast",className:p.link,children:"cast"}),(0,m.jsx)(o.rU,{to:"reviews",className:p.link,children:"reviev"})]}),(0,m.jsx)(l.j3,{}),"/"===g.pathname?"":(0,m.jsx)("button",{onClick:function(){return h(b)},children:"Go back"})]})},v=function(){return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(d,{})})}},6630:function(e,r,n){n.d(r,{HI:function(){return u},yO:function(){return o},Tn:function(){return l},n4:function(){return f}});var t=n(5861),i=n(7757),a=n.n(i),c=n(4569),s=n.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"4fbe7a50ce1a6bc10e341cdef41a29ce"}});var u=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/reviews"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(a().mark((function e(r){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie?&language=en-US&query=".concat(r,"&page=1&include_adult=false"));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},8683:function(e,r,n){function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}n.d(r,{Z:function(){return a}})}}]);
//# sourceMappingURL=22.85de7f57.chunk.js.map