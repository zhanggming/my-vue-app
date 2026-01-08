<template>
  <el-config-provider :locale="locale" :size="size">
    <router-view/>
  </el-config-provider>
</template>
<script setup lang="js">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const locale = zhCn;
const size = 'default';
</script>
