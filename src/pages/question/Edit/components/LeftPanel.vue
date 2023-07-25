<template>
  <a-tabs :activeKey="activeKey">
    <a-tab-pane key="componentLib" tab="组件库">
      <component-lib></component-lib>
    </a-tab-pane>
    <a-tab-pane key="layers" tab="图层"></a-tab-pane>
  </a-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ComponentLib from './ComponentLib.vue'
const activeKey = ref('componentLib')
</script>
<style scoped></style>
