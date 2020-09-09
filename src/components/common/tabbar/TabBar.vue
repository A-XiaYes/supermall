<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style lang="less" scoped>
#tab-bar {
  display: flex;
  // justify-content: space-around;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background: #f6f6f6;
  box-shadow: 0px -1px 10px 0px rgba(0, 0, 0, 0.15);
  font-size: 14PX;
}
</style>