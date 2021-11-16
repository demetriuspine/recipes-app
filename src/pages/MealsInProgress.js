import React, { useEffect, useState } from 'react';

const RECIPE_PHOTO = 'recipe-photo';
const RECIPE_TITLE = 'recipe-title';
const SHARE_BTN = 'share-btn';
const FAVORITE_BTN = 'favorite-btn';
const RECIPE_CATEGORY = 'recipe-category';
const INGREDIENT_STEP = (index) => `${index}-ingredient-step`;
const INSTRUCTIONS = 'instructions';
const FINISH_RECIPE_BTN = 'finish-recipe-btn';

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';

function MealsInProgress() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function getRecipe() {
      await fetch(url)
        .then((results) => results.json())
        .then((data) => setRecipe(data.meals[0]));
    }
    getRecipe();
  }, []);

  function returnValue(a, b, string) {
    if (a.toLowerCase().includes(string) && b !== '') {
      return b;
    }
    return undefined;
  }

  const { strMealThumb, strMeal, strCategory, strInstructions } = recipe;
  const entries = Object.entries(recipe);
  const ingredients = entries.map((e) => returnValue(e[0], e[1], 'ingredient'))
    .filter((e) => e !== undefined);

  return (
    <section>
      <p>MealsInProgress</p>
      <img
        data-testid={ RECIPE_PHOTO }
        alt={ `${strMeal}-meal-dish` }
        src={ strMealThumb }
      />
      <h2 data-testid={ RECIPE_TITLE }>{strMeal}</h2>
      <button type="button" data-testid={ SHARE_BTN }>Compartilhar</button>
      <button type="button" data-testid={ FAVORITE_BTN }>Favoritar</button>
      <p data-testid={ RECIPE_CATEGORY }>{strCategory}</p>
      {
        ingredients.map((e, index) => (
          <p key={ index } data-testid={ INGREDIENT_STEP(index) }>{e}</p>
        ))
      }
      <p data-testid={ INSTRUCTIONS }>{ strInstructions }</p>
      <button type="button" data-testid={ FINISH_RECIPE_BTN }>Finalizar</button>
    </section>
  );
}

export default MealsInProgress;
