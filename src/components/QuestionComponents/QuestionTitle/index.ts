import Component from './Component.vue'
import PropsComponent from './PropsComponent.vue'
import { QuestionTitleDefaultProps } from './interface.ts'
export * from './interface.ts'
export default {
  title: '标题',
  type: 'questionTitle',
  QuestionComponent: Component,
  PropsComponent,
  defaultProps: QuestionTitleDefaultProps,
}
