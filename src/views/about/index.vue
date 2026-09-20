<template>
  <div class="about-container">
    <div class="about-desc">
      <h2 class="title">我的工作</h2>
      <span class="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
        Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
      </span>
      <span class="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
      </span>
      <el-button class="say-hello">你好！</el-button>
    </div>
    <div class="about-card">
      <div class="card-item">
        <span class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
          Mauris ultrices eget lorem ac vestibulum.
        </span>
      </div>
      <div class="card-item">
        <h3 class="title">Web Development</h3>
        <span class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
          Mauris ultrices eget lorem ac vestibulum.
        </span>
      </div>
      <div class="card-item">
        <h3 class="title">Full Stack Development</h3>
        <span class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.
          Mauris ultrices eget lorem ac vestibulum.
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="js">

onMounted(() => {
  console.log('about onMounted');
});

</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
