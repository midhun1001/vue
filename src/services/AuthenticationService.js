import Api from './Api'

const baseUrl = 'http://localhost:8081'
export default {
  register (credentials) {
    return Api().post(`${baseUrl}/register`, credentials)
  }
}
