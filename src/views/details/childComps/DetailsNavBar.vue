<template>
  <nav-bar class="details">
    <img slot="left" src="~assets/img/details/ywl-iocn1213_03.png" @click="backClick" />
    <div slot="right">
      <img src="~assets/img/details/ywl-iocn1213_08.png" />
      <img class="pic" src="~assets/img/details/ywl-iocn1213_05.png" />
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

export default {
  name: "DetailsNavBar",
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.details img {
  height: 0.41rem;
}
.pic {
  margin-left: 0.6rem;
}
</style>
