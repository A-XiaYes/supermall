<template>
  <div class="tab-control">
    <!-- <div class="tab-control-item" 
         v-for="(item, index) in titles"
         :key="index"
         :class="{ active: currentIndex === index }"
         @click="itemClick(index)">
         <span>{{ item }}</span>
    </div> -->

    <van-tabs v-model="active" swipeable color="#ff5777" title-active-color="#ff5777">
      <van-tab v-for="(item, index) in titles" :title="item" :key="index">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0,
      active: 2,
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background: #fff;
  font-size: 14PX;
  // .tab-control-item {
  //   flex: 1;
  //   span {
  //     padding: 3px;
  //   }
  // }
  // .active {
  //   color: var(--color-high-text);
  //   span {
  //     border-bottom: 3px solid var(--color-high-text);
  //   }
  // }
}

/deep/ .van-tabs {
  flex: 1;
  .van-tabs__line {
    bottom: 22px;
  }
}
</style>