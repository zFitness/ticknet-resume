import { get, post } from './http'

// 提交表单
export const apiForm = (data) => post('/add?_ajax=1',data)

