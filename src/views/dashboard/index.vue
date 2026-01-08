<template>
  <div class="dashboard-container">
    首页
    <GisApp/>
  </div>
</template>
<script setup lang="js">
import './index.less'
import globalGis from '@/gis/globalGis';
import GisApp from '@/components/Gis/index.vue';


onMounted(() => {
  console.log(globalGis.entitys);
});
</script>
