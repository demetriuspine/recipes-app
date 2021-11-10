import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchCard({ picture, name, id, meals }) {
  const linkToMeals = (
    <Link to={ `/comidas/${id}` }>
      {name}
    </Link>
  );

  const linkToDrink = (
    <Link to={ `/bebidas/${id}` }>
      {name}
    </Link>
  );

  return (
    <section>
      <img src={ picture } alt={ name } />
      { meals ? linkToMeals : linkToDrink }
    </section>
  );
}

SearchCard.propTypes = {
  id: PropTypes.string.isRequired,
  meals: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

// esse card irá renderizar nome e foto do drink
