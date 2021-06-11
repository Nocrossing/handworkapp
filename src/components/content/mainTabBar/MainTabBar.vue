<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/common_tab_hone_n@2x.png" />
      <img slot="item-icon-active" src="~assets/img/tabbar/common_tab_hone_s@2x.png" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/community">
      <img slot="item-icon" src="~assets/img/tabbar/common_tab_manualcircle_n@2x.png" />
      <img slot="item-icon-active" src="~assets/img/tabbar/common_tab_manualcircle_s@2x.png" alt />
      <div slot="item-text">手工圈</div>
    </tab-bar-item>
    <tab-bar-item path="/mall">
      <img slot="item-icon" src="~assets/img/tabbar/common_tab_shopping_n@2x.png" />
      <img slot="item-icon-active" src="~assets/img/tabbar/common_tab_shopping_s@2x.png" alt />
      <div slot="item-text">商城</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/common_tab_course_n@2x.png" />
      <img slot="item-icon-active" src="~assets/img/tabbar/common_tab_course_s@2x.png" alt />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/mine">
      <img slot="item-icon" src="~assets/img/tabbar/common_tab_me_n@2x.png" />
      <img slot="item-icon-active" src="~assets/img/tabbar/common_tab_me_s@2x.png" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>