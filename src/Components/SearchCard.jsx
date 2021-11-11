import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchCard({ picture, name, id, meals, index }) {
  const linkToMeals = (
    <Link to={ `/comidas/${id}` } data-testid={ `${index}-card-name` }>
      {name}
    </Link>
  );

  const linkToDrink = (
    <Link to={ `/bebidas/${id}` } data-testid={ `${index}-card-name` }>
      {name}
    </Link>
  );

  return (
    <section data-testid={ `${index}-recipe-card` }>
      <img src={ picture } alt={ name } data-testid={ `${index}-card-img` } />
      { meals ? linkToMeals : linkToDrink }
    </section>
  );
}

SearchCard.propTypes = {
  id: PropTypes.string.isRequired,
  meals: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

// esse card irá renderizar nome e foto do drink
