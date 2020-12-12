<template>
  <div id="shopping">
    <div class="info">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-SJ_icon_notify"></use>
      </svg>
      <p>请在20:00前完成支付。</p>
    </div>
    <main>
      <template v-if="ls">
        <div class="item">
          <h2>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-SJ_icon_circle"></use></svg
            ><span>食堂A</span>
          </h2>
          <ul v-for="i in 2" :key="i">
            <li>
              <div class="check">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-SJ_icon_circle"></use>
                </svg>
              </div>
              <div class="list">
                <div class="pic">
                  <img src="../assets/img/logo.jpg" alt="" />
                </div>
                <div class="con">
                  <h3>强生健体套餐A</h3>
                  <p>香辣鸡腿堡1，薯条，鸡块3，低脂可乐1</p>
                  <i>提示文本</i>
                  <div>
                    <span>￥1.5</span>
                    <dl>
                      <dd>-</dd>
                      <dt>3</dt>
                      <dd>+</dd>
                    </dl>
                  </div>
                </div>
                <div class="mark">午餐</div>
              </div>
            </li>
          </ul>
        </div>
      </template>
      <template v-else>购物车为空</template>
    </main>
    <nav>
      <span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_icon_circle"></use>
        </svg>
        全选
      </span>
      <span>共15份 合计：<i>￥123</i></span>
      <b>结算</b>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ls: [], //购物车中餐品列表
      // 结算选择项
    };
  },
};
</script>
<style lang="less" scoped>
.info {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 100;
}
main {
  padding: 60px 16px;
  .item {
    border-radius: 8px;
    background: #ffffff;
    margin-bottom: 20px;
    h2 {
      height: 44px;
      span {
        font: 14px/44px "";
      }
      .icon {
        margin: 0 10px;
      }
    }
    ul {
      position: relative;
      border-top: 1px solid #dbdbdb;
      overflow: hidden;
      li {
        position: relative;
        display: flex;
        align-items: center;
      }
    }
    .check {
      margin: 0 10px;
      font-size: 20px;
    }
    .list {
      position: relative;
      padding: 10px;
      display: flex;
      width: 100%;
      img {
        width: 80px;
        height: 80px;
      }
      .con {
        padding-left: 10px;
        width: 100%;
        h3 {
          font-size: 14px;
        }
        p {
          font-size: 10px;
          color: #aaaaaa;
        }
        i {
          font: 10px/24px "";
          color: #ff5543;
        }
        div {
          display: flex;
          justify-content: space-between;
          padding-top: 8px 0;
          span {
            font: bold 14px / normal "";
          }
          dl {
            display: flex;
            justify-content: space-between;
            dt {
              font: 14px/22px "";
              margin: 0 10px;
            }
            dd {
              background: #ff8a2b;
              border-radius: 100%;
              width: 22px;
              height: 22px;
              font: 20px/22px "";
              color: #ffffff;
              text-align: center;
            }
          }
        }
      }
      .mark {
        position: absolute;
        background: #ff8a2b;
        color: #ffffff;
        border-radius: 0 10px 10px 0;
        height: 20px;
        font: 12px/20px "";
        padding: 0 6px;
        left: 0px;
        top: 14px;
      }
    }
  }
}
nav {
  display: flex;
  position: fixed;
  bottom: 60px;
  width: 100%;
  background: #ffffff;
  justify-content: space-around;
  align-items: center;
  height: 52px;
  i {
    color: #ff8a2b;
  }
  b {
    background: #ff8a2b;
    width: 88px;
    height: 32px;
    font: 14px/32px "";
    border-radius: 16px;
    color: #ffffff;
    text-align: center;
  }
}
</style>