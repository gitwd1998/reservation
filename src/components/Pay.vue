<template>
  <div id="pay">
    <div>
      <span>手机号</span><input type="text" placeholder="请输入手机号" />
    </div>
    <div>
      <span>旧密码</span><input type="text" placeholder="请输入旧密码" />
    </div>
    <div>
      <span>新密码</span><input type="text" placeholder="请输入新密码" />
    </div>
    <div>
      <span>确认密码</span><input type="text" placeholder="请再次输入新密码" />
    </div>
    <footer>确定</footer>
  </div>
</template>
<style lang="less" scoped>
#pay {
  padding-bottom: 60px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border-bottom: 1px solid #dbdbdb;
    padding: 0 16px;
    height: 44px;
    font-size: 14px;
    span {
      flex: 1;
    }
    input {
      flex: 3;
    }
  }
  footer {
    background: #ff8a2b;
    width: 343px;
    height: 44px;
    border-radius: 22px;
    font: 14px/44px "";
    color: #ffffff;
    text-align: center;
    margin: auto;
  }
}
</style>