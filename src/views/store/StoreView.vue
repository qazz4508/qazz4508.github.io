<template>
    <div class="container">
        <div class="h2">下载页!!%%</div>
        <div>是否PWA启动: {{ isStandalone }}</div>
        <div v-if="done">已成功安装 </div>
        <button v-if="canInstallPWA" @click="downloadClick">{{ progressText }}</button><br>
        <button @click="launch">启动pwa应用</button><br>
        <button @click="push">推送</button><br>
    </div>
</template>

<script>
export default {
    name: "StoreView",
    data() {
        return {
            progress: 0,       // 当前进度值
            intervalId: null,  // 定时器 ID
            deferredPrompt: null, // 保存 beforeinstallprompt 事件对象
            canInstallPWA: false, // 控制按钮的显示
            done: false,
            isStandalone: false,
        }
    },
    computed: {
        // 计算属性：根据进度值返回按钮文本
        progressText() {
            return this.progress < 100 ? `加载中... ${this.progress}%` : "完成";
        }
    },
    created() {
        console.log("created");

    },
    mounted() {
        console.log("mounted");
        this.isStandalone = window.matchMedia('(display-mode: standalone)').matches;

        // this.startFakeProgress()
        // 监听 beforeinstallprompt 事件
        window.addEventListener('beforeinstallprompt', (e) => {
            console.log("beforeinstallprompt");

            // 阻止默认行为
            e.preventDefault();
            // 保存事件对象
            this.deferredPrompt = e;
            // 显示安装按钮
            this.canInstallPWA = true;
            console.log("MMM", this.canInstallPWA);
        });

        // 监听 appinstalled 事件
        window.addEventListener("appinstalled", () => {
            console.log("PWA 已成功安装");
            this.done = true;
            this.installed = true; // 更新已安装状态
            this.canInstall = false; // 隐藏安装按钮
        });

        this.push()
    },
    methods: {
        push() {
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                    // 订阅推送服务
                    // subscribeUser();
                } else {
                    console.log('Notification permission denied.');
                }
            })
        },
        launch() {
            // 跳转到 PWA 的 start_url
            window.location.href = 'web+dzpwademo:exampleData';
        },
        async downloadClick() {
            // this.startFakeProgress()
            if (this.deferredPrompt) {
                // 显示安装提示
                this.deferredPrompt.prompt();
                // 等待用户的响应
                const { outcome } = await this.deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    console.log('用户接受了 PWA 安装');
                    this.startFakeProgress()
                } else {
                    console.log('用户拒绝了 PWA 安装');
                }
                // 清除事件对象
                this.deferredPrompt = null;
            }
        },
        startFakeProgress() {
            // 如果已经在加载，则不重复启动
            if (this.intervalId) return;

            this.progress = 0; // 重置进度
            this.intervalId = setInterval(() => {
                if (this.progress < 100) {
                    this.progress += Math.floor(Math.random() * 5) + 1; // 增加随机进度
                    if (this.progress > 100) this.progress = 100; // 确保不超过 100
                } else {
                    clearInterval(this.intervalId); // 停止定时器
                    this.intervalId = null;
                    this.canInstallPWA = false;
                }
            }, 100); // 每 100 毫秒更新一次
        }
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    margin: 0;
}
</style>