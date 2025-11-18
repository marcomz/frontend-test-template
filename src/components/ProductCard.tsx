import GameImage from "./GameImage";
import ProductInfo from "./ProductInfo";
import AddToCartButton from "./AddToCartButton";
import { Game } from "@/utils/endpoint";

interface Props {
  game: Game;
  cart: Game[];
  addOrRemoveItemFromCart: (game: Game) => void
}

export default function ProductCard({ game, cart, addOrRemoveItemFromCart }: Props) {
  return (
    <>
      <div className="border-[0.5px] border-neutral-500 rounded-2xl p-6 max-w-[327px] m-auto md:mt-0">
        <GameImage src={game.image} isItCartScreen={false} isNew={game.isNew} />
        <ProductInfo game={game} />
        <AddToCartButton game={game} cart={cart} addOrRemoveItemFromCart={addOrRemoveItemFromCart} />
      </div>
    </>
  )
}
