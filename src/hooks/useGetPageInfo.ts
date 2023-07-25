import { usePageInfoStore } from '@/store/pageInfoStore'
import { storeToRefs } from 'pinia'

export default function () {
  return {
    ...storeToRefs(usePageInfoStore()),
  }
}
