<template>
  <div class="main">
    <h2>main</h2>
    <button @click="logoutClick">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constant'
import { useRouter } from 'vue-router'

const router = useRouter()

const logoutClick = () => {
  localStorage.removeItem(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
