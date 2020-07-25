import { get, post } from './http'

// 提交表单
export const apiForm = (data) => post('/add?_ajax=1',data)
export const apiProgress = (data) => post('/progress',data)
export const apiLogin = (data) => post('/admin/login?_ajax=1',data)

//获取数据
export const apiGetAll = (params) => get('/admin/getList', params) 