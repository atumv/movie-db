import React, { useState } from 'react';

import { API_KEY, API_URL } from './shared/constants/api';
import { fetchData } from './shared/utils/fetchData';

import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { Error } from './components/Error';
import { Loader } from './components/Loader';
import { MovieList } from './components/MovieList';
import { Pagination } from './components/Pagination';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(undefined);
  const [totalPages, setTotalPages] = useState(undefined);
  const [page, setPage] = useState(undefined);
  const [prevQuery, setPrevQuery] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [searchBtnRef, setSearchBtnRef] = useState(undefined);

  const clearState = () => {
    setMovies([]);
    setTotalPages(0);
    setLoading(false);
  };

  const getMovies = async (event) => {
    event.preventDefault();
    const inputValue = event.target.elements.query.value;
    const query = inputValue.trim();

    if (!query) {
      clearState();
      setError(undefined);
    } else {
      setLoading(true);
      const pageChoice = query !== prevQuery ? setPage(1) : page;
      const url = `${API_URL}&api_key=${API_KEY}&query=${query}&page=${pageChoice}`;
      const data = await fetchData(url);
      const results = data.total_results;
      const movies = data.results;
      const countOfPages = data.total_pages;
      const pageLimit = countOfPages > 10 ? 10 : countOfPages;

      if (!results) {
        clearState();
        setError('Фильм не найден.');
      } else if (results) {
        setMovies(movies);
        setPrevQuery(query);
        setTotalPages(pageLimit);
        setError(undefined);
        setLoading(false);
      }
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchForm getMovies={getMovies} setSearchBtnRef={setSearchBtnRef} />
      {error ? <Error error={error} /> : <MovieList movies={movies} />}
      {loading && <Loader />}
      {!loading && totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          setMovies={setMovies}
          searchBtnRef={searchBtnRef}
        />
      )}
    </div>
  );
};

export default App;
