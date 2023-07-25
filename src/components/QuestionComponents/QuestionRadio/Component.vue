<script setup lang="ts">
import { QuestionRadioDefaultProps, QuestionRadioPropsType } from './interface'

const props = withDefaults(defineProps<QuestionRadioPropsType>(), {
  ...QuestionRadioDefaultProps,
  options: () => QuestionRadioDefaultProps.options || [],
})
</script>

<template>
  <div>
    <a-typography-paragraph strong>{{ props.title }}</a-typography-paragraph>
    <a-radio-group :value="props.value">
      <a-space :direction="isVertical ? 'vertical' : 'horizontal'">
        <a-radio
          v-for="item in props.options"
          :key="item.value"
          :value="item.value"
        >
          {{ item.text }}
        </a-radio>
      </a-space>
    </a-radio-group>
  </div>
</template>

<style scoped></style>
