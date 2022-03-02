import Vue from 'vue'
import App from './App.vue'
import './style/main.css'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import test1 from './components/test1.vue'
import test2 from './components/test2.vue'
import test3 from './components/test3.vue'
import test4 from './components/test4.vue'
import test5 from './components/test5.vue'
import test6 from './components/test6.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/test1',
            component: test1
        },
        {
            path: '/test2',
            component: test2
        },
        {
            path: '/test3',
            component: test3
        },
        {
            path: '/test4',
            component: test4
        },
        {
            path: '/test5',
            component: test5
        },
        {
            path: '/test6',
            component: test6
        },
    ]
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')