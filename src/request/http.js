import axios from 'axios'
import QS from 'qs'
import router from '@/router/index'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://mingyue.utools.club'
}

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = "*";
// axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'

// http request 拦截器
axios.interceptors.request.use(
  (config) => {
    // config.headers.common['Authorization'] = "dddd"
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common['Authorization'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//http response 拦截器
axios.interceptors.response.use(
  (response) => {
    //response 包含axios的一些配置， 其中的data才是服务器传来的数据
    let data = response.data
    console.log('http response拦截器：')
    console.log(data)
    if (data.code == 1001) {
      console.log("过期")
      router.push({path: '/login'})
      return Promise.resolve(response);
    }
    // 此处用 resoleve
    return Promise.resolve(response)
  },
  (error) => {
    return Promise.reject(error)
  }
)

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(data))
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}
