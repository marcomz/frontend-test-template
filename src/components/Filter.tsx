import GenreIndicator from "./GenreIndicator.tsx";
import GenreSelector from "./GenreSelector.tsx";

export default function Filter({ categories, genre, updateGenre }) {
  return (
    <div className="font-[Archivo]">
      <div className="flex py-3.5 px-5.75">
        <div className="flex grow">
          <GenreIndicator />
        </div>
        <GenreSelector categories={categories} genre={genre} updateGenre={updateGenre} />
      </div>
      <hr />
    </div>
  );
}
