import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from './../components/search/search'
import MyMusic from './../components/mymusic/mymusic'
import FindMusic from './../components/findmusic/findmusic'
import Community from './../components/community/community'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      // 首页
      path: '/',
      redirect: '/mymusic'
    },
    {
      // 顶部三个的第一页   相当于首页
      path: '/mymusic',
      component: MyMusic
    },
    {
      // 顶部三个的第二页
      path: '/findmusic',
      component: FindMusic
    },
    {
      // 顶部三个的第三页
      path: '/community',
      component: Community
    },
    {
      // 搜索页
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
