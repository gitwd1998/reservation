<template>
  <div id="order">
    <nav>
      <router-link
        :to="{ path: '/view/order', query: { s: i } }"
        v-for="(v, i) in n"
        :key="i"
        >{{ v }}</router-link
      >
    </nav>
    <main>
      <div class="item">
        <!-- 窗口item -->
        <dl>
          <dt>食堂A-窗口A</dt>
          <!-- 餐品item -->
          <dd>
            <div class="pic">
              <img src="../assets/img/logo.jpg" alt="" />
            </div>
            <div class="con">
              <h3>黄焖鸡</h3>
              <h4>香辣鸡腿堡1，薯条，鸡块3，低脂可乐1</h4>
              <h5>就餐时间：03/24 12:00-14:00</h5>
              <div>
                <span>￥1.5 <b>X1</b></span>
                <i>查看二维码</i>
              </div>
            </div>
            <div class="mark type m">早餐</div>
            <div class="mark status one">待就餐</div>
          </dd>
          <!-- 餐品item -->
          <dd>
            <div class="pic">
              <img src="../assets/img/logo.jpg" alt="" />
            </div>
            <div class="con">
              <h3>黄门茄子</h3>
              <h4>香辣鸡腿堡1，薯条，鸡块3，低脂可乐1</h4>
              <h5>就餐时间：03/24 12:00-14:00</h5>
              <div>
                <span>￥1.5 <b>X1</b></span>
                <i>查看二维码</i>
              </div>
            </div>
            <div class="mark type e">晚餐</div>
            <div class="mark status three">已完成</div>
          </dd>
        </dl>
        <!-- 窗口item -->
        <dl>
          <dt>食堂A-窗口B</dt>
          <!-- 餐品item -->
          <dd>
            <div class="pic">
              <img src="../assets/img/logo.jpg" alt="" />
            </div>
            <div class="con">
              <h3>黄焖鸡</h3>
              <h4>香辣鸡腿堡1，薯条，鸡块3，低脂可乐1</h4>
              <h5>就餐时间：03/24 12:00-14:00</h5>
              <div>
                <span>￥1.5 <b>X1</b></span>
                <i>查看二维码</i>
              </div>
            </div>
            <div class="mark type m">早餐</div>
            <div class="mark status one">待就餐</div>
          </dd>
          <!-- 餐品item -->
          <dd>
            <div class="pic">
              <img src="../assets/img/logo.jpg" alt="" />
            </div>
            <div class="con">
              <h3>强生健体套餐A</h3>
              <h4>香辣鸡腿堡1，薯条，鸡块3，低脂可乐1</h4>
              <h5>就餐时间：03/24 12:00-14:00</h5>
              <div>
                <span>￥1.5 <b>X1</b></span>
                <i>查看二维码</i>
              </div>
            </div>
            <div class="mark type a">早餐</div>
            <div class="mark status two">待就餐</div>
          </dd>
        </dl>
        <footer><i>共2件 ￥3.3</i><b>取消订单</b></footer>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: ["全部", "带就餐", "待付款", "已完成", "已取消"], //状态码[0,1,2,3,4]
      a: this.$route.query.s,
      l: [
        {
          c: "食堂A",
          w: [
            {
              w: "窗口A",
              s: 1,
              o: [{ t: "早饭" }, { t: "午饭" }, { t: "晚饭" }],
            },
            {},
          ],
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
nav {
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  width: 100%;
  z-index: 100;
  font: 13px / normal "";
  background: #fff;
  a {
    padding: 10px 0;
  }
  .router-link-exact-active {
    border-bottom: 2px solid #ff8a2b;
    color: #ff8a2b;
  }
}
main {
  padding: 50px 16px 60px;
  .item {
    border-radius: 8px;
    background: #fff;
  }
  dt {
    border-bottom: 1px solid #dbdbdd;
    padding: 10px;
    font: 14px / normal "";
  }
  dd {
    border-bottom: 1px solid #dbdbdd;
    position: relative;
    padding: 10px;
    display: flex;
    .pic {
      img {
        width: 80px;
        height: 80px;
      }
    }
    .con {
      padding-left: 10px;
      width: 100%;
      font: 12px / normal "";
      h4 {
        color: #bbb;
      }
      h5 {
        color: #ff8a2b;
      }
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        b {
          zoom: 0.6;
        }
        i {
          border: 1px solid #ff8a2b;
          color: #ff8a2b;
          border-radius: 10px;
          height: 20px;
          padding: 0 10px;
          font: 12px /20px "";
        }
      }
    }
    .mark {
      position: absolute;
      color: #ffffff;
      height: 20px;
      padding: 0 6px;
      font: 12px/20px "";
    }
    //餐点类
    .type {
      border-radius: 0 10px 10px 0;
      left: 0px;
      top: 14px;
      &.m {
        background: #0099ff; //早餐
      }
      &.a {
        background: #ff8a2b; //午餐
      }
      &.e {
        background: #ff5543; //晚餐
      }
    }
    // 状态类
    .status {
      border-radius: 10px 0 0 10px;
      right: 0;
      top: 0;
      &.one {
        background: #66c02c; //带就餐状态
      }
      &.two {
        background: #ff8a2b; //待支付状态
      }
      &.three {
        background: #c0c4cc; //已完成状态
      }
      &.four {
        background: #ffac8e; //已取消状态
      }
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    font: 14px / normal "";
    b {
      font: 10px/20px "";
      border: 1px solid #c0c4cc;
      color: #c0c4cc;
      height: 20px;
      padding: 0 10px;
      border-radius: 10px;
    }
  }
}
</style>