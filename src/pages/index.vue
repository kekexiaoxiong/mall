<template>
  <div class="index">

  <div class = "box">
  </div>
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item ,i) in menuList" :key="i">
                  <li v-for="(sub,j) in item" :key="j">
                    <a v-bind:href="sub?'/#/product/'+sub.id : ''">
                      <img v-bind:src="sub? sub.img :'/imgs/item-box-1.png'" alt />
                      {{sub?sub.name : '小米'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
            </li>
          </ul>
        </div>

        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/'+ item.id">
              <img v-bind:src="item.img" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads">
        <a v-bind:href="'/#/product/'+ item.id" v-for="(item,index) in adsList" :key="index">
          <img v-lazy="item.img" alt />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h1>手机</h1>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img src="/imgs/mix-alpha.jpg" alt />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item,i) in phoneList" :key="i">
              <div class="item" v-for="(band,j) in item" :key="j">
                <span v-bind:class="{'new-pro':j%2==0}">新品</span>
                <div class="item-img">
                  <img v-lazy="band.mainImage" alt />
                </div>
                <div class="item-info">
                  <h3>{{band.name}}</h3>
                  <p>{{band.subtitle}}</p>
                  <p class="price" @click="addCart(band.id)">{{band.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Service-Bar></Service-Bar>
    <Modal
      title="提示"
      sureText="查看购物车"
      btnType="1"
      modalType="middle"
      v-bind:showModal="showModal"
      v-on:submit="gotoCart"
      v-on:cancel="showModal=false"
    >
      <template v-slot:body>
        <p>商品添加成功</p>
      </template>
    </Modal>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
import Modal from "./../components/Modal";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
    Modal
  },
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slider-4.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slider-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米cc9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8q青春班"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "redemi k20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "小米ddddd"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米cc9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8q青春班"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.png",
            name: "redemi k20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.png",
            name: "小米ddddd"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米cc9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8q青春班"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.png",
            name: "redemi k20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.png",
            name: "小米ddddd"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米cc9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8q青春班"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.png",
            name: "redemi k20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.png",
            name: "小米ddddd"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米cc9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8q青春班"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.png",
            name: "redemi k20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.png",
            name: "小米ddddd"
          }
        ],
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米cc9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8q青春班"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.png",
            name: "redemi k20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.png",
            name: "小米ddddd"
          }
        ]
      ],
      adsList: [
        {
          id: 33,
          img: "imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "imgs/ads/ads-4.jpg"
        }
      ],
      phoneList: [],
      showModal:false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14
          }
        })
        .then(res => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(0, 4)];
        });
    },
    addCart(id) {
     
       this.axios
         .post("/carts", {
           productId: id,
           selected: true
         })
         .then((res) => {
            this.showModal = true;
            this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
         })
         .catch(() => {
            this.showModal = true;
           });
    },
    gotoCart() {
      this.$router.push('/cart');
    }
  }
};
</script>

<style lang="scss" >
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/button.scss";
.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      height: 451px;
      width: 264px;
      z-index: 9;
      padding: 26px 0;
      background-color: #55585a6e;
      box-sizing: border-box;
      .menu-wrap {
        .menu-item {
          position: relative;
          height: 50px;
          line-height: 50px;
          a {
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            &:after {
              position: absolute;
              top: 17.5px;
              right: 30px;
              content: "";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: $colorG;
            position: absolute;
            top: -26px;
            left: 264px;
            border: 1px solid #e5e5e5;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                img {
                  width: 42px;
                  height: 35px;
                  vertical-align: middle;
                  margin-right: 15px;
                }
                a {
                  color: $colorB;
                }
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
    .banner {
      margin-bottom: 50px;
    }
  }
  .product-box {
    background-color: $colorJ;
    padding: 30px 0 50px;
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: #ffffff;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: #ffffff;
              &.new-pro {
                background: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
          }
          .item-img {
            img {
              width: 100%;
              height: 195px;
            }
          }
          .item-info {
            h3 {
              font-size: 14px;
              color: $colorB;
              line-height: 14px;
              font-weight: bold;
            }
            p {
              color: $colorD;
              line-height: 13px;
              margin: 6px auto 13px;
            }
            .price {
              color: #f20a0a;
              font-size: 13px;
              font-weight: bold;
              cursor: pointer;
              &:after {
                @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                content: "";
                margin-left: 5px;
                vertical-align: middle;
              }
            }
          }
        }
      }
    }
  }
}
</style>