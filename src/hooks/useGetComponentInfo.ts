import { useComponentStore } from '@/store/componentStore'
import { storeToRefs } from 'pinia'

export default function () {
  const componentStore = useComponentStore()
  const { componentList, selectedId, copiedComponent } =
    storeToRefs(componentStore)
  return {
    componentList,
    selectedId,
    copiedComponent,
    selectedComponent: componentStore.selectedComponent,
  }
}
