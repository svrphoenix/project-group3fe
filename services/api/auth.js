import axios from 'axios';

// const { BACKEND_URL } = process.env;

const BACKEND_URL = 'https://goose-backend.onrender.com';

const api = axios.create({
  baseURL: BACKEND_URL,
});

// const setToken = token => {
//   if (token) {
//     return (api.defaults.headers.common.authorization = `Bearer ${token}`);
//   }
//   api.defaults.headers.common.authorization = '';
// };

const currentToken = {
  set(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    // api.defaults.headers.common.Authorization = '';
    delete api.defaults.headers.common.Authorization;
  },
};

api.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      // const refreshToken = localStorage.getItem('refreshToken');
      try {
        // const { data } = await api.post('/users/refresh', { refresh_token });
        // currentToken.set(data.token);
        // localStorage.setItem('refreshToken', data.refreshToken);
        return api(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export const register = async credentials => {
  const { data } = await api.post('/users/register', credentials);
  return data;
};

export const login = async credentials => {
  const { data } = await api.post('/users/login', credentials);
  currentToken.set(data.token);
  return data;
};

export const logout = async () => {
  try {
    const data = await api.post('/users/logout');
    return data;
  } finally {
    currentToken.unset();
    console.log('token in API -', api.defaults.headers.common.Authorization);
  }
};

export const getCurrent = async persistedToken => {
  currentToken.set(persistedToken);
  const { data } = await api.get('/users/current');
  return data;
};

export default api;
