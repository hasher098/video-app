(this.webpackJsonpvideoapp=this.webpackJsonpvideoapp||[]).push([[0],{120:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i.n(a),c=i(20),r=i.n(c),o=(i(75),i(15)),s=i.n(o),l=i(23),d=i(36),u=i(10),j=i(122),m=i(123),b=i(126),p=i(121),f=i(124),h=i(125),v=i(42),O=i.n(v),x=i(4),g=function(e){var t=Object(a.useState)(""),i=Object(u.a)(t,2),n=i[0],c=i[1];return Object(x.jsxs)(p.a,{children:[Object(x.jsx)(j.a,{}),Object(x.jsx)(m.a,{children:Object(x.jsxs)(f.a,{children:[Object(x.jsx)(h.a,{xs:"10",children:Object(x.jsx)(b.a,{type:"text",name:"link",id:"linkId",placeholder:"Your link ",onChange:function(e){c(e.target.value)}})}),Object(x.jsxs)(h.a,{xs:"2",children:[Object(x.jsx)("button",{type:"button",className:O.a.youtubeButton,onClick:function(){e.parentYtCallback(function(e){var t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);return t&&11==t[7].length?t[7]:(console.error("bad id"),e.length>7&&e.length<12?e:void console.error("bad id"))}(n))},children:"Youtube"}),Object(x.jsx)("button",{type:"button",className:O.a.vimeoButton,onClick:function(){e.parentViCallback(function(e){var t=e.replace("https://vimeo.com/","");return t.substr(t.lastIndexOf("/")+1)}(n))},children:"Vimeo"})]})]})})]})},k=i(68),C=i(17),y=i.n(C),S=function(e){if(e)return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},w=function(e){var t=new Date(e),i=""+(t.getMonth()+1),a=""+t.getDate(),n=t.getFullYear();return i.length<2&&(i="0"+i),a.length<2&&(a="0"+a),[n,i,a].join("-")},_=i(132),F=i(27),I=i(14),B=i(33),N=function(e){var t=Object(a.useContext)(ie),i=t.deleteItem,n=t.addToFavourite,c=t.deleteFromFavourite,r=Object(a.useState)(!1),o=Object(u.a)(r,2),s=o[0],l=o[1];Object(a.useEffect)((function(){!function(){var t=localStorage.getItem("favourite");if(t){var i=JSON.parse(t).find((function(t){return e.data.id===t.id}));l(!!i)}}()}));var d=Object(a.useState)(!1),j=Object(u.a)(d,2),m=j[0],b=j[1],v=function(){return b(!m)};return Object(x.jsxs)(h.a,{className:y.a.listItem,sm:"12",children:[Object(x.jsx)(p.a,{children:Object(x.jsxs)(f.a,{children:[Object(x.jsx)(h.a,{sm:"3",children:Object(x.jsx)("img",{onClick:v,alt:e.data.imgUrl.toString(),width:"100%",src:e.data.imgUrl})}),Object(x.jsxs)(h.a,{sm:"9",children:[Object(x.jsxs)(f.a,{className:y.a.upperBox,children:[Object(x.jsx)(h.a,{sm:"12",md:"6",xl:"8",className:y.a.textInMiddle,children:e.data.name}),Object(x.jsxs)(h.a,{sm:"12",md:"6",xl:"4",className:y.a.textInMiddle,children:[Object(x.jsx)(B.a,{className:y.a.squareButton,onClick:v}),Object(x.jsx)(I.e,{className:y.a.squareButton,onClick:function(){i(e.data.id)}}),!s&&Object(x.jsx)(F.b,{className:y.a.squareButton,onClick:function(){n(e.data.id),l(!0)}}),s&&Object(x.jsx)(F.a,{className:y.a.squareButton,onClick:function(){c(e.data.id),l(!1)}})]})]}),Object(x.jsxs)(f.a,{className:y.a.detailsBar,children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(I.f,{}),S(e.data.viewCount)]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(I.d,{}),S(e.data.likeCount)]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(I.a,{}),w(e.data.addDate)]})]})]})]})}),Object(x.jsxs)(_.a,{isOpen:m,toggle:v,children:["youtube"===e.data.videoService&&Object(x.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(e.data.idFromUrl),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:e.data.idFromUrl.toString()}),"vimeo"===e.data.videoService&&Object(x.jsx)("iframe",{src:"https://player.vimeo.com/video/".concat(e.data.idFromUrl),width:"640",height:"360",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:e.data.idFromUrl.toString()})]})]})},U=i(22),M=i.n(U),D=i(127),q=i(128),T=i(129),L=function(e){var t=Object(a.useContext)(ie),i=t.deleteItem,n=t.addToFavourite,c=t.deleteFromFavourite,r=Object(a.useState)(!1),o=Object(u.a)(r,2),s=o[0],l=o[1];Object(a.useEffect)((function(){!function(){var t=localStorage.getItem("favourite");if(t){var i=JSON.parse(t).find((function(t){return e.data.id==t.id}));l(!!i)}}()}));var d=Object(a.useState)(!1),j=Object(u.a)(d,2),m=j[0],b=j[1],p=function(){return b(!m)};return Object(x.jsxs)(h.a,{sm:"12",md:"6",xl:"4",className:M.a.card,children:[Object(x.jsxs)(D.a,{style:{border:"0px",background:"transparent"},children:[Object(x.jsx)(q.a,{children:Object(x.jsx)(T.a,{tag:"h5",children:e.data.name})}),Object(x.jsx)("img",{onClick:p,width:"100%",src:e.data.imgUrl,alt:"Image"}),Object(x.jsxs)(q.a,{children:[Object(x.jsx)(h.a,{xs:"12",className:M.a.textInMiddle,children:Object(x.jsxs)(f.a,{children:[e.data.viewCount&&Object(x.jsxs)(h.a,{xs:"12",style:{padding:"0px",textAlign:"center"},children:[Object(x.jsx)(I.f,{}),S(e.data.viewCount)]}),Object(x.jsxs)(h.a,{xs:"12",style:{padding:"0px",textAlign:"center"},children:[Object(x.jsx)(I.d,{}),S(e.data.likeCount)]}),Object(x.jsxs)(h.a,{xs:"12",style:{padding:"0px",textAlign:"center"},children:[Object(x.jsx)(I.a,{}),w(e.data.addDate)]})]})}),Object(x.jsx)(f.a,{children:Object(x.jsxs)(h.a,{xs:"12",className:M.a.textInMiddle,children:[Object(x.jsx)(B.a,{className:M.a.squareButton,onClick:p}),Object(x.jsx)(I.e,{className:M.a.squareButton,onClick:function(){i(e.data.id)}}),!s&&Object(x.jsx)(F.b,{className:M.a.squareButton,onClick:function(){n(e.data.id),l(!0)}}),s&&Object(x.jsx)(F.a,{className:M.a.squareButton,onClick:function(){c(e.data.id),l(!1)}})]})})]})]}),Object(x.jsxs)(_.a,{isOpen:m,toggle:p,children:["youtube"==e.data.videoService&&Object(x.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(e.data.idFromUrl),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"}),"vimeo"==e.data.videoService&&Object(x.jsx)("iframe",{src:"https://player.vimeo.com/video/".concat(e.data.idFromUrl),width:"640",height:"360",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})]})},A=i(18),Y=i.n(A),G=i(43),J=function(e){var t=Object(a.useState)(1),i=Object(u.a)(t,2),n=i[0],c=i[1],r=Object(a.useState)(9),o=Object(u.a)(r,2),s=o[0],l=(o[1],Object(a.useState)([])),d=Object(u.a)(l,2),j=d[0],m=d[1],b=n*s,v=b-s,O=e.videoData.slice(v,b);Object(a.useEffect)((function(){for(var t=[],i=1;i<=Math.ceil(e.videoData.length/s);i++)t.push(i);c(1),m(t)}),[e.videoData,s]);var g=function(e){c(Number(e.target.id))},C=Object(a.useState)("list"),y=Object(u.a)(C,2),S=y[0],w=y[1],_=Object(a.useState)("success"),F=Object(u.a)(_,2),B=F[0],U=F[1],M=Object(a.useState)("secondary"),D=Object(u.a)(M,2),q=D[0],T=D[1],A=function(e){"list"===e.target.id&&(w("list"),U("success"),T("secondary")),"tiles"===e.target.id&&(w("tiles"),U("secondary"),T("success"))};return Object(x.jsxs)(p.a,{children:[Object(x.jsxs)(f.a,{children:[Object(x.jsxs)(h.a,{sm:"12",md:"3",className:Y.a.buttonsList,children:[Object(x.jsx)(k.a,{color:B,id:"list",onClick:A,children:"List"}),Object(x.jsx)(k.a,{color:q,id:"tiles",onClick:A,children:"Tiles"})]}),Object(x.jsx)(h.a,{sm:"12",md:"9",children:Object(x.jsxs)("ul",{className:Y.a.paginationList,children:[Object(x.jsx)("li",{onClick:function(){return c(1)},className:Y.a.paginationItem,children:Object(x.jsx)(G.a,{})}),Object(x.jsx)("li",{onClick:function(){n>1&&c(n-1)},className:Y.a.paginationItem,children:Object(x.jsx)(I.c,{})}),j.map((function(e){return Object(x.jsx)("li",{className:n==e?Y.a.chosenPage:Y.a.paginationItem,id:e.toString(),onClick:g,children:e},e)})),Object(x.jsx)("li",{onClick:function(){n<j[j.length-1]&&c(n+1)},className:Y.a.paginationItem,children:Object(x.jsx)(I.b,{})}),Object(x.jsx)("li",{onClick:function(){return c(j[j.length-1])},className:Y.a.paginationItem,children:Object(x.jsx)(G.b,{})})]})})]}),Object(x.jsxs)(f.a,{style:{listStyleType:"none"},children:[O&&"list"===S&&O.map((function(e,t){return Object(x.jsx)("li",{className:Y.a.listItem,children:Object(x.jsx)(N,{data:e},t.toString())},t.toString())})),O&&"tiles"===S&&O.map((function(e,t){return Object(x.jsx)(L,{data:e},t.toString())}))]})]})},z=function(e,t){var i=Object(a.useState)((function(){var i=localStorage.getItem(t);return null!==i?JSON.parse(i):e})),n=Object(u.a)(i,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){localStorage.setItem(t,JSON.stringify(c))}),[t,c]),[c,r]},E=i(34),V=i.n(E),P=V.a.create({baseURL:"https://youtube.googleapis.com/youtube/v3"}),R=function(){var e=Object(l.a)(s.a.mark((function e(t){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("videos?part=snippet%2CcontentDetails%2Cstatistics&id=".concat(t,"&key=").concat("AIzaSyCnhcdlvjcpxnrfL98kK_58MNoXLEEVJ8g"));case 2:if(200!==(i=e.sent).status){e.next=7;break}return e.abrupt("return",i.data.items[0]);case 7:return e.abrupt("return",Error("Bad Request"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=V.a.create({baseURL:"https://api.vimeo.com"}),W=function(){var e=Object(l.a)(s.a.mark((function e(t){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q.get("videos/".concat(t),{headers:{Authorization:"Bearer "}});case 2:if(200!==(i=e.sent).status){e.next=7;break}return e.abrupt("return",i.data);case 7:return e.abrupt("return",Error("Bad Request"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=[{id:0,viewCount:"982077422",likeCount:"12849732",name:"Ariana Grande - 7 rings (Official Video)",imgUrl:"https://i.ytimg.com/vi/QYh6mYIJG2Y/hqdefault.jpg",addDate:"Fri Apr 30 2021 02:11:33 GMT+0200 (czas \u015brodkowoeuropejski letni)",idFromUrl:"QYh6mYIJG2Y",videoService:"youtube"},{id:1,viewCount:"342132",likeCount:"41172",name:"Kizo ft. Wac Toja - NASZE LATO (prod. BeMelo)",imgUrl:"https://i.ytimg.com/vi/pDg6mV79AC4/hqdefault.jpg",addDate:"Fri Apr 30 2021 02:11:37 GMT+0200 (czas \u015brodkowoeuropejski letni)",idFromUrl:"pDg6mV79AC4",videoService:"youtube"},{id:2,viewCount:"300469904",likeCount:"6521235",name:"Ariana Grande - positions (official video)",imgUrl:"https://i.ytimg.com/vi/tcYodQoapMg/hqdefault.jpg",addDate:"Fri Apr 30 2021 02:11:43 GMT+0200 (czas \u015brodkowoeuropejski letni)",idFromUrl:"tcYodQoapMg",videoService:"youtube"},{id:3,viewCount:"30878595",likeCount:"1607128",name:"The Weeknd & Ariana Grande - Save Your Tears (Remix) (Official Video)",imgUrl:"https://i.ytimg.com/vi/LIIDh-qI9oI/hqdefault.jpg",addDate:"Fri Apr 30 2021 02:12:16 GMT+0200 (czas \u015brodkowoeuropejski letni)",idFromUrl:"LIIDh-qI9oI",videoService:"youtube"},{id:4,viewCount:"10960282",likeCount:"153578",name:"BEST OF 2010s - YEAR MIX by JAURI",imgUrl:"https://i.ytimg.com/vi/ZQ-3p-gCg9M/hqdefault.jpg",addDate:"Fri Apr 30 2021 02:12:24 GMT+0200 (czas \u015brodkowoeuropejski letni)",idFromUrl:"ZQ-3p-gCg9M",videoService:"youtube"},{id:5,viewCount:"148781588",likeCount:"1067377",name:"The Weeknd - Starboy (Live From The Victoria\u2019s Secret Fashion Show 2016 in Paris)",imgUrl:"https://i.ytimg.com/vi/vuT_bXzhqhY/hqdefault.jpg",addDate:"Fri Apr 30 2021 02:12:35 GMT+0200 (czas \u015brodkowoeuropejski letni)",idFromUrl:"vuT_bXzhqhY",videoService:"youtube"},{id:6,viewCount:"157273286",likeCount:"2135442",name:"Halsey - Without Me (Live From The Victoria\u2019s Secret 2018 Fashion Show)",imgUrl:"https://i.ytimg.com/vi/CWlbjXwUMJI/hqdefault.jpg",addDate:"Fri Apr 30 2021 02:12:41 GMT+0200 (czas \u015brodkowoeuropejski letni)",idFromUrl:"CWlbjXwUMJI",videoService:"youtube"},{id:7,viewCount:"260717174",likeCount:"3749352",name:"Doja Cat - Boss B*tch (from Birds of Prey: The Album) [Official Music Video]",imgUrl:"https://i.ytimg.com/vi/RsW66teC0BQ/hqdefault.jpg",addDate:"Fri Apr 30 2021 02:12:46 GMT+0200 (czas \u015brodkowoeuropejski letni)",idFromUrl:"RsW66teC0BQ",videoService:"youtube"},{id:8,viewCount:"815893234",likeCount:"4602393",name:"David Guetta, Bebe Rexha & J Balvin - Say My Name (Official Video)",imgUrl:"https://i.ytimg.com/vi/ft4jcPSLJfY/hqdefault.jpg",addDate:"Fri Apr 30 2021 02:12:53 GMT+0200 (czas \u015brodkowoeuropejski letni)",idFromUrl:"ft4jcPSLJfY",videoService:"youtube"},{id:9,viewCount:"981427587",likeCount:"7198504",name:"Cardi B - Bodak Yellow [OFFICIAL MUSIC VIDEO]",imgUrl:"https://i.ytimg.com/vi/PEGccV-NOm8/hqdefault.jpg",addDate:"Fri Apr 30 2021 02:12:59 GMT+0200 (czas \u015brodkowoeuropejski letni)",idFromUrl:"PEGccV-NOm8",videoService:"youtube"},{id:10,viewCount:"596346444",likeCount:"3502353",name:"Migos, Nicki Minaj, Cardi B - MotorSport (Official Video)",imgUrl:"https://i.ytimg.com/vi/9v_rtaye2yY/hqdefault.jpg",addDate:"Fri Apr 30 2021 02:13:14 GMT+0200 (czas \u015brodkowoeuropejski letni)",idFromUrl:"9v_rtaye2yY",videoService:"youtube"},{id:11,likeCount:"1000",name:"\u2014disorderly conduct\u2014",imgUrl:"https://i.vimeocdn.com/video/590340083_1280x720.jpg?r=pad",addDate:"Fri Apr 30 2021 02:13:25 GMT+0200 (czas \u015brodkowoeuropejski letni)",idFromUrl:"181696349",videoService:"vimeo"}],K=i(28),H=i.n(K),Z=i(130),$=i(133),ee=i(134),te=i(131),ie=Object(a.createContext)({deleteItem:function(e){},addToFavourite:function(e){},deleteFromFavourite:function(e){}}),ae=function(){var e=z([],"details"),t=Object(u.a)(e,2),i=t[0],n=t[1],c=z([],"favourite"),r=Object(u.a)(c,2),o=r[0],j=r[1],m=Object(a.useState)(!1),b=Object(u.a)(m,2),f=b[0],h=b[1],v=z([],"finalData"),O=Object(u.a)(v,2),k=O[0],C=O[1],y=Object(a.useState)(!1),S=Object(u.a)(y,2),w=S[0],_=S[1],F=Object(a.useState)("oldest"),I=Object(u.a)(F,2),B=I[0],N=(I[1],function(e){var t,i=localStorage.getItem("favourite");if(i){var a=JSON.parse(i),n=o.find((function(t){return t.id===e}));n&&(t=o.indexOf(n),a.splice(t,1),j(a))}}),U=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R(t).then((function(e){var a={id:i.length,viewCount:e.statistics.viewCount,likeCount:e.statistics.likeCount,name:e.snippet.title,imgUrl:e.snippet.thumbnails.high.url,addDate:Date(),idFromUrl:t,videoService:"youtube"};n((function(e){return[].concat(Object(d.a)(e),[a])}))})).catch((function(e){console.error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W(t).then((function(e){var a={id:i.length,likeCount:e.metadata.connections.likes.total,name:e.name,imgUrl:e.pictures.sizes[4].link,addDate:Date(),idFromUrl:t,videoService:"vimeo"};n((function(e){return[].concat(Object(d.a)(e),[a])}))})).catch((function(e){console.error(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){if("oldest"===e){function t(e,t){return e.id<t.id?-1:e.id>t.id?1:0}C(k.sort(t))}if("newest"===e){function t(e,t){return e.id<t.id?1:e.id>t.id?-1:0}C(k.sort(t))}};return Object(a.useEffect)((function(){C(f?o:i)}),[i,o,f]),Object(a.useEffect)((function(){C(i)}),[]),Object(a.useEffect)((function(){D(B)}),[B]),Object(x.jsx)(ie.Provider,{value:{deleteItem:function(e){var t=localStorage.getItem("details");if(t){var i=JSON.parse(t);i.splice(e,1);var a=0;i.map((function(e){e.id=a,a++})),N(e),n(i)}},addToFavourite:function(e){var t=localStorage.getItem("details");if(t){var i=JSON.parse(t);if(!o.find((function(t){return t.id===e}))){var a=i[e];a.id=i[e].id,j((function(e){return[].concat(Object(d.a)(e),[a])}))}}},deleteFromFavourite:N},children:Object(x.jsxs)(p.a,{className:"themed-container",children:[Object(x.jsx)(g,{parentYtCallback:U,parentViCallback:M}),Object(x.jsxs)("div",{className:H.a.itemsList,children:[Object(x.jsx)("button",{className:H.a.buttonItem,onClick:function(){n(X)},children:"Demo View"}),Object(x.jsx)("button",{className:H.a.buttonItem,color:"info",onClick:function(){n([]),j([])},children:"Clear List"}),Object(x.jsxs)("div",{className:H.a.buttonItem,children:["Favourite",Object(x.jsx)("input",{type:"checkbox",checked:f,onChange:function(e){h(e.target.checked)}})]}),Object(x.jsxs)(Z.a,{isOpen:w,toggle:function(){return _((function(e){return!e}))},children:[Object(x.jsx)($.a,{className:H.a.buttonItem,children:"Sort by:"}),Object(x.jsxs)(ee.a,{children:[Object(x.jsx)(te.a,{onClick:function(){D("oldest")},children:"Oldest"}),Object(x.jsx)(te.a,{onClick:function(){D("newest")},children:"Newest"})]})]})]}),Object(x.jsx)(J,{videoData:k})]})})},ne=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,135)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;i(e),a(e),n(e),c(e),r(e)}))};i(119);r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(ae,{})}),document.getElementById("root")),ne()},17:function(e,t,i){e.exports={upperBox:"listitem_upperBox__w-khZ",textInMiddle:"listitem_textInMiddle__3kV9p",detailsBar:"listitem_detailsBar__2GKHC",squareButton:"listitem_squareButton__3e2CF",listItem:"listitem_listItem__YPJxw"}},18:function(e,t,i){e.exports={paginationList:"listofvideos_paginationList__3hujj",paginationItem:"listofvideos_paginationItem__37DGG",chosenPage:"listofvideos_chosenPage__3hNWU",buttonsList:"listofvideos_buttonsList__1jPPS",listItem:"listofvideos_listItem__yQHFF",uList:"listofvideos_uList__3tMz7"}},22:function(e,t,i){e.exports={textInMiddle:"tileitem_textInMiddle__2L1yM",detailsBar:"tileitem_detailsBar__KhiDf",squareButton:"tileitem_squareButton__2tRvR",detailItem:"tileitem_detailItem__f8oMg",card:"tileitem_card__2YfrH"}},28:function(e,t,i){e.exports={buttonItem:"main_buttonItem__2Qqod",itemsList:"main_itemsList__bILJU"}},42:function(e,t,i){e.exports={youtubeButton:"textarea_youtubeButton__3F9K0",vimeoButton:"textarea_vimeoButton__Q-Mqa"}},75:function(e,t,i){}},[[120,1,2]]]);
//# sourceMappingURL=main.59ac934a.chunk.js.map