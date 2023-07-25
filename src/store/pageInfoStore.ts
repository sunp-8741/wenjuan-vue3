import { defineStore } from 'pinia'

export type PageInfoType = {
  title: string
  desc?: string
  js?: string
  css?: string
  isPublished?: boolean
}

// 初始值
const INIT_STATE: PageInfoType = {
  title: '',
  desc: '',
  js: '',
  css: '',
  isPublished: false,
}

export const usePageInfoStore = defineStore('pageInfo', {
  state: () => INIT_STATE,
})
