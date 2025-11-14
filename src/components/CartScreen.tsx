"use client";

import CartTitle from "./CartTitle.tsx";
import CartItemsList from "./CartItemsList.tsx";
import CartSummary from "./CartSummary.tsx";
import updateCart from "../utils/updateCart.ts";

import { useState, useEffect } from 'react';

export default function CartScreen() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage) {
      const storedCart = JSON.parse(localStorage.getItem('shoppingCart'));
      if (storedCart) {
        setCart(storedCart);
      }
    }
  }, []);

  function removeItemFromCart(game) {
    const newCart = updateCart(cart, game);
    setCart(newCart);
  }

  const itemsQuantityLabel = `${cart.length} item${cart.length === 1 ? '' : 's'}`;

  return (
    <>
      <CartTitle itemsQuantityLabel={itemsQuantityLabel} />
      <CartItemsList cart={cart} removeItemFromCart={removeItemFromCart} />
      <CartSummary cart={cart} itemsQuantityLabel={itemsQuantityLabel} />
    </>
  );
}
