'use client';
import { API_URL } from '@/constants/api';
import { useEffect, useState } from 'react';

interface IUseFetchResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

const useFetch = <T>(path: string, payload?: T, method: 'POST' | 'PATCH' | 'GET' = 'GET'): IUseFetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options: RequestInit = {
          method,
          headers: { 'Content-Type': 'application/json' },
        };

        if (method !== 'GET' && payload) {
          options.body = JSON.stringify(payload);
        }

        const response = await fetch(`${API_URL}/${path}`, options);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data) {
          throw new Error('No data');
        }

        setData(data);
        setIsLoading(true);

        return { data };
      } catch (error) {
        console.error(error);
        setIsLoading(false);
        setError(error as Error);
      }
    };

    fetchData();
  }, [method, path, payload]);

  return { data, isLoading, error };
};

export default useFetch;

