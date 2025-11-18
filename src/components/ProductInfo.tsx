import Genre from "./Genre";
import NameAndPrice from "./NameAndPrice";
import { Game } from "@/utils/endpoint";

export default function ProductInfo({ game }: { game: Game }) {
  return (
    <>
      <Genre genre={game.genre} />
      <NameAndPrice game={game} />
    </>
  );
}
