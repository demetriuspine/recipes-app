import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const EXPLORE_BY_INGREDIENT = 'explore-by-ingredient';
const EXPLORE_BY_AREA = 'explore-by-area';
const EXPLORE_SURPRISE = 'explore-surprise';

const randomEndpoint = 'https://www.themealdb.com/api/json/v1/1/random.php';

function ExploreMeals() {
  const history = useHistory();

  async function handleClick() {
    const { meals } = await fetch(randomEndpoint)
      .then((response) => response.json());
    const routeNumber = meals[0].idMeal;
    history.push(`/comidas/${routeNumber}`);
  }

  return (
    <>
      <header>
        <Header title="Explorar Comidas" search={ false } />
      </header>
      <button
        type="button"
        data-testid={ EXPLORE_BY_INGREDIENT }
        onClick={ () => history.push('/explorar/comidas/ingredientes') }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid={ EXPLORE_BY_AREA }
        onClick={ () => history.push('/explorar/comidas/area') }
      >
        Por Local de Origem
      </button>
      <button
        type="button"
        data-testid={ EXPLORE_SURPRISE }
        onClick={ () => handleClick() }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}

export default ExploreMeals;
