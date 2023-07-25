import { defineStore } from 'pinia'
export interface UserStateType {
  username: string
  nickname: string
}
const INIT_STATE: UserStateType = {
  username: '',
  nickname: '',
}
export const useUserStore = defineStore('user', {
  state: (): UserStateType => {
    return INIT_STATE
  },
  actions: {
    loginAction(userInfo: UserStateType) {
      this.username = userInfo.username
      this.nickname = userInfo.nickname
    },
    logoutAction() {
      this.username = ''
      this.nickname = ''
    },
  },
})
