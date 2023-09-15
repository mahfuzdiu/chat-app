<template>
    <div class="chat-section">
        <header>
            <img src="https://placehold.co/45x45" alt="" />

            <div class="status">
                <p class="name">Name</p>
                <p>Active 10 min ago</p>
            </div>
        </header>

        <div class="message-section">
            <div class="messages">
                <div v-for="i in 5">
                    <p class="sent-message">Hi, this is a message from client. sds sd sd sdsdsds sdsdsssssssss sssssssss ssssssssss ssssssss sssssssaa aaaaaaaaa aaaaaaaa aaaaaaa aaaaaa</p>
                    <p class="received-message">Hi, this is a message from server, Hi, this is a message from client. sds sd sd sdsdsds sdsdsssssssss sssssssss ssssssssss ssssssss sssssssaa aaaaaaaaa aaaaaaaa aaaaaaa aaaaaa</p>
                </div>
            </div>

            <div class="message-box">
                <InputText size="small" type="text" />
                <Button icon="pi pi-send" text raised aria-label="Filter" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
$app-primary-color: #4caf50;
$border-color: #dee2e6;
$app-inverse-primary-color: #2f4858;

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
        padding: 15px;

        .messages {
            border: 1px solid $border-color;
            height: calc(100vh - 320px);
            margin-bottom: 10px;
            padding: 15px;
            overflow: scroll;
            scroll-behavior: smooth;

            &::-webkit-scrollbar {
                width: 2px;
            }

            &::-webkit-scrollbar-thumb {
                background-color: $app-inverse-primary-color;
                outline: 1px solid $app-inverse-primary-color;
            }

            .sent-message,
            .received-message {
                padding: 5px 15px;
                margin-bottom: 10px;
                color: #fff;
                max-width: 400px;
            }

            .sent-message {
                background-color: $app-primary-color;
                border-radius: 15px 5px 15px 0;
            }

            .received-message {
                background-color: $app-inverse-primary-color;
                border-radius: 5px 15px 0 15px;
                width: fit-content;
                margin-left: auto;
                max-width: 400px;
            }
        }

        .message-box {
            display: flex;
            justify-content: center;

            input {
                height: 50px;
                box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
                border-radius: 4px 0 0 4px;
                width: 100%;
            }

            button {
                border-radius: 0 4px 4px 0;
                margin-left: 3px;
            }
        }
    }
}
</style>
