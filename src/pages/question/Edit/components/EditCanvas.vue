<script setup lang="ts">
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import renderComponent from '@/components/renderComponent.tsx'
import { useComponentStore } from '@/store/componentStore'

const props = withDefaults(defineProps<{ isLoading: boolean }>(), {
  isLoading: true,
})
const { componentList, selectedId } = useGetComponentInfo()
const componentStore = useComponentStore()
function onClickComponent(fe_id: string) {
  componentStore.changeSelectedId(fe_id)
}
</script>

<template>
  <div v-if="props.isLoading" class="text-center mt-6">
    <a-spin />
  </div>
  <div v-else class="min-h-full bg-white overflow-hidden">
    <div
      v-for="c in componentList.filter((c) => !c.isHidden)"
      :key="c.fe_id"
      :class="{
        'component-wrapper': true,
        selected: c.fe_id === selectedId,
        locked: c.isLocked,
      }"
      @click.stop="onClickComponent(c.fe_id)"
    >
      <div class="pointer-events-none">
        <render-component :key="c.fe_id" :component-info="c"></render-component>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.component-wrapper {
  @apply m-3 border border-solid border-white rounded-[3px] p-3;
  &:hover {
    @apply border-[#d9d9d9];
  }
  &.selected {
    @apply border-[#1890ff];
  }
}

.locked {
  @apply opacity-50 cursor-not-allowed;
}
</style>
