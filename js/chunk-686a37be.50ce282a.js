(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-686a37be","chunk-becea1be","chunk-2d0b1e34"],{"0e3d":function(e,t,i){"use strict";i.r(t);i("ac6a");function n(e){this.biyiPrimary=e.biyiPrimary,this.biyiHover=e.biyiHover,this.biyiThead=e.biyiThead,this.biyiSecondMenu=e.biyiSecondMenu,this.biyiText=e.biyiText||"white",this.url="url("+i("2286")+") no-repeat left 0 bottom/80%",this.style="",this.biyiPrimaryEle={"border-color":[".ivu-input:hover, .ivu-page-item-active, .ivu-select-selection-focused, .ivu-select-selection:hover",".ivu-btn-primary, .ivu-radio-checked .ivu-radio-inner, .ivu-radio-wrapper-checked.ivu-radio-border",".ivu-checkbox-checked .ivu-checkbox-inner"],"background-color":[".ivu-btn-primary, .ivu-menu-dark",".main-sider, .ivu-menu-dark",".ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title","ivu-menu-submenu-title, .ivu-menu-opened .ivu-menu-submenu",".ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title",".ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu)",".ivu-checkbox-checked .ivu-checkbox-inner",".ivu-radio-inner:after, .ivu-tabs-ink-bar",".ivu-page-item-active"]},this.biyiHoverEle={"background-color":[".ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu)",".ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover",".ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover","#app .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active","#app .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover","#app .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item:hover",".ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover",".ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover",".ivu-tag-primary.ivu-tag-dot .ivu-tag-dot-inner"],color:[".ivu-tabs-nav .ivu-tabs-tab-active",".ivu-tabs-nav .ivu-tabs-tab:hover"]},this.biyiTheadEle={"background-color":[".ivu-table-row-hover td"]},this.biyiSecondMenuEle={"background-color":[".ivu-menu-opened .ivu-menu"]},this.biyiTextEle={color:[".ivu-page-item-active a, .ivu-page-item-active:hover a"]},this.biyiImgEle={background:[".main-sider"]}}n.prototype.writeStyle=function(){var e="";this.setStyle("biyiImgEle","url"),this.setStyle("biyiPrimaryEle","biyiPrimary"),this.setStyle("biyiHoverEle","biyiHover"),this.setStyle("biyiTheadEle","biyiThead"),this.setStyle("biyiSecondMenuEle","biyiSecondMenu"),this.setStyle("biyiTextEle","biyiText"),this.creatStyle(e)},n.prototype.creatStyle=function(e){var t=document.querySelector(".biyi-style");t||(t=document.createElement("style"),t.type="text/css",t.className="biyi-style"),t.innerHTML=this.style,document.getElementsByTagName("head").item(0).appendChild(t)},n.prototype.setStyle=function(e,t){var i=this;for(var n in this[e]){var r=this[e][n].length;this[e][n].forEach((function(e,t){i.style+=t===r-1?e:e+", "})),this.style=this.style+"{"+n+":"+this[t]+" !important}"}},t["default"]=n},2286:function(e,t,i){e.exports=i.p+"img/bj.47e864f3.png"},"7ca9":function(e,t,i){"use strict";i("db98")},db98:function(e,t,i){},f3cd:function(e,t,i){"use strict";i.r(t);i("7f7f");var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header-nav"},[t("Icon",{staticStyle:{cursor:"pointer"},style:e.styles,attrs:{type:"ios-menu-outline",size:"32"},on:{click:e.toggleShrink}}),t("div",{staticClass:"bread-crumb"},[t("Breadcrumb",e._l(e.currentPath,(function(i,n){return t("BreadcrumbItem",{key:n,staticStyle:{"font-size":".875rem"}},[e._v(e._s(i))])})),1)],1),t("div",{staticClass:"config-wrapper clear-float"},[t("Poptip",{attrs:{"word-wrap":"",width:"220",padding:"20px 16px",placement:"bottom"}},[t("a",{staticClass:"dark-a",attrs:{href:"javascript:void(0)"}},[t("Icon",{class:{shake:e.$store.state.shake.isshake},attrs:{type:"ios-bulb-outline",size:20}})],1),t("div",{staticClass:"api",staticStyle:{"text-align":"left","line-height":"2"},attrs:{slot:"content"},slot:"content"},[t("div",{staticClass:"help"},[e._v("使用帮助")]),t("a",{attrs:{href:"https://help.ctbiyi.com/biyi-web-vue/4.x_SUMMARY.html",target:"_blank"}},[t("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.isFullScreen,expression:"!isFullScreen"}],staticClass:"helpicon",staticStyle:{"margin-right":"5px"},attrs:{custom:"iconfont icon-caozuoshouce",size:20}}),t("span",[e._v("比翼前端模板帮助手册")])],1),t("br"),t("a",{attrs:{href:"https://help.ctbiyi.com/biyi-design/standard-detail.html",target:"_blank"}},[t("Icon",{directives:[{name:"show",rawName:"v-show",value:!e.isFullScreen,expression:"!isFullScreen"}],staticClass:"helpicon",staticStyle:{"margin-right":"5px"},attrs:{custom:"iconfont icon-guifan",size:20}}),t("span",[e._v("比翼设计交互规范")])],1)])]),t("a",{staticClass:"dark-a",attrs:{href:"javascript:void(0)"},on:{click:e.toggleFullScreen}},[t("Tooltip",{attrs:{content:e.isFullScreen?e.$t("header.exitFullscreen"):e.$t("header.fullScreen"),placement:"bottom"}},[e.isFullScreen?e._e():t("Icon",{attrs:{custom:"iconfont  icon-FullScreen",size:23}}),e.isFullScreen?t("Icon",{attrs:{custom:"iconfont  icon-ExitFullScreen",size:23}}):e._e()],1)],1),t("Dropdown",{on:{"on-click":e.setLang}},[t("a",{attrs:{href:"javascript:void(0)"}},[e._v("\n        "+e._s(e.$t("header.langLabel"))+"\n        "),t("Icon",{attrs:{type:"md-arrow-dropdown"}})],1),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[t("DropdownItem",{attrs:{name:"zh_CN"}},[e._v(e._s(this.$t("header.zhTip")))]),t("DropdownItem",{attrs:{name:"en_US"}},[e._v(e._s(this.$t("header.enTip")))]),t("DropdownItem",{attrs:{name:"ja_JP"}},[e._v(e._s(this.$t("header.jaTip")))]),t("DropdownItem",{attrs:{name:"ko_KR"}},[e._v(e._s(this.$t("header.koTip")))])],1)],1),t("Dropdown",{staticStyle:{"margin-left":"3px"},on:{"on-click":e.setTheme}},[t("a",{attrs:{href:"javascript:void(0)"}},[e._v("\n         主题\n        "),t("Icon",{attrs:{type:"md-arrow-dropdown"}})],1),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},e._l(e.themeGroup,(function(i){return t("DropdownItem",{key:i.id,attrs:{name:i.id}},[i.id==e.theme?t("Icon",{staticStyle:{"margin-left":"-12%"},attrs:{color:"green",type:"md-checkmark"}}):e._e(),t("span",[e._v(e._s(i.name))])],1)})),1)],1),t("Dropdown",{staticClass:"avator-wrapper",staticStyle:{"margin-left":"20px"},on:{"on-click":e.handleUserAction}},[t("a",{attrs:{href:"javascript:void(0)"}},[e._v("\n          "+e._s(e.userName)+"\n        "),t("Icon",{attrs:{type:"md-arrow-dropdown"}})],1),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[t("DropdownItem",{attrs:{name:"userCenter"}},[e._v(e._s(e.$t("header.userCenter")))]),t("DropdownItem",{attrs:{name:"logout"}},[e._v(e._s(e.$t("header.logout")))])],1)],1),t("img",{staticClass:"avatar",attrs:{src:e.avatorUrl,alt:""}})],1)],1)},r=[],s=i("0e3d"),u={data:function(){return{theme:"biyi-normal",browserKernel:"",canFullScreen:!1,isFullScreen:!1,themeConfig:{"biyi-blue":{name:"biyi-blue",biyiPrimary:"#378DFD",biyiHover:"#2166CB",biyiThead:"#ebf7ff",biyiSecondMenu:"#2E79E8"}},themeGroup:[{id:"biyi-normal",name:"默认"},{name:"雅蓝",id:"biyi-blue"}]}},props:{currentPath:{type:Array,default:function(){return[]}},shrink:{type:Boolean,default:!1}},computed:{userName:function(){return null!==this.$store.state.user.userInfo?"".concat(this.$store.state.user.userInfo.familyName).concat(this.$store.state.user.userInfo.name):""},avatorUrl:function(){return null!==this.$store.state.user.userInfo?this.$store.state.user.userInfo.imgPath:""},styles:function(){return{transform:this.shrink?"rotate(90deg)":"rotate(0deg)",transition:"all 0.3s ease-in-out"}}},methods:{init:function(){this.getUserInfo()},getUserInfo:function(){var e=this;this.$http.get("/api/system/cscpCurrentUserDetails").then((function(t){e.$store.commit("user/setUserInfo",t.data)})).catch()},openSetting:function(){this.isSettingOpened=!0},setLang:function(e){this.$i18n.locale=e},setTheme:function(e){if(this.theme=e,"biyi-normal"===e){var t=document.querySelector(".biyi-style");return t&&t.remove(),localStorage.removeItem("biyi-theme"),!1}var i=new s["default"](this.themeConfig[e]);i.writeStyle(),localStorage.setItem("biyi-theme",JSON.stringify(this.themeConfig[e]))},toggleFullScreen:function(){this.canFullScreen?this.isFullScreen?(this.exitFullScreen(),this.isFullScreen=!1):(this.requestFullScreen(document.body),this.isFullScreen=!0):this.$Message.warning({content:"当前浏览器暂不支持全屏模式，请切换浏览器后重新尝试！",duration:3})},requestFullScreen:function(e){var t=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;t&&t.call(e)},exitFullScreen:function(){var e=document.exitFullscreen||document.mozCancelFullScreen||document.webkitExitFullscreen||document.msExitFullscreen;e&&e.call(document)},addFullScreenListener:function(){var e=this;switch(document.onkeydown=function(t){t&&122===t.keyCode&&(t.preventDefault(),e.toggleFullScreen())},e.browserKernel){case"webkit":document.onwebkitfullscreenchange=function(){document.webkitIsFullScreen?e.isFullScreen=!0:e.isFullScreen=!1};break;case"gecko":document.onmozfullscreenchange=function(){document.mozFullScreen?e.isFullScreen=!0:e.isFullScreen=!1};break;case"trident":document.onmsfullscreenchange=function(){document.msFullscreenElement?e.isFullScreen=!0:e.isFullScreen=!1};break;case"others":document.onfullscreenchange=function(){document.fullscreen?e.isFullScreen=!0:e.isFullScreen=!1};break;default:break}},handleUserAction:function(e){switch(e){case"logout":this.$store.commit("user/logout"),this.$router.push("/login");break;case"userCenter":this.$router.push({name:"self-edit"});break;default:break}},toggleShrink:function(){this.$emit("toggleShrink")}},created:function(){this.canFullScreen=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled,document.webkitFullscreenEnabled?this.browserKernel="webkit":document.mozFullScreenEnabled?this.browserKernel="gecko":document.msFullscreenEnabled?this.browserKernel="trident":document.fullscreenEnabled&&(this.browserKernel="others"),this.canFullScreen&&this.addFullScreenListener()},mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("biyi-theme"));if(console.log(t),t){this.$nextTick((function(){e.theme=t.name}));var i=new s["default"](t);i.writeStyle()}},destroyed:function(){switch(document.onkeydown=null,this.browserKernel){case"webkit":document.onwebkitfullscreenchange=null;break;case"gecko":document.onmozfullscreenchange=null;break;case"trident":document.onmsfullscreenchange=null;break;case"others":document.onfullscreenchange=null;break;default:break}}},a=u,o=(i("7ca9"),i("2877")),l=Object(o["a"])(a,n,r,!1,null,"d0eaea00",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-686a37be.50ce282a.js.map