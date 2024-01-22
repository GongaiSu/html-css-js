<template>
  <slot-content>
    <button>则是插槽里的值</button>
  </slot-content>
</template>

<script>

import SlotContent from './SlotContent.vue';
export default {
  name:"App",
  components:{
    SlotContent
  }
  

}
</script>

<style scoped>

</style>