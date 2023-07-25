<template>
  <div class="text-center">
    <a-typography-title>{{ title }}</a-typography-title>
    <a-typography-paragraph>
      <span v-for="t in textList" :key="t" class="block">
        {{ t }}
      </span>
    </a-typography-paragraph>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { QuestionInfoDefaultProps, QuestionInfoPropsType } from './interface'
const props = withDefaults(defineProps<QuestionInfoPropsType>(), {
  ...QuestionInfoDefaultProps,
})
const textList = computed(() => {
  return props.desc.split('\n')
})
</script>

<style scoped></style>
