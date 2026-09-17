<template>
  <div class="header-container">
    <el-menu  class="el-menu-demo" mode="horizontal" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b" @select="handleSelect" :router="true" :default-active="route.path">
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
</style>
