/**
 * @file common request method
 * @since 1.1.4
 * @author whzcorcd <whzcorcd@gmail.com>
 */
import Vue from 'vue'
// import store from '@/store'
import axios from 'axios'
import { Notify } from 'vant'
// import * as Sentry from '@sentry/browser'

Vue.use(Notify)

// 创建 axios 实例
const Request = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  },
  timeout: 3000
})

/**
 * 用来判断值类型
 * @param {Object} obj
 */
const toType = obj => {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase()
}

/**
 * 对象 null 值过滤
 * @param {Object} obj 请求 data 对象
 */
const filterNull = obj => {
  for (const key in obj) {
    if (obj[key] === null) {
      delete obj[key]
    } else {
      if (toType(obj[key]) === 'string') {
        obj[key] = obj[key].trim()
      } else if (toType(obj[key]) === 'object') {
        obj[key] = filterNull(obj[key])
      } else if (toType(obj[key]) === 'array') {
        obj[key] = filterNull(obj[key])
      }
    }
  }
  return obj
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 * @param {String} info 请求失败的附带信息
 */
const errorHandle = (status, info) => {
  // 状态码判断
  switch (status) {
    // 400: 客户端请求错误
    case 400:
      Notify({ type: 'danger', message: '请求错误，请检查您的网络' })
      break
    case 404:
      Notify({ type: 'danger', message: '请求的资源不存在' })
      break
    case 450:
      Notify({ type: 'danger', message: '请求参数错误' })
      break
    case 500:
      Notify({ type: 'danger', message: '服务异常，请稍后再试' })
      break
    case 503:
      Notify({ type: 'danger', message: '服务不可用，请稍后再试' })
      break
    default:
      Notify({
        message: info,
        center: true
      })
  }
}

// 请求拦截器
Request.interceptors.request.use(
  config => {
    // const token = store.state.token
    // config.headers.token = token
    if (config.method === 'get') {
      const data = filterNull(config.data)
      config.params = data
    }
    return config
  },
  error => {
    Notify({
      type: 'danger',
      message: '请求失败'
    })
    // Sentry.setExtra('response', { error: error })
    // Sentry.captureException(new Error(store.state.userInfo.appId + '请求失败'))
    return Promise.error(error)
  }
)

// 响应拦截器
Request.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      // 请求已发出，在 2xx 的范围
      Notify({
        type: 'danger',
        message: '请求响应错误'
      })
      // Sentry.setExtra('response', { res: response })
      // Sentry.captureException(
      //   new Error(store.state.userInfo.appId + '请求响应错误')
      // )
      return Promise.reject(response)
    }
  },
  error => {
    const { err } = error
    if (err) {
      // 请求已发出，但是不在 2xx 的范围
      Notify({
        type: 'danger',
        message: '请求响应异常'
      })
      // Sentry.setExtra('response', { error: err })
      // Sentry.captureException(
      //   new Error(store.state.userInfo.appId + '请求响应异常')
      // )
      errorHandle(err.status, err.data.errorMessage)
      return Promise.reject(err)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新 state 的 network 状态
      // network 状态在 app.vue 中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      if (!window.navigator.onLine) {
        Notify({
          type: 'danger',
          message: '网络断开'
        })
        // store.commit('changeNetwork', false)
        // Sentry.captureException(
        //   new Error(store.state.userInfo.appId + '网络断开')
        // )
      } else {
        Notify({
          type: 'danger',
          message: '未知错误'
        })
        // Sentry.captureException(
        //   new Error(store.state.userInfo.appId + '未知错误')
        // )
        return Promise.reject(error)
      }
    }
  }
)

/**
 * 创建统一封装过的 axios 实例
 * @return { AxiosInstance }
 */
export default Request
