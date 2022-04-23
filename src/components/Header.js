import React from 'react';
import clapper from '../assets/svg/clapper.svg';

export const Header = () => (
  <h1 className="header">
    <a className="header-link" href="index.html">
      Movie Db <img className="header-clapper" src={clapper} alt="clapper" />
    </a>
  </h1>
);
