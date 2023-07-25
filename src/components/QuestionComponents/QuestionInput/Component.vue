<template>
  <div>
    <a-typography-paragraph>{{ props.title }}</a-typography-paragraph>
    <div>
      <a-input :placeholder="props.placeholder" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { QuestionInputDefaultProps, QuestionInputPropsType } from './interface'

const props = withDefaults(defineProps<QuestionInputPropsType>(), {
  ...QuestionInputDefaultProps,
})
</script>

<style scoped></style>
