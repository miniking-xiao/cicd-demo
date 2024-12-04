import axios from 'axios'

const service = axios.create({
  baseURL: 'http://39.100.95.39:8089/',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    return Promise.reject(err)
  }
)

const http = {
  get(url: string, data: any) {
    return new Promise((resolve, reject) => {
      service
        .get(url, { params: data })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  post(url: string, data: any) {
    return new Promise((resolve, reject) => {
      service
        .post(url, data)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default http
