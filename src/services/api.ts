import axios, { AxiosRequestConfig } from 'axios';
import md5 from 'md5';

const keys = {
    public: 'bfbb1357a15b4efdca0d5ad73f98dcb0',
    private: '791749b0245add39a21a579f31a05262291e3091'
}

const api = axios.create({
	baseURL: 'http://gateway.marvel.com/'
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
    config.params = {
        ts: Date.now(),
        apikey: keys.public,
        hash: md5(Date.now() + keys.private + keys.public)
    }

    return config;
})

export default api;