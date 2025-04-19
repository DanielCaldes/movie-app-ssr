'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import SearchBar from '../components/SearchBar';  // Asegúrate de que la ruta sea correcta
import MovieList from '../components/MovieList';  // Asegúrate de que la ruta sea correcta
import Header from '../components/Header';  // Asegúrate de que la ruta sea correcta
import Footer from '../components/Footer';  // Asegúrate de que la ruta sea correcta

export default function Search() {
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get('q') || '';
  const [query, setQuery] = useState(queryFromUrl);
  const [results, setResults] = useState([]);

  // Fetch movies when query changes
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
      <Header />
      <main>
        <h1>Search Films</h1>
        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
        <MovieList movies={results} />
      </main>
      <Footer />
    </div>
  );
}