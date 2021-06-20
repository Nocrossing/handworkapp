<template>
  <div class="post-list">
    <post-list-item v-for="item in post" :post-item="item" />
  </div>
</template>

<script>
import PostListItem from "./PostListItem.vue";
export default {
  components: { PostListItem },
  name: "PostList",
  props: {
    post: {
      type: Array,
      default: []
    }
  }
};
</script>

<style scoped>
</style>
