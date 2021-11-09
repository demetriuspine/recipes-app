import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function ExploreMeals() {
  return (
    <>
      <header>
        <Header title="Explorar Comidas" search={ false } />
      </header>
      <Footer />
    </>
  );
}

export default ExploreMeals;
