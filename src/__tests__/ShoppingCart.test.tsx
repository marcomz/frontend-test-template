import { expect, describe, it, vi, beforeEach, afterEach, beforeAll, afterAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShoppingCart from '../components/ShoppingCart.tsx';

let originalLocalStorage;

beforeEach(() => {
  vi.spyOn(localStorage, 'getItem').mockReturnValue('[]');
  vi.spyOn(localStorage, 'setItem');
});

afterEach(() => {
  localStorage.clear();
});

beforeAll(() => {
  originalLocalStorage = window.localStorage;
  window.localStorage = {
    store: {},
    getItem(key) {
      return this.store[key] ?? null;
    },
    setItem(key, value) {
      this.store[key] = value;
    },
    removeItem(key) {
      delete this.store[key];
    },
    clear() {
      this.store = {};
    },
  };
});

afterAll(() => {
  window.localStorage = originalLocalStorage;
});

describe('ShoppingCart', () => {
  it('should call localStorage getItem', () => {
    render(<ShoppingCart />)
    expect(localStorage.getItem).toHaveBeenCalledWith('shoppingCart');
  });
})
