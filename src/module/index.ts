import { combineReducers } from 'redux';
import feedReducer from './feed';
import feedDetailReducer from './feedDetail';

const rootReducer = combineReducers({
  feedState: feedReducer,
  feedDetailState: feedDetailReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
