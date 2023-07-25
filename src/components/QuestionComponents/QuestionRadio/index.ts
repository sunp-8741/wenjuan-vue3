import QuestionRadio from './Component.vue'
import { QuestionRadioDefaultProps } from './interface.ts'
import PropsComponent from './PropsComponent.vue'

export * from './interface.ts'

export default {
  title: '单选',
  type: 'questionRadio',
  QuestionComponent: QuestionRadio,
  defaultProps: QuestionRadioDefaultProps,
  PropsComponent,
  // StatComponent,
}
