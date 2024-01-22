<template>
  <div class="app">
    <template v-for="(item,index) in this.barList">
      <div class="content"
      :class="{active : index === currIndex}"
      @click="btnClick(index)
      ">
      
      <slot :item="item">
        {{ item }}
      </slot>
      
    </div>
    </template>
    

  </div>
  
</template>

<script>
export default {
  meits:["btn"],
  props:{
    barList:{
      type:Array,
      defaulte(){
        return []
      },
      required:true
    }
  },
  data(){
    return{
      currIndex : 0
    }
  },
  methods:{
    btnClick(index){
      this.currIndex =index
      this.$emit("btn",index)
    }
  }

}
</script>

<style scoped>
.app{
  display: flex;
  height: 44px;
  line-height:44px;
  text-align: center;
}
.content{
  flex: 1;
}
.content.active{
  color: red;
  font-weight: 700;
}

</style>