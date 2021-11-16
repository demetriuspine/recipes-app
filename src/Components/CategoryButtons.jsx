/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const FIVE = 5;

async function getMealsRecipes() {
  const fetchApi = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const parseApi = await fetchApi.json();
  return parseApi;
}

async function getDrinksRecipes() {
  const fetchApi = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const parseApi = await fetchApi.json();
  return parseApi;
}

function getValues(categories) {
  // Object.values(mealsRecipes.meals[0])
  return categories.reduce((acc, cat) => [...acc, cat.strCategory], []);
}

export default function CategoryButtons({ meal }) {
  const [isFetched, setIsFetched] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    setIsFetched(false);
    const mealsRecipes = await getMealsRecipes();
    const drinksRecipes = await getDrinksRecipes();
    if (meal === true) {
      setCategories(mealsRecipes);
      console.log(getValues(mealsRecipes.meals));
    } setCategories(drinksRecipes);
    // setIsFetched(true);
  }, []);

  return (
    isFetched ? (
      <section>
        {meal ? Object.values(categories.meals.slice(0, FIVE)).map((mealsCategories, i) => (
          <button type="button" key={ i }>
            {mealsCategories}
          </button>
        )) : Object.values(categories.drinks.slice(0, FIVE)).map((drinksCategories, i) => (
          <button type="button" key={ i }>
            {drinksCategories}
          </button>
        ))}
      </section>
    )
      : 'Loading'
  );
}

CategoryButtons.propTypes = {
  meal: PropTypes.bool.isRequired,
};
