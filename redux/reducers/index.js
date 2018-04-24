import { combineReducers } from 'redux';
import images from './imagesReducer';

const allReducers = combineReducers({
  images,
});

export default allReducers;
