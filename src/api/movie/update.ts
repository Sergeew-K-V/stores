import { IMovie } from '@/types';
import axiosInstance, { ENDPOINTS } from '../axiosInstance';

const updateMovie = async (payload: Partial<IMovie> & { id: number }): Promise<IMovie> => {
  const response = await axiosInstance.patch<IMovie>(`${ENDPOINTS.movies.update}/${payload.id}`, payload);

  return response.data;
};

export default updateMovie;

