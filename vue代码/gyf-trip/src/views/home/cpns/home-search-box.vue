<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ cityStore.selectedCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
    <!-- 时间选择 -->
    <van-calendar 
      v-model:show="showDate" 
      type="range" 
      @confirm="onConfirm"
      :round="false" 
      color="#ff9854"
    />
    <div class="section date-range " @click="showDate = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{stayDate}}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>

    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门地区 -->
    <div class="section hot-suggests">
      <template v-for="(item,index) in hosSuggests" :key="index">
        <div 
          class="item"
          :style="{color:item.tagText.color, background:item.tagText.background.color}"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <div class="section serach-btn">
      <div class="btn" @click="serachBtn">开始搜索</div>
    </div>
  </div>
  
</template>

<script setup>
import {useRouter} from "vue-router"
import useCityStore from '@/stores/modules/city'
import useHomeStore from '@/stores/modules/home'
import {getDateFormatMonthDay,getDiffDays} from '@/utils/getDateFormat'
import {ref} from "vue"
import { storeToRefs } from "pinia"

const cityStore = useCityStore()
const router = useRouter()
const cityClick = ()=>{
  router.push("/city")
}
// 获取定位信息
const positionClick = ()=>{
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
},(err)=>{
  console.log(err)
});}



// 时间选择
const showDate = ref(false)
const date =  new Date()
const startDate = ref(getDateFormatMonthDay(date))
const nextDate = new Date()
nextDate.setDate(nextDate.getDate()+1)
const endDate = ref(getDateFormatMonthDay(nextDate))

const stayDate = ref(getDiffDays(date,nextDate))

const onConfirm = (values)=>{
  startDate.value = getDateFormatMonthDay(values[0])
  endDate.value = getDateFormatMonthDay(values[1])
  stayDate.value = getDiffDays(values[0],values[1])
  showDate.value =false
}

//热门地区
const homeStore  = useHomeStore()
const {hosSuggests} =storeToRefs(homeStore)

// 搜索按钮
const serachBtn = ()=>{
  router.push({
    path:'/search',
    query:{
      startDate: startDate.value,
      endDate:endDate.value
    }
  })
}

</script>

<style lang="less" scoped>


  .search-box{
    --van-calendar-popup-height :100% !important;
  }
  .location{
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .city{
      flex: 1;
      color: #333;
      font-size: 15px;
    }

    .position{
      display: flex;
      align-items: center;
      width: 74px;
      
      

      .text{
        position: relative;
        top: 2px;
        color: #333;
        font-size: 12px;
      }
      img{
        margin-left: 8px;
        width: 18px;
        height: 18px;
      }
    }
  }
  .section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  .start {
    border-right: 1px solid  var(--line-color);
  }
}

.hot-suggests{
  margin: 10px 0;
  height: auto;
  .item{
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
  }
}

.serach-btn{
  .btn{
    width: 324px;
    height: 38px;
    max-width: 500px;
    
    text-align: center;
    font-size: 18px;
    line-height: 38px;
    color: #fff;
    border-radius: 20px;
    background-image: var(--theme-linear-gradient)
  }
}


</style>