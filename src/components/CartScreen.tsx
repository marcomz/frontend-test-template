"use client";

import { useState, useEffect } from 'react';

import CartTitle from "./CartTitle";
import CartItemsList from "./CartItemsList";
import CartSummary from "./CartSummary";
import CheckoutButton from "./CheckoutButton";
import updateCart from "../utils/updateCart";
import { Game } from "@/utils/endpoint";

export default function CartScreen() {
  const [cart, setCart] = useState<Game[]>([]);

  useEffect(() => {
    if (localStorage) {
      const storedCart: string | null = localStorage.getItem('shoppingCart');
      if (storedCart !== null) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  function removeItemFromCart(game: Game) {
    const newCart = updateCart(cart, game);
    setCart(newCart);
  }

  const itemsQuantityLabel = `${cart.length} item${cart.length === 1 ? '' : 's'}`;

  return (
    <>
      <CartTitle itemsQuantityLabel={itemsQuantityLabel} />
      <div className="mx-6 grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto lg:px-0 gap-8">
        <CartItemsList cart={cart} removeItemFromCart={removeItemFromCart} />
        <div>
          <CartSummary cart={cart} itemsQuantityLabel={itemsQuantityLabel} />
          <CheckoutButton />
        </div>
      </div>
    </>
  );
}
