<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascrit:;">小米商场</a>
          <a href="javascrit:;">MUI</a>
          <a href="javascrit:;">云服务</a>
          <a href="javascrit:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascrit:;" v-if="username">{{username}}</a>
          <a href="javascrit:;" v-if="!username" @click="login">登录</a>
          <a href="javascrit:;" v-if="username" @click="logout">退出</a>
          <a href="javascrit:;" v-if="username">我的订单</a>
          <a href="javascrit:;" class="my-cart">
            <span class="icon-cart" @click="goToCart"></span>
            购物车({{cartCount}})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a v-bind:href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" alt />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>ReaMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <li class="product">
                <a href target="_blank">
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-1.jpg" alt />
                  </div>
                  <div class="pro-name">小米步伐电视</div>
                  <div class="pro-price">6666元</div>
                </a>
              </li>
              <li class="product">
                <a href target="_blank">
                  <div class="pro-img">
                    <img src="/imgs/nav-img/nav-3-2.jpg" alt />
                  </div>
                  <div class="pro-name">小米全面屏电视</div>
                  <div class="pro-price">1799元</div>
                </a>
              </li>
            </div>
          </div>
        </div>
        <div class="header-serch">
          <div class="wapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "nav-header",
  data() {
    return {
      phoneList: []
    };
  },
  computed: {
    username: function() {
      return this.$store.state.username;
    },
    cartCount: function() {
      return this.$store.state.cartCount;
    }
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    }
  },
  mounted() {
    this.getProductList();
    if (this.$route.params && this.$route.params.from == "login") {
      this.getCartCount();
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            categoryId: "100012"
          }
        })
        .then(res => {
          if (res.list.length > 6) {
            this.phoneList = res.list.slice(0, 6);
          }
        });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then(res => {
        //to-do 保存到vuex里面
        this.$store.dispatch("saveCartCount", res);
      });
    },
    logout() {
      this.axios.post("/user/logout").then(() => {
        Message.success("退出成功");
        this.$cookie.set("userId", "", { expires: "-1" });
        this.$store.dispatch("saveUserName", "");
        this.$store.dispatch("saveCartCount", "0");
      });
    },
    goToCart() {
      this.$router.push("/cart");
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #cfac95;
        text-align: center;
        color: #ffffff;
        margin-right: 0px;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-hover.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: 0.5s;
            background: #ffffff;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              &:before {
                content: "";
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              a {
                display: inline-block;
              }
              img {
                width: auto;
                margin-top: 26px;
                height: 111px;
              }
              .pro-img {
                height: 135px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
            }
          }
        }
      }
      .header-serch {
        width: 319px;
        .wapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            box-sizing: border-box;
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>