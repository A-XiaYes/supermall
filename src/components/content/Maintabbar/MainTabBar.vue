<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <template #item-icon>
          <img slot="item-icon" src="@static/img/tabbar/home.svg" alt />
        </template>
        <template #item-icon-active>
          <img slot="item-icon" src="@static/img/tabbar/home_active.svg" alt />
        </template>
        <template #item-text>
          <div slot="item-text">首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template #item-icon>
          <img slot="item-icon" src="@static/img/tabbar/category.svg" alt />
        </template>
        <template #item-icon-active>
          <img slot="item-icon" src="@static/img/tabbar/category_active.svg" alt />
        </template>
        <template #item-text>
          <div slot="item-text">分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template #item-icon>
          <img slot="item-icon" src="@static/img/tabbar/shopcart.svg" alt />
        </template>
        <template #item-icon-active>
          <img slot="item-icon" src="@static/img/tabbar/shopcart_active.svg" alt />
        </template>
        <template #item-text>
          <div slot="item-text">购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template #item-icon>
          <img slot="item-icon" src="@static/img/tabbar/profile.svg" alt />
        </template>
        <template #item-icon-active>
          <img slot="item-icon" src="@static/img/tabbar/profile_active.svg" alt />
        </template>
        <template #item-text>
          <div slot="item-text">我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@components/common/tabbar/TabBar";
import TabBarItem from "@components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>