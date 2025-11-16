import CartItemCard from "./CartItemCard.tsx";

export default function CartItemsList({ cart, removeItemFromCart }) {
  return (
    <>
      <div>
        {
          cart.map((game, index) => 
            <CartItemCard game={game} removeItemFromCart={removeItemFromCart} key={`cart_item_${game.id}`} isItFirstInTheList={index === 0} />
          )
        }
      </div>
    </>
  )
}
