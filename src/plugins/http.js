//axios 的封装

import { message } from 'antd';
import axios from 'axios';
//配置
const http = axios.create({
  baseURL: 'http://localhost:4000/',//基础路径
})

//请求拦截
http.interceptors.request.use(
  config => {
    //配置头部的token
    return config;
  },
  err => {
    return Promise.reject(err);
  }
)

//响应拦截
http.interceptors.response.use(
  data => {
    //需要有后台的文档支持
    return data;
  },
  err => {//响应时出错
    if (err.response.data.message) {
      message.error(err.response.data.message);
    }
    return Promise.reject(err);
  }
)

export default http;