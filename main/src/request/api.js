import instance from "./request"
// 这个文件用来统一管理项目中所有的API

// 首页精品推荐地API
export const JingPinAPI = instance.get("products/recommend")