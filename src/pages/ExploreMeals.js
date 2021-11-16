import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const EXPLORE_BY_INGREDIENT = 'explore-by-ingredient';
const EXPLORE_BY_AREA = 'explore-by-area';
const EXPLORE_SURPRISE = 'explore-surprise';

function ExploreMeals() {
  const history = useHistory();
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
        onClick={ () => history.push('/comidas/random') }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}

export default ExploreMeals;
