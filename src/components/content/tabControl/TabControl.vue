<template>
  <div class="tab-control">
    <span
      v-for="(item, index) in titles"
      class="tab-control-item"
      :class="{active: index === currentIndex}"
      @click="itemClick(index)"
    >{{item}}</span>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  font-size: 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: #fff;
}
.tab-control-item {
  margin: 0 0.28rem;
  padding: 5px;
}

.active {
  color: var(--color-light-text);
  border-bottom: 3px solid var(--color-light-text);
}
</style>
