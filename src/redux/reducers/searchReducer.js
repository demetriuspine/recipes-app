import { GET_JSON, GET_RANDOM } from '../actions';

const initialState = {
  results: [],
  recipe: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_JSON:
    return { ...state, results: payload };
  case GET_RANDOM:
    return { ...state, recipe: payload };
  default:
    return state;
  }
};
