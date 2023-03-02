import axios from "axios";
export const API_URL = import.meta.env.VITE_BASE_URL;
export const AdminInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: "Basic YWRtaW46cXdlcnR5",
  },
});
export const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
instance.interceptors.response.use(
  (config) => {
    if (config.data.accessToken) {
      localStorage.setItem("accessToken", config.data.accessToken);
      return config;
    }
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    let isRetry = false;
    if (error.response.status === 401 && error.config && !isRetry) {
      isRetry = true;
      try {
        const response = await axios.get(`${API_URL}refresh-token`, {
          withCredentials: true,
        });
        localStorage.setItem("accessToken", response.data.accessToken);
        return instance.request(originalRequest);
      } catch (e) {
        console.log("und");
        return null;
      }
    }
    return null;
  }
);
