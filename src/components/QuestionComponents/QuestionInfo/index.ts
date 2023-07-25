import PropsComponent from './PropsComponent.vue'
import QuestionInfo from './Component.vue'
import { QuestionInfoDefaultProps } from './interface.ts'

export * from './interface.ts'

export default {
  title: '问卷信息',
  type: 'questionInfo',
  QuestionComponent: QuestionInfo,
  PropsComponent,
  defaultProps: QuestionInfoDefaultProps,
}
