import QuestionTitleConf, { QuestionTitlePropsType } from './QuestionTitle'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput'
import QuestionInfoConf, { QuestionInfoPropsType } from './QuestionInfo'
import QuestionRadioConf, { QuestionRadioPropsType } from './QuestionRadio'
import QuestionTextareaConf, {
  QuestionTextareaPropsType,
} from './QuestionTextarea'

import QuestionPargraphConf, {
  QuestionParagraphPropsType,
} from './QuestionPargraph'

import QuestionCheckboxConf, {
  QuestionCheckboxPropsType,
} from './QuestionCheckbox'

export type ComponentPropsType = QuestionTitlePropsType &
  QuestionInputPropsType &
  QuestionCheckboxPropsType &
  QuestionInfoPropsType &
  QuestionParagraphPropsType &
  QuestionRadioPropsType &
  QuestionTextareaPropsType

export type ComponentConfType = {
  title: string
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  QuestionComponent: any
  defaultProps: ComponentPropsType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  PropsComponent: any
}

// 全部组件配置列表
const componentConfList: ComponentConfType[] = [
  QuestionTitleConf,
  QuestionInputConf,
  QuestionCheckboxConf,
  QuestionInfoConf,
  QuestionPargraphConf,
  QuestionRadioConf,
  QuestionTextareaConf,
]

export const componentConfGroup = [
  {
    groupName: '文本显示',
    components: [QuestionTitleConf, QuestionInfoConf],
  },
  {
    groupName: '用户输入',
    components: [QuestionInputConf, QuestionPargraphConf, QuestionTextareaConf],
  },
  {
    groupName: '用户选择',
    components: [QuestionCheckboxConf, QuestionRadioConf],
  },
]

export function getComponentConfByType(type: string) {
  return componentConfList.find((c) => c.type === type)
}
