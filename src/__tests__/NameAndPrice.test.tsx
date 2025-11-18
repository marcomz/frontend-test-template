import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NameAndPrice from '../components/NameAndPrice.tsx';
import '@testing-library/jest-dom/vitest';
 
describe('NameAndPrice', () => {
  it('should show game name and price', () => {
    render(<NameAndPrice game={{ name: 'Game name', price: 1 }} />)
    expect(screen.getByText('Game name')).toBeInTheDocument();
    expect(screen.getByText('$1')).toBeInTheDocument();
  });
})
