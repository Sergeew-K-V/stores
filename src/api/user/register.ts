import { IUser } from '@/types';
import axiosInstance, { ENDPOINTS } from '../axiosInstance';

const registerUser = async (payload: Omit<IUser, 'id'>): Promise<IUser> => {
  const response = await axiosInstance.post<IUser>(ENDPOINTS.user.register, { ...payload });

  return response.data;
};

export default registerUser;

