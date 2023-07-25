<script setup lang="ts">
import { useRouter } from 'vue-router'
import { MANAGE_INDEX_PATH } from '@/constant'

const router = useRouter()
</script>

<template>
  <div
    class="flex justify-center items-center flex-col [min-height:calc(100vh_-_64px_-_65px)] bg-[linear-gradient(to_right,#4facfe_0%,#00f2fe_100%)]"
  >
    <div class="text-center">
      <a-typography-title>问卷调查 | 在线投票</a-typography-title>
      <a-typography-paragraph
        >已累积创建问卷 100 份，发布问卷 90 份，收到答卷 980
        份</a-typography-paragraph
      >
      <div>
        <a-button
          class="h-[60px] text-[24px] rounded-[3px]"
          type="primary"
          @click="router.push(MANAGE_INDEX_PATH)"
        >
          开始使用
        </a-button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
