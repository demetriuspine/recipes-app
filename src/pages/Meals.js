import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SearchCard from '../Components/SearchCard';

function Meals({ history }) {
  const [mealSearch, setMealSearch] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const resultsFromGlobalState = useSelector((state) => (
    state.searchReducer.results));

  useEffect(() => {
    setMealSearch(resultsFromGlobalState);
    setSubmitted(true);
  }, [resultsFromGlobalState]);

  useEffect(() => {
    if (!mealSearch) {
      global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    } else if (submitted === true && mealSearch.meals && mealSearch.meals.length === 1) {
      history.push(`/comidas/${mealSearch.meals[0].idMeal}`);
    }
  }, [mealSearch]);

  return (
    <section>
      <header>
        <Header title="Comidas" search meals />
      </header>
      { mealSearch.length === 0 ? ''
        : mealSearch.meals.map(({ strMeal, strMealThumb, idMeal }, index) => (
          <SearchCard
            key={ idMeal }
            picture={ strMealThumb }
            name={ strMeal }
            id={ idMeal }
            index={ index }
            meals
          />
        )) }
      <Footer />
    </section>
  );
}

Meals.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Meals;
