<template>

    <h2>name:{{name}}</h2>
    <h2>age:{{age}}</h2>
    <h2>height:{{height}}</h2>
</template>

<script>
export default {
    // 1、props作为数组
    // 缺点：无法确定类型，无法默认值
    // props:["name","age","height"]
    // 2、作为对象
    props:{
        name:{
            type:String,
            default:"王五"
        },
        age:{
            type:Number,
            default:20
        },
        height:{
            type:Number,
            default:1.78
        },
        // 注意对象类型的默认值需要default是一个函数返回一个对象，数组也是一个对象
        // 方法直接返回default函数即可
        fireds:{
            type:Object,
            default(){
                return {name:"shshs"}
            }
        }
    }

}
</script>

<style scoped>

</style>