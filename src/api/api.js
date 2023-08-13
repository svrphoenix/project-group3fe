import axios from 'axios';

const BACKEND_URL = 'https://goose-backend.onrender.com';

const instance = axios.create({
  baseURL: BACKEND_URL,
});

export default instance;
