"use client";

import { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";
import SeeMoreButton from "./SeeMoreButton";
import updateCart from "../utils/updateCart";

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
    <div className="grid grid-cols-1 gap-5 max-w-3xl mx-auto lg:max-w-5xl md:grid-cols-2 lg:grid-cols-3 mb-7">
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
