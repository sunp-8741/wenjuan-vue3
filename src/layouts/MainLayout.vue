<script setup lang="ts">
import UserInfo from '@/components/UserInfo.vue'
import useLoadUserData from '@/hooks/useLoadUserData.ts'
const { waitingUserData } = useLoadUserData()
</script>

<template>
  <a-layout>
    <a-layout-header class="px-6">
      <div class="float-left">
        <!--        <Logo />-->
      </div>
      <div class="float-right">
        <user-info />
      </div>
    </a-layout-header>
    <a-layout class="[min-height:calc(100vh_-_64px_-_65px)]">
      <a-layout-content>
        <div v-if="waitingUserData" class="text-center">
          <a-spin />
        </div>
        <RouterView v-else />
        <!--        {waitingUserData ? (-->
        <!--        <div class="text-center">-->
        <!--          <Spin />-->
        <!--        </div>-->
        <!--        ) : (-->
        <!--        <Outlet />-->
        <!--        )}-->
      </a-layout-content>
    </a-layout>
    <a-layout-footer class="text-center [border-top:1px_solid_#e8e8e8]"
      >layout footer</a-layout-footer
    >
  </a-layout>
</template>

<style scoped></style>
