<template>
    <div>
        <div class="chat">
            <ActiveUsers :mySocketId="mySocketId" :activeUserLists="activeUserLists"></ActiveUsers>
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
        return {
            name: 'Mr_' + parseInt(Math.random() * 100),
            mySocketId: '',
            activeUserLists: [
                {
                    dsd: 4
                }
            ]
        };
    },
    mounted() {
        const socket = io('http://localhost:3000');

        socket.on('connect', () => {
            this.mySocketId = socket.id;
            console.log('connected to server. id: ' + socket.id);
        });

        socket.emit('joined_to_server', { name: this.name });

        socket.on('active_users', (users) => {
            //reactive data will work for only component which is been reloaded...use store to
            this.activeUserLists = users;
            console.log(this.activeUserLists);
            console.log(this.mySocketId);
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
