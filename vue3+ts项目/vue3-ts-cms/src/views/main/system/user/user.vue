<template>
  <div class="user">
    <user-search @search-list="handerSearchList" @reset-list="handerResetList"></user-search>
    <user-content
      ref="userContentRef"
      @new-user-btn="newUserBtnActive"
      @update-user-btn="updateUserBtnActive"
    />
    <user-modal ref="userModalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userSearch from './c-cnpm/user-search.vue'
import userContent from './c-cnpm/user-content.vue'
import userModal from './c-cnpm/user-modal.vue'

const userContentRef = ref<InstanceType<typeof userContent>>()
function handerSearchList(formData: any) {
  userContentRef.value?.fetchUserListData(formData)
}
function handerResetList() {
  userContentRef.value?.fetchUserListData()
}

const userModalRef = ref<InstanceType<typeof userModal>>()
function newUserBtnActive() {
  userModalRef.value?.showDialog()
}
function updateUserBtnActive(user: any) {
  userModalRef.value?.showDialog(false, user)
}
</script>

<style lang="less" scoped>
.user {
}
</style>
