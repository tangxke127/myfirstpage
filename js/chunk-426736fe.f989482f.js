(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-426736fe"],{"0f76":function(e,t,a){},"113b":function(e,t,a){"use strict";a.r(t);a("7f7f");var l=function(){var e=this,t=e._self._c;return t("div",[t("Form",{staticClass:"form-body",attrs:{model:e.formItem,"label-width":100,rules:e.ruleValidate,"label-colon":""}},[t("FormItem",{attrs:{label:"搜索输入框"}},[t("Input",{staticClass:"m-input",attrs:{prefix:"ios-search",placeholder:"请输入"},model:{value:e.formItem.value1,callback:function(t){e.$set(e.formItem,"value1",t)},expression:"formItem.value1"}}),t("Button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"ios-search"}},[e._v("搜索")])],1),t("FormItem",{attrs:{label:"普通输入框",prop:"value2"}},[t("Input",{staticClass:"m-input",attrs:{placeholder:"请输入"},model:{value:e.formItem.value2,callback:function(t){e.$set(e.formItem,"value2",t)},expression:"formItem.value2"}})],1),t("FormItem",{attrs:{label:"单选选择框"}},[t("Select",{staticClass:"m-input",attrs:{placeholder:"请选择模板工具"},model:{value:e.formItem.value3,callback:function(t){e.$set(e.formItem,"value3",t)},expression:"formItem.value3"}},[t("Option",{attrs:{value:"front"}},[e._v("前端模板")]),t("Option",{attrs:{value:"back"}},[e._v("后端模板")])],1)],1),t("FormItem",{attrs:{label:"多选选择框"}},[t("Select",{staticClass:"m-input",attrs:{multiple:""},model:{value:e.formItem.value4,callback:function(t){e.$set(e.formItem,"value4",t)},expression:"formItem.value4"}},e._l(e.chooseList,(function(a){return t("Option",{key:a.value,attrs:{value:a.value}},[e._v(e._s(a.label))])})),1)],1),t("FormItem",{attrs:{label:"多行文本输入"}},[t("Input",{staticClass:"xl-input",attrs:{type:"textarea",rows:4,placeholder:"请输入文本"},model:{value:e.formItem.value6,callback:function(t){e.$set(e.formItem,"value6",t)},expression:"formItem.value6"}}),t("Tooltip",{staticStyle:{position:"absolute","margin-top":"-10px","margin-left":"5px"},attrs:{content:"提示信息",placement:"right",transfer:""}},[t("Icon",{attrs:{type:"ios-alert-outline"}})],1)],1),t("FormItem",{attrs:{label:"选择时间"}},[t("DatePicker",{staticClass:"s-input",attrs:{type:"daterange",placement:"bottom-end",placeholder:"请选择出发时间"}})],1),t("FormItem",{staticClass:"upload-form",attrs:{label:"上传附件"}},[t("div",{staticClass:"upload-file m-input"},[t("Button",{attrs:{type:"dashed"}},[t("Icon",{attrs:{type:"ios-cloud-upload-outline",size:"24"}}),t("span",{staticStyle:{position:"relative",top:"-3px"}},[e._v("上传")])],1),t("input",{ref:"uploadFile",attrs:{type:"file"},on:{change:e.changeFile}})],1),t("span",{staticClass:"notice"},[e._v("注意：申请书应以WORD形式提及，大小不超过3M")]),t("div",{staticStyle:{"margin-top":"10px"}},[""!=e.formItem.file.name?t("Tag",{attrs:{closable:""}},[e._v(e._s(e.formItem.file.name))]):e._e()],1)]),t("FormItem",{staticClass:"upload-form-img",attrs:{label:"上传图片"}},[t("Button",{staticStyle:{width:"150px"},attrs:{type:"primary"},on:{click:e.uploadCover}},[e._v("选择图片")]),t("span",{staticClass:"img-notice"},[e._v("要求：可上传jpg png gif图片 大小要求小于300k")]),t("div",{staticClass:"img-wrapper"},[t("div",[t("div",{staticClass:"add-img"},[t("span",{staticStyle:{filter:"opacity(0.5)"}},[t("Icon",{attrs:{type:"ios-add-circle",size:"40"}})],1),t("input",{ref:"coverImage",attrs:{type:"file",accept:"image/*"},on:{change:e.imgChange}})]),t("p",{staticStyle:{"text-align":"center"}},[e._v("可上传图片")])]),""!=e.formItem.cover.url?t("div",[t("div",{staticClass:"add-img",staticStyle:{position:"relative"}},[t("img",{attrs:{src:e.formItem.cover.url}}),t("Icon",{staticClass:"close-icon",attrs:{type:"md-close-circle",size:"26"}})],1),t("p",{staticStyle:{"text-align":"center"}},[e._v(e._s(null!=e.formItem.cover.file?e.formItem.cover.file.name:""))])]):e._e()])],1),t("FormItem",{attrs:{label:"单项选择框"}},[t("RadioGroup",{model:{value:e.formItem.value7,callback:function(t){e.$set(e.formItem,"value7",t)},expression:"formItem.value7"}},[t("Radio",{attrs:{label:"apple"}},[t("span",[e._v("选择一")])]),t("Radio",{attrs:{label:"android"}},[t("span",[e._v("选择二")])]),t("Radio",{attrs:{label:"windows"}},[t("span",[e._v("选择三")])])],1)],1),t("FormItem",{attrs:{label:"多项选择框"}},[t("CheckboxGroup",{model:{value:e.formItem.value8,callback:function(t){e.$set(e.formItem,"value8",t)},expression:"formItem.value8"}},[t("Checkbox",{attrs:{label:"选择一"}}),t("Checkbox",{attrs:{label:"选择二"}}),t("Checkbox",{attrs:{label:"选择三"}})],1)],1),t("FormItem",{attrs:{label:"报表单数"}},[t("InputNumber",{staticClass:"xs-input",attrs:{max:1e3,min:1},model:{value:e.formItem.value9,callback:function(t){e.$set(e.formItem,"value9",t)},expression:"formItem.value9"}})],1)],1)],1)},s=[],r={data:function(){return{formItem:{value1:"",value2:"",value3:"",value4:["one","two"],value5:"",value6:"",value7:"",value8:[],value9:0,cover:{file:null,url:"",name:""},file:{name:""}},chooseList:[{value:"one",label:"选择一"},{value:"two",label:"选择二"},{value:"three",label:"选择三"},{value:"four",label:"选择四"}],ruleValidate:{value2:[{required:!0,message:"不能为空",trigger:"blur"}],value5:[{required:!0,message:"不能为空",trigger:"blur"}]}}},methods:{changeFile:function(){var e=this.$refs.uploadFile.files[0];this.formItem.file.name=e.name},uploadCover:function(){this.$refs.coverImage.click()},imgChange:function(){var e=this.$refs.coverImage.files[0],t=e.name,a=t.substring(t.lastIndexOf(".")+1).toLowerCase();"png"===a||"jpg"===a||"gif"===a?e.size>307200?this.$Message.error("图片大小应在300k以下"):(this.formItem.cover.file=e,this.formItem.cover.name=t,this.formItem.cover.url=this.toBlobURL(e)):this.$Message.error("上传图片格式不正确")},toBlobURL:function(e){return window[window.webkitURL?"webkitURL":"URL"]["createObjectURL"](e)}}},o=r,i=(a("4ccb"),a("2877")),m=Object(i["a"])(o,l,s,!1,null,null,null);t["default"]=m.exports},"4ccb":function(e,t,a){"use strict";a("0f76")}}]);
//# sourceMappingURL=chunk-426736fe.f989482f.js.map