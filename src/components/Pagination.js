import React from 'react';

export const Pagination = ({
  setPage,
  setMovies,
  searchBtnRef,
  totalPages,
  page,
}) => {
  const changePage = (event, page) => {
    event.preventDefault();
    setPage(page);
    setMovies([]);
    setTimeout(() => searchBtnRef.current.click());
  };

  const pageLinks = [];

  for (let i = 1; i <= totalPages; i++) {
    pageLinks.push(
      <li className="pagination-item" key={i}>
        <a
          className={
            page == i
              ? 'pagination-link pagination-link-active'
              : 'pagination-link pagination-link-passive'
          }
          href="#"
          onClick={
            page == i
              ? (event) => event.preventDefault()
              : (event) => changePage(event, i)
          }
        >
          {i}
        </a>
      </li>
    );
  }

  return <ul className="pagination">{pageLinks}</ul>;
};
