import { onMounted, onUnmounted, ref } from "vue";
import {throttle} from "underscore"


export default function useScroll(){

  const isReachBottom = ref(false)
  const scrollHeight = ref(0)
  const scrollTop = ref(0)
  const clientHeight = ref(0)

  const scrollListener = throttle(()=>{
    //所有内容的高度
    scrollHeight.value = document.documentElement.scrollHeight
    //移除内容的高度
    scrollTop.value = document.documentElement.scrollTop
    //视口内容的高度(可以展示的高度)
    clientHeight.value = document.documentElement.clientHeight
    if(scrollTop.value+clientHeight.value +1 >=scrollHeight.value){
      isReachBottom.value = true
    }
  },100)
  
  
  
  onMounted(()=>{
    window.addEventListener("scroll",scrollListener)
  })
  onUnmounted(()=>{
    window.removeEventListener("scroll",scrollListener)
  })

  return {isReachBottom,scrollHeight,clientHeight,scrollTop}
}