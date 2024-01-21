<template>
    <h2>{{counter}}</h2>
    <add-counter-vue @add="addClick"></add-counter-vue>
    <sub-counter-vue @sub="subClick"></sub-counter-vue>
  
</template>

<script>
import AddCounterVue from './AddCounter.vue'
import SubCounterVue from './SubCounter.vue'

export default {
    name:"App",
    components:{
        AddCounterVue,SubCounterVue
    },
    data(){
        return{
            counter:0
        }
    },
    methods:{
        addClick(count,index){
            console.log(count,index);
            this.counter += count
        },
        subClick(count){
            this.counter -= count
        }
    }

}
</script>

<style scoped>

</style>