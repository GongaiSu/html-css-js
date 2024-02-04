<template>
  <div>
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
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { useRoute, useRouter } from "vue-router"
import {getDetailInfos} from "@/services"
import DetailSwipe from "./cpns/detail-swipe.vue"
import DetailInfos from "./cpns/detail_02-infos.vue"
import DetailFacility from "./cpns/detail_03-facility.vue"
import DetailLandlord from "./cpns/detail_04-landlord.vue"
import DetailComment from "./cpns/detail_05-comment.vue"
import DetailNotice from "./cpns/detail_06-notice.vue"
import DetailMap from "./cpns/detail_07-map.vue"


const route = useRoute()
const router = useRouter()
const houseId = route.params.id

const detailInfos = ref({})

const mainPart = computed(()=>detailInfos.value.mainPart)

const getSectionRef = ref()

getDetailInfos(houseId).then(res=>{
  detailInfos.value = res.data
})


const onClickLeft = ()=>{
  router.back()
}
</script>

<style lang="less" scoped>

</style>