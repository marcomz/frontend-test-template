import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductListing from '../components/ProductListing.tsx';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

describe('ProductListing', () => {
  it('should show game info', () => {
    render(<ProductListing games={[{"id":1,"genre":"RPG","name":"Final Fantasy XV","price":39.99}]} showSeeMore={true} areMoreGamesLoading={false} fetchMoreGames={ () => {} } />)
    expect(screen.getByText('Final Fantasy XV')).toBeInTheDocument();
    expect(screen.getByText('RPG')).toBeInTheDocument();
    expect(screen.getByText('$39.99')).toBeInTheDocument();
  });

  it('should show see more button', () => {
    expect(screen.getByRole('button', { name: 'SEE MORE' })).toBeDefined()
  });

  it('should add game to cart', async () => {
    const button = screen.getByRole('button', { name: 'ADD TO CART' });

    expect(button).toBeDefined();

    await userEvent.click(button);

    expect(screen.getByRole('button', { name: 'Remove' })).toBeDefined();
  });

  it('should remove game from cart', async () => {
    const button = screen.getByRole('button', { name: 'Remove' });

    expect(button).toBeDefined();

    await userEvent.click(button);

    expect(screen.getByRole('button', { name: 'ADD TO CART' })).toBeDefined();
  });
})
