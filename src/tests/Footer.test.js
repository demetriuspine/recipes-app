import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Meals from '../pages/Meals';
import renderWithRouter from './renderWithRouter';
import renderWithComponent from './renderWithComponent';

const FOOTER = 'footer';
const DRINKS_BOTTOM_BTN = 'drinks-bottom-btn';
const EXPLORE_BOTTOM_BTN = 'explore-bottom-btn';
const FOOD_BOTTOM_BTN = 'food-bottom-btn';

afterEach(cleanup);

describe('19 - 24 - Renders footer component and applies tests', () => {
  it('should contain a footer element', () => {
    renderWithRouter('/comidas');
    const footer = screen.getByTestId(FOOTER);
    expect(footer).toBeInTheDocument();
  });
  it('should contain a cocktail icon', () => {
    const { history } = renderWithComponent(<Meals />);
    const cocktail = screen.getByTestId(DRINKS_BOTTOM_BTN);
    expect(cocktail).toBeInTheDocument();

    const source = 'drinkIcon.svg';
    expect(cocktail).toHaveAttribute('src', source);

    userEvent.click(cocktail);
    const path = history.location.pathname;
    expect(path).toBe('/bebidas');
  });
  it('should contain an explore icon', () => {
    const { history } = renderWithComponent(<Meals />);
    const magnifier = screen.getByTestId(EXPLORE_BOTTOM_BTN);
    expect(magnifier).toBeInTheDocument();

    const source = 'exploreIcon.svg';
    expect(magnifier).toHaveAttribute('src', source);

    userEvent.click(magnifier);
    const path = history.location.pathname;
    expect(path).toBe('/explorar');
  });
  it('should contain a meals icon', () => {
    const { history } = renderWithComponent(<Meals />);
    const dish = screen.getByTestId(FOOD_BOTTOM_BTN);
    expect(dish).toBeInTheDocument();

    const source = 'mealIcon.svg';
    expect(dish).toHaveAttribute('src', source);

    userEvent.click(dish);
    const path = history.location.pathname;
    expect(path).toBe('/comidas');
  });
});
