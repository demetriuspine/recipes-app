import { screen, cleanup, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';

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
  it('should contain 3 icons', () => {
    renderWithRouter('/');
    const icons = screen.getAllByRole('img');
    const THREE = 3;

    expect(icons.length).toBe(THREE);
  });
  it('should contain a cocktail icon', () => {
    renderWithRouter('/');
    const cocktail = screen.getElementById(DRINKS_BOTTOM_BTN);
    expect(cocktail).toBeInTheDocument();

    const source = '/drinkIcon.svg';
    expect(cocktail.src).toHaveAttribute('src', source);

    fireEvent(click, cocktail);
  });
  it('should contain an explore icon', () => {
    renderWithRouter('/');
    const magnifier = screen.getElementById(EXPLORE_BOTTOM_BTN);
    expect(magnifier).toBeInTheDocument();

    const source = '/exploreIcon.svg';
    expect(magnifier.src).toHaveAttribute('src', source);

    fireEvent(click, magnifier);
  });
  it('should contain a meals icon', () => {
    renderWithRouter('/');
    const dish = screen.getElementById(FOOD_BOTTOM_BTN);
    expect(dish).toBeInTheDocument();

    const source = '/mealIcon.svg';
    expect(dish.src).toHaveAttribute('src', source);

    fireEvent(click, dish);
  });
});
