<template>
  <div class="user">
    <user-search @search-list="handerSearchList" @reset-list="handerResetList"></user-search>
    <user-content ref="userContentRef"></user-content>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userSearch from './c-cnpm/user-search.vue'
import userContent from './c-cnpm/user-content.vue'

const userContentRef = ref<InstanceType<typeof userContent>>()
function handerSearchList(formData: any) {
  userContentRef.value?.fetchUserListData(formData)
}
function handerResetList() {
  userContentRef.value?.fetchUserListData()
}
</script>

<style lang="less" scoped>
.user {
}
</style>
