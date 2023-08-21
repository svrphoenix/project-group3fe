import axios from 'axios';
import { refreshTokens } from 'redux/auth/slice';

// const { BACKEND_URL } = process.env;

// const BACKEND_URL = 'https://goose-backend.onrender.com';
const BACKEND_URL = 'http://localhost:3003';

export function configureAxios(store) {
  // api.interceptors.request.use(
  //   config => {
  //     // Configure your request here
  //     // use 'params' where ever you need like in headers Authorization.
  //     return config;
  //   },
  //   error => {
  //     return Promise.reject(error);
  //   }
  // );
  api.interceptors.response.use(
    response => response,
    async error => {
      const originalConfig = error.config;

      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        const refreshToken = store.getState().auth.user?.refresh_token || '';
        try {
          const { data } = await api.post('/users/refresh', {
            refresh_token: refreshToken,
          });

          store.dispatch(refreshTokens(data));
          accessToken.set(data.token);
          // error.config.headers.Authorization = `Bearer ${data.token}`;

          return api(originalConfig);
        } catch (error) {
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );
}


export const api = axios.create({
  baseURL: BACKEND_URL,
});

const accessToken = {
  set(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    // api.defaults.headers.common.Authorization = '';
    delete api.defaults.headers.common.Authorization;
  },
};



export const register = async credentials => {
  const { data } = await api.post('/users/register', credentials);
  return data;
};

export const login = async credentials => {
  const { data } = await api.post('/users/login', credentials);
  accessToken.set(data.token);
  return data;
};

export const logout = async () => {
  try {
    const data = await api.post('/users/logout');
    return data;
  } finally {
    accessToken.unset();
  }
};

export const getCurrent = async persistedToken => {
  accessToken.set(persistedToken);
  const { data } = await api.get('/users/current');
  return data;
};
