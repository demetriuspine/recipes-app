export const REQUEST_SEARCHBUTTON = 'REQUEST_SEARCHBUTTON';
export const GET_EMAIL = 'GET_EMAIL';

export const requestSearchButton = () => ({
  type: REQUEST_SEARCHBUTTON,
});

export const getEmail = (payload) => ({
  type: GET_EMAIL,
  payload,
});
