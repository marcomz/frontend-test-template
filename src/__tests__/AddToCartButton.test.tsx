import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import AddToCartButton from '../components/AddToCartButton.tsx';
 
describe('AddToCartButton', () => {
  it('should show ADD TO CART text', () => {
    render(<AddToCartButton game={{ id: 1 }} cart={[]} addOrRemoveItemFromCart={ () => {} } />)
    expect(screen.getByRole('button', { name: 'ADD TO CART' })).toBeDefined()
  });
})

describe('AddToCartButton Remove', () => {
  it('should show Remove text', () => {
    render(<AddToCartButton game={{ id: 1 }} cart={[{ id: 1 }]} addOrRemoveItemFromCart={ () => {} } />)
    expect(screen.getByRole('button', { name: 'Remove' })).toBeDefined()
  });
})
