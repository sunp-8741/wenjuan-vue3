<script setup lang="ts">
import { h } from 'vue'
import {
  BarsOutlined,
  DeleteOutlined,
  PlusOutlined,
  StarOutlined,
} from '@ant-design/icons-vue'
import { useRoute, useRouter } from 'vue-router'
import { useAsyncState } from '@vueuse/core'
import { createQuestionService } from '@/services/question.ts'
const { path } = useRoute()
const router = useRouter()

const { execute: onCreateQuestion, isLoading } = useAsyncState(
  createQuestionService,
  null,
  {
    immediate: false,
  }
)
</script>

<template>
  <div class="flex py-6 w-[1200px] mx-auto my-0">
    <div class="w-[120px]">
      <a-space direction="vertical">
        <a-button
          type="primary"
          size="large"
          :icon="h(PlusOutlined)"
          @click="onCreateQuestion"
          :disabled="isLoading"
          :loading="isLoading"
        >
          创建问卷
        </a-button>
        <a-divider class="border-t-transparent" />
        <a-button
          :type="path.endsWith('list') ? 'default' : 'text'"
          :icon="h(BarsOutlined)"
          @click="router.push('/manage/list')"
        >
          我的问卷
        </a-button>
        <a-button
          :type="path.endsWith('star') ? 'default' : 'text'"
          :icon="h(StarOutlined)"
          @click="router.push('/manage/star')"
        >
          星标问卷
        </a-button>
        <a-button
          :type="path.endsWith('trash') ? 'default' : 'text'"
          :icon="h(DeleteOutlined)"
          @click="router.push('/manage/trash')"
        >
          回收站
        </a-button>
      </a-space>
    </div>
    <div class="flex-1 ml-[60px]">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
