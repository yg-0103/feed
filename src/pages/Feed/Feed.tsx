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
  console.log(pageRef.current);
  const dispatch = useDispatch();

  const handleSort = (ord: string) => {
    setSortState(ord);
  };

  const handleChangeCategory = (category: string[]) => {
    setFeedCategory(category);
  };

  const handleScroll = useCallback(() => {
    if (pageRef.current > 10) return;
    const {
      scrollHeight,
      clientHeight,
      scrollTop,
    } = document.scrollingElement as Element;

    if (scrollTop + clientHeight >= scrollHeight * 0.9) {
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
        {loading && <div>로딩중...</div>}
        {error && <div>에러 발생 </div>}
        {feedState && <FeedList feedList={feedState.data} />}
      </div>
    </div>
  );
}

export default Feed;
