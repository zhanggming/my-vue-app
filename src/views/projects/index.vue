<template>
  <div class="projects-container">
    <div class="project-item" v-for="item in projects" :key="item.id">
      <div class="project-icon">
        <img src="@/assets/img/1.png" class="project-img" />
      </div>
      <div class="project-content">
        <h3>
          Product Admin Dashboard
          <!-- 产品管理仪表盘 -->
        </h3>
        <span class="project-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
          <!-- 本项目是一个基于现代 Web 技术构建的高性能单页应用（SPA）。前端采用 React 18 与 TypeScript 进行开发，结合 Tailwind CSS 实现响应式布局与原子化样式管理。状态管理使用
          Zustand，数据获取层集成 TanStack Query 以优化服务器状态同步。项目架构遵循模块化设计原则，支持微前端接入，旨在提供流畅的用户交互体验与极致的加载性能。 -->
        </span>
        <el-button class="project-button">你好！</el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="js">

const projects = ref([]);

onMounted(() => {
  console.log('projects onMounted');
  for (let i = 0; i < 10; i++) {
    projects.value.push({
      id: i,
      name: `Project ${i}`,
    });
  }
});

</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
