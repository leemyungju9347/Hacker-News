import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import commentView from '../views/commentView'
import UserView from '../views/UserView'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/news'
    },
    {
        path:'/news',
        name:'news',
        component:NewsView
    },
    {
        path:'/ask',
        name:'ask',
        component:AskView
    },
    {
        path:'/jobs',
        name:'jobs',
        component:JobsView
    },
    {
        path:'/item/:id',
        name:'comment',
        component:commentView
    },
    {
        path:'/user/:id',
        name:'user',
        component:UserView
    }
]

const router = new VueRouter({routes})

export default router

