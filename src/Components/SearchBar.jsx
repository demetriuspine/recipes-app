import React, { useState } from 'react';

function SearchBar() {
  const [/* radioValue */, setRadioValue] = useState('');
  return (
    <section>
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
      <button type="button" data-testid="exec-search-btn">Buscar</button>
    </section>
  );
}

export default SearchBar;
