"use strict";(self["webpackChunkpwa_vue_demo"]=self["webpackChunkpwa_vue_demo"]||[]).push([[259],{3259:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});s(4114);var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"h2"},[e._v("下载页!!%%")]),t("div",[e._v("是否PWA启动: "+e._s(e.isStandalone))]),e.done?t("div",[e._v("已成功安装 ")]):e._e(),t("button",{on:{click:e.downloadClick}},[e._v(e._s(e.progressText))]),t("br"),t("button",{on:{click:e.launch}},[e._v("启动pwa应用")]),t("br"),t("button",{on:{click:e.push}},[e._v("推送")]),t("br")])},n=[],r={name:"StoreView2",data(){return{progress:0,intervalId:null,deferredPrompt:null,canInstallPWA:!1,done:!1,isStandalone:!1}},computed:{progressText(){return this.progress<100?`加载中... ${this.progress}%`:"完成"}},created(){console.log("created")},mounted(){console.log("mounted"),this.isStandalone=window.matchMedia("(display-mode: standalone)").matches,window.addEventListener("beforeinstallprompt",(e=>{console.log("beforeinstallprompt"),e.preventDefault(),this.deferredPrompt=e,this.canInstallPWA=!0,console.log("MMM",this.canInstallPWA)})),window.addEventListener("appinstalled",(()=>{console.log("PWA 已成功安装"),this.done=!0,this.installed=!0,this.canInstall=!1}))},methods:{push(){Notification.requestPermission().then((function(e){"granted"===e?console.log("Notification permission granted."):console.log("Notification permission denied.")}))},launch(){window.location.href="web+dzpwademo:exampleData"},async downloadClick(){if(this.deferredPrompt){this.deferredPrompt.prompt();const{outcome:e}=await this.deferredPrompt.userChoice;"accepted"===e?(console.log("用户接受了 PWA 安装"),this.startFakeProgress()):console.log("用户拒绝了 PWA 安装"),this.deferredPrompt=null}},startFakeProgress(){this.intervalId||(this.progress=0,this.intervalId=setInterval((()=>{this.progress<100?(this.progress+=Math.floor(5*Math.random())+1,this.progress>100&&(this.progress=100)):(clearInterval(this.intervalId),this.intervalId=null,this.canInstallPWA=!1)}),100))}}},a=r,i=s(845),l=(0,i.A)(a,o,n,!1,null,"b641aaf2",null),d=l.exports}}]);
//# sourceMappingURL=259.0815cdd9.js.map