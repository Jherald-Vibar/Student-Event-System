import axios from "axios";

const axiosClient = axios.create({
   baseURL: "http://localhost:8000/api",
});

export const getCsrfToken = () => {
  return axios.get("/sanctum/csrf-cookie");
};

axiosClient.interceptors.request.use((config) => {

  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
