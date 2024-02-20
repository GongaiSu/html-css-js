<template>
  <div class="pane-phone">
    <el-form label-width="60px">
      <el-form-item label="手机号">
        <el-input />
      </el-form-item>
      <el-form-item label="验证码">
        <div class="verification_code">
          <el-input />
          <el-button class="btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.pane-phone {
  .verification_code {
    display: flex;
  }
  .btn {
    margin-left: 5px;
  }
}
</style>
