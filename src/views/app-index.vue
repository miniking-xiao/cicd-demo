<template>
  <div class="box">
    <img class="bgc" src="../assets/images/bgc.jpg" alt="" />
    <div class="dv-index-main"></div>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
}
.bgc {
  width: 100%;
  height: 100%;
}
.dv-index-main {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('../assets/images/homeBgc.png') no-repeat;
  background-size: 100% 100%;
}
</style>
