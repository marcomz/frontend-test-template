import Genre from "./Genre.tsx";
import NameAndPrice from "./NameAndPrice.tsx";

export default function ProductInfo({ game }) {
  return (
    <>
      <Genre genre={game.genre} />
      <NameAndPrice game={game} />
    </>
  );
}
