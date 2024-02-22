<template>
  <div class="user-search">
    <el-form label-width="120px" size="large" :model="formData" ref="formRef">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="formData.name" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="formData.realname" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号" prop="cellphone">
            <el-input v-model="formData.cellphone" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="enable">
            <el-select placeholder="请选择状态" v-model="formData.enable">
              <el-option label="启用" :value="1" />
              <el-option label="冻结" :value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createAt">
            <el-date-picker
              v-model="formData.createAt"
              type="daterange"
              range-separator="-"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              size="large"
            />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="btn">
      <el-button icon="Refresh" @click="handerRefresh">重置</el-button>
      <el-button type="primary" icon="search">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const formData = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: 1,
  createAt: ''
})

//重置
const formRef = ref<InstanceType<typeof ElForm>>()
function handerRefresh() {
  formRef.value?.resetFields()
}
</script>

<style lang="less" scoped>
.user-search {
  background-color: #fff;
  padding: 20px;

  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }
  .btn {
    text-align: right;
    padding: 0 50px 10px 0;

    .el-button {
      height: 36px;
    }
  }
}
</style>
