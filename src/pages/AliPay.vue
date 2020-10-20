<template>
    <div class="ali-Pay">
        <loading v-if="loading"></loading>
        <div class="form" v-html="content" >
            

        </div>
    </div>
</template>

<script> 
import Loading from './../components/Loading'
export default {
    name:'ali-pay',
    components:{
        Loading
    },
    data(){
        return {
            orderId:this.$route.query.orderId,
            content:'',
            loading:true
        }
    },
    mounted(){
        this. paySubmit()
    },
    methods:{
        paySubmit(){
            this.axios.post('/pay',{
                orderId:this.orderId,
                orderName:'222',
                amount:0.01,
                payType:1
            }).then((res)=>{
                this.content = res.content;
                setTimeout(()=>{
                    document.forms[0].submit();
                },100)
            })
        }
    }
}
</script>