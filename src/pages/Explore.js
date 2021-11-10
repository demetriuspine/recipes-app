import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const EXPLORE_FOOD = 'explore-food';
const EXPLORE_DRINKS = 'explore-drinks';

function Explorar() {
  const history = useHistory();
  return (
    <>
      <header>
        <Header title="Explorar" search={ false } />
      </header>
      <button
        type="button"
        data-testid={ EXPLORE_FOOD }
        onClick={ () => history.push('/explorar/comidas') }
      >
        Explorar Comidas
      </button>
      <button
        type="button"
        data-testid={ EXPLORE_DRINKS }
        onClick={ () => history.push('/explorar/bebidas') }
      >
        Explorar Bebidas
      </button>
      <Footer />
    </>
  );
}

export default Explorar;
