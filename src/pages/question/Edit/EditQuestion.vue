<script setup lang="ts">
import useLoadQuestionData from '@/hooks/useLoadQuestionData'
import EditHeader from './components/EditHeader.vue'
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'
import EditCanvas from './components/EditCanvas.vue'
const { isLoading } = useLoadQuestionData()
function clearSelectedId() {}
</script>
<template>
  <div v-if="!isLoading" class="flex flex-col h-screen bg-[#f0f2f5]">
    <EditHeader />
    <div class="flex-auto px-0 py-3">
      <div class="my-0 mx-6 h-full flex">
        <div class="w-[295px] bg-white px-3">
          <LeftPanel />
        </div>
        <div
          class="flex-1 flex items-center justify-center overflow-hidden"
          @click="clearSelectedId"
        >
          <div
            class="w-[400px] h-[712px] bg-white overflow-auto shadow-[0_2px_10px_#0000001f]"
          >
            <div class="">
              <edit-canvas :isLoading="isLoading"></edit-canvas>
            </div>
          </div>
        </div>
        <div class="w-[300px] bg-white px-3">
          <RightPanel />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
