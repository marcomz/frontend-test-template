import CartItemCard from "./CartItemCard.tsx";

export default function CartItemsList({ cart, removeItemFromCart }) {
  return (
    <>
      <div>
        {
          cart.map(game => {
            return <CartItemCard game={game} removeItemFromCart={removeItemFromCart} key={`cart_item_${game.id}`} />
          })
        }
      </div>
    </>
  )
}
