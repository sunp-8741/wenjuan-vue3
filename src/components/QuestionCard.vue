<script setup lang="ts">
import { IQuestion } from '@/types'
import { h, PropType, ref } from 'vue'
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  LineChartOutlined,
  StarFilled,
  StarOutlined,
} from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const { question } = defineProps({
  question: Object as PropType<IQuestion>,
})
// eslint-disable-next-line vue/no-setup-props-destructure
const changeStarLoading = ref(false)
const isDeletedState = ref(Boolean(question?.isDeleted))
const isStarState = ref(Boolean(question?.isDeleted))
const duplicateLoading = ref(false)
const deleteLoading = ref(false)
function onStar() {}
function onDuplicate() {}
function onDelete() {}
</script>

<template>
  <div
    v-if="!isDeletedState"
    class="mb-5 p-3 rounded-[3px] bg-white hover:[box-shadow:0_4px_10px_#e8e8e8]"
  >
    <div class="flex">
      <div class="flex-1">
        <a-button
          type="link"
          :href="
            question?.isPublished
              ? `/question/stat/${question?._id}`
              : `/question/edit/${question?._id}`
          "
        >
          <a-space>
            <StarOutlined v-if="question?.isStar" class="text-red-700" />
            {{ question?.title }}
          </a-space>
        </a-button>
      </div>
      <div class="flex-1 text-right text-[12px]">
        <a-space>
          <a-tag :color="question?.isPublished ? 'processing' : ''">
            {{ question?.isPublished ? '已发布' : '未发布' }}
          </a-tag>
          <span>答卷：{{ question?.answerCount }}</span>
          <span>{{ question?.createdAt }}</span>
        </a-space>
      </div>
    </div>
    <a-divider class="m-3" />
    <div class="flex">
      <div class="flex-1">
        <a-space>
          <a-button
            :icon="h(EditOutlined)"
            type="text"
            size="small"
            @click="router.push(`/question/edit/${question?._id}`)"
          >
            编辑问卷
          </a-button>
          <a-button
            :icon="h(LineChartOutlined)"
            type="text"
            size="small"
            :disabled="!question?.isPublished"
            @click="router.push(`/question/stat/${question?._id}`)"
          >
            问卷统计
          </a-button>
        </a-space>
      </div>
      <div class="flex-1 text-right">
        <a-button
          type="text"
          :icon="h(question?.isStar ? StarFilled : StarOutlined)"
          :disabled="changeStarLoading"
          @click="onStar"
        >
          {{ isStarState ? '取消标星' : '标星' }}
        </a-button>
        <a-popconfirm
          title="确定复制该问卷？"
          okText="确定"
          cancelText="取消"
          @confirm="onDuplicate"
        >
          <a-button
            type="text"
            :icon="h(CopyOutlined)"
            :disabled="duplicateLoading"
          >
            复制
          </a-button>
        </a-popconfirm>
        <a-button
          type="text"
          :icon="h(DeleteOutlined)"
          @click="onDelete"
          :disabled="deleteLoading"
        >
          删除
        </a-button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
