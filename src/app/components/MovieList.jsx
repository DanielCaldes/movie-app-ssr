"use client";

import Link from 'next/link';
import MovieCard from './MovieCard';

export default function MovieList({ movies }) {
    if (!movies || movies.length === 0) {
      return <p style={{ marginTop: '1rem', textAlign: 'center' }}>No results found.</p>;
    }
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    );
  }