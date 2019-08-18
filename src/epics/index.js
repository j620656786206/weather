import { combineEpics } from 'redux-observable';
import { fetchWeatherEpic } from './weather-epics';

export default combineEpics(
  fetchWeatherEpic,
);
