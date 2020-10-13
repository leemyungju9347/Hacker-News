import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import commentView from '../views/commentView'
import UserView from '../views/UserView'
import bus from '../utils/bus'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/news',
    },
    {
        path:'/news',
        name:'news',
        component:NewsView,
        meta : {
            auth: true
        },
        beforeEnter
    },
    {
        path:'/ask',
        name:'ask',
        component:AskView,
        meta : {
            auth: true
        },
        beforeEnter
    },
    {
        path:'/jobs',
        name:'jobs',
        component:JobsView,
        meta:{
            auth: true
        },
        beforeEnter
    },
    {
        path:'/item/:id',
        name:'comment',
        component:commentView,
        beforeEnter
    },
    {
        path:'/user/:id',
        name:'user',
        component:UserView,
        beforeEnter
    }
]


const router = new VueRouter(
    {
    mode:'history',
    routes,
})

function startSpinner(){
    bus.$emit('start:spinner');
}


function beforeEnter(to,from,next) {
    startSpinner();

    setTimeout(() => {
        if( to.meta.auth ) {
            store.dispatch('FETCH_LIST',to.name)
            .then(()=>{
                next()
            })
            .catch(err=>{
                console.log(err)
            })

        }else{
            next()
        }
    }, 500);

}

export default router

