import { combineReducers } from 'redux';
import weather from './reducer_weather';

const rootReducer = combineReducers({
  weather,
});

export default rootReducer;
