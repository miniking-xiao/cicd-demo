<template>
  <!--默认不会全屏显示， fullScreen 全屏，可能会失真 -->
  <VScaleScreen width="1920" height="1080">
    <RouterView />
  </VScaleScreen>
</template>

<script setup lang="ts">
import VScaleScreen from 'v-scale-screen'
</script>
