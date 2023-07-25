<template>
  <div className="h-screen">
    <div className="flex-1">
      <RouterView v-if="!waitingUserData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoadUserData from '@/hooks/useLoadUserData'

const { waitingUserData } = useLoadUserData()
</script>

<style scoped></style>
