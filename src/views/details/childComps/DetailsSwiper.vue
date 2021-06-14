<template>
  <swiper class="banner">
    <swiper-item>
      <a href>
        <img :src="banners.image" alt />
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
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
</style>
