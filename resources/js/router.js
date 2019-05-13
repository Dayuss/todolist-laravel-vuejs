import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoIndex from './pages/index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            name: 'todo-index',
            component: TodoIndex
        }
    ]
})

export default router