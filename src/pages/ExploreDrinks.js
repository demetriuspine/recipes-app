import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const EXPLORE_BY_INGREDIENT = 'explore-by-ingredient';
const EXPLORE_SURPRISE = 'explore-surprise';

const randomEndpoint = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

function ExploreDrinks() {
  const history = useHistory();

  async function handleClick() {
    const { drinks } = await fetch(randomEndpoint)
      .then((response) => response.json());
    const routeNumber = drinks[0].idDrink;
    history.push(`/bebidas/${routeNumber}`);
  }

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
        onClick={ () => handleClick() }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </>
  );
}

export default ExploreDrinks;
