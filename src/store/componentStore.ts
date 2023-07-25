import { ComponentPropsType } from '@/components/QuestionComponents'
import { defineStore } from 'pinia'
import cloneDeep from 'lodash.clonedeep'
import { nanoid } from 'nanoid'

export type ComponentInfoType = {
  fe_id: string
  type: string
  title: string
  isHidden: boolean
  isLocked: boolean
  props: ComponentPropsType
}
function getNextSelected(fe_id: string, componentList: ComponentInfoType[]) {
  const index = componentList.findIndex((c) => c.fe_id === fe_id)
  if (index < 0) return ''
  let newSelected = ''
  const length = componentList.length
  if (length <= 1) {
    // 组件就一个 没有选中
    newSelected = ''
  } else {
    if (index + 1 === length) {
      //  要删除最后一个 则选中上一个
      newSelected = componentList[index - 1].fe_id
    } else {
      //   不是删除最后一个，删除以后选中下一个
      newSelected = componentList[index + 1].fe_id
    }
  }
  return newSelected
}
export type ComponentsStateType = {
  componentList: Array<ComponentInfoType>
  selectedId: string
  copiedComponent: ComponentInfoType | null
}
export const useComponentStore = defineStore('components', {
  state: (): ComponentsStateType => {
    return {
      componentList: [],
      selectedId: '',
      copiedComponent: null,
    }
  },
  actions: {
    addComponent(componentInfo: ComponentInfoType) {
      const index = this.componentList.findIndex(
        (c) => c.fe_id === this.selectedId
      )
      if (index < 0) {
        // 未选中组件
        this.componentList.push(componentInfo)
      } else {
        this.componentList.splice(index + 1, 0, componentInfo)
      }
      this.selectedId = componentInfo.fe_id
    },
    changeSelectedId(fe_id: string) {
      this.selectedId = fe_id
    },
    changeComponentProps(fe_id: string, newProps: ComponentPropsType) {
      const curComp = this.getComponentById(fe_id)
      if (curComp) {
        curComp.props = {
          ...curComp.props,
          ...newProps,
        }
      }
    },
    // 删除组件
    removeSelectedComponent() {
      const newSelectedId = getNextSelected(this.selectedId, this.componentList)

      this.componentList.splice(this.selectedIndex, 1)
      this.selectedId = newSelectedId
    },
    // 切换组件显示隐藏
    changeComponentHidden(fe_id: string, isHidden: boolean) {
      let newSelectedId = ''
      if (isHidden) {
        //   隐藏
        newSelectedId = getNextSelected(
          fe_id,
          this.componentList.filter((c) => !c.isHidden)
        )
      } else {
        //   显示
        newSelectedId = fe_id
      }
      this.selectedId = newSelectedId
      const component = this.getComponentById(fe_id)
      if (component) {
        component.isHidden = isHidden
      }
    },
    toggleComponentLocked(fe_id: string) {
      const component = this.getComponentById(fe_id)
      if (component) {
        component.isLocked = !component.isLocked
      }
    },
    // 拷贝当前选中组件
    copySelectedComponent() {
      if (!this.selectedId) return
      this.copiedComponent = cloneDeep(
        this.selectedComponent || ({} as ComponentInfoType)
      )
    },
    // 粘贴组件
    pasteCopiedComponent() {
      if (!this.copiedComponent) return
      const component = cloneDeep(this.copiedComponent)
      component.fe_id = nanoid(5)
      if (this.selectedIndex < 0) {
        // 未选中组件
        this.componentList.push(component)
      } else {
        this.componentList.splice(this.selectedIndex + 1, 0, component)
      }
      this.selectedId = component.fe_id
    },
    moveComponent() {},
  },
  getters: {
    selectedComponent: (state): ComponentInfoType => {
      return state.componentList.find((c) => c.fe_id === state.selectedId)
    },
    getComponentById: (state) => {
      return (fe_id: string) =>
        state.componentList.find((c) => c.fe_id === fe_id)
    },
    selectedIndex: (state) => {
      return state.componentList.findIndex((c) => c.fe_id === state.selectedId)
    },
  },
})
