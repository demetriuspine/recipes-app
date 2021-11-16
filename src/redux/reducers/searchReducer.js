import { GET_JSON, FILTER } from '../actions';

const initialState = {
  results: [],
  ingredient: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_JSON:
    return { ...state, results: payload };
  case FILTER:
    return { ...state, ingredient: payload };
  default:
    return state;
  }
};
