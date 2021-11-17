/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SearchCard from '../Components/SearchCard';
import { fetchNameAPI } from '../services/mealsAPI';
import CategoryButtons from '../Components/CategoryButtons';

const TWELVE = 12;

function Meals({ history }) {
  const [mealSearch, setMealSearch] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [initialRecipes, setInitialRecipes] = useState([]);
  const resultsFromGlobalState = useSelector((state) => (
    state.searchReducer.results));

  useEffect(() => {
    setIsFetched(false);
    async function getInitialRecipes() {
      const recipes = await fetchNameAPI('');
      setInitialRecipes(recipes);
      setIsFetched(true);
    }
    getInitialRecipes();
    // setInitialRecipes()
  }, []);

  useEffect(() => {
    setMealSearch(resultsFromGlobalState);
    setSubmitted(true);
  }, [resultsFromGlobalState]);

  useEffect(() => {
    if (submitted === true && mealSearch.meals && mealSearch.meals.length === 1) {
      history.push(`/comidas/${mealSearch.meals[0].idMeal}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mealSearch]);

  return (
    isFetched ? (
      <section>
        <header>
          <Header title="Comidas" search meals type="meals" />
        </header>
        <CategoryButtons meal />
        { mealSearch.length === 0 || !mealSearch.meals
          ? initialRecipes.meals.filter((_, idx) => idx < TWELVE)
            .map(({ strMeal, strMealThumb, idMeal }, index) => (
              <SearchCard
                key={ idMeal }
                picture={ strMealThumb }
                name={ strMeal }
                id={ idMeal }
                index={ index }
                meals
                data-testid={ `${index}-recipe-card` }
              />
            ))
          : mealSearch.meals.filter((_, idx) => idx < TWELVE)
            .map(({ strMeal, strMealThumb, idMeal }, index) => (
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
    ) : ''
  );
}

Meals.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Meals;
