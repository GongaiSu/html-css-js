<template>
  <div class="user-content">
    <div class="header">
      <div class="title">用户列表</div>
      <el-button type="primary" icon="Plus">新增用户</el-button>
    </div>
    <div class="table">
      <el-table :data="userList" border style="width: 100%">
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
        <el-table-column align="center" prop="createAt" label="创建时间" />
        <el-table-column align="center" prop="updateAt" label="更新时间" />
        <el-table-column align="center" label="操作" width="150">
          <el-button text type="primary" icon="Edit">编辑</el-button>
          <el-button text type="danger" icon="Delete">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useSystemStore from '@/store/system/system'
import { storeToRefs } from 'pinia'
const systemStore = useSystemStore()

systemStore.postUserInfoListActive()
const { userList, totalCount } = storeToRefs(systemStore)
console.log(userList)
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
}
</style>
