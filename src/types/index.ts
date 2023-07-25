export interface UserForm {
  username: string
  password: string
  nickname?: string
  remember?: boolean
}

export interface IQuestion {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  isDeleted: boolean
  answerCount: number
  createdAt: string
}
