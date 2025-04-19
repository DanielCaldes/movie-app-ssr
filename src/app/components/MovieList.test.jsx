import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';
import '@testing-library/jest-dom';

jest.mock('next/link', () => {
  return ({ children, href }) => <a href={href}>{children}</a>;
});

const mockMovies = [
  { id: 1, title: 'Interstellar', poster_path: '/interstellar.jpg' },
  { id: 2, title: 'Inception', poster_path: '/inception.jpg' },
];

describe('MovieList component (Next.js)', () => {
  test('muestra mensaje si no hay películas', () => {
    render(<MovieList movies={[]} />);
    expect(screen.getByText(/No results found/i)).toBeInTheDocument();
  });

  test('cada enlace tiene el href correcto', () => {
    render(<MovieList movies={mockMovies} />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '/movie/1');
    expect(links[1]).toHaveAttribute('href', '/movie/2');
  });
});