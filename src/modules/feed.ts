import { Dispatch } from 'redux';
import {
  Feed,
  FeedAds,
  FeedAdsData,
  FeedData,
  FeedState,
} from 'types/feedType';
import * as feedApi from 'api/feedApi';
import { asyncState } from 'utils/reducerUtils';

const GET_FEEDS = 'feed/GET_FEEDS' as const;
const GET_FEEDS_SUCCESS = 'feed/GET_FEEDS_SUCCESS' as const;
const GET_FEEDS_ERROR = 'feed/GET_FEEDS_ERROR' as const;

const GET_FEEDADS = 'feed/GET_FEEDADS' as const;
const GET_FEEDADS_SUCCESS = 'feed/GET_FEEDADS_SUCCESS' as const;
const GET_FEEDADS_ERROR = 'feed/GET_FEEDADS_ERROR' as const;

const LOAD_MORE_FEED = 'feed/LOAD_MORE_FEED' as const;
const LOAD_MORE_FEED_SUCCESS = 'feed/LOAD_MORE_FEED_SUCCESS' as const;
const LOAD_MORE_FEED_ERROR = 'feed/LOAD_MORE_FEED_ERROR ' as const;

const getFeeds = () => ({ type: GET_FEEDS });
const getFeedsSuccess = (feeds: FeedData) => ({
  type: GET_FEEDS_SUCCESS,
  payload: feeds,
});
const getFeedsError = (e: Error) => ({ type: GET_FEEDS_ERROR, payload: e });

const getFeedAds = () => ({ type: GET_FEEDADS });
const getFeedAdsSuccess = (feedAds: FeedAdsData) => ({
  type: GET_FEEDADS_SUCCESS,
  payload: feedAds,
});
const getFeedAdsError = (e: Error) => ({ type: GET_FEEDADS_ERROR, payload: e });

const loadMoreFeed = () => ({ type: LOAD_MORE_FEED });
const loadMoreFeedSuccess = (nextData: { feeds: Feed[]; ads: FeedAds[] }) => ({
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

export const getFeedAdsThunk = () => async (dispatch: Dispatch) => {
  dispatch(getFeedAds());
  try {
    const feedAdsData = await feedApi.getFeedAds();
    dispatch(getFeedAdsSuccess(feedAdsData));
  } catch (e) {
    dispatch(getFeedAdsError(e));
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
    const nextAdsData = await feedApi.getFeedAds(page);
    dispatch(
      loadMoreFeedSuccess({ feeds: nextFeedsData.data, ads: nextAdsData.data })
    );
  } catch (e) {
    dispatch(loadMoreFeedError(e));
  }
};

type FeedAction =
  | ReturnType<typeof getFeeds>
  | ReturnType<typeof getFeedsSuccess>
  | ReturnType<typeof getFeedsError>
  | ReturnType<typeof getFeedAds>
  | ReturnType<typeof getFeedAdsSuccess>
  | ReturnType<typeof getFeedAdsError>
  | ReturnType<typeof loadMoreFeed>
  | ReturnType<typeof loadMoreFeedSuccess>
  | ReturnType<typeof loadMoreFeedError>;

const initialState: FeedState = {
  feeds: asyncState.initial(),
  feedAds: asyncState.initial(),
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
    case GET_FEEDADS:
      return {
        ...state,
        feedAds: asyncState.load(),
      };
    case GET_FEEDADS_SUCCESS:
      return {
        ...state,
        feedAds: asyncState.success(action.payload),
      };
    case GET_FEEDADS_ERROR:
      return {
        ...state,
        feedAds: asyncState.error(action.payload),
      };
    case LOAD_MORE_FEED:
      return {
        feeds: {
          ...state.feeds,
          loading: true,
        },
        feedAds: {
          ...state.feedAds,
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
        feedAds: {
          ...state.feedAds,
          loading: false,
          data: {
            ...(state.feedAds.data as FeedAdsData),
            data: [
              ...(state.feedAds.data as FeedAdsData).data,
              ...action.payload.ads,
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
        feedAds: {
          ...state.feedAds,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default feedReducer;
