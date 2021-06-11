<template>
  <div>
    <ul class="sy_jingxuan_xq">
      <li>
        <img src="~assets/img/home/rl_sy_jc1@2x.png" />
        <p class="xq_dabt">口金盒子</p>
        <p class="xq_xiaobt">充满夏天气息的结绳制作</p>
      </li>
      <li>
        <img src="~assets/img/home/rl_sy_jc2@2x.png" />
        <p class="xq_dabt">简单编绳</p>
        <p class="xq_xiaobt">充满夏天气息的结绳制作</p>
      </li>
      <li class="xq_teshu">
        <img src="~assets/img/home/rl_sy_jc3@2x.png" />
        <p class="xq_dabt">口金盒子</p>
        <p class="xq_xiaobt">充满夏天气息</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<style scoped>
.sy_jingxuan_xq {
  overflow: hidden;
  padding-left: 0.32rem;
}

.sy_jingxuan_xq li {
  float: left;
  margin-right: 0.16rem;
}
.sy_jingxuan_xq li img {
  width: 2.8rem;
  height: 3.14rem;
  display: block;
}
.xq_dabt {
  font-size: 0.24rem;
  color: #333;
  font-weight: bold;
  margin-top: 0.18rem;
}
.xq_xiaobt {
  font-size: 0.18rem;
  color: #999;
}
.sy_jingxuan_xq li.xq_teshu {
  width: 1.24rem;
  margin-right: 0;
}
</style>
