<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 购物车bar -->
    <cart-list></cart-list>
    <cart-bot-bar></cart-bot-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childCopm/CartList.vue";
import CartBotBar from "./childCopm/CartBotBar.vue";

import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBotBar
  },
  computed: {
    ...mapGetters(["cartLength", "cartList"])
  }
};
</script>

<style scoped>
.cart {
  height: 100vh;
  position: relative;
}
.cart-nav {
  color: #fff;
  background-color: red;
}
</style>
