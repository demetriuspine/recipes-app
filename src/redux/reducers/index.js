import { combineReducers } from 'redux';
import header from './HeaderReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({ header, profileReducer });

export default rootReducer;
