<template>
  <div class="location">
    <div class="city" @click="cityClick">北京</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router"

const router = useRouter()
const cityClick = ()=>{
  router.push("/city")
}

const positionClick = ()=>{
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
},(err)=>{
  console.log(err)
});
}
</script>

<style lang="less" scoped>
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
</style>