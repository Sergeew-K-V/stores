'use client';
import { useEffect, useState } from 'react';
import MovieCard from '@/components/MovieCard';
import { IMovie } from '@/types';
import { API_URL } from '@/constants/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const addToBucket = async (id: number) => {
    const updatedMovies = movies.map((m) => (m.id === id ? { ...m, isInBucket: !m.isInBucket } : m));
    setMovies(updatedMovies);

    await fetch(`${API_URL}/movies/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isInBucket: !movies.find((m) => m.id === id)?.isInBucket }),
    });
  };

  const addToFavorites = async (id: number) => {
    const updatedMovies = movies.map((m) => (m.id === id ? { ...m, isFavorite: !m.isFavorite } : m));
    setMovies(updatedMovies);

    await fetch(`${API_URL}/movies/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isFavorite: !movies.find((m) => m.id === id)?.isFavorite }),
    });
  };

  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} addToBucket={addToBucket} addToFavorites={addToFavorites} />
      ))}
    </div>
  );
};

export default MoviesPage;

