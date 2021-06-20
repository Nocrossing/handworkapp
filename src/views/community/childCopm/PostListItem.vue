<template>
  <div>
    <div class="sgq_liebiao">
      <img class="liebiao_tx fl" :src="postItem.portrait" />
      <div class="liebiao_mz fl">
        <p class="mz">{{postItem.userName}}</p>
        <p>6小时前</p>
      </div>
      <div class="sgq_liebiao_gz fr">+ 关注</div>
    </div>
    <div class="liebiao_wenzi">
      <a href="02-xiangping.html">{{postItem.decration}}</a>
    </div>
    <ul class="liebiao_tupian">
      <li v-for="item in postItem.img">
        <img :src="item" />
      </li>
    </ul>
    <ul class="liebiao_zan">
      <li>
        <img class="fl" src="~assets/img/community/rl_sgq_icon_dianzan@2x.png" />
        <p class="fl">26</p>
      </li>
      <li>
        <img class="fl" src="~assets/img/community/rl_sgq_icon_pinlun@2x.png" />
        <p class="fl">26</p>
      </li>
      <li class="liebiao_zan_fx">
        <img class="fl" src="~assets/img/community/rl_sgq_icon_fenxiang@2x.png" />
        <p class="fl">分享</p>
      </li>
    </ul>
    <div class="liebiao_xian"></div>
  </div>
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    postItem: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style scoped>
.sgq_liebiao {
  height: 1rem;
  margin: 0.5rem 0.32rem 0 0.32rem;
  overflow: hidden;
}
.sgq_liebiao img {
  width: 0.65rem;
  height: 0.65rem;
  display: block;
  margin-right: 0.13rem;
  border-radius: 50%;
}
.liebiao_mz {
  font-size: 0.18rem;
  color: #999;
}
.mz {
  font-size: 0.3rem;
  color: #333;
}
.sgq_liebiao img.huiyuan {
  width: 0.48rem;
  height: 0.23rem;
  display: block;
  margin-top: 0.08rem;
  margin-left: 0.13rem;
}
.sgq_liebiao_gz {
  width: 1.1rem;
  height: 0.5rem;
  background: #ff5978;
  font-size: 0.24rem;
  font-weight: bold;
  color: white;
  border-radius: 0.1rem;
  line-height: 0.5rem;
  text-align: center;
  margin-top: 0.08rem;
}
.liebiao_wenzi {
  height: 0.6rem;
  margin: 0 0.32rem 0.2rem;
  font-size: 0.26rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  word-break: break-all;
}
.liebiao_wenzi a {
  color: #333333;
}
.liebiao_tupian {
  margin: 0 0.32rem;
  overflow: hidden;
}
.liebiao_tupian li {
  float: left;
  margin-right: 0.12rem;
  margin-bottom: 0.12rem;
}
.liebiao_tupian li img {
  width: 2.2rem;
  height: 1.9rem;
  display: block;
}
.liebiao_tupian li:nth-child(3n) {
  margin-right: 0;
}

.liebiao_zan {
  width: 100%;
  overflow: hidden;
  height: 0.6rem;
  margin-top: 0.21rem;
}
.liebiao_zan li {
  float: left;
  font-size: 0.3rem;
  width: 33.3%;
}
.liebiao_zan li.liebiao_zan_fx {
  font-size: 0.24rem;
}
.liebiao_zan li img {
  width: 0.31rem;
  height: 0.31rem;
  margin-right: 0.14rem;
  display: block;
  margin-left: 0.8rem;
  margin-top: 0.03rem;
}
.liebiao_xian {
  height: 0.16rem;
  background: #f0f0f0;
}
</style>
