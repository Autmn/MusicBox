import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VmyMusic from 'components/VmyMusic.vue'

import VrepertoryNav from 'components/VrepertoryNav.vue'
import VrepertoryContent from 'components/VrepertoryContent.vue'
import VRepConAll from 'components/V-Rep-Con-All.vue' 
import VRepSinger from 'components/VrepertorySinger.vue'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);
/* eslint-disable no-new */

Vue.use(VueRouter);
const router = new VueRouter({
	routes: [
		{path:'/',redirect: '/musicRepertory/header'},
		{path:'/musicRepertory',redirect: '/musicRepertory/header'},
		{path: '/musicRepertory/header',  component: VrepertoryNav,
			children:[
				{path: '/musicRepertory/header', component: VrepertoryContent,
					children:[
						{path: '/musicRepertory/header/',component: VRepConAll},
					]
			},
				{path: '/musicRepertory/singer', component: VRepSinger},
			],
		

		},
		{path: '/myMusic',component:VmyMusic}		
	]
});
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});

