<template>
  <div id="view">
    <router-view></router-view>
    <nav>
      <router-link to="/home">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_tab_home"></use>
        </svg>
        <p>首页</p>
      </router-link>
      <router-link to="/reservation">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_tab_order"></use>
        </svg>
        <p>订餐</p>
      </router-link>
      <router-link to="/shopping">
        <span class="mark">{{ mark }}</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_tab_shop"></use>
        </svg>
        <p>购物车</p>
      </router-link>
      <router-link to="/mine">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_tab_user"></use>
        </svg>
        <p>我的</p>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mark: 99,
    };
  },
};
</script>
<style lang="less" scoped>
// 弹性布局+固定定位的底部导航
nav {
  background: #fff;
  padding-top: 10px;
  height: 50px;
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: center;
  display: flex;
  justify-content: space-around;
  a {
    position: relative;
    font-size: 12px;
    &.router-link-exact-active {
      color: #ff8a2b;
    }
    .icon {
      font-size: 24px;
    }
    //购物车角标样式
    .mark {
      position: absolute;
      top: -6px;
      right: -6px;
      width: 17px;
      height: 17px;
      color: #ffffff;
      text-align: center;
      font: 10px/17px "";
      border-radius: 100%;
      background: #ff8a2b;
    }
  }
}
</style>