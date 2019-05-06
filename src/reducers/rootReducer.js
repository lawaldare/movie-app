import { combineReducers } from 'redux';
import reducer from './reducer';

const rootReducer = combineReducers({
  movies: reducer
});

export default rootReducer;
