"use client";

import GameImage from "./GameImage.tsx";
import Genre from "./Genre.tsx";

export default function RemoveButton({ game, removeItemFromCart }) {
  function handleClick() {
    removeItemFromCart(game);
  }

  return (
    <>
      <button onClick={handleClick}>Remove</button>
    </>
  )
}
