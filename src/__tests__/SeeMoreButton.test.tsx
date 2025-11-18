import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import SeeMoreButton from '../components/SeeMoreButton.tsx';
 
describe('SeeMoreButton', () => {
  it('should show SEE MORE text', () => {
    render(<SeeMoreButton areMoreGamesLoading={false} fetchMoreGames={ () => {} } />)
    expect(screen.getByRole('button', { name: 'SEE MORE' })).toBeDefined()
  });
})

describe('SeeMoreButton Loading State', () => {
  it('should show Remove text', () => {
    render(<SeeMoreButton areMoreGamesLoading={true} fetchMoreGames={ () => {} } />)
    expect(screen.getByRole('button', { name: 'Loading...' })).toBeDefined()
  });
})
