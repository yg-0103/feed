import React from 'react';
import FeedActionbar from '../../components/FeedActionbar/FeedActionbar';
import FeedList from '../../container/FeedList/FeedList';
import Button from '../../components/Button/Button';
import './Feed.scss';

function Feed() {
  return (
    <div className="Feed-container">
      <div className="Feed-btn-container">
        <Button>로그인</Button>
      </div>
      <div className="Feed-FeedList-container">
        <FeedActionbar />
        <FeedList />
      </div>
    </div>
  );
}

export default Feed;
