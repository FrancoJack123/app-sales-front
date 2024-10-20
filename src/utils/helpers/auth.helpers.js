import { ACCESS_TOKEN } from '../contants/localStorage.constants';

export const setAccessToken = (accessToken) => {
  localStorage.setItem(ACCESS_TOKEN, JSON.stringify(accessToken));
};

export const getAccessToken = () => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  return JSON.parse(token);
};

export const removeToken = () => {
  const tokenData = getAccessToken();
  !!tokenData && localStorage.removeItem(ACCESS_TOKEN);
};
