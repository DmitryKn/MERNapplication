(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{42:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(48);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},48:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(46),r=a.n(n),c=a(47),s=a(10),l=a(0),i=a.n(l),m=(a(59),a(60),function(e){return i.a.createElement("div",{className:"avatar ".concat(e.className),style:e.style},i.a.createElement("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}}))}),u=a(42),o=a(6),f=function(e){var t=e.id,a=e.name,n=e.image,r=e.placeCount;return i.a.createElement("li",{className:"user-item"},i.a.createElement(u.a,{className:"user-item__content"},i.a.createElement(o.b,{to:"/".concat(t,"/places")},i.a.createElement("div",{className:"user-item__image"},i.a.createElement(m,{image:"".concat("https://dmitry-mern.herokuapp.com","/").concat(n),name:a})),i.a.createElement("div",{className:"user-item__info"},i.a.createElement("h2",null,a),i.a.createElement("h3",null,r," ",1===r?"Place":"Places")))))},d=(a(61),function(e){return 0===e.items.length?i.a.createElement("div",{className:"center"},i.a.createElement(u.a,null,i.a.createElement("h2",null,"No users found"))):i.a.createElement("ul",{className:"users-list"},e.items.map((function(e){return i.a.createElement(f,{key:e.id,id:e.id,image:e.image,name:e.name,placeCount:e.places.length})})))}),p=a(49),E=a(15),h=a(50);t.default=function(){var e=Object(l.useState)(),t=Object(s.a)(e,2),a=t[0],n=t[1],m=Object(h.a)(),u=m.isLoading,o=m.error,f=m.sendRequest,v=m.clearError;return Object(l.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("https://dmitry-mern.herokuapp.com/api/users/");case 3:t=e.sent,n(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[f]),i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{error:o,onClear:v}),u&&i.a.createElement("div",{className:"center"},i.a.createElement(E.a,null)),!u&&a&&i.a.createElement(d,{items:a}))}}}]);
//# sourceMappingURL=8.6cf6c2a9.chunk.js.map