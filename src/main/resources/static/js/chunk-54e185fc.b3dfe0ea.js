(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54e185fc"],{"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),c=a("5530"),r=(a("4b85"),a("2b0e")),i=a("d9f7"),s=a("80d2"),o=["sm","md","lg","xl"],d=["start","end","center"];function l(t,e){return o.reduce((function(a,n){return a[t+Object(s["u"])(n)]=e(),a}),{})}var u=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:u}})),b=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},v=l("justify",(function(){return{type:String,default:null,validator:b}})),h=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},p=l("alignContent",(function(){return{type:String,default:null,validator:h}})),m={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(p)},g={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){var n=g[t];if(null!=a){if(e){var c=e.replace(t,"");n+="-".concat(c)}return n+="-".concat(a),n.toLowerCase()}}var j=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(c["a"])(Object(c["a"])(Object(c["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},f),{},{justify:{type:String,default:null,validator:b}},v),{},{alignContent:{type:String,default:null,validator:h}},p),render:function(t,e){var a=e.props,c=e.data,r=e.children,s="";for(var o in a)s+=String(a[o]);var d=j.get(s);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var n=a[t],c=y(e,t,n);c&&d.push(c)}));d.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),j.set(s,d)}(),t(a.tag,Object(i["a"])(c,{staticClass:"row",class:d}),r)}})},"16b7":function(t,e,a){"use strict";a("a9e3");var n=a("2b0e");e["a"]=n["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var a=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){a.isActive={open:!0,close:!1}[t]},n)}}})},"3c93":function(t,e,a){},"62ad":function(t,e,a){"use strict";a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0");var n=a("ade3"),c=a("5530"),r=(a("4b85"),a("2b0e")),i=a("d9f7"),s=a("80d2"),o=["sm","md","lg","xl"],d=function(){return o.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),l=function(){return o.reduce((function(t,e){return t["offset"+Object(s["u"])(e)]={type:[String,Number],default:null},t}),{})}(),u=function(){return o.reduce((function(t,e){return t["order"+Object(s["u"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(d),offset:Object.keys(l),order:Object.keys(u)};function b(t,e,a){var n=t;if(null!=a&&!1!==a){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var v=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])({cols:{type:[Boolean,String,Number],default:!1}},d),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},u),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,c=e.data,r=e.children,s=(e.parent,"");for(var o in a)s+=String(a[o]);var d=v.get(s);return d||function(){var t,e;for(e in d=[],f)f[e].forEach((function(t){var n=a[t],c=b(e,t,n);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!a.cols},Object(n["a"])(t,"col-".concat(a.cols),a.cols),Object(n["a"])(t,"offset-".concat(a.offset),a.offset),Object(n["a"])(t,"order-".concat(a.order),a.order),Object(n["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),v.set(s,d)}(),t(a.tag,Object(i["a"])(c,{class:d}),r)}})},"8ce9":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return s})),a.d(e,"c",(function(){return o}));var n=a("b0af"),c=a("80d2"),r=Object(c["g"])("v-card__actions"),i=Object(c["g"])("v-card__subtitle"),s=Object(c["g"])("v-card__text"),o=Object(c["g"])("v-card__title");n["a"]},a797:function(t,e,a){"use strict";a("a9e3");var n=a("5530"),c=(a("3c93"),a("a9ad")),r=a("7560"),i=a("f2e7"),s=a("58df");e["a"]=Object(s["a"])(c["a"],r["a"],i["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(n["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}})},bb51:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","grid-list-md":""}},[a("v-row",{attrs:{dense:"",wrap:"",justify:"start",align:"start"}},t._l(t.cards,(function(e){return a("v-col",{key:t.cards.indexOf(e),attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"3",x:"12"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var c=n.hover;return[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300","max-height":"350"},on:{click:function(e){return t.$router.push({name:"MainPage"})}}},[a("div",{staticClass:"my-1 d-flex justify-end"},[a("v-img",{staticClass:"ma-2",attrs:{width:"100",height:"150",contain:"",src:e.src}}),a("v-img",{staticClass:"ma-2",attrs:{width:"100",height:"150",contain:"",src:e.src2}})],1),a("v-divider"),a("v-card-text",[a("h3",{staticClass:"title primary--text my-2",domProps:{textContent:t._s(e.title1+" &")}}),a("h3",{staticClass:"title primary--text my-2",domProps:{textContent:t._s(""+e.title2)}}),a("h4",{domProps:{textContent:t._s(""+e.descript)}}),a("h5",{staticClass:"caption grey--text text--darken-2",domProps:{textContent:t._s(""+e.major)}})]),a("v-fade-transition",[c?a("v-overlay",{attrs:{absolute:"",color:"grey"}}):t._e()],1)],1)]}}],null,!0)})],1)})),1)],1)},c=[],r={data:function(){return{cards:[{title1:"Inha High",title2:"Stanford Univ",descript:"CLS167607",major:"Sport",minor:"",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq-h20zqWDYMWeSgIm1K40VWlfIz5oCzRATMzYm88gfKrEMCku&usqp=CAU",src2:"https://w.namu.la/s/0d3b0a0db99e6f7e69020b339b629a070107c9d2122a310f6797f194b50ad782304b787e369f93a834164e7367d10e04ae13eb16ff2be8ddf0d923fb6f59801acb7ccfaa46b9a4b2f147b0ddfc93fdcdbe8d209990527ef9fede2ad994983711"},{title1:"Usin High",title2:"Oxford Univ",descript:"CLS023345",major:"Science",minor:"",src:"https://w.namu.la/s/46f46e4857a80fd2dfecb73eef27b0f084ccb49e12c409668ec7c6e34f7401f0fd4f77b00e58cfbb0f23c0dd704b0b5744cba255492ea433c9dc301087946fb314d5c821b4f1ba10a790c3a3bf967643f485f4c04d9692e4720d10a4993cba92",src2:"https://ww.namu.la/s/76c91e6718e9320fd1ec30174898a6e37f37314be00fbb2f7d86d5bce57de19729b3039aeb3dcdc582d4df80f339d7fcd8362f1fce95df182c354ee552adde469543fd51770dfb05111b023fb30835cadf14bb2d226bdd16581da4190c00462c2f367e546fb3afe3208d6320a037e378"},{title1:"Bupyeong High",title2:"Havard Univ",descript:"CLS667881",major:"Community",minor:"",src:"https://ww.namu.la/s/9b66e90e52352e88380571740e19fd3a7e526d15e2762f8d1c3c84db23c37e5fb539b81cc97b66119daa63fd66b6a879342c238016430a7fe00ebdd25b34441d09617ecd6e023da9d2018b58d5b935a7a1fafba05a01cf6c2eacdc75c673c7e6764a024b3c62c861e4362528880c895b",src2:"https://ww.namu.la/s/bab0f430c3a92b7923f2cc52a0638381419d9b4bc9c712cf72a8953431e97c20be401d7017309bc6b50ff0d45f63fe8cbd7e190ff4b7817b628f74240e448c008b207164d2414b8b2b91d672f5d3613e210b29e70cb85577e2fa4ad6180ee123213f477897ac0b3db9f7fccb4c301082"},{title1:"Yulcheon High",title2:"Beijing Univ",descript:"CLS224356",major:"Culture",minor:"",src:"https://scontent-ssn1-1.xx.fbcdn.net/v/t31.0-8/1233190_1378539029042333_1105234693_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=CIDFVg4OJgkAX93Lgvo&_nc_ht=scontent-ssn1-1.xx&oh=2ea3ca0a267f4f93df3d635dcdd71ba7&oe=5F084DD5",src2:"https://ww.namu.la/s/134c20e713d4422f80b6a19473d3a6b89fdbf335c5b856908c01a87cd5cc4f78a79e167c73f1a2b2421a3d38e955cd8e5d8b89f9b0753acc6808fbbe0cb4f8f258fa61f8f9727e2899daab01796a486414bc0a8c8bdee395f3a1cd120d564f408a973fa89ee05dc19f3c5c560280e39c"}],overlay:!1}}},i=r,s=a("2877"),o=a("6544"),d=a.n(o),l=a("b0af"),u=a("99d9"),f=a("62ad"),b=a("a523"),v=a("ce7e"),h=a("0789"),p=a("ce87"),m=a("adda"),g=a("a797"),y=a("0fd9"),j=Object(s["a"])(i,n,c,!1,null,null,null);e["default"]=j.exports;d()(j,{VCard:l["a"],VCardText:u["b"],VCol:f["a"],VContainer:b["a"],VDivider:v["a"],VFadeTransition:h["d"],VHover:p["a"],VImg:m["a"],VOverlay:g["a"],VRow:y["a"]})},ce7e:function(t,e,a){"use strict";var n=a("5530"),c=(a("8ce9"),a("7560"));e["a"]=c["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},ce87:function(t,e,a){"use strict";var n=a("16b7"),c=a("f2e7"),r=a("58df"),i=a("d9bd");e["a"]=Object(r["a"])(n["a"],c["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(i["c"])("v-hover should only contain a single element",this),t)):(Object(i["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}})}}]);
//# sourceMappingURL=chunk-54e185fc.b3dfe0ea.js.map