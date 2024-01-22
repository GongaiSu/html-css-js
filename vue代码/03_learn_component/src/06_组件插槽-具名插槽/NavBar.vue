<template>
  <div class="bar">
    <div class="left">
      <slot name="left">
        1
      </slot>
    </div>
    <div class="center">
      <slot name="center">
        2
      </slot>
    </div>
    <div class="right">
      <slot name="right">
        3
      </slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.left {
  background-color: rgb(1, 242, 162);
  width: 88px;
}

.center {
  background-color: rgb(228, 167, 12);
  flex: 1;
}

.right {
  background-color: olivedrab;
  width: 88px;
}
</style>