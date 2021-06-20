<template>
  <div id="mall">
    <nav-bar class="nav-bar">
      <div class="sy_sousuo" slot="center">
        <input type="text" placeholder="花梨木 招财锦鲤" />
        <img src="~assets/img/home/rl_sy_icon_sousuo@2x.png" />
      </div>
      <img slot="right" class="sgq_nav1_fb" src="~assets/img/home/rl_shang_icon_gwc@2x.png" />
    </nav-bar>
    <tab-control
      class="tab-control-show"
      :titles="['关注','推荐','最新','精华']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
    >
      <tab-control :titles="['关注','推荐','最新','精华']" @tabClick="tabClick" ref="tabControl2" />
      <goods-list :goods="showGoods" />
    </scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { imgRefreshMixin, scrollTopMixin } from "common/mixins";

export default {
  name: "Mall",
  mixins: [imgRefreshMixin, scrollTopMixin],
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      goods: {
        followd: [],
        recommend: [],
        new: [],
        essence: []
      },
      currentType: "followd",
      scroll: null,
      isTabFixed: false,
      tabOffsetTop: 0,
      itemImgLister: null
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType];
    }
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("followd");
    this.getHomeGoods("recommend");
    this.getHomeGoods("new");
    this.getHomeGoods("essence");
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
  mounted() {},
  methods: {
    //事件监听相关
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "followd";
          break;
        case 1:
          this.currentType = "recommend";
          break;
        case 2:
          this.currentType = "new";
          break;
        case 3:
          this.currentType = "essence";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // backTop() {
    //   this.$refs.scroll.scrollTo(0, 0);
    // },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 500;

      // 2.决定tabControl是否吸顶(position: relative)
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
#mall {
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: #fff;
}
.sy_sousuo {
  position: relative;
}
.sy_sousuo input {
  width: 6rem;
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
.sgq_nav1_ss {
  width: 0.41rem;
  height: 0.41rem;
}
.sgq_nav1_fb {
  width: 0.44rem;
}
.sgq_nav1_bt {
  font-size: 0.4rem;
}
.wrapper {
  position: absolute;
  top: 0.88rem;
  bottom: 0.98rem;
  left: 0;
  right: 0;
  overflow: hidden;
  /*overflow-y: scroll;*/
}
.tab-control-show {
  position: relative;
  top: -0.09rem;
  background-color: #fff;
  z-index: 9;
}
</style>