<template>
  <div class="goods-info">
    <div class="y_goumai">
      <div class="y_miaoshu">
        <ul class="y_xqms">
          <li class="zw">{{goods.title}}</li>
          <p>{{goods.text}}</p>
        </ul>
      </div>
      <div class="y_miaoshu_jiage">
        <div class="jiage">
          <ul class="jiage1">
            ￥
            <span>{{goods.place}}</span>
          </ul>
          <ul class="shoucang">
            <img src="~assets/img/details/yml_icon213_03.png" />
            <span>3</span>
          </ul>
        </div>
      </div>
      <div class="y_xq_chandi">
        <ul class="xp_chandi">
          <li class="by">快递：包邮</li>
          <li class="kc">库存1件</li>
          <li class="chandi_dl">{{goods.mark}}</li>
        </ul>
      </div>
      <div class="y_fgx">
        <p></p>
      </div>
    </div>
    <!--描述-->
    <div class="y_shuxi">
      <ul class="y_xuanze">
        选择
        <span>请选择商品属性</span>
      </ul>
    </div>
    <div class="y_fgx2">
      <p></p>
    </div>
    <div class="y_pj">
      <ul class="y_pj1">
        <li class="pj_zhenwen">商品评价(0)</li>
      </ul>
      <ul class="y_pj2">
        <li>暂无评价</li>
      </ul>
    </div>
    <div class="y_fgx3">
      <p></p>
    </div>
    <div class="y_dianpu">
      <div class="y_dianpu_zuo">
        <img src="~assets/img/details/YWL-TU_52.png" />
        <p class="y_dianpu_zuo_wz">创心手作官方旗舰店</p>
      </div>
      <div class="y_dianpu_you">进入店铺</div>
    </div>
    <div class="y_fgx4">
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
  // methods: {
  //   imageLoad() {
  //     this.$bus.$emit("itemImageLoad");
  //   }
  // }
};
</script>

<style scoped>
.y_xqms {
  margin: 0 0.32rem;
  margin-top: 0.3rem;
  float: right;
  height: 1.46rem;
  width: 6.86rem;
}
.y_xqms li {
  font-size: 0.3rem;
  color: #333333;
  padding-right: 0.32rem;
  width: 6.86rem;
}
.y_xqms p {
  font-size: 0.18rem;
  color: #999999;
  height: 0.74rem;
}
.y_miaoshu_jiage {
  font-size: 0.3rem;
  color: #fe3a3a;
  margin: 0 0.32rem;
}
.jiage1 {
  width: 6.76rem;
  height: 0.75rem;
}
.shoucang {
  float: right;
}
.y_xq_chandi {
  float: right;
  left: 0.32rem;
  margin-top: 0.6rem;
  width: 6.86rem;
  height: 0.45rem;
}
.xp_chandi li {
  font-size: 0.18rem;
  color: #999999;
  float: left;
  width: 33.3%;
  left: 0.32rem;
}
.y_fgx p {
  width: 7.5rem;
  height: 0.2rem;
  background: #f0f0f0;
  margin-top: 2.45rem;
}
.y_shuxi {
  font-size: 0.24rem;
  color: #999999;
}
.y_xuanze {
  margin-left: 0.32rem;
  margin-top: 0.3rem;
  height: 0.52rem;
}
.y_shuxi span {
  color: #333333;
  margin-left: 0.6rem;
}
.y_fgx2 p {
  width: 7.5rem;
  height: 0.2rem;
  background: #f0f0f0;
}
.y_pj1 {
  font-size: 0.24rem;
  margin-top: 0.32rem;
  margin-left: 0.32rem;
}
.y_pj2 {
  font-size: 0.24rem;
  color: #999999;
  margin-top: 0.45rem;
  margin-left: 0.32rem;
}
.y_fgx3 p {
  width: 7.5rem;
  height: 0.2rem;
  background: #f0f0f0;
  margin-top: 0.32rem;
}
.y_dianpu_zuo {
  height: 1.27rem;
  width: 5.62rem;
  float: left;
  margin-top: 0.37rem;
}
.y_dianpu_you {
  float: right;
  width: 1.21rem;
  height: 0.32rem;
  font-size: 0.18rem;
  color: #f0f0f0;
  background: #fe3a3a;
  border-radius: 0.16rem;
  line-height: 0.32rem;
  text-align: center;
  margin-top: 0.5rem;
  margin-right: 0.32rem;
}
.y_dianpu_zuo img {
  display: block;
  height: 0.63rem;
  width: 0.63rem;
  margin-left: 0.32rem;
  float: left;
}
.y_dianpu_zuo_wz {
  float: left;
  font-size: 0.24rem;
  margin-top: 0.1rem;
  margin-left: 0.23rem;
}
.y_fgx4 {
  width: 7.5rem;
  height: 0.2rem;
  background: #f0f0f0;
  margin-top: 1.3rem;
}
</style>
