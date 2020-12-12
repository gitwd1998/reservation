<template>
  <div id="reservation">
    <!-- 顶部导航 -->
    <nav>
      <div @click="m = s">
        {{ ss }}
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_icon_down"></use>
        </svg>
      </div>
      <div @click="m = w">
        {{ ww }}
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_icon_down"></use>
        </svg>
      </div>
      <div @click="m = t">
        {{ tt }}
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-SJ_icon_down"></use>
        </svg>
      </div>
    </nav>
    <!-- 侧边导航 -->
    <aside>
      <div
        v-for="(v, i) in d"
        :key="i"
        :class="{ active: a == i }"
        @click="handleUpdate(i)"
      >
        <p class="week">{{ v.w }}</p>
        <p class="date">{{ v.d }}</p>
      </div>
    </aside>
    <!-- 商品列表 -->
    <main>
      <template v-if="ls">
        <div class="list" v-for="(v, i) in ls" :key="i" @click="toDetail">
          <div class="pic">
            <img :src="v.img" alt="" />
          </div>
          <div class="con">
            <h3>{{ v.title }}</h3>
            <p>{{ v.text }}</p>
            <p>已售{{ v.sales }}</p>
            <div>
              <span>￥{{ v.price }}</span>
              <dl>
                <dd
                  @click.stop="v.number < 1 ? v.number : v.number--"
                  :class="{ disable: v.number == 0 }"
                >
                  -
                </dd>
                <dt>{{ v.number }}</dt>
                <dd @click.stop="v.number++">+</dd>
              </dl>
            </div>
          </div>
          <div
            :class="{
              mark: true,
              m: v.type == '早餐',
              a: v.type == '午餐',
              e: v.type == '晚餐',
            }"
          >
            {{ v.type }}
          </div>
        </div>
      </template>
      <template v-else>暂无订单</template>
    </main>
    <!-- 折叠选项卡 -->
    <div class="menu" v-if="m" @click="m = null">
      <ul>
        <li v-for="(c, i) in m.c" :key="i" @click="handleCheck(m.n, c)">
          {{ c }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 所有餐品别表null
      ls: [
        {
          type: "午餐",
          img: require("../assets/img/logo.jpg"),
          title: "黄焖鸡",
          text: "黄焖鸡黄焖鸡黄焖鸡黄焖鸡黄焖鸡",
          sales: "123",
          price: 2.4,
          number: 0,
        },
        {
          type: "晚餐",
          img: require("../assets/img/logo.jpg"),
          title: "黄焖茄子",
          text: "黄焖茄子黄焖茄子黄焖茄子",
          sales: "234",
          price: 2.9,
          number: 0,
        },
        {
          type: "早餐",
          img: require("../assets/img/logo.jpg"),
          title: "米酒蛋花汤",
          text: "米酒蛋花汤米酒蛋花汤",
          sales: "666",
          price: 3.3,
          number: 0,
        },
        {
          type: "午餐",
          img: require("../assets/img/logo.jpg"),
          title: "黄焖酥肉",
          text: "黄焖酥肉黄焖酥肉黄焖酥肉",
          sales: "53",
          price: 4.6,
          number: 0,
        },
        {
          type: "午餐",
          img: require("../assets/img/logo.jpg"),
          title: "黄焖鸡",
          text: "黄焖鸡黄焖鸡黄焖鸡黄焖鸡黄焖鸡",
          sales: "123",
          price: 2.4,
          number: 0,
        },
        {
          type: "晚餐",
          img: require("../assets/img/logo.jpg"),
          title: "黄焖茄子",
          text: "黄焖茄子黄焖茄子黄焖茄子",
          sales: "234",
          price: 2.9,
          number: 0,
        },
        {
          type: "早餐",
          img: require("../assets/img/logo.jpg"),
          title: "米酒蛋花汤",
          text: "米酒蛋花汤米酒蛋花汤",
          sales: "666",
          price: 3.3,
          number: 0,
        },
        {
          type: "午餐",
          img: require("../assets/img/logo.jpg"),
          title: "黄焖酥肉",
          text: "黄焖酥肉黄焖酥肉黄焖酥肉",
          sales: "53",
          price: 4.6,
          number: 0,
        },
        {
          type: "午餐",
          img: require("../assets/img/logo.jpg"),
          title: "黄焖鸡",
          text: "黄焖鸡黄焖鸡黄焖鸡黄焖鸡黄焖鸡",
          sales: "123",
          price: 2.4,
          number: 0,
        },
        {
          type: "晚餐",
          img: require("../assets/img/logo.jpg"),
          title: "黄焖茄子",
          text: "黄焖茄子黄焖茄子黄焖茄子",
          sales: "234",
          price: 2.9,
          number: 0,
        },
        {
          type: "早餐",
          img: require("../assets/img/logo.jpg"),
          title: "米酒蛋花汤",
          text: "米酒蛋花汤米酒蛋花汤",
          sales: "666",
          price: 3.3,
          number: 0,
        },
        {
          type: "午餐",
          img: require("../assets/img/logo.jpg"),
          title: "黄焖酥肉",
          text: "黄焖酥肉黄焖酥肉黄焖酥肉",
          sales: "53",
          price: 4.6,
          number: 0,
        },
      ],
      m: null, // 订餐筛选折叠选项卡展示内容
      // s: 订餐食堂筛选内容
      s: {
        n: "ss", //对应已选中食堂字段
        c: ["全部", "食堂A"], //所有食堂
      },
      ss: "全部", // 已选中食堂

      // w: 订餐窗口筛选内容
      w: {
        n: "ww", //对应已选中窗口字段
        c: ["全部", "窗口A", "窗口B", "窗口C", "窗口D"], //所有窗口
      },
      ww: "全部", // 已选中窗口

      // t: 订餐餐点筛选内容
      t: {
        n: "tt", //对应已选中餐点字段
        c: ["全部", "早餐", "午餐", "晚餐"], //所有餐点
      },
      tt: "全部", // 已选中餐点
      a: 0, //辅助侧边导航栏的选中状态
    };
  },
  computed: {
    // 侧边导航时间数组
    d() {
      var t = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      var now = new Date().getTime();
      var dateArr = [];
      for (let i = 1; i < 8; i++) {
        dateArr.push({
          w: t[new Date(now + i * 86400000).getDay()],
          d:
            new Date(now + i * 86400000).getMonth() +
            1 +
            "/" +
            new Date(now + i * 86400000).getDate(),
        });
      }
      return dateArr;
    },
  },
  methods: {
    // 手动选择订餐筛选选项
    handleCheck(n, c) {
      console.log(n, c);
      this[n] = c;
      // 刷新会消失，存到本地缓存中
      // 更改筛选标题
      // 请求筛选内容
    },
    // 手动选择日期更新数据
    handleUpdate(i) {
      this.a = i;
    },
    // 去详情页
    toDetail() {
      this.$router.push("/view/detail");
    },
  },
  created() {
    // 获取食堂列表
    // 用食堂id获取食堂对应窗口id
    // 在获取餐品id
  },
};
</script>
<style lang="less" scoped>
// 弹性布局+固定定位的顶部导航
nav {
  position: fixed;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 44px;
  font-size: 14px;
  background: #ffffff;
  border-bottom: 1px solid #dbdbdb;
}
// 固定定位的侧边导航
aside {
  position: fixed;
  top: 45px;
  z-index: 100;
  background: #ffffff;
  width: 80px;
  text-align: center;
  div {
    padding: 6px 0;
    border-left: 4px solid #ffffff;
    &.active {
      border-left-color: #ff8a2b;
    }
    .week {
      font-size: 14px;
    }
    .date {
      font-size: 13px;
    }
  }
}
// 商品列表样式
main {
  padding: 60px 16px 70px 96px;
  .list {
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 10px;
    position: relative;
    padding: 10px;
    display: flex;
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
      div {
        display: flex;
        justify-content: space-between;
        padding-top: 8px;
        span {
          color: #f00;
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
            &.disable {
              background: #fef0d6;
            }
          }
        }
      }
    }
    .mark {
      position: absolute;
      color: #ffffff;
      border-radius: 0 10px 10px 0;
      height: 20px;
      font: 12px/20px "";
      padding: 0 6px;
      left: 0px;
      top: 14px;
      &.m {
        background: #0099ff;
      }
      &.a {
        background: #ff8a2b;
      }
      &.e {
        background: #ff5543;
      }
    }
  }
}
// 折叠选项卡
.menu {
  position: fixed;
  top: 45px;
  z-index: 111;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  text-align: center;
  ul {
    border-radius: 0 0 10px 10px;
    background: #ffffff;
    overflow: hidden;
  }
  li {
    height: 44px;
    font: 14px/44px "";
    border-bottom: 1px solid #dbdbdb;
  }
}
</style>