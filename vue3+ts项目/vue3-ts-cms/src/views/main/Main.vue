<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="isFold ? '60px' : '200px'">
        <main-menu :isFold="isFold" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-header @flod-change="handerFlodChange" />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/components/main-menu/main-menu.vue'
import mainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue'

const isFold = ref(false)
function handerFlodChange(flag: boolean) {
  isFold.value = flag
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}
.main-container {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.3s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
