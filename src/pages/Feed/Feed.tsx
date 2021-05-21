import React, { useCallback, useEffect, useRef, useState } from 'react';
import FeedActionbar from 'container/FeedActionbar/FeedActionbar';
import FeedList from 'container/FeedList/FeedList';
import Button from 'components/Button/Button';
import './Feed.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'modules';
import {
  getFeedAbsThunk,
  getFeedsThunk,
  loadMoreFeedThunk,
} from 'modules/feed';
import { debounce } from 'utils/debounce';
import SkeletonItem from 'components/SkeletonItem/SkeletonItem';

function Feed() {
  const { data: feedState, loading, error } = useSelector(
    (state: RootState) => state.feedState.feeds
  );
  const [sortState, setSortState] = useState('asc');
  const [feedCategory, setFeedCategory] = useState([
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

  const handleScroll = useCallback(() => {
    if (pageRef.current > 9) return;
    const {
      scrollHeight,
      clientHeight,
      scrollTop,
    } = document.scrollingElement as Element;
    console.log(scrollTop);
    if (scrollTop + clientHeight >= scrollHeight) {
      dispatch(
        loadMoreFeedThunk(sortState, feedCategory.join(''), ++pageRef.current)
      );
    }
  }, [dispatch, feedCategory, sortState]);

  useEffect(() => {
    dispatch(getFeedsThunk(sortState, feedCategory.join('')));
    dispatch(getFeedAbsThunk());
    pageRef.current = 1;
  }, [dispatch, sortState, feedCategory]);

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
        {feedState && <FeedList feedList={feedState.data} />}
        {error && <div>에러 발생 </div>}
        {loading &&
          Array.from({ length: 10 }, (_, i) => (
            <SkeletonItem key={`skeleton_${i}`} />
          ))}
      </div>
    </div>
  );
}

export default Feed;
