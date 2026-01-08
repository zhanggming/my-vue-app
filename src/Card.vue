<script setup>
const count = ref(0);
console.log('child render')
onBeforeMount(()=>{
  console.log('child beforeMount')
})
onMounted(() => {
  console.log('child mounted')
})
onBeforeUpdate(()=>{
  console.log('child beforeUpdate')
})
onUpdated(()=>{
  console.log('child updated')
})
onBeforeUnmount(()=>{
  console.log('child beforeUnmount')
})
onUnmounted(()=>{
  console.log('child unmounted')
})
const handleClick = () => {
  count.value++
}
</script>

<template>
<div>
子组件: <el-button type="primary" @click="handleClick" style="width: 80px;">{{count}}</el-button>
</div>
</template>

<style scoped></style>

