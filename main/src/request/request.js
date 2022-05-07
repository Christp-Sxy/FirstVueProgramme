import axios from "axios";

// 设置请求实例对象
const instance = axios.create({
  baseURL: "http://520it.com:8881/cms/",
  timeout: 5000,
})

// 设置请求拦截器，相应拦截器

// 请求拦截器
instance.interceptors.request.use(config => {
  // 在每个请求发送出去之前都会执行这里的代码，可以用来做一些请求前的工作
  // config 记录了本次请求的相关信息
  return config
}, err => {
  // 发生错误时拒绝并发送错误信息
  return Promise.reject(err)
})


// 响应拦截器
instance.interceptors.response.use(res => {
  // 在后端返回响应，在进入到组件中成功地回调函数之前会执行这里的代码，可以对服务器相应回来的数据做统一处理
  // res 就是原先axios中封装的res对象
  return res.data
}, err => {
  // 发生错误时拒绝并发送错误信息
  return Promise.reject(err)
})

// 导出
export default instance