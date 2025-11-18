import CartItemCard from "./CartItemCard";
import { Game } from "@/utils/endpoint";

interface Props {
  cart: Game[];
  removeItemFromCart: (game: Game) => void;
}

export default function CartItemsList({ cart, removeItemFromCart }: Props) {
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
