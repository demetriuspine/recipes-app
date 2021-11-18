import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CarouselMeals from '../Components/CarouselMeals';

const RECIPE_PHOTO = 'recipe-photo';
const RECIPE_TITLE = 'recipe-title';
const SHARE_BTN = 'share-btn';
const FAVORITE_BTN = 'favorite-btn';
const RECIPE_CATEGORY = 'recipe-category';
const INGREDIENT_NAME_AND_MEASURE = (index) => `${index}-ingredient-name-and-measure`;
const INSTRUCTIONS = 'instructions';
const START_RECIPE_BTN = 'start-recipe-btn';

const randomEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const idEndpoint = (id) => `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
const mealsEndpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

function DrinkDetails({ match: { params: { id } } }) {
  const [recipe, setRecipe] = useState([]);
  const [dishes, setDishes] = useState([]);

  const getDishes = async () => {
    const { meals } = await fetch(mealsEndpoint)
      .then((results) => results.json());
    setDishes(meals);
  };

  const getRecipe = async () => {
    await fetch(idEndpoint(id))
      .then((response) => response.json())
      .then((data) => setRecipe(data.drinks[0]));
  };

  const getRandom = async () => {
    await fetch(randomEndpoint)
      .then((response) => response.json())
      .then((data) => setRecipe(data.drinks[0]));
  };

  useEffect(() => {
    getDishes();
  }, []);

  useEffect(() => {
    if (id === 'random') {
      getRandom();
    } else {
      getRecipe();
    }
  });

  const { strDrinkThumb, strDrink,
    strAlcoholic, strInstructions } = recipe;

  function returnValue(a, b, string) {
    if (a.toLowerCase().includes(string) && b) {
      return b;
    }
    return null;
  }

  const entries = Object.entries(recipe);
  const ingredients = entries.map((e) => returnValue(e[0], e[1], 'ingredient'))
    .filter((e) => e !== null);
  const measurements = entries.map((e) => returnValue(e[0], e[1], 'measure'))
    .filter((e) => e !== null);

  return (
    <section>
      <h1>Detalhes</h1>
      <img
        data-testid={ RECIPE_PHOTO }
        alt={ `${strDrink} drink` }
        src={ strDrinkThumb }
      />
      <h2 data-testid={ RECIPE_TITLE }>{strDrink}</h2>
      <p data-testid={ RECIPE_CATEGORY }>{strAlcoholic}</p>
      <button data-testid={ SHARE_BTN } type="button">
        Compartilhar
      </button>
      <button data-testid={ FAVORITE_BTN } type="button">
        Favorito
      </button>
      <ul>
        { ingredients.map((e, index) => (
          <li key={ index } data-testid={ INGREDIENT_NAME_AND_MEASURE(index) }>
            {`${e} - ${measurements[index]}`}
          </li>
        ))}
      </ul>
      <p data-testid={ INSTRUCTIONS }>{strInstructions}</p>
      <CarouselMeals dishes={ dishes } />
      <button
        data-testid={ START_RECIPE_BTN }
        type="button"
        style={ { position: 'fixed', bottom: '0px' } }
      >
        Iniciar Receita
      </button>
    </section>
  );
}

DrinkDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

DrinkDetails.defaultProps = {
  match: {},
};
export default DrinkDetails;
