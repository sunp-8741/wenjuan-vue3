import QuestionInput from './Component.vue'
import { QuestionInputDefaultProps } from '@/components/QuestionComponents/QuestionInput/interface.ts'
import PropsComponent from './PropsComponent.vue'

export * from './interface.ts'

export default {
  title: '输入框',
  type: 'questionInput',
  QuestionComponent: QuestionInput,
  PropsComponent,
  defaultProps: QuestionInputDefaultProps,
}
