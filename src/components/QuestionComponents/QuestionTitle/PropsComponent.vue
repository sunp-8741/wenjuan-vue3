<template>
  <a-form
    ref="formRef"
    layout="vertical"
    :model="formState"
    :disabled="disabled"
  >
    <a-form-item
      label="标题内容"
      name="text"
      :rules="[{ required: true, message: '请输入标题内容' }]"
    >
      <a-input v-model:value="formState.text" />
    </a-form-item>
    <a-form-item label="层级" name="level">
      <a-select v-model:value="formState.level">
        <a-select-option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          >{{ option.text }}</a-select-option
        >
      </a-select>
    </a-form-item>
    <a-form-item name="isCenter" valuePropName="checked">
      <a-checkbox v-model:checked="formState.isCenter">居中显示</a-checkbox>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs, watch } from 'vue'
import { QuestionTitleEmitsType, QuestionTitlePropsType } from '.'

const formRef = ref(null)
const props = defineProps<QuestionTitlePropsType>()
const emits = defineEmits<QuestionTitleEmitsType>()
const options = ref([
  { value: 1, text: 1 },
  { value: 2, text: 2 },
  { value: 3, text: 3 },
])
const formState = reactive<QuestionTitlePropsType>(toRefs(props))
watch(formState, (newValue: QuestionTitlePropsType) => {
  emits('formChange', newValue)
})
</script>

<style scoped></style>
