"use client";

import Image from 'next/image';

export default function MovieCard({ movie }) {
    return (
      <div className="movie-card">
        <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        onError={(e) => e.target.src = '/no-image.jpg'}  // Si falla la carga de la imagen, se carga la imagen de respaldo
      />
        <h3>{movie.title}</h3>
      </div>
    )
  }