import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import Auth from '@/service/AuthService.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    name: 'dashboard',
                    path: '/',
                    component: () => import('@/views/Dashboard.vue'),
                    meta: { requiresAuth: true }
                },
                {
                    name: 'chat',
                    path: '/chat',
                    component: () => import('@/views/pages/Chat.vue'),
                    meta: { requiresAuth: true }
                },
            ]
        },

        // auth routes
        
        {
            name: 'login',
            path: '/auth/login',
            component: () => import('@/views/pages/auth/Login.vue'),
            meta:{
                requiresAuth: false
            }
        },
        {
            name: 'landing',
            path: '/landing',
            component: () => import('@/views/pages/Landing.vue'),
        },
    ]
});



router.beforeEach(function(to, from){
    //for open pages
    if(to.meta.requiresAuth == undefined)
        return true

    else if(to.meta.requiresAuth && !Auth.userAthenticated()){
        return router.push({name: 'login'})
    }

    else if(!to.meta.requiresAuth && Auth.userAthenticated()){
        return router.push({name: 'dashboard'})
    }

    return true
})


export default router;
