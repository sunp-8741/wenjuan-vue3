<script setup lang="ts">
import useGetUserInfo from '@/hooks/useGetUserInfo.ts'
import { UserOutlined } from '@ant-design/icons-vue'
import { removeToken } from '@/utils/user-token.ts'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { LOGIN_PATH } from '@/constant'
import { useUserStore } from '@/store/userInfoStore.ts'

const { username, nickname } = useGetUserInfo()
const router = useRouter()
const userStore = useUserStore()
function logout() {
  removeToken()
  userStore.logoutAction()
  message.success('退出成功')
  router.push(LOGIN_PATH)
}
</script>

<template>
  <router-link v-if="!username" to="/login">登录</router-link>
  <template v-else>
    <span class="text-[#e8e8e8]">
      <user-outlined />
      {{ nickname }}
    </span>
    <a-button type="link" @click="logout"> 退出 </a-button>
  </template>
</template>

<style scoped></style>
