import { Dispatch } from 'redux';
import {
  Feed,
  FeedAbs,
  FeedAbsData,
  FeedData,
  FeedState,
} from 'types/feedType';
import * as feedApi from 'api/feedApi';
import { asyncState } from 'utils/reducerUtils';

const GET_FEEDS = 'feed/GET_FEEDS' as const;
const GET_FEEDS_SUCCESS = 'feed/GET_FEEDS_SUCCESS' as const;
const GET_FEEDS_ERROR = 'feed/GET_FEEDS_ERROR' as const;

const GET_FEEDABS = 'feed/GET_FEEDABS' as const;
const GET_FEEDABS_SUCCESS = 'feed/GET_FEEDABS_SUCCESS' as const;
const GET_FEEDABS_ERROR = 'feed/GET_FEEDABS_ERROR' as const;

const LOAD_MORE_FEED = 'feed/LOAD_MORE_FEED' as const;
const LOAD_MORE_FEED_SUCCESS = 'feed/LOAD_MORE_FEED_SUCCESS' as const;
const LOAD_MORE_FEED_ERROR = 'feed/LOAD_MORE_FEED_ERROR ' as const;

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

const loadMoreFeed = () => ({ type: LOAD_MORE_FEED });
const loadMoreFeedSuccess = (nextData: { feeds: Feed[]; abs: FeedAbs[] }) => ({
  type: LOAD_MORE_FEED_SUCCESS,
  payload: nextData,
});
const loadMoreFeedError = (e: Error) => ({
  type: LOAD_MORE_FEED_ERROR,
  payload: e,
});

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

export const loadMoreFeedThunk = (
  ord: string,
  category: any,
  page: number
) => async (dispatch: Dispatch) => {
  dispatch(loadMoreFeed());
  try {
    const nextFeedsData = await feedApi.getFeedAll(ord, category, page);
    const nextAbsData = await feedApi.getFeedAbs(page);
    dispatch(
      loadMoreFeedSuccess({ feeds: nextFeedsData.data, abs: nextAbsData.data })
    );
  } catch (e) {
    dispatch(loadMoreFeedError(e));
  }
};

type FeedAction =
  | ReturnType<typeof getFeeds>
  | ReturnType<typeof getFeedsSuccess>
  | ReturnType<typeof getFeedsError>
  | ReturnType<typeof getFeedAbs>
  | ReturnType<typeof getFeedAbsSuccess>
  | ReturnType<typeof getFeedAbsError>
  | ReturnType<typeof loadMoreFeed>
  | ReturnType<typeof loadMoreFeedSuccess>
  | ReturnType<typeof loadMoreFeedError>;

const initialState: FeedState = {
  feeds: asyncState.initial(),
  feedAbs: asyncState.initial(),
};

const feedReducer = (
  state: FeedState = initialState,
  action: FeedAction
): FeedState => {
  switch (action.type) {
    case GET_FEEDS:
      return {
        ...state,
        feeds: asyncState.load(),
      };
    case GET_FEEDS_SUCCESS:
      return {
        ...state,
        feeds: asyncState.success(action.payload),
      };
    case GET_FEEDS_ERROR:
      return {
        ...state,
        feeds: asyncState.error(action.payload),
      };
    case GET_FEEDABS:
      return {
        ...state,
        feedAbs: asyncState.load(),
      };
    case GET_FEEDABS_SUCCESS:
      return {
        ...state,
        feedAbs: asyncState.success(action.payload),
      };
    case GET_FEEDABS_ERROR:
      return {
        ...state,
        feedAbs: asyncState.error(action.payload),
      };
    case LOAD_MORE_FEED:
      return {
        feeds: {
          ...state.feeds,
          loading: true,
        },
        feedAbs: {
          ...state.feedAbs,
          loading: true,
        },
      };
    case LOAD_MORE_FEED_SUCCESS:
      return {
        feeds: {
          ...state.feeds,
          loading: false,
          data: {
            ...(state.feeds.data as FeedData),
            data: [
              ...(state.feeds.data as FeedData).data,
              ...action.payload.feeds,
            ],
          },
        },
        feedAbs: {
          ...state.feedAbs,
          loading: false,
          data: {
            ...(state.feedAbs.data as FeedAbsData),
            data: [
              ...(state.feedAbs.data as FeedAbsData).data,
              ...action.payload.abs,
            ],
          },
        },
      };
    case LOAD_MORE_FEED_ERROR:
      return {
        feeds: {
          ...state.feeds,
          loading: false,
          error: action.payload,
        },
        feedAbs: {
          ...state.feedAbs,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default feedReducer;
