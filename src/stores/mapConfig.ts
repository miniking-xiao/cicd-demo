import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getParkDetail } from '@/api/safe'

export const useMapConfig = defineStore('mapConfig', () => {
  // 园区信息
  const parkInfo = ref()
  async function getPark() {
    let res = await getParkDetail({ companyId: 0 })
    if (res.code == 200) {
      parkInfo.value = res.data
    }
  }
  // 园区中心
  let parkCenter = ref<any>()
  // 园区边界
  let parkPolygonPath = ref<any>()
  // 园区覆盖物图形
  let parkPolygon = ref<any>()
  function initConfigForMap(map: any) {
    parkCenter.value = new T.LngLat(parkInfo.value?.longitude, parkInfo.value?.latitude)
    // 覆盖物数据重构-多边形
    parkPolygonPath.value = parkInfo.value.boundaries[0].value
      .split(';')
      .map(p => p.split(','))
      .map(p => new T.LngLat(...p))
    parkPolygon.value = new T.Polygon(parkPolygonPath.value, {
      width: 3,
      color: parkInfo.value?.boundaries[0].options.sideFillColor,
      opacity: 1,
      fillColor: parkInfo.value?.boundaries[0].options.topFillColor || '#6d9f6a',
      fillOpacity: 0.5
    })
    addParkForMap(map)
  }
  // 地图添加园区
  function addParkForMap(map: any) {
    map.panTo(new T.LngLat(parkInfo.value?.longitude, parkInfo.value?.latitude))
    // 根据提供的坐标点数组设置地图视野，调整后的视野会保证包含提供的坐标点
    map.setViewport(parkPolygonPath.value)
    // 覆盖物添加到地图中
    map.addOverLay(parkPolygon.value)
  }
  return {
    getPark,
    initConfigForMap
  }
})
