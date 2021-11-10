import React from 'react';

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

function MealsDetails(id) {
  const { strMealThumb, strMeal,
    strCategory, strInstructions, strYouTube } = id;
  const entries = Object.entries(id);
  const returnValue = (a, b) => a.includes('Ingredients') && b;
  const ingredients = entries.filter((e) => returnValue(e[0], e[1]));

  return (
    <section>
      <h1>Detalhes</h1>
      <img data-testid={ RECIPE_PHOTO } alt={ `${strMeal} dish` } src={ strMealThumb } />
      <h2 data-testid={ RECIPE_TITLE }>{strMeal}</h2>
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
            {e}
          </li>
        ))}
      </ul>
      <p data-testid={ INSTRUCTIONS }>{strInstructions}</p>
      <video data-testid={ VIDEO } autoPlay="" muted="">
        <source src={ strYouTube } />
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

export default MealsDetails;
