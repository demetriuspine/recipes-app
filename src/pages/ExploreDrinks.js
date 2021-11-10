import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const EXPLORE_BY_INGREDIENT = 'explore-by-ingredient';
const EXPLORE_SURPRISE = 'explore-surprise';

function ExploreDrinks() {
  const history = useHistory();
  return (
    <>
      <header>
        <Header title="Explorar Bebidas" search={ false } />
      </header>
      <button
        type="button"
        data-testid={ EXPLORE_BY_INGREDIENT }
        onClick={ () => history.push('/explorar/bebidas/ingredientes') }
      >
        Por Ingredientes
      </button>
      <button
        type="button"
        data-testid={ EXPLORE_SURPRISE }
        onClick={ () => history.push('/explorar/bebidas') }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}

export default ExploreDrinks;
