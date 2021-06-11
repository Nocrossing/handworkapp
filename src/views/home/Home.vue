<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div class="sy_sousuo" slot="center">
        <input type="text" placeholder="花梨木 招财锦鲤" />
        <img src="~assets/img/home/rl_sy_icon_sousuo@2x.png" />
      </div>
    </nav-bar>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
    >
      <home-swiper :banners="banners" />
      <home-king :recommends="recommends" />
      <div class="section-title">每日一逛</div>
      <theme-section />
      <div class="section-title">教程精选</div>
      <course-section />
      <div class="section-title">好物推荐</div>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>


<script>
import HomeSwiper from "./childComps/HomeSwiper";
import NavBar from "components/common/navbar/NavBar";
import HomeKing from "./childComps/HomeKing";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import CourseSection from "./childComps/CourseSection.vue";
import ThemeSection from "./childComps/ThemeSection.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { imgRefreshMixin, scrollTopMixin } from "common/mixins";
import { debounce } from "common/ueils";

export default {
  name: "Home",
  mixins: [imgRefreshMixin, scrollTopMixin],
  components: {
    HomeSwiper,
    NavBar,
    HomeKing,
    GoodsList,
    Scroll,
    BackTop,
    CourseSection,
    ThemeSection
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        followd: []
      },
      currentType: "followd",
      saveY: 0,
      itemImgLister: null
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType];
    }
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {
    this.$scroll.scroll.scrollTo(0, this.saveY, 0);
    this.$scroll.scroll.refresh();
  },
  deactivated() {
    //保存Y值
    this.saveY = this.$refs.scroll.getScrollY();

    //取消全局的事件监听
    this.$bus.$off("itemImgLoad", this.itemImgLister);
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("followd");
  },
  mounted() {
    //图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh);
    // this.$bus.$on("itemImageLoad", () => {
    //   refresh();
    // });
  },
  methods: {
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 500;
    },
    //网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.banners;
        this.recommends = res.recommends;
      });
    },
    getHomeGoods(type) {
      getHomeGoods(type).then(res => {
        this.goods[type].push(...res[type]);
      });
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: #fff;
}
.sy_sousuo {
  position: relative;
}
.sy_sousuo input {
  width: 6.86rem;
  height: 0.54rem;
  background: #f0f0f0;
  border-radius: 0.27rem;
  border: 0;
  font-size: 0.24rem;
  line-height: 0.54rem;
  text-indent: 0.66rem;
  display: block;
}
.sy_sousuo img {
  width: 0.26rem;
  height: 0.26rem;
  position: absolute;
  left: 0.3rem;
  top: 0.14rem;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 0.88rem;
  bottom: 0.98rem;
  left: 0;
  right: 0;
  box-sizing: border-box;
}
.tab-control-show {
  position: relative;
  top: 0.875rem;
  z-index: 9;
}
.section-title {
  padding: 0.5rem 0 0.05rem 0.32rem;
  font-size: 0.36rem;
  color: #333;
  height: 0.6rem;
  font-weight: bold;
}
</style>