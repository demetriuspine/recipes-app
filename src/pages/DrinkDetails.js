import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const RECIPE_PHOTO = 'recipe-photo';
const RECIPE_TITLE = 'recipe-title';
const SHARE_BTN = 'share-btn';
const FAVORITE_BTN = 'favorite-btn';
const RECIPE_CATEGORY = 'recipe-category';
const INGREDIENT_NAME_AND_MEASURE = (index) => `${index}-ingredient-name-and-measure`;
const INSTRUCTIONS = 'instructions';
const VIDEO = 'video';
const START_RECIPE_BTN = 'start-recipe-btn';
// Habilitar após criação do card de Receita;
// const RECOMENDATION_CARD = (index) => `${index}-recomendation-card`;
const randomEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const idEndpoint = (number) => `https://www.thecocktaildb.com/api/json/v1/1/random.php?i=${number}`;
const ID_NUMBER = 17227;

function DrinkDetails({ match: { params: { id } } }) {
  const [recipe, setRecipe] = useState([]);
  const getRecipe = async () => {
    await fetch(idEndpoint(ID_NUMBER))
      .then((response) => response.json())
      .then((data) => setRecipe(data.drinks[0]));
  };

  const getRandom = async () => {
    await fetch(randomEndpoint)
      .then((response) => response.json())
      .then((data) => setRecipe(data.drinks[0]));
  };

  useEffect(() => {
    if (id === 'random') {
      getRandom();
    } else {
      getRecipe();
    }
  }, [id]);

  const { strDrinkThumb, strDrink, strCategory, strInstructions, strYoutube } = recipe;

  function returnValue(a, b, string) {
    if (a.toLowerCase().includes(string) && b !== '') {
      return b;
    }
    return undefined;
  }

  const entries = Object.entries(recipe);
  const ingredients = entries.map((e) => returnValue(e[0], e[1], 'ingredient'))
    .filter((e) => e !== undefined);
  const measurements = entries.map((e) => returnValue(e[0], e[1], 'measure'))
    .filter((e) => e !== undefined);

  return (
    <section>
      <h1>Detalhes</h1>
      <img
        data-testid={ RECIPE_PHOTO }
        alt={ `${strDrink} drink` }
        src={ strDrinkThumb }
      />
      <h2 data-testid={ RECIPE_TITLE }>{strDrink}</h2>
      <button data-testid={ SHARE_BTN } type="button">
        Compartilhar
      </button>
      <button data-testid={ FAVORITE_BTN } type="button">
        Favorito
      </button>
      <p data-testid={ RECIPE_CATEGORY }>{strCategory}</p>
      <ul>
        { ingredients.map((e, index) => (
          <li key={ index } data-testid={ INGREDIENT_NAME_AND_MEASURE(index) }>
            {`${e} - ${measurements[index]}`}
          </li>
        ))}
      </ul>
      <p data-testid={ INSTRUCTIONS }>{strInstructions}</p>
      <video data-testid={ VIDEO } autoPlay="" muted="">
        <source src={ strYoutube } />
        <track kind="captions" src={ strInstructions } />
      </video>
      {/* Desabilitado, função necessita do Card de receita
      {
        recommended.map((e, index) => {<RecipeCard key={index} data-testid={ RECOMENDATION_CARD(index) } >{e}</RecipeCard>})
      }
      */}
      <button data-testid={ START_RECIPE_BTN } type="button">
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
