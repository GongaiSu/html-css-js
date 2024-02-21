<template>
  <div class="main-header">
    <div class="menu-icon">
      <el-icon size="28px" @click="handerFold">
        <component :is="!isFold ? 'Fold' : 'Expand'" />
      </el-icon>
    </div>
    <div class="content">
      <div class="bread-crumbs">面包屑</div>
      <div class="infos">
        <header-info />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import headerInfo from './c-cpns/header-info.vue'

const emits = defineEmits(['flodChange'])

const isFold = ref(false)

function handerFold() {
  isFold.value = !isFold.value
  emits('flodChange', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  .menu-icon {
    // display: flex;
    // align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
    margin: 0 30px 0 18px;
  }
}
</style>
