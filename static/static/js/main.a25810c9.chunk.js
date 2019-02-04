(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,a){e.exports=a(365)},180:function(e,t,a){},365:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(7),o=a.n(r),l=a(377),u=a(379),i=(a(176),a(178),a(180),a(378)),m=a(375),s=a(25),d=a(374),E=a(309),f=a(368),g=a(369),h=a(367),v=a(42),p=a(56),b=a.n(p),O="api/v1",j={get:function(){return b.a.get("".concat(O,"/cats")).then(function(e){return e.data})},install:function(){return b.a.post("".concat(O,"/cats/install"))},getAllOrdered:function(){return b.a.get("".concat(O,"/cats/all/ordered")).then(function(e){return e.data.cats})}},k={post:function(e){return b.a.post("".concat(O,"/vote"),e)}},y={getCount:function(){return b.a.get("".concat(O,"/count")).then(function(e){return e.data})}},w=a(373),S=function(e){var t=e.submit,a=e.loading,r=e.cats,o=Object(n.useState)(!0),l=Object(s.a)(o,2),u=l[0],i=l[1],m=Object(n.useState)(),d=Object(s.a)(m,2),E=d[0],v=d[1],p=r.cat1,b=r.cat2,O=function(e,t){var a=t.value;v(a)};Object(n.useEffect)(function(){return i(!E)},E);var j={span:12,align:"center"};return c.a.createElement(w.a,{loading:a.toString(),className:"hiddenRadio",onSubmit:function(){t({cat1:{id:p.id,voted:"1"===E},cat2:{id:b.id,voted:"2"===E}})}},c.a.createElement(f.a,null,c.a.createElement(g.a,j,c.a.createElement(w.a.Item,null,c.a.createElement("input",{id:"cat1",type:"radio",name:"radioGroup",value:"1",className:"input-hidden",checked:"1"===E,onChange:function(e){return O(0,e.target)}}),c.a.createElement("label",{htmlFor:"cat1"},c.a.createElement("img",{src:p.image,alt:"cat1",className:"1"!==E&&"unchecked"})))),c.a.createElement(g.a,j,c.a.createElement(w.a.Item,null,c.a.createElement("input",{id:"cat2",type:"radio",name:"radioGroup",value:"2",className:"input-hidden",checked:"2"===E,onChange:function(e){return O(0,e.target)}}),c.a.createElement("label",{htmlFor:"cat2"},c.a.createElement("img",{src:b.image,alt:"cat2",className:"2"!==E&&"unchecked"}))))),c.a.createElement("div",{className:"submitButton"},c.a.createElement(h.a,{block:!0,size:"large",type:"primary",htmlType:"submit",disabled:u,loading:a},"Soumettre votre choix")))},C=function(e){var t=e.newCount,a=Object(n.useState)(0),r=Object(s.a)(a,2),o=r[0],l=r[1],u=function(){y.getCount().then(function(e){return l(e.total)}).catch()};return Object(n.useEffect)(u,[]),Object(n.useEffect)(u,[t]),c.a.createElement("div",{className:"counter"},o," ",1===o&&0===o?"vote":"votes")},I=function(){var e=Object(n.useState)(!0),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),l=Object(s.a)(o,2),u=l[0],i=l[1],p=Object(n.useState)(0),b=Object(s.a)(p,2),O=b[0],y=b[1],w=Object(n.useState)({cat1:{id:0,image:""},cat2:{id:0,image:""}}),I=Object(s.a)(w,2),N=I[0],x=I[1],z=function(){r(!0),j.get().then(function(e){x({cat1:{id:e.cat1.ID,image:e.cat1.image},cat2:{id:e.cat2.ID,image:e.cat2.image}}),r(!1)}).catch(function(){return v.toast.error("un probl\xe9me est survenu avec le serveur")})};return Object(n.useEffect)(z,[]),c.a.createElement(m.a,null,c.a.createElement(m.a.Content,null,c.a.createElement(v.ToastContainer,null),c.a.createElement("div",{className:"homeTitle"},c.a.createElement("h1",null,"Votez pour votre chat pr\xe9f\xe9r\xe9!")),a?c.a.createElement(d.a,{active:!0},c.a.createElement(E.a,{tip:"Chargement..."}),c.a.createElement(f.a,null,c.a.createElement(g.a,null),c.a.createElement(g.a,null))):c.a.createElement(S,{submit:function(e){r(!0),k.post(e).then(function(){v.toast.success("Votre vote a \xe9t\xe9 pris en compte"),y(O+1),z()}).catch(function(e){return v.toast.error(e)})},loading:a,cats:N}),c.a.createElement("div",{className:"changeButton"},c.a.createElement(h.a,{block:!0,size:"large",disabled:u,ghost:!0,onClick:function(){i(!0),z(),setTimeout(function(){i(!1)},2e4)}},"Changer les images")),c.a.createElement(C,{newCount:O})))},N=a(370),x=a(372),z=[{title:"Image",key:"image",dataIndex:"image",render:function(e){return c.a.createElement(N.a,{shape:"square",size:64,src:e})},align:"center"},{title:"Nombre de votes",dataIndex:"votes",key:"votes"},{title:"Rating",dataIndex:"rating",key:"rating"}],T=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),l=Object(s.a)(o,2),u=l[0],i=l[1];return Object(n.useEffect)(function(){i(!0),j.getAllOrdered().then(function(e){i(!1),r(e)}).catch(function(){return v.toast.error("un probleme est survenu avec le serveur")})},[]),c.a.createElement("div",null,c.a.createElement(v.ToastContainer,null),c.a.createElement(x.a,{rowKey:function(e){return e.ID},key:function(e){return e.ID},loading:u,dataSource:a,columns:z}))},B=a(376),D=function(){return c.a.createElement(B.a,{to:"/"})},F=a(366),R=a(371),V=function(e){var t=e.location;return c.a.createElement(F.a,{theme:"dark",mode:"horizontal",style:{lineHeight:"64px"},defaultSelectedKeys:"/"===t.pathname?["1"]:["2"]},c.a.createElement(F.a.Item,{key:"1"},c.a.createElement(R.a,{to:"/"},"Vote")),c.a.createElement(F.a.Item,{key:"2"},c.a.createElement(R.a,{to:"/results"},"Resultats")))},A=function(){return c.a.createElement("div",{className:"myfooter"},"\xa9 Mathieu Moullec 2019")},G=m.a.Header,H=m.a.Content,J=m.a.Footer,K=function(e){var t=e.location;return c.a.createElement(m.a,null,c.a.createElement(G,null,c.a.createElement(V,{location:t})),c.a.createElement(H,null,c.a.createElement(i.a,null,c.a.createElement(u.a,{location:t,path:"/",exact:!0,component:I}),c.a.createElement(u.a,{location:t,path:"/results",exact:!0,component:T}),c.a.createElement(u.a,{path:"*",component:D}))),c.a.createElement(J,{className:"footer"},c.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(l.a,null,c.a.createElement(u.a,{component:K})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[171,2,1]]]);
//# sourceMappingURL=main.a25810c9.chunk.js.map