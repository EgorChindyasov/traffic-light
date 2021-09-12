import { createWebHistory, createRouter } from "vue-router";

import Red from '../components/Red';
import Yellow from '../components/Yellow.vue';
import Green from '../components/Green.vue';

const routes = [
	{ 
        path: '/red', 
        component: Red, 
        alias: '/' 
    },
	{ 
        path: '/yellow', 
        component: Yellow 
    },
	{ 
        path: '/green', 
        component: Green 
    }
];

const router = createRouter({
	history: createWebHistory(),
    routes
});

export default router;