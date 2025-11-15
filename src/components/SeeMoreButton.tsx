"use client";

export default function SeeMoreButton({ fetchMoreGames, areMoreGamesLoading }) {
  return (
    <button
      onClick={fetchMoreGames}
      className="font-[Archivo] cursor-pointer w-full max-w-[327px] m-auto block py-4 font-bold text-sm leading-4 tracking-[0.5] rounded-lg text-white bg-[#585660]"
      disabled={areMoreGamesLoading}
    >
      {areMoreGamesLoading ? 'Loading...' : 'SEE MORE'}
    </button>
  )
}
