import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import DoneRecipesCard from '../Components/DoneRecipesCard';

const mockedStorage = [
  {
    id: '52771',
    type: 'comida',
    area: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: '23/06/2020',
    tags: ['Pasta', 'Curry'],
  },
  {
    id: '178319',
    type: 'bebida',
    area: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
    doneDate: '23/06/2020',
    tags: [],
  },
];

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState('');

  localStorage.setItem('doneRecipes', JSON.stringify(mockedStorage));

  function getdoneRecipesFromStorage() {
    return JSON.parse(localStorage.getItem('doneRecipes'));
  }

  useEffect(() => {
    setDoneRecipes(getdoneRecipesFromStorage());
  }, []);

  function filterDoneRecipes(allDoneRecipes) {
    return (
      allDoneRecipes
        .filter((recipe) => (filteredRecipes !== ''
          ? recipe.type === filteredRecipes
          : allDoneRecipes))
    );
  }

  return (
    <main>
      <header>
        <Header title="Receitas Feitas" search={ false } />
      </header>
      <section>
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilteredRecipes('') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilteredRecipes('comida') }
        >
          Foods
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilteredRecipes('bebida') }
        >
          Drinks
        </button>
      </section>
      <section>
        { doneRecipes.length !== 0
          ? filterDoneRecipes(doneRecipes).map((recipe, index) => (
            <DoneRecipesCard
              key={ index }
              recipe={ recipe }
              index={ index }
            />
          ))
          : ''}
      </section>
    </main>
  );
}

export default DoneRecipes;
