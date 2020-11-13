import axios from 'axios'
import qs from 'qs'
import { Dialog } from "vant";
import "vant/lib/dialog/style";

import { BASE_URL, LOCALSTORAGE } from '@/constant'



const instance = axios.create({
    timeout: 5000,
    baseURL: BASE_URL
})

instance.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.data = qs.stringify(config.data);
        }
        if (!config.headers.token) {
            const userInfo = localStorage.getItem(LOCALSTORAGE.USERINFO)
            if (userInfo) {
                const { token } = JSON.parse(userInfo)
                config.headers.token = token;
            }
        }
        return config;
    },
    err => Promise.reject(err)
)

instance.interceptors.response.use(res => {
    switch (res.status) {
        case 200:
            switch (res.data.status) {
                case 'ok':
                    return res.data.data
                case 'error':
                    Dialog.alert({
                        message: res.data.text,
                    });
                    return Promise.reject(res.data.text);
            }
            break;
        default:
            break;
    }
})

export const post = (url: string, data: any, config = {}) => instance.post(url, data, config) as Promise<any>

export const get = (url: string, params: any) => instance.get(url, params) as Promise<any>

