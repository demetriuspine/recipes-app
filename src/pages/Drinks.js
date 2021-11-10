import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SearchCard from '../Components/SearchCard';

function Drinks() {
  const [drinkSearch, setDrinkSearch] = useState([]);
  const resultsFromGlobalState = useSelector((state) => (
    state.searchReducer.results));

  useEffect(() => {
    setDrinkSearch(resultsFromGlobalState);
  });
  return (
    <>
      <header>
        <Header title="Bebidas" search meals={ false } />
      </header>
      { drinkSearch.length === 0 ? ''
        : drinkSearch.drinks.map(({ strDrink, strDrinkThumb, idDrink }) => (
          <SearchCard
            key={ idDrink }
            picture={ strDrinkThumb }
            name={ strDrink }
            id={ idDrink }
            meals={ false }
          />
        )) }
      {}
      <Footer />

    </>
  );
}

export default Drinks;
