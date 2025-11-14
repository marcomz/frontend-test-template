export default function updateCart(cart, game) {
  const remove = cart.some(item => item.id === game.id);
  const newCart = remove ? cart.filter((item) => item.id !== game.id) : [...cart, game];

  if (localStorage) localStorage.setItem('shoppingCart', JSON.stringify(newCart));
  window.dispatchEvent(new CustomEvent('shoppingCartChange', {
    detail: { itemsInCart: newCart.length }
  }));
  return newCart;
}
