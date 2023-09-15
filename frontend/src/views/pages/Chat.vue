<template>
    <div>
        <div class="chat">
            <ActiveUsers></ActiveUsers>
            <ChatMessages></ChatMessages>
        </div>
    </div>
</template>

<script>
import { io } from 'socket.io-client';
import ActiveUsers from '../../components/chat/ActiveUsers.vue';
import ChatMessages from '../../components/chat/ChatMessages.vue';

export default {
    components: {
        ActiveUsers,
        ChatMessages
    },

    data() {
        return {};
    },
    mounted() {
        const socket = io('http://localhost:3000');
        socket.on('connect', () => {
            console.log(socket.id); // x8WIv7-mJelg7on_ALbx
        });
    }
};
</script>

<style lang="scss">
.chat {
    display: flex;
    height: calc(100vh - 9rem);
}
</style>
