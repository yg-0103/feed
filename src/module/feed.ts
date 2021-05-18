import { Dispatch } from 'redux';
import { FeedAbsData, FeedData, FeedState } from '../types/feedType';
import * as feedApi from '../api/feedApi';

const GET_FEEDS = 'feed/GET_FEEDS' as const;
const GET_FEEDS_SUCCESS = 'feed/GET_FEEDS_SUCCESS' as const;
const GET_FEEDS_ERROR = 'feed/GET_FEEDS_ERROR' as const;

const GET_FEEDABS = 'feed/GET_FEEDABS' as const;
const GET_FEEDABS_SUCCESS = 'feed/GET_FEEDABS_SUCCESS' as const;
const GET_FEEDABS_ERROR = 'feed/GET_FEEDABS_ERROR' as const;

const getFeeds = () => ({ type: GET_FEEDS });
const getFeedsSuccess = (feeds: FeedData) => ({
  type: GET_FEEDS_SUCCESS,
  payload: feeds,
});
const getFeedsError = (e: Error) => ({ type: GET_FEEDS_ERROR, payload: e });

const getFeedAbs = () => ({ type: GET_FEEDABS });
const getFeedAbsSuccess = (feedAbs: FeedAbsData) => ({
  type: GET_FEEDABS_SUCCESS,
  payload: feedAbs,
});
const getFeedAbsError = (e: Error) => ({ type: GET_FEEDABS_ERROR, payload: e });

export const getFeedsThunk = (ord: string, category: any) => async (
  dispatch: Dispatch
) => {
  dispatch(getFeeds());
  try {
    const feedData = await feedApi.getFeedAll(ord, category);
    dispatch(getFeedsSuccess(feedData));
  } catch (e) {
    dispatch(getFeedsError(e));
  }
};

export const getFeedAbsThunk = () => async (dispatch: Dispatch) => {
  dispatch(getFeedAbs());
  try {
    const feedAbsData = await feedApi.getFeedAbs();
    dispatch(getFeedAbsSuccess(feedAbsData));
  } catch (e) {
    dispatch(getFeedAbsError(e));
  }
};

type FeedAction =
  | ReturnType<typeof getFeeds>
  | ReturnType<typeof getFeedsSuccess>
  | ReturnType<typeof getFeedsError>
  | ReturnType<typeof getFeedAbs>
  | ReturnType<typeof getFeedAbsSuccess>
  | ReturnType<typeof getFeedAbsError>;

const initialState: FeedState = {
  feeds: {
    loading: false,
    data: null,
    error: null,
  },
  feedAbs: {
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
    case GET_FEEDABS:
      return {
        ...state,
        feedAbs: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case GET_FEEDABS_SUCCESS:
      return {
        ...state,
        feedAbs: {
          loading: false,
          data: action.payload,
          error: null,
        },
      };
    case GET_FEEDABS_ERROR:
      return {
        ...state,
        feedAbs: {
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
