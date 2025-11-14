'use client';

import { useState } from 'react';

export default function GenreSelector({ categories, genre, updateGenre }) {
  const [selectedItem, setSelectedItem] = useState(genre);

  function handleChange (event) {
    const newGenre = event.target.value;
    if (newGenre) {
      setSelectedItem(newGenre);
      if (newGenre === 'all') {
        window.history.pushState(null, '', '/');
      } else {
        window.history.pushState(null, '', `/?genre=${newGenre}`);
      }
      updateGenre(newGenre);
    }
  }

  return (
    <div className="grow-[3]">
      <select name="genre" value={selectedItem} className="w-full" onChange={handleChange}>
        <option value="all">All</option>
        {
          categories.map((category, index) => <option value={category} key={`category_select_${index}`}>{category}</option>)
        }
      </select>
    </div>
  );
}
