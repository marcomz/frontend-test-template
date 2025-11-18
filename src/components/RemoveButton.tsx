"use client";

import Image from 'next/image';

import { Game } from "@/utils/endpoint";

interface Props {
  game: Game;
  removeItemFromCart: (game: Game) => void;
  isItFirstInTheList: boolean;
}

export default function RemoveButton({ game, removeItemFromCart, isItFirstInTheList }: Props) {
  function handleClick() {
    removeItemFromCart(game);
  }

  const classNameForFirst = `absolute right-[20] top-0`;
  const classNameForNotFirst = `absolute right-[20] top-[20]`;

  const className = isItFirstInTheList ? classNameForFirst : classNameForNotFirst;

  return (
    <button onClick={handleClick} className={className}>
      <Image src="/remove.svg" width={13} height={13} alt="Delete button" />
    </button>
  )
}
