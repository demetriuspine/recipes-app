import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function DoneRecipesCard({ recipe: {
  id,
  name,
  image,
  category,
  tags,
  doneDate,
  area,
  alcoholicOrNot,
  type,
}, index }) {
  const mealInfo = (
    <div>
      <p data-testid={ `${index}-horizontal-top-text` }>{ `${area} - ${category}` }</p>
      <div>
        { tags.map((tag, idx) => (
          <p
            key={ idx }
            data-testid={ `${index}-${tag}-horizontal-tag` }
          >
            { tag }
          </p>
        )) }
      </div>
    </div>
  );

  function handleClick(target) {
    target.addEventListener('click', function () {
    copy('This is some cool text')
  })
};

  return (
    <section>
      <Link to={ `/${type}s/${id}` }>
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
          width="200"
          height="200"
        />
        <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
      </Link>
      <button
        type="button"
        onClick={ handleClick }
      >
        <img
          src={ shareIcon }
          alt="Share"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </button>
      { type === 'comida'
        ? mealInfo
        : <p data-testid={ `${index}-horizontal-top-text` }>{ alcoholicOrNot }</p> }
      <p data-testid={ `${index}-horizontal-done-date` }>{ doneDate }</p>
    </section>
  );
}

DoneRecipesCard.propTypes = {
  recipe: PropTypes.arrayOf(PropTypes.any).isRequired,
  category: PropTypes.string,
  doneDate: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.any).isRequired,
  area: PropTypes.string,
  alcoholicOrNot: PropTypes.string,
  type: PropTypes.string.isRequired,
};

DoneRecipesCard.defaultProps = {
  alcoholicOrNot: '',
  area: '',
  category: '',
};

export default DoneRecipesCard;
