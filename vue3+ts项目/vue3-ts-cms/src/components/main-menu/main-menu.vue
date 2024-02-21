<template>
  <div class="main-menu">
    <div class="logo">
      <img class="img" src="../../assets/img/logo.svg" alt="" />
      <span v-show="!isFold" class="title">后台管理系统</span>
    </div>
    <div class="menu">
      <el-menu default-active="39" :collapse="isFold">
        <template v-for="subMenu in userMenus" :key="subMenu.id">
          <el-sub-menu :index="subMenu.id + ''">
            <template #title>
              <el-icon>
                <component :is="subMenu.icon.split('-icon-')[1]"></component>
              </el-icon>
              <span>{{ subMenu.name }}</span>
            </template>
            <template v-for="item in subMenu.children" :key="item.id">
              <el-menu-item :index="item.id + ''" @click="handerRouter(item)">{{
                item.name
              }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import { useRouter } from 'vue-router'

defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

const loginStore = useLoginStore()
const userMenus = loginStore.userMenus

const router = useRouter()
function handerRouter(item: any) {
  console.log(item)
  router.push(item.url)
}
</script>

<style lang="less" scoped>
.main-menu {
  // --el-menu-bg-color: #001529 !important;
  // --el-menu-hover-bg-color: #001529 !important;
  // --el-menu-text-color: #b7bdc3 !important;
  // --el-menu-active-color: #fff !important;
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 10px 8px;
    overflow: hidden;

    .img {
      height: 100%;
      margin: 0 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      white-space: nowrap;
    }
  }
  .el-menu {
    border-right: none;
    user-select: none;
  }
  .el-sub-menu {
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135;
    }
    .el-menu-item.is-active {
      background-color: #0a60bd;
    }
  }
}
:global(.el-menu-item:hover) {
  color: #fff;
}
:global(.el-menu-item.is-active) {
  background-color: #0a60bd;
}
</style>
