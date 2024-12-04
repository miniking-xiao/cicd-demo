import axios from 'axios'
import { reactive } from 'vue'

export function useFunction() {
  const state = reactive({
    weather: {
      temperature_float: '',
      weather: '',
      winddirection: ''
    },
    currentTime: ''
  })
  const getApiAxios = () => {
    try {
      axios({
        url: 'https://restapi.amap.com/v3/weather/weatherInfo',
        params: {
          key: 'a5613e113fa97e8f6b9903990b124f71',
          city: '110000'
        }
      }).then(res => {
        let { data } = res
        state.weather = data.lives[0]
        console.log(state.weather)
      })
    } catch (error) {
      console.log(error)
    }
  }
  //获取时间
  function getCurrentDateTime() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    const formattedDate = `${year}-${month}-${day}`
    const formattedTime = `${hours}-${minutes}-${seconds}`
    return `${formattedDate} ${formattedTime}`
  }

  function updateTime() {
    state.currentTime = getCurrentDateTime()
  }

  return {
    state,
    getApiAxios,
    updateTime,
    getCurrentDateTime
  }
}
