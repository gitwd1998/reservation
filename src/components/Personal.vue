<template>
  <div id="personal">
    <div>
      <span>用户名</span><strong>{{ u }}</strong>
    </div>
    <div>
      <span>手机号</span><strong>{{ p }}</strong>
    </div>
    <div>
      <span>用户编号</span><strong>{{ i }}</strong>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      u: "张三",
      p: "15855385074",
      i: "1234567",
    };
  },
};
</script>
<style lang="less" scoped>
#personal {
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
    strong {
      color: #909399;
    }
  }
}
</style>