'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_VITE_TMDB_API_KEY}`)
      .then(res => setMovies(res.data.results));
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="movie-cards-container">
      <main>
        <h1>Popular Films</h1>
        <SearchBar query={searchQuery} setQuery={setSearchQuery} onSearch={handleSearch} />
        <MovieList movies={movies} />
      </main>
    </div>
  );
}
