import {
  getComponentConfByType,
  ComponentPropsType,
} from '@/components/QuestionComponents'
import { useComponentStore } from '@/store/componentStore'
import { storeToRefs } from 'pinia'
import { defineComponent, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const componentStore = useComponentStore()
    const noProp = <div class="text-center">未选中组件</div>
    const { selectedComponent } = storeToRefs(componentStore)
    if (!selectedComponent.value) return () => noProp
    const { type, props, isLocked, isHidden, fe_id } = toRefs(
      selectedComponent.value
    )

    const componentConf = getComponentConfByType(type.value)
    if (!componentConf) return () => noProp
    function onChangeProps(newProps: ComponentPropsType) {
      console.log('update', newProps)
      componentStore.changeComponentProps(fe_id.value, newProps)
    }
    return () => (
      <componentConf.PropsComponent
        {...props.value}
        onFormChange={onChangeProps}
        disabled={isHidden.value || isLocked.value}
      />
    )
    // h(componentConf.PropsComponent, {
    //   ...props,
    //   onChange: onChangeProps,
    //   disabled: isHidden || isLocked,
    // })
  },
})
