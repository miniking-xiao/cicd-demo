import http from '@/utils/request'

// 园区详细
export const getParkDetail = (data: any) => {
  return http.get('/dv3/public/get-park', data)
}
