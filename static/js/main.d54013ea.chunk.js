(this["webpackJsonpyoutube-downloader"]=this["webpackJsonpyoutube-downloader"]||[]).push([[0],{15:function(e,t,a){e.exports=a(40)},20:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/youtube.565fbb54.png"},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(14),l=a.n(i),c=(a(20),a(2));function r(){return o.a.createElement("div",null,o.a.createElement("img",{className:"logo",src:a(21),alt:"LOGO"}))}var u=a(3),s=a.n(u);function d(e){var t=e.videoId,a=e.setVideoId,i=e.setMediaInfo,l=e.setThumbnail,c=e.setShowInfo,r=e.setInputText,u=e.inputText;return Object(n.useEffect)((function(){s.a.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=".concat(t,"&key=AIzaSyBgk17YpqGq9ftG32oY9n3OLpqgmyXb8wk")).then((function(e){i(e.data.items[0].snippet),l(e.data.items[0].snippet.thumbnails.standard.url),c(!0),console.log("hi")})).catch((function(e){return console.log("error")}))}),[t]),o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("input",{type:"text",onChange:function(e){r(e.target.value)},placeholder:"Enter the link"}),o.a.createElement("button",{className:"btn",onClick:function(e){e.preventDefault(),a(u.split("v=")[1].substring(0,11)),r("")},type:"submit"},"Search Url")))}var m=a(4);function p(e){var t=e.videoId,a=e.setVideoId,n=e.setMediaInfo,i=e.setThumbnail,l=e.setShowInfo,c=e.setInputText,u=e.inputText,s=e.setLoading;return o.a.createElement("div",null,o.a.createElement("main",null,o.a.createElement(m.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1}},o.a.createElement(r,null),o.a.createElement(d,{videoId:t,setVideoId:a,setMediaInfo:n,setThumbnail:i,setShowInfo:l,setInputText:c,inputText:u,setLoading:s}))))}function b(e){var t=e.thumbnail;return o.a.createElement("div",null,o.a.createElement("img",{className:"thumbnail",src:t,alt:""}))}function f(e){var t=e.mediaInfo,a=e.videoId,i=Object(n.useState)(!1),l=Object(c.a)(i,2),r=l[0],u=l[1],d=Object(n.useState)(""),m=Object(c.a)(d,2),p=m[0],b=m[1],f=Object(n.useState)(!1),h=Object(c.a)(f,2),v=h[0],E=h[1];return s.a.defaults.baseURL="https://youtube-to-mp4.p.rapidapi.com/url=&title?url=https://www.youtube.com",o.a.createElement("div",null,o.a.createElement("p",null,"channel Title : ",t.channelTitle),o.a.createElement("p",null,"title : ",t.title),o.a.createElement("p",null,"published At: ",t.publishedAt),r?o.a.createElement("p",null,"download link :",o.a.createElement("a",{href:p},p)):o.a.createElement("button",{onClick:function(e){e.preventDefault(),E(!0),s.a.get("/watch?v=".concat(a),{headers:{"X-RapidAPI-Key":"4b68289c3dmshe170ce743f6e485p1f0d36jsn852c82c78b6b"}}).then((function(e){console.log(e.data),u(!0),b(e.data),window.location.href.indexOf("?")>-1&&window.history.pushState({},document.title,window.location.pathname)}))},className:"btn",disabled:v},v&&o.a.createElement("i",{className:"fa fa-refresh fa-spin"}),"Download"))}function h(e){var t=e.mediaInfo,a=e.thumbnail,n=e.videoId;return o.a.createElement(m.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1},className:"media-info"},o.a.createElement(b,{thumbnail:a}),o.a.createElement(f,{mediaInfo:t,videoId:n}))}function v(){return o.a.createElement("nav",null,o.a.createElement("h3",null,"Youtube Downloader"))}a(39);var E=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)([]),r=Object(c.a)(l,2),u=r[0],s=r[1],d=Object(n.useState)(""),m=Object(c.a)(d,2),b=m[0],f=m[1],E=Object(n.useState)(!1),w=Object(c.a)(E,2),I=w[0],g=w[1],y=Object(n.useState)(""),O=Object(c.a)(y,2),j=O[0],S=O[1];return o.a.createElement("div",{className:"App"},o.a.createElement(v,null),I?o.a.createElement(h,{mediaInfo:u,thumbnail:b,videoId:a}):o.a.createElement(p,{videoId:a,setVideoId:i,setMediaInfo:s,setThumbnail:f,setShowInfo:g,setInputText:S,inputText:j}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.d54013ea.chunk.js.map