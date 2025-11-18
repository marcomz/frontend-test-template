import Genre from "./Genre";
import NameAndPrice from "./NameAndPrice";

export default function ProductInfo({ game }) {
  return (
    <>
      <Genre genre={game.genre} />
      <NameAndPrice game={game} />
    </>
  );
}
