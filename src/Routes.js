import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import MealDetails from './pages/MealsDetails';
import DrinkDetails from './pages/DrinkDetails';
import MealsInProgress from './pages/MealsInProgress';
import DrinksInProgress from './pages/DrinksInProgress';
import Explore from './pages/Explore';
import MealsExplore from './pages/MealsExplore';
import DrinkExplore from './pages/DrinkExplore';
import MealExploreByIngredient from './pages/MealExploreByIngredients';
import DrinksExploreByIngredient from './pages/DrinkExploreByIngredients';
import MealsByArea from './pages/MealsByArea';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoritesRecipes';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ Meals } />
        <Route path="/bebidas" component={ Drinks } />
        <Route path="/comidas/{id-da-receita}" component={ MealDetails } />
        <Route path="/bebidas/{id-da-receita}" component={ DrinkDetails } />
        <Route
          path="/comidas/{id-da-receita}/in-progress"
          component={ MealsInProgress }
        />
        <Route
          path="/bebidas/{id-da-receita}/in-progress"
          component={ DrinksInProgress }
        />
        <Route path="/explorar" component={ Explore } />
        <Route path="/explorar/comidas" component={ MealsExplore } />
        <Route path="/explorar/bebidas" component={ DrinkExplore } />
        <Route
          path="/explorar/comidas/ingredientes"
          component={ MealExploreByIngredient }
        />
        <Route
          path="/explorar/bebidas/ingredientes"
          component={ DrinksExploreByIngredient }
        />
        <Route path="/explorar/comidas/area" component={ MealsByArea } />
        <Route path="/perfil" component={ Profile } />
        <Route path="/receitas-feitas" component={ DoneRecipes } />
        <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
