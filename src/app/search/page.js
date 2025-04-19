'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

function SearchContent() {
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get('q') || '';
  const [query, setQuery] = useState(queryFromUrl);
  const [results, setResults] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (query.trim()) {
      const fetchMovies = async () => {
        try {
          const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_VITE_TMDB_API_KEY}&query=${query}`
          );
          const data = await res.json();
          setResults(data.results);
          console.log('Resultados:', data.results);
        } catch (error) {
          console.error('Error al buscar películas:', error);
        }
      };

      fetchMovies();
    } else {
      setResults([]);
    }
  }, [query]);

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div>
      <main>
        <h1>Search Films</h1>
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
        <MovieList movies={results} />
      </main>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<p>Cargando resultados...</p>}>
      <SearchContent />
    </Suspense>
  );
}