import { Game } from "@/utils/endpoint";

export interface CustomEventDetail {
  itemsInCart: number;
}

export default function updateCart(cart: Game[], game: Game) {
  const remove = cart.some(item => item.id === game.id);
  const newCart = remove ? cart.filter((item) => item.id !== game.id) : [...cart, game];

  if (localStorage) localStorage.setItem('shoppingCart', JSON.stringify(newCart));
  window.dispatchEvent(new CustomEvent('shoppingCartChange'));
  return newCart;
}
