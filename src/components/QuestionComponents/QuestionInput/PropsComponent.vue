<template>
  <a-form layout="vertical" :model="formState" :disabled="disabled">
    <a-form-Item
      label="标题"
      name="title"
      :rules="[{ required: true, message: '请输入标题' }]"
    >
      <a-input v-model:value="formState.title" />
    </a-form-Item>
    <a-form-Item label="Placeholder" name="placeholder">
      <a-input v-model:value="formState.placeholder" />
    </a-form-Item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import { QuestionInputPropsType, QuestionInputEmitsType } from './interface'

const { title, placeholder, disabled } = defineProps<QuestionInputPropsType>()
const emits = defineEmits<QuestionInputEmitsType>()

const formState = reactive({
  title,
  placeholder,
})
watch(formState, (newValue: QuestionInputPropsType) => {
  emits('formChange', newValue)
})
</script>

<style scoped></style>
