(this.webpackJsonpip_tracker=this.webpackJsonpip_tracker||[]).push([[0],{14:function(e,n,t){e.exports={login_form:"login_login_form__23WnE"}},2:function(e,n,t){e.exports={outer_container:"Information_outer_container__3iVmt",inner_container:"Information_inner_container__1MviD",info_container:"Information_info_container__1H1tS",title:"Information_title__nKw-_",info:"Information_info__ouxbQ"}},20:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var i=t(0),c=t(10),a=t.n(c),o=(t(20),t(5)),r=t(9),s=t.n(r),l=t.p+"static/media/icon-arrow.2eaaa5ee.svg",j=t(2),d=t.n(j),u=t(1);var h=function(e){var n=e.ipInfo;return n?Object(u.jsx)("div",{className:d.a.outer_container,children:Object(u.jsxs)("div",{className:d.a.inner_container,children:[Object(u.jsxs)("div",{className:d.a.info_container,children:[Object(u.jsx)("div",{className:d.a.title,children:"IP ADDRESS"}),Object(u.jsx)("div",{className:d.a.info,children:n.ip})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:d.a.info_container,children:[Object(u.jsx)("div",{className:d.a.title,children:"LOCATION"}),Object(u.jsxs)("div",{className:d.a.info,children:[n.location.city," ",Object(u.jsx)("br",{}),n.location.postalCode]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:d.a.info_container,children:[Object(u.jsx)("div",{className:d.a.title,children:"TIMEZONE"}),Object(u.jsxs)("div",{className:d.a.info,children:["UTC",n.location.timezone]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:d.a.info_container,children:[Object(u.jsx)("div",{className:d.a.title,children:"ISP"}),Object(u.jsx)("div",{className:d.a.info,children:n.isp})]})]})}):Object(u.jsx)("div",{children:"Loading..."})};var p=function(e){var n=e.ip,t=e.setIp,c=e.ipInfo,a=Object(i.useState)(""),r=Object(o.a)(a,2),j=r[0],d=r[1];return Object(i.useEffect)((function(){d(n)}),[n]),Object(u.jsxs)("div",{className:s.a.container,children:[Object(u.jsx)("h2",{className:s.a.heading,children:"IP Address Tracker"}),Object(u.jsxs)("div",{className:s.a.input_container,children:[Object(u.jsx)("input",{type:"text",value:j,onChange:function(e){return d(e.target.value)},placeholder:"Search for any IP addresses or domain"}),Object(u.jsx)("div",{className:s.a.search_icon,onClick:function(){""!==j.trim()&&t(j)},children:Object(u.jsx)("img",{src:l,alt:"arrow image"})})]}),Object(u.jsx)(h,{ipInfo:c})]})},f=t(13),b=t.n(f),_=t(14),m=t.n(_),O=function(e){var n=e.setUser;var t={onSuccess:function(e){console.log(e),n(e)},identifierType:"email",apiKey:"fa4f63cc-2ab3-4c58-a664-0314d52cbaeb",containerHeight:"230px"};return Object(u.jsx)("div",{className:m.a.login_form,children:Object(u.jsx)(b.a,{config:t})})},v=t(24),x=t(27),g=t(25),N=t(26),y=t(4),I=t.n(y),w=t.p+"static/media/icon-location.7e6459d2.svg";var S=function(e){var n=e.latitude,t=void 0===n?0:n,i=e.longitude,c=void 0===i?0:i;if(!t||!c)return Object(u.jsx)("div",{children:"Loading..."});var a=new I.a.Icon({iconUrl:w,iconRetinaUrl:w,iconAnchor:null,popupAnchor:null,shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new I.a.Point(35,45),className:""}),o=[t,c];return Object(u.jsxs)(v.a,{center:o,zoom:13,style:{height:"64vh"},zoomControl:!1,children:[Object(u.jsx)(x.a,{attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">\xa9 MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">\xa9 OpenStreetMap contributors</a>',url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=9AQA3kM6G5K9AzVv0GqW"}),Object(u.jsx)(g.a,{position:[t,c],icon:a,children:Object(u.jsxs)(N.a,{children:["A pretty CSS3 popup. ",Object(u.jsx)("br",{})," Easily customizable."]})})]})};var A=function(){var e=Object(i.useState)(""),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(i.useState)(null),r=Object(o.a)(a,2),s=r[0],l=r[1],j=Object(i.useState)(null),d=Object(o.a)(j,2),h=d[0],f=d[1];Object(i.useEffect)((function(){fetch("https://api.ipify.org?format=json").then((function(e){return e.json()})).then((function(e){c(e.ip)})).catch((function(e){console.log(e)}))}),[]),Object(i.useEffect)((function(){if(t){l(null);var e=!1;Array.prototype.every.call(t,(function(n){if("."===n)return!0;var t=Number(n);return Number.isNaN(t)?(e=!0,!1):void 0}));var n="https://geo.ipify.org/api/v1?apiKey=at_T4epF3FC679ZOAKYAlNtnvH1F8Jxk";n=e?"".concat(n,"&domain=").concat(t):"".concat(n,"&ip=").concat(t),fetch(n).then((function(e){return e.json()})).then((function(e){l(e)}))}}),[t]);var b=null,_=null;return s&&s.location&&(b=s.location.lat,_=s.location.lng),Object(u.jsx)("div",{className:"App",children:h?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p,{ip:t,ipInfo:s,setIp:c}),Object(u.jsx)(S,{latitude:b,longitude:_})]}):Object(u.jsx)(O,{setUser:f})})};a.a.render(Object(u.jsx)(A,{}),document.getElementById("root"))},9:function(e,n,t){e.exports={container:"Header_container__1msmH",heading:"Header_heading__3BETT",input_container:"Header_input_container__2G9oj",search_icon:"Header_search_icon__3hjQ4"}}},[[22,1,2]]]);
//# sourceMappingURL=main.3e1d362b.chunk.js.map