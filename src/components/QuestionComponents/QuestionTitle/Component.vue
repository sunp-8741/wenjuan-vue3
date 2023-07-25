<script setup lang="ts">
import { QuestionTitleDefaultProps } from './interface.ts'
interface QuestionTitlePropsType {
  text?: string
  level?: 1 | 2 | 3
  isCenter?: boolean
  disabled?: boolean
}
const props = withDefaults(defineProps<QuestionTitlePropsType>(), {
  ...QuestionTitleDefaultProps,
})
</script>
<template>
  <a-typography-title
    :class="`${props.isCenter ? 'text-center' : 'text-start'} mb-0}`"
    :level="level"
  >
    {{ text }}
  </a-typography-title>
</template>

<style scoped></style>
