import { ComponentInfoType } from './componentStore'
// 插入新组件
export function insertNewComponent(
  componentList: ComponentInfoType[],
  newComponent: ComponentInfoType,
  selectedId: string
) {
  const index = componentList.findIndex((c) => c.fe_id === selectedId)
  if (index < 0) {
    // 未选中组件
    componentList.push(newComponent)
  } else {
    componentList.splice(index + 1, 0, newComponent)
  }
  return newComponent.fe_id
}
