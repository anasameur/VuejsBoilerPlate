import Vue from 'vue';
import axios from 'axios';

const client = axios.create({
  baseURL: process.env.BASE_URL_INT,
  json: true,
});

/* Differences Between Transformers and Interceptors

An interceptor can be used to intercept the request/response at various points,
as discussed above. But transformers can be applied just before sending a request
or after receiving a response. Another important consideration is that, using
transformers, you just get access to data and headers of request/response while
interceptors have access to the config object.
From AngularJS - Novice To Ninja by Sandeep Panda.
 */

client.interceptors.request.use(
  async (config) => {
    const conf = config;
    conf.headers.Authorization = await Vue.prototype.$auth.getIdToken();
    return conf;
  },
  error => Promise.reject(error),
);

export default client;
