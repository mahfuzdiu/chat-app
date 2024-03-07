<template>
    <div class="chat-section">
        <header>
            <img src="https://placehold.co/45x45" alt="" />

            <div class="status">
                <p class="name">{{ selectedUser.name }}</p>
                <p>{{ selectedUser.id }}</p>
            </div>
        </header>

        <div class="message-section">
            <div class="messages" ref="messagesRef">
                <div v-for="message in messageArray">
                    <p :class="message.type">{{ message.message }}</p>
                </div>
            </div>

            <div class="chat_box">
                <form @submit.prevent="sendMessage">
                    <InputText size="small" type="text" v-model="message" />
                    <Button type="submit" icon="pi pi-send" text raised aria-label="Filter" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['selectedUser', 'messageArray'],
    data() {
        return {
            message: '',
            tempMessage: ''
        };
    },
    methods: {
        sendMessage() {
            this.tempMessage = this.message;
            this.message = '';

            this.messageArray.push({
                type: 'outgoing_message',
                message: this.tempMessage
            });

            this.$emit('emitSendMessage', {
                message: this.tempMessage,
                socket_id: this.selectedUser.socket_id
            });
        }
    },

    watch: {
        messageArray: {
            handler: function (newValue) {
                //gets meessage box dom height after it finish rendering
                this.$nextTick(function () {
                    let messageBox = this.$refs.messagesRef;
                    messageBox.scrollTop = messageBox.scrollHeight;
                });
            },
            deep: true
        }
    }
};
</script>

<style lang="scss" scoped>
$outgoingMessageBoxColor: #fff;
$border-color: #dee2e6;
$incomingMessageBoxColor: #4caf50;

.chat-section {
    border: 1px solid $border-color;
    border-left: none;
    width: 70%;
    border-radius: 0 12px 12px 0;
    background-color: #fff;

    header {
        display: flex;
        background-color: #fff;
        border-radius: 0 12px 0 0;
        padding: 20px 15px;
        border-bottom: 1px solid $border-color;

        img {
            height: 45px;
            width: 45px;
            border-radius: 50%;
            margin-right: 15px;
        }

        .status {
            p {
                margin: 0;
            }

            .name {
                font-weight: 500;
            }
        }
    }

    .message-section {
        // padding: 15px;

        .messages {
            border: 1px solid $border-color;
            height: calc(100vh - 320px);
            padding: 15px;
            padding-bottom: 0 !important;
            overflow: auto;
            scroll-behavior: smooth;

            &::-webkit-scrollbar {
                width: 2px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: incomingMessageBoxColor;
                outline: 1px solid incomingMessageBoxColor;
            }

            .incoming_message,
            .outgoing_message {
                padding: 5px 15px;
                margin-bottom: 10px;
                max-width: 400px;
                box-shadow: 0 0 3px #a5a5a5;
                border-radius: 3px;
                width: fit-content;
            }

            .outgoing_message {
                background-color: $outgoingMessageBoxColor;
                color: #222;
            }

            .incoming_message {
                color: #fff;
                background-color: $incomingMessageBoxColor;
                margin-left: auto;
                max-width: 400px;
            }
        }

        .chat_box {
            form {
                display: flex;
                justify-content: center;

                input {
                    height: 40px;
                    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
                    // border-radius: 3px 0 0 3px;
                    width: 100%;
                }

                button {
                    border-radius: 0 4px 4px 0;
                    // margin-left: 3px;
                }
            }
        }
    }
}
</style>
