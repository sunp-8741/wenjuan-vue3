<script setup lang="ts">
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { nextTick, ref, watch } from 'vue'
import ComponentProp from './ComponentProp.tsx'
import { useComponentStore } from '@/store/componentStore'
import { storeToRefs } from 'pinia'
const activeKey = ref('prop')
const showPropComponent = ref(true)
const componentStore = useComponentStore()
const { selectedId } = storeToRefs(componentStore)
watch(selectedId, () => {
  showPropComponent.value = false
  nextTick(() => {
    showPropComponent.value = true
  })
})
</script>

<template>
  <a-tabs :activeKey="activeKey">
    <a-tab-pane key="prop" tab="属性">
      <template #tab>
        <FileTextOutlined />
      </template>
      <component-prop v-if="showPropComponent"></component-prop>
    </a-tab-pane>
    <a-tab-pane key="setting" tab="设置">
      <template #tab>
        <SettingOutlined />
      </template>
    </a-tab-pane>
  </a-tabs>
</template>

<style scoped></style>
