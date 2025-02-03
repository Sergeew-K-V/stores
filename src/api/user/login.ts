import axiosInstance, { ENDPOINTS } from '../axiosInstance';
import { IUser } from '@/types';

const loginUser = async (email: string, password: string): Promise<IUser | null> => {
  console.log('~~~~ ~ loginUser ~ password~~~~:', password);
  console.log('~~~~ ~ loginUser ~ email~~~~:', email);
  const response = await axiosInstance.get<IUser>(ENDPOINTS.user.login);

  if (!response.data) {
    return null;
  }

  return response.data;
};

export default loginUser;

