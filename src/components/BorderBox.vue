<template>
  <div class="border-box">
    <div class="border-box-title" v-text="title"></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'

defineProps<{ title: string }>()
</script>

<style lang="scss" scoped>
.border-box-title {
  font-size: 16px;
  padding-left: 24px;
  height: 36px;
  line-height: 36px;
  color: #fff;
}
.border-box {
  position: relative;
  width: 424px;
  min-height: 160px;
  background-image: url(@/assets/border-box-1/border-title.png), url(@/assets/border-box-1/border-bottom.png);
  background-position: 0 0, 0 bottom;
  background-repeat: no-repeat;
  background-color: rgba(0, 42, 64, 0.4);
}
</style>
