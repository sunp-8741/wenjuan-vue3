<script setup lang="ts">
import { reactive } from 'vue'
import type { UserForm } from '@/types'
import { UserAddOutlined } from '@ant-design/icons-vue'
import { useAsyncState, useStorage } from '@vueuse/core'
import { loginService } from '@/services/user.ts'
import { message } from 'ant-design-vue'
import { setToken } from '@/utils/user-token.ts'
import { useRouter } from 'vue-router'
import { MANAGE_INDEX_PATH } from '@/constant'

const router = useRouter()
const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'
const username = useStorage(USERNAME_KEY, '')
const password = useStorage(PASSWORD_KEY, '')
const formState = reactive<UserForm>({
  username: username.value,
  password: password.value,
  remember: false,
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { execute: onLogin, isLoading } = useAsyncState(loginService, null, {
  immediate: false,
  onSuccess(result) {
    const { token = '' } = result
    setToken(token)
    message.success('登录成功')
    router.push(MANAGE_INDEX_PATH)
  },
})
function remember() {
  username.value = formState.username
  password.value = formState.password
  onLogin(formState)
}
function onFinish(values: UserForm) {
  if (values.remember) {
    remember()
  }
}
</script>

<template>
  <div class="center-container">
    <div>
      <a-space>
        <a-typography-title :level="2">
          <user-add-outlined />
        </a-typography-title>
        <a-typography-title :level="2">登录</a-typography-title>
      </a-space>
    </div>
    <div>
      <a-form
        :model="formState"
        :label-col="{ span: 6 }"
        :wrapper-col="{ span: 18 }"
        @finish="onFinish"
      >
        <a-form-item
          name="username"
          label="用户名"
          :rules="[
            { required: true, message: '请输入用户名' },
            { type: 'string', min: 5, max: 20, message: '字符长度在5-20之间' },
            { pattern: /^\w+$/, message: '只能是字母数字下划线' },
          ]"
        >
          <a-input v-model:value="formState.username" />
        </a-form-item>
        <a-form-item
          name="password"
          label="密码"
          :rules="[{ required: true, message: '请输入密码' }]"
        >
          <a-input-password v-model:value="formState.password" />
        </a-form-item>
        <a-form-item :wrapperCol="{ offset: 6, span: 18 }" name="remember">
          <a-checkbox v-model:checked="formState.remember">记住我</a-checkbox>
        </a-form-item>
        <a-form-item :wrapperCol="{ offset: 6, span: 18 }">
          <a-space>
            <a-button type="primary" html-type="submit"> 登录 </a-button>
            <router-link to="/register">注册新用户</router-link>
          </a-space>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style scoped></style>
