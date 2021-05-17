import { Dispatch } from 'redux';
import { FeedData, FeedState } from '../types/feedType';
import * as feedApi from '../api/feedApi';

const GET_FEEDS = 'feed/GET_FEEDS' as const;
const GET_FEEDS_SUCCESS = 'feed/GET_FEEDS_SUCCESS' as const;
const GET_FEEDS_ERROR = 'feed/GET_FEEDS_ERROR' as const;

const getFeeds = () => ({ type: GET_FEEDS });
const getFeedsSuccess = (feeds: FeedData) => ({
  type: GET_FEEDS_SUCCESS,
  payload: feeds,
});
const getFeedsError = (e: Error) => ({ type: GET_FEEDS_ERROR, payload: e });

export const getFeedsThunk = () => async (dispatch: Dispatch) => {
  dispatch(getFeeds());
  try {
    const feedData = await feedApi.getFeedAll();
    dispatch(getFeedsSuccess(feedData));
  } catch (e) {
    dispatch(getFeedsError(e));
  }
};

type FeedAction =
  | ReturnType<typeof getFeeds>
  | ReturnType<typeof getFeedsSuccess>
  | ReturnType<typeof getFeedsError>;

const initialState: FeedState = {
  feed: {
    loading: false,
    data: null,
    error: null,
  },
  feeds: {
    loading: false,
    data: null,
    error: null,
  },
};

const feedReducer = (state: FeedState = initialState, action: FeedAction) => {
  switch (action.type) {
    case GET_FEEDS:
      return {
        ...state,
        feeds: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_FEEDS_SUCCESS:
      return {
        ...state,
        feeds: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case GET_FEEDS_ERROR:
      return {
        ...state,
        feeds: {
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default feedReducer;
