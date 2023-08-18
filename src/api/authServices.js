import api from './api';

const accessToken = {
  set(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
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

export const updateUser = async credentials => {
  const { data } = await api.patch('/users/user', credentials);
  return data;
};
