<script setup lang="ts">
import { reactive, watch } from 'vue'
import {
  QuestionTextareaEmitsType,
  QuestionTextareaPropsType,
} from './interface'

const { title, placeholder, disabled } =
  defineProps<QuestionTextareaPropsType>()
const emits = defineEmits<QuestionTextareaEmitsType>()
const formState = reactive({
  title,
  placeholder,
})
watch(formState, (newValue: QuestionTextareaPropsType) => {
  emits('formChange', newValue)
})
</script>
<template>
  <a-form layout="vertical" :model="formState" :disabled="disabled">
    <a-form-item
      label="标题"
      name="title"
      :rules="[{ required: true, message: '请输入标题' }]"
    >
      <a-input v-model:value="formState.title" />
    </a-form-item>
    <a-form-item label="Placeholder" name="placeholder">
      <a-input v-model:value="formState.placeholder" />
    </a-form-item>
  </a-form>
</template>

<style scoped></style>
