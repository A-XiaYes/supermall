<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">
        ☆
        {{ goodsItem.cfav }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad')
    }
  }
}
</script>

<style lang="less" scoped>
.goods-item {
  width: 48%;
  text-align: center;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    padding: 6px;
    color: #424242;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 5px;
    }
    .price {
      color: var(--color-high-text);
      margin-right: 5px;
    }
  }
}
</style>
