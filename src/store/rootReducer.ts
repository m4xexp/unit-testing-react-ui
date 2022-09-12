import { combineReducers } from 'redux';
import count from './reducers/count/reducer';

const rootReducer = combineReducers({
  count,
});

export default rootReducer;
