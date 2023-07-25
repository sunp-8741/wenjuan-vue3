<script setup lang="ts">
import useGetPageInfo from '@/hooks/useGetPageInfo'
import { EditOutlined, LeftOutlined } from '@ant-design/icons-vue'
import { h, ref } from 'vue'
import { useRouter } from 'vue-router'
import EditToolbar from './EditToolbar.vue'
const isEdit = ref(false)
const { title } = useGetPageInfo()
const router = useRouter()
// function onTitleChange(event: HTMLInputElement) {
//   console.log(event)
//   title.value = event.value
// }
</script>
<template>
  <div class="bg-white border-b border-solid border-[#e8e8e8] py-3">
    <div class="flex mx-6">
      <div class="flex-1">
        <a-space>
          <a-button type="link" :icon="h(LeftOutlined)" @click="router.back()">
            返回
          </a-button>
          <a-input
            v-if="isEdit"
            v-model:value="title"
            @blur="isEdit = false"
            @pressEnter="isEdit = false"
          />
          <a-space v-else>
            <a-typography-title className="!text-[18px] !mb-0 !leading-none">{{
              title
            }}</a-typography-title>
            <a-button :icon="h(EditOutlined)" @click="isEdit = true" />
          </a-space>
        </a-space>
      </div>
      <div class="flex-1 text-center">
        <!-- <EditToolbar /> -->
        <edit-toolbar></edit-toolbar>
      </div>
      <div class="flex-1 text-right">
        <a-space>
          <!-- <SaveButton />
          <PublishButton /> -->
        </a-space>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
