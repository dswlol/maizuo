import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
//首页组件引用
import Index from '@/page/index/index'
import NowPlaying from '@/page/index/nowplaying'
import ComingSoon from '@/page/index/comingsoon'
//影院组件引用
import Cinema from '@/page/cinema/cinema'
//购物组件引用
import Shop from '@/page/shop/shop'
//用户组件引用
import User from '@/page/user/user'
import denglu from '@/page/user/denglu'
import zc from '@/page/user/zc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:{'name':'index'},
      component: Home
    },
    {
      path:'/home',
      redirect:{'name':'index'},
      component: Home,
      children:[
      	{
      		 path:'/home/index',
      		 name:'index',
      		 component:Index,
      		 redirect:{'name':'nowplaying'},
      		 children:[
      		 	{
      		 		path:'/home/index/nowplaying',
      		 		name:'nowplaying',
      		 		component:NowPlaying
      		 	},
      		 	{
      		 		path:'/home/index/comingsoon',
      		 		name:'comingsoon',
      		 		component:ComingSoon
      		 	}
      		 ]
      	},
      	{
		    	path:'/home/cinema',
		    	name:'cinema',
		    	component:Cinema
		    },
		    {
		    	path:'/home/shop',
		    	name:'shop',
		    	component:Shop
		    },
		    {
		    	path:'/home/user',
		    	name:'user',
		    	component:User		    	
		    },	    
		    	{
		    		path:'/home/user/denglu',
		    		component:denglu,
		    		children:[
		    			{
				    		path:'/home/user/denglu/zc',
				    		component:denglu
				    	}
		    		]
		    	}	,
		    	
      ]
    },       
  ]
})
