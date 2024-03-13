<template>
    <div>
        <div class="chat">
            <ActiveUsers @emitSelectedUser="emitSelectedUser"></ActiveUsers>
            <ChatMessages v-if="selectedAUser" :messageArray="messageArray" :selectedUser="selectedUser" @emitSendMessage="emitSendMessage"></ChatMessages>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { io } from 'socket.io-client';
import ActiveUsers from '../../components/chat/ActiveUsers.vue';
import ChatMessages from '../../components/chat/ChatMessages.vue';
import { useSocketStore } from '../../store/SocketStore';
import { onMounted, reactive, computed } from 'vue';

let name = ref('Mr_' + parseInt(Math.random() * 100));
let mySocketId = ref('');
let selectedUser = ref({});
let messageArray = reactive({ data: [] });

const socketStore = useSocketStore();

onMounted(function () {
    //joining in the web socket server
    if (!socketStore.isConnected) {
        socketStore.socket = io('http://localhost:3000');
        socketStore.isConnected = true;

        socketStore.socket.on('connect', () => {
            mySocketId.value = socketStore.socket.id;
            console.log('connected to server. id: ' + mySocketId.value);
        });

        //sending to server
        socketStore.socket.emit('joined_to_server', { name: name.value });
    }

    //receiving from server
    socketStore.socket.on('active_users', (users) => {
        //reactive data will work for only component which is been reloaded...use store to
        socketStore.activeUsers = users;
    });

    socketStore.socket.on('messageChannel', (message) => {
        messageArray.data.push({
            type: 'incoming_message',
            message: message
        });
        console.log(messageArray.data);
    });
});

function emitSelectedUser(user) {
    messageArray.data = []; //reseting chat on a new user selection
    selectedUser.value = user;
}
function emitSendMessage(data) {
    socketStore.socket.emit('broadcast', data);
}

let selectedAUser = computed(function () {
    return Object.keys(selectedUser.value).length != 0;
});
</script>

<style lang="scss">
.chat {
    display: flex;
    height: calc(100vh - 9rem);
}
</style>
