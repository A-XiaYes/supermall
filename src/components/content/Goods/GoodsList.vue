<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="item.shopId + index"
      :goodsItem='item'
    />
  </div>
</template>

<script>
import GoodsListItem from '@components/content/Goods/GoodsListItem'
export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
