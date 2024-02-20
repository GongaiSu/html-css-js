<template>
  <div class="login-panel">
    <div class="title">
      <h1>后台管理系统</h1>
    </div>
    <div class="login-box">
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane name="account">
          <template #label>
            <div class="label">
              <el-icon>
                <UserFilled />
              </el-icon>
              <span class="text">帐号登录</span>
            </div>
          </template>
          <pane-account ref="accountRef" />
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <div class="label">
              <el-icon>
                <Iphone />
              </el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <pane-phone />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="forgot-password">
      <el-checkbox v-model="RemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-button" type="primary" size="large" @click="loginBtn"
      >立即登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import paneAccount from './pane-account.vue'
import panePhone from './pane-phone.vue'
import { ref } from 'vue'

const activeName = ref('account')
const RemPwd = ref(false)
const accountRef = ref()

//登录按钮操作
function loginBtn() {
  accountRef.value.loginActive()
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 333px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .login-box {
    .label {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text {
      margin-left: 4px;
    }
  }

  .forgot-password {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }

  .login-button {
    margin-top: 8px;
    width: 100%;
    font-size: 18px;
  }
}
</style>
