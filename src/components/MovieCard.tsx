import { IMovie } from '@/types';
import Image from 'next/image';

interface IMovieCardProps {
  movie: IMovie;
  addToBucket: (id: number) => void;
  addToFavorites: (id: number) => void;
}

const MovieCard = ({ movie, addToBucket, addToFavorites }: IMovieCardProps) => {
  return (
    <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={movie.image} alt={movie.title} className="w-full h-48 object-cover" width={200} height={200} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-700 mb-4">{movie.description}</p>
        <div className="flex space-x-2">
          <button
            onClick={() => addToBucket(movie.id)}
            className={`flex-1 py-2 rounded-md ${
              movie.isInBucket ? 'bg-gray-500 text-white' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {movie.isInBucket ? 'Remove from Bucket' : 'Add to Bucket'}
          </button>
          <button
            onClick={() => addToFavorites(movie.id)}
            className={`flex-1 py-2 rounded-md ${
              movie.isFavorite ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {movie.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

