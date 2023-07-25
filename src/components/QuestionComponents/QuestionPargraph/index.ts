import { QuestionParagraphDefaultProps } from './interface.ts'
import Component from './Component.vue'
import PropsComponent from './PropsComponent.vue'

export * from './interface.ts'

export default {
  title: '段落',
  type: 'questionParagraph',
  QuestionComponent: Component,
  PropsComponent,
  defaultProps: QuestionParagraphDefaultProps,
}
