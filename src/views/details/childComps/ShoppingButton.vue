<template>
  <div class="daohang">
    <div class="dianpu">
      <img src="~assets/img/details/YWL-TU_57.png" />
      <p class="zi">店铺</p>
    </div>
    <div class="zhongxian"></div>
    <div class="kefu">
      <img src="~assets/img/details/YWL-TU_59.png" />
      <p class="zi">客服</p>
    </div>
    <div class="jiaruche" @click="addCart">加入购物车</div>
    <div class="lijigoumai">立即购买</div>
  </div>
</template>

<script>
export default {
  name: "ShoppingButton",
  methods: {
    addCart() {
      this.$emit("addCart");
    }
  }
};
</script>

<style scoped>
.daohang {
  height: 0.99rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
}
.dianpu,
.zhongxian,
.kefu,
.jiaruche,
.lijigoumai {
  float: left;
}
.dianpu {
  width: 0.73rem;
  margin-left: 0.49rem;
  margin-top: 0.22rem;
}
.kefu {
  width: 0.9rem;
  margin-left: 0.31rem;
  margin-top: 0.22rem;
}
.jiaruche {
  width: 2.52rem;
  height: 0.99rem;
  line-height: 0.99rem;
  font-size: 0.24rem;
  color: #333333;
  text-align: center;
  border-left: 0.01rem solid #666666;
}
.lijigoumai {
  width: 2.51rem;
  height: 0.99rem;
  line-height: 0.99rem;
  font-size: 0.24rem;
  color: white;
  text-align: center;
  background: #ff5978;
}
.dianpu img,
.kefu img {
  width: 0.41rem;
  display: block;
}
.zi {
  font-size: 0.18rem;
  color: #333333;
}
.zhongxian {
  width: 0.02rem;
  height: 0.28rem;
  background: #666666;
  margin-top: 0.46rem;
}
</style>
