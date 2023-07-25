<script setup lang="ts">
import {
  QuestionTextareaPropsType,
  QuestionTextareaDefaultProps,
} from './interface'
const props = withDefaults(defineProps<QuestionTextareaPropsType>(), {
  ...QuestionTextareaDefaultProps,
})
</script>

<template>
  <div>
    <a-paragraph>{{ props.title }}</a-paragraph>
    <div>
      <a-textarea :placeholder="placeholder" />
    </div>
  </div>
</template>

<style scoped></style>
