import { describe, expect, it, vi, afterEach, beforeAll, beforeEach, afterAll } from 'vitest';
import updateCart from '../utils/updateCart.ts';

let originalLocalStorage;

beforeEach(() => {
  vi.spyOn(localStorage, 'getItem');
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

describe('updateCart', () => {
  it('should remove item from cart', () => {
    expect(updateCart([{ id: 1 }], { id: 1 })).toStrictEqual([]);
  });
  it('should add item to cart', () => {
    expect(updateCart([], { id: 1 })).toStrictEqual([{ id: 1 }]);
  });
});

describe('should call localStorage', () => {
  it('should remove item from cart', () => {
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'shoppingCart',
      JSON.stringify([])
    );
  });
  it('should add item to cart', () => {
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'shoppingCart',
      JSON.stringify([{ id: 1 }])
    );
  });
});
