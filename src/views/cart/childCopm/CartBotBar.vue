<template>
  <div class="cart-bot-bar flex">
    <div class="flex">
      <check-button :is-checked="isSelectAll" class="check-button" @click.native="checkClick"></check-button>
      <label for="check">全部</label>
    </div>
    <div>合计：{{totalPrice}}</div>
    <div class="add">去结算{{checkLength}}</div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton.vue";

import { mapGetters } from "vuex";

export default {
  components: { CheckButton },
  name: "CartBotBar",
  computed: {
    ...mapGetters(["cartLength", "cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return "(" + this.cartList.filter(item => item.checked).length + ")";
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;

      //1.使用filter
      //return !(this.cartList.filter(item => !item.checked).length)

      //2.使用find
      return !this.cartList.find(item => !item.checked);

      //3.普通遍历
      // for (let item of this.cartList) {
      // 	if(!item.checked){
      // 		return false
      // 	}
      // }
      // return true
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        //全部选中
        this.cartList.forEach(item => (item.checked = false));
      } else {
        //部分或全部选中
        this.cartList.forEach(item => (item.checked = true));
      }
    }
  }
};
</script>

<style scoped="scoped">
.cart-bot-bar {
  position: fixed;
  bottom: 0.98rem;
  left: 0;
  right: 0;
  height: 50px;
  padding-left: 0.32rem;
  font-size: 18px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-top: 1px solid #ececec;
}
.check-button {
  width: 14px;
  height: 14px;
  overflow: hidden;
  margin-right: 5px;
}
.add {
  background-color: red;
  text-align: center;
  line-height: 50px;
  width: 100px;
  color: #fff;
}
</style>
