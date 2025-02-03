import { IMovie } from '@/types';
import axiosInstance, { ENDPOINTS } from '../axiosInstance';

const getMovies = async (): Promise<IMovie[]> => {
  const response = await axiosInstance.get<IMovie[]>(ENDPOINTS.movies.list);

  return response.data;
};

export default getMovies;

