<template>
  <div class="user-content">
    <div class="header">
      <div class="title">用户列表</div>
      <el-button type="primary" icon="Plus" @click="installUserBtn">新增用户</el-button>
    </div>
    <div class="table">
      <el-table :data="userList" border style="width: 100%" v-loading="loadingStore.isLoading">
        <el-table-column align="center" type="selection" width="55" />
        <el-table-column align="center" type="index" label="序号" width="55" />
        <el-table-column align="center" prop="name" label="用户名" width="180" />
        <el-table-column align="center" prop="realname" label="真实姓名" width="180" />
        <el-table-column align="center" prop="cellphone" label="手机号" width="180" />
        <el-table-column align="center" prop="enable" label="状态" width="180">
          <template #default="scope">
            <el-tag :type="scope.row.enable === '1' ? 'warning' : 'primary'" disable-transitions>{{
              scope.row.enable === '1' ? '冻结' : '正常'
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="createAt" label="创建时间">
          <template #default="scope">
            {{ formatDate(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" prop="updateAt" label="更新时间">
          <template #default="scope">
            {{ formatDate(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="150">
          <template #default="scope">
            <el-button text type="primary" icon="Edit" @click="userUpdateBtn(scope.row)">
              编辑
            </el-button>
            <el-button text type="danger" icon="Delete" @click="userDeleteBtn(scope.row.id)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import useSystemStore from '@/store/main/system/system'
import useLoadingStore from '@/store/loading/loading'
import { formatDate } from '@/utils/format'

const emits = defineEmits(['newUserBtn', 'updateUserBtn'])
const loadingStore = useLoadingStore()
const systemStore = useSystemStore()
const currentPage = ref(1)
const pageSize = ref(10)

systemStore.$onAction((arg) => {
  arg.after(() => {
    if (
      arg.name === 'deleteUserByIdActive' ||
      arg.name === 'installUserActive' ||
      arg.name === 'updateUserActive'
    ) {
      currentPage.value = 1
      pageSize.value = 10
    }
  })
})
fetchUserListData()

const { userList, totalCount, formData } = storeToRefs(systemStore)
console.log(userList)

//分页查询
function handleSizeChange() {
  fetchUserListData(formData.value)
}
function handleCurrentChange() {
  fetchUserListData(formData.value)
}

function fetchUserListData(formData?: any) {
  const size = pageSize.value
  const offset = (currentPage.value - 1) * size

  const dataConfig = { size, offset, ...formData }
  systemStore.postUserInfoListActive(dataConfig)
}
//删除\编辑\新增
function userDeleteBtn(userId: number) {
  systemStore.deleteUserByIdActive(userId)
}
function userUpdateBtn(user: any) {
  emits('updateUserBtn', user)
}

function installUserBtn() {
  emits('newUserBtn')
}

defineExpose({ fetchUserListData })
</script>

<style lang="less" scoped>
.user-content {
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 10px;
    .title {
      font-size: 22px;
      font-weight: 700;
    }
  }
  .table {
    .el-button {
      padding: 6px;
      margin: 0;
    }
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
}
</style>
