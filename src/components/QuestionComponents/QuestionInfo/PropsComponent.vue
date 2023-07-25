<script setup lang="ts">
import { reactive, watch } from 'vue'
import { QuestionInfoEmitsType, QuestionInfoPropsType } from './interface'

const { title, desc, disabled } = defineProps<QuestionInfoPropsType>()
const emits = defineEmits<QuestionInfoEmitsType>()
const formState = reactive({
  title,
  desc,
})
watch(formState, (newValue: QuestionInfoPropsType) => {
  emits('formChange', newValue)
})
</script>

<template>
  <a-form layout="vertical" :model="formState" :disabled="disabled">
    <a-form-item
      label="标题"
      name="title"
      :rules="[{ required: true, message: '请输入标题内容' }]"
    >
      <a-input v-model:value="formState.title" />
    </a-form-item>
    <a-form-item label="描述" name="desc">
      <a-input v-model:value="formState.desc" />
    </a-form-item>
  </a-form>
</template>

<style scoped></style>
