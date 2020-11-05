<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)
export default {
  name: 'Scroll',
  data () {
    return {
      scroll: null,
      message: 'heihei'
    }
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      defaule() {
        return false
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  beforeDestroy () {
    this.scroll.destroy()
  },
  methods: {
    init() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true,
        pullUpLoad: this.pullUpLoad
      })
      // 监听滚动事件
      this.scroll.on('scroll', (position) => {
        // console.log(position.x, position.y)
        this.$emit('scrollPosition', position)
      })
      // 下拉到底部时触发的回调
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    // 回到顶部方法
    scrollTo(x, y, time = 500) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    // 结束上拉加载行为
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    // 重新刷新计算高度
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>

<style lang="less" scoped>
</style>
