<script setup lang="ts">
import { reactive, watch } from 'vue'
import { QuestionRadioPropsType, QuestionRadioEmitsType } from './interface'
import { nanoid } from 'nanoid'
import { PlusOutlined } from '@ant-design/icons-vue'

const { title, isVertical, options, value, disabled } =
  defineProps<QuestionRadioPropsType>()
const emits = defineEmits<QuestionRadioEmitsType>()
const formState = reactive({
  title,
  isVertical,
  options,
  value,
})
function removeItem(index: number) {
  formState.options?.splice(index, 1)
}
function addItem() {
  formState.options?.push({
    text: '',
    value: nanoid(5),
  })
}
watch(formState, (newValue: QuestionRadioPropsType) => {
  emits('formChange', newValue)
})
</script>

<template>
  <a-form layout="vertical" :disabled="disabled" :model="formState">
    <a-form-item
      label="标题"
      name="title"
      :rules="[{ required: true, message: '请输入标题' }]"
    >
      <a-input v-model:value="formState.title" />
    </a-form-item>
    <a-form-item
      v-for="(option, index) in formState.options"
      :key="option.value"
      :label="index === 0 ? '选项' : ''"
      :name="['options', index, 'text']"
      :rules="{
        required: true,
        message: '选项名不能为空',
        trigger: 'change',
      }"
    >
      <a-space>
        <a-input v-model:value="option.text" />
        <MinusCircleOutlined
          v-if="formState.options && formState.options.length > 1"
          class="dynamic-delete-button"
          @click="removeItem(index)"
        />
      </a-space>
    </a-form-item>
    <a-form-item>
      <a-button type="dashed" style="width: 60%" @click="addItem">
        <PlusOutlined />
        添加选项
      </a-button>
    </a-form-item>
    <a-form-item label="默认选中" name="value">
      <a-select v-mode:value="formState.value">
        <a-select-option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          >{{ option.text }}</a-select-option
        >
      </a-select>
    </a-form-item>
    <a-form-item name="isVertical" label="竖向显示" valuePropName="checked">
      <a-checkbox v-model:checked="formState.isVertical" />
    </a-form-item>
  </a-form>
  <div></div>
</template>

<style scoped></style>
