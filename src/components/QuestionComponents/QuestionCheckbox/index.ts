import QuestionCheckbox from './Component.vue'
import { QuestionCheckboxDefaultProps } from './interface.ts'
import PropsComponent from './PropsComponent.vue'
// import { StatComponent } from './StatComponent.tsx'
export * from './interface.ts'
export default {
  title: '单选',
  type: 'questionCheckbox',
  QuestionComponent: QuestionCheckbox,
  defaultProps: QuestionCheckboxDefaultProps,
  PropsComponent,
}
