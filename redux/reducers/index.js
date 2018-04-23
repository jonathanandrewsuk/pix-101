import { combineReducers } from 'redux';
import hello from './helloReducer';
import images from './imagesReducer';

const allReducers = combineReducers({
  hello,
  images,
});

export default allReducers;
