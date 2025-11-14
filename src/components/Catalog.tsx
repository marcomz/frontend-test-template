'use client';

import Filter from "./Filter.tsx";
import ProductListing from "./ProductListing.tsx";
import { useState } from 'react';

export default function Catalog({ data, genreFromUrl = 'all' }) {
  const [games, setGames] = useState(data.games);
  const [lastPageFetched, setLastPageFetched] = useState(1);
  // NOTE: Found a little bug here, if we fetch games by category, the resulting 'totalPages' will always be 3,
  // even if there are only games to fill a single page, so I added this little workaourd, we can remove the
  // following condition if that is fixed
  const [totalPages, setTotalPages] = useState(data.totalPages);
  const [areMoreGamesLoading, setAreMoreGamesLoading] = useState(false);
  const [newGenreLoading, setNewGenreLoading] = useState('');
  const [genre, setGenre] = useState(genreFromUrl);

  async function fetchMoreGames() {
    if (lastPageFetched >= totalPages) {
      return;
    }
    setAreMoreGamesLoading(true);
    const genreSearchParam = genre === 'all' ? '' : `&genre=${genre}`;
    const url = `/api/games?page=${lastPageFetched + 1}${genreSearchParam}`;
    const response = await fetch(url).catch(err => err);
    if (response.status) {
      const result = await response.json();
      setAreMoreGamesLoading(false);
      setLastPageFetched(result.currentPage);
      setTotalPages(result.totalPages);
      setGames(games.concat(result.games));
    }
  }

  async function updateGenre(newGenre) {
    setNewGenreLoading(newGenre);
    const url = newGenre === 'all' ? '/api/games' : `/api/games?genre=${newGenre}`;
    const response = await fetch(url).catch(err => err);
    if (response.status === 200) {
      const result = await response.json();
      setNewGenreLoading('');
      // NOTE: Same as above, if there are not enought games we manually set the 'totalPages' value
      setTotalPages(result.totalPages);
      setLastPageFetched(result.currentPage);
      setGames(result.games);
      setGenre(newGenre);
    }
  }

  const showSeeMore = lastPageFetched < totalPages;

  return (
    <>
      <Filter categories={data.availableFilters} genre={genre} updateGenre={updateGenre} />
      {
        newGenreLoading === '' ?
        <ProductListing
          fetchMoreGames={fetchMoreGames}
          games={games}
          showSeeMore={showSeeMore}
          areMoreGamesLoading={areMoreGamesLoading}
        /> : <div>{`Loading ${newGenreLoading} Games`}</div>
      }
    </>
  )
}
