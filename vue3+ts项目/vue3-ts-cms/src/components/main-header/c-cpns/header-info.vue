<template>
  <div class="header-info">
    <div class="icon">
      <span class="dot">
        <span class="dot"></span>
        <el-icon><Message /></el-icon>
      </span>
      <span>
        <el-icon><ChatDotRound /></el-icon>
      </span>
      <span>
        <el-icon><Search /></el-icon>
      </span>
    </div>
    <div class="info">
      <el-dropdown>
        <span class="user-info">
          <div class="block">
            <el-avatar
              :size="30"
              src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
            />
          </div>
          <span class="title">龚燕飞</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon><CircleClose /></el-icon>
              <span>退出系统</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Unlock /></el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_TOKEN } from '@/global/constant'
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'

const router = useRouter()
function handleExitClick() {
  localCache.removeItem(LOGIN_TOKEN)
  router.push('/login')
}
</script>

<style lang="less" scoped>
.header-info {
  display: flex;
  align-items: center;
  .icon {
    display: inline-flex;
    margin-right: 20px;
    span {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 35px;
      &:hover {
        background: #f2f2f2;
      }
      i {
        font-size: 20px;
      }

      .dot {
        position: absolute;
        right: 3px;
        top: 3px;
        width: 6px;
        height: 6px;
        background-color: red;
        border-radius: 100%;
      }
    }
  }
  .user-info {
    display: flex;
    align-items: center;
    cursor: pointer;
    .title {
      margin-left: 8px;
    }
  }
}
.info {
  :global(.el-dropdown-menu__item) {
    line-height: 36px !important;
    padding: 6px 22px;
  }
}
</style>
