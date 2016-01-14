import thunkMiddleware from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { filter } from './reducers/FilterReducer';

const rootReducer = combineReducers({
  filter
});

export const store = compose(
  applyMiddleware(thunkMiddleware)
)(createStore)(rootReducer);