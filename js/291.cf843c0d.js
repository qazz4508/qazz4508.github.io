"use strict";(self["webpackChunkpwa_vue_demo"]=self["webpackChunkpwa_vue_demo"]||[]).push([[291],{8291:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"h2"},[e._v("下载页!!%%")]),t("div",[e._v("是否PWA启动: "+e._s(e.isStandalone))]),e.done?t("div",[e._v("已成功安装 ")]):e._e(),e.canInstallPWA?t("button",{on:{click:e.downloadClick}},[e._v(e._s(e.progressText))]):e._e(),e.done?t("button",{on:{click:e.launch}},[e._v("启动pwa应用")]):e._e(),e.done?t("button",{on:{click:e.launch2}},[e._v("启动pwa应用2")]):e._e()])},o=[],r={name:"StoreView",data(){return{progress:0,intervalId:null,deferredPrompt:null,canInstallPWA:!1,done:!1,isStandalone:!1}},computed:{progressText(){return this.progress<100?`加载中... ${this.progress}%`:"完成"}},created(){console.log("created")},mounted(){console.log("mounted"),this.isStandalone=window.matchMedia("(display-mode: standalone)").matches,window.addEventListener("beforeinstallprompt",(e=>{console.log("beforeinstallprompt"),e.preventDefault(),this.deferredPrompt=e,this.canInstallPWA=!0,console.log("MMM",this.canInstallPWA)})),window.addEventListener("appinstalled",(()=>{console.log("PWA 已成功安装"),this.done=!0,this.installed=!0,this.canInstall=!1}))},methods:{launch2(){const e="intent:/store#Intent;scheme=https;package=com.your.package;end";window.location.href=e},launch(){const e="/store";window.location.href=e},async downloadClick(){if(this.deferredPrompt){this.deferredPrompt.prompt();const{outcome:e}=await this.deferredPrompt.userChoice;"accepted"===e?(console.log("用户接受了 PWA 安装"),this.startFakeProgress()):console.log("用户拒绝了 PWA 安装"),this.deferredPrompt=null}},startFakeProgress(){this.intervalId||(this.progress=0,this.intervalId=setInterval((()=>{this.progress<100?(this.progress+=Math.floor(5*Math.random())+1,this.progress>100&&(this.progress=100)):(clearInterval(this.intervalId),this.intervalId=null,this.canInstallPWA=!1)}),100))}}},a=r,l=s(1656),i=(0,l.A)(a,n,o,!1,null,"c123d67e",null),d=i.exports}}]);
//# sourceMappingURL=291.cf843c0d.js.map