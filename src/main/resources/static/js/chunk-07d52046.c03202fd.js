(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07d52046"],{1681:function(t,e,s){},4385:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{"fill-height":""}},[s("v-col",{attrs:{cols:"12"}},[s("div",{staticClass:"page-body"},[s("div",{staticClass:"story pb-1"},[s("Story")],1),s("div",{staticClass:"topic pb-1"},[s("Topic")],1),s("div",{staticClass:"feed my-3"},t._l(t.feeds,(function(e){return s("Feed",{key:t.feeds.indexOf(e),attrs:{feed:e}})})),1),s("v-app-bar",{attrs:{app:"","max-height":"48px",color:"white",dense:"",bottom:""}},[s("strong",{staticClass:"mx-5"},[t._v("Copyright © GRADATION service team. All rights reserved.")]),s("v-speed-dial",{attrs:{fixed:"",bottom:"",right:"",direction:"top","open-on-hover":"",transition:"slide-y-reverse-transition"},scopedSlots:t._u([{key:"activator",fn:function(){return[s("v-btn",{attrs:{color:"blue darken-2",dark:"",fab:""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[t.fab?s("v-icon",[t._v("mdi-close")]):s("v-icon",[t._v("mdi-plus")])],1)]},proxy:!0}]),model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[s("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[s("v-btn",t._g({attrs:{fab:"",dark:"",small:"",color:"green",attrs:a},on:{click:function(e){t.dialog=!t.dialog}}},i),[s("v-icon",[t._v("mdi-pencil")])],1)]}}])},[s("span",[t._v("Create Feed")])]),s("v-btn",{attrs:{fab:"",dark:"",small:"",color:"indigo"},on:{click:function(e){return t.$router.push({name:"MainSetting"})}}},[s("v-icon",[t._v("mdi-settings")])],1)],1),s("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("strong",[t._v("피드 작성")])]),s("v-divider"),s("v-card-text",[s("div",{staticClass:"pa-3",attrs:{outlined:""}},[s("v-file-input",{attrs:{chips:"",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an image","prepend-icon":"mdi-camera",counter:"","show-size":""},model:{value:t.chosenFile,callback:function(e){t.chosenFile=e},expression:"chosenFile"}})],1),s("div",{staticClass:"pa-3"},[s("v-textarea",{attrs:{outlined:"",name:"input-7-4",placeholder:"내용 입력..."},model:{value:t.caption,callback:function(e){t.caption=e},expression:"caption"}})],1)]),s("v-divider"),s("v-card-actions",[s("v-btn",{attrs:{text:"",color:"grey darken-1"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),s("v-spacer"),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.posting({username:t.username,userImage:t.userImage,chosenFile:t.chosenFile,likes:t.likes,hasBeenLiked:t.hasBeenLiked,caption:t.caption,comments:t.comments,filter:t.filter})}}},[t._v("Post")])],1)],1)],1)],1)],1)])],1)},a=[],n=(s("4de4"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"600",tile:"",outlined:""}},[s("v-list-item",{staticClass:"px-4 py-1"},[s("v-list-item-avatar",{staticClass:"my-0 mr-4",attrs:{height:"32px",width:"32px","min-height":"32px","min-width":"32px"}},[s("v-img",{attrs:{src:t.feed.userImage,height:"32px",width:"32px"}})],1),s("v-list-item-content",{staticClass:"pa-0"},[s("v-list-item-title",{staticClass:"subtitle-2",domProps:{textContent:t._s(""+t.feed.username)}})],1)],1),s("v-divider"),s("v-img",{attrs:{src:t.feed.postImage,height:"auto"}}),s("v-card-text",{staticClass:"pb-1",domProps:{textContent:t._s(""+t.feed.caption)}}),s("v-card-actions",{staticClass:"py-0 mt-1"},[s("v-btn",{attrs:{icon:""},on:{click:t.like}},[t.feed.hasBeenLiked?s("v-icon",{attrs:{color:"red"}},[t._v("mdi-heart")]):s("v-icon",[t._v("mdi-heart-outline")])],1),s("v-btn",{attrs:{icon:""}},[s("v-icon",[t._v("mdi-share-variant")])],1)],1),s("v-card-text",{staticClass:"py-0 mb-2 font-weight-bold",domProps:{textContent:t._s("좋아요 "+t.feed.likes+"개")}}),t._l(t.feed.comments,(function(e){return s("v-card-text",{key:t.feed.comments.indexOf(e),staticClass:"py-0 mb-2 font-weight-bold"},[s("span",{domProps:{textContent:t._s(e.username+" ")}}),s("span",{staticClass:"font-weight-regular",domProps:{textContent:t._s(""+e.comment)}})])})),s("v-card-text",{staticClass:"py-0 mb-1 overline"},[t._v("방금 전")]),s("div",{staticClass:"mt-1"},[s("v-divider",{staticClass:"mb-1"}),s("v-textarea",{staticClass:"mb-1",attrs:{name:"input",rows:"1",flat:"","auto-grow":"",dense:"",solo:"",placeholder:"댓글 달기...","hide-details":""},scopedSlots:t._u([{key:"append",fn:function(){return[s("v-btn",{staticClass:"pb-1",attrs:{icon:"",depressed:"",small:""},on:{click:function(e){return t.leaveComment({username:t.username,userImage:t.userImage,comment:t.comment})}}},[s("v-icon",[t._v("mdi-send")])],1)]},proxy:!0}]),model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1)],2)}),o=[],r={data:function(){return{username:"woosteelz",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",comment:""}},props:{feed:Object},methods:{leaveComment:function(t){var e=t.username,s=t.userImage,i=t.comment;this.feed.comments.push({username:e,userImage:s,comment:i}),this.comment=""},like:function(){this.feed.hasBeenLiked?this.feed.likes--:this.feed.likes++,this.feed.hasBeenLiked=!this.feed.hasBeenLiked}}},c=r,l=s("2877"),u=s("6544"),d=s.n(u),h=s("8336"),p=s("b0af"),m=s("99d9"),f=s("ce7e"),v=s("132d"),g=s("adda"),w=s("da13"),x=s("8270"),b=s("5d23"),k=s("a844"),_=Object(l["a"])(c,n,o,!1,null,null,null),y=_.exports;d()(_,{VBtn:h["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VDivider:f["a"],VIcon:v["a"],VImg:g["a"],VListItem:w["a"],VListItemAvatar:x["a"],VListItemContent:b["a"],VListItemTitle:b["b"],VTextarea:k["a"]});var C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"600",tile:"",outlined:""}},[s("v-slide-group",{staticClass:"mx-auto",attrs:{multiple:"","show-arrows":""}},t._l(t.allUsers,(function(e){return s("v-slide-item",{key:t.allUsers.indexOf(e),staticClass:"ma-3"},[s("div",{staticClass:"btn-wrapper"},[s("v-btn",{staticClass:"button",attrs:{fab:"",icon:""}},[s("v-avatar",{staticClass:"avatar",on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[s("v-img",{attrs:{width:"48px",height:"48px",src:e.src}})],1)],1),s("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialog,callback:function(s){t.$set(e,"dialog",s)},expression:"user.dialog"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[t._v("Daily Mission is Here!")]),s("v-card-text",[t._v(" "+t._s(e.detail)+" ")]),s("v-card-actions",[s("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[t._v(" Cancel ")]),s("v-spacer"),s("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(s){e.dialog=!1,t.dialog=!0}}},[t._v(" Post ")])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-title",[s("strong",[t._v("피드 작성")])]),s("v-divider"),s("v-card-text",[s("div",{staticClass:"pa-3",attrs:{outlined:""}},[s("v-file-input",{attrs:{chips:"",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an image","prepend-icon":"mdi-camera",counter:"","show-size":""},model:{value:t.chosenFile,callback:function(e){t.chosenFile=e},expression:"chosenFile"}})],1),s("div",{staticClass:"pa-3"},[s("v-textarea",{attrs:{outlined:"",name:"input-7-4",placeholder:"내용 입력..."},model:{value:t.caption,callback:function(e){t.caption=e},expression:"caption"}})],1)]),s("v-divider"),s("v-card-actions",[s("v-btn",{attrs:{text:"",color:"grey darken-1"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),s("v-spacer"),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.posting({username:t.username,userImage:t.userImage,chosenFile:t.chosenFile,likes:t.likes,hasBeenLiked:t.hasBeenLiked,caption:t.caption,comments:t.comments,filter:t.filter})}}},[t._v("Post")])],1)],1)],1)],1)])})),1)],1)},I=[],O=s("c390"),V=[{username:"woosteelz",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",postImage:"https://www.fsnews.co.kr/news/photo/201405/10890_9259_3941.jpg",likes:36,hasBeenLiked:!1,caption:"This is my lunch today! what is yours?",comments:[{username:"ingHyunho",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",comment:"Looks delicious! I post my lunch! Please check :)"},{username:"ParadiseChoi",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",comment:"Great!"},{username:"John",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",comment:"Good! is that normal lunch in ur country?"}],filter:"perpetua"},{username:"julia",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png",postImage:"https://content.api.news/v3/images/bin/8ecda0bc5a23ede5f3b8896019bd2850",likes:20,hasBeenLiked:!1,caption:"My lunch today! Im on diet :(",comments:[{username:"Robert",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",comment:":( it's sad..."},{username:"lightMoon",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",comment:"You don't have to lose your weight! You look Soooooo good :)"}],filter:"clarendon"},{username:"puppers",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",likes:49,hasBeenLiked:!1,caption:"Current mood 🐶",comments:[{username:"socleansofreshh",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",comment:"ㅎㅇㅎㅇ"},{username:"socleansofreshh",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",comment:"ㅎㅇㅎㅇ"},{username:"socleansofreshh",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",comment:"ㅎㅇㅎㅇ"}],filter:"lofi"}],j={data:function(){return{allUsers:O["a"],username:"wosteelz",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",chosenFile:null,likes:0,hasBeenLiked:!1,caption:"",comments:[],filter:"",dialog:!1,feeds:V}},methods:{posting:function(t){var e=t.username,s=t.userImage,i=(t.chosenFile,t.likes),a=t.hasBeenLiked,n=t.caption,o=t.comments,r=t.filter;this.dialog=!1,O["a"].dialog=!1;var c=new FileReader,l="https://healthy-kids.com.au/wp-content/uploads/2013/12/10Doubledeckersandwiches.jpg";c.readAsArrayBuffer(this.chosenFile),c.onload=function(){},V.unshift({username:e,userImage:s,postImage:l,likes:i,hasBeenLiked:a,caption:n,comments:o,filter:r}),this.chosenFile=null,this.caption=null}}},$=j,A=(s("469b"),s("8212")),S=s("169a"),T=s("23a7"),z=s("7efd"),B=s("9dbe"),F=s("2fa4"),L=Object(l["a"])($,C,I,!1,null,null,null),P=L.exports;d()(L,{VAvatar:A["a"],VBtn:h["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VDialog:S["a"],VDivider:f["a"],VFileInput:T["a"],VImg:g["a"],VSlideGroup:z["b"],VSlideItem:B["a"],VSpacer:F["a"],VTextarea:k["a"]});var W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"600",tile:"",outlined:""}},[s("v-slide-group",{staticClass:"mx-auto",attrs:{multiple:"","show-arrows":""}},t._l(t.topics,(function(e){return s("v-slide-item",{key:t.topics.indexOf(e),staticClass:"ma-2",scopedSlots:t._u([{key:"default",fn:function(i){var a=i.active;return[s("v-btn",{attrs:{height:"100","input-value":a,"active-class":"purple white--text",depressed:"",rounded:""},on:{click:function(e){return t.$router.push({name:"DetailTopic"})}}},[t._v(t._s(e.topic)+" "),s("br"),t._v(" "+t._s(e.category))])]}}],null,!0)})})),1)],1)},M=[],Y={data:function(){return{topics:[{id:1,topic:"Week 6",category:"Science"},{id:2,topic:"Week 5",category:"business"},{id:3,topic:"Week 4",category:"general"},{id:4,topic:"Week 3",category:"health"},{id:5,topic:"Week 2",category:"sports "},{id:6,topic:"Week 1",category:"technology"}]}}},E=Y,N=Object(l["a"])(E,W,M,!1,null,null,null),X=N.exports;d()(N,{VBtn:h["a"],VCard:p["a"],VSlideGroup:z["b"],VSlideItem:B["a"]});s("bc3a");var H={components:{Feed:y,Story:P,Topic:X},data:function(){return{username:"wosteelz",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",chosenFile:null,likes:0,hasBeenLiked:!1,caption:"",comments:[],filter:"",dialog:!1,fab:!1,feeds:V,topics:[{id:1,topic:"COVID - 19"},{id:2,topic:"COVID - 19"},{id:3,topic:"COVID - 19"},{id:4,topic:"COVID - 19"}]}},methods:{posting:function(t){var e=t.username,s=t.userImage,i=(t.chosenFile,t.likes),a=t.hasBeenLiked,n=t.caption,o=t.comments,r=t.filter;this.dialog=!1;var c=new FileReader,l="https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg";c.readAsArrayBuffer(this.chosenFile),c.onload=function(){},V.unshift({username:e,userImage:s,postImage:l,likes:i,hasBeenLiked:a,caption:n,comments:o,filter:r}),this.chosenFile=null,this.caption=null}}},D=H,G=(s("f927"),s("40dc")),R=s("62ad"),U=s("a523"),q=s("c73b"),Q=s("3a2f"),J=Object(l["a"])(D,i,a,!1,null,null,null);e["default"]=J.exports;d()(J,{VAppBar:G["a"],VBtn:h["a"],VCard:p["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCol:R["a"],VContainer:U["a"],VDialog:S["a"],VDivider:f["a"],VFileInput:T["a"],VIcon:v["a"],VSpacer:F["a"],VSpeedDial:q["a"],VTextarea:k["a"],VTooltip:Q["a"]})},"469b":function(t,e,s){"use strict";var i=s("ee32"),a=s.n(i);a.a},"608c":function(t,e,s){},"7efd":function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));s("99af"),s("fb6a"),s("a9e3");var i=s("5530"),a=(s("608c"),s("9d26")),n=s("0789"),o=s("604c"),r=s("dc22"),c=s("c3f0"),l=s("58df"),u=Object(l["a"])(o["a"]).extend({name:"base-slide-group",directives:{Resize:r["a"],Touch:c["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:function(t){return!isNaN(parseInt(t))}},prevIcon:{type:String,default:"$prev"},showArrows:Boolean},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(i["a"])(Object(i["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,s=t.wrapper;return e>Math.abs(this.scrollOffset)+s},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset},isMobile:function(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var s="".concat(t[0].toUpperCase()).concat(t.slice(1)),i=this["has".concat(s)];return this.showArrows||i?this.$createElement(a["a"],{props:{disabled:!i}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(n["d"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,s,i){var a=s?-1:1,n=a*i+("prev"===t?-1:1)*e.wrapper;return a*Math.max(Math.min(n,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,s=t.wrapper,i=e.clientWidth-s.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-i&&(this.scrollOffset=-i):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,s,i){var a=t.clientWidth,n=s?e.content-t.offsetLeft-a:t.offsetLeft;s&&(i=-i);var o=e.wrapper+i,r=a+n,c=.4*a;return n<i?i=Math.max(n-c,0):o<r&&(i=Math.min(i-(o-r-c),e.content-e.wrapper)),s?-i:i},calculateCenteredOffset:function(t,e,s){var i=t.offsetLeft,a=t.clientWidth;if(s){var n=e.content-i-a/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,n))}var o=i+a/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,o))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,s=e.content,i=e.wrapper;t.widths={content:s?s.clientWidth:0,wrapper:i?i.clientWidth:0},t.isOverflowing=t.widths.wrapper<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e["b"]=u.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},"9dbe":function(t,e,s){"use strict";var i=s("ade3"),a=s("4e82"),n=s("58df"),o=s("d9bd"),r=s("2b0e"),c=r["a"].extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:Object(i["a"])({},this.activeClass,this.isActive)}),t):(Object(o["c"])("v-item should only contain a single element",this),t)):(Object(o["c"])("v-item is missing a default scopedSlot",this),null);var t}});Object(n["a"])(c,Object(a["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e["a"]=Object(n["a"])(c,Object(a["a"])("slideGroup")).extend({name:"v-slide-item"})},a844:function(t,e,s){"use strict";s("a9e3");var i=s("5530"),a=(s("1681"),s("8654")),n=s("58df"),o=Object(n["a"])(a["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(i["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"}},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},c390:function(t,e,s){"use strict";e["a"]=[{id:1,src:"https://www.telegraph.co.uk/content/dam/news/2016/05/08/31287666_RESTRICTED_Lunch_Box.BY41GK_Lunch_Box_trans_NvBQzQNjv4BqK50_A0VF2YxpdgOboQIZiJeR-HbUxUaCQISm67V-V0Y.jpg?imwidth=450",detail:"What is your lunch today?",dialog:!1},{id:2,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFArFlOPfgiKiQ-GpPPrVgSMI49OYrymPV9xm2fL8YyuA358gM&usqp=CAU",detail:"Where is your favorite place in your town?",dialog:!1},{id:3,src:"https://mxtrianz.me/wp-content/uploads/2017/04/restaurant-exterior-design-ideas-3-exterior-restaurant-design.jpg",detail:"Where is your favorite restaurant in your town?",dialog:!1},{id:4,src:"https://d39l2hkdp2esp1.cloudfront.net/img/photo/174702/174702_00_2x.jpg",detail:"What did you do when hang out with your friends?",dialog:!1},{id:5,src:"https://zine.istyle24.com/FileUpload/WebEdit/636240482042650000.jpg",detail:"What is your favorite clothes?",dialog:!1},{id:6,src:"https://image.chosun.com/sitedata/image/201611/03/2016110301251_0.jpg",detail:"What is your favorite song?",dialog:!1}]},c3f0:function(t,e,s){"use strict";s("4160"),s("159b");var i=s("80d2"),a=function(t){var e=t.touchstartX,s=t.touchendX,i=t.touchstartY,a=t.touchendY,n=.5,o=16;t.offsetX=s-e,t.offsetY=a-i,Math.abs(t.offsetY)<n*Math.abs(t.offsetX)&&(t.left&&s<e-o&&t.left(t),t.right&&s>e+o&&t.right(t)),Math.abs(t.offsetX)<n*Math.abs(t.offsetY)&&(t.up&&a<i-o&&t.up(t),t.down&&a>i+o&&t.down(t))};function n(t,e){var s=t.changedTouches[0];e.touchstartX=s.clientX,e.touchstartY=s.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){var s=t.changedTouches[0];e.touchendX=s.clientX,e.touchendY=s.clientY,e.end&&e.end(Object.assign(t,e)),a(e)}function r(t,e){var s=t.changedTouches[0];e.touchmoveX=s.clientX,e.touchmoveY=s.clientY,e.move&&e.move(Object.assign(t,e))}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return n(t,e)},touchend:function(t){return o(t,e)},touchmove:function(t){return r(t,e)}}}function l(t,e,s){var a=e.value,n=a.parent?t.parentElement:t,o=a.options||{passive:!0};if(n){var r=c(e.value);n._touchHandlers=Object(n._touchHandlers),n._touchHandlers[s.context._uid]=r,Object(i["s"])(r).forEach((function(t){n.addEventListener(t,r[t],o)}))}}function u(t,e,s){var a=e.value.parent?t.parentElement:t;if(a&&a._touchHandlers){var n=a._touchHandlers[s.context._uid];Object(i["s"])(n).forEach((function(t){a.removeEventListener(t,n[t])})),delete a._touchHandlers[s.context._uid]}}var d={inserted:l,unbind:u};e["a"]=d},c526:function(t,e,s){},ee32:function(t,e,s){},f927:function(t,e,s){"use strict";var i=s("c526"),a=s.n(i);a.a}}]);
//# sourceMappingURL=chunk-07d52046.c03202fd.js.map