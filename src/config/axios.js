import axios from 'axios'

const clientAxios = axios.create({
    baseURL: process.env.REACT_APP_URL,
})

clientAxios.defaults.headers.post['Content-Type'] = "application/json"

export default clientAxios