import { screen, cleanup, fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';

const PROFILE_TOP_BTN = 'profile-top-btn';
const PAGE_TITLE = 'page-title';
const SEARCH_TOP_BTN = 'search-top-btn';
const SEARCH_INPUT = 'search-input';

afterEach(cleanup);

describe('Req 9: Header has a title and renders a profile and search button', () => {
  it('should contain a profile button', () => {
    renderWithRouter('/comidas');
    const profileButton = screen.getByTestId(PROFILE_TOP_BTN);
    const headerTitle = screen.getByTestId(PAGE_TITLE);
    const searchButton = screen.getByTestId(SEARCH_TOP_BTN);
    const searchInput = screen.getByTestId(SEARCH_INPUT);
    expect(profileButton).toBeInTheDocument();
    expect(headerTitle).toBeInTheDocument();
    fireEvent.click(searchButton);
    expect(searchInput).toBeInTheDocument();
  });
});

describe('Req: 10: Header has a Profile and Search Icons', () => {
  it('should not render the Header on Login page', () => {
    renderWithRouter('/');
    const headerTitle = screen.getByTestId(PAGE_TITLE);
    expect(headerTitle).not.toBeInTheDocument();
  });

  it('should render the Header on DoneRecipes page', () => {
    renderWithRouter('/pages/DoneRecipes');
    const title = screen.queryByText(RECEITAS_FEITAS);
    const searchButton = screen.getByTestId(SEARCH_TOP_BTN);
    expect(title).toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });

  it('should not render the Header on DrinkDetails page', () => {
    renderWithRouter('/pages/DrinkDetails');
    const headerTitle = screen.getByTestId(PAGE_TITLE);
    expect(headerTitle).not.toBeInTheDocument();
  });
});
