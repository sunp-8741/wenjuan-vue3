<script setup lang="ts">
import { reactive, watch } from 'vue'
import {
  QuestionParagraphPropsType,
  QuestionParagraphEmitsType,
} from './interface'
const { text, isCenter, disabled } = defineProps<QuestionParagraphPropsType>()
const emits = defineEmits<QuestionParagraphEmitsType>()
const formState = reactive({
  text,
  isCenter,
})
watch(formState, (newValue: QuestionParagraphPropsType) => {
  emits('formChange', newValue)
})
</script>

<template>
  <a-form layout="vertical" :model="formState" :disabled="disabled">
    <a-form-item
      label="段落内容"
      name="text"
      :rules="[{ required: true, message: '请输入段落内容' }]"
    >
      <a-textarea v-model:value="formState.text"></a-textarea>
    </a-form-item>
    <a-form-item name="isCenter">
      <a-checkbox v-model:checked="formState.isCenter">居中显示</a-checkbox>>
    </a-form-item>
  </a-form>
</template>

<style scoped></style>
