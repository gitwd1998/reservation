<template>
  <div id="history">
    <nav>
      <div>
        全部
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_icon_down"></use>
        </svg>
      </div>
      <div>
        筛选日期
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_icon_down"></use>
        </svg>
      </div>
    </nav>
    <main>
      <dl v-for="i in 3" :key="i">
        <dt>
          <div>
            <h2>2020年4月</h2>
            <p>订单10个</p>
          </div>
          <div><span>支出￥1234.00 </span> <i> 充值300</i></div>
        </dt>
        <dd v-for="i in 3" :key="i">
          <div>
            <h2>窗口A-套餐A</h2>
            <p>020/04/16 12:23</p>
          </div>
          <div>-19.90</div>
        </dd>
      </dl>
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      record: [
        { time: 123456789, title: "A窗口套餐A", type: 0, d: "消费" },
        { time: 123456789, title: "A窗口套餐A", type: 1, d: "充值" },
        { time: 123456789, title: "A窗口套餐A", type: 2, d: "退款" },
      ],
    };
  },
  computed: {
    // h() {
    // 按月筛选，按类型筛选
    // return this.record.map()
    // },
  },
};
</script>
<style lang="less" scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 44px;
  font-size: 14px;
  position: fixed;
  background: #ffffff;
  width: 100%;
  top: 0px;
}
main {
  padding: 44px 0 60px;
  dl {
    dt,
    dd {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 65px;
      padding: 0 16px;
    }
    dd {
      background: #ffffff;
    }
    h2 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
      color: #909399;
    }
    div {
      font-size: 14px;
    }
    span {
      color: #f66526;
    }
    i {
      color: #66c02c;
    }
  }
}
</style>