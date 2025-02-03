import { API_URL } from '@/constants/api';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: API_URL || 'http://localhost:3001/',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // const token = localStorage.getItem(ACCESS_TOKEN_KEY) || '';
    // config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error: Error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.code === 'ERR_NETWORK') {
      return Promise.reject(new Error('Connection error'));
    }

    return Promise.reject((error.response && error.response.data) || 'Something went wrong!');
  }
);

export default axiosInstance;

type MovieEndpoint = 'list' | 'create' | 'update' | 'delete';
type UserEndpoint = 'login' | 'register';
type EndpointKind = 'user' | 'movies';
type EndpointPathType<T extends EndpointKind> = T extends 'user'
  ? Record<UserEndpoint, string>
  : T extends 'movies'
    ? Record<MovieEndpoint, string>
    : never;

export const ENDPOINTS: { [key in EndpointKind]: EndpointPathType<key> } = {
  movies: { create: 'movies', list: 'movies', delete: 'movies', update: 'movies' },
  user: { login: 'user', register: 'user' },
};

