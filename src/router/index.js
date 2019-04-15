import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Single from '@/pages/Single'
import Home1 from '@/pages/Home1'
import Home2 from '@/pages/Home2'
import Home3 from '@/pages/Home3'
import List from '@/pages/List'
import BuildList from '@/pages/BuildList'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home',
    name: 'Home',
    component: Home,
    children:[
	    {
	    	path: '/home1',
		    name: 'Home1',
		    component: Home1,
	    },
	    {
	    	path: '/home2',
		    name: 'Home2',
		    component: Home2,
	    },
	    {
	    	path: '/home3',
		    name: 'Home3',
		    component: Home3,
	    },
	    {
	    	path: '/list',
		    name: 'List',
		    component: List,
	    },
	    { path: '/buildlist',
	      name: 'BuildList',
	      component: BuildList},
    ],redirect:'/home1'
    },
    {path: '/login',name: 'Login',component: Login},
    {path: '/single',name: 'Single',component: Single},
    
    {path: '*',redirect : {name:"Login"}}
  ]
})
