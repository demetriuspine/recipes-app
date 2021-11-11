import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SearchCard from '../Components/SearchCard';

function Meals() {
  const [mealSearch, setMealSearch] = useState([]);
  const resultsFromGlobalState = useSelector((state) => (
    state.searchReducer.results));

  useEffect(() => {
    setMealSearch(resultsFromGlobalState);
  }, [resultsFromGlobalState]);

  return (
    <section>
      <header>
        <Header title="Comidas" search meals />
      </header>
      { mealSearch.length === 0 ? ''
        : mealSearch.meals.map(({ strMeal, strMealThumb, idMeal }) => (
          <SearchCard
            key={ idMeal }
            picture={ strMealThumb }
            name={ strMeal }
            id={ idMeal }
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
