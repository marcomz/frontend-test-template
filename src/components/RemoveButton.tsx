"use client";

import Image from 'next/image';

export default function RemoveButton({ game, removeItemFromCart, isItFirstInTheList }) {
  function handleClick() {
    removeItemFromCart(game);
  }

  return (
    <button onClick={handleClick} className={`absolute top-[${isItFirstInTheList ? '6' : '20'}] right-[20]`}>
      <Image src="/remove.svg" width={13} height={13} alt="Delete button" />
    </button>
  )
}
