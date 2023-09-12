<template>
    <div>
        <div class="chat">
            <ActiveUsers></ActiveUsers>
            <ChatMessages></ChatMessages>
        </div>
    </div>
</template>

<script>
import ActiveUsers from '../../components/chat/ActiveUsers.vue';
import ChatMessages from '../../components/chat/ChatMessages.vue';

export default {
    components: {
        ActiveUsers,
        ChatMessages
    },

    data() {
        return {};
    }
};
</script>

<style lang="scss">
.chat {
    display: flex;
    height: calc(100vh - 9rem);
}
</style>
