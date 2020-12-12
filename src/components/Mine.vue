<template>
  <div id="mine">
    <header>
      <div class="user">
        <div class="photo"><img src="../assets/img/logo.jpg" alt="" /></div>
        <div>
          <h1>用户名</h1>
          <h2>用户卡号：1234567</h2>
        </div>
        <div class="topup">立即充值</div>
      </div>
      <div class="user">
        <span>账户余额</span><span class="money">￥300.<b>00</b></span>
      </div>
    </header>
    <main>
      <div class="title">
        <span>我的订单</span
        ><router-link :to="{ path: '/view/order', query: { s: 0 } }"
          >查看全部</router-link
        >
      </div>
      <div>
        <router-link :to="{ path: '/view/order', query: { s: 1 } }">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-SJ_icon_jiucan"></use>
          </svg>
          <p>带就餐</p>
        </router-link>
        <router-link :to="{ path: '/view/order', query: { s: 2 } }">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-daifukuan"></use>
          </svg>
          <p>待付款</p>
        </router-link>
        <router-link :to="{ path: '/view/order', query: { s: 3 } }">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-SJ_icon_wancheng"></use>
          </svg>
          <p>已完成</p>
        </router-link>
        <router-link :to="{ path: '/view/order', query: { s: 4 } }">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tuikuan"></use>
          </svg>
          <p>已取消</p>
        </router-link>
      </div>
    </main>
    <nav>
      <router-link to="/view/history">
        <span>消费记录</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_icon_right"></use>
        </svg>
      </router-link>
      <router-link to="/view/personal">
        <span>个人信息</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_icon_right"></use>
        </svg>
      </router-link>
      <router-link to="/view/pay">
        <span>修改支付密码</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_icon_right"></use>
        </svg>
      </router-link>
    </nav>
  </div>
</template>
<style lang="less" scoped>
header {
  color: #fff;
  border-radius: 0px 0px 8px 8px;
  background: linear-gradient(to right, #fee140 15%, #fa709a 100%);
  padding: 0 20px 10px 30px;
  font: 14px / normal "";
  .user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    b {
      zoom: 0.7;
    }
  }
  .photo {
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 50px;
      height: 50px;
    }
  }
  h1,
  .money {
    font: 18px / normal "";
  }
  .topup {
    border: 1px solid #ffffff;
    height: 24px;
    padding: 0 8px;
    font: 14px/24px "";
    border-radius: 12px;
  }
}
main {
  margin: 12px 16px;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
  div {
    display: flex;
    text-align: center;
    justify-content: space-around;
    .icon {
      font-size: 30px;
    }
    p {
      font: 14px / normal "";
    }
  }
  .title {
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 10px;
    span {
      font: 14px / normal "";
    }
    a {
      font: 12px / normal "";
      color: #909399;
    }
  }
}
nav {
  background: #fff;
  padding: 0 16px;
  a {
    font: 14px/44px "";
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    &:last-of-type {
      border-bottom: none;
    }
    .icon {
      font-size: 24px;
    }
  }
}
</style>