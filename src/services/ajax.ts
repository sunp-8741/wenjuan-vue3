import axios from 'axios'
import { message } from 'ant-design-vue'
import { getToken } from '@/utils/user-token.ts'

const instance = axios.create({
  timeout: 10 * 1000,
})

// request
instance.interceptors.request.use(
  (config) => {
    // JWT验证
    config.headers['Authorization'] = `Bearer ${getToken()}`
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use((res) => {
  const resData = (res.data || {}) as ResType
  const { errno, data, msg } = resData
  if (errno) {
    if (msg) {
      message.error(msg)
    }
    throw new Error(msg)
  }
  return data as never
})
export default instance

export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
