<template>
    <div>
        <div class="chat">
            <ActiveUsers :mySocketId="mySocketId" :activeUserLists="activeUserLists" @emitSelecteduser="emitSelecteduser"></ActiveUsers>
            <ChatMessages :messageArray="messageArray" :selectedUser="selectedUser" @emitSendMessage="emitSendMessage"></ChatMessages>
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
            socket: '',
            name: 'Mr_' + parseInt(Math.random() * 100),
            mySocketId: '',
            selectedUser: {},
            messageArray: [],
            activeUserLists: [
                {
                    dsd: 4
                }
            ]
        };
    },
    mounted() {
        this.socket = io('http://localhost:3000');

        this.socket.on('connect', () => {
            this.mySocketId = this.socket.id;
            // console.log('connected to server. id: ' + this.socket.id);
        });

        //sending to server
        this.socket.emit('joined_to_server', { name: this.name });

        //receiving from server
        this.socket.on('active_users', (users) => {
            //reactive data will work for only component which is been reloaded...use store to
            this.activeUserLists = users;
            //console.log(this.activeUserLists);
        });

        this.socket.on('messageChannel', (message) => {
            this.messageArray.push({
                type: 'incoming_message',
                message: message
            });
        });
    },
    methods: {
        emitSelecteduser(user) {
            this.selectedUser = user;
        },
        emitSendMessage(data) {
            this.socket.emit('broadcast', data);
        }
    }
};
</script>

<style lang="scss">
.chat {
    display: flex;
    height: calc(100vh - 9rem);
}
</style>
