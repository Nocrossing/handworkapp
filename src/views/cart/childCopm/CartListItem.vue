<template>
  <div>
    <div class="cart-list-main flex">
      <div class="cart-list-left flex">
        <check-button
          class="check-button"
          :is-checked="itemInfo.checked"
          @click.native="checkClick"
        />
        <img :src="itemInfo.image" alt class="goods-img" />
      </div>
      <div class="cart-list-right">
        <div class="goods-name one-txt-cut">{{itemInfo.title}}</div>
        <div class="goods-info flex">
          <span class="price">￥{{itemInfo.price}}</span>
          <span>x{{itemInfo.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      this.itemInfo.checked = !this.itemInfo.checked;
    }
  }
};
</script>

<style scoped="scoped">
.cart-list-main {
  padding: 0.32rem;
  border-bottom: 1px solid #ececec;
}
.cart-list-left {
  width: 30%;
  align-items: center;
}
.check-button {
  width: 14px;
  height: 14px;
  overflow: hidden;
}
.goods-img {
  width: 66px;
  height: 66px;
  overflow: hidden;
  border: 1px solid #ececec;
  margin: 0 10px;
  border-radius: 6px;
  vertical-align: middle;
}
.cart-list-right {
  width: 70%;
  position: relative;
}
.goods-name {
  width: 100%;
  font-size: 13px;
}
.goods-info {
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.price {
  color: #f9cd0b;
}
</style>
