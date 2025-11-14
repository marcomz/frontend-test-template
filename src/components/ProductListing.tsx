"use client";

import { useState, useEffect } from 'react';
import ProductCard from "./ProductCard.tsx";
import updateCart from "../utils/updateCart.ts";

export default function ProductListing({ games, showSeeMore, areMoreGamesLoading, fetchMoreGames }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage) {
      const storedCart = JSON.parse(localStorage.getItem('shoppingCart'));
      if (storedCart && storedCart.length > 0) {
        setCart(storedCart);
      }
    }
  }, []);

  function addOrRemoveItemFromCart(game) {
    const newCart = updateCart(cart, game);
    setCart(newCart);
  }

  return (
    <div>
      {
        games.map(game => {
          return <ProductCard game={game} key={game.id} cart={cart} addOrRemoveItemFromCart={addOrRemoveItemFromCart} />
        })
      }
      {
        showSeeMore && 
          <button
            onClick={fetchMoreGames}
            className="font-[Archivo] cursor-pointer w-full max-w-[327px] m-auto block py-4 font-bold text-sm leading-4 tracking-[0.5] rounded-lg text-white bg-[#585660]"
            disabled={areMoreGamesLoading}
          >
            {areMoreGamesLoading ? 'Loading...' : 'SEE MORE'}
          </button>
      }
    </div>
  )
}
