<template>
  <div class="details">
    <details-nav-bar class="details-nav" />
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <details-swiper :banners="topBanner" />
      <goods-info :goods="goods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <shopping-button class="shopping-button" @addCart="addCart" />
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import DetailsNavBar from "./childComps/DetailsNavBar";
import DetailsSwiper from "./childComps/DetailsSwiper";
import ShoppingButton from "./childComps/ShoppingButton.vue";
import GoodsInfo from "./childComps/GoodsInfo.vue";
import BackTop from "@/components/content/backTop/BackTop.vue";

import { getDetails } from "@/network/details";
import { imgRefreshMixin, scrollTopMixin } from "common/mixins";

export default {
  name: "Details",
  mixins: [imgRefreshMixin, scrollTopMixin],
  components: {
    DetailsNavBar,
    Scroll,
    DetailsSwiper,
    ShoppingButton,
    GoodsInfo,
    BackTop
  },
  data() {
    return {
      id: null,
      topBanner: {},
      goods: {}
    };
  },
  created() {
    /**
     * 对比分类ID并返回对应数据
     * id:id
     * data:json原始数据
     * */
    var queryDataId = function(id, data) {
      for (var i = 0; i < data.length; i++) {
        if (id == data[i].id) return data[i];
      }
    };
    //保存传入的id
    this.id = this.$route.params.id;

    //根据id请求详情数据
    getDetails(this.id).then(res => {
      const detailsInfo = queryDataId(this.id, res);
      //获取顶部的banner
      this.topBanner = detailsInfo;
      this.goods = detailsInfo;
    });
  },
  methods: {
    //加入购物车
    addCart() {
      //获取购物车需要展示的信息
      const product = {};
      product.image = this.goods.image;
      product.title = this.goods.title;
      product.desc = this.goods.text;
      product.price = this.goods.place;
      product.id = this.goods.id;

      //讲商品添加到购物车里
      //this.$store.commit("addCart", product);
      this.$store.dispatch("addCart", product);
    },
    destroyed() {
      //取消全局的事件监听
      this.$bus.$off("itemImgLoad", this.itemImgLister);
    }
  }
};
</script>
 
<style scoped>
.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 10;
}
.details-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 11;
}
.content {
  position: absolute;
  top: 0;
  bottom: 0.98rem;
  left: 0;
  right: 0;
}
.shopping-button {
  z-index: 10;
}
</style>
