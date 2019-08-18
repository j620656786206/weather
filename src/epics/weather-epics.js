import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { switchMap, map, catchError } from 'rxjs/operators';
import { START_FETCH_WEATHER } from '../actions/action-types';
import {
  fetchWeatherSuccessAction,
  fetchWeatherFailedAction
} from '../actions/weather-actions';

const API_KEY = 'c331f457e458e63d8f37cd48b08c1a25';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeatherEpic(action$, state$) {
  return action$.pipe(
    ofType(START_FETCH_WEATHER),
    switchMap(action => {
      return ajax({
        url: `${ROOT_URL}&q=${action.city},${action.country}`,
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).pipe(
        map(payload => payload.response),
        map(payload => fetchWeatherSuccessAction(payload)),
        catchError(error => [fetchWeatherFailedAction(error)])
      );
    })
  );
}
