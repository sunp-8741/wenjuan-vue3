export type QuestionParagraphPropsType = {
  text?: string
  isCenter?: boolean
  disabled?: boolean
}
export type QuestionParagraphEmitsType = {
  (e: 'formChange', value: QuestionParagraphPropsType): void
}
export const QuestionParagraphDefaultProps: QuestionParagraphPropsType = {
  text: '一行段落',
  isCenter: false,
}
