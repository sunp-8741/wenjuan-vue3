<template>
  <a-typography-paragraph
    :class="`${props.isCenter ? 'text-center' : 'text-start'} mb-0`"
  >
    <span v-for="t in textList" :key="t" className="block"> {{ t }} </span>
  </a-typography-paragraph>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  QuestionParagraphDefaultProps,
  QuestionParagraphPropsType,
} from './interface'

const props = withDefaults(defineProps<QuestionParagraphPropsType>(), {
  ...QuestionParagraphDefaultProps,
})
const textList = computed(() => {
  return props.text.split('\n')
})
</script>

<style scoped></style>
