import { Dispatch } from 'redux';
import { FeedCategoryData, FeedCategoryState } from 'types/feedCategoryType';
import * as feedApi from 'api/feedApi';
import { asyncState } from 'utils/reducerUtils';

const GET_FEEDCATEGORY = 'feedCategory/GET_FEEDCATEGORY' as const;
const GET_FEEDCATEGORY_SUCCESS = 'feedDetail/GET_FEEDCATEGORY_SUCCESS' as const;
const GET_FEEDCATEGORY_ERROR = 'feedDetail/GET_FEEDCATEGORY_ERROR' as const;

const getFeedCategory = () => ({ type: GET_FEEDCATEGORY });
const getFeedCategorySuccess = (feedCategory: FeedCategoryData) => ({
  type: GET_FEEDCATEGORY_SUCCESS,
  payload: feedCategory,
});
const getFeedCategoryError = (e: Error) => ({
  type: GET_FEEDCATEGORY_ERROR,
  payload: e,
});

export const getFeedCategoryThunk = () => async (dispatch: Dispatch) => {
  dispatch(getFeedCategory());
  try {
    const feedCategoryData = await feedApi.getFeedCategory();
    dispatch(getFeedCategorySuccess(feedCategoryData));
  } catch (e) {
    dispatch(getFeedCategoryError(e));
  }
};

type FeedCategoryAction =
  | ReturnType<typeof getFeedCategory>
  | ReturnType<typeof getFeedCategorySuccess>
  | ReturnType<typeof getFeedCategoryError>;

const initialState: FeedCategoryState = asyncState.initial();

const feedCategoryReducer = (
  state: FeedCategoryState = initialState,
  action: FeedCategoryAction
): FeedCategoryState => {
  switch (action.type) {
    case GET_FEEDCATEGORY:
      return asyncState.load();
    case GET_FEEDCATEGORY_SUCCESS:
      return asyncState.success(action.payload);
    case GET_FEEDCATEGORY_ERROR:
      return asyncState.error(action.payload);
    default:
      return state;
  }
};

export default feedCategoryReducer;
