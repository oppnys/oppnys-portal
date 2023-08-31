import axios from "axios";
import {message} from "antd";

const service = axios.create({
    baseURL: '',
    timeout: 5000
});

service.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = token
        }
        return config
    }, error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(response => {
        const res = response.data;
        if (res.code !== 200) {
            message.error(res.message, 3).then()
            return Promise.reject(new Error(res.message || 'Error'))
        }
        return res.data;
    }, (error) => {
        message.error(error.message, 3).then()
        return Promise.reject(error)
    }
)

export default service