import GameImage from "./GameImage.tsx";
import Genre from "./Genre.tsx";
import RemoveButton from "./RemoveButton.tsx";

export default function CartItemCard({ game, removeItemFromCart }) {
  return (
    <>
      <GameImage src={game.image} />
      <RemoveButton game={game} removeItemFromCart={removeItemFromCart} />
      <Genre genre={game.genre} />
      <div className="text-lg/5">{game.name}</div>
      <div className="text-lg/5">{game.description}</div>
      <div className="text-xl/5">{`$${game.price}`}</div>
    </>
  )
}
