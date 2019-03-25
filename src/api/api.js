import axiosConfig from './axiosConfig';
let axios = axiosConfig.axios;

//请求根路径---配置之后
export const baseURL = process.env.baseURL;
export const base_img_url = process.env.baseURL;

//登录
export const login = params => { return axios.post(`${baseURL}/login/index/`+params);};

