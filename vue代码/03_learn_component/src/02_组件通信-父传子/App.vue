<template>
    <user-info name="李四" :age="19" :height="2" address="北京" />
    <user-info />
</template>

<script>

import UserInfo from  "./UserInfo.vue"
export default {
    name:"App",
    components:{
        UserInfo
    }

}
</script>

<style scoped>

</style>