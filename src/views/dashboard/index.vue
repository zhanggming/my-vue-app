<template>
  <div class="dashboard-container">
    <div class="dashboard-desc">
      <div class="dashboard-slef">
        <h1>你好，我是张广明</h1>
        <span class="dashboard-slef-desc">
          我是一名前端开发人员和全栈开发人员，常驻中国北京。
          我致力于通过精心编写的代码和以用户为中心的设计，打造出沉浸式且美观的网络应用程序。
        </span>
        <el-button class="say-hello">你好！</el-button>
      </div>
      <div class="dashboard-card">
        <div class="card-item">
          <h3>8年</h3>
          <span class="card-text">前端开发经验</span>
        </div>
        <div class="card-item">
          <h3>20+(Complete)</h3>
          <span class="card-text">公司项目</span>
        </div>
        <div class="card-item">
          <h3>6+(In progress)</h3>
          <span class="card-text">个人维护项目</span>
        </div>
      </div>
    </div>
    <div class="dashboard-avatar">
      <img src="@/assets/img/code.jpg" />
    </div>
  </div>
</template>
<script setup lang="js">


onMounted(() => {
  console.log('dashboard onMounted');
});
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
