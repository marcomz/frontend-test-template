"use client";

import { useState, useEffect } from 'react';
import ProductCard from "./ProductCard.tsx";

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
    const remove = cart.some(item => item.id === game.id);
    const newCart = remove ? cart.filter((item) => item.id !== game.id) : [...cart, game];

    if (localStorage) localStorage.setItem('shoppingCart', JSON.stringify(newCart));
    window.dispatchEvent(new CustomEvent('shoppingCartChange', {
      detail: { itemsInCart: newCart.length }
    }));
    setCart(newCart);
  }

  return (
    <div className="ProductListing">
      {
        games.map(game => {
          return <ProductCard game={game} key={game.id} cart={cart} addOrRemoveItemFromCart={addOrRemoveItemFromCart} />
        })
      }
      {
        showSeeMore && 
          <button
            onClick={fetchMoreGames}
            className="ProductListingButton font-[Archivo] cursor-pointer"
            disabled={areMoreGamesLoading}
          >
            {areMoreGamesLoading ? 'Loading...' : 'SEE MORE'}
          </button>
      }
    </div>
  )
}
