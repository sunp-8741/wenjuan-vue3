import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import Login from '@/pages/Login.vue'
import ManageLayout from '@/layouts/ManageLayout.vue'
import List from '@/pages/manage/List.vue'
import QuestionLayout from '@/layouts/QuestionLayout.vue'
import EditQuestion from '@/pages/question/Edit/EditQuestion.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/manage',
        component: ManageLayout,
        children: [
          {
            path: 'list',
            component: List,
          },
        ],
      },
    ],
  },
  {
    path: '/question',
    component: QuestionLayout,
    children: [
      {
        path: 'edit/:id',
        component: EditQuestion,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
