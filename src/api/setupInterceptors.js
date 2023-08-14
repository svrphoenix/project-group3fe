import axiosInstance from './api';
// import TokenService from './token.service';
import { refreshTokens } from 'redux/auth/slice';

function configureAxios(store) {
  axiosInstance.interceptors.request.use(
    config => {
      const token = store.getState().auth.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    response => response,
    async error => {
      const originalConfig = error.config;

      if (error.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        const refreshToken = store.getState().auth?.refreshToken || '';
        try {
          const { data } = await axiosInstance.post('/users/refresh', {
            refresh_token: refreshToken,
          });

          store.dispatch(refreshTokens(data));

          // accessToken.set(data.token);
          // error.config.headers.Authorization = `Bearer ${data.token}`;
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
          console.log(
            'interceptor',
            axiosInstance.defaults.headers.common.Authorization
          );
          return axiosInstance(originalConfig);
        } catch (error) {
          return Promise.reject(error);
        }
      }
      return Promise.reject(error);
    }
  );
}

export default configureAxios;
