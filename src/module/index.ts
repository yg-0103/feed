import { combineReducers } from 'redux';
import feedReducer from './feed';
import feedCategoryReducer from './feedCategory';
import feedDetailReducer from './feedDetail';

const rootReducer = combineReducers({
  feedState: feedReducer,
  feedDetailState: feedDetailReducer,
  feedCategoryState: feedCategoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
