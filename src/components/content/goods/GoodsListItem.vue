<template>
  <div class="goods-item" @click="itemClick">
    <div class="pad">
      <img :src="goodsItem.image" @load="imageLoad" />
      <p class="hw_dabt">{{goodsItem.title}}</p>
      <p class="hw_xiaobt">{{goodsItem.text}}</p>
      <div class="hw_jiage">
        <div class="hw__jg fl">
          ￥
          <span>{{goodsItem.place}}</span>
        </div>
        <div class="hw_dizhi fr">{{goodsItem.mark}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    itemClick() {
      this.$router.push("/details/" + this.goodsItem.id);
    }
  }
};
</script>

<style scoped>
.goods-item {
  width: 50%;
  float: left;
  margin-bottom: 0.39rem;
  position: relative;
}
.goods-item img {
  width: 100%;
  border-radius: 4px;
}
.hw_dabt {
  font-size: 0.3rem;
  font-weight: bold;
  margin-top: 0.2rem;
  color: #333333;
}
.hw_xiaobt {
  font-size: 0.18rem;
  color: #999;
  height: 0.43rem;
}
.hw__jg {
  font-size: 0.18rem;
  color: #fe3a3a;
}
.hw__jg span {
  font-size: 0.24rem;
}
.hw_dizhi {
  font-size: 0.18rem;
  color: #999;
}

.goods .goods-item:nth-of-type(odd) .pad {
  padding-right: 0.1rem;
}
.goods .goods-item:nth-of-type(even) .pad {
  padding-left: 0.1rem;
}
</style>
