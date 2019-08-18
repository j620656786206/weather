import {
  START_FETCH_WEATHER,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED,
} from './action-types';

export function fetchWeatherAction(city, country) {
  return {
    type: START_FETCH_WEATHER,
    city,
    country,
  };
}

export function fetchWeatherSuccessAction(data) {
  return {
    type: FETCH_WEATHER_SUCCESS,
    data,
  };
}

export function fetchWeatherFailedAction() {
  return {
    type: FETCH_WEATHER_FAILED,
  };
}
