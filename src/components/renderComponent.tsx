import {
  PropType,
  defineComponent,
  type ComponentPublicInstance,
  toRefs,
  ref,
} from 'vue'
import { ComponentInfoType } from '@/store/componentStore'
import { getComponentConfByType } from './QuestionComponents'
export default defineComponent({
  props: {
    componentInfo: {
      type: Object as PropType<ComponentInfoType>,
      default: () => ({}),
    },
    component: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: Object as ComponentPublicInstance<any>,
    },
  },
  setup(props) {
    const updateKey = ref(1)
    if (props.component) return () => <props.component />
    const { type } = toRefs(props.componentInfo)
    const componentConf = getComponentConfByType(type.value)
    if (!componentConf) {
      console.log(type)
    }
    if (!componentConf) return null
    const { QuestionComponent } = componentConf
    return () => (
      <QuestionComponent key={updateKey.value} {...props.componentInfo.props} />
    )
  },
})
