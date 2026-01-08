<template>

</template>
<script setup lang="js">
import {ref,onMounted} from 'vue'
const props = defineProps();
const emit = defineEmits();
const list = ref([]);
onMounted(()=>{
  console.log('onMounted')
})
</script>
