import GenreIndicator from "./GenreIndicator.tsx";
import GenreSelector from "./GenreSelector.tsx";

export default function Filter({ categories, genre, updateGenre }) {
  return (
    <div className="font-[Archivo]">
      <div className="flex py-4 px-5.75 items-baseline">
        <div className="flex grow">
          <GenreIndicator />
        </div>
        <GenreSelector categories={categories} genre={genre} updateGenre={updateGenre} />
      </div>
      <div className="py-7.5">
        <hr className="text-gray-200"/>
      </div>
    </div>
  );
}
