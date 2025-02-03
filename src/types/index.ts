export interface IUser {
  id: string;
  password: string;
  email: string;
}

export interface IMovie {
  id: string;
  title: string;
  description: string;
  image: string;
  isInBucket: boolean;
  isFavorite: boolean;
}

