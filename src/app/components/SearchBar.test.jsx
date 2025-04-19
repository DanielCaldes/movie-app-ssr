import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import '@testing-library/jest-dom';

describe('SearchBar', () => {
  test('debe renderizar el input correctamente', () => {
    render(<SearchBar query="" setQuery={() => {}} onSearch={() => {}} />);
    
    const input = screen.getByPlaceholderText('Enter film title...');
    expect(input).toBeInTheDocument();
  });

  test('debe actualizar el valor del input cuando el usuario escribe', () => {
    const setQuery = jest.fn();
    render(<SearchBar query="" setQuery={setQuery} onSearch={() => {}} />);

    const input = screen.getByPlaceholderText('Enter film title...');

    fireEvent.change(input, { target: { value: 'Inception' } });
    expect(setQuery).toHaveBeenCalledWith('Inception');
  });

  test('debe llamar a onSearch cuando el usuario presiona Enter', () => {
    const onSearch = jest.fn();
    render(<SearchBar query="" setQuery={() => {}} onSearch={onSearch} />);

    const input = screen.getByPlaceholderText('Enter film title...');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  test('debe llamar a onSearch cuando el formulario es enviado', () => {
    const onSearch = jest.fn();
    render(<SearchBar query="" setQuery={() => {}} onSearch={onSearch} />);

    const button = screen.getByRole('button');

    fireEvent.click(button); 
    expect(onSearch).toHaveBeenCalledTimes(1);
  });
});