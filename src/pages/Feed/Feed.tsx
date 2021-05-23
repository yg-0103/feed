import React, { useCallback, useEffect, useRef } from 'react';
import FeedActionbar from 'container/FeedActionbar/FeedActionbar';
import FeedList from 'container/FeedList/FeedList';
import Button from 'components/Button/Button';
import './Feed.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import {
  getFeedAdsThunk,
  getFeedsThunk,
  loadMoreFeedThunk,
} from 'modules/feed';
import { debounce } from 'utils/debounce';
import SkeletonItem from 'components/SkeletonItem/SkeletonItem';
import { limit } from 'constant';
import { useLocalstorage } from 'hooks/useLocalstorage';
import { getFeedCategoryThunk } from 'modules/feedCategory';
import { getCategoryId } from 'utils/getCategoryId';

function Feed() {
  const { data: feedState, loading } = useSelector(
    (state: RootState) => state.feedState.feeds
  );

  const { data: feedCategoryState } = useSelector(
    (state: RootState) => state.feedCategoryState
  );
  const [sortState, setSortState] = useLocalstorage('sort', 'asc');
  const [feedCategory, setFeedCategory] = useLocalstorage('category', [
    '&category[]=1',
    '&category[]=2',
    '&category[]=3',
  ]);

  const pageRef = useRef(1);
  const dispatch = useDispatch();

  const handleSort = (ord: string) => {
    setSortState(ord);
  };

  const handleChangeCategory = (category: string[]) => {
    setFeedCategory(prevCategory =>
      category.length ? category : prevCategory
    );
  };

  const handleScroll = useCallback(async () => {
    if (!feedState) return;
    if (pageRef.current >= feedState.last_page) return;

    const {
      scrollHeight,
      clientHeight,
      scrollTop,
    } = document.scrollingElement as Element;
    if (scrollTop + clientHeight >= scrollHeight) {
      dispatch(
        loadMoreFeedThunk(sortState, feedCategory.join(''), ++pageRef.current)
      );
    }
  }, [dispatch, feedCategory, sortState, feedState]);

  useEffect(() => {
    dispatch(getFeedsThunk(sortState, feedCategory.join('')));

    pageRef.current = 1;
  }, [dispatch, sortState, feedCategory]);

  useEffect(() => {
    dispatch(getFeedAdsThunk());
    dispatch(getFeedCategoryThunk());
  }, [dispatch]);

  useEffect(() => {
    document.onscroll = debounce(handleScroll, 300);
    return () => {
      document.onscroll = null;
    };
  }, [handleScroll]);

  return (
    <div className="Feed-container">
      <div className="Feed-btn-container">
        <Button>로그인</Button>
      </div>
      <div className="Feed-FeedList-container">
        <FeedActionbar
          handleSort={handleSort}
          handleChangeCategory={handleChangeCategory}
        />
        <div className="Feed-FeedCategory-container">
          {feedCategoryState &&
            feedCategory.map(categoryId => (
              <span key={categoryId}>
                {feedCategoryState.category[getCategoryId(categoryId) - 1].name}
              </span>
            ))}
        </div>
        {feedState && <FeedList feedList={feedState.data} />}
        {loading &&
          Array.from({ length: limit }, (_, i) => (
            <SkeletonItem key={`skeleton_${i}`} />
          ))}
      </div>
    </div>
  );
}

export default Feed;
