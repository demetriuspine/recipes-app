export const REQUEST_SEARCHBUTTON = 'REQUEST_SEARCHBUTTON';
export const GET_EMAIL = 'GET_EMAIL';
export const GET_JSON = 'GET_JSON';
export const GET_RANDOM = 'GET_RANDOM';

export const requestSearchButton = () => ({
  type: REQUEST_SEARCHBUTTON,
});

export const getEmail = (payload) => ({
  type: GET_EMAIL,
  payload,
});

export const getResults = (payload) => ({
  type: GET_JSON,
  payload,
});

export const getRandom = (payload) => ({
  type: GET_RANDOM,
  payload,
});
