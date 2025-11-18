'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function ShoppingCart() {
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    const handleStorageChange = (event: any) => {
      if (localStorage) {
        const storedCart: string | null = localStorage.getItem('shoppingCart');
        if (storedCart !== null) {
          const parsedStoredCart = JSON.parse(storedCart);
          setItemsInCart(parsedStoredCart.length);
        }
      }
    };

    if (localStorage) {
      const storedCart: string | null = localStorage.getItem('shoppingCart');
      console.log(storedCart);
      if (storedCart !== null) {
        setItemsInCart(JSON.parse(storedCart).length);
      }
    }

    window.addEventListener('shoppingCartChange', handleStorageChange as unknown as EventListener);

    return () => {
      window.removeEventListener('shoppingCartChange', handleStorageChange as unknown as EventListener);
    };
  }, []);

  return (
    <div className="relative">
      <Link href="/cart">
        <Image src="/cart.svg" width={24} height={24} alt="Shopping Cart" />
      </Link>
      {(itemsInCart > 0) && <span className="absolute top-[-12] right-[-12] bg-red-500 text-white px-2 py-1 rounded-2xl text-[8px]">{itemsInCart}</span>}
    </div>
  );
}
