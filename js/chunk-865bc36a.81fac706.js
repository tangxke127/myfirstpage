(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-865bc36a"],{3546:function(t,e,r){},6780:function(t,e,r){"use strict";r("3546")},b072:function(t,e,r){"use strict";r.r(e);r("7f7f");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"tags-nav"},[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.handleScroll("left")}}},[e("Icon",{attrs:{type:"ios-arrow-back",size:"16"}})],1),e("div",{ref:"tagsWrapper",staticClass:"tags-wrapper"},[e("div",{ref:"tagsWrapperScroll",staticClass:"tags-wrapper-scroll",style:{left:t.leftOffset+"px"}},[e("transition-group",{attrs:{name:"slide-fade"}},t._l(t.pageOpenedList,(function(r,a){return e("Tag",{key:"tag_"+a,ref:"tagsPageOpened",refInFor:!0,staticClass:"tag slide-fade-item",attrs:{type:"dot",closable:"",checkable:"",name:r.name,color:r.selected?"primary":"default"},on:{"on-close":function(e){return t.closeTag(a,e,r.name)},"on-change":function(e){return t.tagSelected(a)}}},[t._v(t._s(r.title))])})),1)],1)]),e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.handleScroll("right")}}},[e("Icon",{attrs:{type:"ios-arrow-forward",size:"16"}})],1),e("Dropdown",{staticClass:"dropdown-btn",attrs:{placement:"bottom-end"},on:{"on-click":t.closeTags}},[e("a",{staticStyle:{"margin-right":"0"},attrs:{href:"javascript:void(0)"}},[e("Icon",{attrs:{type:"ios-arrow-down",size:"16"}})],1),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[e("DropdownItem",{attrs:{name:"closeOthers"}},[t._v("关闭其他")]),e("DropdownItem",{attrs:{name:"closeAll"}},[t._v("关闭所有")])],1)],1)],1)},s=[];r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("6b54");function n(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=i(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var a=0,s=function(){};return{s:s,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,f=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){f=!0,n=t},f:function(){try{o||null==r.return||r.return()}finally{if(f)throw n}}}}function i(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}var f={data:function(){return{currentPageName:this.$route.name,leftOffset:0}},props:{pageOpenedList:{type:Array}},methods:{closeTags:function(t){this.$emit("closeTags",t),"closeOthers"===t&&(this.leftOffset=0)},closeTag:function(t,e,r){0!==t&&this.$emit("closeTags",t),this.currentPageName!==r&&(this.leftOffset=Math.min(0,this.leftOffset+e.target.parentNode.offsetWidth))},tagSelected:function(t){this.$emit("tagSelected",t)},checkTagIsVisible:function(t){var e={isVisible:!1,position:"left"},r=t.offsetLeft+this.leftOffset;if(r<0)return e;var a=this.$refs.tagsWrapper.offsetWidth-this.leftOffset-t.offsetWidth-t.offsetLeft;return r>=0&&a>=0?e.isVisible=!0:e.position="right",e},handleScroll:function(t){var e=this.getCriticalTag(t);switch(t){case"left":this.leftOffset=Math.min(this.$refs.tagsWrapper.offsetWidth-e.$el.offsetLeft,0);break;case"right":var r=-(e.$el.offsetLeft+e.$el.clientWidth),a=-(this.$refs.tagsWrapperScroll.offsetWidth-this.$refs.tagsWrapper.offsetWidth);this.leftOffset=Math.max(r,a);break;default:break}},getCriticalTag:function(t){var e,r,a=this.$refs.tagsPageOpened,s=n(a);try{for(s.s();!(r=s.n()).done;){var i=r.value;if(this.checkTagIsVisible(i.$el).isVisible&&(e=i,"left"===t))break}}catch(o){s.e(o)}finally{s.f()}return e},setTagsWrapperScrollPosition:function(t){var e=this.checkTagIsVisible(t);e.isVisible||"left"!==e.position?this.leftOffset=Math.min(0,-(t.offsetWidth+t.offsetLeft-this.$refs.tagsWrapper.offsetWidth+4)):this.leftOffset=-t.offsetLeft}},mounted:function(){var t=this,e=this.$refs.tagsPageOpened;setTimeout((function(){var r,a=n(e);try{for(a.s();!(r=a.n()).done;){var s=r.value;if(s.name===t.$route.name){var i=s.$el;t.setTagsWrapperScrollPosition(i);break}}}catch(o){a.e(o)}finally{a.f()}}),1)},watch:{$route:function(t){var e=this;this.currentPageName=t.name,this.$nextTick((function(){var t,r=e.$refs.tagsPageOpened,a=n(r);try{for(a.s();!(t=a.n()).done;){var s=t.value;if(s.name===e.$route.name){var i=s.$el;e.setTagsWrapperScrollPosition(i);break}}}catch(o){a.e(o)}finally{a.f()}}))}}},l=f,c=(r("6780"),r("2877")),u=Object(c["a"])(l,a,s,!1,null,"ab200490",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-865bc36a.81fac706.js.map