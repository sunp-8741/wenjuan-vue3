<script setup lang="ts">
import {
  componentConfGroup,
  ComponentConfType,
} from '@/components/QuestionComponents'
import renderComponent from '@/components/renderComponent.tsx'
import { useComponentStore } from '@/store/componentStore'
import { nanoid } from 'nanoid'

const componentStore = useComponentStore()

function onClickComponent(c: ComponentConfType) {
  const { title, type, defaultProps } = c
  componentStore.addComponent({
    fe_id: nanoid(5),
    type,
    title,
    isHidden: false,
    isLocked: false,
    props: defaultProps,
  })
}
</script>

<template>
  <div v-for="(group, index) in componentConfGroup" :key="index">
    <a-typography-title :level="5" :class="index > 0 ? 'mt-5' : 'mt-0'">
      {{ group.groupName }}
    </a-typography-title>
    <div>
      <div
        v-for="c in group.components"
        :key="c.type"
        @click="onClickComponent(c)"
        class="mb-3 cursor-pointer bg-white border border-white border-solid p-3 rounded-[3px] hover:border-[#d9d9d9]"
      >
        <div class="pointer-events-none">
          <render-component :component="c.QuestionComponent"></render-component>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
