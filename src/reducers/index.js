import { combineReducers } from 'redux';
import loan from './loan';
import location from './location';

export default combineReducers({
  loan,
  location
});
