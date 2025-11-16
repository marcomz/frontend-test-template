import GameImage from "./GameImage.tsx";
import Genre from "./Genre.tsx";
import RemoveButton from "./RemoveButton.tsx";

export default function CartItemCard({ game, removeItemFromCart }) {
  return (
    <div className="px-4 relative">
      <GameImage src={game.image} isItCartScreen={true} />
      <RemoveButton game={game} removeItemFromCart={removeItemFromCart} />
      <Genre genre={game.genre} />
      <div className="text-lg/5 text-[#3b3b3b] font-bold tracking-[0.4px] my-2">{game.name}</div>
      <div className="leading-5 text-[#737373]">{game.description}</div>
      <div className="text-lg font-bold leading-5 tracking-[0.4px] text-right text-[#3b3b3b]">{`$${game.price}`}</div>
    </div>
  )
}
