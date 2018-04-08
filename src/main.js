import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import {router} from './router/index';
import store from './store';
import ajax from './libs/ajax';
import appApi from './libs/appApi';
import udesk from './libs/udesk';
import filter from './libs/filter';

import '../static/js/count-down.js'

import './styles/app.scss'
import 'swiper/dist/css/swiper.css'


Vue.use(VueAwesomeSwiper);
	
Vue.config.productionTip = false

Vue.mixin(ajax);
Vue.mixin(appApi);
Vue.mixin(udesk);
Vue.mixin(filter);

new Vue({
	el: '#app',
	router: router,
	store: store,
	render: h => h(App)
})
