(function(e){function t(t){for(var i,o,r=t[0],l=t[1],c=t[2],f=0,d=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var l=n[r];0!==a[l]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={app:0},s=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/picx/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"086a":function(e,t,n){},1850:function(e,t,n){"use strict";var i=n("c06a"),a=n.n(i);a.a},"1e5b":function(e,t,n){"use strict";var i=n("8995"),a=n.n(i);a.a},"37bb":function(e,t,n){},"480b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"layout-container"}},[n("div",{staticClass:"app-container"},[n("div",{staticClass:"app-header-container"},[n("div",{staticClass:"header-content"},[n("Header")],1)]),n("div",{staticClass:"app-main-container"},[n("div",{staticClass:"main-content"},[n("router-view")],1)])])])},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"logo",on:{click:function(t){return e.$router.push("/")}}},[n("i",{staticClass:"el-icon-picture-outline logo-icon"}),e._v(" PicX ")]),n("div",{staticClass:"user-info"},[n("span",{staticClass:"username"},[e._v(e._s(e.userConfigInfo.name?e.userConfigInfo.name:e.defaultUsername))]),n("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[n("span",{staticClass:"avatar"},[n("img",{attrs:{src:e.userConfigInfo.avatarUrl?e.userConfigInfo.avatarUrl:e.defaultAvatarUrl}})])]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"config"}},[e._v("图床配置")]),e.userConfigInfo.loggingStatus?n("el-dropdown-item",{attrs:{command:"upload"}},[e._v("图片上传 ")]):e._e(),e.userConfigInfo.loggingStatus?n("el-dropdown-item",{attrs:{command:"management"}},[e._v("图床管理 ")]):e._e(),e.userConfigInfo.loggingStatus?n("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出登录 ")]):e._e()],1)],1)],1)])},r=[],l=n("5530"),c=n("2f62"),u={name:"Header",data:function(){return{defaultUsername:"未登录",defaultAvatarUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}},watch:{},computed:Object(l["a"])({},Object(c["b"])({userConfigInfo:"getUserConfigInfo"})),mounted:function(){},methods:{handleCommand:function(e){switch(e){case"upload":this.$router.push("/");break;case"config":this.$router.push("config");break;case"management":this.$router.push("management");break;case"logout":this.logout();break}},logout:function(){this.$store.dispatch("LOGOUT")}}},f=u,d=(n("1850"),n("2877")),g=Object(d["a"])(f,o,r,!1,null,"0457cb54",null),p=g.exports,m={components:{Header:p}},h=m,I=(n("5c0b"),Object(d["a"])(h,a,s,!1,null,null,null)),C=I.exports,v=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"picx-container config-page-container"},[n("el-form",{staticClass:"config-form",attrs:{"label-width":"70px","label-position":"right"}},[n("el-form-item",{attrs:{label:"Token"}},[n("el-input",{model:{value:e.userConfigInfo.token,callback:function(t){e.$set(e.userConfigInfo,"token",t)},expression:"userConfigInfo.token"}})],1),n("el-form-item",{staticClass:"operation-btns"},[n("el-button",{on:{click:function(t){return e.reset()}}},[e._v(" 重置 ")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getUserInfo()}}},[e._v(" 确认Token ")])],1),e.userConfigInfo.owner?n("el-form-item",{attrs:{label:"用户名"}},[n("el-input",{attrs:{readonly:""},model:{value:e.userConfigInfo.owner,callback:function(t){e.$set(e.userConfigInfo,"owner",t)},expression:"userConfigInfo.owner"}})],1):e._e(),e.userConfigInfo.email?n("el-form-item",{attrs:{label:"邮箱"}},[n("el-input",{attrs:{readonly:""},model:{value:e.userConfigInfo.email,callback:function(t){e.$set(e.userConfigInfo,"email",t)},expression:"userConfigInfo.email"}})],1):e._e(),e.userConfigInfo.reposList.length?n("el-form-item",{attrs:{label:"选择仓库"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择图床仓库..."},on:{change:e.selectRepos},model:{value:e.userConfigInfo.selectedRepos,callback:function(t){e.$set(e.userConfigInfo,"selectedRepos",t)},expression:"userConfigInfo.selectedRepos"}},e._l(e.userConfigInfo.reposList,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),e.userConfigInfo.reposList.length&&e.userConfigInfo.selectedRepos?n("el-form-item",{attrs:{label:"目录方式"}},[n("el-radio-group",{on:{change:e.dirModeChange},model:{value:e.userConfigInfo.dirMode,callback:function(t){e.$set(e.userConfigInfo,"dirMode",t)},expression:"userConfigInfo.dirMode"}},[n("el-tooltip",{attrs:{content:"图片存储在 Master 分支的根目录下",placement:"top"}},[n("el-radio",{attrs:{label:"nonuseDir"}},[e._v("不使用目录")])],1),n("el-tooltip",{attrs:{content:"根据日期自动创建格式 YYYYMMDD 的目录",placement:"top"}},[n("el-radio",{attrs:{label:"autoDir"}},[e._v("自动目录")])],1),n("el-tooltip",{attrs:{content:"手动输入一个新目录",placement:"top"}},[n("el-radio",{attrs:{label:"newDir"}},[e._v("新建目录")])],1),e.userConfigInfo.dirList.length?n("el-tooltip",{attrs:{content:"选择 "+e.userConfigInfo.selectedRepos+" 仓库下的一个目录",placement:"top"}},[n("el-radio",{attrs:{label:"reposDir"}},[e._v("选择"+e._s(e.userConfigInfo.selectedRepos)+"仓库目录")])],1):e._e()],1)],1):e._e(),"autoDir"===e.userConfigInfo.dirMode?n("el-form-item",{attrs:{label:"自动目录"}},[n("el-input",{attrs:{readonly:""},model:{value:e.userConfigInfo.selectedDir,callback:function(t){e.$set(e.userConfigInfo,"selectedDir",t)},expression:"userConfigInfo.selectedDir"}})],1):e._e(),"newDir"===e.userConfigInfo.dirMode?n("el-form-item",{attrs:{label:"新建目录"}},[n("el-input",{attrs:{clearable:"",placeholder:"请输入新建的目录..."},on:{input:function(t){return e.persistUserConfigInfo()}},model:{value:e.userConfigInfo.selectedDir,callback:function(t){e.$set(e.userConfigInfo,"selectedDir",t)},expression:"userConfigInfo.selectedDir"}})],1):e._e(),e.userConfigInfo.dirList.length&&"reposDir"===e.userConfigInfo.dirMode?n("el-form-item",{attrs:{label:"选择目录"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择目录..."},on:{change:e.persistUserConfigInfo},model:{value:e.userConfigInfo.selectedDir,callback:function(t){e.$set(e.userConfigInfo,"selectedDir",t)},expression:"userConfigInfo.selectedDir"}},e._l(e.userConfigInfo.dirList,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),e.userConfigInfo.selectedRepos?n("el-form-item",{staticStyle:{float:"right"}},[n("el-button",{attrs:{type:"success"},on:{click:e.goUpload}},[e._v("上传图片 Go~")])],1):e._e()],1)],1)},_=[],D=(n("a4d3"),n("e01a"),n("99af"),n("b0c0"),n("b85c")),S={now:new Date,getYYYYMMDD:function(){var e=this.now.getFullYear(),t=this.now.getMonth()+1,n=this.now.getDate();return"".concat(e).concat(t<10?"0"+t:t).concat(n<10?"0"+n:n)}},L=S,w={name:"Config",data:function(){return{}},mounted:function(){},watch:{},computed:Object(l["a"])({},Object(c["b"])({userConfigInfo:"getUserConfigInfo"})),methods:{getUserInfo:function(){var e=this;this.userConfigInfo.token?this.$axios.get("/user",{headers:{"Content-Type":"application/json",Authorization:"token ".concat(this.userConfigInfo.token)}}).then((function(t){200===t.status&&(e.saveUserInfo(t),e.getReposList(t.data["repos_url"]))})):this.$message.warning("Token不能为空！")},saveUserInfo:function(e){this.userConfigInfo.loggingStatus=!0,this.userConfigInfo.owner=e.data["login"],this.userConfigInfo.name=e.data["name"],this.userConfigInfo.email=e.data["email"],this.userConfigInfo.avatarUrl=e.data["avatar_url"],this.persistUserConfigInfo()},getReposList:function(e){var t=this;this.$axios.get(e,{headers:{"Content-Type":"application/json",Authorization:"token ".concat(this.userConfigInfo.token)}}).then((function(e){if(200===e.status){t.userConfigInfo.reposList=[];var n,i=Object(D["a"])(e.data);try{for(i.s();!(n=i.n()).done;){var a=n.value;a.fork||t.userConfigInfo.reposList.push({value:a.name,label:a.name,desc:a.description})}}catch(s){i.e(s)}finally{i.f()}t.persistUserConfigInfo()}}))},selectRepos:function(e){this.persistUserConfigInfo(),this.getDirList(e)},getDirList:function(e){var t=this;this.$axios.get("https://api.github.com/repos/".concat(this.userConfigInfo.owner,"/").concat(e,"/contents"),{headers:{"Content-Type":"application/json",Authorization:"token ".concat(this.userConfigInfo.token)}}).then((function(e){if(200===e.status){t.userConfigInfo.dirList=[];var n,i=Object(D["a"])(e.data);try{for(i.s();!(n=i.n()).done;){var a=n.value;"dir"===a.type&&t.userConfigInfo.dirList.push({value:a.name,label:a.name})}}catch(s){i.e(s)}finally{i.f()}t.persistUserConfigInfo()}}))},dirModeChange:function(e){switch(e){case"nonuseDir":this.userConfigInfo.selectedDir="/";break;case"autoDir":this.userConfigInfo.selectedDir=L.getYYYYMMDD();break;case"newDir":this.userConfigInfo.selectedDir="";break;case"reposDir":this.userConfigInfo.selectedDir="";break}this.persistUserConfigInfo()},persistUserConfigInfo:function(){this.$store.commit("PERSIST_USER_CONFIG_INFO")},reset:function(){this.$store.commit("RESET_USER_CONFIG_INFO"),this.$store.commit("PERSIST_USER_CONFIG_INFO")},goUpload:function(){""===this.userConfigInfo.selectedDir?"reposDir"===this.userConfigInfo.dirMode?this.$message.warning("请选择 ".concat(this.userConfigInfo.selectedRepos," 仓库下的一个目录！")):"newDir"===this.userConfigInfo.dirMode?this.$message.warning("请在输入框输入一个新目录！"):this.$router.push("/"):this.$router.push("/")}}},x=w,R=(n("1e5b"),Object(d["a"])(x,b,_,!1,null,"718ccc71",null)),k=R.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload-page-container"},[e.uploadedImageList.length?n("div",{staticClass:"upload-page-left picx-container",style:{width:"30%"}},e._l(e.uploadedImageList,(function(e){return n("div",{staticClass:"uploaded-item"},[n("ImageCard",{attrs:{"image-obj":e,"is-uploaded":!0}})],1)})),0):e._e(),n("div",{staticClass:"upload-page-right picx-container",style:{width:e.uploadedImageList.length?"70%":"100%"}},[n("el-row",{staticClass:"row-item"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.uploadStatus.uploading&&100!==e.uploadStatus.progress,expression:"uploadStatus.uploading && uploadStatus.progress !== 100"}],staticClass:"upload-area",attrs:{"element-loading-text":"上传中...","element-loading-background":"rgba(0, 0, 0, 0.5)"},on:{dragover:function(e){e.preventDefault()},drop:function(t){return t.stopPropagation(),t.preventDefault(),e.onDrop(t)},paste:e.onPaste}},[n("label",{attrs:{for:"uploader"}}),n("input",{attrs:{id:"uploader",type:"file"},on:{change:e.onFileChange}}),e.imgData.base64Url?e._e():n("div",{staticClass:"tips"},[n("i",{staticClass:"icon el-icon-upload"}),n("div",{staticClass:"text"},[e._v("拖拽、粘贴、或点击此处上传")])]),e.imgData.base64Url?n("img",{attrs:{src:e.imgData.base64Url}}):e._e()])]),e.imgData.base64Url?n("el-row",{staticClass:"row-item"},[n("div",{staticClass:"upload-status"},[n("div",{staticClass:"file-status"},[n("div",{staticClass:"filename"},[e._v(e._s(e.filename.now)+" ")]),e.uploadStatus.uploading||100===e.uploadStatus.progress?e._e():n("div",{staticClass:"upload-tips wait-upload"},[e._v(" 等待上传 "),n("i",{staticClass:"el-icon-upload2"})]),e.uploadStatus.uploading&&100!==e.uploadStatus.progress?n("div",{staticClass:"upload-tips uploading"},[e._v(" 正在上传 "),n("i",{staticClass:"el-icon-loading"})]):e._e(),e.uploadStatus.uploading||100!==e.uploadStatus.progress?e._e():n("div",{staticClass:"upload-tips uploaded"},[e._v(" 上传完成 "),n("i",{staticClass:"el-icon-circle-check"})])])])]):e._e(),100===e.uploadStatus.progress?n("el-row",{staticClass:"row-item"},[n("div",{staticClass:"external-link"},[n("el-input",{ref:"GitHubExternalLinkInput",staticClass:"external-link-input",attrs:{placeholder:"复制GitHub外链...",size:"mini",readonly:""},model:{value:e.externalLink.github,callback:function(t){e.$set(e.externalLink,"github",t)},expression:"externalLink.github"}},[n("template",{slot:"prepend"},[e._v("GitHub外链")]),n("el-button",{attrs:{slot:"append",icon:"el-icon-copy-document"},on:{click:function(t){return e.copyLink("GitHub")}},slot:"append"},[e._v("复制 ")])],2),n("el-input",{ref:"CDNExternalLinkInput",staticClass:"external-link-input",attrs:{placeholder:"复制CDN外链...",size:"mini",readonly:""},model:{value:e.externalLink.cdn,callback:function(t){e.$set(e.externalLink,"cdn",t)},expression:"externalLink.cdn"}},[n("template",{slot:"prepend"},[e._v("CDN外链")]),n("el-button",{attrs:{slot:"append",icon:"el-icon-copy-document"},on:{click:function(t){return e.copyLink("CDN")}},slot:"append"},[e._v("复制 ")])],2)],1)]):e._e(),n("el-row",{staticClass:"row-item"},[n("div",{staticClass:"upload-tools"},[e.userConfigInfo.selectedRepos?n("div",{staticClass:"repos-dir-info"},[n("el-tag",{staticClass:"repos-dir-info-item"},[e._v("仓库："+e._s(e.userConfigInfo.selectedRepos))]),n("el-tag",{staticClass:"repos-dir-info-item"},[e._v("目录："+e._s(e.userConfigInfo.selectedDir))])],1):e._e(),n("UploadTools",{attrs:{"is-show-rename":""!==e.imgData.base64Url&&100!==e.uploadStatus.progress},on:{"is-set-max-size":e.onSetMaxSizeChane,"max-size":e.onMaxSizeChange,rename:e.rename,"hash-named":e.hashRename,"upload-reset":e.resetUploadInfo,"upload-file":e.uploadImage}})],1)])],1)])},O=[],E=(n("ac1f"),n("1276"),n("96cf"),n("1da1")),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isShowRename?n("div",{staticClass:"tool-item"},[n("el-switch",{attrs:{"inactive-text":"重命名"},on:{change:function(t){return e.rename()}},model:{value:e.isRename,callback:function(t){e.isRename=t},expression:"isRename"}})],1):e._e(),e.isShowRename&&e.isRename?n("div",{staticClass:"tool-item"},[n("el-input",{attrs:{placeholder:"请输入新的名字",size:"small",clearable:!0},on:{input:function(t){return e.rename()}},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}})],1):e._e(),n("div",{staticClass:"tool-item"},[n("el-switch",{attrs:{"inactive-text":"哈希命名"},on:{change:e.hashRename},model:{value:e.isHashRename,callback:function(t){e.isHashRename=t},expression:"isHashRename"}})],1),n("div",{staticClass:"tool-item operation-btn"},[n("el-button",{attrs:{plain:"",icon:"el-icon-refresh"},on:{click:e.uploadReset}},[e._v("重置")]),n("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-upload"},on:{click:e.uploadFile}},[e._v("上传")])],1)])},M=[],$={name:"UploadTools",data:function(){return{setMaxSize:!1,maxSize:200,isRename:!1,isHashRename:!0,newName:""}},props:{isShowRename:{type:Boolean,default:!1}},mounted:function(){this.hashRename(this.isHashRename),this.rename(this.isRename),this.setMaxSizeChange(this.setMaxSize),this.maxSizeChange(this.maxSize)},watch:{isShowRename:function(e){this.isRename=!1,this.newName=e?"xxx":""}},methods:{rename:function(){this.$emit("rename",{isRename:this.isRename,newName:this.newName})},hashRename:function(e){this.$emit("hash-named",e)},setMaxSizeChange:function(e){this.$emit("is-set-max-size",e)},maxSizeChange:function(e){this.$emit("max-size",e)},uploadReset:function(){this.$emit("upload-reset")},uploadFile:function(){this.$emit("upload-file")}}},T=$,j=(n("ca20"),Object(d["a"])(T,U,M,!1,null,"3abc1570",null)),A=j.exports,N=n("5c96"),G=n.n(N),P=(n("baa5"),n("d3b7"),n("25f0"),function(e){var t=e.lastIndexOf("."),n=e.substr(0,t),i=e.substr(t+1,e.length),a=Math.random().toString(36).substr(2);return{name:n,hash:a,suffix:i}}),z=function(e){return/(png|jpg|gif|jpeg|webp)$/.test(e)};function H(e,t,n){n&&n(e,t)}function F(e,t,n){var i=document.createElement("canvas"),a=i.getContext("2d"),s=e.width/e.height,o=n,r=n/s;i.width=o,i.height=r,a.fillStyle="#fff",a.fillRect(0,0,i.width,i.height),a.drawImage(e,0,0,o,r);var l=i.toDataURL(t,.75);return i=a=null,l}function Y(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e)if(z(e.type)){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){var i=this.result;if(null===n||i.length<=n)H(i,e.name,t);else{var a=new Image;a.src=i,a.onload=function(){var i=F(a,e.type,n/1024);H(i,e.name,t),a=null}}}}else G.a.Message.error("该文件不是图片格式！")}var J=Y,X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:204800;if(e.clipboardData&&e.clipboardData.items)return new Promise((function(n){for(var i=0,a=e.clipboardData.items.length;i<a;i++){var s=e.clipboardData.items[i];if("file"===s.kind){var o=s.getAsFile();J(o,(function(e,t){n({url:e,fileName:t})}),t)}}}))},V=X,B=function(e,t){var n=e.selectedDir+"/";return"nonuseDir"===e.dirMode&&(n=""),"/repos/".concat(e.owner,"/").concat(e.selectedRepos,"/contents/").concat(n).concat(t)},q=B,K=function(e,t,n){switch(e){case"github":return t["download_url"];case"cdn":return"https://cdn.jsdelivr.net/gh/".concat(n.owner,"/").concat(n.selectedRepos,"/").concat(t["path"])}},Q=K,W=function(e){var t=Object.prototype.toString.call(e).split(" ")[1];return t.substring(0,t.length-1).toLowerCase()},Z=W,ee=function(e){for(var t in e)switch(Z(e[t])){case"string":e[t]="";break;case"array":e[t]=[];break;case"number":e[t]=0;break;case"boolean":e[t]=!1;break}},te=ee,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.imageObj.deleting,expression:"imageObj.deleting"}],staticClass:"image-card",attrs:{"element-loading-text":"删除中...","element-loading-background":"rgba(0, 0, 0, 0.6)"}},[n("div",{staticClass:"image-box"},[n("img",{attrs:{src:e.imageObj.cdn_url}})]),n("div",{staticClass:"info-box"},[n("div",{staticClass:"image-info"},[n("div",{staticClass:"filename"},[e._v(e._s(e.imageObj.name))]),n("div",{staticClass:"image-operation"},[n("el-tooltip",{attrs:{content:"删除该图片",placement:"top"}},[n("i",{staticClass:"el-icon-delete",attrs:{disabled:""},on:{click:function(t){return e.deleteImage(e.imageObj)}}})]),n("el-tooltip",{attrs:{content:"复制GitHub外链",placement:"top"}},[n("div",{staticClass:"copy-url",on:{click:function(t){return e.copyExternalLink("GitHub",e.imageObj)}}},[e._v(" GitHub ")])]),n("el-tooltip",{attrs:{content:"复制CDN外链",placement:"top"}},[n("div",{staticClass:"copy-url",on:{click:function(t){return e.copyExternalLink("CDN",e.imageObj)}}},[e._v(" CDN ")])])],1)])])])},ie=[],ae={name:"ImageCard",data:function(){return{isEnableDeleted:!0}},props:{imageObj:{type:Object,default:function(){}},isUploaded:{type:Boolean,default:!1}},watch:{},computed:Object(l["a"])({},Object(c["b"])({userConfigInfo:"getUserConfigInfo"})),methods:{deleteImage:function(e){var t,n,i,a,s,o=this;e.deleting=!0,this.$axios.delete("/repos/".concat(null===(t=this.userConfigInfo)||void 0===t?void 0:t.owner,"/").concat(null===(n=this.userConfigInfo)||void 0===n?void 0:n.selectedRepos,"/contents/").concat(e.path),{headers:{"Content-Type":"application/json",Authorization:"token ".concat(null===(i=this.userConfigInfo)||void 0===i?void 0:i.token)},data:{owner:null===(a=this.userConfigInfo)||void 0===a?void 0:a.owner,repo:null===(s=this.userConfigInfo)||void 0===s?void 0:s.selectedRepos,path:e.path,message:"delete from PicX",sha:e.sha}}).then((function(t){console.log("delete res: ",t),t&&200===t.status&&(e.deleting=!1,o.$message.success("删除成功！"),o.$store.dispatch("UPLOADED_LIST_REMOVE",e),o.$store.dispatch("DIR_IMAGE_LIST_REMOVE",e))}))},copyExternalLink:function(e,t){var n="";switch(e){case"GitHub":n=t.github_url;break;case"CDN":n=t.cdn_url;break}var i=document.createElement("textarea");i.value=n,i.style.position="absolute",i.style.left="-99999px",document.body.appendChild(i),i.select(),document.execCommand("copy"),this.$message.success("".concat(e,"外链复制成功！"))}}},se=ae,oe=(n("f322"),Object(d["a"])(se,ne,ie,!1,null,"99d4f172",null)),re=oe.exports,le={name:"Upload",components:{ImageCard:re,UploadTools:A},data:function(){return{compressSize:200,imgData:{base64Content:"",base64Url:""},filename:{initName:"",prev:"",now:"",name:"",hash:"",suffix:""},setMaxSize:!1,isHashRename:!1,isRename:!1,uploadStatus:{progress:0,uploading:!1},autoUpload:!1,externalLink:{github:"",cdn:""}}},mounted:function(){},watch:{logoutStatus:function(e){e||this.resetUploadInfo()}},computed:Object(l["a"])({},Object(c["b"])({userConfigInfo:"getUserConfigInfo",logoutStatus:"getUserLoggingStatus",uploadedImageList:"getUploadedImageList"})),methods:{onSetMaxSizeChane:function(e){this.setMaxSize=e},hashRename:function(e){this.isHashRename=e,this.isHashRename?this.filename.now="".concat(this.filename.name,".").concat(this.filename.hash,".").concat(this.filename.suffix):this.filename.now="".concat(this.filename.name,".").concat(this.filename.suffix)},rename:function(e){var t=e.isRename,n=e.newName;this.filename.name=t?n:this.filename.initName,this.isHashRename?this.filename.now="".concat(this.filename.name,".").concat(this.filename.hash,".").concat(this.filename.suffix):this.filename.now="".concat(this.filename.name,".").concat(this.filename.suffix)},onMaxSizeChange:function(e){this.compressSize=e},resetUploadInfo:function(){te(this.imgData),te(this.uploadStatus),te(this.filename),te(this.externalLink)},uploadImage:function(){var e=this;if(""===this.userConfigInfo.token)return this.$message.error("请先进行图床配置！"),void this.$router.push("config");if(this.imgData.base64Content&&this.filename.now)if(this.filename.now!==this.filename.prev){this.uploadStatus.uploading=!0;var t={message:"upload from PicX",branch:"master",committer:{name:this.userConfigInfo.owner,email:this.userConfigInfo.email},content:this.imgData.base64Content};this.$axios.put(q(this.userConfigInfo,this.filename.now),t,{headers:{"Content-Type":"application/json",Authorization:"token ".concat(this.userConfigInfo.token)}}).then((function(t){console.log("res",t),201===t.status&&"Created"===t.statusText&&(e.$message.success("上传成功！"),e.uploadedHandle(t))}))}else this.$message.error("该图片已上传！");else this.$message.error("内容不能为空！")},uploadedHandle:function(e){this.uploadStatus.progress=100,this.uploadStatus.uploading=!1,this.filename.prev=this.filename.now,this.externalLink.github=Q("github",e.data.content,this.userConfigInfo),this.externalLink.cdn=Q("cdn",e.data.content,this.userConfigInfo);var t={dir:this.userConfigInfo.selectedDir,name:e.data.content.name,path:e.data.content.path,sha:e.data.content.sha,html_url:e.data.content.html_url,github_url:e.data.content["download_url"],cdn_url:this.externalLink.cdn,deleting:!1};this.$store.dispatch("UPLOADED_LIST_ADD",t),this.$store.dispatch("DIR_IMAGE_LIST_ADD_IMAGE",t)},copyLink:function(e){switch(e){case"CDN":this.$refs.CDNExternalLinkInput.select();break;case"GitHub":this.$refs.GitHubExternalLinkInput.select();break}document.execCommand("copy"),this.$message.success("".concat(e,"外链复制成功！"))},getImage:function(e,t){this.imgData.base64Url=e,this.imgData.base64Content=e.split(",")[1],te(this.uploadStatus);var n=P(t),i=n.name,a=n.hash,s=n.suffix;this.filename.name=i,this.filename.hash=a,this.filename.suffix=s,this.filename.now=this.isHashRename?"".concat(i,".").concat(a,".").concat(s):t,this.filename.initName=this.filename.name,this.autoUpload&&this.uploadImage()},onFileChange:function(e){var t=this,n=e.target.files[0];J(n,(function(e,n){t.getImage(e,n)}),this.setMaxSize?1024*this.compressSize:null)},onDrop:function(e){var t=this,n=e.dataTransfer.files[0];J(n,(function(e,n){t.getImage(e,n)}),this.setMaxSize?1024*this.compressSize:null)},onPaste:function(e){var t=this;return Object(E["a"])(regeneratorRuntime.mark((function n(){var i,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,V(e,t.setMaxSize?1024*t.compressSize:null);case 2:i=n.sent,a=i.url,s=i.fileName,t.getImage(a,s);case 6:case"end":return n.stop()}}),n)})))()}}},ce=le,ue=(n("7160"),Object(d["a"])(ce,y,O,!1,null,null,null)),fe=ue.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"picx-container management-page-container"},[n("div",{staticClass:"content-container"},[n("div",{staticClass:"top"},[n("div",{staticClass:"status-info-bar"},[n("div",{staticClass:"repos-dir"},[e._v(" 当前仓库："),n("span",{staticClass:"selected"},[e._v(e._s(e.userConfigInfo.selectedRepos))]),e._v(" 当前目录："),n("span",{staticClass:"selected"},[e._v(e._s(e.userConfigInfo.selectedDir?e.userConfigInfo.selectedDir:"/"))])]),n("div",{staticClass:"change-dir"},[e._v(" 切换目录： "),n("el-select",{attrs:{placeholder:"请选择",size:"small"},on:{change:e.dirChange},model:{value:e.userConfigInfo.selectedDir,callback:function(t){e.$set(e.userConfigInfo,"selectedDir",t)},expression:"userConfigInfo.selectedDir"}},e._l(e.dirImageList,(function(e){return n("el-option",{attrs:{label:e.dir,value:e.dir}})})),1)],1)])]),n("div",{staticClass:"bottom"},[n("ul",{staticClass:"image-list"},e._l(e.currentDirImageList,(function(e){return n("li",{staticClass:"image-item",style:{width:"220px",height:"230px"}},[n("ImageCard",{attrs:{"image-obj":e}})],1)})),0)])])])},ge=[],pe=(n("7db0"),{name:"Management",components:{ImageCard:re},data:function(){return{currentDirImageList:[]}},watch:{loggingStatus:function(e){!e&&this.$router.push("config")},dirImageList:{handler:function(e){var t=this;this.currentDirImageList=e.find((function(e){return e.dir===t.userConfigInfo.selectedDir})).imageList},deep:!0}},computed:Object(l["a"])({},Object(c["b"])({loggingStatus:"getUserLoggingStatus",dirImageList:"getDirImageList",userConfigInfo:"getUserConfigInfo"})),mounted:function(){this.initDirImageList()},methods:{initDirImageList:function(){var e=this.userConfigInfo.selectedDir;if(this.dirImageList.length>0){var t=this.dirImageList.find((function(t){return t.dir===e}));if(t)t.imageList.length>0?this.currentDirImageList=t.imageList:this.getDirContent(t);else{var n={dir:e,imageList:[]};this.getDirContent(n)}}else this.getReposContent()},getReposContent:function(){var e,t,n=this;this.userConfigInfo&&this.$axios.get("/repos/".concat(null===(e=this.userConfigInfo)||void 0===e?void 0:e.owner,"/").concat(null===(t=this.userConfigInfo)||void 0===t?void 0:t.selectedRepos,"/contents"),{headers:{"Content-Type":"application/json",Authorization:"token ".concat(this.userConfigInfo.token)}}).then((function(e){if(console.log("res: ",e),e&&200===e.status&&e.data.length>0){n.$store.dispatch("DIR_IMAGE_LIST_ADD_DIR",{dir:"/",imageList:[]});var t,i=Object(D["a"])(e.data);try{for(i.s();!(t=i.n()).done;){var a=t.value;"dir"===a.type?n.$store.dispatch("DIR_IMAGE_LIST_ADD_DIR",{dir:a.name,imageList:[]}):"file"===a.type&&z(P(a.name).suffix)&&n.$store.dispatch("DIR_IMAGE_LIST_ADD_IMAGE",n.getImageObject(a))}}catch(s){i.e(s)}finally{i.f()}}}))},getDirContent:function(e){var t,n,i,a=this;this.$axios.get("/repos/".concat(null===(t=this.userConfigInfo)||void 0===t?void 0:t.owner,"/").concat(null===(n=this.userConfigInfo)||void 0===n?void 0:n.selectedRepos,"/contents/").concat(null===(i=this.userConfigInfo)||void 0===i?void 0:i.selectedDir),{headers:{"Content-Type":"application/json",Authorization:"token ".concat(this.userConfigInfo.token)}}).then((function(t){if(t&&200===t.status&&t.data.length>0){var n,i=[],s=Object(D["a"])(t.data);try{for(s.s();!(n=s.n()).done;){var o=n.value;"file"===o.type&&z(P(o.name).suffix)&&i.push(a.getImageObject(o))}}catch(r){s.e(r)}finally{s.f()}e.imageList=i,a.currentDirImageList=i,a.$store.dispatch("DIR_IMAGE_LIST_ADD_IMAGE_LIST",e)}}))},getImageObject:function(e){if(z(P(e.name).suffix))return{dir:this.userConfigInfo.selectedDir,name:e.name,path:e.path,sha:e.sha,html_url:e.html_url,github_url:e["download_url"],cdn_url:Q("cdn",e,this.userConfigInfo),deleting:!1}},dirChange:function(e){var t=this.dirImageList.find((function(t){return t.dir===e}));t.imageList.length>0?this.currentDirImageList=t.imageList:this.getDirContent(t)}}}),me=pe,he=(n("bc35"),Object(d["a"])(me,de,ge,!1,null,"3ca4e1f9",null)),Ie=he.exports,Ce=v["a"].prototype.push;v["a"].prototype.push=function(e){return Ce.call(this,e).catch((function(e){return e}))},i["default"].use(v["a"]);var ve=[{path:"/",name:"Index",redirect:{name:"Upload"}},{path:"/upload",name:"Upload",component:fe,meta:{title:"图片上传 | PicX 图床神器"}},{path:"/config",name:"Config",component:k,meta:{title:"图床配置 | PicX 图床神器"}},{path:"/management",name:"Management",component:Ie,meta:{title:"图片管理 | PicX 图床神器"}},{path:"*",redirect:{name:"Upload"}}],be=new v["a"]({routes:ve});be.beforeEach((function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()}));var _e=be,De=(n("c740"),n("a434"),"PICX_"),Se=De+"CONFIG",Le=De+"UPLOADED",we=De+"MANAGEMENT";i["default"].use(c["a"]);var xe=function(){var e=localStorage.getItem(Se);return e?JSON.parse(e):{token:"",owner:"",email:"",name:"",avatarUrl:"",selectedRepos:"",reposList:[],dirMode:"",selectedDir:"",dirList:[],loggingStatus:!1}},Re=function(){var e=localStorage.getItem(we);return e?JSON.parse(e):[]},ke=function(){var e=sessionStorage.getItem(Le);return e?JSON.parse(e):[]},ye=new c["a"].Store({state:{userConfigInfo:xe(),dirImageList:Re(),uploadedImageList:ke()},mutations:{SET_USER_CONFIG_INFO:function(e,t){for(var n in t)e.userConfigInfo.hasOwnProperty(n)&&(e.userConfigInfo[n]=t[n])},RESET_USER_CONFIG_INFO:function(e){te(e.userConfigInfo)},PERSIST_USER_CONFIG_INFO:function(e){localStorage.setItem(Se,JSON.stringify(e.userConfigInfo))}},getters:{getUserConfigInfo:function(e){return e.userConfigInfo},getUserAvatar:function(e){return e.userConfigInfo.avatarUrl},getUserName:function(e){return e.userConfigInfo.name},getUserLoggingStatus:function(e){return e.userConfigInfo.loggingStatus},getDirImageList:function(e){return e.dirImageList},getUploadedImageList:function(e){return e.uploadedImageList}},actions:{LOGOUT:function(e){var t=e.commit,n=e.state;n.userConfigInfo.loggingStatus=!1,t("RESET_USER_CONFIG_INFO"),n.dirImageList=[],n.uploadedImageList=[],localStorage.removeItem(Se),localStorage.removeItem(we),sessionStorage.removeItem(Le)},DIR_IMAGE_LIST_ADD_IMAGE:function(e,t){var n=e.state,i=e.dispatch;n.dirImageList.length>0&&(n.dirImageList.find((function(e){return e.dir===t.dir})).imageList.push(t),i("DIR_IMAGE_LIST_PERSIST"))},DIR_IMAGE_LIST_ADD_IMAGE_LIST:function(e,t){var n=e.state,i=e.dispatch;n.dirImageList.find((function(e){return e.dir===t.dir})).imageList=t.imageList,i("DIR_IMAGE_LIST_PERSIST")},DIR_IMAGE_LIST_ADD_DIR:function(e,t){var n=e.state,i=e.dispatch;"/"===t.dir?n.dirImageList.unshift(t):n.dirImageList.push(t),i("DIR_IMAGE_LIST_PERSIST")},DIR_IMAGE_LIST_REMOVE:function(e,t){var n=e.state,i=e.dispatch;if(n.dirImageList.length>0){var a=n.dirImageList.find((function(e){return e.dir===t.dir}));if(a){var s=a.imageList.findIndex((function(e){return e.sha===t.sha}));-1!==s&&(a.imageList.splice(s,1),i("DIR_IMAGE_LIST_PERSIST"))}}},DIR_IMAGE_LIST_PERSIST:function(e){var t=e.state;localStorage.setItem(we,JSON.stringify(t.dirImageList))},UPLOADED_LIST_ADD:function(e,t){var n=e.state,i=e.dispatch;n.uploadedImageList.unshift(t),i("UPLOADED_LIST_PERSIST")},UPLOADED_LIST_REMOVE:function(e,t){var n=e.state,i=e.dispatch;if(n.uploadedImageList.length>0){var a=n.uploadedImageList.findIndex((function(e){return e.sha===t.sha}));-1!==a&&(n.uploadedImageList.splice(a,1),i("UPLOADED_LIST_PERSIST"))}},UPLOADED_LIST_PERSIST:function(e){var t=e.state;sessionStorage.setItem(Le,JSON.stringify(t.uploadedImageList))}},modules:{}}),Oe=(n("944d"),n("0fae"),n("bc3a")),Ee=n.n(Oe);Ee.a.defaults.baseURL="https://api.github.com",Ee.a.interceptors.request.use((function(e){return e})),Ee.a.interceptors.response.use((function(e){return e}),(function(e){if(e.response&&e.response.data){var t=e.response.status,n=e.response.data.message;G.a.Message.error({message:"Code: ".concat(t,", Message: ").concat(n),duration:4e3}),console.error(e.response)}return e.response})),i["default"].use(G.a),i["default"].prototype.$axios=Ee.a,i["default"].config.productionTip=!1,new i["default"]({router:_e,store:ye,render:function(e){return e(C)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),a=n.n(i);a.a},7160:function(e,t,n){"use strict";var i=n("086a"),a=n.n(i);a.a},8995:function(e,t,n){},"944d":function(e,t,n){},"9c0c":function(e,t,n){},bc35:function(e,t,n){"use strict";var i=n("37bb"),a=n.n(i);a.a},c06a:function(e,t,n){},ca20:function(e,t,n){"use strict";var i=n("ca6b"),a=n.n(i);a.a},ca6b:function(e,t,n){},f322:function(e,t,n){"use strict";var i=n("480b"),a=n.n(i);a.a}});
//# sourceMappingURL=app.33108be8.js.map