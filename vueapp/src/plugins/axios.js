"use strict";

import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

console.log(process.env.NODE_ENV)
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '/' : '/app';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const _axios = axios.create({
  // baseURL: process.env.VUE_APP_ENV,
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
});

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    console.log(response.data)
    return response.data;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default _axios;
