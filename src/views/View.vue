<template>
  <div id="view">
    <router-view></router-view>
    <nav>
      <span class="prve" @click="$router.go(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_icon_left"></use>
        </svg>
      </span>
      <span class="next" @click="$router.go(1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_icon_right"></use>
        </svg>
      </span>
    </nav>
  </div>
</template>
<style lang="less" scoped>
nav {
  background: #ffffff;
  position: fixed;
  bottom: 0px;
  width: 100%;
  text-align: center;
  height: 44px;
  span {
    margin: 20px;
    font: 24px/44px "";
  }
}
</style>