'use client';

import Filter from "./Filter.tsx";
import ProductListing from "./ProductListing.tsx";
import { useState, useEffect } from 'react';

export default function Catalog({ data, genreFromUrl = 'All' }) {
  const [games, setGames] = useState(data.games);
  const [lastPageFetched, setLastPageFetched] = useState(1);
  const [totalPages, setTotalPages] = useState(data.totalPages);
  const [areMoreGamesLoading, setAreMoreGamesLoading] = useState(false);
  const [newGenreLoading, setNewGenreLoading] = useState('');
  const [genre, setGenre] = useState(genreFromUrl);

  useEffect(() => {
    const handleUrlChange = (event) => {
      if (event.type === 'popstate') {
        const params = new URLSearchParams(event.target.location.search);
        let newGenre = params.get('genre');
        if (newGenre === null) newGenre = 'All'
        updateGenre(newGenre);
      }
    };

    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  async function fetchMoreGames() {
    if (lastPageFetched >= totalPages) {
      return;
    }

    setAreMoreGamesLoading(true);

    const genreSearchParam = genre === 'All' ? '' : `&genre=${genre}`;
    const url = `/api/games?page=${lastPageFetched + 1}${genreSearchParam}`;
    const response = await fetch(url).catch(err => err);

    if (response.status === 200) {
      const result = await response.json();

      setAreMoreGamesLoading(false);
      setLastPageFetched(result.currentPage);
      setTotalPages(result.totalPages);
      setGames(games.concat(result.games));
    }
  }

  async function updateGenre(newGenre) {
    setNewGenreLoading(newGenre);
    const url = `/api/games${newGenre === 'All' ? '' : `?genre=${newGenre}`}`;
    const response = await fetch(url).catch(err => err);
    if (response.status === 200) {
      const result = await response.json();
      setNewGenreLoading('');
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
