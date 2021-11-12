import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const EXPLORE_BY_AREA_DROPDOWN = 'explore-by-area-dropdown';
const AREA_OPTION = (area) => `${area.toLowerCase()}-option`;

const locations = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
const fetchAll = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
const byCountry = (location) => `https://www.themealdb.com/api/json/v1/1/filter.php?a=${location}`;

function MealsByArea() {
  const history = useHistory();
  const [area, setArea] = useState([]);
  const [location, setLocation] = useState('All');
  const [recipes, setRecipes] = useState([]);
  const reducer = (arr) => arr
    .reduce((acc, { strArea }) => [...acc, strArea], ['All']);

  useEffect(() => {
    async function listArea() {
      const { meals } = await fetch(locations)
        .then((results) => results.json());
      setArea(reducer(meals));
    }
    listArea();
  }, []);

  useEffect(() => {
    async function getRecipes() {
      const { meals } = await fetch(location !== 'All' ? byCountry(location) : fetchAll)
        .then((results) => results.json());
      setRecipes(meals);
    }
    getRecipes();
  }, [location]);

  const TWELVE = 12;
  const twelveRecipe = recipes.slice(0, TWELVE);

  return (
    <>
      <header>
        <Header title="Explorar Origem" search meals />
      </header>
      <select
        data-testid={ EXPLORE_BY_AREA_DROPDOWN }
        onChange={ ({ target: { value } }) => setLocation(value) }
      >
        {
          area.map((e, index) => (
            <option key={ index } data-testid={ AREA_OPTION(e) }>
              {e}
            </option>))
        }
      </select>
      {
        twelveRecipe.map(({ strMeal, strMealThumb, idMeal }, index) => (
          <div
            key={ index }
            role="button"
            onClick={ () => history.push(`/comidas/${idMeal}`) }
            tabIndex="0"
            aria-hidden="true"
          >
            <img
              src={ strMealThumb }
              alt={ `${strMeal}-dish-plate` }
              height="160px"
              width="120px"
            />
            <h3>{strMeal}</h3>
          </div>))
      }
      <Footer />
    </>
  );
}

export default MealsByArea;
