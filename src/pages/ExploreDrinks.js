import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function ExploreDrinks() {
  return (
    <>
      <header>
        <Header title="Explorar Bebidas" search={ false } />
      </header>
      <Footer />
    </>
  );
}

export default ExploreDrinks;
