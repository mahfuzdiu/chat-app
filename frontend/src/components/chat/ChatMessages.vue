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
            <div class="messages"></div>

            <div class="message-box">
                <textarea name="" id="" cols="30" rows="4"></textarea>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
$app-primary-color: #4caf50;
$border-color: #dee2e6;

.chat-section {
    border: 1px solid $border-color;
    border-left: none;
    width: 70%;
    border-radius: 0 12px 12px 0;
    background-color: #fff;

    header {
        display: flex;
        background-color: #fff;
        border-radius: 12px 12px 0 0;
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
}
</style>
