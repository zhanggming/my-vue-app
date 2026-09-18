<template>
  <div class="header-container">
    <div class="my-logo">
      <span class="logo"></span>
      <span class="my-name">张广明</span>
    </div>
    <el-menu class="el-menu-demo" mode="horizontal" background-color="#fff" text-color="#333333"
      active-text-color="#409eff" @select="handleSelect" :router="true" :default-active="route.path">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/projects">作品列表</el-menu-item>
      <el-menu-item index="/about">关于我</el-menu-item>
      <el-menu-item index="/contact">联系我</el-menu-item>
    </el-menu>
  </div>
</template>
<script setup lang="js">

const route = useRoute()

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

onMounted(() => {
  console.log('header onMounted');
});
</script>
<style lang="less" scoped>
@import url('./index.less');

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: transparent;
}

.header-container {
  padding: 0 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .my-logo {
    width: 200px;
    height: 56px;

    .logo {
      display: inline-block;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #A53DFF;
      vertical-align: middle;
    }

    .my-name {
      margin-left: 3px;
      font-size: 18px;
      font-weight: 600;
      line-height: 56px;
    }
  }

  .el-menu-demo {
    flex: 0 0 400px;
    border-bottom: none;
    justify-content: flex-end;

    .el-menu-item.is-active,
    .el-menu-item {
      border-bottom: none;
    }
  }
}
</style>
