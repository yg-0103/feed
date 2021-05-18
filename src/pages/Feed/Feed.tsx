import React, { useEffect, useState } from 'react';
import FeedActionbar from '../../components/FeedActionbar/FeedActionbar';
import FeedList from '../../container/FeedList/FeedList';
import Button from '../../components/Button/Button';
import './Feed.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../module';
import { getFeedAbsThunk, getFeedsThunk } from '../../module/feed';

function Feed() {
  const { data: feedState, loading, error } = useSelector(
    (state: RootState) => state.feedState.feeds
  );

  const [sortState, setSortState] = useState('asc');
  const dispatch = useDispatch();

  const handleSetSort = (ord: string) => {
    setSortState(ord);
  };

  useEffect(() => {
    dispatch(getFeedsThunk(sortState));
    dispatch(getFeedAbsThunk());
  }, [dispatch, sortState]);

  return (
    <div className="Feed-container">
      <div className="Feed-btn-container">
        <Button>로그인</Button>
      </div>
      <div className="Feed-FeedList-container">
        <FeedActionbar handleSetSort={handleSetSort} />
        {loading && <div>로딩중...</div>}
        {error && <div>에러 발생 </div>}
        {feedState && <FeedList feedList={feedState.data} />}
      </div>
    </div>
  );
}

export default Feed;
