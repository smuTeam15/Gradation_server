(function(n){function e(e){for(var a,c,i=e[0],u=e[1],s=e[2],d=0,l=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(n[a]=u[a]);h&&h(e);while(l.length)l.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var n,e=0;e<r.length;e++){for(var t=r[e],a=!0,c=1;c<t.length;c++){var i=t[c];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),n=u(u.s=t[0]))}return n}var a={},c={app:0},o={app:0},r=[];function i(n){return u.p+"js/"+({setting:"setting"}[n]||n)+"."+{"chunk-d0bc5774":"7cb90069","chunk-2f445568":"e667d203","chunk-4d1d2ba4":"5d67efad","chunk-653425c9":"3cbf039d",setting:"a79468d3","chunk-6c9253a7":"2570f31d","chunk-74ecf417":"8b6206d2","chunk-3bdd1e49":"f1c04397","chunk-3dcdb441":"5404b085","chunk-4f513eda":"f4655415","chunk-ec94fb66":"8630c065","chunk-51ce56ee":"908755eb","chunk-543ff287":"2997d0c9","chunk-a339a3d6":"863d9bf4"}[n]+".js"}function u(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(n){var e=[],t={"chunk-d0bc5774":1,"chunk-2f445568":1,"chunk-4d1d2ba4":1,"chunk-653425c9":1,setting:1,"chunk-6c9253a7":1,"chunk-74ecf417":1,"chunk-3bdd1e49":1,"chunk-3dcdb441":1,"chunk-4f513eda":1,"chunk-ec94fb66":1,"chunk-51ce56ee":1,"chunk-543ff287":1,"chunk-a339a3d6":1};c[n]?e.push(c[n]):0!==c[n]&&t[n]&&e.push(c[n]=new Promise((function(e,t){for(var a="css/"+({setting:"setting"}[n]||n)+"."+{"chunk-d0bc5774":"85e964b6","chunk-2f445568":"f3be7875","chunk-4d1d2ba4":"9a2c5457","chunk-653425c9":"1d6581dc",setting:"5583a00c","chunk-6c9253a7":"9d21c0d7","chunk-74ecf417":"f79250b8","chunk-3bdd1e49":"87ed4c62","chunk-3dcdb441":"a6a6cc18","chunk-4f513eda":"e4ac7159","chunk-ec94fb66":"32112fed","chunk-51ce56ee":"b1012b12","chunk-543ff287":"2ab88d9e","chunk-a339a3d6":"4dd36b26"}[n]+".css",o=u.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===o))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===a||d===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+n+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[n],h.parentNode.removeChild(h),t(r)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){c[n]=0})));var a=o[n];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,t){a=o[n]=[e,t]}));e.push(a[2]=r);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(n);var l=new Error;s=function(e){d.onerror=d.onload=null,clearTimeout(h);var t=o[n];if(0!==t){if(t){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;l.message="Loading chunk "+n+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,t[1](l)}o[n]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(e)},u.m=n,u.c=a,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)u.d(t,a,function(e){return n[e]}.bind(null,a));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/",u.oe=function(n){throw console.error(n),n};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var h=d;r.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-app",[t("v-app-bar",{attrs:{app:"","max-height":"48px",color:"#fafafa",dense:""}},[t("v-toolbar-title",{on:{click:function(e){return e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:n.$router.push({name:"Home"})}}},[t("span",{attrs:{id:"title"}},[n._v("GRADATION")])]),t("v-spacer"),t("v-btn",{attrs:{icon:""}},[t("v-icon",[n._v("mdi-arrow-left")])],1),t("v-btn",{attrs:{icon:""}},[t("v-icon",[n._v("mdi-magnify")])],1),t("v-btn",{attrs:{icon:""}},[t("v-icon",[n._v("mdi-heart")])],1),t("v-btn",{attrs:{icon:""}},[t("v-icon",[n._v("mdi-dots-vertical")])],1)],1),t("v-content",[t("router-view")],1)],1)},o=[],r={data:function(){return{baseURL:"/"}}},i=r,u=(t("de83"),t("2877")),s=t("6544"),d=t.n(s),l=t("7496"),h=t("40dc"),p=t("8336"),f=t("a75b"),m=t("132d"),g=t("2fa4"),b=t("2a7f"),v=Object(u["a"])(i,c,o,!1,null,"16fcacca",null),k=v.exports;d()(v,{VApp:l["a"],VAppBar:h["a"],VBtn:p["a"],VContent:f["a"],VIcon:m["a"],VSpacer:g["a"],VToolbarTitle:b["a"]});var _=t("a18c"),y=(t("a4d3"),t("e01a"),t("99af"),t("2f62")),w=t("bc3a"),C=t.n(w);t("b383");a["a"].use(y["a"]);var P={headers:{"Access-Control-Allow-Origin":"*"}},S=new y["a"].Store({state:{User:{userName:"",userPicture:"",Channel:[],currentChannel:null},Posts:[],DailyMission:[],Flag:{isSigned:!1}},mutations:{loginSuccess:function(n,e){n.User.userName=e.data.userName,n.User.picture=e.data.picture,n.User.Channel=e.data.channelList,n.Flag.isSigned=!0,_["a"].push({name:"Home"})},logOut:function(n){n.User.userName="",n.User.picture="",n.User.Channel=[],n.Flag.isSigned=!1},read_channel:function(n,e){n.User.Channel=e.data},read_post:function(n,e){n.Posts=e.data},read_dailyMission:function(n,e){n.DailyMission=e.data}},actions:{loading:function(n){var e=n.commit;C.a.get("/v1/login",P).then((function(n){null!=n.data.userName?e("loginSuccess",n):_["a"].push({name:"SignIn"})})).catch((function(n){console.log(n)}))},create_channel:function(n,e){var t=n.dispatch,a=new FormData;a.append("firstSchool",e.first_school),a.append("secondSchool",e.second_school),a.append("firstPicture",e.first_picture),a.append("secondPicture",e.second_picture),a.append("description",e.description),a.append("category",e.category),C.a.post("/api/v1/channel",a,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(n){200==n.status&&(console.log(n.data),t("read_channel"))})).catch((function(n){console.log(n)}))},read_channel:function(n){var e=n.commit;C.a.get("/api/v1/channel1",P).then((function(n){200==n.status?e("read_channel",n):204==n.status||n.status})).catch((function(n){console.log(n)}))},update_channel:function(n,e){var t=n.dispatch,a={firstSchool:e.first_school,secondSchool:e.second_school,firstPicture:e.first_picture,secondPicture:e.second_picture,description:e.description,category:e.category};C.a.put('"/api/v1/channel/'.concat(channel_id,'"'),a,P).then((function(n){200==n.status&&t("read_channel")})).catch((function(n){console.log(n)}))},delete_channel:function(n){var e=n.dispatch;C.a.delete('"/api/v1/channel/'.concat(channel_id,'"'),P).then((function(n){200==n.status&&e("read_channel")})).catch((function(n){console.log(n)}))},create_post:function(n,e){var t=n.state,a=n.dispatch,c=new FormData;c.append("channelId",t.User.currentChannel),c.append("picture",e.picture),c.append("content",e.content),C.a.post("/api/v1/post",c,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(n){200==n.status?(console.log(n.data),a("read_post")):204==n.status||n.status})).catch((function(n){console.log(n)}))},read_post:function(n){var e=n.state,t=n.commit;C.a.get("/api/v1/post/"+e.User.currentChannel,P).then((function(n){200==n.status&&t("read_post",n)})).catch((function(n){console.log(n)}))},update_post:function(n,e){var t=n.dispatch,a=new FormData;a.append("channelId",state.User.currentChannel),a.append("picture",e.picture),a.append("content",e.content),C.a.put('"/api/v1/channel/'.concat(channel_id,'"'),a,P).then((function(n){200==n.status&&t("read_channel")})).catch((function(n){console.log(n)}))},delete_post:function(n){var e=n.dispatch;C.a.delete('"/api/v1/channel/'.concat(channel_id,'"'),P).then((function(n){200==n.status&&e("read_channel")})).catch((function(n){console.log(n)}))},create_dailyMission:function(n,e){var t=n.state,a=n.dispatch,c=new FormData;c.append("channelId",t.User.currentChannel),c.append("picture",e.picture),c.append("content",e.content),C.a.post("/api/v1/dailymission",c,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*"}}).then((function(n){200==n.status?(console.log(n.data),a("read_dailyMission")):204==n.status||n.status})).catch((function(n){console.log(n)}))},read_dailyMission:function(n){var e=n.state,t=n.commit;C.a.get("/api/v1/dailymission/"+e.User.currentChannel,P).then((function(n){200==n.status&&t("read_dailyMission",n)})).catch((function(n){console.log(n)}))},update_dailyMission:function(n,e){var t=n.dispatch,a=new FormData;a.append("channelId",state.User.currentChannel),a.append("picture",e.picture),a.append("content",e.content),C.a.put('"/api/v1/channel/'.concat(channel_id,'"'),a,P).then((function(n){200==n.status&&t("read_channel")})).catch((function(n){console.log(n)}))},delete_dailyMission:function(n){var e=n.dispatch;C.a.delete('"/api/v1/channel/'.concat(channel_id,'"'),P).then((function(n){200==n.status&&e("read_channel")})).catch((function(n){console.log(n)}))},create_topic:function(n,e){var t=n.state,a=n.dispatch,c={channelId:t.User.currentChannel,title:e.title,content:e.content,category:e.category};C.a.post("/api/v1/weeklytopic",c,P).then((function(n){200==n.status?(console.log(n.data),a("read_dailyMission")):204==n.status||n.status})).catch((function(n){console.log(n)}))},read_topic:function(n){var e=n.state,t=n.commit;C.a.get("/api/v1/dailymission/".concat(channel_id)+e.User.currentChannel,P).then((function(n){200==n.status&&t("read_topic",n)})).catch((function(n){console.log(n)}))},update_topic:function(n,e){var t=n.dispatch,a={channelId:state.User.currentChannel,content:e.content,title:e.title,category:e.category};C.a.put("/api/v1/dailymission/".concat(channel_id),a,P).then((function(n){200==n.status&&t("read_channel")})).catch((function(n){console.log(n)}))},delete_topic:function(n){var e=n.dispatch;C.a.delete("/api/v1/dailymission/".concat(channel_id,"/").concat(weeklyTopic_id),P).then((function(n){200==n.status&&e("read_channel")})).catch((function(n){console.log(n)}))}},modules:{}}),A=t("f309");a["a"].use(A["a"]);var O=new A["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});t("d5e8"),t("5363");a["a"].config.productionTip=!1,new a["a"]({router:_["a"],store:S,vuetify:O,render:function(n){return n(k)}}).$mount("#app")},a18c:function(n,e,t){"use strict";t("d3b7");var a=t("2b0e"),c=t("8c4f");a["a"].use(c["a"]);var o="/v1";e["a"]=new c["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/v1"},{path:"/index.html",redirect:"/v1"},{path:"/index",redirect:"/v1"},{name:"Loading",path:"/v1",component:function(){return Promise.all([t.e("chunk-d0bc5774"),t.e("chunk-a339a3d6")]).then(t.bind(null,"45d6"))}},{name:"SignIn",path:o+"/signIn",component:function(){return Promise.all([t.e("chunk-d0bc5774"),t.e("chunk-2f445568")]).then(t.bind(null,"54e2"))}},{name:"Home",path:o+"/home",component:function(){return Promise.all([t.e("chunk-d0bc5774"),t.e("chunk-4d1d2ba4"),t.e("chunk-74ecf417"),t.e("chunk-3bdd1e49"),t.e("chunk-3dcdb441")]).then(t.bind(null,"bb51"))}},{name:"MainPage",path:o+"/channel",component:function(){return Promise.all([t.e("chunk-d0bc5774"),t.e("chunk-4d1d2ba4"),t.e("chunk-74ecf417"),t.e("chunk-3bdd1e49"),t.e("chunk-ec94fb66")]).then(t.bind(null,"4385"))}},{name:"StorySetting",path:o+"/storysetting",component:function(){return Promise.all([t.e("chunk-d0bc5774"),t.e("chunk-4d1d2ba4"),t.e("chunk-653425c9"),t.e("setting")]).then(t.bind(null,"3067"))}},{name:"MainSetting",path:o+"/mainsetting",component:function(){return Promise.all([t.e("chunk-d0bc5774"),t.e("chunk-543ff287")]).then(t.bind(null,"ed5b"))}},{name:"TopicSetting",path:o+"/topicsetting",component:function(){return Promise.all([t.e("chunk-d0bc5774"),t.e("chunk-4d1d2ba4"),t.e("chunk-74ecf417"),t.e("chunk-653425c9"),t.e("chunk-51ce56ee")]).then(t.bind(null,"13ea"))}},{name:"ChannelSetting",path:o+"/channelsetting",component:function(){return Promise.all([t.e("chunk-d0bc5774"),t.e("chunk-4d1d2ba4"),t.e("chunk-74ecf417"),t.e("chunk-3bdd1e49"),t.e("chunk-4f513eda")]).then(t.bind(null,"203a"))}},{path:o+"/detailtopic",name:"DetailTopic",component:function(){return Promise.all([t.e("chunk-d0bc5774"),t.e("chunk-4d1d2ba4"),t.e("chunk-6c9253a7")]).then(t.bind(null,"acd0"))}}]})},de83:function(n,e,t){"use strict";var a=t("fb44"),c=t.n(a);c.a},fb44:function(n,e,t){}});
//# sourceMappingURL=app.6e17b831.js.map