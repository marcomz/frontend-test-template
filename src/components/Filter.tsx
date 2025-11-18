import GenreIndicator from "./GenreIndicator";
import GenreSelector from "./GenreSelector";

export default function Filter({ categories, genre, updateGenre }) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex py-4 px-5.75 items-baseline max-w-[375] ml-auto">
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
