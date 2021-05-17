import { combineReducers } from 'redux';
import feedReducer from './feed';

const rootReducer = combineReducers({
  feedState: feedReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
