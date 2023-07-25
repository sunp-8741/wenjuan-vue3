export type QuestionInputPropsType = {
  title?: string
  placeholder?: string
  disabled?: boolean
}
export type QuestionInputEmitsType = {
  (e: 'formChange', value: QuestionInputPropsType): void
}
export const QuestionInputDefaultProps: QuestionInputPropsType = {
  title: '输入框标题',
  placeholder: '请输入',
}
