import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title, search }) {
  const [searchInput, setSearchInput] = useState(false);
  return (
    <header className="header-container">
      <div>
        <Link to="/perfil">
          <img
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="Profile Icon"
          />
        </Link>
      </div>
      <div>
        <h1 data-testid="page-title">{title}</h1>
      </div>
      <div>
        {search && (
          <button type="button" onClick={ () => setSearchInput(!searchInput) }>
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="search Button"
            />
          </button>
        )}
      </div>
      <div>
        {searchInput && (
          <input
            type="text"
            data-testid="search-input"
            name="searchInput"
            placeholder="Buscar Receita"
          />
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.bool,
};

Header.defaultProps = {
  title: '',
  search: true,
};

export default Header;
