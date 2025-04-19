import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
      push: jest.fn(),
      prefetch: jest.fn(),
    };
  },
}));

describe('Header component (Next.js)', () => {
  test('debe renderizar el logo desde /public usando next/image', () => {
    render(<Header />);
    
    const logoIMG = screen.getByAltText('Logo');
    expect(logoIMG).toBeInTheDocument();
    expect(logoIMG.getAttribute('src')).toContain('logo.png');
  });

  test('debe contener los enlaces de navegación', () => {
    render(<Header />);

    const homeLink = screen.getByRole('link', { name: /home/i });
    const searchLink = screen.getByRole('link', { name: /search/i });

    expect(homeLink).toHaveAttribute('href', '/');
    expect(searchLink).toHaveAttribute('href', '/search');
  });
});