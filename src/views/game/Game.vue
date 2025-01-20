<template>
    <div>
        <h2>游戏界面</h2>

    </div>
</template>

<script>
export default {
    name: "GameView",
    mounted() {
        this.push()
    },
    methods: {
        push() {
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                    // 订阅推送服务
                    // subscribeUser();
                    this.subscribe()
                } else {
                    console.log('Notification permission denied.');
                }
            })
        },
        subscribe() {
            navigator.serviceWorker.ready.then(function (registration) {
                const applicationServerKey = this.urlBase64ToUint8Array('<Your VAPID Public Key>');
                registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: applicationServerKey
                }).then(function (subscription) {
                    console.log('User is subscribed:', subscription);
                    // 将订阅对象发送到服务器
                    // sendSubscriptionToServer(subscription);
                }).catch(function (error) {
                    console.log('Failed to subscribe the user:', error);
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