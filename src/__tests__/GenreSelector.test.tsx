import { expect, describe, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import GenreSelector from '../components/GenreSelector.tsx';
import '@testing-library/jest-dom/vitest';
 
describe('GenreSelector', () => {
  it('should show redirect to selected category', () => {
    render(<GenreSelector categories={['Action', 'RPG']} genre={'All'} updateGenre={ () => {} } />)
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    fireEvent.change(selectElement, { target: { value: 'RPG' } });

    const url = import.meta.env.PROJECT_URL;

    expect(window.location.href).toBe(`${url}/?genre=RPG`);
  });
})
