import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SearchCard from '../Components/SearchCard';

function Meals(/* { history } */) {
  const [mealSearch, setMealSearch] = useState([]);
  /* const [submitted, setSubmitted] = useState(false); */
  const resultsFromGlobalState = useSelector((state) => (
    state.searchReducer.results));

  useEffect(() => {
    setMealSearch(resultsFromGlobalState);
    setSubmitted(true);
  }, [resultsFromGlobalState]);

  /*   useEffect(() => {
    if (!mealSearch) {
      global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    } else if (submitted === true && mealSearch.meals.length === 1) {
      history.push(`/comidas/${mealSearch[0].idMeal}`);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }); */

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

export default Meals;

// meal  return (
//     <>
//       <header>
//         <Header title="Bebidas" search meals={ false } />
//       </header>
//       { drinkSearch.length === 0 ? ''
//         : drinkSearch.drinks.map(({ strDrink, strDrinkThumb, idDrink }) => (
//           <SearchCard
//             key={ idDrink }
//             picture={ strDrinkThumb }
//             name={ strDrink }
//             id={ idDrink }
//             meals={ false }
//           />
//         )) }
//       {}
//       <Footer />

//     </>
//   );
// }

// export default Drinks;
