<template>
    <div class="active-users-card">
        <template v-for="user in activeUserLists">
            <div class="active-users" v-if="mySocketId != user.socket_id">
                <div class="user-image">
                    <img src="https://placehold.co/40x40" alt="user image" />
                </div>

                <div class="chat-info">
                    <p id="name">{{ user.name }}</p>
                    <p>{{ user.socket_id }}</p>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: ['activeUserLists', 'mySocketId']
};
</script>

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
        border-radius: 6px;
        margin-bottom: 10px;
        box-shadow: 0 0 2px #999;

        .user-image {
            display: flex;
            align-items: center;
            margin-right: 15px;

            img {
                border-radius: 50%;
                height: 40px;
                width: 40px;
            }
        }

        .chat-info {
            p {
                margin: 0;
                color: $app-primary-color;
                font-size: 13px;
            }

            #name {
                font-weight: 500;
            }
        }
        &:hover {
            box-shadow: 0 0 5px 1px $app-primary-color;
            cursor: pointer;
            color: #fff;
        }
    }
}
</style>
