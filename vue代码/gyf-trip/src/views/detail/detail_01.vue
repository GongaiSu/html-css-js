<template>
  <div class="detail top-page" ref="detailRef">
    <van-tabs v-model:active="active" class="van-tabs" @click-tab="onClickTab" v-if="showTabControl" :sticky="showTabControl">
      <template v-for="(item,index) in names" :key="index">
        <van-tab :title="item" />
      </template>
    </van-tabs>

    <van-nav-bar
      title="旅途"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="list" v-if="mainPart">
      <detail-swipe :detail-main-part="mainPart.topModule.housePicture.housePics"/>
      <detail-infos name="描述" :ref="getSectionRef" :top-infos="mainPart.topModule"/>
      <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule"/>
      <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
      <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :price-intro="mainPart.introductionModule"/>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import {getDetailInfos} from "@/services"
import DetailSwipe from "./cpns/detail-swipe.vue"
import DetailInfos from "./cpns/detail_02-infos.vue"
import DetailFacility from "./cpns/detail_03-facility.vue"
import DetailLandlord from "./cpns/detail_04-landlord.vue"
import DetailComment from "./cpns/detail_05-comment.vue"
import DetailNotice from "./cpns/detail_06-notice.vue"
import DetailMap from "./cpns/detail_07-map.vue"
import DetailIntro from "./cpns/detail_08-intro.vue"
import useScroll from "@/hooks/useScroll"


const route = useRoute()
const router = useRouter()
const houseId = route.params.id

const detailInfos = ref({})

const active = ref(1)
const sectionEls = ref({})
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value >= 300
})

const names = computed(()=>{
  return Object.keys(sectionEls.value)
})

const getSectionRef = (value)=>{
  if(!value) return
  const name = value.$el.getAttribute("name")
  sectionEls.value[name] = value.$el
}


let isCilck = false
let currentIndex = -1;
const onClickTab = ()=>{
  const name = Object.keys(sectionEls.value)[active.value]
  const el = sectionEls.value[name]

  let instance = el.offsetTop
  if (active.value !== 0) {
    instance = instance - 44
  }

  currentIndex = instance
  isCilck = true
  detailRef.value.scrollTo({
    top: instance,
    behavior: "smooth"
  })
}

getDetailInfos(houseId).then(res=>{
  detailInfos.value = res.data
})
const mainPart = computed(()=>detailInfos.value.mainPart)


const onClickLeft = ()=>{
  router.back()
}



watch(scrollTop,(newValue)=>{
  if(currentIndex === newValue){
    isCilck =false
  }
  if(isCilck) return
  const els = Object.values(sectionEls.value)
  const values = els.map(el=>el.offsetTop)
  let topIndex = values.length -1
  for (let index = 0; index < values.length; index++) {
    if(values[index]>newValue+44){
      topIndex = index -1
      break
    }
  }
  isCilck = false
  active.value = topIndex
})
</script>

<style lang="less" scoped>

.detail{
  height: 100vh;
  overflow-y: auto;
}

.van-tabs{
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>