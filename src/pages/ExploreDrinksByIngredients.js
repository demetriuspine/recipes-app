import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function ExploreDrinksByIngredients() {
  return (
    <>
      <header>
        <Header title="Explorar Ingredientes" search={ false } />
      </header>
      <Footer />
    </>
  );
}

export default ExploreDrinksByIngredients;
