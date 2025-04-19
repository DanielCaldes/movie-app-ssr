"use client";

import Image from 'next/image';

export default function MovieCard({ movie }) {
  const imageSrc = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : '/no-image.jpg';  
  
  return (
    <div className="movie-card">
      <Image
        src={imageSrc}
        alt={movie.title}
        width={200}
        height={300}
        unoptimized
      />
      <h3>{movie.title}</h3>
    </div>
    )
  }