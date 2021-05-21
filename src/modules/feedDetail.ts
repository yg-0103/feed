import { Dispatch } from 'redux';
import { FeedDetailData, FeedDetailState } from 'types/feedDetailType';
import * as feedApi from 'api/feedApi';
import { asyncState } from 'utils/reducerUtils';

const GET_FEED = 'feedDetail/GET_FEED' as const;
const GET_FEED_SUCCESS = 'feedDetail/GET_FEED_SUCCESS' as const;
const GET_FEED_ERROR = 'feedDetail/GET_FEED_ERROR' as const;

const getFeed = () => ({ type: GET_FEED });
const getFeedSuccess = (feedDetail: FeedDetailData) => ({
  type: GET_FEED_SUCCESS,
  payload: feedDetail,
});
const getFeedError = (e: Error) => ({ type: GET_FEED_ERROR, payload: e });

export const getFeedThunk = (id: number) => async (dispatch: Dispatch) => {
  dispatch(getFeed());
  try {
    const feedDetailData = await feedApi.getFeed(id);
    dispatch(getFeedSuccess(feedDetailData));
  } catch (e) {
    dispatch(getFeedError(e));
  }
};

type FeedDetailAction =
  | ReturnType<typeof getFeed>
  | ReturnType<typeof getFeedSuccess>
  | ReturnType<typeof getFeedError>;

const initialState: FeedDetailState = asyncState.initial();

const feedDetailReducer = (
  state: FeedDetailState = initialState,
  action: FeedDetailAction
): FeedDetailState => {
  switch (action.type) {
    case GET_FEED:
      return asyncState.load();
    case GET_FEED_SUCCESS:
      return asyncState.success(action.payload);
    case GET_FEED_ERROR:
      return asyncState.error(action.payload);
    default:
      return state;
  }
};

export default feedDetailReducer;
