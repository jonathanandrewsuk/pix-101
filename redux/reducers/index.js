import { combineReducers } from 'redux';
import hello from './helloReducer';

const allReducers = combineReducers({
  hello,
});

export default allReducers;
