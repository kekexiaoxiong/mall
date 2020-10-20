import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazhLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store/index'
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
//import env from './env'


import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
const mock = false;
if (mock) {
    require('./mock/api')
}


//根据前端的跨域方式做调整
//axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5eb7d1b0c93bd21ea368943e/mall';
axios.defaults.timeOut = 8000;
axios.defaults.baseURL = '/api';

//根据环境变量获取不通的请求地址
//axios.defaults.baseURL = env.baseURL;
// 接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data;
    let path = location.hash;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        if (path != '#/index') {
            window.location.href = '/#/login';
            return Promise.reject(res);
        }
    } else {
        Message.error(res.msg)
        return Promise.reject(res);
    }
}, (error) => {
    let res = error.response;
    Message.error(res.data.message);
    return Promise.reject(error)
})
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(Message);
Vue.use(VueLazhLoad, {
    loading: '/imgs/loading-svg/loading-bars.svg'
});
Vue.config.productionTip = false;

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')