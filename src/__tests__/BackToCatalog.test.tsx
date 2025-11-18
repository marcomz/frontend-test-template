import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import BackToCatalog from '../components/BackToCatalog.tsx';
import '@testing-library/jest-dom/vitest';
 
describe('BackToCatalog', () => {
  it('should show back to catalog button', () => {
    render(<BackToCatalog />)
    expect(screen.getByText('Back to Catalog')).toBeInTheDocument();
  });
})
