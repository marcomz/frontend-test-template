import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CartTitle from '../components/CartTitle.tsx';
import '@testing-library/jest-dom/vitest';
 
describe('CartTitle', () => {
  it('should show cart text', () => {
    render(<CartTitle />)
    expect(screen.getByText('Your Cart')).toBeInTheDocument();
  });
})
