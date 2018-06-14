import axios from 'axios';

const client = axios.create({
  baseURL: process.env.BASE_URL_EXT,
  json: true,
});

client.interceptors.request.use(
  // Do something before request is sent
  config => config,
  // Do something with request error
  error => Promise.reject(error),
);

export default client;
