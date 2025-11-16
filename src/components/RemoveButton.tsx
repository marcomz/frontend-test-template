"use client";

import Image from 'next/image';

export default function RemoveButton({ game, removeItemFromCart }) {
  function handleClick() {
    removeItemFromCart(game);
  }

  return (
    <button onClick={handleClick} className="absolute top-[6] right-[20]">
      <Image src="/remove.svg" width={13} height={13} alt="Delete button" />
    </button>
  )
}
