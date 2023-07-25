import { useUserStore } from '@/store/userInfoStore.ts'
import { storeToRefs } from 'pinia'
import { Ref } from 'vue'

export default function (): { nickname: Ref<string>; username: Ref<string> } {
  const userStore = useUserStore()
  const { nickname, username } = storeToRefs(userStore)
  return {
    nickname,
    username,
  }
}
