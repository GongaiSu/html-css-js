<template>
  <div class="header-crumbs">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="(item, index) in breadCrumbs" :key="index">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useLoginStore from '@/store/login/login'
import { mapPathToBreadcrumbs } from '@/utils/map-menu'
import { useRoute } from 'vue-router'

const route = useRoute()
const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

const breadCrumbs = computed(() => {
  return mapPathToBreadcrumbs(route.path, userMenus)
})
</script>

<style lang="less" scoped>
.header-crumbs {
  color: red;
}
</style>
