import { getQuestionService } from '@/services/question'
import { useComponentStore } from '@/store/componentStore'
import { usePageInfoStore } from '@/store/pageInfoStore'
import { useAsyncState } from '@vueuse/core'
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export default function useLoadQuestionData() {
  const route = useRoute()
  const id = route.params.id as string
  const componentStore = useComponentStore()
  const pageInfoStore = usePageInfoStore()
  const { state, execute, isLoading, error } = useAsyncState(
    getQuestionService,
    { id }
  )
  watchEffect(() => {
    if (!state) return
    const {
      componentList = [],
      title = '',
      desc = '',
      js = '',
      css = '',
      isPublished = false,
    } = state.value
    let selectedId = ''
    if (componentList.length) {
      selectedId = componentList[0].fe_id
    }
    componentStore.$patch((state) => {
      state.componentList = componentList
      state.selectedId = selectedId
      state.copiedComponent = null
    })
    pageInfoStore.$patch((state) => {
      state.title = title
      state.css = css
      state.desc = desc
      state.isPublished = isPublished
      state.js = js
    })
  })
  watchEffect(() => {
    execute(0, id)
  })
  return {
    isLoading,
    error,
  }
}
