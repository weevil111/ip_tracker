(this.webpackJsonpip_tracker=this.webpackJsonpip_tracker||[]).push([[0],{18:function(e,n,t){},2:function(e,n,t){e.exports={outer_container:"Information_outer_container__3iVmt",inner_container:"Information_inner_container__1MviD",info_container:"Information_info_container__1H1tS",title:"Information_title__nKw-_",info:"Information_info__ouxbQ"}},20:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t(10),c=t.n(a),r=(t(18),t(5)),o=t(9),s=t.n(o),l=t.p+"static/media/icon-arrow.2eaaa5ee.svg",j=t(2),d=t.n(j),u=t(1);var h=function(e){var n=e.ipInfo;return n?Object(u.jsx)("div",{className:d.a.outer_container,children:Object(u.jsxs)("div",{className:d.a.inner_container,children:[Object(u.jsxs)("div",{className:d.a.info_container,children:[Object(u.jsx)("div",{className:d.a.title,children:"IP ADDRESS"}),Object(u.jsx)("div",{className:d.a.info,children:n.ip})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:d.a.info_container,children:[Object(u.jsx)("div",{className:d.a.title,children:"LOCATION"}),Object(u.jsxs)("div",{className:d.a.info,children:[n.location.city," ",Object(u.jsx)("br",{}),n.location.postalCode]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:d.a.info_container,children:[Object(u.jsx)("div",{className:d.a.title,children:"TIMEZONE"}),Object(u.jsxs)("div",{className:d.a.info,children:["UTC",n.location.timezone]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:d.a.info_container,children:[Object(u.jsx)("div",{className:d.a.title,children:"ISP"}),Object(u.jsx)("div",{className:d.a.info,children:n.isp})]})]})}):Object(u.jsx)("div",{children:"Loading..."})};var p=function(e){var n=e.ip,t=e.setIp,a=e.ipInfo,c=Object(i.useState)(""),o=Object(r.a)(c,2),j=o[0],d=o[1];return Object(i.useEffect)((function(){d(n)}),[n]),Object(u.jsxs)("div",{className:s.a.container,children:[Object(u.jsx)("h2",{className:s.a.heading,children:"IP Address Tracker"}),Object(u.jsxs)("div",{className:s.a.input_container,children:[Object(u.jsx)("input",{type:"text",value:j,onChange:function(e){return d(e.target.value)},placeholder:"Search for any IP addresses or domain"}),Object(u.jsx)("div",{className:s.a.search_icon,onClick:function(){""!==j.trim()&&t(j)},children:Object(u.jsx)("img",{src:l,alt:"arrow image"})})]}),Object(u.jsx)(h,{ipInfo:a})]})},b=t(22),f=t(25),_=t(23),O=t(24),m=t(4),v=t.n(m),x=t.p+"static/media/icon-location.7e6459d2.svg";var N=function(e){var n=e.latitude,t=void 0===n?0:n,i=e.longitude,a=void 0===i?0:i;if(!t||!a)return Object(u.jsx)("div",{children:"Loading..."});var c=new v.a.Icon({iconUrl:x,iconRetinaUrl:x,iconAnchor:null,popupAnchor:null,shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new v.a.Point(35,45),className:""}),r=[t,a];return Object(u.jsxs)(b.a,{center:r,zoom:13,style:{height:"64vh"},children:[Object(u.jsx)(f.a,{attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">\xa9 MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">\xa9 OpenStreetMap contributors</a>',url:"https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=9AQA3kM6G5K9AzVv0GqW"}),Object(u.jsx)(_.a,{position:[t,a],icon:c,children:Object(u.jsxs)(O.a,{children:["A pretty CSS3 popup. ",Object(u.jsx)("br",{})," Easily customizable."]})})]})};var g=function(){var e=Object(i.useState)(""),n=Object(r.a)(e,2),t=n[0],a=n[1],c=Object(i.useState)(null),o=Object(r.a)(c,2),s=o[0],l=o[1];Object(i.useEffect)((function(){fetch("https://api.ipify.org?format=json").then((function(e){return e.json()})).then((function(e){a(e.ip)})).catch((function(e){console.log(e)}))}),[]),Object(i.useEffect)((function(){if(t){l(null);var e=!1;Array.prototype.every.call(t,(function(n){if("."===n)return!0;var t=Number(n);return Number.isNaN(t)?(e=!0,!1):void 0}));var n="https://geo.ipify.org/api/v1?apiKey=at_T4epF3FC679ZOAKYAlNtnvH1F8Jxk";n=e?"".concat(n,"&domain=").concat(t):"".concat(n,"&ip=").concat(t),fetch(n).then((function(e){return e.json()})).then((function(e){l(e)}))}}),[t]);var j=null,d=null;return s&&s.location&&(j=s.location.lat,d=s.location.lng),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(p,{ip:t,ipInfo:s,setIp:a}),Object(u.jsx)(N,{latitude:j,longitude:d})]})};c.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))},9:function(e,n,t){e.exports={container:"Header_container__1msmH",heading:"Header_heading__3BETT",input_container:"Header_input_container__2G9oj",search_icon:"Header_search_icon__3hjQ4"}}},[[20,1,2]]]);
//# sourceMappingURL=main.4aba51e3.chunk.js.map