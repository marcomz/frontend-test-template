"use client";

export default function AddToCartButton({ game, cart, addOrRemoveItemFromCart }) {
  const isInCart = cart.some(item => item.id === game.id);

  function handleClick() {
    addOrRemoveItemFromCart(game);
  }

  return (
    <button onClick={handleClick} className="w-full mt-5.5 font-bold px-0 py-4.75 text-base/4 tracking-[0.03125rem] border border-neutral-700 text-neutral-700 rounded-lg cursor-pointer">
      {isInCart ? 'Remove' : 'ADD TO CART'}
    </button>
  )
}
