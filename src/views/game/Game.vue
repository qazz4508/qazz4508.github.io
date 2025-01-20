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
                } else {
                    console.log('Notification permission denied.');
                }
            })
        },
    }
}
</script>