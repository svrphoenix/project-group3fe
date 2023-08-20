import { toast } from 'react-hot-toast';
import axiosInstance from './api';
import { logoutReset, refreshTokens } from 'redux/auth/slice';

function configureAxios({ getState, dispatch }) {
  axiosInstance.interceptors.request.use(
    config => {
      const token = getState().auth.token;
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

        const refreshToken = getState().auth.refreshToken;
        if (refreshToken) {
          try {
            const { data } = await axiosInstance.post('/users/refresh', {
              refresh_token: refreshToken,
            });
            dispatch(refreshTokens(data));
            axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
            return axiosInstance(originalConfig);
          } catch (error) {
            if (error.response.status === 403) {
              dispatch(logoutReset());
              toast.error(
                'Your session has expired, please relogin again to continue using the app!'
              );
            } else originalConfig._retry = true;
            return Promise.reject(error);
          }
        }
      }
      return Promise.reject(error);
    }
  );
}

export default configureAxios;
