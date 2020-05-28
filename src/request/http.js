import axios from 'axios'
import QS from 'qs'

// axios.defaults.baseURL = '/api'
axios.defaults.baseURL = 'http://mingyue.utools.club'
// if (process.env.NODE_ENV === 'development') {
// } else if (process.env.NODE_ENV === 'production') {
// }

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8'

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
