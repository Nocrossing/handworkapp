<template>
  <div class="navbar">
    <div class="navbar-flex">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar {
  padding: 0 0.32rem;
}
.navbar-flex {
  height: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
