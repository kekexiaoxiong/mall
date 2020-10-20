<template>
  <div id="app">
    <router-view></router-view>
   
  </div>
</template>

<script>

//import axios from 'axios'


export default {
  name: 'App',
  components: {
   
  },
  data(){
    return {
      res:{}
    }
  },
  mounted(){
    //本地加载json文件
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res
    // })
    //通过easy-mock
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res
    // })

    //本地集成json.js数据
    if(this.$cookie.get('userId')){
      this.getUser();
      this.getCartCount();
    }
  
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res)=>{
        //to-do 保存到vuex里面
        this.$store.dispatch('saveUserName',res.username)
      })
    },
     getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        //to-do 保存到vuex里面
        this.$store.dispatch('saveCartCount',res)
      })
    }
  }
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>
