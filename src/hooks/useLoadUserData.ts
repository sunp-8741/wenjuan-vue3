import { useUserStore } from '@/store/userInfoStore.ts'
import { useAsyncState } from '@vueuse/core'
import { getUserInfoService } from '@/services/user.ts'
import { UserForm } from '@/types'
import useGetUserInfo from '@/hooks/useGetUserInfo.ts'
import { ref, watchEffect } from 'vue'

export default function () {
  const userStore = useUserStore()
  const { username } = useGetUserInfo()
  console.log(username)
  const waitingUserData = ref(true)
  const { execute } = useAsyncState(getUserInfoService, null, {
    immediate: false,
    onSuccess(result) {
      const { username, nickname } = result as UserForm
      userStore.loginAction({ username, nickname })
    },
  })
  watchEffect(() => {
    if (username.value) {
      return (waitingUserData.value = false)
    }
    execute().finally(() => {
      waitingUserData.value = false
    })
  })
  return {
    waitingUserData,
  }
}
