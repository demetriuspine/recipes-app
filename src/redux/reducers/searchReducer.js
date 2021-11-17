import { GET_JSON, FILTER, IS_CLICKED } from '../actions';

const initialState = {
  results: [],
  ingredient: '',
  isClicked: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_JSON:
    return { ...state, results: payload };
  case FILTER:
    return { ...state, ingredient: payload };
  case IS_CLICKED:
    return { ...state, isClicked: payload };
  default:
    return state;
  }
};
