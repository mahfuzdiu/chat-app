import { defineStore } from 'pinia';

export const useSocketStore = defineStore('socket', {
    state: function () {
        return {
            socket: '',
            isConnected: false,
            activeUsers: []
        };
    }
});
