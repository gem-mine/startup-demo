import request from '@gem-mine/request'
import { config } from './proxy'

// 获取环境中对应的网络配置
request.init(config, {
  env: ''
})

// 全局设置，对所有请求生效
request.config({
  loading() {},
  error() {}
})

// demo 域配置
request.demo.config({})
