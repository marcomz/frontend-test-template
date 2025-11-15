"use client";

import { useState, useEffect } from 'react';
import ProductCard from "./ProductCard.tsx";
import SeeMoreButton from "./SeeMoreButton.tsx";
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
        showSeeMore && <SeeMoreButton fetchMoreGames={fetchMoreGames} areMoreGamesLoading={areMoreGamesLoading} />
      }
    </div>
  )
}
