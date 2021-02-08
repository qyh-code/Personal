import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import BlogDetail from '../views/BlogDetail.vue'
import goArticle from '../views/Blog.vue'

// import HeaderComponents from '../components/HeaderComponents'

Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/blog/detail/:blogId',
        name: 'BlogDetail',
        component: BlogDetail
    },

    {
        path: '/blog/goarticle',
        name: 'goArticle',
        component: goArticle
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router