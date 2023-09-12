<template>
    <div class="active-users-card">
        <div class="active-users" v-for="i in 5">
            <div class="user-image">
                <img src="https://placehold.co/45x45" alt="user image" />
            </div>

            <div class="chat-info">
                <p id="name">Name</p>
                <p>last massage</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
$app-primary-color: #4caf50;
$border-color: #dee2e6;

.active-users-card {
    border: 1px solid $border-color;
    border-radius: 12px 0 0 10px;
    width: 30%;
    padding: 15px;
    background-color: #fff;

    .active-users {
        display: flex;
        transition: 0.3s;
        padding: 8px 16px;
        align-items: center;
        border-radius: 12px;

        .user-image {
            display: flex;
            align-items: center;
            margin-right: 15px;

            img {
                border-radius: 50%;
            }
        }

        .chat-info {
            p {
                margin: 0;
            }

            #name {
                font-weight: 500;
            }
        }
        &:hover {
            background-color: $app-primary-color;
            cursor: pointer;
            color: #fff;
        }
    }
}
</style>
