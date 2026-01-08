<template>
  <div class="layout">
    <div class="siderbar"></div>
    <div class="container">
      <div class="header"></div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="js">
import './index.less'
</script>
