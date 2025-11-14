export default function NameAndPrice({ game }) {
  return (
    <div className="flex justify-between font-bold text-neutral-700 mt-2.5 text-lg/5 tracking-wide">
      <div className="text-lg/5">{game.name}</div>
      <div className="text-xl/5">{`$${game.price}`}</div>
    </div>
  );
}
