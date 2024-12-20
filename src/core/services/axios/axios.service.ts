import axios from 'axios';

const token = import.meta.env.VITE_TMDB_API_Key;

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_TMDB_API_BASE_URL}`, // Replace with your API base URL
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});


axiosInstance.interceptors.request.use(
  function (config) {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Handle the error
    return Promise.reject(error);
  }
);

export default axiosInstance;
