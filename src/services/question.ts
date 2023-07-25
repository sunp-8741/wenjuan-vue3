import axios, { ResDataType } from './ajax.ts'

export type SearchOption = {
  keyword: string
  isStar: boolean
  isDeleted: boolean
  page: number
  pageSize: number
}
export async function getQuestionService(id: string) {
  return (await axios.get(`/api/question/${id}`)) as ResDataType
}

// 创建问卷
export async function createQuestionService() {
  return (await axios.post('/api/question')) as ResDataType
}

// 获取问卷列表
export async function getQuestionListService(params: Partial<SearchOption>) {
  console.log(params)
  return (await axios.get('/api/question', { params })) as ResDataType
}

// 更新问卷
export async function updateQuestionService(
  id: string,
  opt: { [key: string]: never }
) {
  return (await axios.patch(`/api/question/${id}`, opt)) as ResDataType
}

// 复制问卷
export async function duplicateQuestionService(id: string) {
  return (await axios.patch(`/api/question/duplicate/${id}`)) as ResDataType
}

// 批量彻底删除
export async function deleteQuestionService(ids: string[]) {
  return (await axios.delete('/api/question', { data: { ids } })) as ResDataType
}
