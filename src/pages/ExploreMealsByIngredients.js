import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function ExploreMealsByIngredients() {
  return (
    <>
      <header>
        <Header title="Explorar Ingredientes" search={ false } />
      </header>
      <Footer />
    </>
  );
}

export default ExploreMealsByIngredients;
