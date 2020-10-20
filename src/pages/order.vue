<template>
    <div>
        
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>

import NavFooter from './../components/NavFooter'
import ServiceBar from './../components/ServiceBar'
export default {
    name:'nav-header',
    components:{
        
        NavFooter,
        ServiceBar
    },
    data(){
        return {
            tip:'',
            title:''
        }
    },
    mounted(){
        let path = this.$route.path;
        if(path == '/order/confirm'){
            this.title = '订单确认';
            this.tip = "注意安全按信息，认证填写"
        }else if(path == '/order/list') {
            this.title = '订单列表'
        }else if(path == '/order/pay'){
            this.title = '订单支付'
        }else{
            this.title = '订单支付'
        }
    }
}
</script>