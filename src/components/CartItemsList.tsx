import CartItemCard from "./CartItemCard";

export default function CartItemsList({ cart, removeItemFromCart }) {
  return (
    <>
      <div className="mb-17">
        {
          cart.map((game, index) => 
            <CartItemCard game={game} removeItemFromCart={removeItemFromCart} key={`cart_item_${game.id}`} isItFirstInTheList={index === 0} />
          )
        }
      </div>
    </>
  )
}
