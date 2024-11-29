<template>
  <div class="box">
    <img class="bgc" src="../assets/images/bgc.jpg" alt="" />
    <div class="dv-index-main">
      <div class="dv-btn-group">
        <div class="btn-item" :class="[btnClassHandle(item.num)]" v-for="(item, index) in btnArr" :key="index">
          <img :src="getImgUrl(item.url)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const btnArr = ref<any>([
  {
    num: 'one',
    url: '安全基础'
  },
  {
    num: 'two',
    url: '双重预防'
  },
  {
    num: 'three',
    url: '特殊作业'
  },
  {
    num: 'four',
    url: '重大危险源'
  }
])
const getImgUrl = (url: string) => {
  return new URL(`../assets/images/${url}.png`, import.meta.url).href
}
const btnClassHandle = (key: string) => {
  return `btn-item-${key}`
}
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
  .dv-btn-group {
    position: absolute;
    left: 0;
    bottom: 127px;
    height: 370px;
    z-index: 10;
    .btn-item {
      position: absolute;
      width: 145px;
      height: 168px;
      cursor: pointer;
    }
    .btn-item-one {
      top: 143px;
      left: 298px;
    }
    .btn-item-two {
      top: 194px;
      left: 689px;
    }
    .btn-item-three {
      top: 194px;
      left: 683px;
    }
    .btn-item-four {
      top: 143px;
      left: 298px;
    }
  }
}
</style>
