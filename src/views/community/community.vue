<template>
  <div id="community">
    <nav-bar class="nav-bar">
      <img slot="left" class="sgq_nav1_ss" src="~assets/img/community/rl_sgq_icon_sousuo@2x.png" />
      <div slot="center" class="sgq_nav1_bt">手工圈</div>
      <img slot="right" class="sgq_nav1_fb" src="~assets/img/community/rl_sgq_icon_fabu@2x.png" />
    </nav-bar>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
    >
      <tab-control :titles="['关注','推荐','最新','精华']" @tabClick="comTabClick" />
      <post-list :post="showpost" />
    </scroll>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import NavBar from "components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import PostList from "./childCopm/PostList.vue";

import { getCommunity } from "network/community";
import { imgRefreshMixin, scrollTopMixin } from "common/mixins";

export default {
  name: "Community",
  mixins: [imgRefreshMixin, scrollTopMixin],
  components: {
    NavBar,
    BScroll,
    Scroll,
    TabControl,
    PostList
  },
  data() {
    return {
      scroll: null,
      isTabFixed: false,
      tabOffsetTop: 0,
      post: {
        followd: [],
        recommend: [],
        new: [],
        essence: []
      },
      currentType: "followd"
    };
  },
  computed: {
    showpost() {
      return this.post[this.currentType];
    }
  },
  created() {
    this.getCommunity("followd");
    this.getCommunity("recommend");
    this.getCommunity("new");
    this.getCommunity("essence");
  },
  methods: {
    comTabClick(index) {
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
    },
    //网络请求
    getCommunity(type) {
      getCommunity(type).then(res => {
        this.post[type].push(...res[type]);
      });
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: #fff;
}
.sgq_nav1_ss {
  width: 0.41rem;
  height: 0.41rem;
}
.sgq_nav1_fb {
  width: 0.41rem;
  height: 0.43rem;
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
</style>