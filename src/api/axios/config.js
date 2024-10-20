export const axiosRequestConfiguration = {
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
  //   withCredentials: true,
};
