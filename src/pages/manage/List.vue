<script setup lang="ts">
import { useAsyncState, useDebounceFn, useTitle } from '@vueuse/core'
import { computed, onMounted, reactive, ref, watch, watchEffect } from 'vue'
import { IQuestion } from '@/types'
// import { useRoute } from 'vue-router'
import { getQuestionListService } from '@/services/question.ts'
import QuestionCard from '@/components/QuestionCard.vue'
// const route = useRoute()
useTitle('问卷列表')
const containerRef = ref<HTMLDivElement>({} as HTMLDivElement)
const count = ref(0)
const params = reactive({
  page: 0,
  pageSize: 10,
  keyword: '',
})
let list = reactive<Array<IQuestion>>([])
const haveMoreData = computed<boolean>(() => {
  return count.value > list.length
})
const { execute: load, isLoading } = useAsyncState(
  getQuestionListService,
  params,
  {
    onSuccess(result) {
      const { list: questionList = [], total = 0 } = result
      list.push(...questionList)
      count.value = total
      params.page += 1
    },
  }
)
const tryLoadMore = useDebounceFn(() => {
  console.log(111)
  if (!containerRef.value) return
  const domRect = containerRef.value.getBoundingClientRect()
  const { bottom } = domRect
  if (bottom <= document.body.clientHeight) {
    load(0, params)
  }
}, 1000)
const stop = watchEffect(() => {
  if (haveMoreData.value) {
    window.addEventListener('scroll', tryLoadMore)
  }
})
watch(haveMoreData, (newValue) => {
  if (newValue) {
    window.addEventListener('scroll', tryLoadMore)
  }
})
onMounted(() => stop())
</script>

<template>
  <header class="flex justify-between">
    <div class="flex-1">
      <a-typography-title :level="3">我的问卷</a-typography-title>
    </div>
    <div class="text-right">
      <!--      <ListSearch />-->
    </div>
  </header>
  <div class="mb-5">
    <!--      {list.length && list.map((q: IQuestion) => { const { _id } = q return-->
    <!--      <QuestionCard key="{_id}" {...q} />-->
    <!--      })}-->
    <question-card v-for="q in list" :key="q._id" :question="q"></question-card>
    <a-button></a-button>
  </div>

  <div class="text-center">
    <div ref="containerRef">
      <a-spin v-if="isLoading" />
      <a-empty v-else-if="!count" />
      <span v-else-if="!haveMoreData">没有更多了</span>
      <span v-else>没有更多了</span>
    </div>
  </div>
</template>

<style scoped></style>
