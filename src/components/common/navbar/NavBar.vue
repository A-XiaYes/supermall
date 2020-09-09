<template>
  <div class="nav-bar">
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
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  width: 100%;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.15);
  font-size: 14PX;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>