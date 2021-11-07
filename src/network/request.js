import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/04e40dc0be2cc3bdc6bcdbd198cd3533/home',
    timeout: 5000
  })
   
  instance.interceptors.response.use(rep => {
    return rep.data
  })
  return instance(config)
}