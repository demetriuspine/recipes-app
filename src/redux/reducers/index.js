import { combineReducers } from 'redux';
import headerReducer from './HeaderReducer';

const rootReducer = combineReducers({ headerReducer });

export default rootReducer;
