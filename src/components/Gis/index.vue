<template>
  <div class="container">
    GIS组件
  </div>
</template>
<script setup lang="js">
import globalGis from '@/gis/globalGis';
onMounted(() => {
  console.log(globalGis.entitys);
  globalGis.entitys.set('test', { name: 'Gis组件' });
});
</script>
<style scoped lang="less">

</style>
