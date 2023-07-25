<template>
  <a-form layout="vertical" :model="formState" :disabled="disabled">
    <a-form-item
      label="标题"
      name="title"
      :rules="[{ required: true, message: '请输入标题' }]"
    >
      <a-input v-model:value="formState.title" />
    </a-form-item>
    <a-form-item
      v-for="(option, index) in formState.list"
      :key="option.value"
      :label="index === 0 ? '选项' : ''"
      :name="['list', index, 'text']"
      :rules="{
        required: true,
        message: '选项名不能为空',
        trigger: 'change',
      }"
    >
      <a-space>
        <a-input v-model:value="option.text" />
        <MinusCircleOutlined
          v-if="formState.list && formState.list.length > 1"
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
    <a-form-item name="isVertical" label="竖向显示">
      <a-checkbox v-model:checked="formState.isVertical"></a-checkbox>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import {
  QuestionCheckboxEmitsType,
  QuestionCheckboxPropsType,
} from './interface'
import { MinusCircleOutlined } from '@ant-design/icons-vue'
import { nanoid } from 'nanoid'

const { title, isVertical, list, disabled } =
  defineProps<QuestionCheckboxPropsType>()
const emits = defineEmits<QuestionCheckboxEmitsType>()
const formState = reactive({
  title,
  isVertical,
  list,
})
watch(formState, (newValue: QuestionCheckboxPropsType) => {
  emits('formChange', newValue)
})
function removeItem(index: number) {
  formState.list?.splice(index, 1)
}
function addItem() {
  formState.list?.push({
    text: '',
    value: nanoid(5),
    checked: false,
  })
}
</script>

<style scoped></style>
