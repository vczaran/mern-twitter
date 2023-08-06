import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './session';
import { tweetErrorsReducer } from './tweets';

export const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  tweets: tweetErrorsReducer
});