'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function ShoppingCart() {
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.type === 'shoppingCartChange') {
        setItemsInCart(event.detail.itemsInCart);
      }
    };

    if (localStorage) {
      const storedCart = JSON.parse(localStorage.getItem('shoppingCart'));
      if (storedCart) {
        setItemsInCart(storedCart.length);
      }
    }

    window.addEventListener('shoppingCartChange', handleStorageChange);

    return () => {
      window.removeEventListener('shoppingCartChange', handleStorageChange);
    };
  }, []);

  return (
    <div className="shopping_cart">
      <Link href="/cart">
        <Image src="/cart.svg" width={24} height={24} alt="Shopping Cart" />
      </Link>
      {(itemsInCart > 0) && <span>{itemsInCart}</span>}
    </div>
  );
}
