import axios from 'axios';

const apiURL = process.env.REACT_APP_API_URL;

const instance = axios.create({ baseURL: apiURL });

instance.interceptors.request.use(config => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: process.env.ACESS_TOKEN,
    },
  };
});

export default instance;
