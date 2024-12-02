<template>
  <div id="tian-map"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // 创建 script 标签
  const script = document.createElement('script')
  // 2d58761eb6bbdac6095476b73d4d1a82 密钥需要公司弄
  script.src = 'https://api.tianditu.gov.cn/api?v=4.0&tk=2d58761eb6bbdac6095476b73d4d1a82'
  // script 标签加载完毕，初始化地图
  script.onload = initMap
  // 添加到body中
  document.body.appendChild(script)
})

// 初始化地图
function initMap() {
  let T = window.T
  var zoom = 18
  let tmap = new T.Map('tian-map')
  tmap.centerAndZoom(new T.LngLat(116.40769, 39.89945), zoom)
  // 启用地图拖拽
  tmap.enableDrag()
  // 设置地图类型
  tmap.setMapType(TMAP_SATELLITE_MAP)
}
</script>

<style lang="scss" scoped>
#tian-map {
  width: 1920px;
  height: 1080px;
}
</style>
