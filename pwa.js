// 定义配置 key 分包 value 游戏名
const openPwaVids = {
  1: "sdk",
  128659: "御劍修仙-福利版",
};

function addMetaTag(name, content) {
  const meta = document.createElement("meta");
  meta.name = name;
  meta.content = content;
  document.head.appendChild(meta);
}

function createManifestElement(vest_id, name) {
  console.log("引入manifest");
  let linkElement = document.createElement('link');
  linkElement.rel = 'manifest';
  linkElement.href = './manifest/manifest_' + vest_id + '.json';
  document.head.appendChild(linkElement);

  // ios 不支持 manifest文件，可以通过 meta/link 私有属性进行设置
  const link = document.createElement("link");
  link.rel = "apple-touch-icon";
  link.href = '/img/icons/apple-touch-icon-' + vest_id + '.png';
  document.head.appendChild(link);

  addMetaTag("apple-mobile-web-app-title", name);
  addMetaTag("apple-mobile-web-app-capable", "yes");
  addMetaTag("apple-mobile-web-app-status-bar-style", "black-translucent");
}

// 获取 URL 参数
const vest_id = 1;

if (vest_id && openPwaVids[vest_id]) {
  createManifestElement(vest_id, openPwaVids[vest_id])
}

console.log("navigator对象", navigator);


// if ('registerProtocolHandler' in navigator) {
//   navigator.registerProtocolHandler(
//     'web+dzpwademo',      // 自定义协议
//     '/#/store?data=%s',   // 包含 '%s' 的路径
//     'sdk示例'             // 应用名称
//   );
//   console.log('Protocol handler registered successfully!');
// } else {
//   console.log("无法注册");
// }
console.log("registerProtocolHandler",navigator.registerProtocolHandler);

navigator.registerProtocolHandler(
  'web+dzpwademo',      // 自定义协议
  '/#/store?data=%s',   // 包含 '%s' 的路径
  'sdk示例'             // 应用名称
);
console.log('Protocol handler registered successfully!');


if (navigator.serviceWorker != null) {
  navigator.serviceWorker.register('sw.js')
    .then(function (registartion) {
      console.log('支持sw:', registartion)
    })

  // let deferredPrompt; // 用于保存 beforeinstallprompt 事件的引用

  // // 监听 beforeinstallprompt 事件
  // window.addEventListener('beforeinstallprompt', (e) => {
  //   // 防止浏览器自动弹出安装提示
  //   e.preventDefault();

  //   // 保存事件以便在后续触发安装提示
  //   deferredPrompt = e;

  //   // 显示自定义的安装按钮
  //   const installButton = document.getElementById('installButton');
  //   installButton.style.display = 'block';

  //   // 监听安装按钮的点击事件
  //   installButton.addEventListener('click', () => {
  //     // 调用安装提示的 show() 方法
  //     deferredPrompt.prompt();

  //     // 监听用户是否接受安装提示
  //     deferredPrompt.userChoice.then((choiceResult) => {
  //       if (choiceResult.outcome === 'accepted') {
  //         console.log('用户安装了 PWA');
  //       } else {
  //         console.log('用户拒绝了安装');
  //       }
  //       // 清除 deferredPrompt 引用
  //       deferredPrompt = null;
  //     });
  //   });
  // });

  // // 检查是否已安装 PWA 或支持安装提示
  // if (window.matchMedia('(display-mode: standalone)').matches) {
  //   console.log('PWA 已安装');
  // } else {
  //   console.log('PWA 尚未安装');
  // }
} else {
  console.warn("当前浏览器不支持 Service Worker");
}