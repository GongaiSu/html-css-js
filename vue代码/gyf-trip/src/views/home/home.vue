<template>
  <div class="home">
    <nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <div class="location">
      <div class="city">北京</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "./cpns/nav-bar.vue";
</script>

<style lang="less" scoped>

  .home{
    .banner{
      img{
        width: 100%;
      }
    }
    .location{
      display: flex;
      align-items: center;
      height: 44px;
      padding: 0 20px;

      .city{
        flex: 1;
      }

      .position{
        display: flex;
        align-items: center;
        width: 74px;
        
        

        .text{
          position: relative;
          top: 2px;
          font-size: 12px;
        }
        img{
          margin-left: 8px;
          width: 18px;
          height: 18px;
        }
      }
    }
  }

</style>