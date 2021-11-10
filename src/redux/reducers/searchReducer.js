import { GET_JSON } from '../actions';

const initialState = {
  results: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_JSON:
    return {
      ...state,
      results: payload };

  default:
    return state;
  }
};
