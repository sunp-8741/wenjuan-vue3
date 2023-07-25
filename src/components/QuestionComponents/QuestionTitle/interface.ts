export type QuestionTitlePropsType = {
  text?: string
  level?: 1 | 2 | 3
  isCenter?: boolean
  disabled?: boolean
}
export type QuestionTitleEmitsType = {
  (e: 'formChange', value: QuestionTitlePropsType): void
}
export const QuestionTitleDefaultProps: QuestionTitlePropsType = {
  text: '一级标题',
  level: 1,
  isCenter: false,
}
