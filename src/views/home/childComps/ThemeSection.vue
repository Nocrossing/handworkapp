<template>
  <div class="theme-section">
    <div class="sy_meiri_l fl">
      <img src="~assets/img/home/rl_sy_meiri_pic1@2x.png" />
    </div>
    <div class="sy_meiri_r fr">
      <img class="sy_meiri_rs" src="~assets/img/home/rl_sy_meiri_pic2@2x.png" />
      <img src="~assets/img/home/rl_sy_meiri_pic3@2x.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ThemeSection"
};
</script>

<style scoped>
.theme-section {
  padding: 0 0.32rem;
  overflow: hidden;
}
.sy_meiri_l img {
  width: 2.8rem;
  height: 3.16rem;
  display: block;
}
.sy_meiri_r img {
  width: 3.9rem;
  height: 1.5rem;
  display: block;
}
.sy_meiri_rs {
  margin-bottom: 0.16rem;
}
</style>
