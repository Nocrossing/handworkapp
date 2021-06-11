<template>
  <swiper class="banner">
    <swiper-item v-for="item in banners" :detailsItem="item">
      <a href>
        <img :src="item.image" alt />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "DetailsSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
</style>
