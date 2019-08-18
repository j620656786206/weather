import {
  START_FETCH_WEATHER,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILED,
} from '../actions/action-types';
import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  data: List(),
  loadingStatus: '',
  errorMessage: ''
});

export default function weather(state = INITIAL_STATE, action) {
  switch (action.type) {
    case START_FETCH_WEATHER:
      return state.set('loadingStatus', 'loading');
    case FETCH_WEATHER_SUCCESS:
      return getNewData(state, action);
    case FETCH_WEATHER_FAILED:
      return state.set('loadingStatus', 'failed');
    default:
      return state;
  }
}

function getNewData(state, action) {
  const data = state.get('data');

  return state
    .set('loadingStatus', 'success')
    .set('data', List([...data, action.data]));
}
