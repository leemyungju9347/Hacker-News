import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import commentView from '../views/commentView'
import UserView from '../views/UserView'
import bus from '../utils/bus'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/news'
    },
    {
        path:'/news',
        name:'news',
        component:NewsView,
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


const router = new VueRouter(
    {
    mode:'history',
    routes,
})


router.beforeEach((to, from, next) => {
    setTimeout(() => {
        next();
    }, 2000);
    
    bus.$emit('start:spinner')

});


export default router

