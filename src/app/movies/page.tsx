'use client';
import { useCallback, useEffect, useState } from 'react';
import MovieCard from '@/components/MovieCard';
import { IMovie } from '@/types';
import getMovies from '@/api/movie/list';
import updateMovie from '@/api/movie/update';

const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const handleMovieSwitchBucket = useCallback(
    async (id: number) => {
      const updatedMovie = movies.find((m) => m.id === id);

      if (!updatedMovie) return;

      try {
        await updateMovie({ id, isInBucket: !updatedMovie.isInBucket });
      } catch (error) {
        console.error('~~~~ ~ addToFavorites ~ error~~~~:', error);
      }
    },
    [movies]
  );

  const handleMovieInFavorite = useCallback(
    async (id: number) => {
      const updatedMovie = movies.find((m) => m.id === id);

      if (!updatedMovie) return;

      try {
        await updateMovie({ id, isFavorite: !updatedMovie.isFavorite });
      } catch (error) {
        console.error('~~~~ ~ addToFavorites ~ error~~~~:', error);
      }
    },
    [movies]
  );

  useEffect(() => {
    getMovies().then((res) => setMovies(res));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.id}
          bucketAction={handleMovieSwitchBucket}
          favoriteAction={handleMovieInFavorite}
        />
      ))}
    </div>
  );
};

export default MoviesPage;

