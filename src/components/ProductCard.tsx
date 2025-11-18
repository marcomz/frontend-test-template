import GameImage from "./GameImage.tsx";
import ProductInfo from "./ProductInfo.tsx";
import AddToCartButton from "./AddToCartButton.tsx";

export default function ProductCard({ game, cart, addOrRemoveItemFromCart }) {
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
