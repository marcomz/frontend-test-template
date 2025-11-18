'use client';

import { useState, ChangeEvent } from 'react';

interface Props {
  categories: string[];
  genre: string;
  updateGenre: (newGenre: string) => void;
}

export default function GenreSelector({ categories, genre, updateGenre }: Props) {
  const [selectedItem, setSelectedItem] = useState(genre);

  function handleChange (event: ChangeEvent<HTMLSelectElement>) {
    const newGenre = event.target.value;
    if (newGenre) {
      setSelectedItem(newGenre);
      if (newGenre === 'All') {
        window.history.pushState(null, '', '/');
      } else {
        window.history.pushState(null, '', `/?genre=${newGenre}`);
      }
      updateGenre(newGenre);
    }
  }

  return (
    <div className="grow">
      <select name="genre" value={selectedItem} onChange={handleChange} className="w-full text-xl pl-[4] w-full">
        <option value="All">All</option>
        {
          categories.map((category, index) => <option value={category} key={`category_select_${index}`}>{category}</option>)
        }
      </select>
    </div>
  );
}
