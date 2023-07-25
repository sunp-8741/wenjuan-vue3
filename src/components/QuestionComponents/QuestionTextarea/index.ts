import QuestionTextarea from './Component.vue'
import PropsComponent from './PropsComponent.vue'
import { QuestionTextareaDefaultProps } from './interface.ts'

export * from './interface.ts'

export default {
  title: '多行输入框',
  type: 'questionTextarea',
  QuestionComponent: QuestionTextarea,
  PropsComponent,
  defaultProps: QuestionTextareaDefaultProps,
}
