import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import { fetchFirstLetterAPI, fetchIngredientAPI, fetchNameAPI } from '../services/API';

function Header({ title, search }) {
  const [searchInput, setSearchInput] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [radioValue, setRadioValue] = useState('');

  function handleClick() {
    switch (radioValue) {
    case 'ingrediente':
      fetchIngredientAPI(searchInputValue);
      setSearchInputValue('');
      break;
    case 'nome':
      fetchNameAPI(searchInputValue);
      setSearchInputValue('');
      break;
    case 'primeira-letra':
      if (searchInputValue.length > 1) {
        global.alert('Sua busca deve conter somente 1 (um) caracter');
        break;
      }
      fetchFirstLetterAPI(searchInputValue);
      setSearchInputValue('');
      break;
    default:
      break;
    }
  }

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
            value={ searchInputValue }
            onChange={ ({ target }) => setSearchInputValue(target.value) }
          />
        )}
      </div>
      <div>
        <label htmlFor="ingrediente">
          <input
            id="ingrediente"
            data-testid="ingredient-search-radio"
            name="search-radio"
            value="ingrediente"
            type="radio"
            onChange={ ({ target }) => setRadioValue(target.value) }
          />
          Ingrediente
        </label>
        <label htmlFor="nome">
          <input
            id="nome"
            data-testid="name-search-radio"
            name="search-radio"
            value="nome"
            type="radio"
            onChange={ ({ target }) => setRadioValue(target.value) }
          />
          Nome
        </label>
        <label htmlFor="primeira-letra">
          <input
            id="primeira-letra"
            data-testid="first-letter-search-radio"
            name="search-radio"
            value="primeira-letra"
            type="radio"
            onChange={ ({ target }) => setRadioValue(target.value) }
          />
          Primeira Letra
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar

      </button>
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
