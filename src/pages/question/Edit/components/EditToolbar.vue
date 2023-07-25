<script setup lang="ts">
import useGetComponentInfo from '@/hooks/useGetComponentInfo'
import { ComponentInfoType } from '@/store/componentStore'
import { useComponentStore } from '@/store/componentStore'
import {
  BlockOutlined,
  CopyOutlined,
  DeleteOutlined,
  DownOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  UpOutlined,
} from '@ant-design/icons-vue'
import { computed, h, toRef } from 'vue'

const {
  selectedId,
  selectedComponent = {} as ComponentInfoType,
  copiedComponent,
  componentList,
} = useGetComponentInfo()
const componentStore = useComponentStore()
const length = componentList.value.length
const selectedIndex = componentList.value.findIndex(
  (c) => c.fe_id === selectedId.value
)

const isFirst = computed((): boolean => selectedIndex <= 0)
const isLast = computed((): boolean => selectedIndex + 1 >= length)
const isLocked = toRef(selectedComponent, 'isLocked')

//  删除选中组件
function onDelete() {
  componentStore.removeSelectedComponent()
}
// 切换组件显示/隐藏
function onChangeHidden() {
  componentStore.changeComponentHidden(selectedId.value, true)
}
// 切换组件锁定状态
function onChangeLocked() {
  componentStore.toggleComponentLocked(selectedId.value)
}
// 复制组件
function onCopy() {
  componentStore.copySelectedComponent()
}
// 粘贴组件
function onPaste() {
  componentStore.pasteCopiedComponent()
}
// 移动组件
function onMoveComponent(newIndex: number) {
  console.log(newIndex)
}

// 撤销
// function undo() {
//   componentStore.undo()
// }
// // 重做
// function redo() {
//   componentStore.redo()
// }
</script>

<template>
  <a-space>
    <a-a-tooltip title="删除">
      <a-button shape="circle" :icon="h(DeleteOutlined)" @click="onDelete" />
    </a-a-tooltip>
    <a-a-tooltip title="隐藏">
      <a-button
        shape="circle"
        :icon="h(EyeInvisibleOutlined)"
        @click="onChangeHidden"
      />
    </a-a-tooltip>
    <a-a-tooltip title="锁定">
      <a-button
        shape="circle"
        :icon="h(LockOutlined)"
        @click="onChangeLocked"
        :type="isLocked ? 'primary' : 'default'"
      />
    </a-a-tooltip>
    <a-a-tooltip title="复制">
      <a-button shape="circle" :icon="h(CopyOutlined)" @click="onCopy" />
    </a-a-tooltip>
    <a-a-tooltip title="粘贴">
      <a-button
        shape="circle"
        :icon="h(BlockOutlined)"
        @click="onPaste"
        :disabled="!copiedComponent"
      />
    </a-a-tooltip>
    <a-tooltip title="上移">
      <a-button
        shape="circle"
        :icon="h(UpOutlined)"
        :disabled="isFirst"
        @click="onMoveComponent(selectedIndex - 1)"
      />
    </a-tooltip>
    <a-tooltip title="下移">
      <a-button
        shape="circle"
        :icon="h(DownOutlined)"
        @click="onMoveComponent(selectedIndex + 1)"
        :disabled="isLast"
      />
    </a-tooltip>
    <!--    <a-tooltip title="撤销">-->
    <!--      <a-button shape="circle" :icon="h(UndoOutlined)" @click="undo" />-->
    <!--    </a-tooltip>-->
    <!--    <a-tooltip title="重做">-->
    <!--      <a-button shape="circle" :icon="h(RedoOutlined)" @click="redo" />-->
    <!--    </a-tooltip>-->
  </a-space>
</template>

<style scoped></style>
