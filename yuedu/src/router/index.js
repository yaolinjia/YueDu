import Vue from 'vue'
import Router from 'vue-router'

// 引入对应组件
import Panel from '@/components/Article/Panel'
import Channel from '@/components/Article/Channel'
import Article from '@/components/Article/Article'

Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/channel/1'
  },
  {
    path: '/',
    name: 'Panel',
    component: Panel,
    children: [{
        path: '/channel/:id(\\d+)',
        name: 'channel',
        component: Channel
      },
      {
        path: '/article/:id(\\d+)',
        name: 'article',
        component: Article
      },

    ]

  },

]

const router = new Router({
  linkExactActiveClass: 'active',
  routes
})
export default router
