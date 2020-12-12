<template>
  <div id="detail">
    <div class="pic"><img src="../assets/img/logo.jpg" alt="" /></div>
    <div class="con">
      <h3>强生健体套餐A</h3>
      <p>已售200</p>
      <div>
        <b>￥33.33</b>
        <dl>
          <dd @click.stop="aaa">-</dd>
          <dt>3</dt>
          <dd>+</dd>
        </dl>
      </div>
      <p>供餐时间</p>
      <p>2020年04月15日 周三</p>
      <p>午餐（11：00-13：00）</p>
    </div>
    <footer>确定</footer>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
#detail {
  padding-bottom: 60px;
}
.pic {
  background: #ffffff;
  img {
    width: 100%;
  }
}
.con {
  padding: 10px;
  background: #ffffff;
  h3 {
    font: 14px/24px "";
  }
  p {
    font: 14px/24px "";
    color: #aaaaaa;
  }
  div {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    b {
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
      }
    }
  }
}
footer {
  width: 343px;
  height: 44px;
  border-radius: 22px;
  background: #ff8a2b;
  text-align: center;
  font: 14px/44px "";
  color: #ffffff;
  margin: auto;
}
</style>