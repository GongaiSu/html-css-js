<template>
  <div class="pane-account">
    <el-form
      :model="accountFrom"
      label-width="60px"
      :rules="accountRules"
      status-icon
      ref="formRef"
    >
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="accountFrom.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountFrom.password" type="password" placeholder="" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormRules, ElForm } from 'element-plus'
import type { IAccountType } from '@/types/index'
import useLoginStore from '@/store/login/login'

const accountFrom = reactive<IAccountType>({
  username: '',
  password: ''
})

//定义校验规则
const accountRules: FormRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}

//登录方法
const loginStore = useLoginStore()
const formRef = ref<InstanceType<typeof ElForm>>()
function loginActive() {
  formRef.value?.validate((valid) => {
    if (valid) {
      const username = accountFrom.username
      const password = accountFrom.password

      loginStore.accountLogin({ username, password })
    } else {
      ElMessage({
        showClose: true,
        message: '请检查输入的格式',
        type: 'error'
      })
    }
  })
}

defineExpose({ loginActive })
</script>

<style lang="less" scoped></style>
