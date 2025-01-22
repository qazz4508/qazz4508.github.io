<template>
    <div>
        <h2>游戏界面</h2>
        <button @click="push">通知</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "GameView",
    mounted() {
        this.push()
    },
    methods: {
        push() {
            console.log("调用push");
            
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    console.log('通知权限已授权。',window.webpush);
                    // 订阅用户
                    // this.subscribeUser();
                } else {
                    console.log('通知权限被拒绝。');
                }
            });
        },
        subscribeUser() {
            navigator.serviceWorker.ready.then((registration) => {
                const applicationServerKey = this.urlBase64ToUint8Array('BEort1eesiywyZahnc12SCoL7T-8txfviI3fHMB-VpUfCo4kVh0G8yp6xznMctZm5wn7mcYt2nmOwijZSI9AIuk');
                registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: applicationServerKey
                }).then((subscription) => {
                    console.log('用户已订阅：', subscription);
                    var endpoint = subscription.endpoint;
                    var key = subscription.getKey('p256dh');
                    var auth = subscription.getKey('auth');
                    var encodedKey = btoa(String.fromCharCode.apply(null, new Uint8Array(key)));
                    var encodedAuth = btoa(String.fromCharCode.apply(null, new Uint8Array(auth)));
                    const data = { publicKey: encodedKey, auth: encodedAuth, notificationEndPoint: endpoint }
                    console.log("请求订阅数据", data);

                    axios.post("http://127.0.0.1:8080/subscribe", data, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                }).catch((error) => {
                    console.log('订阅失败：', error);
                });
            });
        },
        urlBase64ToUint8Array(base64String) {
            const padding = '='.repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);
            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }
    }
}
</script>