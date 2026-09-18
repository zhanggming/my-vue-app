<template>
  <div class="layout">
    <div class="container">
      <div class="header">
        <HeaderApp />
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="js">
import HeaderApp from './header.vue'


</script>
<style lang="less" scoped>
@import url('./index.less');
</style>

