<template>
  <div>
    <a-typography-paragraph strong>{{ props.title }}</a-typography-paragraph>
    <a-space :direction="props.isVertical ? 'vertical' : 'horizontal'">
      <!-- {list.map(opt => {
          const { value, checked, text } = opt
          return (
            <Checkbox value={value} checked={checked} key={value}>
              {text}
            </Checkbox>
          )
        })} -->
      <a-checkbox
        v-for="item in props.list"
        :key="item.value"
        v-model:checked="item.checked"
        >{{ item.text }}</a-checkbox
      >
    </a-space>
  </div>
</template>

<script setup lang="ts">
import {
  QuestionCheckboxDefaultProps,
  QuestionCheckboxPropsType,
} from './interface'

const props = withDefaults(defineProps<QuestionCheckboxPropsType>(), {
  title: QuestionCheckboxDefaultProps.title,
  isVertical: QuestionCheckboxDefaultProps.isVertical,
  list: () => QuestionCheckboxDefaultProps.list || [],
})
</script>

<style scoped></style>
