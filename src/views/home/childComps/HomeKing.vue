<template>
  <div class="hk">
    <div v-for="item in recommends" class="hk-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <p>{{item.name}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeKing",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.hk {
  text-align: center;
  width: 100%;
  display: flex;
  padding: 0.4rem 0 0.3rem;
  border-bottom: 0.1rem solid #f0f0f0;
  font-size: 0.26rem;
}
.hk-item {
  flex: 1;
}
.hk-item img {
  width: 1.1rem;
  height: 1.1rem;
  margin-bottom: 0.01rem;
}
</style>
