<template>
  <div class="cart-list-wrap">
    <scroll class="content" ref="scroll">
      <cart-list-item :itemInfo="item" v-for="(item, index) in cartList" :key="index"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll.vue";
import CartListItem from "./CartListItem.vue";
export default {
  name: "CartList",
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
  },
  components: {
    CartListItem,
    Scroll
  },
  activated() {
    this.$scroll.scroll.refresh();
  }
};
</script>

<style scoped="scoped">
.cart-list-wrap {
  position: relative;
  top: 44px;
  bottom: 89px;
  background-color: rgb(255, 255, 255);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>