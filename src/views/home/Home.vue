<template>
  <div id="home">
    <nav-bar>
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
        v-show="isShowTabControl"
        class="top-tab-control"
    />
    <scroll
      class="content"
      ref="scroll"
      @scrollPosition="scrollPosition"
      @pullingUp="loadMore"
      :probeType="3"
      :pullUpLoad="true"
    >
      <home-swiper :banners="banners" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods='showGoods' />
    </scroll>
    <back-top
      @click.native="backTop"
      v-show="isShowBack"
    />
  </div>
</template>

<script>
import NavBar from '@components/common/navbar/NavBar'
import TabControl from '@components/content/Tabcontrol/TabControl'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFeature from './childComps/HomeFeature'
import GoodsList from '@components/content/Goods/GoodsList'
import Scroll from '@components/common/scroll/Scroll'
import BackTop from '@components/content/BackTop/BackTop'
import { getHomeMultidata, getHomeGoods } from '@network/home'
import { debounce } from '@utils'
export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    GoodsList,
    Scroll,
    BackTop
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      // 控制回到顶部的显示和隐藏
      isShowBack: false,
      // tabControl距离顶部的距离
      tabOffsetTop: 0,
      // 控制tabControl的显示和隐藏
      isShowTabControl: false,
      isGetTabOffsetTop: true
    }
  },
  created () {
    // 获取首页banner 和 recommends 数据
    this._getHomeMultidata()
    // 获取首页商品数据
    this._getHomeGoods('pop')
    this._getHomeGoods('new')
    this._getHomeGoods('sell')
  },
  mounted () {
    // 监听商品列表图片加载完成的事件
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on('imgLoad', () => {
      // 调用scroll里refresh方法 重新计算高度
      // 防抖
      refresh()
    })
  },
  updated () {
    if (this.isGetTabOffsetTop) {
      // console.log(this.$refs.tabControl2.$el.offsetTop)
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
    this.isGetTabOffsetTop = false
  },
  methods: {
    _getHomeMultidata () {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },

    async _getHomeGoods(type) {
      const page = this.goods[type].page + 1
      const res = await getHomeGoods(type, page)
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page += 1
      // 调用scroll组件中的finishPullUp方法
      this.$refs.scroll.finishPullUp()
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      // 让两个TabControl的currentIndex保持一致
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 回到顶部  先拿scroll组件调用组件里面scrollTO方法
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    // 监听滚动的位置
    scrollPosition(position) {
      // console.log(position)
      if (-position.y > 1000) {
        this.isShowBack = true
      } else {
        this.isShowBack = false
      }
      // 判断是否显示TabControl
      this.isShowTabControl = -position.y > this.tabOffsetTop
    },
    // 下拉加载更多
    loadMore() {
      // console.log('加载更多')
      this._getHomeGoods(this.currentType)
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 50px;
  left: 0;
  right: 0;
}

.top-tab-control {
  position: relative;
  z-index: 10;
}
</style>
