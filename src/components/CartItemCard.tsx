import GameImage from "./GameImage.tsx";
import Genre from "./Genre.tsx";
import RemoveButton from "./RemoveButton.tsx";

export default function CartItemCard({ game, removeItemFromCart, isItFirstInTheList }) {
  return (
    <div className="px-4 relative border-gray-500 pt-5 border-t-[0.5px] first:pt-0 first:border-t-0 max-w-md mx-6 lg:flex lg:max-w-2xl min-[496px]:mx-auto">
      <GameImage src={game.image} isItCartScreen={true} isNew={game.isNew} />
      <RemoveButton game={game} removeItemFromCart={removeItemFromCart} isItFirstInTheList={isItFirstInTheList} />
      <div>
        <Genre genre={game.genre} />
        <div className="text-lg/5 text-[#3b3b3b] font-bold tracking-[0.4px] my-2">{game.name}</div>
        <div className="leading-5 text-[#737373]">{game.description}</div>
        <div className="mt-10 mb-5 text-lg font-bold leading-5 tracking-[0.4px] text-right text-[#3b3b3b]">{`$${game.price}`}</div>
      </div>
    </div>
  )
}
