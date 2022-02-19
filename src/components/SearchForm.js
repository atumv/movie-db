import React, { useRef, useEffect } from 'react';
import { randomMovie } from '../shared/utils/randomMovie';

export const SearchForm = ({ getMovies, setSearchBtnRef }) => {
  const searchBtnRef = useRef();

  useEffect(() => {
    setSearchBtnRef(searchBtnRef);
  }, []);

  return (
    <form className="search-form" onSubmit={getMovies}>
      <input
        className="search-input"
        type="text"
        name="query"
        placeholder={`Например, «${randomMovie()}»`}
        autoFocus
      />
      <button className="search-btn" type="submit" ref={searchBtnRef}>
        Найти
      </button>
    </form>
  );
};
